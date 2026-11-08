/* Données — Kitāb al-Ṭahāra, bāb 01 (tah-01) : « بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ » — partie 9 — v3.7
   Source : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1 (shamela.ws/book/569).
   Croisement : al-Sharḥ al-kabīr d'al-Dardīr et Ḥāshiyat al-Dasūqī (shamela.ws/book/21604), tome 1.
   Cette partie : faṣl tah-01-03, à partir de tah-01-03-02 (unités 20–21) — t. 1, p. 140–148.
   v3.5 : unité 20 (nouvelle partie, décision n° 10 : tah-01-p8.js atteignait ≈ 129 Ko et l'unité 20 l'aurait portée à ≈ 193 Ko) ;
   audit des unités 19–20.
   v3.6 : unité 21 — tah-01-03-08 à -13.
   v3.7 : audit après l'unité 22 — alertes de tah-01-03-08 (n° 138) et -12 (n° 141) corrigées par témoin ; l'unité 22 est dans tah-01-p10.js.
   Bāb découpé en parties de moins de 200 Ko ;
   historique des versions : tah-01-p1.js (jusqu'à v2.5) puis l'en-tête de chaque partie. */
App.data.ajouterFiches([
  /* ================================================================== */
  /* Unité 20 — tah-01-03-02 à -07 — t. 1, p. 140–143 (Shamela 569, p. 139–142) */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 69–71 (Shamela 21604, p. 68–70) */
  /* ================================================================== */

  {
    id: "tah-01-03-02",
    kitab: "tah", bab: "01", fasl: "03", ordre: 2,
    titre: "Une impureté tombe sur le fidèle pendant la prière",
    titre_ar: "وَسُقُوطُهَا فِي صَلَاةٍ مُبْطِلٌ",
    objectif: "Savoir qu'une impureté qui tombe sur le fidèle pendant la prière l'annule, et connaître les conditions de cette nullité.",
    matn: "وَسُقُوطُهَا فِي صَلَاةٍ مُبْطِلٌ",
    regle_pratique: "Si une impureté non tolérée tombe sur le fidèle pendant la prière — obligatoire ou surérogatoire, qu'il prie seul ou derrière un imam —, sa prière est nulle : il l'interrompt, ôte l'impureté et recommence, pourvu qu'il lui reste assez de temps et qu'il ait de quoi l'ôter ou un autre vêtement.",
    qualification: {
      hukm: "wajib",
      nature: "mubtil",
      effet_si_omis: "La prière est nulle et doit être recommencée. Si l'une des conditions manque (temps trop court, rien pour ôter l'impureté…), il continue et sa prière est valide (al-Dasūqī). Une prière surérogatoire n'est à recommencer que s'il a porté l'impureté exprès."
    },
    explication: "Al-Ḥaṭṭāb : la chute de l'impureté sur le fidèle annule sa prière, même si elle retombe aussitôt de lui, comme dans la riwāya. C'est la riwāya d'Ibn al-Qāsim, le mashhūr, qu'il puisse l'ôter ou non, qu'il l'ôte ou non. Muṭarrif : s'il peut l'ôter, il l'ôte et poursuit sa prière (بِنَاء, binâ') ; sinon il recommence. Ibn al-Mājishūn dit de même, mais s'il ne peut pas l'ôter il continue, à cause de la divergence des savants, puis il refait la prière (rapporté par Ibn ʿArafa) ; le Shāriḥ a omis « puis il refait », ce qui fausse le sens. La règle vaut pour la prière obligatoire et pour la surérogatoire, mais il n'a à refaire la surérogatoire que s'il a porté l'impureté exprès ; Sanad : comme celui qui gratte exprès une plaie de son corps et la fait couler sur son corps ou son vêtement : il interrompt, selon Ibn al-Qāsim, et doit refaire. Tout cela vaut quand le temps de la prière obligatoire est large (voir tah-01-03-03).\n\nAl-Dardīr : la chute de l'impureté sur le fidèle pendant une prière, même surérogatoire, l'annule ; il l'interrompt, même s'il prie derrière un imam (مَأْمُوم, ma'moûm), à cinq conditions : 1) qu'elle se fixe sur lui ou qu'une partie y reste accrochée ; 2) qu'elle ne soit pas de celles qu'on tolère ; 3) que le temps où il se trouve (choisi ou de nécessité) soit assez large pour qu'il en reste au moins une rakʿa ; 4) qu'il trouve, s'il interrompt, de quoi l'ôter ou un autre vêtement à mettre ; 5) que la chose impure ne soit pas portée par quelqu'un d'autre. Al-Dasūqī : si l'imam interrompt, il désigne un remplaçant (اِسْتِخْلَاف, istikhlâf) ; « se fixer » veut dire qu'elle est humide et ne glisse pas ; si une seule condition manque, il n'interrompt pas, termine sa prière, qui est valide, et ne la refait pas. Sur le vendredi, deux avis : l'interrompre aussi (préféré par Sanad), ou non.",
    aqwal: [
      { auteur: "Ibn al-Qāsim (riwāya)", avis: "La prière est nulle, même si l'impureté retombe aussitôt, qu'il puisse l'ôter ou non.", statut: "mashhur" },
      { auteur: "Muṭarrif", avis: "S'il peut l'ôter, il l'ôte et poursuit ; sinon il recommence.", statut: "qawl" },
      { auteur: "Ibn al-Mājishūn (rapporté par Ibn ʿArafa)", avis: "S'il peut l'ôter, il l'ôte et poursuit ; sinon il continue, à cause de la divergence des savants, puis refait la prière.", statut: "qawl" },
      { auteur: "Sanad", avis: "La prière surérogatoire n'est à refaire que s'il a porté l'impureté exprès.", statut: "non_precise" },
      { auteur: "Ibn Marzūq (selon al-Dardīr)", avis: "Sur l'avis de la sunna, ni la chute ni le souvenir de l'impureté n'annulent la prière ; ses paroles indiquent que c'est le plus fort.", statut: "rajih" }
    ],
    muatamad: "Confirmé par al-Dardīr, qui explique le matn sans le contredire : « (وَسُقُوطُهَا) أَيْ النَّجَاسَةُ عَلَى الْمُصَلِّي (فِي صَلَاةٍ) وَلَوْ نَفْلًا (مُبْطِلٌ) لَهَا وَيَقْطَعُهَا وَلَوْ مَأْمُومًا », aux cinq conditions qu'il énumère. Il ajoute toutefois que, sur l'avis de la sunna, la prière n'est pas annulée, et qu'Ibn Marzūq penche pour cela (voir divergences).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb relève une faute du Shāriḥ, qui a omis « وَيُعِيدُ » dans l'avis d'Ibn al-Mājishūn : « وَأَسْقَطَ الشَّارِحُ مِنْهُ قَوْلَهُ وَيُعِيدُ فَأَوْجَبَ ذَلِكَ خَلَلًا ».",
      "Il ajoute que la règle de l'interruption, conditionnée par la largeur du temps (tah-01-03-03), vaut aussi ici : « وَهَذَا الْحُكْمُ يَجْرِي فِي الْمَسْأَلَةِ الَّتِي قَبْلَ هَذِهِ »."
    ],
    divergences: [
      "Divergence — l'impureté qui retombe aussitôt. Al-Ḥaṭṭāb : « يُرِيدُ، وَلَوْ سَقَطَتْ عَنْهُ النَّجَاسَةُ مَكَانَهَا كَمَا فِي الرِّوَايَةِ ». Al-Dardīr ne retient la nullité que « إنْ اسْتَقَرَّتْ عَلَيْهِ أَوْ تَعَلَّقَ بِهِ شَيْءٌ مِنْهَا » ; al-Dasūqī : « أَيْ بِأَنْ كَانَتْ رَطْبَةً وَلَمْ تَنْحَدِرْ ».",
      "Point à comparer — sur quel avis repose la nullité. Al-Ḥaṭṭāb tire de cette règle que les deux avis (sunna et obligation) mènent au même résultat : « إنَّمَا تَتَمَشَّى عَلَى ذَلِكَ مِنْهَا قَوْلُهُ وَسُقُوطُهَا فِي صَلَاةٍ مُبْطِلٌ ». Al-Dardīr : « وَهَذَا عَلَى أَنَّ إزَالَةَ النَّجَاسَةِ وَاجِبَةٌ إنْ ذَكَرَ وَقَدَرَ وَأَمَّا عَلَى أَنَّهَا سُنَّةٌ فَلَا تَبْطُلُ بِالسُّقُوطِ أَوْ الذِّكْرِ فِيهَا وَكَلَامُ ابْنِ مَرْزُوقٍ يَدُلُّ عَلَى أَنَّهُ الرَّاجِحُ » ; al-Dasūqī : sur cet avis, il refait à titre recommandé, dans le temps et après selon « عج » (sigle non défini dans la liste d'al-Dasūqī), dans le temps seulement selon al-Qurṭubī.",
      "Complément — l'expression « annule ». Al-Dasūqī : Khalīl suit Ibn Rushd (al-Muqaddimāt, audition de Mūsā), ce qui répond à l'objection de « طفى » (Muṣṭafā ar-Rammāṣī) ; la Mudawwana dit « قَطَعَهَا », et « وَالْقَطْعُ يُؤْذِنُ بِالِانْعِقَادِ », d'où la divergence : « وَاخْتَلَفُوا هَلْ الْقَطْعُ وُجُوبًا أَوْ اسْتِحْبَابًا ».",
      "Complément — la chose portée par un autre. Al-Dasūqī : si le vêtement souillé d'un autre, qu'il porte encore, tombe sur le fidèle, ou si un enfant aux habits impurs, debout à terre, s'accroche à lui, la prière reste valide (« فَالصَّلَاةُ صَحِيحَةٌ عَلَى الظَّاهِرِ خِلَافًا لِمَا ذَكَرَهُ بْن » : Muḥammad al-Bunānī), tant qu'il ne s'assied ni ne se prosterne dessus. Al-Ḥaṭṭāb ne traite pas ce cas ici.",
      "Complément — la bête qui meurt. Al-Dasūqī : « مَوْتُ الدَّابَّةِ وَحَبْلُهَا بِوَسَطِهِ كَسُقُوطِ النَّجَاسَةِ عَلَيْهِ عَلَى الظَّاهِرِ وَالْمَسْأَلَةُ مَحَلُّ نَظَرٍ »."
    ],
    exemple: "Pendant le ẓuhr, une fiente d'oiseau tombe d'un arbre sur l'épaule d'un fidèle qui prie dans une cour, et y reste. Il a un autre vêtement à portée et le temps est encore large : il interrompt sa prière, ôte ou change le vêtement, et recommence. Si la fiente avait glissé aussitôt au sol sans rien laisser, al-Dardīr ne retiendrait pas la nullité.",
    erreurs_frequentes: [
      "Croire qu'on peut simplement ôter l'impureté et continuer : selon le mashhūr, la prière est nulle et l'on recommence.",
      "Croire qu'il faut toujours interrompre : si le temps est trop court ou qu'on n'a rien pour ôter l'impureté, on continue, et la prière est valide."
    ],
    termes: [
      { ar: "مُبْطِل", translit: "moubtil", def: "Ce qui annule (un acte d'adoration)." },
      { ar: "قَطْع", translit: "qatʿ", def: "Interruption de la prière commencée." },
      { ar: "بِنَاء", translit: "binâ'", def: "Fait de reprendre la prière là où on l'a laissée, sans la recommencer." },
      { ar: "مَأْمُوم", translit: "ma'moûm", def: "Celui qui prie derrière un imam." },
      { ar: "اِسْتِخْلَاف", translit: "istikhlâf", def: "Fait, pour l'imam qui doit quitter la prière, de désigner un fidèle pour la poursuivre à sa place." }
    ],
    quiz: [
      { q: "Selon le mashhūr, une impureté non tolérée tombe sur le fidèle pendant la prière. Que vaut sa prière ?",
        choix: ["Elle est valide", "Elle est nulle", "Elle est valide s'il l'ôte aussitôt", "Elle est seulement déconseillée"],
        bonne: 1,
        explication: "« وَسُقُوطُهَا فِي صَلَاةٍ مُبْطِلٌ » ; al-Ḥaṭṭāb : « وَهَذَا عَلَى رِوَايَةِ ابْنِ الْقَاسِمِ وَهُوَ الْمَشْهُورُ »." },
      { q: "Laquelle de ces conditions al-Dardīr ne pose-t-il pas pour interrompre ?",
        choix: ["Que l'impureté se fixe sur lui", "Qu'elle ne soit pas tolérée", "Qu'il reste assez de temps", "Que la prière soit obligatoire"],
        bonne: 3,
        explication: "Al-Dardīr : « وَلَوْ نَفْلًا » — la prière surérogatoire est concernée aussi." },
      { q: "Selon Muṭarrif, s'il peut ôter l'impureté tombée sur lui…",
        choix: ["Il l'ôte et poursuit sa prière", "Il recommence toujours", "Il continue sans l'ôter", "Il refait la prière le lendemain"],
        bonne: 0,
        explication: "« وَقَالَ مُطَرِّفٌ إنْ أَمْكَنَهُ نَزْعُهَا نَزَعَهَا وَبَنَى وَإِلَّا ابْتَدَأَ »." },
      { q: "Mise en situation : un imam reçoit une impureté sur son vêtement pendant la prière ; le temps est large et il a un autre vêtement. Que fait-il, selon al-Dardīr et al-Dasūqī ?",
        choix: ["Il continue et refait après", "Il continue : l'imam n'interrompt jamais", "Il interrompt et désigne un remplaçant", "Il demande aux fidèles de recommencer seuls"],
        bonne: 2,
        explication: "Al-Dardīr : « وَيَقْطَعُهَا وَلَوْ مَأْمُومًا » ; al-Dasūqī : « أَيْ وَيَسْتَخْلِفُ الْإِمَامُ إذَا قَطَعَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "140" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 69–70 (Shamela 21604, pages 68–69)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-03",
    kitab: "tah", bab: "01", fasl: "03", ordre: 3,
    titre: "… ou dont on se souvient pendant la prière",
    titre_ar: "كَذِكْرِهَا فِيهَا",
    objectif: "Savoir que se souvenir d'une impureté (ou la découvrir) pendant la prière oblige à l'interrompre si le temps le permet, et connaître les cas où l'on continue.",
    matn: "كَذِكْرِهَا فِيهَا",
    regle_pratique: "Celui qui se souvient, pendant la prière, d'une impureté non tolérée sur lui — ou qui la découvre — interrompt sa prière et la recommence (avec l'iqāma pour une prière obligatoire), s'il lui reste après l'avoir ôtée le temps d'au moins une rakʿa ; si le temps est trop court, ou s'il risque de manquer une prière qui ne se rattrape pas, il continue.",
    qualification: {
      hukm: "wajib",
      nature: "mubtil",
      effet_si_omis: "Celui qui s'en souvient puis l'oublie et continue : prière nulle selon l'avis le plus correct (ash-Shāmil). Temps trop court : il continue, et sa prière est valide."
    },
    explication: "Al-Ḥaṭṭāb : celui qui se souvient, pendant la prière, d'une impureté non tolérée l'interrompt, prière obligatoire ou surérogatoire. La Mudawwana : il recommence la prière obligatoire avec l'iqāma (إِقَامَة, iqâma), et non la surérogatoire, sauf s'il le veut. Ibn Nājī : la lettre est qu'il refait l'iqāma, long délai ou non, comme l'ont compris certains (la première iqāma était pour une prière nulle) ; d'autres : seulement après un long délai ; at-Tawḍīḥ et ash-Shāmil y voient deux interprétations des maîtres. Sanad : « sauf s'il le veut » ne veut pas dire rattraper la surérogatoire, qui ne se rattrape pas, mais en prier une autre.\n\nTanbīh 1 — Ibn Nājī : la lettre de la Mudawwana est que l'interruption est obligatoire ; al-Lakhmī : elle est seulement jugée bonne (istiḥsān). Tanbīh 2 — at-Tawḍīḥ : l'interruption suppose que le temps soit large ; s'il est étroit, Ibn Hārūn : on ne diverge pas sur le fait de continuer (تَمَادِي, tamâdî), préserver le temps passant avant l'impureté ; donc, s'il craint de manquer le vendredi, la prière funéraire ou celle des deux fêtes, qui ne se rattrapent pas, il continue ; pour le vendredi, il y a à examiner si on le tient pour un remplaçant du ẓuhr. Sanad a hésité, puis a préféré l'interruption. Al-Ḥaṭṭāb : « temps large » veut dire qu'il reste, après avoir ôté l'impureté, de quoi faire une rakʿa ou plus (ad-Dhakhīra), et il s'agit sans aucun doute du temps de nécessité ; ce qu'on a dit de continuer la prière funéraire et celle des fêtes contredit ce qui viendra au chapitre du saignement de nez (رُعَاف, ruʿâf). Ibn Nājī : l'interruption du fidèle derrière l'imam, le vendredi, dépend de l'extension de son temps ; il interrompt selon le mashhūr, qu'il puisse ôter l'impureté ou non.\n\nFurūʿ : 1) S'il voit l'impureté, s'apprête à interrompre, oublie et continue : nulle selon l'avis le plus correct (ash-Shāmil), préféré par Sanad et par Khalīl (at-Tawḍīḥ) ; Ibn al-ʿArabī a choisi la validité. 2) S'il interrompt pour la laver, oublie, et prie de nouveau avec elle : Sanad (Kitāb al-ḥajj) rapporte une divergence ; al-Ḥaṭṭāb y voit celui qui prie dès le départ avec une impureté oubliée (tah-01-03-04). 3) Sanad : l'impureté sous son pied ; s'il la voit entre ses pieds, derrière son talon ou devant ses orteils et s'en écarte, rien ; s'il se tenait dessus, c'est la divergence du vêtement qu'on peut jeter (interrompre ou se déplacer ?), et le mashhūr est l'interruption ; sous le tapis, rien. 4) Ibn ʿArafa : s'il voit, après s'être relevé, une impureté à l'endroit de sa prosternation, certains disent qu'il termine en s'écartant ; lui dit qu'il interrompt, comme celui qui apprend pendant la prière qu'il a tourné le dos à la qibla ; un juriste tardif de Kairouan faisait continuer, puis refaire dans le temps, celui qui voit une impureté sur son turban tombé. Al-Ḥaṭṭāb : cela suit l'avis d'Ibn al-Mājishūn ; selon le mashhūr et le choix d'Ibn ʿArafa, il interrompt.\n\nAl-Dardīr : les mêmes conditions que pour l'impureté qui tombe (tah-01-03-02) valent pour celle dont on se souvient ou qu'on découvre. Al-Dasūqī : la nullité vaut même s'il l'oublie de nouveau après s'en être souvenu, selon l'avis le plus correct ; elle vaut aussi pour l'impureté vue sur le turban tombé ou à l'endroit de la prosternation, d'après la fatwa d'Ibn ʿArafa.",
    aqwal: [
      { auteur: "La Mudawwana (lettre, selon Ibn Nājī)", avis: "L'interruption est obligatoire ; la prière obligatoire se recommence avec l'iqāma.", statut: "non_precise" },
      { auteur: "Al-Lakhmī", avis: "L'interruption est seulement jugée bonne (istiḥsān).", statut: "qawl" },
      { auteur: "Ibn Hārūn (rapporté par at-Tawḍīḥ)", avis: "Si le temps est étroit, on continue sans divergence ; de même si l'on craint de manquer le vendredi, une prière funéraire ou celle des fêtes.", statut: "non_precise" },
      { auteur: "Ash-Shāmil ; Sanad ; Khalīl (at-Tawḍīḥ)", avis: "Celui qui s'apprête à interrompre, oublie et continue : sa prière est nulle.", statut: "rajih" },
      { auteur: "Ibn al-ʿArabī (choix)", avis: "Dans ce cas, sa prière est valide.", statut: "qawl" },
      { auteur: "Ibn ʿArafa", avis: "Impureté vue à l'endroit de la prosternation après s'être relevé : il interrompt.", statut: "non_precise" },
      { auteur: "Certains compagnons (rapportés par Ibn ʿArafa) ; un juriste tardif de Kairouan", avis: "Il termine en s'écartant ; ou, pour le turban tombé, il continue et refait dans le temps.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : les conditions de l'interruption « وَتَجْرِي هَذِهِ الْقُيُودُ الْخَمْسَةُ فِي قَوْلِهِ (كَذِكْرِهَا) أَيْ النَّجَاسَةِ أَوْ عِلْمِهَا (فِيهَا) » ; temps « اخْتِيَارِيًّا أَوْ ضَرُورِيًّا بِأَنْ يَبْقَى مِنْهُ مَا يَسَعُ وَلَوْ رَكْعَةً ». Al-Dasūqī : impureté vue sur le turban tombé ou à l'endroit de la prosternation, « وَهُوَ الْأَرْجَحُ وِفَاقًا لِفَتْوَى ابْنِ عَرَفَةَ كَمَا فِي ح ».",
    tarjih_hattab: "Le temps visé est celui de nécessité : « وَلَا شَكَّ أَنَّ الْمُرَادَ بِالْوَقْتِ هُنَا الْوَقْتُ الضَّرُورِيُّ » ; celui qui interrompt, oublie et prie de nouveau avec l'impureté est comme celui qui l'a oubliée dès le départ : « وَالظَّاهِرُ أَنَّهُ بِمَنْزِلَةِ مَنْ صَلَّى بِالنَّجَاسَةِ سَاهِيًا ابْتِدَاءً » ; l'impureté vue sur le turban tombé oblige à interrompre selon le mashhūr.",
    tanbihat: [
      "Al-Ḥaṭṭāb relève une contradiction : continuer la prière funéraire et celle des fêtes « مُخَالِفٌ لِمَا سَيَأْتِي فِي الرُّعَافِ ».",
      "Il étend la condition du temps à l'impureté qui tombe pendant la prière (tah-01-03-02).",
      "Sanad : celui qui se tenait debout sur l'impureté suit la divergence du vêtement qu'on peut jeter ; le mashhūr étant l'interruption, il interrompt aussi."
    ],
    divergences: [
      "Divergence — quel temps compte. Al-Ḥaṭṭāb : « وَلَا شَكَّ أَنَّ الْمُرَادَ بِالْوَقْتِ هُنَا الْوَقْتُ الضَّرُورِيُّ ». Al-Dardīr : « اخْتِيَارِيًّا أَوْ ضَرُورِيًّا » ; al-Dasūqī : « هَذَا هُوَ الظَّاهِرُ كَمَا يَدُلُّ لَهُ مَا يَأْتِي فِي الرُّعَافِ وَتَخْصِيصُ ح لَهُ بِالضَّرُورِيِّ … فِيهِ نَظَرٌ بْن » (Muḥammad al-Bunānī) ; al-Majmūʿ (« المج », de Muḥammad al-Amīr) : s'il continue parce que le temps choisi est étroit, il ne refait pas dans le temps de nécessité, étant comme l'incapable.",
      "Point à comparer — la prière funéraire et les fêtes. Al-Ḥaṭṭāb (Ibn Hārūn) : on continue si l'on craint de les manquer, mais il note que cela contredit le chapitre du saignement de nez. Al-Dasūqī, d'après al-Majmūʿ : « وَكَضِيقِ الْوَقْتِ مَا لَا يُقْضَى كَجِنَازَةٍ وَاسْتِسْقَاءٍ وَعِيدٍ مَعَ الْإِمَامِ فَلَا يَقْطَعُ ».",
      "Point à comparer — sur quel avis repose la nullité. Al-Dardīr : « وَهَذَا عَلَى أَنَّ إزَالَةَ النَّجَاسَةِ وَاجِبَةٌ إنْ ذَكَرَ وَقَدَرَ », Ibn Marzūq penchant pour la validité sur l'avis de la sunna (voir tah-01-03-02). Al-Ḥaṭṭāb tire au contraire de « كَذِكْرِهَا فِيهَا » l'accord des deux avis.",
      "Concordance — celui qui oublie de nouveau. Al-Ḥaṭṭāb (ash-Shāmil) : « بَطَلَتْ عَلَى الْأَصَحِّ ». Al-Dasūqī : « إذْ بِمُجَرَّدِ الذِّكْرِ فِيهَا تَبْطُلُ عَلَى الْأَصَحِّ بِنَاءً عَلَى الْقَوْلِ بِوُجُوبِ الْإِزَالَةِ أَفَادَهُ شَيْخُنَا » (son maître al-ʿAdawī).",
      "Concordance — le turban tombé et l'endroit de la prosternation. Al-Ḥaṭṭāb : interruption selon le mashhūr et le choix d'Ibn ʿArafa. Al-Dasūqī : « وَهُوَ الْأَرْجَحُ وِفَاقًا لِفَتْوَى ابْنِ عَرَفَةَ كَمَا فِي ح ».",
      "Complément — l'impureté vue sur l'imam. Al-Dasūqī : le fidèle la lui montre sans la toucher ; s'il est à plus de trois rangs, il lui parle ; l'imam désigne un remplaçant ; « فَإِنْ تَبِعَهُ الْمَأْمُومُ بَعْدَ الرُّؤْيَةِ بَطَلَتْ عَلَى الْمَأْمُومِ أَيْضًا ». Al-Ḥaṭṭāb n'en parle pas ici."
    ],
    exemple: "Au milieu du ʿaṣr, un fidèle se rappelle qu'il a taché sa manche de sang en se coupant (au-delà de la petite quantité tolérée). Le soleil est loin de jaunir et il a de l'eau : il interrompt, lave la tache et recommence le ʿaṣr avec l'iqāma. S'il ne restait plus, après le lavage, le temps d'une rakʿa, il continuerait sa prière.",
    erreurs_frequentes: [
      "Croire qu'on termine la prière puis qu'on la refait : on l'interrompt aussitôt, si le temps le permet.",
      "Croire qu'en oubliant de nouveau l'impureté après s'en être souvenu, la prière redevient valide : selon l'avis le plus correct, elle est nulle."
    ],
    termes: [
      { ar: "إِقَامَة", translit: "iqâma", def: "Second appel, dit juste avant de commencer la prière obligatoire." },
      { ar: "تَمَادِي", translit: "tamâdî", def: "Fait de poursuivre la prière commencée sans l'interrompre." },
      { ar: "رُعَاف", translit: "ruʿâf", def: "Saignement de nez ; chapitre où sont réglés les cas de sang qui coule pendant la prière." }
    ],
    quiz: [
      { q: "Pendant la prière, un fidèle se souvient d'une impureté non tolérée sur son vêtement. Le temps est large. Que fait-il ?",
        choix: ["Il continue et refait après", "Il continue, sans rien refaire", "Il interrompt et recommence", "Il secoue le vêtement et continue"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « إذَا ذَكَرَ نَجَاسَةً غَيْرَ مَعْفُوٍّ عَنْهَا فِي الصَّلَاةِ فَإِنَّهُ يَقْطَعُ »." },
      { q: "Que veut dire « temps large », selon ad-Dhakhīra cité par al-Ḥaṭṭāb ?",
        choix: ["Qu'il reste, après avoir ôté l'impureté, le temps d'au moins une rakʿa", "Qu'il reste au moins une heure", "Que ce soit le début du temps", "Que la prière ne soit pas commencée"],
        bonne: 0,
        explication: "« أَنْ يَبْقَى مِنْ الْوَقْتِ مَا يَسَعُ بَعْدَ إزَالَةِ النَّجَاسَةِ رَكْعَةً فَأَكْثَرَ »." },
      { q: "Il voit l'impureté, s'apprête à interrompre, l'oublie et termine sa prière. Selon l'avis le plus correct…",
        choix: ["Sa prière est valide", "Il refait seulement dans le temps", "Il fait une prosternation d'oubli", "Sa prière est nulle"],
        bonne: 3,
        explication: "Ash-Shāmil : « بَطَلَتْ عَلَى الْأَصَحِّ وَهُوَ الَّذِي رَجَّحَهُ سَنَدٌ »." },
      { q: "Mise en situation : pendant une prière funéraire, un fidèle remarque une impureté sur lui ; s'il l'ôte, il manquera la prière. Que dit Ibn Hārūn (rapporté par at-Tawḍīḥ) ?",
        choix: ["Il interrompt quand même", "Il continue, car cette prière ne se rattrape pas", "Il refait la prière funéraire seul", "Il quitte la prière sans rien faire"],
        bonne: 1,
        explication: "« لَوْ رَآهَا وَخَشِيَ فَوَاتَ الْجُمُعَةِ وَالْجِنَازَةِ وَالْعِيدَيْنِ لَتَمَادَى لِعَدَمِ قَضَاءِ هَذِهِ الصَّلَوَاتِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "140-141" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 69–70 (Shamela 21604, pages 68–69)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-04",
    kitab: "tah", bab: "01", fasl: "03", ordre: 4,
    titre: "… mais non s'il s'en est souvenu avant la prière",
    titre_ar: "لَا قَبْلَهَا",
    objectif: "Savoir que celui qui a vu l'impureté avant la prière puis l'a oubliée en priant ne voit pas sa prière annulée, et qu'il la refait seulement dans le temps.",
    matn: "لَا قَبْلَهَا",
    regle_pratique: "Celui qui a vu ou su l'impureté avant d'entrer dans la prière, puis l'a oubliée en priant jusqu'à la fin, n'a pas une prière nulle : il est comme celui qui ne l'a jamais vue, et il la refait, à titre recommandé, tant que dure le temps de reprise.",
    qualification: {
      hukm: "mandub",
      nature: "autre",
      effet_si_omis: "Reprise dans le temps seulement (voir tah-01-03-01h)."
    },
    explication: "Al-Ḥaṭṭāb : celui qui a vu l'impureté avant d'entrer dans la prière n'en voit pas sa prière annulée ; il est comme celui qui ne l'a pas vue, selon l'avis connu (« عَلَى الْمَعْرُوفِ »), et refait dans le temps. Il rattache à ce cas celui qui, voyant l'impureté pendant la prière, l'interrompt pour la laver, oublie, et prie de nouveau avec elle : Sanad (Kitāb al-ḥajj) y rapporte une divergence (sa seconde prière compte-t-elle, comme s'il avait prié dès le départ par oubli, ou n'est-elle pas excusée, puisqu'il s'en était souvenu ?) ; al-Ḥaṭṭāb pense qu'il est comme celui qui a oublié dès le départ (voir tah-01-03-03).\n\nAl-Dardīr : non s'il s'en est souvenu avant la prière, puis l'a oubliée en y entrant et jusqu'à la fin : elle n'est pas nulle, même si le souvenir et l'oubli se sont répétés avant la prière ; il refait seulement dans le temps.",
    aqwal: [
      { auteur: "Avis connu (« عَلَى الْمَعْرُوفِ »), rapporté par al-Ḥaṭṭāb", avis: "Celui qui l'a vue avant la prière puis oubliée est comme celui qui ne l'a pas vue : reprise dans le temps.", statut: "non_precise" },
      { auteur: "Sanad", avis: "Celui qui interrompt pour laver, oublie et prie de nouveau avec elle : divergence (sa prière compte-t-elle ?).", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (لَا) إنْ ذَكَرَهَا (قَبْلَهَا) ثُمَّ نَسِيَهَا عِنْدَ الدُّخُولِ فِيهَا وَاسْتَمَرَّ حَتَّى فَرَغَ مِنْهَا فَلَا تَبْطُلُ وَلَوْ تَكَرَّرَ الذِّكْرُ وَالنِّسْيَانُ قَبْلَهَا وَإِنَّمَا يُعِيدُ فِي الْوَقْتِ ».",
    tarjih_hattab: "Celui qui interrompt, oublie et prie de nouveau avec l'impureté entre dans « لَا قَبْلَهَا » : « وَأَنَّهُ دَاخِلٌ فِي قَوْلِ الْمُصَنِّفِ - رَحِمَهُ اللَّهُ تَعَالَى - لَا قَبْلَهَا ».",
    tanbihat: [],
    divergences: [
      "Concordance — la reprise dans le temps. Al-Ḥaṭṭāb : « وَهُوَ كَمَنْ لَمْ يَرَهَا عَلَى الْمَعْرُوفِ فَيُعِيدُ فِي الْوَقْتِ ». Al-Dardīr : « وَإِنَّمَا يُعِيدُ فِي الْوَقْتِ ».",
      "Complément — le souvenir répété. Al-Dardīr : « وَلَوْ تَكَرَّرَ الذِّكْرُ وَالنِّسْيَانُ قَبْلَهَا » ; al-Ḥaṭṭāb ne le précise pas."
    ],
    exemple: "Le matin, une femme remarque une tache d'urine de son enfant sur sa robe et se promet de la laver ; elle l'oublie et prie le ẓuhr avec. Sa prière n'est pas nulle. Si elle s'en rend compte avant le jaunissement du soleil, elle lave la tache et refait le ẓuhr ; après, elle n'a rien à refaire.",
    erreurs_frequentes: [
      "Croire que, puisqu'on avait vu l'impureté avant, la prière est nulle et doit être refaite toujours : l'oubli au moment de prier fait de lui un oublieux, qui refait seulement dans le temps."
    ],
    termes: [],
    quiz: [
      { q: "Un fidèle a vu une impureté sur lui avant la prière, puis l'a oubliée en priant. Que vaut sa prière ?",
        choix: ["Elle n'est pas nulle ; il la refait dans le temps", "Elle est nulle ; il la refait toujours", "Elle est valide sans rien refaire", "Il doit la refaire le lendemain"],
        bonne: 0,
        explication: "Al-Dardīr : « فَلَا تَبْطُلُ … وَإِنَّمَا يُعِيدُ فِي الْوَقْتِ »." },
      { q: "Selon al-Dardīr, si le souvenir et l'oubli se sont répétés plusieurs fois avant la prière…",
        choix: ["La prière devient nulle", "Il doit faire une prosternation d'oubli", "La règle ne change pas : elle n'est pas nulle", "Il doit prier deux fois"],
        bonne: 2,
        explication: "« وَلَوْ تَكَرَّرَ الذِّكْرُ وَالنِّسْيَانُ قَبْلَهَا »." },
      { q: "Selon al-Ḥaṭṭāb, celui qui interrompt pour laver l'impureté, l'oublie et prie de nouveau avec elle est comme…",
        choix: ["Celui qui a prié exprès", "Celui qui n'a jamais prié", "Celui qui s'est trompé de qibla", "Celui qui a prié avec une impureté oubliée dès le départ"],
        bonne: 3,
        explication: "« وَالظَّاهِرُ أَنَّهُ بِمَنْزِلَةِ مَنْ صَلَّى بِالنَّجَاسَةِ سَاهِيًا ابْتِدَاءً »." },
      { q: "Mise en situation : un homme a vu une goutte de sang sur sa manche avant le maghrib, l'a oubliée, et s'en souvient après la prière, à la nuit. Que fait-il ?",
        choix: ["Rien : le temps est passé", "Il lave la tache et refait le maghrib, l'aube n'étant pas levée", "Il refait toutes les prières de la journée", "Il doit jeûner un jour"],
        bonne: 1,
        explication: "Il refait dans le temps (« فَيُعِيدُ فِي الْوَقْتِ ») ; le maghrib se refait jusqu'à l'aube (voir tah-01-03-01h)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "141" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 70 (Shamela 21604, page 69)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-05",
    kitab: "tah", bab: "01", fasl: "03", ordre: 5,
    titre: "… ou sous une sandale qu'on retire",
    titre_ar: "أَوْ كَانَتْ أَسْفَلَ نَعْلٍ فَخَلَعَهَا",
    objectif: "Savoir que l'impureté découverte sous la sandale n'annule pas la prière si l'on en retire le pied sans la soulever, et connaître les convenances de la prière en sandales.",
    matn: "أَوْ كَانَتْ أَسْفَلَ نَعْلٍ فَخَلَعَهَا",
    regle_pratique: "Si le fidèle découvre pendant la prière une impureté sous sa sandale et en retire le pied sans la soulever, sa prière reste valide, même si la sandale bouge ; s'il la soulève avec son pied, il porte l'impureté et sa prière est nulle.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "S'il soulève la sandale avec son pied, ou s'il la garde au pied au moment de la prosternation, la prière est nulle (al-Dardīr)."
    },
    explication: "Al-Ḥaṭṭāb : cela vaut s'il ne soulève pas la sandale avec son pied ; sinon il porte l'impureté. S'il la remue sans la soulever, on suit ce qui a été dit d'Ibn Qaddāḥ et d'al-Burzulī (tah-01-03-01g) : selon al-Burzulī, la prière n'est pas nulle. Ibn Nājī explique pourquoi la sandale qu'on retire n'annule pas la prière, alors que le vêtement l'annule même jeté : le vêtement est porté par le fidèle (il « le porte »), tandis que le fidèle se tient sur la sandale, l'impureté étant dessous ; c'est comme s'il avait étendu un écran épais sur l'impureté : en retirant ses pieds sans la remuer, il évite de porter l'impureté et de la remuer. Cette distinction vient d'Ibn Yūnus ; Sanad rapporte le cas d'al-Ibyānī, qui ajoute : « comme le dessus d'une natte où il y a une impureté ». Ibn ʿArafa : d'après al-Māzirī, rapportant certains, s'il découvre l'impureté sur sa sandale et en sort les pieds sans la remuer, sa prière est valide.\n\nFarʿ — al-Ikmāl : prier en sandales (نَعْل, naʿl) est une dispense permise, que le Prophète ﷺ et ses compagnons ont pratiquée, tant qu'on ne sait pas la sandale impure. Al-Ubbī : bien que permis, il ne faut pas le faire aujourd'hui, surtout dans les grandes mosquées, car cela peut entraîner un plus grand mal (la réprobation des gens du commun — il rapporte un cas qui finit par le meurtre de celui qui priait ainsi —, et l'imitation par des gens qui ne prennent pas garde à leurs sandales) ; on n'entre même à la mosquée avec ses sandales ôtées que si elles sont couvertes. Il rapporte aussi qu'Abū Muḥammad az-Zawāwī le déconseillait et reprocha à Abū ʿAlī al-Qarawī d'y entrer avec des sandales découvertes : « vous êtes des imams qu'on imite ». Al-Madkhal : on prend ses sandales de la main gauche en entrant à la mosquée et en sortant ; prendre la sandale de la main droite et le livre de la main gauche est une innovation (بِدْعَة, bidʿa) ; on ne pose pas ses sandales devant soi, à sa droite ni derrière soi ; on les met à sa gauche, sauf si quelqu'un s'y trouve, et alors devant soi, entre le menton et les genoux à la prosternation, sans les remuer ; il est recommandé d'avoir pour elles un chiffon ou un étui.\n\nFarʿ — al-Ubbī : quelqu'un a donné pour fatwa que celui qui déplace la sandale d'autrui d'un endroit à un autre en répond, car l'ayant déplacée il devait la garder ; al-Ubbī l'approuve.\n\nAl-Dardīr : l'impureté sous la sandale, qui y est accrochée : s'il retire la sandale, la prière n'est pas nulle, même si la sandale bouge avec lui, tant qu'il ne soulève pas son pied avec elle ; s'il ne la retire pas, la prière est nulle là où il viendrait à la porter, c'est-à-dire à la prosternation, et non dans la prière funéraire ou celle qu'on fait debout par gestes, même s'il y est entré exprès. Si l'impureté est sur le dessus de la sandale, la prière est nulle même s'il la retire sans la remuer.",
    aqwal: [
      { auteur: "Ibn Yūnus ; Ibn Nājī", avis: "La sandale retirée n'annule pas la prière, à la différence du vêtement : le fidèle se tient sur elle sans la porter.", statut: "non_precise" },
      { auteur: "Al-Ibyānī (rapporté par Sanad)", avis: "C'est comme le dessus d'une natte où il y a une impureté.", statut: "non_precise" },
      { auteur: "Certains (rapportés par al-Māzirī, selon Ibn ʿArafa)", avis: "S'il découvre l'impureté sur sa sandale et en sort les pieds sans la remuer, sa prière est valide.", statut: "non_precise" },
      { auteur: "Ibn Qaddāḥ", avis: "S'il remue la sandale, sa prière est nulle.", statut: "qawl" },
      { auteur: "Al-Ikmāl (ʿIyāḍ)", avis: "Prier en sandales est une dispense permise, tant qu'on ne les sait pas impures.", statut: "non_precise" },
      { auteur: "Al-Ubbī", avis: "Il ne faut pas le faire aujourd'hui, surtout dans les grandes mosquées.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (أَوْ كَانَتْ) النَّجَاسَةُ (أَسْفَلَ نَعْلٍ) مُتَعَلِّقَةً بِهِ (فَخَلَعَهَا) أَيْ النَّعْلَ فَلَا تَبْطُلُ وَلَوْ تَحَرَّكَ بِحَرَكَتِهِ مَا لَمْ يَرْفَعْ رِجْلَهُ بِهَا فَتَبْطُلُ لِحَمْلِهِ النَّجَاسَةَ » ; al-Dasūqī : « وَمَا ذَكَرَهُ هُوَ الْمُعْتَمَدُ خِلَافًا لِمَنْ قَالَ وَهُوَ ابْنُ قَدَّاحٍ ».",
    tarjih_hattab: "Remuer la sandale sans la soulever n'annule pas la prière : il suit al-Burzulī (« وَتَقَدَّمَ عَنْ الْبُرْزُلِيِّ أَنَّ الصَّوَابَ عَدَمُ الْبُطْلَانِ »).",
    tanbihat: [
      "Al-Ḥaṭṭāb lit dans les mots d'Ibn Nājī « et la remuer » (« وَتَحْرِيكِهَا ») le souci d'échapper à l'avis d'Ibn Qaddāḥ, qui annule la prière si l'on remue la sandale.",
      "Al-Ubbī approuve la fatwa selon laquelle celui qui déplace la sandale d'autrui en répond : « وَصَوَّبْتُ هَذِهِ الْفُتْيَا »."
    ],
    divergences: [
      "Concordance — la sandale qui bouge. Al-Ḥaṭṭāb (al-Burzulī, Ibn Nājī) : la remuer sans la soulever n'annule pas. Al-Dasūqī : « فَالْمُعَوَّلُ عَلَيْهِ أَنَّ مَدَارَ الْبُطْلَانِ عَلَى رَفْعِهَا فَإِنْ رَفَعَهَا بَطَلَتْ وَإِلَّا فَلَا وَلَوْ تَحَرَّكَتْ بِحَرَكَتِهِ ».",
      "Point à comparer — l'impureté sur le dessus de la sandale. Al-Ḥaṭṭāb rapporte, par Ibn ʿArafa, le propos d'al-Māzirī sans restriction. Al-Dardīr : « وَمَفْهُومُ أَسْفَلَ أَنَّهَا لَوْ كَانَتْ أَعْلَاهُ لَبَطَلَتْ وَلَوْ نَزَعَهَا دُونَ تَحْرِيكٍ خِلَافًا لِظَاهِرِ قَوْلِ الْمَازِرِيِّ » ; al-Dasūqī : la lettre d'al-Māzirī vaut « كَمَا إذَا عَلِمَهَا بِأَعْلَاهُ … أَوْ بِأَسْفَلِهِ ».",
      "Complément — celui qui garde la sandale. Al-Dardīr : « وَمَفْهُومُهُ أَنَّهُ لَوْ لَمْ يَخْلَعْهَا بَطَلَتْ حَيْثُ يَلْزَمُ عَلَيْهِ حَمْلُهَا، وَذَلِكَ حَالَ السُّجُودِ », non dans la prière funéraire ni debout par gestes, même s'il y est entré exprès ; al-Dasūqī : de même s'il retire son pied à chaque prosternation.",
      "Complément — l'impureté sèche non accrochée. Al-Dasūqī : celui qui se tient, sandale pure, sur une impureté sèche qui ne s'y accroche pas, puis la soulève en s'en souvenant pour la poser sur un sol pur, n'a pas une prière nulle ; certains commentateurs ont lu le matn de ce seul cas, faisant de la sandale à l'impureté humide un vêtement ; « وَالْحَقُّ مَا قَالَهُ الشَّارِحُ كَمَا فِي طفى » (Muṣṭafā ar-Rammāṣī)."
    ],
    exemple: "Un fidèle prie dans une cour avec ses sandales ; au premier rukūʿ, il sent qu'il a marché dans une crotte. Il sort doucement les pieds de ses sandales sans les soulever et poursuit sa prière pieds nus : elle est valide. S'il avait soulevé la sandale accrochée à son pied, elle serait nulle.",
    erreurs_frequentes: [
      "Croire que la sandale impure est comme le vêtement impur : le fidèle se tient dessus sans la porter ; s'il en sort le pied sans la soulever, sa prière reste valide.",
      "Croire que la sandale ne doit absolument pas bouger : seul le fait de la soulever annule la prière, selon l'avis retenu."
    ],
    termes: [
      { ar: "نَعْل", translit: "naʿl", def: "Sandale." },
      { ar: "بِدْعَة", translit: "bidʿa", def: "Innovation : pratique introduite dans la religion sans fondement dans la sunna." }
    ],
    quiz: [
      { q: "Pendant la prière, un fidèle découvre une impureté accrochée sous sa sandale et en retire le pied sans la soulever. Sa prière…",
        choix: ["Est nulle", "Doit être refaite dans le temps", "Reste valide", "Est déconseillée"],
        bonne: 2,
        explication: "Al-Dardīr : « (فَخَلَعَهَا) أَيْ النَّعْلَ فَلَا تَبْطُلُ وَلَوْ تَحَرَّكَ بِحَرَكَتِهِ »." },
      { q: "Qu'est-ce qui rend la prière nulle dans ce cas, selon al-Dardīr ?",
        choix: ["Soulever la sandale avec son pied", "Que la sandale bouge un peu", "Regarder la sandale", "Prier pieds nus ensuite"],
        bonne: 0,
        explication: "« مَا لَمْ يَرْفَعْ رِجْلَهُ بِهَا فَتَبْطُلُ لِحَمْلِهِ النَّجَاسَةَ »." },
      { q: "Pourquoi, selon Ibn Nājī, la sandale retirée n'annule-t-elle pas la prière, à la différence du vêtement ?",
        choix: ["Parce que la sandale est toujours pure", "Parce que l'impureté des pieds est tolérée", "Parce que la sandale ne compte jamais", "Parce que le fidèle se tient sur la sandale sans la porter"],
        bonne: 3,
        explication: "« أَنَّ الثَّوْبَ حَامِلٌ لَهُ وَالنَّعْلَ وَاقِفٌ عَلَيْهِ وَالنَّجَاسَةَ فِي أَسْفَلِهِ »." },
      { q: "Mise en situation : un fidèle arrive à la grande mosquée avec ses sandales. Selon al-Madkhal, où les pose-t-il s'il a un voisin à sa gauche ?",
        choix: ["Devant lui, dans la direction de la qibla, en les remuant s'il le faut", "Devant lui, entre le menton et les genoux à la prosternation, sans les remuer, de préférence dans un étui", "À sa droite", "Derrière lui"],
        bonne: 1,
        explication: "« فَيَجْعَلُهُ إذْ ذَاكَ بَيْنَ يَدَيْهِ فَإِذَا سَجَدَ كَانَ بَيْنَ ذَقَنِهِ وَرُكْبَتَيْهِ وَيَتَحَفَّظُ أَنْ يُحَرِّكَهُ » ; un chiffon ou un étui est recommandé." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "141-142" },
    alertes: [
      "Al-Madkhal, cité par al-Ḥaṭṭāb : « فَإِنَّ السُّنَّةَ أَنْ يَكُونَ النَّهْيُ لِلطَّهَارَةِ » : phrase peu construite (un mot paraît manquer), non utilisée dans la fiche. Non bloquant (anomalie n° 136).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 70 (Shamela 21604, page 69)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-06",
    kitab: "tah", bab: "01", fasl: "03", ordre: 6,
    titre: "Tolérance pour ce qu'il est difficile d'éviter",
    titre_ar: "وَعُفِيَ عَمَّا يَعْسُرُ",
    objectif: "Connaître la règle générale de la tolérance des impuretés difficiles à éviter, et les trois degrés de difficulté qui la fondent.",
    matn: "وَعُفِيَ عَمَّا يَعْسُرُ",
    regle_pratique: "Une impureté dont il est difficile de se garder est tolérée (عَفْو, ʿafw) : le croyant n'est pas tenu de l'ôter pour prier ; les cas tolérés sont ceux que Khalīl énumère ensuite.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : après avoir dit ce qu'est ôter l'impureté et de quoi on l'ôte, Khalīl commence la liste des impuretés tolérées (مَعْفُوَّات, maʿfouwwât) ; il en donne vingt. Ad-Dhakhīra pose la règle : tout ordre dont l'exécution est pénible aux croyants tombe, et toute interdiction qu'il leur est pénible de respecter tombe. La difficulté (مَشَقَّة, machaqqa) a trois degrés : au plus haut, elle est tolérée par consensus — si la purification du ḥadath ou de la souillure devait coûter la vie ou un membre ; au plus bas, elle n'est pas tolérée, par consensus — se purifier à l'eau froide en hiver ; entre les deux, on diverge : la rattache-t-on au degré supérieur, qui fait tomber l'obligation, ou à l'inférieur, qui ne la fait pas tomber ? C'est de cette règle que dérivent les divergences de ce faṣl.\n\nOrdre suivi par Khalīl : d'abord ce qui sort du corps de la personne elle-même, puis ce qui l'atteint de même nature venant d'un autre (l'urine du nourrisson), puis d'une autre nature (le sang des puces, l'urine du cheval du combattant), puis ce qui ne vient pas d'un animal (la boue de pluie).\n\nAl-Dardīr : on tolère ce dont il est difficile de se garder parmi les impuretés ; c'est une règle générale ; comme tirer les cas particuliers d'une règle générale peut échapper à certains esprits, Khalīl en donne des exemples pour l'éclairer. Al-Dasūqī : « ce qui est difficile », c'est ce dont il est pénible de se détacher et de s'éloigner.",
    aqwal: [
      { auteur: "Ad-Dhakhīra (al-Qarāfī)", avis: "Tout ordre pénible tombe, toute interdiction pénible tombe ; la difficulté a trois degrés, et la divergence porte sur le degré intermédiaire.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَعُفِيَ عَمَّا يَعْسُرُ) الِاحْتِرَازُ عَنْهُ مِنْ النَّجَاسَاتِ وَهَذِهِ قَاعِدَةٌ كُلِّيَّةٌ ».",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb compte vingt cas tolérés dans la liste de Khalīl : « وَجُمْلَةُ مَا ذَكَرَ عِشْرُونَ ».",
      "Il explique l'ordre de la liste : ce qui sort du corps de la personne, ce qui vient d'un autre de même nature, d'une autre nature, puis ce qui ne vient pas d'un animal."
    ],
    divergences: [
      "Concordance — une règle générale. Al-Ḥaṭṭāb : la liste des cas tolérés suit la règle d'ad-Dhakhīra. Al-Dardīr : « وَهَذِهِ قَاعِدَةٌ كُلِّيَّةٌ وَلَمَّا كَانَ اسْتِخْرَاجُ الْجُزْئِيَّاتِ مِنْ الْكُلِّيَّاتِ قَدْ يَخْفَى عَلَى بَعْضِ الْأَذْهَانِ ذَكَرَ لَهَا جُزْئِيَّاتٍ لِلْإِيضَاحِ ».",
      "Complément — le sens de « difficile ». Al-Dasūqī : « أَيْ عَمَّا يَشُقُّ الِانْفِكَاكُ مِنْهُ وَالتَّبَاعُدُ عَنْهُ »."
    ],
    exemple: "Un homme qui travaille dans une ferme voit souvent des traces de boue mêlée de crottin sur le bas de son pantalon. Il ne se demande pas d'abord s'il doit tout laver avant chaque prière : il regarde si ce cas fait partie des tolérances que Khalīl énumère (la boue de pluie en fait partie, sous conditions).",
    erreurs_frequentes: [
      "Croire que toute difficulté dispense d'ôter l'impureté : la difficulté légère (l'eau froide en hiver) ne dispense pas, par consensus.",
      "Croire que la tolérance est laissée à l'appréciation de chacun : Khalīl en donne la liste."
    ],
    termes: [
      { ar: "عَفْو", translit: "ʿafw", def: "Tolérance : l'impureté reste impure, mais on n'est pas tenu de l'ôter pour prier." },
      { ar: "مَعْفُوَّات", translit: "maʿfouwwât", def: "Les impuretés tolérées." },
      { ar: "مَشَقَّة", translit: "machaqqa", def: "Difficulté, peine ; selon son degré, elle fait tomber ou non une obligation." }
    ],
    quiz: [
      { q: "Selon ad-Dhakhīra, que devient un ordre dont l'exécution est pénible aux croyants ?",
        choix: ["Il reste obligatoire", "Il tombe", "Il devient recommandé seulement le vendredi", "Il est reporté au lendemain"],
        bonne: 1,
        explication: "« كُلُّ مَأْمُورٍ يَشُقُّ عَلَى الْعِبَادِ فِعْلُهُ سَقَطَ الْأَمْرُ بِهِ »." },
      { q: "Se purifier à l'eau froide en hiver est une difficulté…",
        choix: ["Du plus bas degré : elle ne dispense pas, par consensus", "Du plus haut degré : elle dispense, par consensus", "Intermédiaire : on diverge", "Que l'école n'a jamais examinée"],
        bonne: 0,
        explication: "« وَمَشَقَّةٌ فِي الْمَرْتَبَةِ السُّفْلَى لَا يُعْفَى عَنْهَا إجْمَاعًا كَطَهَارَةِ الْحَدَثِ وَالْخَبَثِ بِالْمَاءِ الْبَارِدِ فِي الشِّتَاءِ »." },
      { q: "D'où viennent, selon ad-Dhakhīra cité par al-Ḥaṭṭāb, les divergences sur les cas tolérés ?",
        choix: ["Des difficultés du plus haut degré", "De l'avis personnel de chaque fidèle", "Des difficultés intermédiaires, qu'on rattache à l'un ou l'autre degré", "D'une erreur de copie"],
        bonne: 2,
        explication: "« وَمَشَقَّةٌ مُتَرَدِّدَةٌ بَيْنَ الْمَرْتَبَتَيْنِ … وَعَلَى هَذِهِ الْقَاعِدَةِ يَتَخَرَّجُ الْخِلَافُ فِي فُرُوعِ هَذَا الْفَصْلِ »." },
      { q: "Mise en situation : un malade risque de perdre un membre s'il lave une impureté sur sa plaie. Selon ad-Dhakhīra…",
        choix: ["Il doit la laver quand même", "On diverge à son sujet", "Il doit attendre la guérison pour prier", "Elle est tolérée par consensus"],
        bonne: 3,
        explication: "« مَشَقَّةٌ فِي الْمَرْتَبَةِ الْعُلْيَا فَيُعْفَى عَنْهَا كَمَا لَوْ كَانَتْ طَهَارَةُ الْحَدَثِ، أَوْ الْخَبَثِ تُذْهِبُ النَّفْسَ، أَوْ الْأَعْضَاءَ فَيُعْفَى عَنْهَا إجْمَاعًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "142" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 71 (Shamela 21604, page 70)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-07",
    kitab: "tah", bab: "01", fasl: "03", ordre: 7,
    titre: "Le ḥadath chronique",
    titre_ar: "كَحَدَثٍ مُسْتَنْكِحٍ",
    objectif: "Savoir que ce qui sort du corps de façon chronique (urine, madhy…) est toléré sur le vêtement et le corps, ce qu'on entend par « chronique », et ce qu'il en est pour l'imamat.",
    matn: "كَحَدَثٍ مُسْتَنْكِحٍ",
    regle_pratique: "Celui dont l'urine, le madhy ou une autre sortie revient de façon chronique — au moins une fois chaque jour — n'est pas tenu de laver ce qui en atteint son vêtement ou son corps ; il est recommandé de s'en protéger par un linge, et de laver si cela devient excessif ; guéri, il lave ce qui reste sur son vêtement.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : appeler « ḥadath » ce qui sort de façon chronique (مُسْتَنْكِح, moustankih) est un emploi figuré, car le ḥadath est ce qui sort habituellement en bonne santé (voir les annulatifs des ablutions) ; c'est la vue des Irakiens, qui tiennent l'urine de l'incontinent (سَلَس, salas) pour nulle et exigent, pour le ḥadath, la santé et l'habitude. At-Tawḍīḥ rapporte un avis selon lequel cette urine est un ḥadath, les ablutions pour chaque prière n'étant levées qu'à cause de la peine ; sur cet avis, le mot est pris au sens propre. Khalīl le met à l'indéfini pour inclure tout ḥadath, qu'il atteigne le vêtement ou le corps. Il ne parle pas du lieu : hors de la prière, on peut changer d'endroit ; pendant la prière, c'est une des choses qui collent au fidèle et dont il est difficile de se garder. Le sang de l'istiḥāḍa (اِسْتِحَاضَة, istihâda) entre dans le ḥadath ; le sang qui sort de l'anus ou du sexe de l'homme n'en fait pas partie : il relève de la plaie du fidèle. « Moustankih » se lit avec fatḥa ou kasra sur le kāf.\n\nQu'est-ce qui est chronique ? Est-ce seulement ce qui n'oblige pas aux ablutions (selon le détail des annulatifs), ou tout ce qui sort par incontinence, même si ses arrêts sont plus longs que ses venues, pourvu qu'il vienne une fois par jour ou plus ? Al-Ḥaṭṭāb retient le second. Al-Jazūlī et Yūsuf ibn ʿUmar définissent ainsi, au chapitre de l'oubli, ce qui est chronique : ce qui vient chaque jour une fois ou plus ; s'il vient tous les deux ou trois jours, ce n'est pas chronique ; son père disait que c'est ce qui paraît ici. At-Tawḍīḥ : les ḥadath chroniques sont comme le furoncle (دُمَّل, doummal), dont tout ce qui coule est toléré s'il n'a pas été percé et que cela se répète. Aṭ-Ṭirāz : pour l'incontinent à qui l'on recommande les ablutions, est-il recommandé de laver son sexe ? Ibn Ḥabīb : oui, par analogie avec les ablutions ; Saḥnūn : non, comme les autres impuretés qui coulent (les plaies), qu'on ne lave que si elles deviennent excessives ; mais il est recommandé de l'asperger si c'est chronique. Les Irakiens disent que l'incontinence ne rompt jamais les ablutions. Ibn ʿArafa ne connaît la tolérance du « ḥadath chronique » d'Ibn Shās comme texte que dans al-Kāfī, avec une analogie (le furoncle) ; al-Ḥaṭṭāb répond que ce que rapporte aṭ-Ṭirāz de Saḥnūn et d'Ibn Ḥabīb est un texte sur cette tolérance.\n\nFurūʿ : 1) La Mudawwana recommande de s'en protéger avec un linge (خِرْقَة, khirqa) ; Sanad : ce n'est pas obligatoire, puisqu'il prie avec le linge impur comme avec son vêtement ; en changer à la prière est recommandé selon al-Ibyānī, non selon Saḥnūn. 2) Ad-Dhakhīra : ce qui est toléré pour la personne l'est-il pour les autres ? Oui, puisque la Loi n'en tient plus compte ; ou non, la cause de la tolérance — la nécessité — n'existant pas chez eux ; la conséquence porte sur le fait qu'il dirige la prière d'autres fidèles. Al-Ḥaṭṭāb : l'imamat de l'incontinent est déconseillé, comme Khalīl le dira ; Sanad : nul ne peut prier avec le vêtement de l'incontinent sans être sûr de sa pureté ; mais la prière de ceux qui le suivent est valide, liée à la sienne, qui l'est. Al-Jawāhir : le sang, le pus et la sanie des boutons sont tolérés pour celui dont ils sortent ; venus du corps d'un autre, deux avis. 3) Al-Jawāhir : ce qui sort de façon chronique, la plaie, les furoncles qui coulent, la nourrice, l'urine du cheval du combattant : on tolère le peu et le beaucoup ; on n'est tenu de l'ôter que si cela devient excessif — c'est alors recommandé. Ibn Muʿallā : s'il y en a beaucoup, il faut laver, ce qu'al-Ḥaṭṭāb trouve étrange. 4) L'incontinent guéri n'est plus excusé de ce qui reste sur son vêtement (Ibn ʿArafa, d'après Ibn Jamāʿa).\n\nAl-Dardīr : le ḥadath (urine, madhy ou autre) chronique, avec kasra, c'est-à-dire qui revient souvent : au moins une fois par jour ; ce qui en atteint est toléré ; il peut entrer à la mosquée tant qu'il ne craint pas de la souiller. Al-Dasūqī : il n'est ni obligatoire ni sunna de le laver ; la tolérance de cette impureté est absolue, alors que la rupture des ablutions est détaillée ailleurs (s'il revient tout le temps, la plus grande partie ou la moitié du temps, il ne rompt pas ; moins, il rompt), car les souillures sont plus légères que les ḥadath.",
    aqwal: [
      { auteur: "Les Irakiens", avis: "L'urine de l'incontinent est tenue pour nulle ; l'incontinence ne rompt jamais les ablutions.", statut: "non_precise" },
      { auteur: "Avis rapporté par at-Tawḍīḥ", avis: "L'urine de l'incontinent est un ḥadath ; les ablutions pour chaque prière ne sont levées qu'à cause de la peine.", statut: "qawl" },
      { auteur: "Al-Jazūlī et Yūsuf ibn ʿUmar", avis: "Est chronique ce qui vient chaque jour une fois ou plus.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb (rapporté par aṭ-Ṭirāz)", avis: "Il est recommandé à l'incontinent de laver son sexe.", statut: "qawl" },
      { auteur: "Saḥnūn (rapporté par aṭ-Ṭirāz)", avis: "Ce n'est pas recommandé, sauf si cela devient excessif ; l'aspersion est recommandée.", statut: "non_precise" },
      { auteur: "Ad-Dhakhīra", avis: "Ce qui est toléré pour la personne l'est pour les autres ; un autre avis le nie.", statut: "non_precise" },
      { auteur: "Al-Jawāhir", avis: "On tolère le peu et le beaucoup ; on ne l'ôte, à titre recommandé, que s'il devient excessif.", statut: "non_precise" },
      { auteur: "Ibn Muʿallā", avis: "S'il y en a beaucoup, il faut laver.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (كَحَدَثٍ) بَوْلًا أَوْ مَذْيًا أَوْ غَيْرَهُمَا (مُسْتَنْكِحٍ) بِكَسْرِ الْكَافِ أَيْ مُلَازِمٍ كَثِيرًا بِأَنْ يَأْتِيَ كُلَّ يَوْمٍ وَلَوْ مَرَّةً فَيُعْفَى عَمَّا أَصَابَ مِنْهُ » ; al-Dasūqī : « أَيْ وَلَا يَجِبُ غَسْلُهُ وَلَا يُسَنُّ ».",
    tarjih_hattab: "Est chronique tout ce qui sort par incontinence et revient chaque jour une fois ou plus, même si ses arrêts sont plus longs : « وَهَذَا هُوَ الظَّاهِرُ » ; ce que rapporte aṭ-Ṭirāz est un texte sur la tolérance du ḥadath chronique : « نَصٌّ فِي الْعَفْوِ عَنْ الْحَدَثِ الْمُسْتَنْكِحِ » ; l'avis d'Ibn Muʿallā « وَهُوَ غَرِيبٌ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb nie qu'al-Ibyānī rende le linge obligatoire, comme Ibn Nājī le rapporte d'al-Qarāfī : « وَلَيْسَ فِي كَلَامِهِ مَا يَدُلُّ عَلَى ذَلِكَ ».",
      "Il relève qu'ad-Dhakhīra rapporte la divergence en général, puis n'en donne pour conséquence que l'imamat.",
      "Le sang qui sort de l'anus ou du sexe de l'homme n'entre pas dans le ḥadath ; il relève de la plaie du fidèle."
    ],
    divergences: [
      "Concordance — la définition. Al-Ḥaṭṭāb : ce qui vient chaque jour une fois ou plus. Al-Dardīr : « بِأَنْ يَأْتِيَ كُلَّ يَوْمٍ وَلَوْ مَرَّةً ».",
      "Concordance — le lieu. Al-Ḥaṭṭāb : Khalīl n'en parle pas ; hors de la prière, on change d'endroit. Al-Dasūqī le cite : « وَأَمَّا الْمَكَانُ فَقَالَ ح لَمْ يَذْكُرُوهُ », d'après « بْن » (Muḥammad al-Bunānī).",
      "Point à comparer — l'imamat de l'incontinent. Al-Ḥaṭṭāb : « وَأَمَّا إمَامَتُهُ فَهِيَ مَكْرُوهَةٌ », renvoyant au chapitre de la prière en commun. Al-Dasūqī, sur le même passage d'ad-Dhakhīra : « فَعَلَى الْأَوَّلِ تَجُوزُ وَتُكْرَهُ عَلَى الثَّانِي », et non nulle, la prière de ceux qui le suivent étant liée à la sienne, qui est valide.",
      "Complément — la mosquée. Al-Dardīr : « وَيُبَاحُ دُخُولُ الْمَسْجِدِ بِهِ مَا لَمْ يَخْشَ تَلَطُّخَهُ فَيُمْنَعَ ». Al-Ḥaṭṭāb n'en parle pas ici.",
      "Complément — tolérance et ablutions. Al-Dasūqī : la tolérance de l'impureté vaut en tout cas, la rupture des ablutions dépend de la fréquence, « لِأَنَّ مَا هُنَا مِنْ بَابِ الْأَخْبَاثِ وَذَاكَ مِنْ بَابِ الْأَحْدَاثِ وَالْأَخْبَاثُ أَسْهَلُ مِنْ الْأَحْدَاثِ »."
    ],
    exemple: "Un homme âgé perd quelques gouttes d'urine plusieurs fois par jour. Il n'est pas tenu de changer ou de laver son sous-vêtement avant chaque prière ; il est recommandé qu'il mette un linge pour s'en protéger, et qu'il lave si les traces deviennent importantes. Le jour où ce trouble cesse, il lave ce qui reste sur ses vêtements.",
    erreurs_frequentes: [
      "Croire que l'incontinent doit laver ses vêtements avant chaque prière : ce qui en vient est toléré.",
      "Croire que cette tolérance vaut encore après la guérison : guéri, il n'est plus excusé de ce qui reste sur son vêtement."
    ],
    termes: [
      { ar: "مُسْتَنْكِح", translit: "moustankih", def: "Chronique : ce qui revient sans cesse et domine la personne (au moins une fois par jour)." },
      { ar: "سَلَس", translit: "salas", def: "Incontinence : écoulement d'urine, de madhy ou d'autre chose qu'on ne peut retenir." },
      { ar: "اِسْتِحَاضَة", translit: "istihâda", def: "Saignement de la femme hors de ses règles, dû à un trouble." },
      { ar: "دُمَّل", translit: "doummal", def: "Furoncle." },
      { ar: "خِرْقَة", translit: "khirqa", def: "Linge, chiffon (ici, pour se protéger d'un écoulement)." }
    ],
    quiz: [
      { q: "Qu'est-ce qu'un ḥadath « chronique », selon al-Dardīr ?",
        choix: ["Ce qui vient une fois par mois", "Ce qui vient au moins une fois chaque jour", "Ce qui ne vient que la nuit", "Ce qui vient seulement en voyage"],
        bonne: 1,
        explication: "« بِأَنْ يَأْتِيَ كُلَّ يَوْمٍ وَلَوْ مَرَّةً »." },
      { q: "Ce qui atteint le vêtement de l'incontinent est…",
        choix: ["Toléré : le laver n'est ni obligatoire ni sunna", "Impur et à laver avant chaque prière", "Pur", "Toléré seulement le vendredi"],
        bonne: 0,
        explication: "Al-Dardīr : « فَيُعْفَى عَمَّا أَصَابَ مِنْهُ » ; al-Dasūqī : « وَلَا يَجِبُ غَسْلُهُ وَلَا يُسَنُّ »." },
      { q: "Selon al-Jawāhir, l'incontinent lave-t-il ce qui l'atteint ?",
        choix: ["Toujours", "Jamais, même si c'est excessif", "Seulement pour la prière du vendredi", "Seulement si cela devient excessif, à titre recommandé"],
        bonne: 3,
        explication: "« وَلَا تَجِبُ إزَالَتُهُ إلَّا أَنْ يَتَفَاحَشَ فَيُؤْمَرَ بِهَا » ; al-Ḥaṭṭāb : « أَيْ يُؤْمَرُ بِالْإِزَالَةِ عَلَى جِهَةِ النَّدْبِ »." },
      { q: "Mise en situation : un homme souffrait d'incontinence pendant des mois ; il est guéri. Que fait-il des traces sur ses vêtements ?",
        choix: ["Rien : elles restent tolérées", "Il jette ses vêtements", "Il les lave : guéri, il n'en est plus excusé", "Il les asperge seulement"],
        bonne: 2,
        explication: "« إذَا بَرِئَ صَاحِبُ السَّلَسِ فَلَا يُعْفَى عَمَّا كَانَ فِي ثَوْبِهِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "142-143" },
    alertes: [
      "Al-Ḥaṭṭāb : « وَذَلِكَ مِنْ قَبِيلِ الْحَرَجِ بِمُصَلٍّ » : lire « الْجُرْحِ » (la plaie du fidèle), comme dans le même passage (« وَالْجُرْحُ بِمُصَلٍّ »). Lecture suivie dans la fiche. Non bloquant (anomalie n° 137).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 71 (Shamela 21604, page 70)."
    ],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 21 — tah-01-03-08 à -13 — t. 1, p. 143–148 (Shamela 569, p. 142–147) */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 71–73 (Shamela 21604, p. 70–72) */
  /* ================================================================== */

  {
    id: "tah-01-03-08",
    kitab: "tah", bab: "01", fasl: "03", ordre: 8,
    titre: "L'humidité des hémorroïdes",
    titre_ar: "وَبَلَلُ بَاسُورٍ",
    objectif: "Savoir ce qu'est le bāsūr, que son humidité est impure, et qu'elle fait partie des impuretés tolérées.",
    matn: "وَبَلَلُ بَاسُورٍ",
    regle_pratique: "L'humidité qui sort des hémorroïdes (bāsūr) est impure, mais elle fait partie des impuretés tolérées, dans les conditions précisées à la fiche suivante (main, vêtement, corps).",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : ʿIyāḍ dit que le bāsūr (بَاسُور, bâsoûr), avec un bāʾ, est la douleur et l'enflure de l'anus par l'intérieur, avec des excroissances (ثَآلِيل, tha'âlîl, verrues) qui y sortent ; c'est un mot étranger. Az-Zubaydī : avec un nūn (nāsūr), c'est un mot arabe : l'ouverture des veines de l'anus et l'écoulement de leur matière ; plus loin, al-Ḥaṭṭāb définit le nāsūr comme une des plaies qui suintent. Abū l-Ḥasan : dans le hadith où il se purifiait à l'eau, et où cela guérit du bāsūr, on rapporte les deux lectures (bāʾ et nūn). Ibn Nājī le rapporte aussi ; tous semblent le tenir de ʿIyāḍ, sans doute ailleurs que dans at-Tanbīhāt, ou cela manque dans les copies qu'al-Ḥaṭṭāb a vues.\n\nIbn al-Imām : apparemment, l'école n'a pas divergé sur l'impureté de l'humidité du bāsūr. Sanad l'a rattachée, par déduction, à la divergence sur l'humidité du sexe de la femme ; Ibn al-Imām le conteste, car ce qui sort ici est du pus amassé dans l'organe, comme dans le furoncle. Al-Ḥaṭṭāb : ce qui est rapporté de Sanad est exact, mais il ne l'a dit que pour examiner la question, et il conclut : « mais il en est comme nous l'avons dit d'abord : l'endroit est impur par l'impureté qui sort, et la main en devient impure ».\n\nAl-Dardīr : le bāsūr, avec un bāʾ. Al-Dasūqī : pluriel bawāsīr ; c'est celui qui pousse à l'intérieur de l'orifice des selles, de sorte qu'il en sort, couvert d'humidité et d'impureté, et qu'on le remet en place avec la main ou un linge.",
    aqwal: [
      { auteur: "Ibn al-Imām", avis: "L'école n'a pas divergé sur l'impureté de l'humidité du bāsūr ; c'est du pus amassé, comme dans le furoncle.", statut: "non_precise" },
      { auteur: "Sanad (par déduction, à titre d'examen)", avis: "On pourrait la rattacher à la divergence sur l'humidité du sexe de la femme ; il conclut pourtant à son impureté.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَ) ك (بَلَلِ بَاسُورٍ) بِمُوَحَّدَةٍ » parmi les impuretés tolérées ; al-Dasūqī : « وَعَلَيْهِ بُلُولَةٌ وَنَجَاسَةٌ فَيَرُدُّهُ بِيَدِهِ أَوْ غَيْرِهَا كَخِرْقَةٍ إلَى مَحَلِّهِ ».",
    tarjih_hattab: "Sanad n'a pas réellement tenu cette humidité pour pure : « مَا ذَكَرَهُ عَنْ سَنَدٍ صَحِيحٌ لَكِنَّهُ إنَّمَا قَالَهُ عَلَى جِهَةِ الْبَحْثِ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb n'a pas trouvé la définition attribuée à ʿIyāḍ dans les copies d'at-Tanbīhāt qu'il a vues : « وَلَعَلَّهُ فِي غَيْرِ التَّنْبِيهَاتِ، أَوْ سَقَطَ مِنْ النُّسَخِ الَّتِي رَأَيْت »."
    ],
    divergences: [
      "Concordance — la lecture « bāsūr ». Al-Ḥaṭṭāb (ʿIyāḍ) : « بِالْبَاءِ الْمُوَحَّدَةِ ». Al-Dardīr : « بِمُوَحَّدَةٍ ».",
      "Complément — ce que vise la tolérance. Al-Dasūqī : « فَلَا مَفْهُومَ لِلْبَلَلِ فِي كَلَامِ الْمُصَنِّفِ وَلَا لِلْيَدِ » : l'humidité comme l'impureté qui sort avec le bāsūr sont tolérées."
    ],
    exemple: "Un homme souffre d'hémorroïdes qui sortent et suintent. Ce suintement est impur ; mais, comme il fait partie des impuretés tolérées, il n'a pas à laver son vêtement à chaque prière (voir la fiche suivante pour la main).",
    erreurs_frequentes: [
      "Croire que l'humidité des hémorroïdes est pure : elle est impure, mais tolérée.",
      "Confondre tolérance et pureté : la tolérance dispense de laver, elle ne rend pas la chose pure."
    ],
    termes: [
      { ar: "بَاسُور", translit: "bâsoûr", def: "Hémorroïde : enflure de l'anus par l'intérieur, qui peut sortir et suinter (pluriel : بَوَاسِير)." },
      { ar: "نَاسُور", translit: "nâsoûr", def: "Plaie qui suinte ; selon az-Zubaydī, ouverture des veines de l'anus et écoulement de leur matière." },
      { ar: "ثَآلِيل", translit: "tha'âlîl", def: "Verrues, excroissances (singulier ثُؤْلُول)." }
    ],
    quiz: [
      { q: "L'humidité qui sort des hémorroïdes est…",
        choix: ["Pure", "Impure, mais tolérée", "Impure et jamais tolérée", "Pure seulement chez la femme"],
        bonne: 1,
        explication: "Ibn al-Imām : « لَمْ يَخْتَلِفْ فِي نَجَاسَةِ بَلَّةِ الْبَاسُورِ » ; Khalīl la range parmi les impuretés tolérées." },
      { q: "Pourquoi Ibn al-Imām refuse-t-il de rattacher cette humidité à celle du sexe de la femme ?",
        choix: ["Parce que c'est de l'eau", "Parce qu'elle est toujours sèche", "Parce que la femme n'est pas concernée", "Parce que c'est du pus amassé, comme dans le furoncle"],
        bonne: 3,
        explication: "« لِأَنَّ الْخَارِجَ هُنَا هُوَ مَا اجْتَمَعَ فِي الْعُضْوِ مِنْ مِدَّةٍ فَهُوَ مِثْلُ مَا اجْتَمَعَ فِي الدُّمَّلِ »." },
      { q: "Selon al-Ḥaṭṭāb, Sanad tenait-il cette humidité pour pure ?",
        choix: ["Non : il ne l'a évoqué que pour examiner la question, et conclut à l'impureté", "Oui, sans réserve", "Oui, chez l'homme seulement", "Il ne l'a jamais évoquée"],
        bonne: 0,
        explication: "« لَكِنَّهُ إنَّمَا قَالَهُ عَلَى جِهَةِ الْبَحْثِ … وَالْمَكَانُ نَجِسٌ بِمَا يَلْقَاهُ مِنْ نَجَاسَةِ الْخَارِجِ »." },
      { q: "Mise en situation : un fidèle se demande si le suintement de ses hémorroïdes rend sa main impure quand il les remet en place. Que dit Sanad, rapporté par al-Ḥaṭṭāb ?",
        choix: ["Non : ce suintement est pur", "Seulement s'il saigne", "Oui : l'endroit est impur et la main en devient impure", "Seulement le vendredi"],
        bonne: 2,
        explication: "« وَالْمَكَانُ نَجِسٌ بِمَا يَلْقَاهُ مِنْ نَجَاسَةِ الْخَارِجِ فَتَنْجَسُ الْيَدُ بِذَلِكَ » ; la tolérance de la main est l'objet de la fiche suivante." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "143" },
    alertes: [
      "Corrigé (campagne de correction) : « وَخَرَجَ الثَّآلِيلُ هُنَاكَ » : lire « وَخُرُوجُ الثَّآلِيلِ » (et la sortie des verrues) — al-Kharashī (91, p. 105), qui donne la même définition : « وَتَوَرُّمُهَا مِنْ دَاخِلٍ وَخُرُوجُ الثَّآلِيلِ هُنَاكَ » (anomalie n° 138).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 71 (Shamela 21604, page 70)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-09",
    kitab: "tah", bab: "01", fasl: "03", ordre: 9,
    titre: "… sur la main si on les remet souvent, ou sur le vêtement",
    titre_ar: "فِي يَدٍ إنْ كَثُرَ الرَّدُّ، أَوْ ثَوْبٍ",
    objectif: "Savoir que l'humidité du bāsūr est tolérée sur la main seulement si on le remet souvent en place, et sur le vêtement et le corps dans tous les cas.",
    matn: "فِي يَدٍ إنْ كَثُرَ الرَّدُّ، أَوْ ثَوْبٍ",
    regle_pratique: "Celui qui remet ses hémorroïdes en place avec la main n'a pas à laver sa main s'il le fait souvent (plus d'une fois par jour, environ trois fois selon al-Dardīr) ; sinon il la lave ; ce qui atteint son vêtement ou son corps est toléré, même s'il ne les remet pas souvent.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Si la remise en place n'est pas fréquente, la main touchée par l'impureté doit être lavée."
    },
    explication: "Al-Ḥaṭṭāb : la condition (« si on les remet souvent ») porte sur la main seulement, car ce qui atteint le vêtement ou le corps est toléré même si l'on ne les remet pas souvent, comme l'ont dit Ibn Rāshid, Ibn ʿAbd as-Salām et Ibn al-Imām. Ibn ʿAbd as-Salām remarque que cela s'écarte de l'usage en droit, selon lequel ce qui est toléré pour une cause l'est sous tous ses aspects et en tous ses endroits, comme la sandale dans laquelle on peut prier sans nécessité. Al-Bisāṭī, qui rapporte la condition à la main et au vêtement, contredit ces textes. Khalīl a nommé le sujet du verbe (الرَّدّ, ar-radd, « la remise en place ») pour montrer que c'est sa fréquence qui compte, non la quantité qui atteint la main ; Ibn ʿAbd as-Salām : la nécessité vient de la fréquence du contact — une grande quantité une, deux ou trois fois ne rend pas pénible de laver, alors qu'une goutte reçue de nombreuses fois est une nécessité qui permet de prier ainsi.\n\nTanbīh — certains disent que la tolérance suppose qu'il soit obligé de les remettre ; al-Ḥaṭṭāb : la lettre de la Mudawwana n'en tient pas compte, car on y est le plus souvent obligé. Tanbīh — Abū l-Ḥasan (grand commentaire) : doit-il laver sa main ? Si elle n'a pas d'impureté, rien ; si elle en a, il la lave, sauf si cela est fréquent, car c'est une nécessité ; al-Ḥaṭṭāb : il semble dire qu'on regarde s'il y a de l'impureté à l'anus. Tanbīh — Ibn Nājī compte huit vêtements qu'on ne fait laver que si l'impureté devient excessive, dont celui de l'homme aux hémorroïdes.\n\nAl-Dardīr : l'humidité du bāsūr sur la main : il n'est pas tenu de la laver si la remise en place est fréquente, c'est-à-dire plus d'une fois par jour, et il paraît que ce soit trois fois, car laver la main n'est pénible que si c'est fréquent ; le linge avec lequel on les remet est comme la main ; sur le vêtement ou le corps, elle est tolérée même sans remise fréquente, si cela arrive chaque jour une fois ou plus.",
    aqwal: [
      { auteur: "Ibn Rāshid ; Ibn ʿAbd as-Salām ; Ibn al-Imām", avis: "La condition de fréquence porte sur la main seulement ; le vêtement et le corps sont tolérés sans condition.", statut: "non_precise" },
      { auteur: "Al-Bisāṭī", avis: "La condition porte sur la main et sur le vêtement.", statut: "qawl" },
      { auteur: "Certains (rapportés par al-Ḥaṭṭāb)", avis: "La tolérance suppose qu'il soit obligé de les remettre en place.", statut: "qawl" },
      { auteur: "Abū l-Ḥasan", avis: "S'il y a une impureté, il lave sa main, sauf si c'est fréquent.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « حَصَلَ (فِي يَدٍ) فَلَا يَلْزَمُ غَسْلُهَا مِنْهُ (إنْ كَثُرَ الرَّدُّ) بِهَا … (أَوْ) فِي (ثَوْبٍ) أَوْ بَدَنٍ وَإِنْ لَمْ يَكْثُرْ الرَّدُّ » ; al-Dasūqī : « إنْ كَثُرَ الرَّدُّ أَيْ سَوَاءٌ اُضْطُرَّ لِرَدِّهِ أَمْ لَا؛ لِأَنَّ الْغَالِبَ اضْطِرَارُهُ لِرَدِّهِ كَمَا فِي ح ».",
    tarjih_hattab: "La condition ne porte que sur la main (« وَمَا قَالَهُ الْبِسَاطِيُّ مِنْ أَنَّ الشَّرْطَ رَاجِعٌ لِلْيَدِ وَالثَّوْبِ مُخَالِفٌ لِمَا تَقَدَّمَ مِنْ النُّصُوصِ ») ; on ne tient pas compte de l'obligation de les remettre : « ظَاهِرُ الْمُدَوَّنَةِ عَدَمُ اعْتِبَارِ ذَلِكَ؛ لِأَنَّ الْغَالِبَ الِاضْطِرَارُ لِلرَّدِّ ».",
    tanbihat: [
      "Ibn ʿAbd as-Salām relève que limiter la tolérance à un endroit s'écarte de l'usage (« وَهَذَا خِلَافُ الْمَعْهُودِ فِي مَسَائِلِ الْفِقْهِ »).",
      "Ibn Nājī range le vêtement de l'homme aux hémorroïdes parmi les huit qu'on ne fait laver que si l'impureté devient excessive ; al-Ḥaṭṭāb en tire qu'il est alors invité à le laver."
    ],
    divergences: [
      "Complément — le seuil de fréquence. Al-Ḥaṭṭāb ne le chiffre pas. Al-Dardīr : « بِأَنْ يَزِيدَ عَلَى الْمَرَّةِ فِي كُلِّ يَوْمٍ وَيَظْهَرُ أَنْ يَكُونَ ثَلَاثَ مَرَّاتٍ إذْ لَا مَشَقَّةَ فِي غَسْلِ الْيَدِ إلَّا بِالْكَثْرَةِ ».",
      "Complément — le linge. Al-Dardīr : « وَمِثْلُ الْيَدِ الثَّوْبُ الَّذِي يَرُدُّ بِهِ أَيْ الْخِرْقَةُ » ; al-Dasūqī : il n'est toléré, comme la main, que si la remise est fréquente.",
      "Concordance — l'obligation de les remettre. Al-Ḥaṭṭāb : on n'en tient pas compte. Al-Dasūqī : « سَوَاءٌ اُضْطُرَّ لِرَدِّهِ أَمْ لَا … كَمَا فِي ح ».",
      "Complément — les cas voisins. Al-Dasūqī : « وَفِي عبق الظَّاهِرُ أَنَّ خُرُوجَ الصَّرْمِ كَالْبَاسُورِ » (« عبق » : ʿAbd al-Bāqī az-Zurqānī ; prolapsus) ; son maître al-ʿAdawī y joint la trace du furoncle."
    ],
    exemple: "Un homme dont les hémorroïdes sortent plusieurs fois par jour les remet en place avec un doigt. Il n'est pas tenu de se laver la main avant chaque prière. Si cela ne lui arrive qu'une fois de temps en temps, il se lave la main. Ce qui tache son sous-vêtement est toléré dans les deux cas.",
    erreurs_frequentes: [
      "Croire que la condition de fréquence vaut aussi pour le vêtement : selon les textes cités par al-Ḥaṭṭāb, le vêtement et le corps sont tolérés sans cette condition.",
      "Croire que c'est la quantité d'humidité qui compte : c'est la fréquence de la remise en place."
    ],
    termes: [
      { ar: "الرَّدّ", translit: "ar-radd", def: "Ici : le fait de remettre en place, avec la main, l'hémorroïde sortie." }
    ],
    quiz: [
      { q: "Sur quoi porte la condition « si on les remet souvent » ?",
        choix: ["Sur la main seulement", "Sur le vêtement seulement", "Sur la main et le vêtement", "Sur le lieu de prière"],
        bonne: 0,
        explication: "« الشَّرْطُ رَاجِعٌ إلَى الْيَدِ؛ لِأَنَّ مَا يُصِيبُ الثَّوْبَ مِنْهُ، أَوْ الْجَسَدَ مَعْفُوٌّ عَنْهُ، وَلَوْ لَمْ يَكْثُرْ الرَّدُّ »." },
      { q: "Qu'est-ce qui compte, selon Ibn ʿAbd as-Salām : la quantité d'humidité ou la fréquence ?",
        choix: ["La quantité", "La couleur", "La fréquence de la remise en place", "L'heure de la prière"],
        bonne: 2,
        explication: "« إذْ الضَّرُورَةُ إنَّمَا هِيَ لِأَجْلِ كَثْرَةِ الْإِصَابَةِ لَا كَثْرَةِ الْمُصِيبِ »." },
      { q: "Selon al-Dardīr, à partir de quand la remise en place est-elle « fréquente » ?",
        choix: ["Une fois par semaine", "Plus d'une fois par jour ; il paraît que ce soit trois fois", "Une fois par mois", "Dix fois par jour au moins"],
        bonne: 1,
        explication: "« بِأَنْ يَزِيدَ عَلَى الْمَرَّةِ فِي كُلِّ يَوْمٍ وَيَظْهَرُ أَنْ يَكُونَ ثَلَاثَ مَرَّاتٍ »." },
      { q: "Mise en situation : un homme remet ses hémorroïdes en place une seule fois, rarement. Que fait-il de sa main avant de prier ?",
        choix: ["Rien : elle est tolérée", "Il l'essuie seulement", "Il prie sans la toucher", "Il la lave"],
        bonne: 3,
        explication: "La tolérance de la main suppose la fréquence (« إنْ كَثُرَ الرَّدُّ ») ; Abū l-Ḥasan : « فَيَغْسِلُ يَدَهُ إلَّا أَنْ يَكْثُرَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "143-144" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 71 (Shamela 21604, page 70)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-10",
    kitab: "tah", bab: "01", fasl: "03", ordre: 10,
    titre: "Le vêtement de la nourrice qui fait des efforts",
    titre_ar: "وَثَوْبُ مُرْضِعَةٍ تَجْتَهِدُ",
    objectif: "Savoir que ce qui atteint la nourrice de l'urine de l'enfant est toléré si elle s'efforce de s'en garder, et à quelles conditions pour la nourrice qui n'est pas la mère.",
    matn: "وَثَوْبُ مُرْضِعَةٍ تَجْتَهِدُ",
    regle_pratique: "La femme qui allaite et s'efforce de se protéger de l'urine de l'enfant n'est pas tenue de laver ce qui en atteint son vêtement ou son corps, même si elle le voit ; elle le lave, à titre recommandé, si cela devient excessif ; la nourrice qui n'est pas la mère en bénéficie si elle en a besoin ou si l'enfant n'accepte qu'elle.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Si elle ne s'efforce pas de se protéger, ce qui l'atteint n'est pas toléré."
    },
    explication: "Al-Ḥaṭṭāb : on tolère ce qui atteint le vêtement de la nourrice (مُرْضِعَة, mourdiʿa) — et son corps, comme le dit at-Tawḍīḥ — quand elle s'efforce de s'en garder. La Mudawwana : « elle écarte l'urine autant qu'elle peut, et lave ce qui en atteint son vêtement autant qu'elle peut ». Ibn Farḥūn : ce qu'elle voit, elle doit le laver ; on ne tolère que ce qui l'atteint sans qu'elle le sache. Al-Ḥaṭṭāb : cela va contre ce qu'on comprend d'at-Tawḍīḥ, d'Ibn ʿAbd as-Salām, d'Ibn Hārūn, d'al-Jawāhir et d'Ibn Nājī : si elle s'est efforcée d'écarter l'urine, ce qui l'atteint ensuite est toléré, même si elle le voit, et elle n'est invitée à le laver que si cela devient excessif ; Ibn al-Imām : « elle lave autant qu'elle peut » est une recommandation, car, faisant ses efforts, elle est comme la personne au ḥadath chronique ; Ibn ʿAṭāʾ Allāh : elle est comme la femme en istiḥāḍa et les incontinents.\n\nTanbīhāt : 1) Les mots d'Ibn Farḥūn « urine ou autre » laissent entendre que ses selles aussi sont tolérées ; Ibn al-Imām, après avoir dit l'urine tolérée — difficile à éviter parce qu'elle coule souvent, sans règle, et qu'il serait très pénible de laver sans cesse —, dit qu'il en va autrement des selles, et que personne n'en a traité ; al-Ḥaṭṭāb : les textes de l'école parlent de la tolérance de son urine. 2) « Elle fait des efforts » : la lettre de la Mudawwana est que c'est obligatoire ; Ibn al-Imām : c'est une condition de la tolérance ; al-Ḥaṭṭāb : les textes de l'école sont explicites là-dessus ; al-Burzulī y voit pourtant une recommandation : interrogé sur l'artisan qui doit manier du fumier et s'en salit, Abū ʿImrān répondit que le vêtement devient impur, qu'il en prépare un pour la prière, et que, s'il ne le peut pas, il prie avec plutôt que de laisser passer le temps ; al-Burzulī : s'il est contraint par son métier, c'est comme le vêtement de la nourrice et le cheval du combattant, toléré, et l'effort et le second vêtement ne sont que recommandés. Al-Ḥaṭṭāb : le plus apparent des textes de l'école est le premier (condition). 3) Ibn Nājī : la lettre de la Mudawwana vise la mère seule, non la nourrice à gages (ظِئْر, zi'r), contre Ibn al-Ḥājib ; le plus proche est de les concilier : si la nourrice a besoin de son salaire, elle est tolérée, sinon non. Al-Ḥaṭṭāb juge ce détail apparent ; at-Tawḍīḥ le pose (son enfant ou un autre, si elle en a besoin ou si l'enfant n'en accepte pas d'autre), et Ibn al-Imām aussi. Al-Wānnūghī y joint le boucher et le vidangeur (كَنَّاف).\n\nAl-Dardīr : le vêtement ou le corps de la nourrice, mère ou non — si elle en a besoin, s'il n'y en a pas d'autre ou si l'enfant n'en accepte pas d'autre — qui s'efforce d'écarter l'urine ou les selles en éloignant l'enfant quand il urine ou en lui mettant des linges qui l'empêchent de l'atteindre ; ce qui l'atteint après cette précaution est toléré, non si elle ne s'en est pas gardée ; de même le vidangeur et le boucher. Al-Dasūqī : elle n'est pas tenue de laver ce qu'elle voit, ni d'asperger en cas de doute ; elle lave, à titre recommandé, si c'est excessif ; le lieu n'est pas toléré si elle peut en changer.",
    aqwal: [
      { auteur: "At-Tawḍīḥ ; Ibn ʿAbd as-Salām ; Ibn Hārūn ; al-Jawāhir ; Ibn Nājī ; Ibn al-Imām", avis: "Ce qui l'atteint après ses efforts est toléré, même vu ; elle ne le lave que s'il devient excessif.", statut: "non_precise" },
      { auteur: "Ibn Farḥūn", avis: "Ce qu'elle voit, elle doit le laver ; on ne tolère que ce qu'elle ignore.", statut: "qawl" },
      { auteur: "Al-Burzulī", avis: "L'effort et le second vêtement ne sont que recommandés.", statut: "qawl" },
      { auteur: "Ibn Nājī ; at-Tawḍīḥ ; Ibn al-Imām", avis: "La nourrice qui n'est pas la mère est tolérée si elle en a besoin, ou si l'enfant n'accepte qu'elle.", statut: "non_precise" },
      { auteur: "Al-Wānnūghī (rapporté par al-Mashaddālī)", avis: "Le boucher et le vidangeur sont comme elle.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَ) ك (ثَوْبِ مُرْضِعَةٍ) أَوْ جَسَدِهَا أُمًّا أَوْ غَيْرَهَا إنْ احْتَاجَتْ أَوْ لَمْ يُوجَدْ غَيْرُهَا أَوْ لَمْ يَقْبَلْ الْوَلَدُ سِوَاهَا » ; « فَإِذَا أَصَابَهَا شَيْءٌ بَعْدَ التَّحَفُّظِ عُفِيَ عَنْهُ لَا إنْ لَمْ تَتَحَفَّظْ » ; al-Dasūqī : « وَلَا يَجِبُ عَلَيْهَا غَسْلُ مَا أَصَابَهَا مِنْ بَوْلِهِ أَوْ عَذِرَتِهِ، وَلَوْ رَأَتْهُ ».",
    tarjih_hattab: "Ce qu'elle voit est toléré aussi (« وَالظَّاهِرُ الْأَوَّلُ ») ; l'effort est une condition (« وَالظَّاهِرُ مِنْ كَلَامِ أَهْلِ الْمَذْهَبِ الْأَوَّلُ ») ; pour la nourrice à gages, le détail d'Ibn Nājī : « وَمَا اخْتَارَهُ ابْنُ نَاجِي مِنْ التَّفْصِيلِ ظَاهِرٌ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb s'en tient à l'urine de l'enfant : « وَاَلَّذِي فِي عِبَارَةِ أَهْلِ الْمَذْهَبِ الْعَفْوُ عَنْ بَوْلِهِ ».",
      "Ibn Nājī range le vêtement de la nourrice parmi les huit qu'on ne fait laver que si l'impureté devient excessive."
    ],
    divergences: [
      "Divergence — les selles de l'enfant. Al-Ḥaṭṭāb : les textes de l'école ne tolèrent que l'urine (Ibn al-Imām : « وَهَذَا بِخِلَافِ غَائِطِهِ »). Al-Dardīr : « (تَجْتَهِدُ) فِي دَرْءِ الْبَوْلِ أَوْ الْغَائِطِ » ; al-Dasūqī : « مَا أَصَابَهَا مِنْ بَوْلِهِ أَوْ عَذِرَتِهِ ».",
      "Concordance — ce qu'elle voit. Al-Ḥaṭṭāb, contre Ibn Farḥūn : toléré. Al-Dasūqī : « وَلَوْ رَأَتْهُ كَمَا يُفْهَمُ مِنْ التَّوْضِيحِ وَابْنِ عَبْدِ السَّلَامِ وَابْنِ هَارُونَ وَصَاحِبِ الْجَوَاهِرِ وَابْنِ نَاجِيٍّ خِلَافًا لِقَوْلِ ابْنِ فَرْحُونٍ ».",
      "Concordance — la nourrice qui n'est pas la mère. Al-Ḥaṭṭāb (Ibn Nājī, at-Tawḍīḥ) et al-Dardīr : tolérée si elle en a besoin, ou si l'enfant n'en accepte pas d'autre ; al-Dasūqī précise : « لِأَنَّ سَبَبَ الْعَفْوِ الضَّرُورَةُ خِلَافًا لِلْمَشَذَّالِيِّ » (renvoi à « شب », Ibrāhīm ash-Shabrakhītī).",
      "Complément — le vidangeur et le boucher. Al-Ḥaṭṭāb : rapportés par al-Wānnūghī et Ibn al-Imām. Al-Dardīr : « وَمِثْلُهَا الْكَنَّافُ وَالْجَزَّارُ » ; al-Dasūqī : sans précaution, ils lavent ce dont ils sont sûrs ou presque sûrs, et aspergent en cas de doute.",
      "Complément — le lieu. Al-Dasūqī : « أَيْ لَا مَكَانَهَا فَلَا يُعْفَى عَمَّا أَصَابَهُ إنْ أَمْكَنَهَا التَّحَوُّلُ عَنْهُ »."
    ],
    exemple: "Une jeune mère met un lange épais à son bébé et l'écarte d'elle quand il urine ; malgré cela, quelques gouttes atteignent sa robe. Elle peut prier avec, même si elle les a vues ; si sa robe devient très souillée, il est recommandé de la laver. Si elle ne prenait aucune précaution, ce ne serait pas toléré.",
    erreurs_frequentes: [
      "Croire que la nourrice est dispensée de toute précaution : la tolérance suppose qu'elle s'efforce d'écarter l'urine.",
      "Croire qu'elle doit laver tout ce qu'elle voit : selon l'avis retenu, ce qui l'atteint après ses efforts est toléré, même vu."
    ],
    termes: [
      { ar: "مُرْضِعَة", translit: "mourdiʿa", def: "Femme qui allaite un enfant." },
      { ar: "ظِئْر", translit: "zi'r", def: "Nourrice qui allaite l'enfant d'une autre, souvent contre salaire." },
      { ar: "جَزَّار", translit: "jazzâr", def: "Boucher." }
    ],
    quiz: [
      { q: "À quelle condition ce qui atteint la nourrice de l'urine de l'enfant est-il toléré ?",
        choix: ["Si elle ne le voit pas", "Si elle s'efforce de s'en protéger", "Si l'enfant a moins d'un an", "Si elle prie à la maison"],
        bonne: 1,
        explication: "« وَثَوْبُ مُرْضِعَةٍ تَجْتَهِدُ » ; al-Dardīr : « لَا إنْ لَمْ تَتَحَفَّظْ »." },
      { q: "Elle voit une goutte d'urine sur sa robe après avoir pris ses précautions. Selon l'avis retenu…",
        choix: ["Elle doit la laver", "Elle doit changer de robe", "C'est toléré, même vu", "Elle doit refaire ses ablutions"],
        bonne: 2,
        explication: "Al-Dasūqī : « وَلَا يَجِبُ عَلَيْهَا غَسْلُ مَا أَصَابَهَا مِنْ بَوْلِهِ أَوْ عَذِرَتِهِ، وَلَوْ رَأَتْهُ »." },
      { q: "Selon al-Dardīr, la nourrice qui n'est pas la mère bénéficie-t-elle de la tolérance ?",
        choix: ["Jamais", "Toujours", "Seulement si elle est de la famille", "Oui, si elle en a besoin, s'il n'y en a pas d'autre ou si l'enfant n'accepte qu'elle"],
        bonne: 3,
        explication: "« أُمًّا أَوْ غَيْرَهَا إنْ احْتَاجَتْ أَوْ لَمْ يُوجَدْ غَيْرُهَا أَوْ لَمْ يَقْبَلْ الْوَلَدُ سِوَاهَا »." },
      { q: "Mise en situation : un boucher, malgré ses précautions, reçoit du sang des bêtes sur son tablier. Selon al-Dardīr…",
        choix: ["Il est comme la nourrice : c'est toléré", "Il doit laver avant chaque prière", "Il ne peut pas prier avec ses habits de travail", "C'est toléré seulement le vendredi"],
        bonne: 0,
        explication: "« وَمِثْلُهَا الْكَنَّافُ وَالْجَزَّارُ » ; al-Dasūqī : « فَيُعْفَى عَمَّا أَصَابَهُمَا بَعْدَ التَّحَفُّظِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "143-145" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 71–72 (Shamela 21604, pages 70–71)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-11",
    kitab: "tah", bab: "01", fasl: "03", ordre: 11,
    titre: "Recommandé : un vêtement réservé à la prière",
    titre_ar: "وَنُدِبَ لَهَا ثَوْبٌ لِلصَّلَاةِ",
    objectif: "Savoir qu'il est recommandé à la nourrice d'avoir un vêtement pour la prière, et pourquoi ce n'est pas demandé à l'incontinent ou à celui qui a un furoncle.",
    matn: "وَنُدِبَ لَهَا ثَوْبٌ لِلصَّلَاةِ",
    regle_pratique: "Il est recommandé à la nourrice — et à ceux qui lui sont assimilés, comme le vidangeur et le boucher — d'avoir un vêtement réservé à la prière ; ce n'est pas obligatoire, même si elle en a les moyens ; à l'incontinent et à celui qui a un furoncle, on recommande seulement un linge pour se protéger.",
    qualification: {
      hukm: "mandub",
      nature: "autre",
      effet_si_omis: "Aucune : elle peut prier avec le vêtement dans lequel elle allaite."
    },
    explication: "Al-Ḥaṭṭāb : la Mudawwana originale dit : « quant à la mère, je préfère qu'elle ait un vêtement dans lequel elle allaite » ; al-Barādhiʿī et d'autres l'ont abrégée comme une recommandation, et ses commentateurs l'ont comprise ainsi. Sanad, d'après Abū Isḥāq : c'est un avis jugé bon ; elle n'est pas tenue d'ôter son vêtement, même si elle peut en avoir un autre, car c'est une chose qui se répète, comme le ḥadath chronique ; Sanad trouve cela fondé, surtout pour qui n'a pas deux vêtements. Abū l-Ḥasan et Ibn Nājī disent de même ; on en comprend qu'elle n'est pas tenue de laver ce qu'elle voit après ses efforts, et la plupart des tardifs les ont suivis. Ibn Farḥūn rapporte de Taqī ad-Dīn qu'il ne lui est pas permis de prier dans ce vêtement si elle peut en avoir un pur : al-Ḥaṭṭāb y voit un avis contraire à ce qui est connu dans l'école. Ibn ʿAbd as-Salām : on ne l'a pas dit de celui qui a un furoncle ou une plaie, parce que la cause de son excuse est attachée à lui, alors que celle de la nourrice est séparée d'elle ; Sanad l'explique plus longuement : l'incontinent et la femme en istiḥāḍa ne peuvent pas éviter que l'impureté sorte pendant la prière, si bien que changer de vêtement ne leur servirait à rien, à la différence de la nourrice.\n\nAl-Dardīr : il est recommandé à la nourrice, et à ceux qui lui sont assimilés, d'avoir un vêtement pour la prière ; non à l'incontinent, à celui qui a un furoncle et à leurs semblables, leur excuse étant continue ; mais il leur est recommandé de préparer un linge pour s'en protéger. Al-Dasūqī : on ne l'a pas rendu obligatoire, car ce qui atteint la nourrice se répète, comme chez la personne au ḥadath chronique, et parce qu'ôter l'impureté est d'une règle légère.",
    aqwal: [
      { auteur: "Mālik (Mudawwana : « فَأَحَبُّ إلَيَّ »)", avis: "Il est préférable que la mère ait un vêtement dans lequel elle allaite.", statut: "non_precise" },
      { auteur: "Abū Isḥāq (rapporté par Sanad) ; Abū l-Ḥasan ; Ibn Nājī", avis: "C'est un avis jugé bon ; elle n'est pas tenue d'ôter son vêtement, même si elle en a un autre.", statut: "non_precise" },
      { auteur: "Taqī ad-Dīn (rapporté par Ibn Farḥūn)", avis: "Il ne lui est pas permis de prier dans ce vêtement si elle peut en avoir un pur.", statut: "shadh" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَنُدِبَ لَهَا) أَيْ لِلْمُرْضِعِ وَكَذَا مَنْ أُلْحِقَ بِهَا (ثَوْبٌ لِلصَّلَاةِ) لَا لِذِي سَلَسٍ وَدُمَّلٍ وَنَحْوِهِمَا لِاتِّصَالِ عُذْرِهِمْ نَعَمْ يُنْدَبُ لَهُمْ إعْدَادُ خِرْقَةٍ لِدَرْءِ ذَلِكَ ».",
    tarjih_hattab: "L'avis de Taqī ad-Dīn est rejeté : « وَهُوَ خِلَافُ الْمَعْرُوفِ فِي الْمَذْهَبِ ».",
    tanbihat: [
      "Sanad juge fondé l'avis d'Abū Isḥāq, « سِيَّمَا فِي حَقِّ مَنْ لَا يَجِدُ ثَوْبَيْنِ ».",
      "La différence avec l'incontinent vient de Sanad : « إنَّ الْأَوَّلَيْنِ لَا يُمْكِنُهُمَا الصِّيَانَةُ مِنْ خُرُوجِ النَّجَاسَةِ فِي الصَّلَاةِ فَلَا فَائِدَة فِي تَجْدِيدِ الثَّوْبِ »."
    ],
    divergences: [
      "Concordance — l'incontinent et le furoncle. Al-Ḥaṭṭāb (Ibn ʿAbd as-Salām, Sanad) : pas de vêtement pour la prière, leur excuse étant attachée à eux. Al-Dardīr : « لَا لِذِي سَلَسٍ وَدُمَّلٍ وَنَحْوِهِمَا لِاتِّصَالِ عُذْرِهِمْ » ; al-Dasūqī : « فَلَا فَائِدَةَ فِي إعْدَادِهِمْ الثَّوْبَ ».",
      "Complément — ceux qui sont assimilés à la nourrice. Al-Dardīr : « وَكَذَا مَنْ أُلْحِقَ بِهَا » ; al-Dasūqī : « أَيْ مِنْ الْكَنَّافِ وَالْجَزَّارِ ».",
      "Complément — le linge. Al-Dardīr : « نَعَمْ يُنْدَبُ لَهُمْ إعْدَادُ خِرْقَةٍ لِدَرْءِ ذَلِكَ » ; al-Ḥaṭṭāb rapporte la même recommandation de la Mudawwana pour le ḥadath chronique (tah-01-03-07)."
    ],
    exemple: "Une maman garde près du lieu où elle prie une robe propre qu'elle enfile seulement pour la prière. C'est recommandé ; si elle n'en a pas, ou n'a pas le temps de se changer, elle prie avec la robe dans laquelle elle allaite.",
    erreurs_frequentes: [
      "Croire que la nourrice doit avoir un vêtement de prière : c'est seulement recommandé.",
      "Croire que la même recommandation vaut pour l'incontinent : changer de vêtement ne lui servirait à rien ; on lui recommande un linge."
    ],
    termes: [],
    quiz: [
      { q: "Avoir un vêtement réservé à la prière, pour la nourrice, est…",
        choix: ["Obligatoire", "Interdit", "Déconseillé", "Recommandé"],
        bonne: 3,
        explication: "« وَنُدِبَ لَهَا ثَوْبٌ لِلصَّلَاةِ »." },
      { q: "Pourquoi ne recommande-t-on pas un vêtement de prière à l'incontinent ?",
        choix: ["Parce que l'impureté sort aussi pendant la prière : changer ne servirait à rien", "Parce qu'il est malade", "Parce que son urine est pure", "Parce qu'il prie à la maison"],
        bonne: 0,
        explication: "Sanad : « لَا يُمْكِنُهُمَا الصِّيَانَةُ مِنْ خُرُوجِ النَّجَاسَةِ فِي الصَّلَاةِ فَلَا فَائِدَة فِي تَجْدِيدِ الثَّوْبِ »." },
      { q: "Que dit al-Ḥaṭṭāb de l'avis de Taqī ad-Dīn (elle ne peut pas prier dans ce vêtement si elle en a un pur) ?",
        choix: ["C'est l'avis retenu", "C'est l'avis de la Mudawwana", "C'est contraire à ce qui est connu dans l'école", "C'est l'avis d'Ibn al-Qāsim"],
        bonne: 2,
        explication: "« وَهُوَ خِلَافُ الْمَعْرُوفِ فِي الْمَذْهَبِ »." },
      { q: "Mise en situation : une femme qui a un furoncle qui suinte demande si elle doit garder un vêtement propre pour la prière. Selon al-Dardīr…",
        choix: ["Oui, c'est obligatoire", "Non ; il lui est recommandé de préparer un linge pour se protéger", "Oui, comme la nourrice", "Elle ne doit pas prier"],
        bonne: 1,
        explication: "« لَا لِذِي سَلَسٍ وَدُمَّلٍ وَنَحْوِهِمَا لِاتِّصَالِ عُذْرِهِمْ نَعَمْ يُنْدَبُ لَهُمْ إعْدَادُ خِرْقَةٍ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "145-146" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 72 (Shamela 21604, page 71)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-12",
    kitab: "tah", bab: "01", fasl: "03", ordre: 12,
    titre: "Moins d'un dirham de sang, quel qu'il soit",
    titre_ar: "وَدُونَ دِرْهَمٍ مِنْ دَمٍ مُطْلَقًا",
    objectif: "Savoir que la petite quantité de sang est tolérée, quelle que soit son origine, et ce que vaut la tache de la taille d'un dirham.",
    matn: "وَدُونَ دِرْهَمٍ مِنْ دَمٍ مُطْلَقًا",
    regle_pratique: "Une tache de sang plus petite qu'un dirham — environ la surface d'une pièce, ou du rond qu'on voit sur l'avant-bras du mulet — est tolérée sur le vêtement ou le corps, quel que soit le sang (le sien, celui d'un autre, sang de règles ou de porc) ; selon l'avis retenu par al-Dardīr, la tache de la taille d'un dirham l'est aussi ; au-delà, on doit la laver.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Au-delà de la quantité tolérée, la règle de l'impureté s'applique (voir tah-01-03-01b)."
    },
    explication: "Al-Ḥaṭṭāb : on tolère ce qui est en deçà d'un dirham (دِرْهَم, dirham) de sang, quel qu'il soit : sang de règles, de cadavre, de porc ou autre. Ibn Ḥabīb : on ne tolère pas le peu de sang des règles, parce qu'il passe par le conduit de l'urine (Ibn Ashras le rapporte aussi de Mālik) ; Ibn Wahb : ni celui-là, ni le peu de sang de cadavre ; Sanad a déduit qu'on ne tolère pas le sang de porc. Farʿ : que le sang vienne du corps de la personne ou d'ailleurs, selon la lettre de l'école (at-Tawḍīḥ) ; certains maîtres limitent la tolérance au sang de la personne. Al-Lakhmī rapporte une divergence sur le peu de sang dans le vêtement d'un autre qu'on revêt ; Sanad pense qu'il le dit de son propre avis, sans le tenir d'un texte ; Ibn Nājī : les termes d'al-Lakhmī montrent presque explicitement que c'est son avis (« هَذَا كَالنَّصِّ فِي أَنَّهُ مِنْ رَأْيِهِ »). Ibn al-ʿAṭṭār rapporte d'Abū Bakr ibn ʿAbd ar-Raḥmān qu'on tolère le peu de sang sur le corps et non sur le vêtement, ce qui est contraire à ce qui est connu dans l'école.\n\nCe peu de sang est-il toléré en tout, comme un liquide pur, ou seulement pour la prière (on ne l'interrompt pas s'il s'en souvient et on ne la refait pas, mais on le lave avant, à titre recommandé) ? Le premier est la doctrine des Irakiens, la plus apparente selon Ibn ʿAbd as-Salām ; le second est attribué à la Mudawwana (Ibn ʿAbd as-Salām, Khalīl) ou à Ibn Ḥabīb (aṭ-Ṭirāz, Ibn ʿArafa d'après al-Māzirī, Ibn Nājī), et aṭ-Ṭirāz le dit contraire à la lettre de l'école ; la lettre de Khalīl est la tolérance en tout. Tafrīʿ sur la doctrine de la Mudawwana : s'il le voit pendant la prière, il continue sans l'ôter ; s'il l'ôte, il n'y a pas de mal (Sanad : ce peut être une recommandation ou non) ; selon Ibn Nājī, il peut ôter même une chemise (al-Qābisī) ; ʿIyāḍ : seulement ce qui s'ôte sans peine (calotte, manteau, turban, pagne) ; Ibn Yūnus : s'il lui reste de quoi se couvrir ; Sanad : si cela demande beaucoup de gestes, il ne l'ôte pas.\n\nTanbīhāt : 1) Le dirham est le dirham « baghlī » : le rond à l'intérieur de l'avant-bras du mulet (at-Tawḍīḥ, Ibn Rāshid, Majhūl al-Jallāb) ; Ibn Farḥūn objecte, d'après an-Nawawī, que c'était une ancienne monnaie appelée « tête de mulet », Mālik ayant dit que les dirhams diffèrent ; al-Ḥaṭṭāb : les deux sont proches ; Ibn ʿAbd al-Ḥakam (rapporté par Ibn Yūnus) : la taille de la bouche de la plaie. On a dit aussi : la taille du petit doigt — la surface de son extrémité (al-Irshād), sa dernière phalange (Majhūl al-Jallāb), replié (Ibn Hārūn). Dans l'audition d'Ashhab, Mālik refuse de fixer une mesure, les dirhams différant : on s'en remet à l'usage (al-ʿĀriḍa) ; al-Jazūlī le dit mashhūr, mais les tardifs n'ont pas suivi ce tashhīr. Ibn al-Mundhir rapporte de Mālik qu'on ne refait la prière que pour beaucoup de sang, à savoir la moitié du vêtement ou plus : avis jugé étrange par tous ceux qu'a rencontrés Ibn Nājī. 2) Khalīl met ici le dirham du côté du « beaucoup » (riwāya d'Ibn Ḥabīb, al-Wāḍiḥa), et au chapitre du saignement de nez du côté du « peu » (riwāya d'Ibn Ziyād, al-Majmūʿa ; Ibn ʿAbd al-Ḥakam ; al-Irshād) : il réunit ainsi les deux avis, selon la voie d'Ibn Sābiq (en deçà, peu ; au-delà, beaucoup ; pour le dirham lui-même, deux riwāyas). La voie d'Ibn Bashīr (le dirham est beaucoup par accord, le petit doigt peu, entre les deux deux avis) est jugée incorrecte par at-Tawḍīḥ, la divergence sur le dirham étant établie ; Ibn ʿArafa l'a aussi critiquée ; al-Ḥaṭṭāb note qu'Ibn Bashīr dit autre chose dans at-Tanbīh. 3) L'auteur d'al-Jamʿ rapporte d'Abū l-Walīd que la mesure vise la matière du sang et non sa trace, la trace au-delà d'un dirham étant peu.\n\nAl-Dardīr : en deçà de la surface d'un dirham baghlī — le rond de l'avant-bras du mulet —, matière ou trace de sang, le sien ou celui d'un autre, même de règles ou de porc, sur le vêtement, le corps ou le lieu. La lettre de Khalīl, qui exclut le dirham lui-même, est un avis faible : « l'avis retenu est la tolérance » ; non au-delà d'un dirham, même s'il s'agit d'une trace. Al-Dasūqī : c'est la surface qui compte, non l'épaisseur ; trois voies : Ibn Sābiq (le dirham : deux riwāyas, le mashhūr étant de ne pas le tolérer), Ibn Bashīr (le dirham n'est pas toléré, par accord), et celle d'Ibn Ziyād, d'Ibn ʿAbd al-Ḥakam et d'al-Irshād (le dirham est du peu) : « c'est l'avis le plus fort ».",
    aqwal: [
      { auteur: "Lettre de Khalīl ; Ibn Ḥabīb (al-Wāḍiḥa)", avis: "Le dirham lui-même est du « beaucoup » : seul ce qui est en deçà est toléré.", statut: "qawl" },
      { auteur: "Ibn Ziyād (al-Majmūʿa) ; Ibn ʿAbd al-Ḥakam ; al-Irshād", avis: "Le dirham est du « peu » : il est toléré. Rājiḥ selon al-Dasūqī.", statut: "rajih" },
      { auteur: "Ibn Ḥabīb (rapporté aussi de Mālik par Ibn Ashras) ; Ibn Wahb", avis: "Le peu de sang des règles (et, pour Ibn Wahb, de cadavre) n'est pas toléré.", statut: "qawl" },
      { auteur: "Les Irakiens ; Ibn ʿAbd as-Salām (« le plus apparent »)", avis: "Le peu de sang est toléré en tout, comme un liquide pur.", statut: "non_precise" },
      { auteur: "Mudawwana (selon Ibn ʿAbd as-Salām et Khalīl) ou Ibn Ḥabīb (selon aṭ-Ṭirāz)", avis: "Il n'est toléré que pour la prière ; on le lave avant, à titre recommandé.", statut: "qawl" },
      { auteur: "Mālik (audition d'Ashhab) ; al-Jazūlī", avis: "Pas de mesure fixe : on s'en remet à l'usage ; al-Jazūlī le dit mashhūr.", statut: "qawl" },
      { auteur: "Abū l-Walīd (al-Bājī, rapporté par l'auteur d'al-Jamʿ)", avis: "La mesure vise la matière du sang ; la trace au-delà d'un dirham est peu.", statut: "qawl" }
    ],
    muatamad: "Al-Dardīr : « (وَ) كَ (دُونِ) مِسَاحَةِ (دِرْهَمٍ) بَغْلِيٍّ … (مِنْ) عَيْنٍ أَوْ أَثَرِ دَمٍ (مُطْلَقًا) مِنْهُ أَوْ مِنْ غَيْرِهِ وَلَوْ دَمَ حَيْضٍ أَوْ خِنْزِيرٍ » ; « وَمَفْهُومُهُ أَنَّ مَا كَانَ قَدْرَ الدِّرْهَمِ لَا يُعْفَى عَنْهُ وَهُوَ ضَعِيفٌ وَالْمُعْتَمَدُ الْعَفْوُ » ; « لَا مَا فَوْقَ الدِّرْهَمِ وَلَوْ أَثَرًا ». Le muʿtamad tolère donc le dirham lui-même, contre la lettre de Khalīl.",
    tarjih_hattab: "Les deux définitions du dirham sont proches : « وَالظَّاهِرُ أَنَّ ذَلِكَ مُتَقَارِبٌ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb juge contraire à ce qui est connu l'avis d'Abū Bakr ibn ʿAbd ar-Raḥmān (tolérance sur le corps, non sur le vêtement) : « وَهُوَ خِلَافُ الْمَعْرُوفِ فِي الْمَذْهَبِ ».",
      "Il pense que Khalīl a suivi aṭ-Ṭirāz et Ibn ʿAbd as-Salām, qui préfèrent la doctrine des Irakiens, ou qu'il veut seulement nier l'obligation de laver.",
      "D'après Ibn ʿAbd as-Salām, le peu de sang et les autres impuretés tolérées ne rendent pas impure la nourriture qu'ils touchent ; al-Ḥaṭṭāb rappelle qu'al-Burzulī et d'autres ont dit le contraire."
    ],
    divergences: [
      "Divergence — la tache de la taille d'un dirham. Al-Ḥaṭṭāb : Khalīl la met ici du côté du « beaucoup » et, au saignement de nez, du côté du « peu », réunissant les deux avis (voie d'Ibn Sābiq). Al-Dardīr : « وَمَفْهُومُهُ أَنَّ مَا كَانَ قَدْرَ الدِّرْهَمِ لَا يُعْفَى عَنْهُ وَهُوَ ضَعِيفٌ وَالْمُعْتَمَدُ الْعَفْوُ » ; al-Dasūqī : « أَنَّ الدِّرْهَمَ مِنْ حَيِّزِ الْيَسِيرِ وَهَذَا هُوَ الرَّاجِحُ ».",
      "Point à comparer — la trace au-delà d'un dirham. Al-Ḥaṭṭāb rapporte d'Abū l-Walīd que la trace au-delà d'un dirham est peu, sans le trancher (« فَتَأَمَّلْهُ »). Al-Dardīr : « لَا مَا فَوْقَ الدِّرْهَمِ وَلَوْ أَثَرًا » ; al-Dasūqī : « أَيْ خِلَافًا لِلْبَاجِيِّ الْقَائِلِ: إنَّ الْأَثَرَ مَعْفُوٌّ عَنْهُ مُطْلَقًا وَلَوْ فَوْقَ دِرْهَمٍ فَهُوَ قَوْلٌ ضَعِيفٌ ».",
      "Point à comparer — toléré en tout ou seulement pour la prière. Al-Ḥaṭṭāb : deux avis, la lettre de Khalīl allant vers les Irakiens. Al-Dasūqī, d'après « بْن » (Muḥammad al-Bunānī) : « وَالظَّاهِرُ أَنَّ الْمُصَنِّفَ جَرَى هُنَا عَلَى مَذْهَبِ الْعِرَاقِيِّينَ لِقَوْلِ ابْنِ عَبْدِ السَّلَامِ أَنَّهُ أَظْهَرُ وَلِمَا فِي ح عَنْ سَنَدٍ » ; pour l'ordre de laver hors de la prière (doctrine de la Mudawwana), recommandation selon Ibn Hārūn et at-Tawḍīḥ, obligation selon ʿIyāḍ, Abū l-Ḥasan et Ibn ʿAbd as-Salām.",
      "Concordance — le dirham baghlī. Al-Ḥaṭṭāb (at-Tawḍīḥ) : « الدَّائِرَةُ الَّتِي تَكُونُ بِبَاطِنِ الذِّرَاعِ مِنْ الْبَغْلِ ». Al-Dardīr : « وَهِيَ الدَّائِرَةُ الَّتِي تَكُونُ فِي ذِرَاعِ الْبَغْلِ » ; al-Dasūqī : c'est la surface qui compte (« الْمُعْتَبَرَ الْمِسَاحَةُ لَا الْكَمِّيَّةُ »).",
      "Complément — le lieu et le sang d'autrui. Al-Dardīr étend la tolérance au lieu (« فِي ثَوْبٍ أَوْ بَدَنٍ أَوْ مَكَان ») et au sang d'un autre (« مِنْهُ أَوْ مِنْ غَيْرِهِ ») ; al-Ḥaṭṭāb ne parle pas du lieu, et rapporte pour le sang d'autrui la lettre de l'école (at-Tawḍīḥ) et l'avis contraire de certains maîtres."
    ],
    exemple: "En se rasant, un homme se coupe et une petite goutte de sang tache son col, plus petite qu'une pièce de monnaie. Il peut prier avec. Si la tache s'étale sur une large zone de la chemise, il la lave avant de prier.",
    erreurs_frequentes: [
      "Croire que toute trace de sang annule la prière : la petite quantité est tolérée.",
      "Croire que seul son propre sang est toléré : selon la lettre de l'école, le sang d'un autre l'est aussi, même de règles ou de porc."
    ],
    termes: [
      { ar: "دِرْهَم", translit: "dirham", def: "Pièce d'argent ; ici, mesure de surface d'une tache (le dirham « baghlī »)." },
      { ar: "الدِّرْهَمُ البَغْلِيّ", translit: "ad-dirhamou l-baghliyy", def: "Le rond qu'on voit à l'intérieur de l'avant-bras du mulet ; selon Ibn Farḥūn, une ancienne monnaie dite « tête de mulet »." },
      { ar: "خِنْصَر", translit: "khinsar", def: "Petit doigt ; sa dernière phalange sert, selon un avis, de mesure du peu de sang." }
    ],
    quiz: [
      { q: "Une tache de sang plus petite qu'un dirham, sur le vêtement…",
        choix: ["Annule la prière", "Doit toujours être lavée", "Est tolérée", "N'est tolérée que si c'est son propre sang"],
        bonne: 2,
        explication: "« وَدُونَ دِرْهَمٍ مِنْ دَمٍ مُطْلَقًا » ; al-Ḥaṭṭāb : « سَوَاءٌ كَانَ دَمَ حَيْضٍ، أَوْ مَيْتَةٍ، أَوْ خِنْزِيرٍ »." },
      { q: "Selon l'avis retenu par al-Dardīr, une tache de la taille exacte d'un dirham est…",
        choix: ["Interdite", "À laver seulement le vendredi", "Comme beaucoup de sang", "Tolérée, contre la lettre de Khalīl"],
        bonne: 3,
        explication: "« وَمَفْهُومُهُ أَنَّ مَا كَانَ قَدْرَ الدِّرْهَمِ لَا يُعْفَى عَنْهُ وَهُوَ ضَعِيفٌ وَالْمُعْتَمَدُ الْعَفْوُ »." },
      { q: "Qu'est-ce que le dirham « baghlī », selon at-Tawḍīḥ et al-Dardīr ?",
        choix: ["Une pièce d'or", "Le rond qu'on voit sur l'avant-bras du mulet", "Le poids d'un grain d'orge", "La paume de la main"],
        bonne: 1,
        explication: "Al-Dardīr : « وَهِيَ الدَّائِرَةُ الَّتِي تَكُونُ فِي ذِرَاعِ الْبَغْلِ »." },
      { q: "Mise en situation : une femme découvre sur sa manche une petite trace de sang de règles, plus petite qu'un dirham. Selon la lettre de Khalīl et al-Dardīr…",
        choix: ["Elle est tolérée : le sang de règles n'est pas excepté", "Elle doit la laver : le sang des règles n'est jamais toléré", "Elle doit refaire toutes ses prières", "Elle ne doit pas prier ce jour-là"],
        bonne: 0,
        explication: "Al-Dardīr : « وَلَوْ دَمَ حَيْضٍ أَوْ خِنْزِيرٍ » ; l'avis contraire est d'Ibn Ḥabīb et d'Ibn Wahb." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "146-147" },
    alertes: [
      "Corrigé (campagne de correction) : « وَفِي سَمَاعِ أَشْهَبَ لَأُجِيبَكُمْ بِتَحْدِيدِهِ » : lire « لَا أُجِيبُكُمْ » (je ne vous répondrai pas en la fixant) — Ibn ʿArafa (16968, p. 36) : « وسمع أشهب: لا أجيبكم بتحديده هو ضلال، الدراهم تختلف » (anomalie n° 139).",
      "Corrigé (campagne de correction) : « وَرِوَايَةُ ابْنِ زَيْدٍ فِي الْمَجْمُوعَةِ » : lire Ibn Ziyād — al-Dasūqī : « مَا رَوَاهُ ابْنُ زِيَادٍ وَقَالَهُ ابْنُ عَبْدِ الْحَكَمِ » ; Ibn ʿArafa (p. 36) : « روايتا علي وابن حبيب » (ʿAlī ibn Ziyād) (anomalie n° 140).",
      "Corrigé (campagne de correction) : « سِكَّةٌ قَدِيمَةٌ لِمَالِكٍ تُسَمَّى رَأْسَ الْبَغْلِ » : lire « لِمَلِكٍ » (d'un roi) — al-Zurqānī (14297, p. 78), d'après an-Nawawī : « إلى سكة قديمة لملك يسمى رأس البغل ». La fiche ne reprend pas ce détail (anomalie n° 141).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 72–73 (Shamela 21604, pages 71–72)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-13",
    kitab: "tah", bab: "01", fasl: "03", ordre: 13,
    titre: "Le pus et la sanie, comme le sang",
    titre_ar: "وَقَيْحٍ وَصَدِيدٍ",
    objectif: "Savoir que le pus et la sanie suivent la règle du sang, que les autres impuretés ne sont pas tolérées en petite quantité, et ce qu'il en est de l'urine des rues et de la petite tache mêlée à un liquide.",
    matn: "وَقَيْحٍ وَصَدِيدٍ",
    regle_pratique: "Le pus et la sanie sont tolérés en petite quantité, comme le sang ; en revanche, la petite quantité des autres impuretés (urine, selles, sperme, madhy…) n'est pas tolérée : on la lave ; on ne lave pas non plus ce qu'on soupçonne, sans le voir, des éclaboussures des rues.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : le pus (قَيْح, qayh) et la sanie (صَدِيد, sadîd) ont été définis plus haut ; ce que dit Khalīl est la doctrine de la Mudawwana selon Sanad, qui le rapporte d'at-Tūnisī ; Mālik, dans al-Mabsūṭ, ne tolère pas leur petite quantité ; Ibn Hārūn dit expressément que le mashhūr les assimile au sang.\n\nTanbīhāt : 1) On comprend de Khalīl que la petite et la grande quantité des autres impuretés sont égales, et al-Ḥaṭṭāb n'y connaît pas de divergence, sauf pour l'urine : le mashhūr, doctrine de la Mudawwana, est qu'on ne tolère pas sa petite quantité (Ibn al-Imām : c'est l'avis connu de Mālik). Al-Ikmāl : peu ou beaucoup d'impureté n'est pas toléré, c'est la doctrine de Mālik et de la plupart des juristes, sauf l'allègement pour le sang ; ath-Thawrī rapporte qu'on tolérait le peu d'urine, et les Koufiens ce qui a la taille de têtes d'aiguilles ; Mālik, ash-Shāfiʿī et Abū Thawr font laver ; le qāḍī Ismāʿīl rapporte que, pour Mālik, laver cela n'est qu'un avis jugé bon, par scrupule ; ʿIyāḍ ajoute que c'est la doctrine des Koufiens, contraire à ce qui est connu de Mālik. At-Tawḍīḥ rapporte d'al-Ikmāl que Mālik tolérait les éclaboussures d'urine de la taille de têtes d'aiguilles, peut-être en tout cas, peut-être seulement au moment d'uriner, où la nécessité se répète. Ibn al-Imām : le texte de ʿIyāḍ dit les têtes d'aiguilles en général, celui d'Ibn Baṭṭāl les éclaboussures, ce qui est plus proche. Ibn Nājī : des deux avis, le plus proche est la tolérance, et, des deux possibilités, la première (en tout cas), comme pour le sang. Ibn Rāshid : Abū l-Walīd a assimilé au ḥadath chronique l'urine des rues dont on soupçonne fortement les éclaboussures sans les voir : on n'a pas à la laver du vêtement, de la chaussure ni du corps, car on ne peut pas s'en garder ; al-Ḥaṭṭāb : celui qui marche dans la rue, ou dont le vêtement y tombe, ne le lave pas, même mouillé. Al-Burzulī : celui qui, après ses ablutions, glisse de son sabot, pied mouillé, et prend de la poussière du sol, puis prie, n'a rien à refaire : la poussière des rues est pure à l'origine.\n\n2) Al-Irshād : on tolère le peu de toute impureté, sauf les deux pires (urine et selles), soit un dirham ou moins ; Zarrūq : cela ne vise que le sang et ce qui le suit (pus, sanie). Al-Ḥaṭṭāb : la généralité d'al-Irshād fait difficulté, car la Mudawwana dit : l'urine, les selles, le sperme, le madhy, le wady, les fientes d'oiseaux qui sentent mauvais, le crottin et l'urine des bêtes, peu ou beaucoup, c'est pareil : on les lave et l'on interrompt la prière ; mais « le sang et ce qui le suit » comprend le liquide qui coule des plaies et des cloques dues au feu ou à la chaleur, impur, qui, sorti de lui-même, est comme ce qui sort du furoncle non percé : on en tolère le peu et le beaucoup.\n\n3) Si la petite quantité tolérée se mêle à un liquide, la tolérance demeure-t-elle ? Al-Ḥaṭṭāb n'a pas trouvé de texte explicite, mais la tolérance demeure, contre les Shafiʿites, et les cas de l'école le montrent : Ibn ʿAbd as-Salām (ce qui est toléré en entier l'est en partie) ; al-ʿĀriḍa (le peu de sang de la bouche est toléré) ; al-Burzulī (le crachat mêlé d'un peu de sang, pris dans sa manche) ; la sueur de l'endroit nettoyé aux pierres, tolérée selon l'avis le plus correct (Ibn al-Ḥājib) ; l'audition d'Ashhab (s'essuyer avec un vêtement portant un peu de sang qui ne déteint pas).\n\nAl-Dardīr : le pus et la sanie sont comme le sang à tous égards. Al-Dasūqī : on en tolère moins d'un dirham ; le liquide des cloques est comme la trace du furoncle (toléré peu ou beaucoup s'il n'est pas percé) ; Khalīl ne nomme que ces trois choses, ce qui exclut la tolérance du peu d'urine, de selles, de sperme ou de madhy, « c'est le mashhūr et l'avis connu », non ce qu'on rapporte de Mālik sur les têtes d'aiguilles ; la tolérance est propre au sang et à ce qui l'accompagne, car le corps humain est comme une outre pleine de sang, de pus et de sanie ; certains y ont joint l'urine des rues dont on soupçonne la présence sans la voir.",
    aqwal: [
      { auteur: "Mudawwana (selon Sanad, d'après at-Tūnisī) ; Ibn Hārūn", avis: "Le pus et la sanie sont comme le sang : leur peu est toléré ; c'est le mashhūr.", statut: "mashhur" },
      { auteur: "Mālik (al-Mabsūṭ)", avis: "Leur petite quantité n'est pas tolérée.", statut: "qawl" },
      { auteur: "Mudawwana ; Ibn al-Imām ; al-Ikmāl", avis: "Le peu d'urine n'est pas toléré.", statut: "mashhur" },
      { auteur: "Mālik (selon al-Ikmāl, rapporté par at-Tawḍīḥ) ; le qāḍī Ismāʿīl", avis: "Les éclaboussures d'urine de la taille de têtes d'aiguilles sont tolérées ; les laver n'est qu'un scrupule.", statut: "qawl" },
      { auteur: "Ibn Nājī", avis: "Le plus proche est la tolérance de ces éclaboussures, en tout cas.", statut: "non_precise" },
      { auteur: "Abū l-Walīd (rapporté par Ibn Rāshid)", avis: "L'urine des rues qu'on soupçonne sans la voir n'a pas à être lavée.", statut: "non_precise" },
      { auteur: "Al-Irshād", avis: "Le peu de toute impureté est toléré, sauf l'urine et les selles.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَقَيْحٍ وَصَدِيدٍ) هُمَا كَالدَّمِ مِنْ كُلِّ وَجْهٍ » ; al-Dasūqī : « مُشْعِرٌ بِعَدَمِ الْعَفْوِ عَنْ قَلِيلِ غَيْرِهَا مِنْ بَوْلٍ أَوْ غَائِطٍ أَوْ مَنِيٍّ أَوْ مَذْيٍ وَهُوَ الْمَشْهُورُ وَالْمَعْرُوفُ لَا مَا نُقِلَ عَنْ مَالِكٍ مِنْ اغْتِفَارِ مِثْلِ رُءُوسِ الْإِبَرِ مِنْ الْبَوْلِ ».",
    tarjih_hattab: "La petite quantité tolérée mêlée à un liquide reste tolérée : « وَالظَّاهِرُ أَنَّ الْعَفْوَ بَاقٍ خِلَافًا لِلشَّافِعِيَّةِ وَفُرُوعُ الْمَذْهَبِ تَدُلُّ عَلَى ذَلِكَ » ; la généralité d'al-Irshād fait difficulté : « وَعُمُومُ كَلَامِ الْإِرْشَادِ مُشْكِلٌ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb relève une confusion d'Ibn Farḥūn, qui a cru distinctes la tolérance rapportée par le qāḍī Ismāʿīl et celle d'al-Ikmāl : « وَهُوَ وَهْمٌ ».",
      "Il ajoute que le liquide qui sort de lui-même des cloques dues au feu ou à la chaleur est comme ce qui sort du furoncle non percé : on en tolère le peu et le beaucoup."
    ],
    divergences: [
      "Concordance — pus et sanie comme le sang. Al-Ḥaṭṭāb (Ibn Hārūn) : « بِأَنَّ الْمَشْهُورَ أَنَّهُمَا كَالدَّمِ ». Al-Dardīr : « هُمَا كَالدَّمِ مِنْ كُلِّ وَجْهٍ ».",
      "Concordance — le peu d'urine. Al-Ḥaṭṭāb : non toléré selon le mashhūr, malgré l'avis rapporté des têtes d'aiguilles et la préférence d'Ibn Nājī. Al-Dasūqī : « وَهُوَ الْمَشْهُورُ وَالْمَعْرُوفُ لَا مَا نُقِلَ عَنْ مَالِكٍ مِنْ اغْتِفَارِ مِثْلِ رُءُوسِ الْإِبَرِ مِنْ الْبَوْلِ ».",
      "Concordance — l'urine des rues et la poussière. Al-Ḥaṭṭāb (Abū l-Walīd, al-Burzulī). Al-Dasūqī : « نَعَمْ أَلْحَقَ بَعْضُهُمْ بِالْمَعْفُوَّاتِ الْمَذْكُورَةِ مَا يَغْلِبُ عَلَى الظَّنِّ مِنْ بَوْلِ الطُّرُقَاتِ إذَا لَمْ يَتَبَيَّنْ » ; « وَلِأَنَّ غُبَارَ الطَّرِيقِ الْأَصْلُ فِيهِ الطَّهَارَةُ ».",
      "Concordance — les cloques. Al-Ḥaṭṭāb : comme le furoncle non percé. Al-Dasūqī : « لَكِنَّهُ كَأَثَرِ الدُّمَّلِ يُعْفَى عَنْ كَثِيرِهِ وَقَلِيلِهِ إذَا لَمْ يَنْكَ، فَإِنْ نَكَى كَانَ الْخَارِجُ حُكْمُهُ حُكْمُ الدَّمِ ».",
      "Point à comparer — la tache mêlée à un liquide. Al-Ḥaṭṭāb : la tolérance demeure. Al-Dasūqī (sur le dirham) : « وَلَوْ كَانَ مَخْلُوطًا بِمَائِعٍ حَيْثُ كَانَ بِالْمَائِعِ دُونَ دِرْهَمٍ … فَلَا عَفْوَ » si, avec le liquide, elle dépasse la surface d'un dirham."
    ],
    exemple: "Un furoncle percé laisse une petite tache de pus sur la chemise d'un homme : elle est tolérée comme le sang. En revanche, une goutte d'urine tombée sur son pantalon, même minuscule, doit être lavée. Et s'il marche par temps de pluie dans une rue où il soupçonne de l'urine sans en voir, il n'a pas à laver ses chaussures.",
    erreurs_frequentes: [
      "Croire que toute impureté est tolérée en petite quantité : seuls le sang, le pus et la sanie le sont ; la goutte d'urine se lave.",
      "Croire qu'une tache tolérée cesse de l'être dès qu'elle est mouillée : selon al-Ḥaṭṭāb, la tolérance demeure (al-Dasūqī : tant qu'elle reste en deçà d'un dirham)."
    ],
    termes: [
      { ar: "رُءُوسُ الإِبَرِ", translit: "rou'oûsou l-ibar", def: "« Têtes d'aiguilles » : très fines éclaboussures (d'urine)." }
    ],
    quiz: [
      { q: "Le pus et la sanie, en petite quantité, sont…",
        choix: ["Tolérés comme le sang", "Jamais tolérés", "Purs", "Tolérés seulement sur le corps"],
        bonne: 0,
        explication: "Al-Dardīr : « (وَقَيْحٍ وَصَدِيدٍ) هُمَا كَالدَّمِ مِنْ كُلِّ وَجْهٍ »." },
      { q: "Une très petite goutte d'urine sur le vêtement, selon le mashhūr…",
        choix: ["Est tolérée", "N'est pas tolérée : on la lave", "Est tolérée si elle est sèche", "Est tolérée pour la femme"],
        bonne: 1,
        explication: "« وَالْمَشْهُورُ أَنَّهُ لَا يُعْفَى عَنْهُ وَهُوَ مَذْهَبُ الْمُدَوَّنَةِ »." },
      { q: "Pourquoi, selon al-Dasūqī, la tolérance est-elle propre au sang et à ce qui l'accompagne ?",
        choix: ["Parce que le sang est pur", "Parce que le sang ne se voit pas", "Parce que le sang sèche vite", "Parce que le corps est comme une outre pleine de sang, de pus et de sanie : il est difficile de s'en garder"],
        bonne: 3,
        explication: "« لِأَنَّ بَدَنَ الْإِنْسَانِ كَالْقِرْبَةِ الْمَمْلُوءَةِ بِالدَّمِ وَالْقَيْحِ وَالصَّدِيدِ فَالِاحْتِرَازُ عَنْ يَسِيرِهَا عُسْرٌ »." },
      { q: "Mise en situation : après ses ablutions, un homme glisse de son sabot et pose son pied mouillé sur la poussière de la rue, puis prie. Selon al-Burzulī…",
        choix: ["Il refait sa prière", "Il refait ses ablutions", "Il n'a rien à refaire : la poussière des rues est pure à l'origine", "Il doit asperger son pied après la prière"],
        bonne: 2,
        explication: "« لَا إعَادَةَ عَلَيْهِ قَالَ الْبُرْزُلِيُّ: لِأَنَّ غُبَارَ الطَّرِيقِ الْأَصْلُ فِيهِ الطَّهَارَةُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "147-148" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 72–73 (Shamela 21604, pages 71–72)."
    ],
    verification: "verifie"
  }

]);
