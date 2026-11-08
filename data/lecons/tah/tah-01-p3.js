/* Données — Kitāb al-Ṭahāra, bāb 01 (tah-01) : « بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ » — partie 3 — v2.5
   Source : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1 (shamela.ws/book/569).
   Croisement : al-Sharḥ al-kabīr d'al-Dardīr et Ḥāshiyat al-Dasūqī (shamela.ws/book/21604), tome 1.
   Cette partie : tah-01-02-01 à tah-01-02-16b (unités 7 et 8) — t. 1, p. 86–94.
   Bāb découpé en parties de moins de 200 Ko (limite de lecture du Projet) ; historique des versions : tah-01-p1.js. */
App.data.ajouterFiches([

  /* ================================================================== */
  /* Unité 7 — faṣl tah-01-02 « Le pur et l'impur » — t. 1, p. 86–90     */
  /* (Shamela 569, pages 85–89)                                          */
  /* ================================================================== */

  {
    id: "tah-01-02-01",
    kitab: "tah", bab: "01", fasl: "02", ordre: 1,
    titre: "Le cadavre de l'animal sans sang",
    titre_ar: "مَيْتَةُ مَا لَا دَمَ لَهُ",
    objectif: "Savoir que le cadavre d'une petite bête sans sang propre (scorpion, mouche, criquet…) est pur, et ce qu'on fait de la nourriture où elle tombe.",
    matn: "فَصْلٌ الطَّاهِرُ مَيِّتُ مَا لَا دَمَ لَهُ",
    regle_pratique: "Le cadavre d'un animal terrestre qui n'a pas de sang propre (scorpion, mouche, araignée, criquet, abeille, ver, scarabée…) est pur ; mais il n'est pas pour autant permis de le manger sans abattage rituel, et le sang qu'il contient reste impur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl ouvre le faṣl du pur et de l'impur. Al-Ḥaṭṭāb explique le lien : on vient de voir qu'une eau changée par une chose pure reste pure et qu'une eau changée par une chose impure devient impure ; il faut donc dire quelles choses sont pures et lesquelles sont impures. Khalīl commence par le pur, « parce que le principe, dans les choses, est la pureté » (« لِأَنَّ الْأَصْلَ فِي الْأَشْيَاءِ الطَّهَارَةُ »).\n\nPremier cas : le cadavre d'un animal terrestre sans sang, celui dont on dit qu'il n'a pas de « sang qui coule » (نَفْسٌ سَائِلَةٌ), même s'il contient de l'humidité. Exemples d'al-Ḥaṭṭāb : l'araignée, le grillon, le scorpion, la guêpe, les scarabées, les « banāt wardān », le criquet, l'abeille, le ver et le charançon. Ces petites bêtes s'appellent الخَشَاش (al-khachâch) : « les petites bêtes de la terre ».\n\nAl-Ḥaṭṭāb rapporte deux voies (طَرِيقَتَانِ) dans l'école. Pour Ibn Bashīr, ce cadavre est pur par accord. Pour l'autre voie, il y a deux avis, dont le mashhūr est la pureté. Ibn Nāfiʿ et Ashhab le disent impur ; Sanad rapporte de Saḥnūn qu'il est impur mais ne rend pas impur ce qu'il touche.\n\nAl-Dardīr précise « sans sang » : sans sang propre (« أَيْ ذَاتِيٍّ »). Khalīl a écrit « لَهُ » (« à lui ») et non « فِيهِ » (« en lui ») : un animal qui contient un sang venu d'ailleurs, comme la puce, a aussi un cadavre pur. Al-Dasūqī ajoute que le sang qui se trouve dans ces bêtes reste impur : s'il en tombe un peu dans une nourriture, il la rend impure.\n\nPur ne veut pas dire mangeable. Selon la doctrine correcte de l'école, le khachâch ne se mange qu'après abattage (« إذْ لَا يُؤْكَلُ الْخَشَاشُ عَلَى الصَّحِيحِ مِنْ الْمَذْهَبِ إلَّا بِذَكَاةٍ »). Al-Dasūqī donne le détail retenu, d'Ibn Yūnus, pour une bête tombée dans une nourriture. Vivante, on ne la mange avec la nourriture que si l'on a l'intention de l'abattre en la mangeant. Morte, si la nourriture se distingue d'elle, on mange la nourriture seule ; si elle s'y est mêlée, on mange le tout quand la bête est en moindre quantité que la nourriture, et non quand elle est égale ou plus abondante ; en cas de doute, on mange, car on ne jette pas une nourriture pour un doute.",
    aqwal: [
      { auteur: "Ibn Bashīr", avis: "Le cadavre de l'animal terrestre sans sang est pur par accord (« لَا يَنْجُسُ بِالْمَوْتِ بِلَا خِلَافٍ », cité d'al-ʿUtbiyya).", statut: "non_precise" },
      { auteur: "Doctrine de l'école (seconde voie)", avis: "Deux avis ; le mashhūr est la pureté.", statut: "mashhur" },
      { auteur: "Ibn Nāfiʿ et Ashhab", avis: "Ce cadavre est impur ; mais ils ont entendu qu'il n'y a pas de mal à manger ce où un khachâch est mort, en le signalant si on le vend.", statut: "qawl" },
      { auteur: "Saḥnūn (rapporté par Sanad, cité dans at-Tawḍīḥ)", avis: "Il est impur, mais ne rend pas impur ce qu'il touche.", statut: "qawl" },
      { auteur: "Al-Lakhmī (sens apparent de ses propos)", avis: "Il est impur et rend impur ce qu'il touche.", statut: "qawl" },
      { auteur: "Le qāḍī ʿAbd al-Wahhāb ; Abū l-Ḥasan", avis: "Le khachâch peut se manger sans abattage, par analogie avec la divergence sur le criquet.", statut: "qawl" },
      { auteur: "At-Tanbīhāt (auteur non nommé dans le passage)", avis: "Ce qui est correct : il ne rend impur rien de ce qu'il touche ; une nourriture où il s'est dissous ne se mange pas s'il y est mêlé et domine ; si la nourriture se distingue, on la mange sans lui.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le cadavre de l'animal terrestre sans sang propre est pur (« أَيْ ذَاتِيٍّ كَعَقْرَبٍ وَذُبَابٍ »), même s'il contient un sang venu d'ailleurs, comme la puce. Al-Dasūqī : ce sang reste impur ; la pureté du cadavre n'autorise pas à le manger sans abattage ; pour la bête tombée dans une nourriture, le détail d'Ibn Yūnus « est celui sur lequel on s'appuie » (« وَهُوَ الْمُعَوَّلُ عَلَيْهِ »).",
    tarjih_hattab: "Al-Ḥaṭṭāb souligne que la doctrine correcte exige l'abattage pour manger le khachâch (« فَانْظُرْ كَيْفَ صَرَّحَ بِأَنَّ الصَّحِيحَ فِي الْمَذْهَبِ … »), alors qu'Ibn Rushd n'attribuait cette exigence qu'à Ibn Ḥabīb.",
    tanbihat: [
      "Le gecko (الوَزَغ), les lézards et le ver de terre (شَحْمَةُ الأَرْضِ) ne font pas partie de ces bêtes sans sang (aṭ-Ṭirāz) ; dire que le gecko est un khachâch est une erreur, « car il a de la chair et du sang ». Al-Dasūqī ajoute le serpent et le pou.",
      "Ibn ʿArafa : le cadavre d'un animal terrestre à sang qui coule, autre que l'humain, comme le gecko, est impur ; pour l'humain, deux avis.",
      "Selon at-Tanbīhāt, Ashhab rend impur ce à quoi la bête se mêle par cuisson ou de façon semblable (« وَمَذْهَبُ أَشْهَبَ تَنْجِيسُ مَا خَالَطَهُ بِطَبْخٍ أَوْ شِبْهِهِ ») ; Saḥnūn l'a rejeté.",
      "Selon at-Tanbīhāt, si la bête ne s'est pas défaite dans l'eau ou la nourriture et n'y est pas restée longtemps, l'eau et la nourriture sont pures sans difficulté ; si elle s'y est défaite et a changé l'eau, celle-ci prend la règle de l'eau mêlée (مُضَاف)."
    ],
    divergences: [
      "Complément (sujet absent de ce passage d'al-Ḥaṭṭāb) — al-Dasūqī : ce qui naît de la nourriture elle-même, « comme le charançon des fruits et les vers du fromage », se mange avec elle (« وَأَمَّا الْمُتَخَلِّقُ مِنْهُ كَسُوسِ الْفَاكِهَةِ وَدُودِ الْمِشِّ وَالْجُبْنِ فَإِنَّهُ يَجُوزُ أَكْلُهُ مَعَ »…), d'après Ibn al-Ḥājib, approuvé par ses commentateurs, tant qu'il ne se distingue pas de la nourriture.",
      "Divergence de détail — bête sans sang mêlée à une nourriture. At-Tanbīhāt (ʿIyāḍ), cité par al-Ḥaṭṭāb : ne pas manger si la bête domine. Al-Dasūqī, d'après le détail d'Ibn Yūnus, « qui fait autorité » : on mange si la bête est moins abondante, non si elle est égale ou plus abondante ; en cas de doute, on mange, « car on ne jette pas une nourriture pour un doute » (« فَإِنْ شُكَّ فِي كَوْنِهِ أَقَلَّ مِنْ الطَّعَامِ أُكِلَ أَوْ لَا أُكِلَ مَعَ الطَّعَامِ؛ لِأَنَّ الطَّعَامَ لَا يُطْرَحُ بِالشَّكِّ … وَمَا ذَكَرْنَاهُ مِنْ التَّفْصِيلِ فَهُوَ لِابْنِ يُونُسَ وَهُوَ الْمُعَوَّلُ »)."
    ],
    exemple: "Une fourmi ou un petit scarabée meurt dans votre carafe d'eau : l'eau reste pure, vous pouvez faire vos ablutions avec. Si un criquet mort tombe dans une marmite de semoule et qu'on peut l'en retirer, on retire la bête et on mange la semoule.",
    erreurs_frequentes: [
      "Croire qu'un insecte mort rend l'eau impure : son cadavre est pur.",
      "Croire que, puisqu'il est pur, on peut manger l'insecte sans abattage : selon la doctrine correcte, il faut l'abattage.",
      "Ranger le gecko ou le lézard parmi ces bêtes sans sang : ils ont de la chair et du sang."
    ],
    termes: [
      { ar: "خَشَاش", translit: "khachâch", def: "Petites bêtes de la terre sans sang propre (insectes, vers…)." },
      { ar: "مَيْتَة", translit: "mayta", def: "Cadavre : animal mort sans abattage rituel valable." },
      { ar: "دَمٌ ذَاتِيٌّ", translit: "damoun dhâtiyyoun", def: "Sang propre à l'animal, par opposition au sang venu d'ailleurs (comme celui que la puce a sucé)." },
      { ar: "الوَزَغ", translit: "al-wazagh", def: "Le gecko ; animal qui a de la chair et du sang, non compté parmi les bêtes sans sang." }
    ],
    quiz: [
      { q: "Un scorpion meurt dans un seau d'eau. Que vaut l'eau ?",
        choix: ["Elle devient impure", "Elle est seulement déconseillée", "Elle reste pure", "Il faut la vider"],
        bonne: 2,
        explication: "Al-Dardīr : le cadavre de ce qui n'a pas de sang propre est pur (« كَعَقْرَبٍ وَذُبَابٍ »)." },
      { q: "Le cadavre d'une bête sans sang étant pur, peut-on la manger sans abattage ?",
        choix: ["Non, selon la doctrine correcte de l'école", "Oui, toujours", "Oui, si elle est petite", "Oui, si elle est morte dans l'eau"],
        bonne: 0,
        explication: "« إذْ لَا يُؤْكَلُ الْخَشَاشُ عَلَى الصَّحِيحِ مِنْ الْمَذْهَبِ إلَّا بِذَكَاةٍ »." },
      { q: "Le gecko (الوَزَغ) fait-il partie de ces bêtes sans sang ?",
        choix: ["Oui, comme le scorpion", "Oui, selon aṭ-Ṭirāz", "On ne sait pas", "Non : il a de la chair et du sang"],
        bonne: 3,
        explication: "Aṭ-Ṭirāz : « لِأَنَّهَا ذَاتُ لَحْمٍ وَدَمٍ »." },
      { q: "Mise en situation : un petit insecte mort s'est mêlé à une grande marmite de soupe, sans qu'on puisse l'en retirer ; il est en bien moindre quantité que la soupe. Selon le détail d'Ibn Yūnus rapporté par al-Dasūqī ?",
        choix: ["On jette toute la soupe", "On mange la soupe", "On attend un jour", "On ajoute de l'eau"],
        bonne: 1,
        explication: "« فَإِنْ كَانَ أَقَلَّ مِنْ الطَّعَامِ أُكِلَ هُوَ وَالطَّعَامُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "86-88" },
    alertes: [
      "L'auteur d'at-Tanbīhāt n'est pas nommé dans le passage (« وَاَلَّذِي يَتَحَصَّلُ مِنْ كَلَامِهِ فِي التَّنْبِيهَاتِ ») ; la fiche n'ajoute pas de nom. Non bloquant.",
      "Dans la citation d'at-Tanbīhāt, « وَأَنْكَرَهُ عَلَيْهِ سَحْنُونٌ قَالَ: وَالصَّوَابُ » : on ne sait pas si « قَالَ » a pour sujet Saḥnūn ou l'auteur d'at-Tanbīhāt ; la fiche rattache « ce qui est correct » à at-Tanbīhāt et note seulement que Saḥnūn a rejeté l'avis d'Ashhab. Non bloquant.",
      "« الْجُدَاجُدُ » est vocalisé ainsi dans la liste, puis « الْجَدَاجِدُ » dans l'explication du mot ; la fiche traduit « grillon » sans reprendre la vocalisation. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 48–49 (Shamela 21604, pages 47–48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-02",
    kitab: "tah", bab: "01", fasl: "02", ordre: 2,
    titre: "Le cadavre de l'animal marin",
    titre_ar: "مَيْتَةُ الحَيَوَانِ البَحْرِيِّ",
    objectif: "Savoir que le cadavre d'un animal marin est pur, quelle que soit la façon dont il est mort.",
    matn: "وَالْبَحْرِيِّ",
    regle_pratique: "Le cadavre d'un animal marin est pur, qu'il soit mort de lui-même, pêché, sorti vivant de l'eau, jeté au feu, enfoui dans la boue ou trouvé mort dans le ventre d'un poisson ou d'un oiseau (ce dernier est lavé), et quel que soit celui qui l'a pêché.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl ajoute : « et [le cadavre] de l'animal marin ». Al-Ḥaṭṭāb précise la lecture : le mot est au génitif, rattaché à ce qui précède (« بِالْجَرِّ عَطْفًا عَلَى مَحِلِّ مَا »), c'est-à-dire « et le cadavre de l'animal marin » (البَحْرِيّ, al-bahriyy).\n\nCe cadavre est pur dans tous les cas. Al-Ḥaṭṭāb énumère : mort de lui-même et trouvé flottant (طَافِي, tâfî), mort par la pêche, sorti vivant, jeté au feu, enfoui dans la boue, trouvé mort dans le ventre d'un poisson ou d'un oiseau. Celui trouvé dans un ventre est lavé. Peu importe aussi qui l'a pêché : un musulman, un homme des Écritures (كِتَابِيّ) ou un mazdéen (مَجُوسِيّ).\n\nAl-Dardīr limite ce segment à l'animal marin qui ne vit pas longtemps sur terre, comme le poisson ; le segment suivant traite de celui qui y vit longtemps. Al-Dasūqī : même s'il s'agit de l'animal appelé « porc » ou « homme » de la mer ; qu'il meure dans la mer ou sur terre ; et celui trouvé dans un ventre doit être lavé si l'on veut le manger.",
    aqwal: [],
    muatamad: "Confirmé par al-Dardīr (« وَ مَيْتُ الْبَحْرِيِّ ») ; al-Dasūqī reprend la même liste de cas qu'al-Ḥaṭṭāb et ajoute que l'animal marin appelé porc ou homme de mer est pareil.",
    tarjih_hattab: null,
    tanbihat: [
      "Le poisson trouvé mort dans le ventre d'un autre poisson ou d'un oiseau est pur, mais il est lavé (« لَكِنَّ هَذَا يُغْسَلُ »)."
    ],
    divergences: [
      "Complément — al-Dasūqī : le cadavre de l'animal marin est pur « même si c'est un porc ou un homme » de mer, et il n'est pas permis d'avoir un rapport avec lui, car il est « comme les bêtes » (« وَلَوْ كَانَ خِنْزِيرًا أَوْ آدَمِيًّا وَلَا يَجُوزُ وَطْؤُهُ؛ لِأَنَّهُ بِمَنْزِلَةِ الْبَهَائِ »…). Ce passage d'al-Ḥaṭṭāb n'en parle pas."
    ],
    exemple: "Au marché, vous achetez des poissons trouvés morts dans les filets, ou pêchés par un pêcheur non musulman : leur cadavre est pur. Si vous trouvez un petit poisson dans le ventre d'un gros, vous le lavez avant de le cuisiner.",
    erreurs_frequentes: [
      "Croire que le poisson trouvé mort et flottant est impur : il est pur.",
      "Croire que le poisson pêché par un non-musulman est impur : peu importe qui l'a pêché.",
      "Oublier de laver le poisson trouvé dans le ventre d'un autre animal."
    ],
    termes: [
      { ar: "بَحْرِيّ", translit: "bahriyy", def: "Aquatique." },
      { ar: "طَافِي", translit: "tâfî", def: "Qui flotte à la surface de l'eau (poisson mort de lui-même)." },
      { ar: "كِتَابِيّ", translit: "kitâbiyy", def: "Homme des Écritures : juif ou chrétien." },
      { ar: "مَجُوسِيّ", translit: "majoûsiyy", def: "Mazdéen, adorateur du feu." }
    ],
    quiz: [
      { q: "Un poisson est trouvé mort, flottant à la surface. Son cadavre est-il pur ?",
        choix: ["Non", "Oui", "Seulement s'il est cuit", "Seulement en mer"],
        bonne: 1,
        explication: "« وَسَوَاءٌ مَاتَ بِنَفْسِهِ وَوُجِدَ طَافِيًا »." },
      { q: "Un poisson pêché par un mazdéen (majoûsiyy) est-il pur ?",
        choix: ["Non", "Seulement s'il est lavé sept fois", "Seulement s'il est vendu", "Oui"],
        bonne: 3,
        explication: "« وَسَوَاءٌ صَادَهُ مُسْلِمٌ أَوْ كِتَابِيٌّ أَوْ مَجُوسِيٌّ »." },
      { q: "Que fait-on d'un poisson trouvé mort dans le ventre d'un oiseau ?",
        choix: ["On le lave", "On le jette", "On ne le touche pas", "On le sale"],
        bonne: 0,
        explication: "« أَوْ فِي بَطْنِ طَيْرٍ مَيِّتًا لَكِنَّ هَذَا يُغْسَلُ »." },
      { q: "Mise en situation : un poisson sorti vivant de l'eau meurt dans votre panier. Son cadavre est…",
        choix: ["impur", "déconseillé", "pur", "pur seulement s'il est abattu"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb cite le poisson « sorti vivant » parmi les cas où le cadavre est pur (« أَوْ أُخْرِجَ حَيًّا »)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "88" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-03",
    kitab: "tah", bab: "01", fasl: "02", ordre: 3,
    titre: "… même s'il vit longtemps sur terre",
    titre_ar: "البَحْرِيُّ وَلَوْ طَالَتْ حَيَاتُهُ بِالبَرِّ",
    objectif: "Savoir que l'animal aquatique qui vit aussi longtemps hors de l'eau (grenouille, tortue d'eau, crabe, crocodile) a un cadavre pur.",
    matn: "وَلَوْ طَالَتْ حَيَاتُهُ بِبَرٍّ",
    regle_pratique: "Le cadavre d'un animal aquatique est pur même s'il peut vivre longtemps sur terre, comme la grenouille d'eau, la tortue d'eau, le crabe ou le crocodile (avis mashhūr, celui de Mālik) ; mais la grenouille terrestre a un cadavre impur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl précise : même si sa vie se prolonge sur la terre ferme. Al-Ḥaṭṭāb distingue deux cas. L'animal aquatique qui ne vit que dans l'eau et ne peut pas survivre longtemps sur terre : aucune difficulté, son cadavre est pur. Celui qui vit longtemps sur terre : le mashhūr, avis de Mālik, est que son cadavre est pur aussi.\n\nAl-Ḥaṭṭāb donne comme exemples la grenouille (الضِّفْدَع, ad-difdaʿ), la tortue d'eau (السُّلَحْفَاة, as-soulahfât) et le crabe (السَّرَطَان, as-saratân). Al-Dardīr cite le crocodile, la grenouille et la tortue « marine ».\n\nLe mot « لَوْ » (« même si ») signale, selon les règles de lecture de Khalīl, un avis contraire dans l'école (voir le Module 0). Ici, Ibn Nāfiʿ et Ibn Dīnār disent ce cadavre impur, et Ibn ʿArafa rapporte un troisième avis : pur s'il meurt dans l'eau, impur s'il meurt sur terre.",
    aqwal: [
      { auteur: "Mālik", avis: "Le cadavre de l'animal aquatique qui vit longtemps sur terre est pur.", statut: "mashhur" },
      { auteur: "Ibn Nāfiʿ et Ibn Dīnār", avis: "Son cadavre est impur.", statut: "qawl" },
      { auteur: "ʿĪsā, d'après Ibn al-Qāsim (rapporté par Ibn ʿArafa)", avis: "Pur s'il meurt dans l'eau, impur s'il meurt sur terre.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : même s'il vit longtemps sur terre, « كَتِمْسَاحٍ وَضُفْدَعٍ وَسُلَحْفَاةٍ بَحْرِيَّةٍ ». Al-Dasūqī : « et qu'il meure sur terre » ; c'est l'avis de Mālik, et « لَوْ » écarte l'avis d'Ibn Nāfiʿ et la transmission de ʿĪsā d'après Ibn al-Qāsim.",
    tarjih_hattab: null,
    tanbihat: [
      "Ibn ʿArafa cite ʿAbd al-Ḥaqq : le cadavre des grenouilles terrestres est impur et ne se mange pas ; al-Ḥaṭṭāb note que, selon l'apparent, il n'y a pas de divergence sur ce point."
    ],
    divergences: [
      "Point à comparer — auteurs de l'avis de l'impureté pour l'animal marin qui vit longtemps sur terre. Al-Ḥaṭṭāb nomme Ibn Nāfiʿ et Ibn Dīnār (« وَقَالَ ابْنُ نَافِعٍ وَابْنُ دِينَارٍ مَيْتَتُهُ نَجِسَةٌ ») ; al-Dasūqī ne nomme qu'Ibn Nāfiʿ.",
      "Complément — al-Dasūqī : une grenouille dont on ignore si elle est aquatique ou terrestre ne se mange pas, car le doute porte alors sur ce qui est permis lui-même (« وَلَيْسَ هَذَا كَضُفْدَعَةٍ شَكَّ فِي كَوْنِهَا بَحْرِيَّةً أَوْ بَرِّيَّةً فَلَا تُؤْكَلُ؛ لِأَنَّ هَذَا شَكٌّ فِي إبَاحَةِ الطَّعَامِ »)."
    ],
    exemple: "Une grenouille d'eau meurt sur la berge, à côté de votre bassin : son cadavre est pur. Si c'était une grenouille terrestre, son cadavre serait impur.",
    erreurs_frequentes: [
      "Croire que la grenouille, la tortue d'eau ou le crabe, parce qu'ils vivent aussi sur terre, ont un cadavre impur : selon le mashhūr, il est pur.",
      "Appliquer la même règle à la grenouille terrestre : son cadavre est impur.",
      "Lire « وَلَوْ » comme un simple renforcement : il signale l'avis contraire d'Ibn Nāfiʿ."
    ],
    termes: [
      { ar: "الضِّفْدَع", translit: "ad-difdaʿ", def: "La grenouille." },
      { ar: "السُّلَحْفَاة", translit: "as-soulahfât", def: "La tortue ; ici, la tortue d'eau." },
      { ar: "السَّرَطَان", translit: "as-saratân", def: "Le crabe." },
      { ar: "تِمْسَاح", translit: "timsâh", def: "Crocodile." }
    ],
    quiz: [
      { q: "Selon le mashhūr, le cadavre d'une tortue d'eau morte sur terre est…",
        choix: ["impur", "déconseillé", "impur seulement si elle est morte sur terre", "pur"],
        bonne: 3,
        explication: "« فَالْمَشْهُورُ أَنَّ مَيْتَتَهُ طَاهِرَةٌ وَهُوَ قَوْلُ مَالِكٍ »." },
      { q: "Qui dit impur le cadavre de l'animal aquatique qui vit longtemps sur terre ?",
        choix: ["Mālik", "Ibn Nāfiʿ et Ibn Dīnār", "Al-Dardīr", "Ibn Bashīr"],
        bonne: 1,
        explication: "« وَقَالَ ابْنُ نَافِعٍ وَابْنُ دِينَارٍ مَيْتَتُهُ نَجِسَةٌ »." },
      { q: "Le cadavre d'une grenouille terrestre est…",
        choix: ["pur", "pur s'il est sec", "impur", "pur s'il est mort dans l'eau"],
        bonne: 2,
        explication: "ʿAbd al-Ḥaqq : « مَيْتَةُ الضَّفَادِعِ الْبَرِّيَّةِ نَجِسَةٌ لَا تُؤْكَلُ »." },
      { q: "Mise en situation : un crocodile meurt sur la berge d'un fleuve. Selon al-Dardīr, son cadavre est…",
        choix: ["pur", "impur", "impur s'il est mort sur terre", "déconseillé"],
        bonne: 0,
        explication: "Al-Dardīr : « بَلْ (وَلَوْ طَالَتْ حَيَاتُهُ بِبَرٍّ) كَتِمْسَاحٍ » ; al-Dasūqī : « أَيْ وَمَاتَ بِهِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "88" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 48–49 (Shamela 21604, pages 47–48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-04",
    kitab: "tah", bab: "01", fasl: "02", ordre: 4,
    titre: "L'animal abattu rituellement",
    titre_ar: "طَهَارَةُ المُذَكَّى",
    objectif: "Savoir que l'animal abattu selon l'un des modes d'abattage rituel est pur.",
    matn: "وَمَا ذُكِّيَ",
    regle_pratique: "Un animal abattu rituellement est pur, quel que soit le mode d'abattage prévu pour lui : égorgement (dhabḥ), saignée au haut de la poitrine (naḥr), ou blessure (ʿaqr) pour l'animal qui s'abat ainsi.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl : « et ce qui a été abattu rituellement ». Al-Ḥaṭṭāb : est pur ce qui a été abattu (ذَكَاة, dhakâ) par l'un de ses modes : l'égorgement (ذَبْح, dhabh), la saignée au haut de la poitrine (نَحْر, nahr), ou la blessure (عَقْر, ʿaqr), pour l'animal qui s'abat par blessure.\n\nAl-Dardīr : il s'agit d'un abattage conforme à la Loi (« ذَكَاةً شَرْعِيَّةً مِنْ ذَبْحٍ وَنَحْرٍ وَعَقْرٍ »).\n\nAl-Ḥaṭṭāb note aussi, à propos du segment suivant, que le petit (جَنِين, janîn) trouvé mort dans le ventre de sa mère abattue peut entrer dans « ce qui a été abattu », car la Loi a établi que l'abattage de la mère vaut abattage pour lui.",
    aqwal: [],
    muatamad: "Confirmé par al-Dardīr : est pur l'animal abattu « ذَكَاةً شَرْعِيَّةً مِنْ ذَبْحٍ وَنَحْرٍ وَعَقْرٍ ». La limite de cette règle (animal interdit à la consommation) vient au segment suivant (fiche 05).",
    tarjih_hattab: "Al-Ḥaṭṭāb envisage que le petit trouvé mort dans le ventre de sa mère entre ici (« وَيُمْكِنُ أَنْ يَدْخُلَ الْجَنِينُ فِي الْمُذَكَّى »), puisque l'abattage de la mère vaut abattage pour lui.",
    tanbihat: [],
    divergences: [],
    exemple: "Un mouton égorgé selon le rite, une chamelle saignée au haut de la poitrine, ou un gibier blessé à la chasse pour l'abattre : leur chair et leurs parties sont pures.",
    erreurs_frequentes: [
      "Croire que seul l'égorgement rend l'animal pur : la saignée (naḥr) et la blessure (ʿaqr), chacune pour l'animal concerné, sont aussi des modes d'abattage.",
      "Oublier que la règle a une limite : l'animal interdit à la consommation (fiche 05)."
    ],
    termes: [
      { ar: "ذَكَاة", translit: "dhakâ", def: "Abattage rituel, qui rend l'animal licite et pur." },
      { ar: "ذَبْح", translit: "dhabh", def: "Égorgement : mode d'abattage par la gorge." },
      { ar: "نَحْر", translit: "nahr", def: "Saignée au haut de la poitrine (pour le chameau notamment)." },
      { ar: "عَقْر", translit: "ʿaqr", def: "Blessure mortelle infligée à l'animal qui s'abat ainsi (gibier, animal qu'on ne peut pas maîtriser)." },
      { ar: "جَنِين", translit: "janîn", def: "Petit encore dans le ventre de sa mère." }
    ],
    quiz: [
      { q: "Quels sont les modes d'abattage cités par al-Ḥaṭṭāb ?",
        choix: ["Égorgement, saignée (naḥr) et blessure (ʿaqr)", "Égorgement seulement", "Noyade et égorgement", "Saignée seulement"],
        bonne: 0,
        explication: "« مِنْ ذَبْحٍ، أَوْ نَحْرٍ، أَوْ عَقْرٍ فِيمَا يُذَكَّى بِالْعَقْرِ »." },
      { q: "Un mouton égorgé selon le rite est…",
        choix: ["impur", "pur", "déconseillé", "pur seulement après lavage"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : « فَهُوَ طَاهِرٌ »." },
      { q: "Le petit trouvé mort dans le ventre de sa mère abattue peut entrer dans « ce qui a été abattu ». Pourquoi, selon al-Ḥaṭṭāb ?",
        choix: ["Parce qu'il est petit", "Parce qu'il n'a pas de sang", "Parce que l'abattage de sa mère vaut abattage pour lui", "Parce qu'il est aquatique"],
        bonne: 2,
        explication: "« لِأَنَّ الشَّارِعَ قَدْ حَكَمَ بِأَنَّ ذَكَاةَ أُمِّهِ ذَكَاةٌ لَهُ »." },
      { q: "Mise en situation : un chasseur abat une gazelle d'une flèche. Le texte range ce mode parmi…",
        choix: ["les modes interdits", "les cadavres", "les choses inertes", "les modes d'abattage, pour l'animal qui s'abat par blessure"],
        bonne: 3,
        explication: "« أَوْ عَقْرٍ فِيمَا يُذَكَّى بِالْعَقْرِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "88" },
    alertes: [
      "Corrigé (campagne de correction) : Mawāhib (t. 1, p. 88) vocalise le matn « وَمَا ذَكَّى » (voix active), mais son commentaire dit « أَنَّ مَا ذُكِّيَ » ; al-Dardīr (21604, p. 48) porte « (ذُكِّيَ) » et Minaḥ al-Jalīl (21614, p. 34) précise « ذُكِّيَ بِضَمٍّ فَكَسْرٍ مُشَدَّدًا ». Le matn est rendu « وَمَا ذُكِّيَ ». Le titre arabe de cette masʾala dans `data/plan.js` reste tel qu'imprimé.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-05",
    kitab: "tah", bab: "01", fasl: "02", ordre: 5,
    titre: "Ses parties, sauf s'il est interdit à la consommation",
    titre_ar: "طَهَارَةُ جُزْءِ المُذَكَّى إِلَّا مُحَرَّمَ الأَكْلِ",
    objectif: "Savoir que toutes les parties d'un animal abattu sont pures, sauf si cet animal est interdit à la consommation, et connaître le cas des fauves et du placenta.",
    matn: "وَجُزْؤُهُ إلَّا مُحَرَّمَ الْأَكْلِ",
    regle_pratique: "Toutes les parties d'un animal abattu rituellement (chair, os, ongles, dents, peau, placenta…) sont pures, sauf si cet animal est interdit à la consommation, comme le porc, le cheval, le mulet ou l'âne (al-Dardīr) : pour lui, l'abattage ne sert à rien et il reste un cadavre impur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: "Abattu, l'animal interdit à la consommation reste un cadavre impur (al-Dasūqī : « فَمَيْتَتُهَا نَجِسَةٌ، وَلَوْ وُجِدَتْ فِيهَا صُورَةُ الذَّكَاةِ »)."
    },
    explication: "Khalīl : « et sa partie, sauf [celle de l'animal] interdit à la consommation ». Al-Ḥaṭṭāb renvoie à at-Tawḍīḥ : les fauves (سِبَاع), abattus pour prendre leur peau, ont toutes leurs parties purifiées par l'abattage, même si l'on dit leur chair déconseillée. C'est la voie de la plupart des maîtres : l'abattage n'agit que sur l'animal dont la consommation est déconseillée (مَكْرُوهُ الأَكْلِ) ou permise. La voie d'Ibn Shās est qu'il agit aussi sur l'animal interdit ; mais dans le livre des abattages d'al-Jawāhir, Ibn Shās excepte le porc, qui reste un cadavre même abattu, « à cause de la gravité de son interdiction » (adh-Dhakhīra).\n\nAl-Dardīr énumère les parties : os, chair, ongles, dents, peau. L'animal interdit à la consommation, comme le cheval, le mulet, l'âne et le porc, ne profite pas de l'abattage. Pour l'animal dont la consommation est déconseillée, comme le fauve ou le chat : abattu pour sa chair, sa peau est pure avec elle ; abattu pour prendre sa peau, la peau est pure, mais la chair ne se mange pas, car c'est un cadavre, selon l'avis que l'abattage peut ne valoir que pour une partie (تَبْعِيضُ الذَّكَاةِ). Al-Dardīr juge cet avis le plus fort (« وَهُوَ الرَّاجِحُ »).\n\nLe placenta (مَشِيمَة, machîma, appelé aussi سَلَى, salâ) est une partie de l'animal. Ibn Rushd le juge pur, comme la chair de la chamelle abattue ; al-Burzulī dit que c'est l'apparent de la Mudawwana, et que c'est juste. Al-Ḥaṭṭāb inclut aussi les intestins qui contiennent le contenu de l'estomac (فَرْث), avec une restriction pour l'animal dont les excréments sont impurs (voir les remarques et les alertes).",
    aqwal: [
      { auteur: "La plupart des maîtres (at-Tawḍīḥ)", avis: "L'abattage n'agit que sur l'animal dont la consommation est déconseillée ou permise ; les fauves abattus pour leur peau ont toutes leurs parties pures.", statut: "non_precise" },
      { auteur: "Ibn Shās", avis: "L'abattage agit aussi sur l'animal interdit à la consommation ; mais dans le livre des abattages d'al-Jawāhir, il excepte le porc.", statut: "qawl" },
      { auteur: "Ibn Rushd (samāʿ de Mūsā, livre de la prière) ; Ibn al-Imām", avis: "Le placenta est pur, comme la chair de la chamelle abattue.", statut: "non_precise" },
      { auteur: "Al-Burzulī", avis: "Le placenta se mange : c'est l'apparent de la Mudawwana, et c'est juste (« وَهُوَ الصَّوَابُ »).", statut: "non_precise" },
      { auteur: "Aṣ-Ṣāʾigh (rapporté par Ibn ʿArafa et al-Burzulī)", avis: "Le placenta ne se mange pas, car il est séparé de la brebis ; cela implique qu'il est impur.", statut: "qawl" },
      { auteur: "Un maître d'Ibn ʿArafa ; Ibn Jamāʿa", avis: "Le placenta suit le petit : si le petit se mange, il se mange ; sinon, non. Ibn ʿArafa penchait pour cet avis (al-Burzulī).", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : les parties de l'animal abattu sont pures, sauf celles de l'animal interdit à la consommation (« كَالْخَيْلِ وَالْبِغَالِ وَالْحَمِيرِ وَالْخِنْزِيرِ فَإِنَّ الذَّكَاةَ لَا تَنْفَعُ فِيهَا ») ; l'animal déconseillé (fauve, chat) abattu pour sa peau a une peau pure, mais sa chair ne se mange pas (avis jugé le plus fort). Al-Dasūqī : le placenta est pur et se mange (Ibn Rushd, approuvé par al-Burzulī), contre ʿAbd al-Ḥamīd aṣ-Ṣāʾigh.",
    tarjih_hattab: null,
    tanbihat: [
      "Le petit trouvé mort dans le ventre de sa mère est compris dans « sa partie », à condition qu'on le juge licite ; sinon c'est un cadavre (Ibn al-Imām).",
      "Certains réservent le mot « مَشِيمَة » aux humains (« وَخَصَّ بَعْضُهُمْ الْمَشِيمَةَ بِالْآدَمِيِّينَ »).",
      "Les intestins qui contiennent le contenu de l'estomac font partie de l'animal ; mais, pour l'animal dont les excréments sont impurs, ce qui touche ses excréments ne se mange qu'après lavage (Ibn Yūnus) ; al-Ḥaṭṭāb applique la même règle à l'animal dont la consommation est déconseillée, « à cause de l'impureté de ses excréments selon le mashhūr » (« لِنَجَاسَةِ رَوْثِهِ عَلَى الْمَشْهُورِ »).",
      "Ibn Rushd répondait à ceux qui tiraient du hadith du placenta jeté sur le dos du Prophète ﷺ qu'une impureté tombée sur celui qui prie n'annule pas sa prière : le placenta étant pur, l'argument tombe."
    ],
    divergences: [
      "Divergence — fauve abattu pour sa peau. At-Tawḍīḥ (Khalīl), cité par al-Ḥaṭṭāb : « toutes ses parties deviennent pures par l'abattage » (« فَإِنَّ جَمِيعَ أَجْزَائِهَا تَطْهُرُ بِالذَّكَاةِ »), et c'est « la voie de la plupart des maîtres ». Al-Dardīr : seule la peau est pure ; la chair, cadavre, ne se mange pas, « selon l'abattage partiel » (« فَقَدْ طَهُرَ وَلَا يُؤْكَلُ لَحْمُهُ لِأَنَّهُ مَيْتَةٌ بِنَاءً عَلَى تَبْعِيضِ الذَّكَاةِ »), qu'il juge l'avis le plus fort ; selon l'avis contraire, ajoute-t-il, la chair se mange.",
      "Complément — al-Dardīr range le cheval, le mulet et l'âne parmi les animaux interdits à la consommation, pour lesquels l'abattage ne sert à rien (« كَالْخَيْلِ وَالْبِغَالِ وَالْحَمِيرِ وَالْخِنْزِيرِ فَإِنَّ الذَّكَاةَ لَا تَنْ »…) ; ce passage d'al-Ḥaṭṭāb ne donne que l'exemple du porc."
    ],
    exemple: "Vous abattez un mouton : sa chair, ses os, sa peau et même le placenta d'une brebis qui vient d'agneler sont purs. En revanche, un âne ou un cheval abattu reste un cadavre impur (al-Dardīr), et sa peau n'est pas purifiée par l'abattage.",
    erreurs_frequentes: [
      "Croire que l'abattage purifie n'importe quel animal : il ne sert à rien pour l'animal interdit à la consommation.",
      "Croire que le placenta d'un animal abattu est impur : Ibn Rushd et al-Burzulī le disent pur et mangeable.",
      "Manger la chair d'un fauve abattu pour sa peau : selon al-Dardīr, c'est un cadavre."
    ],
    termes: [
      { ar: "مُحَرَّمُ الأَكْلِ", translit: "mouharramou l-akl", def: "Animal interdit à la consommation." },
      { ar: "مَكْرُوهُ الأَكْلِ", translit: "makroûhou l-akl", def: "Animal dont la consommation est déconseillée (comme les fauves)." },
      { ar: "تَبْعِيضُ الذَّكَاةِ", translit: "tabʿîdou dh-dhakâ", def: "Fait que l'abattage vaille pour une partie de l'animal (la peau) et non pour une autre (la chair)." },
      { ar: "مَشِيمَة", translit: "machîma", def: "Placenta : enveloppe du petit à la naissance ; appelée aussi salâ." },
      { ar: "سَلَى", translit: "salâ", def: "Autre nom du placenta (mashîma)." },
      { ar: "فَرْث", translit: "farth", def: "Contenu de l'estomac et des intestins de l'animal." }
    ],
    quiz: [
      { q: "Un âne est abattu selon le rite. Selon al-Dardīr, sa peau est…",
        choix: ["pure", "pure après tannage", "impure : l'abattage ne sert à rien pour lui", "déconseillée"],
        bonne: 2,
        explication: "Al-Dardīr : « كَالْخَيْلِ وَالْبِغَالِ وَالْحَمِيرِ وَالْخِنْزِيرِ فَإِنَّ الذَّكَاةَ لَا تَنْفَعُ فِيهَا »." },
      { q: "Selon Ibn Rushd, le placenta d'une chamelle abattue est…",
        choix: ["impur", "déconseillé", "interdit", "pur, comme sa chair"],
        bonne: 3,
        explication: "« فَقَدْ حَكَمَ ابْنُ رُشْدٍ بِطَهَارَتِهَا وَأَنَّهَا كَلَحْمِ النَّاقَةِ الْمُذَكَّاةِ »." },
      { q: "Selon al-Dardīr, un fauve abattu pour prendre sa peau : que vaut sa chair ?",
        choix: ["C'est un cadavre : elle ne se mange pas", "Elle se mange", "Elle est pure et se mange", "Elle se mange après lavage"],
        bonne: 0,
        explication: "« وَلَا يُؤْكَلُ لَحْمُهُ لِأَنَّهُ مَيْتَةٌ بِنَاءً عَلَى تَبْعِيضِ الذَّكَاةِ وَهُوَ الرَّاجِحُ »." },
      { q: "Mise en situation : vous abattez une brebis qui portait un petit, trouvé mort dans son ventre. Selon al-Ḥaṭṭāb, le petit est pur…",
        choix: ["jamais", "s'il est jugé licite", "seulement s'il est lavé", "seulement s'il est égorgé à son tour"],
        bonne: 1,
        explication: "« وَيُقَيَّدُ بِمَا إذَا كَانَ مَحْكُومًا بِحِلِّهِ وَإِلَّا فَهُوَ مَيْتَةٌ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "88-89" },
    alertes: [
      "Mawāhib (t. 1, p. 88–89) imprime « إلَّا أَنْ يَكُونَ الْحَيَوَانُ مِمَّا لَا يَأْكُلُ النَّجَاسَةَ فَلَا يُؤْكَلُ مَا اتَّصَلَ بِرَوْثِهِ حَتَّى يُغْسَلَ » ; la suite (« لِنَجَاسَةِ رَوْثِهِ ») et la logique demandent plutôt la lecture مِمَّا يَأْكُلُ النَّجَاسَةَ (sans négation). Aucun second témoin consulté ne porte la phrase ; al-Zurqānī (14297, p. 41) parle seulement de l'animal « dont les excréments sont purs ». La fiche s'en tient à la règle sûre (ce qui touche des excréments impurs se lave). Non bloquant.",
      "« تَعْمَلُ فِي مُحَرَّمِ الْأَكْلِ » (Ibn Shās) : la fiche rapporte l'avis tel quel ; al-Ḥaṭṭāb note qu'at-Tawḍīḥ le donne sans restriction (« كَذَا أَطْلَقَ عَنْهُ »). Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-06",
    kitab: "tah", bab: "01", fasl: "02", ordre: 6,
    titre: "Laine, poils, duvet et crins, même du porc",
    titre_ar: "الصُّوفُ وَالوَبَرُ وَزَغَبُ الرِّيشِ وَالشَّعْرُ",
    objectif: "Savoir que la laine, le poil, le duvet des plumes et les crins sont purs, de quelque animal qu'ils viennent.",
    matn: "وَصُوفٌ وَوَبَرٌ وَزَغَبُ رِيشٍ وَشَعْرٌ وَلَوْ مِنْ خِنْزِيرٍ",
    regle_pratique: "La laine, le poil fin (du chameau, du lièvre…), le duvet qui entoure le tuyau des plumes et les poils ou crins de tout animal sont purs, même s'ils viennent d'un porc ou d'un animal mort, à condition d'avoir été coupés (fiche 07).",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl range parmi les choses pures quatre matières, « même si elles viennent d'un porc ».\n\nAl-Ḥaṭṭāb donne leurs définitions d'après Ibn Farḥūn. Le شَعْر (chaʿr, ou chaʿar) désigne les poils de l'humain et des autres animaux, bêtes de somme et fauves : c'est le mot le plus général. Le صُوف (soûf), la laine, est celui du mouton : il est plus restreint. Le وَبَر (wabar) est le poil du chameau, du lièvre et des animaux semblables. Le زَغَب (zaghab) est le duvet qui entoure le tuyau de la plume (« مَا اكْتَنَفَ الْقَصَبَةَ »).\n\nAl-Dardīr reprend : laine de mouton, poil de chameau et de lièvre, duvet autour du tuyau, « qui ressemble à des poils », et poils de toutes les bêtes, « même du porc ». La raison, qu'il donne au segment suivant : ce sont des choses où la vie ne réside pas, et « ce où la vie ne réside pas ne devient pas impur par la mort ».",
    aqwal: [],
    muatamad: "Confirmé par al-Dardīr : sont purs la laine, le poil fin, le duvet des plumes et les poils de toutes les bêtes, « وَلَوْ مِنْ خِنْزِيرٍ », à condition qu'ils aient été coupés (fiche 07).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb signale qu'al-Qāmūs définit autrement le شَعْر : « ce qui n'est ni laine ni wabar »."
    ],
    divergences: [
      "Complément — al-Dasūqī rapporte de « شب » (Ibrāhīm ash-Shabrakhītī) que Mālik jugeait déconseillé de vendre les cheveux rasés des têtes des gens (« فِي شب عَنْ مَالِكٍ كَرَاهَةُ بَيْعِ الشَّعْرِ الَّذِي يُحْلَقُ مِنْ رُءُوسِ النَّاسِ ») ; al-Ḥaṭṭāb n'en parle pas ici."
    ],
    exemple: "Un tapis tissé avec du poil de chameau, un manteau de laine, un oreiller de duvet, une brosse en soies de porc : ces matières sont pures, si les poils ont été coupés et non arrachés.",
    erreurs_frequentes: [
      "Croire que les poils de porc sont impurs : Khalīl les dit purs, s'ils ont été coupés.",
      "Confondre le duvet (زَغَب), qui est pur, avec le tuyau de la plume, dont la règle vient plus loin (tah-01-02-33)."
    ],
    termes: [
      { ar: "صُوف", translit: "soûf", def: "Laine (du mouton)." },
      { ar: "وَبَر", translit: "wabar", def: "Poil fin du chameau, du lièvre et des animaux semblables." },
      { ar: "زَغَب", translit: "zaghab", def: "Duvet qui entoure le tuyau de la plume." },
      { ar: "شَعْر", translit: "chaʿr", def: "Poil, crin, cheveu : le mot le plus général, pour l'humain comme pour les animaux." },
      { ar: "قَصَبَةُ الرِّيشِ", translit: "qasabatou r-rîch", def: "Tuyau de la plume." }
    ],
    quiz: [
      { q: "Selon Ibn Farḥūn, lequel de ces mots est le plus général ?",
        choix: ["صُوف (laine)", "شَعْر (poil)", "وَبَر (poil de chameau)", "زَغَب (duvet)"],
        bonne: 1,
        explication: "« الشَّعَرُ … يُطْلَقُ عَلَى شَعْرِ الْإِنْسَانِ وَغَيْرِهِ مِنْ الدَّوَابِّ وَالسِّبَاعِ فَهُوَ عَامٌّ »." },
      { q: "Les poils d'un porc, coupés, sont…",
        choix: ["purs", "impurs", "déconseillés", "purs seulement après tannage"],
        bonne: 0,
        explication: "Matn : « وَشَعْرٌ وَلَوْ مِنْ خِنْزِيرٍ »." },
      { q: "Qu'est-ce que le zaghab ?",
        choix: ["La laine du mouton", "Le poil du chameau", "Le duvet qui entoure le tuyau de la plume", "La corne"],
        bonne: 2,
        explication: "« وَالزَّغَبُ مَا اكْتَنَفَ الْقَصَبَةَ »." },
      { q: "Mise en situation : un artisan vous propose une brosse faite de soies de porc coupées. Selon le matn, ces soies sont…",
        choix: ["impures", "déconseillées", "impures, sauf lavées", "pures"],
        bonne: 3,
        explication: "Al-Dardīr : « (وَشَعْرٌ) … مِنْ جَمِيعِ الدَّوَابِّ (وَلَوْ مِنْ خِنْزِيرٍ) »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "89" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-07",
    kitab: "tah", bab: "01", fasl: "02", ordre: 7,
    titre: "… s'ils sont coupés",
    titre_ar: "شَرْطُ الجَزِّ",
    objectif: "Savoir à quelle condition les poils et la laine d'un animal mort sont purs, et ce qu'on fait de ceux qu'on a arrachés.",
    matn: "إنْ جُزَّتْ",
    regle_pratique: "La laine, les poils et le duvet pris d'un animal non abattu ne sont purs que s'ils ont été coupés (tondus, rasés, ôtés à la chaux), même après la mort ; arrachés, leur racine qui porte des parties de peau est impure, et le reste est pur ; il est recommandé de les laver si l'on doute qu'une impureté les ait atteints.",
    qualification: {
      hukm: "mubah",
      nature: "shart",
      effet_si_omis: "Arrachés, les poils ont une racine impure : al-Dardīr, « فَالْأَصْلُ الَّذِي فِيهِ أَجْزَاءُ الْجِلْدِ نَجِسٌ وَالْبَاقِي طَاهِرٌ »."
    },
    explication: "Khalīl pose une condition : « s'ils ont été coupés » (جَزّ, jazz). Al-Ḥaṭṭāb : cette condition ne vaut que pour ce qu'on prend d'un animal non abattu (« هَذَا الشَّرْطُ إنَّمَا هُوَ إذَا أُخِذَتْ مِنْ غَيْرِ الْمُذَكَّى »). Al-Bisāṭī : il n'est pas exigé qu'ils soient coupés ; s'ils ont été arrachés (نَتْف, natf) et qu'on coupe ensuite la partie qui touchait la chair, ils sont purs.\n\nAl-Dardīr : la coupe vaut même après la mort, « car ce sont des choses où la vie ne réside pas, et ce où la vie ne réside pas ne devient pas impur par la mort ». « Couper » s'oppose à « arracher » : cela comprend le rasage et l'épilation à la chaux (نُورَة, noûra). Les poils arrachés ne sont pas purs, c'est-à-dire leur racine ; si on les coupe ensuite, la racine qui porte des parties de peau est impure, et le reste pur.\n\nLaver ? Selon la Mudawwana et la Risāla, il est recommandé de laver ce qu'on a coupé d'un animal mort. Ibn Rushd (samāʿ d'Ashhab) : cela n'a pas de sens si l'on sait qu'aucune souillure ne l'a atteint ; Ibn Ḥabīb rend le lavage obligatoire ; et si l'impureté est certaine, le lavage est obligatoire sans aucun doute. Al-Dasūqī : il est recommandé de les laver quand on doute de leur pureté, « selon l'avis retenu » (« عَلَى الْمُعْتَمَدِ »).",
    aqwal: [
      { auteur: "Al-Bisāṭī", avis: "La coupe n'est pas exigée : arrachés, puis coupés à l'endroit qui touchait la chair, les poils sont purs.", statut: "non_precise" },
      { auteur: "Mudawwana et Risāla", avis: "Il est recommandé de laver ce qu'on a coupé d'un animal mort.", statut: "non_precise" },
      { auteur: "Ibn Rushd (samāʿ d'Ashhab)", avis: "Ce lavage n'a pas de sens si l'on sait qu'aucune souillure ne les a atteints.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb", avis: "Le lavage est obligatoire.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : purs s'ils ont été coupés, « وَلَوْ بَعْدَ الْمَوْتِ » ; arrachés, la racine qui porte des parties de peau est impure et le reste pur. Al-Dasūqī : il est recommandé de les laver, s'ils ont été coupés d'un cadavre, quand on doute de leur pureté, « عَلَى الْمُعْتَمَدِ ».",
    tarjih_hattab: "Poils encore attachés au cadavre : al-Ḥaṭṭāb juge apparent que seule la partie attachée est impure (d'après aṭ-Ṭirāz) ; la prière est valide si les poils sont étalés par terre, mais non si on les a attachés sur soi ou qu'on les tient à la main, comme le dit Sanad de celui qui a attaché une corde à un cadavre.",
    tanbihat: [
      "Al-Ḥaṭṭāb pose la question (« اُنْظُرْ ») : les poils encore attachés au cadavre sont-ils purs ou impurs, par exemple si quelqu'un prie sur les longs poils d'un animal mort ? Il répond comme indiqué dans sa préférence.",
      "Vendre la laine prise d'un cadavre, ou ce qu'on a tissé avec, oblige à le dire à l'acheteur, « car les âmes la répugnent » ; al-Burzulī cite Abū Ḥafṣ : elle est plus faible que celle de l'animal vivant, et il y a divergence sur son impureté."
    ],
    divergences: [
      "Point à comparer — al-Ḥaṭṭāb limite la condition à ce qu'on prend d'un animal non abattu ; al-Dardīr ne le précise pas dans ce passage.",
      "Divergence — lavage des poils pris sur un cadavre. Al-Ḥaṭṭāb rapporte trois positions : recommandé selon la Mudawwana et la Risāla ; « sans objet si l'on sait qu'ils n'ont rien reçu », selon Ibn Rushd ; obligatoire, selon Ibn Ḥabīb (« قَالَ ابْنُ رُشْدٍ فِي سَمَاعِ أَشْهَبَ وَلَا مَعْنَى لَهُ إذَا عَلِمَ أَنَّهُ لَمْ يُصِبْهُ أَذًى وَأَوْجَبَ ابْنُ حَبِيبٍ غَسْلَهَا »). Al-Dasūqī retient le lavage recommandé en cas de doute (« غَايَتُهُ أَنَّهُ يُسْتَحَبُّ غَسْلُهَا إذَا جُزَّتْ مِنْ مَيْتَةٍ عِنْدَ الشَّكِّ فِي طَهَارَتِهَا وَنَجَاسَتِهَا »)."
    ],
    exemple: "Vous récupérez la laine d'un mouton mort sans abattage. Si vous la tondez, elle est pure ; il est recommandé de la laver si vous doutez qu'elle soit propre. Si quelqu'un a arraché les touffes, coupez la base qui porte des morceaux de peau : le reste est pur. Si vous la vendez, dites qu'elle vient d'une bête morte.",
    erreurs_frequentes: [
      "Croire que les poils d'un animal mort sont impurs même coupés : coupés, ils sont purs.",
      "Utiliser des poils arrachés sans en couper la racine : elle porte des parties de peau, impures.",
      "Vendre de la laine prise d'un cadavre sans le dire à l'acheteur."
    ],
    termes: [
      { ar: "جَزّ", translit: "jazz", def: "Coupe, tonte : ôter les poils ou la laine sans les arracher." },
      { ar: "نَتْف", translit: "natf", def: "Arrachage des poils avec leur racine." },
      { ar: "نُورَة", translit: "noûra", def: "Chaux employée pour épiler." },
      { ar: "مُذَكَّى", translit: "moudhakkâ", def: "Animal abattu rituellement." }
    ],
    quiz: [
      { q: "La laine d'un mouton mort sans abattage, tondue après sa mort, est…",
        choix: ["impure", "impure, sauf tannée", "déconseillée", "pure"],
        bonne: 3,
        explication: "Al-Dardīr : « (إنْ جُزَّتْ) وَلَوْ بَعْدَ الْمَوْتِ »." },
      { q: "Pourquoi les poils coupés d'un cadavre sont-ils purs, selon al-Dardīr ?",
        choix: ["Parce qu'ils sont secs", "Parce qu'on les lave", "Parce que la vie ne réside pas en eux", "Parce qu'ils sont légers"],
        bonne: 2,
        explication: "« لِأَنَّهَا مِمَّا لَا تَحُلُّهُ الْحَيَاةُ وَمَا لَا تَحُلُّهُ الْحَيَاةُ لَا يَنْجُسُ بِالْمَوْتِ »." },
      { q: "Des poils ont été arrachés d'un cadavre, puis coupés. Qu'est-ce qui est impur ?",
        choix: ["La racine qui porte des parties de peau", "Tout", "Rien", "Seulement la pointe"],
        bonne: 0,
        explication: "« فَالْأَصْلُ الَّذِي فِيهِ أَجْزَاءُ الْجِلْدِ نَجِسٌ وَالْبَاقِي طَاهِرٌ »." },
      { q: "Mise en situation : vous vendez un tapis tissé avec la laine d'un mouton mort. Que dit le texte ?",
        choix: ["Rien à signaler", "Il faut le dire à l'acheteur", "La vente est interdite", "Il faut le laver sept fois"],
        bonne: 1,
        explication: "« فَعَلَيْهِ أَنْ يُبَيِّنَ ذَلِكَ؛ لِأَنَّ النُّفُوسَ تَكْرَهُهُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "89" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-08",
    kitab: "tah", bab: "01", fasl: "02", ordre: 8,
    titre: "Les choses inertes",
    titre_ar: "الجَمَادُ",
    objectif: "Savoir ce qu'est une chose inerte (jamād) et qu'elle est pure, liquide ou solide.",
    matn: "وَالْجَمَادُ وَهُوَ جِسْمٌ غَيْرُ حَيٍّ وَمُنْفَصِلٍ عَنْهُ",
    regle_pratique: "Les choses inertes sont pures : tout corps qui n'est pas vivant (où la vie n'a jamais résidé) et qui ne vient pas d'un être vivant, qu'il soit liquide (eau, huile) ou solide (terre, pierre, herbe) ; l'exception de ce qui enivre vient au segment suivant.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl définit la chose inerte (جَمَاد, jamâd) : « un corps qui n'est pas vivant et qui n'est pas séparé d'un être vivant ». Al-Ḥaṭṭāb lit « وَمُنْفَصِلٍ » au génitif, rattaché à « حَيٍّ » : « et non séparé d'un vivant » (« أَيْ وَغَيْرُ مُنْفَصِلٍ عَنْ حَيٍّ »).\n\nAl-Ḥaṭṭāb explique les mots de la définition. « Corps » (جِسْم) est le genre, qui comprend l'animal et l'inerte ; « non vivant » écarte l'animal ; « non séparé d'un vivant » écarte tout ce qui sort d'un être vivant, pur ou impur. Écarter ces choses de la définition ne veut pas dire qu'elles sont impures ; sinon, il faudrait dire impur l'être vivant lui-même, qui est aussi écarté.\n\nSelon al-Ḥaṭṭāb, la formule de Khalīl est meilleure que celles d'Ibn Bashīr et d'Ibn Shās, dont il est parti : ils employaient un mot trop général, qui convient aussi à l'accident et à la substance ; Khalīl l'a remplacé par « corps ». Il juge aussi le singulier « الجَمَاد » meilleur que le pluriel d'Ibn al-Ḥājib, car c'est un nom de genre qui vaut pour le peu et le beaucoup.\n\nLes liquides entrent dans la définition. « Inerte » ne s'oppose pas à « liquide » (مَائِع) : c'est « solide » (جَامِد) qui s'oppose à « liquide ». Al-Dardīr : la définition comprend le liquide, comme l'eau et l'huile, et le solide, comme la terre, la pierre et l'herbe. Il précise « non vivant » par « où la vie n'a pas résidé » ; al-Dasūqī en conclut que l'humain mort et le ver né de la pourriture ou de la terre ne sont pas des choses inertes, car la vie a résidé en eux.",
    aqwal: [
      { auteur: "Ibn Rāshid (cité d'après adh-Dhakhīra, voir les alertes)", avis: "La chose inerte est ce qui n'a pas d'âme ; cela comprend les plantes.", statut: "non_precise" },
      { auteur: "Adh-Dhakhīra", avis: "Le monde est animal, plante et inerte : l'inerte s'oppose à l'animal et à la plante.", statut: "non_precise" },
      { auteur: "Ibn Bashīr", avis: "Ce où la vie ne réside pas, ou qui se sépare d'un être doté de vie.", statut: "non_precise" },
      { auteur: "Ibn Shās", avis: "Ce qui n'est pas une âme et n'est pas séparé d'une âme.", statut: "non_precise" },
      { auteur: "Ibn al-Ḥājib ; Ibn Daqīq al-ʿĪd", avis: "Ibn al-Ḥājib : « les choses inertes qui ne viennent pas d'un animal sont pures » ; Ibn Daqīq al-ʿĪd juge cette formule meilleure, car elle n'a pas besoin de précision.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : la chose inerte est pure ; c'est un corps où la vie n'a pas résidé et qui n'est pas séparé d'un vivant ; elle comprend le liquide (eau, huile) et le solide (terre, pierre, herbe). Al-Dasūqī : l'humain mort et ce qui naît de la pourriture n'en font pas partie.",
    tarjih_hattab: "Al-Ḥaṭṭāb juge la formule de Khalīl meilleure que celles d'Ibn Bashīr et d'Ibn Shās (« لَكِنَّ عِبَارَةَ الْمُصَنِّفِ أَحْسَنُ »), et son singulier meilleur que le pluriel d'Ibn al-Ḥājib.",
    tanbihat: [
      "Sortir de la définition de l'inerte ne rend pas impur : « sinon, il faudrait que le vivant soit impur » (voir l'alerte sur la lecture).",
      "Ibn al-Ḥājib semble inclure les parties séparées de l'animal parmi les choses inertes, puisqu'il précise « qui ne viennent pas d'un animal »."
    ],
    divergences: [
      "Divergence — beurre et miel. Al-Ḥaṭṭāb compte parmi les choses inertes « tous les liquides, comme le beurre clarifié (سَمْن), le miel et l'huile » ; al-Dardīr dit au contraire que l'œuf, le beurre et le miel d'abeille ne sont pas des choses inertes, car ils sont séparés d'un vivant. Al-Kharashī et al-Zurqānī citent al-Ḥaṭṭāb (« ح ») sur le beurre et jugent son propos discutable (« وَفِيهِ نَظَرٌ »), sauf à entendre « séparé sans intermédiaire », le beurre venant du lait. Cela ne change pas leur pureté, traitée ailleurs (le lait et l'œuf aux segments suivants)."
    ],
    exemple: "L'eau, l'huile d'olive, la terre, les pierres, le bois et l'herbe sont des choses inertes : elles sont pures. Un ver de terre mort, lui, n'en est pas une, car il a vécu.",
    erreurs_frequentes: [
      "Croire que « inerte » veut dire « solide » : les liquides comme l'eau et l'huile sont aussi des choses inertes.",
      "Conclure qu'une chose est impure parce qu'elle n'entre pas dans la définition de l'inerte : l'être vivant n'y entre pas non plus, et il est pur.",
      "Compter l'humain mort ou le ver parmi les choses inertes : la vie a résidé en eux."
    ],
    termes: [
      { ar: "جَمَاد", translit: "jamâd", def: "Chose inerte : corps où la vie n'a pas résidé et qui ne vient pas d'un être vivant." },
      { ar: "جِسْم", translit: "jism", def: "Corps : ce qui occupe un espace (genre de la définition)." },
      { ar: "مَائِع", translit: "mâ'iʿ", def: "Liquide." },
      { ar: "جَامِد", translit: "jâmid", def: "Solide." },
      { ar: "سَمْن", translit: "samn", def: "Beurre clarifié." }
    ],
    quiz: [
      { q: "L'huile d'olive est-elle une chose inerte (jamâd) ?",
        choix: ["Oui : les liquides entrent dans la définition", "Non : seul le solide est inerte", "Non : elle vient d'un vivant", "On ne sait pas"],
        bonne: 0,
        explication: "Al-Dardīr : « وَدَخَلَ فِي التَّعْرِيفِ الْمَائِعُ كَالْمَاءِ وَالزَّيْتِ »." },
      { q: "Quel mot s'oppose à « liquide » (mâ'iʿ) ?",
        choix: ["Jamâd (inerte)", "Jâmid (solide)", "Hayy (vivant)", "Jism (corps)"],
        bonne: 1,
        explication: "« لِأَنَّا نَقُولُ الَّذِي يُقَابِلُ الْمَائِعَ الْجَامِدُ لَا الْجَمَادُ »." },
      { q: "Selon al-Dardīr, l'œuf et le miel d'abeille sont-ils des choses inertes ?",
        choix: ["Oui", "Seulement le miel", "Seulement l'œuf", "Non : ils sont séparés d'un vivant"],
        bonne: 3,
        explication: "« فَالْبَيْضُ وَالسَّمْنُ وَعَسَلُ النَّحْلِ لَيْسَتْ مِنْ الْجَمَادِ لِانْفِصَالِهَا عَنْهُ »." },
      { q: "Mise en situation : un élève dit « l'urine sort d'un vivant, donc ce n'est pas une chose inerte, donc elle est impure ». Que répond al-Ḥaṭṭāb à ce raisonnement ?",
        choix: ["Il a raison", "L'urine est inerte", "Sortir de la définition ne rend pas impur, sinon le vivant serait impur", "Tout ce qui sort d'un vivant est pur"],
        bonne: 2,
        explication: "« وَلَا يَلْزَمُ مِنْ إخْرَاجِهَا مِنْ حَدِّ الْجَمَادِ كَوْنُهَا نَجِسَةً … أَنْ يَكُونَ الْحَيُّ نَجِسًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "89-90" },
    alertes: [
      "Corrigé (campagne de correction) : Mawāhib (t. 1, p. 89) imprime « وَالْأَلْزَمُ أَنْ يَكُونَ الْحَيُّ نَجِسًا » ; la syntaxe impose de lire وَإِلَّا لَزِمَ (mêmes consonnes), et al-Kharashī (Shamela 91, p. 83) a le même raisonnement : « وَإِلَّا لَكَانَ الْحَيُّ نَجَسًا ».",
      "Matn : Mawāhib vocalise « وَمُنْفَصِلٍ » (génitif) et l'explique par « مَعْطُوفٌ عَلَى حَيٍّ » ; le Mukhtaṣar seul (Shamela 11355, p. 4) vocalise « وَمُنْفَصِلٌ ». La fiche suit Mawāhib et son commentaire, comme al-Zurqānī (« فهو عطف على حي »). Non bloquant.",
      "« فَقَالَ فِي الذَّخِيرَةِ ابْنُ رَاشِدٍ » : l'ordre des mots est étrange (adh-Dhakhīra est citée juste après pour un autre avis) ; on ne sait pas si la définition est d'Ibn Rāshid ou d'adh-Dhakhīra. La fiche la rapporte sous les deux noms. Non bloquant.",
      "« لِأَنَّا أَخْرَجْنَا مِنْ حَدِّ الْجَمَادِ » : le complément (« l'avons écarté ») semble manquer ; sans effet sur le sens. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49 (Shamela 21604, page 48)."
    ],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 8 — tah-01-02-09 à -16b — t. 1, p. 90–94 (Shamela 569, pages 89–93) */
  /* ================================================================== */

  {
    id: "tah-01-02-09",
    kitab: "tah", bab: "01", fasl: "02", ordre: 9,
    titre: "… sauf ce qui enivre",
    titre_ar: "إِلَّا المُسْكِرَ",
    objectif: "Savoir que ce qui enivre est impur, et le distinguer de ce qui obscurcit l'esprit ou endort sans enivrer.",
    matn: "إلَّا الْمُسْكِرَ",
    regle_pratique: "Parmi les choses inertes, seul ce qui enivre (comme le vin) est impur ; ce qui obscurcit l'esprit sans ivresse, ou qui endort, reste pur, même si en prendre au point d'altérer l'esprit est interdit.",
    qualification: {
      hukm: "haram",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl excepte des choses inertes pures « ce qui enivre » (المُسْكِر, al-mouskir) : il est impur, qu'il vienne du raisin ou d'autre chose.\n\nAl-Ḥaṭṭāb cite at-Tawḍīḥ, qui distingue trois choses. Ce qui enivre fait perdre l'esprit sans les sens, avec exaltation et joie. Ce qui corrompt (المُفْسِد, al-moufsid) fait perdre l'esprit sans les sens, mais sans exaltation ni joie. Ce qui endort (المُرْقِد, al-mourqid) fait perdre l'esprit et les sens. Trois règles ne valent que pour ce qui enivre : la peine légale (الحَدّ, al-hadd), l'impureté et l'interdiction même d'une petite quantité (« الْحَدُّ وَالنَّجَاسَةُ وَتَحْرِيمُ الْقَلِيلِ »).\n\nSur le chanvre (الحَشِيشَة, al-hachîcha), les savants tardifs ont deux avis, tout en s'accordant à en interdire la consommation : est-il de ce qui enivre ou de ce qui corrompt ? Al-Qarāfī le range parmi ce qui corrompt ; ʿAbd Allāh al-Manūfī, le maître de Khalīl, parmi ce qui enivre. Cette distinction répond à une objection faite à Khalīl : la jusquiame et les plantes semblables ne sont pas visées par « ce qui enivre », car elles corrompent ou endorment.\n\nD'après al-Burzulī, al-Qarāfī cite un troisième avis : le chanvre grillé est impur et entraîne la peine légale ; non grillé, ni peine ni impureté. Al-Qarāfī choisit lui-même qu'il n'entraîne pas la peine légale, mais une sanction dissuasive (التَّعْزِير, at-taʿzîr) ; la prière n'est pas annulée si l'on en porte sur soi. L'opium est de ce qui corrompt : la prière faite en le portant, ou en portant de la jusquiame, n'est pas annulée, par consensus.",
    aqwal: [
      { auteur: "Al-Qarāfī", avis: "Le chanvre (ḥashīsha) est de ce qui corrompt, non de ce qui enivre ; il n'entraîne pas la peine légale mais une sanction dissuasive, et le porter n'annule pas la prière.", statut: "non_precise" },
      { auteur: "ʿAbd Allāh al-Manūfī, maître de Khalīl (cité dans at-Tawḍīḥ)", avis: "Le chanvre est de ce qui enivre, car ceux qui en prennent vendent leurs biens pour lui : ils y trouvent donc un plaisir.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (troisième avis cité d'après al-Qarāfī par al-Burzulī)", avis: "Grillé, le chanvre est impur et entraîne la peine légale ; non grillé, ni peine ni impureté.", statut: "non_precise" },
      { auteur: "Ibn Farḥūn", avis: "Les drogues indiennes sont interdites si on les prend pour l'effet du chanvre, permises pour la digestion ou d'autres usages ; la noix (jawza), beaucoup de safran, la jusquiame et la saykarān sont de ce qui corrompt : un peu est permis, et ces choses sont pures.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : ce qui enivre est impur ; il n'est que liquide, comme le vin ou la sūbyā laissée jusqu'à fermenter (« وَلَا يَكُونُ إلَّا مَائِعًا كَالْخَمْرِ »). Ce qui corrompt, appelé aussi stupéfiant (المُخَدِّر, al-moukhaddir), dont le chanvre, et ce qui endort sont purs, et seul est interdit ce qui agit sur l'esprit (« فَإِنَّهُمَا طَاهِرَانِ وَلَا يَحْرُمُ مِنْهُمَا إلَّا مَا أَثَّرَ فِي الْعَقْلِ »). Al-Dasūqī : ranger le chanvre parmi les stupéfiants est l'avis d'al-Qarāfī, « et c'est l'avis retenu », contre al-Manūfī (« هُوَ مَا لِلْقَرَافِيِّ وَهُوَ الْمُعْتَمَدُ خِلَافًا لِلْمَنُوفِيِّ ») ; qui en prend au point d'altérer l'esprit encourt une correction, non la peine légale.",
    tarjih_hattab: "Al-Ḥaṭṭāb tire trois conséquences. (1) La personne devenue dépendante de l'opium, qui craint de mourir si elle arrête, peut en prendre ce qui n'agit ni sur l'esprit ni sur les sens, en s'efforçant de réduire et d'arrêter ; elle doit se repentir. (2) Vendre ces substances est permis à qui ne les prendra pas au point d'altérer l'esprit, si l'on est sûr qu'il ne les revendra pas à un tel usage, par analogie avec ce que dit Ibn Rushd de l'œuf gâté (fiche 14) ; il dit n'avoir pas trouvé de texte explicite. (3) Le café (القَهْوَة, al-qahwa) n'enivre pas en lui-même ; il devient interdit par ce qui l'accompagne (réunions à la manière des buveurs de vin, mélange avec des stupéfiants, fréquentations, abandon de la prière en groupe, ou tempérament du buveur selon Zarrūq) ; l'homme sensé doit s'en écarter, sauf nécessité légale, et pour qui échappe à tout cela il revient à la permission de base.",
    tanbihat: [
      "Ibn Farḥūn : un lait aigri peut couvrir l'esprit, comme on le dit du lait de jument ; bu pour cela, il est interdit dans la mesure où il couvre l'esprit. Al-Ḥaṭṭāb ajoute que le lait de jument est interdit, peu ou beaucoup, selon le mashhūr, car la viande de cheval est interdite (voir la fiche 16b).",
      "Ibn Farḥūn juge apparent qu'il soit permis de faire boire ce qui endort pour amputer un membre : le danger du produit est sûr d'être évité, celui du membre non.",
      "Al-Burzulī : certains imams permettent un peu de noix muscade pour réchauffer le cerveau ; d'autres exigent qu'elle soit mêlée à des remèdes ; « le juste est la généralité ».",
      "Parmi ce qui corrompt figure aussi une graine trouvée dans le blé importé de Dahlak, appelée zīwān."
    ],
    divergences: [
      "Divergence — ce qui enivre peut-il être solide ? Al-Dardīr : non, il n'est que liquide (« وَلَا يَكُونُ إلَّا مَائِعًا ») ; al-Dasūqī : « jamais solide, contre al-Manūfī », pour qui il peut l'être, d'où son classement du chanvre (« جَامِدًا أَصْلًا خِلَافًا لِلْمَنُوفِيِّ فَإِنَّ الْمُسْكِرَ عِنْدَهُ قَدْ يَكُونُ جَامِدًا وَلِذَا جَعَلَ الْحَشِيشَةَ مِنْهُ »). Al-Ḥaṭṭāb rapporte les avis d'al-Qarāfī et d'al-Manūfī sans trancher.",
      "Complément — le café. Al-Dasūqī cite « المج » (al-Majmūʿ de Muḥammad al-Amīr) : le café est permis en lui-même et prend la règle de ce qui en découle, « c'est la substance de ce que dit ح » (al-Ḥaṭṭāb) ; la fumée du tabac est de même « selon l'avis le plus apparent », et en abuser est un divertissement (« وَالْقَهْوَةُ فِي ذَاتِهَا مُبَاحَةٌ وَيَعْرِضُ لَهَا حُكْمُ مَا يَتَرَتَّبُ عَلَيْهَا هَذَا زُبْدَةُ مَا فِي ح هُنَا وَمِثْلُهَا الدُّخَانُ عَلَى الْأَظْهَرِ »)."
    ],
    exemple: "Avant une opération, on vous administre un produit qui vous endort (mourqid). Selon al-Dardīr, ce qui endort reste pur ; et Ibn Farḥūn juge apparent qu'il soit permis de faire boire un tel produit pour amputer un membre. Une goutte de vin sur votre vêtement, en revanche, est une impureté.",
    erreurs_frequentes: [
      "Croire que tout ce qui altère l'esprit est impur : seul ce qui enivre l'est ; ce qui corrompt ou endort reste pur.",
      "Conclure qu'une substance pure est permise à consommer : le chanvre est pur selon al-Dardīr, mais en prendre au point d'altérer l'esprit est interdit.",
      "Penser que porter du chanvre ou de l'opium sur soi annule la prière : al-Qarāfī dit le contraire."
    ],
    termes: [
      { ar: "مُسْكِر", translit: "mouskir", def: "Ce qui enivre : fait perdre l'esprit sans les sens, avec exaltation et joie. Il est impur et entraîne la peine légale." },
      { ar: "مُفْسِد", translit: "moufsid", def: "Ce qui corrompt l'esprit : fait perdre l'esprit sans les sens, sans exaltation ni joie. Appelé aussi moukhaddir ; il est pur." },
      { ar: "مُخَدِّر", translit: "moukhaddir", def: "Stupéfiant : autre nom du moufsid chez al-Dardīr." },
      { ar: "مُرْقِد", translit: "mourqid", def: "Ce qui endort : fait perdre l'esprit et les sens. Il est pur." },
      { ar: "حَدّ", translit: "hadd", def: "Peine légale fixée par la Loi." },
      { ar: "تَعْزِير", translit: "taʿzîr", def: "Sanction dissuasive laissée à l'appréciation du juge, distincte de la peine légale." },
      { ar: "حَشِيشَة", translit: "hachîcha", def: "Le chanvre ; al-Qarāfī le range parmi ce qui corrompt, al-Manūfī parmi ce qui enivre." },
      { ar: "قَهْوَة", translit: "qahwa", def: "Le café, boisson tirée de l'écorce du café (qishr al-bunn), selon al-Ḥaṭṭāb." }
    ],
    quiz: [
      { q: "Quelle règle ne vaut que pour ce qui enivre, et non pour ce qui corrompt ou endort ?",
        choix: ["L'impureté", "La permission d'en prendre un peu", "La pureté", "L'obligation de le vendre"],
        bonne: 0,
        explication: "At-Tawḍīḥ : trois règles ne valent que pour ce qui enivre : « الْحَدُّ وَالنَّجَاسَةُ وَتَحْرِيمُ الْقَلِيلِ »." },
      { q: "Selon al-Dardīr et al-Dasūqī, le chanvre (ḥashīsha) est-il impur ?",
        choix: ["Oui, comme le vin", "Seulement s'il est liquide", "Non : c'est un stupéfiant, donc pur, même si en prendre au point d'altérer l'esprit est interdit", "Aucune des réponses"],
        bonne: 2,
        explication: "Al-Dardīr : « وَمِنْهُ الْحَشِيشَةُ … فَإِنَّهُمَا طَاهِرَانِ » ; al-Dasūqī : c'est l'avis d'al-Qarāfī, « وَهُوَ الْمُعْتَمَدُ »." },
      { q: "Mise en situation : vous priez avec, dans votre poche, un médicament qui contient de l'opium. Que dit al-Qarāfī de votre prière ?",
        choix: ["Elle est à refaire dans le temps", "Elle n'est pas annulée, par consensus", "Elle est nulle", "Elle est déconseillée"],
        bonne: 1,
        explication: "« مَنْ صَلَّى بِهِ، أَوْ بِالْبَنْجِ لَمْ تَفْسُدْ صَلَاتُهُ إجْمَاعًا »." },
      { q: "Que dit al-Ḥaṭṭāb du café ?",
        choix: ["Il enivre comme le vin", "C'est une œuvre de rapprochement", "Il est impur", "Il n'enivre pas en lui-même ; il devient interdit par ce qui l'accompagne"],
        bonne: 3,
        explication: "« وَالْحَقُّ أَنَّهُ فِي ذَاتِهِ لَا إسْكَارَ فِيهِ … غَيْرَ أَنَّهُ تَعْرِضُ لَهُ الْحُرْمَةُ لِأُمُورٍ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "90-91" },
    alertes: [
      "Corrigé (campagne de correction) : le texte imprimé vocalise « ثَلَاثَةٌ أَحْكَامٍ » ; lire « ثَلَاثَةُ أَحْكَامٍ » (annexion), comme al-Kharashī (Shamela 91, p. 83 : « وَيَنْبَنِي عَلَى الْإِسْكَارِ ثَلَاثَةُ أَحْكَامٍ »). Sans effet sur le sens (anomalie n° 63).",
      "« شَيْخُنَا الشَّهِيرُ بِعَبْدِ اللَّهِ الْمَنُوفِيِّ » figure dans une citation d'at-Tawḍīḥ : « notre maître » est donc celui de Khalīl, non d'al-Ḥaṭṭāb.",
      "Les plantes « عَسَلُ الْبَلَادِرِ », « السَّيْكَرَان » (écrit aussi « الشَّيْكَرَان », d'après al-Ḥaṭṭāb), « الْبَنْج » et « الدَّاتُورَة » (al-Dardīr) ne sont pas identifiées par le texte : la fiche garde les noms arabes, en rendant « الْبَنْج » par « jusquiame » à titre indicatif.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 49–50 (Shamela 21604, pages 48–49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-10",
    kitab: "tah", bab: "01", fasl: "02", ordre: 10,
    titre: "L'être vivant",
    titre_ar: "الحَيُّ",
    objectif: "Savoir que tout être vivant est pur, et ce que cela implique pour la prière.",
    matn: "وَالْحَيُّ",
    regle_pratique: "Tout être vivant est pur, de terre ou de mer, même le chien et le porc, même né d'immondices ; ce qui est impur dans son ventre ne le rend pas impur, et la prière de celui qui le porte est valide.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl range « l'être vivant » parmi les choses pures. Al-Ḥaṭṭāb cite al-Bisāṭī (al-Mughnī) : même s'il est né d'immondices (« وَلَوْ تَوَلَّدَ مِنْ الْعَذِرَةِ »). Deux avis contraires sont rapportés sans auteur : on excepte le chien et le porc ; on excepte aussi le polythéiste (rapporté par Ibn Juzayy dans al-Qawānīn).\n\nTout ce qui, dans le corps de l'animal, serait jugé impur une fois séparé de lui n'est pas jugé ainsi tant qu'il est à l'intérieur. La prière de celui qui porte cet animal est donc valide (« وَتَصِحُّ صَلَاةُ حَامِلِ ذَلِكَ الْحَيَوَانِ »), comme le disent plusieurs savants. Al-Ḥaṭṭāb renvoie aussi à al-Fākihānī, sur le passage de la Risāla : il n'y a pas à laver l'intérieur des deux voies naturelles.\n\nAl-Dardīr précise que l'article « al- » englobe tout vivant (« أَيْ كُلُّ حَيٍّ ») : de mer ou de terre, même né d'immondices, même chien ou porc.",
    aqwal: [
      { auteur: "Al-Bisāṭī (al-Mughnī)", avis: "Le vivant est pur, même s'il est né d'immondices.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution", avis: "Sauf le chien et le porc.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (rapporté par Ibn Juzayy, al-Qawānīn)", avis: "Sauf aussi le polythéiste.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : tout vivant est pur, de mer ou de terre, « même né d'immondices, ou chien et porc » (« وَلَوْ مُتَوَلِّدًا مِنْ عَذِرَةٍ أَوْ كَلْبًا وَخِنْزِيرًا »). Al-Dasūqī ajoute : même mécréant ou démon (« وَلَوْ كَافِرًا أَوْ كَلْبًا أَوْ خِنْزِيرًا أَوْ شَيْطَانًا »).",
    tarjih_hattab: null,
    tanbihat: [
      "Ce qui est impur à l'intérieur du corps (urine, excréments…) ne compte pas tant qu'il n'en est pas sorti : on peut prier en portant un animal vivant."
    ],
    divergences: [
      "Complément (sujet absent de ce passage d'al-Ḥaṭṭāb) — le nouveau-né humain. Al-Dasūqī : al-Qurṭubī affirme un consensus sur sa pureté, sans la divergence qui porte sur l'humidité des parties intimes ; Ibn ʿArafa conteste ce consensus et y applique cette divergence ; « l'avis retenu » est donc que le nouveau-né touché par cette humidité est souillé, l'avis retenu tenant cette humidité pour impure ; mais certains ont répondu à Ibn ʿArafa que « la vérité est avec al-Qurṭubī » (« فَقَدْ ادَّعَى الْقُرْطُبِيُّ الْإِجْمَاعَ عَلَى طَهَارَتِهِ … وَنَازَعَهُ ابْنُ عَرَفَةَ فِي دَعْوَى الْإِجْمَاعِ … لَكِنْ رَدَّ بَعْضُهُمْ عَلَى ابْنِ عَرَفَةَ وَقَالَ الْحَقُّ مَعَ الْقُرْطُبِيِّ »).",
      "Complément — le petit de l'animal. Al-Dasūqī : s'il naît couvert des humidités de sa mère, il est pur si la mère est licite à la consommation, souillé sinon (« فَإِنْ كَانَتْ مُبَاحَةَ الْأَكْلِ فَهُوَ طَاهِرٌ … وَإِنْ كَانَتْ غَيْرَ مُبَاحَةِ الْأَكْلِ فَهُوَ مُتَنَجِّسٌ »)."
    ],
    exemple: "Un chat vivant saute sur vos genoux pendant que vous priez. Son corps est pur, et ce qu'il a dans le ventre ne compte pas : votre prière n'est pas atteinte de ce fait.",
    erreurs_frequentes: [
      "Croire que le chien vivant est impur : selon ce passage, tout vivant est pur, chien et porc compris (l'avis contraire est rapporté sans auteur).",
      "Penser qu'on ne peut pas prier en portant un animal parce que son ventre contient de l'impur : la prière est valide."
    ],
    termes: [
      { ar: "حَيّ", translit: "hayy", def: "Être vivant ; tout vivant est pur selon ce passage." },
      { ar: "عَذِرَة", translit: "ʿadhira", def: "Excréments, immondices." },
      { ar: "جَنِين", translit: "janîn", def: "Le petit à sa naissance (ou dans le ventre de sa mère)." },
      { ar: "مُتَنَجِّس", translit: "moutanajjis", def: "Souillé : une chose pure en elle-même que l'impureté a touchée." }
    ],
    quiz: [
      { q: "Le chien vivant est-il pur selon al-Dardīr ?",
        choix: ["Non", "Seulement le chien de chasse", "Seulement s'il est lavé", "Oui : tout vivant est pur, même le chien et le porc"],
        bonne: 3,
        explication: "« أَيْ كُلُّ حَيٍّ … وَلَوْ مُتَوَلِّدًا مِنْ عَذِرَةٍ أَوْ كَلْبًا وَخِنْزِيرًا »." },
      { q: "Mise en situation : vous priez en portant un enfant ou un animal vivant. Votre prière est-elle valide ?",
        choix: ["Oui : ce qui est impur dans son ventre ne compte pas", "Non", "Seulement en voyage", "Seulement s'il est à jeun"],
        bonne: 0,
        explication: "« وَتَصِحُّ صَلَاةُ حَامِلِ ذَلِكَ الْحَيَوَانِ قَالَهُ غَيْرُ وَاحِدٍ »." },
      { q: "Selon al-Dasūqī, quel est l'avis retenu pour le nouveau-né humain touché par l'humidité des parties intimes ?",
        choix: ["Il est impur en lui-même", "Il est pur par consensus", "Il est souillé, car cette humidité est impure selon l'avis retenu", "Aucune des réponses"],
        bonne: 2,
        explication: "« فَالْمُعْتَمَدُ أَنَّ جَنِينَ الْآدَمِيِّ إذَا نَزَلَ عَلَيْهِ رُطُوبَةُ الْفَرْجِ فَإِنَّهُ يَكُونُ مُتَنَجِّسًا » ; certains ont toutefois donné raison à al-Qurṭubī." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "91" },
    alertes: [
      "Al-Ḥaṭṭāb renvoie au propos d'al-Fākihānī sans le citer (« وَانْظُرْ كَلَامَ الْفَاكِهَانِيِّ ») ; la fiche n'en dit pas plus.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-11",
    kitab: "tah", bab: "01", fasl: "02", ordre: 11,
    titre: "Ses larmes et sa sueur",
    titre_ar: "دَمْعُهُ وَعَرَقُهُ",
    objectif: "Savoir que les larmes et la sueur d'un être vivant sont pures.",
    matn: "وَدَمْعُهُ وَعَرَقُهُ",
    regle_pratique: "Les larmes et la sueur d'un être vivant sont pures, quel que soit l'animal ; selon al-Dardīr, même la sueur d'un animal qui mange des immondices, ou d'une personne ivre pendant son ivresse.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : « c'est l'avis connu de l'école » (« هَذَا هُوَ الْمَعْرُوفُ مِنْ الْمَذْهَبِ »). La Mudawwana dit que la sueur des bêtes et ce qui sort de leurs naseaux sont purs. Sanad l'accepte sans mentionner de divergence : c'est comme la sueur de l'homme. D'autres commentateurs de la Mudawwana l'acceptent aussi, ainsi qu'Ibn ʿArafa, qui ne rapporte pas de divergence.\n\nIbn Rushd (rasm al-wuḍūʾ, samāʿ d'Ashhab) dit pourtant que la sueur et le lait de tous les animaux suivent leur chair. Selon lui, si la Mudawwana dit « pas de mal à la sueur du birdhawn, du mulet et de l'âne », c'est parce que les gens ne peuvent pas s'en préserver. Al-Ḥaṭṭāb relève qu'Ibn Rushd ne mentionne pas de divergence sur l'impureté de cette sueur, et juge son propos « non connu » : ce n'est pas l'avis connu de l'école.\n\nAl-Dardīr définit les larmes (« ce qui coule de l'œil ») et la sueur (« ce qui suinte du corps ») et précise : même d'un animal qui mange des immondices (جَلَّالَة, jallâla), ou d'une personne ivre pendant son ivresse.",
    aqwal: [
      { auteur: "La Mudawwana", avis: "La sueur des bêtes et ce qui sort de leurs naseaux sont purs.", statut: "non_precise" },
      { auteur: "Sanad ; d'autres commentateurs de la Mudawwana ; Ibn ʿArafa", avis: "Même règle, sans divergence rapportée ; c'est comme la sueur de l'homme (Sanad).", statut: "non_precise" },
      { auteur: "Ibn Rushd (al-Bayān, rasm al-wuḍūʾ du samāʿ d'Ashhab)", avis: "La sueur et le lait de tous les animaux suivent leur chair ; la Mudawwana tolère la sueur du mulet et de l'âne parce qu'on ne peut s'en préserver.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : les larmes et la sueur sont pures, « même d'un animal qui mange des immondices ou d'une personne ivre pendant son ivresse » (« وَلَوْ مِنْ جَلَّالَةٍ أَوْ سَكْرَانَ حَالَ سُكْرِهِ »). Al-Dasūqī : « c'est l'avis retenu », contre ceux qui jugent impure la sueur de l'ivrogne pendant son ivresse ou près de celle-ci (« هَذَا هُوَ الْمُعْتَمَدُ خِلَافًا لِمَنْ قَالَ: إنَّ عَرَقَ السَّكْرَانِ حَالَ سُكْرِهِ أَوْ قَرِيبًا مِنْ سُكْرِهِ نَجِسٌ »).",
    tarjih_hattab: "Al-Ḥaṭṭāb retient la pureté, avis connu de l'école ; le propos d'Ibn Rushd (la sueur suit la chair) ne l'est pas, selon lui : « فَمَا قَالَهُ غَيْرُ مَعْرُوفٍ ».",
    tanbihat: [
      "Pour la sueur de la personne ivre et de l'animal qui mange des impuretés, voir la fiche 13 (« même s'il a mangé de l'impur »)."
    ],
    divergences: [
      "Divergence (entre commentateurs, rapportée par al-Dasūqī) — prier avec un vêtement touché par la sueur d'un buveur de vin. Al-Dasūqī : ce n'est pas déconseillé, ni avec son mucus ou sa salive, « selon l'avis le plus fort, comme chez « عبق » (ʿAbd al-Bāqī az-Zurqānī), contre Zarrūq » (« لَا تُكْرَهُ الصَّلَاةُ بِثَوْبٍ فِيهِ عَرَقُ شَارِبِ خَمْرٍ أَوْ مُخَاطُهُ أَوْ بَصْقُهُ عَلَى الرَّاجِحِ كَمَا فِي عبق خِلَافًا لِزَرُّوقٍ »). Ce passage d'al-Ḥaṭṭāb n'en parle pas."
    ],
    exemple: "Après avoir monté un âne ou un mulet, votre vêtement est trempé de sa sueur. Elle est pure : vous pouvez prier avec ce vêtement.",
    erreurs_frequentes: [
      "Croire que la sueur d'un animal interdit à la consommation (mulet, âne) est impure : selon l'avis connu de l'école, elle est pure.",
      "Confondre la sueur et le lait : le lait des animaux suit leur chair (fiche 16b), la sueur non."
    ],
    termes: [
      { ar: "دَمْع", translit: "damʿ", def: "Larmes : ce qui coule de l'œil." },
      { ar: "عَرَق", translit: "ʿaraq", def: "Sueur : ce qui suinte du corps." },
      { ar: "سَكْرَان", translit: "sakrân", def: "Personne ivre." }
    ],
    quiz: [
      { q: "Selon l'avis connu de l'école, la sueur de l'âne est-elle pure ?",
        choix: ["Non, elle suit sa chair", "Oui", "Seulement si l'âne est sec", "On ne peut pas savoir"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : « هَذَا هُوَ الْمَعْرُوفُ مِنْ الْمَذْهَبِ » ; la Mudawwana dit la sueur des bêtes pure." },
      { q: "Quel savant dit que la sueur des animaux suit leur chair ?",
        choix: ["Sanad", "Ibn ʿArafa", "Al-Dardīr", "Ibn Rushd"],
        bonne: 3,
        explication: "« عَرَقُ سَائِرِ الْحَيَوَانِ وَلَبَنُهَا تَابِعٌ لِلُحُومِهَا » ; al-Ḥaṭṭāb juge ce propos non connu." },
      { q: "Mise en situation : un ami ivre transpire sur votre vêtement. Selon al-Dardīr et al-Dasūqī, cette sueur est…",
        choix: ["Pure : c'est l'avis retenu", "Impure", "Pure seulement après dégrisement", "Déconseillée pour la prière, sans exception"],
        bonne: 0,
        explication: "« وَلَوْ مِنْ جَلَّالَةٍ أَوْ سَكْرَانَ حَالَ سُكْرِهِ » ; al-Dasūqī : « هَذَا هُوَ الْمُعْتَمَدُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "91" },
    alertes: [
      "Précisé (campagne de correction) : « وَلَمْ يَذْكُرْ فِي نَجَاسَتِهِ خِلَافًا فَمَا قَالَهُ غَيْرُ مَعْرُوفٍ ». Le propos visé est bien celui d'Ibn Rushd : al-Bayān (Shamela 21751, p. 105) porte « وكذلك عرق سائر الحيوان وألبانها تبع للحومها، فلبن الحمارة نجس » et la même explication de la Mudawwana. Ibn Rushd n'y rapporte de divergence que pour l'animal consommable qui a bu une eau impure (« فيختلف في عرقه ولبنه وبوله على أربعة أقوال »), autre cas que celui de la fiche. Sujet de « لَمْ يَذْكُرْ » : Ibn Rushd (anomalie n° 64). Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-12",
    kitab: "tah", bab: "01", fasl: "02", ordre: 12,
    titre: "Sa salive, son mucus et ses œufs",
    titre_ar: "لُعَابُهُ وَمُخَاطُهُ وَبَيْضُهُ",
    objectif: "Savoir que la salive, le mucus et les œufs d'un vivant sont purs, et quoi penser du liquide qui coule de la bouche du dormeur.",
    matn: "وَلُعَابُهُ وَمُخَاطُهُ وَبَيْضُهُ",
    regle_pratique: "La salive, le mucus et les œufs d'un être vivant sont purs ; le liquide qui coule de la bouche du dormeur est pur s'il vient de la bouche, et s'il vient de l'estomac (jaune et malodorant), il est impur, mais toléré pour celui chez qui il se répète.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "La salive (لُعَاب, louʿâb) est ce qui coule de la bouche. Al-Ḥaṭṭāb se demande si le liquide qui coule de la bouche du dormeur y entre.\n\nAl-Mashadhdhālī, dans sa glose sur la Mudawwana, rapporte d'an-Nawawī : s'il a changé, il est impur ; sinon, il est pur ; et si on le juge impur et qu'il se répète chez quelqu'un, il est comme le sang de puce. Al-Mashadhdhālī ajoute qu'on peut en déduire deux avis à partir de questions semblables de l'école. Ibn Nājī : selon notre école, s'il a changé, il serait une eau mêlée, non une impureté.\n\nAl-Ḥaṭṭāb rejette ce dernier propos (« لَا وَجْهَ لِهَذَا ») et distingue : s'il vient de la bouche, il est pur ; s'il vient de l'estomac, on suit an-Nawawī (impur s'il a changé, pur sinon). Al-Damīrī : on reconnaît qu'il vient de l'estomac à sa puanteur et à sa couleur jaune ; un autre avis, rapporté sans auteur : il vient de la bouche si la tête repose sur un oreiller, sinon de l'estomac. Dans tous les cas, s'il se répète chez quelqu'un, il est toléré.\n\nPour les œufs, voir les remarques ci-dessous.",
    aqwal: [
      { auteur: "An-Nawawī (rapporté par al-Mashadhdhālī)", avis: "Le liquide du dormeur est impur s'il a changé, pur sinon ; jugé impur et répété, il est comme le sang de puce.", statut: "non_precise" },
      { auteur: "Al-Mashadhdhālī", avis: "On peut en déduire deux avis à partir de questions semblables de l'école.", statut: "non_precise" },
      { auteur: "Ibn Nājī (commentaire de la Mudawwana)", avis: "S'il a changé, il serait selon notre école une eau mêlée (muḍāf), non une impureté.", statut: "non_precise" },
      { auteur: "Al-Damīrī (commentaire d'al-Minhāj)", avis: "On reconnaît qu'il vient de l'estomac à sa puanteur et à sa couleur jaune.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution", avis: "Il vient de la bouche si la tête repose sur un oreiller, sinon de l'estomac.", statut: "non_precise" },
      { auteur: "Ibn Bashīr, suivi par le commentateur (« الشَّارِحُ ») et accepté par Ibn ʿArafa", avis: "Les œufs des petites bêtes (ḥasharāt) suivent leur chair ; Ibn ʿArafa : « l'œuf d'oiseau est pur ; celui de ses rapaces et des petites bêtes est comme leur chair ».", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : la salive est pure, en état de veille ou de sommeil, « tant qu'on ne sait pas qu'elle vient de l'estomac, par sa couleur jaune et sa puanteur : elle est alors impure, et ne s'appelle plus salive » (« مَا لَمْ يَعْلَمْ أَنَّهُ مِنْ الْمَعِدَةِ بِصُفْرَتِهِ وَنُتُونَتِهِ فَإِنَّهُ نَجِسٌ ») ; le mucus et les œufs sont purs, même ceux des petites bêtes comme le serpent. Al-Dasūqī : ce liquide impur est toléré s'il se répète (« وَيُعْفَى عَنْهُ إذَا لَازَمَ وَإِلَّا فَلَا »).",
    tarjih_hattab: "Liquide du dormeur : pur s'il vient de la bouche ; s'il vient de l'estomac, impur s'il a changé, pur sinon ; toléré dans tous les cas s'il se répète. Œufs : la parole de Khalīl est générale, car les petites bêtes dont on est à l'abri du venin sont licites ; il ne suit donc pas Ibn Bashīr.",
    tanbihat: [
      "Le commentateur (« الشَّارِحُ ») objecte que les œufs des petites bêtes suivent leur chair (d'après Ibn Bashīr) ; al-Ḥaṭṭāb répond que la parole de Khalīl reste générale (« بَلْ الظَّاهِرُ أَنَّ كَلَامَ الْمُصَنِّفِ عَلَى إطْلَاقِهِ »)."
    ],
    divergences: [
      "Divergence — liquide venu de l'estomac. Al-Ḥaṭṭāb : impur seulement s'il a changé, d'après an-Nawawī (« وَإِنْ كَانَ مِنْ الْمَعِدَةِ فَكَمَا قَالَ النَّوَوِيُّ إنْ تَغَيَّرَ فَهُوَ نَجِسٌ وَإِلَّا فَهُوَ طَاهِرٌ »). Al-Dardīr : impur dès qu'on sait qu'il vient de l'estomac, par sa couleur jaune et sa puanteur, sans poser la condition du changement (« مَا لَمْ يَعْلَمْ أَنَّهُ مِنْ الْمَعِدَةِ بِصُفْرَتِهِ وَنُتُونَتِهِ فَإِنَّهُ نَجِسٌ »).",
      "Concordance — œufs des petites bêtes. Al-Ḥaṭṭāb, contre Ibn Bashīr et le commentateur, lit Khalīl de façon générale ; al-Dardīr dit de même : « même des petites bêtes, comme le serpent, durcis ou non » (« وَلَوْ مِنْ حَشَرَاتٍ كَحَيَّةٍ تَصَلَّبَ أَوْ لَا »)."
    ],
    exemple: "Au réveil, vous trouvez sur l'oreiller une tache du liquide qui a coulé de votre bouche. S'il vient de la bouche, il est pur. S'il est jaune et malodorant, il vient de l'estomac : il est impur, mais si cela vous arrive souvent, il est toléré.",
    erreurs_frequentes: [
      "Croire que toute bave du dormeur est impure : elle est pure si elle vient de la bouche.",
      "Croire que les œufs de serpent ou d'autres petites bêtes sont impurs : al-Ḥaṭṭāb et al-Dardīr les tiennent pour purs.",
      "Oublier la tolérance : ce qui se répète chez quelqu'un est toléré."
    ],
    termes: [
      { ar: "لُعَاب", translit: "louʿâb", def: "Salive : ce qui coule de la bouche." },
      { ar: "مُخَاط", translit: "moukhât", def: "Mucus : ce qui coule du nez." },
      { ar: "بَيْض", translit: "bayd", def: "Œufs." },
      { ar: "مَعِدَة", translit: "maʿida", def: "Estomac." },
      { ar: "حَشَرَات", translit: "hacharât", def: "Petites bêtes (insectes, reptiles comme le serpent)." }
    ],
    quiz: [
      { q: "Le mucus d'un être vivant est-il pur ?",
        choix: ["Oui", "Non", "Seulement chez l'homme", "Seulement s'il est sec"],
        bonne: 0,
        explication: "Khalīl range « وَمُخَاطُهُ » parmi les choses pures ; al-Dardīr : « مَا سَالَ مِنْ أَنْفِهِ »." },
      { q: "Selon al-Ḥaṭṭāb, le liquide qui coule de la bouche du dormeur et qui vient de la bouche est…",
        choix: ["Impur", "Déconseillé", "Pur", "Impur s'il est abondant"],
        bonne: 2,
        explication: "« إنْ كَانَ مِنْ الْفَمِ فَهُوَ طَاهِرٌ »." },
      { q: "Mise en situation : ce liquide est jaune et malodorant, et cela vous arrive presque chaque nuit. Que retenir ?",
        choix: ["Il est pur", "Il faut changer d'oreiller", "Il est impur et jamais toléré", "Il est impur, mais toléré parce qu'il se répète"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : « فَإِنَّهُ إذَا لَازَمَ شَخْصًا عُفِيَ عَنْهُ » ; al-Dasūqī : « وَيُعْفَى عَنْهُ إذَا لَازَمَ »." },
      { q: "Les œufs de serpent sont-ils purs selon al-Dardīr ?",
        choix: ["Non, ils suivent la chair du serpent", "Oui", "Seulement durcis", "Seulement s'ils sont cuits"],
        bonne: 1,
        explication: "« وَلَوْ مِنْ حَشَرَاتٍ كَحَيَّةٍ تَصَلَّبَ أَوْ لَا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "91-93" },
    alertes: [
      "« الشَّارِحُ » (le commentateur) n'est pas nommé dans ce passage.",
      "Corrigé (campagne de correction) : « وَقِيلَ: إنْ كَانَ الرَّأْسُ عَلَى مِخَدَّةٍ فَمِنْهُ ». La fiche comprenait « مِنْهُ » comme « de la tête » ; al-Kharashī (Shamela 91, p. 84 : « إنْ كَانَ رَأْسُهُ عَلَى مِخَدَّةٍ فَمِنْ الْفَمِ ») et al-Zurqānī (Shamela 14297, p. 44 : « فمن الفم وإلا فمن المعدة ») portent « de la bouche ». Lecture corrigée (anomalie n° 65).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-13",
    kitab: "tah", bab: "01", fasl: "02", ordre: 13,
    titre: "… même s'il a mangé de l'impur",
    titre_ar: "وَلَوْ أَكَلَ نَجِسًا",
    objectif: "Savoir que ce qui sort pur d'un vivant le reste même s'il se nourrit d'impuretés, et connaître la divergence que signale Khalīl.",
    matn: "وَلَوْ أَكَلَ نَجِسًا",
    regle_pratique: "Le vivant, ses larmes, sa sueur, sa salive, son mucus et ses œufs restent purs même s'il mange des impuretés ; par « وَلَوْ », Khalīl signale qu'un avis contraire existe dans l'école, surtout pour la sueur et les œufs.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le commentateur (« الشَّارِحُ ») rattache « même s'il a mangé de l'impur » aux seuls œufs, et voit dans « لَوْ » le signal d'une divergence. Al-Ḥaṭṭāb se demande pourquoi Khalīl ne la signale pas aussi pour la sueur, alors qu'Ibn al-Ḥājib et d'autres la rapportent pour les deux ; peut-être est-elle plus forte pour les œufs. Le lait n'est pas cité, car le lait d'un animal suit sa chair (fiche 16b) ; mais Khalīl aurait dû signaler la divergence sur le lait de l'animal qui mange des immondices (جَلَّالَة, jallâla). Le mashhūr : ce lait est permis. De même, le miel des abeilles qui ont mangé une impureté est pur selon Mālik (rasm in kharajat du samāʿ de ʿĪsā), ce qui ressort aussi de la Mudawwana : « pas de mal à en nourrir les abeilles ».\n\nAl-Ḥaṭṭāb envisage aussi que la précision vise tout ce qui précède, depuis « le vivant ». Ibn Rushd : pas de divergence dans l'école sur la licéité de la viande du bétail et des oiseaux nourris d'impuretés ; la divergence porte sur leur sueur, leur lait et leur urine. Ibn al-Qāsim permet de manger les oiseaux qu'on attrape en leur faisant boire du vin ; pour le chevreau qui a tété une truie, il préfère attendre que cette nourriture ait quitté son ventre, mais ne voit pas de mal à le manger s'il est égorgé aussitôt ; Ibn Nāfiʿ dit de même. Al-Lakhmī rapporte pourtant deux avis : l'animal garde sa règle, ou l'impureté la change et tout ce qui sort de lui est impur ; il déduit l'impureté du lait de la brebis qui boit une eau impure, déduction qu'Ibn ʿArafa discute.\n\nPour la sueur, les œufs et le lait, la divergence est connue (pureté, impureté, karāha), même pour l'homme et le buveur de vin ; selon at-Tawḍīḥ, les savants rigoureux choisissent la pureté. Pour la salive, le mucus et les larmes, al-Ḥaṭṭāb n'a pas trouvé de divergence explicite.",
    aqwal: [
      { auteur: "Le commentateur (« الشَّارِحُ »)", avis: "« Même s'il a mangé de l'impur » ne vise que les œufs.", statut: "non_precise" },
      { auteur: "Mālik (samāʿ de ʿĪsā) ; sens apparent de la Mudawwana", avis: "Le miel des abeilles qui ont mangé une impureté est pur.", statut: "non_precise" },
      { auteur: "Ibn Rushd (al-Bayān, livre des sacrifices)", avis: "La viande du bétail et des oiseaux nourris d'impuretés est licite sans divergence ; on diverge sur leur sueur, leur lait et leur urine.", statut: "non_precise" },
      { auteur: "Ibn al-Qāsim (accepté par Ibn Rushd) ; Ibn Nāfiʿ de même", avis: "On peut manger l'oiseau attrapé en lui faisant boire du vin ; le chevreau qui a tété une truie : mieux vaut attendre, mais égorgé aussitôt, il se mange.", statut: "non_precise" },
      { auteur: "Al-Lakhmī", avis: "Deux avis : l'animal garde sa règle, ou l'impureté la change et tout ce qui sort de lui est impur ; sur ce second avis, on ne mange rien de lui tant que dure l'effet de cette nourriture.", statut: "non_precise" },
      { auteur: "Les savants rigoureux (at-Tawḍīḥ : ʿAbd al-Ḥaqq, al-Māzirī, Ibn Yūnus)", avis: "Le lait, les œufs et la sueur sont purs.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (déclaré mashhūr par al-Ḥaṭṭāb)", avis: "Le lait de la jallāla est permis.", statut: "mashhur" }
    ],
    muatamad: "Confirmé par al-Dardīr : la précision « vise le tout » (« رَاجِعٌ لِلْجَمِيعِ »). Al-Dasūqī : pour la sueur et les œufs, elle écarte la divergence de ceux qui les jugent impurs chez l'animal qui mange de l'impur ; pour le reste, elle écarte une simple supposition ; et « لَوْ » ne signale une divergence que le plus souvent (« وَكَوْنُ لَوْ يُرَدُّ بِهَا الْخِلَافُ فَهَذَا أَغْلَبِيٌّ »).",
    tarjih_hattab: "Al-Ḥaṭṭāb envisage que la précision vise tout ce qui précède. Il défend Khalīl contre deux objections : celle d'Ibn Farḥūn sur la sueur de l'ivrogne (Khalīl parle de la sueur en elle-même ; son impureté dans ce cas vient d'une cause extérieure) et celle d'al-Bisāṭī (Khalīl suit at-Tawḍīḥ, et la transformation est plus forte dans le lait, l'œuf et la sueur que dans la cendre d'un cadavre).",
    tanbihat: [
      "At-Tawḍīḥ : la divergence sur la sueur de l'ivrogne ne vaut que pendant l'ivresse ou près de la fin de celle-ci ; longtemps après, elle est pure sans divergence. Ibn Farḥūn objecte que la sueur nouvelle traverse l'ancienne, sauf s'il s'est lavé et a lavé son vêtement.",
      "Al-Bisāṭī : Khalīl déclare ici pure la sueur de l'ivrogne et l'œuf de la jallāla, et plus loin impures la cendre et la fumée d'une impureté, alors que tout repose sur la même question (une impureté dont les caractères changent devient-elle pure ?).",
      "Selon un récit d'Ibn al-Mawwāz, la prière du buveur de vin n'est pas valide tant que le vin est jugé rester dans son ventre (question traitée plus loin).",
      "Ibn Rushd dit les animaux purs tant qu'ils vivent, « s'ils n'usent pas d'impureté » ; Ibn Hārūn (rapporté par l'auteur d'al-Jamʿ) reproche à Ibn al-Ḥājib de ne pas l'avoir précisé pour la salive et le mucus : selon al-Ḥaṭṭāb, cela suppose une divergence, mais al-Bisāṭī rapporte un accord sur la sueur."
    ],
    divergences: [
      "Point à comparer — portée de « وَلَوْ أَكَلَ نَجِسًا ». Le commentateur : les œufs seulement (« جَعَلَهُ الشَّارِحُ رَاجَعَا لِلْبَيْضِ »). Al-Ḥaṭṭāb : cela peut viser tout ce qui précède (« وَيَحْتَمِلُ أَنْ يَرْجِعَ لِجَمِيعِ مَا تَقَدَّمَ »). Al-Dardīr tranche : « رَاجِعٌ لِلْجَمِيعِ », et al-Dasūqī l'explique."
    ],
    exemple: "Vos poules picorent des déchets et des immondices. Leurs œufs restent purs, et leur viande est licite sans divergence selon Ibn Rushd. Le lait d'une vache qui mange des immondices est permis selon le mashhūr.",
    erreurs_frequentes: [
      "Croire que l'œuf d'une poule qui mange des immondices est impur : il est pur.",
      "Croire que « وَلَوْ » signale toujours une divergence : al-Dasūqī dit que c'est seulement le plus souvent.",
      "Confondre la viande (licite sans divergence selon Ibn Rushd) et la sueur, le lait ou l'urine (objets de divergence)."
    ],
    termes: [
      { ar: "جَلَّالَة", translit: "jallâla", def: "Animal qui mange des immondices et des impuretés." },
      { ar: "تَخْرِيج", translit: "takhrîj", def: "Déduction d'un avis à partir d'un autre avis ou d'une règle de l'école." }
    ],
    quiz: [
      { q: "Selon al-Dardīr, à quoi se rapporte « même s'il a mangé de l'impur » ?",
        choix: ["Aux œufs seulement", "À la sueur seulement", "À tout ce qui précède", "Au lait seulement"],
        bonne: 2,
        explication: "« (وَلَوْ) (أَكَلَ) الْحَيُّ (نَجِسًا) رَاجِعٌ لِلْجَمِيعِ »." },
      { q: "Quel est le mashhūr pour le lait de l'animal qui mange des immondices (jallāla) ?",
        choix: ["Il est permis", "Il est impur", "Il est déconseillé", "Il est interdit"],
        bonne: 0,
        explication: "« وَالْمَشْهُورُ أَنَّ لَبَنَ الْجَلَّالَةِ مُبَاحٌ »." },
      { q: "Mise en situation : des abeilles se sont nourries d'un miel impur. Leur miel est-il pur selon Mālik ?",
        choix: ["Non", "Oui", "Seulement s'il est cuit", "Seulement après un an"],
        bonne: 1,
        explication: "« وَكَذَلِكَ النَّحْلُ إذَا أَكَلَتْ نَجَاسَةً فَعَسَلُهَا طَاهِرٌ عِنْدَ مَالِكٍ »." },
      { q: "Selon Ibn Rushd, sur quoi les malikites divergent-ils pour l'animal nourri d'impuretés ?",
        choix: ["Sur la licéité de sa viande", "Sur sa vie", "Sur ses os", "Sur sa sueur, son lait et son urine"],
        bonne: 3,
        explication: "« لَا اخْتِلَافَ فِي الْمَذْهَبِ أَنَّ أَكْلَ لُحُومِ الْمَاشِيَةِ … حَلَالٌ جَائِزٌ وَإِنَّمَا اخْتَلَفُوا فِي الْأَعْرَاقِ وَالْأَلْبَانِ وَالْأَبْوَالِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "92-93" },
    alertes: [
      "Corrigé (campagne de correction) : le texte imprimé porte « رَاجَعَا » ; la syntaxe impose « رَاجِعًا » (participe actif, second complément de « جَعَلَهُ »), et al-Dasūqī emploie le même mot avec les mêmes consonnes (Shamela 21604, p. 49 : « فَإِنَّهُ رَاجِعٌ إلَى الْبَيْضِ فَقَطْ »). Sans effet sur le sens (anomalie n° 66).",
      "Le statut « mashhūr » du lait de la jallāla est donné par al-Ḥaṭṭāb lui-même (« وَالْمَشْهُورُ ») ; la fiche l'attribue à l'avis, non à un auteur nommé.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-14",
    kitab: "tah", bab: "01", fasl: "02", ordre: 14,
    titre: "… sauf l'œuf gâté",
    titre_ar: "إِلَّا المَذِرَ",
    objectif: "Savoir quel œuf est impur et lequel reste pur.",
    matn: "إِلَّا الْمَذِرَ",
    regle_pratique: "L'œuf gâté (madhir) est impur : celui qui a pourri, ou qui est devenu sang, chair ou poussin mort ; l'œuf dont le jaune s'est mêlé au blanc sans pourrir reste pur, de même qu'un œuf avec une petite tache de sang.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl excepte des œufs purs « l'œuf gâté » (المَذِر, al-madhir). Al-Ḥaṭṭāb en fixe la prononciation (« بِفَتْحِ الْمِيمِ وَكَسْرِ الذَّالِ ») et le définit : l'œuf corrompu, qui a pourri, ou est devenu sang, chair ou poussin mort. An-Nawawī ajoute que le mot désigne aussi l'œuf dont le jaune s'est mêlé au blanc. Le texte ajoute que ce dernier est apparemment pur s'il n'a pas pourri ; l'auteur de cette phrase (al-Ḥaṭṭāb ou un auteur qu'il cite) n'est pas certain (voir les alertes).\n\nAdh-Dhakhīra (livre des aliments) : on trouve parfois une tache de sang au milieu du blanc ; selon la règle qui ne juge impur que le sang répandu, elle n'est pas impure ; la question a été discutée avec un groupe de savants, et rien d'autre n'est apparu.\n\nIbn Farḥūn rapporte des questions d'Ibn Qaddāḥ : on demande de laver l'œuf avant de le casser ; si on ne le fait pas, rien n'est dû. Dans l'abrégé des fatwas d'Ibn Rushd par Ibn ʿAbd ar-Rafīʿ at-Tūnusī, Ibn Rushd répond, au sujet de celui qui met des œufs dans un plat sans les laver alors qu'ils sont couverts de fientes : les laver est bien ; s'il ne le fait pas, il a mal agi, mais le plat n'est pas gâté. Al-Ḥaṭṭāb y voit la crainte que la poule soit une jallāla souillée par son urine, ou simplement le dégoût.",
    aqwal: [
      { auteur: "An-Nawawī", avis: "« Madhir » se dit aussi de l'œuf dont le jaune s'est mêlé au blanc.", statut: "non_precise" },
      { auteur: "Adh-Dhakhīra (al-Qarāfī)", avis: "La tache de sang au milieu du blanc n'est pas impure, d'après la règle du sang répandu.", statut: "non_precise" },
      { auteur: "Ibn Qaddāḥ (rapporté par Ibn Farḥūn)", avis: "On demande de laver l'œuf avant de le casser ; sinon, rien n'est dû.", statut: "non_precise" },
      { auteur: "Ibn Rushd (fatwa, abrégé d'Ibn ʿAbd ar-Rafīʿ)", avis: "Laver les œufs souillés de fientes est bien ; qui ne le fait pas a mal agi, mais le plat n'est pas gâté.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'œuf gâté — « ce qui a pourri, ou est devenu sang, chair ou poussin mort » — est impur ; quant à celui dont le jaune s'est mêlé au blanc sans pourrir, « ils ont jugé apparente sa pureté » (« وَأَمَّا مَا اخْتَلَطَ صُفَارُهُ بِبَيَاضِهِ مِنْ غَيْرِ عُفُونَةٍ فَاسْتَظْهَرُوا طَهَارَتَهُ »). Al-Dasūqī : la tache de sang est pure (d'après adh-Dhakhīra), et l'exception de l'œuf gâté ne vise que les œufs.",
    tarjih_hattab: null,
    tanbihat: [
      "Ibn Rushd, cité ailleurs dans ce passage (fiche 09) : « selon l'avis qui interdit de le manger », l'œuf gâté peut être vendu à qui l'emploie à autre chose que la nourriture, si l'on est sûr qu'il ne le revendra pas pour être mangé."
    ],
    divergences: [
      "Concordance — la tache de sang dans l'œuf. Al-Ḥaṭṭāb (d'après adh-Dhakhīra) parle d'une tache au milieu du blanc ; al-Dasūqī, d'après le même ouvrage, l'étend au jaune (« نُقْطَةُ دَمٍ فَمُقْتَضَى مُرَاعَاةِ السَّفْحِ فِي نَجَاسَةِ الدَّمِ الطَّهَارَةُ ») : les deux la jugent pure."
    ],
    exemple: "En cassant un œuf, vous voyez que le jaune s'est mélangé au blanc, mais l'œuf ne sent pas mauvais. Il est pur. S'il est pourri ou contient un poussin mort, il est impur.",
    erreurs_frequentes: [
      "Jeter comme impur un œuf avec une petite tache de sang : il est pur.",
      "Croire que l'œuf au jaune mélangé est forcément gâté : il ne l'est que s'il a pourri.",
      "Croire qu'un plat est gâté parce qu'on n'a pas lavé les œufs avant de les casser : selon Ibn Rushd, il ne l'est pas."
    ],
    termes: [
      { ar: "مَذِر", translit: "madhir", def: "Œuf gâté : pourri, ou devenu sang, chair ou poussin mort. Il est impur." },
      { ar: "سَفْح", translit: "safh", def: "Le fait que le sang soit répandu ; seul le sang répandu est impur." }
    ],
    quiz: [
      { q: "Lequel de ces œufs est impur ?",
        choix: ["L'œuf au jaune mêlé au blanc, sans odeur", "L'œuf avec une tache de sang", "L'œuf non lavé", "L'œuf qui contient un poussin mort"],
        bonne: 3,
        explication: "« وَهُوَ مَا عَفِنَ، أَوْ صَارَ دَمًا، أَوْ مُضْغَةً، أَوْ فَرْخًا مَيِّتًا »." },
      { q: "Mise en situation : vous cassez des œufs couverts de fientes dans un plat sans les laver. Selon Ibn Rushd…",
        choix: ["Le plat doit être jeté", "Vous avez mal agi, mais le plat n'est pas gâté", "Il n'y a rien à reprocher", "Le plat est déconseillé"],
        bonne: 1,
        explication: "« أَنَّ غَسْلَ الْبَيْضِ حَسَنٌ فَإِنْ لَمْ يَفْعَلْ فَقَدْ أَسَاءَ وَلَا يُفْسِدُ ذَلِكَ الطَّعَامَ »." },
      { q: "Pourquoi la tache de sang dans l'œuf n'est-elle pas impure, selon adh-Dhakhīra ?",
        choix: ["Parce que seul le sang répandu est impur", "Parce que l'œuf est cuit", "Parce qu'elle est petite", "Parce qu'elle vient d'une poule"],
        bonne: 0,
        explication: "« فَمُقْتَضَى مُرَاعَاةِ السَّفْحِ فِي نَجَاسَةِ الدَّمِ لَا تَكُونُ نَجِسَةً »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "93" },
    alertes: [
      "Corrigé : Mawāhib imprime « إلَّا الْمِذْرَ » (de même p. 90, « فِي الْمِذْرِ »), alors qu'al-Ḥaṭṭāb fixe lui-même la prononciation « بِفَتْحِ الْمِيمِ وَكَسْرِ الذَّالِ ». Al-Dardīr (Shamela 21604, p. 49 : « الْمَذِرَ بِذَالٍ مُعْجَمَةٍ مَكْسُورَةٍ ») et Minaḥ al-Jalīl (Shamela 21614, p. 36 : « إلَّا الْمَذِرَ ») portent « الْمَذِرَ ». La fiche lit « إِلَّا الْمَذِرَ » (anomalie n° 60).",
      "Précisé (campagne de correction) : la phrase « وَالظَّاهِرُ أَنَّ هَذَا الْأَخِيرَ طَاهِرٌ إذَا لَمْ يَحْصُلْ فِيهِ عَفَنٌ » se termine par « انْتَهَى », comme la citation d'an-Nawawī qui la précède : elle peut appartenir à un auteur cité plutôt qu'à al-Ḥaṭṭāb. Les témoins donnent la même règle sans nommer d'auteur : al-Kharashī (Shamela 91, p. 84 : « لَكِنَّ هَذَا الْأَخِيرَ طَاهِرٌ مَا لَمْ يَحْصُلْ فِيهِ عَفَنٌ ») et al-Dardīr, au pluriel (« فَاسْتَظْهَرُوا طَهَارَتَهُ »). La règle est attestée ; l'auteur reste non identifié, d'où « tarjih_hattab » : null (anomalie n° 67). Non bloquant.",
      "Le segment de Mawāhib n'a pas « ش » après la parenthèse (« ص (إلَّا الْمِذْرَ) : ») ; déjà signalé dans docs/sources/tah-01-segments.md.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-15",
    kitab: "tah", bab: "01", fasl: "02", ordre: 15,
    titre: "Ce qui sort après la mort",
    titre_ar: "الخَارِجُ بَعْدَ المَوْتِ",
    objectif: "Savoir quand ce qui sort d'un animal après sa mort est impur.",
    matn: "وَالْخَارِجُ بَعْدَ الْمَوْتِ",
    regle_pratique: "Ce qui sort d'un animal après sa mort (œuf, larmes, sueur, salive, mucus) est impur si son cadavre est impur et qu'il n'a pas été égorgé, même un œuf sec ; s'il a été égorgé, ou si son cadavre est pur (sauterelle, crocodile), c'est pur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : cette exception doit viser tous les produits cités avant. Ibn ʿAbd as-Salām lit ainsi Ibn al-Ḥājib (« les larmes, la sueur, la salive et le mucus d'un vivant sont purs ») : venant d'un cadavre, ils sont impurs ; d'un animal égorgé, purs ; d'un humain mort, leur règle dépend de la divergence sur la pureté du cadavre humain. Ibn ʿArafa dit de même : « comme l'endroit d'où ils viennent » (« كَمَحِلِّهِ »). Al-Bisāṭī, lui, réserve la phrase de Khalīl aux œufs, et rapporte que certains commentateurs l'étendent aux autres produits ; al-Ḥaṭṭāb répond qu'il n'y a là aucune difficulté.\n\nKhalīl ne distingue pas l'œuf frais de l'œuf sec sorti après la mort. L'œuf frais est impur par accord ; l'œuf sec aussi, selon Mālik, contre Ibn Nāfiʿ. Ibn Rushd (al-Bayān, livre des sacrifices), Ibn ʿArafa, Ibn Nājī et d'autres rapportent les deux avis. Ibn Farḥūn et Ibn Rāshid (al-Lubāb) ne citent que l'avis d'Ibn Nāfiʿ, laissant croire que c'est l'école ; al-Ḥaṭṭāb dit que ce n'est pas le cas.",
    aqwal: [
      { auteur: "Ibn ʿAbd as-Salām", avis: "Ces produits sont impurs s'ils viennent d'un cadavre, purs d'un animal égorgé ; de l'humain mort, selon la divergence sur sa pureté.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa", avis: "Larmes, sueur, mucus et crachat suivent l'endroit d'où ils viennent.", statut: "non_precise" },
      { auteur: "Al-Bisāṭī", avis: "La phrase de Khalīl ne vise que les œufs.", statut: "non_precise" },
      { auteur: "Mālik", avis: "L'œuf sec sorti après la mort est impur.", statut: "non_precise" },
      { auteur: "Ibn Nāfiʿ", avis: "L'œuf sec sorti après la mort est pur.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : ce qui sort après la mort est impur « si le cadavre de l'animal est impur et qu'il n'a pas été égorgé ; sinon, c'est pur, œuf ou autre » ; l'exception vise tout ce qui précède (« فَالِاسْتِثْنَاءُ فِي هَذَا رَاجِعٌ لِلْجَمِيعِ »). Al-Dasūqī : impur « même un œuf sec » ; pur s'il vient d'un animal égorgé, ou d'un animal dont le cadavre est pur, comme la sauterelle et le crocodile.",
    tarjih_hattab: "Al-Ḥaṭṭāb fait viser à l'exception tous les produits, et tient l'œuf sec pour impur selon Mālik, en écartant l'impression que l'avis d'Ibn Nāfiʿ serait l'école.",
    tanbihat: [
      "Ibn Farḥūn et Ibn Rāshid (al-Lubāb) ne rapportent que l'avis d'Ibn Nāfiʿ : al-Ḥaṭṭāb avertit que ce n'est pas l'avis de l'école."
    ],
    divergences: [
      "Concordance — portée de l'exception et œuf sec. Al-Ḥaṭṭāb (« يَنْبَغِي أَنْ يَعُودَ إلَى جَمِيعِ مَا تَقَدَّمَ مِنْ الْفَضَلَاتِ ») et al-Dardīr (« فَالِاسْتِثْنَاءُ فِي هَذَا رَاجِعٌ لِلْجَمِيعِ ») la font porter sur tout ; al-Dasūqī tient l'œuf sec pour impur (« وَلَوْ بَيْضًا يَابِسًا »), comme Mālik."
    ],
    exemple: "Vous trouvez un œuf dans une poule morte sans avoir été égorgée. Il est impur, même si sa coquille est dure. Si la poule avait été égorgée rituellement, l'œuf serait pur.",
    erreurs_frequentes: [
      "Croire que l'œuf à coquille dure trouvé dans une poule morte est pur : c'est l'avis d'Ibn Nāfiʿ, non celui de l'école selon al-Ḥaṭṭāb.",
      "Appliquer la règle aux animaux dont le cadavre est pur (sauterelle, poisson) : ce qui en sort reste pur."
    ],
    termes: [
      { ar: "فَضَلَات", translit: "fadalât", def: "Produits du corps : larmes, sueur, salive, mucus, etc." },
      { ar: "مُذَكَّى", translit: "moudhakkâ", def: "Animal abattu rituellement." }
    ],
    quiz: [
      { q: "L'œuf sec trouvé dans une poule morte non égorgée est-il pur ?",
        choix: ["Non, il est impur selon Mālik", "Oui, selon l'école", "Seulement s'il est lavé", "Seulement s'il est cuit"],
        bonne: 0,
        explication: "« وَأَمَّا الْيَابِسُ فَهُوَ قَوْلُ مَالِكٍ خِلَافًا لِابْنِ نَافِعٍ »." },
      { q: "Mise en situation : une sauterelle morte contient des œufs. Ces œufs sont-ils impurs ?",
        choix: ["Oui", "Seulement s'ils sont frais", "Non : le cadavre de la sauterelle est pur", "Seulement s'ils sont secs"],
        bonne: 2,
        explication: "Al-Dasūqī : « أَيْ وَإِلَّا بِأَنْ كَانَ خُرُوجُهُ مِمَّا مَيْتَتُهُ طَاهِرَةٌ كَالْجَرَادِ وَالتِّمْسَاحِ … فَلَا يَكُونُ نَجِسًا »." },
      { q: "Qui a laissé croire, selon al-Ḥaṭṭāb, que l'avis d'Ibn Nāfiʿ était celui de l'école ?",
        choix: ["Ibn Rushd et Ibn ʿArafa", "Ibn Nājī", "Mālik", "Ibn Farḥūn et Ibn Rāshid"],
        bonne: 3,
        explication: "« وَاقْتَصَرَ ابْنُ فَرْحُونٍ عَلَى قَوْلِ ابْنِ نَافِعٍ، وَكَذَلِكَ ابْنُ رَاشِدٍ فِي اللُّبَابِ فَأَوْهَمَ كَلَامُهُمَا أَنَّهُ الْمَذْهَبُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "93" },
    alertes: [
      "Précisé (campagne de correction) : Mawāhib vocalise le matn « وَالْخَارِجُ », comme al-Dardīr dans son commentaire suivi (p. 49). L'accusatif, coordonné à « الْمَذِرَ », est porté par Minaḥ al-Jalīl (Shamela 21614, p. 36 : « إلَّا الْمَذِرَ وَالْخَارِجَ بَعْدَ الْمَوْتِ ») et par al-Dardīr dans sa liste des exceptions (Shamela 21604, p. 51 : « إلَّا الْمَذِرَ وَالْخَارِجَ بَعْدَ الْمَوْتِ »). Al-Kharashī garde le nominatif et le construit comme une phrase nouvelle (Shamela 91, p. 84 : « أَيْ وَمِنْ النَّجَسِ الْخَارِجِ بَعْدَ الْمَوْت »). Deux constructions attestées, même règle (impur) ; la fiche garde Mawāhib (anomalie n° 68). Non bloquant.",
      "« وَلَعَلَّ قَوْلَهُ يُزِيلُ الْإِشْكَالَ مِنْ الْإِزَالَةِ » : al-Ḥaṭṭāb doute du sens de la phrase d'al-Bisāṭī ; la fiche n'en tire rien. Audit avancé : la phrase n'est reprise ni par Minaḥ al-Jalīl, ni par al-Kharashī, ni par al-Zurqānī, ni par al-Dasūqī ; non résolu, sans effet (anomalie n° 69). Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-16",
    kitab: "tah", bab: "01", fasl: "02", ordre: 16,
    titre: "Le lait humain, sauf celui d'un mort",
    titre_ar: "لَبَنُ الآدَمِيِّ",
    objectif: "Savoir que le lait humain est pur, et connaître la divergence sur le lait d'une personne morte.",
    matn: "وَلَبَنُ آدَمِيٍّ إلَّا الْمَيِّتَ",
    regle_pratique: "Le lait humain est pur, d'un homme ou d'une femme, même d'un mécréant ou d'une personne ivre ; Khalīl excepte celui d'une personne morte, mais al-Dardīr juge cette exception faible, car il tient le cadavre humain pour pur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "La Mudawwana (premier livre de la prière) dit : « le lait dans les mamelles d'une bête morte n'est pas licite ». Ibn Nājī : c'est un point d'accord, car le lait est souillé par son contenant ; sauf le lait d'une femme morte, objet d'une divergence : la Mudawwana, au livre de l'allaitement, le dit impur ; un autre avis, rapporté sans auteur, le dit pur.\n\nAl-Ḥaṭṭāb rappelle le propos d'Ibn ʿAbd as-Salām (fiche 15) : ce qui sort d'un humain mort (salive, mucus, larmes) dépend de la divergence sur la pureté du cadavre humain. Il renvoie à la question des parties détachées d'un vivant ou d'un mort, traitée plus loin.\n\nAl-Dardīr : le lait humain est pur, d'homme ou de femme, « même d'un mécréant, mort, ivre », car il se transforme en une chose bonne (« لِاسْتِحَالَتِهِ إلَى صَلَاحٍ ») ; l'exception de Khalīl (le lait du mort est impur, parce que son cadavre serait impur) est « faible ».",
    aqwal: [
      { auteur: "La Mudawwana (premier livre de la prière)", avis: "Le lait dans les mamelles d'une bête morte n'est pas licite.", statut: "non_precise" },
      { auteur: "Ibn Nājī", avis: "Point d'accord, car le lait est souillé par son contenant ; sauf le lait d'une femme morte, objet d'une divergence.", statut: "non_precise" },
      { auteur: "La Mudawwana (livre de l'allaitement)", avis: "Le lait d'une femme morte est impur.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (cité par Ibn Nājī)", avis: "Le lait d'une femme morte est pur.", statut: "non_precise" }
    ],
    muatamad: "Pour le lait d'un humain vivant : confirmé par al-Dardīr, il est pur. Pour celui d'une personne morte : al-Dardīr juge faible l'exception de Khalīl (« فَقَوْلُهُ: (إلَّا) الْآدَمِيُّ (الْمَيِّتُ) فَلَبَنُهُ نَجِسٌ لِأَنَّ مَيْتَتَهُ نَجِسَةٌ عَلَى مَا سَيَأْتِي ضَعِيفٌ ») et le tient pour pur ; al-Dasūqī explique seulement la raison de l'exception (le contenant impur). Le fondement, la pureté du cadavre humain, sera traité à la fiche tah-01-02-31.",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Dasūqī : le lait des djinns est comme le lait humain, non comme celui des bêtes, puisqu'on peut se marier avec eux et prier derrière eux."
    ],
    divergences: [
      "Divergence — lait d'une personne morte. Khalīl, avec la Mudawwana (livre de l'allaitement) : impur (« لِقَوْلِهَا فِي كِتَابِ الرَّضَاعِ بِالتَّنْجِيسِ ») ; un avis rapporté sans auteur par Ibn Nājī : pur (« وَقِيلَ: إنَّهُ طَاهِرٌ ») ; al-Ḥaṭṭāb rapporte la divergence sans trancher. Al-Dardīr : pur, l'exception de Khalīl étant « faible » (« ضَعِيفٌ »), car le cadavre humain est pur selon l'avis qu'il retient."
    ],
    exemple: "Une mère allaite son enfant ; une goutte de lait tombe sur son vêtement. Ce lait est pur : elle peut prier avec ce vêtement.",
    erreurs_frequentes: [
      "Croire que le lait humain est impur, ou qu'il faut laver le vêtement qu'il a touché : il est pur.",
      "Tenir l'exception du lait d'une morte pour l'avis retenu : al-Dardīr la juge faible."
    ],
    termes: [
      { ar: "لَبَن", translit: "laban", def: "Lait." },
      { ar: "آدَمِيّ", translit: "âdamî", def: "Être humain." },
      { ar: "اِسْتِحَالَة", translit: "istihâla", def: "Transformation d'une chose en une autre ; le lait se transforme en une chose bonne, d'où sa pureté selon al-Dardīr." }
    ],
    quiz: [
      { q: "Le lait d'une femme vivante est-il pur ?",
        choix: ["Non", "Oui", "Seulement si elle est musulmane", "Seulement pour son enfant"],
        bonne: 1,
        explication: "Al-Dardīr : « (لَبَنُ آدَمِيٍّ) ذَكَرٍ أَوْ أُنْثَى وَلَوْ كَافِرًا … لِاسْتِحَالَتِهِ إلَى صَلَاحٍ »." },
      { q: "Que pense al-Dardīr de l'exception de Khalīl (« sauf celui d'un mort ») ?",
        choix: ["Elle est faible", "Elle est l'avis retenu", "Elle est un consensus", "Elle ne concerne que les mécréants"],
        bonne: 0,
        explication: "« فَقَوْلُهُ: (إلَّا) الْآدَمِيُّ (الْمَيِّتُ) فَلَبَنُهُ نَجِسٌ … ضَعِيفٌ »." },
      { q: "Selon Ibn Nājī, pourquoi le lait dans les mamelles d'une bête morte est-il impur ?",
        choix: ["Parce qu'il est aigre", "Parce que la bête est interdite", "Parce qu'il est souillé par son contenant", "Aucune des réponses"],
        bonne: 2,
        explication: "« مَا ذَكَرَهُ مُتَّفِقٌ عَلَيْهِ؛ لِأَنَّهُ يَنْجُسُ بِالْوِعَاءِ »." },
      { q: "Mise en situation : un élève dit « le lait d'une femme morte est impur par consensus ». Que lui répondre ?",
        choix: ["Il a raison", "Ce lait est toujours déconseillé", "Il n'y a aucun avis sur ce point", "Il y a une divergence : la Mudawwana le dit impur, un autre avis pur, et al-Dardīr le tient pour pur"],
        bonne: 3,
        explication: "Ibn Nājī : « فَفِيهِ خِلَافٌ » ; al-Dardīr juge l'exception faible." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "93" },
    alertes: [
      "Corrigé : Mawāhib vocalise « إلَّا الْمَيِّتِ » (génitif) ; après « إلَّا » dans une phrase affirmative complète, la syntaxe demande l'accusatif, que porte Minaḥ al-Jalīl (Shamela 21614, p. 36 : « وَلَبَنُ آدَمِيٍّ إلَّا الْمَيِّتَ » et « إلَّا الْآدَمِيَّ الْمَيِّتَ »). La fiche lit « إلَّا الْمَيِّتَ » (anomalie n° 61). Al-Dardīr, qui récrit la phrase (« إلَّا الْآدَمِيُّ الْمَيِّتُ فَلَبَنُهُ نَجِسٌ »), vocalise autrement.",
      "La formule d'al-Dardīr « وَلَوْ كَافِرًا مَيِّتًا سَكْرَانَ » est suivie de son jugement sur l'exception de Khalīl ; Minaḥ al-Jalīl, qui suit souvent al-Dardīr, a seulement « وَلَوْ سَكْرَانَ » et garde l'exception. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50 (Shamela 21604, page 49)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-16b",
    kitab: "tah", bab: "01", fasl: "02", ordre: 16,
    titre: "Le lait des autres animaux suit leur chair",
    titre_ar: "لَبَنُ غَيْرِ الآدَمِيِّ تَابِعٌ",
    objectif: "Savoir si le lait d'un animal est pur selon que sa chair est licite, déconseillée ou interdite.",
    matn: "وَلَبَنُ غَيْرِهِ تَابِعٌ",
    regle_pratique: "Le lait d'un animal suit sa chair : il est pur si l'animal est licite, impur s'il est interdit à la consommation, et déconseillé (mais pur) s'il est déconseillé.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : le lait des animaux autres que l'humain est « pur venant de l'animal licite, impur venant de l'interdit, et déconseillé venant du déconseillé » (« فَهُوَ طَاهِرٌ مِنْ الْمُبَاحِ وَنَجِسٌ مِنْ الْمُحَرَّمِ وَمَكْرُوهٌ مِنْ الْمَكْرُوهِ »). Sa karāha ne l'empêche pas d'être pur, comme le signale Ibn ʿAbd as-Salām à propos du sens de « permis » et de « déconseillé ».\n\nAl-Dardīr : ce lait suit la chair de l'animal dans sa pureté après l'égorgement rituel. Si la chair est pure après l'égorgement (animal licite ou déconseillé), le lait est pur, mais le lait de l'animal déconseillé est déconseillé à boire ; si la chair est impure (animal interdit), le lait est impur.",
    aqwal: [
      { auteur: "Ibn ʿAbd as-Salām", avis: "La karāha d'un lait ne lui ôte pas sa pureté.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « tant que sa chair est pure après l'égorgement — l'animal licite et le déconseillé —, son lait est pur, mais le lait du déconseillé est déconseillé à boire … ; si sa chair est impure après l'égorgement — l'animal interdit —, son lait est impur » (« فَإِنْ كَانَ لَحْمُهُ طَاهِرًا بَعْدَهَا وَهُوَ الْمُبَاحُ وَالْمَكْرُوهُ فَلَبَنُهُ طَاهِرٌ غَيْرَ أَنَّ لَبَنَ الْمَكْرُوهِ يُكْرَهُ شُرْبُهُ »).",
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb (fiche 09) : le lait de jument est interdit, peu ou beaucoup, selon le mashhūr, car la viande de cheval est interdite.",
      "Ibn Rushd (fiche 11) fait suivre aussi la sueur à la chair ; pour la sueur, al-Ḥaṭṭāb ne le suit pas."
    ],
    divergences: [
      "Complément — prier avec un vêtement touché par le lait d'un animal déconseillé. Al-Dasūqī : c'est permis, selon Ibn Daqīq al-ʿĪd, « et c'est l'avis retenu, contre celui qui le dit déconseillé » (« وَتَجُوزُ الصَّلَاةُ بِلَبَنِ مَكْرُوهِ الْأَكْلِ عَلَى مَا قَالَهُ ابْنُ دَقِيقِ الْعِيدِ وَهُوَ الْمُعْتَمَدُ خِلَافًا لِمَنْ قَالَ بِالْكَرَاهَةِ »). Ce passage d'al-Ḥaṭṭāb n'en parle pas."
    ],
    exemple: "Du lait de chèvre tombe sur votre vêtement : il est pur, car la chèvre est licite. Le lait d'un animal interdit à la consommation, lui, serait impur.",
    erreurs_frequentes: [
      "Croire que le lait d'un animal déconseillé est impur : il est pur, seulement déconseillé à boire.",
      "Appliquer au lait humain la règle des animaux : le lait humain est pur (fiche 16)."
    ],
    termes: [
      { ar: "تَابِع", translit: "tâbiʿ", def: "Qui suit : le lait d'un animal suit la règle de sa chair." },
      { ar: "مُبَاح", translit: "moubâh", def: "Permis ; ici, l'animal licite à la consommation." },
      { ar: "مَكْرُوه", translit: "makroûh", def: "Déconseillé ; ici, l'animal dont la consommation est déconseillée." }
    ],
    quiz: [
      { q: "Le lait d'un animal interdit à la consommation est…",
        choix: ["Pur", "Déconseillé", "Pur s'il est bouilli", "Impur"],
        bonne: 3,
        explication: "« وَنَجِسٌ مِنْ الْمُحَرَّمِ »." },
      { q: "Le lait d'un animal déconseillé à la consommation est-il impur ?",
        choix: ["Non : il est pur, seulement déconseillé à boire", "Oui", "Seulement frais", "Seulement s'il est aigre"],
        bonne: 0,
        explication: "« وَكَرَاهَتُهُ لَا تُخْرِجُهُ عَنْ كَوْنِهِ طَاهِرًا » ; al-Dardīr : « غَيْرَ أَنَّ لَبَنَ الْمَكْرُوهِ يُكْرَهُ شُرْبُهُ »." },
      { q: "Mise en situation : votre vêtement est taché du lait d'un animal déconseillé. Selon al-Dasūqī, pouvez-vous prier avec ?",
        choix: ["Non", "Oui, après l'avoir lavé seulement", "Oui : c'est l'avis retenu (Ibn Daqīq al-ʿĪd)", "Seulement si la tache est petite"],
        bonne: 2,
        explication: "« وَتَجُوزُ الصَّلَاةُ بِلَبَنِ مَكْرُوهِ الْأَكْلِ … وَهُوَ الْمُعْتَمَدُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "93-94" },
    alertes: [
      "Segment absent du squelette : dans Mawāhib, la marque « ص » termine la page 92 (Shamela 569) et le segment « وَلَبَنُ غَيْرِهِ تَابِعٌ)ش » ouvre la page 93, sans parenthèse ouvrante ; l'extraction du 2026-11-02 l'a donc manqué. Le Mukhtaṣar seul (Shamela 11355, p. 5) et Minaḥ al-Jalīl (Shamela 21614, p. 37) portent bien ce segment. Il reçoit l'identifiant tah-01-02-16b pour ne pas renuméroter les masāʾil suivantes (anomalie n° 62).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 50–51 (Shamela 21604, pages 49–50)."
    ],
    verification: "verifie"
  }

]);
