# Rapport de vérification — Ṭahāra, unité 66 (tah-01-09-24a à -27) et audit anticipé des n° 551 à 559

Date : 2026-11-21. Fichier : `data/lecons/tah/tah-01-p32.js` v18.0 (nouvelle partie, 6 fiches, marque `/* FIN-UNITE-66 */` ; ≈ 62 Ko), déclarée dans `data/manifeste.js` v1.31 ; `tah-01-p31.js` (v17.1, ≈ 160 Ko) figé. Plan : `data/plan.js` v1.59 (24 découpé en 24a à 24c ; titres de 25 à 27 précisés). Termes : `data/glossaire-p2.js` v1.70 (12 termes). Anomalies : n° 551 à 559 (`docs/sources/anomalies-textes-2.md`).

## Unité

Suite du faṣl tah-01-09 (le tayammoum), de « ص (وَنِيَّةُ اسْتِبَاحَةِ الصَّلَاةِ …) » (Shamela 569/344) à la fin du commentaire de « ص (وَنَزَعَ خَاتَمَهُ) » (569/349) ; t. 1, p. 345–350. Le segment 28 « وَصَعِيدٌ طَهُرَ … » (569/349) ouvre l'unité 67. Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 154–155 (21604/153–154).

Comparaison préalable du « ص » avec le Mukhtaṣar seul (11355, p. 23), Ibn Ghāzī (14605, p. 48), al-Kharashī (91, p. 189–190), al-Mawwāq (21611, p. 280–283) et al-Dardīr : aucun segment omis ; seule variante, « وَنَزَعَ خَاتَمَهُ » / « وَنَزْعُ خَاتَمِهِ » (n° 551, « ص » gardé).

| Fiche | Contenu | Réf. | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-09-24a | ce que vise l'intention ; l'état majeur oublié | Mawāhib 345–346 | 344–345 | 154 | 153 |
| tah-01-09-24b | désigner la prière ; prière manquée dont on se souvient ; moment de l'intention | Mawāhib 346–347 | 345–346 | 154 | 153 |
| tah-01-09-24c | « وَلَوْ تَكَرَّرَتْ » : l'état majeur à chaque tayammoum ; ḥadath mineur après | Mawāhib 345, 347–348 | 344, 346–347 | 154–155 | 153–154 |
| tah-01-09-25 | le tayammoum ne lève pas le ḥadath ; effets ; diriger la prière | Mawāhib 348 | 347 | 154–155 | 153–154 |
| tah-01-09-26 | tout le visage, les mains jusqu'aux poignets ; une main suffit ; plis et barbe | Mawāhib 348–350 | 347–349 | 155 | 154 |
| tah-01-09-27 | ôter la bague ; passer les doigts entre les doigts | Mawāhib 349–350 | 348–349 | 155 | 154 |

## Vérification (étape 6)

1. **Traçabilité.** 155 fragments arabes (`frags.py`, maxmots 19). Contrôle par empreintes (`__fcheck`, maxw 30) sur 569/344–349, 21604/153–154, 11355/23, 14605/48, 91/189–190, 14442/100, 205, 207–208, 21751/184–185, 21611/280 et 282 : **154 sur 155 retrouvés** au premier passage, le manquant étant le titre du bāb (attendu).
2. **Attributions.** Noms vérifiés dans 569/344–349 : Ibn ʿAbd as-Salām, al-Bisāṭī, Ibn al-Ḥājib, Ibn Nājī, Ibn ʿArafa, Ibn Rushd, Sanad, Ibn Ḥabīb, Ibn Bazīza, al-Bājī, Ibn Yūnus, Taqī ad-Dīn (d'après Ibn Farḥūn), al-Lakhmī, Ibn Shaʿbān, Bahrām, Ibn al-ʿArabī, Abū Muḥammad, Ibn al-Labbād, al-Mashdhālī, al-Burzulī, an-Nukat, Ibn Bashīr, Ibn Maslama, Ibn ʿAṭiyya, al-Jazūlī, Abū ʿImrān, Ibn ʿAbd al-Ḥakam. Sources retrouvées : at-Tawḍīḥ (14442, p. 100 : la désignation de l'acte, Ibn Bazīza ; p. 207 : l'état majeur oublié, Ibn Wahb, Ibn Maslama ; p. 208 : la bague, les doigts, « ابن القُرْطِيِّ »), al-Bayān (21751, p. 184–185 : l'audition d'Abū Zayd et le jugement d'Ibn Rushd), al-Mawwāq (21611, p. 280 : la Mudawwana, Ibn Yūnus ; p. 282 : Ibn Shaʿbān). Un nom corrigé : Ibn al-Qurṭī (n° 552). Relecture contradictoire : al-Dasūqī prête à l'audition d'Abū Zayd la validité du tayammoum quand l'état majeur est oublié ; al-Bayān donne l'inverse (n° 559, Point à comparer dans 24a).
3. **Statuts.** « عَلَى الْمَشْهُورِ » (24a, oubli de la janâba ; 25 ; 26) et « وَالْمَشْهُورُ » (24b, désignation recommandée) → `mashhur` ; « عَلَى الرَّاجِحِ » (al-Dardīr, passage des doigts, 27) → `rajih` ; al-Bisāṭī, Ibn Wahb, Ibn Ḥabīb, Ibn Maslama, Sanad sur la bague, Ibn al-ʿArabī → `qawl` ; ailleurs `non_precise`. Le « هَذَا هُوَ الْمَشْهُورُ » d'Ibn ʿAṭiyya (26), de portée incertaine, est laissé `non_precise` avec alerte. Muʿtamad confirmé par al-Dardīr / al-Dasūqī pour les six fiches.
4. **Croisement.** Aucune mention de « ح » sur 21604/153–154 pour ces segments. Point à comparer : à quoi renvoie « تَكَرَّرَتْ » (24c : la prière chez al-Ḥaṭṭāb, la purification par la terre chez al-Dardīr, même règle) ; l'audition d'Abū Zayd (24a) ; l'avis de Sanad sur la bague (27). Concordances : l'état majeur oublié, supposé à tort, le ḥadath mineur (24a) ; la prière manquée, « une prière obligatoire ou surérogatoire », l'intention du fard (24b) ; les effets de la levée du ḥadath (25) ; une main, la barbe, les plis, les doigts (26) ; la bague (27). Compléments d'al-Dardīr / al-Dasūqī : l'intention du « fard du tayammoum » (24a), le moment de l'intention (24b), l'avis rejeté par « لَوْ » (24c), la nature du désaccord et la nullité du tayammoum qui vise la levée du ḥadath (25), « الْأَوْلَى يَدَيْهِ » (26).
5. **Langue.** Matn vocalisé d'après le « ص », Ibn Ghāzī et al-Dardīr. 12 termes nouveaux : الْحَدَثُ الْأَكْبَرُ, الْحَدَثُ الْأَصْغَرُ, مُتَيَمِّم, تَعْيِين, ضَرْبَة, مَجْدُور, مَحْصُوب, الْوَصْفُ الْحُكْمِيُّ, إِمَامَة, تَعْمِيم, رُسْغ, خَاتَم ; termes déjà définis (تَيَمُّم, اِسْتِبَاحَة, جَنَابَة, فَائِتَة, حَيْض, الحَدَث, رَفْعُ الحَدَثِ, كُوع, كُرْسُوع, غُضُون, لِحْيَة, تَخْلِيلُ الْأَصَابِعِ) repris avec leur définition exacte. « اِسْتِيعَاب » n'est pas repris : `glossaire-p2.js` le définit pour le khouff.
6. **Compréhension.** Chaque `regle_pratique` se lit seule et dit ce que l'on vise, ce que l'on couvre et ce que l'on ôte dans le tayammoum.

**Résultat** : les six fiches passent à `verifie` (aucune alerte bloquante). Alertes non bloquantes : n° 552 (corrigé) ; n° 551, 553 à 559 (précisés).

## Quiz

Les 24 questions relues une à une avec `quizdump.js` : aucune erreur ; deux questions de 24b interverties pour éviter la même position d'une fiche à la suivante. Positions : 24a A-D-C-B, 24b C-A-B-D, 24c B-C-D-A, 25 B-D-A-C, 26 A-D-B-C, 27 B-D-A-C ; aucune position répétée dans une fiche ni d'une fiche à la suivante (dernière question de tah-01-09-23d : B) ; chaque fiche a une mise en situation.

## Contrôles techniques

- `node --check` : `tah-01-p32.js`, `glossaire-p2.js`, `plan.js`, `manifeste.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p32.js` : 6 fiches, 957 termes, 0 erreur, 0 doublon ; p32 : A 6 | B 6 | C 6 | D 6.
- Quiz, tout le cours (`quizstat.js`) : A 495 | B 495 | C 495 | D 495.
- `controle_site.py` sur le dépôt complet : 499 fiches (489 hors synthèses + 10 synthèses), 957 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.

## Audit anticipé des n° 551 à 559

Décision n° 6 (9 alertes, au-dessus du seuil de 8). Chaque numéro a un témoin ou un appui de syntaxe ; le n° 559 est appuyé par al-Bayān lui-même. Aucun statut ne change ; aucune règle pratique ne dépend d'une lecture douteuse.
