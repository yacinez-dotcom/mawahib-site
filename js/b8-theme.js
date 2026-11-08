/* Bloc B8 — Thème — v1.0 — dépendances : B0 Socle v1.0 (écoute theme:appliquer et arabe:echelle) — événements émis : theme:appliquer, arabe:echelle — événements écoutés : aucun (événement « storage » du navigateur) */

/*
 * Réglages d'affichage, dans la zone « pied » (bas de page) :
 *   - thème : automatique (suit le système), clair ou sombre ;
 *   - taille du texte arabe : de 80 % à 180 %, par pas de 10 %.
 * B8 ne modifie aucun style lui-même : il émet theme:appliquer et arabe:echelle, que le socle applique.
 * Préférences enregistrées dans le navigateur (localStorage, clé « mawahib.affichage.v1 »), lectures et écritures
 * protégées par try/catch ; synchronisées entre onglets. Elles sont appliquées dès l'initialisation du bloc.
 */

(function () {
  'use strict';

  var CLE = 'mawahib.affichage.v1';
  var THEMES = [
    { valeur: 'auto', label: 'Automatique' },
    { valeur: 'clair', label: 'Clair' },
    { valeur: 'sombre', label: 'Sombre' }
  ];
  var MIN = 0.8, MAX = 1.8, PAS = 0.1, DEFAUT = 1;

  var prefs = { theme: 'auto', echelle: DEFAUT };
  var radios = [], valeurEchelleEl, moinsEl, plusEl, resetEl;

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

  function borner(e) {
    var v = Math.round(Number(e) * 10) / 10;
    if (!isFinite(v)) return DEFAUT;
    return Math.min(MAX, Math.max(MIN, v));
  }

  /* ----------------------------------------------------------------------
     Stockage
     ---------------------------------------------------------------------- */

  function lire() {
    var p = { theme: 'auto', echelle: DEFAUT };
    try {
      var brut = window.localStorage.getItem(CLE);
      if (brut) {
        var o = JSON.parse(brut);
        if (o && typeof o === 'object') {
          if (THEMES.some(function (t) { return t.valeur === o.theme; })) p.theme = o.theme;
          if (typeof o.echelle === 'number') p.echelle = borner(o.echelle);
        }
      }
    } catch (e) { /* stockage indisponible ou illisible : réglages par défaut */ }
    return p;
  }

  function ecrire() {
    try { window.localStorage.setItem(CLE, JSON.stringify(prefs)); }
    catch (e) { /* stockage indisponible : réglage valable pour cette visite */ }
  }

  /* ----------------------------------------------------------------------
     Application et affichage
     ---------------------------------------------------------------------- */

  function appliquer() {
    App.bus.emit('theme:appliquer', { theme: prefs.theme });
    App.bus.emit('arabe:echelle', { echelle: prefs.echelle });
    majControles();
  }

  function majControles() {
    radios.forEach(function (r) { r.checked = r.value === prefs.theme; });
    if (!valeurEchelleEl) return;
    valeurEchelleEl.textContent = Math.round(prefs.echelle * 100) + ' %';
    moinsEl.disabled = prefs.echelle <= MIN + 1e-9;
    plusEl.disabled = prefs.echelle >= MAX - 1e-9;
    resetEl.disabled = Math.abs(prefs.echelle - DEFAUT) < 1e-9;
  }

  function changerTheme(t) {
    prefs.theme = t;
    ecrire();
    App.bus.emit('theme:appliquer', { theme: t });
    majControles();
  }

  function changerEchelle(e) {
    prefs.echelle = borner(e);
    ecrire();
    App.bus.emit('arabe:echelle', { echelle: prefs.echelle });
    majControles();
  }

  function construire(conteneur) {
    var groupe = el('fieldset', { class: 'b8-groupe' }, [el('legend', { class: 'b8-legende', text: 'Thème' })]);
    var choix = el('div', { class: 'b8-segments' });
    THEMES.forEach(function (t) {
      var id = 'b8-theme-' + t.valeur;
      var r = el('input', { class: 'b8-radio', type: 'radio', name: 'b8-theme', id: id, value: t.valeur });
      r.addEventListener('change', function () { if (r.checked) changerTheme(t.valeur); });
      radios.push(r);
      choix.appendChild(r);
      choix.appendChild(el('label', { class: 'b8-segment', for: id, text: t.label }));
    });
    groupe.appendChild(choix);

    moinsEl = el('button', { class: 'b8-bouton', type: 'button', 'aria-label': 'Réduire le texte arabe', text: 'A−' });
    plusEl = el('button', { class: 'b8-bouton b8-bouton--grand', type: 'button', 'aria-label': 'Agrandir le texte arabe', text: 'A+' });
    resetEl = el('button', { class: 'b8-lien', type: 'button', text: 'Taille normale' });
    valeurEchelleEl = el('output', { class: 'b8-valeur', 'aria-live': 'polite' });
    moinsEl.addEventListener('click', function () { changerEchelle(prefs.echelle - PAS); });
    plusEl.addEventListener('click', function () { changerEchelle(prefs.echelle + PAS); });
    resetEl.addEventListener('click', function () { changerEchelle(DEFAUT); });

    var taille = el('fieldset', { class: 'b8-groupe' }, [
      el('legend', { class: 'b8-legende' }, ['Texte arabe ', el('span', { class: 'b8-exemple', lang: 'ar', dir: 'rtl', 'aria-hidden': 'true', text: 'عَرَبِيٌّ' })]),
      el('div', { class: 'b8-taille' }, [moinsEl, valeurEchelleEl, plusEl, resetEl])
    ]);

    conteneur.appendChild(el('section', { class: 'b8-reglages', 'aria-label': 'Réglages d\'affichage' }, [
      el('h2', { class: 'b8-titre', text: 'Affichage' }),
      groupe,
      taille
    ]));
  }

  App.blocks.Theme = {
    init: function () {
      prefs = lire();
      construire(App.emplacement('b8', 'pied'));
      /* Le socle écoute déjà ces événements : ils peuvent être émis pendant l'initialisation (contrat §2) */
      appliquer();

      window.addEventListener('storage', function (ev) {
        if (ev.key !== CLE && ev.key !== null) return;
        prefs = lire();
        appliquer();
      });
    }
  };
})();
