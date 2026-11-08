# Rapport de vérification — Ṭahāra, unité 27 (tah-01-03-43a à -43c)

Date : 2026-11-08. Fichier : `data/lecons/tah/tah-01-p13.js` v4.2 (nouvelle partie, 3 fiches ; `tah-01-p12.js` presque plein). Manifeste : `data/manifeste.js` v1.12. Plan : `data/plan.js` v1.20 (tah-01-03-43 découpé en 43a, 43b, 43c). Termes : `data/glossaire-p2.js` v1.31. Anomalies : `docs/sources/anomalies-textes-2.md` (n° 183 à 187).

## Unité

| Fiche | Contenu | Mawāhib (t. 1) | Shamela 569 | al-Dardīr / al-Dasūqī (t. 1) | Shamela 21604 |
|---|---|---|---|---|---|
| tah-01-03-43a | les cas (deux formes, eau pure, petite eau, autre eau sûre, ichtibâh / iltibâs ; remarques 4, 6, 7, 11) | 170–173 | 169–172 | 82–83 | 81–82 |
| tah-01-03-43b | la règle et les cinq avis (remarques 1, 2, 3, 5, 13, 14, 15) | 170–174 | 169–173 | 82–83 | 81–82 |
| tah-01-03-43c | cas particuliers (remarques 8, 9, 10, 12, 16, 17) | 172–174 | 171–173 | 83 | 82 |

Source : 5 pages de Mawāhib (Shamela 169 à 173, jusqu'au segment suivant « وَنُدِبَ غَسْلُ إنَاءِ مَاءٍ »). Un seul segment du matn, commenté avec dix-sept remarques : découpé en trois sous-fiches de même `ordre` (étape 3), selon le modèle de tah-01-03-01a à -01h. Fin du segment contrôlée sur le Mukhtaṣar seul (11355, p. 8) et al-Dardīr. Unité limitée à ce segment (5 pages) : le segment 44 (lavage du récipient lapé par un chien) fait environ 3,5 pages et ouvrira l'unité 28.

## Vérification (étape 6)

1. **Traçabilité.** Chaque avis, attribution et statut renvoie à un fragment cité entre « ». 96 fragments arabes (`frags.py`, plus long fragment : 23 mots). Contrôle par empreintes : fait (voir plus bas).
2. **Attributions.** Vérifiées sur les pages lues et sur les sources que cite al-Ḥaṭṭāb : Ibn Shās (14594, p. 23), at-Tawḍīḥ (14442, p. 74–77), Ibn ʿArafa (16968, p. 43–44). Toutes conformes, sauf un mot altéré dans une citation d'Ibn ʿArafa (n° 187, corrigé pour le sens) et un mot absent d'at-Tawḍīḥ (n° 185). Al-Dasūqī donne à Ibn Abī Zayd le choix de l'avis d'Ibn Maslama, que Mawāhib, Ibn Shās et at-Tawḍīḥ donnent au Qāḍī Abū Muḥammad (n° 184, reproduit en « Point à comparer »). L'auteur de la réponse à Ibn Rāshid n'est pas autrement précisé (cité d'Ibn Farḥūn, puis attribué à « صَاحِبُ الْجَمْعِ »).
3. **Statuts.** « وَهُوَ الصَّحِيحُ » (at-Tawḍīḥ, Ibn al-ʿArabī), « الْأَشْبَهُ بِقَوْلِ مَالِكٍ » (al-Jawāhir) et « عَلَى الْأَظْهَرِ » (ash-Shāmil) notés « non_precise » ou « qawl », la fiche citant les mots. muʿtamad confirmé par al-Dardīr et al-Dasūqī pour 43a et 43b (« وَهُوَ كَذَلِكَ عَلَى الْمُعْتَمَدِ ») ; non tranché pour 43c (les pages croisées ne traitent que des récipients renversés).
4. **Croisement.** Mentions de « ح » des pages 81–82 relevées : « اُنْظُرْ بْن وَحِّ » (43b, « Concordance ») et « فَإِنَّهُ يَتَيَمَّمُ عَلَى الصَّحِيحِ كَمَا فِي ح » (43c, « Divergence » : selon Mawāhib, l'avis d'Ibn al-Mājishūn suivi par Khalīl réunit ablutions et ablution sèche quand il ne reste qu'un récipient ; jugement attribué à « ح » non trouvé dans Mawāhib p. 170–174). Aucune mention de « خِلَافًا لِـ ». Sigles développés : ح, بن, شب.
5. **Langue.** Matn vocalisé d'après le « ص » de Mawāhib ; variante du Mukhtaṣar seul et d'al-Dardīr (« وَإِذَا », « نَجَسٍ ») notée (n° 183). 11 termes nouveaux, vocalisés, transcrits selon le barème et ajoutés à `glossaire-p2.js` ; doublons contrôlés sur les deux glossaires : aucun.
6. **Compréhension.** Chaque `regle_pratique` se lit seule.

**Résultat** : les trois fiches passent à `verifie`. Alertes restantes non bloquantes (n° 185 non résolu ; renvoi d'al-Dasūqī à « ح » non localisé ; passage d'Ibn Rushd sur le doute pour les vêtements non relu). 5 alertes textuelles nouvelles : prochain audit après l'unité 28 (n° 183 et suivants).

## Contrôles techniques

- `node --check` : `tah-01-p13.js`, `glossaire-p2.js`, `plan.js`, `manifeste.js` sans erreur.
- `node docs/outils/verif.js data/glossaire.js data/glossaire-p2.js data/lecons/tah/tah-01-p13.js` : 3 fiches, 575 termes, 0 erreur, 0 doublon ; quiz de la partie A 3 | B 3 | C 3 | D 3 ; aucune position répétée deux fois de suite dans une fiche.
- Quiz, tout le cours (`quizstat.js`) : A 200 | B 200 | C 200 | D 200.
- `controle_site.py` sur le dépôt complet : 204 fiches (200 + 4 synthèses), 575 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS.
- Taille : `tah-01-p13.js` 56545 octets.

## Contrôle des citations (unité 27)

Fait le 2026-11-08, par empreintes (`__fcheck`, maxw 30) sur les pages Shamela 569/169–173, 21604/81–82, 11355/8, 14594/23, 14442/75–76 et 16968/43–44. Premier passage : 98 fragments, 1 manquant : deux termes du glossaire mis entre « » dans l'explication de 43a (« اِشْتِبَاه », « اِلْتِبَاس » : le second introuvable tel quel), sortis des guillemets. Second passage : 96 fragments, tous retrouvés.
