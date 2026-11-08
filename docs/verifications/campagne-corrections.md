# Campagne de correction des anomalies textuelles — 2026-11-03

Point de départ : l'audit `docs/sources/anomalies-textes.md` (43 anomalies, du Module 0 à la Ṭahāra, unité 5, et au squelette).

## Méthode

Chaque anomalie est recherchée dans un **second témoin**, indépendant de l'édition de *Mawāhib al-Jalīl* (Shamela 569) :

| Témoin | Shamela |
|---|---|
| Mukhtaṣar de Khalīl seul | 11355 |
| Ibn Ghāzī, *Shifāʾ al-Ghalīl* | 14605 |
| Ibn ʿArafa, *al-Mukhtaṣar al-fiqhī* | 16968 |
| Khalīl, *at-Tawḍīḥ* | 14442 |
| al-Bājī, *al-Muntaqā* | 6684 |
| ʿUlaysh, *Minaḥ al-Jalīl* | 21614 |
| al-Zurqānī et la ḥāshiya imprimée avec lui | 14297 |
| al-Dardīr / al-Dasūqī | 21604 |
| Ibn Nājī sur la Risāla | 14555 |

Règle : une lecture n'est corrigée que si un témoin la porte en toutes lettres, ou si la syntaxe l'impose et qu'un témoin a les mêmes consonnes. Sans témoin, l'alerte reste dans la fiche. Les fragments cités sont recopiés des pages consultées.

## Corrections appliquées

### Module 0 — `data/lecons/int/int-01.js` v1.4

| Fiche | N° | Correction | Témoin |
|---|---|---|---|
| int-01-01-01 | 1, 2 | Matn « فَأَجَبْتُ » ; pronom de 3e personne confirmé | 11355 p. 1 ; Minaḥ p. 11 ; al-Dasūqī p. 20 |
| int-01-01-02 | 3, 4, 5 | Matn « وَبِـ«أَوَّل» » (mot cité, racine) ; « آرَاءٍ » ; définition « عَنْ ظَاهِرِهِ ». **Passée à `verifie`.** | 11355 p. 1 ; Shifāʾ p. 7, 8 ; Minaḥ p. 11 |
| int-01-01-03c | 6 | Alerte complétée : 520 / 530 / 595 ; non résolu | Minaḥ p. 12 ; al-Dardīr p. 21 ; note de 11355 |
| int-01-01-03d | 7 | Recoupé : aucun commentaire ne donne de critère ; limite du texte, non bloquante. **Passée à `verifie`.** | al-Dasūqī p. 21 ; Minaḥ p. 12 ; Shifāʾ p. 8 |
| int-01-02-03 | 7 | Renvoi à 03d mis à jour | — |
| int-01-01-04a, -04b | 8 | Matn « قُلْتُ », « ذَكَرْتُ » | 11355 |
| int-01-01-07 | 12 | « الْعَزْوِ » | Shifāʾ p. 13 |

### Ṭahāra — `data/lecons/tah/tah-01.js` v1.5

| Fiche | N° | Correction | Témoin |
|---|---|---|---|
| tah-01-01-07 | 19 | Al-Bājī : « لَا الْحُكْمِ بِنَجَاسَتِهِ » | al-Muntaqā p. 58 |
| tah-01-01-16 | 25 | **Auteur de l'avis corrigé : Ibn al-Ḥājj** (non Ibn al-Ḥājib) | Ibn ʿArafa p. 10 ; Shifāʾ p. 16 ; al-Dasūqī |
| tah-01-01-17a | 26 | « تَرِدُهُ » ; remarque précisée (« le bétail qui vient y boire ») | Ibn ʿArafa p. 11 |
| tah-01-01-18 | 27, 28, 29 | « ابن راشد » confirmé ; phrase altérée reconstruite (Ibn Rāshid : Ibn al-Ḥājib a pris cet avis d'Ibn ʿAṭāʾ Allāh) ; Sanad confirmé ; « لَغَيَّرَ » ; une remarque ajoutée | 14297 p. 26 ; at-Tawḍīḥ p. 8 |
| tah-01-01-21 | 33 | Alerte complétée (la même attribution à « ح » est dans la ḥāshiya de 14297) ; désaccord non résolu | 14297 p. 29 |
| tah-01-01-22 | 34 | « الْيَسِيرِ » | Ibn ʿArafa p. 15 |
| tah-01-01-27 | 37, 38, 39 | Ibn Shaʿbān parmi ceux qui nient la karāha (majorité des témoins) ; « ابن الفرس » confirmé ; nouvelle alerte sur Ibn Nājī | Minaḥ p. 29 ; 14555 (passage introuvable) |
| tah-01-01-30 | 40 | « أَبُو زَيْدٍ الثَّعَالِبِيُّ » | Shifāʾ p. 19 |

Remarque sur tah-01-01-30 : dans la même citation, Shifāʾ (p. 19) porte « رسم النسمة » là où *Mawāhib* imprime « رسم القسمة ». La fiche ne cite pas ce passage ; rien à corriger.

### Squelette — `data/plan.js` v1.8 et `docs/sources/tah-01-segments.md`

| Segment | N° | Correction | Témoin |
|---|---|---|---|
| tah-01-04-56 | 41 | « كَشَكِّهِ » d'un seul mot | 11355 p. 13 ; Shifāʾ p. 30 |
| tah-01-05-01 | 42 | « وَمُنِعَ بِرَخْوٍ نَجِسٍ » ; titre arabe corrigé dans plan.js | 11355 p. 14 ; Shifāʾ p. 31, 33 |
| tah-01-08-22 | 43 | Fin « أَقْوَالٌ » sans deux-points ; variante « أَوْ مَسْحِهِ » notée pour la future fiche | 11355 p. 21 |

Le tableau des segments reste tel qu'imprimé (empreintes SHA-256 inchangées) ; les lectures contrôlées sont notées en tête du document.

## Non résolu (19)

N° 6, 9, 10, 11, 13, 14, 15, 16, 17 (Module 0) et 20, 21, 22, 23, 24, 30, 31, 32, 35, 36 (Ṭahāra). Aucun second témoin consulté ne porte le passage, ou le témoin a une autre formule. Les alertes restent dans les fiches. Aucune ne touche une règle pratique.

## Contrôles

- `node --check` : int-01.js, tah-01.js, plan.js — OK.
- Statut : 30 fiches int-01 et 34 fiches tah-01, toutes `verifie`.
- Fragments des seconds témoins cités dans les fiches et ce rapport : 17/17 retrouvés dans les pages consultées (comparaison après normalisation).
- Rendu (Playwright) des 16 fiches modifiées : 0 erreur JS, 0 anomalie de données ; 62 fiches, 225 termes.
- Termes coupés (int + tah) : 0.
