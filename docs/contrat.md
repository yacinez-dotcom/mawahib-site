# Contrat entre blocs — v1.15

Ce document fait foi pour toute interaction entre blocs. Il est mis à jour à chaque livraison qui ajoute ou modifie un événement, une API du socle ou un format de données.

## 1. Règles (rappel des instructions du projet, §6.2)

1. Chaque bloc expose un seul objet global : `App.blocks.<Nom>`, avec une méthode `init()`.
2. Les blocs communiquent uniquement par le bus (`App.bus`) et le registre de données (`App.data`, lecture seule).
3. Un bloc ne modifie jamais le DOM, le CSS ou l'état interne d'un autre bloc.
4. Le CSS de chaque bloc est préfixé par son identifiant (`.b1-…`, `.b3-…`). Seules les variables de `css/socle.css` sont partagées.
5. Chaque fichier commence par un en-tête : `/* Bloc Bx — Nom — vX.Y — dépendances : … — événements émis/écoutés : … */`.

## 2. Démarrage

1. `index.html` charge `js/socle.js`, puis `data/manifeste.js`.
2. Le socle charge, dans l'ordre, chaque fichier listé par le manifeste.
3. Il contrôle la cohérence des données (fiches absentes du plan…), puis **verrouille le registre** : toute écriture ultérieure est refusée et signalée.
4. Il charge les blocs B1 à B8 dont le fichier existe (un fichier absent est signalé « pas encore construit », sans erreur), puis la feuille CSS de chacun.
5. Il appelle `init()` de chaque bloc, dans l'ordre B1 → B8.
6. Il émet `app:pret`.

**Règle d'initialisation :** pendant `init()`, un bloc s'abonne aux événements et prépare son affichage, mais n'émet aucun événement destiné aux autres blocs (certains ne sont pas encore initialisés). Les émissions initiales se font à réception de `app:pret`. Seuls les événements écoutés par le socle (`vue:activer`, `theme:appliquer`, `arabe:echelle`) peuvent être émis pendant `init()`.

## 3. API du socle

| API | Rôle |
|---|---|
| `App.version` | Version du socle |
| `App.debug` | `true` si l'URL contient `?debug` (journal du bus dans la console) |
| `App.blocks` | Chaque bloc s'y enregistre : `App.blocks.<Nom> = { init() {…} }` |
| `App.bus.on(evt, fn)` | Abonnement ; renvoie une fonction de désabonnement |
| `App.bus.off(evt, fn)` | Désabonnement |
| `App.bus.emit(evt, data)` | Émission ; une erreur dans un écouteur est isolée (journalisée, sans bloquer les autres) |
| `App.emplacement(bloc, zone)` | Renvoie le conteneur réservé au bloc dans une zone fixe : `outils` (en-tête), `lateral` (colonne de gauche), `pied`. Le bloc est seul maître de ce conteneur. |
| `App.vue(bloc, nom)` | Renvoie une section réservée au bloc dans la zone principale (masquée par défaut). Un nom de vue appartient à un seul bloc. `accueil` est réservé au socle. |
| `App.vueActive()` | Nom de la vue affichée |
| `App.blocs()` | État de chargement des blocs : `[{ id, nom, etat, detail }]` |

Noms de blocs attendus dans `App.blocks` : `Routeur` (B1), `Plan` (B2), `Fiche` (B3), `Glossaire` (B4), `Quiz` (B5), `Progression` (B6), `Recherche` (B7), `Theme` (B8).

Identifiants de bloc pour `App.emplacement` et `App.vue` : `b1` à `b8`.

### Registre `App.data`

**Lecture (tous les blocs)**

| Méthode | Renvoie |
|---|---|
| `plan()` | Le plan (objet gelé) ou `null` |
| `fiche(id)` | La fiche (objet gelé) ou `null` |
| `fiches({ kitab, bab, fasl, type })` | Fiches triées (ordre des kutub du plan, puis bāb, faṣl, `ordre` ; la synthèse en dernier). `type` : `"masala"` (toute fiche de contenu : masʾala **et** terme), `"terme"` (fiches « terme » seules) ou `"synthese"` |
| `termes()` | Tous les termes du glossaire |
| `terme(ar)` | Un terme par son écriture arabe exacte, ou `null` |
| `anomalies({ id, niveau })` | Anomalies relevées au chargement (`niveau` : `erreur` ou `avertissement`) |
| `etat()` | Compteurs : fiches, synthèses, termes, kutub, erreurs, avertissements, fichiers chargés |

**Écriture (fichiers de `data/` uniquement, pendant le chargement)**

| Méthode | Appelée par |
|---|---|
| `manifeste([chemins])` | `data/manifeste.js` |
| `definirPlan(plan)` | `data/plan.js` |
| `ajouterFiches([fiches])` | `data/lecons/<kitab>/<kitab>-<bab>.js` (ou une de ses parties `-p<n>.js`) |
| `ajouterTermes([termes])` | `data/glossaire.js` (ou une de ses suites, `data/glossaire-p<n>.js`) |

## 4. Événements

| Événement | Émis par | Écouté par | Charge utile | Statut |
|---|---|---|---|---|
| `app:pret` | B0 | tous | `{ version, blocs: [{id, nom, etat, detail}], donnees: {fiches, syntheses, termes, kutub, erreurs, avertissements} }` | actif (B0 v1.0) |
| `vue:activer` | le bloc propriétaire d'une vue | B0 | `{ vue: "nom" }` | actif (B0 v1.0) |
| `vue:changee` | B0 | tous | `{ vue, precedente }` | actif (B0 v1.0) |
| `route:change` | B1 | B0 (affiche l'accueil si `nom === "accueil"`), autres blocs | `{ nom, params, hash }` — voir §4 bis | actif (B1 v1.0) |
| `fiche:affichee` | B3 | B5 (quiz), B6 (fiches lues), B4 (infobulles) | `{ id, type: "masala" \| "synthese", emplacementQuiz }` — voir §4 ter | actif (B3 v1.0) |
| `quiz:termine` | B5 | B6 (scores) | `{ id, type: "masala" \| "synthese", score, total }` — voir §4 quinquies | actif (B5 v1.0) |
| `theme:appliquer` | B8 | B0 | `{ theme: "clair" \| "sombre" \| "auto" }` | actif (B8 v1.0) |
| `arabe:echelle` | B8 | B0 | `{ echelle: nombre entre 0.8 et 1.8 }` | actif (B8 v1.0) |

Les charges utiles sont en lecture seule : un écouteur ne les modifie pas.

## 4 bis. Routes (B1)

B1 émet `route:change` une première fois à réception de `app:pret`, puis à chaque changement d'adresse (liens, boutons Précédent / Suivant, saisie directe).

| Adresse | `nom` | `params` | Bloc qui affiche la page |
|---|---|---|---|
| `#/` (ou vide, ou `#/accueil`) | `accueil` | `{}` | B0 |
| `#/lecon/<id>` | `lecon` | `{ id }` | B3 |
| `#/glossaire` · `#/glossaire/<terme>` | `glossaire` | `{}` · `{ terme }` | B4 |
| `#/recherche` · `#/recherche/<texte>` | `recherche` | `{}` · `{ q }` | B7 |
| `#/progression` | `progression` | `{}` | B6 |
| toute autre adresse | `introuvable` | `{ raison: "inconnue" \| "mal_formee", demande }` | B1 |

- Les segments sont décodés (`decodeURIComponent`) : `params` contient du texte lisible, y compris de l'arabe. Pour construire un lien : `'#/lecon/' + encodeURIComponent(id)`.
- `hash` est l'adresse brute (`location.hash`, ou `#/` si vide).
- B1 ne vérifie pas qu'une fiche existe : pour `#/lecon/<id>` inconnu, c'est B3 qui affiche « fiche introuvable ».
- B1 possède la vue `introuvable`. Il l'affiche pour une adresse inconnue ou mal formée, et pour une route valide dont le bloc d'affichage n'est pas actif (« Page pas encore disponible »).
- **Naviguer** depuis un bloc : un lien `<a href="#/…">`, ou `location.hash = '#/…'` pour une navigation par programme. Aucun appel direct à B1.
- Le bloc qui affiche une route émet `vue:activer` pour sa propre vue en réponse à `route:change`.

## 4 ter. Affichage d'une fiche (B3)

- B3 possède la vue `fiche`. Sur `route:change` de nom `lecon`, il affiche la fiche (ou « Fiche introuvable »), émet `vue:activer { vue: "fiche" }`, place le focus sur le titre, puis émet `fiche:affichee` — uniquement si la fiche existe et a pu être affichée.
- **`emplacementQuiz`** : conteneur vide, situé dans la fiche, **confié à B5** jusqu'au prochain `fiche:affichee` (B3 le remplace alors par un nouveau conteneur). B5 en est seul maître ; B3 n'y écrit rien. Tant que B5 n'est pas actif, B3 affiche à côté un message d'attente (« n questions sont prévues »).
- **Termes** : dans les textes de la fiche, chaque occurrence d'un terme de `termes[].ar` **formant un mot entier** (borné par un espace, une ponctuation ou le début / la fin du texte) est rendue `<span class="b3-terme" data-terme="…">`, à l'intérieur du conteneur arabe de la phrase (B3 v1.3). Un terme inclus dans un mot plus long (ex. قَوْل dans وَبِالْقَوْلِ) n'est pas marqué. Depuis B3 v1.2, l'infobulle native (`title` = translittération — définition) n'est posée **que si B4 n'est pas actif**, pour éviter la double infobulle. La section « Vocabulaire » porte aussi `data-terme`. **Point d'accroche de B4** : B4 peut écouter les survols / focus sur `[data-terme]` (délégation d'événements) et afficher sa propre infobulle dans son propre élément, sans modifier le DOM de B3.
- Toute phrase arabe incluse dans un texte français est rendue dans **un seul** conteneur isolé (`<span class="b3-ar-inline" lang="ar" dir="rtl">`), termes marqués compris, pour garantir l'ordre des mots (B3 v1.3).
- Les textes des données sont insérés comme texte brut : aucune balise HTML n'est interprétée. Une ligne vide sépare deux paragraphes ; un saut de ligne simple donne un retour à la ligne.
- Navigation « fiche précédente / suivante » dans l'ordre de `App.data.fiches()`.
- **Fiche « terme »** (B3 v1.2) : surtitre « Terme technique — n », encadré « Règle de lecture » (champ `regle_pratique`), ni qualification ni muʿtamad. Synthèse d'un faṣl composé uniquement de termes : colonnes « Terme » et « Règle de lecture », sans colonne « Statut ». `fiche:affichee` émet `type: "masala"` pour une fiche « terme » (fiche de contenu) : le contrat de l'événement est inchangé.
- En bas de fiche, B3 affiche les anomalies relevées par le socle pour cette fiche (« Contrôle technique »), s'il y en a.

## 4 quater. Glossaire (B4)

- B4 possède la vue `glossaire`, un emplacement dans `outils` (lien « Glossaire », marqué `aria-current="page"` sur la route glossaire) et un emplacement dans `pied` (élément de l'infobulle, positionné en `fixed`).
- Contenu : les termes de `data/glossaire.js`, **complétés par les termes des fiches absents du glossaire** (définition reprise de la fiche ; avertissement dans la console pour compléter `data/glossaire.js`). Classement alphabétique arabe, voyelles et article `ال` ignorés, regroupé par lettre. Pour chaque terme : les fiches qui l'emploient.
- `#/glossaire/<terme>` : le terme est retrouvé par écriture exacte, puis sans voyelles, puis par transcription ; il est mis en évidence. S'il est absent, un message l'indique.
- Infobulle : délégation d'événements sur `document` pour les éléments `[data-terme]` situés dans la vue `fiche` (survol, clic / appui). Masquée par Échap, clic ailleurs, défilement ou changement de route. Définition : glossaire, sinon termes de la fiche affichée (suivie par `fiche:affichee`).
- Aucun nouvel événement.

## 4 quinquies. Quiz (B5)

- B5 écrit uniquement dans le conteneur `emplacementQuiz` reçu avec `fiche:affichee` (fiche de masʾala ou synthèse). Un nouvel affichage de fiche donne un quiz neuf.
- Un clic sur un choix verrouille la question (`aria-disabled`) et affiche la correction : verdict, bonne réponse (lettre) et `explication` de la fiche. L'ordre des choix est celui de la fiche ; `bonne` est l'indice compté à partir de 0.
- Une question aux données invalides est ignorée, avec un message renvoyant au contrôle technique de la fiche.
- Quand toutes les questions sont répondues : score et bouton « Recommencer ». **`quiz:termine { id, type, score, total }`** est émis à chaque quiz terminé (y compris après « Recommencer ») ; `total` ne compte que les questions valides.

## 4 sexies. Progression (B6)

- Stockage : `localStorage`, clé **`mawahib.progression.v1`**, format `{ version: 1, fiches: { <id>: { premiere, derniere, vues } }, quiz: { <id>: { meilleur: {score, total}, dernier: {score, total, date}, tentatives } } }`. Seul B6 lit et écrit cette clé. Toute lecture / écriture est protégée par try/catch ; données illisibles → ignorées avec message ; stockage indisponible → progression gardée en mémoire pour la visite, avec message.
- Une fiche est « consultée » dès qu'elle a été affichée (`fiche:affichee`). Un quiz est enregistré à chaque `quiz:termine` (dernier score, meilleur score en proportion, nombre de tentatives).
- B6 possède la vue `progression` (résumé, reprise, détail par faṣl, effacement en deux temps) et un emplacement dans `outils` (lien « Progression » + compteur fiches consultées / publiées ; icône seule sur petit écran).
- Synchronisation entre onglets par l'événement `storage` du navigateur.
- Aucun nouvel événement.

## 4 septies. Recherche (B7)

- Index construit au démarrage à partir de `App.data.fiches()` (tous les champs textuels du gabarit, **hors quiz**) et des termes (glossaire + termes des fiches). Les synthèses sont indexées par leur titre.
- Normalisation : minuscules, accents latins et signes ʿ / ʾ / apostrophes supprimés ; arabe sans voyelles ni tatweel, alif unifiés, ى → ي, ة → ه.
- Tous les mots de la requête doivent être présents (ET). Classement : poids du champ (titre, règle pratique, vocabulaire, matn…), bonus en début de mot, puis ordre du cours. 50 résultats affichés au plus. Extrait pris dans le champ qui contient le plus de mots de la requête.
- B7 possède la vue `recherche` et un emplacement dans `outils` (icône + « Rechercher », icône seule sur petit écran). Pendant la saisie, l'adresse devient `#/recherche/<texte>` via `history.replaceState` (sans `route:change`), ce qui permet le retour arrière et le partage du lien.
- Raccourci clavier `/` (hors champ de saisie) : ouvre la recherche.
- Aucun nouvel événement.

## 4 octies. Thème (B8)

- Réglages dans un emplacement de la zone `pied` : thème (Automatique / Clair / Sombre, boutons radio) et taille du texte arabe (80 % à 180 %, pas de 10 %, « Taille normale »).
- B8 n'applique aucun style lui-même : il émet `theme:appliquer` et `arabe:echelle`, que le socle traduit en `data-theme` et `--echelle-arabe` sur `<html>`. Émission dès `init()` (autorisée, le socle écoute déjà).
- Stockage : `localStorage`, clé **`mawahib.affichage.v1`**, format `{ theme, echelle }`. Lectures / écritures protégées par try/catch ; valeur illisible ou hors bornes → réglage par défaut. Synchronisation entre onglets par l'événement `storage`.
- Depuis B0 v1.1, le thème et la taille sont réappliqués par le socle avant le premier affichage (voir §6) : plus de passage bref par le thème du système.

## 5. Formats de données

### Manifeste — `data/manifeste.js`
```js
App.data.manifeste(['data/plan.js', 'data/glossaire.js', 'data/lecons/int/int-01.js', 'data/lecons/tah/tah-01-p1.js', /* … */ 'data/lecons/tah/tah-01-p4.js']);
```
Ajouter un bāb = créer son fichier dans `data/lecons/` et ajouter son chemin ici. Aucun fichier de code ne change.

**Taille des fichiers de données (v1.14, décision de l'utilisateur du 2026-11-04).** Le Projet ne renvoie qu'environ 262 Ko d'un fichier par lecture. Aucun fichier de `data/` ne dépasse donc **200 Ko**. Un bāb plus gros est découpé en parties, dans l'ordre des fiches et à des limites d'unité : `data/lecons/<kitab>/<kitab>-<bab>-p<n>.js` (ex. `tah-01-p1.js` … `tah-01-p4.js`), chacune listée dans le manifeste. Chaque partie appelle `App.data.ajouterFiches([...])` pour ses propres fiches ; le tri d'affichage est fait par le socle, l'ordre des parties n'a donc pas d'effet sur l'affichage. Une nouvelle unité s'ajoute à la dernière partie ; si celle-ci dépasserait alors 200 Ko, l'unité ouvre une nouvelle partie (et son chemin est ajouté au manifeste). Aucun fichier de code ne change.

### Plan — `data/plan.js`
```js
App.data.definirPlan({
  kutub: [ { id: "tah", titre, titre_ar, abwab: [
    { id: "tah-01", titre, titre_ar, fusul: [
      { id: "tah-01-01", titre, titre_ar, masail: [
        { id: "tah-01-01-01", titre, titre_ar }
      ] } ] } ] } ]
});
```
Chaque identifiant commence par celui de son parent. Le contenu est extrait du texte fourni (étape 2), jamais écrit de mémoire.

Affichage par B2 : une masʾala n'est cliquable que si une fiche du même `id` existe (sinon « à venir ») ; une fiche `verification: "a_revoir"` porte la mention « à revoir » ; la synthèse d'un faṣl n'a pas besoin d'entrée dans le plan : B2 l'affiche en fin de faṣl dès qu'une fiche `<id du faṣl>-syn` de `type: "synthese"` existe.

### Fiche — `data/lecons/<kitab>/<kitab>-<bab>.js` (ou `<kitab>-<bab>-p<n>.js`, voir le manifeste)
Schéma : gabarit de la section 5 des instructions du projet, sans champ ajouté ni retiré. Précisions appliquées par le contrôle du socle :
- `quiz[].bonne` : **indice compté à partir de 0** dans `choix` (`bonne: 1` = deuxième choix).
- `qualification.effet_si_omis` : texte, ou `null` si le passage ne le précise pas.
- `tarjih_hattab` : texte ou `null`.
- `ref.tome` : nombre ou texte ; `ref.pages` : texte (`"45-47"`).
- Fiche de masʾala : 3 à 5 questions de quiz.

### Fiche « terme » (Module 0 — langue technique du *Mukhtaṣar*)
Décision de l'utilisateur (2026-11-01) : un terme technique de Khalīl n'a pas de qualification juridique. La fiche « terme » reprend **le gabarit de masʾala** avec :
- `type: "terme"` en plus ;
- **sans** `qualification` ni `muatamad` (le contrôle les signale comme champs non prévus s'ils sont présents) ;
- `regle_pratique` = **règle de lecture** (« quand Khalīl écrit X, comprendre Y ») ; B3 l'affiche sous ce libellé ;
- les autres champs gardent leur sens : `matn` (phrase de Khalīl), `explication`, `aqwal` (avis des commentateurs sur le sens du terme), `tarjih_hattab`, `tanbihat`, `divergences`, `exemple`, `erreurs_frequentes`, `termes`, `quiz` (3 à 5), `ref`, `alertes`, `verification`.
- Identifiants : préfixe de kitāb **`int`** (introduction), ex. `int-01-01-03`.
- **Ajout propre à al-Ḥaṭṭāb, sans texte de Khalīl** (décision de l'utilisateur, 2026-11-02 ; B0 v1.3, B3 v1.4) : `matn: null` et champ facultatif **`nass`** = phrase arabe clé d'al-Ḥaṭṭāb, vocalisée telle que dans la source. B3 l'affiche sous le titre « Texte d'al-Ḥaṭṭāb », avec la mention qu'aucun texte de Khalīl ne correspond. Contrôle de B0 : `matn` texte non vide, ou `null` avec un `nass` non vide ; `matn` et `nass` ensemble → avertissement. `nass` n'est prévu que pour les fiches « terme ».
Les blocs B2, B4, B5, B6, B7 traitent ces fiches comme des fiches de contenu, sans modification. Limite connue : B7 v1.0 ne cherche pas dans `nass` (les autres champs de la fiche restent cherchables).

### Fiche de synthèse
`{ id: "tah-01-02-syn", type: "synthese", kitab, bab, fasl, titre, quiz }` + 5 à 10 questions. Champs facultatifs reconnus par B3 : `ref`, `alertes`, `verification`.
Le **tableau récapitulatif n'est pas saisi** : B3 le construit à l'affichage à partir des fiches du faṣl (titre, `regle_pratique`, `qualification.hukm`). Il reste ainsi toujours identique aux fiches.

### Glossaire — `data/glossaire.js`
```js
App.data.ajouterTermes([ { ar: "وُضُوء", translit: "woudoû'", def: "Ablutions mineures." } ]);
```
**Glossaire réparti sur plusieurs fichiers (v1.15, décision de l'utilisateur du 2026-11-07).** Le glossaire peut être continué dans des fichiers de suite `data/glossaire-p2.js`, `-p3.js`…, chacun listé dans le manifeste après `data/glossaire.js`. Chaque fichier appelle `App.data.ajouterTermes([...])` ; le socle accepte plusieurs appels, dans l'ordre du manifeste. Un terme déjà défini (même écriture arabe exacte) est signalé et ignoré : seule la première définition est conservée. Aucun fichier de code ne change (B0 v1.3, B4 v1.0 lisent `App.data.termes()` sans savoir de quel fichier vient un terme).

### Contrôle au chargement
Le socle vérifie chaque fiche (champs, valeurs admises, quiz, références, vocalisation présente, cohérence id / plan) et affiche les anomalies dans « État technique » sur la page d'accueil. Une fiche avec erreur reste chargée, pour ne rien masquer ; ses anomalies sont consultables par `App.data.anomalies({ id })`.

## 6. Variables CSS partagées (`css/socle.css`)

- Couleurs : `--c-fond`, `--c-surface`, `--c-surface-2`, `--c-texte`, `--c-texte-doux`, `--c-bordure`, `--c-accent`, `--c-accent-texte`, `--c-accent-doux`, `--c-lien`, `--c-regle-fond`, `--c-regle-bord`, `--c-alerte-fond`, `--c-alerte-texte`, `--c-alerte-bord`, `--c-erreur-fond`, `--c-erreur-texte`, `--c-erreur-bord`, `--c-succes`, `--c-focus`, `--c-voile`
- Polices : `--police-texte`, `--police-ui`, `--police-arabe`
- Tailles : `--taille-base`, `--taille-petite`, `--taille-arabe` (suit `--echelle-arabe`), `--interligne`, `--interligne-arabe`
- Espacements : `--espace-1` à `--espace-6`, `--gouttiere`
- Formes : `--rayon`, `--rayon-petit`, `--ombre`
- Mise en page : `--largeur-lecture`, `--largeur-lateral`, `--hauteur-entete`, `--duree`

Le thème sombre suit la préférence du système, ou `data-theme="clair" | "sombre"` sur `<html>` (posé par le socle sur l'événement `theme:appliquer`). Le socle mémorise le dernier thème et la dernière échelle d'arabe appliqués (clé `localStorage` **`mawahib.socle.affichage`**, propre au socle) ; un court script dans `<head>` les réapplique avant le premier affichage, ce qui évite le passage bref par le thème du système. Tout élément `lang="ar"` reçoit `--police-arabe` ; la taille reste au choix du bloc (`--taille-arabe` recommandé).
