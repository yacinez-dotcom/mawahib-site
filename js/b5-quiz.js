/* Bloc B5 — Quiz — v1.0 — dépendances : B0 Socle v1.0, B3 Fiche v1.0 (événement fiche:affichee et son emplacementQuiz) — événements émis : quiz:termine — événements écoutés : fiche:affichee */

/*
 * Quiz d'une fiche de masʾala ou d'une fiche de synthèse (quiz du faṣl).
 * - B5 écrit uniquement dans le conteneur emplacementQuiz que B3 lui confie à chaque fiche:affichee.
 * - Chaque question : un clic sur un choix verrouille la question, affiche « Bonne réponse » ou « Réponse incorrecte »,
 *   indique la bonne réponse et donne l'explication de la fiche.
 * - L'ordre des choix est celui de la fiche (une explication peut y faire référence) ; « bonne » est l'indice compté à partir de 0.
 * - Quand toutes les questions sont répondues : score, bouton « Recommencer », et émission de
 *   quiz:termine { id, type, score, total } (lu par B6).
 * - Une question aux données invalides est ignorée et signalée (le détail est dans le contrôle technique de la fiche).
 */

(function () {
  'use strict';

  var LETTRES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  var RE_ARABE = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+(?:[  ]+[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]+)*/g;
  var compteur = 0;

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

  /* Texte français pouvant contenir de l'arabe : segments arabes isolés (lang="ar", dir="rtl") */
  function riche(s, classe) {
    var span = el('span', { class: classe || null });
    var str = String(s), dernier = 0;
    str.replace(RE_ARABE, function (m, i) {
      if (i > dernier) span.appendChild(document.createTextNode(str.slice(dernier, i)));
      span.appendChild(el('span', { class: 'b5-ar', lang: 'ar', dir: 'rtl', text: m }));
      dernier = i + m.length;
      return m;
    });
    if (dernier < str.length) span.appendChild(document.createTextNode(str.slice(dernier)));
    return span;
  }

  function questionValide(q) {
    return q && typeof q === 'object' && texte(q.q) &&
      Array.isArray(q.choix) && q.choix.length >= 2 && q.choix.every(texte) &&
      Number.isInteger(q.bonne) && q.bonne >= 0 && q.bonne < q.choix.length;
  }

  /* ----------------------------------------------------------------------
     Construction d'un quiz
     ---------------------------------------------------------------------- */

  function monterQuiz(conteneur, fiche, type) {
    var brutes = Array.isArray(fiche.quiz) ? fiche.quiz : [];
    var questions = brutes.filter(questionValide);
    var ignorees = brutes.length - questions.length;
    var uid = 'b5-' + (++compteur);

    var etat = { reponses: new Array(questions.length).fill(null), termine: false };

    conteneur.textContent = '';
    var racine = el('div', { class: 'b5-quiz' });
    conteneur.appendChild(racine);

    if (!questions.length) {
      racine.appendChild(el('p', { class: 'b5-vide', text: brutes.length
        ? 'Les questions de ce quiz ne peuvent pas être affichées : leurs données sont invalides.'
        : 'Aucune question n\'est prévue pour cette fiche.' }));
      return;
    }

    racine.appendChild(el('p', { class: 'b5-consigne', text:
      pluriel(questions.length, 'question', 'questions') + '. Choisissez une réponse : la correction s\'affiche aussitôt.' }));

    if (ignorees) {
      racine.appendChild(el('p', { class: 'b5-avertissement', text:
        pluriel(ignorees, 'question a été ignorée', 'questions ont été ignorées') + ' : données invalides (voir le contrôle technique en bas de la fiche).' }));
    }

    var liste = el('ol', { class: 'b5-questions' });
    racine.appendChild(liste);
    var bilan = el('div', { class: 'b5-bilan', 'aria-live': 'polite' });
    racine.appendChild(bilan);

    var elementsQuestions = questions.map(function (q, i) {
      return construireQuestion(q, i, uid, function (choix) { repondre(i, choix); });
    });
    elementsQuestions.forEach(function (eq) { liste.appendChild(eq.li); });

    function repondre(i, choix) {
      if (etat.termine || etat.reponses[i] !== null) return;
      etat.reponses[i] = choix;
      elementsQuestions[i].corriger(choix);
      if (etat.reponses.every(function (r) { return r !== null; })) terminer();
    }

    function terminer() {
      etat.termine = true;
      var score = etat.reponses.filter(function (r, i) { return r === questions[i].bonne; }).length;
      var total = questions.length;
      bilan.textContent = '';
      bilan.appendChild(el('div', { class: 'b5-bilan-carte' }, [
        el('p', { class: 'b5-score' }, [
          el('span', { class: 'b5-score-label', text: 'Votre score' }),
          el('span', { class: 'b5-score-valeur', text: score + ' / ' + total })
        ]),
        el('p', { class: 'b5-bilan-texte', text: score === total
          ? 'Toutes vos réponses sont justes.'
          : 'Relisez les explications des questions manquées, puis recommencez si vous le souhaitez.' }),
        (function () {
          var b = el('button', { class: 'b5-bouton', type: 'button', text: 'Recommencer le quiz' });
          b.addEventListener('click', recommencer);
          return b;
        })()
      ]));
      App.bus.emit('quiz:termine', Object.freeze({ id: fiche.id, type: type, score: score, total: total }));
    }

    function recommencer() {
      etat.reponses = new Array(questions.length).fill(null);
      etat.termine = false;
      bilan.textContent = '';
      elementsQuestions.forEach(function (eq) { eq.reinitialiser(); });
      var premier = liste.querySelector('.b5-choix');
      if (premier) { liste.scrollIntoView({ block: 'start' }); premier.focus({ preventScroll: true }); }
    }
  }

  function construireQuestion(q, i, uid, surChoix) {
    var idEnonce = uid + '-q' + i;
    var li = el('li', { class: 'b5-question' });
    var enonce = el('p', { class: 'b5-enonce', id: idEnonce }, [
      el('span', { class: 'b5-num', text: 'Question ' + (i + 1) }),
      riche(q.q, 'b5-enonce-texte')
    ]);
    var groupe = el('div', { class: 'b5-choix-liste', role: 'group', 'aria-labelledby': idEnonce });
    var retour = el('div', { class: 'b5-retour', 'aria-live': 'polite' });

    var boutons = q.choix.map(function (c, j) {
      var b = el('button', { class: 'b5-choix', type: 'button', 'data-index': String(j) }, [
        el('span', { class: 'b5-lettre', 'aria-hidden': 'true', text: LETTRES[j] || String(j + 1) }),
        riche(c, 'b5-choix-texte'),
        el('span', { class: 'b5-marque' })
      ]);
      b.addEventListener('click', function () {
        if (b.getAttribute('aria-disabled') === 'true') return;
        surChoix(j);
      });
      groupe.appendChild(b);
      return b;
    });

    li.appendChild(enonce);
    li.appendChild(groupe);
    li.appendChild(retour);

    function corriger(choix) {
      var juste = choix === q.bonne;
      li.classList.add(juste ? 'b5-question--juste' : 'b5-question--faux');
      boutons.forEach(function (b, j) {
        b.setAttribute('aria-disabled', 'true');
        var marque = b.querySelector('.b5-marque');
        if (j === q.bonne) {
          b.classList.add('b5-choix--bonne');
          marque.textContent = j === choix ? 'Votre réponse — juste' : 'Bonne réponse';
        } else if (j === choix) {
          b.classList.add('b5-choix--fausse');
          marque.textContent = 'Votre réponse';
        } else {
          b.classList.add('b5-choix--neutre');
        }
      });
      retour.textContent = '';
      retour.appendChild(el('p', { class: 'b5-verdict ' + (juste ? 'b5-verdict--juste' : 'b5-verdict--faux'),
        text: juste ? 'Bonne réponse.' : 'Réponse incorrecte. La bonne réponse est ' + (LETTRES[q.bonne] || (q.bonne + 1)) + '.' }));
      if (texte(q.explication)) retour.appendChild(el('p', { class: 'b5-explication' }, [riche(q.explication)]));
    }

    function reinitialiser() {
      li.classList.remove('b5-question--juste', 'b5-question--faux');
      boutons.forEach(function (b) {
        b.removeAttribute('aria-disabled');
        b.classList.remove('b5-choix--bonne', 'b5-choix--fausse', 'b5-choix--neutre');
        b.querySelector('.b5-marque').textContent = '';
      });
      retour.textContent = '';
    }

    return { li: li, corriger: corriger, reinitialiser: reinitialiser };
  }

  /* ----------------------------------------------------------------------
     Initialisation
     ---------------------------------------------------------------------- */

  App.blocks.Quiz = {
    init: function () {
      App.bus.on('fiche:affichee', function (d) {
        if (!d || !d.emplacementQuiz || !d.emplacementQuiz.nodeType) return;
        var fiche = App.data.fiche(d.id);
        if (!fiche) return;
        try {
          monterQuiz(d.emplacementQuiz, fiche, d.type === 'synthese' ? 'synthese' : 'masala');
        } catch (e) {
          console.error('[B5] Quiz impossible pour la fiche « ' + d.id + ' » :', e);
          d.emplacementQuiz.textContent = 'Le quiz n\'a pas pu être affiché.';
        }
      });
    }
  };
})();
