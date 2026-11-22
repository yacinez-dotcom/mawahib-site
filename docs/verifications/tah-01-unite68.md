# Rapport de vérification — Ṭahāra, unité 68 (tah-01-09-34a à -40) et audit anticipé des n° 577 à 591

Date : 2026-11-22. Fichier : `data/lecons/tah/tah-01-p33.js` v19.0, nouvelle partie (8 fiches, marque `/* FIN-UNITE-68 */` ; ≈ 66 Ko) ; `tah-01-p32.js` (v18.1, ≈ 130 Ko) figé. Manifeste : `data/manifeste.js` v1.32. Plan : `data/plan.js` v1.61 (34 découpé en 34a et 34b ; titre_ar de 34, 37 et 38 corrigés ; titres de 35 à 40 précisés). Termes : `data/glossaire-p2.js` v1.72 (16 termes). Anomalies : n° 577 à 591 (`docs/sources/anomalies-textes-2.md`).

## Unité

Suite du faṣl tah-01-09 (le tayammoum), de « ص (وَمَنْقُولٌ كَشَبٍّ وَمِلْحٍ) » (Shamela 569/352) à la fin du commentaire de « ص (وَالرَّاجِي آخِرَهُ) » (569/355) ; t. 1, p. 353–356. Le segment 41 « وَفِيهَا تَأْخِيرُ الْمَغْرِبِ لِلشَّفَقِ » ouvre l'unité 69. Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 156–157 (21604/155–156).

Comparaison préalable du « ص » avec Ibn Ghāzī (14605, p. 48), al-Kharashī (91, p. 191–192) et al-Dardīr : aucun segment omis ; trois lectures de cas ou de forme corrigées (n° 577 « وَمَنْقُولٍ », n° 586 « وَفِعْلُهُ », n° 588 « أَوَّلَ ») ; « أَوْ حَجَرٌ » gardé (n° 581).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-09-34a | le minéral transporté (alun, soufre, arsenic) : vaut dans son gisement, non passé dans le commerce ; la construction du matn ; contre al-Ubbī | Mawāhib 353–354 | 352–353 | 156 | 155 |
| tah-01-09-34b | le sel : quatre avis d'Ibn ʿArafa ; sel de mine, non sel fabriqué | Mawāhib 353 | 352 | 156 | 155 |
| tah-01-09-35 | le mur de briques crues ou de pierre, pour le malade et le bien portant | Mawāhib 354 | 353 | 156 | 155 |
| tah-01-09-36 | pas sur la natte, le tapis ou le bois ; l'herbe et le bois faute d'autre chose | Mawāhib 354–355 | 353–354 | 156–157 | 155–156 |
| tah-01-09-37 | le tayammoum dans le temps ; la prière manquée ; la prière funéraire | Mawāhib 355 | 354 | 156–157 | 155–156 |
| tah-01-09-38 | qui désespère : au début du temps choisi | Mawāhib 355 | 354 | 157 | 156 |
| tah-01-09-39 | qui hésite : au milieu du temps ; craintif, malade sans aide, prisonnier | Mawāhib 355–356 | 354–355 | 157 | 156 |
| tah-01-09-40 | qui espère : à la fin du temps ; retard recommandé | Mawāhib 356 | 355 | 157 | 156 |

## Vérification (étape 6)

1. **Traçabilité.** 175 fragments arabes au premier passage (`frags.py`, maxmots 26). Contrôle par empreintes (`__fcheck`, maxw 30) sur 569/351–355, 21604/155–156, 14605/48, 91/191–192, 14442/203–204, 16968/106, 14297/218, 21735/114 : 172 retrouvés. Trois manquants examinés : la citation d'Ibn al-Ḥājib d'après at-Tawḍīḥ (14442, p. 203) finissait par « وأشهب », collé sur Shamela au mot suivant (« وأشهبرواية ») : citation arrêtée à « لابن القاسم » et contrôlée de nouveau (trouvée) ; deux lectures attendues (« وَإِنْ ذَهَبَ », « إلَّا إيَّاهُ ») étaient écrites en arabe entre « » sans être des citations : passées en transcription. Résultat : **173 sur 173**.
2. **Attributions.** Noms vérifiés dans 569/352–355 : Mālik (as-Sulaymāniyya), Khalīl (at-Tawḍīḥ), Ibn Ghāzī, al-Bisāṭī, Bahrām, al-Ubbī, Ibn al-Ḥājib, Ibn ʿArafa, Ibn al-Qāsim, Ashhab, Ibn al-Qaṣṣār, al-Bājī, al-Lakhmī, Ibn Muḥriz, aṣ-Ṣaqalī d'après Sulaymān, Zarrūq, Ibn Rāshid, al-Fākihānī, Sanad (aṭ-Ṭirāz), al-Abharī, al-Waqār, Ibn Ḥabīb, ʿAbd al-Ḥaqq, al-Qarāfī (adh-Dhakhīra), as-Suyūrī, al-Burzulī, Ibn al-Jallāb, Ibn Farḥūn, Ibn Rushd (al-Muqaddimāt). Sources retrouvées : at-Tawḍīḥ (14442, p. 203–204 : le sel, l'ocre), Ibn ʿArafa (16968, p. 106 : les quatre avis sur le sel), al-Zurqānī et al-Bunānī (14297, p. 218 : l'herbe et le bois), al-Muqaddimāt (21735, p. 114 : les trois cas d'attente). Zarrūq sur la Risāla (14556, p. 160–240) : le passage sur le mur n'a pas été retrouvé (n° 582). Relecture contradictoire : dans la fiche 36, la phrase « فَيَتَحَصَّلُ أَنَّهُ يَجُوزُ … إلَّا إذَا لَمْ يَجِدْ غَيْرَهُ » a perdu sa négation (n° 583) : la règle suit la phrase suivante d'al-Ḥaṭṭāb et al-Zurqānī ; seule la fin est citée.
3. **Statuts.** al-Fākihānī : « … أَظْهَرُ عِنْدِي مَا قَالَهُ اللَّخْمِيُّ … » → `rajih` (36) ; al-Ubbī, Ashhab, al-Bājī, aṣ-Ṣaqalī, Ibn Ḥabīb et les avis sans auteur → `qawl` ; ailleurs `non_precise` ; aucun `mashhur` deviné (le « عَلَى الْمَشْهُورِ » d'al-Kharashī et al-Zurqānī en 36 est rapporté en alerte, non comme statut de la fiche). Qualifications : 34a, 34b, 35 `mubah` ; 36 `haram` (comme 19) ; 37 `wajib` (« وَلَزِمَ فِعْلُهُ ») ; 38 à 40 `mandub` (al-Dardīr : « نَدْبًا »). Muʿtamad confirmé par al-Dardīr / al-Dasūqī pour les huit fiches ; en 40, al-Dasūqī : « هَذَا هُوَ الْمُعْتَمَدُ خِلَافًا لِمَنْ قَالَ بِالْوُجُوبِ ». Non tranché sur un cas : l'herbe et le bois quand on n'a rien d'autre (36).
4. **Croisement.** Mentions de « ح » sur 21604/155–156 : « قَالَ بْن وَكَلَامُ ح يَقْتَضِي أَنَّ الرَّاجِحَ … » (36 : al-Bunānī lit al-Ḥaṭṭāb comme retenant al-Lakhmī) ; « كَمَا هُوَ مُقْتَضَى نَقْلِ ح » (38 : pas de reprise si l'eau est trouvée après la prière, Point à comparer avec Ibn Yūnus). **Divergence** (36) : al-Dardīr refuse l'herbe et le bois « وَلَوْ لَمْ يَجِدْ غَيْرَهُ » ; al-Dasūqī, al-Bunānī, Muṣṭafā ar-Rammāṣī et al-ʿAdawī rapportent l'avis d'al-Lakhmī, que suit al-Ḥaṭṭāb (tarjīḥ). Concordances : la construction du matn et ce qu'est « transporter » (34a), le sel de mine (34b, « أَظْهَرُ الْأَقْوَالِ الْأَرْبَعَةِ »), le bien portant et le mur cuit (35), la natte couverte de terre (36). Compléments d'al-Dardīr / al-Dasūqī : la liste des minéraux (34a), le sel fabriqué chez al-Zurqānī, « اسْتِظْهَارٌ مِنْ عِنْدِ نَفْسِهِ » (34b), le mur mêlé de paille (35), la prière funéraire et le tayammoum enchaîné avant le temps (37), les six cas du désespéré et le temps de nécessité (38), les assimilés qui désespèrent ou espèrent (39), pourquoi le retard n'est pas obligatoire et la reprise (40).
5. **Langue.** Matn vocalisé d'après le « ص », Ibn Ghāzī et al-Dardīr (n° 577, 586, 588). 16 termes nouveaux : شَبّ, كِبْرِيت, عَقَاقِير, مَغْرَة, مِلْح, حَائِط, لَبِن, بِسَاط, غُبَار, خَشَب, حَشِيش, حَلْفَاء, آيِس, مُتَرَدِّد, مَسْجُون, رَاجِي ; termes déjà définis (زِرْنِيخ, مَعْدِن, مَعْدِنِيّ, جِير, آجُرّ, حَصِير, لُبَد, فَائِتَة, اِتِّصَال, الْوَقْتُ الْمُخْتَارُ) repris avec leur définition exacte. Deux fautes de saisie corrigées avant contrôle (un « T » latin dans le titre_ar de 38, une espace avant « ؛ » en 37).
6. **Compréhension.** Chaque `regle_pratique` se lit seule et dit sur quoi faire le tayammoum, ou quand le faire.

**Résultat** : les huit fiches passent à `verifie` (aucune alerte bloquante). Alertes : n° 577, 583, 586, 588 (corrigés) ; n° 582 (non résolu, sans effet sur la règle) ; les autres précisés.

## Quiz

Les 32 questions relues une à une avec `quizdump.js` : une erreur corrigée : en 39, Q1, l'indice `bonne` désignait « Au temps de nécessité » ; les deux derniers choix sont intervertis, l'indice désigne maintenant la bonne réponse (« À la fin de ce qu'on appelle encore le début du temps ») et les positions restent équilibrées. Positions : 34a C-A-D-B, 34b D-B-A-C, 35 A-D-C-B, 36 C-A-B-D, 37 B-D-A-C, 38 A-C-D-B, 39 D-A-B-C, 40 B-C-D-A ; aucune position répétée dans une fiche ni d'une fiche à la suivante (dernière question de tah-01-09-33 : B) ; chaque fiche a une mise en situation.

## Contrôles techniques

- `node --check` : `tah-01-p33.js`, `manifeste.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p33.js` : 8 fiches, 991 termes, 0 erreur, 0 doublon ; p33 : A 8 | B 8 | C 8 | D 8.
- Quiz, tout le cours (`quizstat.js`) : A 510 | B 510 | C 510 | D 510.
- `controle_site.py` sur le dépôt complet : 504 fiches hors synthèses, 991 termes, 0 erreur, 0 anomalie.

## Audit anticipé des n° 577 à 591

Décision n° 6 (15 alertes, au-dessus du seuil de 8). Quatre corrections : trois lectures du matn (n° 577, 586, 588), chacune portée par Ibn Ghāzī et al-Dardīr, et une négation tombée (n° 583), imposée par la phrase suivante d'al-Ḥaṭṭāb et par al-Zurqānī ; dix précisions, chacune avec un témoin ou un appui de syntaxe ; un non résolu (n° 582, citation de Zarrūq non retrouvée ; la fin, douteuse, n'est pas citée). Aucun statut ne change ; aucune règle pratique ne dépend d'une lecture douteuse.
