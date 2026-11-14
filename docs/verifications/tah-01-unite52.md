# Rapport de vérification — Ṭahāra, unité 52 (tah-01-07-07 à -11, dont 09b et 09c) et audit anticipé des n° 395 à 404

Date : 2026-11-14. Fichier : nouvelle partie `data/lecons/tah/tah-01-p25.js` v11.0 (7 fiches, marque `/* FIN-UNITE-52 */`, ≈ 64 Ko) ; `tah-01-p24.js` (≈ 144 Ko) figé, passé en v10.2 pour la correction de trois quiz de l'unité 51 (voir plus bas). Manifeste v1.24 (ajout de p25). Plan : `data/plan.js` v1.45 (07 « فِي فَرْجٍ », 09b et 09c ajoutés, 37 segments). Termes : `data/glossaire-p2.js` v1.56 (6 termes). Anomalies : n° 395 à 404 (`docs/sources/anomalies-textes-2.md`).

## Unité

Suite du faṣl tah-01-07 (le ghousl), de « ص (فِي فَرْجِهِ) » (Shamela 569/307) à la fin du commentaire de « لَا بِاسْتِحَاضَةٍ وَنُدِبَ لِانْقِطَاعِهِ » (569/310), avant « ص (وَيَجِبُ غُسْلُ كَافِرٍ بَعْدَ الشَّهَادَةِ بِمَا ذُكِرَ) » ; t. 1, p. 308–311.

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 18), Ibn Ghāzī (14605, p. 40–41), al-Dardīr (21604/128–129) et al-Kharashī (91, p. 163–164) : le « ص » porte « فِي فَرْجِهِ » pour « فِي فَرْجٍ » (n° 395) et omet deux segments, « لَا بِمَنِيٍّ وَصَلَ لِلْفَرْجِ وَلَوِ الْتَذَّتْ » (n° 396, fiche 09b) et « وَبِحَيْضٍ وَنِفَاسٍ بِدَمٍ » (n° 397, fiche 09c), entre « وَطِئَهَا بَالِغٌ » et « وَاسْتُحْسِنَ وَبِغَيْرِهِ ». Ibn Ghāzī porte aussi « أَوْ قَدْرِهَا مِنْ مَقْطُوعٍ » (segment 06, déjà fait ; variante sans effet, al-Dardīr ayant « مِنْ مَقْطُوعِهَا » dans le sharḥ).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-07-07 | voie avant ou arrière ; orifice urinaire ; personne au sexe incertain ; djinn | Mawāhib 308–309 | 307–308 | 128–129 | 127–128 |
| tah-01-07-08 | animal, mort ; le mort n'est pas relavé | Mawāhib 309 | 308 | 129 | 128 |
| tah-01-07-09 | adolescent, fillette ; quatre cas ; vierge enceinte | Mawāhib 309 | 308 | 129–130 | 128–129 |
| tah-01-07-09b | sperme parvenu au sexe, même avec plaisir ; grossesse | al-Dardīr 129–130 | (308) | 129–130 | 128–129 |
| tah-01-07-09c | règles et lochies, troisième et quatrième causes | al-Dardīr 130 | (310) | 130 | 129 |
| tah-01-07-10 | accouchement sans sang (istiḥsân) | Mawāhib 309–310 | 308–309 | 130 | 129 |
| tah-01-07-11 | istiḥâḍa ; ghousl recommandé à son arrêt | Mawāhib 310–311 | 309–310 | 130 | 129 |

## Vérification (étape 6)

1. **Traçabilité.** Contrôle par empreintes (`__fcheck`, maxw 30) sur les pages 569/307–310, 21604/127–129, 91/163–164, 11355/18, 14605/40–41, 16968/90 et 92, 14442/164 : **155 fragments sur 156 retrouvés**, le manquant étant le titre du bāb (attendu). Sept fragments manquaient d'abord : « مَنْ قَالَ » (le texte a « لِمَنْ ») ; « تُعِيدُ » (le texte a « فَتُعِيدُ ») ; la citation d'Ibn ʿArafa, recopiée sans voyelles depuis le texte normalisé (« البالغه ») et coupée par un signe de l'édition (« مع $$$ مثلها ») ; trois citations d'al-Dardīr commençant par « وَأَشَارَ », mot collé au mot précédent dans l'édition (« تُنْزِلْوَأَشَارَ »), et « مَا لَمْ تُنْزِلْ » pour la même raison. Tous corrigés. Paraphrases relues sur les pages lues (al-Ubbī, al-ʿĀriḍa, Ibn Shās, at-Tawḍīḥ, aṭ-Ṭirāz, ash-Shabībī, Ibn ʿAbd as-Salām, Ibn ʿArafa, al-Lakhmī, Ibn Rāshid, adh-Dhakhīra, Ibn Nājī, Ibn Farḥūn, al-Fākihānī, ʿAbd al-Wahhāb, al-Matyawī).
2. **Attributions.** La citation du djinn (« وَمِنْ شَرْحِ الْمُدَوَّنَةِ ») est d'Ibn Nājī : la citation précédente se termine par « انْتَهَى مِنْ شَرْحِ الْمُدَوَّنَةِ », et al-Dasūqī (21604/127) donne l'avis à Ibn Nājī ; « وَمَا قَالَهُ ظَاهِرُ … وَالظَّاهِرُ أَنَّ الرَّجُلَ كَذَلِكَ », après « انْتَهَى », est d'al-Ḥaṭṭāb → `tarjih_hattab` de 07. « قُلْت يُرِيدُ فِي مَشْهُورِ الْمَذْهَبِ » est d'Ibn Nājī (dans sa citation). « وَهُوَ كَلَامٌ حَسَنٌ » (Sanad) et « وَعَلَى هَذَا فَتُعِيدُ … » (al-ʿĀriḍa) sont d'al-Ḥaṭṭāb → `tarjih_hattab` de 09. « وَاخْتَارَهُ ابْنُ الْقَاسِمِ » : c'est Ibn al-Qāsim qui choisit (n° 399, Ibn ʿArafa). « قَالَهُ عَبْدُ الْوَهَّابِ » : dans la citation d'al-Fākihānī. Sur chaque page de 21604, la place de chaque citation avant ou après « ـ[حاشية الدسوقي] » a été vérifiée (al-Dardīr ou al-Dasūqī).
3. **Statuts.** « الْمَشْهُورُ » cités tels quels : voie arrière (Ibn Nājī, 07 ; al-Dasūqī : « هُوَ الْمَشْهُورُ مِنْ الْمَذْهَبِ »), pas de différence entre le petit enfant et l'adolescent (09). « shadh » pour la riwāya de Mālik sur la voie arrière, parce qu'al-Dasūqī la dit « قَوْلٌ شَاذٌّ ». « الْأَصَحُّ » (Ibn al-Ḥājib, at-Tawḍīḥ), « أَحْسَنُ » (Sanad), « الظَّاهِرُ » (Ibn ʿAbd as-Salām) et « أَصَحُّ » (Ibn al-ʿArabī) cités dans le texte de l'avis, statut « non_precise ». Muʿtamad d'après al-Dardīr / al-Dasūqī pour les sept fiches ; « عَلَى الْمُعْتَمَدِ » (orifice urinaire, 07 ; troisième et quatrième cas, 09) et « وَهُوَ الْمُعْتَمَدُ » (accouchement sans sang, 10) donnés comme tels ; djinn : aucun « الْمُعْتَمَدُ », seulement « وَهُوَ التَّحْقِيقُ » (al-ʿAdawī). `tarjih_hattab` : 07 (djinn), 09 (Sanad ; vierge enceinte), 10 (al-Lakhmī ; justification de l'obligation ; Ibn Farḥūn).
4. **Croisement.** Pages 21604/127–129 relues ; mentions de « ح » : « وَقَالَ ح الظَّاهِرُ أَنَّهُ لَا غُسْلَ عَلَيْهِمَا مَا لَمْ يَحْصُلْ إنْزَالٌ أَوْ شَكٌّ فِيهِ » (djinn, 21604/127) → 07, Point à comparer (Mawāhib 569/308 n'a pas « أَوْ شَكٌّ فِيهِ ») ; « وَفِي ح قَوْلٌ شَاذٌّ لِمَالِكٍ » (voie arrière, 21604/128) → 07, Point à comparer (Mawāhib n'a pas « شَاذٌّ »). Aucune autre mention de « ح » en 128–129. « خِلَافًا لِـ » : « خِلَافًا لِمَنْ قَالَ فِي الْأُولَى … » (21604/128) → 09, Divergence ; « خِلَافًا لِظَاهِرِ الرِّسَالَةِ » (21604/129) → 11, Concordance. Sigles développés : ح, طفى, « شَيْخُنَا » ; عج non défini. Divergences : djinn (07), partenaire de l'adolescent (09, avec al-Kharashī). Points à comparer : « أَوْ شَكٌّ فِيهِ » et « شَاذٌّ » (07), la fillette et l'avis d'Ashhab (09), valeur du farʿ de la grossesse (09b), riwāya d'obligation pour l'istiḥâḍa (11).
5. **Langue.** Matn comparé ; corrigé : 07 (« فِي فَرْجٍ ») ; 09b et 09c ajoutés ; vocalisation d'après Ibn Ghāzī (14605, p. 40–41) et al-Dardīr. 6 termes nouveaux : فَرْج, اِفْتِضَاض, جِنِّيّ, إِطَاقَة, تَمْرِين, تَنَفُّسُ الرَّحِم (بَهِيمَة, حَيْض, نِفَاس, اِسْتِحَاضَة, اِسْتِحْسَان, دُبُر, قُبُل, خُنْثَى مُشْكِل, نَدْب y étaient déjà).
6. **Compréhension.** Chaque `regle_pratique` se lit seule ; 07 renvoie aux divergences pour le djinn ; 09b et 09c renvoient aux fiches voisines. Les exemples restent sobres ; les passages d'al-Dasūqī sur la filiation et la peine (21604/129) ne sont pas repris.

**Résultat** : les sept fiches passent à `verifie`. Alertes non bloquantes : n° 395, 399 (corrigées), n° 400, 401, 403, 404 (précisées), n° 396, 397 (limites du texte), n° 398, 402 (non résolues, passages résumés et non cités).

## Correction de trois quiz de l'unité 51 (tah-01-p24.js v10.2)

En relisant les quiz (nouvel outil `docs/outils/quizdump.js`, qui affiche pour chaque question le choix désigné par `bonne`), trois questions de l'unité 51 désignaient un mauvais choix : tah-01-07-05, question 3 (désignait « Vous refaites l'ʿaṣr après le ghousl ») ; tah-01-07-06, question 1 (désignait « Oblige aux ablutions seulement ») et question 2 (désignait « Oblige aux ablutions seulement »). Les choix ont été réordonnés pour que la bonne réponse soit à la position déjà déclarée : positions inchangées (p24 : A 16 | B 16 | C 16 | D 16), aucune citation touchée. Les quiz de l'unité 50 (même partie) ont été relus de la même façon : justes. `controle_site.py` ne détecte pas ce défaut (il clique sur le choix désigné par `bonne`, sans juger s'il est juste) ; voir les points ouverts de `docs/reprise.md`.

## Audit anticipé des n° 395 à 404 (décision n° 6)

10 alertes nouvelles, au-dessus du seuil de 8. Témoins cherchés : Ibn ʿArafa (16968, p. 86–100 : n° 399 corrigé, n° 400 et 404 précisés), at-Tawḍīḥ (14442, p. 150–200 : n° 403, mêmes consonnes), Ibn Shās (14594, p. 20–60 : citation non trouvée, sans effet). N° 398 (citation d'al-Lakhmī) et n° 402 (al-Matyawī, d'après al-Fākihānī) restent sans témoin. Aucun statut ne change. Bilan : 404 anomalies (Corrigé 152 | Précisé 121 | Non résolu 108 | Confirmé 6 | Limite 16 | Déjà corrigé 1). Prochain n° = 405.

## Contrôles techniques

- `node --check` : `tah-01-p25.js`, `tah-01-p24.js`, `glossaire-p2.js`, `plan.js`, `manifeste.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p25.js` : 7 fiches, 838 termes, 0 erreur, 0 doublon ; p25 : A 7 | B 7 | C 7 | D 7 ; aucune position répétée deux fois de suite, ni dans une fiche ni d'une fiche à la suivante ; chaque fiche a une mise en situation. p24 : A 16 | B 16 | C 16 | D 16.
- Quiz, tout le cours (`quizstat.js`) : A 386 | B 386 | C 386 | D 386.
- Les 28 questions de p25 relues une à une avec `quizdump.js` : chaque `bonne` désigne le bon choix.
- `controle_site.py` sur le dépôt complet : 392 fiches (384 + 8 synthèses), 838 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.
