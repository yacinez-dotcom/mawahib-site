/* Bloc B4 — Glossaire — v1.0 — dépendances : B0 Socle v1.0, B1 Routeur v1.0 (route « glossaire »), B3 Fiche v1.0 (attribut data-terme, événement fiche:affichee) — événements émis : vue:activer (vue « glossaire ») — événements écoutés : route:change, fiche:affichee */

/*
 * 1. Vue « glossaire » (#/glossaire, #/glossaire/<terme>) :
 *    - tous les termes de data/glossaire.js, complétés par les termes des fiches qui n'y figurent pas encore
 *      (définition reprise de la fiche ; signalé dans la console pour que le glossaire soit complété) ;
 *    - classement alphabétique arabe (voyelles et article ال ignorés), regroupé par lettre ;
 *    - filtre local (arabe avec ou sans voyelles, transcription, définition) ;
 *    - pour chaque terme : les fiches qui l'emploient ;
 *    - #/glossaire/<terme> met le terme en évidence.
 * 2. Infobulle sur tout élément [data-terme] d'une fiche (survol, appui tactile) :
 *    écoute par délégation sur le document, affichage dans un élément propre à B4 ; le DOM de B3 n'est jamais modifié.
 * 3. Lien « Glossaire » dans la zone d'outils de l'en-tête.
 */

(function () {
  'use strict';

  var vueEl, outilsEl, bulleEl;
  var ficheCourante = null;
  var entrees = [];          // { ar, translit, def, cle, lettre, fiches: [{id, titre}], source }
  var minuterieMasquer = null, minuterieAfficher = null;
  var cibleBulle = null;

  /* ----------------------------------------------------------------------
     Utilitaires
     ---------------------------------------------------------------------- */

  function el(tag, attrs, enfants) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') n.className = v;
        else if (k === 'text') n.textContent = v;
        else n.setAttribute(k, v === true ? '' : v);
      });
    }
    (enfants || []).forEach(function (e) {
      if (e === null || e === undefined || e === false) return;
      n.appendChild(typeof e === 'string' ? document.createTextNode(e) : e);
    });
    return n;
  }

  function texte(v) { return typeof v === 'string' && v.trim() !== '' ? v.trim() : null; }
  function pluriel(n, s, p) { return n + ' ' + (n > 1 ? p : s); }

  /* Arabe sans voyelles ni tatweel, formes de alif unifiées */
  function normaliserArabe(s) {
    return String(s || '')
      .replace(/[ً-ٰٟۖ-ۭـ]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      .trim();
  }

  /* Clé de tri : sans l'article ال */
  function cleTri(ar) {
    var n = normaliserArabe(ar);
    return n.length > 3 && n.indexOf('ال') === 0 ? n.slice(2) : n;
  }

  function normaliserLatin(s) {
    return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/['’ʿʾ`]/g, '').toLowerCase().trim();
  }

  var collateur = (typeof Intl !== 'undefined' && Intl.Collator) ? new Intl.Collator('ar') : null;
  function comparer(a, b) { return collateur ? collateur.compare(a, b) : (a < b ? -1 : a > b ? 1 : 0); }

  function lienLecon(id) { return '#/lecon/' + encodeURIComponent(id); }
  function lienTerme(ar) { return '#/glossaire/' + encodeURIComponent(ar); }

  /* ----------------------------------------------------------------------
     Construction de l'index des termes
     ---------------------------------------------------------------------- */

  function construireIndex() {
    var parAr = new Map();

    App.data.termes().forEach(function (t) {
      parAr.set(t.ar, { ar: t.ar, translit: t.translit, def: t.def, fiches: [], source: 'glossaire' });
    });

    var manquants = [];
    App.data.fiches({ type: 'masala' }).forEach(function (f) {
      (Array.isArray(f.termes) ? f.termes : []).forEach(function (t) {
        if (!t || !texte(t.ar)) return;
        var e = parAr.get(t.ar);
        if (!e) {
          e = { ar: t.ar, translit: t.translit, def: t.def, fiches: [], source: 'fiche' };
          parAr.set(t.ar, e);
          manquants.push(t.ar + ' (' + f.id + ')');
        }
        if (!e.fiches.some(function (x) { return x.id === f.id; })) {
          e.fiches.push({ id: f.id, titre: texte(f.titre) || f.id });
        }
      });
    });

    if (manquants.length) {
      console.warn('[B4] Termes employés dans des fiches mais absents de data/glossaire.js : ' + manquants.join(', ') +
        '. Ils sont affichés avec la définition de la fiche ; ajoutez-les au glossaire.');
    }

    entrees = Array.from(parAr.values()).map(function (e) {
      e.cle = cleTri(e.ar);
      e.lettre = e.cle.charAt(0) || '؟';
      e.recherche = [normaliserArabe(e.ar), normaliserLatin(e.translit), normaliserLatin(e.def)].join(' ');
      return e;
    }).sort(function (a, b) { return comparer(a.cle, b.cle) || comparer(a.ar, b.ar); });
  }

  function trouverEntree(valeur) {
    if (!texte(valeur)) return null;
    var exact = entrees.find(function (e) { return e.ar === valeur; });
    if (exact) return exact;
    var na = normaliserArabe(valeur), nl = normaliserLatin(valeur);
    return entrees.find(function (e) { return normaliserArabe(e.ar) === na; }) ||
      entrees.find(function (e) { return nl && normaliserLatin(e.translit) === nl; }) || null;
  }

  /* Définition pour l'infobulle : glossaire, sinon termes de la fiche affichée */
  function definitionPour(ar) {
    var e = entrees.find(function (x) { return x.ar === ar; });
    if (e) return e;
    var f = ficheCourante ? App.data.fiche(ficheCourante) : null;
    var t = f && Array.isArray(f.termes) ? f.termes.find(function (x) { return x && x.ar === ar; }) : null;
    return t ? { ar: t.ar, translit: t.translit, def: t.def } : null;
  }

  /* ----------------------------------------------------------------------
     Vue « glossaire »
     ---------------------------------------------------------------------- */

  var listeEl, compteEl, filtreEl, messageEl;

  function construireVue() {
    vueEl.textContent = '';
    filtreEl = el('input', {
      class: 'b4-filtre', type: 'search', id: 'b4-filtre', autocomplete: 'off', spellcheck: 'false',
      placeholder: 'Filtrer : arabe, transcription ou définition'
    });
    compteEl = el('p', { class: 'b4-compte', 'aria-live': 'polite' });
    messageEl = el('p', { class: 'b4-message', hidden: true });
    listeEl = el('div', { class: 'b4-liste' });

    vueEl.appendChild(el('header', { class: 'b4-entete' }, [
      el('h1', { class: 'b4-titre', id: 'b4-titre', tabindex: '-1', text: 'Glossaire' }),
      el('p', { class: 'b4-intro', text: 'Les termes techniques employés dans les fiches, avec leur transcription et leur définition.' })
    ]));

    if (!entrees.length) {
      vueEl.appendChild(el('p', { class: 'b4-vide', text: 'Le glossaire se remplira au fur et à mesure de la publication des leçons.' }));
      return;
    }

    vueEl.appendChild(el('div', { class: 'b4-barre' }, [
      el('label', { class: 'b4-filtre-label', for: 'b4-filtre', text: 'Filtrer les termes' }),
      filtreEl,
      compteEl
    ]));
    vueEl.appendChild(messageEl);
    vueEl.appendChild(listeEl);

    filtreEl.addEventListener('input', function () { remplirListe(filtreEl.value); });
    remplirListe('');
  }

  function remplirListe(filtre) {
    var nl = normaliserLatin(filtre), na = normaliserArabe(filtre);
    var visibles = entrees.filter(function (e) {
      if (!nl && !na) return true;
      return (na && e.recherche.indexOf(na) >= 0) || (nl && e.recherche.indexOf(nl) >= 0);
    });

    listeEl.textContent = '';
    compteEl.textContent = (nl || na)
      ? pluriel(visibles.length, 'terme trouvé', 'termes trouvés') + ' sur ' + entrees.length
      : pluriel(entrees.length, 'terme', 'termes');

    if (!visibles.length) {
      listeEl.appendChild(el('p', { class: 'b4-vide', text: 'Aucun terme ne correspond à ce filtre.' }));
      return;
    }

    var groupe = null, dl = null;
    visibles.forEach(function (e) {
      if (e.lettre !== groupe) {
        groupe = e.lettre;
        dl = el('dl', { class: 'b4-groupe-liste' });
        listeEl.appendChild(el('section', { class: 'b4-groupe' }, [
          el('h2', { class: 'b4-lettre', lang: 'ar', dir: 'rtl', text: groupe }),
          dl
        ]));
      }
      dl.appendChild(elementEntree(e));
    });
  }

  function elementEntree(e) {
    var usages = e.fiches.length
      ? el('p', { class: 'b4-usages' }, [el('span', { class: 'b4-usages-label', text: 'Employé dans : ' })].concat(
          e.fiches.reduce(function (acc, f, i) {
            if (i) acc.push(', ');
            acc.push(el('a', { href: lienLecon(f.id), text: f.titre }));
            return acc;
          }, [])))
      : null;
    return el('div', { class: 'b4-entree', 'data-b4-ar': e.ar }, [
      el('dt', { class: 'b4-entree-tete' }, [
        el('span', { class: 'b4-ar', lang: 'ar', dir: 'rtl', text: e.ar }),
        texte(e.translit) ? el('span', { class: 'b4-translit', text: '(' + e.translit + ')' }) : null
      ]),
      el('dd', { class: 'b4-def' }, [
        el('p', { class: 'b4-def-texte', text: texte(e.def) || 'Définition non renseignée.' }),
        usages
      ])
    ]);
  }

  function afficherVue(terme) {
    if (filtreEl && filtreEl.value) { filtreEl.value = ''; remplirListe(''); }
    if (messageEl) { messageEl.hidden = true; messageEl.textContent = ''; }
    Array.prototype.forEach.call(vueEl.querySelectorAll('.b4-entree--cible'), function (n) {
      n.classList.remove('b4-entree--cible');
    });

    App.bus.emit('vue:activer', { vue: 'glossaire' });

    var cible = null;
    if (texte(terme)) {
      var e = trouverEntree(terme);
      if (e) {
        cible = Array.prototype.find.call(vueEl.querySelectorAll('.b4-entree'), function (n) {
          return n.getAttribute('data-b4-ar') === e.ar;
        });
      }
      if (cible) {
        cible.classList.add('b4-entree--cible');
        cible.scrollIntoView({ block: 'center' });
      } else if (messageEl) {
        messageEl.hidden = false;
        messageEl.textContent = 'Le terme « ' + terme + ' » ne figure pas dans le glossaire.';
      }
    }
    var titre = vueEl.querySelector('#b4-titre');
    if (titre && !cible) { try { titre.focus({ preventScroll: true }); } catch (err) { titre.focus(); } }
  }

  /* ----------------------------------------------------------------------
     Infobulle
     ---------------------------------------------------------------------- */

  function masquerBulle() {
    clearTimeout(minuterieAfficher);
    clearTimeout(minuterieMasquer);
    bulleEl.hidden = true;
    cibleBulle = null;
  }

  function positionner(cible) {
    var r = cible.getBoundingClientRect();
    var marge = 8;
    bulleEl.style.left = '0px';
    bulleEl.style.top = '0px';
    var b = bulleEl.getBoundingClientRect();
    var x = r.left + r.width / 2 - b.width / 2;
    x = Math.max(marge, Math.min(x, window.innerWidth - b.width - marge));
    var y = r.bottom + marge;
    var dessus = false;
    if (y + b.height > window.innerHeight - marge && r.top - b.height - marge > marge) {
      y = r.top - b.height - marge;
      dessus = true;
    }
    bulleEl.style.left = Math.round(x) + 'px';
    bulleEl.style.top = Math.round(y) + 'px';
    bulleEl.classList.toggle('b4-bulle--dessus', dessus);
  }

  function afficherBulle(cible) {
    var ar = cible.getAttribute('data-terme');
    var d = definitionPour(ar);
    if (!d) return;
    clearTimeout(minuterieMasquer);
    cibleBulle = cible;
    bulleEl.textContent = '';
    bulleEl.appendChild(el('div', { class: 'b4-bulle-tete' }, [
      el('span', { class: 'b4-bulle-ar', lang: 'ar', dir: 'rtl', text: d.ar }),
      texte(d.translit) ? el('span', { class: 'b4-bulle-translit', text: '(' + d.translit + ')' }) : null
    ]));
    bulleEl.appendChild(el('p', { class: 'b4-bulle-def', text: texte(d.def) || 'Définition non renseignée.' }));
    bulleEl.appendChild(el('a', { class: 'b4-bulle-lien', href: lienTerme(d.ar), text: 'Voir dans le glossaire →' }));
    bulleEl.hidden = false;
    positionner(cible);
  }

  function cibleTerme(n) {
    var t = n && n.closest ? n.closest('[data-terme]') : null;
    /* Seuls les termes des fiches déclenchent l'infobulle */
    return t && t.closest('[data-vue="fiche"]') ? t : null;
  }

  function installerBulle() {
    bulleEl = el('div', { class: 'b4-bulle', role: 'tooltip', id: 'b4-bulle', hidden: true });
    App.emplacement('b4', 'pied').appendChild(bulleEl);

    document.addEventListener('mouseover', function (ev) {
      var t = cibleTerme(ev.target);
      if (t) {
        clearTimeout(minuterieMasquer);
        if (t === cibleBulle && !bulleEl.hidden) return;
        clearTimeout(minuterieAfficher);
        minuterieAfficher = setTimeout(function () { afficherBulle(t); }, 120);
      } else if (bulleEl.contains(ev.target)) {
        clearTimeout(minuterieMasquer);
      }
    });

    document.addEventListener('mouseout', function (ev) {
      var t = cibleTerme(ev.target);
      if (!t && !bulleEl.contains(ev.target)) return;
      var vers = ev.relatedTarget;
      if (vers && (bulleEl.contains(vers) || cibleTerme(vers) === cibleBulle)) return;
      clearTimeout(minuterieAfficher);
      clearTimeout(minuterieMasquer);
      minuterieMasquer = setTimeout(masquerBulle, 200);
    });

    /* Appui (écrans tactiles) et clic : bascule l'infobulle */
    document.addEventListener('click', function (ev) {
      var t = cibleTerme(ev.target);
      if (t) {
        if (cibleBulle === t && !bulleEl.hidden) masquerBulle();
        else { clearTimeout(minuterieAfficher); afficherBulle(t); }
        return;
      }
      if (!bulleEl.hidden && !bulleEl.contains(ev.target)) masquerBulle();
    });

    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !bulleEl.hidden) masquerBulle(); });
    window.addEventListener('scroll', function () { if (!bulleEl.hidden) masquerBulle(); }, { passive: true, capture: true });
    window.addEventListener('resize', function () { if (!bulleEl.hidden) masquerBulle(); });
  }

  /* ----------------------------------------------------------------------
     Initialisation
     ---------------------------------------------------------------------- */

  App.blocks.Glossaire = {
    init: function () {
      construireIndex();

      vueEl = App.vue('b4', 'glossaire');
      vueEl.classList.add('b4-vue');
      construireVue();

      outilsEl = App.emplacement('b4', 'outils');
      outilsEl.appendChild(el('a', { class: 'b4-lien-outil', href: '#/glossaire', text: 'Glossaire' }));

      installerBulle();

      App.bus.on('route:change', function (r) {
        masquerBulle();
        var actif = !!(r && r.nom === 'glossaire');
        var lien = outilsEl.querySelector('.b4-lien-outil');
        if (actif) lien.setAttribute('aria-current', 'page'); else lien.removeAttribute('aria-current');
        if (actif) afficherVue(r.params ? r.params.terme : null);
      });

      App.bus.on('fiche:affichee', function (d) { ficheCourante = d ? d.id : null; });
    }
  };
})();
