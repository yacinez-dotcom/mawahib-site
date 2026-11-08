/* Bloc B2 — Plan — v1.0 — dépendances : B0 Socle v1.0, B1 Routeur v1.0 (adresses #/lecon/<id>) — événements émis : aucun — événements écoutés : route:change */

/*
 * Affiche, dans la colonne latérale, l'arborescence lue dans App.data.plan() :
 *   kitāb → bāb → faṣl → masʾala (+ synthèse du faṣl si elle existe).
 * - Une masʾala n'est cliquable que si sa fiche existe dans le registre ; sinon elle est marquée « à venir ».
 * - Une fiche dont la vérification est « a_revoir » porte la mention « à revoir ».
 * - La leçon affichée (route « lecon ») est mise en évidence et ses niveaux parents sont dépliés.
 * Le plan n'est jamais complété à partir des fiches : seul data/plan.js fait foi.
 */

(function () {
  'use strict';

  var racine = null;
  var lienActif = null;

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
      if (e === null || e === undefined) return;
      n.appendChild(typeof e === 'string' ? document.createTextNode(e) : e);
    });
    return n;
  }

  function texte(v) { return typeof v === 'string' && v.trim() !== '' ? v : null; }
  function liste(v) { return Array.isArray(v) ? v : []; }

  function lienLecon(id) { return '#/lecon/' + encodeURIComponent(id); }

  /* Numéro lisible d'une masʾala à partir de son identifiant : tah-01-02-03a → 3a */
  function numero(id) {
    var m = /-(\d{2})([a-z]?)$/.exec(id || '');
    return m ? String(Number(m[1])) + m[2] : '';
  }

  function titres(noeud, classe) {
    var fr = texte(noeud.titre) || noeud.id;
    var ar = texte(noeud.titre_ar);
    return el('span', { class: 'b2-titres ' + classe }, [
      el('span', { class: 'b2-titre-fr', text: fr }),
      ar ? el('span', { class: 'b2-titre-ar', lang: 'ar', dir: 'rtl', text: ar }) : null
    ]);
  }

  function mentionRevoir(fiche) {
    return fiche && fiche.verification === 'a_revoir'
      ? el('span', { class: 'b2-mention b2-mention--revoir', text: 'à revoir', title: 'Fiche non encore vérifiée' })
      : null;
  }

  /* ----------------------------------------------------------------------
     Construction de l'arbre
     ---------------------------------------------------------------------- */

  function elementMasala(m) {
    var fiche = App.data.fiche(m.id);
    var contenu = [
      el('span', { class: 'b2-num', text: numero(m.id) }),
      titres(m, 'b2-titres--masala'),
      fiche ? mentionRevoir(fiche) : el('span', { class: 'b2-mention b2-mention--avenir', text: 'à venir' })
    ];
    var corps = fiche
      ? el('a', { class: 'b2-lien', href: lienLecon(m.id), 'data-id': m.id }, contenu)
      : el('span', { class: 'b2-lien b2-lien--indisponible', 'data-id': m.id }, contenu);
    return el('li', { class: 'b2-masala' }, [corps]);
  }

  function elementSynthese(fasl) {
    var id = fasl.id + '-syn';
    var fiche = App.data.fiche(id);
    if (!fiche || fiche.type !== 'synthese') return null;
    return el('li', { class: 'b2-masala b2-masala--synthese' }, [
      el('a', { class: 'b2-lien', href: lienLecon(id), 'data-id': id }, [
        el('span', { class: 'b2-num', 'aria-hidden': 'true', text: '∑' }),
        el('span', { class: 'b2-titres b2-titres--masala' }, [
          el('span', { class: 'b2-titre-fr', text: 'Synthèse du faṣl' })
        ]),
        mentionRevoir(fiche)
      ])
    ]);
  }

  function compterDisponibles(fasl) {
    var masail = liste(fasl.masail).filter(function (m) { return m && texte(m.id); });
    var dispo = masail.filter(function (m) { return App.data.fiche(m.id); }).length;
    return { dispo: dispo, total: masail.length };
  }

  function elementFasl(f) {
    var c = compterDisponibles(f);
    var ul = el('ul', { class: 'b2-liste b2-liste--masail' });
    liste(f.masail).forEach(function (m) { if (m && texte(m.id)) ul.appendChild(elementMasala(m)); });
    var syn = elementSynthese(f);
    if (syn) ul.appendChild(syn);
    if (!ul.children.length) ul.appendChild(el('li', { class: 'b2-vide', text: 'Masāʾil non encore relevées.' }));

    return el('li', { class: 'b2-fasl' }, [
      el('details', { class: 'b2-noeud b2-noeud--fasl', 'data-id': f.id }, [
        el('summary', { class: 'b2-resume' }, [
          titres(f, 'b2-titres--fasl'),
          c.total ? el('span', { class: 'b2-compte', title: c.dispo + ' fiche(s) disponible(s) sur ' + c.total, text: c.dispo + '/' + c.total }) : null
        ]),
        ul
      ])
    ]);
  }

  function elementBab(b) {
    var ul = el('ul', { class: 'b2-liste' });
    liste(b.fusul).forEach(function (f) { if (f && texte(f.id)) ul.appendChild(elementFasl(f)); });
    if (!ul.children.length) ul.appendChild(el('li', { class: 'b2-vide', text: 'Fuṣūl non encore relevés.' }));
    return el('li', { class: 'b2-bab' }, [
      el('details', { class: 'b2-noeud b2-noeud--bab', 'data-id': b.id }, [
        el('summary', { class: 'b2-resume' }, [titres(b, 'b2-titres--bab')]),
        ul
      ])
    ]);
  }

  function elementKitab(k) {
    var ul = el('ul', { class: 'b2-liste' });
    liste(k.abwab).forEach(function (b) { if (b && texte(b.id)) ul.appendChild(elementBab(b)); });
    if (!ul.children.length) ul.appendChild(el('li', { class: 'b2-vide', text: 'Abwāb non encore relevés.' }));
    return el('li', { class: 'b2-kitab' }, [
      el('details', { class: 'b2-noeud b2-noeud--kitab', 'data-id': k.id, open: true }, [
        el('summary', { class: 'b2-resume' }, [titres(k, 'b2-titres--kitab')]),
        ul
      ])
    ]);
  }

  function construire() {
    racine.textContent = '';
    var nav = el('nav', { class: 'b2-plan', 'aria-label': 'Plan du cours' }, [
      el('h2', { class: 'b2-entete', text: 'Plan du cours' })
    ]);

    var plan = App.data.plan();
    var kutub = plan ? liste(plan.kutub).filter(function (k) { return k && texte(k.id); }) : [];

    if (!kutub.length) {
      nav.appendChild(el('p', { class: 'b2-message', text: 'Le plan apparaîtra ici dès que le squelette du premier kitāb aura été établi à partir du texte.' }));
    } else {
      var ul = el('ul', { class: 'b2-liste b2-liste--racine' });
      kutub.forEach(function (k) { ul.appendChild(elementKitab(k)); });
      nav.appendChild(ul);
    }
    racine.appendChild(nav);
  }

  /* ----------------------------------------------------------------------
     Mise en évidence de la leçon affichée
     ---------------------------------------------------------------------- */

  function marquer(id) {
    if (lienActif) {
      lienActif.classList.remove('b2-lien--actif');
      lienActif.removeAttribute('aria-current');
      lienActif = null;
    }
    if (!id) return;

    var cible = Array.prototype.find.call(racine.querySelectorAll('.b2-lien[data-id]'), function (n) {
      return n.getAttribute('data-id') === id;
    });
    if (!cible) return;

    cible.classList.add('b2-lien--actif');
    if (cible.tagName === 'A') cible.setAttribute('aria-current', 'page');
    lienActif = cible;

    for (var p = cible.parentElement; p && p !== racine; p = p.parentElement) {
      if (p.tagName === 'DETAILS') p.open = true;
    }
    if (typeof cible.scrollIntoView === 'function') cible.scrollIntoView({ block: 'nearest' });
  }

  App.blocks.Plan = {
    init: function () {
      racine = App.emplacement('b2', 'lateral');
      construire();
      App.bus.on('route:change', function (r) {
        marquer(r && r.nom === 'lecon' && r.params ? r.params.id : null);
      });
    }
  };
})();
