# Document de reprise — à lire en début de conversation

Mis à jour : 2026-11-08 (unité 25 faite dans le dépôt : tah-01-03-32 à -37, nouveau tah-01-p12.js ; contrôle des citations fait : 164 sur 165, le titre du bāb attendu) ; 2026-11-08 (lot 5 fait : changelog.md et anomalies-textes.md dans le dépôt ; reconstruction terminée) ; 2026-11-08 (lot 5 commencé : tah-01-segments.md et campagne-corrections.md dans le dépôt) ; 2026-11-08 (lot 4 fait : tah-01-p9 v3.7 et -p10 dans le dépôt, contrôle de rendu complet) ; 2026-11-08 (lot 3 fait : tah-01-p1 à -p8 dans le dépôt) ; 2026-11-08 (lot 2 fait : plan v1.18, glossaire v1.26, int-01 v1.6 dans le dépôt) ; 2026-11-08 (lot 1 fait : code dans le dépôt, contrat v1.15, contrôle des citations de l'unité 24 fait ; aperçu publié utilisable comme seconde source, §0) ; 2026-11-08 (création du dépôt GitHub, §0) ; 2026-11-07 au soir, après la fusion de l'unité 23 et l'unité 24 (tah-01-03-20 à -31, dans un nouveau `tah-01-p11.js` v3.9). Historique : le 2026-11-04, `tah-01` a été découpé en parties de moins de 200 Ko (décision n° 10). Depuis le 2026-11-06, le journal de la conversation n'est plus enregistré sur disque (décision n° 11). Le 2026-11-07, le conteneur était vide en début de séance et `project_read` ne renvoyait le contenu que dans la conversation : l'utilisateur a décidé de ne plus recopier les fichiers longs, mais d'ouvrir de nouveaux fichiers (décision n° 12).
Ce document remplace l'historique des conversations précédentes. Il complète les instructions du Projet sans les contredire. **Le mettre à jour à la fin de chaque conversation.**

---

## 0. Dépôt GitHub et reconstruction du site (décision n° 13, 2026-11-08)

Le site est désormais tenu dans le dépôt GitHub **`yacinez-dotcom/mawahib-site`** (privé, branche `main`), qui devient la référence. Le Projet reste l'archive (rapports historiques, anciennes versions). **En début de conversation** : rattacher le dépôt (`add_repo`, accès `push`), le cloner (`git clone --depth 1 https://github.com/yacinez-dotcom/mawahib-site /home/claude/mawahib-site`, délai long), puis travailler sur les fichiers complets du clone ; une unité = un commit ; `git fetch origin main` avant chaque `git push`. L'application GitHub de Claude est installée sur ce dépôt (accès en écriture vérifié le 2026-11-08).

Aucune copie complète du site n'existe hors du Projet, et le Projet ne renvoie les fichiers que dans la conversation : le dépôt est reconstruit **par lots**, chaque fichier étant relu en entier dans le Projet (`project_read`), recopié dans le clone, contrôlé, puis enregistré. Contrôles de chaque fichier recopié : `node --check` ; pour les fiches, nombre de fiches et positions des quiz égaux à ceux du §5 ; toutes les citations arabes retrouvées sur Shamela par empreintes (§3) ; une fois le code en place, `controle_site.py` sur tout le site. Une conversation par lot (deux parties de fiches au plus), pour éviter les compactages.

| Lot | Contenu | État |
|---|---|---|
| 0 | Fichiers à jour au 2026-11-07 : `data/lecons/tah/tah-01-p11.js`, `data/glossaire-p2.js`, `data/manifeste.js`, `docs/reprise.md`, `docs/changelog-2.md`, `docs/sources/anomalies-textes-2.md`, `docs/verifications/tah-01-unite24.md`, `docs/outils/frags.py`, `fh.py`, `verif.js` | ✓ (commit 406f8f9) |
| 1 | Code : `index.html`, `css/socle.css`, `js/socle.js`, B1 à B8, `docs/contrat.md` (v1.15) ; outils `controle_site.py`, `quizstat.js`, `fragcheck.py` ; contrôle des citations de l'unité 24 | ✓ (commits 63e278d et 99f9483 ; code repris de l'aperçu, voir ci-dessous) |
| 2 | `data/plan.js` v1.17 et `data/lecons/int/int-01.js` v1.5 : repris de l'aperçu (mêmes versions) ; plan passé en v1.18 (titres de tah-01-03-19 et -30). `data/glossaire.js` : v1.25 de l'aperçu + les 13 termes de l'unité 22 recopiés depuis le Projet (v1.26 ; contrôle : 500 termes). En plus : `int-01.js` v1.6 (point ouvert int-01-01-03c) | ✓ (2026-11-08) |
| 3 | `data/lecons/tah/tah-01-p1.js` à `-p8.js` : repris de l'aperçu (mêmes versions que le Projet) ; contrôles : en-têtes, nombre de fiches, positions des quiz (déjà égales au §5 le 2026-11-08), `node --check`, contrôle des citations par empreintes | ✓ (2026-11-08 ; 1 596 citations contrôlées, voir `docs/changelog-2.md`) |
| 4 | `tah-01-p9.js` : v3.6 de l'aperçu + changements de la v3.7 (audit après l'unité 22) recopiés depuis le Projet ; `tah-01-p10.js` (unité 22) recopié depuis le Projet ; puis `controle_site.py` sur tout le dépôt | ✓ (2026-11-08 ; p9 : taille égale à celle du Projet, 131 414 octets ; p10 : 6 fiches, 136 citations sur 138 retrouvées, les 2 autres attendues ; rendu : 190 fiches, 0 erreur) |
| 5 | `docs/sources/tah-01-segments.md`, `anomalies-textes.md`, `changelog.md`, `docs/verifications/campagne-corrections.md` ; les autres rapports restent dans le Projet | ✓ (2026-11-08) : `tah-01-segments.md` (11 empreintes SHA-256 identiques) et `campagne-corrections.md` (commits 91b252a et 0c3908a) ; `changelog.md` (51 lignes, 24 citations arabes sur 24 retrouvées dans les données) et `anomalies-textes.md` (n° 1 à 149, bilan cohérent avec chaque ligne sauf le n° 43, écart déjà présent dans le Projet ; 341 citations sur 348 retrouvées dans les données, les 7 autres sur Shamela) (« lot 5 suite ») |

**Aperçu publié = seconde source (constat du 2026-11-08).** L'aperçu publié le 2026-11-06 après l'unité 21 (artefact `https://claude.ai/artifact/Qm712fagjo8xQb3H3ruiRK`, slug `c06a9ced-514c-4d4b-a0e3-56a8109640b6`) contient le code et les données de ce jour-là. L'outil `mcp__claude-artifacts__read_file` avec `paths` (et non `path`) **enregistre les fichiers sur disque tels quels**, sans recopie à la main ; comparer ensuite leur SHA-256 à celui de `list_files`. Versions contenues : code identique au Projet ; `plan.js` v1.17, `int-01.js` v1.5, `tah-01-p1.js` à `-p4.js` v2.5, `-p5.js` v2.7, `-p6.js` v2.10, `-p7.js` v3.3, `-p8.js` v3.5 (identiques au Projet) ; `glossaire.js` v1.25 et `tah-01-p9.js` v3.6 (plus anciens que le Projet) ; pas de `tah-01-p10.js`. Le manifeste de l'aperçu (v1.8) n'est pas à reprendre. D'où le nouveau découpage des lots 2 à 5 ci-dessus, **accepté par l'utilisateur le 2026-11-08** (« lot 2 ») : il évite de recopier à la main les grosses parties déjà identiques. Un fichier pris dans l'aperçu n'est accepté que si son en-tête porte la même version que dans le Projet (`project_search` sur l'en-tête, ou `project_read` si le fichier est petit).

**Méthode du lot 4 pour un fichier un peu plus ancien dans l'aperçu** : prendre la version de l'aperçu, retrouver les seuls passages changés dans le Projet (`project_search` sur les phrases des alertes ou de l'en-tête, d'après le rapport de vérification qui dit ce qui a changé), les appliquer, puis comparer la taille obtenue (`wc -c`) à celle que donne le rapport ; égalité exacte pour p9 v3.7 (131 414 octets).

**Copies du Projet laissées en l'état** : depuis le lot 2, `data/plan.js` (v1.17) et `data/lecons/int/int-01.js` (v1.5) du Projet sont plus anciens que ceux du dépôt (v1.18, v1.6). Le dépôt fait foi ; ne pas les reprendre depuis le Projet.

Après la reconstruction : réunir `glossaire.js` et `glossaire-p2.js`, les deux fichiers d'anomalies et les deux journaux (la décision n° 12 n'a plus d'objet) ; les unités 25 et suivantes se font directement dans le dépôt. Pendant la reconstruction, une nouvelle unité peut être faite dans le dépôt (elle ne touche que la dernière partie et `glossaire-p2.js`), mais le contrôle de rendu complet attend la fin du lot 1.

---

## 1. État du projet

```
ÉTAT DU PROJET — 2026-11-08
Site : B0 ✓ | B1 ✓ | B2 ✓ | B3 ✓ | B4 ✓ | B5 ✓ | B6 ✓ | B7 ✓ | B8 ✓ (déploiement en ligne reporté) ; code dans le dépôt (lot 1 ✓), contrat v1.15
Reconstruction du dépôt : lots 0 à 5 ✓ (terminée le 2026-11-08) ; reste la réunion des fichiers doubles (§0, après la reconstruction)
Cours : Module 0 (int-01-01, int-01-02, avec synthèses) ✓ toutes fiches vérifiées
        tah-01-01 : faṣl terminé — 38 fiches + synthèse tah-01-01-syn, toutes vérifiées
        tah-01-02 : faṣl terminé — 82 fiches + synthèse tah-01-02-syn, toutes vérifiées (unités 7 à 18)
        tah-01-03 : en cours — 01a à 01h, 02 à 37 vérifiées (unités 19 à 25) ; 37 segments sur 50
Données : plan.js v1.18 | int-01.js v1.6 | tah-01-p1.js à -p4.js v2.5 | tah-01-p5.js v2.7 | tah-01-p6.js v2.10 | tah-01-p7.js v3.3 | tah-01-p8.js v3.5 | tah-01-p9.js v3.7 | tah-01-p10.js v3.7 (unité 22, figé) | tah-01-p11.js v3.9 (unités 23–24, ≈ 158 Ko, plein) | tah-01-p12.js v4.0 (unité 25, ≈ 87 Ko) | glossaire.js v1.26 (figé) | glossaire-p2.js v1.29 | manifeste.js v1.11
Docs : changelog.md (figé) + changelog-2.md | anomalies-textes.md (figé, n° 1–149) + anomalies-textes-2.md (n° 150 et suivants, bilan à jour)
Quiz : A 192 | B 192 | C 192 | D 192 (tout le cours)
Contrôle de rendu : 2026-11-08, dépôt complet (unité 25) : 196 fiches (192 + 4 synthèses), 546 termes, 0 erreur, 0 anomalie, 0 terme coupé, 0 quiz en échec, 0 erreur JS
Anomalies : 174 (Corrigé 67 | Précisé 40 | Non résolu 60 | Confirmé 4 | Limite 2 | Déjà corrigé 1) ; prochain n° = 175 ; prochain audit après l'unité 26
Prochaine étape : unité 26 = tah-01-03-38 et suivants (« وَهُوَ رَشٌّ بِالْيَدِ », Shamela 569, p. 166 = t. 1, p. 167), dans tah-01-p12.js, puis audit (n° 167 et suivants)
Textes attendus : aucun (sources lues sur Shamela par Claude)
```

**Contrôle des citations de l'unité 25** : fait le 2026-11-08 (164 fragments sur 165, le manquant étant le titre du bāb ; voir `docs/changelog-2.md`). Leçon : ne pas mettre entre « » du français contenant des termes arabes (faux fragment), et commencer une citation au premier mot exact du texte (« وَلِأَنَّ », non « لِأَنَّ »).

**Unité 26** — tah-01-03-38 et suivants : « وَهُوَ رَشٌّ بِالْيَدِ » commence sur Shamela 569/166 (« ص (وَهُوَ رَشٌّ بِالْيَدِ) »), « بِلَا نِيَّةٍ » sur 166–167, « لَا إنْ شَكَّ فِي نَجَاسَةِ الْمُصِيبِ » et « أَوْ فِيهِمَا » p. 167, « وَهَلْ الْجَسَدُ كَالثَّوْبِ » p. 167 et suivantes. Croisement : 21604, p. 80 (sharḥ et ḥāshiya de ces segments déjà sur cette page) et 81. Déjà lu dans la ḥāshiya p. 80 : « (قَوْلُهُ: بِالْيَدِ) أَيْ أَوْ الْفَمِ بَعْدَ إزَالَةِ مَا فِيهِ مِنْ الْبُصَاقِ », la construction de « بِلَا نِيَّةٍ », l'avis d'Ibn Nāfiʿ (qu'Ibn ʿArafa rapporte à la riwāya d'Ibn al-Qāsim) ; at-Tawḍīḥ (14442, p. 67–68) porte « قال في البيان: وظاهرُ المذهب عدمُ افتقارِه للنية » là où Mawāhib a « قَالَ فِي اللُّبَابِ » (même question que le n° 173). Après l'unité 26 : audit (n° 167 à 174 et suivants).

**Contrôle des citations de l'unité 24** : fait le 2026-11-08 (198 fragments sur 198 retrouvés, voir `docs/changelog-2.md`). Pour un contrôle de citations, penser aux ouvrages cités dans les alertes (ex. al-Muntaqā, 6684), pas seulement aux pages croisées.

**Unité 25 (faite)** — suite du faṣl tah-01-03 (« Ôter l'impureté », 50 segments, t. 1, p. 130–179, d'après `data/plan.js`). Le commentaire de « وَلَا يَلْزَمُ عَصْرُهُ » commence sur la page Shamela 569/162 (« ص (وَلَا يَلْزَمُ عَصْرُهُ) »), suivi de « مَعَ زَوَالِ طَعْمِهِ لَا لَوْنٍ وَرِيحٍ عَسِرَا » sur la même page. Lire `data/plan.js` (v1.18) pour les identifiants et les débuts de segments. Croisement : al-Dardīr / al-Dasūqī, Shamela 21604, page 79 (« (وَلَا يَلْزَمُ عَصْرُهُ) ») et suivantes. Déjà relevé dans la ḥāshiya de la page 79, pour ces segments : « وَلَا يَجِبُ أُشْنَانٌ وَنَحْوُهُ كَمَا فِي ح » et « مَا نَقَلَهُ ح عَنْ الْقَابِسِيِّ » ; « قَالَهُ ح » (arak) a été repris à l'unité 24. Contrôler la fin de chaque segment sur 11355 (p. 8) et al-Dardīr.

**Où mettre les fiches** : `data/lecons/tah/tah-01-p12.js` (créé à l'unité 25, v4.0 ; ajouter la ligne « v4.1 : unité 26 », fiches avant `/* FIN-UNITE-25 */` remplacé par `/* FIN-UNITE-26 */`). Nouveaux termes : à la fin de `data/glossaire-p2.js` (≈ 7 Ko). Nouvelles anomalies : dans `docs/sources/anomalies-textes-2.md` (≈ 18 Ko ; section avant « ## Bilan », puis bilan à jour). Journal : `docs/changelog-2.md`. Ces fichiers sont petits : ils peuvent être relus en entier et réécrits.

**Méthode de lecture** : voir le §3. Vérifier d'abord si `/home/claude/site` existe (versions dans les en-têtes, taille) et si le journal existe (`ls /root/.claude/projects/-home-claude/*.jsonl`). Le 2026-11-07, ni l'un ni l'autre ; le lien avec le navigateur de l'ordinateur de l'utilisateur s'est aussi coupé en cours de séance (les outils `mcp__remote-devices__*` ont disparu) : prévenir l'utilisateur et lui demander de rouvrir l'application Claude sur son ordinateur.

---

## 2. Décisions de l'utilisateur (à respecter)

1. **Sources.** L'utilisateur ne colle aucun texte. Claude lit lui-même les sources sur shamela.ws (« tu cherches des sources sur internet et tu te débrouilles »). La règle « source unique » des instructions s'applique aux pages lues : rien de mémoire.
2. **Pilote validé.** Le gabarit et le rendu sont acceptés ; on continue la Ṭahāra dans l'ordre.
3. **Déploiement en ligne reporté.** Pas de Netlify pour l'instant.
4. **Takmīl d'al-Ḥaṭṭāb** (texte sans matn de Khalīl) : champ `nass` au lieu de `matn` (contrat v1.13).
5. **Quiz conservés, avec une bonne réponse placée au hasard.** Dans chaque quiz, la bonne réponse change de position (A, B, C ou D). Sur l'ensemble des fiches, les quatre positions sont à peu près aussi fréquentes. On évite deux fois de suite la même position dans une fiche. Les choix « Les deux… », « Aucune… » restent en dernier. Contrôle : `node docs/outils/quizstat.js data/lecons/*/*.js` (ou `node docs/outils/verif.js …`).
6. **Audits d'anomalies proposés par Claude, sans attendre la demande.** Moment : à la fin de chaque faṣl (avant la synthèse), ou toutes les deux unités (environ 12 masāʾil ou 20 pages) si le faṣl est long. Proposer plus tôt si plus de 8 alertes textuelles nouvelles se sont accumulées. Chaque audit ne porte que sur ce qui a été produit depuis le précédent. La campagne de correction suit aussitôt (même méthode que `docs/verifications/campagne-corrections.md`). Résultats ajoutés à `docs/sources/anomalies-textes-2.md` (numérotation continue : prochain n° = 175). Le faṣl tah-01-03 (50 segments, p. 130–179) est long : audits après les unités 20, 22 et 24 faits ; prochain audit après l'unité 26, puis toutes les deux unités, et à la fin du faṣl.
7. **Une conversation par unité ou deux**, pour éviter les compactages. En fin de conversation : mettre à jour ce document, le changelog et l'état.
8. **Réponses en français.**
9. **Divergences reproduites telles quelles, dans tous les chapitres.** Chaque entrée du champ `divergences` : (a) commence par sa nature — « Divergence — », « Point à comparer — », « Complément — » ou « Concordance — » — et son sujet ; (b) rattache chaque avis au savant qui le tient (« Al-Ḥaṭṭāb : … Al-Dardīr : … Al-Dasūqī : … », et les savants qu'ils citent) ; (c) cite le texte arabe tel quel, entre « », pour chaque côté (au minimum le texte d'al-Dardīr / al-Dasūqī), fragments contrôlés ; (d) développe les sigles d'al-Dasūqī d'après sa liste (§ 4). À chaque unité, relever toutes les mentions de « ح » et de « خِلَافًا لِـ » dans la ḥāshiya des pages croisées pour ne manquer aucune divergence.
10. **Fichiers de données de moins de 200 Ko** (2026-11-04). Le Projet ne renvoie qu'environ 262 Ko d'un fichier par lecture, sans copie sur disque. Un bāb plus gros est découpé en parties `…-p<n>.js` (contrat v1.14 §5). Une conversation ne réécrit jamais dans le Projet un fichier qu'elle n'a pas lu en entier : si cela arrive, elle livre son travail dans `docs/travail/` et le signale.
11. **Sans journal sur disque, tout retaper** (2026-11-06). Quand le journal de la conversation n'est pas enregistré sur disque, les fichiers du Projet à modifier sont lus en entier avec `project_read`, puis réécrits en entier sur disque avec la modification, et renvoyés au Projet. Contrôles de la recopie : nombre de fiches, de termes ou de lignes ; positions des quiz identiques à l'état précédent ; tous les fragments arabes retrouvés sur Shamela (§3).
12. **Nouveaux fichiers plutôt que recopie des fichiers longs** (2026-11-07). Pour ne pas recopier à la main des fichiers longs déjà vérifiés : les nouvelles fiches vont dans une nouvelle partie `tah-01-p<n>.js` dès que la dernière partie ne peut plus les recevoir sans recopie lourde ; les nouveaux termes dans `data/glossaire-p2.js` (le socle accepte plusieurs appels à `App.data.ajouterTermes`, dans l'ordre du manifeste ; un doublon est signalé et ignoré) ; les nouvelles anomalies dans `docs/sources/anomalies-textes-2.md` ; le journal dans `docs/changelog-2.md`. Les fichiers longs antérieurs (`tah-01-p10.js`, `glossaire.js`, `anomalies-textes.md`, `changelog.md`) sont figés. Quand une suite dépasse à son tour la taille qu'on peut recopier sans risque (≈ 60 Ko d'arabe vocalisé), ouvrir la partie suivante (`-p3`, etc.).
13. **Dépôt GitHub `yacinez-dotcom/mawahib-site` comme référence** (2026-11-08), reconstruit par lots depuis le Projet (voir le §0).

---

## 3. Méthode de lecture des sources (Shamela)

Le conteneur de Claude n'atteint pas shamela.ws. On passe par le **navigateur intégré** de l'ordinateur de l'utilisateur (outils `mcp__remote-devices__Claude_Browser__*`, à charger d'un coup via ToolSearch avec la requête `mcp__remote-devices__Claude_Browser__` ; lire d'abord la compétence `anthropic-skills:built-in-browser`). L'utilisateur doit laisser son ordinateur allumé avec l'application Claude ouverte.

1. Ouvrir un onglet sur `https://shamela.ws/` (`preview_start`, même origine, sinon `fetch` échoue).
2. Y définir les fonctions suivantes (avec l'outil `javascript_tool`) :

```js
window.__C = window.__C || {};
window.__norm = s => s.replace(/[ً-ْٰـ]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^ء-ي0-9]+/g,' ').replace(/\s+/g,' ').trim();
window.__page = async (b,n) => { const k=b+'/'+n; if (window.__C[k]!==undefined) return window.__C[k]; try{ const r=await fetch('/book/'+b+'/'+n); if(!r.ok){window.__C[k]='';return '';} const h=await r.text(); const d=new DOMParser().parseFromString(h,'text/html'); const t=[...d.querySelectorAll('.nass')].map(e=>e.innerText).join('\n'); window.__C[k]=t; return t;}catch(e){return ''} };
window.__range = async (b,a,z,conc=8) => { let i=a; const work=async()=>{ while(i<=z){ const n=i++; await window.__page(b,n);} }; await Promise.all(Array.from({length:conc},work)); };
window.__raw = (b,n,phrase,ctx=120) => { const P=__norm(phrase); const map={'ا':'[اأإآٱ]','ي':'[يى]','ه':'[هة]',' ':'[^ء-ي0-9]+'}; let re=''; for(const ch of P){ re+=(map[ch]||ch.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))+'[ً-ْٰـ]*'; } const t=__C[b+'/'+n]||''; const m=new RegExp(re).exec(t); return m?t.slice(Math.max(0,m.index-ctx),m.index+m[0].length+ctx):null; };
window.__srch = (b,a,z,phrase,ctx=250) => { const P=window.__norm(phrase); const out=[]; for(let n=a;n<=z;n++){ const t=window.__C[b+'/'+n]||''; const N=window.__norm(t); let i=N.indexOf(P); while(i>=0 && out.length<4){ out.push({p:n, ctx:N.slice(Math.max(0,i-ctx), i+P.length+ctx)}); i=N.indexOf(P,i+1);} } return out; };
```

3. Lire une page : `await __page(569, 85)` ; chercher une phrase dans un ouvrage : `await __range(21614,1,160); __srch(21614,1,160,'ونقل ابن الفرس')`. `__srch` renvoie le texte normalisé (sans voyelles) : pour citer un fragment vocalisé, relire le texte brut avec `__raw(b, n, phrase)`.
4. **Contrôle des citations.** Avec journal sur disque : recopier le texte lu dans un fichier de notes (`extract_js.py`), puis `python3 docs/outils/fragcheck.py <fiches> <notes>`. **Sans journal** : contrôle par empreintes, sans recopier les pages. Dans le conteneur : `python3 docs/outils/frags.py <fichier> > f.json` puis `python3 docs/outils/fh.py f.json` (liste d'empreintes de 7 caractères). Pour une seule unité, extraire d'abord sa partie du fichier dans un fichier temporaire. Dans le navigateur, définir :

```js
window.__fn = s => s.replace(/[ً-ْٰـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/[^؀-ۿ]+|[،؛؟]/g,' ').trim().split(/\s+/);
window.__fnv = s => { let h=0x811c9dc5; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,0x01000193)>>>0; } return ('00000000'+h.toString(16)).slice(-8).slice(0,7); };
window.__fcheck = (pages, hashes, maxw=30) => { const W=__fn(pages.map(k=>__C[k]||'').join(' \n ')); const S=new Set(); for(let i=0;i<W.length;i++){ let s=''; for(let k=0;k<maxw && i+k<W.length;k++){ s = k? s+' '+W[i+k] : W[i]; S.add(__fnv(s)); } } return {mots:W.length, manquants: hashes.split(',').map((h,i)=>[i,h]).filter(([i,h])=>!S.has(h))}; };
```

puis `__fcheck(['569/148','21604/72', …], '<empreintes>')`, qui renvoie les numéros des fragments absents (afficher ensuite ces fragments dans le conteneur et vérifier chacun avec `__srch`). La recherche porte sur des mots entiers : un mot seul contenu dans un mot plus long est signalé à tort ; `maxw` doit dépasser le nombre de mots du plus long fragment (`fh.py` l'affiche). Une phrase coupée par un changement de page, ou par la ḥāshiya qui s'intercale entre deux pages du sharḥ, se cite en deux morceaux séparés par « … ». Ne pas mettre entre « » une lecture proposée ni un terme du glossaire qui n'est pas une citation du passage. Le titre du bāb dans l'en-tête d'une partie donne toujours un « manquant » attendu.
5. Le moteur de recherche de Shamela et la page `/categories` ne répondent pas aux requêtes automatiques. Pour trouver un livre, passer par les liens de catégorie de la page d'accueil (`/category/15` = fiqh malikite).
6. Contrôle d'une recopie longue (plan, segments) : recalculer dans le navigateur, sur les pages de Shamela, l'empreinte SHA-256 des segments (`crypto.subtle.digest`) et la comparer à celle du conteneur.

### Correspondance des pages

| Ouvrage | Shamela | Page imprimée |
|---|---|---|
| *Mawāhib al-Jalīl* (al-Ḥaṭṭāb), éd. Dār al-Fikr 1992 | 569 | t. 1 : page Shamela + 1 |
| al-Sharḥ al-kabīr (al-Dardīr) + Ḥāshiyat al-Dasūqī | 21604 | t. 1 : page Shamela + 1 ; sur chaque page, le sharḥ puis la ḥāshiya après « ـ[حاشية الدسوقي] » ; lacune du sharḥ entre les pages 76 et 77 (anomalie n° 161) |

### Seconds témoins (pour les audits et les lectures douteuses)

| Ouvrage | Shamela |
|---|---|
| Mukhtaṣar de Khalīl seul (contrôle du matn) | 11355 (la Ṭahāra commence p. 3–4 ; faṣl tah-01-03 : p. 6–8) |
| Ibn Ghāzī, *Shifāʾ al-Ghalīl* (avec le Mukhtaṣar) | 14605 (matn du faṣl tah-01-03 p. 24 ; deux vêtements et audition d'Ibn Abī Zayd p. 25–26) |
| Ibn ʿArafa, *al-Mukhtaṣar al-fiqhī* | 16968 (tolérances : p. 36–38) |
| Khalīl, *at-Tawḍīḥ* | 14442 (épée polie p. 62 ; impureté ôtée sans eau absolue p. 65 ; eau de lavage p. 66 ; aspersion p. 67–68 ; furoncle, « لَقَطَعَ » p. 79) |
| al-Bājī, *al-Muntaqā* | 6684 (urine du cheval du combattant : p. 44 ; pan de robe p. 62) |
| ʿUlaysh, *Minaḥ al-Jalīl* | 21614 (fin du faṣl tah-01-01 : p. 32–33 ; tolérances de tah-01-03 : p. 56–60) |
| al-Zurqānī + ḥāshiya (al-Bunānī) | 14297 (tolérances de tah-01-03 : p. 78–89 ; essorage p. 90 ; aspersion p. 93–94) |
| al-Kharashī | 91 (tolérances de tah-01-03 : p. 105–113 ; essorage p. 113–114 ; aspersion p. 116) |
| al-Mawwāq, *at-Tāj wa-l-Iklīl* | 21611 (poche du musc p. 71 ; poteries p. 86) |
| Ibn Shās, *ʿIqd al-jawāhir* | 14594 (quatre catégories d'impuretés tolérées : p. 17) |
| Ibn Nājī sur la Risāla | 14555 |
| Zarrūq sur la Risāla | 14556 |
| Ibn Rushd, *al-Muqaddimāt* | 21735 |
| Ibn Rushd, *al-Bayān wa-t-taḥṣīl* | 21751 (livre des ablutions vers p. 1–200 ; cheval du combattant p. 61–62 ; fiente p. 65 ; sueur et lait p. 105 ; bain public p. 184 ; l'audition d'Ibn Abī Zayd sur les deux vêtements n'est pas dans p. 1–520) |
| al-Qarāfī, *adh-Dhakhīra* | 1717 |
| Bahrām | 147313 |

Règle de correction : une lecture n'est corrigée que si un témoin la porte en toutes lettres, ou si la syntaxe l'impose et qu'un témoin a les mêmes consonnes. Sinon, l'alerte reste dans la fiche.

---

## 4. Conventions de rédaction (en plus des instructions du Projet)

- Unité de travail : 6 à 8 masāʾil, ou environ 10 pages.
- Sous-fiches (17a, 17b) : même `ordre` ; le plan (`data/plan.js`) est mis à jour en conséquence. Segment manqué par le squelette : suffixe « b » sur le segment précédent (tah-01-02-16b), sans renuméroter la suite.
- Fin de segment absente du « ص » de Mawāhib mais commentée par al-Ḥaṭṭāb : la mettre dans le `matn` de la fiche d'après le Mukhtaṣar seul et al-Dardīr, avec une alerte ; pas de nouvel identifiant.
- Sigles d'al-Dasūqī : liste donnée par al-Dasūqī lui-même (Shamela 21604, p. 1). Dans `divergences`, `muatamad`, `explication`, `regle_pratique`, `qualification`, `tanbihat` et `quiz`, le sigle est cité tel qu'imprimé puis développé entre parenthèses à sa première occurrence ; dans `alertes`, il reste tel qu'imprimé.

  | Sigle | Savant |
  |---|---|
  | ح | Muḥammad al-Ḥaṭṭāb |
  | بن | Muḥammad al-Bunānī |
  | طفى | Muṣṭafā ar-Rammāṣī |
  | عبق | ʿAbd al-Bāqī az-Zurqānī |
  | شب | Ibrāhīm ash-Shabrakhītī |
  | خش | al-Kharashī |
  | مج / المج | *al-Majmūʿ* de Muḥammad al-Amīr |
  | « شيخنا » | ʿAlī aṣ-Ṣaʿīdī al-ʿAdawī (écrire « son maître al-ʿAdawī ») |
  | عج, عب, تت, ج | non définis dans la liste : « sigle non défini dans la liste d'al-Dasūqī » |
- Champ `alertes` : dernière ligne « Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. …–… (Shamela 21604, pages …–…). » ; une alerte corrigée commence par « Corrigé (campagne de correction) : » et cite le témoin ; une alerte éclaircie sans correction de lecture, par « Précisé (campagne de correction) : ».
- Phrase d'auteur incertain (citation qui se termine par « انْتَهَى » sans début de citation) : ne pas la mettre dans `tarjih_hattab` ; la rapporter de façon neutre dans `explication`, avec alerte.
- muʿtamad : seulement si al-Dardīr / al-Dasūqī le confirment ; sinon « non tranché » avec le motif.
- Statut « shadh » seulement si le texte dit l'avis isolé ou « خِلَافُ الْمَعْرُوفِ » ; « خِلَافُ ظَاهِرِ الْمَذْهَبِ » est noté « qawl ». « الْمَعْرُوفُ » seul n'est pas noté « mashhur » : statut « non_precise », la fiche citant le mot (unité 24).
- Nouvelles fiches : dans la **dernière partie** du bāb, avant le commentaire `/* FIN-UNITE-<n> */` et la ligne finale `]);` ; si la partie dépasserait 200 Ko, ou s'il faudrait recopier une partie longue (décision n° 12), créer la partie suivante et l'ajouter au manifeste. Le tri d'affichage est fait par B0. En-tête : ajouter la ligne de l'unité. Vérifier la taille : `wc -c`.
- Glossaire : chaque terme nouveau, vocalisé, avec transcription (a/i/ou, â/î/oû, ' hamza, ʿ ʿayn) et définition, à la fin de `data/glossaire-p2.js` (avant `/* FIN-GLOSSAIRE */`). Avant d'ajouter un terme, vérifier qu'il n'est ni dans `glossaire.js` (v1.26, figé) ni dans `glossaire-p2.js`.
- Synthèse de faṣl : `{ id: "tah-01-01-syn", type: "synthese", kitab, bab, fasl, titre, quiz }` avec 5 à 10 questions (modèles : `int-01-01-syn`, `tah-01-01-syn`, `tah-01-02-syn`). B2 l'affiche en fin de faṣl automatiquement ; B3 construit le tableau récapitulatif à partir des fiches du faṣl ; pas d'entrée dans `plan.js`. Chaque réponse renvoie à la fiche qui la fonde (« Voir la fiche 31. »).
- Rapport de vérification par unité : `docs/verifications/tah-01-unite<N>.md` (modèles : `tah-01-unite7.md` ; avec audit : `tah-01-unite22.md`, `tah-01-unite24.md`). Ligne au `docs/changelog-2.md`.

---

## 5. Contrôles avant livraison

Le site n'existe pas dans un nouveau conteneur. `project_read` renvoie le contenu dans la réponse, sans fichier local (2026-11-06 et 2026-11-07). Pour écrire dans le Projet, utiliser `project_write` avec `local_path`. Attention : dans le conteneur, `~` désigne `/root`, alors que l'outil Write écrit dans le dossier de travail (`/home/claude`) ; travailler en chemins absolus sous `/home/claude/site`. Les outils `frags.py`, `fh.py` et `verif.js` sont courts : les recopier depuis le Projet en début de séance.

- Les fichiers de données qu'on modifie sont reconstruits en entier depuis le Projet (la dernière partie `tah-01-p<n>.js`, `glossaire-p2.js`, `plan.js` s'il change, `manifeste.js` si une partie est créée).
- Pour le contrôle de rendu, il suffit du socle (`index.html`, `js/socle.js`), de B1, B3 et B5, des fichiers de glossaire, des parties de leçons concernées et d'un plan réduit au faṣl contrôlé ; ces copies de contrôle **ne sont jamais renvoyées au Projet** (en-tête « COPIE DE CONTRÔLE »).
- Les blocs B2, B4, B6 à B8 et `int-01.js` ne changent pas d'une unité à l'autre.

Puis :

1. `node --check` sur chaque fichier `.js` modifié.
2. Contrôle des citations par empreintes (§3) : tous les fragments arabes cités doivent se retrouver dans les pages lues.
3. `python3 docs/outils/controle_site.py <dossier du site>` si le code a pu être recopié. Toujours : `node docs/outils/verif.js data/glossaire-p2.js <parties modifiées>`.
4. Positions des quiz : int-01.js A 32 | B 30 | C 29 | D 30 ; tah-01-p1 à -p4 ensemble A 69 | B 68 | C 69 | D 69 ; p5 A 13 | B 15 | C 15 | D 14 ; p6 A 12 | B 13 | C 13 | D 13 ; p7 A 17 | B 17 | C 17 | D 17 ; p8 A 13 | B 13 | C 13 | D 13 ; p9 A 12 | B 12 | C 12 | D 12 ; p10 (unité 22) A 6 | B 6 | C 6 | D 6 ; p11 (unités 23–24) A 12 | B 12 | C 12 | D 12 ; p12 (unité 25) A 6 | B 6 | C 6 | D 6 ; tout le cours A 192 | B 192 | C 192 | D 192.
5. Écrire les fichiers modifiés dans le Projet (`project_write`, même chemin `site/...`), puis envoyer à l'utilisateur une archive des fichiers modifiés.

---

## 6. Points ouverts

- `data/plan.js` : titres arabes de tah-01-03-19 et -30 alignés (v1.18, 2026-11-08) ; fait.
- `docs/contrat.md` : glossaire sur plusieurs fichiers mentionné (v1.15, 2026-11-08) ; fait.
- Contrôle de rendu (`controle_site.py`) : fait le 2026-11-08 sur le dépôt complet (lot 4) ; fait.
- tah-01-03-30 : al-Dasūqī attribue à « ح » l'avis qu'en l'absence d'indice on lave les deux vêtements ou l'un (« خِلَافًا لِمَا فِي ح ») ; passage non trouvé dans Mawāhib p. 160–162 : le chercher si l'on relit cette partie de Mawāhib.
- `docs/sources/anomalies-textes.md` (figé) : le n° 43 est « Confirmé » dans sa ligne mais compté parmi les « Corrigé » au bilan (si la ligne fait foi : 58 « Corrigé » et 5 « Confirmé » au lieu de 59 et 4 ; vérifier d'abord dans `campagne-corrections.md` lequel des deux est juste). Écart présent dans le Projet, recopié tel quel au lot 5 ; à corriger lors de la réunion avec `anomalies-textes-2.md` (et à répercuter sur le total « Corrigé » du bilan d'ensemble).
- N° 166 (« بَقَاءِ » pour « نَقَاءِ » probable, auteur d'al-Jamʿ) et n° 143, 147 : à reprendre si un témoin apparaît.
- Al-Ḥaṭṭāb attribue parfois à Mālik une réponse qu'al-Bayān donne à Ibn al-Qāsim (n° 71) : vérifier dans al-Bayān les citations de l'ʿUtbiyya quand c'est possible.
- 60 anomalies non résolues (liste dans `docs/sources/anomalies-textes-2.md`) ; à reprendre si un nouveau témoin apparaît.
- tah-01-02-54c : remède externe avec une impureté autre que le vin — divergence non tranchée dans les pages croisées ; à compléter si un passage ultérieur d'al-Dardīr la tranche (bāb de la boisson).
- tah-01-08-22 : le Mukhtaṣar seul porte « تَيَمُّمِهِ أَوْ مَسْحِهِ », Mawāhib « تَيَمُّمِهِ وَمَسْحِهِ » ; à examiner en rédigeant cette masʾala.
- int-01-01-03c : divergence sur la date de décès d'Ibn Rushd placée dans `divergences` (v1.6, 2026-11-08) ; la date de 530 de 21604, p. 21, est d'al-Dasūqī (Ḥāshiya), non d'al-Dardīr. Fait. Leçon : sur une page de 21604, vérifier qu'une citation est avant ou après « ـ[حاشية الدسوقي] » avant de l'attribuer.
- Module 0 : jamais croisé fiche par fiche avec al-Dardīr ; croisement complet possible si l'utilisateur le demande.
- tah-01-01-09 : le passage de *Mawāhib* où al-Ḥaṭṭāb assimile le goudron tannant à la corde du puits n'a pas été localisé.
- tah-01-03-34 : « لَا سِيَّمَا عَلَى مَا تَقَدَّمَ عَنْ ابْنِ رَاشِدٍ » (eau de lavage changée par la crasse) : passage d'Ibn Rāshid non trouvé dans Mawāhib p. 140–163 ; à chercher plus haut (peut-être dans le faṣl tah-01-01, eau changée).
- Proposé, non demandé : faire chercher B7 (Recherche) aussi dans le champ `nass`.
- Instructions du Projet : elles disent encore que l'utilisateur colle les textes ; la décision n° 1 ci-dessus prévaut.
