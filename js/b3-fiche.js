/* Bloc B3 — Fiche — v1.4 — dépendances : B0 Socle v1.3 (type de fiche « terme », champ « nass »), B1 Routeur v1.0 (route « lecon »), B4 Glossaire (infobulle, facultatif) — événements émis : vue:activer (vue « fiche »), fiche:affichee — événements écoutés : route:change */

/*
 * Affiche la fiche demandée par la route #/lecon/<id>, selon le gabarit des instructions (§5).
 * Ordre de lecture : vérification et alertes → titre → objectif → RÈGLE PRATIQUE → qualification →
 * matn → explication → avis et statuts → muʿtamad → préférence d'al-Ḥaṭṭāb → remarques → divergences →
 * exemple → erreurs fréquentes → vocabulaire → quiz (emplacement confié à B5) → référence → navigation.
 *
 * Fiche de synthèse (type "synthese") : tableau récapitulatif construit à partir des fiches du faṣl
 * (titre, règle pratique, statut juridique), puis emplacement du quiz.
 *
 * Après chaque affichage, B3 émet fiche:affichee { id, type, emplacementQuiz } :
 *   - emplacementQuiz est un conteneur vide réservé à B5 jusqu'au prochain fiche:affichee ;
 *   - les termes du vocabulaire présents dans les textes sont marqués <span data-terme="…"> (point d'accroche de B4).
 * Le texte est toujours inséré par textContent : aucune balise venant des données n'est interprétée.
 *
 * v1.2 — Fiche « terme » (Module 0) : surtitre « Terme technique », encadré « Règle de lecture »,
 *        pas de qualification ni de muʿtamad (champs absents du gabarit « terme »).
 *        Infobulle native (title) des termes posée seulement si B4 n'est pas actif (B4 affiche la sienne).
 * v1.3 — Termes marqués seulement comme mots entiers (un terme n'est plus découpé à l'intérieur d'un mot) ;
 *        toute phrase arabe est rendue dans un seul conteneur RTL pour garantir l'ordre des mots.
 * v1.4 — Fiche « terme » sans matn (ajout propre à al-Ḥaṭṭāb) : le champ « nass » est affiché à la place du
 *        matn, sous le titre « Texte d'al-Ḥaṭṭāb », avec la mention qu'aucun texte de Khalīl ne correspond.
 */

(function () {
  'use strict';

  var vueEl = null;

  /* Libellés d'interface des valeurs du gabarit (terme arabe + traduction, aucune règle de fond) */
  var HUKM = {
    fard:   ['فَرْض', 'obligatoire'],
    wajib:  ['وَاجِب', 'obligatoire'],
    sunna:  ['سُنَّة', 'sunna (pratique prophétique confirmée)'],
    mandub: ['مَنْدُوب', 'recommandé'],
    mubah:  ['مُبَاح', 'permis'],
    makruh: ['مَكْرُوه', 'déconseillé'],
    haram:  ['حَرَام', 'interdit']
  };
  var NATURE = {
    rukn:   ['رُكْن', 'pilier'],
    shart:  ['شَرْط', 'condition'],
    mubtil: ['مُبْطِل', 'annulatif'],
    adab:   ['أَدَب', 'convenance'],
    autre:  [null, 'autre']
  };
  var STATUT = {
    mashhur:     ['مَشْهُور', 'avis le plus répandu dans l\'école'],
    rajih:       ['رَاجِح', 'avis le plus fort par ses preuves'],
    qawl:        ['قَوْل', 'avis'],
    shadh:       ['شَاذّ', 'avis isolé'],
    non_precise: [null, 'statut non précisé dans le passage']
  };

  var RE_ARABE = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+(?:[  ]+[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+)*/g;

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
  function liste(v) { return Array.isArray(v) ? v.filter(function (x) { return texte(x); }) : []; }
  function lienLecon(id) { return '#/lecon/' + encodeURIComponent(id); }
  function pluriel(n, s, p) { return n + ' ' + (n > 1 ? p : s); }

  function numero(id) {
    var m = /-(\d{2})([a-z]?)$/.exec(id || '');
    return m ? String(Number(m[1])) + m[2] : '';
  }

  /* Termes de la fiche, indexés par leur écriture arabe ; les plus longs d'abord pour le marquage */
  function indexTermes(fiche) {
    var t = Array.isArray(fiche.termes) ? fiche.termes.filter(function (x) { return x && texte(x.ar); }) : [];
    return t.slice().sort(function (a, b) { return b.ar.length - a.ar.length; });
  }

  /* Segment arabe : isolé (dir="rtl", lang="ar") et, s'il contient un terme du vocabulaire, marqué data-terme */
  function b4Actif() {
    return App.blocs().some(function (b) { return b.id === 'b4' && b.etat === 'actif'; });
  }

  /* Séparateurs de mots : espaces et ponctuation (arabe et latine) */
  var RE_SEPARATEUR = /[\s\u00A0\u060C\u061B\u061F\u06D4.,;:!?«»"'()\[\]{}…\-–—\/]/;

  function limite(s, i) {
    return i < 0 || i >= s.length || RE_SEPARATEUR.test(s.charAt(i));
  }

  /*
   * Segment arabe : un seul conteneur isolé (lang="ar", dir="rtl") pour toute la phrase arabe, afin que
   * l'ordre des mots soit toujours correct ; à l'intérieur, chaque terme du vocabulaire présent comme
   * MOT ENTIER (borné par un espace, une ponctuation ou le début / la fin du texte) est marqué data-terme.
   * Un terme inclus dans un mot plus long (ex. قَوْل dans وَبِالْقَوْلِ) n'est pas marqué : le mot reste intact.
   */
  function segmentArabe(s, termes) {
    var conteneur = el('span', { lang: 'ar', dir: 'rtl', class: 'b3-ar-inline' });
    var reste = s;
    while (reste) {
      var meilleur = null;
      termes.forEach(function (t) {
        var depart = 0, i;
        while ((i = reste.indexOf(t.ar, depart)) >= 0) {
          if (limite(reste, i - 1) && limite(reste, i + t.ar.length)) {
            if (meilleur === null || i < meilleur.i || (i === meilleur.i && t.ar.length > meilleur.t.ar.length)) meilleur = { i: i, t: t };
            break;
          }
          depart = i + 1;
        }
      });
      if (!meilleur) { conteneur.appendChild(document.createTextNode(reste)); break; }
      if (meilleur.i > 0) conteneur.appendChild(document.createTextNode(reste.slice(0, meilleur.i)));
      conteneur.appendChild(el('span', {
        class: 'b3-terme',
        'data-terme': meilleur.t.ar,
        title: b4Actif() ? null : ([texte(meilleur.t.translit), texte(meilleur.t.def)].filter(Boolean).join(' — ') || null),
        text: meilleur.t.ar
      }));
      reste = reste.slice(meilleur.i + meilleur.t.ar.length);
    }
    return conteneur;
  }

  /* Ligne de texte français pouvant contenir de l'arabe */
  function ligneRiche(s, termes) {
    var frag = document.createDocumentFragment();
    var dernier = 0;
    s.replace(RE_ARABE, function (m, i) {
      if (i > dernier) frag.appendChild(document.createTextNode(s.slice(dernier, i)));
      frag.appendChild(segmentArabe(m, termes));
      dernier = i + m.length;
      return m;
    });
    if (dernier < s.length) frag.appendChild(document.createTextNode(s.slice(dernier)));
    return frag;
  }

  /* Texte en paragraphes : ligne vide = nouveau paragraphe ; saut de ligne simple = retour à la ligne */
  function paragraphes(s, termes, classe) {
    var frag = document.createDocumentFragment();
    String(s).split(/\n\s*\n/).forEach(function (bloc) {
      if (!bloc.trim()) return;
      var p = el('p', { class: classe || 'b3-para' });
      bloc.split('\n').forEach(function (ligne, i) {
        if (i > 0) p.appendChild(el('br'));
        p.appendChild(ligneRiche(ligne, termes));
      });
      frag.appendChild(p);
    });
    return frag;
  }

  function enLigne(s, termes) {
    var span = el('span');
    span.appendChild(ligneRiche(String(s), termes));
    return span;
  }

  function section(titre, classe, enfants) {
    return el('section', { class: 'b3-section ' + (classe || '') }, [el('h2', { class: 'b3-h2', text: titre })].concat(enfants));
  }

  function listeTextes(items, termes, classe) {
    var ul = el('ul', { class: 'b3-liste ' + (classe || '') });
    items.forEach(function (t) {
      var li = el('li');
      li.appendChild(ligneRiche(t, termes));
      ul.appendChild(li);
    });
    return ul;
  }

  function etiquette(def, valeur, classe) {
    var d = def[valeur];
    if (!d) return el('span', { class: 'b3-etiquette b3-etiquette--inconnue ' + (classe || ''), text: String(valeur) });
    return el('span', { class: 'b3-etiquette ' + (classe || '') }, [
      d[0] ? el('span', { lang: 'ar', dir: 'rtl', class: 'b3-etiquette-ar', text: d[0] }) : null,
      el('span', { class: 'b3-etiquette-fr', text: d[1] })
    ]);
  }

  /* ----------------------------------------------------------------------
     Éléments communs
     ---------------------------------------------------------------------- */

  function trouver(noeuds, id) {
    return (Array.isArray(noeuds) ? noeuds : []).find(function (n) { return n && n.id === id; }) || null;
  }

  function filAriane(f) {
    var plan = App.data.plan();
    var k = plan ? trouver(plan.kutub, f.kitab) : null;
    var b = k ? trouver(k.abwab, f.kitab + '-' + f.bab) : null;
    var s = b ? trouver(b.fusul, f.kitab + '-' + f.bab + '-' + f.fasl) : null;
    var parts = [
      k && texte(k.titre) ? k.titre : f.kitab,
      b && texte(b.titre) ? b.titre : 'Bāb ' + f.bab,
      s && texte(s.titre) ? s.titre : 'Faṣl ' + f.fasl
    ].filter(Boolean);
    var ol = el('ol', { class: 'b3-fil' });
    parts.forEach(function (p) { ol.appendChild(el('li', { text: p })); });
    return el('nav', { class: 'b3-fil-nav', 'aria-label': 'Emplacement dans le cours' }, [ol]);
  }

  function bandeauVerification(f, termes) {
    var alertes = liste(f.alertes);
    if (f.verification === 'a_revoir') {
      return el('aside', { class: 'b3-bandeau b3-bandeau--revoir', role: 'note' }, [
        el('p', { class: 'b3-bandeau-titre', text: 'Fiche en attente de vérification' }),
        el('p', { class: 'b3-bandeau-texte', text: 'Son contenu n\'a pas encore passé toutes les vérifications. Lisez-la avec prudence.' }),
        alertes.length ? listeTextes(alertes, termes, 'b3-liste--alertes') : null
      ]);
    }
    if (alertes.length) {
      return el('aside', { class: 'b3-bandeau b3-bandeau--note', role: 'note' }, [
        el('p', { class: 'b3-bandeau-titre', text: 'Points signalés dans le texte source' }),
        listeTextes(alertes, termes, 'b3-liste--alertes')
      ]);
    }
    return null;
  }

  function reference(f) {
    var r = f.ref;
    var morceaux = [];
    if (r && typeof r === 'object') {
      if (texte(r.ouvrage)) morceaux.push(el('i', { text: r.ouvrage }));
      if (r.tome !== undefined && r.tome !== null && String(r.tome).trim()) morceaux.push(', tome ' + r.tome);
      if (texte(r.pages)) morceaux.push(', p. ' + r.pages);
    }
    var verifiee = f.verification === 'verifie'
      ? el('span', { class: 'b3-statut b3-statut--ok', text: 'Fiche vérifiée' })
      : (f.verification === 'a_revoir' ? el('span', { class: 'b3-statut b3-statut--revoir', text: 'À revoir' }) : null);
    return el('footer', { class: 'b3-ref' }, [
      el('p', { class: 'b3-ref-texte' }, [el('span', { class: 'b3-ref-label', text: 'Source : ' })].concat(
        morceaux.length ? morceaux : ['référence non renseignée'])),
      verifiee
    ]);
  }

  function emplacementQuiz(f) {
    var n = Array.isArray(f.quiz) ? f.quiz.length : 0;
    var conteneur = el('div', { class: 'b3-quiz-emplacement', 'data-proprietaire': 'b5' });
    var b5Actif = App.blocs().some(function (b) { return b.id === 'b5' && b.etat === 'actif'; });
    var sec = section(f.type === 'synthese' ? 'Quiz du faṣl' : 'Quiz', 'b3-quiz', [
      b5Actif || !n ? null : el('p', { class: 'b3-quiz-attente', text: pluriel(n, 'question est prévue', 'questions sont prévues') + ' pour ce quiz. Il sera interactif dans une prochaine version du site.' }),
      conteneur
    ]);
    return { section: n || b5Actif ? sec : null, conteneur: conteneur };
  }

  function navigation(id) {
    var toutes = App.data.fiches();
    var i = toutes.findIndex(function (x) { return x.id === id; });
    if (i < 0) return null;
    var prec = toutes[i - 1], suiv = toutes[i + 1];
    function carte(f, sens) {
      if (!f) return el('span', { class: 'b3-nav-vide' });
      var titre = f.type === 'synthese' ? 'Synthèse du faṣl' : (texte(f.titre) || f.id);
      return el('a', { class: 'b3-nav-lien b3-nav-lien--' + sens, href: lienLecon(f.id) }, [
        el('span', { class: 'b3-nav-sens', text: sens === 'prec' ? '← Fiche précédente' : 'Fiche suivante →' }),
        el('span', { class: 'b3-nav-titre', text: titre })
      ]);
    }
    if (!prec && !suiv) return null;
    return el('nav', { class: 'b3-nav', 'aria-label': 'Fiches voisines' }, [carte(prec, 'prec'), carte(suiv, 'suiv')]);
  }

  function controleTechnique(id) {
    var a = App.data.anomalies({ id: id });
    if (!a.length) return null;
    var nbErr = a.filter(function (x) { return x.niveau === 'erreur'; }).length;
    var ul = el('ul', { class: 'b3-liste b3-liste--technique' });
    a.forEach(function (x) { ul.appendChild(el('li', { text: (x.niveau === 'erreur' ? 'Erreur : ' : 'Avertissement : ') + x.message })); });
    return el('details', { class: 'b3-technique' }, [
      el('summary', { text: 'Contrôle technique de la fiche — ' + pluriel(nbErr, 'erreur', 'erreurs') + ', ' + pluriel(a.length - nbErr, 'avertissement', 'avertissements') }),
      ul
    ]);
  }

  /* ----------------------------------------------------------------------
     Fiche de masʾala
     ---------------------------------------------------------------------- */

  function rendreMasala(f) {
    var termes = indexTermes(f);
    var estTerme = f.type === 'terme';
    var art = el('article', { class: 'b3-fiche', 'aria-labelledby': 'b3-titre' });

    art.appendChild(filAriane(f));
    art.appendChild(bandeauVerification(f, termes) || document.createTextNode(''));

    /* En-tête */
    art.appendChild(el('header', { class: 'b3-entete' }, [
      el('p', { class: 'b3-surtitre', text: estTerme ? 'Terme technique — ' + numero(f.id) : 'Masʾala ' + numero(f.id) }),
      el('h1', { class: 'b3-titre', id: 'b3-titre', tabindex: '-1', text: texte(f.titre) || f.id }),
      texte(f.titre_ar) ? el('p', { class: 'b3-titre-ar', lang: 'ar', dir: 'rtl', text: f.titre_ar }) : null
    ]));

    if (texte(f.objectif)) {
      art.appendChild(el('p', { class: 'b3-objectif' }, [
        el('span', { class: 'b3-objectif-label', text: 'Objectif : ' }), enLigne(f.objectif, termes)
      ]));
    }

    /* Règle pratique */
    if (texte(f.regle_pratique)) {
      art.appendChild(el('section', { class: 'b3-regle', 'aria-labelledby': 'b3-regle-titre' }, [
        el('h2', { class: 'b3-regle-titre', id: 'b3-regle-titre', text: estTerme ? 'Règle de lecture' : 'Règle pratique' }),
        el('div', { class: 'b3-regle-texte' }, [paragraphes(f.regle_pratique, termes, 'b3-regle-para')])
      ]));
    }

    /* Qualification */
    var q = estTerme ? null : f.qualification;
    if (q && typeof q === 'object') {
      art.appendChild(el('section', { class: 'b3-qualif', 'aria-label': 'Qualification juridique' }, [
        el('div', { class: 'b3-qualif-ligne' }, [
          el('span', { class: 'b3-qualif-label', text: 'Statut' }), etiquette(HUKM, q.hukm, 'b3-etiquette--hukm')
        ]),
        el('div', { class: 'b3-qualif-ligne' }, [
          el('span', { class: 'b3-qualif-label', text: 'Nature' }), etiquette(NATURE, q.nature, 'b3-etiquette--nature')
        ]),
        el('div', { class: 'b3-qualif-ligne b3-qualif-ligne--effet' }, [
          el('span', { class: 'b3-qualif-label', text: 'En cas d\'omission' }),
          texte(q.effet_si_omis) ? enLigne(q.effet_si_omis, termes) : el('span', { class: 'b3-muet', text: 'non précisé dans le passage' })
        ])
      ]));
    }

    /* Matn — ou, pour une fiche « terme » tirée d'un ajout d'al-Ḥaṭṭāb, son texte (« nass ») */
    if (texte(f.matn)) {
      art.appendChild(section('Texte de Khalīl', 'b3-matn-section', [
        el('blockquote', { class: 'b3-matn', lang: 'ar', dir: 'rtl' }, [segmentArabe(f.matn, termes)])
      ]));
    } else if (estTerme && texte(f.nass)) {
      art.appendChild(section('Texte d\'al-Ḥaṭṭāb', 'b3-matn-section b3-nass-section', [
        el('p', { class: 'b3-muet', text: 'Ajout propre au commentateur : aucun texte de Khalīl ne correspond à cette règle.' }),
        el('blockquote', { class: 'b3-matn b3-nass', lang: 'ar', dir: 'rtl' }, [segmentArabe(f.nass, termes)])
      ]));
    }

    if (texte(f.explication)) art.appendChild(section('Explication', 'b3-explication', [paragraphes(f.explication, termes)]));

    /* Avis */
    var aqwal = Array.isArray(f.aqwal) ? f.aqwal.filter(function (a) { return a && typeof a === 'object'; }) : [];
    if (aqwal.length) {
      var ul = el('ul', { class: 'b3-aqwal' });
      aqwal.forEach(function (a) {
        ul.appendChild(el('li', { class: 'b3-qawl' }, [
          el('div', { class: 'b3-qawl-entete' }, [
            el('span', { class: 'b3-qawl-auteur', text: texte(a.auteur) || 'avis rapporté sans attribution' }),
            etiquette(STATUT, a.statut, 'b3-etiquette--statut b3-etiquette--' + (a.statut || 'inconnu'))
          ]),
          texte(a.avis) ? el('div', { class: 'b3-qawl-texte' }, [paragraphes(a.avis, termes)]) : null
        ]));
      });
      art.appendChild(section('Les avis', 'b3-aqwal-section', [ul]));
    }

    /* Muʿtamad et préférence d'al-Ḥaṭṭāb */
    if (!estTerme && texte(f.muatamad)) {
      var nonConfirme = /^\s*non confirm/i.test(f.muatamad);
      art.appendChild(el('section', { class: 'b3-muatamad' + (nonConfirme ? ' b3-muatamad--non-confirme' : '') }, [
        el('h2', { class: 'b3-h2', text: 'Avis retenu pour la pratique (muʿtamad)' }),
        el('div', null, [paragraphes(f.muatamad, termes)])
      ]));
    }
    if (texte(f.tarjih_hattab)) {
      art.appendChild(section('Préférence d\'al-Ḥaṭṭāb', 'b3-tarjih', [paragraphes(f.tarjih_hattab, termes)]));
    }

    var tanbihat = liste(f.tanbihat);
    if (tanbihat.length) art.appendChild(section('Remarques d\'al-Ḥaṭṭāb', 'b3-tanbihat', [listeTextes(tanbihat, termes)]));

    var divergences = liste(f.divergences);
    if (divergences.length) art.appendChild(section('Divergences avec al-Dardīr / al-Dasūqī', 'b3-divergences', [listeTextes(divergences, termes)]));

    if (texte(f.exemple)) art.appendChild(section('Exemple', 'b3-exemple', [paragraphes(f.exemple, termes)]));

    var erreurs = liste(f.erreurs_frequentes);
    if (erreurs.length) art.appendChild(section('Erreurs fréquentes', 'b3-erreurs', [listeTextes(erreurs, termes, 'b3-liste--erreurs')]));

    /* Vocabulaire */
    var voc = Array.isArray(f.termes) ? f.termes.filter(function (t) { return t && texte(t.ar); }) : [];
    if (voc.length) {
      var dl = el('dl', { class: 'b3-termes' });
      voc.forEach(function (t) {
        dl.appendChild(el('div', { class: 'b3-terme-ligne' }, [
          el('dt', { class: 'b3-terme-tete' }, [
            el('span', { lang: 'ar', dir: 'rtl', class: 'b3-terme-ar', 'data-terme': t.ar, text: t.ar }),
            texte(t.translit) ? el('span', { class: 'b3-terme-translit', text: '(' + t.translit + ')' }) : null
          ]),
          el('dd', { class: 'b3-terme-def', text: texte(t.def) || '' })
        ]));
      });
      art.appendChild(section('Vocabulaire', 'b3-vocabulaire', [dl]));
    }

    var quiz = emplacementQuiz(f);
    if (quiz.section) art.appendChild(quiz.section);

    art.appendChild(reference(f));
    art.appendChild(navigation(f.id) || document.createTextNode(''));
    art.appendChild(controleTechnique(f.id) || document.createTextNode(''));
    return { article: art, conteneurQuiz: quiz.conteneur };
  }

  /* ----------------------------------------------------------------------
     Fiche de synthèse
     ---------------------------------------------------------------------- */

  function rendreSynthese(f) {
    var termes = indexTermes(f);
    var art = el('article', { class: 'b3-fiche b3-fiche--synthese', 'aria-labelledby': 'b3-titre' });
    art.appendChild(filAriane(f));
    art.appendChild(bandeauVerification(f, termes) || document.createTextNode(''));
    art.appendChild(el('header', { class: 'b3-entete' }, [
      el('p', { class: 'b3-surtitre', text: 'Synthèse du faṣl' }),
      el('h1', { class: 'b3-titre', id: 'b3-titre', tabindex: '-1', text: texte(f.titre) || f.id })
    ]));

    var fiches = App.data.fiches({ kitab: f.kitab, bab: f.bab, fasl: f.fasl, type: 'masala' });
    var tousTermes = fiches.length > 0 && fiches.every(function (x) { return x.type === 'terme'; });
    var contenu;
    if (!fiches.length) {
      contenu = el('p', { class: 'b3-muet', text: 'Aucune fiche n\'est encore disponible pour ce faṣl.' });
    } else {
      var tbody = el('tbody');
      fiches.forEach(function (x) {
        var hukm = x.qualification && HUKM[x.qualification.hukm];
        tbody.appendChild(el('tr', null, [
          el('td', { class: 'b3-recap-masala' }, [
            el('a', { href: lienLecon(x.id) }, [
              el('span', { class: 'b3-recap-num', text: numero(x.id) }),
              el('span', { text: texte(x.titre) || x.id })
            ]),
            x.verification === 'a_revoir' ? el('span', { class: 'b3-statut b3-statut--revoir', text: 'À revoir' }) : null
          ]),
          el('td', { class: 'b3-recap-regle' }, [texte(x.regle_pratique) ? enLigne(x.regle_pratique, indexTermes(x)) : el('span', { class: 'b3-muet', text: '—' })]),
          tousTermes ? null : el('td', { class: 'b3-recap-hukm' }, [hukm ? etiquette(HUKM, x.qualification.hukm, 'b3-etiquette--hukm') : el('span', { class: 'b3-muet', text: '—' })])
        ]));
      });
      contenu = el('div', { class: 'b3-recap-defilement' }, [
        el('table', { class: 'b3-recap' }, [
          el('thead', null, [el('tr', null, [
            el('th', { scope: 'col', text: tousTermes ? 'Terme' : 'Masʾala' }),
            el('th', { scope: 'col', text: tousTermes ? 'Règle de lecture' : 'Règle pratique' }),
            tousTermes ? null : el('th', { scope: 'col', text: 'Statut' })
          ])]),
          tbody
        ])
      ]);
    }
    art.appendChild(section('Récapitulatif des règles', 'b3-recap-section', [contenu]));

    var quiz = emplacementQuiz(f);
    if (quiz.section) art.appendChild(quiz.section);
    if (f.ref) art.appendChild(reference(f));
    art.appendChild(navigation(f.id) || document.createTextNode(''));
    art.appendChild(controleTechnique(f.id) || document.createTextNode(''));
    return { article: art, conteneurQuiz: quiz.conteneur };
  }

  /* ----------------------------------------------------------------------
     Fiche introuvable
     ---------------------------------------------------------------------- */

  function rendreIntrouvable(id) {
    return el('article', { class: 'b3-fiche b3-fiche--introuvable', 'aria-labelledby': 'b3-titre' }, [
      el('h1', { class: 'b3-titre', id: 'b3-titre', tabindex: '-1', text: 'Fiche introuvable' }),
      el('p', null, ['Aucune fiche publiée ne porte l\'identifiant ', el('code', { text: id || '(vide)' }), '.']),
      el('p', null, [el('a', { href: '#/', text: 'Retour à l\'accueil' })])
    ]);
  }

  /* ----------------------------------------------------------------------
     Affichage
     ---------------------------------------------------------------------- */

  function afficher(id) {
    var f = App.data.fiche(id);
    var rendu = null;
    vueEl.textContent = '';

    if (!f) {
      vueEl.appendChild(rendreIntrouvable(id));
    } else {
      try {
        rendu = f.type === 'synthese' ? rendreSynthese(f) : rendreMasala(f);
        vueEl.appendChild(rendu.article);
      } catch (e) {
        console.error('[B3] Affichage impossible de la fiche « ' + id + ' » :', e);
        vueEl.textContent = '';
        vueEl.appendChild(el('article', { class: 'b3-fiche' }, [
          el('h1', { class: 'b3-titre', id: 'b3-titre', tabindex: '-1', text: 'Affichage impossible' }),
          el('p', { text: 'La fiche « ' + id + ' » n\'a pas pu être affichée. Le détail figure dans la console du navigateur.' })
        ]));
        rendu = null;
      }
    }

    App.bus.emit('vue:activer', { vue: 'fiche' });

    var h1 = vueEl.querySelector('#b3-titre');
    if (h1) { try { h1.focus({ preventScroll: true }); } catch (e) { h1.focus(); } }

    if (f && rendu) {
      App.bus.emit('fiche:affichee', Object.freeze({
        id: f.id,
        type: f.type === 'synthese' ? 'synthese' : 'masala',
        emplacementQuiz: rendu.conteneurQuiz
      }));
    }
  }

  App.blocks.Fiche = {
    init: function () {
      vueEl = App.vue('b3', 'fiche');
      vueEl.classList.add('b3-vue');
      App.bus.on('route:change', function (r) {
        if (r && r.nom === 'lecon' && r.params) afficher(r.params.id);
      });
    }
  };
})();
