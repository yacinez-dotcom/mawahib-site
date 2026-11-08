/* Bloc B0 — Socle — v1.3 — dépendances : aucune — événements émis : app:pret, vue:changee — événements écoutés : vue:activer, route:change (émis par B1), theme:appliquer (émis par B8), arabe:echelle (émis par B8) */

/*
 * Le socle fournit à tous les blocs :
 *   App.blocks            — chaque bloc s'y enregistre : App.blocks.<Nom> = { init() { … } }
 *   App.bus               — bus d'événements : on(evt, fn) → fonction de désabonnement, off(evt, fn), emit(evt, data)
 *   App.data              — registre des données (lecture seule pour les blocs)
 *   App.emplacement(b, z) — conteneur réservé au bloc b dans une zone fixe (outils, lateral, pied)
 *   App.vue(b, nom)       — vue réservée au bloc b dans la zone principale ; affichée via l'événement vue:activer
 *   App.vueActive()       — nom de la vue affichée
 *   App.blocs()           — état de chargement des blocs
 *
 * Démarrage : 1) fichiers de data/manifeste.js  2) verrouillage du registre
 *             3) chargement des blocs B1 à B8 présents  4) init() de chaque bloc  5) événement app:pret
 * Le contrat complet est décrit dans docs/contrat.md.
 */

(function () {
  'use strict';

  if (window.App) {
    console.error('[socle] App existe déjà : js/socle.js est chargé deux fois.');
    return;
  }

  var VERSION = '1.3';
  var DEBUG = /[?&]debug\b/.test(window.location.search);

  /* Blocs connus, dans l'ordre d'initialisation. Un fichier absent est simplement signalé. */
  var BLOCS = [
    { id: 'b1', nom: 'Routeur',     js: 'js/b1-routeur.js' },
    { id: 'b2', nom: 'Plan',        js: 'js/b2-plan.js',        css: 'css/b2-plan.css' },
    { id: 'b3', nom: 'Fiche',       js: 'js/b3-fiche.js',       css: 'css/b3-fiche.css' },
    { id: 'b4', nom: 'Glossaire',   js: 'js/b4-glossaire.js',   css: 'css/b4-glossaire.css' },
    { id: 'b5', nom: 'Quiz',        js: 'js/b5-quiz.js',        css: 'css/b5-quiz.css' },
    { id: 'b6', nom: 'Progression', js: 'js/b6-progression.js', css: 'css/b6-progression.css' },
    { id: 'b7', nom: 'Recherche',   js: 'js/b7-recherche.js',   css: 'css/b7-recherche.css' },
    { id: 'b8', nom: 'Theme',       js: 'js/b8-theme.js',       css: 'css/b8-theme.css' }
  ].map(function (b) { b.etat = 'en_attente'; b.detail = ''; return b; });

  var ZONES_EMPLACEMENT = ['outils', 'lateral', 'pied'];

  /* ======================================================================
     Utilitaires
     ====================================================================== */

  function cloner(v) {
    if (typeof structuredClone === 'function') return structuredClone(v);
    return JSON.parse(JSON.stringify(v));
  }

  function geler(v) {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.freeze(v);
      Object.keys(v).forEach(function (k) { geler(v[k]); });
    }
    return v;
  }

  var est = {
    chaine: function (v) { return typeof v === 'string' && v.trim() !== ''; },
    texte: function (v) { return typeof v === 'string'; },
    tableau: function (v) { return Array.isArray(v); },
    objet: function (v) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
  };

  function pluriel(n, sing, plur) { return n + ' ' + (n > 1 ? plur : sing); }

  /* Création d'élément : el('p', { class: 'x' }, ['texte', autreEl]) — texte toujours inséré via textContent */
  function el(tag, attrs, enfants) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (attrs[k] === null || attrs[k] === undefined || attrs[k] === false) return;
        if (k === 'class') n.className = attrs[k];
        else if (k === 'text') n.textContent = attrs[k];
        else n.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
      });
    }
    (enfants || []).forEach(function (e) {
      if (e === null || e === undefined) return;
      n.appendChild(typeof e === 'string' ? document.createTextNode(e) : e);
    });
    return n;
  }

  /* ======================================================================
     Bus d'événements
     ====================================================================== */

  var ecouteurs = new Map();

  var bus = Object.freeze({
    on: function (evt, fn) {
      if (typeof evt !== 'string' || !evt || typeof fn !== 'function') {
        throw new TypeError('App.bus.on(evt, fn) : evt doit être une chaîne et fn une fonction.');
      }
      if (!ecouteurs.has(evt)) ecouteurs.set(evt, []);
      ecouteurs.get(evt).push(fn);
      return function () { bus.off(evt, fn); };
    },
    off: function (evt, fn) {
      var liste = ecouteurs.get(evt);
      if (!liste) return;
      var i = liste.indexOf(fn);
      if (i >= 0) liste.splice(i, 1);
    },
    emit: function (evt, data) {
      if (DEBUG) console.debug('[bus]', evt, data);
      var liste = ecouteurs.get(evt);
      if (!liste || !liste.length) return;
      liste.slice().forEach(function (fn) {
        try { fn(data, evt); }
        catch (e) { console.error('[socle] Erreur dans un écouteur de « ' + evt + ' » :', e); }
      });
    }
  });

  /* ======================================================================
     Registre des données (App.data)
     ====================================================================== */

  var ENUM = {
    hukm: ['fard', 'wajib', 'sunna', 'mandub', 'mubah', 'makruh', 'haram'],
    nature: ['rukn', 'shart', 'mubtil', 'adab', 'autre'],
    statut: ['mashhur', 'rajih', 'qawl', 'shadh', 'non_precise'],
    verification: ['verifie', 'a_revoir']
  };

  var CHAMPS_FICHE = [
    'id', 'kitab', 'bab', 'fasl', 'ordre', 'titre', 'titre_ar', 'objectif', 'matn',
    'regle_pratique', 'qualification', 'explication', 'aqwal', 'muatamad', 'tarjih_hattab',
    'tanbihat', 'divergences', 'exemple', 'erreurs_frequentes', 'termes', 'quiz', 'ref',
    'alertes', 'verification'
  ];
  var TEXTES_OBLIGATOIRES = ['titre', 'titre_ar', 'objectif', 'matn', 'regle_pratique', 'explication', 'muatamad', 'exemple'];
  /* Fiche « terme » (Module 0, langue technique du Mukhtaṣar) : gabarit de masʾala sans les champs juridiques */
  var EXCLUS_TERME = ['qualification', 'muatamad'];
  var CHAMPS_TERME_FICHE = CHAMPS_FICHE.filter(function (k) { return EXCLUS_TERME.indexOf(k) < 0; }).concat(['type']);
  var TEXTES_TERME = TEXTES_OBLIGATOIRES.filter(function (k) { return EXCLUS_TERME.indexOf(k) < 0 && k !== 'matn'; });
  /* v1.3 : une fiche « terme » tirée d'un ajout propre à al-Ḥaṭṭāb n'a pas de matn de Khalīl :
     « matn » vaut alors null et le champ facultatif « nass » porte la phrase arabe clé d'al-Ḥaṭṭāb. */
  var FACULTATIFS_TERME = ['nass'];
  CHAMPS_TERME_FICHE = CHAMPS_TERME_FICHE.concat(FACULTATIFS_TERME);
  var LISTES_DE_TEXTES = ['tanbihat', 'divergences', 'erreurs_frequentes', 'alertes'];
  var CHAMPS_TERME = ['ar', 'translit', 'def'];

  var RE_ID_FICHE = /^([a-z]{3})-(\d{2})-(\d{2})-(\d{2})([a-z]?)$/;
  var RE_ID_SYNTHESE = /^([a-z]{3})-(\d{2})-(\d{2})-syn$/;
  var RE_LETTRE_ARABE = /[ء-ي]/;
  var RE_HARAKA = /[ً-ْ]/;

  var registre = {
    manifeste: null,
    plan: null,
    fiches: new Map(),     // id → { fiche, source }
    termes: [],
    termesParAr: new Map(),
    anomalies: [],
    fichiers: [],          // { src, etat: 'charge' | 'introuvable' | 'erreur', detail }
    verrouille: false
  };
  var fichierCourant = null;

  function signaler(niveau, message, id) {
    var a = Object.freeze({ niveau: niveau, source: fichierCourant || '—', id: id || null, message: message });
    registre.anomalies.push(a);
    var log = niveau === 'erreur' ? console.error : console.warn;
    log('[données] ' + (id ? id + ' — ' : '') + message + (fichierCourant ? ' (' + fichierCourant + ')' : ''));
  }

  function ecritureAutorisee(op) {
    if (registre.verrouille) {
      signaler('erreur', 'Écriture refusée (' + op + ') : le registre est en lecture seule une fois les données chargées.');
      return false;
    }
    return true;
  }

  /* --- Validation d'une fiche --- */

  function validerQuiz(quiz, min, max, err, avert) {
    if (!est.tableau(quiz)) { err('« quiz » doit être un tableau.'); return; }
    if (quiz.length < min || quiz.length > max) {
      avert('Quiz : ' + pluriel(quiz.length, 'question', 'questions') + ', attendu ' + min + ' à ' + max + '.');
    }
    quiz.forEach(function (x, i) {
      var n = 'Quiz Q' + (i + 1) + ' : ';
      if (!est.objet(x)) { err(n + 'chaque question doit être un objet.'); return; }
      if (!est.chaine(x.q)) err(n + 'énoncé « q » manquant.');
      if (!est.tableau(x.choix) || x.choix.length < 2 || !x.choix.every(est.chaine)) {
        err(n + '« choix » doit contenir au moins 2 réponses non vides.');
      } else if (!Number.isInteger(x.bonne) || x.bonne < 0 || x.bonne >= x.choix.length) {
        err(n + '« bonne » doit être l\'indice (compté à partir de 0) de l\'un des choix.');
      }
      if (!est.chaine(x.explication)) err(n + '« explication » manquante.');
      Object.keys(x).forEach(function (k) {
        if (['q', 'choix', 'bonne', 'explication'].indexOf(k) < 0) avert(n + 'champ non prévu « ' + k + ' ».');
      });
    });
  }

  function verifierVocalisation(texte, champ, avert) {
    if (!est.chaine(texte)) return;
    if (!RE_LETTRE_ARABE.test(texte)) { avert('« ' + champ + ' » ne contient aucune lettre arabe.'); return; }
    if (!RE_HARAKA.test(texte)) avert('« ' + champ + ' » : aucune voyelle détectée, vocalisation à contrôler.');
  }

  function validerFicheMasala(f, err, avert, estTerme) {
    var champs = estTerme ? CHAMPS_TERME_FICHE : CHAMPS_FICHE;
    var textes = estTerme ? TEXTES_TERME : TEXTES_OBLIGATOIRES;
    Object.keys(f).forEach(function (k) {
      if (champs.indexOf(k) < 0) avert('Champ non prévu par le gabarit' + (estTerme ? ' de fiche « terme »' : '') + ' : « ' + k + ' ».');
    });
    champs.forEach(function (k) {
      if (estTerme && FACULTATIFS_TERME.indexOf(k) >= 0) return;
      if (!(k in f)) err('Champ manquant : « ' + k + ' ».');
    });

    var m = RE_ID_FICHE.exec(f.id);
    if (!m) {
      avert('Identifiant hors du format kitab-bab-fasl-masala (ex. tah-01-02-03 ou tah-01-02-03a).');
    } else {
      if (f.kitab !== undefined && m[1] !== f.kitab) avert('L\'identifiant ne correspond pas au champ « kitab » (' + f.kitab + ').');
      if (f.bab !== undefined && m[2] !== f.bab) avert('L\'identifiant ne correspond pas au champ « bab » (' + f.bab + ').');
      if (f.fasl !== undefined && m[3] !== f.fasl) avert('L\'identifiant ne correspond pas au champ « fasl » (' + f.fasl + ').');
      if (Number.isInteger(f.ordre) && Number(m[4]) !== f.ordre) avert('L\'identifiant ne correspond pas au champ « ordre » (' + f.ordre + ').');
    }

    if ('ordre' in f && (!Number.isInteger(f.ordre) || f.ordre < 1)) err('« ordre » doit être un entier positif.');

    textes.forEach(function (k) {
      if (k in f && !est.chaine(f[k])) err('« ' + k + ' » doit être un texte non vide.');
    });
    if (estTerme) {
      /* matn de Khalīl, ou bien matn null + nass (texte d'al-Ḥaṭṭāb) */
      if ('matn' in f && f.matn !== null && !est.chaine(f.matn)) err('« matn » doit être un texte non vide, ou null si la fiche porte un « nass ».');
      if ('nass' in f && !est.chaine(f.nass)) err('« nass » doit être un texte non vide (phrase arabe d\'al-Ḥaṭṭāb).');
      if ('matn' in f && f.matn === null && !est.chaine(f.nass)) err('« matn » est null : le champ « nass » (texte d\'al-Ḥaṭṭāb) est alors obligatoire.');
      if (est.chaine(f.matn) && est.chaine(f.nass)) avert('La fiche porte à la fois un « matn » et un « nass » : seul l\'un des deux est prévu.');
      verifierVocalisation(f.nass, 'nass', avert);
    }
    verifierVocalisation(f.matn, 'matn', avert);
    verifierVocalisation(f.titre_ar, 'titre_ar', avert);

    if ('tarjih_hattab' in f && f.tarjih_hattab !== null && !est.chaine(f.tarjih_hattab)) {
      err('« tarjih_hattab » doit être un texte ou null.');
    }

    if (!estTerme && 'qualification' in f) {
      var q = f.qualification;
      if (!est.objet(q)) {
        err('« qualification » doit être un objet { hukm, nature, effet_si_omis }.');
      } else {
        if (ENUM.hukm.indexOf(q.hukm) < 0) err('qualification.hukm invalide (« ' + q.hukm + ' ») ; valeurs admises : ' + ENUM.hukm.join(', ') + '.');
        if (ENUM.nature.indexOf(q.nature) < 0) err('qualification.nature invalide (« ' + q.nature + ' ») ; valeurs admises : ' + ENUM.nature.join(', ') + '.');
        if (!('effet_si_omis' in q)) err('qualification.effet_si_omis manquant (texte, ou null si le passage ne le précise pas).');
        else if (q.effet_si_omis !== null && !est.texte(q.effet_si_omis)) err('qualification.effet_si_omis doit être un texte ou null.');
        Object.keys(q).forEach(function (k) {
          if (['hukm', 'nature', 'effet_si_omis'].indexOf(k) < 0) avert('qualification : champ non prévu « ' + k + ' ».');
        });
      }
    }

    if ('aqwal' in f) {
      if (!est.tableau(f.aqwal)) err('« aqwal » doit être un tableau.');
      else f.aqwal.forEach(function (a, i) {
        var n = 'Avis n° ' + (i + 1) + ' : ';
        if (!est.objet(a)) { err(n + 'doit être un objet { auteur, avis, statut }.'); return; }
        if (!est.chaine(a.auteur)) err(n + '« auteur » manquant (écrire « avis rapporté sans attribution » si le texte ne nomme personne).');
        if (!est.chaine(a.avis)) err(n + '« avis » manquant.');
        if (ENUM.statut.indexOf(a.statut) < 0) err(n + 'statut invalide (« ' + a.statut + ' ») ; valeurs admises : ' + ENUM.statut.join(', ') + '.');
      });
    }

    LISTES_DE_TEXTES.forEach(function (k) {
      if (!(k in f)) return;
      if (!est.tableau(f[k]) || !f[k].every(est.chaine)) err('« ' + k + ' » doit être un tableau de textes non vides (éventuellement vide).');
    });

    if ('termes' in f) {
      if (!est.tableau(f.termes)) err('« termes » doit être un tableau.');
      else f.termes.forEach(function (t, i) {
        if (!est.objet(t) || !CHAMPS_TERME.every(function (k) { return est.chaine(t[k]); })) {
          err('Terme n° ' + (i + 1) + ' : il faut « ar », « translit » et « def » non vides.');
        } else {
          verifierVocalisation(t.ar, 'termes[' + i + '].ar', avert);
        }
      });
    }

    if ('quiz' in f) validerQuiz(f.quiz, 3, 5, err, avert);

    if ('ref' in f) {
      var r = f.ref;
      if (!est.objet(r)) err('« ref » doit être un objet { ouvrage, tome, pages }.');
      else {
        if (!est.chaine(r.ouvrage)) err('ref.ouvrage manquant.');
        if (!(Number.isInteger(r.tome) && r.tome > 0) && !est.chaine(r.tome)) err('ref.tome manquant.');
        if (!est.chaine(r.pages)) err('ref.pages manquant.');
      }
    }

    if ('verification' in f && ENUM.verification.indexOf(f.verification) < 0) {
      err('« verification » invalide (« ' + f.verification + ' ») ; valeurs admises : verifie, a_revoir.');
    }
    if (f.verification === 'verifie' && est.tableau(f.alertes) && f.alertes.length) {
      avert('Fiche marquée « verifie » avec ' + pluriel(f.alertes.length, 'alerte', 'alertes') + ' : s\'assurer qu\'aucune n\'est bloquante.');
    }
  }

  function validerSynthese(f, err, avert) {
    ['kitab', 'bab', 'fasl', 'titre'].forEach(function (k) {
      if (!est.chaine(f[k])) err('Synthèse : « ' + k + ' » manquant.');
    });
    var m = RE_ID_SYNTHESE.exec(f.id);
    if (!m) avert('Identifiant de synthèse hors du format kitab-bab-fasl-syn (ex. tah-01-02-syn).');
    else if (m[1] !== f.kitab || m[2] !== f.bab || m[3] !== f.fasl) avert('L\'identifiant de synthèse ne correspond pas aux champs kitab / bab / fasl.');
    if (!('quiz' in f)) err('Synthèse : « quiz » manquant.');
    else validerQuiz(f.quiz, 5, 10, err, avert);
  }

  function validerFiche(f) {
    if (!est.objet(f)) { signaler('erreur', 'Élément ignoré : une fiche doit être un objet.'); return false; }
    if (!est.chaine(f.id)) { signaler('erreur', 'Fiche ignorée : champ « id » manquant ou vide.'); return false; }
    var id = f.id;
    var err = function (msg) { signaler('erreur', msg, id); };
    var avert = function (msg) { signaler('avertissement', msg, id); };
    ['kitab', 'bab', 'fasl'].forEach(function (k) {
      if (!est.texte(f[k])) return;
      var re = k === 'kitab' ? /^[a-z]{3}$/ : /^\d{2}$/;
      if (!re.test(f[k])) err('« ' + k + ' » mal formé (« ' + f[k] + ' »).');
    });
    if ('type' in f) {
      if (f.type === 'synthese') validerSynthese(f, err, avert);
      else if (f.type === 'terme') validerFicheMasala(f, err, avert, true);
      else err('Valeur de « type » inconnue (« ' + f.type + ' ») ; valeurs prévues : "synthese", "terme".');
    } else {
      validerFicheMasala(f, err, avert);
    }
    return true;
  }

  /* --- Validation du plan --- */

  function validerPlan(plan) {
    if (!est.objet(plan) || !est.tableau(plan.kutub)) {
      signaler('erreur', 'Plan invalide : il faut un objet { kutub: [ … ] }.');
      return false;
    }
    var vus = new Set();
    function noeud(n, niveau, enfants, parentId) {
      var lib = niveau + (n && n.id ? ' « ' + n.id + ' »' : '');
      if (!est.objet(n)) { signaler('erreur', 'Plan : un élément de niveau ' + niveau + ' n\'est pas un objet.'); return; }
      if (!est.chaine(n.id)) { signaler('erreur', 'Plan : ' + niveau + ' sans « id ».'); return; }
      if (vus.has(n.id)) signaler('erreur', 'Plan : identifiant en double « ' + n.id + ' ».');
      vus.add(n.id);
      if (parentId && n.id.indexOf(parentId + '-') !== 0) signaler('avertissement', 'Plan : ' + lib + ' ne commence pas par l\'identifiant de son parent (' + parentId + ').');
      if (!est.chaine(n.titre)) signaler('avertissement', 'Plan : ' + lib + ' sans « titre ».');
      if (enfants) {
        if (n[enfants.cle] === undefined) return;
        if (!est.tableau(n[enfants.cle])) { signaler('erreur', 'Plan : ' + lib + ' — « ' + enfants.cle + ' » doit être un tableau.'); return; }
        n[enfants.cle].forEach(function (c) { noeud(c, enfants.niveau, enfants.suite, n.id); });
      }
    }
    var structure = {
      cle: 'abwab', niveau: 'bāb',
      suite: { cle: 'fusul', niveau: 'faṣl', suite: { cle: 'masail', niveau: 'masʾala', suite: null } }
    };
    plan.kutub.forEach(function (k) { noeud(k, 'kitāb', structure, null); });
    return true;
  }

  function idsDuPlan() {
    var ids = new Set();
    function parcourir(n) {
      if (!est.objet(n)) return;
      if (est.chaine(n.id)) ids.add(n.id);
      ['abwab', 'fusul', 'masail'].forEach(function (c) { if (est.tableau(n[c])) n[c].forEach(parcourir); });
    }
    if (registre.plan) registre.plan.kutub.forEach(parcourir);
    return ids;
  }

  function controlerCoherence() {
    var ids = idsDuPlan();
    registre.fiches.forEach(function (entree, id) {
      var f = entree.fiche;
      var cible = f.type === 'synthese' ? f.kitab + '-' + f.bab + '-' + f.fasl : id;
      if (!ids.has(cible)) {
        fichierCourant = entree.source;
        signaler('avertissement', f.type === 'synthese'
          ? 'Synthèse rattachée à un faṣl absent du plan (' + cible + ').'
          : 'Fiche absente du plan (data/plan.js).', id);
      }
    });
    fichierCourant = null;
  }

  /* --- Tri des fiches --- */

  function ordreKutub() {
    var o = {};
    if (registre.plan) registre.plan.kutub.forEach(function (k, i) { if (est.objet(k)) o[k.id] = i; });
    return o;
  }

  function comparerFiches(a, b, ok) {
    var ka = a.kitab in ok ? ok[a.kitab] : 1e6, kb = b.kitab in ok ? ok[b.kitab] : 1e6;
    if (ka !== kb) return ka - kb;
    if (a.kitab !== b.kitab) return String(a.kitab).localeCompare(String(b.kitab));
    if (a.bab !== b.bab) return String(a.bab).localeCompare(String(b.bab));
    if (a.fasl !== b.fasl) return String(a.fasl).localeCompare(String(b.fasl));
    var oa = a.type === 'synthese' ? Infinity : (a.ordre || 0);
    var ob = b.type === 'synthese' ? Infinity : (b.ordre || 0);
    if (oa !== ob) return oa - ob;
    return String(a.id).localeCompare(String(b.id));
  }

  var data = Object.freeze({
    /* Écriture — réservée aux fichiers de data/ pendant le chargement */
    manifeste: function (liste) {
      if (registre.manifeste) { console.error('[données] Le manifeste est déclaré deux fois ; seul le premier est retenu.'); return; }
      if (!est.tableau(liste) || !liste.every(est.chaine)) {
        console.error('[données] App.data.manifeste attend un tableau de chemins de fichiers.');
        registre.manifeste = [];
        return;
      }
      registre.manifeste = liste.slice();
    },

    definirPlan: function (plan) {
      if (!ecritureAutorisee('definirPlan')) return;
      if (registre.plan) { signaler('erreur', 'Le plan est défini deux fois ; seule la première définition est conservée.'); return; }
      if (!validerPlan(plan)) return;
      registre.plan = geler(cloner(plan));
    },

    ajouterFiches: function (liste) {
      if (!ecritureAutorisee('ajouterFiches')) return;
      if (!est.tableau(liste)) { signaler('erreur', 'App.data.ajouterFiches attend un tableau de fiches.'); return; }
      liste.forEach(function (f) {
        /* Le doublon est rejeté avant tout contrôle : ses anomalies ne doivent pas être imputées à la fiche conservée */
        if (est.objet(f) && est.chaine(f.id) && registre.fiches.has(f.id)) {
          signaler('erreur', 'Identifiant en double : déjà défini dans ' + registre.fiches.get(f.id).source + '. Ce doublon est ignoré ; seule la première fiche est conservée.', f.id);
          return;
        }
        if (!validerFiche(f)) return;
        registre.fiches.set(f.id, { fiche: geler(cloner(f)), source: fichierCourant || '—' });
      });
    },

    ajouterTermes: function (liste) {
      if (!ecritureAutorisee('ajouterTermes')) return;
      if (!est.tableau(liste)) { signaler('erreur', 'App.data.ajouterTermes attend un tableau de termes.'); return; }
      liste.forEach(function (t, i) {
        if (!est.objet(t) || !CHAMPS_TERME.every(function (k) { return est.chaine(t[k]); })) {
          signaler('erreur', 'Glossaire : terme n° ' + (i + 1) + ' ignoré (il faut « ar », « translit » et « def » non vides).');
          return;
        }
        Object.keys(t).forEach(function (k) {
          if (CHAMPS_TERME.indexOf(k) < 0) signaler('avertissement', 'Glossaire : champ non prévu « ' + k + ' » pour « ' + t.ar + ' ».');
        });
        if (registre.termesParAr.has(t.ar)) {
          signaler('avertissement', 'Glossaire : terme en double « ' + t.ar + ' » ; seule la première définition est conservée.');
          return;
        }
        if (!RE_HARAKA.test(t.ar)) signaler('avertissement', 'Glossaire : « ' + t.ar + ' » sans voyelle détectée, vocalisation à contrôler.');
        var copie = geler(cloner(t));
        registre.termes.push(copie);
        registre.termesParAr.set(t.ar, copie);
      });
    },

    /* Lecture — pour tous les blocs */
    plan: function () { return registre.plan; },

    fiche: function (id) {
      var e = registre.fiches.get(id);
      return e ? e.fiche : null;
    },

    fiches: function (filtre) {
      filtre = filtre || {};
      var ok = ordreKutub();
      var res = [];
      registre.fiches.forEach(function (e) {
        var f = e.fiche;
        if (filtre.kitab && f.kitab !== filtre.kitab) return;
        if (filtre.bab && f.bab !== filtre.bab) return;
        if (filtre.fasl && f.fasl !== filtre.fasl) return;
        if (filtre.type === 'synthese' && f.type !== 'synthese') return;
        if (filtre.type === 'masala' && f.type === 'synthese') return;   /* « masala » : toute fiche de contenu (masʾala ou terme) */
        if (filtre.type === 'terme' && f.type !== 'terme') return;
        res.push(f);
      });
      return res.sort(function (a, b) { return comparerFiches(a, b, ok); });
    },

    termes: function () { return registre.termes.slice(); },

    terme: function (ar) { return registre.termesParAr.get(ar) || null; },

    anomalies: function (filtre) {
      filtre = filtre || {};
      return registre.anomalies.filter(function (a) {
        if (filtre.id && a.id !== filtre.id) return false;
        if (filtre.niveau && a.niveau !== filtre.niveau) return false;
        return true;
      });
    },

    etat: function () {
      var nbSyntheses = 0;
      registre.fiches.forEach(function (e) { if (e.fiche.type === 'synthese') nbSyntheses++; });
      return Object.freeze({
        fiches: registre.fiches.size - nbSyntheses,
        syntheses: nbSyntheses,
        termes: registre.termes.length,
        kutub: registre.plan ? registre.plan.kutub.length : 0,
        erreurs: registre.anomalies.filter(function (a) { return a.niveau === 'erreur'; }).length,
        avertissements: registre.anomalies.filter(function (a) { return a.niveau === 'avertissement'; }).length,
        fichiers: registre.fichiers.map(function (f) { return Object.freeze({ src: f.src, etat: f.etat, detail: f.detail }); }),
        verrouille: registre.verrouille
      });
    }
  });

  /* ======================================================================
     Zones, emplacements et vues
     ====================================================================== */

  function zone(nom) { return document.querySelector('[data-zone="' + nom + '"]'); }

  function verifierBloc(bloc) {
    if (typeof bloc !== 'string' || !/^b[1-9]$/.test(bloc)) {
      throw new Error('[socle] Identifiant de bloc invalide : « ' + bloc + ' » (attendu : b1 à b9).');
    }
  }

  function emplacement(bloc, nomZone) {
    verifierBloc(bloc);
    if (ZONES_EMPLACEMENT.indexOf(nomZone) < 0) {
      throw new Error('[socle] Zone inconnue « ' + nomZone + ' » (zones possibles : ' + ZONES_EMPLACEMENT.join(', ') + ').');
    }
    var z = zone(nomZone);
    var existant = z.querySelector(':scope > [data-bloc="' + bloc + '"]');
    if (existant) return existant;
    var n = el('div', { class: 'socle-emplacement', 'data-bloc': bloc });
    /* Ordre stable : les emplacements sont rangés par numéro de bloc */
    var suivant = Array.prototype.find.call(z.children, function (c) { return (c.getAttribute('data-bloc') || '') > bloc; });
    z.insertBefore(n, suivant || null);
    return n;
  }

  function vue(bloc, nom) {
    verifierBloc(bloc);
    if (typeof nom !== 'string' || !/^[a-z][a-z0-9-]*$/.test(nom)) {
      throw new Error('[socle] Nom de vue invalide : « ' + nom + ' » (minuscules, chiffres et tirets).');
    }
    var principal = zone('principal');
    var existante = principal.querySelector(':scope > [data-vue="' + nom + '"]');
    if (existante) {
      if (existante.getAttribute('data-bloc') !== bloc) {
        throw new Error('[socle] La vue « ' + nom + ' » appartient déjà au bloc ' + existante.getAttribute('data-bloc') + '.');
      }
      return existante;
    }
    var s = el('section', { class: 'socle-vue', 'data-vue': nom, 'data-bloc': bloc, hidden: true });
    principal.appendChild(s);
    return s;
  }

  var vueCourante = 'accueil';

  function activerVue(nom) {
    var principal = zone('principal');
    var cible = principal.querySelector(':scope > [data-vue="' + nom + '"]');
    if (!cible) { console.warn('[socle] vue:activer — vue inconnue « ' + nom + ' ».'); return; }
    Array.prototype.forEach.call(principal.querySelectorAll(':scope > .socle-vue'), function (s) {
      s.hidden = s !== cible;
    });
    var precedente = vueCourante;
    vueCourante = nom;
    fermerLateral();
    window.scrollTo(0, 0);
    bus.emit('vue:changee', { vue: nom, precedente: precedente });
  }

  /* ======================================================================
     Interface : menu latéral (petits écrans), thème, taille de l'arabe
     ====================================================================== */

  var appEl, boutonMenu, voile;

  function lateralOuvert() { return appEl.classList.contains('socle-app--lateral-ouvert'); }

  function ouvrirLateral() {
    appEl.classList.add('socle-app--lateral-ouvert');
    boutonMenu.setAttribute('aria-expanded', 'true');
    boutonMenu.setAttribute('aria-label', 'Masquer le plan du cours');
    voile.hidden = false;
  }

  function fermerLateral() {
    if (!appEl || !lateralOuvert()) return;
    appEl.classList.remove('socle-app--lateral-ouvert');
    boutonMenu.setAttribute('aria-expanded', 'false');
    boutonMenu.setAttribute('aria-label', 'Afficher le plan du cours');
    voile.hidden = true;
  }

  /*
   * Mémoire du dernier affichage appliqué (clé propre au socle) : relue par le petit script de index.html
   * pour appliquer thème et taille de l'arabe avant le premier affichage, sans lire les données d'un autre bloc.
   */
  var CLE_AFFICHAGE = 'mawahib.socle.affichage';
  function memoriserAffichage(maj) {
    try {
      var p = JSON.parse(window.localStorage.getItem(CLE_AFFICHAGE) || 'null');
      if (!p || typeof p !== 'object') p = {};
      Object.keys(maj).forEach(function (k) { p[k] = maj[k]; });
      window.localStorage.setItem(CLE_AFFICHAGE, JSON.stringify(p));
    } catch (e) { /* stockage indisponible : sans conséquence */ }
  }

  function installerInterface() {
    appEl = document.getElementById('socle-app');
    boutonMenu = appEl.querySelector('.socle-menu');
    voile = appEl.querySelector('.socle-voile');

    boutonMenu.addEventListener('click', function () {
      if (lateralOuvert()) fermerLateral(); else ouvrirLateral();
    });
    voile.addEventListener('click', fermerLateral);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lateralOuvert()) { fermerLateral(); boutonMenu.focus(); }
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (m) { if (m.matches) fermerLateral(); });

    bus.on('vue:activer', function (d) {
      if (!d || typeof d.vue !== 'string') { console.warn('[socle] vue:activer attend { vue: "nom" }.'); return; }
      activerVue(d.vue);
    });

    /* Charge utile prévue pour B1 : { nom, params, hash } — à confirmer à la livraison de B1 */
    bus.on('route:change', function (r) {
      if (r && r.nom === 'accueil') activerVue('accueil');
    });

    /* Événements prévus pour B8 */
    bus.on('theme:appliquer', function (d) {
      var t = d && d.theme;
      if (t === 'clair' || t === 'sombre') document.documentElement.setAttribute('data-theme', t);
      else if (t === 'auto') document.documentElement.removeAttribute('data-theme');
      else { console.warn('[socle] theme:appliquer attend { theme: "clair" | "sombre" | "auto" }.'); return; }
      memoriserAffichage({ theme: t });
    });
    bus.on('arabe:echelle', function (d) {
      var e = d && Number(d.echelle);
      if (!isFinite(e)) { console.warn('[socle] arabe:echelle attend { echelle: nombre }.'); return; }
      e = Math.min(1.8, Math.max(0.8, e));
      document.documentElement.style.setProperty('--echelle-arabe', String(e));
      memoriserAffichage({ echelle: e });
    });
  }

  /* ======================================================================
     Chargement des fichiers
     ====================================================================== */

  var erreursScripts = [];
  window.addEventListener('error', function (e) {
    if (e && e.filename) erreursScripts.push({ fichier: e.filename, message: e.message, ligne: e.lineno });
  });

  function erreursDe(src) {
    return erreursScripts.filter(function (x) {
      try { return decodeURI(x.fichier).split('?')[0].slice(-src.length) === src; }
      catch (_) { return x.fichier.slice(-src.length) === src; }
    });
  }

  function chargerScript(src) {
    return new Promise(function (resoudre) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () { resoudre(true); };
      s.onerror = function () { s.remove(); resoudre(false); };
      document.head.appendChild(s);
    });
  }

  function chargerCss(href) {
    return new Promise(function (resoudre) {
      var fini = false;
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = href;
      var terminer = function (ok) { if (fini) return; fini = true; if (!ok) l.remove(); resoudre(ok); };
      l.onload = function () { terminer(true); };
      l.onerror = function () { terminer(false); };
      setTimeout(function () { terminer(true); }, 4000);
      document.head.appendChild(l);
    });
  }

  function chargerDonnees() {
    var liste = registre.manifeste;
    if (!liste) {
      fichierCourant = 'data/manifeste.js';
      signaler('erreur', 'Manifeste absent : data/manifeste.js est introuvable ou n\'appelle pas App.data.manifeste([...]).');
      fichierCourant = null;
      return Promise.resolve();
    }
    return liste.reduce(function (p, src) {
      return p.then(function () {
        fichierCourant = src;
        return chargerScript(src).then(function (ok) {
          var errs = erreursDe(src);
          var entree = { src: src, etat: 'charge', detail: '' };
          if (!ok) {
            entree.etat = 'introuvable';
            signaler('erreur', 'Fichier de données introuvable.');
          } else if (errs.length) {
            entree.etat = 'erreur';
            entree.detail = errs[0].message + ' (ligne ' + errs[0].ligne + ')';
            signaler('erreur', 'Erreur JavaScript dans le fichier : ' + entree.detail + '. Son contenu n\'a pas été chargé, ou seulement en partie.');
          }
          registre.fichiers.push(entree);
        });
      });
    }, Promise.resolve()).then(function () { fichierCourant = null; });
  }

  function chargerBlocs() {
    return BLOCS.reduce(function (p, b) {
      return p.then(function () {
        return chargerScript(b.js).then(function (ok) {
          if (!ok) { b.etat = 'absent'; return; }
          var errs = erreursDe(b.js);
          if (errs.length) {
            b.etat = 'erreur';
            b.detail = errs[0].message + ' (ligne ' + errs[0].ligne + ')';
            return;
          }
          var obj = App.blocks[b.nom];
          if (!obj || typeof obj.init !== 'function') {
            b.etat = 'erreur';
            b.detail = 'Le fichier ne définit pas App.blocks.' + b.nom + ' avec une méthode init().';
            return;
          }
          b.etat = 'charge';
          if (b.css) return chargerCss(b.css).then(function (cssOk) { if (!cssOk) b.detail = 'Feuille ' + b.css + ' introuvable.'; });
        });
      });
    }, Promise.resolve());
  }

  function initialiserBlocs() {
    BLOCS.forEach(function (b) {
      if (b.etat !== 'charge') return;
      try {
        App.blocks[b.nom].init();
        b.etat = 'actif';
      } catch (e) {
        b.etat = 'erreur';
        b.detail = 'init() a échoué : ' + (e && e.message ? e.message : e);
        console.error('[socle] ' + b.id.toUpperCase() + ' — ' + b.nom + ' : init() a échoué.', e);
      }
    });
  }

  /* ======================================================================
     Accueil : résumé du contenu et état technique
     ====================================================================== */

  var LIBELLES_BLOC = {
    actif: ['actif', 'ok'], absent: ['pas encore construit', ''], erreur: ['erreur', 'erreur'],
    charge: ['chargé', ''], en_attente: ['en attente', '']
  };
  var LIBELLES_FICHIER = { charge: ['chargé', 'ok'], introuvable: ['introuvable', 'erreur'], erreur: ['erreur', 'erreur'] };

  function pastille(texte, variante) {
    return el('span', { class: 'socle-pastille' + (variante ? ' socle-pastille--' + variante : ''), text: texte });
  }

  function rendreAccueil() {
    var conteneur = document.querySelector('.socle-accueil-etat');
    if (!conteneur) return;
    var e = data.etat();
    conteneur.textContent = '';

    var resume;
    if (e.fiches === 0) {
      resume = 'Aucune leçon n\'est encore publiée.';
    } else {
      resume = pluriel(e.fiches, 'fiche disponible', 'fiches disponibles') +
        (e.syntheses ? ', ' + pluriel(e.syntheses, 'synthèse', 'synthèses') : '') +
        (e.termes ? ', ' + pluriel(e.termes, 'terme au glossaire', 'termes au glossaire') : '') + '.';
    }
    conteneur.appendChild(el('p', { class: 'socle-etat-resume', text: resume }));

    var corps = el('div', { class: 'socle-etat-corps' });

    corps.appendChild(el('h2', { text: 'Blocs du site' }));
    var ulB = el('ul', { class: 'socle-etat-liste' });
    ulB.appendChild(el('li', null, [el('span', { text: 'B0 — Socle v' + VERSION }), pastille('actif', 'ok')]));
    BLOCS.forEach(function (b) {
      var l = LIBELLES_BLOC[b.etat] || [b.etat, ''];
      ulB.appendChild(el('li', null, [
        el('span', { text: b.id.toUpperCase() + ' — ' + b.nom }),
        pastille(l[0], l[1]),
        b.detail ? el('span', { class: 'socle-anomalie-source', text: b.detail }) : null
      ]));
    });
    corps.appendChild(ulB);

    corps.appendChild(el('h2', { text: 'Fichiers de données' }));
    var ulF = el('ul', { class: 'socle-etat-liste' });
    if (!e.fichiers.length) ulF.appendChild(el('li', { text: 'Aucun fichier déclaré dans data/manifeste.js.' }));
    e.fichiers.forEach(function (f) {
      var l = LIBELLES_FICHIER[f.etat] || [f.etat, ''];
      ulF.appendChild(el('li', null, [el('span', { class: 'socle-anomalie-source', text: f.src }), pastille(l[0], l[1])]));
    });
    corps.appendChild(ulF);

    corps.appendChild(el('h2', { text: 'Contrôle des données' }));
    var ulA = el('ul', { class: 'socle-etat-liste' });
    var anomalies = data.anomalies();
    if (!anomalies.length) ulA.appendChild(el('li', { text: 'Aucune anomalie détectée.' }));
    anomalies.forEach(function (a) {
      ulA.appendChild(el('li', null, [
        pastille(a.niveau === 'erreur' ? 'erreur' : 'avertissement', a.niveau),
        el('span', { text: (a.id ? a.id + ' — ' : '') + a.message }),
        el('span', { class: 'socle-anomalie-source', text: a.source })
      ]));
    });
    corps.appendChild(ulA);

    var nbBlocsErreur = BLOCS.filter(function (b) { return b.etat === 'erreur'; }).length;
    var details = el('details', { class: 'socle-etat-tech', open: (e.erreurs + nbBlocsErreur) > 0 }, [
      el('summary', {
        text: 'État technique — ' + pluriel(e.erreurs + nbBlocsErreur, 'erreur', 'erreurs') + ', ' +
          pluriel(e.avertissements, 'avertissement', 'avertissements')
      }),
      corps
    ]);
    conteneur.appendChild(details);
  }

  /* ======================================================================
     Démarrage
     ====================================================================== */

  function demarrer() {
    installerInterface();
    chargerDonnees()
      .then(function () {
        controlerCoherence();
        registre.verrouille = true;
        return chargerBlocs();
      })
      .then(function () {
        initialiserBlocs();
        rendreAccueil();
        var e = data.etat();
        bus.emit('app:pret', Object.freeze({
          version: VERSION,
          blocs: App.blocs(),
          donnees: Object.freeze({
            fiches: e.fiches, syntheses: e.syntheses, termes: e.termes, kutub: e.kutub,
            erreurs: e.erreurs, avertissements: e.avertissements
          })
        }));
      })
      .catch(function (e) {
        console.error('[socle] Échec du démarrage :', e);
        var c = document.querySelector('.socle-accueil-etat');
        if (c) c.textContent = 'Le site n\'a pas pu démarrer. Ouvrez la console du navigateur pour le détail.';
      });
  }

  var App = {
    version: VERSION,
    debug: DEBUG,
    blocks: {},
    bus: bus,
    data: data,
    emplacement: emplacement,
    vue: vue,
    vueActive: function () { return vueCourante; },
    blocs: function () {
      return BLOCS.map(function (b) { return Object.freeze({ id: b.id, nom: b.nom, etat: b.etat, detail: b.detail }); });
    }
  };
  Object.freeze(App);
  window.App = App;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();
