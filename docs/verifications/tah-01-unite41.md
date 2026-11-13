# Rapport de vérification — Ṭahāra, unité 41 (tah-01-05-01a à -08)

Date : 2026-11-13. Fichier : `data/lecons/tah/tah-01-p19.js` v5.6 (9 fiches ; 147 333 octets). Plan : `data/plan.js` v1.34 (tah-01-05-01 découpé en 01a et 01b). Termes : `data/glossaire-p2.js` v1.45 (11 termes). Anomalies : n° 290 à 293 (`docs/sources/anomalies-textes-2.md`). Début du faṣl tah-01-05 (« Les convenances des besoins naturels »).

## Unité

Huit segments du matn, de « نُدِبَ لِقَاضِي الْحَاجَةِ جُلُوسٌ » à « وَتَفْرِيجُ فَخِذَيْهِ » (Shamela 569/266–269, t. 1, p. 267–270), soit 4 pages ; le segment 01, long, est découpé en deux sous-fiches.

| Fiche | Contenu | Mawāhib (t. 1) | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-05-01a | uriner sur un sol meuble, pur ou impur | 267–269 | 266–268 | 104–105 | 103–104 |
| tah-01-05-01b | le sol dur ; les selles | 267–269 | 266–268 | 104–105 | 103–104 |
| tah-01-05-02 | pied gauche, main gauche ; qui ne peut atteindre l'endroit | 269 | 268 | 105 | 104 |
| tah-01-05-03 | mouiller la main avant, la laver après | 269 | 268 | 105 | 104 |
| tah-01-05-04 | rester couvert jusqu'à s'asseoir | 269 | 268 | 105 | 104 |
| tah-01-05-05 | préparer de quoi se nettoyer | 269–270 | 268–269 | 105 | 104 |
| tah-01-05-06 | un nombre impair de pierres | 270 | 269 | 105–106 | 104–105 |
| tah-01-05-07 | commencer par l'avant | 270 | 269 | 106 | 105 |
| tah-01-05-08 | écarter les cuisses | 270 | 269 | 106 | 105 |

## Vérification (étape 6)

1. **Traçabilité.** Contrôle par empreintes (`__fcheck`, maxw 20) sur 569/266–269, 21604/103–105, 11355/14, 91/140, 21614/86–87, 14297/135, 16968/73 : 142 fragments sur 142 retrouvés. Trois citations d'un seul mot ont été élargies avant le contrôle (« وَمُنِعَ », « وَإِعْدَادُ مُزِيلِهِ » : le mot est toujours collé à son « وَ » dans les sources).
2. **Attributions.** Ibn Bashīr (d'après les maîtres), al-Bājī, al-Mudawwana, al-Madkhal, aṭ-Ṭirāz, at-Tawḍīḥ, Ibn Nājī, Ibn al-Ḥājib, Ibn ʿAbd as-Salām, al-Jawāhir, al-Bisāṭī, al-Māwardī, Ibn Hārūn, Sanad : chacun tel que le nomme al-Ḥaṭṭāb. Al-Madkhal et aṭ-Ṭirāz sont nommés par leur titre, comme dans le texte. « الشَّارِحُ » est laissé « le commentateur ». Al-Bunānī (« بن ») et al-Majmūʿ (« المج ») : d'après al-Dasūqī.
3. **Statuts.** Un seul « mashhur », dit tel par la source : la permission d'uriner debout chez al-Madkhal (« وَالْمَشْهُورُ الْجَوَازُ »). Ailleurs « non_precise », et « qawl » pour la critique d'al-Bisāṭī. Muʿtamad confirmé par al-Dardīr pour les neuf fiches.
4. **Croisement.** Pages 21604/103–105 relues ; aucune mention de « ح » ni de « خِلَافًا لِـ » visant al-Ḥaṭṭāb dans la ḥāshiya de ces segments. Une divergence : sur un sol dur et pur, al-Ḥaṭṭāb lit la réprobation de la Mudawwana comme une interdiction (« وَحَمْلُهَا عَلَى الْمَنْعِ ظَاهِرٌ »), al-Dardīr comme une recommandation appuyée de s'asseoir (fiche 01b). Un point à comparer : la portée du segment 01 (sol meuble seulement chez al-Ḥaṭṭāb, les quatre cas chez al-Dasūqī). Un autre point : préparer l'eau et les pierres ensemble (al-Bunānī) ou l'un des deux (al-Dardīr) (fiche 05).
5. **Langue.** Matn vocalisé d'après le « ص » de Mawāhib et al-Dardīr. Corrections et variantes : « وَمِنْهُ » lu « وَمُنِعَ » (n° 42, déjà au plan) ; « وَتَعَيَّنَ الْقِيَامُ » absent du « ص » (n° 290) ; « وَوِتْرُهُ » / « وَوِتْرِهِ » (n° 292) ; « وَسَتْرٌ » / « سِتْرٌ » (n° 293). Une lecture corrigée dans une citation : « بِدْعَةٌ » pour « يَدَعُهُ » chez Ibn ʿArafa (n° 291), passage non cité dans les fiches. 11 termes nouveaux.
6. **Compréhension.** Chaque `regle_pratique` se lit seule. Le passage d'al-Madkhal sur l'esclave (« جَارِيَةً ») est rapporté tel quel, avec la mention « selon les usages de son époque ».

**Résultat** : les neuf fiches passent à `verifie`. Alertes non bloquantes : n° 290, 292, 293 (précisées), n° 291 (corrigée).

4 alertes nouvelles : pas d'audit anticipé ; prochain audit après l'unité 42 (n° 290 et suivants).

## Contrôles techniques

- `node --check` : `tah-01-p19.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p19.js` : 19 fiches (18 + 1 synthèse), 756 termes, 0 erreur, 0 doublon ; p19 : A 19 | B 19 | C 19 | D 19 (unité 41 : A 8 | B 8 | C 8 | D 8) ; aucune position répétée deux fois de suite ; chaque fiche a une mise en situation.
- Quiz, tout le cours (`quizstat.js`) : A 301 | B 301 | C 301 | D 301.
- `controle_site.py` sur le dépôt complet : 305 fiches (299 + 6 synthèses), 756 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.
