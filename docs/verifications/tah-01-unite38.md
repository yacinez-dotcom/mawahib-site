# Rapport de vérification — Ṭahāra, unité 38 (tah-01-04-43a à -48) et audit des n° 259 à 277

Date : 2026-11-13. Fichier : `data/lecons/tah/tah-01-p18.js` v5.3 (8 fiches ajoutées à la suite de l'unité 37 ; 160 149 octets). Plan : `data/plan.js` v1.31 (43 en 43a–43b, 44 en 44a–44b ; « وَبَدْءٌ » à 48, anomalie n° 277). Termes : `data/glossaire-p2.js` v1.42 (6 termes). Anomalies : `docs/sources/anomalies-textes-2.md` (n° 268 à 277, et audit des n° 259 à 277).

## Unité

Six segments du matn, de « فَيُعَادُ الْمُنَكَّسُ وَحْدَهُ إنْ بَعُدَ بِجَفَافٍ وَإِلَّا مَعَ تَابِعِهِ » à « وَبَدَأَ بِمُقَدَّمِ رَأْسِهِ » (Shamela 569/249–258, t. 1, p. 250–259), soit 10 pages. Deux segments longs découpés : 43 (règle et inversion voulue ; cas pratiques et objections) et 44 (oubli ; omission voulue, oreilles, doute). L'unité s'arrête à « وَشَفْعُ غَسْلِهِ وَتَثْلِيثُهُ » (569/258, t. 1, p. 259).

| Fiche | Contenu | Mawāhib (t. 1) | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-04-43a | membre inversé : seul ou avec la suite ; inversion voulue | 250–251 | 249–250 | 99 | 98 |
| tah-01-04-43b | cas pratiques ; objections à Ibn al-Qāsim et Ibn Ḥabīb | 251–252 | 250–251 | 99 | 98 |
| tah-01-04-44a | obligation ou sunna oubliée | 252–253 | 251–252 | 99–100 | 98–99 |
| tah-01-04-44b | omission voulue ; oreilles ; doute | 253–255 | 252–254 | 99–100 | 98–99 |
| tah-01-04-45 | un lieu pur | 255–256 | 254–255 | 100 | 99 |
| tah-01-04-46 | peu d'eau, sans limite ; gaspillage | 256–258 | 255–257 | 100–101 | 99–100 |
| tah-01-04-47 | commencer par la droite ; récipient | 258–259 | 257–258 | 101 | 100 |
| tah-01-04-48 | commencer par l'avant de la tête | 259 | 258 | 101 | 100 |

## Vérification (étape 6)

1. **Traçabilité.** Chaque citation a été recopiée depuis les pages lues et relue fragment par fragment pendant la rédaction (débuts et fins de mots, mots collés : « مَكْرُوهٍثُمَّ » sur 21604/99, évité). **Contrôle par empreintes en attente** : la liaison avec l'ordinateur de l'utilisateur s'est coupée juste avant (`mcp__remote-devices__*` disparus). 162 fragments ; maxw 27. À faire en début de prochaine séance (onglet Shamela, fonctions du § 3 de la reprise) :
   `await __range(569,249,258); await __range(21604,98,100); await Promise.all([__page(14297,126),__page(14297,128),__page(11355,13),__page(91,136),__page(16968,65),__page(16968,67),__page(21735,74),__page(14442,117),__page(14442,124)]);`
   puis `__fcheck(['569/249','569/250','569/251','569/252','569/253','569/254','569/255','569/256','569/257','569/258','21604/98','21604/99','21604/100','14297/126','14297/128','11355/13','91/136','16968/65','16968/67','21735/74','14442/117','14442/124'], H, 30)`, avec H = les empreintes données par `python3 docs/outils/frags.py <unité 38 extraite de tah-01-p18.js> | fh.py` (extraire à partir de « Unité 38 — tah-01-04-43a »). Aucun manquant n'est attendu (le titre du bāb n'est pas dans l'extrait).
2. **Attributions.** Vérifiées sur les pages lues et les témoins : al-Muqaddimāt (21735, p. 74 : l'inversion et ses trois avis), Ibn ʿArafa (16968, p. 65 : rinçage omis, trois avis, audition de Yaḥyā ; p. 67 : Ibn Zarqūn, certains Andalous, al-Māzarī), at-Tawḍīḥ (14442, p. 117 : « ويستحب للمتعمد » et les trois avis ; p. 124 : Ibn al-Jallāb et la réfutation). Non vérifiés faute de témoin : les citations d'aṭ-Ṭirāz, d'al-Madkhal, d'az-Zāhī, d'al-ʿĀriḍa et d'Ibn Bashīr (rapportées comme al-Ḥaṭṭāb les donne).
3. **Statuts.** « mashhur » : sunna oubliée faite sans refaire la suite (Yūsuf b. ʿUmar) ; reprise dans le temps pour la sunna omise exprès (selon al-Bisāṭī) ; pas de reprise pour la sunna oubliée (Sanad) ; pas de limite pour l'eau ; commencer par l'avant de la tête (Ibn Bashīr). « non_precise » ailleurs. muʿtamad confirmé pour toutes les fiches (al-Dardīr ; « وَالْمُعْتَمَدُ نَدْبُ الْإِعَادَةِ » pour la sunna omise exprès).
4. **Croisement.** Pages 21604/98–100 lues. Mentions de « ح » : une, p. 99 (« مَعَ أَنَّ الَّذِي فِي ح أَنَّ التَّجْدِيدَ يُفْعَلُ », fiche 44a, divergence sur l'eau nouvelle des oreilles) ; p. 101 (le siwāk, segment ultérieur). Mentions de « خِلَافًا لِـ » : p. 99 (« خِلَافًا لعج », fiche 44a), p. 100 (« خِلَافًا لِمَنْ قَالَ », fiche 46). Divergences : ce qui suit le membre inversé, sunna pour al-Ḥaṭṭāb, recommandé pour al-Dardīr (43a) ; l'eau nouvelle des oreilles oubliée (44a). Points à comparer : la limite de l'éloignement (43a), la prière de qui omet exprès une sunna (44b).
5. **Langue.** Matn vocalisé d'après le « ص » ; segment 48 corrigé (« وَبَدْءٌ », n° 277), avec le plan ; segment 46 laissé (« مَاءٍ », variante signalée, n° 276). 6 termes nouveaux ; « تَنْكِيس », « مُسْتَنْكِح », « فَضَائِل », « وَسْوَاس », « سَرَف », « فَوْد » repris avec leur définition.
6. **Compréhension.** Chaque `regle_pratique` se lit seule.

**Résultat** : les huit fiches passent à `verifie` (sous réserve du contrôle par empreintes). Alertes restantes non bloquantes : n° 271, 274 (non résolus), 273, 276 (précisés).

## Audit des n° 259 à 277

Décision n° 6 : audit toutes les deux unités dans le faṣl tah-01-04 ; fait après l'unité 38, sur les unités 37 et 38. Recherches : al-Bayān (21751, p. 1–70), al-Kharashī et al-ʿAdawī (91, p. 128–146), at-Tawḍīḥ (14442, p. 95–130), Ibn ʿArafa (16968, p. 60–75), al-Zurqānī et al-Bunānī (14297, p. 112–135), Ibn Shās (14594, p. 15–35).

| N° | Résultat |
|---|---|
| 259, 260, 261, 262, 263, 268, 269, 270, 272, 275, 277 | Corrigés en rédaction, témoins en toutes lettres ; inchangés |
| 267 | Confirmé ; inchangé |
| 264, 273, 276 | Précisés ; inchangés |
| 265, 266, 271, 274 | Aucun témoin de plus : non résolus (pour le n° 266, ni al-Bayān p. 1–70 ni adh-Dhakhīra p. 230–300 ne portent la réponse « وَالْجَوَابُ أَنَّ هَذِهِ مُنَاسَبَاتٌ ») |

## Contrôles techniques

- `node --check` : `tah-01-p18.js`, `glossaire-p2.js`, `plan.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p18.js` : 16 fiches, 736 termes, 0 erreur, 0 doublon ; quiz de la partie A 16 | B 16 | C 16 | D 16 (unité 38 : 8 | 8 | 8 | 8) ; aucune position répétée deux fois de suite ; chaque fiche a une mise en situation.
- Quiz, tout le cours (`quizstat.js`) : A 282 | B 282 | C 282 | D 282.
- `controle_site.py` sur le dépôt complet : 286 fiches (281 + 5 synthèses), 736 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.
