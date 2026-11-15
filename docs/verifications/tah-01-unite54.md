# Rapport de vérification — Ṭahāra, unité 54 (tah-01-07-17 à -22, dont 17b et 18b), et audit des n° 405 à 419

Date : 2026-11-15. Fichier : nouvelle partie `data/lecons/tah/tah-01-p26.js` v12.0 (8 fiches, marque `/* FIN-UNITE-54 */` ; ≈ 74 Ko) ; `tah-01-p25.js` (≈ 125 Ko) figé, l'unité l'aurait portée au-delà de 170 Ko. Manifeste v1.25. Plan : `data/plan.js` v1.47 (17b et 18b ajoutés ; titre de 17 précisé ; 42 segments). Termes : `data/glossaire-p2.js` v1.58 (5 termes). Anomalies : n° 410 à 419 (`docs/sources/anomalies-textes-2.md`).

## Unité

Suite du faṣl tah-01-07, de « ص (وَتَخْلِيلُ شَعْرٍ) » (Shamela 569/311) à la fin du commentaire de « وَمَضْمَضَةٌ وَاسْتِنْشَاقٌ » (569/313), avant « ص (وَنُدِبَ بَدْءٌ بِإِزَالَةِ الْأَذَى) » ; t. 1, p. 312–314. Croisement : 21604/133–135 (t. 1, p. 134–136). Les segments 23 et 24 (« وَنُدِبَ بَدْءٌ … », « ثُمَّ بِأَعْضَاءِ وُضُوئِهِ كَامِلَةً مَرَّةً ») sont laissés à l'unité 55 : avec les deux segments absents du « ص », l'unité compte déjà 8 fiches.

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 19), Ibn Ghāzī (14605, p. 41), al-Dardīr et al-Kharashī (91, p. 167–169) : le « ص » omet deux segments, « وَضَغْثُ مَضْفُورِهِ لَا نَقْضُهُ » (n° 410, fiche 17b) et « وَلَوْ بَعْدَ الْمَاءِ أَوْ بِخِرْقَةٍ » (n° 413, fiche 18b) ; « وَاسْتِنْثَارٌ » (Mukhtaṣar seul, « بَعْضِ النُّسَخِ » d'al-Dardīr) n'est pas dans le texte commenté par al-Ḥaṭṭāb (n° 418).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-07-17 | faire pénétrer l'eau sous tous les poils | Mawāhib 312–313 | 311–312 | 134 | 133 |
| tah-01-07-17b | presser les tresses ; bague ; nouvelle mariée (point à comparer, 569/209) | al-Dardīr 134 | (209) | 134 | 133 |
| tah-01-07-18 | le frottement ; mises en garde de Zarrūq ; certitude ou opinion dominante | Mawāhib 313 | 312 | 134–135 | 133–134 |
| tah-01-07-18b | après l'eau, avec un linge | al-Dardīr 135 | — | 135 | 134 |
| tah-01-07-19 | se faire frotter ; farʿ d'al-Madkhal | Mawāhib 313 | 312 | 135 | 134 |
| tah-01-07-20 | impossibilité ; Saḥnūn et Ibn Ḥabīb | Mawāhib 313 | 312 | 135 | 134 |
| tah-01-07-21 | laver les mains d'abord ; conduit des oreilles | Mawāhib 313 | 312 | 135–136 | 134–135 |
| tah-01-07-22 | bouche et nez ; l'expulsion de l'eau | Mawāhib 313–314 | 312–313 | 136 | 135 |

## Vérification (étape 6)

1. **Traçabilité.** Contrôle par empreintes (`__fcheck`, maxw 35) sur 569/209, 311–313, 21604/133–135, 11355/19, 14605/41–42, 91/167–169, 14556/158, 160–161 : **191 fragments sur 192**, le manquant étant le titre du bāb (attendu). Deux fragments corrigés avant livraison (« بِغَيْرِهِمَا », non « غَيْرِهِمَا » ; « وَهُوَ الْمُخْتَارُ », non « هُوَ الْمُخْتَارُ »).
2. **Attributions.** Citations de Zarrūq (fiches 18, 20, 21, 22) contrôlées sur son commentaire de la Risāla (14556, p. 158, 160–161) : « وَكَأَنَّهُ يَعْنِي إذَا تَرَكَ الدَّلْكَ » est d'al-Ḥaṭṭāb ; « وَلَمْ أَقِفْ … تَبَعُ الرَّأْسِ » est de Zarrūq, la citation de Khalīl finissant à « عَلَى الْأَصْلِ » (n° 419). « وَلَيْسَ هَذَا مُرَادًا » et « وَهَذَا هُوَ الظَّاهِرُ » (deux sunna distinctes) sont d'al-Ḥaṭṭāb → `tarjih_hattab` de 21 et 22. Le farʿ de la fiche 19 est d'al-Madkhal (« انْتَهَى بِالْمَعْنَى »). Place avant ou après « ـ[حاشية الدسوقي] » vérifiée pour chaque citation de 21604 (Marwān aẓ-Ẓāhirī : al-Dasūqī, non al-Dardīr ; corrigé avant livraison).
3. **Statuts.** « وَالْأَشْهَرُ » d'Ibn al-Ḥājib (17) → `mashhur`, le mot cité ; « الْمَشْهُورُ » de Zarrūq (18) et de Yūsuf b. ʿUmar (19) ; « عَلَى الْمَشْهُورِ » d'al-Kharashī (19). Ibn Ḥabīb (20) → `rajih` (« وَرَجَّحَهُ ابْنُ رُشْدٍ »). Muʿtamad d'après al-Dardīr / al-Dasūqī pour les huit fiches ; « عَلَى الْمُعْتَمَدِ » (bague, linge, premier lavage des mains), « وَالْمُعْتَمَدُ الْأَوَّلُ » (21), « هُوَ الْمُخْتَارُ » (tresse de l'homme) cités. Pour 20, « الْمُعْتَمَدُ » est collé au mot suivant dans l'édition (« الْمُعْتَمَدُثُمَّ ») : cité « فَيَكُونُ هُوَ … ».
4. **Croisement.** Pages 21604/133–135 relues ; une mention de « ح » (21604/133 : la nouvelle mariée, renvoi aux ablutions) → point à comparer de 17b, avec le passage de Mawāhib 569/209 (« وَهَذَا خِلَافُ الْمَعْرُوفِ مِنْ الْمَذْهَبِ ») ; al-Dasūqī cite « فِي جَسَدِهَا كُلِّهِ », Mawāhib « فِي جَسَدِهَا ». « خِلَافًا لِـ » : al-Balansī (17b), Zarrūq d'après عج (18, divergence), al-Qābisī (18b), Bahrām d'après Saḥnūn (18b). Divergences : 18 (certitude ou opinion dominante), 19 (délégation sans besoin : Yūsuf b. ʿUmar contre al-Dardīr et al-Kharashī), 20 (le matn suit Saḥnūn, al-Dardīr retient Ibn Ḥabīb). Points à comparer : 17b, 18b (al-Kharashī : « قَبْلَ سَيَلَانِهِ وَانْفِصَالِهِ »), 19 (طفى), 21 (sens de « أَوَّلًا » : al-Kharashī prend l'autre sens). Sigles développés : بن, عبق, طفى, « شَيْخُنَا » ; عج non défini.
5. **Langue.** Matn comparé et vocalisé d'après Ibn Ghāzī (14605, p. 41) et al-Dardīr ; 17b et 18b ajoutés ; cas de 19 et 21 signalés (n° 414, 416). 5 termes nouveaux : ضَغْث, مَضْفُور, عَرُوس, إِزَار, تَعَذُّر (les autres termes des fiches étaient déjà au glossaire ; définitions reprises telles quelles).
6. **Compréhension.** Chaque `regle_pratique` se lit seule ; 19 et 20 renvoient l'une à l'autre (délégation et impossibilité). Le farʿ d'al-Madkhal (fiche 19) mentionne l'achat d'une esclave : rapporté tel quel, comme institution de l'époque.

**Résultat** : les huit fiches passent à `verifie`. Alertes non bloquantes : n° 410 et 413 (limites du texte), n° 411, 412, 414 à 419 (précisés).

## Quiz

Les 32 questions relues une à une avec `quizdump.js` : une erreur corrigée avant livraison (21, question 3 : `bonne` désignait « Il doit les relaver trois fois encore » ; choix réordonnés, position inchangée). Chaque `bonne` désigne ensuite le bon choix.

## Contrôles techniques

- `node --check` : `tah-01-p26.js`, `glossaire-p2.js`, `plan.js`, `manifeste.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p26.js` : 8 fiches, 849 termes, 0 erreur, 0 doublon ; p26 : A 8 | B 8 | C 8 | D 8 ; aucune position répétée deux fois de suite, ni dans une fiche ni d'une fiche à la suivante (dernière question de p25 : C ; première de p26 : A) ; chaque fiche a une mise en situation.
- Quiz, tout le cours (`quizstat.js`) : A 402 | B 402 | C 402 | D 402.
- `controle_site.py` sur le dépôt complet : 408 fiches (400 + 8 synthèses), 849 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.

## Audit

10 alertes nouvelles (n° 410 à 419), au-dessus du seuil de 8 : audit fait aussitôt, avec les n° 405 à 409 prévus après cette unité. Les n° 405 à 407, 410 et 413 sont des limites du texte (segments absents du « ص ») ; les autres ont un témoin (Ibn Ghāzī, Mukhtaṣar seul, al-Kharashī, Zarrūq) ou un appui de syntaxe. Aucun statut ne change. Prochain audit : après deux unités (n° 420 et suivants), ou plus tôt au-delà de 8 alertes.
