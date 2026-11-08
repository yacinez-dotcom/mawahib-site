/* Bloc B7 — Recherche — v1.0 — dépendances : B0 Socle v1.0, B1 Routeur v1.0 (route « recherche ») — événements émis : vue:activer (vue « recherche ») — événements écoutés : route:change */

/*
 * Recherche plein texte dans les fiches publiées et le glossaire.
 * - Français sans accents ni apostrophes (« ablution » trouve « Ablution ») ;
 * - arabe avec ou sans voyelles, formes de alif unifiées (« وضوء » trouve « وُضُوء ») ;
 * - transcriptions (« woudou » trouve « woudoû' », « tahara » trouve « Ṭahāra »).
 * Tous les mots de la requête doivent figurer dans la fiche (ET). Classement par pertinence (titre et règle
 * pratique d'abord), puis ordre du cours. Les réponses des quiz ne sont pas indexées.
 * Vue « recherche » (#/recherche, #/recherche/<texte>) : champ de saisie, résultats au fil de la frappe,
 * extrait surligné. L'adresse suit la saisie (history.replaceState, sans déclencher de navigation).
 * Lien « Rechercher » dans la zone d'outils ; raccourci clavier « / ».
 */

(function () {
  'use strict';

  var MAX_RESULTATS = 50;
  var RAYON_EXTRAIT = 70;
  var RE_ARABE = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+(?:[  ]+[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+)*/g;

  /* Champs indexés, avec leur poids et leur libellé dans les résultats */
  var CHAMPS = [
    { cle: 'titre', poids: 6, label: 'Titre' },
    { cle: 'titre_ar', poids: 6, label: 'Titre arabe' },
    { cle: 'regle_pratique', poids: 5, label: 'Règle pratique' },
    { cle: 'termes', poids: 4, label: 'Vocabulaire' },
    { cle: 'matn', poids: 3, label: 'Texte de Khalīl' },
    { cle: 'objectif', poids: 2, label: 'Objectif' },
    { cle: 'explication', poids: 2, label: 'Explication' },
    { cle: 'aqwal', poids: 2, label: 'Avis' },
    { cle: 'muatamad', poids: 1, label: 'Muʿtamad' },
    { cle: 'tarjih_hattab', poids: 1, label: 'Préférence d\'al-Ḥaṭṭāb' },
    { cle: 'tanbihat', poids: 1, label: 'Remarques' },
    { cle: 'divergences', poids: 1, label: 'Divergences' },
    { cle: 'exemple', poids: 1, label: 'Exemple' },
    { cle: 'erreurs_frequentes', poids: 1, label: 'Erreurs fréquentes' },
    { cle: 'qualification', poids: 1, label: 'Qualification' }
  ];

  var index = [];          // { type, id, titre, lien, chemin, ordre, champs: [{label, poids, brut, norm}] }
  var vueEl, champEl, resultatsEl, resumeEl, lienEl;
  var minuterie = null;
  var routeActive = false;

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

  function texte(v) { return typeof v === 'string' && v.trim() !== '' ? v : null; }
  function pluriel(n, s, p) { return n + ' ' + (n > 1 ? p : s); }

  /*
   * Normalisation caractère par caractère, avec la carte des positions d'origine
   * (pour surligner l'extrait dans le texte non normalisé).
   */
  function normaliserCar(c) {
    if (/[ً-ٰٟۖ-ۭـ]/.test(c)) return '';      // voyelles arabes, tatweel
    if (/['’ʿʾ`ʼ]/.test(c)) return '';                                       // apostrophes, ʿayn, hamza latins
    if (/[أإآٱ]/.test(c)) return 'ا';
    if (c === 'ى') return 'ي';
    if (c === 'ة') return 'ه';
    if (/\s/.test(c)) return ' ';
    return c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function normaliserAvecCarte(s) {
    var n = '', carte = [];
    var str = String(s || '');
    for (var i = 0; i < str.length; i++) {
      var r = normaliserCar(str[i]);
      for (var j = 0; j < r.length; j++) {
        if (r[j] === ' ' && n.charAt(n.length - 1) === ' ') continue;
        n += r[j];
        carte.push(i);
      }
    }
    return { n: n, carte: carte };
  }

  function normaliser(s) { return normaliserAvecCarte(s).n; }

  function motsRequete(q) {
    return normaliser(q).split(' ').map(function (m) { return m.trim(); }).filter(function (m) { return m.length > 0; });
  }

  function lienLecon(id) { return '#/lecon/' + encodeURIComponent(id); }

  /* ----------------------------------------------------------------------
     Index
     ---------------------------------------------------------------------- */

  function valeurChamp(f, cle) {
    var v = f[cle];
    if (cle === 'aqwal') {
      return Array.isArray(v) ? v.filter(Boolean).map(function (a) { return [a.auteur, a.avis].filter(texte).join(' : '); }).join('\n') : '';
    }
    if (cle === 'termes') {
      return Array.isArray(v) ? v.filter(Boolean).map(function (t) { return [t.ar, t.translit, t.def].filter(texte).join(' — '); }).join('\n') : '';
    }
    if (cle === 'qualification') {
      return v && typeof v === 'object' && texte(v.effet_si_omis) ? v.effet_si_omis : '';
    }
    if (Array.isArray(v)) return v.filter(texte).join('\n');
    return texte(v) || '';
  }

  function trouver(noeuds, id) {
    return (Array.isArray(noeuds) ? noeuds : []).find(function (n) { return n && n.id === id; }) || null;
  }

  function chemin(f) {
    var plan = App.data.plan();
    var k = plan ? trouver(plan.kutub, f.kitab) : null;
    var b = k ? trouver(k.abwab, f.kitab + '-' + f.bab) : null;
    var s = b ? trouver(b.fusul, f.kitab + '-' + f.bab + '-' + f.fasl) : null;
    return [
      k && texte(k.titre) ? k.titre : f.kitab,
      b && texte(b.titre) ? b.titre : 'Bāb ' + f.bab,
      s && texte(s.titre) ? s.titre : 'Faṣl ' + f.fasl
    ].join(' › ');
  }

  function construireIndex() {
    index = [];
    App.data.fiches().forEach(function (f, ordre) {
      var champs = [];
      if (f.type === 'synthese') {
        var t = texte(f.titre) || f.id;
        champs.push({ label: 'Titre', poids: 6, brut: t, norm: normaliser(t) });
      } else {
        CHAMPS.forEach(function (c) {
          var brut = valeurChamp(f, c.cle);
          if (brut) champs.push({ label: c.label, poids: c.poids, brut: brut, norm: normaliser(brut) });
        });
      }
      index.push({
        type: f.type === 'synthese' ? 'synthese' : 'fiche',
        id: f.id,
        titre: f.type === 'synthese' ? 'Synthèse : ' + (texte(f.titre) || f.id) : (texte(f.titre) || f.id),
        titreAr: f.type === 'synthese' ? null : texte(f.titre_ar),
        lien: lienLecon(f.id),
        chemin: chemin(f),
        ordre: ordre,
        champs: champs
      });
    });

    var vus = new Set();
    var termes = App.data.termes().slice();
    App.data.fiches({ type: 'masala' }).forEach(function (f) {
      (Array.isArray(f.termes) ? f.termes : []).forEach(function (t) { if (t && texte(t.ar)) termes.push(t); });
    });
    termes.forEach(function (t, i) {
      if (!t || !texte(t.ar) || vus.has(t.ar)) return;
      vus.add(t.ar);
      var champs = [
        { label: 'Terme', poids: 6, brut: t.ar, norm: normaliser(t.ar) },
        texte(t.translit) ? { label: 'Transcription', poids: 6, brut: t.translit, norm: normaliser(t.translit) } : null,
        texte(t.def) ? { label: 'Définition', poids: 2, brut: t.def, norm: normaliser(t.def) } : null
      ].filter(Boolean);
      index.push({
        type: 'terme',
        id: t.ar,
        titre: t.ar,
        translit: texte(t.translit),
        def: texte(t.def),
        lien: '#/glossaire/' + encodeURIComponent(t.ar),
        chemin: 'Glossaire',
        ordre: 100000 + i,
        champs: champs
      });
    });
  }

  /* ----------------------------------------------------------------------
     Recherche
     ---------------------------------------------------------------------- */

  function rechercher(q) {
    var mots = motsRequete(q);
    if (!mots.length || mots.join('').length < 2) return { mots: mots, resultats: [] };

    var resultats = [];
    index.forEach(function (doc) {
      var score = 0;
      for (var i = 0; i < mots.length; i++) {
        var m = mots[i], poidsMot = 0;
        doc.champs.forEach(function (c) {
          var pos = c.norm.indexOf(m);
          if (pos < 0) return;
          var bonus = (pos === 0 || c.norm.charAt(pos - 1) === ' ') ? 1.5 : 1;
          if (c.poids * bonus > poidsMot) poidsMot = c.poids * bonus;
        });
        if (!poidsMot) return;           /* un mot absent : document écarté */
        score += poidsMot;
      }
      if (doc.type === 'terme') score += 0.5;

      /* Champ de l'extrait : celui qui contient le plus de mots de la requête, puis le plus important (titres exclus) */
      var champ = null, meilleur = -1;
      doc.champs.forEach(function (c) {
        if (/^Titre/.test(c.label)) return;
        var n = mots.filter(function (m) { return c.norm.indexOf(m) >= 0; }).length;
        if (!n) return;
        var valeur = n * 100 + c.poids;
        if (valeur > meilleur) { meilleur = valeur; champ = c; }
      });
      resultats.push({ doc: doc, score: score, champ: champ });
    });

    resultats.sort(function (a, b) { return (b.score - a.score) || (a.doc.ordre - b.doc.ordre); });
    return { mots: mots, resultats: resultats };
  }

  /* ----------------------------------------------------------------------
     Rendu avec surlignage
     ---------------------------------------------------------------------- */

  /* Texte pouvant contenir de l'arabe : segments arabes isolés (lang="ar", dir="rtl") */
  function riche(s) {
    var frag = document.createDocumentFragment();
    var str = String(s), dernier = 0;
    str.replace(RE_ARABE, function (m, i) {
      if (i > dernier) frag.appendChild(document.createTextNode(str.slice(dernier, i)));
      frag.appendChild(el('span', { class: 'b7-ar', lang: 'ar', dir: 'rtl', text: m }));
      dernier = i + m.length;
      return m;
    });
    if (dernier < str.length) frag.appendChild(document.createTextNode(str.slice(dernier)));
    return frag;
  }

  /* Plages [début, fin[ des mots trouvés dans le texte d'origine */
  function plages(brut, mots) {
    var nc = normaliserAvecCarte(brut);
    var res = [];
    mots.forEach(function (m) {
      var depart = 0, pos;
      while (m && (pos = nc.n.indexOf(m, depart)) >= 0) {
        var debut = nc.carte[pos];
        var fin = nc.carte[pos + m.length - 1] + 1;
        while (fin < brut.length && normaliserCar(brut[fin]) === '' && !/['’ʿʾ`ʼ]/.test(brut[fin])) fin++;
        res.push([debut, fin]);
        depart = pos + m.length;
      }
    });
    res.sort(function (a, b) { return a[0] - b[0]; });
    var fusion = [];
    res.forEach(function (r) {
      var d = fusion[fusion.length - 1];
      if (d && r[0] <= d[1]) d[1] = Math.max(d[1], r[1]); else fusion.push(r.slice());
    });
    return fusion;
  }

  function surligner(brut, mots) {
    var frag = document.createDocumentFragment();
    var curseur = 0;
    plages(brut, mots).forEach(function (p) {
      if (p[0] > curseur) frag.appendChild(riche(brut.slice(curseur, p[0])));
      var mark = el('mark', { class: 'b7-surligne' });
      mark.appendChild(riche(brut.slice(p[0], p[1])));
      frag.appendChild(mark);
      curseur = p[1];
    });
    if (curseur < brut.length) frag.appendChild(riche(brut.slice(curseur)));
    return frag;
  }

  function extrait(brut, mots) {
    var p = plages(brut, mots);
    var centre = p.length ? p[0][0] : 0;
    var debut = Math.max(0, centre - RAYON_EXTRAIT);
    var fin = Math.min(brut.length, centre + RAYON_EXTRAIT * 2);
    if (debut > 0) { var esp = brut.indexOf(' ', debut); if (esp > 0 && esp < centre) debut = esp + 1; }
    if (fin < brut.length) { var esp2 = brut.lastIndexOf(' ', fin); if (esp2 > centre) fin = esp2; }
    var morceau = brut.slice(debut, fin).replace(/\s*\n\s*/g, ' · ');
    var frag = document.createDocumentFragment();
    if (debut > 0) frag.appendChild(document.createTextNode('… '));
    frag.appendChild(surligner(morceau, mots));
    if (fin < brut.length) frag.appendChild(document.createTextNode(' …'));
    return frag;
  }

  var ETIQUETTES = { fiche: 'Fiche', synthese: 'Synthèse', terme: 'Glossaire' };

  function afficherResultats(q) {
    var r = rechercher(q);
    resultatsEl.textContent = '';

    if (!r.mots.length || r.mots.join('').length < 2) {
      resumeEl.textContent = index.length
        ? 'Saisissez au moins deux caractères. L\'arabe peut être tapé avec ou sans voyelles.'
        : 'Aucun contenu n\'est encore publié : la recherche portera sur les fiches et le glossaire.';
      return;
    }

    var total = r.resultats.length;
    resumeEl.textContent = total
      ? pluriel(total, 'résultat', 'résultats') + (total > MAX_RESULTATS ? ' — les ' + MAX_RESULTATS + ' plus pertinents sont affichés' : '')
      : 'Aucun résultat. Essayez un autre mot, ou l\'arabe sans voyelles.';

    var ol = el('ol', { class: 'b7-liste' });
    r.resultats.slice(0, MAX_RESULTATS).forEach(function (res) {
      var d = res.doc;
      var titre = el('a', { class: 'b7-titre', href: d.lien });
      titre.appendChild(surligner(d.titre, r.mots));

      var tete = [titre];
      var corps = [];
      if (d.type === 'terme') {
        titre.setAttribute('lang', 'ar');
        titre.setAttribute('dir', 'rtl');
        if (d.translit) tete.push(el('span', { class: 'b7-translit' }, [surligner('(' + d.translit + ')', r.mots)]));
        if (d.def) corps.push(el('p', { class: 'b7-extrait' }, [surligner(d.def, r.mots)]));
      } else {
        if (d.titreAr) corps.push(el('p', { class: 'b7-titre-ar', lang: 'ar', dir: 'rtl' }, [surligner(d.titreAr, r.mots)]));
        if (res.champ) {
          corps.push(el('p', { class: 'b7-extrait' }, [
            el('span', { class: 'b7-champ', text: res.champ.label + ' : ' }),
            extrait(res.champ.brut, r.mots)
          ]));
        }
      }

      ol.appendChild(el('li', { class: 'b7-resultat b7-resultat--' + d.type }, [
        el('p', { class: 'b7-meta' }, [
          el('span', { class: 'b7-type', text: ETIQUETTES[d.type] }),
          d.type === 'terme' ? null : el('span', { class: 'b7-chemin', text: d.chemin })
        ]),
        el('div', { class: 'b7-tete' }, tete)
      ].concat(corps)));
    });
    resultatsEl.appendChild(ol);
  }

  /* ----------------------------------------------------------------------
     Vue et navigation
     ---------------------------------------------------------------------- */

  function construireVue() {
    champEl = el('input', {
      class: 'b7-champ-saisie', id: 'b7-saisie', type: 'search', autocomplete: 'off', spellcheck: 'false',
      placeholder: 'Mot français, arabe (avec ou sans voyelles) ou transcription', enterkeyhint: 'search'
    });
    resumeEl = el('p', { class: 'b7-resume', role: 'status', 'aria-live': 'polite' });
    resultatsEl = el('div', { class: 'b7-resultats' });

    vueEl.appendChild(el('header', { class: 'b7-entete' }, [
      el('h1', { class: 'b7-h1', text: 'Rechercher dans le cours' }),
      el('form', { class: 'b7-formulaire', role: 'search' }, [
        el('label', { class: 'b7-label', for: 'b7-saisie', text: 'Rechercher' }),
        champEl
      ]),
      resumeEl
    ]));
    vueEl.appendChild(resultatsEl);

    vueEl.querySelector('form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      clearTimeout(minuterie);
      lancer(champEl.value);
    });
    champEl.addEventListener('input', function () {
      clearTimeout(minuterie);
      minuterie = setTimeout(function () { lancer(champEl.value); }, 150);
    });
  }

  function lancer(q) {
    afficherResultats(q);
    var cible = q.trim() ? '#/recherche/' + encodeURIComponent(q.trim()) : '#/recherche';
    if (window.location.hash !== cible) {
      try { history.replaceState(null, '', cible); } catch (e) { /* adresse non mise à jour : sans conséquence */ }
    }
  }

  function focaliserSaisie() {
    try { champEl.focus({ preventScroll: true }); } catch (e) { champEl.focus(); }
    var n = champEl.value.length;
    try { champEl.setSelectionRange(n, n); } catch (e) { /* type search : sans conséquence */ }
  }

  function icone() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('class', 'b7-lien-icone');
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    c.setAttribute('d', 'M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM21 21l-5.2-5.2');
    c.setAttribute('fill', 'none');
    c.setAttribute('stroke', 'currentColor');
    c.setAttribute('stroke-width', '2');
    c.setAttribute('stroke-linecap', 'round');
    svg.appendChild(c);
    return svg;
  }

  App.blocks.Recherche = {
    init: function () {
      construireIndex();

      vueEl = App.vue('b7', 'recherche');
      vueEl.classList.add('b7-vue');
      construireVue();

      lienEl = el('a', { class: 'b7-lien-outil', href: '#/recherche', 'aria-label': 'Rechercher dans le cours (raccourci : /)' }, [
        icone(), el('span', { class: 'b7-lien-texte', text: 'Rechercher' })
      ]);
      App.emplacement('b7', 'outils').appendChild(lienEl);

      App.bus.on('route:change', function (r) {
        routeActive = !!(r && r.nom === 'recherche');
        if (routeActive) lienEl.setAttribute('aria-current', 'page'); else lienEl.removeAttribute('aria-current');
        if (!routeActive) return;
        var q = r.params && typeof r.params.q === 'string' ? r.params.q : '';
        if (champEl.value !== q) champEl.value = q;
        afficherResultats(q);
        App.bus.emit('vue:activer', { vue: 'recherche' });
        focaliserSaisie();
      });

      /* Raccourci « / » : ouvre la recherche, sauf pendant une saisie */
      document.addEventListener('keydown', function (ev) {
        if (ev.key !== '/' || ev.ctrlKey || ev.metaKey || ev.altKey) return;
        var t = ev.target;
        if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
        ev.preventDefault();
        if (routeActive) focaliserSaisie();
        else window.location.hash = '#/recherche';
      });
    }
  };
})();
