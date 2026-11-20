# Rapport de vérification — Ṭahāra, unité 58 (tah-01-08-06 à -12, dont 09b)

Date : 2026-11-20. Fichier : `data/lecons/tah/tah-01-p28.js` v14.0 (nouvelle partie, `tah-01-p27.js` figée à ≈ 132 Ko ; 8 fiches, marque `/* FIN-UNITE-58 */` ; ≈ 68 Ko). Manifeste : `data/manifeste.js` v1.27. Plan : `data/plan.js` v1.51 (09b ajouté ; titre_ar de 06, 07, 08, 10, 11 et 12 complétés ; titres précisés ; faṣl tah-01-08 : 31 segments). Termes : `data/glossaire-p2.js` v1.62 (14 termes). Anomalies : n° 447 à 460 (`docs/sources/anomalies-textes-2.md`), et audit anticipé des n° 447 à 460.

## Unité

Suite du faṣl tah-01-08 (le mash sur les khouff), de « ص (طَاهِرٍ) » (Shamela 569/319) à la fin du commentaire de « حَتَّى يَخْلَعَ الْمَلْبُوسَ قَبْلَ الْكَمَالِ » (569/320), avant « ص (وَلَا لَابِسٍ لِمُجَرَّدِ الْمَسْحِ …) » ; t. 1, p. 320–321 ; plus Mawāhib 569/325 (t. 1, p. 326 : Ibn ʿAbd as-Salām sur la désobéissance, cité en fiche 09). Croisement : 21604/141–143 (t. 1, p. 142–144).

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 20–21), Ibn Ghāzī (14605, p. 43), al-Dardīr, al-Kharashī (91, p. 177–179), al-Mawwāq (21611, p. 255–258) et, à l'audit, al-Zurqānī (14297, p. 194–197) : le « ص » omet « بِشَرْطِ جِلْدٍ » et « خُرِزَ » (n° 447), « وَأَمْكَنَ تَتَابُعُ الْمَشْيِ بِهِ » (n° 449), « كَمُلَتْ بِلَا تَرَفُّهٍ » (n° 452), le segment « فَلَا يُمْسَحُ وَاسِعٌ » (n° 453, fiche 09b), « وَمُخَرَّقٌ قَدْرَ ثُلُثِ الْقَدَمِ وَإِنْ بِشَكٍّ » et « كَمُنْفَتِحٍ صَغُرَ » (n° 454), « غَسَلَ رِجْلَيْهِ فَـ » (n° 457, corrigé) et « أَوْ رِجْلًا فَأَدْخَلَهَا » (n° 458). Laissés à l'unité 59 : « وَلَا مُحْرِمٌ لَمْ يُضْطَرَّ » et « وَفِي خُفٍّ غُصِبَ تَرَدُّدٌ » (absents du « ص » : futures fiches 12b et 12c), puis le segment 13.

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-08-06 | cuir, pur, cousu ; les dix conditions d'al-Dardīr | Mawāhib 320 | 319 | 142 | 141 |
| tah-01-08-07 | couvrir l'endroit obligatoire ; pouvoir marcher | Mawāhib 320 | 319 | 142 | 141 |
| tah-01-08-08 | purification par l'eau, complète, sans recherche du confort | Mawāhib 320 | 319 | 142–143 | 141–142 |
| tah-01-08-09 | désobéissance par le port ou par le voyage | Mawāhib 320, 326 | 319, 325 | 143 | 142 |
| tah-01-08-09b | le khouff trop large (et le trop étroit) | al-Dardīr 143 | — | 143 | 142 |
| tah-01-08-10 | la déchirure : limite du tiers du pied ; doute ; petite ouverture | Mawāhib 320–321 | 319–320 | 143–144 | 142–143 |
| tah-01-08-11 | pieds lavés et khouff mis avant la fin des ablutions ; la lamʿa | Mawāhib 321 | 320 | 144 | 143 |
| tah-01-08-12 | un pied chaussé avant l'autre : ôter ce qui a été mis trop tôt | Mawāhib 321 | 320 | 144 | 143 |

## Vérification (étape 6)

1. **Traçabilité.** 142 fragments arabes cités (`frags.py`, maxmots 16). Contrôle mécanique par empreintes (`__fcheck`) sur les pages chargées dans le navigateur (569/317–326 ; 21604/140–145 ; 91/175–183 ; 14605/43–44 ; 11355/20–21 ; 14442/218–226 ; 16968/112–118 ; 21751/180–190 ; 21611/253–260 ; 1717/315–325 ; 14297/196–197) : **141 fragments sur 142 retrouvés** ; le seul manquant est le titre du bāb dans l'en-tête du fichier (« بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ », p. 31 de Mawāhib, hors des pages chargées), qui n'est pas une citation de fiche. Relecture des affirmations en français sur le contexte : trois corrections avant livraison — fiche 09, la désobéissance par le port était attribuée à al-ʿAdawī, elle est d'al-Kharashī (91/178–179 : « لِعِصْيَانِهِ بِلُبْسِهِ ») ; la question de mise en situation de 09 suit ; fiche 06, le sigle « طفى » n'est plus développé (non défini dans la liste) ; fiche 08, le tanbīh sur les khouff du dessus est reformulé d'après le texte (« ثُمَّ أَحْدَثَ وَمَسَحَ عَلَيْهِمَا ثُمَّ لَبِسَ خُفَّيْنِ آخَرَيْنِ »). Un distracteur de quiz en arabe inventé (« إلَّا دُونَهُ ») remplacé par une leçon réelle (« لَا دُونَهُ »).
2. **Attributions.** Sharḥ d'al-Dardīr et ḥāshiya d'al-Dasūqī séparés par « ـ[حاشية الدسوقي] » (21604/141–143) ; al-Kharashī et al-ʿAdawī par « ـ[حاشية العدوي] » (91/177–179). Sources des citations d'al-Ḥaṭṭāb : aṭ-Ṭirāz par adh-Dhakhīra (1717, p. 316, n° 451) ; Ibn Rushd par at-Tawḍīḥ (14442, p. 222) et al-Bayān (21751, p. 182, n° 456) ; Ibn ʿArafa (16968, p. 114–115). Ibn ʿAbd as-Salām sur la désobéissance : Mawāhib 569/325, sous « وَسَفَرٍ أُبِيحَ ». Préférences propres d'al-Ḥaṭṭāb : 08 (« قُلْتُ: وَلَا يُؤْخَذُ ذَلِكَ مِنْ قَوْلِ اللَّخْمِيِّ »), 10 (« وَلَفْظَةُ لَا أَقَلَّ أَخَصْرُ فَهِيَ أَوْلَى »), 12 (réponse à Ibn Nājī).
3. **Statuts.** « عَلَى الْمَشْهُورِ » (ash-Shāmil, 06 ; aṭ-Ṭirāz, 11) et « الْمَشْهُورُ » (Ibn Rushd et Ibn Bashīr, 12) → `mashhur`. « وَهُوَ الصَّحِيحُ » (aṭ-Ṭirāz, 09) rapporté avec le mot cité, sans statut d'école. Muʿtamad confirmé par al-Dardīr / al-Dasūqī pour les huit fiches ; en 09, le muʿtamad (« وَالْمُعْتَمَدُ أَنَّ الْعَاصِيَ بِالسَّفَرِ يَجُوزُ لَهُ الْمَسْحُ ») va contre la lettre du matn : signalé en divergence et dans la règle pratique.
4. **Croisement.** « اُنْظُرْ ح » (21604/142) : concordance sur le ghousl (08). « خِلَافًا لعبق » (21604/141) : divergence avec al-ʿAdawī sur le khouff qui glisse (07). Divergences : 07, 08 (la crainte des scorpions), 09 (voyage de désobéissance). Points à comparer : 06 (la pureté, condition propre ou non), 09b (khouff large chez al-Jallāb ; khouff étroit), 10 (source de la limite du tiers), 12 (ôter un khouff ou les deux ; fondement). Concordances et compléments ailleurs. Sigles développés : عبق (ʿAbd al-Bāqī az-Zurqānī), خش (al-Kharashī), شب (ash-Shabrakhītī), ح ; « عج » laissé tel quel (non défini).
5. **Langue.** Matn vocalisé d'après le « ص », Ibn Ghāzī, al-Dardīr et al-Kharashī (variantes n° 448, 450, 455). 14 termes nouveaux : لُبَد, خَرْز, رَسْرَاس, مُرُوءَة, تَرَفُّه, طَهَارَةٌ تُرَابِيَّة, عِصْيَان, آبِق, عَاقّ, تَتَابُعُ الْمَشْيِ, مُخَرَّق, شَقّ, تَلْفِيق, كَمَال.
6. **Compréhension.** Chaque `regle_pratique` se lit seule : 06 à 08 disent quel khouff et quelle purification, 09 qui perd la dispense, 09b et 10 quand le khouff ne s'essuie plus, 11 et 12 comment réparer un khouff mis trop tôt.

**Résultat** : les huit fiches passent à `verifie` (aucune alerte bloquante). Alertes non bloquantes : n° 447, 449, 452, 453, 454, 458 (limites du texte), n° 457 (corrigé), n° 448, 450, 451, 455, 456 (précisés), n° 459, 460 (non résolus, sans effet).

## Quiz

Les 32 questions relues une à une avec `quizdump.js` : le choix désigné par `bonne` est le bon partout. Positions par fiche : 06 A-D-B-C, 07 D-B-A-C, 08 B-C-D-A, 09 C-A-D-B, 09b A-D-C-B, 10 D-B-A-C, 11 B-A-C-D, 12 C-D-B-A ; aucune position répétée dans une fiche ni d'une fiche à la suivante (première question de 06 ≠ B, dernière de 05b) ; chaque fiche a une mise en situation.

## Contrôles techniques

- `node --check` : `tah-01-p28.js`, `manifeste.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p28.js` : 8 fiches, 885 termes, 0 erreur, 0 doublon ; p28 : A 8 | B 8 | C 8 | D 8.
- Quiz, tout le cours (`quizstat.js`) : A 436 | B 436 | C 436 | D 436.
- `controle_site.py` sur le dépôt complet : 432 fiches (hors synthèses), 885 termes, 0 erreur, 0 anomalie.

## Audit

Audit anticipé des n° 447 à 460 (14 alertes, au-dessus du seuil de 8) : al-Zurqānī et al-Bunānī (14297, p. 194–197) ajoutés aux témoins ; ils confirment les n° 447, 453 et 457, précisent le n° 455 (al-Zurqānī préfère « بَلْ » pour une raison de grammaire) et le n° 459 (même phrase d'al-Bunānī, sans le sigle). Aucun statut ne change. Prochain audit : après l'unité 60, ou plus tôt au-delà de 8 alertes.
