/* Bloc B1 — Routeur — v1.0 — dépendances : B0 Socle v1.0 — événements émis : route:change, vue:activer (vue « introuvable ») — événements écoutés : app:pret (et hashchange du navigateur) */

/*
 * Navigation par hash. Adresses reconnues :
 *   #/                       → accueil
 *   #/lecon/<id>             → une fiche (masʾala ou synthèse)     — affichée par B3
 *   #/glossaire[/<terme>]    → le glossaire, éventuellement sur un terme — affiché par B4
 *   #/recherche[/<texte>]    → la recherche                         — affichée par B7
 *   #/progression            → la progression                       — affichée par B6
 *
 * À chaque changement d'adresse, le routeur émet route:change { nom, params, hash }.
 * Il ne vérifie pas que la fiche demandée existe : c'est le rôle du bloc qui l'affiche.
 * Il possède une seule vue, « introuvable », affichée quand :
 *   - l'adresse ne correspond à aucune route ;
 *   - la route existe mais le bloc qui l'affiche n'est pas actif (pas encore construit, ou en erreur).
 */

(function () {
  'use strict';

  var ROUTES = {
    accueil:     { params: [],        obligatoires: 0, bloc: null },
    lecon:       { params: ['id'],    obligatoires: 1, bloc: 'b3' },
    glossaire:   { params: ['terme'], obligatoires: 0, bloc: 'b4' },
    recherche:   { params: ['q'],     obligatoires: 0, bloc: 'b7' },
    progression: { params: [],        obligatoires: 0, bloc: 'b6' }
  };

  var LIBELLES_PAGE = {
    lecon: 'Cette leçon',
    glossaire: 'Le glossaire',
    recherche: 'La recherche',
    progression: 'Le suivi de progression'
  };

  var vueEl = null;
  var demarre = false;

  /* ----------------------------------------------------------------------
     Lecture de l'adresse
     ---------------------------------------------------------------------- */

  function introuvable(raison, demande) {
    return { nom: 'introuvable', params: { raison: raison, demande: demande } };
  }

  function analyser(hash) {
    var brut = String(hash || '').replace(/^#/, '').replace(/^\/+/, '').replace(/\/+$/, '');
    if (brut === '') return { nom: 'accueil', params: {} };

    var segments = brut.split('/');
    var valeurs = [];
    for (var i = 0; i < segments.length; i++) {
      var v;
      try { v = decodeURIComponent(segments[i]); }
      catch (e) { return introuvable('mal_formee', brut); }
      if (v.trim() === '') return introuvable('mal_formee', brut);
      valeurs.push(v);
    }

    var nom = valeurs[0];
    if (!Object.prototype.hasOwnProperty.call(ROUTES, nom)) return introuvable('inconnue', brut);

    var def = ROUTES[nom];
    var args = valeurs.slice(1);
    if (args.length < def.obligatoires || args.length > def.params.length) return introuvable('inconnue', brut);

    var params = {};
    def.params.forEach(function (p, j) { if (j < args.length) params[p] = args[j]; });
    return { nom: nom, params: params };
  }

  /* ----------------------------------------------------------------------
     Vue « introuvable » (propriété de B1)
     ---------------------------------------------------------------------- */

  function el(tag, classe, texte) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  }

  function afficherIntrouvable(titre, message, demande) {
    vueEl.textContent = '';
    vueEl.appendChild(el('h1', 'b1-titre', titre));
    vueEl.appendChild(el('p', 'b1-message', message));
    if (demande) {
      var p = el('p', 'b1-adresse', 'Adresse demandée : ');
      p.appendChild(el('code', null, '#/' + demande));
      vueEl.appendChild(p);
    }
    var retour = el('p', 'b1-retour');
    var lien = el('a', null, 'Retour à l\'accueil');
    lien.href = '#/';
    retour.appendChild(lien);
    vueEl.appendChild(retour);
    App.bus.emit('vue:activer', { vue: 'introuvable' });
  }

  function blocActif(id) {
    return App.blocs().some(function (b) { return b.id === id && b.etat === 'actif'; });
  }

  /* ----------------------------------------------------------------------
     Émission
     ---------------------------------------------------------------------- */

  function router() {
    var hash = window.location.hash || '#/';
    var r = analyser(hash);
    var params = r.params;
    Object.freeze(params);
    App.bus.emit('route:change', Object.freeze({ nom: r.nom, params: params, hash: hash }));

    if (r.nom === 'introuvable') {
      afficherIntrouvable(
        'Page introuvable',
        params.raison === 'mal_formee'
          ? 'L\'adresse de cette page est mal formée.'
          : 'Aucune page du cours ne correspond à cette adresse.',
        params.demande
      );
      return;
    }

    var bloc = ROUTES[r.nom].bloc;
    if (bloc && !blocActif(bloc)) {
      afficherIntrouvable(
        'Page pas encore disponible',
        (LIBELLES_PAGE[r.nom] || 'Cette page') + ' ne peut pas encore être affichée : la partie du site qui s\'en charge n\'est pas encore en place.',
        null
      );
    }
  }

  App.blocks.Routeur = {
    init: function () {
      vueEl = App.vue('b1', 'introuvable');
      vueEl.classList.add('b1-introuvable');

      App.bus.on('app:pret', function () {
        if (demarre) return;
        demarre = true;
        router();
      });

      window.addEventListener('hashchange', function () {
        if (demarre) router();
      });
    }
  };
})();
