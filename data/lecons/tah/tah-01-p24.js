/* Données — Kitāb al-Ṭahāra, bāb 01 (tah-01) : « بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ » — partie 24 — v10.2
   Source : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1 (shamela.ws/book/569).
   Croisement : al-Sharḥ al-kabīr d'al-Dardīr et Ḥāshiyat al-Dasūqī (shamela.ws/book/21604), tome 1.
   Cette partie : fin du faṣl tah-01-06 (annulatifs des ablutions), à partir de tah-01-06-20a (unité 50), puis faṣl tah-01-07 (le ghousl) — t. 1, p. 303 et suivantes.
   v10.0 : unité 50 — tah-01-06-20a, -20b, -20c, -21a, -21b, -22a, -22b et synthèse tah-01-06-syn (Mawāhib, t. 1, p. 303–305 ;
          al-Dardīr / al-Dasūqī, t. 1, p. 125–126) (2026-11-14) ; nouvelle partie, tah-01-p23.js (≈ 141 Ko) étant figée ;
          20a : début du segment absent du « ص » de Mawāhib ; 20c, 21b, 22b : fins de segment absentes du « ص »,
          rédigées d'après al-Dardīr / al-Dasūqī ; anomalies n° 366 à 382 ; faṣl tah-01-06 terminé.
   v10.1 : unité 51 — début du faṣl tah-01-07 (le ghousl) : tah-01-07-01, -02, -03, -04, -04b, -05, -06 (Mawāhib, t. 1, p. 305–308 ;
          al-Dardīr / al-Dasūqī, t. 1, p. 126–129) (2026-11-14) ; 04b : segment absent du « ص » de Mawāhib ;
          matn de 04 et 06 complétés, 06 « وَبِمَغِيبِ » ; anomalies n° 383 à 394.
   v10.2 : correction de trois quiz de l'unité 51, dont la bonne réponse désignait un mauvais choix : 05 (question 3), 06 (questions 1 et 2) ;
          choix réordonnés, positions des bonnes réponses inchangées (2026-11-14, unité 52).
   Bāb découpé en parties de moins de 200 Ko ;
   historique des versions : tah-01-p1.js (jusqu'à v2.5) puis l'en-tête de chaque partie. */
App.data.ajouterFiches([
  /* ================================================================== */
  /* Unité 50 — tah-01-06-20a à -22b et synthèse du faṣl */
  /* Mawāhib, t. 1, p. 303–305 (Shamela 569/302–304) ; al-Dardīr / al-Dasūqī, t. 1, p. 125–126 (Shamela 21604/124–125) */
  {
    id: "tah-01-06-20a",
    kitab: "tah", bab: "01", fasl: "06", ordre: 20,
    titre: "Ce que le ḥadath interdit : la prière, le ṭawâf, toucher le Coran",
    titre_ar: "وَمَنَعَ حَدَثٌ صَلَاةً وَطَوَافًا وَمَسَّ مُصْحَفٍ وَإِنْ بِقَضِيبٍ",
    objectif: "Savoir ce que la personne en état de ḥadath ne peut pas faire, et jusqu'où va l'interdiction de toucher le muṣḥaf.",
    matn: "وَمَنَعَ حَدَثٌ صَلَاةً وَطَوَافًا وَمَسَّ مُصْحَفٍ وَإِنْ بِقَضِيبٍ",
    regle_pratique: "Celui qui n'a pas ses ablutions ne peut ni prier (aucune prière, pas même la prosternation de récitation), ni faire le ṭawâf, ni toucher un exemplaire du Coran écrit en arabe : ni l'écrit, ni les marges, ni la reliure, pas même avec un bâton ; il peut en revanche y lire si quelqu'un d'autre lui tourne les pages.",
    qualification: {
      hukm: "haram",
      nature: "shart",
      effet_si_omis: "La prière et le ṭawâf faits sans ablutions ne sont pas valables (al-Kharashī : « لَا يَجْزِي إلَّا بِوُضُوءٍ ») ; toucher le muṣḥaf sans ablutions est interdit."
    },
    explication: "Al-Ḥaṭṭāb ne commente pas le début du segment : le « ص » de Mawāhib commence à « وَمَسُّ مُصْحَفٍ » (voir les alertes). Pour la prière et le ṭawâf, la fiche suit al-Dardīr, al-Dasūqī et al-Kharashī.\n\nLe ḥadath visé ici est, selon al-Dardīr, « أَيْ الْوَصْفُ الْقَائِمُ بِالشَّخْصِ » : l'état qui empêche la prière, qu'il vienne d'un ḥadath mineur ou majeur (« أَصْغَرُ وَكَذَا أَكْبَرُ وَسَيَأْتِي »). Il interdit d'abord la prière, « بِجَمِيعِ أَنْوَاعِهَا وَمِنْهَا سُجُودُ التِّلَاوَةِ » ; al-Dasūqī ajoute la prière funéraire : « أَيْ وَكَذَا الصَّلَاةُ عَلَى الْجِنَازَةِ ». Il interdit ensuite le ṭawâf (طَوَاف) ; al-Kharashī : « يَعْنِي أَنَّ الطَّوَافَ وَلَوْ نَفْلًا … لَا يَجْزِي إلَّا بِوُضُوءٍ ».\n\nIl interdit enfin de toucher le muṣḥaf. Al-Ḥaṭṭāb : « يَعْنِي أَنَّ الْمُحْدِثَ يُمْنَعُ مِنْ مَسِّ الْمُصْحَفِ، هَذَا مَذْهَبُ الْجُمْهُورِ خِلَافًا لِلظَّاهِرِيَّةِ » ; il en donne pour preuve la lettre du Prophète ﷺ à ʿAmr b. Ḥazm, rapportée dans le Muwaṭṭaʾ : « أَنْ لَا يَمَسَّ الْقُرْآنَ إلَّا طَاهِرًا ». L'interdiction couvre la reliure, « وَيَحْرُمُ مَسُّ جِلْدِهِ », et, d'après at-Tawḍīḥ qu'il cite, « وَأَحْرَى طَرَفُ الْوَرَقِ الْمَكْتُوبِ وَمَا بَيْنَ الْأَسْطُرِ مِنْ الْبَيَاضِ » ; elle vaut même avec un objet tenu en main : « وَيَحْرُمُ مَسُّهُ وَلَوْ بِقَضِيبٍ ». Ibn ʿArafa rapporte d'Ibn Bukayr : « وَلَا يُقَلِّبُ وَرَقَهُ بِعُودٍ وَلَا بِغَيْرِهِ ».\n\nIbn Farḥūn (Mukhtaṣar al-Wāḍiḥa) précise ce qui reste permis : « يَجُوزُ لِغَيْرِ الْمُتَوَضِّئِ أَنْ يَقْرَأَ فِي الْمُصْحَفِ وَغَيْرِهِ يُقَلَّبُ لَهُ أَوْرَاقُهُ » ; mais « وَلَا يَجُوزُ مَسُّ جِلْدِ الْمُصْحَفِ », ni les marges et l'espace blanc entre les lignes, même avec une baguette. Il cite Ibn Ḥabīb : la règle vaut pour tout écrit du Coran, « وَسَوَاءٌ كَانَ مُصْحَفًا جَامِعًا أَوْ جُزْءًا أَوْ وَرَقَةً فِيهَا بَعْضُ سُورَةٍ أَوْ لَوْحًا أَوْ كَتِفًا مَكْتُوبَةً ».\n\nAl-Dardīr limite l'interdiction au muṣḥaf « كُتِبَ بِالْعَرَبِيِّ لَا بِالْعَجَمِيِّ » (voir la fiche 21a) et explique le قَضِيب : « أَيْ عُودٍ », un bâton. Al-Dasūqī : « وَأَوْلَى بِحَائِلٍ » (à plus forte raison à travers un écran).",
    aqwal: [
      { auteur: "Le grand nombre des savants (d'après al-Ḥaṭṭāb)", avis: "Celui qui n'a pas ses ablutions ne touche pas le muṣḥaf.", statut: "non_precise" },
      { auteur: "Les ẓâhirites (hors de l'école, d'après al-Ḥaṭṭāb)", avis: "Avis contraire à celui du grand nombre ; le passage ne le détaille pas.", statut: "non_precise" },
      { auteur: "Ibn Bukayr (d'après Ibn ʿArafa, cité par al-Ḥaṭṭāb)", avis: "On ne tourne pas les pages du muṣḥaf avec un bâton ni avec autre chose.", statut: "non_precise" },
      { auteur: "Ibn Farḥūn (Mukhtaṣar al-Wāḍiḥa, cité par al-Ḥaṭṭāb)", avis: "Celui qui n'a pas ses ablutions peut lire dans le muṣḥaf si on lui en tourne les pages, sans toucher la reliure, les marges ni l'espace entre les lignes.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb (cité par Ibn Farḥūn)", avis: "La règle vaut pour le muṣḥaf complet, une partie, une feuille portant une partie de sourate, une tablette ou une omoplate écrite.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le ḥadath interdit la prière, le ṭawâf et le contact du muṣḥaf écrit en arabe, « بَلْ (وَإِنْ) مَسَّهُ (بِقَضِيبٍ) » ; al-Dasūqī y joint la prière funéraire et le contact à travers un écran (« وَأَوْلَى بِحَائِلٍ »).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb présente l'interdiction de toucher le muṣḥaf comme l'avis du grand nombre et l'appuie sur la lettre à ʿAmr b. Ḥazm (Muwaṭṭaʾ).",
      "Il réunit at-Tawḍīḥ (reliure, marges, bâton), Ibn ʿArafa (Ibn Bukayr) et Ibn Farḥūn (lecture en se faisant tourner les pages), sans les opposer."
    ],
    divergences: [
      "Complément — la prière et le ṭawâf. Al-Ḥaṭṭāb ne commente pas ce début de segment. Al-Dardīr : « (صَلَاةً) بِجَمِيعِ أَنْوَاعِهَا وَمِنْهَا سُجُودُ التِّلَاوَةِ » ; al-Dasūqī : « فَيَحْرُمُ فِعْلُهُمَا مَعَ وُجُودِ الْحَدَثِ الْمَذْكُورِ » (la prosternation de récitation et la prière funéraire) ; al-Kharashī : « يَعْنِي أَنَّ الطَّوَافَ وَلَوْ نَفْلًا ».",
      "Concordance — ce que couvre l'interdiction. Al-Ḥaṭṭāb, d'après Ibn Farḥūn et Ibn Ḥabīb : « أَوْ لَوْحًا أَوْ كَتِفًا مَكْتُوبَةً ». Al-Dasūqī : « قَالَ ح نَقْلًا عَنْ ابْنِ حَبِيبٍ » (ح : Muḥammad al-Ḥaṭṭāb), avec la même liste, puis « وَلِجِلْدِ الْمُصْحَفِ قَبْلَ انْفِصَالِهِ مِنْهُ حُكْمُهُ وَأَحْرَى طَرَفُ الْمَكْتُوبِ وَمَا بَيْنَ الْأَسْطُرِ ».",
      "Complément — la reliure détachée. Al-Dasūqī limite la règle à la reliure « قَبْلَ انْفِصَالِهِ مِنْهُ » ; al-ʿAdawī, sur al-Kharashī, se demande ce qu'il en est une fois détachée : « هَلْ يَجُوزُ مَسُّهُ حِينَئِذٍ أَوْ لَا نَظَرًا لِمَا قَبْلَ الِانْفِصَالِ وَالظَّاهِرُ الْأَوَّلُ ». Al-Ḥaṭṭāb n'en parle pas.",
      "Concordance — avec un bâton. Al-Ḥaṭṭāb : « وَيَحْرُمُ مَسُّهُ وَلَوْ بِقَضِيبٍ » ; Ibn Bukayr (d'après Ibn ʿArafa) : on ne tourne pas les pages avec un bâton. Al-Dardīr : « بَلْ (وَإِنْ) مَسَّهُ (بِقَضِيبٍ) » ; al-Kharashī : « كَمَسِّهِ بِعُودٍ أَوْ تَقْلِيبِ أَوْرَاقِهِ بِهِ ».",
      "Point à comparer — lire en se faisant tourner les pages. Al-Ḥaṭṭāb rapporte d'Ibn Farḥūn : « يُقَلَّبُ لَهُ أَوْرَاقُهُ » (par un autre). Al-Dardīr et al-Dasūqī n'en parlent pas dans ces pages."
    ],
    exemple: "Un homme qui sort des toilettes veut relire une sourate dans le muṣḥaf posé sur la table : il ne le prend pas, ni à la main, ni par sa couverture, et ne tourne pas les pages avec un crayon ; il fait d'abord ses ablutions, ou demande à quelqu'un de lui tourner les pages (d'après Ibn Farḥūn).",
    erreurs_frequentes: [
      "Croire que seul le texte écrit est interdit : la reliure, les marges et l'espace entre les lignes le sont aussi.",
      "Croire qu'un bâton ou un crayon permet de tourner les pages sans ablutions.",
      "Oublier que la prosternation de récitation et la prière funéraire demandent aussi les ablutions."
    ],
    termes: [
      { ar: "طَوَاف", translit: "ṭawâf", def: "Les sept tours que l'on fait autour de la Kaʿba." },
      { ar: "قَضِيب", translit: "qaḍîb", def: "Baguette, bâton." }
    ],
    quiz: [
      { q: "Selon al-Dardīr, le ḥadath interdit la prière :",
        choix: ["Seulement obligatoire", "De toute sorte, y compris la prosternation de récitation", "Seulement en groupe", "Sauf la prière surérogatoire"],
        bonne: 1,
        explication: "« بِجَمِيعِ أَنْوَاعِهَا وَمِنْهَا سُجُودُ التِّلَاوَةِ »." },
      { q: "Toucher la reliure du muṣḥaf sans ablutions est :",
        choix: ["Permis", "Seulement déconseillé", "Permis si l'on ne touche pas l'écrit", "Interdit"],
        bonne: 3,
        explication: "« وَيَحْرُمُ مَسُّ جِلْدِهِ »." },
      { q: "Mise en situation : sans ablutions, vous voulez tourner les pages du muṣḥaf avec un crayon. D'après le texte :",
        choix: ["C'est interdit, comme le contact à la main", "C'est permis, car on ne le touche pas", "C'est permis pour une seule page", "C'est recommandé"],
        bonne: 0,
        explication: "« وَيَحْرُمُ مَسُّهُ وَلَوْ بِقَضِيبٍ » ; Ibn Bukayr : « وَلَا يُقَلِّبُ وَرَقَهُ بِعُودٍ وَلَا بِغَيْرِهِ »." },
      { q: "Sur quoi al-Ḥaṭṭāb appuie-t-il l'interdiction de toucher le muṣḥaf ?",
        choix: ["Sur un avis des ẓâhirites", "Sur l'analogie avec la prière", "Sur la lettre du Prophète ﷺ à ʿAmr b. Ḥazm", "Sur un consensus rapporté par Ibn Ḥabīb"],
        bonne: 2,
        explication: "« أَنْ لَا يَمَسَّ الْقُرْآنَ إلَّا طَاهِرًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "303" },
    alertes: [
      "Limite du texte : le « ص » de Mawāhib (569/302) commence à « وَمَسُّ مُصْحَفٍ » ; le début du segment, « وَمَنَعَ حَدَثٌ صَلَاةً وَطَوَافًا », que donnent le Mukhtaṣar seul (11355, p. 17), Ibn Ghāzī (14605, p. 38), al-Dardīr (21604/124) et al-Kharashī (91, p. 159), n'est pas commenté par al-Ḥaṭṭāb (569/302–304 relus) ; prière et ṭawâf rédigés d'après al-Dardīr / al-Dasūqī et al-Kharashī (n° 366).",
      "Corrigé (campagne de correction) : le « ص » vocalise وَمَسُّ (nominatif) ; Ibn Ghāzī (14605, p. 38), al-Dardīr (21604/124) et al-Kharashī (91, p. 159) ont وَمَسَّ, complément de مَنَعَ : matn corrigé (n° 367).",
      "Précisé (campagne de correction) : citation d'at-Tawḍīḥ, « وَأَحْرَى طَرَفُ الْوَرَقِ الْمَكْتُوبِ » (569/302) ; at-Tawḍīḥ (14442, p. 162) : « وأَحْرَى طُرَرُ المكتوبِ » ; al-Dasūqī (21604/124) et al-Kharashī (91, p. 159) : « وَأَحْرَى طَرَفُ الْمَكْتُوبِ » ; même sens (le bord, la marge de la page écrite) ; laissé selon Mawāhib (n° 368).",
      "Précisé (campagne de correction) : « قَالَ ابْنُ عَرَفَةَ الشَّيْخُ عَنْ ابْنِ بُكَيْرٍ » (569/302) ; Ibn ʿArafa (16968, p. 87) : « الشيخ عن أبي بكر ولا يقلب ورقه بعود أو غيره » ; variante du nom du rapporteur ; laissé selon Mawāhib (n° 369).",
      "Précisé (campagne de correction) : dans la citation d'Ibn Farḥūn, « الطُّرَةَ وَالْهَامِشَ » (569/302) : la marge, à lire avec shadda (الطُّرَّة) ; at-Tawḍīḥ (14442, p. 162) a le pluriel du même mot ; vocalisation seule ; passage non cité dans la fiche (n° 370).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 125 (Shamela 21604, page 124)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-20b",
    kitab: "tah", bab: "01", fasl: "06", ordre: 20,
    titre: "Écrire le Coran ; la nécessité ; le verset abrogé ; le linceul",
    titre_ar: "وَمِثْلُ الْمَسِّ وَالْحَمْلِ كَتْبُهُ",
    objectif: "Savoir si l'on peut écrire du Coran sans ablutions, et connaître les cas où l'on peut toucher le muṣḥaf malgré le ḥadath.",
    matn: "وَمَسَّ مُصْحَفٍ",
    regle_pratique: "Écrire le Coran sans ablutions est interdit comme le toucher, selon l'avis le plus fort (al-Dardīr), mais on peut écrire sans ablutions un verset dans une lettre ; celui qui craint que le muṣḥaf soit noyé, brûlé ou saisi par un non-musulman le prend même sans ablutions ; un verset dont la lettre a été abrogée peut être touché.",
    qualification: {
      hukm: "haram",
      nature: "autre",
      effet_si_omis: "Le passage ne précise pas de conséquence ; c'est un interdit, levé en cas de nécessité (noyade, feu, main d'un non-musulman)."
    },
    explication: "Écrire le Coran. Al-Ḥaṭṭāb cite al-Lakhmī : « وَالْحُكْمُ فِي كُتُبِ الْمُصْحَفِ كَالْحُكْمِ فِي مَسِّهِ » (le mot كُتُبِ est à lire كَتْبِ, l'écriture : voir les alertes). Puis Ibn Farḥūn, dans son commentaire d'Ibn al-Ḥājib : « وَاسْتَخَفَّ مَالِكٌ أَنْ يَكْتُبَ الْآيَةَ مِنْ الْقُرْآنِ فِي الْكِتَابِ عَلَى غَيْرِ وُضُوءٍ » et « وَلَا بَأْسَ لِلْجُنُبِ أَنْ يَكْتُبَ صَحِيفَةً فِيهَا الْبَسْمَلَةُ وَشَيْءٌ مِنْ الْقُرْآنِ وَالْمَوَاعِظِ ». Al-Dardīr tranche : « وَمِثْلُ الْمَسِّ وَالْحَمْلِ كَتْبُهُ فَلَا يَجُوزُ لِلْمُحْدِثِ عَلَى الرَّاجِحِ ». Pour le copiste, voir la fiche 22a.\n\nLa nécessité. Al-Ḥaṭṭāb rapporte d'al-Mashaddhālī, qui cite an-Nawawī : « لَوْ خَافَ عَلَى الْمُصْحَفِ غَرَقًا أَوْ حَرْقًا أَوْ يَدَ كَافِرٍ فَإِنَّهُ يَأْخُذُهُ وَإِنْ كَانَ مُحْدِثًا لِلضَّرُورَةِ », et « وَيُكْرَهُ كَتْبُ الْقُرْآنِ فِي حَائِطِ مَسْجِدٍ أَوْ غَيْرِهِ » ; il ajoute : « وَكَأَنَّهُ ارْتَضَاهُ عَلَى الْمَذْهَبِ » (al-Mashaddhālī semble l'avoir accepté pour l'école).\n\nLe verset abrogé. Ibn al-Ḥājib : « وَالْأَشْبَهُ جَوَازُ مَسِّ الْمُحْدِثِ لِلْمَنْسُوخِ لَفْظُهُ » ; ar-Rahūnī, dans son commentaire, rapporte qu'al-Āmidī tenait plutôt pour l'interdiction et donne raison au premier avis, car ce texte n'est plus du Coran récité ni du muṣḥaf. Al-Ḥaṭṭāb ajoute : « وَأَمَّا مَا نُسِخَ حُكْمُهُ دُونَ لَفْظِهِ فَلَهُ حُكْمُ مَا لَمْ يُنْسَخْ بِإِجْمَاعٍ ».\n\nLe Coran dans le linceul. Al-Ḥaṭṭāb rapporte d'al-Burzulī la réponse d'Ibn Ziyāda à propos de celui qui demande par testament qu'on mette un Coran dans ses linceuls : « لَا أَرَى تَنْفِيذَ وَصِيَّتِهِ وَتُجَلُّ أَسْمَاءُ اللَّهِ تَعَالَى عَنْ الصَّدِيدِ وَالنَّجَاسَةِ » ; si c'est déjà fait, « فَإِنْ فَاتَ فَأَمْرُ الْأَدْعِيَةِ خَفِيفٌ », mais « وَالْخَتْمَةُ يَجِبُ أَنْ تُنْبَشَ وَتُخْرَجَ إذَا طُمِعَ فِي الْمَنْفَعَةِ بِهَا », à condition de ne pas découvrir ni abîmer le corps du mort. La suite, introduite par « قُلْت », rapporte des usages de Tunis et d'al-Andalus et juge proche de la vérité qu'on enterre quelqu'un avec une bague portant la profession de foi : « وَهَذَا عِنْدِي قَرِيبٌ » ; son auteur n'est pas sûr (voir les alertes).",
    aqwal: [
      { auteur: "Al-Lakhmī (cité par al-Ḥaṭṭāb)", avis: "Écrire le muṣḥaf a la même règle que le toucher.", statut: "non_precise" },
      { auteur: "Mālik (d'après Ibn Farḥūn, cité par al-Ḥaṭṭāb)", avis: "Il a jugé léger d'écrire un verset dans une lettre sans ablutions ; le junub peut écrire une feuille portant la basmala, un peu de Coran et des exhortations.", statut: "non_precise" },
      { auteur: "An-Nawawī (cité par al-Mashaddhālī, rapporté par al-Ḥaṭṭāb)", avis: "Par nécessité (noyade, feu, main d'un non-musulman), on prend le muṣḥaf même sans ablutions ; écrire du Coran sur un mur est déconseillé.", statut: "non_precise" },
      { auteur: "Ibn al-Ḥājib (cité par al-Ḥaṭṭāb)", avis: "Le plus vraisemblable (« وَالْأَشْبَهُ ») : on peut toucher un verset dont la lettre est abrogée.", statut: "non_precise" },
      { auteur: "Al-Āmidī (d'après ar-Rahūnī, cité par al-Ḥaṭṭāb)", avis: "Le plus vraisemblable est l'interdiction.", statut: "non_precise" },
      { auteur: "Ibn Ziyāda (d'après al-Burzulī, cité par al-Ḥaṭṭāb)", avis: "On n'exécute pas le testament de mettre un Coran dans le linceul ; s'il est fait, on le retire s'il peut servir et si l'on ne craint pas pour le corps.", statut: "non_precise" }
    ],
    muatamad: "Écrire : confirmé par al-Dardīr, « فَلَا يَجُوزُ لِلْمُحْدِثِ عَلَى الرَّاجِحِ », contre تت (al-Dasūqī : « خِلَافًا لتت » ; sigle non défini dans la liste d'al-Dasūqī). Nécessité : confirmé par al-Dasūqī (« وَإِلَّا جَازَ لَهُ مَسُّهُ وَلَوْ كَانَ جُنُبًا »). Verset abrogé et linceul : non tranché (absents des pages d'al-Dardīr / al-Dasūqī lues).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb note qu'al-Mashaddhālī semble avoir accepté l'avis d'an-Nawawī pour l'école : « وَكَأَنَّهُ ارْتَضَاهُ عَلَى الْمَذْهَبِ ».",
      "Il ajoute qu'un texte dont seul le jugement est abrogé garde, par consensus, la règle du Coran.",
      "Il rapporte d'al-Burzulī une divergence sur le port d'un Coran complet comme amulette par celui qui n'est pas pur (voir la fiche 22b)."
    ],
    divergences: [
      "Divergence — écrire le Coran sans ablutions. Al-Ḥaṭṭāb rapporte d'al-Lakhmī l'assimilation au toucher, et d'Ibn Farḥūn la tolérance de Mālik pour un verset dans une lettre : « وَاسْتَخَفَّ مَالِكٌ أَنْ يَكْتُبَ الْآيَةَ ». Al-Dardīr : « فَلَا يَجُوزُ لِلْمُحْدِثِ عَلَى الرَّاجِحِ ». Al-Dasūqī : « أَيْ خِلَافًا لتت حَيْثُ أَجَازَ كَتْبَهُ لِلْمُحْدِثِ لِمَشَقَّةِ الْوُضُوءِ كُلَّ سَاعَةٍ » (تت : sigle non défini dans la liste d'al-Dasūqī). Al-Kharashī garde l'exception du verset : « وَكَتْبُهُ كَمَسِّهِ إلَّا الْآيَةَ فِي الْكِتَابِ ».",
      "Concordance — la nécessité. Al-Ḥaṭṭāb, d'après an-Nawawī : « فَإِنَّهُ يَأْخُذُهُ وَإِنْ كَانَ مُحْدِثًا لِلضَّرُورَةِ ». Al-Dasūqī : « مَا لَمْ يَخَفْ عَلَيْهِ الْغَرَقَ أَوْ الْحَرْقَ أَوْ اسْتِيلَاءَ يَدِ كَافِرٍ عَلَيْهِ وَإِلَّا جَازَ لَهُ مَسُّهُ وَلَوْ كَانَ جُنُبًا ». Al-Kharashī : « أَوْ حَرْقِهِ أَوْ يَدِ كَافِرٍ يُبِيحُ مَسَّهُ ».",
      "Concordance — le verset abrogé. Al-Ḥaṭṭāb, d'après Ibn al-Ḥājib et ar-Rahūnī : permis. Al-Kharashī : « غَيْرِ مَنْسُوخٍ لَفْظُهُ » et « وَأَمَّا مَا نُسِخَ حُكْمُهُ فَقَطْ فَكَغَيْرِهِ إجْمَاعًا » ; al-ʿAdawī : « وَأَمَّا الْمَنْسُوخُ لَفْظُهُ فَلَا يَحْرُمُ مَسُّهُ ».",
      "Complément — écrire pour soigner. Al-Dasūqī, d'après son maître al-ʿAdawī : « وَالظَّاهِرُ كَمَا قَالَ شَيْخُنَا جَوَازُ كَتْبِهِ لِلسُّخُونَةِ » (contre la fièvre), même si l'écrit doit ensuite être brûlé en fumigation, quand le remède passe par là. Al-Ḥaṭṭāb n'en parle pas."
    ],
    exemple: "Une étudiante sans ablutions rédige une lettre où elle cite un verset : al-Ḥaṭṭāb rapporte que Mālik l'a jugé léger. Mais si elle veut recopier des pages entières du Coran, al-Dardīr lui demande d'abord ses ablutions. Et si un incendie menace la bibliothèque, elle saisit le muṣḥaf sans attendre.",
    erreurs_frequentes: [
      "Croire qu'écrire le Coran n'a pas de règle parce qu'on ne le touche pas : selon l'avis le plus fort, c'est comme le toucher.",
      "Laisser brûler ou se noyer un muṣḥaf faute d'ablutions : la nécessité permet de le saisir.",
      "Confondre le verset dont la lettre est abrogée et celui dont seul le jugement l'est : le second garde la règle du Coran."
    ],
    termes: [
      { ar: "خَتْمَة", translit: "khatma", def: "Exemplaire complet du Coran." },
      { ar: "مَنْسُوخُ اللَّفْظ", translit: "mansoûkh al-lafẓ", def: "Passage dont la lettre a été abrogée : il ne fait plus partie du Coran récité ni du muṣḥaf." }
    ],
    quiz: [
      { q: "Selon al-Dardīr, écrire le Coran sans ablutions est :",
        choix: ["Permis", "Recommandé pour apprendre", "Interdit, selon l'avis le plus fort", "Seulement déconseillé"],
        bonne: 2,
        explication: "« وَمِثْلُ الْمَسِّ وَالْحَمْلِ كَتْبُهُ فَلَا يَجُوزُ لِلْمُحْدِثِ عَلَى الرَّاجِحِ »." },
      { q: "Mise en situation : sans ablutions, vous voyez un muṣḥaf tombé près d'un feu. D'après an-Nawawī, cité par al-Ḥaṭṭāb :",
        choix: ["Vous le prenez, car c'est une nécessité", "Vous allez d'abord faire vos ablutions", "Vous le poussez avec un bâton seulement", "Vous attendez qu'une personne pure le prenne"],
        bonne: 0,
        explication: "« لَوْ خَافَ عَلَى الْمُصْحَفِ غَرَقًا أَوْ حَرْقًا أَوْ يَدَ كَافِرٍ فَإِنَّهُ يَأْخُذُهُ وَإِنْ كَانَ مُحْدِثًا لِلضَّرُورَةِ »." },
      { q: "Un verset dont la lettre a été abrogée :",
        choix: ["A la règle du muṣḥaf", "Ne se lit pas", "Ne s'écrit pas", "Peut être touché sans ablutions (le plus vraisemblable, selon Ibn al-Ḥājib)"],
        bonne: 3,
        explication: "« وَالْأَشْبَهُ جَوَازُ مَسِّ الْمُحْدِثِ لِلْمَنْسُوخِ لَفْظُهُ »." },
      { q: "Selon la réponse d'Ibn Ziyāda (rapportée par al-Burzulī), le testament de mettre un Coran dans le linceul :",
        choix: ["S'exécute", "Ne s'exécute pas", "S'exécute seulement pour une partie", "S'exécute si l'héritier l'accepte"],
        bonne: 1,
        explication: "« لَا أَرَى تَنْفِيذَ وَصِيَّتِهِ وَتُجَلُّ أَسْمَاءُ اللَّهِ تَعَالَى عَنْ الصَّدِيدِ وَالنَّجَاسَةِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "303–304" },
    alertes: [
      "Corrigé (campagne de correction) : dans la citation d'al-Lakhmī, « وَالْحُكْمُ فِي كُتُبِ الْمُصْحَفِ » (569/302) : le sens (l'écriture du muṣḥaf, comparée à son contact) impose la lecture كَتْبِ ; même mot chez al-Dardīr (21604/124 : « كَتْبُهُ ») et al-Kharashī (91, p. 159 : « وَكَتْبُهُ كَمَسِّهِ ») (n° 371).",
      "Corrigé (campagne de correction) : dans la citation d'ar-Rahūnī, « كَالْأَخْبَارِ الْأُلْهِيَّةِ » (569/303) ; al-Kharashī (91, p. 159) : « كَالْأَخْبَارِ الْإِلَهِيَّةِ مِنْ الْأَحَادِيثِ » (les paroles divines rapportées dans les ḥadîth) ; passage non cité dans la fiche (n° 372).",
      "Non résolu : « قَالَ ابْنُ الْحَاجِبِ فِي مُخْتَصَرِهِ الْأَصْلِيِّ » (569/303) : le titre de l'ouvrage est douteux (un mukhtaṣar d'uṣûl, d'après le sujet et les auteurs cités) ; aucun témoin ; la fiche ne nomme que l’auteur, Ibn al-Ḥājib (n° 373).",
      "Non résolu : dans le récit d'al-Burzulī, « أَنْ تُجْعَلَ مَعَهُ إجَارَتُهُ » (569/303) : mot douteux, sans témoin ; passage non cité (n° 374).",
      "Précisé (campagne de correction) : le passage « قُلْت وَوَقَعَتْ هَذِهِ الْمَسْأَلَةُ بِتُونُسَ » … « وَهَذَا عِنْدِي قَرِيبٌ » (569/303) suit la réponse d'Ibn Ziyāda sans « انْتَهَى » ; il parle de « شَيْخُنَا » à Tunis : il semble d'al-Burzulī, non d'al-Ḥaṭṭāb ; rapporté de façon neutre, hors de `tarjih_hattab` (n° 375).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 125 (Shamela 21604, page 124)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-20c",
    kitab: "tah", bab: "01", fasl: "06", ordre: 20,
    titre: "Porter le muṣḥaf ; la pièce de monnaie",
    titre_ar: "وَحَمْلَهُ وَإِنْ بِعِلَاقَةٍ أَوْ وِسَادَةٍ إلَّا بِأَمْتِعَةٍ قُصِدَتْ وَإِنْ عَلَى كَافِرٍ لَا دِرْهَمٍ",
    objectif: "Savoir quand celui qui n'a pas ses ablutions peut porter un muṣḥaf, et pourquoi une pièce de monnaie portant du Coran ne pose pas de problème.",
    matn: "وَحَمْلَهُ وَإِنْ بِعِلَاقَةٍ أَوْ وِسَادَةٍ إلَّا بِأَمْتِعَةٍ قُصِدَتْ وَإِنْ عَلَى كَافِرٍ لَا دِرْهَمٍ",
    regle_pratique: "Sans ablutions, on ne porte pas le muṣḥaf, même suspendu à un cordon ou posé sur un coussin ; on peut le porter au milieu de bagages quand ce sont les bagages qu'on veut porter, même si c'est un non-musulman qui les porte ; on peut toucher et porter une pièce de monnaie où figure du Coran.",
    qualification: {
      hukm: "haram",
      nature: "autre",
      effet_si_omis: "Le passage ne précise pas de conséquence : c'est un interdit."
    },
    explication: "Al-Ḥaṭṭāb ne commente pas cette fin de segment : le « ص » suivant de Mawāhib est « وَتَفْسِيرٍ » (voir les alertes). La fiche suit al-Dardīr et al-Dasūqī, avec al-Kharashī.\n\nPorter. Le ḥadath interdit aussi de porter le muṣḥaf, même suspendu à un cordon (عِلَاقَة), sauf, dit al-Dardīr, « إنْ لَمْ يُجْعَلْ حِرْزًا وَإِلَّا جَازَ عَلَى أَحَدِ الْقَوْلَيْنِ » (voir la fiche 22b). Ou posé sur un coussin (وِسَادَة), mot « مُثَلَّثَةِ الْوَاوِ » (le wâw se lit avec l'une des trois voyelles) ; al-Kharashī : « وَهِيَ الْمُتْكَأَةُ » ; al-Dasūqī y range le pupitre sur lequel on le pose : « وَمَذْهَبُنَا وَسَطٌ وَهُوَ مَنْعُ حَمْلِهِ بِالْكُرْسِيِّ لَا مَسُّ الْكُرْسِيِّ ».\n\nLes bagages (أَمْتِعَة). On peut le porter « بِأَمْتِعَةٍ قُصِدَتْ », même si c'est un non-musulman qui les porte, « لِأَنَّ الْمَقْصُودَ مَا فِيهِ الْمُصْحَفُ مِنْ الْأَمْتِعَةِ ». Mais « أَمَّا إنْ قُصِدَا مَعًا وَأَوْلَى إنْ قُصِدَ الْمُصْحَفُ فَقَطْ بِالْحَمْلِ مُنِعَ ». Al-Dasūqī : l'interdiction quand les deux sont visés « هُوَ الْمُرْتَضَى » ; Ibn al-Ḥājib permettait ce cas.\n\nLa pièce de monnaie (دِرْهَم). Al-Dardīr : le ḥadath n'interdit pas de toucher et de porter un dirham « أَوْ دِينَارٍ فِيهِ قُرْآنٌ فَيَجُوزُ مَسُّهُ وَحَمْلُهُ لِلْمُحْدِثِ وَلَوْ أَكْبَرَ ». Al-Kharashī : « فَيَجُوزُ مَسُّهُ وَلَوْ لِكَافِرٍ ».",
    aqwal: [
      { auteur: "Avis retenu (« الْمُرْتَضَى », selon al-Dasūqī et al-Kharashī)", avis: "Porter le muṣḥaf est interdit dès qu'il est visé, seul ou avec les bagages.", statut: "non_precise" },
      { auteur: "Ibn al-Ḥājib (d'après al-Dasūqī et al-ʿAdawī)", avis: "Si le muṣḥaf et les bagages sont visés ensemble, on peut le porter ; l'interdiction ne vaut que si le muṣḥaf seul est visé.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr / al-Dasūqī : porter le muṣḥaf est interdit, sauf parmi des bagages visés pour eux-mêmes ; si les deux sont visés, l'interdiction « هُوَ الْمُرْتَضَى » (al-Dasūqī ; al-Kharashī : « فَيُمْنَعُ حَمْلُهُ حِينَئِذٍ عَلَى الْمُرْتَضَى ») ; la pièce de monnaie est permise, même au junub.",
    tarjih_hattab: null,
    tanbihat: [],
    divergences: [
      "Complément — le segment. Al-Ḥaṭṭāb ne le commente pas. Al-Dardīr : « (وَ) مَنَعَ (حَمْلَهُ وَإِنْ بِعِلَاقَةٍ) ».",
      "Point à comparer — le muṣḥaf et les bagages visés ensemble. Al-Dasūqī : « وَمُقَابِلُهُ مَا لِابْنِ الْحَاجِبِ مِنْ الْجَوَازِ حَيْثُ قُصِدَا مَعًا » ; al-ʿAdawī, sur al-Kharashī, donne la même opposition. At-Tawḍīḥ (Khalīl) : « وَلا بَاسَ بِحَمْلِ صُنْدُوقٍ أَوْ خُرْجٍ هُوَ فِيهِ مَا لَمْ يَكُنِ الْمَقْصُودُ حَمْلَهُ ». Al-Ḥaṭṭāb n'en parle pas.",
      "Complément — le pupitre. Al-Dasūqī : « وَقَدْ حَرَّمَ الشَّافِعِيَّةُ مَسَّ كُرْسِيِّهِ وَهُوَ عَلَيْهِ » ; l'école tient le milieu : porter le muṣḥaf avec son pupitre est interdit, toucher le pupitre ne l'est pas.",
      "Concordance — la pièce de monnaie. Al-Dardīr : « فَيَجُوزُ مَسُّهُ وَحَمْلُهُ لِلْمُحْدِثِ وَلَوْ أَكْبَرَ » ; al-Kharashī : « لَا دِرْهَمٍ وَنَحْوِهِ مَكْتُوبٍ فِيهِ أَسْمَاءُ اللَّهِ فَيَجُوزُ مَسُّهُ وَلَوْ لِكَافِرٍ »."
    ],
    exemple: "Un voyageur sans ablutions porte sa valise où se trouve un muṣḥaf parmi ses vêtements : c'est permis, car il porte la valise pour ses affaires. S'il prend la valise pour emporter le muṣḥaf, ou s'il porte le muṣḥaf seul dans une housse à cordon, ce n'est pas permis.",
    erreurs_frequentes: [
      "Croire qu'un cordon ou un coussin suffit pour porter le muṣḥaf sans ablutions.",
      "Croire que tout transport dans un sac est permis : il faut que ce soient les bagages qui soient visés.",
      "S'inquiéter de toucher une pièce de monnaie portant un verset : c'est permis, même en état de janâba."
    ],
    termes: [
      { ar: "عِلَاقَة", translit: "ʿilâqa", def: "Cordon ou courroie par lequel on suspend et porte un objet." },
      { ar: "وِسَادَة", translit: "wisâda", def: "Coussin ou support sur lequel on pose le muṣḥaf." },
      { ar: "أَمْتِعَة", translit: "amtiʿa", def: "Bagages, affaires que l'on transporte." }
    ],
    quiz: [
      { q: "Sans ablutions, porter le muṣḥaf suspendu à un cordon est :",
        choix: ["Permis", "Recommandé", "Interdit (sauf, selon un avis, s'il est porté comme amulette)", "Permis seulement en voyage"],
        bonne: 2,
        explication: "« (وَ) مَنَعَ (حَمْلَهُ وَإِنْ بِعِلَاقَةٍ) إنْ لَمْ يُجْعَلْ حِرْزًا »." },
      { q: "Mise en situation : vous portez, sans ablutions, un carton d'affaires pour un déménagement ; un muṣḥaf s'y trouve. C'est :",
        choix: ["Permis, car vous portez le carton pour vos affaires", "Interdit dans tous les cas", "Permis seulement si un non-musulman le porte", "Permis seulement au junub"],
        bonne: 0,
        explication: "« لِأَنَّ الْمَقْصُودَ مَا فِيهِ الْمُصْحَفُ مِنْ الْأَمْتِعَةِ »." },
      { q: "Et si vous visez à la fois le muṣḥaf et les affaires ?",
        choix: ["C'est permis selon l'avis retenu", "C'est recommandé", "C'est seulement déconseillé", "C'est interdit selon l'avis retenu (al-Dasūqī)"],
        bonne: 3,
        explication: "« وَمَا ذَكَرَهُ مِنْ الْمَنْعِ فِي الصُّورَةِ الْأُولَى هُوَ الْمُرْتَضَى »." },
      { q: "Une pièce de monnaie portant un verset, pour celui qui n'a pas ses ablutions :",
        choix: ["Ne se touche pas", "Se touche et se porte, même en état de janâba", "Se porte mais ne se touche pas", "Se touche seulement avec un bâton"],
        bonne: 1,
        explication: "« فَيَجُوزُ مَسُّهُ وَحَمْلُهُ لِلْمُحْدِثِ وَلَوْ أَكْبَرَ »." }
    ],
    ref: { ouvrage: "al-Sharḥ al-kabīr (al-Dardīr) et Ḥāshiyat al-Dasūqī", tome: 1, pages: "125" },
    alertes: [
      "Limite du texte : la fin du segment, « وَحَمْلَهُ وَإِنْ بِعِلَاقَةٍ أَوْ وِسَادَةٍ إلَّا بِأَمْتِعَةٍ قُصِدَتْ وَإِنْ عَلَى كَافِرٍ لَا دِرْهَمٍ », que donnent le Mukhtaṣar seul (11355, p. 17), Ibn Ghāzī (14605, p. 38), al-Dardīr (21604/124) et al-Kharashī (91, p. 159–160), manque au « ص » de Mawāhib, et al-Ḥaṭṭāb n'en parle pas (569/302–304 relus) ; fiche rédigée d'après al-Dardīr / al-Dasūqī et al-Kharashī, `ref` sur al-Dardīr (n° 376).",
      "Matn vocalisé d'après al-Dardīr (21604/124) et Ibn Ghāzī (14605, p. 38) : حَمْلَهُ à l'accusatif, complément de مَنَعَ, et بِعِلَاقَةٍ ; le Mukhtaṣar seul (11355, p. 17) et al-Kharashī (91, p. 159) vocalisent autrement (حَمْلِهِ, بِعَلَاقَةٍ).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 125 (Shamela 21604, page 124)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-21a",
    kitab: "tah", bab: "01", fasl: "06", ordre: 21,
    titre: "Le livre de tafsîr ; le Coran en caractères non arabes",
    titre_ar: "وَتَفْسِيرٍ",
    objectif: "Savoir qu'on peut toucher un livre de tafsîr sans ablutions, et connaître les cas voisins (Torah, Évangile, Coran en caractères non arabes).",
    matn: "وَتَفْسِيرٍ",
    regle_pratique: "Celui qui n'a pas ses ablutions, même en état de janâba, peut toucher, porter et lire un livre de tafsîr ; il peut aussi toucher la Torah, l'Évangile et les Psaumes et, selon le passage cité par al-Ḥaṭṭāb, un Coran écrit en caractères non arabes, qui n'est pas du Coran mais un tafsîr.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Aucune ablution n'est exigée pour ces contacts."
    },
    explication: "Le segment dépend de « لَا » : le ḥadath n'interdit pas le livre de tafsîr (تَفْسِير). Al-Dardīr : « فَيَجُوزُ وَلَوْ لِجُنُبٍ » ; al-Dasūqī : « أَيْ مَسُّهُ وَحَمْلُهُ وَالْمُطَالَعَةُ فِيهِ لِلْمُحْدِثِ وَلَوْ كَانَ جُنُبًا », car « لِأَنَّ الْمَقْصُودَ مِنْ التَّفْسِيرِ مَعَانِي الْقُرْآنِ لَا تِلَاوَتُهُ ».\n\nAl-Ḥaṭṭāb commente le segment par une citation d'al-Masāʾil al-malqūṭa : « لَا يُكْرَهُ مَسُّ التَّوْرَاةِ وَالْإِنْجِيلِ وَالزَّبُورِ لِلْمُحْدِثِ », car « لِأَنَّ النَّصَّ إنَّمَا وَرَدَ فِي الْقُرْآنِ » ; ce qui n'est pas en langue arabe ne s'appelle pas Coran : « وَمَا كَانَ مِنْ غَيْرِ لُغَةِ الْعَرَبِيَّةِ لَا يُسَمَّى قُرْآنًا بَلْ لَوْ كُتِبَ الْقُرْآنُ بِالْقَلَمِ الْأَعْجَمِيِّ جَازَ لِلْمُحْدِثِ مَسُّهُ » ; « لِأَنَّهُ لَيْسَ بِقُرْآنٍ بَلْ تَفْسِيرٌ لِلْقُرْآنِ ». Pour les Écritures antérieures, l'auteur ajoute : « مَعَ أَنَّ هَذِهِ بُدِّلَتْ فَلَا نَعْلَمُ أَنَّهَا هِيَ أَوْ غَيْرُهَا ». Le passage est aussi rapporté par at-Tilimsānī dans son commentaire d'al-Jallāb.\n\nLes tafsîr qui contiennent beaucoup de versets à la suite font l'objet d'une divergence (voir les divergences).",
    aqwal: [
      { auteur: "L'auteur d'al-Masāʾil al-malqūṭa (cité par al-Ḥaṭṭāb ; aussi par at-Tilimsānī)", avis: "Toucher la Torah, l'Évangile et les Psaumes n'est pas déconseillé ; un Coran écrit en caractères non arabes peut être touché, car c'est un tafsîr.", statut: "non_precise" },
      { auteur: "Ibn Marzūq (d'après al-Dasūqī)", avis: "On peut toucher même un tafsîr qui contient beaucoup de versets à la suite, même en les visant.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa (d'après al-Dasūqī et Ibn Ghāzī)", avis: "Un tafsîr qui contient des versets écrits ne se touche que si l'on ne vise pas les versets.", statut: "non_precise" },
      { auteur: "Ibn ʿAbd as-Salām (d'après Ibn Ghāzī)", avis: "Permis, même pour un tafsîr comme celui d'Ibn ʿAṭiyya.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr / al-Dasūqī : « فَيَجُوزُ وَلَوْ لِجُنُبٍ » ; pour le tafsîr riche en versets suivis, al-Dasūqī suit Ibn Marzūq (« وَهُوَ كَذَلِكَ ») contre Ibn ʿArafa, et al-ʿAdawī, sur al-Kharashī : « الْمُعْتَمَدُ وَلَوْ قَصَدَ الْآيَ ».",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb commente « وَتَفْسِيرٍ » par la seule citation d'al-Masāʾil al-malqūṭa, sur les Écritures antérieures et le Coran en caractères non arabes."
    ],
    divergences: [
      "Point à comparer — le tafsîr riche en versets. Al-Dasūqī : « وَهُوَ كَذَلِكَ كَمَا قَالَ ابْنُ مَرْزُوقٍ خِلَافًا لِابْنِ عَرَفَةَ الْقَائِلِ بِمَنْعِ مَسِّ تِلْكَ التَّفَاسِيرِ الَّتِي فِيهَا الْآيَاتُ الْكَثِيرَةُ مُتَوَالِيَةً مَعَ قَصْدِ … الْآيَاتِ بِالْمَسِّ ». Ibn Ghāzī rapporte Ibn ʿArafa : « ومقتضى الروايات: لا بأس بالتفاسير غير ذات كتب الآي مطلقاً، وذات كتبها إن لَمْ تقصد ». Al-Kharashī : « وَلَوْ كَتَفْسِيرِ ابْنِ عَطِيَّةَ إنْ لَمْ يَقْصِدْ الْآيَ » ; al-ʿAdawī : « الْمُعْتَمَدُ وَلَوْ قَصَدَ الْآيَ ». Al-Ḥaṭṭāb n'en parle pas.",
      "Complément — le Coran en caractères non arabes. Al-Ḥaṭṭāb, d'après al-Masāʾil al-malqūṭa : « بَلْ لَوْ كُتِبَ الْقُرْآنُ بِالْقَلَمِ الْأَعْجَمِيِّ جَازَ لِلْمُحْدِثِ مَسُّهُ ». Al-Dasūqī le reprend : « لِأَنَّهُ لَيْسَ بِقُرْآنٍ بَلْ هُوَ تَفْسِيرٌ لِلْقُرْآنِ كَذَا فِي ح » (ح : Muḥammad al-Ḥaṭṭāb), puis ajoute, en renvoyant à al-Bunānī (« اُنْظُرْ بْن », بن : Muḥammad al-Bunānī) : « وَالْأَقْرَبُ مَنْعُ كَتْبِ الْقُرْآنِ بِغَيْرِ الْقَلَمِ الْعَرَبِيِّ ».",
      "Point à comparer — les Écritures antérieures. Al-Ḥaṭṭāb, d'après al-Masāʾil al-malqūṭa, donne aussi pour raison : « مَعَ أَنَّ هَذِهِ بُدِّلَتْ ». Al-Dasūqī : « كَمَا يَجُوزَ لِلْمُحْدِثِ مَسُّ التَّوْرَاةِ وَالْإِنْجِيلِ وَالزَّبُورِ وَلَوْ كَانَتْ غَيْرَ مُبَدَّلَةٍ »."
    ],
    exemple: "Un étudiant sans ablutions consulte un commentaire du Coran pour préparer un exposé : il peut le prendre, le porter et le lire. De même pour un Coran écrit entièrement en caractères latins, selon le passage cité par al-Ḥaṭṭāb.",
    erreurs_frequentes: [
      "Faire ses ablutions pour ouvrir un livre de tafsîr en croyant qu'elles sont exigées : elles ne le sont pas, même du junub.",
      "Croire que la Torah ou l'Évangile ont la règle du muṣḥaf.",
      "Croire que la question des tafsîr riches en versets est sans débat : Ibn ʿArafa y met une condition."
    ],
    termes: [
      { ar: "تَفْسِير", translit: "tafsîr", def: "Commentaire du Coran, qui en explique le sens." }
    ],
    quiz: [
      { q: "Le junub peut-il lire un livre de tafsîr ?",
        choix: ["Oui : il peut le toucher, le porter et le lire", "Non", "Seulement s'il ne le touche pas", "Seulement avec un bâton"],
        bonne: 0,
        explication: "« أَيْ مَسُّهُ وَحَمْلُهُ وَالْمُطَالَعَةُ فِيهِ لِلْمُحْدِثِ وَلَوْ كَانَ جُنُبًا »." },
      { q: "Pourquoi, selon al-Dasūqī ?",
        choix: ["Parce que le tafsîr est plus court", "Parce que c'est un livre de fiqh", "Parce qu'on y cherche le sens du Coran, non sa récitation", "Parce qu'il ne contient aucun verset"],
        bonne: 2,
        explication: "« لِأَنَّ الْمَقْصُودَ مِنْ التَّفْسِيرِ مَعَانِي الْقُرْآنِ لَا تِلَاوَتُهُ »." },
      { q: "Mise en situation : un ami sans ablutions veut prendre un Coran écrit entièrement en caractères latins. D'après le passage cité par al-Ḥaṭṭāb :",
        choix: ["C'est interdit, comme pour le muṣḥaf", "C'est permis, car ce n'est pas du Coran mais un tafsîr", "C'est permis seulement pour lire", "C'est déconseillé"],
        bonne: 1,
        explication: "« لِأَنَّهُ لَيْسَ بِقُرْآنٍ بَلْ تَفْسِيرٌ لِلْقُرْآنِ »." },
      { q: "Qui met une condition aux tafsîr contenant beaucoup de versets à la suite ?",
        choix: ["Ibn Marzūq", "Al-Ḥaṭṭāb", "Al-Dardīr", "Ibn ʿArafa"],
        bonne: 3,
        explication: "« خِلَافًا لِابْنِ عَرَفَةَ الْقَائِلِ بِمَنْعِ مَسِّ تِلْكَ التَّفَاسِيرِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "304" },
    alertes: [
      "Le « ص » de Mawāhib (569/303) porte « وَتَفْسِيرٍ » seul ; « لَا دِرْهَمٍ », qui le précède dans le Mukhtaṣar, est traité à la fiche 20c.",
      "Ibn ʿArafa n'est cité que par ce qu'en rapportent al-Dasūqī et Ibn Ghāzī (14605, p. 38) ; Ibn Ghāzī cité sans voyelles, tel qu'imprimé.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 125–126 (Shamela 21604, pages 124–125)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-21b",
    kitab: "tah", bab: "01", fasl: "06", ordre: 21,
    titre: "La tablette de l'enseignant et de l'élève",
    titre_ar: "وَلَوْحٍ لِمُعَلِّمٍ وَمُتَعَلِّمٍ وَإِنْ حَائِضًا",
    objectif: "Savoir que l'enseignant et l'élève peuvent toucher la tablette coranique sans ablutions, même la femme en règles, et connaître la question du junub.",
    matn: "وَلَوْحٍ لِمُعَلِّمٍ وَمُتَعَلِّمٍ وَإِنْ حَائِضًا",
    regle_pratique: "L'enseignant et l'élève peuvent toucher et porter sans ablutions la tablette où sont écrits les versets à apprendre, pendant l'enseignement et pour ce qu'il exige (la ranger, l'emporter à la maison), même la femme en règles ; pour le junub, al-Dardīr l'exclut, mais al-Dasūqī tient pour avis retenu qu'il a la même permission.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Aucune ablution n'est exigée pour ces contacts."
    },
    explication: "Al-Ḥaṭṭāb ne commente pas cette fin de segment (voir les alertes) ; la fiche suit al-Dardīr et al-Dasūqī, avec al-Kharashī et at-Tawḍīḥ.\n\nLa tablette (لَوْح) sur laquelle on écrit les versets à apprendre n'est pas interdite à celui qui n'a pas ses ablutions, s'il est enseignant ou élève ; al-Dardīr : « حَالَ التَّعْلِيمِ وَالتَّعَلُّمِ وَمَا أُلْحِقَ بِهِمَا مِمَّا يُضْطَرُّ إلَيْهِ كَحَمْلِهِ لِبَيْتٍ مَثَلًا فَيَجُوزُ لِلْمَشَقَّةِ ». L'élève comprend celui qui révise, d'après al-Dasūqī : « أَيْ وَإِنْ كَانَ مُتَذَكِّرًا يُرَاجِعُ بِنِيَّةِ الْحِفْظِ ». L'enseignant, d'après al-Kharashī : « وَالْمُرَادُ بِالْمُعَلِّمِ مَنْ يُرِيدُ إصْلَاحَ اللَّوْحِ كَانَ جَالِسًا لِلتَّعْلِيمِ أَمْ لَا ».\n\nMême la femme en règles, dit al-Dardīr, mais « لَا جُنُبًا لِقُدْرَتِهِ عَلَى إزَالَةِ مَانِعِهِ بِخِلَافِ الْحَائِضِ ». Al-Dasūqī répond : « الْمُعْتَمَدُ الْجَوَازُ لَهُ كَالْحَائِضِ » (voir les divergences).\n\nAt-Tawḍīḥ rapporte, d'Ibn Yūnus, trois avis : la permission pour l'enseignant et l'élève, homme ou enfant (Ibn al-Qāsim, à cause de la nécessité de l'enseignement) ; « والكراهةُ مطلقاً لأشهب عن مالك » ; « والكراهةُ للرجال دون الصبيان لابن حبيب ».",
    aqwal: [
      { auteur: "Ibn al-Qāsim (d'après at-Tawḍīḥ, qui cite Ibn Yūnus)", avis: "Permis à l'enseignant et à l'élève, homme ou enfant, pour la nécessité de l'enseignement.", statut: "non_precise" },
      { auteur: "Ashhab, d'après Mālik (d'après at-Tawḍīḥ)", avis: "Déconseillé dans tous les cas.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb (d'après at-Tawḍīḥ)", avis: "Déconseillé pour les hommes, non pour les enfants ; selon une autre présentation, déconseillé pour l'enseignant.", statut: "non_precise" },
      { auteur: "Sens apparent de l'ʿUtbiyya (d'après al-Dasūqī)", avis: "La permission se limite au moment même de l'apprentissage et de l'enseignement.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr pour l'enseignant, l'élève et la femme en règles, avec ce qui se rattache à l'enseignement ; pour le junub, al-Dasūqī : « الْمُعْتَمَدُ الْجَوَازُ لَهُ كَالْحَائِضِ », contre l'exclusion d'al-Dardīr (« لَا جُنُبًا »).",
    tarjih_hattab: null,
    tanbihat: [],
    divergences: [
      "Complément — le segment. Al-Ḥaṭṭāb ne le commente pas. Al-Dardīr : « (وَ) لَا (لَوْحٍ لِمُعَلِّمٍ وَمُتَعَلِّمٍ) ».",
      "Divergence — le junub. Al-Dardīr : « لَا جُنُبًا لِقُدْرَتِهِ عَلَى إزَالَةِ مَانِعِهِ بِخِلَافِ الْحَائِضِ ». Al-Dasūqī : « الْمُعْتَمَدُ الْجَوَازُ لَهُ كَالْحَائِضِ كَمَا فِي حَاشِيَةِ شَيْخِنَا عَلَى عبق » (son maître al-ʿAdawī ; عبق : ʿAbd al-Bāqī az-Zurqānī), et de même chez al-Bunānī (بن), d'après الْمُقْرِي et ʿAbd al-Qādir al-Fāsī ; عج (sigle non défini dans la liste d'al-Dasūqī) : « ظَاهِرُ إطْلَاقِهِمْ أَنَّ الْجُنُبَ كَالْحَائِضِ ». En sens contraire, al-Kharashī dans son grand commentaire : « تَخْصِيصُ الْحَائِضِ بِالذِّكْرِ يُخْرِجُ الْجُنُبَ » ; al-Dasūqī note que son maître l'avait d'abord accepté, « لَكِنَّهُ قَدْ رَجَعَ عَنْهُ ».",
      "Point à comparer — ce qui se rattache à l'enseignement. Al-Dasūqī : « عَلَى مَا يُفِيدُهُ إطْلَاقُ الْمُصَنِّفِ كَابْنِ حَبِيبٍ خِلَافًا لِظَاهِرِ الْعُتْبِيَّةِ مِنْ قَصْرِ الْجَوَازِ عَلَى حَالَةِ التَّعَلُّمِ وَالتَّعْلِيمِ ».",
      "Complément — at-Tawḍīḥ. Khalīl y écrit : « وَبالأَلْوَاحِ لِلْمُتَعَلِّمِ وَالْمُعَلِّمِ لِيُصَحِّحَهَا. ابْن حَبِيبٍ: يُكْرَهُ مَسُّهَا لِلْمُعَلَّمِ », et rapporte d'Ibn Yūnus trois avis (voir l'explication)."
    ],
    exemple: "Une enseignante d'école coranique a ses règles : elle peut prendre les tablettes des enfants pour corriger les versets et les ranger, sans ablutions.",
    erreurs_frequentes: [
      "Croire que la tablette a la règle du muṣḥaf : l'enseignement la rend permise.",
      "Croire que la femme en règles doit cesser d'enseigner avec les tablettes.",
      "Croire que la question du junub est réglée sans débat : al-Dardīr l'exclut, al-Dasūqī le tient pour permis."
    ],
    termes: [
      { ar: "لَوْح", translit: "lawḥ", def: "Tablette sur laquelle l'élève écrit les versets qu'il apprend." }
    ],
    quiz: [
      { q: "Sans ablutions, l'élève peut toucher la tablette coranique :",
        choix: ["Jamais", "Pendant l'apprentissage et pour ce qui s'y rattache", "Seulement s'il est enfant", "Seulement avec un bâton"],
        bonne: 1,
        explication: "« حَالَ التَّعْلِيمِ وَالتَّعَلُّمِ وَمَا أُلْحِقَ بِهِمَا »." },
      { q: "La femme en règles qui enseigne :",
        choix: ["Ne touche pas les tablettes", "Doit faire l'ablution sèche", "Ne touche que les tablettes des enfants", "Peut toucher les tablettes, comme les autres enseignants"],
        bonne: 3,
        explication: "Le matn : « وَإِنْ حَائِضًا »." },
      { q: "Mise en situation : un enseignant en état de janâba veut corriger les tablettes avant d'aller se laver. Selon l'avis retenu par al-Dasūqī :",
        choix: ["Il le peut, comme la femme en règles", "Il ne le peut jamais", "Il doit d'abord faire ses ablutions", "Il ne peut toucher que des tablettes vides"],
        bonne: 0,
        explication: "« الْمُعْتَمَدُ الْجَوَازُ لَهُ كَالْحَائِضِ »." },
      { q: "Pourquoi al-Dardīr exclut-il le junub ?",
        choix: ["Parce qu'il est plus impur", "Parce que le junub ne peut pas enseigner", "Parce qu'il peut lever son empêchement, à la différence de la femme en règles", "Parce que la tablette est un muṣḥaf"],
        bonne: 2,
        explication: "« لِقُدْرَتِهِ عَلَى إزَالَةِ مَانِعِهِ بِخِلَافِ الْحَائِضِ »." }
    ],
    ref: { ouvrage: "al-Sharḥ al-kabīr (al-Dardīr) et Ḥāshiyat al-Dasūqī", tome: 1, pages: "126" },
    alertes: [
      "Limite du texte : la fin du segment, « وَلَوْحٍ لِمُعَلِّمٍ وَمُتَعَلِّمٍ وَإِنْ حَائِضًا », que donnent le Mukhtaṣar seul (11355, p. 17), Ibn Ghāzī (14605, p. 38), al-Dardīr (21604/125) et al-Kharashī (91, p. 160), manque au « ص » de Mawāhib, et al-Ḥaṭṭāb n'en parle pas (569/302–304 relus) ; fiche rédigée d'après al-Dardīr / al-Dasūqī, avec al-Kharashī et at-Tawḍīḥ (14442, p. 162), `ref` sur al-Dardīr (n° 377).",
      "At-Tawḍīḥ (14442, p. 162) : dans le premier des trois avis rapportés d'Ibn Yūnus, le mot « للمَُلِّمِ » est altéré dans l'édition Shamela ; non cité.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 126 (Shamela 21604, page 125)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-22a",
    kitab: "tah", bab: "01", fasl: "06", ordre: 22,
    titre: "Une partie du Coran pour l'élève, même pubère ; le muṣḥaf complet ; le copiste",
    titre_ar: "وَجُزْءٍ لِمُتَعَلِّمٍ وَإِنْ بَلَغَ",
    objectif: "Savoir que l'élève peut toucher sans ablutions une partie du Coran et, selon l'avis retenu, le muṣḥaf complet ; connaître la question de l'enseignant et du copiste.",
    matn: "وَجُزْءٍ لِمُتَعَلِّمٍ وَإِنْ بَلَغَ",
    regle_pratique: "L'élève, même pubère, peut toucher et porter sans ablutions une partie du Coran pour apprendre ; selon l'avis retenu par al-Dardīr, il peut aussi toucher le muṣḥaf complet, et l'enseignant de même ; le junub en est exclu selon al-Dardīr.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Aucune ablution n'est exigée de l'élève pour ce contact."
    },
    explication: "Al-Ḥaṭṭāb : « ظَاهِرُهُ أَنَّ الصَّغِيرَ لَا يَمَسُّ الْمُصْحَفَ الْكَامِلَ وَهُوَ قَوْلُ ابْنِ الْمُسَيِّبِ » ; mais Mālik dit dans al-Mukhtaṣar : « أَرْجُو أَنْ يَكُونَ مَسُّ الصِّبْيَانِ … لِلْمَصَاحِفِ لِلتَّعْلِيمِ عَلَى غَيْرِ وُضُوءٍ جَائِزًا ».\n\nIl rapporte ensuite d'Abū l-Ḥasan une règle tirée d'une question du ḥajj (ceux qui entrent sans cesse à La Mecque avec des fruits et des vivres) : ce qui se répète sans cesse allège l'obligation. Ainsi celui qui va souvent à la mosquée n'est pas tenu à la prière de salutation à chaque fois, ni celui qui va au marché de saluer tous ceux qu'il croise, « وَمِثْلُهُ مَسُّ الْمُصْحَفِ لِلْمُتَعَلِّمِ عَلَى غَيْرِ وُضُوءٍ وَالنَّاسِخِ ». Pour le copiste, al-Burzulī rapporte que ʿIzz ad-Dīn b. ʿAbd as-Salām, interrogé, répondit « بِأَنَّهُ لَيْسَ لَهُ أَنْ يَكْتُبَ إلَّا مُتَطَهِّرًا » ; al-Burzulī ajoute que l'obligation de rester pur « فَلَا يَبْعُدُ جَرْيُهَا عَلَى الْخِلَافِ » relatif à l'enseignant (voir les alertes).\n\nAl-Dardīr : le ḥadath n'interdit pas de toucher ou de porter une partie (جُزْء), « بَلْ وَلَا كَامِلٍ عَلَى الْمُعْتَمَدِ », pour l'élève, « وَكَذَا مُعَلِّمٍ عَلَى الْمُعْتَمَدِ », même pubère « أَوْ حَائِضًا لَا جُنُبًا ». Al-Kharashī précise la partie : « وَالْمُرَادُ بِالْجُزْءِ مَا قَابَلَ الْكَامِلَ لَكِنْ جُزْءٌ لَهُ بَالٌ ». Al-Dasūqī range avec l'élève, d'après son maître al-ʿAdawī, celui qui se trompe en récitant : « مِثْلُهُ مَنْ كَانَ يَغْلَطُ فِي الْقُرْآنِ وَيَضَعُ الْمُصْحَفَ عِنْدَهُ وَهُوَ يَقْرَأُ ».",
    aqwal: [
      { auteur: "Ibn al-Musayyib (d'après al-Ḥaṭṭāb)", avis: "L'enfant ne touche pas le muṣḥaf complet ; c'est le sens apparent du matn.", statut: "non_precise" },
      { auteur: "Mālik (al-Mukhtaṣar, cité par al-Ḥaṭṭāb)", avis: "Il espère que le contact des enfants avec les muṣḥaf pour apprendre, sans ablutions, est permis.", statut: "non_precise" },
      { auteur: "Ibn Bashīr (d'après al-Dasūqī)", avis: "Accord des savants sur la permission du muṣḥaf complet pour l'élève.", statut: "non_precise" },
      { auteur: "Khalīl, dans at-Tawḍīḥ (d'après al-Dasūqī)", avis: "Ibn Bashīr a tort de parler d'accord, car il y a divergence.", statut: "non_precise" },
      { auteur: "Ibn al-Qāsim, d'après Mālik (riwāya, d'après al-Dasūqī)", avis: "L'enseignant a la même permission que l'élève.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb (d'après al-Dasūqī)", avis: "Pas l'enseignant : son besoin est un métier et un gain, non la mémorisation.", statut: "non_precise" },
      { auteur: "ʿIzz ad-Dīn b. ʿAbd as-Salām (d'après al-Burzulī, cité par al-Ḥaṭṭāb)", avis: "Le copiste n'écrit le muṣḥaf qu'en état de pureté.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « بَلْ وَلَا كَامِلٍ عَلَى الْمُعْتَمَدِ » et « وَكَذَا مُعَلِّمٍ عَلَى الْمُعْتَمَدِ » ; al-Dasūqī le fonde sur Ibn Bashīr et Ibn Marzūq (« بِأَنَّ أَقَلَّ أَحْوَالِهِ أَنْ يَكُونَ هُوَ الْمُعْتَمَدُ ») et, pour l'enseignant, sur la riwāya d'Ibn al-Qāsim. Junub exclu par al-Dardīr. Copiste : non tranché (absent des pages d'al-Dardīr / al-Dasūqī lues).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb note que le sens apparent du matn exclut le muṣḥaf complet pour l'enfant, et lui oppose la parole de Mālik.",
      "Il rapporte d'Abū l-Ḥasan le rapprochement entre l'élève, le copiste, celui qui va souvent à la mosquée et celui qui va au marché.",
      "Il rapporte d'al-Burzulī la réponse de ʿIzz ad-Dīn b. ʿAbd as-Salām sur le copiste."
    ],
    divergences: [
      "Divergence — le muṣḥaf complet pour l'élève. Al-Ḥaṭṭāb : « ظَاهِرُهُ أَنَّ الصَّغِيرَ لَا يَمَسُّ الْمُصْحَفَ الْكَامِلَ وَهُوَ قَوْلُ ابْنِ الْمُسَيِّبِ », avec la parole contraire de Mālik. Al-Dardīr : « بَلْ وَلَا كَامِلٍ عَلَى الْمُعْتَمَدِ ». Al-Dasūqī : « لِحِكَايَةِ ابْنِ بَشِيرٍ الِاتِّفَاقَ عَلَى جَوَازِ مَسِّ الْكَامِلِ لِلْمُتَعَلِّمِ » ; l'objection d'at-Tawḍīḥ, « أَنَّ كَلَامَ ابْنِ بَشِيرٍ لَيْسَ بِجَيِّدٍ », est réfutée par Ibn Marzūq. At-Tawḍīḥ : « وَالْجُزْءُ لِلصَّبِيِّ كَاللَّوْحِ بِخِلافِ الْمُكَمَّلِ. وَقِيلَ: وَالْمُكَمَّلُ ». Al-Kharashī : « ثُمَّ إنَّ الْمُعْتَمَدَ أَنَّ لِلْمُتَعَلِّمِ مَسَّ الْكَامِلِ ».",
      "Point à comparer — l'enseignant. Al-Dardīr : « وَكَذَا مُعَلِّمٍ عَلَى الْمُعْتَمَدِ ». Al-Dasūqī : « أَيْ كَمَا هُوَ رِوَايَةُ ابْنِ الْقَاسِمِ عَنْ مَالِكٍ » ; « خِلَافًا لِابْنِ حَبِيبٍ قَائِلًا: إنَّ حَاجَةَ الْمُعَلِّمِ صِنَاعَةٌ وَتَكَسُّبٌ ». Al-Ḥaṭṭāb n'en parle pas ici, sinon par al-Burzulī, qui rattache la pureté du copiste « عَلَى الْخِلَافِ » relatif à l'enseignant.",
      "Complément — la partie. Al-Kharashī : « لَكِنْ جُزْءٌ لَهُ بَالٌ » ; al-ʿAdawī : « كَأَنْ يَكُونَ خَمْسَةَ أَحْزَابٍ مَثَلًا »."
    ],
    exemple: "Un adolescent qui apprend le Coran par cœur emporte au cours une partie du Coran sans avoir fait ses ablutions : c'est permis ; selon l'avis retenu par al-Dardīr, il peut aussi réviser dans un muṣḥaf complet.",
    erreurs_frequentes: [
      "Croire que la permission cesse à la puberté.",
      "Croire que seule une petite partie est permise : selon l'avis retenu, le muṣḥaf complet l'est aussi pour l'élève.",
      "Étendre cette permission au junub : al-Dardīr l'exclut."
    ],
    termes: [
      { ar: "جُزْء", translit: "jouz'", def: "Partie du Coran, moindre que l'exemplaire complet." }
    ],
    quiz: [
      { q: "L'élève pubère peut toucher sans ablutions une partie du Coran :",
        choix: ["Oui", "Non, la permission cesse à la puberté", "Seulement s'il est enseignant", "Seulement en voyage"],
        bonne: 0,
        explication: "Le matn : « وَإِنْ بَلَغَ »." },
      { q: "Et le muṣḥaf complet, selon al-Dardīr ?",
        choix: ["Interdit", "Permis seulement aux enfants", "Permis, selon l'avis retenu", "Déconseillé"],
        bonne: 2,
        explication: "« بَلْ وَلَا كَامِلٍ عَلَى الْمُعْتَمَدِ »." },
      { q: "Mise en situation : une étudiante qui se trompe souvent en récitant garde le muṣḥaf près d'elle, sans ablutions, pour se corriger. D'après al-Dasūqī :",
        choix: ["C'est interdit", "Elle doit faire l'ablution sèche", "Elle peut seulement lire sans toucher", "Elle a la règle de l'élève"],
        bonne: 3,
        explication: "« مِثْلُهُ مَنْ كَانَ يَغْلَطُ فِي الْقُرْآنِ وَيَضَعُ الْمُصْحَفَ عِنْدَهُ وَهُوَ يَقْرَأُ »." },
      { q: "Selon ʿIzz ad-Dīn b. ʿAbd as-Salām (rapporté par al-Burzulī), le copiste du muṣḥaf :",
        choix: ["Écrit sans ablutions, comme l'élève", "N'écrit qu'en état de pureté", "N'écrit que des parties", "Écrit sans ablutions s'il est payé"],
        bonne: 1,
        explication: "« بِأَنَّهُ لَيْسَ لَهُ أَنْ يَكْتُبَ إلَّا مُتَطَهِّرًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "304–305" },
    alertes: [
      "Non résolu : dans la citation d'Abū l-Ḥasan, « مَسْأَلَةِ الْخِطَابَيْنِ » (569/304) est douteux ; le contexte (ceux qui vont sans cesse à La Mecque avec des fruits et des vivres) ne suffit pas à fixer la lecture sans témoin ; passage non cité (n° 378).",
      "Précisé (campagne de correction) : dans la citation d'al-Burzulī, « فِي الْمُعَلَّمِ » (569/304) est à lire avec kasra (الْمُعَلِّم, l'enseignant), d'après la suite, « إنْ كَانَ مُحْتَاجًا إلَيْهَا », et al-Dasūqī, qui oppose l'enseignant à l'élève (21604/125) ; vocalisation seule (n° 379).",
      "Mālik « فِي الْمُخْتَصَرِ » : le passage ne dit pas de quel Mukhtaṣar il s'agit ; sa phrase commence en 569/303 et finit en 569/304 (citée en deux morceaux).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 126 (Shamela 21604, page 125)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-22b",
    kitab: "tah", bab: "01", fasl: "06", ordre: 22,
    titre: "L'amulette coranique couverte, même pour la femme en règles",
    titre_ar: "وَحِرْزٍ بِسَاتِرٍ وَإِنْ لِحَائِضٍ",
    objectif: "Savoir que l'on peut porter sans ablutions une amulette contenant du Coran si elle est enveloppée, et en connaître les limites (non-musulman, Coran complet).",
    matn: "وَحِرْزٍ بِسَاتِرٍ وَإِنْ لِحَائِضٍ",
    regle_pratique: "Celui qui n'a pas ses ablutions, la femme en règles, l'accouchée et le junub peuvent porter une amulette contenant du Coran si elle est enveloppée d'une protection (cuir, cire…) ; on peut aussi en mettre à un animal ; on n'en met pas à un non-musulman, et porter un Coran complet comme amulette est discuté.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Sans enveloppe, on ne l'accroche pas (Ibn Farḥūn, cité par al-Ḥaṭṭāb : « وَلَا يُعَلَّقُ وَلَيْسَ عَلَيْهِ سَاتِرٌ ») ; le passage ne précise pas d'autre conséquence."
    },
    explication: "Al-Ḥaṭṭāb ne commente pas cette fin de segment (voir les alertes) ; il en parle toutefois sous le segment 20, par deux citations. Ibn Farḥūn : « وَلَا بَأْسَ بِمَا يُعَلَّقُ فِي عُنُقِ الصَّبِيِّ وَالْحَائِضِ مِنْ الْقُرْآنِ إذَا خُرِزَ عَلَيْهِ أَوْ جُعِلَ فِي شَمْعٍ » ; « وَلَا يُعَلَّقُ وَلَيْسَ عَلَيْهِ سَاتِرٌ » ; il le permet aussi pour la femme enceinte. Al-Burzulī : « وَكَذَا حَمْلُ الْخَتْمَةِ عَلَى وَجْهِ الْحِرْزِ لِغَيْرِ الْمُتَطَهِّرِ فِيهِ خِلَافٌ ».\n\nAl-Dardīr : le ḥadath n'interdit pas de porter une amulette (حِرْز) de Coran couverte d'un écran (سَاتِر) « يَقِيهِ مِنْ وُصُولِ أَذًى إلَيْهِ مِنْ جِلْدٍ أَوْ غَيْرِهِ », pour le musulman sain ou malade, même la femme en règles, « وَنُفَسَاءَ وَجُنُبٍ لَا كَافِرٍ لِأَنَّهُ يُؤَدِّي إلَى امْتِهَانِهِ بِخِلَافِ بَهِيمَةٍ فَيَجُوزُ ». Il recommande : « وَيَنْبَغِي لِحَامِلِ الْحِرْزِ وَكَاتِبِهِ حُسْنُ النِّيَّةِ وَاعْتِقَادُ النَّفْعِ مِنْ اللَّهِ تَعَالَى بِبَرَكَتِهِ ». Le mot du matn désigne une amulette qui n'est pas un Coran complet : « فَالْكَامِلُ لَا يَجُوزُ لِأَنَّ كَمَالَهُ يُبْعِدُ كَوْنَهُ حِرْزًا وَهُوَ أَحَدُ قَوْلَيْنِ ».\n\nIbn Ghāzī rapporte la parole de Mālik dans l'audition d'Ashhab : « لا بأس بما تعلّقه الحائض والحبلى والصبي من القرآن، إن كان مما يكنه من قصبة حديد … أو جلد يخرز عليه » ; Ibn Rushd la permet dans la maladie et, en bonne santé, par crainte d'une maladie ou du mauvais œil : « فظاهر هذه الرواية إجازته، وهو أولى بالصواب، وقد روي عنه كراهته ».",
    aqwal: [
      { auteur: "Mālik (audition d'Ashhab, d'après Ibn Ghāzī)", avis: "Rien n'empêche la femme en règles, la femme enceinte et l'enfant de porter du Coran, s'il est protégé (tube de fer, cuir cousu).", statut: "non_precise" },
      { auteur: "Ibn Rushd (d'après Ibn Ghāzī)", avis: "Permis dans la maladie ; en bonne santé, permis selon le sens apparent de cette riwāya, qu'il juge la plus juste ; une autre riwāya le déconseille.", statut: "non_precise" },
      { auteur: "Ibn Farḥūn (cité par al-Ḥaṭṭāb)", avis: "Permis à l'enfant, à la femme en règles et à la femme enceinte, si l'amulette est cousue dans une enveloppe ou mise dans la cire ; pas sans écran.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (al-Burzulī ; al-Dardīr : « أَحَدُ قَوْلَيْنِ »)", avis: "Celui qui n'est pas pur ne porte pas un Coran complet comme amulette ; l'autre avis le permet.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr pour l'amulette partielle couverte, même pour la femme en règles, l'accouchée et le junub, non pour le non-musulman (al-Dasūqī : « هَذَا الصَّوَابُ ») ; Coran complet porté comme amulette : non tranché (al-Dardīr : « أَحَدُ قَوْلَيْنِ » ; al-Dasūqī : « وَظَاهِرُ ح تَسَاوِي الْقَوْلَيْنِ وَاسْتَظْهَرَ شَيْخُنَا الْقَوْلَ بِالْمَنْعِ »).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb ne commente pas « وَحِرْزٍ » ; les citations d'Ibn Farḥūn et d'al-Burzulī sur l'amulette se trouvent sous « وَمَسَّ مُصْحَفٍ » (569/302–303)."
    ],
    divergences: [
      "Point à comparer — le Coran complet porté comme amulette. Al-Ḥaṭṭāb, d'après al-Burzulī : « فِيهِ خِلَافٌ ». Al-Dasūqī : « وَظَاهِرُ ح تَسَاوِي الْقَوْلَيْنِ وَاسْتَظْهَرَ شَيْخُنَا الْقَوْلَ بِالْمَنْعِ » (ح : Muḥammad al-Ḥaṭṭāb ; son maître al-ʿAdawī) ; « وَالْخِلَافُ فِي حَمْلِ الْكَامِلِ الَّذِي جُعِلَ حِرْزًا » ; « وَأَمَّا غَيْرُ الْكَامِلِ الَّذِي جُعِلَ حِرْزًا فَيَجُوزُ حَمْلُهُ قَوْلًا وَاحِدًا » ; et plus loin : « وَقَدْ تَقَدَّمَ أَنَّ ظَاهِرَ ح تَسَاوِيهِمَا ». Al-ʿAdawī, sur al-Kharashī : « وَظَاهِرُ الْحَطَّابِ اسْتِوَاءُ الْقَوْلَيْنِ ». Al-Dardīr : « فَالْكَامِلُ لَا يَجُوزُ … وَهُوَ أَحَدُ قَوْلَيْنِ ».",
      "Divergence — le non-musulman. Al-Dardīr : « لَا كَافِرٍ لِأَنَّهُ يُؤَدِّي إلَى امْتِهَانِهِ » ; al-Dasūqī : « هَذَا الصَّوَابُ وَمَا فِي بَعْضِ الشُّرَّاحِ مِنْ جَوَازِ تَعْلِيقِ الْحِرْزِ مِنْ الْقُرْآنِ عَلَى الْكَافِرِ فَقَدْ رَدَّهُ عج » (عج : sigle non défini dans la liste d'al-Dasūqī). Al-Kharashī le permettait : « مُسْلِمًا أَوْ كَافِرًا » ; al-ʿAdawī rapporte l'objection de عج : « إذْ لَيْسَ فِي النَّصِّ جَوَازُ تَعْلِيقِهِ عَلَى الْكَافِرِ ». Al-Ḥaṭṭāb n'en parle pas.",
      "Concordance — l'enveloppe. Al-Ḥaṭṭāb, d'après Ibn Farḥūn : « إذَا خُرِزَ عَلَيْهِ أَوْ جُعِلَ فِي شَمْعٍ » ; al-Dardīr : « مِنْ جِلْدٍ أَوْ غَيْرِهِ » ; al-Dasūqī : « أَيْ كَمُشَمَّعٍ » ; al-Kharashī : « قَالَ السَّنْهُورِيُّ وَلَا يَنْبَغِي مِنْ غَيْرِ سَاتِرٍ ».",
      "Complément — l'animal. Al-Dardīr : « بِخِلَافِ بَهِيمَةٍ فَيَجُوزُ » ; Ibn Ghāzī, d'après Ibn Rushd : « والخيل والبهائم كالآدمي » ; al-Kharashī : « وَكَذَا عَلَى الْبَهِيمَةِ لِعَيْنٍ حَصَلَتْ لَهَا أَوْ لِخَوْفِ حُصُولِهَا »."
    ],
    exemple: "Une mère en période de lochies porte au cou une petite amulette où sont écrits des versets, cousue dans un étui de cuir : c'est permis. La même amulette, sans étui, ne s'accroche pas.",
    erreurs_frequentes: [
      "Croire qu'une amulette coranique impose les ablutions à celui qui la porte.",
      "La porter sans enveloppe : il faut un écran qui la protège.",
      "Porter un Coran complet comme amulette en le croyant permis sans réserve : la question est discutée."
    ],
    termes: [
      { ar: "نُفَسَاء", translit: "noufasâ'", def: "Femme en période de lochies, après l'accouchement." },
      { ar: "امْتِهَان", translit: "imtihân", def: "Avilissement : traiter sans respect une chose sacrée." }
    ],
    quiz: [
      { q: "Sans ablutions, porter une amulette contenant des versets est permis :",
        choix: ["Toujours, même sans enveloppe", "Jamais", "Seulement au malade", "Si elle est enveloppée d'une protection"],
        bonne: 3,
        explication: "« يَقِيهِ مِنْ وُصُولِ أَذًى إلَيْهِ مِنْ جِلْدٍ أَوْ غَيْرِهِ »." },
      { q: "La femme en règles peut-elle la porter ?",
        choix: ["Oui, comme l'accouchée et le junub", "Non", "Seulement après la fin des règles", "Seulement si elle est malade"],
        bonne: 0,
        explication: "Le matn : « وَإِنْ لِحَائِضٍ » ; al-Dardīr : « وَنُفَسَاءَ وَجُنُبٍ »." },
      { q: "Mise en situation : un voisin non musulman demande qu'on lui accroche une amulette de versets. Selon al-Dardīr et al-Dasūqī :",
        choix: ["C'est permis s'il est malade", "C'est recommandé", "On ne le fait pas, car ce serait exposer le Coran au mépris", "C'est permis avec un étui"],
        bonne: 2,
        explication: "« لَا كَافِرٍ لِأَنَّهُ يُؤَدِّي إلَى امْتِهَانِهِ »." },
      { q: "Porter un Coran complet comme amulette sans être pur :",
        choix: ["Est permis sans divergence", "Est discuté : deux avis, qu'al-Ḥaṭṭāb laisse à égalité", "Est obligatoire en voyage", "N'est permis que pour un animal"],
        bonne: 1,
        explication: "« وَظَاهِرُ ح تَسَاوِي الْقَوْلَيْنِ »." }
    ],
    ref: { ouvrage: "al-Sharḥ al-kabīr (al-Dardīr) et Ḥāshiyat al-Dasūqī", tome: 1, pages: "126" },
    alertes: [
      "Limite du texte : la fin du segment, « وَحِرْزٍ بِسَاتِرٍ وَإِنْ لِحَائِضٍ », que donnent le Mukhtaṣar seul (11355, p. 17), Ibn Ghāzī (14605, p. 38), al-Dardīr (21604/125) et al-Kharashī (91, p. 160), manque au « ص » de Mawāhib, et al-Ḥaṭṭāb ne la commente pas (569/302–304 relus) ; fiche rédigée d'après al-Dardīr / al-Dasūqī, avec les citations d'Ibn Farḥūn et d'al-Burzulī qu'al-Ḥaṭṭāb donne sous le segment 20, Ibn Ghāzī et al-Kharashī ; `ref` sur al-Dardīr (n° 380).",
      "Corrigé (campagne de correction) : dans la citation d'Ibn Farḥūn, « عَلَى الْحَامِلُ » (569/303) : génitif après عَلَى ; al-Kharashī (91, p. 159) : « وَالْحَامِلِ » ; Ibn Ghāzī (14605, p. 38), d'après la riwāya d'Ashhab : « والحبلى » (n° 381).",
      "Précisé (campagne de correction) : dans la même citation, « إذَا خُرِزَ عَلَيْهِ » (569/303) ; al-Kharashī (91, p. 159) : « إذَا أُحْرِزَ عَلَيْهِ » ; Ibn Ghāzī (14605, p. 38), d'après la riwāya d'Ashhab : « أو جلد يخرز عليه » : la lecture de Mawāhib est appuyée ; laissée (n° 382).",
      "Ibn Ghāzī cité sans voyelles, tel qu'imprimé ; un appel de note coupe la citation de Mālik (« … »).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 126 (Shamela 21604, page 125)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-06-syn",
    type: "synthese",
    kitab: "tah", bab: "01", fasl: "06",
    titre: "Ce qui annule les ablutions, et ce que le ḥadath interdit",
    quiz: [
      { q: "Ce qui sort habituellement des deux voies (urine, vent, madhy…) :",
        choix: ["Annule les ablutions", "N'annule que s'il est abondant", "N'annule pas", "N'annule que pendant la prière"],
        bonne: 0, explication: "Voir la fiche 01." },
      { q: "Le sommeil léger, même long :",
        choix: ["Annule les ablutions", "Oblige au grand lavage", "N'annule pas, mais refaire ses ablutions est recommandé", "N'annule que la nuit"],
        bonne: 2, explication: "Voir la fiche 06b." },
      { q: "Toucher une personne qu'on désire d'ordinaire annule les ablutions :",
        choix: ["Toujours", "Jamais", "Seulement à travers un vêtement", "S'il y a recherche ou sensation de plaisir"],
        bonne: 3, explication: "Voir les fiches 07 et 09b." },
      { q: "L'homme qui touche directement son propre membre :",
        choix: ["Garde ses ablutions s'il n'a pas de plaisir", "Refait ses ablutions, avec ou sans plaisir", "Doit faire le grand lavage", "Ne les refait que s'il l'a fait exprès"],
        bonne: 1, explication: "Voir la fiche 12a." },
      { q: "Sûr de ses ablutions, il doute d'avoir eu ensuite un ḥadath (sans être sujet au doute chronique) :",
        choix: ["Il refait ses ablutions avant de prier", "Il n'en tient pas compte", "Il fait l'ablution sèche", "Il attend la prière suivante"],
        bonne: 0, explication: "Voir les fiches 14 et 15." },
      { q: "Vomir, manger de la viande de chameau ou se faire poser des ventouses :",
        choix: ["Annule les ablutions", "Oblige à se rincer la bouche", "N'annule pas les ablutions", "Annule seulement la prière en cours"],
        bonne: 2, explication: "Voir la fiche 16b." },
      { q: "Sans ablutions, toucher le muṣḥaf avec un bâton est :",
        choix: ["Permis", "Recommandé", "Permis pour une seule page", "Interdit"],
        bonne: 3, explication: "Voir la fiche 20a." },
      { q: "Sans ablutions, l'élève qui apprend peut toucher :",
        choix: ["Rien du Coran", "La tablette et une partie du Coran (et, selon l'avis retenu, le muṣḥaf complet)", "Seulement un livre de tafsîr", "Seulement le muṣḥaf complet"],
        bonne: 1, explication: "Voir les fiches 21b et 22a." }
    ]
  }

  /* FIN-UNITE-50 */
  ,
  /* ================================================================== */
  /* Unité 51 — tah-01-07-01 à -06 (dont 04b) : début du faṣl du ghousl */
  /* Mawāhib, t. 1, p. 305–308 (Shamela 569/304–307) ; al-Dardīr / al-Dasūqī, t. 1, p. 126–129 (Shamela 21604/125–128) */
  {
    id: "tah-01-07-01",
    kitab: "tah", bab: "01", fasl: "07", ordre: 1,
    titre: "Le ghousl : laver tout le corps apparent ; première cause, le sperme",
    titre_ar: "فَصْلٌ يَجِبُ غُسْلُ ظَاهِرِ الْجَسَدِ بِمَنِيٍّ",
    objectif: "Savoir ce que le ghousl doit atteindre, et que la sortie du sperme avec un plaisir habituel en est la première cause.",
    matn: "فَصْلٌ يَجِبُ غُسْلُ ظَاهِرِ الْجَسَدِ بِمَنِيٍّ",
    regle_pratique: "Le ghousl obligatoire consiste à faire arriver l'eau sur tout l'extérieur du corps, y compris le creux du nombril, les plis, les aisselles et ce qui est caché sous le menton (la bouche, le nez et le conduit des oreilles relèvent de la sunna) ; il devient obligatoire quand le sperme sort avec un plaisir habituel, chez l'homme comme chez la femme.",
    qualification: {
      hukm: "fard",
      nature: "rukn",
      effet_si_omis: "Une partie du corps apparent laissée sèche rend le ghousl incomplet ; le passage ne précise pas ici d'autre conséquence."
    },
    explication: "Après la petite purification (le woudoû'), Khalīl passe à la grande, le ghousl (غُسْل). Al-Ḥaṭṭāb : « يَعْنِي أَنَّ الْوَاجِبَ إنَّمَا هُوَ تَعْمِيمُ ظَاهِرِ الْجَسَدِ وَأَمَّا الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ فَلَيْسَتَا وَاجِبَتَيْنِ وَإِنَّمَا هُمَا سُنَّتَانِ », de même l'essuyage du conduit de l'oreille (صِمَاخ).\n\nLe corps apparent comprend des endroits que les savants ont signalés. Al-Ḥaṭṭāb cite la Risāla et le commentaire de Zarrūq : suivre le creux du nombril (سُرَّة), « لَا سِيَّمَا إنْ كَثُرَتْ تَكَامِيشُهُ أَوْ ارْتَفَعَتْ دَائِرَتُهُ لِسِمَنٍ أَوْ نَحْوِهِ » ; ce qui est sous la gorge, « أَيْ مَا سَتَرَهُ الذَّقَنُ لِسِمَنٍ وَنَحْوِهِ », et les aisselles ; passer l'eau entre les doigts des mains, « وُجُوبًا عَلَى الْمَشْهُورِ » ; frotter les talons et les tendons d'Achille ; pour les orteils, la règle des ablutions, où l'avis répandu est la recommandation.\n\nLa première cause du ghousl est la sortie du sperme (مَنِيّ) avec un plaisir habituel : « فَالسَّبَبُ الْأَوَّلُ هُوَ خُرُوجُ الْمَنِيِّ بِسَبَبِ لَذَّةٍ مُعْتَادَةٍ » ; Khalīl sous-entend ce plaisir, que montre la suite du matn (« لَا بِلَا لَذَّةٍ أَوْ غَيْرِ مُعْتَادَةٍ », fiche 04). Al-Dardīr précise, pour la femme, « أَيْ بُرُوزِهِ عَنْ الْفَرْجِ فِي حَقِّ الْمَرْأَةِ لَا مُجَرَّدُ إحْسَاسِهَا بِانْفِصَالِهِ خِلَافًا لِسَنَدٍ » (voir les divergences).",
    aqwal: [
      { auteur: "Zarrūq (sur la Risāla, cité par al-Ḥaṭṭāb)", avis: "Passer l'eau entre les doigts des mains dans le ghousl est obligatoire.", statut: "mashhur" },
      { auteur: "Avis rapporté sans attribution (d'après Zarrūq)", avis: "C'est seulement recommandé, comme dans les ablutions.", statut: "qawl" },
      { auteur: "Mālik (d'après aṭ-Ṭirāz, cité par al-Ḥaṭṭāb)", avis: "Il ne connaît pas l'obligation de passer l'eau entre les orteils, ni dans les ablutions ni dans le ghousl de janâba.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb (d'après aṭ-Ṭirāz)", avis: "Celui qui ne frotte pas les orteils dans le ghousl de janâba : son ghousl ne suffit pas.", statut: "non_precise" },
      { auteur: "Sanad (d'après al-Dardīr et al-Dasūqī)", avis: "Pour la femme, il suffit qu'elle sente le sperme se détacher de son siège, même s'il ne sort pas.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : laver tout le corps apparent, hors la bouche, le nez et le conduit des oreilles ; les plis et le nombril en font partie ; pour la femme, la sortie du sperme jusqu'à l'endroit qu'elle lave en se nettoyant (al-Dasūqī), contre Sanad. Orteils : al-Dasūqī tient leur passage pour obligatoire « عَلَى الرَّاجِحِ » (voir les divergences).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb lit « بِمَنِيٍّ » comme « à cause de la sortie d'un sperme venu d'un plaisir habituel » : « أَيْ بِسَبَبِ خُرُوجِ مَنِيٍّ كَائِنٍ لِلَّذَّةِ الْمُعْتَادَةِ ».",
      "Il rapporte d'aṭ-Ṭirāz (Sanad) que le premier avis sur les orteils (celui de Mālik) est le plus apparent, car le lavage d'un même membre est de même nature dans les ablutions et le ghousl : « وَالْأَوَّلُ أَظْهَرُ »."
    ],
    divergences: [
      "Divergence — les orteils. Al-Ḥaṭṭāb, d'après Zarrūq : « وَفِي تَخْلِيلِ أَصَابِعِهِمَا مَا فِي الْوُضُوءِ، وَقَدْ تَقَدَّمَ الْمَشْهُورُ النَّدْبُ », et d'après aṭ-Ṭirāz, l'avis de Mālik préféré. Al-Dasūqī : « وَمِنْهُ أَيْضًا أَصَابِعُ الرِّجْلَيْنِ عَلَى الرَّاجِحِ كَأَصَابِعِ الْيَدَيْنِ فَيَجِبُ عَلَيْهِ تَخْلِيلُ ذَلِكَ كُلِّهِ ».",
      "Concordance — ce qui n'est pas « apparent ». Al-Ḥaṭṭāb : bouche, nez et conduit de l'oreille relèvent de la sunna. Al-Dardīr : « وَلَيْسَ مِنْهُ الْفَمُ وَالْأَنْفُ وَصِمَاخُ الْأُذُنَيْنِ وَالْعَيْنَيْنِ », mais « بَلْ التَّكَامِيشُ بِدُبُرٍ أَوْ غَيْرِهِ فَيَسْتَرْخِي قَلِيلًا وَالسُّرَّةُ ».",
      "Point à comparer — la sortie du sperme chez la femme. Al-Dardīr : « لَا مُجَرَّدُ إحْسَاسِهَا بِانْفِصَالِهِ خِلَافًا لِسَنَدٍ » ; al-Dasūqī, d'après « ح » (Muḥammad al-Ḥaṭṭāb) : « وُصُولُهُ لِمَحَلِّ مَا يُغْسَلُ عِنْدَ الِاسْتِنْجَاءِ وَهُوَ مَا يَبْدُو مِنْهَا عِنْدَ الْجُلُوسِ لِقَضَاءِ الْحَاجَةِ، كَمَا قَالَهُ ح » ; Sanad : « خُرُوجُ مَاءِ الْمَرْأَةِ لَيْسَ بِشَرْطٍ فِي جَنَابَتِهَا » ; al-Dasūqī limite la divergence à l'état de veille : « وَأَمَّا فِي النَّوْمِ فَلَا بُدَّ مِنْ بُرُوزِهِ مِنْهَا قَطْعًا ». Al-Ḥaṭṭāb cite al-Ubbī dans le même sens (voir la fiche 03).",
      "Divergence — l'homme. Al-Dardīr : « وَانْفِصَالُهُ عَنْ مَقَرِّهِ بِأَنْ وَصَلَ إلَى قَصَبَةِ الذَّكَرِ فِي حَقِّ الرَّجُلِ ». Al-Dasūqī : « هَذَا غَيْرُ صَحِيحٍ بَلْ الْمَنْصُوصُ عَلَيْهِ فِي الرَّجُلِ أَنَّهُ لَا يَجِبُ عَلَيْهِ الْغُسْلُ حَتَّى يَبْرُزَ الْمَنِيُّ عَنْ الذَّكَرِ كَمَا صَرَّحَ بِهِ الْأَبِيُّ فِي شَرْحِ مُسْلِمٍ وَنَقَلَهُ عَنْهُ ح » (voir la fiche 03)."
    ],
    exemple: "Un homme corpulent prend son ghousl : il fait couler l'eau dans le creux de son nombril, sous son menton et dans ses aisselles, et passe l'eau entre ses doigts ; il se rince aussi la bouche et le nez, mais au titre de la sunna.",
    erreurs_frequentes: [
      "Croire que se rincer la bouche et le nez est une obligation du ghousl : ce sont des sunna.",
      "Laisser sèches les parties cachées (nombril, plis, aisselles, dessous du menton).",
      "Croire que tout écoulement de sperme impose le ghousl : il faut un plaisir habituel (fiche 04)."
    ],
    termes: [
      { ar: "جَنَابَة", translit: "janâba", def: "État de celui qui doit faire le ghousl après un rapport ou la sortie du sperme." },
      { ar: "سُرَّة", translit: "sourra", def: "Nombril." },
      { ar: "تَكَامِيش", translit: "takâmîch", def: "Plis, replis de la peau (pluriel)." },
      { ar: "لَذَّةٌ مُعْتَادَة", translit: "ladhdha mouʿtâda", def: "Plaisir habituel : celui du rapport, du regard ou de la pensée, par opposition à un plaisir venu d'une cause inhabituelle." }
    ],
    quiz: [
      { q: "Dans le ghousl obligatoire, se rincer la bouche et aspirer l'eau par le nez sont :",
        choix: ["Des sunna", "Des obligations", "Interdits", "Déconseillés"],
        bonne: 0,
        explication: "« وَأَمَّا الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ فَلَيْسَتَا وَاجِبَتَيْنِ وَإِنَّمَا هُمَا سُنَّتَانِ »." },
      { q: "Selon al-Dardīr, font partie du corps apparent à laver :",
        choix: ["La bouche et le nez", "L'intérieur des yeux", "Les plis et le nombril", "Le conduit des oreilles"],
        bonne: 2,
        explication: "« بَلْ التَّكَامِيشُ بِدُبُرٍ أَوْ غَيْرِهِ فَيَسْتَرْخِي قَلِيلًا وَالسُّرَّةُ »." },
      { q: "Mise en situation : une femme se réveille sans aucune trace, mais se souvient d'un rêve. Selon al-Dasūqī :",
        choix: ["Elle fait le ghousl dans tous les cas", "Elle fait seulement ses ablutions", "Elle fait le ghousl seulement si elle a senti le plaisir", "Dans le sommeil, il faut que le sperme soit sorti pour qu'elle fasse le ghousl"],
        bonne: 3,
        explication: "« وَأَمَّا فِي النَّوْمِ فَلَا بُدَّ مِنْ بُرُوزِهِ مِنْهَا قَطْعًا »." },
      { q: "La première cause du ghousl, selon al-Ḥaṭṭāb, est :",
        choix: ["Tout écoulement de sperme", "La sortie du sperme avec un plaisir habituel", "Le simple plaisir sans sortie", "Le contact d'une personne désirable"],
        bonne: 1,
        explication: "« فَالسَّبَبُ الْأَوَّلُ هُوَ خُرُوجُ الْمَنِيِّ بِسَبَبِ لَذَّةٍ مُعْتَادَةٍ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "305" },
    alertes: [
      "Précisé (campagne de correction) : dans les citations de la Risāla et de Zarrūq, « وَيَغْسِلُ رِجْلَيْهِ آخِرَ ذَلِكَ » revient deux fois de suite (569/304), la seconde avec sa suite ; doublet de l'édition, sans effet sur le sens (n° 383).",
      "Le « وَالْأَوَّلُ أَظْهَرُ » sur les orteils est de Sanad (citation d'aṭ-Ṭirāz close par « انْتَهَى »), non d'al-Ḥaṭṭāb ; rapporté en remarque, hors de `tarjih_hattab`.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 126–127 (Shamela 21604, pages 125–126)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-02",
    kitab: "tah", bab: "01", fasl: "07", ordre: 2,
    titre: "… même pendant le sommeil",
    titre_ar: "وَإِنْ بِنَوْمٍ",
    objectif: "Savoir quand le rêve oblige au ghousl : s'il y a trace de sperme, et non le simple souvenir d'un plaisir.",
    matn: "وَإِنْ بِنَوْمٍ",
    regle_pratique: "Le sperme sorti pendant le sommeil oblige au ghousl, homme ou femme ; celui qui se souvient d'un plaisir en rêve mais ne trouve aucune trace au réveil n'a pas de ghousl à faire ; celui qui trouve du sperme sans se souvenir d'un rêve fait le ghousl.",
    qualification: {
      hukm: "fard",
      nature: "autre",
      effet_si_omis: "Le passage ne précise pas de conséquence propre au sommeil ; voir la fiche 01."
    },
    explication: "Al-Ḥaṭṭāb : « يَعْنِي أَنَّهُ يَجِبُ غُسْلُ ظَاهِرِ الْجَسَدِ بِسَبَبِ خُرُوجِ الْمَنِيِّ لِلَّذَّةِ … الْمُعْتَادَةِ وَلَوْ كَانَ خُرُوجُهُ فِي حَالَةِ النَّوْمِ ». Si le plaisir et la sortie ont lieu ensemble dans le sommeil, « فَلَا خِلَافَ فِي وُجُوبِ الْغُسْلِ، وَسَوَاءٌ فِي ذَلِكَ الرَّجُلُ وَالْمَرْأَةُ ».\n\nPlaisir sans trace : « ثُمَّ اسْتَيْقَظَ وَلَمْ يَجِدْ بَلَلًا فَلَا غُسْلَ عَلَيْهِ » ; al-Ḥaṭṭāb rappelle que le Prophète ﷺ a été interrogé à ce sujet et a répondu qu'il n'y a pas de ghousl (Abū Dāwud et at-Tirmidhī). Si le sperme sort ensuite : « فَفِي وُجُوبِ الْغُسْلِ قَوْلَانِ الْمَشْهُورُ الْوُجُوبُ ».\n\nTrace sans souvenir : al-Qarāfī rapporte le consensus, « وَإِجْمَاعُ الْأُمَّةِ عَلَى أَنَّ مَنْ اسْتَيْقَظَ وَوَجَدَ الْمَنِيَّ وَلَمْ يَرَ احْتِلَامًا أَنَّ عَلَيْهِ الْغُسْلَ » ; mais al-Bājī rapporte de Mujāhid l'avis contraire, et Ibn Rāshid, dans son commentaire d'Ibn al-Ḥājib, donne deux avis : « وَإِنْ وَجَدَ الْأَثَرَ وَلَمْ يَذْكُرْ أَنَّهُ احْتَلَمَ فَفِي وُجُوبِ الْغُسْلِ قَوْلَانِ ». Al-Ḥaṭṭāb invite à comparer (« وَانْظُرْ »).",
    aqwal: [
      { auteur: "Avis rapporté sans attribution (al-Ḥaṭṭāb)", avis: "Plaisir en rêve, puis sortie du sperme après le réveil : le ghousl est obligatoire.", statut: "mashhur" },
      { auteur: "Avis rapporté sans attribution (al-Ḥaṭṭāb)", avis: "Dans ce même cas, le ghousl n'est pas obligatoire.", statut: "qawl" },
      { auteur: "Al-Qarāfī (adh-Dhakhīra)", avis: "Consensus : celui qui trouve du sperme au réveil sans souvenir de rêve fait le ghousl.", statut: "non_precise" },
      { auteur: "Mujāhid (d'après al-Bājī, al-Muntaqā)", avis: "S'il ne se souvient de rien, il n'a rien à faire.", statut: "non_precise" },
      { auteur: "Ibn Rāshid (commentaire d'Ibn al-Ḥājib)", avis: "Trace sans souvenir : deux avis sur l'obligation du ghousl.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le sperme sorti dans le sommeil oblige au ghousl, « بِلَذَّةٍ مُعْتَادَةٍ أَوْ لَا بَلْ وَلَوْ بِلَا لَذَّةٍ أَصْلًا عَلَى الْمُعْتَمَدِ » ; al-Dasūqī discute ce dernier point (voir les divergences).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb relève l'écart entre le consensus rapporté par al-Qarāfī et les deux avis rapportés par Ibn Rāshid, et invite à l'examiner : « وَانْظُرْ هَذَا الَّذِي نَقَلَهُ مِنْ الْإِجْمَاعِ »."
    ],
    divergences: [
      "Point à comparer — sperme trouvé après un rêve d'une cause inhabituelle. Al-Dardīr : « بَلْ وَلَوْ بِلَا لَذَّةٍ أَصْلًا عَلَى الْمُعْتَمَدِ ». Al-Dasūqī : « تَبِعَ فِي هَذَا الْإِطْلَاقِ عج مُعْتَرِضًا بِهِ عَلَى ح وتت الْقَائِلَيْنِ إذَا رَأَى فِي مَنَامِهِ أَنَّ عَقْرَبًا لَدَغَتْهُ فَأَمْنَى … لَمْ يَجِبْ الْغُسْلُ » (ح : Muḥammad al-Ḥaṭṭāb ; عج et تت : sigles non définis dans la liste d'al-Dasūqī), puis : « وَبِالْجُمْلَةِ فَلَا نَصَّ فِي الْمَسْأَلَةِ وَمَا تَمَسَّكَ بِهِ عج فِي رَدِّهِ عَلَى ح وتت وَاهٍ جِدًّا اُنْظُرْ بْن » (بن : Muḥammad al-Bunānī). Le passage d'al-Ḥaṭṭāb visé n'est pas dans Mawāhib, t. 1, p. 305–308 (voir les alertes).",
      "Concordance — trace sans souvenir. Al-Ḥaṭṭāb, d'après al-Qarāfī : le ghousl. Al-Bājī (al-Muntaqā) : « فَالَّذِي عَلَيْهِ جُمْهُورُ الْفُقَهَاءِ أَنَّ الْغُسْلَ وَجَبَ عَلَيْهِ » ; « وَقَالَ مُجَاهِدٌ لَا غُسْلَ عَلَيْهِ »."
    ],
    exemple: "Un jeune homme se souvient au réveil d'un rêve, mais ne trouve aucune trace : il n'a pas de ghousl à faire. Le lendemain, il trouve une trace sans se souvenir de rien : il fait le ghousl.",
    erreurs_frequentes: [
      "Faire le ghousl pour un simple souvenir de rêve, sans trace.",
      "Ne pas faire le ghousl parce qu'on ne se souvient d'aucun rêve, alors qu'on trouve du sperme.",
      "Croire que la règle du sommeil ne vaut que pour l'homme."
    ],
    termes: [],
    quiz: [
      { q: "Au réveil, aucune trace, mais le souvenir d'un plaisir en rêve :",
        choix: ["Ghousl obligatoire", "Ghousl recommandé", "Ablutions obligatoires", "Pas de ghousl"],
        bonne: 3,
        explication: "« ثُمَّ اسْتَيْقَظَ وَلَمْ يَجِدْ بَلَلًا فَلَا غُسْلَ عَلَيْهِ »." },
      { q: "Mise en situation : vous trouvez une trace de sperme au réveil, sans souvenir de rêve. Selon le consensus rapporté par al-Qarāfī :",
        choix: ["Vous faites le ghousl", "Vous ne faites rien", "Vous faites seulement vos ablutions", "Vous lavez seulement le vêtement"],
        bonne: 0,
        explication: "« أَنَّ مَنْ اسْتَيْقَظَ وَوَجَدَ الْمَنِيَّ وَلَمْ يَرَ احْتِلَامًا أَنَّ عَلَيْهِ الْغُسْلَ »." },
      { q: "Plaisir en rêve, et le sperme ne sort qu'après le réveil. L'avis répandu :",
        choix: ["Pas de ghousl", "Le ghousl est obligatoire", "Seulement les ablutions", "Le ghousl est recommandé"],
        bonne: 1,
        explication: "« فَفِي وُجُوبِ الْغُسْلِ قَوْلَانِ الْمَشْهُورُ الْوُجُوبُ »." },
      { q: "Qui, selon al-Bājī, ne demande rien à celui qui ne se souvient de rien ?",
        choix: ["Mālik", "Al-Qarāfī", "Mujāhid", "Ibn Rāshid"],
        bonne: 2,
        explication: "« وَقَالَ مُجَاهِدٌ لَا غُسْلَ عَلَيْهِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "305–306" },
    alertes: [
      "Le passage d'al-Ḥaṭṭāb visé par al-Dasūqī (rêve d'une piqûre de scorpion, démangeaison) n'est pas dans Mawāhib, t. 1, p. 305–308 (569/304–307 relus) ; à chercher plus loin dans le faṣl.",
      "Le mot « لِلَّذَّةِ » et « الْمُعْتَادَةِ » sont séparés par un changement de page (569/304–305) : citation en deux morceaux.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 127 (Shamela 21604, page 126)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-03",
    kitab: "tah", bab: "01", fasl: "07", ordre: 3,
    titre: "… ou après la fin du plaisir, sans rapport",
    titre_ar: "أَوْ بَعْدَ ذَهَابِ لَذَّةٍ بِلَا جِمَاعٍ وَلَمْ يَغْتَسِلْ",
    objectif: "Savoir que le sperme qui sort après la fin d'un plaisir sans rapport oblige au ghousl, et qu'un plaisir sans sortie n'y oblige pas.",
    matn: "أَوْ بَعْدَ ذَهَابِ لَذَّةٍ بِلَا جِمَاعٍ وَلَمْ يَغْتَسِلْ",
    regle_pratique: "Celui qui a éprouvé un plaisir sans rapport (regard, pensée, caresse) et dont le sperme sort après coup doit faire le ghousl, même s'il s'était déjà lavé avant la sortie ; tant que le sperme n'est pas sorti, il n'y a pas de ghousl.",
    qualification: {
      hukm: "fard",
      nature: "autre",
      effet_si_omis: "Un ghousl fait avant la sortie du sperme ne compte pas : il faut le refaire après la sortie."
    },
    explication: "Al-Ḥaṭṭāb : le ghousl est dû pour le sperme venu d'un plaisir habituel sans rapport, « وَلَوْ خَرَجَ بَعْدَ ذَهَابِهَا » ; « وَمَا ذَكَرَهُ هُوَ الْمَشْهُورُ وَقِيلَ: لَا يَجِبُ الْغُسْلُ لِعَدَمِ الْمُقَارَنَةِ لِلَّذَّةِ ».\n\nLes mots « وَلَمْ يَغْتَسِلْ » ne doivent pas être pris à la lettre : « وَلَا مَفْهُومَ لِقَوْلِهِ: وَلَمْ يَغْتَسِلْ » ; celui qui se lave avant la sortie doit refaire son ghousl, car le premier « لَا فَائِدَةَ فِيهِ لِعَدَمِ وُجُوبِهِ ». Al-Ḥaṭṭāb discute les explications proposées : il écrit que Khalīl aurait été plus clair en disant « وَلَوْ اغْتَسَلَ » ; il rapporte la variante « أَوْ بِهِ » de certaines copies, « وَهُوَ إصْلَاحٌ بِتَكَلُّفٍ » ; il conteste Bahrām (« الشَّارِحُ »), qui parlait d'absence de divergence.\n\nLe sperme qui se déplace sans sortir : Ibn al-ʿArabī (al-ʿĀriḍa) : « إذَا انْتَقَلَ الْمَنِيُّ وَلَمْ يَظْهَرْ لَمْ يُوجِبْ غُسْلًا » ; al-Ubbī : pas de ghousl s'il n'atteint que la base ou le milieu du membre ; pour la femme, s'il atteint l'endroit qu'elle lave en se nettoyant, « وَهُوَ مَا يَظْهَرُ عِنْدَ جُلُوسِهَا عِنْدَ قَضَاءِ الْحَاجَةِ اغْتَسَلَتْ » ; la vierge seulement s'il sort. Ibn Rushd (Ajwiba) : celui qui a rêvé et dont le sperme sort après ses ablutions fait le ghousl.",
    aqwal: [
      { auteur: "Avis rapporté sans attribution (al-Ḥaṭṭāb)", avis: "Le sperme sorti après la fin du plaisir oblige au ghousl.", statut: "mashhur" },
      { auteur: "Avis rapporté sans attribution (al-Ḥaṭṭāb ; aṭ-Ṭirāz)", avis: "Pas de ghousl, faute de simultanéité avec le plaisir.", statut: "qawl" },
      { auteur: "Ibn al-ʿArabī (al-ʿĀriḍa)", avis: "Le sperme qui se déplace sans paraître n'oblige pas au ghousl.", statut: "non_precise" },
      { auteur: "Al-Ubbī (commentaire de Muslim)", avis: "L'homme : seulement s'il sort ; la femme : s'il atteint l'endroit qu'elle lave en se nettoyant ; la vierge : seulement s'il sort d'elle.", statut: "non_precise" },
      { auteur: "Ibn Rushd (Ajwiba)", avis: "Celui qui a rêvé sans émission puis émet après ses ablutions fait le ghousl.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : ghousl obligatoire, « سَوَاءٌ اغْتَسَلَ قَبْلَ خُرُوجِ الْمَنِيِّ لِظَنِّهِ أَنَّهُ يَجِبُ عَلَيْهِ الْغُسْلُ بِمُجَرَّدِ اللَّذَّةِ جَهْلًا مِنْهُ أَوْ لَمْ يَغْتَسِلْ » ; « فَقَوْلُهُ (وَلَمْ يَغْتَسِلْ) لَا مَفْهُومَ لَهُ ».",
    tarjih_hattab: "Il tient pour la meilleure lecture de Khalīl que « وَلَمْ يَغْتَسِلْ » n'a pas de sens implicite, et juge plus forcées les autres : « هَذَا أَوْلَى مَا يُعْتَذَرُ بِهِ عَنْ كَلَامِ الْمُصَنِّفِ » ; il conteste Bahrām : « قَوْلُهُ: يَجِبُ عَلَيْهِ الْغُسْلُ بِلَا خِلَافٍ، غَيْرُ ظَاهِرٍ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb note que, si une partie du sperme est sortie avec le plaisir et qu'on s'est lavé, le reste qui sort ensuite n'oblige pas à refaire le ghousl selon l'avis répandu.",
      "La divergence, dit-il, repose sur la question de savoir si le ghousl exige que la sortie soit simultanée au plaisir."
    ],
    divergences: [
      "Concordance — « وَلَمْ يَغْتَسِلْ ». Al-Ḥaṭṭāb : « وَلَا مَفْهُومَ لِقَوْلِهِ ». Al-Dardīr : « فَقَوْلُهُ (وَلَمْ يَغْتَسِلْ) لَا مَفْهُومَ لَهُ ». Al-Dasūqī rapporte, d'après al-Bunānī (بن), l'explication d'Ibn Ghāzī par la sortie en deux fois, celle qu'al-Ḥaṭṭāb discute en premier.",
      "Concordance — le sperme qui ne sort pas. Al-Ḥaṭṭāb, d'après al-Ubbī et Ibn al-ʿArabī. Al-Dasūqī : « كَمَا صَرَّحَ بِهِ الْأَبِيُّ فِي شَرْحِ مُسْلِمٍ وَنَقَلَهُ عَنْهُ ح وَمِثْلُهُ فِي الْعَارِضَةِ لِابْنِ الْعَرَبِيِّ » (ح : Muḥammad al-Ḥaṭṭāb).",
      "Complément — sommeil puis veille. Al-Dasūqī : « وَالظَّاهِرُ تَلْفِيقُ حَالَةِ النَّوْمِ لِحَالَةِ الْيَقِظَةِ » : plaisir dans le sommeil, sortie au réveil sans plaisir, ghousl. Al-Ḥaṭṭāb rapporte la même réponse d'Ibn Rushd.",
      "Complément — la variante « أَوْ بِهِ ». Ibn Ghāzī : « فِي النسخة المقروءة عَلَى أبي عبد الله بن الفتوح: صوابه أو به ولَمْ يغتسل ». Al-Ḥaṭṭāb : « وَهُوَ إصْلَاحٌ بِتَكَلُّفٍ »."
    ],
    exemple: "Un homme pense à son épouse et en éprouve du plaisir, sans émission ; une heure plus tard, après ses ablutions, du sperme sort : il doit faire le ghousl. S'il s'était lavé par erreur juste après le plaisir, ce premier lavage ne compte pas.",
    erreurs_frequentes: [
      "Faire le ghousl pour un simple plaisir sans sortie et croire qu'il suffit pour la sortie qui suit.",
      "Croire que le sperme sorti après coup, sans plaisir à ce moment-là, n'oblige pas au ghousl.",
      "Croire que le sperme qui se déplace sans sortir oblige au ghousl."
    ],
    termes: [
      { ar: "إِنْزَال", translit: "inzâl", def: "Émission, sortie du sperme." }
    ],
    quiz: [
      { q: "Plaisir sans rapport, puis sortie du sperme une fois le plaisir passé. Selon l'avis répandu :",
        choix: ["Ghousl obligatoire", "Seulement les ablutions", "Rien", "Ghousl recommandé"],
        bonne: 0,
        explication: "« وَمَا ذَكَرَهُ هُوَ الْمَشْهُورُ »." },
      { q: "Les mots « وَلَمْ يَغْتَسِلْ » de Khalīl, selon al-Ḥaṭṭāb et al-Dardīr :",
        choix: ["Dispensent du ghousl celui qui s'est déjà lavé", "Imposent deux ghousl", "Visent seulement la femme", "N'ont pas de sens implicite à retenir"],
        bonne: 3,
        explication: "« وَلَا مَفْهُومَ لِقَوْلِهِ: وَلَمْ يَغْتَسِلْ »." },
      { q: "Mise en situation : après un plaisir sans émission, quelqu'un fait le ghousl par précaution ; le sperme sort ensuite. Il doit :",
        choix: ["Ne rien faire, il s'est déjà lavé", "Faire seulement ses ablutions", "Refaire le ghousl après la sortie", "Laver seulement l'endroit"],
        bonne: 2,
        explication: "Le premier ghousl « لَا فَائِدَةَ فِيهِ لِعَدَمِ وُجُوبِهِ »." },
      { q: "Le sperme qui se déplace sans paraître, selon Ibn al-ʿArabī :",
        choix: ["Oblige au ghousl", "N'oblige pas au ghousl", "Oblige au tayammoum", "Oblige au ghousl chez la femme seulement"],
        bonne: 1,
        explication: "« إذَا انْتَقَلَ الْمَنِيُّ وَلَمْ يَظْهَرْ لَمْ يُوجِبْ غُسْلًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "306–307" },
    alertes: [
      "Précisé (campagne de correction) : « أَوْ بَعْدَ ذَهَابِ » ; certaines copies portent « أَوْ بِهِ » (al-Ḥaṭṭāb, 569/305 ; Ibn Ghāzī, 14605, p. 38, d'après la copie lue devant Ibn al-Futūḥ) ; matn laissé selon le « ص », comme le Mukhtaṣar seul, Ibn Ghāzī, al-Dardīr et al-Kharashī (n° 384).",
      "Non résolu : la phrase « الْمَفْهُومُ هُنَا غَيْرُ مُعْتَبَرٍ؛ لِأَنَّهُ خَرَجَ لِبَيَانِ أَنَّ الْحُكْمَ فِي وُجُودِ اللَّذَّةِ مَعَ عَدَمِ خُرُوجِ الْمَنِيِّ » (569/305) paraît altérée ; aucun témoin ; non utilisée (n° 385).",
      "Précisé (campagne de correction) : « وَجَزَمَ صَاحِبُ الطِّرَازِ بِوُجُوبِ الْغُسْلِ فَانْظُرْهُ » (569/306) ne dit pas pour quel cas ; al-Dasūqī (21604/125–126) rapporte de Sanad le ghousl de la femme qui sent le sperme se détacher (« وَخِلَافُ سَنَدٍ إنَّمَا هُوَ فِي الْمَرْأَةِ ») : c'est sans doute ce cas ; non utilisé dans la règle (n° 386).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 127 (Shamela 21604, page 126)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-04",
    kitab: "tah", bab: "01", fasl: "07", ordre: 4,
    titre: "Pas sans plaisir, ou avec un plaisir inhabituel ; mais les ablutions",
    titre_ar: "لَا بِلَا لَذَّةٍ أَوْ غَيْرِ مُعْتَادَةٍ وَيَتَوَضَّأُ",
    objectif: "Savoir que le sperme sorti sans plaisir, ou avec un plaisir d'une cause inhabituelle, n'oblige pas au ghousl, mais annule les ablutions.",
    matn: "لَا بِلَا لَذَّةٍ أَوْ غَيْرِ مُعْتَادَةٍ وَيَتَوَضَّأُ",
    regle_pratique: "Le sperme qui sort, en état de veille, sans plaisir (maladie, coup, piqûre) ou avec un plaisir d'une cause inhabituelle (eau chaude, démangeaison, secousses d'une monture) n'oblige pas au ghousl, mais il faut refaire ses ablutions ; s'il a senti le début du plaisir et l'a laissé continuer jusqu'à l'émission, al-Dardīr distingue selon la cause.",
    qualification: {
      hukm: "wajib",
      nature: "autre",
      effet_si_omis: "Il faut refaire les ablutions avant de prier (al-Dardīr) ; le passage d'al-Ḥaṭṭāb ne précise pas de conséquence."
    },
    explication: "Al-Ḥaṭṭāb : « قَالُوا: كَمَنْ حَكَّ لِجَرَبٍ أَوْ نَزَلَ فِي مَاءٍ حَارٍّ أَوْ رَكَضَ دَابَّتَهُ », et ajoute : « وَظَاهِرُ كَلَامِهِمْ أَنَّهُ لَا غُسْلَ عَلَيْهِ وَلَوْ أَحَسَّ بِمَبَادِئِ اللَّذَّةِ ثُمَّ اسْتَدَامَ ذَلِكَ » ; or, au chapitre du pèlerinage, on dit que cela le rend nul : « وَقَدْ قَالُوا فِي الْحَجِّ: إنَّ ذَلِكَ يُفْسِدُهُ فَانْظُرْهُ ».\n\nAl-Ḥaṭṭāb ne commente pas « وَيَتَوَضَّأُ », absent de son « ص » (voir les alertes). Al-Dardīr : sans plaisir, « بَلْ سَلِسًا أَوْ بِضَرْبَةٍ أَوْ طَرْبَةٍ أَوْ لَدْغَةِ عَقْرَبٍ فَلَا غُسْلَ » ; plaisir inhabituel, « كَنُزُولِهِ بِمَاءٍ حَارٍّ وَلَوْ اسْتَدَامَ فِيمَا يَظْهَرُ », démangeaison du membre ou secousses de la monture « فَلَا غُسْلَ مَا لَمْ يُحِسَّ بِمَبَادِئِ اللَّذَّةِ فَيَسْتَدِيمُ فِيهِمَا حَتَّى يُمْنِي فَيَجِبُ » ; mais « (يَتَوَضَّأُ) وُجُوبًا فِي الْمَسْأَلَتَيْنِ لِنَقْضِ وُضُوئِهِ بِخُرُوجِ الْمَنِيِّ فِيهِمَا », sauf pour l'incontinence qui ne cesse pas (voir le faṣl tah-01-06, fiche 03a).",
    aqwal: [
      { auteur: "Avis rapporté sans attribution (« قَالُوا », al-Ḥaṭṭāb)", avis: "Démangeaison, eau chaude, monture : pas de ghousl, même si l'on a senti le début du plaisir et l'a laissé durer.", statut: "non_precise" },
      { auteur: "Ibn Marzūq (d'après al-Bunānī, cité par al-Dasūqī)", avis: "L'avis le plus fort est le ghousl, comme l'a choisi al-Lakhmī.", statut: "non_precise" },
      { auteur: "Al-Lakhmī (d'après Ibn Marzūq)", avis: "Choix du ghousl pour le sperme sorti avec un plaisir inhabituel.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (al-Dasūqī)", avis: "Les ablutions sont seulement recommandées dans ces deux cas.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : pas de ghousl, mais les ablutions obligatoires ; son maître al-ʿAdawī (d'après al-Dasūqī) maintient l'avis de Khalīl contre Ibn Marzūq : « فَيَكُونُ الرَّاجِحُ كَلَامُ الْمُصَنِّفِ ». Pour la démangeaison du membre et la monture, ghousl si l'on a laissé durer le plaisir senti (al-Dardīr, « كَذَا يَظْهَرُ ») ; avis divergents chez al-Dasūqī (voir les divergences).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb relève que la règle du pèlerinage (le pèlerinage rendu nul dans ces cas) contraste avec l'absence de ghousl, et invite à l'examiner : « فَانْظُرْهُ »."
    ],
    divergences: [
      "Divergence — le plaisir senti et prolongé. Al-Ḥaṭṭāb : « وَظَاهِرُ كَلَامِهِمْ أَنَّهُ لَا غُسْلَ عَلَيْهِ وَلَوْ أَحَسَّ بِمَبَادِئِ اللَّذَّةِ ثُمَّ اسْتَدَامَ ذَلِكَ ». Al-Dardīr : « فَلَا غُسْلَ مَا لَمْ يُحِسَّ بِمَبَادِئِ اللَّذَّةِ فَيَسْتَدِيمُ فِيهِمَا حَتَّى يُمْنِي فَيَجِبُ » (démangeaison du membre, monture), mais pas pour l'eau chaude ; al-Dasūqī rapporte trois façons de voir : celle de son maître al-ʿAdawī (que suit al-Dardīr), celle de ash-Shaykh Sālim (« مَا لَمْ يُحِسَّ بِمَبَادِئِ اللَّذَّةِ وَيَسْتَدِيمُ وَإِلَّا وَجَبَ الْغُسْلُ فِي الثَّلَاثَةِ ») et celle de عج (sigle non défini dans la liste d'al-Dasūqī).",
      "Point à comparer — l'avis le plus fort. Al-Dasūqī : « قَالَ بْن اعْتَرَضَ ابْنُ مَرْزُوقٍ عَلَى الْمُصَنِّفِ بِأَنَّ الرَّاجِحَ وُجُوبُ الْغُسْلِ بِخُرُوجِهِ بِلَذَّةٍ غَيْرِ مُعْتَادَةٍ كَمَا اخْتَارَهُ اللَّخْمِيُّ » (بن : Muḥammad al-Bunānī) ; son maître al-ʿAdawī : « فَيَكُونُ الرَّاجِحُ كَلَامُ الْمُصَنِّفِ ». Al-Ḥaṭṭāb n'en parle pas.",
      "Complément — les ablutions. Al-Ḥaṭṭāb ne commente pas « وَيَتَوَضَّأُ ». Al-Dardīr : « وُجُوبًا فِي الْمَسْأَلَتَيْنِ » ; al-Dasūqī : « أَيْ وَقِيلَ بِنَدْبِهِ فِيهِمَا »."
    ],
    exemple: "Un homme qui souffre d'une maladie a un écoulement de sperme sans aucun plaisir : il ne fait pas le ghousl, mais refait ses ablutions avant de prier (sauf incontinence permanente).",
    erreurs_frequentes: [
      "Croire que toute sortie de sperme oblige au ghousl.",
      "Croire que, sans ghousl, il n'y a rien à faire : les ablutions sont annulées.",
      "Croire que la question du plaisir senti et prolongé est tranchée sans débat."
    ],
    termes: [],
    quiz: [
      { q: "Le sperme qui sort, éveillé, à cause d'un coup, sans plaisir :",
        choix: ["Oblige aux ablutions, pas au ghousl", "Oblige au ghousl", "N'oblige à rien", "Oblige au tayammoum"],
        bonne: 0,
        explication: "« فَلَا غُسْلَ » ; « (يَتَوَضَّأُ) وُجُوبًا فِي الْمَسْأَلَتَيْنِ »." },
      { q: "Selon al-Dardīr, le bain dans une eau chaude qui provoque l'émission :",
        choix: ["Oblige au ghousl", "Oblige au ghousl si l'on a laissé durer", "N'oblige pas au ghousl, même si l'on a laissé durer", "Annule le jeûne seulement"],
        bonne: 2,
        explication: "« كَنُزُولِهِ بِمَاءٍ حَارٍّ وَلَوْ اسْتَدَامَ فِيمَا يَظْهَرُ »." },
      { q: "Mise en situation : un cavalier sent le début du plaisir à cause des secousses de sa monture et le laisse continuer jusqu'à l'émission. Selon al-Dardīr :",
        choix: ["Rien à faire", "Seulement les ablutions", "Le ghousl est recommandé", "Le ghousl est obligatoire"],
        bonne: 3,
        explication: "« مَا لَمْ يُحِسَّ بِمَبَادِئِ اللَّذَّةِ فَيَسْتَدِيمُ فِيهِمَا حَتَّى يُمْنِي فَيَجِبُ »." },
      { q: "Qui tenait pour plus fort le ghousl en cas de plaisir inhabituel ?",
        choix: ["Al-Dardīr", "Ibn Marzūq, avec le choix d'al-Lakhmī", "Al-Ḥaṭṭāb", "Son maître al-ʿAdawī"],
        bonne: 1,
        explication: "« اعْتَرَضَ ابْنُ مَرْزُوقٍ عَلَى الْمُصَنِّفِ بِأَنَّ الرَّاجِحَ وُجُوبُ الْغُسْلِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "307" },
    alertes: [
      "Limite du texte : le « ص » de Mawāhib (569/306) s'arrête à « أَوْ غَيْرِ مُعْتَادَةٍ » ; « وَيَتَوَضَّأُ », que donnent le Mukhtaṣar seul (11355, p. 18), al-Dardīr (21604/127) et al-Kharashī (91, p. 162), n'est pas commenté par al-Ḥaṭṭāb : ajouté au matn d'après eux, règle des ablutions rédigée d'après al-Dardīr / al-Dasūqī (n° 387).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 127–128 (Shamela 21604, pages 126–127)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-04b",
    kitab: "tah", bab: "01", fasl: "07", ordre: 4,
    titre: "Celui qui a eu un rapport, s'est lavé, puis émet",
    titre_ar: "كَمَنْ جَامَعَ فَاغْتَسَلَ ثُمَّ أَمْنَى",
    objectif: "Savoir que celui qui s'est lavé après un rapport sans émission, puis émet, ne refait pas le ghousl mais seulement ses ablutions.",
    matn: "كَمَنْ جَامَعَ فَاغْتَسَلَ ثُمَّ أَمْنَى",
    regle_pratique: "Celui qui a eu un rapport sans émission et a fait son ghousl, puis dont le sperme sort ensuite, ne refait pas le ghousl : il refait seulement ses ablutions ; de même la femme chez qui sort, après son ghousl, le sperme de son mari.",
    qualification: {
      hukm: "wajib",
      nature: "autre",
      effet_si_omis: "Les ablutions sont à refaire avant de prier (al-Dardīr) ; le ghousl n'est pas à refaire."
    },
    explication: "Ce segment manque au « ص » de Mawāhib (voir les alertes), mais al-Ḥaṭṭāb en parle à deux endroits. Il explique « بِلَا جِمَاعٍ » de la fiche 03 : « احْتِرَازٌ مِمَّا إذَا خَرَجَ الْمَنِيُّ بَعْدَ ذَهَابِ اللَّذَّةِ بِالْجِمَاعِ فَإِنَّهُ لَا يَجِبُ بِسَبَبِ خُرُوجِ الْمَنِيِّ غُسْلٌ إذَا كَانَ قَدْ اغْتَسَلَ لِلْجِمَاعِ », et renvoie à « كَمَنْ جَامَعَ فَاغْتَسَلَ ثُمَّ أَمْنَى ». Il cite Ibn Rushd (Ajwiba) : « وَأَمَّا الَّذِي جَامَعَ وَلَمْ يُنْزِلْ حَتَّى اغْتَسَلَ فَلَيْسَ عَلَيْهِ إلَّا الْوُضُوءُ وَقَدْ قِيلَ: إنَّهُ يُعِيدُ الْغُسْلَ وَالْأَوَّلُ أَظْهَرُ ».\n\nAl-Dardīr : celui qui « بِأَنْ غَيَّبَ الْحَشَفَةَ فِي الْفَرْجِ وَلَمْ يُمْنِ » puis s'est lavé et émet ensuite, « فَإِنَّهُ يَتَوَضَّأُ وَلَا يَغْتَسِلُ لِتَقَدُّمِ غُسْلِهِ وَالْجَنَابَةُ الْوَاحِدَةُ لَا يَتَكَرَّرُ لَهَا الْغُسْلُ ». Al-Dasūqī : « مِثْلُ الرَّجُلِ الْمَذْكُورِ الْمَرْأَةُ إذَا خَرَجَ مِنْ فَرْجِهَا مَاءُ الرَّجُلِ بَعْدَ غُسْلِهَا فَإِنَّهُ يَجِبُ عَلَيْهَا الْوُضُوءُ وَلَا تُعِيدُ الْغُسْلَ ».",
    aqwal: [
      { auteur: "Ibn Rushd (Ajwiba, cité par al-Ḥaṭṭāb)", avis: "Seulement les ablutions ; c'est l'avis le plus apparent.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (d'après Ibn Rushd)", avis: "Il refait le ghousl.", statut: "qawl" },
      { auteur: "Ibn al-Qāsim (riwāya de ʿĪsā, ʿUtbiyya), Ibn al-Mawwāz et Saḥnūn (d'après al-Muntaqā)", avis: "Pas de ghousl.", statut: "non_precise" },
      { auteur: "Saḥnūn (autre avis, rapporté de certains compagnons, d'après al-Muntaqā)", avis: "Il refait le ghousl.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « فَإِنَّهُ يَتَوَضَّأُ وَلَا يَغْتَسِلُ » ; il compare ce cas au précédent : « شُبِّهَ فِي الْحُكْمِ وَهُوَ وُجُوبُ الْوُضُوءِ دُونَ الْغُسْلِ ».",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb rattache le « وَلَا يُعِيدُ الصَّلَاةَ » qui suit à ce cas et à celui de la fiche 03 (voir la fiche 05)."
    ],
    divergences: [
      "Concordance — un seul ghousl pour une même janâba. Al-Ḥaṭṭāb, d'après Ibn Rushd : « فَلَيْسَ عَلَيْهِ إلَّا الْوُضُوءُ ». Al-Dardīr : « وَالْجَنَابَةُ الْوَاحِدَةُ لَا يَتَكَرَّرُ لَهَا الْغُسْلُ ». Al-Bājī (al-Muntaqā) : « فَفِي الْعُتْبِيَّةِ مِنْ رِوَايَةِ عِيسَى عَنْ ابْنِ الْقَاسِمِ لَا غُسْلَ عَلَيْهِ ».",
      "Complément — la femme. Al-Dasūqī : « وَلَا تُعِيدُ الْغُسْلَ » quand le sperme de l'homme sort d'elle après son ghousl. Al-Ḥaṭṭāb n'en parle pas ici."
    ],
    exemple: "Un mari s'est lavé après un rapport sans émission ; un peu plus tard, le sperme sort : il refait seulement ses ablutions pour la prière suivante.",
    erreurs_frequentes: [
      "Refaire le ghousl alors qu'on s'est déjà lavé pour le même rapport.",
      "Ne pas refaire ses ablutions après cette sortie.",
      "Confondre ce cas avec celui du plaisir sans rapport (fiche 03), où le ghousl est à faire."
    ],
    termes: [],
    quiz: [
      { q: "Après un rapport sans émission et un ghousl, le sperme sort :",
        choix: ["Il refait le ghousl", "Il ne fait rien", "Il refait seulement ses ablutions", "Il fait le tayammoum"],
        bonne: 2,
        explication: "« فَإِنَّهُ يَتَوَضَّأُ وَلَا يَغْتَسِلُ »." },
      { q: "La raison donnée par al-Dardīr :",
        choix: ["Une même janâba ne demande pas deux ghousl", "Le sperme est pur", "Le premier ghousl était sunna", "Le rapport n'oblige pas au ghousl"],
        bonne: 0,
        explication: "« وَالْجَنَابَةُ الْوَاحِدَةُ لَا يَتَكَرَّرُ لَهَا الْغُسْلُ »." },
      { q: "Mise en situation : une femme a fait son ghousl après un rapport ; un peu plus tard, le sperme de son mari sort d'elle. Selon al-Dasūqī :",
        choix: ["Elle refait le ghousl", "Elle ne fait rien", "Elle fait le tayammoum", "Elle refait seulement ses ablutions"],
        bonne: 3,
        explication: "« فَإِنَّهُ يَجِبُ عَلَيْهَا الْوُضُوءُ وَلَا تُعِيدُ الْغُسْلَ »." },
      { q: "Selon Ibn Rushd, cité par al-Ḥaṭṭāb, l'avis le plus apparent est :",
        choix: ["Refaire le ghousl", "Seulement les ablutions", "Rien du tout", "Refaire la prière"],
        bonne: 1,
        explication: "« فَلَيْسَ عَلَيْهِ إلَّا الْوُضُوءُ … وَالْأَوَّلُ أَظْهَرُ »." }
    ],
    ref: { ouvrage: "al-Sharḥ al-kabīr (al-Dardīr) et Ḥāshiyat al-Dasūqī", tome: 1, pages: "128" },
    alertes: [
      "Limite du texte : le segment « كَمَنْ جَامَعَ فَاغْتَسَلَ ثُمَّ أَمْنَى », que donnent le Mukhtaṣar seul (11355, p. 18), al-Dardīr (21604/127) et al-Kharashī (91, p. 162), manque au « ص » de Mawāhib ; al-Ḥaṭṭāb le cite et en parle sous les segments 03 et 05 (569/306) ; fiche rédigée d'après ces passages, al-Dardīr / al-Dasūqī et al-Muntaqā (6684, p. 99), `ref` sur al-Dardīr (n° 388).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 128 (Shamela 21604, page 127)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-05",
    kitab: "tah", bab: "01", fasl: "07", ordre: 5,
    titre: "Pas de reprise de la prière",
    titre_ar: "وَلَا يُعِيدُ الصَّلَاةَ",
    objectif: "Savoir que la prière faite avant la sortie tardive du sperme reste valable.",
    matn: "وَلَا يُعِيدُ الصَّلَاةَ",
    regle_pratique: "Celui qui a prié avant que le sperme ne sorte (après un rapport suivi d'un ghousl, ou après un plaisir sans rapport) ne refait pas cette prière, même s'il doit ensuite faire le ghousl ou ses ablutions.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "La prière faite avant la sortie du sperme reste valable."
    },
    explication: "Al-Ḥaṭṭāb : ce segment « يَرْجِعُ إلَى مَسْأَلَةِ مَنْ جَامَعَ فَاغْتَسَلَ ثُمَّ أَمْنَى وَإِلَى مَسْأَلَةِ مَنْ الْتَذَّ بِغَيْرِ جِمَاعٍ ثُمَّ خَرَجَ مِنْهُ الْمَنِيُّ بَعْدَ أَنْ تَوَضَّأَ وَصَلَّى ». Il rapporte d'al-Bājī : « أَمَّا إذَا قُلْنَا بِوُجُوبِ الْغُسْلِ فَفِي إعَادَةِ الصَّلَاةِ رِوَايَتَانِ », qu'al-Bājī préfère la non-reprise, avec l'argument d'Ibn al-Mawwāz : « بِأَنَّهُ إنَّمَا صَارَ جُنُبًا بِخُرُوجِ الْمَنِيِّ », et la preuve qu'un ghousl fait avant la sortie ne compte pas.\n\nAl-Dardīr : « لَوْ صَلَّى بِغُسْلِهِ ثُمَّ نَزَلَ الْمَنِيُّ بَعْدَهَا (لَا يُعِيدُ الصَّلَاةَ) ». Al-Dasūqī étend la règle au plaisir sans rapport : « وَمِثْلُ هَذَا مَا إذَا الْتَذَّ بِلَا جِمَاعٍ وَصَلَّى ثُمَّ خَرَجَ مَنِيُّهُ فَإِنَّهُ وَإِنْ وَجَبَ غُسْلُهُ لَكِنْ لَا يُعِيدُ تِلْكَ الصَّلَاةَ ».",
    aqwal: [
      { auteur: "Mālik (riwāya d'Ibn al-Qāsim, al-Majmūʿa, d'après al-Muntaqā)", avis: "Il refait la prière.", statut: "non_precise" },
      { auteur: "Aṣbagh (riwāya d'Ibn al-Mawwāz, d'après al-Muntaqā)", avis: "Il fait le ghousl et ne refait pas la prière.", statut: "non_precise" },
      { auteur: "Al-Bājī (al-Muntaqā, cité par al-Ḥaṭṭāb)", avis: "Préfère la non-reprise, avec l'argument d'Ibn al-Mawwāz.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr et al-Dasūqī : la prière n'est pas refaite, dans les deux cas.",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb rattache le segment à deux cas : le rapport suivi d'un ghousl (fiche 04b), et le plaisir sans rapport suivi d'ablutions et de prière (fiche 03)."
    ],
    divergences: [
      "Concordance — les deux cas. Al-Ḥaṭṭāb : « وَإِلَى مَسْأَلَةِ مَنْ الْتَذَّ بِغَيْرِ جِمَاعٍ ». Al-Dasūqī : « وَمِثْلُ هَذَا مَا إذَا الْتَذَّ بِلَا جِمَاعٍ وَصَلَّى ».",
      "Complément — le texte d'al-Bājī. Al-Muntaqā : « رُوِيَ فِي الْمَجْمُوعَةِ عَنْ ابْنِ الْقَاسِمِ عَنْ مَالِكٍ يُعِيدُ الصَّلَاةَ » ; « وَرَوَى ابْنُ الْمَوَّازِ عَنْ أَصْبَغَ يَغْتَسِلُ وَلَا يُعِيدُ الصَّلَاةَ » ; « وَقَوْلِ ابْنِ الْمَوَّازِ عِنْدَنَا ظَاهِرٌ »."
    ],
    exemple: "Un homme éprouve un plaisir sans émission, fait ses ablutions et prie le ẓuhr ; après la prière, du sperme sort : il fait le ghousl, mais ne refait pas le ẓuhr.",
    erreurs_frequentes: [
      "Refaire la prière faite avant la sortie du sperme.",
      "Croire qu'on peut garder ses ablutions après cette sortie.",
      "Croire que la question n'a jamais fait débat : deux riwāya existent."
    ],
    termes: [],
    quiz: [
      { q: "La prière faite avant la sortie tardive du sperme :",
        choix: ["Reste valable", "Est à refaire", "Est à refaire dans le temps seulement", "Est à refaire par le tayammoum"],
        bonne: 0,
        explication: "« (لَا يُعِيدُ الصَّلَاةَ) »." },
      { q: "L'argument d'Ibn al-Mawwāz, rapporté par al-Bājī :",
        choix: ["La prière était surérogatoire", "Il n'est devenu junub qu'à la sortie du sperme", "Le sperme est pur", "Le ghousl couvre la prière"],
        bonne: 1,
        explication: "« بِأَنَّهُ إنَّمَا صَارَ جُنُبًا بِخُرُوجِ الْمَنِيِّ »." },
      { q: "Mise en situation : après un plaisir sans rapport, vous avez fait vos ablutions et prié l'ʿaṣr ; le sperme sort ensuite. Selon al-Dasūqī :",
        choix: ["Vous refaites l'ʿaṣr", "Vous ne faites rien", "Vous refaites l'ʿaṣr après le ghousl", "Vous faites le ghousl sans refaire l'ʿaṣr"],
        bonne: 3,
        explication: "« فَإِنَّهُ وَإِنْ وَجَبَ غُسْلُهُ لَكِنْ لَا يُعِيدُ تِلْكَ الصَّلَاةَ »." },
      { q: "Selon la riwāya d'Ibn al-Qāsim dans al-Majmūʿa (al-Muntaqā) :",
        choix: ["Il ne refait pas la prière", "Il n'a pas de ghousl", "Il refait la prière", "Il fait le tayammoum"],
        bonne: 2,
        explication: "« رُوِيَ فِي الْمَجْمُوعَةِ عَنْ ابْنِ الْقَاسِمِ عَنْ مَالِكٍ يُعِيدُ الصَّلَاةَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "307" },
    alertes: [
      "Précisé (campagne de correction) : al-Ḥaṭṭāb résume al-Bājī, « وَرَجَّحَ عَدَمَ الْإِعَادَةِ … قَالَ وَهُوَ أَظْهَرُ » (569/306) ; al-Muntaqā (6684, p. 99) a « وَقَوْلِ ابْنِ الْمَوَّازِ عِنْدَنَا ظَاهِرٌ » et rapporte les deux riwāya (Ibn al-Qāsim : reprise ; Aṣbagh : non-reprise) ; même sens (n° 389).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 128 (Shamela 21604, page 127)."
    ],
    verification: "verifie"
  },
  {
    id: "tah-01-07-06",
    kitab: "tah", bab: "01", fasl: "07", ordre: 6,
    titre: "Deuxième cause : la disparition du gland d'un pubère",
    titre_ar: "وَبِمَغِيبِ حَشَفَةِ بَالِغٍ لَا مُرَاهِقٍ أَوْ قَدْرِهَا",
    objectif: "Savoir que la pénétration du gland entier d'un pubère oblige au ghousl, même sans émission, et en connaître les limites (adolescent, gland partiel, enveloppe).",
    matn: "وَبِمَغِيبِ حَشَفَةِ بَالِغٍ لَا مُرَاهِقٍ أَوْ قَدْرِهَا",
    regle_pratique: "Le ghousl est obligatoire, même sans émission, dès que le gland entier d'un homme pubère (ou une longueur égale, s'il n'en a pas) a pénétré, pour les deux personnes si elles sont pubères ; la pénétration par un adolescent non pubère, une partie seulement du gland, ou à travers une enveloppe épaisse n'y oblige pas, sauf émission.",
    qualification: {
      hukm: "fard",
      nature: "autre",
      effet_si_omis: "Le passage ne précise pas de conséquence ; la personne reste en état de janâba jusqu'au ghousl."
    },
    explication: "C'est la deuxième cause du ghousl. Al-Ḥaṭṭāb cite Ibn Shaʿbān : « جَاءَتْ السُّنَّةُ بِوُجُوبِ الْغُسْلِ إذَا الْتَقَى الْخِتَانَانِ وَذَلِكَ إذَا غَابَتْ الْحَشَفَةُ وَإِنْ لَمْ يُنْزِلَا جَمِيعًا إذَا كَانَا بَالِغَيْنِ », par la voie avant ou arrière, endormis ou éveillés, consentants ou contraints. Entre deux femmes, Ibn Shaʿbān dit qu'elles « يَغْتَسِلَانِ بِالْإِنْزَالِ لَا بِالْفِعْلِ » (le passage parle aussi de leur sanction). Pour l'impuissant (عِنِّين) : « وَلَوْ غَابَتْ حَشَفَةُ الْعِنِّينِ فِي فَرْجِ زَوْجَتِهِ أَوْجَبَ ذَلِكَ الْغُسْلَ عَلَيْهِمَا ».\n\nLe gland (حَشَفَة) entier : Ibn Nājī dit que l'absence de ghousl pour une partie est le sens apparent de la Mudawwana ; Ibn ʿArafa rapporte d'al-Lakhmī et d'Ibn al-ʿArabī : « بَعْضُ الْحَشَفَةِ لَغْوٌ ». Enveloppé : le ghousl si l'enveloppe est fine (Ibn Nājī, Ibn al-ʿArabī), non si elle est épaisse ; at-Tādilī rapporte trois avis.\n\nL'adolescent (مُرَاهِق) : al-Ḥaṭṭāb dit que « الْمَشْهُورُ أَنَّهُ لَا غُسْلَ عَلَيْهَا فِي مَغِيبِ حَشَفَةِ الْمُرَاهِقِ وَهُوَ مَظِنَّةُ اللَّذَّةِ ». Al-Dardīr : « (لَا مُرَاهِقٌ) أَيْ مُقَارِبٌ لِلْبُلُوغِ فَلَا يَجِبُ عَلَيْهِ خِلَافًا لِبَعْضِهِمْ وَلَا عَلَى مَوْطُوءَتِهِ الْبَالِغَةِ مَا لَمْ تُنْزِلْ » ; « (قَدْرِهَا) أَيْ قَدْرِ حَشَفَةِ الْبَالِغِ مِنْ مَقْطُوعِهَا ». La pénétration oblige « وَلَوْ لَمْ يَنْتَشِرْ أَوْ لَمْ يُنْزِلْ وَيَجِبُ عَلَى الْمُغَيَّبِ فِيهِ أَيْضًا إنْ كَانَ بَالِغًا ».",
    aqwal: [
      { auteur: "Ibn Shaʿbān (cité par al-Ḥaṭṭāb)", avis: "Ghousl pour les deux pubères dès que le gland disparaît, même sans émission, quelle que soit la voie ou l'état.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (al-Ḥaṭṭāb)", avis: "La femme n'a pas de ghousl quand c'est le gland d'un adolescent non pubère qui pénètre.", statut: "mashhur" },
      { auteur: "Certains savants (« بَعْضِهِمْ », d'après al-Dardīr)", avis: "L'adolescent proche de la puberté doit le ghousl.", statut: "non_precise" },
      { auteur: "Al-Lakhmī et Ibn al-ʿArabī (d'après Ibn ʿArafa)", avis: "Une partie du gland ne compte pas.", statut: "non_precise" },
      { auteur: "Un auteur rapporté par l'auteur d'al-Ḥulal (d'après Ibn Nājī)", avis: "Les deux tiers du gland suffisent ; Ibn Nājī ne connaît pas cet avis.", statut: "non_precise" },
      { auteur: "At-Tādilī (d'après Ibn Nājī)", avis: "Trois avis pour le gland enveloppé, le troisième distinguant l'enveloppe fine (ghousl) de l'épaisse.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : ghousl par la disparition du gland entier d'un pubère ou de sa longueur, même sans érection ni émission ; pas pour l'adolescent ni pour une partie, « وَلَوْ ثُلُثَيْهَا » ; ghousl à travers une enveloppe fine, non épaisse. Al-Dasūqī, d'après son maître al-ʿAdawī : « إذْ لَا بُدَّ فِي وُجُوبِ الْغُسْلِ مِنْ تَغْيِيبِهَا بِتَمَامِهَا أَوْ تَغْيِيبِ قَدْرِهَا ».",
    tarjih_hattab: "Pour la femme qui introduit le gland d'un mort : « لَمْ أَرَ فِيهَا نَصًّا وَالظَّاهِرُ أَنَّهُ لَا غُسْلَ عَلَيْهَا لِعَدَمِ اللَّذَّةِ فِي ذَلِكَ », sauf émission.",
    tanbihat: [
      "Al-Ḥaṭṭāb tire de « حَشَفَةِ » que la disparition d'une partie du gland n'oblige pas au ghousl, et note que « وَبَعْضُهَا أَعَمُّ مِنْ الثُّلُثَيْنِ ».",
      "Il note, après Zarrūq, que le gland enveloppé oblige au ghousl (voir les alertes pour l'auteur de la phrase).",
      "Il rapporte d'Ibn Shaʿbān que la disparition du gland de l'impuissant oblige les deux époux au ghousl et a d'autres effets (mahr, pèlerinage, jeûne)."
    ],
    divergences: [
      "Concordance — l'adolescent. Al-Ḥaṭṭāb : « بَلْ الْمَشْهُورُ أَنَّهُ لَا غُسْلَ عَلَيْهَا فِي مَغِيبِ حَشَفَةِ الْمُرَاهِقِ ». Al-Dardīr : « وَلَا عَلَى مَوْطُوءَتِهِ الْبَالِغَةِ مَا لَمْ تُنْزِلْ » ; al-Dasūqī : « وَهُوَ ابْنُ اثْنَتَيْ عَشَرَةَ سَنَةً أَوْ ثَلَاثَ عَشَرَةَ سَنَةً ».",
      "Concordance — une partie du gland. Al-Ḥaṭṭāb (Ibn Nājī, Ibn ʿArafa) : pas de ghousl. Al-Dardīr : « وَلَا إنْ غَيَّبَ بَعْضَهَا وَلَوْ ثُلُثَيْهَا ».",
      "Concordance — l'enveloppe. Al-Ḥaṭṭāb, d'après Ibn ʿArafa et Ibn al-ʿArabī : « وَمَغِيبُ الْحَشَفَةِ مَلْفُوفَةً الْأَشْبَهُ إنْ كَانَتْ رَقِيقَةً أَوْجَبَ ». Al-Dardīr : « وَلَوْ لَفَّ عَلَيْهَا خِرْقَةً خَفِيفَةً لَا كَثِيفَةً تَمْنَعُ اللَّذَّةَ ».",
      "Complément — la longueur du gland. Al-Ḥaṭṭāb n'en parle pas. Al-Dardīr : « (قَدْرِهَا) أَيْ قَدْرِ حَشَفَةِ الْبَالِغِ مِنْ مَقْطُوعِهَا »."
    ],
    exemple: "Deux époux pubères ont un rapport sans émission : tous deux doivent faire le ghousl avant de prier.",
    erreurs_frequentes: [
      "Croire que le ghousl n'est dû qu'avec émission.",
      "Croire qu'une pénétration partielle oblige au ghousl.",
      "Croire que le rapport d'un garçon non pubère oblige son épouse pubère au ghousl, sans émission de sa part."
    ],
    termes: [
      { ar: "مُرَاهِق", translit: "mourâhiq", def: "Adolescent proche de la puberté, sans l'avoir atteinte (douze ou treize ans, selon al-Dasūqī)." },
      { ar: "بَالِغ", translit: "bâligh", def: "Pubère : qui a atteint la puberté et est donc soumis aux obligations." },
      { ar: "الْتِقَاءُ الْخِتَانَيْن", translit: "iltiqâ' al-khitânayn", def: "« Rencontre des deux circoncisions » : la pénétration du gland, qui oblige au ghousl même sans émission." }
    ],
    quiz: [
      { q: "Un rapport sans émission entre deux époux pubères :",
        choix: ["N'oblige à rien", "Oblige les deux au ghousl", "Oblige l'homme seul au ghousl", "Oblige aux ablutions seulement"],
        bonne: 1,
        explication: "« وَإِنْ لَمْ يُنْزِلَا جَمِيعًا إذَا كَانَا بَالِغَيْنِ »." },
      { q: "Selon al-Dardīr, la pénétration d'une partie du gland :",
        choix: ["Oblige au ghousl si c'est les deux tiers", "Oblige au ghousl", "Oblige aux ablutions seulement", "N'oblige pas au ghousl, même les deux tiers"],
        bonne: 3,
        explication: "« وَلَا إنْ غَيَّبَ بَعْضَهَا وَلَوْ ثُلُثَيْهَا »." },
      { q: "Mise en situation : une femme pubère et son mari, un adolescent qui n'a pas encore atteint la puberté, ont un rapport ; elle n'a pas d'émission. Selon l'avis répandu :",
        choix: ["Elle n'a pas de ghousl", "Elle fait le ghousl", "Elle fait seulement ses ablutions", "Elle fait le tayammoum"],
        bonne: 0,
        explication: "« بَلْ الْمَشْهُورُ أَنَّهُ لَا غُسْلَ عَلَيْهَا فِي مَغِيبِ حَشَفَةِ الْمُرَاهِقِ »." },
      { q: "Le gland enveloppé d'un tissu épais, selon al-Dardīr :",
        choix: ["Oblige au ghousl dans tous les cas", "N'oblige jamais à rien", "N'oblige pas au ghousl, car l'enveloppe empêche le plaisir", "Oblige au ghousl si l'enveloppe est fine"],
        bonne: 2,
        explication: "« وَلَوْ لَفَّ عَلَيْهَا خِرْقَةً خَفِيفَةً لَا كَثِيفَةً تَمْنَعُ اللَّذَّةَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "307–308" },
    alertes: [
      "Corrigé (campagne de correction) : le « ص » porte « وَمَغِيبِ حَشَفَةِ بَالِغٍ » (569/306) ; le Mukhtaṣar seul (11355, p. 18), al-Dardīr (21604/127) et al-Kharashī (91, p. 162) ont « وَبِمَغِيبِ » : matn corrigé (n° 390).",
      "Corrigé (campagne de correction) : le « ص » omet les mots لَا مُرَاهِقٍ أَوْ قَدْرِهَا, que portent le Mukhtaṣar seul (où « مراهق » est collé au mot suivant), al-Dardīr et al-Kharashī ; al-Ḥaṭṭāb parle pourtant de l'adolescent (569/307) : matn complété, la longueur du gland rédigée d'après al-Dardīr (n° 391).",
      "Précisé (campagne de correction) : dans la citation de Zarrūq, « يُغْنِي إذَا غَابَتْ كُلُّهَا » (569/307) est à lire يَعْنِي ; aucun témoin trouvé (Zarrūq, 14556, p. 100–130) ; passage non cité (n° 392).",
      "Précisé (campagne de correction) : « وَقَالَ ابْنُ عَرَفَةَ وَاللَّخْمِيُّ وَابْنُ الْعَرَبِيِّ: بَعْضُ الْحَشَفَةِ لَغْوٌ » (569/307) ; Ibn ʿArafa (16968, p. 90) : « اللخمي وابن العربي بعض الحشفة لغو » : c'est Ibn ʿArafa qui le rapporte des deux autres (n° 393).",
      "Précisé (campagne de correction) : « وَظَاهِرُ كَلَامِهِ أَيْضًا أَنَّ مَغِيبَ الْحَشَفَةِ مُوجِبٌ لِلْغُسْلِ وَلَوْ كَانَتْ مَلْفُوفَةً وَهُوَ كَذَلِكَ » (569/307) vient entre la citation de Zarrūq (close par « انْتَهَى ») et « قَالَ ابْنُ نَاجِي » : sans doute d'al-Ḥaṭṭāb ; rapporté en remarque, hors de `tarjih_hattab` (n° 394).",
      "La suite d'Ibn Shaʿbān sur la sanction de deux femmes, et la longue citation d'Ibn Nājī (at-Tādilī, ash-Shaykh), ne sont que résumées.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 128–129 (Shamela 21604, pages 127–128)."
    ],
    verification: "verifie"
  }

  /* FIN-UNITE-51 */
]);
