# Rapport de vérification — Ṭahāra, unité 61 (tah-01-08-24a à -27, synthèse tah-01-08-syn) et audit de fin de faṣl tah-01-08

Date : 2026-11-21. Fichier : `data/lecons/tah/tah-01-p29.js` v15.1 (6 fiches ajoutées après `/* FIN-UNITE-60 */`, dont la synthèse, marque `/* FIN-UNITE-61 */` ; ≈ 106 Ko) ; fiche 22 complétée à l'audit. Plan : `data/plan.js` v1.54 (24 découpé en 24a et 24b ; titre_ar de 27 complété ; titres de 24 à 27 précisés ; faṣl tah-01-08 : 36 segments). Termes : `data/glossaire-p2.js` v1.65 (2 termes). Anomalies : n° 482 à 491 (`docs/sources/anomalies-textes-2.md`). **Faṣl tah-01-08 terminé.**

## Unité

Fin du faṣl tah-01-08 (le mash sur les khouff), de « ص (وَوَضَعَ يُمْنَاهُ عَلَى طَرَفِ أَصَابِعِهِ … » (Shamela 569/323) à la fin du commentaire de « لَا أَسْفَلَهُ فَفِي الْوَقْتِ » (569/324), avant « فَصْلٌ يَتَيَمَّمُ » ; t. 1, p. 324–325. Croisement : 21604/145–146 (t. 1, p. 146–147).

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 22), Ibn Ghāzī (14605, p. 45), al-Dardīr, al-Kharashī (91, p. 182), al-Zurqānī (14297, p. 201–202) et al-Mawwāq (21611, p. 263–264) : variantes « طَرَفِ » / « أَطْرَافِ » et « وَوَضَعَ » / « وَوَضْعُ » (n° 482, 483), « وَمَسَحَ » / « وَمَسْحُ » (n° 489) ; début de 27 « وَبَطَلَتْ إنْ تَرَكَ أَعْلَاهُ » absent du « ص » (n° 490, matn complété).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-08-24a | la manière d'essuyer ; l'eau reprise ; un seul doigt | Mawāhib 324 | 323 | 146 | 145 |
| tah-01-08-24b | essuyer tout le khouff ; Ibn Maslama | Mawāhib 324 | 323 | 146 | 145 |
| tah-01-08-25 | le pied gauche : deux interprétations ; la plus forte | Mawāhib 324 | 323 | 146 | 145 |
| tah-01-08-26 | le dessus et le dessous : statut (divergence) | Mawāhib 324–325 | 323–324 | 146 | 145–146 |
| tah-01-08-27 | dessus laissé : prière nulle ; dessous : refaire dans le temps | Mawāhib 325 | 324 | 146–147 | 145–146 |
| tah-01-08-syn | synthèse du faṣl (8 questions) | — | — | — | — |

## Vérification (étape 6)

1. **Traçabilité.** 221 fragments arabes pour toute la partie 29 (`frags.py`, maxmots 22). Contrôle par empreintes (`__fcheck`) sur 569/321–324 et 335, 21604/143–146, 11355/21–22, 14605/44–45, 91/181–183, 14297/199–202, 21611/261–264, 14442/207 et 228–230, 16968/116–118, 1717/320–321 et 324, 21751/113 et 120 : **220 sur 221 retrouvés**, le manquant étant le titre du bāb (attendu). Une citation d'al-Dasūqī coupée par le sharḥ de la page suivante (« قَدْ أَخْرَجَ هَذَا » … « التَّقْرِيرَ ») a été scindée, puis vérifiée (2 sur 2). Relecture des affirmations en français sur le contexte : la main à laver dans le tanbīh d'al-Lakhmī (fiche 25) était d'abord dite « la droite » ; le texte dit seulement « la main qui passe sous le khouff » : formulation ramenée au texte. Une erreur fréquente de la fiche 27 disait que le dessous laissé « n'oblige à rien » : corrigée (reprise de la prière dans le temps, de préférence). Une citation d'Ibn ʿArafa vocalisée de ma main a été remise sous la forme du texte (non vocalisé).
2. **Attributions.** Sharḥ d'al-Dardīr et ḥāshiya d'al-Dasūqī séparés par « ـ[حاشية الدسوقي] » ; al-Kharashī et al-ʿAdawī par « ـ[حاشية العدوي] » ; al-Zurqānī et al-Bunānī par « ــ ». L'argument rapporté après al-Bājī (fiche 24b) est d'al-Qarāfī dans adh-Dhakhīra (« حُجَّتُنَا », 1717, p. 320), non d'al-Bājī (n° 484). Sources des citations d'al-Ḥaṭṭāb retrouvées : adh-Dhakhīra (1717, p. 320–321 : Ibn Maslama d'après al-Bājī ; aṭ-Ṭirāz sur le pied gauche, « وَهُوَ وَهْمٌ » ; la Mudawwana, Saḥnūn, Ibn Nāfiʿ, Ashhab ; le farʿ d'Ibn Abī Zayd sur les ablutions), Ibn ʿArafa (16968, p. 116–117 : audition de Mūsā, Ibn Shablūn, « وفيها: إن خص أعلاه … »), at-Tawḍīḥ (14442, p. 228 : Ashhab et Ibn Nāfiʿ), al-Mawwāq (21611, p. 263–264 : Mudawwana, Risāla, Ibn Ḥabīb, al-Jallāb, al-Kāfī). Non consultés : Mukhtaṣar al-Wāḍiḥa, aṭ-Ṭirāz, ash-Shabībī, al-Qawānīn, le commentaire d'Ibn Nājī sur la Mudawwana (signalé dans les alertes). Préférences propres d'al-Ḥaṭṭāb : 25 (« فَعُلِمَ أَنَّ التَّأْوِيلَ الثَّانِيَ أَرْجَحُ », d'après Sanad), 26 (« وَالْأَوَّلُ أَظْهَرُ »).
3. **Statuts.** « مَشْهُورُهَا » (ash-Shabībī, 26) et « لَا يُجْزِئُهُ عَلَى الْمَشْهُورِ » (adh-Dhakhīra), « وجه المشهور » (at-Tawḍīḥ) (27) → `mashhur` ; 25 → `rajih` (« أَرْجَحُ », Sanad ; al-Dasūqī « وَالْأَرْجَحُ »). Muʿtamad confirmé par al-Dardīr / al-Dasūqī pour 24a, 25, 26, 27 ; non tranché pour 24b (rien aux pages croisées).
4. **Croisement.** Mentions de « ح » : 21604/145 « وَالْأَرْجَحُ مِنْهُمَا الثَّانِي كَمَا فِي ح » (25 : concordance) ; al-Bunānī (14297/201) « كما في مختصر الواضحة انظر ح » (24a : concordance) ; al-Zurqānī (14297/202) « وكل ذلك على جهة الندب قاله ح » (27 : concordance) ; al-Dasūqī (21604/145–146) résume sans le nommer l'exposé d'al-Ḥaṭṭāb sur 26. Divergences : 26 (le dessous : obligatoire selon al-Ḥaṭṭāb, réunion recommandée selon al-Dardīr), 27 (refaire les ablutions : Ibn Abī Zayd contre al-Dasūqī). Sigles : « ح », « بن », « عج » (non défini) développés ou signalés.
5. **Langue.** Matn vocalisé d'après le « ص », le Mukhtaṣar seul, Ibn Ghāzī, al-Dardīr et al-Kharashī ; matn de 27 complété (n° 490). 2 termes nouveaux : صِفَةُ الْمَسْحِ, اِسْتِيعَاب ; تَأْوِيلَانِ (glossaire.js) et الْوَقْتُ الْمُخْتَارُ (glossaire-p2) restent dans `termes` sans être redéfinis.
6. **Compréhension.** Chaque `regle_pratique` se lit seule : 24a et 25 la manière d'essuyer, 24b l'essuyage complet, 26 le statut du dessus et du dessous, 27 la prière faite après en avoir laissé un.

**Résultat** : les cinq fiches passent à `verifie` (aucune alerte bloquante). Alertes non bloquantes : n° 484 et 487 (corrigés), n° 482, 483, 485, 486, 488, 489, 491 (précisés), n° 490 (limite du texte).

## Synthèse tah-01-08-syn

8 questions, chacune renvoyant aux fiches qui la fondent (01, 02b ; 06, 07, 10 ; 08, 11, 12, 13 ; 05b, 23 ; 16 à 19 ; 20a, 21 ; 14, 14b, 15, 24a ; 26, 27). Réponses relues sur les `regle_pratique` des fiches de p27, p28 et p29.

## Quiz

Les 28 questions (20 des fiches, 8 de la synthèse) relues une à une avec `quizdump.js` : aucune erreur. Positions : 24a C-A-D-B, 24b D-B-A-C, 25 A-C-B-D, 26 B-D-C-A, 27 C-A-B-D, synthèse B-D-A-C-B-C-A-D ; aucune position répétée dans une fiche ni d'une fiche à la suivante (dernière question de 23 : B) ; chaque fiche a une mise en situation.

## Contrôles techniques

- `node --check` : `tah-01-p29.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p29.js` : 13 fiches, 899 termes, 0 erreur, 0 doublon ; p29 : A 14 | B 14 | C 14 | D 14.
- Quiz, tout le cours (`quizstat.js`) : A 458 | B 458 | C 458 | D 458.
- `controle_site.py` sur le dépôt complet : 452 fiches hors synthèses (+ 10 synthèses = 462), 899 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.

## Audit de fin de faṣl

Décision n° 6. Les n° 436 à 481 avaient été audités aux unités 57 à 60 ; l'audit porte sur les n° 482 à 491 et reprend les non résolus du faṣl (n° 444, 459, 460, 466, 477) : aucun nouveau témoin dans les pages relues. Complément : al-ʿAdawī (91, p. 181) sur le temps et la valeur du khouff, ajouté à la fiche 22 (deux « Point à comparer »). Aucun statut ne change. Le faṣl tah-01-08 compte 36 segments, 36 fiches et la synthèse, et 56 anomalies (n° 436 à 491). Prochain faṣl : tah-01-09 (le tayammoum).
