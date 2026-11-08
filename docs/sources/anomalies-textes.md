# Audit des anomalies probables dans les textes sources

Date : 2026-11-03. Périmètre : du Module 0 (int-01, *Mawāhib* t. 1, p. 33–42) à la Ṭahāra, unité 5 (tah-01-01-30, t. 1, p. 86), ainsi que les anomalies relevées lors du squelette de la Ṭahāra. Complété le même jour par l'audit de fin de faṣl tah-01-01 (unité 6, fiches 31 à 34, n° 44 à 50) et par l'audit avancé de l'unité 7 (tah-01-02-01 à -08, n° 51 à 59), puis le 2026-11-04 par l'audit avancé de l'unité 8 (n° 63 à 69) et par les relevés et l'audit avancé de l'unité 9 (n° 70 à 84), puis par l'unité 11 et l'audit des unités 10–11 (n° 91 à 100 ; n° 86, 87, 89 repris), et par l'unité 12 (n° 101 à 106).

Sources de l'audit : champ `alertes` des 62 fiches, sections « Corrections » des 9 rapports de vérification, et `docs/sources/tah-01-segments.md`. Toutes les alertes de nature textuelle ont été reprises dans le tableau.

Ne figurent pas dans le tableau, car ce ne sont pas des anomalies : les lignes « Croisement » (références al-Dardīr / al-Dasūqī), les sigles d'al-Dasūqī conservés tels qu'imprimés, les noms non développés dans le texte (« عَلِيٌّ », « الشَّارِحُ », « الشَّيْخ »), et les notes sur la qualification ou sur la faiblesse d'un hadith.

Légende des types :
- **Coquille** : lettre, mot ou point diacritique fautif ; le sens attendu est clair.
- **Négation** : négation tombée ou inversée, ce qui renverse le sens.
- **Vocalisation** : voyelles absentes ou fautives dans l'édition.
- **Passage altéré** : phrase qu'on ne peut pas construire telle qu'imprimée.
- **Variante de nom** : un nom diffère entre *Mawāhib* et al-Dasūqī (ou une autre édition).
- **Contradiction** : deux affirmations incompatibles dans le texte, ou entre les sources.

## Module 0 (int-01)

| N° | Fiche (t. 1, p.) | Sujet | Anomalie probable | Type | Traitement | Résultat de la campagne |
|---|---|---|---|---|---|---|
| 1 | int-01-01-01 (33–34) | Renvoi « فِيهَا » à la Mudawwana | Fin de « فَأَجَبْت » non vocalisée dans le matn | Vocalisation | Reproduit tel quel | **Corrigé** : vocalisation complétée (« فَأَجَبْتُ »), consonnes conformes au Mukhtaṣar seul (11355, p. 1) |
| 2 | int-01-01-01 (33–34) | Pronom sous-entendu | Exemples vocalisés à la 1re personne (« رَوَيْت / حَمَلْت / قَيَّدْت ») alors que le texte parle d'un pronom féminin de 3e personne | Vocalisation | Exemples non repris | **Confirmé** : pronom de 3e personne — Minaḥ al-Jalīl (21614, p. 11), al-Dasūqī (21604, p. 20) ; alerte précisée |
| 3 | int-01-01-02 (34) | « تَأْوِيلَانِ » | Matn « وَبِأَوَّلٍ », alors que le commentaire parle de la racine (مَادَّة) | Vocalisation | À confirmer sur une autre édition ; fiche `a_revoir` | **Corrigé** : Mukhtaṣar seul (11355, p. 1) « وبـ\"أول\" » ; Shifāʾ (14605, p. 7) « بمادة أول ». Matn « وَبِـ«أَوَّل» » ; fiche passée à `verifie` |
| 4 | int-01-01-02 (34) | « تَأْوِيلَانِ » | « وَلَيْسَ فِي أَدَاءً فِي الْحَمْلِ عَلَى حُكْمٍ … » | Passage altéré | Non traduit | **Corrigé** : lire « آرَاءٍ » — Shifāʾ (14605, p. 8) ; phrase désormais traduite |
| 5 | int-01-01-02 (34) | Définition du تَأْوِيل | « إِخْرَاجُ اللَّفْظِ عَلَى ظَاهِرِهِ » ; le sens demande « عَنْ ظَاهِرِهِ » | Coquille | Lecture à confirmer | **Corrigé** : lire « عَنْ » — Minaḥ (21614, p. 11) « صرف اللفظ عن المعنى الظاهر » |
| 6 | int-01-01-03c (34–36) | Ibn Rushd (الأَظْهَر) | Décès en 520 selon al-Ḥaṭṭāb, en 595 selon une note de l'éditeur du Mukhtaṣar seul (Shamela 11355) | Variante entre éditions | La fiche suit al-Ḥaṭṭāb | **Non résolu** : trois dates — 520 (al-Ḥaṭṭāb), 530 (Minaḥ, p. 12 ; al-Dardīr, 21604, p. 21), 595 (note de 11355) ; alerte mise à jour |
| 7 | int-01-01-03d (35–36, 39) | Forme verbale de « قَوْل » = al-Māzirī | « قَالَ أَوْ قِيلَ » cités comme formes verbales d'al-Māzirī, alors que p. 39 un verbe sans sujet renvoie à Mālik ; le texte ne dit pas comment distinguer les deux | Contradiction (non résolue) | Fiche `a_revoir` ; à recouper avec al-Dardīr / al-Dasūqī | **Limite du texte** : recoupé avec al-Dardīr / al-Dasūqī (21604, p. 21), Minaḥ (p. 12), Shifāʾ (p. 8) ; aucun ne donne de critère. Alerte non bloquante ; fiche passée à `verifie` |
| 8 | int-01-01-04a, -04b (36–37) | « خِلَاف », « قَوْلَانِ » | Fins de « قُلْت » et « ذَكَرْت » non vocalisées | Vocalisation | Reproduit tel quel | **Corrigé** : « قُلْتُ », « ذَكَرْتُ » |
| 9 | int-01-01-04b (36–37) | Choix du mufti sans savant | Sens de « فَتَرَجَّحَتْ » incertain ; sujet de « وَهَذَا إذَا لَمْ يَكُنْ فِيهِ » et référent de « فِيهِ » incertains | Construction ambiguë | Fiche neutre | **Non résolu** : aucun second témoin ne commente la phrase |
| 10 | int-01-01-05 (37) | Sens implicites | « وَاعْتَبَرَ » (Mawāhib) / « وأعتبر » (Mukhtaṣar seul) | Variante entre éditions | Sans effet sur le sens | **Non résolu** : sans effet sur le sens |
| 11 | int-01-01-05 (38) | Sens implicites | « وَكَقَوْلِهِ فِيهِ القاة … » | Passage altéré | Non utilisé | **Non résolu** : « القاة » absent de Shifāʾ et de Minaḥ |
| 12 | int-01-01-07 (38) | « تَرَدُّد » | « الْغَرْوِ » pour « الْعَزْوِ » (l'attribution à l'école) | Coquille | La fiche suit le sens attendu | **Corrigé** : lire « الْعَزْوِ » — Shifāʾ (14605, p. 13) « اختلاف طرقهم في العزو للمذهب » |
| 13 | int-01-01-08 (39) | « وَلَوْ » | « فِي أَنَّ الْإِغْيَائِيَّةِ » : « أَنَّ » pour « إِنْ » | Coquille | Non utilisé | **Non résolu** : Shifāʾ (p. 13) a une autre formule (« لو الإغيائية المقرونة بواو النكاية »), pas la phrase de Mawāhib |
| 14 | int-01-02-07b (40) | Médinois, Égyptiens… | Trois noms (al-Makhzūmī, Ibn Shablūn, Ibn Shaʿbān) collés à la liste des Maghrébins ; Ibn Shablūn identifié « أَبُو مُوسَى بْنُ شَاسٍ » | Mise en page ; identification douteuse | Traités comme des notes ; identification non reprise | **Non résolu** |
| 15 | int-01-02-08a (40–41) | « الجُمْهُور » | « أَصْلُ الْخِلَافِ كَبِيرُ الْجُمْهُورِ » ; phrase sur al-Bājī à cheval sur deux pages | Passage altéré | Seul le sens sûr est retenu | **Non résolu** |
| 16 | int-01-02-09a (41) | « يَنْبَغِي » | « أَنْ يَنْبَغِي » pour « أَنَّ يَنْبَغِي » | Coquille | Citation à partir de « يَنْبَغِي » | **Non résolu** |
| 17 | int-01-02-11 (41–42) | Renvois à al-ʿUtbiyya | « Aṣbagh » dans une liste, « Muḥammad ibn Aṣbagh » dans l'autre ; « وَأُقَرِّبُ » pour « وَأَقْرَبُ » | Incohérence ; vocalisation | Reproduit ; non interprété | **Non résolu** |

## Ṭahāra (tah-01-01)

| N° | Fiche (t. 1, p.) | Sujet | Anomalie probable | Type | Traitement | Résultat de la campagne |
|---|---|---|---|---|---|---|
| 18 | tah-01-01-03 (51) | Glace, neige, sel fondus | Matn « أَوَذَابَ » pour « أَوْ ذَابَ » | Coquille dans le matn | Corrigé (confirmé par al-Dardīr) | Déjà corrigé avant la campagne |
| 19 | tah-01-01-07 (53–54) | Doute sur ce qui a changé l'eau | Al-Bājī : « إلَّا لِلْحُكْمِ بِنَجَاسَتِهِ » pour « لَا » | Négation | La fiche suit le sens attendu | **Corrigé** : al-Muntaqā (6684, p. 58) « منع منه كراهية واستظهارا لا الحكم بنجاسته » |
| 20 | tah-01-01-14 (58) | Sel fabriqué | « لِأَنَّهَا تَدْعُو » pour « تَدَّعِي » | Coquille | Sans effet | **Non résolu** |
| 21 | tah-01-01-15 (58) | Eau changée par ce qui s'en sépare | « وَلَا يَرْتَفِعُ … إلَّا بِالْمَاءِ الْمُتَغَيِّرِ » pour « لَا بِالْمَاءِ » : sens inversé | Négation | La fiche suit la suite du texte | **Non résolu** |
| 22 | tah-01-01-15 (59) | Vapeur de mastic | « وَكَالْمَاءِ الْمُتَغَيِّرِ … كَالدُّهْنِ الَّذِي يُخَالَطُ بِبُخَارِ الْمُصْطَكَى » | Passage altéré | La fiche s'appuie sur la suite, claire | **Non résolu** |
| 23 | tah-01-01-15 (al-Dardīr, 37) | Changement certain ou probable | « وَلَمْ يَكُنْ بَيِّنًا » pour « وَلَوْ لَمْ يَكُنْ بَيِّنًا » | Coquille (al-Sharḥ al-kabīr) | Lecture appuyée par al-Dasūqī | **Non résolu** : une seule édition d'al-Sharḥ al-kabīr disponible |
| 24 | tah-01-01-16 (61) | Corde de la sâniya | Al-Ḥaṭṭāb définit la sâniya comme « la corde » ; al-Dardīr « سَاقِيَة » ; Ibn Farḥūn : roue à godets | Définitions divergentes | Fiche : dispositif et sa corde | **Non résolu** : définitions divergentes maintenues dans la fiche |
| 25 | tah-01-01-16 (61) | Trois avis d'Ibn ʿArafa | « ابن الحاجب » (Mawāhib) / « ابن الحاج » (al-Dasūqī) | Variante de nom | La fiche suit Mawāhib | **Corrigé** : « ابن الحاج » — Ibn ʿArafa (16968, p. 10), Shifāʾ (14605, p. 16), al-Dasūqī ; auteur de l'avis corrigé dans la fiche |
| 26 | tah-01-01-17a (62) | Mare et bétail | Citation d'Ibn ʿArafa : « تَرَدُّدٌ » pour « تَرِدُهُ » | Coquille | Mot non utilisé | **Corrigé** : « تَرِدُهُ » — Ibn ʿArafa (16968, p. 11) |
| 27 | tah-01-01-18 (64) | Mélange de même aspect | « ابن راشد » (Mawāhib) / « ابن رشد » (al-Dasūqī citant « ح ») | Variante de nom | La fiche suit Mawāhib | **Confirmé** : « ابن راشد » aussi dans la ḥāshiya imprimée avec al-Zurqānī (14297, p. 26) ; « ابن رشد » d'al-Dasūqī est isolé |
| 28 | tah-01-01-18 (64) | Eau de zarjoûn | « قَالَ ابْنُ رَاشِدٍ وَابْنُ عَطَاءٍ اللَّهِ أَخَذَ الْمُصَنِّفُ » | Passage altéré (attribution) | Avis attribué à Sanad d'après deux autres passages | **Corrigé** : at-Tawḍīḥ (14442, p. 8) « ابن راشد: ومن ابن عطاء الله أخذ المصنف » ; Sanad confirmé pour l'eau de zarjoûn ; remarque ajoutée |
| 29 | tah-01-01-18 (65) | Mélange de même aspect | « لِغَيْرِ الْمَاءِ » pour « لَغَيَّرَ الْمَاءَ » | Coquille | Sans effet | **Corrigé** : « لَغَيَّرَ » imposé par la syntaxe ; mêmes consonnes dans 14297 (p. 26) |
| 30 | tah-01-01-19 (66) | Eau passée par la bouche | Citation d'al-Bisāṭī : « يَطْهُرَ » pour « يَظْهَرَ » | Coquille (point) | Sans effet | **Non résolu** |
| 31 | tah-01-01-20 (69) | Eau utilisée et souillure | Zarrūq cite « ابن راشد » (Mawāhib) / « ابن رشد » (al-Dasūqī) | Variante de nom | Non tranché | **Non résolu** |
| 32 | tah-01-01-20 (67 / 69) | Raison de la karāha de l'eau utilisée | P. 67 : la raison la plus forte est la divergence sur son caractère purifiant ; p. 69 : « le mashhūr est qu'elle n'est pas purifiante » | Contradiction interne | La fiche retient la p. 67 | **Non résolu** : contradiction interne au texte |
| 33 | tah-01-01-21 (70) | 2e et 3e lavages | Al-Dasūqī attribue à « ح » l'absence de karāha ; Mawāhib dit « مَكْرُوهٌ وَبِلَا تَرَدُّدٍ » | Contradiction entre sources | La fiche suit Mawāhib | **Précisé, non résolu** : l'attribution à « ح » figure aussi dans la ḥāshiya imprimée avec al-Zurqānī (14297, p. 29 « وفي ح لا كراهة فيه ») |
| 34 | tah-01-01-22 (71) | Définition du peu d'eau | « أَيْ التَّيْسِيرِ » pour « الْيَسِيرِ » | Coquille | Sans effet | **Corrigé** : lire « الْيَسِيرِ » — Ibn ʿArafa (16968, p. 15) |
| 35 | tah-01-01-24 (75) | Eau stagnante | « بَلْ لَا كَرَاهَةَ فِيهِ إذَا لَمْ يَجْعَلْ الْجَرَّةَ … مِنْ الْكَثِيرِ » | Négation (inversée) | Phrase non utilisée | **Non résolu** |
| 36 | tah-01-01-26 (77) | Reste de nourriture | « وَكَذَلِكَ يُكْرَهُ … مِنْ الطَّعَامِ » pour « لَا يُكْرَهُ » | Négation (tombée) | La fiche suit la suite et le matn | **Non résolu** |
| 37 | tah-01-01-27 (79) | Eau chauffée au soleil | Ibn Shaʿbān cité pour la karāha (Ibn al-Imām), puis contre elle (al-Ḥaṭṭāb, al-Dasūqī) | Contradiction interne | Position non attribuée | **Précisé** : Minaḥ (21614, p. 29) et al-Dasūqī rangent Ibn Shaʿbān parmi ceux qui nient la karāha ; la fiche suit la majorité des témoins |
| 38 | tah-01-01-27 (79) | Eau chauffée au soleil | « ابن الفرس » (Mawāhib) / « ابن الفرات » (al-Dasūqī) | Variante de nom | La fiche suit Mawāhib | **Confirmé** : Minaḥ (21614, p. 29) « ونقل ابن الفرس » |
| 39 | tah-01-01-27 (81) | Bain public (ḥammām) | Ibn Nājī : « فِي الْقِسْمِ الثَّانِي هُوَ مَكْرُوهٌ وَقِيلَ جَائِزٌ », alors que le 2e cas d'Ibn Rushd est illicite ; il s'agit sans doute du 3e cas (couvert avec des gens couverts) | Coquille probable | **Relevé par cet audit** ; la fiche ne cite pas cette phrase ; alerte à ajouter | **Signalé** : alerte ajoutée à tah-01-01-27 ; passage introuvable dans le commentaire d'Ibn Nājī (14555) |
| 40 | tah-01-01-30 (84) | Changement disparu | Citation d'Ibn Ghāzī : « أَبُو زَيْدٍ الْقَابِسِيُّ », nom qui paraît altéré | Variante de nom | Passage non utilisé | **Corrigé** : « أَبُو زَيْدٍ الثَّعَالِبِيُّ » — Shifāʾ (14605, p. 19) |

## Anomalies relevées au squelette (fiches pas encore rédigées)

| N° | Segment (t. 1, p.) | Anomalie probable | Type | Traitement prévu | Résultat de la campagne |
|---|---|---|---|---|---|
| 41 | tah-01-04-56 | « كَ شَكِّهِ » (espace parasite) | Coquille dans le matn | À corriger avec alerte | **Corrigé** : « كَشَكِّهِ » — 11355 (p. 13), Shifāʾ (p. 30) |
| 42 | tah-01-05-01 | « وَمِنْهُ بِرَخْوٍ » | Lecture à contrôler | À vérifier sur al-Dardīr | **Corrigé** : « وَمُنِعَ بِرَخْوٍ نَجِسٍ » — 11355 (p. 14), Shifāʾ (p. 31, 33) ; plan.js v1.8 |
| 43 | tah-01-08-22 | Le segment se termine par « أَقْوَالٌ: » | Segment tronqué | À contrôler lors de la rédaction | **Confirmé** : fin « أَقْوَالٌ » sans deux-points — 11355 (p. 21) ; variante « أَوْ مَسْحِهِ » notée |

## Ṭahāra, unité 6 — audit de fin de faṣl tah-01-01 (2026-11-03)

Périmètre : fiches tah-01-01-31 à -34 (*Mawāhib* t. 1, p. 86 ; al-Dardīr / al-Dasūqī t. 1, p. 47–48). Audit et correction faits dans la même séance, avant la synthèse du faṣl. Témoins : Mukhtaṣar seul (11355), Minaḥ al-Jalīl (21614), al-Dardīr / al-Dasūqī (21604), Ibn Rushd, *al-Bayān wa-t-taḥṣīl* (21751). Rapport : `docs/verifications/tah-01-unite6.md`.

| N° | Fiche (t. 1, p.) | Sujet | Anomalie probable | Type | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 44 | tah-01-01-31 (86) | Information d'un seul | Matn « إنْ بَيَّنَ وَجْهًا » | Coquille dans le matn | Matn corrigé dans la fiche, alerte « Corrigé » | **Corrigé** : « وَجْهَهَا » — 11355 (p. 4), 21604 (p. 46), Minaḥ (21614, p. 32) ; le commentaire d'al-Ḥaṭṭāb a aussi « إذَا بَيَّنَ وَجْهَهَا ». Titre arabe de la masʾala aligné dans `data/plan.js` v1.9 |
| 45 | tah-01-01-31 (86) | Information d'un seul | « الْمُخَبِّرِ » (avec shadda) | Vocalisation | Mot non cité dans la fiche | **Corrigé** (lecture) : « الْمُخْبِرُ » — al-Dardīr (21604, p. 46, « بِالْكَسْرِ ») |
| 46 | tah-01-01-32 (86) | Même doctrine | « وَلَوْ لَمْ يُبَيَّنْ وَجْهَهَا » (passif suivi d'un complément) | Vocalisation | La fiche suit le sens actif | **Corrigé** (lecture) : « لَمْ يُبَيِّنْ الْمُخْبِرُ وَجْهَهَا » — al-Dardīr (21604, p. 46) |
| 47 | tah-01-01-34 (86) | Bain public | Ibn Rushd : « وَقَدْ وَقَعَتْ قَطْرَةٌ مِنْ الْبَوْلِ … لَمَا تَنَجَّسَ » ; la syntaxe demande « لَوْ » | Coquille | La fiche suit le témoin | **Corrigé** : « وَلَوْ » — al-Bayān (21751, p. 184) « ولو وقع في قدر ما يتطهر به الرجل من الماء قطرة من البول » |
| 48 | tah-01-01-34 (86) | Bain public | « هَذَا مِمَّا لَا يَنْبَغِي أَنْ يُبَالِيَ بِهِ وَأَنْ يَتَسَاهَلَ فِيهِ » : négation mal placée | Négation (déplacée) | La fiche suit le témoin | **Corrigé** : « هذا مما ينبغي أن لا يبالى به » — al-Bayān (21751, p. 184) |
| 49 | tah-01-01-34 (86) | Bain public | « حَوْضِ: الْحَمَّامِ » : deux-points parasites | Coquille (ponctuation) | Sans effet | **Non résolu** (sans effet sur le sens) |
| 50 | tah-01-01-31 (al-Dardīr, 47) | Information d'un seul | Al-Dardīr imprime le matn « (قُبِلَ خَبَرِ الْوَاحِدِ) » (génitif) | Vocalisation (al-Sharḥ al-kabīr) | Non cité dans la fiche | **Corrigé** (lecture) : « خَبَرُ » — lemme d'al-Dasūqī (« وَقُبِلَ خَبَرُ الْوَاحِدِ »), Minaḥ (21614, p. 32), 11355 (p. 4) |

Remarque : le « samāʿ de Zayd » auquel al-Ḥaṭṭāb rattache la réponse d'Ibn al-Qāsim (fiche 34) n'a pas été retrouvé sous ce nom dans al-Bayān ; le commentaire d'Ibn Rushd y figure (p. 184). Signalé dans la fiche ; ce n'est pas une anomalie du texte.

## Ṭahāra, unité 7 — audit avancé, début du faṣl tah-01-02 (2026-11-03)

Périmètre : fiches tah-01-02-01 à -08 (*Mawāhib* t. 1, p. 86–90 ; al-Dardīr / al-Dasūqī t. 1, p. 48–49). Audit avancé : l'unité a produit 9 alertes textuelles, au-dessus du seuil de 8 (décision n° 6). Témoins : Mukhtaṣar seul (11355), Minaḥ al-Jalīl (21614), al-Kharashī (91), al-Zurqānī (14297), adh-Dhakhīra (1717). Rapport : `docs/verifications/tah-01-unite7.md`.

| N° | Fiche (t. 1, p.) | Sujet | Anomalie probable | Type | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 51 | tah-01-02-04 (88) | L'animal abattu | Matn « وَمَا ذَكَّى » (actif), alors que le commentaire dit « أَنَّ مَا ذُكِّيَ » | Vocalisation (matn) | Matn corrigé, alerte « Corrigé » | **Corrigé** : « وَمَا ذُكِّيَ » — al-Dardīr (21604, p. 48), Minaḥ (21614, p. 34, « بِضَمٍّ فَكَسْرٍ مُشَدَّدًا »). Titre arabe aligné dans `data/plan.js` v1.9 |
| 52 | tah-01-02-08 (89) | Les choses inertes | « وَالْأَلْزَمُ أَنْ يَكُونَ الْحَيُّ نَجِسًا » | Coquille | La fiche suit la lecture corrigée | **Corrigé** : وَإِلَّا لَزِمَ (syntaxe, mêmes consonnes) ; al-Kharashī (91, p. 83) « وَإِلَّا لَكَانَ الْحَيُّ نَجَسًا » |
| 53 | tah-01-02-05 (88–89) | Intestins de l'animal abattu | « إلَّا أَنْ يَكُونَ الْحَيَوَانُ مِمَّا لَا يَأْكُلُ النَّجَاسَةَ فَلَا يُؤْكَلُ مَا اتَّصَلَ بِرَوْثِهِ » : la suite (« لِنَجَاسَةِ رَوْثِهِ ») demande « مِمَّا يَأْكُلُ » | Négation (parasite) | La fiche s'en tient à la règle sûre | **Non résolu** : phrase absente de Minaḥ, al-Kharashī et al-Zurqānī |
| 54 | tah-01-02-08 (89) | Définition de l'inerte | « وَمُنْفَصِلٍ » (Mawāhib) / « وَمُنْفَصِلٌ » (Mukhtaṣar seul) | Variante de vocalisation | La fiche suit Mawāhib | **Confirmé** : le commentaire d'al-Ḥaṭṭāb (« مَعْطُوفٌ عَلَى حَيٍّ ») et al-Zurqānī (« فهو عطف على حي ») |
| 55 | tah-01-02-08 (89) | Définition de l'inerte | « فَقَالَ فِي الذَّخِيرَةِ ابْنُ رَاشِدٍ » : ordre des mots ; auteur de la définition incertain | Passage altéré (attribution) | Définition rapportée sous les deux noms | **Non résolu** : introuvable dans adh-Dhakhīra (1717, p. 1–230) |
| 56 | tah-01-02-08 (89) | Définition de l'inerte | « لِأَنَّا أَخْرَجْنَا مِنْ حَدِّ الْجَمَادِ » : complément manquant | Coquille | Sans effet | **Non résolu** (sans effet) |
| 57 | tah-01-02-01 (87) | Bêtes sans sang | « الْجُدَاجُدُ » dans la liste, « الْجَدَاجِدُ » dans l'explication | Vocalisation | Mot traduit, vocalisation non reprise | **Non résolu** (sans effet) |
| 58 | tah-01-02-01 (87) | Bêtes sans sang | « وَأَنْكَرَهُ عَلَيْهِ سَحْنُونٌ قَالَ: وَالصَّوَابُ » : sujet de « قَالَ » incertain | Construction ambiguë | Avis rattaché à at-Tanbīhāt, alerte | **Non résolu** |
| 59 | tah-01-02-08 (89) | Beurre et miel | Al-Ḥaṭṭāb compte « سَمْنٍ وَعَسَلٍ » parmi les choses inertes ; al-Dardīr exclut le beurre et le miel d'abeille | Contradiction entre sources | Divergence dans la fiche | **Précisé** : al-Kharashī (91, p. 83) et al-Zurqānī (14297, p. 43) citent ce propos de « ح » et le jugent discutable (« وَفِيهِ نَظَرٌ ») ; Minaḥ (21614, p. 35) exclut aussi lait, beurre, fromage et miel d'abeille |

## Ṭahāra, unité 8 — tah-01-02-09 à -16b (2026-11-03 ; audit avancé le 2026-11-04)

Relevées en rédaction. N° 60 à 62 : corrigés aussitôt par témoin. N° 63 à 69 : 7 alertes textuelles nouvelles, ce qui dépasse avec 60–62 le seuil de 8 (décision n° 6) : audit avancé fait le 2026-11-04. Témoins : Minaḥ al-Jalīl (21614), al-Kharashī (91), al-Zurqānī (14297), al-Dardīr / al-Dasūqī (21604), Mukhtaṣar seul (11355), Ibn Rushd, *al-Bayān* (21751). Rapport : `docs/verifications/audit-63-69.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 60 | tah-01-02-14 (93) | Œuf gâté | Matn « إلَّا الْمِذْرَ » (de même p. 90 « فِي الْمِذْرِ »), alors qu'al-Ḥaṭṭāb écrit « بِفَتْحِ الْمِيمِ وَكَسْرِ الذَّالِ » | Vocalisation contraire au commentaire | Matn corrigé, alerte « Corrigé » | **Corrigé** : « الْمَذِرَ » — al-Dardīr (21604, p. 49), Minaḥ (21614, p. 36) |
| 61 | tah-01-02-16 (93) | Lait humain | Matn « إلَّا الْمَيِّتِ » (génitif) | Vocalisation (la syntaxe demande l'accusatif) | Matn corrigé, alerte « Corrigé » | **Corrigé** : « إلَّا الْمَيِّتَ » — Minaḥ (21614, p. 36) |
| 62 | tah-01-02-16b (93–94) | Lait des autres animaux | « ص » en fin de page 92 et « وَلَبَنُ غَيْرِهِ تَابِعٌ)ش » en tête de page 93, sans parenthèse ouvrante | Segment manqué par l'extraction du squelette | Fiche tah-01-02-16b ajoutée, sans renuméroter | **Corrigé** : segment attesté par le Mukhtaṣar seul (11355, p. 5) et Minaḥ (21614, p. 37) ; ajouté à `data/plan.js` v1.9 et à `docs/sources/tah-01-segments.md` |
| 63 | tah-01-02-09 (90) | Ce qui enivre | « ثَلَاثَةٌ أَحْكَامٍ » | Vocalisation | Sans effet | **Corrigé** : « ثَلَاثَةُ أَحْكَامٍ » — al-Kharashī (91, p. 83) ; al-Zurqānī (14297, p. 43) mêmes consonnes |
| 64 | tah-01-02-11 (91) | Sueur | « وَلَمْ يَذْكُرْ فِي نَجَاسَتِهِ خِلَافًا فَمَا قَالَهُ غَيْرُ مَعْرُوفٍ » : sujet incertain | Construction ambiguë | Fiche prudente, alerte | **Précisé** : al-Bayān (21751, p. 105) porte le propos d'Ibn Rushd (« وكذلك عرق سائر الحيوان وألبانها تبع للحومها، فلبن الحمارة نجس ») sans divergence sur ce cas ; le sujet est Ibn Rushd ; préférence d'al-Ḥaṭṭāb reformulée |
| 65 | tah-01-02-12 (92) | Liquide du dormeur | « إنْ كَانَ الرَّأْسُ عَلَى مِخَدَّةٍ فَمِنْهُ » : référent de « مِنْهُ » | Construction ambiguë | Lu « de la tête », alerte | **Corrigé** : « de la bouche » — al-Kharashī (91, p. 84 « فَمِنْ الْفَمِ »), al-Zurqānī (14297, p. 44 « فمن الفم ») ; explication et avis anonyme corrigés |
| 66 | tah-01-02-13 (92) | Même s'il a mangé de l'impur | « رَاجَعَا » | Coquille | Lu « رَاجِعًا » | **Corrigé** : « رَاجِعًا » imposé par la syntaxe ; mêmes consonnes chez al-Dasūqī (21604, p. 49 « رَاجِعٌ إلَى الْبَيْضِ ») |
| 67 | tah-01-02-14 (93) | Œuf au jaune mêlé | « وَالظَّاهِرُ … » suivi de « انْتَهَى » : auteur de la phrase incertain | Attribution | Rapporté à al-Ḥaṭṭāb avec alerte | **Précisé** : même règle sans auteur chez al-Kharashī (91, p. 84) et al-Dardīr (« فَاسْتَظْهَرُوا ») ; auteur non identifié, `tarjih_hattab` passé à `null` |
| 68 | tah-01-02-15 (93) | Ce qui sort après la mort | Matn « وَالْخَارِجُ » ; Minaḥ « وَالْخَارِجَ » | Vocalisation (deux constructions possibles) | Mawāhib gardé, alerte | **Précisé** : accusatif chez Minaḥ et al-Dardīr (21604, p. 51, liste des exceptions) ; nominatif construit en phrase nouvelle chez al-Kharashī (91, p. 84) ; même règle, Mawāhib gardé |
| 69 | tah-01-02-15 (93) | Ce qui sort après la mort | « وَلَعَلَّ قَوْلَهُ يُزِيلُ الْإِشْكَالَ مِنْ الْإِزَالَةِ » | Passage obscur | Non utilisé | **Non résolu** (sans effet) : phrase absente de Minaḥ, al-Kharashī, al-Zurqānī et al-Dasūqī |

## Ṭahāra, unité 9 — tah-01-02-17 à -24 (2026-11-04)

Relevées en rédaction. N° 70 à 73 : corrigés ou précisés aussitôt par al-Bayān d'Ibn Rushd (Shamela 21751, p. 65), que cite al-Ḥaṭṭāb. N° 75, 76 et 83 : sans effet. N° 74 et 77 à 82 : audit avancé fait le même jour (rapport : `docs/verifications/audit-74-82.md`), qui a ajouté le n° 84. Rapport : `docs/verifications/tah-01-unite9.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 70 | tah-01-02-18 (94) | Fiente de pigeon | « مَنْ صَلَّى بِخَرِبَتِهَا » | Coquille | La fiche suit le témoin | **Corrigé** : « من صلى بخروها » — al-Bayān (21751, p. 65) |
| 71 | tah-01-02-18 (94) | Fiente de pigeon | Réponse attribuée à Mālik (« لِمَا قَالَهُ مَالِكٌ فِي رَسْمِ مَرَضٍ ») | Attribution | Avis rapporté sous le nom d'Ibn al-Qāsim | **Corrigé** : al-Bayān (21751, p. 65) « فقيل لابن القاسم: فالحمام تصيب أرواث الدواب، فقال » |
| 72 | tah-01-02-18 (94) | Fiente de pigeon | « يَعْنِي ابْنَ رُشْدٍ هَذَا إذَا لَمْ يَعْلَمْ » | Passage altéré | Lu « Ibn Rushd dit » | **Corrigé** : al-Bayān (21751, p. 65) « قال محمد بن رشد: وهذا إذا لم يعلم » |
| 73 | tah-01-02-18 (94) | Fiente du faucon | « إنَّ ذَرْقَ الْبَازِي نَجِسٌ، وَإِنْ أُكِلَ ذُكِّيَ إنَّ ذَلِكَ … » | Passage altéré | Sens tiré du témoin | **Précisé** : al-Bayān (21751, p. 65) « وعلى هذه الرواية يأتي أن درق البازي نجس وإن كان الذي يأكل ذكيا » |
| 74 | tah-01-02-18 (94) | Bête égorgée | « قَالَ ابْنُ يُونُسَ فِي كِتَابِ الصَّيْدِ … » sans citation | Passage tronqué | Règle rapportée à al-Ḥaṭṭāb | **Non résolu** : rien dans Minaḥ, al-Kharashī, al-Zurqānī, al-Mawwāq ni at-Tawḍīḥ |
| 75 | tah-01-02-18 (94) | Animal habitué à l'impur | « فَأَمْرُهُ خَفِيفٍ » | Vocalisation | Sans effet | **Non résolu** (sans effet) |
| 76 | tah-01-02-18 (94) | Matn | « الْمُتَغَذِّي » (Mawāhib, al-Dardīr) / « المغتذي » (11355, Minaḥ) | Variante entre éditions | La fiche suit Mawāhib | **Non résolu** (même sens) |
| 77 | tah-01-02-19 (94) | Vomissure | Ibn Bashīr rangé dans les deux camps | Contradiction interne | La fiche suit la première liste (comme al-Dasūqī) | **Corrigé** : Minaḥ (21614, p. 37) et la ḥāshiya d'al-Zurqānī d'après Ṭafā (14297, p. 47) rangent Ibn Bashīr avec Sanad et al-Bājī ; la seconde mention est fautive |
| 78 | tah-01-02-22 (96) | Sang non répandu | « وَهُوَ كَذَلِكَ » contredit la conclusion qui suit | Négation (tombée probable) | La fiche suit la conclusion | **Précisé** : lecture sans second témoin, mais al-Kharashī (91, p. 86) confirme la règle retenue (« وَدَمُ الْمَيْتَةِ لِنَجَاسَتِهِ جَرَى أَمْ لَا ») |
| 79 | tah-01-02-22 (96) | Sang après dépeçage | « وَهُوَ خِلَافٌ فِي شَهَادَةٍ » | Construction obscure | Non utilisé | **Précisé** : divergence de fait, relevant du constat — al-Mawwāq d'après Ibn Bashīr (21611, p. 86 « خِلَافٌ فِي شَهَادَةٍ تَرْجِعُ إلَى الْحِسِّ »), at-Tawḍīḥ (14442, p. 40) |
| 80 | tah-01-02-23 (96–97) | Musc | « … مِسْكَةٌ بِكَسْرِ الْمِيمِ وَسُكُونِ السِّينِ النَّحْلُ » | Passage tronqué | Non utilisé | **Non résolu** (sans effet) |
| 81 | tah-01-02-24 (97) | Poche du musc | Auteur de « وَتَفْسِيرُ ذَلِكَ عِنْدِي … » (Ibn Marzūq ou « le shaykh » qu'il cite) | Attribution | Non attribué dans la fiche | **Non résolu** : aucun témoin ne reprend l'explication |
| 82 | tah-01-02-24 (97) | Poche du musc | « فَتَنْجُسُ بِعُذْرِ الذَّكَاةِ » | Coquille probable | Non utilisé | **Non résolu** (sans effet) |
| 83 | tah-01-02-22 (96) | Sang du cœur | « فَتَأَمُّلِهِ » pour « فَتَأَمَّلْهُ » | Vocalisation | Sans effet | **Non résolu** (sans effet) |
| 84 | tah-01-02-24 (97) | Poche du musc | « قَالَ أَبُو إِسْحَاقَ فَارَةُ الْمِسْكِ مَيْتَةٌ » ; al-Mawwāq (21611, p. 71) : « إسْمَاعِيلُ: فَأْرَةُ الْمِسْكِ مَيْتَةٌ طَاهِرَةٌ » | Variante d'attribution (relevée à l'audit) | La fiche suit Mawāhib | **Non résolu** : al-Zurqānī (14297, p. 49) reprend al-Mawwāq, sans témoin indépendant |

## Ṭahāra, unité 10 — tah-01-02-25 à -31 (2026-11-04)

Relevées en rédaction. N° 85 et 88 : corrigés aussitôt (al-Bayān ; commentaire d'al-Ḥaṭṭāb et al-Dardīr). N° 90 : précisé par al-Mawwāq. N° 86, 87 et 89 : repris à l'audit des unités 10–11 (2026-11-04), sans second témoin (rapport : `docs/verifications/tah-01-unite11.md`). Rapport : `docs/verifications/tah-01-unite10.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 85 | tah-01-02-25 (97) | Légumes arrosés d'eau impure | « إلَّا أَنْ يُقْلَى بَعْدَ ذَلِكَ بِمَا لَيْسَ بِنَجِسٍ » | Coquille | La fiche suit le témoin | **Corrigé** : al-Bayān (21751, p. 131) « إلا أن يغلى بعد ذلك بماء ليس بنجس » |
| 86 | tah-01-02-25 (97) | Eau contenue dans la plante | « فَالْمَاءُ الَّذِي تَضْمَنَّهُ طَاهِرٌ » | Vocalisation (lecture probable « تَضَمَّنَهُ ») | Sans effet | **Non résolu** : absent de Minaḥ, al-Zurqānī, al-Kharashī (qui commente le segment sans cette phrase), al-Mawwāq et al-Dasūqī |
| 87 | tah-01-02-27 (97–98) | Vinaigre | « لِأَنَّ الْعَصْرَ لَا يُصَيِّرُ الْخَمْرَ عَصِيرًا » | Coquille probable (sens : « الْعَصِيرَ ») | La fiche rend le sens | **Non résolu** : absent des mêmes témoins |
| 88 | tah-01-02-28 (98) | Matn | « وَالنَّجِسُ مَا اسْتَثْنَى » | Vocalisation | Matn lu « النَّجَسُ » ; plan.js v1.10 aligné | **Corrigé** : al-Ḥaṭṭāb lui-même (« بِفَتْحِ الْجِيمِ ») ; al-Dardīr (21604, p. 52) |
| 89 | tah-01-02-30 (99) | Peau du pou | « مُحْتَمِلًا لَأَبْحَاثَ » | Vocalisation (lecture probable « لِأَبْحَاثٍ ») | Sans effet | **Non résolu** : absent des mêmes témoins (al-Mawwāq, p. 73, ne rapporte que le jugement d'Ibn ʿArafa) |
| 90 | tah-01-02-31 (99) | Cadavre humain | « وَإِنْ كَانَ غَيْرَ اللَّخْمِيِّ أَخَذَ الْقَوْلَ بِالنَّجَاسَةِ » | Passage altéré | Auteur de la déduction non nommé | **Précisé** : al-Mawwāq (21611, p. 73) « وأخذه اللخمي من قولها لبن المرأة الميتة » ; lecture non corrigée |

## Ṭahāra, unité 11 — tah-01-02-32 à -39 (2026-11-04)

Relevées en rédaction ; 10 alertes textuelles (seuil de 8 dépassé) : audit fait dans la même séance, avec les n° 86, 87 et 89 de l'unité 10. Témoins : Mukhtaṣar seul (11355), Minaḥ al-Jalīl (21614), al-Zurqānī et sa ḥāshiya (14297), al-Kharashī (91), al-Mawwāq (21611), at-Tawḍīḥ (14442), Ibn ʿArafa (16968), Ibn Shās (14594), al-Bayān (21751). Rapport : `docs/verifications/tah-01-unite11.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 91 | tah-01-02-33 (100) | Matn | « وَقَصَبَةَ رِيشٍ » (accusatif) | Vocalisation (matn) | Matn lu au génitif ; plan.js v1.11 aligné | **Corrigé** : « وَقَصَبَةِ رِيشٍ » — syntaxe ; mêmes consonnes chez al-Kharashī (91, p. 88) et al-Zurqānī (14297, p. 54) |
| 92 | tah-01-02-33 (100) | Tuyau de plume | « أَيْ الْقَوْلَيْنِ فِي أَطْرَافِ الْفُرُوقِ » | Coquille | La fiche suit les témoins | **Corrigé** : « الْقُرُونِ » — at-Tawḍīḥ (14442, p. 25), Ibn Shās (14594, p. 11) |
| 93 | tah-01-02-33 (100) | Tuyau de plume | Ibn Bashīr : « مَا اتَّصَلَ بِالْعَظْمِ كَالْجِسْمِ » (mots inversés) | Coquille | La fiche suit le témoin | **Corrigé** : Ibn ʿArafa (16968, p. 23) « ما اتصل بالجسم كالعظم وطرفه كالشعر » |
| 94 | tah-01-02-38 (101) | Outre en peau tannée | « إنْ انْفَضَّ ذَلِكَ إلَى الصَّلَاةِ فِيهَا » | Passage altéré | La fiche suit le témoin | **Corrigé** : al-Bayān (21751, p. 76) « إن أبغض ذلك إلي الصلاة فيه » |
| 95 | tah-01-02-38 (101) | Usage personnel de Mālik | « نَقَضَ ابْنُ الْحَاجِبِ مِنْ الْمَشْهُورِ » | Coquille | La fiche suit le témoin | **Corrigé** : « نَقَص » — at-Tawḍīḥ (14442, p. 44) |
| 96 | tah-01-02-32 (100) | Parties humaines | « … فِي نَجَاسَتِهِ ابْنُ عَبْدِ السَّلَامِ وَلَيْسَ كَذَلِكَ » | Construction ambiguë | Réponse rattachée à Ibn ʿAbd as-Salām | **Précisé** : at-Tawḍīḥ (14442, p. 22 « ابن عبد السلام: وليس كذلك »), Ibn ʿArafa (16968, p. 21) ; at-Tawḍīḥ a « روى بعضهم » pour « رَأَى بَعْضُهُمْ » |
| 97 | tah-01-02-32 (100) | Parties humaines | « وَقَالَ ابْنُ رُشْدٍ بِطَهَارَتِهَا قَالَ وَهُوَ الصَّوَابُ » : sujet du second « قَالَ » | Attribution | Non attribué | **Non résolu** |
| 98 | tah-01-02-38 (101) | Ablutions | « مِنْ آنِيَةٍ عِظَامِ الْمَيْتَةِ » | Vocalisation | Sans effet | **Non résolu** (sans effet) |
| 99 | tah-01-02-32 (100) | Matn | « مِنْ حَيٍّ أَوْ مَيِّتٍ … وَعَظْمٍ وَظِلْفٍ وَعَاجٍ وَظُفْرٍ » ; 11355, Minaḥ : « حي وميت … وظلف وعظم وظفر وعاج » | Variante entre éditions | La fiche suit Mawāhib | **Non résolu** (même sens) |
| 100 | tah-01-02-39 (102) | Ivoire | Auteur de « وَوَجْهُ الْكَرَاهَةِ … » (après « انْتَهَى ») | Attribution | Rapporté de façon neutre | **Non résolu** : al-Kharashī (91, p. 89) donne la même raison sans auteur |

## Ṭahāra, unité 12 — tah-01-02-40 à -47 (2026-11-04)

Relevées en rédaction ; 6 alertes textuelles (sous le seuil de 8). N° 101, 103, 105, 106 corrigés et n° 104 précisé aussitôt par témoin ; n° 102 à reprendre à l'audit prévu après l'unité 13. Rapport : `docs/verifications/tah-01-unite12.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 101 | tah-01-02-40 (103) | Matn | « الْكِيمَخْتِ » (kasra sur le kāf) | Vocalisation (matn) | Matn lu « الْكَيْمَخْتِ » ; plan.js v1.12 | **Corrigé** : al-Dardīr (« بِفَتْحِ الْكَافِ »), Minaḥ (21614, p. 41), al-Kharashī (91, p. 90) |
| 102 | tah-01-02-40 (104) | Prière avec le kaymakht | « فَلَا يُصَلَّى فِي الْكِيمَخْتِ بِمُقْتَضَى الْأَصْلِ … فَإِنِّي لَمْ أَرَ مَنْ نَقَلَ فِيهِ قَوْلًا بِبُطْلَانِ الصَّلَاةِ » | Construction difficile (négation ?) | La fiche ne retient que l'absence d'avis d'invalidité | **Non résolu** (ouvert) |
| 103 | tah-01-02-41 (104) | Madhy et wadî | « فَبِنَقْلِ شَاسٍ الْإِجْمَاعَ » | Coquille (nom tronqué) | La fiche suit le témoin | **Corrigé** : at-Tawḍīḥ (14442, p. 31 « قال ابنُ شاس: المذي نجسٌ بإجماع ») |
| 104 | tah-01-02-42 (104) | Pus | « الْمِدَّةُ وَالْمُدَّةُ وَبِكَسْرِ الْمِيمِ » | Coquille (répétition) | Sans effet | **Précisé** : al-Kharashī (91, p. 91 « مِدَّةٌ بِكَسْرِ الْمِيمِ ») |
| 105 | tah-01-02-45 (al-Dardīr, 57) | Sang du poisson | « وَلَا يُؤْمَنُ بِإِخْرَاجِهِ » | Coquille (al-Sharḥ al-kabīr) | Mot non cité | **Corrigé** : « يُؤْمَرُ » — Mawāhib, al-Zurqānī (14297, p. 56), al-Kharashī (91, p. 92) |
| 106 | tah-01-02-46 (106) | Mouche | « وَاحِدُ الذُّبَابِ بِالْكَسْرِ كَغِرْبَانِ » | Coquille | La fiche suit le témoin | **Corrigé** : « الذِّبَّانِ » — glose imprimée avec al-Kharashī (91, p. 92) |

## Ṭahāra, unité 13 — tah-01-02-48 à -51b (2026-11-04)

Relevées en rédaction ; 9 alertes textuelles (au-dessus du seuil de 8) : audit fait dans la même réponse, avec le n° 102 (unité 12). N° 107 et 113 corrigés, 109 et 114 précisés ; n° 102, 108, 110, 111, 112 et 115 sans témoin. Rapport : `docs/verifications/tah-01-unite13.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 107 | tah-01-02-48 (106) | Matn | « وَرَمَادٍ نَجِسٍ » (tanwīn) | Vocalisation (matn) | Matn lu « وَرَمَادِ نَجِسٍ » ; plan.js v1.13 | **Corrigé** : al-Dardīr (« وَرَمَادُ نَجَسٍ »), al-Dasūqī (« بِالْإِضَافَةِ … لَا بِالتَّنْوِينِ ») |
| 108 | tah-01-02-48 (106) | Fumée qui retombe | Abū l-Ḥasan : « فَإِنَّ الطَّعَامَ لَا يُؤْكَلُ وَالْمَاءَ لَا يَنْجُسُ » | Négation suspecte | La fiche ne retient que le sort du plat | **Non résolu** : aucun témoin (Minaḥ, al-Zurqānī, al-Kharashī, al-Mawwāq, at-Tawḍīḥ) |
| 109 | tah-01-02-48 (106) | Ibn Rushd | « وَيُكْرَهُ بَدَأَ » | Coquille | Sens « au départ » | **Précisé** : « بدءا » — al-Bayān (21751, p. 71) |
| 110 | tah-01-02-48 (107) | Bain public | « فَإِنْ جَعَلَ فَعَلَ مَا تَقَدَّمَ » | Construction peu claire | Non utilisé | **Non résolu** |
| 111 | tah-01-02-48 (108) | Poterie | « وَلَوْ غُسِلَ وَقَبْلَ أَنْ يُغْلَى فِيهِ مَاءٌ » | Coquille probable (« وَقِيلَ ») | La fiche retient le sens imposé par la suite | **Non résolu** : aucun témoin |
| 112 | tah-01-02-48 (106) | Fumée | « أَنَّ دُخَانُ النَّجَاسَةِ » | Vocalisation | Sans effet | **Non résolu** (sans effet) |
| 113 | tah-01-02-51a (109) | Savants d'Elvira | « سَعِيدَ بْنَ أَبِي عَمْرٍ » | Nom altéré | Nom non repris dans la fiche | **Corrigé** : « سعيد بن نمر » — al-Bayān (21751, p. 14) |
| 114 | tah-01-02-51b (111) | Aṣ-Ṣāʾigh | « وَلِمُحَاوَرَتِهَا إيَّاهُ » | Point diacritique | Sans effet | **Précisé** : « مُجَاوَرَة », mot d'al-Bājī dans la même page |
| 115 | tah-01-02-51b (110) | Ibn Ḥārith | « فَحُكْمُهُ حُكْمُ الذَّائِبِ يَبْقَى جَمِيعُهُ » | Coquille probable (« يُلْقَى ») | La fiche ne retient que « la règle du liquide fondu » | **Non résolu** : aucun témoin |

## Ṭahāra, unité 14 — tah-01-02-52 à -54c (2026-11-05)

Relevées en rédaction ; 8 alertes textuelles (au seuil, sans le dépasser). N° 116 et 122 corrigés, 120 et 121 précisés ; n° 117, 118, 119 et 123 sans témoin (recherches faites dès la rédaction). Rapport : `docs/verifications/tah-01-unite14.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 116 | tah-01-02-52 (112) | Matn | « إنْ طَالَ وَأَمْكَنَ السَّرَيَانُ … فَبِحَسْبِهِ » | Leçon d'autres copies ; vocalisation | Matn « إنْ أَمْكَنَ السَّرَيَانُ وَإِلَّا فَبِحَسَبِهِ » ; plan.js v1.14 | **Corrigé** : Mukhtaṣar seul (11355, p. 6), Minaḥ (21614, p. 43), al-Dardīr ; al-Ḥaṭṭāb donne « إنْ طَالَ » comme leçon d'autres copies |
| 117 | tah-01-02-52 (113) | Goutte de sang | « فِي غَسْلِ جَامِدٍ » | Coquille probable (« عَسَلٍ ») | Sens général seul | **Non résolu** : aucun témoin |
| 118 | tah-01-02-52 (113) | Goutte de sang | « وَإِنْ طَالَ حَبِينُهَا » | Coquille probable (« حِينُهَا ») | Sens général seul | **Non résolu** : aucun témoin |
| 119 | tah-01-02-52 (113) | Bête retirée vivante | « وَمَا قَالَهُ ابْنُ رُشْدٍ أَظْهَرُ » | Attribution | Non attribué | **Non résolu** |
| 120 | tah-01-02-53b (116) | Al-Madkhal | « فِي فَضْلِ خُرُوجِ الْعَالِمِ » | Point diacritique | Sans effet | **Précisé** : « فِي فَصْلِ » — Mawāhib, p. 115 |
| 121 | tah-01-02-53c (114) | Matn | « مُلِّحَ » ; al-Dardīr, Minaḥ « مُلِحَ » | Vocalisation (matn) | Matn selon Mawāhib | **Précisé** : deux lectures admises par al-Ḥaṭṭāb |
| 122 | tah-01-02-54a (al-Dardīr, 60) | Mosquée bâtie avec du souillé | « فَإِنْ بُنِيَ بِهِ لَيْسَ بِطَاهِرٍ » | Vocalisation (al-Sharḥ al-kabīr) | Sens « enduit » | **Corrigé** : « لُيِّسَ » — mêmes consonnes que « تُلَيَّسُ حِيطَانُهُ » (Mawāhib, p. 117) |
| 123 | tah-01-02-54c (al-Dasūqī, 59) | Os greffé | « يُعْفَى عَنْهُ بِعَدَمِ الِالْتِحَامِ » | Coquille probable (« بَعْدَ ») | Sans effet | **Non résolu** (sans effet) |

## Ṭahāra, unité 15 — tah-01-02-55 à -59, et audit des unités 14–15 (2026-11-05)

Relevées en rédaction ; 5 alertes textuelles. N° 124 corrigé, 125 et 128 précisés ; 126 et 127 sans témoin. Audit fait dans la même réponse (n° 113, 117 à 119, 123 à 128) : n° 119 reste non résolu, mais la source du farʿ voisin (al-Bayān, p. 13) permet d'attribuer à Ibn Rushd le jugement sur Saʿīd ibn Numayr (tah-01-02-52, p6 v2.10). Rapport : `docs/verifications/tah-01-unite15.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 124 | tah-01-02-59 (123) | Matn | « غَيْرِ عَالَمٍ » | Vocalisation (matn) | Matn « غَيْرِ عَالِمٍ » ; plan.js v1.15 | **Corrigé** : Minaḥ (21614, p. 46), al-Kharashī (91, p. 97), al-Dardīr |
| 125 | tah-01-02-57 (122) | Vêtements de tête | « قَالَ اللَّخْمِيُّ كَذَا قَالُوا وَفِيهِ نَظَرٌ حَتَّى لَا يَخْفَى » | Attribution ; mot en trop | Objection attribuée à Ibn Marzūq | **Précisé** : al-Dasūqī, d'après al-Bunānī (« بَحَثَ فِي هَذَا ابْنُ مَرْزُوقٍ فَقَالَ لَا يَخْفَى ») |
| 126 | tah-01-02-55 (124) | Ibn Muzayn | « أَنَّهُ لَيْسَ نَصْرَانِيًّا » | Négation suspecte (« لِنَصْرَانِيٍّ ») | La fiche suit le sens imposé par la suite | **Non résolu** : aucun témoin |
| 127 | tah-01-02-58 (123) | Femmes du Ḥijāz | « فَقَالَ نِسَاءُ الْحِجَازِ يُصَلِّينَ » | Mot altéré ou tombé | Sens général seul | **Non résolu** : aucun témoin |
| 128 | tah-01-02-58 (122) | Matn | « إلَّا لِرَأْسِهِ » ; Mukhtaṣar seul, Minaḥ, al-Dardīr « إلَّا كَرَأْسِهِ » | Variante de copies | Matn selon Mawāhib | **Précisé** : même sens ; la citation d'Ibn Marzūq dans Mawāhib s'accorde avec « لِرَأْسِهِ » |

## Ṭahāra, unité 16 — tah-01-02-60 à -66 (2026-11-05)

Relevées en rédaction ; 3 alertes textuelles. N° 129 corrigé, 131 précisé, 130 sans témoin en rédaction, corrigé à l'audit de fin de faṣl (unité 18). Rapport : `docs/verifications/tah-01-unite16.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 129 | tah-01-02-60 (124) | Matn | « وَحُرِّمَ » | Vocalisation (matn) | Matn « وَحَرُمَ » ; plan.js v1.16 | **Corrigé** : Minaḥ (21614, p. 46), al-Kharashī (91, p. 97), al-Dardīr |
| 130 | tah-01-02-60 (125) | Ceinture | « نَوْعٌ مِنْ الْحِرْمِ الَّذِي يُشَدُّ بِهَا الْوَسَطُ » | Mot altéré (« ceintures ») | Lire « الْحُزَمِ » ; tah-01-p7.js v3.3 | **Corrigé** (audit de fin de faṣl) : al-Kharashī (91, p. 97 : « نَوْعٌ مِنْ الْحُزَمِ الَّتِي يُشَدُّ بِهَا الْوَسَطُ ») ; Minaḥ (21614, p. 46 : « أَيْ حِزَامًا ») |
| 131 | tah-01-02-61 (126) | Ibn Rushd | « عَنْ تَدْبِيرِ آيَاتِهِ » | Coquille (« تَدَبُّر ») | Sans effet | **Précisé** : al-Dardīr « عَنْ التَّدَبُّرِ » |

## Ṭahāra, unité 17 — tah-01-02-67 à -72 (2026-11-05)

Relevée en rédaction ; 1 alerte textuelle (ponctuation), précisée. Rapport : `docs/verifications/tah-01-unite17.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 132 | tah-01-02-67 (128) | Ibn Rushd | « لِئَلَّا يَصْدَأَ فَكَرِهَ ابْنُ رُشْدٍ مِسْمَارَ الذَّهَبِ » | Ponctuation | La fiche sépare la réponse de Mālik et le commentaire d'Ibn Rushd | **Précisé** : sens imposé par la suite |

## Ṭahāra, unité 18 — tah-01-02-73 à -75, audit de fin de faṣl tah-01-02 (2026-11-05)

Relevée en rédaction ; 1 alerte textuelle, précisée à l'audit. Audit de fin de faṣl (décision n° 6) : n° 130 corrigé (al-Kharashī, Minaḥ) ; n° 132 déjà précisé ; nouvelle recherche, sans témoin nouveau, pour les n° 117, 118, 119, 123, 126 et 127, qui restent non résolus et sans effet sur les règles. Rapport : `docs/verifications/tah-01-unite18.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 133 | tah-01-02-74 (al-Dasūqī, 21604 p. 64) | Sandale | « وَإِنْ لَبِسَهَا لِلنَّعْلِ مِنْ أَحَدِ النَّقْدَيْنِ جَائِزٌ اتِّفَاقًا » | Particule altérée (pour وأنّ) | La fiche suit le sens « la permission fait l'accord » | **Précisé** : al-Kharashī (91, p. 100 : « لِئَلَّا يُتَوَهَّمَ حُرْمَةُ ذَلِكَ ») tient cette lecture ; sans effet |

## Ṭahāra, unité 19 — tah-01-03-01a à -01h (2026-11-05)

Relevées en rédaction ; 2 alertes textuelles (sous le seuil de 8), reprises à l'audit des unités 19–20 (2026-11-06) : n° 135 précisé, n° 134 toujours sans témoin. Rapport : `docs/verifications/tah-01-unite19.md` et `docs/verifications/tah-01-unite20.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 134 | tah-01-03-01h (140) | Reprise jusqu'au coucher | « قَالَ ابْنُ بَشِيرٍ فِي سَمَاعِ مُوسَى مِنْ كِتَابِ الصَّلَاةِ » : le commentaire des auditions de l'ʿUtbiyya est d'Ibn Rushd | Variante de nom probable (Ibn Rushd ?) | Nom imprimé gardé, alerte | **Non résolu** (audit des unités 19–20) : introuvable dans al-Bayān (21751, p. 200–520) et dans Ibn ʿArafa (16968, p. 1–80 ; p. 34 traite la reprise sans cette précision) |
| 135 | tah-01-03-01e (135) | Impureté avalée | « لَمْ تَصِحَّ صَلَاتُهُ، وَكَذَلِكَ إنْ لَمْ يَتُبْ » : rattachement incertain ; al-Dasūqī attribue à « ح » la validité de la prière de l'incapable, repenti ou non | Construction ambiguë ; contradiction possible entre sources | La règle suit al-Dardīr, alerte | **Précisé** (audit des unités 19–20) : la phrase vise celui qui pouvait vomir (prière non valide, repenti ou non) — al-Zurqānī (14297, p. 69 « فإن لم يتقاياه بطلت صلاته ولو تاب »), Minaḥ (21614, p. 50), glose d'al-Kharashī (91, p. 101 « تَابَ أَمْ لَا ») ; pas de contradiction avec al-Dasūqī, qui parle de l'incapable |

## Ṭahāra, unité 20 — tah-01-03-02 à -07, et audit des unités 19–20 (2026-11-06)

Relevées en rédaction ; 2 alertes textuelles. Audit fait dans la même séance (n° 134 à 137). Témoins : al-Bayān (21751), Ibn ʿArafa (16968), Minaḥ al-Jalīl (21614), al-Zurqānī (14297), al-Kharashī (91). Rapport : `docs/verifications/tah-01-unite20.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 136 | tah-01-03-05 (141) | Sandales à la mosquée (al-Madkhal) | « فَإِنَّ السُّنَّةَ أَنْ يَكُونَ النَّهْيُ لِلطَّهَارَةِ » | Passage altéré (mot manquant ?) | Non utilisé | **Non résolu** (sans effet) |
| 137 | tah-01-03-07 (142) | Sang de l'anus ou du sexe de l'homme | « مِنْ قَبِيلِ الْحَرَجِ بِمُصَلٍّ » | Coquille (« الْجُرْحِ ») | La fiche suit « la plaie du fidèle » | **Précisé** : même page « وَالْجُرْحُ بِمُصَلٍّ » ; segment du matn à venir |

## Ṭahāra, unité 21 — tah-01-03-08 à -13 (2026-11-06)

Relevées en rédaction ; 4 alertes textuelles. N° 139 et 140 corrigés aussitôt par témoin (Ibn ʿArafa, al-Dasūqī) ; n° 138 et 141, sans témoin en rédaction, corrigés à l'audit après l'unité 22 (al-Kharashī, al-Zurqānī ; `tah-01-p9.js` v3.7). Rapport : `docs/verifications/tah-01-unite21.md` et `docs/verifications/tah-01-unite22.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 138 | tah-01-03-08 (143) | Définition du bāsūr (ʿIyāḍ) | « وَخَرَجَ الثَّآلِيلُ هُنَاكَ » | Coquille probable (« وَخُرُوجُ ») | Sens retenu | **Corrigé** (audit après l'unité 22) : « وَخُرُوجُ الثَّآلِيلِ » — al-Kharashī (91, p. 105 « وَتَوَرُّمُهَا مِنْ دَاخِلٍ وَخُرُوجُ الثَّآلِيلِ هُنَاكَ ») |
| 139 | tah-01-03-12 (146) | Mesure du dirham | « وَفِي سَمَاعِ أَشْهَبَ لَأُجِيبَكُمْ بِتَحْدِيدِهِ » | Négation tombée | Lu « لَا أُجِيبُكُمْ » | **Corrigé** : Ibn ʿArafa (16968, p. 36 « وسمع أشهب: لا أجيبكم بتحديده هو ضلال، الدراهم تختلف ») |
| 140 | tah-01-03-12 (146) | Le dirham « peu » | « وَرِوَايَةُ ابْنِ زَيْدٍ فِي الْمَجْمُوعَةِ » | Variante de nom | Lu Ibn Ziyād | **Corrigé** : al-Dasūqī (21604, p. 72 « مَا رَوَاهُ ابْنُ زِيَادٍ ») ; Ibn ʿArafa (p. 36 « روايتا علي وابن حبيب ») |
| 141 | tah-01-03-12 (146) | Le dirham baghlī (Ibn Farḥūn) | « سِكَّةٌ قَدِيمَةٌ لِمَالِكٍ » | Vocalisation probable (« لِمَلِكٍ ») | Détail non repris | **Corrigé** (audit après l'unité 22) : « لِمَلِكٍ » — al-Zurqānī (14297, p. 78, d'après an-Nawawī : « إلى سكة قديمة لملك يسمى رأس البغل ») |

## Ṭahāra, unité 22 — tah-01-03-14 à -19, et audit après l'unité 22 (2026-11-06)

Relevées en rédaction ; 8 alertes textuelles (au seuil, sans le dépasser). Audit fait dans la même séance, avec les n° 138 et 141 de l'unité 21. Témoins : Mukhtaṣar seul (11355), al-Kharashī (91), al-Zurqānī et sa ḥāshiya (14297), Ibn ʿArafa (16968), al-Muntaqā (6684), al-Bayān (21751), Minaḥ al-Jalīl (21614), al-Mawwāq (21611), at-Tawḍīḥ (14442), Ibn Nājī sur la Risāla (14555). Résultat : n° 144, 146 et 148 corrigés, 142, 145 et 149 précisés, 143 et 147 non résolus. Rapport : `docs/verifications/tah-01-unite22.md`.

| N° | Fiche (p.) | Sujet | Lecture imprimée | Nature | Traitement | Résultat |
|---|---|---|---|---|---|---|
| 142 | tah-01-03-14 (149) | Sanad citant al-Bājī | « أَنَّ مَنْ اُضْطُرَّ إلَى ذَلِكَ فِي مَعِيشَةِ السَّفَرِ بِالدَّوَابِّ » : phrase sans prédicat | Passage tronqué | Sens tiré de la suite (Ibn al-Imām) | **Précisé** : la source, al-Muntaqā (6684, p. 44), porte « فَالظَّاهِرُ مِنْ قَوْلِهِ أَنَّهُ مَأْمُورٌ بِالتَّوَقِّي إلَى مَنْ اُضْطُرَّ إلَى ذَلِكَ مِنْ مَعِيشَتِهِ فِي السَّفَرِ بِالدَّوَابِّ », elle aussi obscure ; Ibn al-Imām, cité par al-Ḥaṭṭāb, en donne le sens (« فِي دَوَابِّ مَنْ اُضْطُرَّ إلَى السَّفَرِ فِي مَعِيشَتِهِ فَأَظْهَرُ ») |
| 143 | tah-01-03-14 (al-Dasūqī, 21604 p. 72) | Berger | « (قَوْلُهُ: وَالرَّاعِي) أَيْ وَالْحِمَارُ وَالْخَادِمُ » : l'âne déjà nommé | Vocalisation probable (« الْحَمَّارُ », l'ânier) | Détail non repris | **Non résolu** (sans effet) : aucun témoin dans les pages lues |
| 144 | tah-01-03-18 (150) | La Mudawwana | « وَلَا بَأْسَ بِطِينٍ الْمَطَرِ » (tanwīn devant l'article) | Vocalisation | Citation reprise sans ce mot | **Corrigé** : « بِطِينِ الْمَطَرِ » — al-Dasūqī citant la Mudawwana (21604, p. 73 « لَا بَأْسَ بِطِينِ الْمَطَرِ ») |
| 145 | tah-01-03-18 (150) | Eau stagnante | « الْمُسْتَنْقِعِ » (ʿIyāḍ : « بِكَسْرِ الْقَافِ ») / « الْمُسْتَنْقَعِ » (al-Dardīr, al-Dasūqī) | Variante de vocalisation | La fiche suit ʿIyāḍ | **Précisé** : ʿIyāḍ, cité par al-Ḥaṭṭāb, fixe la lecture en toutes lettres ; même sens |
| 146 | tah-01-03-18 (151) | Ibn ʿArafa sur Ibn Jamāʿa | « لَعَلَّهُ لَمْ يَقِفْ عَلَى قَوْلِ ابْنِ الْعَطَّارِ … وَرَآهُ خِلَافَ ظَاهِرِ الْمَذْهَبِ » | Particule altérée (و pour أو) | La fiche suit le témoin | **Corrigé** : Ibn ʿArafa (16968, p. 37 « أو رآه خلاف ظاهر المذهب ») |
| 147 | tah-01-03-18 (151) | Lavage après la pluie | « وَذَكَرَ نَاجِي عَنْ بَعْضِهِمْ أَنَّهُ خَرَّجَ … » | Nom tronqué ou altéré (Ibn Nājī ? al-Bājī ?) | Auteur laissé tel qu'imprimé | **Non résolu** : al-Zurqānī (14297, p. 81) attribue la déduction à al-Bājī (« وخرجه الباجي على وجوب غسل موضع الحجامة إذا برأ ») ; phrase absente d'Ibn Nājī sur la Risāla (14555, p. 60–200) |
| 148 | tah-01-03-19 (150) | Matn | « إلَّا إنْ غَلَبَتْ » | Mot altéré (matn) | Matn « لَا إنْ غَلَبَتْ » ; titre arabe de `data/plan.js` à aligner | **Corrigé** : Mukhtaṣar seul (11355, p. 7–8), al-Dardīr (« (لَا إنْ غَلَبَتْ) ») ; glose d'al-Ḥaṭṭāb « أَيْ لَا إنْ كَانَتْ النَّجَاسَةُ غَالِبَةً » |
| 149 | tah-01-03-19 (151) | Matn | « وَلَا إنْ أَصَابَ عَيْنَهَا » (complément) ; al-Dardīr « عَيْنُهَا » (sujet) | Variante de vocalisation | Matn « عَيْنُهَا » | **Précisé** : al-Dardīr (« أَيْ عَيْنُ الْعَذِرَةِ … ثَوْبًا أَوْ غَيْرَهُ ») et la glose d'al-Ḥaṭṭāb (« عَمَّنْ أَصَابَتْهُ عَيْنُ النَّجَاسَةِ ») ; même règle |

## Bilan

- 149 anomalies : 17 dans le Module 0, 129 dans la Ṭahāra (dont 7 à l'unité 6, 9 à l'unité 7, 10 à l'unité 8, 15 à l'unité 9, 6 à l'unité 10, 10 à l'unité 11, 6 à l'unité 12, 9 à l'unité 13, 8 à l'unité 14, 5 à l'unité 15, 3 à l'unité 16, 1 à l'unité 17, 1 à l'unité 18, 2 à l'unité 19, 2 à l'unité 20, 4 à l'unité 21 et 8 à l'unité 22), 3 au squelette.
- Les plus lourdes de conséquences sont les négations tombées, inversées ou déplacées (n° 19, 21, 35, 36, 48, 53), car elles renversent le sens. Aucune règle pratique ne repose sur la lecture fautive.

## Bilan de la campagne de correction (2026-11-03, complété le 2026-11-04)

Méthode : chaque anomalie a été recherchée dans un second témoin indépendant de l'édition de *Mawāhib* (Mukhtaṣar seul, Shifāʾ al-Ghalīl d'Ibn Ghāzī, Mukhtaṣar d'Ibn ʿArafa, at-Tawḍīḥ, al-Muntaqā, Minaḥ al-Jalīl, al-Zurqānī et sa ḥāshiya, al-Kharashī, al-Dardīr / al-Dasūqī ; pour les unités 6 et 8, aussi al-Bayān d'Ibn Rushd). Une lecture n'est corrigée que si un témoin la porte en toutes lettres, ou si la syntaxe l'impose et qu'un témoin a les mêmes consonnes. Rapports : `docs/verifications/campagne-corrections.md` (n° 1 à 43), `docs/verifications/tah-01-unite6.md` (n° 44 à 50), `docs/verifications/tah-01-unite7.md` (n° 51 à 59), `docs/verifications/tah-01-unite8.md` (n° 60 à 62) et `docs/verifications/audit-63-69.md` (n° 63 à 69).

| Résultat | Nombre | N° |
|---|---|---|
| Corrigé | 59 | 1, 3, 4, 5, 8, 12, 19, 25, 26, 28, 29, 34, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52, 60, 61, 62, 63, 65, 66, 70, 71, 72, 77, 85, 88, 91, 92, 93, 94, 95, 101, 103, 105, 106, 107, 113, 116, 122, 124, 129, 130, 138, 139, 140, 141, 144, 146, 148 |
| Confirmé (la lecture des fiches était la bonne) | 4 | 2, 27, 38, 54 |
| Précisé ou signalé | 27 | 33, 37, 39, 59, 64, 67, 68, 73, 78, 79, 90, 96, 104, 109, 114, 120, 121, 125, 128, 131, 132, 133, 135, 137, 142, 145, 149 |
| Limite du texte, documentée | 1 | 7 |
| Déjà corrigé avant la campagne | 1 | 18 |
| Non résolu (aucun second témoin trouvé, ou sans effet) | 57 | 6, 9, 10, 11, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 30, 31, 32, 35, 36, 49, 53, 55, 56, 57, 58, 69, 74, 75, 76, 80, 81, 82, 83, 84, 86, 87, 89, 97, 98, 99, 100, 102, 108, 110, 111, 112, 115, 117, 118, 119, 123, 126, 127, 134, 136, 143, 147 |

- Les deux fiches du Module 0 restées `a_revoir` (int-01-01-02 et int-01-01-03d) sont passées à `verifie`.
- Corrections de fond : n° 25 (l'avis « elle n'est plus purifiante », tah-01-01-16, est d'Ibn al-Ḥājj, non d'Ibn al-Ḥājib) ; n° 65 (tah-01-02-12 : selon l'avis anonyme, la salive vient de la bouche quand la tête repose sur un oreiller, non « de la tête »).
- Les anomalies non résolues ne touchent aucune règle pratique ; elles restent signalées dans les fiches.
- Audit des unités 10–11 fait le 2026-11-04 (n° 86, 87, 89 et 91 à 100). Audit des unités 12–13 fait le 2026-11-04 (n° 102 et 107 à 115). Unité 14 (n° 116 à 123) : recherches de témoins faites dès la rédaction ; n° 113 appuyé par Mawāhib p. 112 (« سَعِيدِ بْنِ نُمَيْرٍ »), n° 111 confirmé pour le sens (8e farʿ de tah-01-02-53d). Audit des unités 14–15 fait le 2026-11-05 (n° 113, 117 à 119, 123 à 128) : sans nouveau témoin, sauf al-Bayān p. 13 pour l'attribution voisine du n° 119. Audit de fin de faṣl tah-01-02 fait le 2026-11-05 (unité 18) : n° 130 corrigé, n° 133 précisé, n° 117 à 119, 123, 126 et 127 toujours sans témoin. Audit des unités 19–20 fait le 2026-11-06 (n° 134 à 137) : n° 135 et 137 précisés, n° 134 et 136 non résolus. Unité 21 (n° 138 à 141) : n° 139 et 140 corrigés en rédaction. Audit après l'unité 22 fait le 2026-11-06 (n° 138, 141 et 142 à 149) : n° 138, 141, 144, 146 et 148 corrigés, n° 142, 145 et 149 précisés, n° 143 et 147 non résolus. Prochain audit : après l'unité 24 (toutes les deux unités), ou plus tôt si plus de 8 alertes textuelles nouvelles s'accumulent, et à la fin du faṣl tah-01-03. Prochain n° = 150.
