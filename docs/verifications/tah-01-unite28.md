# Rapport de vérification — Ṭahāra, unité 28 (tah-01-03-44 à -50, synthèse tah-01-03-syn), avec l'audit de fin de faṣl

Date : 2026-11-08. Fichier : `data/lecons/tah/tah-01-p13.js` v4.3 (11 entrées : 10 fiches et la synthèse). Plan : `data/plan.js` v1.21 (titres français de tah-01-03-45 à -48). Termes : `data/glossaire-p2.js` v1.32. Anomalies : `docs/sources/anomalies-textes-2.md` (n° 188 à 195, et audit des n° 183 à 195).

## Unité

| Fiche | Segment | Mawāhib (t. 1) | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-03-44 | وَنُدِبَ غَسْلُ إنَاءِ مَاءٍ وَيُرَاقُ لَا طَعَامٍ وَحَوْضٍ سَبْعًا | 174–177 | 173–176 | 83 | 82 |
| tah-01-03-45 | تَعَبُّدًا | 177 | 176 | 83 | 82 |
| tah-01-03-46 | بِوُلُوغِ كَلْبٍ مُطْلَقًا لَا غَيْرِهِ | 177–178 | 176–177 | 83 | 82 |
| tah-01-03-47 | عِنْدَ قَصْدِ الِاسْتِعْمَالِ | 178 | 177 | 84 | 83 |
| tah-01-03-48 | بِلَا نِيَّةٍ | 178–179 | 177–178 | 84 | 83 |
| tah-01-03-49 | وَلَا تَتْرِيبَ | 179 | 178 | 84 | 83 |
| tah-01-03-50 | وَلَا يَتَعَدَّدُ بِوُلُوغِ كَلْبٍ أَوْ كِلَابٍ | 179 | 178 | 84 | 83 |
| tah-01-03-syn | synthèse du faṣl (8 questions) | — | — | — | — |

Source : 6 pages de Mawāhib (Shamela 173 à 178), jusqu'au faṣl suivant (« فَصْلٌ: فَرَائِضُ الْوُضُوءِ », même page). Fin de chaque segment contrôlée sur le Mukhtaṣar seul (11355, p. 8), al-Dardīr et Minaḥ al-Jalīl (21614, p. 65). **Fin du faṣl tah-01-03** : 50 segments, 59 fiches (avec les sous-fiches) et la synthèse.

## Vérification (étape 6)

1. **Traçabilité.** Chaque avis, attribution et statut renvoie à un fragment cité entre « ». 142 fragments arabes (`frags.py`, plus long fragment : 23 mots). Contrôle par empreintes : fait (voir plus bas).
2. **Attributions.** Vérifiées sur les pages lues et sur les sources que cite al-Ḥaṭṭāb : at-Tawḍīḥ (14442, p. 70–75), Ibn ʿArafa (16968, p. 40–43). Deux citations d'Ibn ʿArafa altérées dans Mawāhib : n° 190 (« التحرير » pour « التشديد », corrigé pour le sens) et n° 191 (« كرهه » tombé : al-Qazwīnī réprouve, d'autres disent que cela ne suffit pas). Le « الْأَشْهَرُ » qu'al-Ḥaṭṭāb prête à at-Tawḍīḥ (choix de ʿIyāḍ) n'a pas été trouvé dans les pages lues : signalé dans la fiche 44.
3. **Statuts.** « mashhur » : récipient de nourriture et bassin non lavés, nourriture non jetée, pur culte, tout chien, lavage au moment de l'usage, pas de multiplication (tous dits « الْمَشْهُورُ » dans le texte). « ظَاهِرُ الْمَذْهَبِ », « الصَّحِيحُ », « الْأَصَحُّ » (ash-Shāmil, avec l'avis le plus répandu) et « الْأَظْهَرُ » (al-Māzirī) notés « non_precise » ou rattachés à l'avis le plus répandu, la fiche citant les mots. muʿtamad confirmé par al-Dardīr ou al-Dasūqī pour les sept fiches.
4. **Croisement.** Mentions de « ح » des pages 82–83 relevées : une seule, « كَمَا فِي ح » (frottement, fiche 48, « Concordance »). Aucune mention de « خِلَافًا لِـ ». Divergences reprises : nourriture jetée (al-Dardīr : interdit) en « Point à comparer » (fiche 44) ; le reste en « Concordance » ou « Complément ». Sigles développés : ح, طفى, شيخنا, خش.
5. **Langue.** Matn vocalisé d'après Mawāhib, sauf la vocalisation de « لَا طَعَامٍ وَحَوْضٍ » (génitif, corrigé d'après al-Dardīr et le Mukhtaṣar seul, n° 188) ; variante « وَلَا تَتْرِيبٍ » notée (n° 189). 13 termes nouveaux, vocalisés, transcrits selon le barème et ajoutés à `glossaire-p2.js` ; doublons contrôlés sur les deux glossaires : aucun.
6. **Compréhension.** Chaque `regle_pratique` se lit seule.
7. **Synthèse.** 8 questions couvrant le faṣl (fiches 02, 12, 18–19, 31 et 35, 36 et 38, 42, 43b, 44–50) ; chaque réponse renvoie à sa fiche ; réponses vérifiées sur les `regle_pratique` des fiches.

**Résultat** : les sept fiches passent à `verifie`. Alertes restantes non bloquantes (n° 194 et 195 non résolus ; « الْأَشْهَرُ » d'at-Tawḍīḥ non localisé).

## Audit de fin de faṣl (décision n° 6)

Porte sur les n° 183 à 195 (unités 27 et 28). N° 187, 188 et 190 corrigés ; n° 183, 184, 186, 189, 191, 192 et 193 précisés ; n° 185, 194 et 195 : nouveaux témoins cherchés (14297, p. 93–101 ; 91, p. 115–121 ; 21614, p. 60–66 ; 21611, p. 80–100), sans résultat : non résolus, sans effet sur les règles. Bilan des anomalies : 195 (Corrigé 73 | Précisé 50 | Non résolu 65 | Confirmé 4 | Limite 2 | Déjà corrigé 1). Prochain n° = 196.

## Contrôles techniques

- `node --check` : `tah-01-p13.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p13.js` : 11 entrées, 588 termes, 0 erreur, 0 doublon ; quiz de la partie A 11 | B 11 | C 11 | D 11 (unité 28 : A 8 | B 8 | C 8 | D 8, synthèse comprise) ; aucune position répétée deux fois de suite dans une fiche.
- Quiz, tout le cours (`quizstat.js`) : A 208 | B 208 | C 208 | D 208.
- `controle_site.py` sur le dépôt complet : 212 fiches (207 + 5 synthèses), 588 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS. Premier passage : 1 terme coupé (« مَعْقُولُ الْمَعْنَى » suivi d'une virgule arabe dans une citation, fiche 45) ; citation scindée en deux, second passage sans défaut.
- Taille : `tah-01-p13.js` 135 842 octets.

## Contrôle des citations (unité 28)

Fait le 2026-11-08, par empreintes (`__fcheck`, maxw 30) sur les pages Shamela 569/173–178, 21604/82–83, 11355/8, 14442/71, 72, 74, 16968/42–43, 91/117 et 21614/65. 142 fragments : 140 retrouvés par empreinte ; les 2 autres (texte d'al-Dardīr finissant par « كَالْأَحْدَاثِ ») sont sur la page, où ce mot est collé au mot suivant (« كالأحداثولما », Shamela 21604/83), et ont été vérifiés avec `__srch`.
