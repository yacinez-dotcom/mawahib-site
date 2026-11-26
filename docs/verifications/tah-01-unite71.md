# Rapport de vérification — Ṭahāra, unité 71 (tah-01-09-51 à -53 et synthèse) et audit de fin de faṣl tah-01-09

Date : 2026-11-26. Fichier : `data/lecons/tah/tah-01-p34.js` v20.1 (5 fiches et la synthèse tah-01-09-syn, marque `/* FIN-UNITE-71 */` ; ≈ 116 Ko) ; `tah-01-p33.js` v19.3 (fiche 36 complétée par l'audit). Plan : `data/plan.js` v1.64 (51b ajouté ; 52 découpé en 52a et 52b ; titre_ar de 53 corrigé ; faṣl tah-01-09 : 60 segments). Termes : `data/glossaire-p2.js` v1.75 (10 termes). Anomalies : n° 620 à 630 (`docs/sources/anomalies-textes-2.md`).

## Unité

Fin du faṣl tah-01-09 (le tayammoum), de « ص (وَمُنِعَ مَعَ عَدَمِ مَاءٍ …) » (Shamela 569/358) à la fin du commentaire de « ص (وَتَسْقُطُ صَلَاةٌ وَقَضَاؤُهَا …) » (569/360, avant « [الْمَسْح عَلَى الجبائر] ») ; t. 1, p. 359–361. Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 161–162 (21604/160–161).

Comparaison du « ص » avec le Mukhtaṣar seul (11355, p. 23), Ibn Ghāzī (14605, p. 49), al-Kharashī (91, p. 198–199) et al-Dardīr : le « ص » omet « وَإِنْ نَسِيَ إحْدَى الْخَمْسِ تَيَمَّمَ خَمْسًا » (n° 620, fiche 51b) et la fin de 52 « إلَّا لِخَوْفِ عَطَشٍ كَكَوْنِهِ لَهُمَا وَضَمِنَ قِيمَتَهُ » (n° 621, fiche 52b). « بِعَدَمِ مَاءِ » corrigé en « مَاءٍ » (n° 624).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-09-51 | sans eau : le baiser et le rapport ; sauf longue durée ; farʿ d'aṭ-Ṭirāz et de la neige | Mawāhib 359 | 358 | 161 | 160 |
| tah-01-09-51b | une prière oubliée parmi les cinq : cinq tayammoums (segment absent du « ص ») | al-Dardīr 161–162 | — | 161–162 | 160–161 |
| tah-01-09-52a | le mort qui possède l'eau passe avant le junub (ʿUtbiyya) | Mawāhib 359–360 | 358–359 | 162 | 161 |
| tah-01-09-52b | la soif, l'eau commune ; la valeur due aux héritiers (fin absente du « ص ») | al-Dardīr 162 | 359 | 162 | 161 |
| tah-01-09-53 | ni eau ni sol : la prière et son rattrapage tombent ; les avis | Mawāhib 360–361 | 359–360 | 162 | 161 |
| tah-01-09-syn | synthèse du faṣl : 8 questions | — | — | — | — |

## Vérification (étape 6)

1. **Traçabilité.** 117 fragments arabes de l'unité (`frags.py`, maxmots 18). Contrôle par empreintes (`__fcheck`, maxw 30) sur 569/358–360, 21604/160–161, 14442/200, 216, 16968/101, 105, 109, 113, 91/198–199, 14297/230, 14605/49, 11355/23 : **117 sur 117**, plus la citation nouvelle de l'alerte de 50b (16968/109 : 1 sur 1). Trois fragments manquaient au premier passage et ont été corrigés : « حَظَّ الْمَيِّتِ » (le texte a « وَحَظَّ ») ; « بمائه » (Ibn ʿArafa imprime « بمائة », signalé) ; une citation d'Ibn ʿArafa abrégée, remplacée par son texte exact (« وعددها ابن العربي ستة … »). Relecture contradictoire : la remarque prêtée d'abord à al-Burzulī « d'après al-Qābisī » a été précisée (il s'appuie sur ce qu'Abū ʿImrān et al-Lakhmī rapportent d'al-Qābisī) ; le cinquième avis d'Ibn al-ʿArabī est attribué par lui à al-Qābisī, ajouté à l'avis de celui-ci.
2. **Attributions.** Noms vérifiés dans 569/358–360 : aṭ-Ṭirāz, la Mudawwana, Abū l-Ḥasan et Abū Muḥammad Ṣāliḥ, l'ʿUtbiyya (samāʿ de Mūsā ; Ibn ʿArafa : de ʿĪsā, n° 622), Ibn al-Qāsim, « الْقَاضِي » (n° 623), Ibn al-ʿArabī et les six avis (Mālik et Ibn Nāfiʿ, Ibn al-Qāsim, Ashhab et ash-Shāfiʿī, Aṣbagh, al-Qābisī), at-Tawḍīḥ, Ibn ʿArafa, al-Lakhmī, al-Madkhal, Ibn Farḥūn, as-Suyūrī, al-Burzulī. Chez al-Dasūqī : Ibn Rushd, Ṭfā (ar-Rammāṣī), « خش » (al-Kharashī). Témoins : at-Tawḍīḥ et Ibn ʿArafa donnent les mêmes auteurs pour les quatre avis (n° 628).
3. **Statuts.** « عَلَى الْمَشْهُورِ » (Ibn al-Ḥājib, témoin) → `mashhur` (51b) ; « لا مِثْلَهُ عَلَى الأَصَحِّ » (Ibn al-Ḥājib) → `rajih` (52b) ; « وَالْأَظْهَرُ قَوْلُ أَشْهَبَ » (Ibn al-ʿArabī) → `rajih` (53) ; Ibn al-Qāsim, Aṣbagh, al-Qābisī → `qawl` ; les autres `non_precise`. Muʿtamad : 51 réprobation (« أَيْ كُرِهَ عَلَى الْمُعْتَمَدِ », al-Dardīr ; Ṭfā « وَهُوَ الْمُعْتَمَدُ ») ; 53 avis de Mālik (al-Dasūqī « قَوْلُ مَالِكٍ » ; témoin al-Zurqānī « وهو المذهب ») ; 51b, 52a, 52b confirmés par al-Dardīr. Qualifications : 51 `makruh` / `autre`, 51b `wajib` / `shart`, 52a et 52b `wajib` / `autre`, 53 `mubah` / `shart` (l'obligation tombe selon le matn).
4. **Croisement.** Points à comparer : le degré de l'« interdiction » (51 : « وَمُنِعَ » contre « كُرِهَ عَلَى الْمُعْتَمَدِ ») ; le geste du tayammoum et l'avis le plus fort (53 : al-Qābisī et al-Madkhal contre la lettre d'al-Dardīr ; Ashhab chez Ibn al-ʿArabī contre Mālik chez al-Dardīr). Concordances : 51b, 52a, 52b (al-Ḥaṭṭāb ne traite ni la soif ni l'équivalent : complément).
5. **Langue.** Matn vocalisé d'après le « ص » (51, 52a, 53) et d'après al-Dardīr, Ibn Ghāzī et al-Kharashī (51b, 52b). 10 termes nouveaux : حُقْنَةٌ خَفِيفَةٌ (le glossaire a déjà حُقْنَة au sens de lavement ; expression distincte pour éviter une infobulle fausse), عَنَت, مَنْسِيَّة, غُسْلُ الْمَيِّتِ, قِيمَة, مِثْلِيّ, مُقَاوَمَة, إِيمَاء, مَرْبُوط, شَرْطُ أَدَاءٍ.
6. **Compréhension.** Chaque `regle_pratique` se lit seule ; 53 annonce l'avis du matn puis signale l'existence des autres avis.

**Résultat** : les cinq fiches passent à `verifie` (aucune alerte bloquante). Alertes : n° 624 (corrigé) ; n° 620, 621 (limites du texte) ; n° 630 (non résolu, sans effet) ; les autres précisés. Le vers cité par al-Ḥaṭṭāb (53) n'est pas reproduit.

## Quiz

Les 20 questions des fiches et les 8 de la synthèse relues avec `quizdump.js` ; une mise en situation de 53 reformulée (l'homme attaché fait un geste vers le sol, il ne le touche pas). Positions : 51 A-D-B-C, 51b D-A-C-B, 52a C-B-D-A, 52b B-C-A-D, 53 A-C-D-B, synthèse D-A-C-B-A-D-B-C ; aucune position répétée dans une fiche ni d'une fiche à la suivante (dernière question de 50c : C). Chaque fiche a une mise en situation. Explications de la synthèse : renvois aux fiches, vérifiés contre les `regle_pratique` des fiches citées.

## Contrôles techniques

- `node --check` : `tah-01-p34.js`, `tah-01-p33.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p34.js data/lecons/tah/tah-01-p33.js` : 0 erreur, 0 doublon, 1 021 termes.
- Quiz, tout le cours (`quizstat.js`) : A 533 | B 533 | C 533 | D 533.
- `controle_site.py` sur le dépôt complet : 525 fiches hors synthèses, 1 021 termes, 0 erreur, 0 anomalie.

## Audit de fin de faṣl tah-01-09

- n° 619 **corrigé** : Ibn ʿArafa (16968, p. 109) « ابن نافع ابدا » ; alerte de tah-01-09-50b mise à jour (p34).
- tah-01-09-36 : al-Dasūqī (21604/161) dit « قَدْ تَقَدَّمَ أَنَّ الْمُعْتَمَدَ جَوَازُ التَّيَمُّمِ عَلَى الْحَشِيشِ أَوْ الْخَشَبِ عِنْدَ عَدَمِ غَيْرِهِ » ; `muatamad` et `divergences` complétés (p33 v19.3) : l'avis retenu rejoint al-Ḥaṭṭāb contre la lettre d'al-Dardīr.
- Non résolus restants du faṣl (n° 503, 509, 513, 528, 571, 582, 605, 612, 630) : aucun nouveau témoin dans les pages lues ; tous sans effet sur les règles.
- **Faṣl tah-01-09 terminé** (60 segments, synthèse livrée). Prochain faṣl : tah-01-10 (la jabīra), Mawāhib 569/360 et suivantes.
