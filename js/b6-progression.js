/* Bloc B6 — Progression — v1.0 — dépendances : B0 Socle v1.0, B1 Routeur v1.0 (route « progression »), B3 Fiche v1.0 (fiche:affichee), B5 Quiz v1.0 (quiz:termine) — événements émis : vue:activer (vue « progression ») — événements écoutés : route:change, fiche:affichee, quiz:termine (et l'événement « storage » du navigateur) */

/*
 * Suivi personnel, enregistré uniquement dans le navigateur (localStorage, clé « mawahib.progression.v1 ») :
 *   - fiches consultées (une fiche est comptée dès qu'elle a été affichée) ;
 *   - quiz : meilleur score, dernier score, nombre de tentatives.
 * Toute lecture / écriture du stockage est protégée par try/catch. Si le stockage est indisponible
 * (navigation privée, blocage), la progression est gardée en mémoire le temps de la visite et un message le dit.
 * Vue « progression » (#/progression) : résumé, reprise, détail par faṣl, effacement avec confirmation.
 * Lien « Progression x/N » dans la zone d'outils de l'en-tête.
 */

(function () {
  'use strict';

  var CLE = 'mawahib.progression.v1';
  var etat = vierge();
  var stockageOk = true;
  var donneesCorrompues = false;
  var vueEl, lienEl, compteurEl;
  var routeActive = false;
  var confirmation = false;

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
  function lienLecon(id) { return '#/lecon/' + encodeURIComponent(id); }
  function maintenant() { return Date.now(); }
  function pourcent(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  function dateCourte(ts) {
    try { return new Date(ts).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }); }
    catch (e) { return ''; }
  }

  /* ----------------------------------------------------------------------
     Stockage
     ---------------------------------------------------------------------- */

  function vierge() { return { version: 1, fiches: {}, quiz: {} }; }

  function estObjet(v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }

  function nettoyer(brut) {
    var e = vierge();
    if (!estObjet(brut) || brut.version !== 1) return null;
    if (estObjet(brut.fiches)) {
      Object.keys(brut.fiches).forEach(function (id) {
        var f = brut.fiches[id];
        if (estObjet(f) && Number.isFinite(f.premiere) && Number.isFinite(f.derniere)) {
          e.fiches[id] = { premiere: f.premiere, derniere: f.derniere, vues: Number.isInteger(f.vues) && f.vues > 0 ? f.vues : 1 };
        }
      });
    }
    if (estObjet(brut.quiz)) {
      Object.keys(brut.quiz).forEach(function (id) {
        var q = brut.quiz[id];
        var ok = function (s) { return estObjet(s) && Number.isInteger(s.score) && Number.isInteger(s.total) && s.total > 0 && s.score >= 0 && s.score <= s.total; };
        if (estObjet(q) && ok(q.meilleur) && ok(q.dernier)) {
          e.quiz[id] = {
            meilleur: { score: q.meilleur.score, total: q.meilleur.total },
            dernier: { score: q.dernier.score, total: q.dernier.total, date: Number.isFinite(q.dernier.date) ? q.dernier.date : 0 },
            tentatives: Number.isInteger(q.tentatives) && q.tentatives > 0 ? q.tentatives : 1
          };
        }
      });
    }
    return e;
  }

  function charger() {
    donneesCorrompues = false;
    var brut;
    try {
      brut = window.localStorage.getItem(CLE);
      stockageOk = true;
    } catch (e) {
      stockageOk = false;
      return;
    }
    if (brut === null) { etat = vierge(); return; }
    try {
      var lu = nettoyer(JSON.parse(brut));
      if (lu) etat = lu;
      else { etat = vierge(); donneesCorrompues = true; }
    } catch (e) {
      etat = vierge();
      donneesCorrompues = true;
    }
  }

  function enregistrer() {
    if (!stockageOk) return;
    try {
      window.localStorage.setItem(CLE, JSON.stringify(etat));
    } catch (e) {
      stockageOk = false;
      console.warn('[B6] Écriture impossible dans le stockage du navigateur : la progression est gardée en mémoire pour cette visite.', e);
    }
  }

  function effacer() {
    etat = vierge();
    donneesCorrompues = false;
    if (stockageOk) {
      try { window.localStorage.removeItem(CLE); }
      catch (e) { stockageOk = false; }
    }
  }

  /* ----------------------------------------------------------------------
     Enregistrement des événements
     ---------------------------------------------------------------------- */

  function noterLecture(id) {
    if (!texte(id)) return;
    var t = maintenant();
    var f = etat.fiches[id];
    if (f) { f.derniere = t; f.vues += 1; }
    else etat.fiches[id] = { premiere: t, derniere: t, vues: 1 };
    enregistrer();
    majLien();
  }

  function noterQuiz(d) {
    if (!d || !texte(d.id) || !Number.isInteger(d.score) || !Number.isInteger(d.total) || d.total <= 0) return;
    var q = etat.quiz[d.id];
    var nouveau = { score: d.score, total: d.total, date: maintenant() };
    if (!q) {
      etat.quiz[d.id] = { meilleur: { score: d.score, total: d.total }, dernier: nouveau, tentatives: 1 };
    } else {
      q.dernier = nouveau;
      q.tentatives += 1;
      if (d.score / d.total > q.meilleur.score / q.meilleur.total) q.meilleur = { score: d.score, total: d.total };
    }
    enregistrer();
    majLien();
  }

  /* ----------------------------------------------------------------------
     Calculs
     ---------------------------------------------------------------------- */

  function bilan() {
    var masail = App.data.fiches({ type: 'masala' });
    var avecQuiz = App.data.fiches().filter(function (f) { return Array.isArray(f.quiz) && f.quiz.length; });
    var lues = masail.filter(function (f) { return etat.fiches[f.id]; });
    var quizFaits = avecQuiz.filter(function (f) { return etat.quiz[f.id]; });
    var moyenne = quizFaits.length
      ? Math.round(quizFaits.reduce(function (s, f) { var m = etat.quiz[f.id].meilleur; return s + m.score / m.total; }, 0) / quizFaits.length * 100)
      : null;
    return { masail: masail, lues: lues, avecQuiz: avecQuiz, quizFaits: quizFaits, moyenne: moyenne };
  }

  function derniereConsultee() {
    var ids = Object.keys(etat.fiches).filter(function (id) { return App.data.fiche(id); });
    if (!ids.length) return null;
    ids.sort(function (a, b) { return etat.fiches[b].derniere - etat.fiches[a].derniere; });
    return App.data.fiche(ids[0]);
  }

  function prochaineNonLue() {
    return App.data.fiches({ type: 'masala' }).find(function (f) { return !etat.fiches[f.id]; }) || null;
  }

  /* ----------------------------------------------------------------------
     Lien de l'en-tête
     ---------------------------------------------------------------------- */

  function majLien() {
    if (!compteurEl) return;
    var total = App.data.fiches({ type: 'masala' }).length;
    var lues = App.data.fiches({ type: 'masala' }).filter(function (f) { return etat.fiches[f.id]; }).length;
    compteurEl.textContent = total ? lues + '/' + total : '';
    compteurEl.hidden = !total;
    lienEl.setAttribute('aria-label', total ? 'Ma progression : ' + lues + ' fiche(s) consultée(s) sur ' + total : 'Ma progression');
  }

  /* ----------------------------------------------------------------------
     Vue « progression »
     ---------------------------------------------------------------------- */

  function trouver(noeuds, id) {
    return (Array.isArray(noeuds) ? noeuds : []).find(function (n) { return n && n.id === id; }) || null;
  }

  function titreFasl(f) {
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

  function carte(label, valeur, detail, ratio) {
    return el('div', { class: 'b6-carte' }, [
      el('p', { class: 'b6-carte-label', text: label }),
      el('p', { class: 'b6-carte-valeur', text: valeur }),
      ratio !== null && ratio !== undefined ? el('div', { class: 'b6-barre', role: 'presentation' }, [
        el('div', { class: 'b6-barre-plein', style: 'width:' + Math.max(0, Math.min(100, ratio)) + '%' })
      ]) : null,
      detail ? el('p', { class: 'b6-carte-detail', text: detail }) : null
    ]);
  }

  function scoreTexte(s) { return s.score + '/' + s.total; }

  function rendre() {
    vueEl.textContent = '';
    var b = bilan();

    vueEl.appendChild(el('header', { class: 'b6-entete' }, [
      el('h1', { class: 'b6-titre', id: 'b6-titre', tabindex: '-1', text: 'Ma progression' }),
      el('p', { class: 'b6-intro', text: 'Enregistrée uniquement dans ce navigateur, sur cet appareil. Elle n\'est envoyée nulle part.' })
    ]));

    if (!stockageOk) {
      vueEl.appendChild(el('p', { class: 'b6-message b6-message--alerte', text:
        'Le navigateur n\'autorise pas l\'enregistrement (navigation privée ou stockage bloqué). Votre progression est conservée pendant cette visite seulement.' }));
    }
    if (donneesCorrompues) {
      vueEl.appendChild(el('p', { class: 'b6-message b6-message--alerte', text:
        'Les données de progression enregistrées étaient illisibles : elles ont été ignorées.' }));
    }

    if (!b.masail.length) {
      vueEl.appendChild(el('p', { class: 'b6-vide', text: 'Aucune leçon n\'est encore publiée : votre progression s\'affichera ici.' }));
      return;
    }

    /* Résumé */
    vueEl.appendChild(el('div', { class: 'b6-cartes' }, [
      carte('Fiches consultées', b.lues.length + ' / ' + b.masail.length, pourcent(b.lues.length, b.masail.length) + ' % du cours publié', pourcent(b.lues.length, b.masail.length)),
      carte('Quiz terminés', b.quizFaits.length + ' / ' + b.avecQuiz.length, null, pourcent(b.quizFaits.length, b.avecQuiz.length)),
      carte('Score moyen', b.moyenne === null ? '—' : b.moyenne + ' %', b.moyenne === null ? 'Aucun quiz terminé' : 'Moyenne de vos meilleurs scores', null)
    ]));

    /* Reprendre */
    var der = derniereConsultee(), proch = prochaineNonLue();
    var reprise = [];
    if (der) reprise.push(el('a', { class: 'b6-reprise-lien', href: lienLecon(der.id) }, [
      el('span', { class: 'b6-reprise-sens', text: 'Dernière fiche consultée — ' + dateCourte(etat.fiches[der.id].derniere) }),
      el('span', { class: 'b6-reprise-titre', text: der.type === 'synthese' ? 'Synthèse : ' + (texte(der.titre) || der.id) : (texte(der.titre) || der.id) })
    ]));
    if (proch) reprise.push(el('a', { class: 'b6-reprise-lien', href: lienLecon(proch.id) }, [
      el('span', { class: 'b6-reprise-sens', text: 'Prochaine fiche non consultée' }),
      el('span', { class: 'b6-reprise-titre', text: texte(proch.titre) || proch.id })
    ]));
    if (!proch && b.masail.length) reprise.push(el('p', { class: 'b6-message', text: 'Vous avez consulté toutes les fiches publiées.' }));
    if (reprise.length) vueEl.appendChild(el('section', { class: 'b6-section' }, [
      el('h2', { class: 'b6-h2', text: 'Reprendre' }),
      el('div', { class: 'b6-reprise' }, reprise)
    ]));

    /* Détail par faṣl */
    var groupes = [], index = {};
    App.data.fiches().forEach(function (f) {
      var cle = f.kitab + '-' + f.bab + '-' + f.fasl;
      if (!index[cle]) { index[cle] = { titre: titreFasl(f), fiches: [] }; groupes.push(index[cle]); }
      index[cle].fiches.push(f);
    });

    var detail = el('section', { class: 'b6-section' }, [el('h2', { class: 'b6-h2', text: 'Détail par faṣl' })]);
    groupes.forEach(function (g) {
      var masailG = g.fiches.filter(function (f) { return f.type !== 'synthese'; });
      var luesG = masailG.filter(function (f) { return etat.fiches[f.id]; }).length;
      var tbody = el('tbody');
      g.fiches.forEach(function (f) {
        var lu = etat.fiches[f.id];
        var q = etat.quiz[f.id];
        var aQuiz = Array.isArray(f.quiz) && f.quiz.length;
        tbody.appendChild(el('tr', { class: lu ? 'b6-ligne--lue' : null }, [
          el('td', { class: 'b6-col-fiche' }, [el('a', { href: lienLecon(f.id), text: f.type === 'synthese' ? 'Synthèse du faṣl' : (texte(f.titre) || f.id) })]),
          el('td', { class: 'b6-col-etat' }, [lu
            ? el('span', { class: 'b6-pastille b6-pastille--ok', text: 'Consultée' })
            : el('span', { class: 'b6-pastille', text: 'Non consultée' })]),
          el('td', { class: 'b6-col-score' }, [!aQuiz ? el('span', { class: 'b6-muet', text: 'Pas de quiz' })
            : q ? el('span', null, [
                el('strong', { text: scoreTexte(q.meilleur) }),
                el('span', { class: 'b6-muet', text: ' meilleur · ' + scoreTexte(q.dernier) + ' dernier · ' + pluriel(q.tentatives, 'tentative', 'tentatives') })
              ])
            : el('span', { class: 'b6-muet', text: 'Quiz non fait' })])
        ]));
      });
      detail.appendChild(el('div', { class: 'b6-groupe' }, [
        el('h3', { class: 'b6-h3' }, [
          el('span', { text: g.titre }),
          masailG.length ? el('span', { class: 'b6-groupe-compte', text: luesG + '/' + masailG.length }) : null
        ]),
        el('div', { class: 'b6-defilement' }, [
          el('table', { class: 'b6-table' }, [
            el('thead', null, [el('tr', null, [
              el('th', { scope: 'col', text: 'Fiche' }),
              el('th', { scope: 'col', text: 'Lecture' }),
              el('th', { scope: 'col', text: 'Quiz' })
            ])]),
            tbody
          ])
        ])
      ]));
    });
    vueEl.appendChild(detail);

    /* Effacement */
    var zone = el('section', { class: 'b6-section b6-effacement' }, [el('h2', { class: 'b6-h2', text: 'Effacer ma progression' })]);
    if (!confirmation) {
      zone.appendChild(el('p', { class: 'b6-muet', text: 'Supprime les fiches consultées et les scores enregistrés dans ce navigateur.' }));
      var bouton = el('button', { class: 'b6-bouton b6-bouton--secondaire', type: 'button', text: 'Effacer ma progression…' });
      bouton.addEventListener('click', function () { confirmation = true; rendre(); focaliser('.b6-bouton--danger'); });
      zone.appendChild(bouton);
    } else {
      zone.appendChild(el('p', { class: 'b6-message b6-message--alerte', text: 'Confirmez-vous l\'effacement ? Cette action est définitive.' }));
      var oui = el('button', { class: 'b6-bouton b6-bouton--danger', type: 'button', text: 'Oui, tout effacer' });
      var non = el('button', { class: 'b6-bouton b6-bouton--secondaire', type: 'button', text: 'Annuler' });
      oui.addEventListener('click', function () { effacer(); confirmation = false; majLien(); rendre(); focaliser('#b6-titre'); });
      non.addEventListener('click', function () { confirmation = false; rendre(); focaliser('.b6-bouton--secondaire'); });
      zone.appendChild(el('div', { class: 'b6-boutons' }, [oui, non]));
    }
    vueEl.appendChild(zone);
  }

  function focaliser(sel) {
    var n = vueEl.querySelector(sel);
    if (n) { try { n.focus({ preventScroll: true }); } catch (e) { n.focus(); } }
  }

  /* ----------------------------------------------------------------------
     Initialisation
     ---------------------------------------------------------------------- */

  App.blocks.Progression = {
    init: function () {
      charger();

      vueEl = App.vue('b6', 'progression');
      vueEl.classList.add('b6-vue');

      var emplacement = App.emplacement('b6', 'outils');
      compteurEl = el('span', { class: 'b6-lien-compte', hidden: true });
      var icone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icone.setAttribute('viewBox', '0 0 24 24');
      icone.setAttribute('width', '16');
      icone.setAttribute('height', '16');
      icone.setAttribute('aria-hidden', 'true');
      icone.setAttribute('focusable', 'false');
      icone.setAttribute('class', 'b6-lien-icone');
      var trace = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      trace.setAttribute('d', 'M4 20V10M10 20V4M16 20v-7M22 20H2');
      trace.setAttribute('fill', 'none');
      trace.setAttribute('stroke', 'currentColor');
      trace.setAttribute('stroke-width', '2');
      trace.setAttribute('stroke-linecap', 'round');
      icone.appendChild(trace);
      lienEl = el('a', { class: 'b6-lien-outil', href: '#/progression' }, [
        icone, el('span', { class: 'b6-lien-texte', text: 'Progression' }), compteurEl
      ]);
      emplacement.appendChild(lienEl);
      majLien();

      App.bus.on('fiche:affichee', function (d) { if (d) noterLecture(d.id); });
      App.bus.on('quiz:termine', noterQuiz);

      App.bus.on('route:change', function (r) {
        routeActive = !!(r && r.nom === 'progression');
        if (routeActive) lienEl.setAttribute('aria-current', 'page'); else lienEl.removeAttribute('aria-current');
        if (routeActive) {
          confirmation = false;
          rendre();
          App.bus.emit('vue:activer', { vue: 'progression' });
          focaliser('#b6-titre');
        }
      });

      /* Progression modifiée dans un autre onglet */
      window.addEventListener('storage', function (ev) {
        if (ev.key !== CLE && ev.key !== null) return;
        charger();
        majLien();
        if (routeActive) rendre();
      });
    }
  };
})();
