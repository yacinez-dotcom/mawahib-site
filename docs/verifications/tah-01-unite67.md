# Rapport de vérification — Ṭahāra, unité 67 (tah-01-09-28a à -33) et audit anticipé des n° 560 à 576

Date : 2026-11-22. Fichier : `data/lecons/tah/tah-01-p32.js` v18.1 (7 fiches ajoutées, marque `/* FIN-UNITE-67 */` ; ≈ 130 Ko). Plan : `data/plan.js` v1.60 (28 découpé en 28a et 28b ; titres de 30 à 33 précisés). Termes : `data/glossaire-p2.js` v1.71 (18 termes). Anomalies : n° 560 à 576 (`docs/sources/anomalies-textes-2.md`).

## Unité

Suite du faṣl tah-01-09 (le tayammoum), de « ص (وَصَعِيدٌ طَهُرَ كَتُرَابٍ …) » (Shamela 569/349) à la fin du commentaire de « ص (وَبِمَعْدِنٍ غَيْرِ نَقْدٍ وَجَوْهَرٍ) » (569/352) ; t. 1, p. 350–353. Le segment 34 « وَمَنْقُولٌ كَشَبٍّ وَمِلْحٍ » (569/352) ouvre l'unité 68. Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 155–156 (21604/154–155).

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 23), Ibn Ghāzī (14605, p. 48), al-Kharashī (91, p. 190–191) et al-Dardīr : aucun segment omis ; variantes « وَبِمَعْدِنٍ » / « وَمَعْدِنٍ » (n° 560) et « وَخَضْخَاضٍ » / « وَخِضْخَاضٍ » (n° 561), « ص » gardé.

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-09-28a | le ṣaʿīd pur ; roche, sable, terre salée ; trois avis avec la terre ; la condition de la Mudawwana | Mawāhib 350–351 | 349–350 | 155 | 154 |
| tah-01-09-28b | la terre préférable ; la terre transportée ; Thamūd, mosquée, cimetière | Mawāhib 351 | 350 | 155 | 154 |
| tah-01-09-29 | la neige ; la glace ; quatre avis d'Ibn ʿArafa | Mawāhib 351–352 | 350–351 | 155 | 154 |
| tah-01-09-30 | la boue liquide, faute d'autre chose | Mawāhib 352 | 351 | 155–156 | 154–155 |
| tah-01-09-31 | poser les mains légèrement, les laisser sécher | Mawāhib 352 | 351 | 156 | 155 |
| tah-01-09-32 | le gypse non cuit ; les matériaux cuits | Mawāhib 352 | 351 | 156 | 155 |
| tah-01-09-33 | les minéraux, sauf l'or, l'argent et les pierres précieuses ; le marbre | Mawāhib 351–353 | 350–352 | 156 | 155 |

## Vérification (étape 6)

1. **Traçabilité.** 190 fragments arabes (`frags.py`, maxmots 22). Contrôle par empreintes (`__fcheck`, maxw 30) sur 569/349–352, 21604/154–155, 11355/23, 14605/48, 91/190–191, 14442/202, 16968/105–106, 14594/59, 21611/284–285 : **190 sur 190 retrouvés** au premier passage (le fichier contrôlé ne contient que l'unité, sans le titre du bāb).
2. **Attributions.** Noms vérifiés dans 569/349–352 : Ibn Shās (al-Jawāhir), Ibn ʿArafa, al-Bājī, Ibn Shaʿbān, al-Lakhmī, Sanad (aṭ-Ṭirāz), Ibn Ḥabīb, Ibn al-Ḥājib, Khalīl (at-Tawḍīḥ), Ibn ʿAbd as-Salām, Ibn Yūnus, Saḥnūn et son fils, Ibn Rushd (al-Muqaddimāt), al-Barādhiʿī, al-Qarāfī, Ibn Nājī, Ibn Bukayr, Ibn Farḥūn, Ibn al-ʿArabī, at-Tamhīd, Ashhab, ʿAlī, Ibn al-Qāsim, Ibn Wahb, ash-Shāmil, Ibn al-Furāt, al-Bisāṭī, at-Tūnisī. Sources retrouvées : ʿIqd al-jawāhir (14594, p. 59 : la citation d'Ibn Shās et les deux riwāyas sur la neige), at-Tawḍīḥ (14442, p. 201–202 : le gypse, al-Muntaqā, la condition de la Mudawwana, Ibn Ḥabīb et Saḥnūn, la boue, les deux lectures), Ibn ʿArafa (16968, p. 105–106 : la roche, le sable, la neige, la boue, al-Lakhmī), al-Mawwāq (21611, p. 284–285 : la Mudawwana sur la boue et la roche, le marbre). Un nom corrigé : Ibn Rāshid (n° 562). Relecture contradictoire : la citation d'Ibn Rāshid avait une négation de trop (n° 563), qui renversait le sens ; elle est donnée d'après at-Tawḍīḥ.
3. **Statuts.** « عَلَى الْمَشْهُورِ » (Ibn Shās), « لِلْمَشْهُورِ » (Ibn ʿArafa), « الْمَشْهُورُ مِنْ الْمَذْهَبِ » (Ibn Nājī) → `mashhur` (28a) ; « فَالْمَشْهُورُ جَوَازُ التَّيَمُّمِ بِهِ » → `mashhur` (28b) ; « وَالْأَوَّلُ أَصَحُّ » (al-Bājī) → `rajih` (32) ; Ibn Shaʿbān, Ibn Ḥabīb, Ibn Bukayr, Ibn al-ʿArabī, Ashhab, le « وَقِيلَ » d'Ibn al-Ḥājib → `qawl` ; ailleurs `non_precise`. Muʿtamad confirmé par al-Dardīr / al-Dasūqī pour les sept fiches ; non tranché sur trois cas limites : la boue quand on trouve autre chose (30), le matériau cuit sans rien d'autre (32), l'or et l'argent sans rien d'autre (33).
4. **Croisement.** Mentions de « ح » sur 21604/154–155 : « كَمَا فِي ح » (cimetière, 28b : concordance) ; « وَرَجَّحَ ح الثَّانِي » (or et argent dans le gisement, 33 : tarjīḥ d'al-Ḥaṭṭāb confirmé) ; « وَكَلَامُ ح يَقْتَضِي » (natte et bois, segment 36 : pour l'unité 68). Mention de « خِلَافًا لِـ » : « خِلَافًا لِابْنِ الْعَرَبِيِّ » (Thamūd, 28b : **divergence**). Autres points : **divergence** sur la boue quand on trouve autre chose (30 : al-Dasūqī d'après son maître al-ʿAdawī, valide) ; Points à comparer sur la portée de « وَلَوْ نُقِلَ » (28b), le matériau cuit (32, al-Kharashī d'après al-Māzarī), l'or et l'argent faute d'autre chose et le marbre (33). Compléments d'al-Dardīr / al-Dasūqī : l'argile (28a), les autres sols transportés (28b), la raison de la neige (29), la continuité et le degré recommandé (31).
5. **Langue.** Matn vocalisé d'après le « ص » et Ibn Ghāzī. 18 termes nouveaux : تُرَاب, صُلْبُ الْأَرْضِ, حَصْبَاء, رَمْل, زِرْنِيخ, التُّرَابُ الْمَنْقُولُ, مَقْبَرَة, ثَلْج, جَلِيد, خَضْخَاض, تَجْفِيف, تَخْفِيف, جِصّ, جِير, آجُرّ, مَعْدِن, يَاقُوت, رُخَام ; termes déjà définis (صَعِيد, سَبْخَة, نُورَة, مَدَر, الإِجْمَاع, الإِعَادَةُ أَبَدًا, الإِعَادَةُ فِي الوَقْتِ, طِين, مُوَالَاة, نَقْد, جَوْهَر) repris avec leur définition exacte. « مُبَالَغَة » n'est pas employé en terme : le glossaire le définit pour le rinçage.
6. **Compréhension.** Chaque `regle_pratique` se lit seule et dit sur quoi l'on peut faire le tayammoum, et à quelle condition.

**Résultat** : les sept fiches passent à `verifie` (aucune alerte bloquante). Alertes : n° 562 et 563 (corrigés) ; n° 571 (non résolu, sans effet sur la règle) ; les autres précisés.

## Quiz

Les 28 questions relues une à une avec `quizdump.js` : aucune erreur ; deux questions de 33 interverties pour éviter la même position d'une fiche à la suivante. Positions : 28a B-D-A-C, 28b A-C-D-B, 29 C-A-B-D, 30 A-D-C-B, 31 D-B-A-C, 32 D-B-A-C, 33 A-C-D-B ; aucune position répétée dans une fiche ni d'une fiche à la suivante (dernière question de tah-01-09-27 : C) ; chaque fiche a une mise en situation.

## Contrôles techniques

- `node --check` : `tah-01-p32.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p32.js` : 13 fiches, 975 termes, 0 erreur, 0 doublon ; p32 : A 13 | B 13 | C 13 | D 13.
- Quiz, tout le cours (`quizstat.js`) : A 502 | B 502 | C 502 | D 502.
- `controle_site.py` sur le dépôt complet : 496 fiches hors synthèses, 975 termes, 0 erreur, 0 anomalie.

## Audit anticipé des n° 560 à 576

Décision n° 6 (17 alertes, au-dessus du seuil de 8). Deux corrections sur le témoin d'at-Tawḍīḥ (n° 562 : Ibn Rāshid ; n° 563 : négation de trop) ; quatorze précisions, chacune avec un témoin ou un appui de syntaxe ; un non résolu (n° 571, phrase confuse d'al-Lakhmī, at-Tabṣira non consultée ; seule la fin, claire, est citée). Aucun statut ne change ; aucune règle pratique ne dépend d'une lecture douteuse.
