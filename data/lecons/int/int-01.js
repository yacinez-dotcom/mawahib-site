/* Données — Module 0, bāb 01 (int-01) : la langue technique du Mukhtaṣar — v1.6
   Source unique : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1, p. 33–42
   (texte lu sur shamela.ws/book/569, pages 32 à 41). Matn contrôlé sur le Mukhtaṣar seul (shamela.ws/book/11355/1).
   Fiches de type « terme » (contrat §5). Unité 1 : int-01-01-01, -02, -03a à -03d. Unité 2 : -04a à -08 et synthèse int-01-01-syn.
   Unité 3 : faṣl int-01-02 (« تَكْمِيلٌ » d'al-Ḥaṭṭāb, sans matn : champ « nass », contrat v1.13), fiches -01 à -06.
   Unité 4 : fin du faṣl int-01-02, fiches -07a à -11 et synthèse int-01-02-syn.
   v1.4 : campagne de correction des anomalies (seconds témoins), voir docs/verifications/campagne-corrections.md.
   v1.5 : quiz — position de la bonne réponse redistribuée au hasard (A–D équilibrés) ; questions, choix et explications inchangés.
   v1.6 : int-01-01-03c — divergence sur la date de décès d'Ibn Rushd placée dans « divergences » (décision n° 9) ; la date de 530 est rattachée à al-Dasūqī (Ḥāshiya), non à al-Dardīr. */
App.data.ajouterFiches([

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-01",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 1,
    titre: "« Fîhâ » : le renvoi à la Mudawwana",
    titre_ar: "الإِشَارَةُ بِـ« فِيهَا » إِلَى المُدَوَّنَةِ",
    objectif: "Reconnaître quand Khalīl cite la Mudawwana, et savoir pourquoi il le fait le plus souvent.",
    matn: "فَأَجَبْتُ سُؤَالَهُمْ بَعْدَ الِاسْتِخَارَةِ مُشِيرًا بِفِيهَا لِلْمُدَوَّنَةِ",
    regle_pratique: "Quand Khalīl écrit « فِيهَا » (« dans elle »), ou emploie un pronom féminin sans antécédent comme dans « مِنْهَا » ou « ظَاهِرُهَا », il renvoie à la Mudawwana (المُدَوَّنَة).",
    explication: "Khalīl annonce qu'il désigne la Mudawwana par le mot « فِيهَا ». Al-Ḥaṭṭāb précise : il s'agit de tout mot dont l'une des deux parties est un pronom féminin de troisième personne. Ce pronom peut être écrit, comme dans « مِنْهَا », « فِيهَا » ou « ظَاهِرُهَا ». Il peut aussi être sous-entendu dans un verbe.\n\nCe pronom renvoie à la Mudawwana sans qu'elle ait été nommée avant. La raison : elle est très connue des savants de l'école.\n\nAl-Ḥaṭṭāb retrace son origine. Asad ibn al-Furāt a recueilli les réponses d'Ibn al-Qāsim, tous deux compagnons de Mālik. Ibn al-Qāsim répondait par les paroles de Mālik qu'il avait entendues ou qui lui avaient été rapportées, ou par analogie avec elles. Ce recueil s'appelait « al-Asadiyya ». Saḥnūn l'a ensuite réentendu auprès d'Ibn al-Qāsim et y a corrigé de nombreux points sur lesquels Ibn al-Qāsim était revenu. Saḥnūn l'a classé par chapitres et y a ajouté des traditions et des avis de grands compagnons de Mālik. Il est mort avant d'avoir achevé ce travail. On l'appelle aussi « la mère » (الأُمّ).\n\nPlusieurs savants l'ont abrégée, dont Ibn Abī Zayd et Ibn Abī Zamanīn, puis al-Barādhiʿī. L'abrégé d'al-Barādhiʿī, at-Tahdhīb (التَّهْذِيب), est si étudié que beaucoup lui donnent le nom de « Mudawwana ». Pour al-Ḥaṭṭāb, la Mudawwana est la base de l'école et sa référence principale.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Khalīl renvoie tantôt à la Mudawwana originale (الأُمّ), tantôt à son abrégé at-Tahdhīb (التَّهْذِيب).",
      "Selon al-Bisāṭī, cité par al-Ḥaṭṭāb, il est probable que Khalīl possédait seulement certaines parties de la Mudawwana originale, et non sa totalité.",
      "Selon al-Ḥaṭṭāb, Khalīl cite le plus souvent la Mudawwana dans deux cas : quand son contenu s'écarte de l'avis qu'il a retenu, ou quand ce contenu pose une difficulté."
    ],
    divergences: [],
    exemple: "Dans une masʾala, vous lisez « وَفِيهَا … ». Khalīl vous indique ce que dit la Mudawwana sur ce point. Le plus souvent, il la cite parce qu'elle s'écarte de l'avis qu'il vient de retenir, ou parce que son contenu pose difficulté. Lisez donc cette phrase comme une précision ou une réserve, et non comme la règle principale.",
    erreurs_frequentes: [
      "Comprendre « فِيهَا » comme « dans cette question » : chez Khalīl, le pronom féminin sans antécédent désigne la Mudawwana.",
      "Prendre toute mention de la Mudawwana pour l'avis retenu par Khalīl : selon al-Ḥaṭṭāb, il la cite surtout quand elle s'écarte de ce qu'il a retenu, ou quand elle pose difficulté."
    ],
    termes: [
      { ar: "المُدَوَّنَة", translit: "al-moudawwana", def: "Recueil fondateur de l'école malikite : réponses d'Ibn al-Qāsim fondées sur l'enseignement de Mālik, recueillies par Asad ibn al-Furāt puis revues et ordonnées par Saḥnūn. Al-Ḥaṭṭāb la dit « base de l'école »." },
      { ar: "الأُمّ", translit: "al-oumm", def: "« La mère » : nom de la Mudawwana originale, par opposition à ses abrégés." },
      { ar: "التَّهْذِيب", translit: "at-tahdhîb", def: "Abrégé de la Mudawwana par Abū Saʿīd al-Barādhiʿī ; beaucoup l'appellent simplement « la Mudawwana »." }
    ],
    quiz: [
      { q: "Dans le Mukhtaṣar, que désigne le mot « فِيهَا » ?",
        choix: ["La Mudawwana", "L'avis le plus répandu", "Le chapitre en cours", "Le Muwaṭṭaʾ de Mālik"],
        bonne: 0,
        explication: "Khalīl annonce lui-même qu'il désigne la Mudawwana par « فِيهَا »." },
      { q: "Mise en situation : vous lisez « … وَظَاهِرُهَا … ». À quoi renvoie le pronom « هَا » ?",
        choix: ["À la règle précédente", "À la Mudawwana", "À l'école malikite", "À la question traitée"],
        bonne: 1,
        explication: "Un pronom féminin sans antécédent renvoie à la Mudawwana, en raison de sa notoriété dans l'école." },
      { q: "Selon al-Ḥaṭṭāb, dans quel cas Khalīl cite-t-il le plus souvent la Mudawwana ?",
        choix: ["Quand son contenu s'écarte de l'avis retenu ou pose difficulté", "Pour citer un hadith", "Pour réfuter Mālik", "Pour donner l'avis qu'il retient"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb écrit que Khalīl la cite surtout parce que son contenu diverge de ce qu'il a retenu, ou parce qu'il pose difficulté." },
      { q: "Quel abrégé de la Mudawwana Khalīl vise-t-il parfois ?",
        choix: ["At-Tabṣira d'al-Lakhmī", "Al-Bayān d'Ibn Rushd", "L'ouvrage d'Ibn Yūnus sur les questions de la Mudawwana", "At-Tahdhīb d'al-Barādhiʿī"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb précise que Khalīl vise tantôt la Mudawwana originale (الأُمّ), tantôt at-Tahdhīb." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "33-34" },
    alertes: [
      "Corrigé (campagne de correction) : la fin de « فَأَجَبْت », non vocalisée dans l'édition, est complétée en « فَأَجَبْتُ » (1re personne : c'est Khalīl qui parle). Le Mukhtaṣar seul (Shamela 11355, p. 1) porte les mêmes consonnes.",
      "Confirmé (campagne de correction) : l'édition vocalise les exemples « رَوَيْت / حَمَلْت / قَيَّدْت » à la 1re personne, alors qu'il s'agit d'un pronom féminin de 3e personne : Minaḥ al-Jalīl (Shamela 21614, p. 11) parle de « ضمير نحو حملت وأولت وقيدت », et al-Dasūqī (Shamela 21604, p. 20) de « كل ضمير مؤنث غائب ». La vocalisation de l'édition est donc fautive ; les exemples ne sont pas repris dans la fiche. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-02",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 2,
    titre: "« Ta'wîlân » : les lectures divergentes de la Mudawwana",
    titre_ar: "الإِشَارَةُ بِـ« تَأْوِيلَانِ » إِلَى اخْتِلَافِ شُرَّاحِ المُدَوَّنَةِ",
    objectif: "Comprendre ce que signalent « تَأْوِيلَانِ » et « تَأْوِيلَاتٌ » dans le Mukhtaṣar.",
    matn: "وَبِـ«أَوَّل» إلَى اخْتِلَافِ شَارِحِيهَا فِي فَهْمِهَا",
    regle_pratique: "Quand Khalīl emploie un mot de la racine de « تَأْوِيل », comme « تَأْوِيلَانِ » ou « تَأْوِيلَاتٌ », il signale que les commentateurs de la Mudawwana ont compris son texte de façons différentes.",
    explication: "Khalīl annonce qu'un mot de cette racine signale une divergence entre les commentateurs de la Mudawwana sur la façon de la comprendre.\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique que Khalīl vise la racine (مَادَّة) entière. Elle englobe ainsi « تَأْوِيلَانِ » (deux interprétations) et « تَأْوِيلَاتٌ » (plusieurs interprétations). Selon lui, cette divergence porte sur les manières de comprendre les mots du livre, « et non sur des opinions quant à une règle, qui compteraient alors comme des avis » (« وَلَيْسَ فِي آرَاءٍ فِي الْحَمْلِ عَلَى حُكْمٍ مِنْ الْأَحْكَامِ فَتُعَدُّ أَقْوَالًا »).\n\nAl-Ḥaṭṭāb ajoute deux précisions. D'abord, ces interprétations correspondent parfois à de véritables avis (أَقْوَال) dans la question : chaque commentateur a lu la Mudawwana selon l'un d'eux. Il annonce qu'il le signalera à chaque occasion. Ensuite, quand l'une des interprétations correspond à l'avis le plus répandu (مَشْهُور), Khalīl la place en premier, puis ajoute l'autre.\n\nEnfin, au sens strict, le تَأْوِيل consiste à faire sortir un mot de son sens apparent. Khalīl emploie pourtant ce terme aussi pour une lecture qui garde le sens apparent. Al-Ḥaṭṭāb y voit un usage par extension (تَغْلِيب).",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Les « تَأْوِيلَات » peuvent correspondre à de véritables avis dans la question ; al-Ḥaṭṭāb annonce qu'il le signalera à chaque occasion.",
      "Quand l'une des interprétations correspond au mashhūr, Khalīl la place en premier et ajoute la seconde ensuite.",
      "Khalīl appelle « تَأْوِيل » aussi bien une lecture qui s'écarte du sens apparent qu'une lecture qui le garde : c'est un usage par extension (تَغْلِيب)."
    ],
    divergences: [],
    exemple: "Une masʾala se termine par « … تَأْوِيلَانِ ». Comprenez : la Mudawwana a été lue de deux façons par ses commentateurs. Si l'une de ces deux lectures correspond au mashhūr, c'est elle que Khalīl a placée en premier.",
    erreurs_frequentes: [
      "Confondre « تَأْوِيلَانِ » et « قَوْلَانِ » : les تَأْوِيلَات portent d'abord sur la compréhension du texte de la Mudawwana par ses commentateurs.",
      "Croire que la première interprétation citée est toujours le mashhūr : le texte dit seulement que, lorsqu'une interprétation correspond au mashhūr, Khalīl la place en premier."
    ],
    termes: [
      { ar: "تَأْوِيل", translit: "ta'wîl", def: "Interprétation. Au sens strict : faire sortir un mot de son sens apparent. Chez Khalīl : toute lecture du texte de la Mudawwana proposée par ses commentateurs." },
      { ar: "تَأْوِيلَانِ", translit: "ta'wîlâni", def: "« Deux interprétations » : deux façons dont les commentateurs ont compris un passage de la Mudawwana." },
      { ar: "تَأْوِيلَاتٌ", translit: "ta'wîlâtoun", def: "« Des interprétations » : plus de deux lectures d'un passage de la Mudawwana par ses commentateurs." },
      { ar: "مَادَّة", translit: "mâdda", def: "Racine : ensemble des mots formés sur les mêmes lettres de base." },
      { ar: "مَشْهُور", translit: "machhoûr", def: "L'avis le plus répandu dans l'école." },
      { ar: "تَغْلِيب", translit: "taghlîb", def: "Usage par extension : employer un même mot pour des cas voisins." }
    ],
    quiz: [
      { q: "Que signale « تَأْوِيلَانِ » dans le Mukhtaṣar ?",
        choix: ["Deux conditions de validité", "Deux façons dont les commentateurs ont compris la Mudawwana", "Deux hadiths contradictoires", "Deux avis de Mālik"],
        bonne: 1,
        explication: "Khalīl annonce que ce mot signale une divergence entre les commentateurs de la Mudawwana sur la façon de la comprendre." },
      { q: "Mise en situation : une masʾala se termine par « … تَأْوِيلَاتٌ ». Que comprenez-vous ?",
        choix: ["La question n'a pas de réponse", "Khalīl donne son avis personnel", "Les commentateurs ont lu la Mudawwana de plus de deux façons", "Il s'agit d'un avis isolé"],
        bonne: 2,
        explication: "« تَأْوِيلَاتٌ » est le pluriel : plusieurs lectures de la Mudawwana par ses commentateurs." },
      { q: "Quand l'une des interprétations correspond au mashhūr, où Khalīl la place-t-il ?",
        choix: ["Dans une note à part", "En premier", "En dernier", "Il ne la cite pas"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : Khalīl place en premier l'interprétation qui correspond au mashhūr, puis ajoute l'autre." },
      { q: "Selon Ibn Ghāzī, pourquoi Khalīl vise-t-il toute la racine plutôt qu'un seul mot ?",
        choix: ["Pour désigner Ibn Rushd", "Pour signaler un avis faible", "Pour abréger le texte", "Pour englober تَأْوِيلَانِ et تَأْوِيلَاتٌ"],
        bonne: 3,
        explication: "Ibn Ghāzī explique que viser la racine permet d'englober les formes تَأْوِيلَانِ et تَأْوِيلَاتٌ." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "34" },
    alertes: [
      "Corrigé (campagne de correction) : l'édition de Mawāhib vocalise « وَبِأَوَّلٍ ». Le Mukhtaṣar seul (Shamela 11355, p. 1) écrit le mot entre guillemets (« وبـ\"أول\" ») et Ibn Ghāzī (Shifāʾ al-Ghalīl, Shamela 14605, p. 7) explique « أي ومشيرا بمادة أول » : c'est un mot cité, qui désigne la racine. Le matn est rendu « وَبِـ«أَوَّل» » ; la voyelle finale d'un mot cité n'est pas fixée par les témoins. Non bloquant.",
      "Corrigé (campagne de correction) : l'édition porte « وَلَيْسَ فِي أَدَاءً فِي الْحَمْلِ … » ; Ibn Ghāzī lui-même (Shifāʾ al-Ghalīl, Shamela 14605, p. 8) a « وليس في آراء في الحمل على حكم من الأحكام فتعد أقوالا ». La phrase, lue « آرَاءٍ », est maintenant traduite dans l'explication.",
      "Sens confirmé (campagne de correction) : l'édition porte « إِخْرَاجُ اللَّفْظِ عَلَى ظَاهِرِهِ » ; Minaḥ al-Jalīl (Shamela 21614, p. 11) définit le ta'wīl comme « صرف اللفظ عن المعنى الظاهر منه إلى غيره ». La fiche retient le sens « faire sortir le mot de son sens apparent » (« عَنْ »). Le texte exact de Mawāhib n'a pas d'autre témoin. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-03a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 3,
    titre: "« Ikhtiyâr » : le choix d'al-Lakhmī",
    titre_ar: "الإِشَارَةُ بِمَادَّةِ الِاخْتِيَارِ إِلَى اللَّخْمِيِّ",
    objectif: "Repérer un choix d'al-Lakhmī dans le Mukhtaṣar et distinguer la forme verbale de la forme nominale.",
    matn: "وَبِالِاخْتِيَارِ لِلَّخْمِيِّ لَكِنْ إنْ كَانَ بِصِيغَةِ الْفِعْلِ فَذَلِكَ لِاخْتِيَارِهِ هُوَ فِي نَفْسِهِ وَبِالِاسْمِ فَذَلِكَ لِاخْتِيَارِهِ مِنْ الْخِلَافِ",
    regle_pratique: "Un mot de la racine de « اِخْتِيَار » renvoie à al-Lakhmī : à la forme nominale (« المُخْتَار »), il a choisi parmi des avis déjà transmis ; à la forme verbale (« اُخْتِيرَ »), c'est un avis qu'il a formé lui-même.",
    explication: "Khalīl réserve la racine de « اِخْتِيَار » (choix) à al-Lakhmī. Il distingue deux formes.\n\nLa forme nominale, comme « المُخْتَار » ou « الِاخْتِيَار », signale un choix d'al-Lakhmī parmi les avis divergents de ceux qui l'ont précédé. La forme verbale, comme « اِخْتَارَ » ou « اُخْتِيرَ », signale un avis qu'il a formé lui-même.\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique cette répartition. Le verbe exprime ce qui est nouveau (حُدُوث) ; il convient donc à un avis nouveau. Le nom exprime ce qui est établi (ثُبُوت) ; il convient donc à un choix parmi des avis existants. Khalīl a désigné nommément quatre savants parce qu'ils exerçaient beaucoup ce travail de choix. Il a commencé par al-Lakhmī, le plus audacieux d'entre eux, et lui a réservé la racine de « اِخْتِيَار ».\n\nAl-Lakhmī, c'est Abū l-Ḥasan ʿAlī ibn Muḥammad ar-Rabaʿī. Il s'est établi à Sfax et a étudié notamment auprès d'Ibn Muḥriz et d'Abū Isḥāq at-Tūnusī. Il est l'auteur d'at-Tabṣira, un grand commentaire suivant la Mudawwana. Il est mort à Sfax en 478 de l'hégire.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Khalīl cite le choix de ces savants tantôt parce qu'il s'écarte de l'avis qu'il a retenu, tantôt parce que c'est l'avis le plus fort (رَاجِح). C'est le cas quand il ne mentionne aucun autre avis.",
      "Il procède de même pour les choix d'autres savants, signalés par « صُحِّحَ », « الأَصَحّ » ou « اُسْتُحْسِنَ ».",
      "Les notices sur ces quatre savants viennent pour l'essentiel d'Ibn Farḥūn, précise al-Ḥaṭṭāb."
    ],
    divergences: [],
    exemple: "Vous lisez « … وَاخْتِيرَ … » : c'est un avis qu'al-Lakhmī a formé lui-même. Si vous lisez « … وَالْمُخْتَارُ … », al-Lakhmī a choisi l'un des avis transmis avant lui.",
    erreurs_frequentes: [
      "Croire que « المُخْتَار » désigne l'avis retenu par Khalīl lui-même : chez lui, ce mot renvoie à un choix d'al-Lakhmī.",
      "Confondre la forme verbale (avis propre d'al-Lakhmī) et la forme nominale (choix parmi des avis existants)."
    ],
    termes: [
      { ar: "اِخْتِيَار", translit: "ikhtiyâr", def: "Choix. Chez Khalīl, la racine de ce mot renvoie aux choix d'al-Lakhmī." },
      { ar: "المُخْتَار", translit: "al-moukhtâr", def: "Forme nominale : choix d'al-Lakhmī parmi des avis déjà transmis." },
      { ar: "اُخْتِيرَ", translit: "oukhtîra", def: "Forme verbale : avis qu'al-Lakhmī a formé lui-même." },
      { ar: "حُدُوث", translit: "houdoûth", def: "Le fait d'être nouveau ; sens exprimé par le verbe." },
      { ar: "ثُبُوت", translit: "thouboût", def: "Le fait d'être établi ; sens exprimé par le nom." },
      { ar: "رَاجِح", translit: "râjih", def: "L'avis le plus fort par ses preuves." }
    ],
    quiz: [
      { q: "À quel savant renvoie la racine de « اِخْتِيَار » dans le Mukhtaṣar ?",
        choix: ["Ibn Rushd", "Al-Māzirī", "Al-Lakhmī", "Ibn Yūnus"],
        bonne: 2,
        explication: "Khalīl réserve la racine de « اِخْتِيَار » à al-Lakhmī." },
      { q: "Mise en situation : vous lisez « … وَاخْتِيرَ … ». Que comprenez-vous ?",
        choix: ["C'est l'avis de Mālik", "C'est l'avis retenu par toute l'école", "Al-Lakhmī a choisi parmi des avis existants", "C'est un avis qu'al-Lakhmī a formé lui-même"],
        bonne: 3,
        explication: "La forme verbale signale un avis propre d'al-Lakhmī." },
      { q: "Et si vous lisez « … وَالْمُخْتَارُ … » ?",
        choix: ["C'est l'avis le plus répandu", "Al-Lakhmī a choisi parmi des avis déjà transmis", "C'est le choix d'Ibn Rushd", "Al-Lakhmī donne un avis nouveau"],
        bonne: 1,
        explication: "La forme nominale signale un choix d'al-Lakhmī parmi les avis divergents de ses prédécesseurs." },
      { q: "Selon Ibn Ghāzī, pourquoi la forme verbale indique-t-elle un avis personnel ?",
        choix: ["Parce que le verbe est plus court", "Parce qu'al-Lakhmī écrivait au passé", "Parce que le verbe exprime ce qui est nouveau", "Sans raison particulière"],
        bonne: 2,
        explication: "Le verbe exprime ce qui est nouveau (حُدُوث) ; le nom exprime ce qui est établi (ثُبُوت)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "34-35" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-03b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 3,
    titre: "« Tarjîh » : le choix d'Ibn Yūnus",
    titre_ar: "الإِشَارَةُ بِمَادَّةِ التَّرْجِيحِ إِلَى ابْنِ يُونُسَ",
    objectif: "Repérer un choix d'Ibn Yūnus dans le Mukhtaṣar et distinguer ses deux formes.",
    matn: "وَبِالتَّرْجِيحِ لِابْنِ يُونُسَ كَذَلِكَ",
    regle_pratique: "Un mot de la racine de « تَرْجِيح » renvoie à Ibn Yūnus : à la forme nominale (« الأَرْجَح », « المُرَجَّح »), il a choisi parmi des avis déjà transmis ; à la forme verbale (« رُجِّحَ »), c'est un avis qu'il a formé lui-même, ce qui est rare.",
    explication: "Khalīl réserve la racine de « تَرْجِيح » (faire pencher la balance vers un avis) à Ibn Yūnus. La règle des deux formes est la même que pour al-Lakhmī.\n\nLa forme nominale, comme « الأَرْجَح » ou « المُرَجَّح », signale un choix d'Ibn Yūnus parmi les avis divergents de ceux qui l'ont précédé. La forme verbale, « رَجَّحَ » à la voix active ou « رُجِّحَ » à la voix passive, signale un avis qu'il a formé lui-même. Al-Ḥaṭṭāb précise que ce second cas est rare.\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique ce choix de racine. L'essentiel de l'effort d'Ibn Yūnus consiste à pencher vers certains avis de ses prédécesseurs. Ce qu'il choisit de lui-même est rare.\n\nIbn Yūnus, c'est Abū Bakr Muḥammad ibn ʿAbd Allāh ibn Yūnus at-Tamīmī, un Sicilien. Il était juriste et spécialiste des successions. Il a composé un ouvrage réunissant les questions de la Mudawwana, complétées par d'autres sources ; les étudiants s'en servaient pour réviser. Il est mort en rabīʿ al-awwal 451 de l'hégire ; un autre récit le situe en rabīʿ al-ākhir. Ibn ʿArafa le désigne par « aṣ-Ṣaqallī » (le Sicilien).",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Khalīl cite le choix de ces savants tantôt parce qu'il s'écarte de l'avis qu'il a retenu, tantôt parce que c'est l'avis le plus fort (رَاجِح). C'est le cas quand il ne mentionne aucun autre avis.",
      "Ibn ʿArafa désigne Ibn Yūnus par « aṣ-Ṣaqallī » : c'est utile pour le reconnaître dans d'autres ouvrages."
    ],
    divergences: [],
    exemple: "Vous lisez « … وَالْأَرْجَحُ … » : Ibn Yūnus a privilégié l'un des avis transmis avant lui. Si vous lisez « … وَرُجِّحَ … », c'est un avis qu'il a formé lui-même, ce qui est rare.",
    erreurs_frequentes: [
      "Comprendre « الأَرْجَح » comme « l'avis le plus fort de l'école » au sens général : chez Khalīl, ce mot signale un choix d'Ibn Yūnus.",
      "Attribuer « رُجِّحَ » à n'importe quel savant : chez Khalīl, il renvoie à Ibn Yūnus."
    ],
    termes: [
      { ar: "تَرْجِيح", translit: "tarjîh", def: "Fait de faire pencher la balance vers un avis. Chez Khalīl, la racine de ce mot renvoie à Ibn Yūnus." },
      { ar: "الأَرْجَح", translit: "al-arjah", def: "Forme nominale : choix d'Ibn Yūnus parmi des avis déjà transmis." },
      { ar: "رُجِّحَ", translit: "roujjiha", def: "Forme verbale : avis qu'Ibn Yūnus a formé lui-même (usage rare)." }
    ],
    quiz: [
      { q: "À quel savant renvoie la racine de « تَرْجِيح » dans le Mukhtaṣar ?",
        choix: ["Ibn Yūnus", "Al-Māzirī", "Ibn Rushd", "Al-Lakhmī"],
        bonne: 0,
        explication: "Khalīl réserve la racine de « تَرْجِيح » à Ibn Yūnus." },
      { q: "Mise en situation : vous lisez « … وَالْأَرْجَحُ … ». Que comprenez-vous ?",
        choix: ["C'est l'avis de la Mudawwana", "C'est un avis isolé", "Ibn Yūnus a choisi parmi des avis transmis avant lui", "Ibn Yūnus donne un avis nouveau"],
        bonne: 2,
        explication: "La forme nominale signale un choix parmi des avis existants." },
      { q: "Selon Ibn Ghāzī, pourquoi Ibn Yūnus est-il associé à la racine de « تَرْجِيح » ?",
        choix: ["Parce qu'il a abrégé la Mudawwana", "Parce qu'il était sicilien", "Parce qu'il formait beaucoup d'avis nouveaux", "Parce qu'il penche surtout vers certains avis de ses prédécesseurs"],
        bonne: 3,
        explication: "L'essentiel de son effort consiste à pencher vers certains avis de ses prédécesseurs ; ses avis propres sont rares." },
      { q: "La forme verbale « رُجِّحَ » est-elle fréquente chez Khalīl ?",
        choix: ["Non, al-Ḥaṭṭāb la dit rare", "Elle n'existe pas", "Oui, très fréquente", "Seulement dans le chapitre de la prière"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb précise que la forme verbale, qui signale un avis propre d'Ibn Yūnus, est rare." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "34-35" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-03c",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 3,
    titre: "« Zouhoûr » : le choix d'Ibn Rushd",
    titre_ar: "الإِشَارَةُ بِمَادَّةِ الظُّهُورِ إِلَى ابْنِ رُشْدٍ",
    objectif: "Repérer un choix d'Ibn Rushd dans le Mukhtaṣar et distinguer ses deux formes.",
    matn: "وَبِالظُّهُورِ لِابْنِ رُشْدٍ كَذَلِكَ",
    regle_pratique: "Un mot de la racine de « ظُهُور » renvoie à Ibn Rushd : à la forme nominale (« الأَظْهَر », « الظَّاهِر »), il a choisi parmi des avis déjà transmis ; à la forme verbale (« ظَهَرَ »), c'est un avis qu'il a formé lui-même, ce qui est rare.",
    explication: "Khalīl réserve la racine de « ظُهُور » (le fait d'être apparent) à Ibn Rushd, avec la même règle des deux formes.\n\nLa forme nominale, comme « الأَظْهَر » ou « الظَّاهِر », signale un choix d'Ibn Rushd parmi les avis divergents de ceux qui l'ont précédé. La forme verbale, comme « ظَهَرَ », signale un avis qu'il a formé lui-même. Al-Ḥaṭṭāb précise que ce second cas est rare.\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique ce choix de racine. Ibn Rushd s'appuie souvent sur le sens apparent des récits transmis (رِوَايَات). Il dit par exemple : « cela découle de tel récit », ou « c'est le sens apparent de ce qui figure dans telle audition ».\n\nIbn Rushd, c'est Abū l-Walīd Muḥammad ibn Aḥmad ibn Rushd, de Cordoue. Il était le juriste de son temps en al-Andalus et au Maghreb. Il est l'auteur d'al-Bayān wa-t-Taḥṣīl, sur la Mustakhraja, et d'al-Muqaddimāt. Il a été juge principal de Cordoue de 511 à 515 de l'hégire. Le cadi ʿIyāḍ compte parmi ses élèves. Il est né en 450 et mort en dhū l-qaʿda 520 de l'hégire.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Khalīl cite le choix de ces savants tantôt parce qu'il s'écarte de l'avis qu'il a retenu, tantôt parce que c'est l'avis le plus fort (رَاجِح). C'est le cas quand il ne mentionne aucun autre avis.",
      "Le lien entre Ibn Rushd et la racine de « ظُهُور » vient de sa méthode : il s'appuie beaucoup sur le sens apparent des récits transmis."
    ],
    divergences: [
      "Divergence — date de décès d'Ibn Rushd. Al-Ḥaṭṭāb : il est mort en dhū l-qaʿda 520 de l'hégire (« مَاتَ لَيْلَةَ الْأَحَدِ حَادِي عَشَرَ ذِي الْقَعْدَةِ سَنَةَ عِشْرِينَ وَخَمْسِمِائَةٍ », Mawāhib, Shamela 569, p. 35). Al-Dasūqī : en 530 (« ثُمَّ ابْنُ رُشْدٍ الْقُرْطُبِيُّ تُوُفِّيَ سَنَةَ خَمْسِمِائَةٍ وَثَلَاثِينَ », Ḥāshiya, Shamela 21604, p. 21) ; ʿUlaysh donne aussi 530 dans Minaḥ al-Jalīl (Shamela 21614, p. 12). La fiche suit al-Ḥaṭṭāb ; la règle de lecture n'en dépend pas."
    ],
    exemple: "Vous lisez « … وَالْأَظْهَرُ … » : Ibn Rushd a choisi l'un des avis transmis avant lui. Si vous lisez « … وَظَهَرَ … », c'est un avis qu'il a formé lui-même, ce qui est rare.",
    erreurs_frequentes: [
      "Comprendre « الأَظْهَر » comme « l'avis le plus évident » au sens général : chez Khalīl, ce mot signale un choix d'Ibn Rushd.",
      "Confondre la forme verbale « ظَهَرَ » (avis propre d'Ibn Rushd, rare) et la forme nominale (choix parmi des avis existants)."
    ],
    termes: [
      { ar: "ظُهُور", translit: "zouhoûr", def: "Le fait d'être apparent. Chez Khalīl, la racine de ce mot renvoie à Ibn Rushd." },
      { ar: "الأَظْهَر", translit: "al-azhar", def: "Forme nominale : choix d'Ibn Rushd parmi des avis déjà transmis." },
      { ar: "ظَهَرَ", translit: "zahara", def: "Forme verbale : avis qu'Ibn Rushd a formé lui-même (usage rare)." },
      { ar: "رِوَايَات", translit: "riwâyât", def: "Récits transmis ; ici, les paroles transmises dans l'école." }
    ],
    quiz: [
      { q: "À quel savant renvoie la racine de « ظُهُور » dans le Mukhtaṣar ?",
        choix: ["Al-Lakhmī", "Al-Māzirī", "Ibn Rushd", "Ibn Yūnus"],
        bonne: 2,
        explication: "Khalīl réserve la racine de « ظُهُور » à Ibn Rushd." },
      { q: "Mise en situation : vous lisez « … وَالْأَظْهَرُ … ». Que comprenez-vous ?",
        choix: ["C'est l'avis le plus évident pour tous", "Ibn Rushd a choisi parmi des avis transmis avant lui", "C'est un avis nouveau d'Ibn Rushd", "C'est la lecture de la Mudawwana"],
        bonne: 1,
        explication: "La forme nominale « الأَظْهَر » signale un choix d'Ibn Rushd parmi des avis existants." },
      { q: "Selon Ibn Ghāzī, pourquoi Ibn Rushd est-il associé à cette racine ?",
        choix: ["Il s'appuie souvent sur le sens apparent des récits transmis", "Il préférait les textes les plus courts", "Il est apparu après Khalīl", "Il refusait toute interprétation"],
        bonne: 0,
        explication: "Ibn Ghāzī explique qu'Ibn Rushd s'appuie beaucoup sur le sens apparent des récits transmis." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "34-36" },
    alertes: [
      "Date de décès d'Ibn Rushd (voir les divergences) : la date de 530 de la page Shamela 21604, p. 21, est dans la Ḥāshiya d'al-Dasūqī (après « ـ[حاشية الدسوقي] »), non dans al-Sharḥ al-kabīr d'al-Dardīr, comme l'indiquait cette alerte jusqu'à la v1.5. Une note de l'éditeur du Mukhtaṣar seul (Shamela n° 11355, p. 12) donne 595. Point non tranché par les sources consultées ; la fiche suit al-Ḥaṭṭāb (520). Non bloquant : la règle de lecture n'en dépend pas."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-03d",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 3,
    titre: "« Qawl » : le choix d'al-Māzirī",
    titre_ar: "الإِشَارَةُ بِمَادَّةِ القَوْلِ إِلَى المَازِرِيِّ",
    objectif: "Repérer un choix d'al-Māzirī dans le Mukhtaṣar et distinguer ses deux formes.",
    matn: "وَبِالْقَوْلِ لِلْمَازِرِيِّ كَذَلِكَ",
    regle_pratique: "Un mot de la racine de « قَوْل » renvoie à al-Māzirī : à la forme verbale (« قَالَ »), c'est un avis qu'il a formé lui-même, ce qui est fréquent ; à la forme nominale (« القَوْل »), il a choisi parmi des avis antérieurs, ce qui est rare.",
    explication: "Khalīl réserve la racine de « قَوْل » (parole, avis) à al-Māzirī, avec la même règle des deux formes. Mais les fréquences sont inversées par rapport à Ibn Yūnus et Ibn Rushd.\n\nLa forme nominale, comme « القَوْل », signale un choix d'al-Māzirī parmi des avis antérieurs ; al-Ḥaṭṭāb précise que ce cas est rare. La forme verbale signale un avis qu'il a formé lui-même ; ce cas est fréquent. Le texte cite comme exemples « قَالَ » et « قِيلَ » (voir l'alerte sur ce second exemple).\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique ce choix de racine. La maîtrise d'al-Māzirī dans les sciences s'est affermie, et il les a pratiquées à la manière des juristes indépendants (مُجْتَهِد). Il est ainsi devenu l'auteur d'une parole sur laquelle on s'appuie. Ibn Ghāzī cite à ce propos un vers proverbial selon lequel la parole qui fait foi est celle de Ḥadhām.\n\nAl-Māzirī, c'est Abū ʿAbd Allāh Muḥammad ibn ʿAlī ibn ʿUmar at-Tamīmī, surnommé « l'imām ». Il était originaire de Māzar, en Sicile, et s'est établi à al-Mahdiyya. Il a étudié auprès d'al-Lakhmī et d'ʿAbd al-Ḥamīd as-Sūsī. On le consultait en médecine comme en droit. Il a commenté at-Talqīn du cadi ʿAbd al-Wahhāb, le Ṣaḥīḥ de Muslim et al-Burhān d'Abū l-Maʿālī. Il est mort en 536 de l'hégire, à plus de quatre-vingts ans.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Khalīl cite le choix de ces savants tantôt parce qu'il s'écarte de l'avis qu'il a retenu, tantôt parce que c'est l'avis le plus fort (رَاجِح). C'est le cas quand il ne mentionne aucun autre avis.",
      "Pour al-Māzirī, la forme verbale est la plus fréquente et la forme nominale la plus rare : c'est l'inverse d'Ibn Yūnus et d'Ibn Rushd.",
      "Al-Ḥaṭṭāb signale qu'il ne s'agit pas de l'auteur d'al-Irshād, appelé al-Mihād : celui-là est un homonyme d'Alexandrie."
    ],
    divergences: [],
    exemple: "Vous lisez « … وَالْقَوْلُ … » : al-Māzirī a choisi l'un des avis antérieurs, ce qui est rare. Pour la forme verbale, soyez prudent : un « قَالَ » sans sujet exprimé peut renvoyer à Mālik (voir l'alerte).",
    erreurs_frequentes: [
      "Appliquer à al-Māzirī la même fréquence qu'aux autres savants : chez lui, c'est la forme verbale qui est fréquente.",
      "Confondre al-Māzirī avec l'auteur d'al-Irshād : al-Ḥaṭṭāb précise que ce dernier est un homonyme d'Alexandrie."
    ],
    termes: [
      { ar: "قَوْل", translit: "qawl", def: "Parole, avis. Chez Khalīl, la racine de ce mot renvoie à al-Māzirī." },
      { ar: "القَوْل", translit: "al-qawl", def: "Forme nominale : choix d'al-Māzirī parmi des avis antérieurs (usage rare)." },
      { ar: "قَالَ", translit: "qâla", def: "Forme verbale de « قَوْل » : avis qu'al-Māzirī a formé lui-même (usage fréquent). Attention : sans sujet exprimé ni antécédent, un verbe comme « قَالَ » renvoie à Mālik (t. 1, p. 39)." },
      { ar: "مُجْتَهِد", translit: "moujtahid", def: "Juriste capable de dégager lui-même les règles à partir des sources." }
    ],
    quiz: [
      { q: "À quel savant renvoie la racine de « قَوْل » dans le Mukhtaṣar ?",
        choix: ["Ibn Yūnus", "Al-Lakhmī", "Ibn Rushd", "Al-Māzirī"],
        bonne: 3,
        explication: "Khalīl réserve la racine de « قَوْل » à al-Māzirī." },
      { q: "Pour al-Māzirī, quelle forme est la plus fréquente ?",
        choix: ["La forme verbale (« قَالَ »)", "La forme nominale (« القَوْل »)", "Les deux à égalité", "Aucune des deux"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb précise que la forme verbale est fréquente et la forme nominale rare." },
      { q: "Mise en situation : vous lisez « … وَالْقَوْلُ … ». Que comprenez-vous ?",
        choix: ["C'est un avis isolé", "Al-Māzirī a choisi parmi des avis antérieurs", "C'est un avis nouveau d'Ibn Yūnus", "C'est l'avis de Mālik"],
        bonne: 1,
        explication: "La forme nominale signale un choix d'al-Māzirī parmi des avis antérieurs." },
      { q: "Selon Ibn Ghāzī, pourquoi al-Māzirī est-il associé à la racine de « قَوْل » ?",
        choix: ["Parce qu'il est devenu l'auteur d'une parole sur laquelle on s'appuie", "Parce qu'il a commenté la Mudawwana", "Parce qu'il parlait beaucoup", "Parce qu'il était le maître d'al-Lakhmī"],
        bonne: 0,
        explication: "Ibn Ghāzī explique qu'il pratiquait les sciences à la manière des mujtahid, de sorte que sa parole fait autorité." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "35-36, 39" },
    alertes: [
      "L'édition cite « قَالَ أَوْ قِيلَ » comme formes verbales renvoyant à al-Māzirī. L'exemple « قِيلَ » est reproduit tel quel mais n'a pas été repris dans la règle de lecture. Recoupé (campagne de correction) avec al-Sharḥ al-kabīr (Shamela 21604, p. 21), Minaḥ al-Jalīl (Shamela 21614, p. 12) et Shifāʾ al-Ghalīl (Shamela 14605, p. 8) : aucun ne revient sur cet exemple. Non bloquant.",
      "Al-Ḥaṭṭāb rapporte plus loin (t. 1, p. 39) que, chez Khalīl et d'autres auteurs tardifs, un verbe dont le sujet n'est ni exprimé ni mentionné auparavant (« قَالَ », « كَرِهَ », « مَنَعَ »…) renvoie à Mālik (fiche int-01-02-03). Le passage ne dit pas comment distinguer ce cas de la forme verbale qui renvoie à al-Māzirī, et les commentaires consultés (al-Dardīr, Minaḥ al-Jalīl, Shifāʾ al-Ghalīl) ne donnent pas de critère non plus : ne pas attribuer d'office à al-Māzirī un « قَالَ » sans sujet. Limite du texte, signalée ; non bloquant."
    ],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 2 — t. 1, p. 36–39 (Shamela 569, pages 35–38)                 */
  /* ================================================================== */

  {
    id: "int-01-01-04a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 4,
    titre: "« Khilâf » : plusieurs avis déclarés mashhūr",
    titre_ar: "الإِشَارَةُ بِـ« خِلَافٌ » إِلَى الاخْتِلَافِ فِي التَّشْهِيرِ",
    objectif: "Comprendre ce que signale le mot « خِلَافٌ » placé après des avis dans le Mukhtaṣar.",
    matn: "وَحَيْثُ قُلْتُ خِلَافٌ فَذَلِكَ لِلِاخْتِلَافِ فِي التَّشْهِيرِ",
    regle_pratique: "Quand Khalīl cite des avis puis écrit « خِلَافٌ », il signale que des savants de même rang ont déclaré « mashhūr » des avis différents : chacun des avis cités a été présenté comme le mashhūr par l'un d'eux.",
    explication: "Khalīl annonce que le mot « خِلَافٌ » (khilâf) signale une divergence sur le تَشْهِير (tachhîr), c'est-à-dire sur l'avis à déclarer mashhūr.\n\nAl-Ḥaṭṭāb précise le cas visé. Les savants divergent sur l'avis à déclarer mashhūr, et ceux qui se prononcent sont de même rang. Khalīl cite alors les deux avis (ou plus) déclarés mashhūr, puis ajoute le mot « خِلَافٌ ».\n\nPeu importe la formule employée par ces savants pour donner l'avantage à un avis. Ce peut être le mot mashhūr lui-même, ou une expression équivalente : « l'école dit ceci », « le plus apparent », « le plus fort » (الرَّاجِح), « l'avis sur lequel on rend les fatwas » (المُفْتَى بِهِ), « l'avis suivi dans la pratique » (الَّذِي عَلَيْهِ العَمَل), etc.\n\nSi ces savants ne sont pas de même rang, Khalīl ne cite que l'avis déclaré mashhūr par le plus savant d'entre eux. Al-Ḥaṭṭāb dit que cela ressort de l'étude de ses écrits et qu'on l'a trouvé de sa main dans une note marginale.",
    aqwal: [
      { auteur: "Ibn al-Furāt", avis: "Dans son commentaire : la déclaration de mashhūr d'Ibn Rushd prime sur celle d'Ibn Bazīza ; Ibn Rushd, al-Māzirī et ʿAbd al-Wahhāb sont de même rang.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Toute formule équivalente compte comme une déclaration de mashhūr : « l'école dit ceci », « le plus apparent », « le plus fort », « l'avis sur lequel on rend les fatwas », « l'avis suivi dans la pratique ».",
      "Si les savants qui se prononcent ne sont pas de même rang, Khalīl ne retient que l'avis du plus savant, sans écrire « خِلَافٌ »."
    ],
    divergences: [],
    exemple: "Une question présente deux avis, suivis de « … خِلَافٌ ». Comprenez : chacun des deux a été déclaré mashhūr par des savants de même rang. Khalīl ne tranche pas entre eux.",
    erreurs_frequentes: [
      "Comprendre « خِلَافٌ » comme une simple mention de divergence : chez Khalīl, il s'agit précisément d'une divergence sur l'avis mashhūr.",
      "Croire que l'un des avis cités avant « خِلَافٌ » est faible : chacun a été déclaré mashhūr par un savant de même rang que les autres."
    ],
    termes: [
      { ar: "خِلَاف", translit: "khilâf", def: "Divergence. Chez Khalīl, en fin de question : des savants de même rang ont déclaré mashhūr des avis différents." },
      { ar: "تَشْهِير", translit: "tachhîr", def: "Fait de déclarer un avis « mashhūr »." },
      { ar: "مَشْهُور", translit: "machhoûr", def: "L'avis le plus répandu dans l'école." },
      { ar: "الرَّاجِح", translit: "ar-râjih", def: "L'avis le plus fort par ses preuves." },
      { ar: "المُفْتَى بِهِ", translit: "al-mouftâ bihi", def: "L'avis sur lequel on rend les fatwas." }
    ],
    quiz: [
      { q: "Que signale le mot « خِلَافٌ » placé après des avis dans le Mukhtaṣar ?",
        choix: ["Que l'avis vient d'une autre école", "Que la question est sans réponse", "Que des savants de même rang ont déclaré mashhūr des avis différents", "Que Khalīl rejette ces avis"],
        bonne: 2,
        explication: "Khalīl annonce que « خِلَافٌ » signale une divergence sur l'avis à déclarer mashhūr." },
      { q: "Mise en situation : deux avis sont suivis de « … خِلَافٌ ». Lequel est le mashhūr ?",
        choix: ["Chacun a été déclaré mashhūr par des savants de même rang", "Le premier", "Aucun", "Le second"],
        bonne: 0,
        explication: "Khalīl cite les avis déclarés mashhūr par des savants de même rang, sans trancher." },
      { q: "Si les savants qui se prononcent ne sont pas de même rang, que fait Khalīl ?",
        choix: ["Il donne son propre avis", "Il cite tous les avis", "Il écrit quand même « خِلَافٌ »", "Il ne cite que l'avis du plus savant"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : dans ce cas, Khalīl s'en tient à l'avis déclaré mashhūr par le plus savant." },
      { q: "Laquelle de ces formules compte comme une déclaration de mashhūr ?",
        choix: ["« même si »", "« l'avis sur lequel on rend les fatwas »", "« selon la Mudawwana »", "« il y a deux interprétations »"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb cite parmi les équivalents : « l'école dit ceci », « le plus apparent », « le plus fort », « l'avis sur lequel on rend les fatwas », « l'avis suivi dans la pratique »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "36" },
    alertes: [
      "Corrigé (campagne de correction) : la fin de « قُلْت », non vocalisée dans l'édition, est complétée en « قُلْتُ » (1re personne : c'est Khalīl qui parle). Le Mukhtaṣar seul (Shamela 11355, p. 2) porte les mêmes consonnes."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-04b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 4,
    titre: "« Qawlâni » : aucun avis n'a été déclaré plus fort",
    titre_ar: "الإِشَارَةُ بِـ« قَوْلَانِ » أَوْ « أَقْوَالٌ » إِلَى عَدَمِ الأَرْجَحِيَّةِ المَنْصُوصَةِ",
    objectif: "Savoir ce que signifient « قَوْلَانِ » ou « أَقْوَالٌ » chez Khalīl, et connaître les avis rapportés sur la conduite à tenir face à des avis équivalents.",
    matn: "وَحَيْثُ ذَكَرْتُ قَوْلَيْنِ أَوْ أَقْوَالًا فَذَلِكَ لِعَدَمِ اطِّلَاعِي فِي الْفَرْعِ عَلَى أَرْجَحِيَّةٍ مَنْصُوصَةٍ",
    regle_pratique: "Quand Khalīl écrit « قَوْلَانِ » ou « أَقْوَالٌ », il signale qu'il n'a trouvé, pour cette question, aucun savant ayant donné par écrit l'avantage à l'un des avis.",
    explication: "Khalīl annonce qu'il cite deux avis (قَوْلَانِ, qawlâni) ou plusieurs (أَقْوَالٌ, aqwâl) quand il n'a trouvé, pour la question, aucune supériorité (أَرْجَحِيَّة) établie par écrit. Al-Ḥaṭṭāb précise : aucune déclaration de mashhūr, de justesse ou de choix venant d'un autre savant.\n\nExceptions : si l'un des avis est très faible, Khalīl l'omet et cite seulement les autres, qui sont équivalents. Selon al-Ḥaṭṭāb, c'est ce qu'il fait le plus souvent, mais le contraire arrive parfois ; al-Ḥaṭṭāb annonce qu'il le signalera. Il signalera aussi les cas où un savant a donné l'avantage à l'un des avis que Khalīl cite sans préférence.\n\nLe mot « écrit » (مَنْصُوصَة) a un sens précis. Il arrive que Khalīl voie lui-même qu'un avis est plus fort, sans trouver ce jugement chez un autre savant. Il ne l'écrit pas, par scrupule : pour ne pas le confondre avec ce que d'autres ont jugé plus fort, et parce que l'abrégé est trop court pour le signaler. Dans son autre ouvrage, at-Tawḍīḥ, il indique au contraire ce qui lui paraît plus fort.",
    aqwal: [
      { auteur: "Ibn Ghāzī", avis: "La pratique est d'orienter celui qui consulte vers l'un des avis équivalents, désigné.", statut: "non_precise" },
      { auteur: "Al-Lakhmī", avis: "S'il y a dans la ville plusieurs savants qualifiés aux avis différents, le non-savant suit celui qu'il veut. S'il n'y a qu'un savant (« فَتَرَجَّحَتْ عِنْدَهُ الْأَقْوَالُ »), deux avis : soit il oriente celui qui consulte vers l'avis de son choix, soit il lui rapporte les avis et leurs auteurs, et celui qui consulte suit celui qu'il veut.", statut: "non_precise" },
      { auteur: "Al-Qarāfī", avis: "Le juge peut trancher selon l'un de deux avis équivalents, après avoir échoué à les départager.", statut: "non_precise" },
      { auteur: "Ibn al-Furāt (et al-Jazūlī)", avis: "La pratique des maîtres est que le mufti rapporte les deux avis, ou tous les avis.", statut: "non_precise" }
    ],
    tarjih_hattab: "Al-Ḥaṭṭāb estime que la conduite à tenir devrait varier selon les personnes qui consultent : selon qu'elles ont, ou non, des connaissances.",
    tanbihat: [
      "Ces avis valent quand il n'y a personne de capable de départager (« إذَا لَمْ يَكُنْ فِيهِ أَهْلٌ لِلتَّرْجِيحِ ») ; sinon, il faut donner l'avantage à l'un des avis.",
      "Ibn Farḥūn rapporte d'Ibn aṣ-Ṣalāḥ : celui qui n'est pas capable de départager, face à des savants de l'école en désaccord, se fie à leurs qualités. Le plus savant, s'il est scrupuleux, passe avant le plus scrupuleux, s'il est savant.",
      "L'avis d'Ibn al-Furāt et d'al-Jazūlī s'oppose à la pratique rapportée par Ibn Ghāzī."
    ],
    divergences: [],
    exemple: "Vous lisez « … قَوْلَانِ ». Comprenez : Khalīl n'a trouvé aucun savant ayant donné par écrit l'avantage à l'un des deux avis, et il n'écrit pas sa propre préférence. Le Mukhtaṣar seul ne vous dit donc pas lequel suivre ; les avis rapportés dans cette fiche portent sur la manière dont le mufti oriente celui qui le consulte.",
    erreurs_frequentes: [
      "Croire que Khalīl n'avait aucune opinion : selon al-Ḥaṭṭāb, il s'abstenait d'écrire sa propre préférence, par scrupule.",
      "Croire que tous les avis existants sont cités : un avis très faible peut être omis.",
      "Confondre « قَوْلَانِ » (aucun avis jugé plus fort) et « خِلَافٌ » (chaque avis a été déclaré mashhūr)."
    ],
    termes: [
      { ar: "قَوْلَانِ", translit: "qawlâni", def: "« Deux avis ». Chez Khalīl : deux avis dont aucun n'a été déclaré plus fort par écrit." },
      { ar: "أَقْوَال", translit: "aqwâl", def: "Avis (pluriel de « qawl »). Chez Khalīl : plusieurs avis dont aucun n'a été déclaré plus fort par écrit." },
      { ar: "أَرْجَحِيَّة", translit: "arjahiyya", def: "Supériorité d'un avis sur les autres." },
      { ar: "مَنْصُوصَة", translit: "mansoûsa", def: "Établie par écrit chez un savant, et non seulement perçue par Khalīl." },
      { ar: "مُسْتَفْتِي", translit: "moustaftî", def: "Celui qui demande un avis juridique (fatwa)." },
      { ar: "عَامِّيّ", translit: "ʿâmmî", def: "Personne qui n'est pas savante en droit." }
    ],
    quiz: [
      { q: "Que signale « قَوْلَانِ » dans le Mukhtaṣar ?",
        choix: ["Un avis de Mālik et un avis d'Ibn al-Qāsim", "Deux lectures de la Mudawwana", "Deux avis déclarés mashhūr", "Deux avis dont aucun n'a été déclaré plus fort par écrit"],
        bonne: 3,
        explication: "Khalīl annonce qu'il cite deux avis ou plus quand il n'a trouvé aucune supériorité établie par écrit." },
      { q: "Pourquoi Khalīl n'écrit-il pas l'avis qui lui paraît plus fort, quand aucun savant ne l'a jugé ainsi ?",
        choix: ["Par scrupule, pour ne pas le confondre avec le jugement d'autres savants", "Il l'écrit toujours", "Parce que Mālik l'interdisait", "Il n'en avait pas"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : il s'en abstient par scrupule, et parce que l'abrégé est trop court pour le signaler." },
      { q: "Mise en situation : un seul savant est consulté sur une question où les avis se valent. Selon le second avis rapporté par al-Lakhmī, que fait-il ?",
        choix: ["Il impose toujours l'avis le plus strict", "Il rapporte les avis et leurs auteurs, et celui qui consulte suit celui qu'il veut", "Il renvoie à une autre école", "Il refuse de répondre"],
        bonne: 1,
        explication: "Al-Lakhmī : selon le second avis, il est comme un transmetteur ; il fait connaître les auteurs des avis, et celui qui consulte suit celui qu'il veut." },
      { q: "Selon al-Ḥaṭṭāb, de quoi devrait dépendre la conduite du mufti face à des avis équivalents ?",
        choix: ["Du jour de la semaine", "Uniquement de l'avis de Mālik", "Du nombre d'avis", "Des personnes qui consultent, selon qu'elles ont ou non des connaissances"],
        bonne: 3,
        explication: "C'est la préférence propre d'al-Ḥaṭṭāb : cela devrait varier selon la situation de ceux qui consultent." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "36-37" },
    alertes: [
      "Corrigé (campagne de correction) : la fin de « ذَكَرْت », non vocalisée dans l'édition, est complétée en « ذَكَرْتُ » (1re personne : c'est Khalīl qui parle). Le Mukhtaṣar seul (Shamela 11355, p. 2) porte les mêmes consonnes.",
      "Le texte dit que Khalīl signale dans at-Tawḍīḥ ce qui lui paraît plus fort « بِالْخَاءِ » (par la lettre khāʾ). Cette précision n'est pas reprise dans la fiche. Non bloquant.",
      "Chez al-Lakhmī, le cas du savant unique est introduit par « فَتَرَجَّحَتْ عِنْدَهُ الْأَقْوَالُ » ; le sens exact du verbe (avis qui se valent à ses yeux ?) n'est pas précisé. La fiche cite la formule sans la traduire. Non bloquant.",
      "Le sujet de « وَهَذَا إذَا لَمْ يَكُنْ فِيهِ أَهْلٌ لِلتَّرْجِيحِ » (al-Ḥaṭṭāb ou Ibn Ghāzī) et le référent de « فِيهِ » (la ville ou le savant) ne sont pas certains. La fiche reste neutre. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-05",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 5,
    titre: "Les sens implicites : seule la condition",
    titre_ar: "اعْتِبَارُ مَفْهُومِ الشَّرْطِ فَقَطْ",
    objectif: "Savoir quel sens implicite Khalīl tire de ses phrases, et lesquels il ne tire pas d'office.",
    matn: "وَاعْتَبَرَ مِنْ الْمَفَاهِيمِ مَفْهُومَ الشَّرْطِ فَقَطْ",
    regle_pratique: "Parmi les sens implicites d'une phrase, Khalīl ne prend en compte d'office que celui de la condition : quand il pose une règle sous une condition, la règle contraire vaut si la condition manque.",
    explication: "Un مَفْهُوم (mafhoûm), ou sens implicite, est ce que la phrase indique sans le dire. Il s'oppose au مَنْطُوق (mantoûq), ce qu'elle dit expressément. Al-Ḥaṭṭāb distingue deux sortes de sens implicites.\n\nLe sens implicite de concordance (مَفْهُومُ المُوَافَقَةِ) donne au cas non dit la même règle. Parfois le cas non dit la mérite davantage : l'interdiction de dire « fi » à ses parents implique a fortiori celle de les frapper. Parfois il la mérite autant : l'interdiction de manger le bien de l'orphelin vaut aussi pour le brûler.\n\nLe sens implicite contraire (مَفْهُومُ المُخَالَفَةِ) donne au cas non dit la règle opposée. Al-Ḥaṭṭāb en cite dix sortes, d'après al-Qarāfī : celui de la qualité, de la cause, de la condition, de l'exception, de la limite (غَايَة), de la restriction (حَصْر), du temps, du lieu, du nombre et du nom propre. Exemple de la condition : « celui qui se purifie, sa prière est valide » implique que celui qui ne se purifie pas n'a pas une prière valide. Selon le passage, Mālik et un groupe de savants les tiennent tous pour des arguments, sauf celui du nom propre (retenu par al-Daqqāq, Ibn Khuwayz Mandād et certains ḥanbalites).\n\nKhalīl annonce qu'il ne retient que le sens implicite de la condition. Selon Ibn Ghāzī, c'est parce qu'il est le plus fort : certains savants le retiennent sans retenir les autres. La limite fait exception : certains la retiennent sans retenir la condition. Mais Ibn Ghāzī ajoute qu'elle est « قَلِيلٌ لَا يَتَأَتَّى مَعَهُ اخْتِصَارٌ » (peu fréquente et mal adaptée à l'abrégé), et que c'est pourquoi Khalīl l'a laissée de côté.\n\nIbn Ghāzī ajoute que le sens implicite de concordance fait l'objet d'un accord, et que Khalīl le prend aussi en compte. Exemple tiré du chapitre de l'interdiction (الحَجْر) : le tuteur peut annuler l'acte d'une personne douée de discernement ; a fortiori celui d'une personne sans discernement.",
    aqwal: [
      { auteur: "Ibn Ghāzī", avis: "Khalīl prend aussi en compte le sens implicite de concordance, qui fait l'objet d'un accord.", statut: "non_precise" },
      { auteur: "Ibn al-Futūḥ (note marginale qu'Ibn Ghāzī lui attribue avec réserve ; rapportée aussi par al-Bisāṭī)", avis: "Khalīl prend en compte le sens implicite de la condition de manière obligatoire, et les autres sens implicites de manière facultative.", statut: "non_precise" }
    ],
    tarjih_hattab: "Al-Ḥaṭṭāb ajoute, par analogie avec ce que dit Ibn Ghāzī, que les sens implicites de la limite (غَايَة) et de la restriction (حَصْر) sont aussi pris en compte par Khalīl : ils sont plus forts que celui de la condition, et quiconque retient la condition les retient aussi. Il dit qu'une lecture attentive du Mukhtaṣar le montre.",
    tanbihat: [
      "Ibn Ghāzī excepte le sens implicite de la qualité dans les définitions : les mots d'une définition servent à inclure ou à exclure, ils ne créent pas de règle contraire.",
      "Ibn Ghāzī propose une autre lecture : Khalīl traiterait le sens implicite de la condition comme s'il était écrit, de sorte que les précisions qui suivent s'y appliquent aussi. Selon lui, cette lecture résout beaucoup de passages difficiles.",
      "Khalīl énonce parfois lui-même la règle contraire à la condition, par exemple pour y ajouter des précisions ou des cas rattachés ; al-Ḥaṭṭāb annonce qu'il le signalera."
    ],
    divergences: [],
    exemple: "Khalīl écrit une règle sous la forme « si … alors … ». Vous pouvez en déduire la règle contraire quand la condition manque, même s'il ne l'écrit pas. En revanche, ne déduisez pas d'office une règle contraire d'un nombre, d'un lieu ou d'une date mentionnés dans la phrase.",
    erreurs_frequentes: [
      "Tirer une règle contraire de tout détail de la phrase (nombre, lieu, temps…) : Khalīl annonce ne retenir d'office que la condition.",
      "Oublier le raisonnement a fortiori (sens implicite de concordance), que Khalīl prend aussi en compte selon Ibn Ghāzī."
    ],
    termes: [
      { ar: "مَفْهُوم", translit: "mafhoûm", def: "Sens implicite : ce que la phrase indique sans le dire." },
      { ar: "مَنْطُوق", translit: "mantoûq", def: "Sens explicite : ce que la phrase dit expressément." },
      { ar: "مَفْهُومُ المُوَافَقَةِ", translit: "mafhoûmou l-mouwâfaqa", def: "Sens implicite de concordance : le cas non dit reçoit la même règle, parfois a fortiori." },
      { ar: "مَفْهُومُ المُخَالَفَةِ", translit: "mafhoûmou l-moukhâlafa", def: "Sens implicite contraire : le cas non dit reçoit la règle opposée." },
      { ar: "مَفْهُومُ الشَّرْطِ", translit: "mafhoûmou ch-chart", def: "Sens implicite de la condition : si la condition manque, la règle contraire s'applique. Le seul que Khalīl retienne d'office." },
      { ar: "غَايَة", translit: "ghâya", def: "Limite (« jusqu'à… ») ; son sens implicite est retenu par Khalīl selon al-Ḥaṭṭāb." },
      { ar: "حَصْر", translit: "hasr", def: "Restriction (« seulement… ») ; son sens implicite est retenu par Khalīl selon al-Ḥaṭṭāb." }
    ],
    quiz: [
      { q: "Quel sens implicite contraire Khalīl annonce-t-il retenir d'office ?",
        choix: ["Tous", "Celui de la condition", "Celui du lieu", "Celui du nombre"],
        bonne: 1,
        explication: "Khalīl annonce qu'il ne retient, parmi les sens implicites, que celui de la condition." },
      { q: "Mise en situation : Khalīl écrit « celui qui se purifie, sa prière est valide ». Que pouvez-vous en déduire ?",
        choix: ["Que la règle ne vaut que le vendredi", "Rien de plus", "Que la prière de celui qui ne se purifie pas n'est pas valide", "Que la purification est recommandée"],
        bonne: 2,
        explication: "C'est l'exemple du sens implicite de la condition : la règle contraire vaut quand la condition manque." },
      { q: "Selon Ibn Ghāzī, pourquoi Khalīl a-t-il choisi la condition ?",
        choix: ["Par hasard", "Parce que c'est le sens implicite le plus fort", "Parce que Mālik ne retenait que lui", "Parce que c'est le plus court"],
        bonne: 1,
        explication: "Ibn Ghāzī : c'est le plus fort, puisque certains le retiennent sans retenir les autres." },
      { q: "Que dit al-Ḥaṭṭāb de la limite (غَايَة) et de la restriction (حَصْر) ?",
        choix: ["Khalīl les rejette", "Elles n'existent pas", "Seul Mālik les retient", "Khalīl les prend aussi en compte, car elles sont plus fortes que la condition"],
        bonne: 3,
        explication: "C'est la conclusion propre d'al-Ḥaṭṭāb, par analogie avec ce que dit Ibn Ghāzī du sens implicite de concordance." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "37-38" },
    alertes: [
      "Le matn porte « وَاعْتَبَرَ » (3e personne) dans Mawāhib, mais « وأعتبر » (1re personne, « je retiens ») dans le Mukhtaṣar seul (shamela.ws/book/11355/2). Le sens est le même. Non bloquant.",
      "L'exception des définitions est introduite par « ثُمَّ قَالَ » au milieu de citations d'Ibn Ghāzī : elle est attribuée à Ibn Ghāzī d'après la suite du passage. Non bloquant.",
      "Une portion du texte, p. 38, est altérée dans l'édition (« وَكَقَوْلِهِ فِيهِ القاة … »). Elle n'est pas utilisée dans la fiche."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-06",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 6,
    titre: "« Souhhiha », « oustouhsina » : un autre savant, non nommé",
    titre_ar: "الإِشَارَةُ بِـ« صُحِّحَ » أَوْ « اُسْتُحْسِنَ » إِلَى شَيْخٍ غَيْرِ الأَرْبَعَةِ",
    objectif: "Reconnaître quand Khalīl rapporte le jugement d'un savant qu'il ne nomme pas.",
    matn: "وَأُشِيرَ بِصُحِّحَ أَوْ اُسْتُحْسِنَ إلَى أَنَّ شَيْخًا غَيْرَ الَّذِينَ قَدَّمْتُهُمْ صَحَّحَ هَذَا أَوْ اسْتَظْهَرَهُ",
    regle_pratique: "Quand Khalīl écrit « صُحِّحَ » ou « اُسْتُحْسِنَ » (au passif), ou « الأَصَحّ » / « الأَحْسَن », il signale qu'un savant autre qu'al-Lakhmī, Ibn Yūnus, Ibn Rushd et al-Māzirī a jugé cet avis correct ou préférable, sans le nommer.",
    explication: "Khalīl annonce que « صُحِّحَ » (« a été jugé correct ») et « اُسْتُحْسِنَ » (« a été jugé bon ») renvoient à un savant autre que les quatre déjà cités.\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, explique que ces verbes sont au passif pour ne pas désigner ce savant. C'est aussi pour cela que Khalīl écrit « un savant » de façon indéterminée.\n\nSelon Ibn Ghāzī, la lecture la plus exacte distingue les deux mots, même s'ils peuvent se recouvrir. Le تَصْحِيح (tashîh) porte sur ce qu'un savant valide dans les paroles d'un autre. L'اِسْتِحْسَان (istihsân) porte sur ce qu'il juge bon lui-même.\n\nKhalīl emploie aussi parfois un adjectif : « الأَصَحّ » (le plus correct), « المُصَحَّح » (celui qui a été jugé correct), « الأَحْسَن » (le meilleur).",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Comme pour les quatre savants, Khalīl cite ce jugement tantôt parce qu'il s'écarte de l'avis qu'il a retenu, tantôt parce que c'est l'avis le plus fort, quand il n'en mentionne pas d'autre (voir la fiche int-01-01-03a)."
    ],
    divergences: [],
    exemple: "Vous lisez « … وَصُحِّحَ … » ou « … وَالْأَصَحُّ … » : un savant que Khalīl ne nomme pas, et qui n'est pas l'un des quatre, a jugé cet avis correct. Inutile de chercher son nom dans le Mukhtaṣar : Khalīl l'a volontairement tu.",
    erreurs_frequentes: [
      "Attribuer « الأَصَحّ » à al-Lakhmī, Ibn Yūnus, Ibn Rushd ou al-Māzirī : il s'agit d'un autre savant.",
      "Lire « صُحِّحَ » comme un jugement de Khalīl lui-même : c'est le jugement d'un savant non nommé."
    ],
    termes: [
      { ar: "صُحِّحَ", translit: "souhhiha", def: "« A été jugé correct » : jugement d'un savant non nommé, autre que les quatre." },
      { ar: "اُسْتُحْسِنَ", translit: "oustouhsina", def: "« A été jugé bon » : jugement d'un savant non nommé, autre que les quatre." },
      { ar: "الأَصَحّ", translit: "al-asahh", def: "« Le plus correct » : forme adjectivale du jugement d'un savant non nommé." },
      { ar: "الأَحْسَن", translit: "al-ahsan", def: "« Le meilleur » : forme adjectivale du jugement d'un savant non nommé." },
      { ar: "تَصْحِيح", translit: "tashîh", def: "Selon Ibn Ghāzī : ce qu'un savant valide dans les paroles d'un autre." },
      { ar: "اِسْتِحْسَان", translit: "istihsân", def: "Selon Ibn Ghāzī, dans ce passage : ce qu'un savant juge bon lui-même." }
    ],
    quiz: [
      { q: "À qui renvoie « صُحِّحَ » dans le Mukhtaṣar ?",
        choix: ["À Khalīl lui-même", "À Mālik", "À un savant non nommé, autre que les quatre", "À al-Lakhmī"],
        bonne: 2,
        explication: "Khalīl annonce que « صُحِّحَ » et « اُسْتُحْسِنَ » renvoient à un savant autre que ceux qu'il a déjà cités." },
      { q: "Selon Ibn Ghāzī, pourquoi ces verbes sont-ils au passif ?",
        choix: ["Pour ne pas désigner le savant", "Par erreur de copiste", "Pour marquer un avis faible", "Pour désigner Mālik"],
        bonne: 0,
        explication: "Ibn Ghāzī : le passif sert à ne pas désigner le savant, d'où aussi le mot « un savant » indéterminé." },
      { q: "Mise en situation : vous lisez « … وَالْأَصَحُّ … ». Que comprenez-vous ?",
        choix: ["C'est le mashhūr", "Ibn Rushd a choisi cet avis", "Un savant non nommé, autre que les quatre, l'a jugé le plus correct", "C'est l'avis de la Mudawwana"],
        bonne: 2,
        explication: "La forme adjectivale « الأَصَحّ » suit la même règle que « صُحِّحَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "38" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-07",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 7,
    titre: "« Taraddoud » : l'hésitation des savants tardifs",
    titre_ar: "الإِشَارَةُ بِـ« التَّرَدُّدِ » إِلَى تَرَدُّدِ المُتَأَخِّرِينَ",
    objectif: "Comprendre les deux situations que signale « تَرَدُّدٌ » dans le Mukhtaṣar.",
    matn: "وَبِالتَّرَدُّدِ لِتَرَدُّدِ الْمُتَأَخِّرِينَ فِي النَّقْلِ أَوْ لِعَدَمِ نَصِّ الْمُتَقَدِّمِينَ",
    regle_pratique: "Quand Khalīl écrit « تَرَدُّدٌ », il signale une hésitation des savants tardifs : soit ils divergent sur ce que les anciens ont transmis, soit ils hésitent parce que les anciens n'ont laissé aucun texte sur la question.",
    explication: "Khalīl annonce que « تَرَدُّدٌ » (taraddoud) signale l'hésitation des savants tardifs (المُتَأَخِّرُون). Al-Ḥaṭṭāb distingue deux cas.\n\nPremier cas : les savants tardifs divergent sur ce que les anciens (المُتَقَدِّمُون) ont transmis. C'est ce qu'on appelle les « voies » (طُرُق) de l'école. Khalīl en donne la définition dans at-Tawḍīḥ : une voie (طَرِيقَة), c'est un ou plusieurs maîtres qui présentent toute l'école selon ce qu'ils en ont transmis. Il ajoute qu'il vaut mieux concilier les voies quand c'est possible. Sinon, la voie qui contient un élément de plus l'emporte, car tous sont dignes de confiance.\n\nSecond cas : les savants tardifs hésitent parce que les anciens n'ont rien dit sur la question. Al-Ḥaṭṭāb insiste sur une précision grammaticale : l'absence de texte des anciens ne suffit pas. Il faut aussi une hésitation des savants tardifs, car « تَرَدُّد » signifie la perplexité. Si les savants tardifs ont tranché la question, il n'y a pas de perplexité.\n\nKhalīl ne donne aucun signe pour distinguer les deux cas, mais le second est plus rare. Al-Ḥaṭṭāb annonce qu'il le signalera.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb relève que « تَرَدُّدٌ » sert parfois à autre chose chez Khalīl : par exemple à la fin du livre des jugements et dans celui des témoignages, où il marque l'abondance des divergences sur la question.",
      "Ibn ʿArafa, interrogé : peut-on dire d'une voie « c'est l'école de Mālik » ? Oui, pour celui qui connaît les règles de l'école, ses avis mashhūr, la manière de départager et le raisonnement par analogie, après un effort sérieux. Sinon, il doit l'attribuer à celui qui l'a dite, comme al-Māzirī ou Ibn Rushd (rapporté par al-Burzulī)."
    ],
    divergences: [],
    exemple: "Vous lisez « … تَرَدُّدٌ ». Comprenez : les savants tardifs de l'école ne s'accordent pas, soit sur ce que les anciens ont dit, soit sur une question que les anciens n'ont pas traitée. Le plus souvent, c'est le premier cas.",
    erreurs_frequentes: [
      "Confondre « تَرَدُّدٌ » et « خِلَافٌ » : « خِلَافٌ » porte sur l'avis mashhūr, « تَرَدُّدٌ » sur l'hésitation des savants tardifs.",
      "Croire que l'absence de texte des anciens suffit à parler de « تَرَدُّد » : il faut aussi que les savants tardifs hésitent."
    ],
    termes: [
      { ar: "تَرَدُّد", translit: "taraddoud", def: "Hésitation, perplexité. Chez Khalīl : hésitation des savants tardifs, sur la transmission des anciens ou faute de texte des anciens." },
      { ar: "المُتَأَخِّرُون", translit: "al-mouta'akhkhiroûn", def: "Les savants tardifs de l'école." },
      { ar: "المُتَقَدِّمُون", translit: "al-moutaqaddimoûn", def: "Les anciens de l'école." },
      { ar: "طَرِيقَة", translit: "tarîqa", def: "« Voie » : un ou plusieurs maîtres qui présentent toute l'école selon ce qu'ils en ont transmis (définition de Khalīl dans at-Tawḍīḥ)." },
      { ar: "طُرُق", translit: "tourouq", def: "« Voies » : divergences entre maîtres sur la manière de transmettre l'école." }
    ],
    quiz: [
      { q: "Qui hésite, quand Khalīl écrit « تَرَدُّدٌ » ?",
        choix: ["Khalīl lui-même", "Les savants tardifs de l'école", "Les savants d'une autre école", "Mālik"],
        bonne: 1,
        explication: "Khalīl annonce que « تَرَدُّدٌ » signale l'hésitation des savants tardifs." },
      { q: "Quels sont les deux cas signalés par « تَرَدُّدٌ » ?",
        choix: ["Un avis faible et un avis fort", "Deux avis mashhūr", "Deux lectures de la Mudawwana", "Une divergence sur la transmission des anciens, ou une hésitation faute de texte des anciens"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb distingue ces deux cas ; le second est plus rare." },
      { q: "Mise en situation : les anciens n'ont rien dit sur une question, mais les savants tardifs l'ont clairement tranchée. Khalīl écrira-t-il « تَرَدُّدٌ » ?",
        choix: ["Non : sans hésitation des savants tardifs, il n'y a pas de « تَرَدُّد »", "On ne peut pas savoir", "Oui, toujours", "Oui, s'ils sont deux"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : « تَرَدُّد » signifie la perplexité ; il n'y en a pas quand les savants tardifs ont tranché." },
      { q: "Selon at-Tawḍīḥ, que faire quand deux voies divergent ?",
        choix: ["Toujours retenir la plus ancienne", "Les concilier si possible ; sinon, retenir la voie qui contient un élément de plus", "Suivre la plus courte", "Les rejeter toutes les deux"],
        bonne: 1,
        explication: "Khalīl : mieux vaut les concilier ; sinon, la voie qui contient un élément de plus l'emporte, car tous sont dignes de confiance." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "38-39" },
    alertes: [
      "Corrigé (campagne de correction) : l'édition porte « اخْتِلَافُهُمْ فِي الْغَرْوِ لِلْمَذْهَبِ » ; Ibn Ghāzī, cité ici, a lui-même « اختلاف طرقهم في العزو للمذهب » (Shifāʾ al-Ghalīl, Shamela 14605, p. 13). Il faut lire « الْعَزْوِ » (l'attribution à l'école), sens que suit la fiche."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-08",
    type: "terme",
    kitab: "int", bab: "01", fasl: "01", ordre: 8,
    titre: "« Wa law » : un avis contraire dans l'école",
    titre_ar: "الإِشَارَةُ بِـ« لَوْ » إِلَى خِلَافٍ مَذْهَبِيٍّ",
    objectif: "Comprendre ce que signale « وَلَوْ … » à la fin d'une règle du Mukhtaṣar.",
    matn: "وَبِلَوْ إلَى خِلَافٍ مَذْهَبِيٍّ",
    regle_pratique: "Quand Khalīl ajoute « وَلَوْ … » (« même si… ») à une règle, il signale qu'un avis contraire existe, à l'intérieur de l'école malikite, pour ce cas.",
    explication: "Khalīl annonce qu'il emploie le mot « لَوْ » (law) pour signaler une divergence interne à l'école (خِلَافٌ مَذْهَبِيٌّ).\n\nIbn Ghāzī, cité par al-Ḥaṭṭāb, précise de quel « لَوْ » il s'agit. C'est le « لَوْ » qui pousse la règle jusqu'à un cas limite (« même si… »). Il est précédé de « وَ », et sa réponse n'est pas écrite car ce qui précède en tient lieu. Par ce mot, Khalīl signale une divergence attribuée à l'école de Mālik. Selon Ibn Ghāzī, l'étude du texte le confirme, même si cette phrase de l'introduction manque dans certaines copies.\n\nIbn Ghāzī ajoute deux limites. Khalīl n'emploie « لَوْ » que pour une divergence entre des avis formulés (خِلَافٌ قَوْلِيٌّ). Et la règle ne vaut pas systématiquement pour « وَإِنْ », pourtant fréquent chez lui.\n\nAl-Ḥaṭṭāb confirme la lecture des deux derniers mots : « خِلَافٍ » avec tanwīn et « مَذْهَبِيٍّ » avec le suffixe d'appartenance, soit « une divergence de l'école ». Ibn al-Furāt avait évoqué une autre lecture, qu'al-Ḥaṭṭāb juge lointaine : « خِلَافِ مَذْهَبِي », « le contraire de mon école ». Il dit ne l'avoir trouvée dans aucune copie.",
    aqwal: [
      { auteur: "Ibn al-Furāt", avis: "Lecture possible, mais lointaine : « لَوْ » signalerait un avis extérieur à l'école de Mālik (lecture « خِلَافِ مَذْهَبِي »).", statut: "non_precise" }
    ],
    tarjih_hattab: "Al-Ḥaṭṭāb retient la lecture « خِلَافٍ مَذْهَبِيٍّ » (une divergence interne à l'école) : il n'a trouvé l'autre lecture dans aucune copie.",
    tanbihat: [
      "« لَوْ » ne signale qu'une divergence entre avis formulés (خِلَافٌ قَوْلِيٌّ), selon Ibn Ghāzī.",
      "La règle ne vaut pas systématiquement pour « وَإِنْ », selon Ibn Ghāzī."
    ],
    divergences: [],
    exemple: "Vous lisez une règle suivie de « … وَلَوْ … ». Comprenez : la règle s'applique même dans ce cas limite, et Khalīl vous signale qu'un avis de l'école malikite dit le contraire pour ce cas.",
    erreurs_frequentes: [
      "Lire « وَلَوْ … » comme un simple renforcement de style : selon Ibn Ghāzī, Khalīl signale par là un avis divergent dans l'école.",
      "Croire que « لَوْ » renvoie à un avis d'une autre école : al-Ḥaṭṭāb retient la lecture « divergence interne à l'école ».",
      "Appliquer la même règle à « وَإِنْ » : Ibn Ghāzī précise qu'elle ne vaut pas systématiquement pour ce mot."
    ],
    termes: [
      { ar: "لَوْ", translit: "law", def: "« Même si ». Chez Khalīl, en fin de règle : signale un avis contraire à l'intérieur de l'école malikite." },
      { ar: "خِلَافٌ مَذْهَبِيٌّ", translit: "khilâfoun madh-habiyyoun", def: "Divergence interne à l'école malikite." },
      { ar: "خِلَافٌ قَوْلِيٌّ", translit: "khilâfoun qawliyyoun", def: "Divergence entre des avis formulés (أَقْوَال)." }
    ],
    quiz: [
      { q: "Que signale « وَلَوْ … » à la fin d'une règle du Mukhtaṣar ?",
        choix: ["Un avis d'une autre école", "Une simple insistance de style", "Une lecture de la Mudawwana", "Un avis contraire à l'intérieur de l'école malikite"],
        bonne: 3,
        explication: "Khalīl annonce que « لَوْ » signale une divergence interne à l'école." },
      { q: "Mise en situation : vous lisez une règle suivie de « … وَلَوْ … ». Comment l'appliquer ?",
        choix: ["La question est sans réponse", "Il faut suivre l'avis contraire", "La règle vaut même dans ce cas, mais un avis de l'école dit le contraire", "La règle ne vaut pas dans ce cas"],
        bonne: 2,
        explication: "« لَوْ » pousse la règle jusqu'au cas limite et signale l'avis contraire existant dans l'école." },
      { q: "Selon Ibn Ghāzī, la même règle vaut-elle pour « وَإِنْ » ?",
        choix: ["Pas systématiquement", "Oui, toujours", "Jamais, « وَإِنْ » renvoie à Mālik", "Oui, mais seulement au début des chapitres"],
        bonne: 0,
        explication: "Ibn Ghāzī précise que la règle ne vaut pas systématiquement pour « وَإِنْ »." },
      { q: "Quelle lecture des mots « خلاف مذهبي » al-Ḥaṭṭāb retient-il ?",
        choix: ["« le contraire de mon école » (خِلَافِ مَذْهَبِي)", "« une divergence de l'école » (خِلَافٍ مَذْهَبِيٍّ)", "Les deux à égalité", "Aucune"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb retient « une divergence de l'école » (خِلَافٍ مَذْهَبِيٍّ) ; l'autre lecture, évoquée par Ibn al-Furāt, ne figure selon lui dans aucune copie." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39" },
    alertes: [
      "Ibn Ghāzī parle de « وَاوِ النِّكَايَةِ » pour le « وَ » qui précède « لَوْ ». Al-Ḥaṭṭāb invite lui-même à examiner le sens de cette expression ; elle n'est pas expliquée dans la fiche. Non bloquant.",
      "La phrase finale du passage (« فِي أَنَّ الْإِغْيَائِيَّةِ … ») semble viser « إِنْ » plutôt que « أَنَّ » ; elle n'est pas utilisée dans la fiche. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-01-syn",
    type: "synthese",
    kitab: "int", bab: "01", fasl: "01",
    titre: "Les termes techniques annoncés par Khalīl",
    quiz: [
      { q: "Dans le Mukhtaṣar, à quoi renvoie « فِيهَا » ?",
        choix: ["Au chapitre en cours", "À at-Tawḍīḥ", "À l'avis de Mālik", "À la Mudawwana"],
        bonne: 3,
        explication: "Khalīl désigne la Mudawwana par « فِيهَا » (fiche 01)." },
      { q: "Associez correctement : « المُخْتَار » renvoie à…",
        choix: ["Al-Lakhmī", "Ibn Yūnus", "Un savant non nommé", "Ibn Rushd"],
        bonne: 0,
        explication: "La racine de « اِخْتِيَار » renvoie à al-Lakhmī (fiche 03a)." },
      { q: "« الأَظْهَرُ » renvoie à…",
        choix: ["Al-Māzirī", "Al-Lakhmī", "Mālik", "Ibn Rushd"],
        bonne: 3,
        explication: "La racine de « ظُهُور » renvoie à Ibn Rushd (fiche 03c)." },
      { q: "Pour Ibn Yūnus et Ibn Rushd, la forme verbale (« رُجِّحَ », « ظَهَرَ ») est-elle fréquente ?",
        choix: ["Seulement pour Ibn Yūnus", "Elle n'existe pas", "Non, elle est rare", "Oui"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb précise que, pour ces deux savants, la forme verbale (avis propre) est rare." },
      { q: "Mise en situation : deux avis sont suivis de « … خِلَافٌ ». Que comprenez-vous ?",
        choix: ["Aucun avis n'a été jugé plus fort", "Les commentateurs ont lu la Mudawwana de deux façons", "Un avis d'une autre école existe", "Chacun a été déclaré mashhūr par des savants de même rang"],
        bonne: 3,
        explication: "« خِلَافٌ » signale une divergence sur le mashhūr (fiche 04a)." },
      { q: "Mise en situation : deux avis sont suivis de « … قَوْلَانِ ». Que comprenez-vous ?",
        choix: ["Khalīl n'a trouvé aucun savant ayant donné par écrit l'avantage à l'un d'eux", "Un savant non nommé a choisi le premier", "Chacun est mashhūr", "Ce sont deux lectures de la Mudawwana"],
        bonne: 0,
        explication: "« قَوْلَانِ » signale l'absence de supériorité établie par écrit (fiche 04b)." },
      { q: "Que signale « تَأْوِيلَانِ » ?",
        choix: ["Deux avis mashhūr", "Deux façons dont les commentateurs ont compris la Mudawwana", "L'hésitation des savants tardifs", "Un avis contraire dans l'école"],
        bonne: 1,
        explication: "Voir la fiche 02." },
      { q: "Quel sens implicite contraire Khalīl annonce-t-il retenir d'office ?",
        choix: ["Celui du nombre", "Aucun", "Celui de la condition", "Celui du lieu"],
        bonne: 2,
        explication: "Voir la fiche 05." },
      { q: "« صُحِّحَ » renvoie à…",
        choix: ["Ibn Yūnus", "Khalīl lui-même", "Al-Māzirī", "Un savant non nommé, autre que les quatre"],
        bonne: 3,
        explication: "Voir la fiche 06." },
      { q: "Mise en situation : une règle se termine par « … وَلَوْ … ». Que retenir ?",
        choix: ["Les savants tardifs hésitent", "La règle s'applique même dans ce cas ; un avis de l'école dit le contraire", "La règle ne s'applique pas dans ce cas", "C'est un avis d'une autre école"],
        bonne: 1,
        explication: "Voir la fiche 08." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "33-39" },
    alertes: [],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 3 — faṣl int-01-02 : le « تَكْمِيلٌ » d'al-Ḥaṭṭāb, partie 1   */
  /* t. 1, p. 39–40 (Shamela 569, pages 38–39). Pas de matn : champ nass */
  /* ================================================================== */

  {
    id: "int-01-02-01",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 1,
    titre: "Les exemples et les cas regroupés",
    titre_ar: "التَّمْثِيلُ وَجَمْعُ النَّظَائِرِ",
    objectif: "Savoir pourquoi Khalīl donne un exemple, et pourquoi une question apparaît parfois hors de son chapitre.",
    matn: null,
    nass: "مِنْ قَاعِدَتِهِ أَنَّهُ لَا يُمَثِّلُ لِشَيْءٍ إلَّا لِنُكْتَةٍ",
    regle_pratique: "Quand Khalīl donne un exemple, c'est toujours pour une raison précise (lever une ambiguïté, signaler une divergence, désigner l'avis mashhūr…). Et une question peut apparaître hors de son chapitre, ou deux fois, parce qu'il la regroupe avec des cas semblables.",
    explication: "Al-Ḥaṭṭāb ouvre son « تَكْمِيلٌ » (takmîl, complément) par des règles de rédaction de Khalīl rapportées par Ibn Ghāzī.\n\nPremière règle : Khalīl ne donne d'exemple (تَمْثِيل, tamthîl) que pour une نُكْتَة (noukta), c'est-à-dire une raison fine. Ibn Ghāzī en cite plusieurs : lever une ambiguïté, mettre en garde contre une erreur, signaler une divergence, désigner l'avis mashhūr, attirer l'attention par le cas le moins fort sur le plus fort (ou l'inverse), suivre la formulation d'un ouvrage, etc.\n\nDeuxième règle : quand Khalīl regroupe des cas semblables (نَظَائِر, nazâ'ir) et que l'un d'eux demande une distinction (تَفْصِيل, tafsîl), il l'énonce sous l'un des deux côtés de la distinction. Puis il passe à l'autre côté avec les cas qui s'y rattachent.\n\nAl-Ḥaṭṭāb ajoute deux remarques, puis une observation d'Ibn Ghāzī. Khalīl place parfois une question hors de son faṣl pour la réunir à des cas semblables, et peut même la répéter pour cette raison. Il lui arrive aussi de traiter une question en détail dans son bāb, puis de la reprendre brièvement avec des cas semblables, en s'appuyant sur le détail déjà donné. Enfin, Ibn Ghāzī a relevé qu'il mentionne parfois parmi ces cas semblables un avis contraire au mashhūr.",
    aqwal: [
      { auteur: "Ibn Ghāzī", avis: "Khalīl ne donne d'exemple que pour une raison précise, et il traite d'une manière déterminée les cas regroupés qui demandent une distinction.", statut: "non_precise" },
      { auteur: "Ibn Ghāzī (au faṣl de l'option, al-khiyār)", avis: "Khalīl mentionne parfois parmi les cas semblables un avis contraire au mashhūr.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb donne un exemple de répétition, tiré du faṣl de l'oubli dans la prière (as-sahw) : Khalīl y réunit des cas appelés « مَسَاجِينُ الْإِمَامِ », alors qu'il avait déjà traité deux d'entre eux chacun dans son bāb.",
      "Exemple d'une reprise brève, au faṣl de l'option (al-khiyār) : « وَبِشَرْطِ نَقْدٍ كَغَائِبٍ ». Khalīl avait déjà donné en détail la règle du paiement (النَّقْد) pour le bien absent."
    ],
    divergences: [],
    exemple: "Vous trouvez une question de la prière en assemblée au milieu d'un faṣl consacré à un autre sujet. Ne concluez pas à une erreur : Khalīl la regroupe avec des cas semblables. Pour le détail, reportez-vous à son bāb d'origine.",
    erreurs_frequentes: [
      "Lire un exemple de Khalīl comme un simple détail : selon Ibn Ghāzī, il a toujours une raison.",
      "Croire qu'une question répétée ou hors de son chapitre signale une contradiction : c'est souvent un regroupement de cas semblables.",
      "Tenir pour mashhūr tout ce qui figure dans un regroupement : Ibn Ghāzī note qu'un avis contraire au mashhūr peut s'y trouver."
    ],
    termes: [
      { ar: "تَكْمِيل", translit: "takmîl", def: "Complément : nom de la section où al-Ḥaṭṭāb ajoute des règles de lecture à celles de Khalīl." },
      { ar: "تَمْثِيل", translit: "tamthîl", def: "Fait de donner un exemple." },
      { ar: "نُكْتَة", translit: "noukta", def: "Raison fine, intention précise derrière une formulation." },
      { ar: "نَظَائِر", translit: "nazâ'ir", def: "Cas semblables, regroupés parce qu'ils partagent une règle." },
      { ar: "تَفْصِيل", translit: "tafsîl", def: "Distinction entre plusieurs situations qui n'ont pas la même règle." }
    ],
    quiz: [
      { q: "Selon Ibn Ghāzī, pourquoi Khalīl donne-t-il un exemple ?",
        choix: ["Toujours pour une raison précise (nukta)", "Par habitude de copiste", "Seulement pour les questions de prière", "Pour allonger le texte"],
        bonne: 0,
        explication: "Ibn Ghāzī : il ne donne d'exemple que pour une nukta, comme lever une ambiguïté ou désigner l'avis mashhūr." },
      { q: "Laquelle de ces raisons Ibn Ghāzī cite-t-il ?",
        choix: ["Citer un hadith", "Nommer un savant", "Désigner l'avis mashhūr", "Donner la date d'un avis"],
        bonne: 2,
        explication: "Parmi les raisons citées : lever une ambiguïté, mettre en garde, signaler une divergence, désigner le mashhūr, etc." },
      { q: "Mise en situation : une question figure deux fois dans le Mukhtaṣar, à deux endroits. Que comprendre ?",
        choix: ["La seconde mention annule la première", "Il s'agit de deux avis contraires", "C'est une erreur de Khalīl", "Khalīl la répète parfois pour la regrouper avec des cas semblables"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : Khalīl place parfois une question hors de son faṣl, voire la répète, pour la réunir à ses semblables." },
      { q: "Un cas cité dans un regroupement est-il forcément mashhūr ?",
        choix: ["Oui, s'il est cité en premier", "Non : Ibn Ghāzī note qu'un avis contraire au mashhūr peut s'y trouver", "On ne peut rien en dire", "Oui, toujours"],
        bonne: 1,
        explication: "Ibn Ghāzī l'a relevé au faṣl de l'option, d'après al-Ḥaṭṭāb." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39" },
    alertes: [
      "Le passage ne définit pas l'expression « مَسَاجِينُ الْإِمَامِ » ; elle est citée sans explication. Non bloquant.",
      "Le « Texte d'al-Ḥaṭṭāb » est ici une citation d'Ibn Ghāzī rapportée par al-Ḥaṭṭāb (« قَالَ ابْنُ غَازِيٍّ: مِنْ قَاعِدَتِهِ … »). Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-02",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 2,
    titre: "« Wa » ou « ka » : à quels cas s'applique une précision",
    titre_ar: "الوَاوُ وَكَافُ التَّشْبِيهِ قَبْلَ القَيْدِ",
    objectif: "Savoir si une précision placée après une liste vaut pour toute la liste ou pour une partie seulement.",
    matn: null,
    nass: "وَإِنْ كَانَ الْقَيْدُ مُخْتَصًّا بِبَعْضِهَا أَدْخَلَ عَلَيْهِ كَافَ التَّشْبِيهِ",
    regle_pratique: "Le plus souvent, quand Khalīl relie des cas par « وَ » puis ajoute une précision, celle-ci vaut pour tous ; s'il introduit une partie des cas par « كَـ » (« comme »), la précision ne vaut que pour les cas placés après ce « كَـ ».",
    explication: "Cette règle vient aussi d'Ibn Ghāzī, cité par al-Ḥaṭṭāb. Elle vaut « le plus souvent » (غَالِبًا).\n\nQuand Khalīl réunit des questions qui ont la même règle et la même condition, il les enchaîne avec la conjonction وَ (wa, « et »). Si une précision (قَيْد, qayd) vient ensuite, on sait qu'elle s'applique à toutes.\n\nSi la précision ne concerne qu'une partie des questions, il fait précéder cette partie du كَافُ التَّشْبِيهِ (kâfou t-tachbîh), la lettre « ka » qui signifie « comme ». La précision vaut alors pour ce qui suit le « ka ».",
    aqwal: [
      { auteur: "Ibn Ghāzī", avis: "Le plus souvent : cas reliés par « wa » → la précision vaut pour tous ; cas introduits par le « kāf » de comparaison → la précision vaut pour ce qui suit le kāf.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Ibn Ghāzī dit « le plus souvent » (غَالِبًا) : la règle connaît des exceptions."
    ],
    divergences: [],
    exemple: "Schéma : « A, B وَ C, à condition que… » → la condition vaut pour A, B et C. Schéma : « A, B, كَـ C et D, à condition que… » → la condition vaut pour C et D seulement.",
    erreurs_frequentes: [
      "Appliquer à toute une liste une précision qui suit un « كَـ » : elle ne vaut que pour ce qui suit le « كَـ ».",
      "Tenir la règle pour absolue : Ibn Ghāzī précise qu'elle vaut le plus souvent."
    ],
    termes: [
      { ar: "قَيْد", translit: "qayd", def: "Précision ou condition qui restreint une règle." },
      { ar: "كَافُ التَّشْبِيهِ", translit: "kâfou t-tachbîh", def: "La lettre « ka » (« comme ») ; chez Khalīl, elle marque les cas auxquels se limite une précision qui suit." },
      { ar: "غَالِبًا", translit: "ghâliban", def: "« Le plus souvent » : la règle admet des exceptions." }
    ],
    quiz: [
      { q: "Khalīl relie trois cas par « وَ » puis ajoute une précision. À quels cas s'applique-t-elle, le plus souvent ?",
        choix: ["À tous les cas", "À aucun", "Au premier seulement", "Au dernier seulement"],
        bonne: 0,
        explication: "Ibn Ghāzī : des cas reliés par « wa » partagent la règle et la condition ; la précision vaut pour tous." },
      { q: "Mise en situation : vous lisez « A, B, كَـ C et D », suivi d'une condition. À qui s'applique-t-elle ?",
        choix: ["À D seulement", "À A, B, C et D", "À C et D seulement", "À A et B seulement"],
        bonne: 2,
        explication: "La précision vaut pour ce qui suit le « kāf » de comparaison." },
      { q: "Cette règle est-elle absolue ?",
        choix: ["Elle ne vaut que pour la prière", "Elle ne vaut que pour la vente", "Oui, sans exception", "Non : Ibn Ghāzī dit qu'elle vaut le plus souvent"],
        bonne: 3,
        explication: "Ibn Ghāzī emploie le mot « غَالِبًا » (le plus souvent)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39" },
    alertes: [
      "Le « Texte d'al-Ḥaṭṭāb » est ici une citation d'Ibn Ghāzī rapportée par al-Ḥaṭṭāb. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-03",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 3,
    titre: "Un verbe sans sujet renvoie à Mālik",
    titre_ar: "الفِعْلُ المُسْنَدُ إِلَى غَائِبٍ لَمْ يَتَقَدَّمْ لَهُ ذِكْرٌ",
    objectif: "Identifier l'auteur d'un avis quand Khalīl emploie un verbe sans sujet exprimé.",
    matn: null,
    nass: "إذَا أَسْنَدُوا الْفِعْلَ إلَى ضَمِيرِ الْفَاعِلِ الْغَائِبِ وَلَمْ يَتَقَدَّمْ لَهُ ذِكْرٌ … فَهُوَ رَاجِعٌ إلَى مَالِكٍ",
    regle_pratique: "Quand Khalīl (ou un autre auteur tardif) emploie un verbe comme « قَالَ », « كَرِهَ » ou « مَنَعَ » sans sujet exprimé ni mentionné auparavant, le sujet est Mālik.",
    explication: "Al-Ḥaṭṭāb pose cette règle pour Khalīl et d'autres auteurs tardifs. Le verbe est rattaché à un pronom de la 3e personne (ضَمِير, damîr) qui ne renvoie à personne de mentionné auparavant. Le sujet sous-entendu est alors Mālik, parce qu'on sait qu'il s'agit de lui (« لِلْعِلْمِ بِهِ »).\n\nAl-Ḥaṭṭāb cite comme exemples : « قَالَ » (il a dit), « كَرِهَ » (il a jugé déconseillé), « مَنَعَ » (il a interdit), « رَخَّصَ » (il a autorisé par exception), « أَجَازَ » (il a permis), « لَمْ يَمْنَعْ » (il n'a pas interdit).",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "La règle est posée pour le seul cas où le sujet n'a pas été mentionné auparavant (« وَلَمْ يَتَقَدَّمْ لَهُ ذِكْرٌ »)."
    ],
    divergences: [],
    exemple: "Vous lisez « وَكَرِهَ … » et personne n'a été nommé avant : comprenez « Mālik a jugé cela déconseillé ».",
    erreurs_frequentes: [
      "Attribuer à Khalīl lui-même un « قَالَ » ou un « كَرِهَ » sans sujet : le sujet sous-entendu est Mālik.",
      "Appliquer la règle sans vérifier qu'aucun sujet n'a été mentionné auparavant : elle ne vise que ce cas."
    ],
    termes: [
      { ar: "ضَمِير", translit: "damîr", def: "Pronom ; ici, le pronom sujet sous-entendu d'un verbe." },
      { ar: "كَرِهَ", translit: "kariha", def: "« Il a jugé déconseillé » ; sans sujet exprimé chez Khalīl : Mālik." },
      { ar: "رَخَّصَ", translit: "rakhkhasa", def: "« Il a autorisé par exception » ; sans sujet exprimé chez Khalīl : Mālik." },
      { ar: "أَجَازَ", translit: "ajâza", def: "« Il a permis » ; sans sujet exprimé chez Khalīl : Mālik." }
    ],
    quiz: [
      { q: "Chez Khalīl, à qui renvoie un verbe sans sujet exprimé ni mentionné avant ?",
        choix: ["À Mālik", "À Ibn al-Qāsim", "À al-Ḥaṭṭāb", "À Khalīl"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : il renvoie à Mālik, parce qu'on sait qu'il s'agit de lui." },
      { q: "Mise en situation : vous lisez « وَمَنَعَ … » sans que personne ait été nommé. Que comprenez-vous ?",
        choix: ["Les savants tardifs l'interdisent", "La question est sans réponse", "Mālik l'a interdit", "Khalīl l'interdit"],
        bonne: 2,
        explication: "Un verbe dont le sujet n'a pas été mentionné renvoie à Mālik." },
      { q: "Lequel de ces verbes figure parmi les exemples d'al-Ḥaṭṭāb ?",
        choix: ["« ظَهَرَ »", "« اُخْتِيرَ »", "« صُحِّحَ »", "« رَخَّصَ »"],
        bonne: 3,
        explication: "Exemples cités : قَالَ، كَرِهَ، مَنَعَ، رَخَّصَ، أَجَازَ، لَمْ يَمْنَعْ." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39" },
    alertes: [
      "Khalīl annonce par ailleurs que la forme verbale de la racine « قَوْل » renvoie à al-Māzirī (fiche int-01-01-03d). Le passage ne dit pas comment distinguer un « قَالَ » d'al-Māzirī d'un « قَالَ » de Mālik. Les commentaires consultés (al-Dardīr, Minaḥ al-Jalīl, Shifāʾ al-Ghalīl) ne donnent pas de critère (voir la fiche 03d) ; la règle de la présente fiche est fidèle au texte. Non bloquant pour cette fiche."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-04a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 4,
    titre: "« Nadb » : le recommandé, en dessous de la sunna",
    titre_ar: "لَفْظُ النَّدْبِ فِي اصْطِلَاحِ المُصَنِّفِ",
    objectif: "Comprendre ce que désignent « مَنْدُوب », « مُسْتَحَبّ » et « سُنَّة » chez Khalīl.",
    matn: null,
    nass: "وَمِنْ عَادَتِهِ وَكَثِيرٍ مِنْ أَهْلِ الْمَذْهَبِ أَنْ يَسْتَعْمِلُوا لَفْظَ النَّدْبِ فِي الِاسْتِحْبَابِ",
    regle_pratique: "Chez Khalīl, « نَدْب / مَنْدُوب » désigne le recommandé simple (mustaḥabb) et non la sunna : le recommandé a des rangs, la sunna est au sommet ; selon al-Ḥaṭṭāb, Khalīl appelle « مُسْتَحَبّ » ou « فَضِيلَة » le rang suivant.",
    explication: "Pour les spécialistes des fondements du droit, le mot نَدْب (nadb, recommandation) couvre tout le recommandé : la sunna, le مُسْتَحَبّ (moustahabb, acte simplement recommandé) et la نَافِلَة (nâfila, œuvre surérogatoire).\n\nKhalīl et beaucoup de malikites emploient au contraire « nadb » au sens étroit de اِسْتِحْبَاب (istihbâb). Al-Ḥaṭṭāb précise que la distinction entre ces degrés est courante dans la terminologie de l'école.\n\nSa lecture de Khalīl est la suivante : la سُنَّة (sounna) occupe le rang le plus haut. Khalīl appelle « مُسْتَحَبّ » ou « فَضِيلَة » (fadîla) ce qui est au deuxième rang. Il divise la sunna en سُنَّةٌ مُؤَكَّدَة (sounna mou'akkada, sunna confirmée) et sunna non confirmée.",
    aqwal: [],
    tarjih_hattab: "Al-Ḥaṭṭāb tire des propos de Khalīl qu'il appelle « mustaḥabb » et « faḍīla » le deuxième rang du recommandé, et qu'il divise la sunna en confirmée et non confirmée (« وَالظَّاهِرُ مِنْ كَلَامِ الْمُصَنِّفِ »).",
    tanbihat: [
      "Selon al-Ḥaṭṭāb, aucun auteur, à sa connaissance, ne conteste que le rang le plus haut du recommandé s'appelle « sunna » (« وَلَا خِلَافَ فِيمَا عَلِمْت »). Les noms des autres rangs varient selon les auteurs (voir la fiche int-01-02-04b)."
    ],
    divergences: [],
    exemple: "Khalīl dit d'un acte qu'il est « مَنْدُوب » : comprenez qu'il est recommandé à un rang inférieur à celui de la sunna. S'il dit « سُنَّة », l'acte est au rang le plus haut du recommandé.",
    erreurs_frequentes: [
      "Lire « مَنْدُوب » chez Khalīl comme englobant la sunna : il l'emploie au sens de mustaḥabb.",
      "Mettre sur le même plan sunna et mustaḥabb : la sunna occupe le rang le plus haut."
    ],
    termes: [
      { ar: "نَدْب", translit: "nadb", def: "Recommandation. Chez Khalīl : le recommandé simple (istiḥbāb), distinct de la sunna." },
      { ar: "مَنْدُوب", translit: "mandoûb", def: "Recommandé. Chez Khalīl : synonyme de mustaḥabb." },
      { ar: "اِسْتِحْبَاب", translit: "istihbâb", def: "Fait d'être simplement recommandé." },
      { ar: "مُسْتَحَبّ", translit: "moustahabb", def: "Acte simplement recommandé ; chez Khalīl, deuxième rang du recommandé (selon al-Ḥaṭṭāb)." },
      { ar: "سُنَّة", translit: "sounna", def: "Rang le plus haut du recommandé, selon tous les auteurs cités par al-Ḥaṭṭāb." },
      { ar: "سُنَّةٌ مُؤَكَّدَة", translit: "sounna mou'akkada", def: "Sunna confirmée ; Khalīl distingue la sunna confirmée de celle qui ne l'est pas." },
      { ar: "فَضِيلَة", translit: "fadîla", def: "Mérite : nom d'un rang du recommandé (le deuxième chez Khalīl selon al-Ḥaṭṭāb, et chez al-Māzirī)." },
      { ar: "نَافِلَة", translit: "nâfila", def: "Œuvre surérogatoire ; chez Ibn Rushd et al-Māzirī, troisième rang du recommandé." }
    ],
    quiz: [
      { q: "Chez Khalīl, que désigne « مَنْدُوب » ?",
        choix: ["Le recommandé simple (mustaḥabb)", "Le permis", "L'obligatoire", "Toute forme de recommandé, sunna comprise"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : Khalīl et beaucoup de malikites emploient « nadb » au sens d'istiḥbāb." },
      { q: "Quel rang occupe la sunna ?",
        choix: ["Elle n'est pas du recommandé", "Le deuxième", "Le plus haut du recommandé", "Le troisième"],
        bonne: 2,
        explication: "Selon al-Ḥaṭṭāb, aucun auteur à sa connaissance ne conteste que le rang le plus haut s'appelle sunna." },
      { q: "Mise en situation : Khalīl qualifie un acte de « مُسْتَحَبّ » et un autre de « سُنَّة ». Lequel est au rang le plus élevé ?",
        choix: ["La sunna", "Ils sont égaux", "On ne peut pas savoir", "Le mustaḥabb"],
        bonne: 0,
        explication: "La sunna est au sommet ; Khalīl appelle mustaḥabb le deuxième rang, selon al-Ḥaṭṭāb." },
      { q: "Comment Khalīl divise-t-il la sunna, selon al-Ḥaṭṭāb ?",
        choix: ["Il ne la divise pas", "En confirmée et non confirmée", "En ancienne et récente", "En individuelle et collective"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : il divise la sunna en مُؤَكَّدَة et غَيْرُ مُؤَكَّدَة." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39-40" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-04b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 4,
    titre: "Les trois rangs du recommandé selon les auteurs",
    titre_ar: "مَرَاتِبُ المَنْدُوبِ عِنْدَ ابْنِ رُشْدٍ وَالمَازِرِيِّ وَابْنِ بَشِيرٍ",
    objectif: "Reconnaître les noms donnés aux rangs du recommandé par Ibn Rushd, al-Māzirī et Ibn Bashīr, et leurs définitions.",
    matn: null,
    nass: "وَلَا خِلَافَ فِيمَا عَلِمْت أَنَّ أَعْلَاهَا يُسَمَّى سُنَّةً وَسَمَّى ابْنُ رُشْدٍ الثَّانِيَ رَغَائِبَ وَالثَّالِثَ نَوَافِلَ وَسَمَّى الْمَازِرِيُّ الثَّانِيَ فَضَائِلَ وَالثَّالِثَ نَوَافِلَ",
    regle_pratique: "Les auteurs malikites divisent le recommandé en trois rangs : tous appellent le premier « sunna » ; Ibn Rushd appelle les deux suivants « raghāʾib » et « nawāfil », al-Māzirī « faḍāʾil » et « nawāfil », et Ibn Bashīr, semble-t-il, « raghība » et « mustaḥabb ».",
    explication: "Selon al-Ḥaṭṭāb, Ibn Rushd (dans al-Muqaddimāt), al-Māzirī, Ibn Bashīr et d'autres auteurs tardifs divisent le recommandé en trois rangs, même s'ils les nomment différemment.\n\nAl-Māzirī : on appelle sunna ce dont la Loi a élevé le rang, renforcé l'ordre, encouragé et rendu public, comme les prières des deux fêtes et la prière pour la pluie. On appelle نَافِلَة (nâfila) ce qui se trouve à l'autre extrémité, et فَضِيلَة (fadîla) ce qui est entre les deux. Ibn Rāshid dit de même.\n\nIbn Rushd : la sunna est ce que le Prophète ﷺ a ordonné de faire sans indice d'obligation, ou ce qu'il a fait avec constance, mais pas à la manière des œuvres surérogatoires. Les رَغَائِب (raghâ'ib) sont ce qu'il a fait avec constance à la manière des œuvres surérogatoires, ou ce qu'il a encouragé en disant « celui qui fait ceci aura cela ». Les نَوَافِل (nawâfil) sont ce dont la Loi établit qu'il est récompensé, sans que le Prophète ﷺ l'ait ordonné, encouragé ou fait avec constance.\n\nIbn Bashīr : ce que le Prophète ﷺ a fait avec constance et publiquement est une sunna, sans divergence. Ce qu'il a signalé de manière générale parmi les bonnes œuvres est مُسْتَحَبّ. Ce qu'il a fait la plupart du temps et délaissé parfois est une فَضِيلَة, appelée aussi رَغِيبَة (raghîba). Pour ce qu'il a fait avec constance sans le rendre public, il y a deux avis (voir ci-dessous) ; l'exemple donné est celui des deux unités de prière de l'aube (رَكْعَتَا الْفَجْرِ).",
    aqwal: [
      { auteur: "Ibn Bashīr (premier avis rapporté)", avis: "Ce que le Prophète ﷺ a fait avec constance sans le rendre public s'appelle sunna, en considération de la constance.", statut: "non_precise" },
      { auteur: "Ibn Bashīr (second avis rapporté)", avis: "Il s'appelle faḍīla, en considération de l'absence de publicité.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb ajoute qu'Ibn Bashīr compte un quatrième rang, objet de divergence (« وَزَادَ قِسْمًا رَابِعًا مُخْتَلَفًا فِيهِ »). La citation d'Ibn Bashīr comporte en effet une catégorie sur laquelle il rapporte deux avis : ce qui a été fait avec constance sans être rendu public."
    ],
    divergences: [],
    exemple: "Vous lisez chez un auteur malikite le mot « رَغَائِب ». Chez Ibn Rushd, ce mot désigne le deuxième rang du recommandé, entre la sunna et les nawāfil. Chez al-Māzirī, ce même rang s'appelle « فَضَائِل ».",
    erreurs_frequentes: [
      "Croire que tous les auteurs nomment de la même façon les rangs du recommandé : seuls ils s'accordent sur le nom du premier rang (sunna).",
      "Confondre « nawāfil », troisième rang chez Ibn Rushd et al-Māzirī, et « raghāʾib », deuxième rang chez Ibn Rushd."
    ],
    termes: [
      { ar: "رَغَائِب", translit: "raghâ'ib", def: "Chez Ibn Rushd : deuxième rang du recommandé (ce que le Prophète ﷺ a fait avec constance à la manière des œuvres surérogatoires, ou encouragé)." },
      { ar: "رَغِيبَة", translit: "raghîba", def: "Singulier de raghāʾib ; chez Ibn Bashīr, autre nom de la faḍīla." },
      { ar: "نَوَافِل", translit: "nawâfil", def: "Œuvres surérogatoires ; troisième rang du recommandé chez Ibn Rushd et al-Māzirī." },
      { ar: "فَضَائِل", translit: "fadâ'il", def: "Pluriel de faḍīla ; chez al-Māzirī, deuxième rang du recommandé." }
    ],
    quiz: [
      { q: "Sur quel nom tous les auteurs cités s'accordent-ils ?",
        choix: ["« nawāfil » pour le deuxième rang", "« faḍāʾil » pour le troisième rang", "« sunna » pour le premier rang", "Aucun"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : pas de divergence, à sa connaissance, sur le fait que le premier rang s'appelle sunna." },
      { q: "Comment Ibn Rushd appelle-t-il le deuxième rang ?",
        choix: ["Mustaḥabb", "Raghāʾib", "Nawāfil", "Faḍāʾil"],
        bonne: 1,
        explication: "Ibn Rushd : raghāʾib pour le deuxième rang, nawāfil pour le troisième." },
      { q: "Comment al-Māzirī appelle-t-il le deuxième rang ?",
        choix: ["Raghāʾib", "Mustaḥabb", "Faḍāʾil", "Sunna"],
        bonne: 2,
        explication: "Al-Māzirī : faḍāʾil pour le deuxième rang, nawāfil pour le troisième." },
      { q: "Mise en situation : selon Ibn Bashīr, quel statut a un acte que le Prophète ﷺ a fait avec constance et publiquement ?",
        choix: ["Deux avis", "Sunna, sans divergence", "Mustaḥabb", "Faḍīla"],
        bonne: 1,
        explication: "Ibn Bashīr : ce qui a été fait avec constance et publiquement est une sunna, sans divergence. Les deux avis portent sur ce qui a été fait avec constance sans être rendu public." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39-40" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-05a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 5,
    titre: "« Jawâz » : ce qui est permis",
    titre_ar: "لَفْظُ الجَوَازِ",
    objectif: "Comprendre le sens de « يَجُوزُ » / « جَوَاز » chez les malikites.",
    matn: null,
    nass: "وَمِنْ عَادَتِهِمْ أَيْضًا أَنْ يَسْتَعْمِلُوا لَفْظَ الْجَوَازِ وَيُرِيدُونَ بِهِ الْمُبَاحَ",
    regle_pratique: "Quand les malikites disent qu'un acte est « جَائِز » (permis), ils veulent dire en général qu'il est مُبَاح : ni demandé ni défendu, le faire ou s'en abstenir revient au même.",
    explication: "Al-Ḥaṭṭāb note que les auteurs de l'école emploient habituellement le mot جَوَاز (jawâz, permission) au sens de مُبَاح (moubâh), l'acte neutre.\n\nIl cite al-Qarāfī, dans son commentaire du Tanqīḥ : « jawâz » a deux sens. Le premier est la simple possibilité d'agir, quelle qu'elle soit : il englobe alors même l'obligatoire. Le second est l'égalité des deux côtés, faire ou ne pas faire. C'est le mubāḥ, dans la terminologie des auteurs tardifs.",
    aqwal: [
      { auteur: "Al-Qarāfī (Sharḥ at-Tanqīḥ)", avis: "« Jawāz » a deux sens : la possibilité d'agir, qui englobe l'obligatoire, et l'égalité des deux côtés, qui est le mubāḥ chez les auteurs tardifs.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [],
    divergences: [],
    exemple: "Vous lisez qu'un acte « يَجُوزُ ». Comprenez d'abord qu'il est permis au sens neutre : il n'est ni recommandé ni déconseillé, sauf si le contexte montre que le mot est pris au sens large.",
    erreurs_frequentes: [
      "Lire « يَجُوزُ » comme « il est recommandé » : le mot désigne en général l'acte neutre (mubāḥ).",
      "Oublier le sens large signalé par al-Qarāfī, où « jawāz » englobe même l'obligatoire."
    ],
    termes: [
      { ar: "جَوَاز", translit: "jawâz", def: "Permission. Chez les malikites, en général : l'acte neutre (mubāḥ). Au sens large (al-Qarāfī) : toute possibilité d'agir, obligatoire compris." },
      { ar: "مُبَاح", translit: "moubâh", def: "Acte neutre : le faire ou s'en abstenir revient au même." }
    ],
    quiz: [
      { q: "Que désigne en général « جَوَاز » chez les malikites ?",
        choix: ["L'interdit", "Le recommandé", "Le mubāḥ (acte neutre)", "L'obligatoire"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : ils emploient « jawāz » en voulant dire le mubāḥ." },
      { q: "Selon al-Qarāfī, quel est le sens large de « jawāz » ?",
        choix: ["La possibilité d'agir, qui englobe même l'obligatoire", "Le déconseillé", "La recommandation seule", "L'interdiction"],
        bonne: 0,
        explication: "Premier sens chez al-Qarāfī : la possibilité d'agir, quelle qu'elle soit, jusqu'à inclure l'obligatoire." },
      { q: "Mise en situation : un texte malikite dit d'un acte qu'il « يَجُوزُ ». Quelle lecture adopter d'abord ?",
        choix: ["Il est recommandé", "Il est permis au sens neutre (mubāḥ)", "Il est obligatoire", "Il est déconseillé"],
        bonne: 1,
        explication: "C'est l'usage habituel signalé par al-Ḥaṭṭāb, sauf indice contraire." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-05b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 5,
    titre: "« Fard » et « wâjib » : deux noms de l'obligatoire",
    titre_ar: "الفَرْضُ وَالوَاجِبُ",
    objectif: "Savoir que « فَرْض » et « وَاجِب » sont synonymes dans l'école, et connaître le second sens de « وَاجِب ».",
    matn: null,
    nass: "وَاعْلَمْ أَنَّ الْفَرْضَ وَالْوَاجِبَ مُتَرَادِفَانِ عِنْدَ أَهْلِ الْمَذْهَبِ",
    regle_pratique: "Dans l'école malikite, « فَرْض » et « وَاجِب » sont synonymes : tous deux désignent l'obligatoire, dont l'abandon est un péché (avec une exception annoncée pour le pèlerinage) ; « وَاجِب » peut aussi désigner une condition de validité.",
    explication: "Al-Ḥaṭṭāb pose que le فَرْض (fard) et le وَاجِب (wâjib) sont synonymes pour les auteurs de l'école. Il annonce une exception, qu'il signalera au bāb du pèlerinage.\n\nIl cite ensuite al-Dhakhīra, au livre de l'objet trouvé : le mot « wâjib » a deux sens. Le premier, le plus connu, est ce dont l'abandon est un péché. Le second est ce dont une chose dépend, même si son abandon n'est pas un péché.\n\nExemple du second sens : on dit que les ablutions sont « obligatoires » pour la prière surérogatoire. Celui qui ne fait ni les ablutions ni cette prière ne commet pas de péché. Le sens est que la validité de la prière dépend de la purification et du fait de couvrir sa ʿawra (les parties du corps qui doivent être couvertes).",
    aqwal: [
      { auteur: "Al-Dhakhīra (auteur non nommé dans le passage)", avis: "« Wājib » a deux sens : ce dont l'abandon est un péché (sens le plus connu), et ce dont une chose dépend sans que son abandon soit un péché.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb annonce une exception à la synonymie de fard et wājib, à traiter au bāb du pèlerinage ; le passage n'en dit pas plus."
    ],
    divergences: [],
    exemple: "Vous lisez que les ablutions sont « وَاجِب » pour une prière surérogatoire. Comprenez : sans ablutions, cette prière n'est pas valide. Cela ne veut pas dire qu'on pèche en ne faisant pas de prière surérogatoire.",
    erreurs_frequentes: [
      "Chercher une différence de degré entre fard et wājib dans l'école : ils sont synonymes, sauf l'exception annoncée pour le pèlerinage.",
      "Lire tout « وَاجِب » comme « dont l'abandon est un péché » : le mot peut désigner une condition de validité."
    ],
    termes: [
      { ar: "فَرْض", translit: "fard", def: "Obligatoire ; synonyme de wājib dans l'école malikite." },
      { ar: "وَاجِب", translit: "wâjib", def: "Obligatoire : ce dont l'abandon est un péché ; parfois, ce dont dépend la validité d'un acte." },
      { ar: "مُتَرَادِفَان", translit: "moutarâdifân", def: "Deux mots synonymes." }
    ],
    quiz: [
      { q: "Quel rapport y a-t-il entre « فَرْض » et « وَاجِب » dans l'école malikite ?",
        choix: ["Ils sont synonymes", "Le fard est plus fort que le wājib", "Ils n'ont rien à voir", "Le wājib est plus fort que le fard"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : ils sont synonymes, sauf une exception annoncée pour le pèlerinage." },
      { q: "Quel est le sens le plus connu de « wājib » selon al-Dhakhīra ?",
        choix: ["Ce qui est recommandé", "Ce qui est permis", "Ce dont l'abandon est un péché", "Ce dont dépend la validité d'un acte"],
        bonne: 2,
        explication: "Al-Dhakhīra : c'est le sens « le plus connu » (الْمَعْنَى الْمَشْهُورُ)." },
      { q: "Mise en situation : on vous dit que les ablutions sont « obligatoires » pour une prière surérogatoire. Pécheriez-vous en ne faisant ni l'une ni l'autre ?",
        choix: ["On ne peut pas savoir", "Non : le mot signifie ici que la validité de la prière dépend des ablutions", "Oui", "Oui, mais seulement le vendredi"],
        bonne: 1,
        explication: "C'est l'exemple du second sens de « wājib » cité d'al-Dhakhīra." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-06",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 6,
    titre: "« Riwâyât », « aqwâl », « ittifâq », « ijmâʿ »",
    titre_ar: "الرِّوَايَاتُ وَالأَقْوَالُ وَالاتِّفَاقُ وَالإِجْمَاعُ",
    objectif: "Savoir à qui renvoient « الرِّوَايَات » et « الأَقْوَال », et distinguer « اتِّفَاق » et « إِجْمَاع ».",
    matn: null,
    nass: "وَقَاعِدَةُ الْمُصَنِّفِ وَغَيْرِهِ غَالِبًا أَنَّ الْمُرَادَ بِالرِّوَايَاتِ أَقْوَالُ مَالِكٍ وَأَنَّ الْمُرَادَ بِالْأَقْوَالِ أَقْوَالُ أَصْحَابِهِ",
    regle_pratique: "Le plus souvent, chez Khalīl et d'autres, « الرِّوَايَات » désigne les avis de Mālik et « الأَقْوَال » ceux de ses compagnons et des savants postérieurs ; « اتِّفَاق » est l'accord des savants de l'école, « إِجْمَاع » celui de tous les savants.",
    explication: "Al-Ḥaṭṭāb pose une règle qui vaut le plus souvent (غَالِبًا) chez Khalīl et chez d'autres auteurs.\n\nLes الرِّوَايَات (ar-riwâyât, « les versions transmises ») sont les avis de Mālik. Les الأَقْوَال (al-aqwâl, « les avis ») sont ceux de ses compagnons et des savants venus après eux, parmi les tardifs, comme Ibn Rushd, al-Māzirī et leurs semblables. Il arrive que l'usage soit différent.\n\nLe الاتِّفَاق (al-ittifâq, l'accord) désigne l'accord des savants de l'école. Le الإِجْمَاع (al-ijmâʿ, le consensus) désigne celui de l'ensemble des savants.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb précise que l'usage peut être différent (« وَقَدْ يَقَعُ بِخِلَافِ ذَلِكَ »)."
    ],
    divergences: [],
    exemple: "Vous lisez « فِي ذَلِكَ رِوَايَتَانِ » : comprenez que deux avis sont rapportés de Mālik lui-même. Si vous lisez « بِالِاتِّفَاقِ », comprenez : les savants de l'école sont d'accord, ce qui ne veut pas dire que tous les savants le sont.",
    erreurs_frequentes: [
      "Confondre « اتِّفَاق » (accord de l'école) et « إِجْمَاع » (consensus de tous les savants).",
      "Attribuer à Mālik des « أَقْوَال » : le mot désigne le plus souvent les avis de ses compagnons et des savants postérieurs."
    ],
    termes: [
      { ar: "الرِّوَايَات", translit: "ar-riwâyât", def: "Le plus souvent, chez Khalīl et d'autres : les avis de Mālik." },
      { ar: "الأَقْوَال", translit: "al-aqwâl", def: "Le plus souvent, chez Khalīl et d'autres : les avis des compagnons de Mālik et des savants postérieurs." },
      { ar: "الاتِّفَاق", translit: "al-ittifâq", def: "L'accord des savants de l'école malikite." },
      { ar: "الإِجْمَاع", translit: "al-ijmâʿ", def: "Le consensus de l'ensemble des savants." }
    ],
    quiz: [
      { q: "Le plus souvent, à qui renvoient « الرِّوَايَات » ?",
        choix: ["Aux avis d'Ibn Rushd", "Aux avis des autres écoles", "Aux avis de Mālik", "Aux hadiths"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : le plus souvent, les « riwāyāt » sont les avis de Mālik." },
      { q: "Quelle différence entre « اتِّفَاق » et « إِجْمَاع » ?",
        choix: ["Aucune", "Consensus de tous / accord de l'école", "Accord de deux savants / de trois", "Accord de l'école / consensus de tous les savants"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : ittifāq = accord des gens de l'école ; ijmāʿ = consensus des savants." },
      { q: "Mise en situation : vous lisez qu'une question comporte « deux riwāyāt ». Que comprenez-vous ?",
        choix: ["Deux lectures de la Mudawwana", "Deux avis rapportés de Mālik", "Deux hadiths", "Deux avis d'Ibn al-Qāsim"],
        bonne: 1,
        explication: "Le plus souvent, « riwāyāt » désigne les avis de Mālik." },
      { q: "Cette règle vaut-elle toujours ?",
        choix: ["Le plus souvent : l'usage peut être différent", "Oui, sans exception", "Jamais chez Khalīl", "Seulement dans le chapitre de la prière"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb dit « غَالِبًا » et précise que l'usage peut être différent." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40" },
    alertes: [],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 4 — faṣl int-01-02 : le « تَكْمِيلٌ » d'al-Ḥaṭṭāb, partie 2   */
  /* t. 1, p. 40–42 (Shamela 569, pages 39–41). Pas de matn : champ nass */
  /* ================================================================== */

  {
    id: "int-01-02-07a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 7,
    titre: "« Les sept juristes » de Médine",
    titre_ar: "الفُقَهَاءُ السَّبْعَةُ",
    objectif: "Savoir qui sont « les sept juristes » quand un texte malikite les cite.",
    matn: null,
    nass: "وَالْمُرَادُ بِالْفُقَهَاءِ السَّبْعَةِ سَعِيدُ بْنُ الْمُسَيِّبِ وَعُرْوَةُ بْنُ الزُّبَيْرِ وَالْقَاسِمُ بْنُ مُحَمَّدِ بْنِ أَبِي بَكْرِ الصِّدِّيقِ وَخَارِجَةُ بْنُ زَيْدِ بْنِ ثَابِتٍ وَعُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ عُتْبَةَ بْنِ مَسْعُودٍ وَسُلَيْمَانُ بْنُ يَسَارٍ",
    regle_pratique: "« Les sept juristes » (الفُقَهَاءُ السَّبْعَةُ) sont Saʿīd ibn al-Musayyib, ʿUrwa ibn az-Zubayr, al-Qāsim ibn Muḥammad, Khārija ibn Zayd, ʿUbayd Allāh ibn ʿAbd Allāh ibn ʿUtba et Sulaymān ibn Yasār ; le septième est discuté (Abū Salama, Sālim ou Abū Bakr ibn ʿAbd ar-Raḥmān).",
    explication: "Al-Ḥaṭṭāb donne la liste de ceux que l'on appelle الفُقَهَاءُ السَّبْعَةُ (al-fouqahâ'ou s-sabʿa, « les sept juristes »).\n\nSix noms sont donnés sans divergence : Saʿīd ibn al-Musayyib ; ʿUrwa ibn az-Zubayr ; al-Qāsim ibn Muḥammad ibn Abī Bakr aṣ-Ṣiddīq ; Khārija ibn Zayd ibn Thābit ; ʿUbayd Allāh ibn ʿAbd Allāh ibn ʿUtba ibn Masʿūd ; Sulaymān ibn Yasār.\n\nLe septième est discuté. Trois avis sont rapportés sans attribution : Abū Salama ibn ʿAbd ar-Raḥmān ibn ʿAwf, Sālim ibn ʿAbd Allāh, ou Abū Bakr ibn ʿAbd ar-Raḥmān.\n\nUn poète les a réunis dans deux vers. Al-Ḥaṭṭāb précise qu'il a suivi le troisième avis (Abū Bakr ibn ʿAbd ar-Raḥmān).",
    aqwal: [
      { auteur: "avis rapporté sans attribution", avis: "Le septième est Abū Salama ibn ʿAbd ar-Raḥmān ibn ʿAwf.", statut: "non_precise" },
      { auteur: "avis rapporté sans attribution", avis: "Le septième est Sālim ibn ʿAbd Allāh.", statut: "non_precise" },
      { auteur: "avis rapporté sans attribution", avis: "Le septième est Abū Bakr ibn ʿAbd ar-Raḥmān (avis suivi par le poète cité).", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Les deux vers cités par al-Ḥaṭṭāb nomment ʿUbayd Allāh, ʿUrwa, Qāsim, Saʿīd, Abū Bakr, Sulaymān et Khārija."
    ],
    divergences: [],
    exemple: "Vous lisez qu'un avis est celui « des sept juristes ». Comprenez : celui de ce groupe de savants de la liste d'al-Ḥaṭṭāb, dont le septième membre est discuté.",
    erreurs_frequentes: [
      "Croire que la liste fait l'unanimité : le septième nom est discuté (trois avis)."
    ],
    termes: [
      { ar: "الفُقَهَاءُ السَّبْعَةُ", translit: "al-fouqahâ'ou s-sabʿa", def: "« Les sept juristes » : Saʿīd ibn al-Musayyib, ʿUrwa, al-Qāsim ibn Muḥammad, Khārija, ʿUbayd Allāh, Sulaymān ibn Yasār, et un septième discuté." }
    ],
    quiz: [
      { q: "Lequel de ces savants fait partie des sept juristes sans divergence ?",
        choix: ["Ibn Rushd", "Saḥnūn", "Ibn al-Qāsim", "Saʿīd ibn al-Musayyib"],
        bonne: 3,
        explication: "Saʿīd ibn al-Musayyib est le premier de la liste d'al-Ḥaṭṭāb." },
      { q: "Le septième juriste fait-il l'unanimité ?",
        choix: ["Non : trois avis sont rapportés", "Non : deux avis", "Oui", "La liste ne compte que six noms"],
        bonne: 0,
        explication: "Abū Salama, Sālim ou Abū Bakr ibn ʿAbd ar-Raḥmān." },
      { q: "Mise en situation : vous lisez deux vers qui citent « Abū Bakr » parmi les sept. Quel avis le poète suit-il ?",
        choix: ["Le deuxième (Sālim)", "Le premier (Abū Salama)", "Aucun", "Le troisième (Abū Bakr ibn ʿAbd ar-Raḥmān)"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : le poète a suivi le troisième avis." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-07b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 7,
    titre: "Médinois, Égyptiens, Irakiens, Maghrébins",
    titre_ar: "المَدَنِيُّونَ وَالمِصْرِيُّونَ وَالعِرَاقِيُّونَ وَالمَغَارِبَةُ",
    objectif: "Savoir quels savants désignent les groupes « المَدَنِيُّونَ », « المِصْرِيُّونَ », « العِرَاقِيُّونَ » et « المَغَارِبَةُ ».",
    matn: null,
    nass: "وَالْمَدَنِيُّونَ يُشَارُ بِهِمْ إلَى ابْنِ كِنَانَةَ وَابْنِ الْمَاجِشُونِ وَمُطَرِّفٍ وَابْنِ نَافِعٍ وَابْنِ مَسْلَمَةَ وَنُظَرَائِهِمْ",
    regle_pratique: "Les « Médinois » désignent Ibn Kināna, Ibn al-Mājishūn, Muṭarrif, Ibn Nāfiʿ, Ibn Maslama et leurs pairs ; les « Égyptiens », Ibn al-Qāsim, Ashhab, Ibn Wahb, Aṣbagh, Ibn ʿAbd al-Ḥakam et leurs pairs ; les « Irakiens », le qāḍī Ismāʿīl, Ibn al-Qaṣṣār, Ibn al-Jallāb, le qāḍī ʿAbd al-Wahhāb, le qāḍī Abū l-Faraj, al-Abharī et leurs pairs ; les « Maghrébins », notamment Ibn Abī Zayd, al-Bājī, al-Lakhmī, Ibn ʿAbd al-Barr et Ibn Rushd.",
    explication: "Les auteurs malikites renvoient souvent à des groupes de savants désignés par leur région. Al-Ḥaṭṭāb en donne la composition.\n\nالمَدَنِيُّونَ (al-madaniyyoûn, les Médinois) : Ibn Kināna, Ibn al-Mājishūn, Muṭarrif, Ibn Nāfiʿ, Ibn Maslama et leurs pairs.\n\nالمِصْرِيُّونَ (al-misriyyoûn, les Égyptiens) : Ibn al-Qāsim, Ashhab, Ibn Wahb, Aṣbagh ibn al-Faraj, Ibn ʿAbd al-Ḥakam et leurs pairs.\n\nالعِرَاقِيُّونَ (al-ʿirâqiyyoûn, les Irakiens) : le qāḍī Ismāʿīl, le qāḍī Abū l-Ḥasan ibn al-Qaṣṣār, Ibn al-Jallāb, le qāḍī ʿAbd al-Wahhāb, le qāḍī Abū l-Faraj, le shaykh Abū Bakr al-Abharī et leurs pairs.\n\nالمَغَارِبَةُ (al-maghâriba, les Maghrébins) : le shaykh Ibn Abī Zayd, Ibn al-Qābisī, Ibn al-Labbād, al-Bājī, al-Lakhmī, Ibn Muḥriz, Ibn ʿAbd al-Barr, Ibn Rushd, Ibn al-ʿArabī, le qāḍī Sanad.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb identifie ensuite trois noms : al-Makhzūmī est al-Mughīra ibn ʿAbd ar-Raḥmān al-Makhzūmī, l'un des grands compagnons de Mālik, dont al-Bukhārī a rapporté et que les Madārik placent au début de la première génération des compagnons de Mālik ; Ibn Shablūn figure, selon ʿIyāḍ, dans la sixième génération des Madārik ; Ibn Shaʿbān est l'auteur d'az-Zāhī, connu aussi comme Ibn al-Qurṭī (« al-Qurṭī » : qāf avec ḍamma, rā' sans voyelle, puis ṭā' avec kasra)."
    ],
    divergences: [],
    exemple: "Vous lisez « وَقَالَ الْمِصْرِيُّونَ … ». Comprenez : c'est l'avis d'Ibn al-Qāsim, Ashhab, Ibn Wahb, Aṣbagh, Ibn ʿAbd al-Ḥakam et de leurs pairs.",
    erreurs_frequentes: [
      "Placer Ibn al-Qāsim parmi les Médinois : al-Ḥaṭṭāb le range parmi les Égyptiens.",
      "Croire que ces listes sont fermées : chacune se termine par « et leurs pairs » (وَنُظَرَائِهِمْ)."
    ],
    termes: [
      { ar: "المَدَنِيُّونَ", translit: "al-madaniyyoûn", def: "« Les Médinois » : Ibn Kināna, Ibn al-Mājishūn, Muṭarrif, Ibn Nāfiʿ, Ibn Maslama et leurs pairs." },
      { ar: "المِصْرِيُّونَ", translit: "al-misriyyoûn", def: "« Les Égyptiens » : Ibn al-Qāsim, Ashhab, Ibn Wahb, Aṣbagh, Ibn ʿAbd al-Ḥakam et leurs pairs." },
      { ar: "العِرَاقِيُّونَ", translit: "al-ʿirâqiyyoûn", def: "« Les Irakiens » : le qāḍī Ismāʿīl, Ibn al-Qaṣṣār, Ibn al-Jallāb, le qāḍī ʿAbd al-Wahhāb, le qāḍī Abū l-Faraj, al-Abharī et leurs pairs." },
      { ar: "المَغَارِبَةُ", translit: "al-maghâriba", def: "« Les Maghrébins » : Ibn Abī Zayd, Ibn al-Qābisī, Ibn al-Labbād, al-Bājī, al-Lakhmī, Ibn Muḥriz, Ibn ʿAbd al-Barr, Ibn Rushd, Ibn al-ʿArabī, le qāḍī Sanad…" }
    ],
    quiz: [
      { q: "À quel groupe al-Ḥaṭṭāb rattache-t-il Ibn al-Qāsim ?",
        choix: ["Les Égyptiens", "Les Médinois", "Les Maghrébins", "Les Irakiens"],
        bonne: 0,
        explication: "Les Égyptiens : Ibn al-Qāsim, Ashhab, Ibn Wahb, Aṣbagh, Ibn ʿAbd al-Ḥakam." },
      { q: "Le qāḍī ʿAbd al-Wahhāb fait partie…",
        choix: ["des Médinois", "des Égyptiens", "des Maghrébins", "des Irakiens"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb le range parmi les Irakiens." },
      { q: "Mise en situation : un texte dit « c'est l'avis des Maghrébins ». Lequel de ces savants est visé ?",
        choix: ["Ibn al-Mājishūn", "Al-Abharī", "Al-Lakhmī", "Ashhab"],
        bonne: 2,
        explication: "Al-Lakhmī figure dans la liste des Maghrébins." },
      { q: "Que signifie la mention « et leurs pairs » (وَنُظَرَائِهِمْ) à la fin des listes ?",
        choix: ["Que la liste est complète", "Que d'autres savants semblables font partie du groupe", "Que ces savants sont faibles", "Qu'ils sont tous Égyptiens"],
        bonne: 1,
        explication: "Les listes ne sont pas fermées : elles nomment les principaux, puis leurs pairs." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40" },
    alertes: [
      "Dans l'édition, les trois noms identifiés à la fin (al-Makhzūmī, Ibn Shablūn, Ibn Shaʿbān) suivent la liste des Maghrébins sans séparation nette. Al-Makhzūmī étant présenté comme un compagnon de Mālik, la fiche les traite comme des notes d'identification, et non comme des membres du groupe. Non bloquant.",
      "L'édition identifie Ibn Shablūn comme « أَبُو مُوسَى بْنُ شَاسٍ » ; lecture reproduite sans pouvoir la vérifier ici, elle n'est pas reprise dans la fiche. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-08a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 8,
    titre: "« Al-joumhoûr » et trois mises en garde",
    titre_ar: "الجُمْهُورُ وَالتَّحْذِيرُ مِنْ بَعْضِ الحِكَايَاتِ",
    objectif: "Savoir qui désigne « الجُمْهُور » en droit comparé, et se méfier de certains accords et divergences rapportés.",
    matn: null,
    nass: "حَذَّرُوا أَيْ الشُّيُوخُ مِنْ إجْمَاعَاتِ ابْنِ عَبْدِ الْبَرِّ وَاتِّفَاقَاتِ ابْنِ رُشْدٍ",
    regle_pratique: "Selon des maîtres cités par Zarrūq, « الجُمْهُور » désigne, quand on compare les écoles, Mālik, ash-Shāfiʿī, Aḥmad et Abū Ḥanīfa ; les maîtres mettaient aussi en garde contre les consensus rapportés par Ibn ʿAbd al-Barr et les accords rapportés par Ibn Rushd.",
    explication: "Al-Ḥaṭṭāb rapporte plusieurs remarques (فَوَائِد, fawâ'id) du shaykh Zarrūq, tirées de son commentaire de la Risāla.\n\nPremière remarque : Zarrūq a entendu un de ses maîtres dire que, dans le domaine de la divergence entre écoles, le mot الجُمْهُور (al-joumhoûr, « la majorité ») vise Mālik, ash-Shāfiʿī, Aḥmad et Abū Ḥanīfa.\n\nDeuxième remarque : les maîtres mettaient en garde contre les « consensus » (إِجْمَاعَات) rapportés par Ibn ʿAbd al-Barr et les « accords » (اتِّفَاقَات) rapportés par Ibn Rushd. Ils citaient aussi les « divergences » rapportées par al-Bājī ; la suite de la phrase est difficile à lire dans l'édition (voir les alertes).\n\nAl-Ḥaṭṭāb ajoute une observation sur al-Lakhmī : il dit souvent « on diverge sur telle question » (يُخْتَلَفُ). Or, face au texte transmis sur la question, l'avis opposé n'est parfois qu'une déduction (تَخْرِيج, takhrîj) ou un choix d'al-Lakhmī lui-même.",
    aqwal: [
      { auteur: "Un maître de Zarrūq (rapporté par Zarrūq)", avis: "Dans la divergence entre écoles, « al-jumhūr » vise Mālik, ash-Shāfiʿī, Aḥmad et Abū Ḥanīfa.", statut: "non_precise" },
      { auteur: "Les maîtres (rapporté par Zarrūq)", avis: "Se méfier des consensus d'Ibn ʿAbd al-Barr, des accords d'Ibn Rushd et des divergences rapportées par al-Bājī.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb : quand al-Lakhmī écrit « يُخْتَلَفُ فِي كَذَا », l'avis opposé au texte transmis est souvent une déduction (takhrīj) ou un choix d'al-Lakhmī."
    ],
    divergences: [],
    exemple: "Vous lisez chez al-Lakhmī « on diverge sur cette question ». Ne concluez pas qu'il existe deux avis transmis : selon al-Ḥaṭṭāb, l'avis opposé est souvent une déduction ou un choix d'al-Lakhmī lui-même.",
    erreurs_frequentes: [
      "Tenir pour acquis tout « consensus » rapporté par Ibn ʿAbd al-Barr ou tout « accord » rapporté par Ibn Rushd : les maîtres mettaient en garde.",
      "Prendre « يُخْتَلَفُ » d'al-Lakhmī pour la preuve d'une divergence transmise."
    ],
    termes: [
      { ar: "فَوَائِد", translit: "fawâ'id", def: "« Remarques utiles » : notes ajoutées par un auteur." },
      { ar: "الجُمْهُور", translit: "al-joumhoûr", def: "« La majorité » ; en droit comparé, selon un maître cité par Zarrūq : Mālik, ash-Shāfiʿī, Aḥmad et Abū Ḥanīfa." },
      { ar: "تَخْرِيج", translit: "takhrîj", def: "Déduction d'un avis à partir d'un autre avis ou d'une règle de l'école, sans texte transmis sur la question." },
      { ar: "يُخْتَلَفُ", translit: "youkhtalafou", def: "« On diverge » ; chez al-Lakhmī, l'avis opposé est souvent une déduction ou son propre choix." }
    ],
    quiz: [
      { q: "Selon un maître cité par Zarrūq, qui vise « al-jumhūr » en droit comparé ?",
        choix: ["Les sept juristes", "Les compagnons de Mālik", "Les savants d'Égypte", "Mālik, ash-Shāfiʿī, Aḥmad et Abū Ḥanīfa"],
        bonne: 3,
        explication: "C'est ce que rapporte Zarrūq dans son commentaire de la Risāla." },
      { q: "Contre quoi les maîtres mettaient-ils en garde, selon Zarrūq ?",
        choix: ["Les consensus rapportés par Ibn ʿAbd al-Barr", "Les hadiths", "Les avis de Mālik", "La Mudawwana"],
        bonne: 0,
        explication: "Ils mettaient en garde contre les consensus d'Ibn ʿAbd al-Barr, les accords d'Ibn Rushd et les divergences d'al-Bājī." },
      { q: "Mise en situation : al-Lakhmī écrit « يُخْتَلَفُ فِي كَذَا ». Que vous dit al-Ḥaṭṭāb ?",
        choix: ["Il y a forcément deux avis transmis de Mālik", "La question fait consensus", "L'avis opposé est souvent une déduction ou un choix d'al-Lakhmī", "C'est un avis d'une autre école"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : l'avis opposé au texte transmis est souvent un takhrīj ou un choix d'al-Lakhmī." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "40-41" },
    alertes: [
      "Première remarque : l'édition porte « إذَا قَالَ: أَصْلُ الْخِلَافِ كَبِيرُ الْجُمْهُورِ », formule altérée. La fiche retient seulement le sens sûr (« al-jumhūr » = les quatre imams, dans le domaine de la divergence). Non bloquant.",
      "Deuxième remarque : la phrase sur al-Bājī (« وَخِلَافِيَّاتِ الْبَاجِيِّ فَإِنَّهُ يَحْكِي الْخِلَافَ فِيمَا قَالَ اللَّخْمِيُّ يُخْتَلَفُ فِيهِ ») est difficile à construire telle qu'imprimée, à cheval sur deux pages. La fiche ne l'interprète pas. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-08b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 8,
    titre: "Les notes d'élèves (« taqâyîd ») : un guide, pas une référence",
    titre_ar: "التَّقَايِيدُ تَهْدِي وَلَا يُعْتَمَدُ عَلَيْهَا",
    objectif: "Savoir quel crédit accorder aux commentaires de la Risāla attribués à al-Jazūlī et Ibn ʿUmar.",
    matn: null,
    nass: "فَلَيْسَ مَا يُنْسَبُ إلَيْهِمْ بِتَأْلِيفٍ وَإِنَّمَا هُوَ تَقْيِيدٌ قَيَّدَهُ الطَّلَبَةُ زَمَنَ إقْرَائِهِ فَهُوَ يَهْدِي وَلَا يُعْتَمَدُ",
    regle_pratique: "Les commentaires de la Risāla attribués à al-Jazūlī, Ibn ʿUmar et leurs semblables sont des notes prises par des élèves pendant les cours : ils guident la compréhension, mais on ne s'appuie pas sur eux, surtout s'ils contredisent les textes et les règles de l'école.",
    explication: "Al-Ḥaṭṭāb cite encore Zarrūq, au début de son commentaire de la Risāla, là où il passe en revue les autres commentaires.\n\nPour al-Jazūlī, Ibn ʿUmar et ceux qui leur ressemblent, ce qu'on leur attribue n'est pas un ouvrage composé par eux. C'est un تَقْيِيد (taqyîd) : des notes prises par les élèves pendant qu'ils enseignaient. Ces notes « guident, mais on ne s'appuie pas sur elles ». Zarrūq ajoute qu'il a entendu qu'un maître avait jugé que celui qui rend des fatwas à partir de ces notes (تَقَايِيد, taqâyîd) mérite une sanction.\n\nAl-Ḥaṭṭāb précise le sens de ce jugement : il vise le cas où ces deux auteurs rapportent un avis contraire aux textes et aux règles de l'école. Dans ce cas, on ne s'appuie pas sur eux.",
    aqwal: [
      { auteur: "Zarrūq", avis: "Les commentaires d'al-Jazūlī et d'Ibn ʿUmar sont des notes d'élèves : ils guident, mais on ne s'appuie pas sur eux.", statut: "non_precise" },
      { auteur: "Un maître (rapporté par Zarrūq, par ouï-dire)", avis: "Celui qui rend des fatwas à partir de ces notes mérite une sanction.", statut: "non_precise" }
    ],
    tarjih_hattab: "Al-Ḥaṭṭāb restreint ce jugement au cas où ces notes rapportent un avis contraire aux textes et aux règles de l'école (« وَيُرِيدُ وَاَللَّهُ أَعْلَمُ … »).",
    tanbihat: [],
    divergences: [],
    exemple: "Vous trouvez dans un commentaire attribué à al-Jazūlī un avis que les textes de l'école contredisent. Selon al-Ḥaṭṭāb, vous ne vous appuyez pas sur cet avis ; ces notes peuvent en revanche vous aider à comprendre la Risāla.",
    erreurs_frequentes: [
      "Citer les commentaires d'al-Jazūlī ou d'Ibn ʿUmar comme des ouvrages de référence : ce sont des notes d'élèves.",
      "Les rejeter entièrement : selon Zarrūq, ils guident ; selon al-Ḥaṭṭāb, on ne les écarte que lorsqu'ils contredisent les textes et les règles de l'école."
    ],
    termes: [
      { ar: "تَقْيِيد", translit: "taqyîd", def: "Notes prises par des élèves pendant l'enseignement d'un maître." },
      { ar: "تَقَايِيد", translit: "taqâyîd", def: "Pluriel de taqyīd : recueils de notes d'élèves." },
      { ar: "تَأْلِيف", translit: "ta'lîf", def: "Ouvrage composé par son auteur lui-même." }
    ],
    quiz: [
      { q: "Selon Zarrūq, que sont les commentaires de la Risāla attribués à al-Jazūlī et Ibn ʿUmar ?",
        choix: ["Des ouvrages qu'ils ont composés", "Des notes prises par leurs élèves", "Des fatwas", "Des traductions"],
        bonne: 1,
        explication: "Zarrūq : ce n'est pas un taʾlīf, mais un taqyīd pris par les élèves pendant l'enseignement." },
      { q: "Quel crédit leur accorder, selon Zarrūq ?",
        choix: ["Ils valent la Mudawwana", "Ils font autorité", "Ils sont interdits à la lecture", "Ils guident, mais on ne s'appuie pas sur eux"],
        bonne: 3,
        explication: "« فَهُوَ يَهْدِي وَلَا يُعْتَمَدُ »." },
      { q: "Mise en situation : une de ces notes rapporte un avis conforme aux textes de l'école. Faut-il la rejeter ?",
        choix: ["Oui, toujours", "On ne peut pas savoir", "Non : selon al-Ḥaṭṭāb, on les écarte quand elles contredisent les textes et les règles de l'école", "Oui, si elle est courte"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb restreint la mise en garde aux avis contraires aux textes et aux règles de l'école." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "41" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-09a",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 9,
    titre: "« Yanbaghî » : il convient (recommandation)",
    titre_ar: "لَفْظُ يَنْبَغِي",
    objectif: "Savoir quelle valeur a le mot « يَنْبَغِي » dans un texte malikite.",
    matn: null,
    nass: "يَنْبَغِي مِنْ أَلْفَاظِ الِاسْتِحْبَابِ",
    regle_pratique: "Selon al-Jazūlī, Ibn Ghāzī et d'autres, « يَنْبَغِي » (« il convient ») exprime en principe la recommandation ; Ibn ʿAbd as-Salām a toutefois un passage qui suppose un autre sens.",
    explication: "Al-Ḥaṭṭāb rapporte qu'al-Jazūlī, commentant une phrase de la Risāla sur l'ordre donné aux enfants de prier à sept ans, dit que يَنْبَغِي (yanbaghî, « il convient ») fait partie des mots qui expriment la recommandation (اِسْتِحْبَاب). Ibn Ghāzī dit de même dans son poème sur les cas semblables de la Risāla, et d'autres aussi.\n\nAl-Ḥaṭṭāb signale cependant qu'Ibn ʿAbd as-Salām, dans son commentaire d'Ibn al-Ḥājib (livre des jugements, à propos de la sanction du faux témoin qui se repent), a un passage qui suppose le contraire. Il renvoie le lecteur à ce passage sans le citer.",
    aqwal: [
      { auteur: "Al-Jazūlī (commentaire de la Risāla)", avis: "« Yanbaghī » fait partie des mots de la recommandation.", statut: "non_precise" },
      { auteur: "Ibn Ghāzī (poème sur les cas semblables de la Risāla)", avis: "Même avis.", statut: "non_precise" },
      { auteur: "Ibn ʿAbd as-Salām (commentaire d'Ibn al-Ḥājib)", avis: "Un de ses passages suppose un sens différent (non cité par al-Ḥaṭṭāb).", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb renvoie au passage d'Ibn ʿAbd as-Salām (« فَانْظُرْهُ ») sans dire quel sens il suppose."
    ],
    divergences: [],
    exemple: "Vous lisez « وَيَنْبَغِي أَنْ … ». Comprenez d'abord qu'il s'agit d'une recommandation. Restez attentif au contexte : le passage d'Ibn ʿAbd as-Salām montre que le mot n'a pas toujours ce sens.",
    erreurs_frequentes: [
      "Lire « يَنْبَغِي » comme une obligation : al-Jazūlī et Ibn Ghāzī le rangent parmi les mots de la recommandation.",
      "Tenir la règle pour absolue : al-Ḥaṭṭāb signale un passage d'Ibn ʿAbd as-Salām qui suppose autre chose."
    ],
    termes: [
      { ar: "يَنْبَغِي", translit: "yanbaghî", def: "« Il convient » ; en principe, mot de la recommandation (al-Jazūlī, Ibn Ghāzī)." }
    ],
    quiz: [
      { q: "Selon al-Jazūlī et Ibn Ghāzī, qu'exprime « يَنْبَغِي » ?",
        choix: ["La recommandation", "Le déconseillé", "L'obligation", "L'interdiction"],
        bonne: 0,
        explication: "Ils le rangent parmi les mots de l'istiḥbāb." },
      { q: "Cette règle est-elle sans exception d'après al-Ḥaṭṭāb ?",
        choix: ["Non : Khalīl ne l'emploie jamais", "Non : un passage d'Ibn ʿAbd as-Salām suppose un autre sens", "Non : Mālik l'emploie pour l'obligation", "Oui"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb renvoie à ce passage, sans en préciser le sens." },
      { q: "Mise en situation : vous lisez « يَنْبَغِي أَنْ يَفْعَلَ كَذَا ». Quelle lecture adopter d'abord ?",
        choix: ["Il est interdit de le faire", "Il est obligatoire de le faire", "C'est indifférent", "Il est recommandé de le faire"],
        bonne: 3,
        explication: "Lecture de principe selon al-Jazūlī et Ibn Ghāzī, en restant attentif au contexte." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "41" },
    alertes: [
      "L'édition porte « أَنْ يَنْبَغِي مِنْ أَلْفَاظِ الِاسْتِحْبَابِ » ; « أَنْ » est sans doute pour « أَنَّ ». Le « nass » cite la phrase à partir de « يَنْبَغِي ». Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-09b",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 9,
    titre: "« Lâ ba'sa » : il n'y a pas de mal (permis)",
    titre_ar: "لَفْظُ لَا بَأْسَ",
    objectif: "Savoir quelle valeur a l'expression « لَا بَأْسَ » dans un texte malikite.",
    matn: null,
    nass: "أَنْ لَا بَأْسَ مِنْ أَلْفَاظِ الْإِبَاحَةِ وَأَنَّهُ إنَّمَا يُقَالُ: لَا بَأْسَ فِيمَا كَانَ فِعْلُهُ مُبَاحًا",
    regle_pratique: "Selon Ibn Rushd, « لَا بَأْسَ » (« il n'y a pas de mal ») exprime la permission : on ne le dit que d'un acte dont l'accomplissement est permis (mubāḥ).",
    explication: "Al-Ḥaṭṭāb cite Ibn Rushd, « dans le rasm al-muḥarram, du samāʿ d'Ibn al-Qāsim, au livre du jeûne » (voir la fiche int-01-02-11 pour ces termes).\n\nSelon Ibn Rushd, لَا بَأْسَ (lâ ba'sa, « il n'y a pas de mal ») fait partie des expressions de la permission (إِبَاحَة, ibâha). On ne dit « lâ ba'sa » que d'un acte dont l'accomplissement est permis (مُبَاح).",
    aqwal: [
      { auteur: "Ibn Rushd (rasm al-muḥarram, samāʿ d'Ibn al-Qāsim, livre du jeûne)", avis: "« Lā baʾsa » exprime la permission et ne se dit que de ce qui est permis.", statut: "non_precise" }
    ],
    tarjih_hattab: null,
    tanbihat: [],
    divergences: [],
    exemple: "Vous lisez « وَلَا بَأْسَ بِكَذَا ». Selon Ibn Rushd, comprenez que l'acte est permis (mubāḥ), et non qu'il est recommandé.",
    erreurs_frequentes: [
      "Lire « لَا بَأْسَ » comme une recommandation : selon Ibn Rushd, l'expression désigne le permis."
    ],
    termes: [
      { ar: "لَا بَأْسَ", translit: "lâ ba'sa", def: "« Il n'y a pas de mal » ; selon Ibn Rushd, expression de la permission (ibāḥa)." },
      { ar: "إِبَاحَة", translit: "ibâha", def: "Permission : statut de l'acte neutre (mubāḥ)." }
    ],
    quiz: [
      { q: "Selon Ibn Rushd, qu'exprime « لَا بَأْسَ » ?",
        choix: ["L'interdiction", "La permission (ibāḥa)", "L'obligation", "La recommandation"],
        bonne: 1,
        explication: "Ibn Rushd : c'est une expression de l'ibāḥa." },
      { q: "De quel acte dit-on « لَا بَأْسَ », selon Ibn Rushd ?",
        choix: ["D'un acte dont l'accomplissement est permis", "D'un acte déconseillé seulement", "D'un acte interdit", "D'un acte obligatoire"],
        bonne: 0,
        explication: "« إنَّمَا يُقَالُ: لَا بَأْسَ فِيمَا كَانَ فِعْلُهُ مُبَاحًا »." },
      { q: "Mise en situation : un texte dit « لَا بَأْسَ بِذَلِكَ ». Que retenir, selon Ibn Rushd ?",
        choix: ["Que c'est recommandé", "Que c'est obligatoire", "Que c'est déconseillé", "Que c'est permis"],
        bonne: 3,
        explication: "L'expression désigne le permis (mubāḥ)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "41" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-10",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 10,
    titre: "Délaisser le recommandé : « makroûh » ou « khilâf al-awlâ »",
    titre_ar: "نَقِيضُ المَنْدُوبِ : المَكْرُوهُ وَخِلَافُ الأَوْلَى",
    objectif: "Savoir comment les auteurs qualifient le fait de délaisser un acte recommandé.",
    matn: null,
    nass: "فَمِنْهُمْ مَنْ يُعَبِّرُ بِالْكَرَاهَةِ عَنْ جَمِيعِ ذَلِكَ وَهُمْ الْأَكْثَرُ وَهُوَ الظَّاهِرُ",
    regle_pratique: "Délaisser un acte recommandé est « déconseillé » (مَكْرُوه) selon la plupart des auteurs, avec des degrés selon l'insistance de la demande ; certains auteurs tardifs, comme Ibn al-Fākihānī, réservent « مَكْرُوه » au délaissement d'un acte fortement demandé et appellent l'autre « خِلَافُ الأَوْلَى ».",
    explication: "Al-Ḥaṭṭāb part d'un principe. Le contraire d'un acte recommandé, au sens large (sunna, mustaḥabb, nāfila), est moins bon et l'on demande de s'en abstenir. Sinon, l'acte recommandé ne serait pas vraiment demandé : une chose ne peut pas être demandée alors que son contraire serait indifférent.\n\nLes juristes divergent sur le nom à donner à ce contraire.\n\nLa plupart l'appellent tout entier مَكْرُوه (makroûh, déconseillé). Al-Ḥaṭṭāb juge que c'est l'avis apparent : la définition du makrūh s'y applique, c'est-à-dire « ce dont l'abandon est récompensé et dont l'accomplissement n'est pas puni ». Simplement, le déconseillé a des degrés, selon que la demande est plus ou moins forte. Quand Khalīl ou un autre auteur écarte la كَرَاهَة (karâha) dans certains de ces cas, il faut comprendre qu'il écarte la karāha forte, et non toute karāha. Al-Ḥaṭṭāb cite aussi aṭ-Ṭirāz, à propos de l'eau déjà utilisée : « délaisser le meilleur sans excuse est déconseillé ».\n\nD'autres distinguent. Le contraire d'un acte fortement demandé est makrūh, et celui d'un acte moins fortement demandé est خِلَافُ الأَوْلَى (khilâfou l-awlâ, « contraire au mieux »). C'est la terminologie de certains auteurs tardifs, comme Ibn al-Fākihānī. Al-Ḥaṭṭāb conclut : quand le sens est connu, on ne se querelle pas sur les mots.",
    aqwal: [
      { auteur: "La plupart des juristes (avis rapporté sans attribution nominative)", avis: "Tout délaissement d'un acte recommandé est makrūh, à des degrés divers.", statut: "non_precise" },
      { auteur: "Certains auteurs tardifs, comme Ibn al-Fākihānī", avis: "Délaisser un acte fortement demandé est makrūh ; délaisser un acte moins fortement demandé est khilāf al-awlā.", statut: "non_precise" },
      { auteur: "Certains auteurs shāfiʿites tardifs", avis: "Ce dont l'abandon est demandé par une interdiction particulière est makrūh ; ce qui relève de l'interdiction générale de délaisser les actes recommandés est khilāf al-awlā.", statut: "non_precise" }
    ],
    tarjih_hattab: "Al-Ḥaṭṭāb juge apparent l'avis de la majorité (tout est makrūh, à des degrés divers), parce que la définition du makrūh s'y applique (« وَهُوَ الظَّاهِرُ »).",
    tanbihat: [
      "Quand Khalīl ou un autre auteur dit qu'un tel délaissement « n'est pas déconseillé », comprendre selon al-Ḥaṭṭāb : il n'est pas fortement déconseillé.",
      "Aṭ-Ṭirāz (à propos de l'eau déjà utilisée) : délaisser le meilleur sans excuse est déconseillé.",
      "« Quand le sens est connu, on ne se querelle pas sur les mots » (« فَلَا مُشَاحَّةَ فِي الِاصْطِلَاحِ »)."
    ],
    divergences: [],
    exemple: "Vous lisez qu'un acte recommandé délaissé « n'est pas déconseillé » (لَا يُكْرَهُ). Selon al-Ḥaṭṭāb, comprenez qu'il n'est pas fortement déconseillé : délaisser le recommandé reste moins bon.",
    erreurs_frequentes: [
      "Croire que délaisser un acte recommandé est indifférent : al-Ḥaṭṭāb explique que c'est impossible si l'acte est vraiment demandé.",
      "Prendre « لَا يُكْرَهُ » à la lettre dans ces cas : selon al-Ḥaṭṭāb, il s'agit de la karāha forte.",
      "Confondre l'usage d'Ibn al-Fākihānī et celui de certains shāfiʿites : ils distinguent tous deux makrūh et khilāf al-awlā, mais selon des critères différents."
    ],
    termes: [
      { ar: "مَكْرُوه", translit: "makroûh", def: "Déconseillé : ce dont l'abandon est récompensé et dont l'accomplissement n'est pas puni." },
      { ar: "كَرَاهَة", translit: "karâha", def: "Fait d'être déconseillé ; elle a des degrés selon la force de la demande." },
      { ar: "خِلَافُ الأَوْلَى", translit: "khilâfou l-awlâ", def: "« Contraire au mieux » : chez certains auteurs tardifs, délaissement d'un acte recommandé moins fortement demandé." },
      { ar: "مَرْجُوح", translit: "marjoûh", def: "Moins bon, qui pèse moins que son contraire." }
    ],
    quiz: [
      { q: "Selon la plupart des juristes, comment qualifier le fait de délaisser un acte recommandé ?",
        choix: ["Wājib", "Mubāḥ (indifférent)", "Makrūh (déconseillé), à des degrés divers", "Ḥarām"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : c'est l'avis de la majorité, et c'est l'avis apparent selon lui." },
      { q: "Chez Ibn al-Fākihānī, comment s'appelle le délaissement d'un acte moins fortement demandé ?",
        choix: ["Mubāḥ", "Ḥarām", "Makrūh", "Khilāf al-awlā"],
        bonne: 3,
        explication: "Il réserve « makrūh » à l'acte fortement demandé." },
      { q: "Mise en situation : Khalīl dit que délaisser tel acte recommandé « لَا يُكْرَهُ ». Comment le comprendre selon al-Ḥaṭṭāb ?",
        choix: ["Ce n'est pas fortement déconseillé", "C'est obligatoire", "C'est interdit", "C'est totalement indifférent"],
        bonne: 0,
        explication: "La négation vise la karāha forte, non toute karāha." },
      { q: "Pourquoi le contraire d'un acte recommandé ne peut-il pas être indifférent, selon al-Ḥaṭṭāb ?",
        choix: ["Parce que c'est un hadith", "Il peut l'être", "Parce qu'une chose ne peut être demandée si son contraire est indifférent", "Parce que Mālik l'a dit"],
        bonne: 2,
        explication: "« إذْ لَا يُتَصَوَّرُ أَنْ يَكُونَ الشَّيْءُ مَطْلُوبًا وَنَقِيضُهُ مُسْتَوِي الطَّرَفَيْنِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "41" },
    alertes: [],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-11",
    type: "terme",
    kitab: "int", bab: "01", fasl: "02", ordre: 11,
    titre: "« Samâʿ » et « rasm » : les renvois à al-ʿUtbiyya",
    titre_ar: "اصْطِلَاحُ العُتْبِيِّ وَابْنِ رُشْدٍ فِي البَيَانِ : السَّمَاعُ وَالرَّسْمُ",
    objectif: "Comprendre un renvoi du type « rasm al-qibla, du samāʿ d'Ibn al-Qāsim, au livre de la purification ».",
    matn: null,
    nass: "فَتَكُونُ الْأَسْمِعَةُ كَالْأَبْوَابِ لِلْكِتَابِ وَالرُّسُومُ الَّتِي هِيَ التَّرَاجِمُ بِمَنْزِلَةِ الْفُصُولِ لِلْأَبْوَابِ",
    regle_pratique: "Dans al-ʿUtbiyya et le commentaire d'Ibn Rushd (al-Bayān), un « samāʿ » est l'ensemble des réponses entendues par un disciple, et un « rasm » est un cahier de ce samāʿ, nommé d'après sa première question : un renvoi complet indique le rasm, le samāʿ et le livre (kitāb) de droit.",
    explication: "Al-Ḥaṭṭāb explique les renvois d'al-ʿUtbī et d'Ibn Rushd dans al-Bayān, comme « rasm al-qibla », « rasm ḥabal al-ḥabala » ou « rasm salaf ».\n\nAl-ʿUtbī a réuni plusieurs « auditions » (أَسْمِعَة, asmiʿa ; singulier سَمَاع, samâʿ) : celle d'Ibn al-Qāsim, et celle d'Ashhab et d'Ibn Nāfiʿ, qui ont entendu Mālik ; celles de ʿĪsā ibn Dīnār et d'autres, qui ont entendu Ibn al-Qāsim, comme Yaḥyā ibn Yaḥyā, Saḥnūn, Mūsā ibn Muʿāwiya, Zūnān, Muḥammad ibn Khālid, Aṣbagh et Abū Zayd. Il a rangé chaque audition dans des cahiers séparés.\n\nIl a donné à chaque cahier un titre (تَرْجَمَة, tarjama), qui est sa première question : un cahier commence par la question de la qibla, un autre par la vente « ḥabal al-ḥabala », un autre par « جَاعَ فَبَاعَ امْرَأَتَهُ », un autre par « أَخَذَ يَشْرَبُ خَمْرًا », etc. Cette première question sert de nom au cahier : c'est le رَسْم (rasm). Chaque cahier mélange des questions de plusieurs chapitres du droit.\n\nQuand il a classé al-ʿUtbiyya selon les chapitres du droit, il a réuni dans chaque livre les questions de ces cahiers qui s'y rapportaient. Pour la purification, par exemple, il commence par l'audition d'Ibn al-Qāsim, puis celle d'Ashhab et d'Ibn Nāfiʿ, puis celles de ʿĪsā ibn Dīnār, Yaḥyā ibn Yaḥyā, Saḥnūn, Mūsā ibn Muʿāwiya, Muḥammad ibn Khālid, Zūnān (ʿAbd al-Malik ibn al-Ḥasan), Muḥammad ibn Aṣbagh et Abū Zayd. Il saute une audition qui n'a rien sur le sujet. Pour chaque question, il indique le cahier d'où il la tire, afin qu'on puisse la retrouver.\n\nConclusion de la source citée : les auditions sont comme les bāb d'un livre, et les rasm comme les faṣl de ces bāb. Le meilleur renvoi indique le rasm, l'audition et le livre.",
    aqwal: [],
    tarjih_hattab: null,
    tanbihat: [
      "Al-Ḥaṭṭāb dit avoir copié cette explication de la main de ʿUmar al-Bisāṭī, qui la tenait de Muḥammad ibn Aḥmad at-Takrūrī, qui l'avait copiée de la main d'un grand savant non nommé. Celui-ci l'avait copiée de la main d'une personne qui l'avait entendue d'al-Qalshānī, lequel la tenait de son maître ʿĪsā al-Ghubrīnī."
    ],
    divergences: [],
    exemple: "Supposons un renvoi formulé ainsi : « فِي رَسْمِ الْقِبْلَةِ مِنْ سَمَاعِ ابْنِ الْقَاسِمِ مِنْ كِتَابِ الطَّهَارَةِ ». Il se lirait : dans le livre de la purification d'al-ʿUtbiyya, parmi les réponses entendues par Ibn al-Qāsim, la question tirée du cahier qui s'ouvre sur la qibla.",
    erreurs_frequentes: [
      "Croire qu'un « rasm » désigne un sujet : c'est le nom d'un cahier, tiré de sa première question, qui peut traiter d'autres sujets.",
      "Confondre « samāʿ » (l'audition d'un disciple) et « rasm » (un cahier de cette audition)."
    ],
    termes: [
      { ar: "سَمَاع", translit: "samâʿ", def: "« Audition » : ensemble des réponses entendues par un disciple (de Mālik ou d'Ibn al-Qāsim), réunies dans al-ʿUtbiyya." },
      { ar: "أَسْمِعَة", translit: "asmiʿa", def: "Pluriel de samāʿ." },
      { ar: "رَسْم", translit: "rasm", def: "Cahier d'une audition, nommé d'après sa première question ; équivaut à un faṣl." },
      { ar: "تَرْجَمَة", translit: "tarjama", def: "Titre d'un cahier : sa première question." },
      { ar: "العُتْبِيَّة", translit: "al-ʿoutbiyya", def: "Recueil d'auditions réuni par al-ʿUtbī, commenté par Ibn Rushd dans al-Bayān." }
    ],
    quiz: [
      { q: "Qu'est-ce qu'un « rasm » dans al-ʿUtbiyya ?",
        choix: ["Un chapitre consacré à un seul sujet", "Une règle de grammaire", "Un avis de Mālik", "Un cahier d'audition, nommé d'après sa première question"],
        bonne: 3,
        explication: "Le titre du cahier est sa première question, qui lui sert de nom." },
      { q: "Selon la source citée, à quoi correspondent les auditions et les rasm ?",
        choix: ["Auditions = bāb, rasm = faṣl", "Auditions = livres, rasm = versets", "Auditions = faṣl, rasm = bāb", "Rien de cela"],
        bonne: 0,
        explication: "« فَتَكُونُ الْأَسْمِعَةُ كَالْأَبْوَابِ … وَالرُّسُومُ … بِمَنْزِلَةِ الْفُصُولِ »." },
      { q: "Mise en situation : un renvoi dit « rasm ḥabal al-ḥabala, du samāʿ d'Ibn al-Qāsim, au livre de la purification ». Le passage parle-t-il forcément de vente ?",
        choix: ["Oui, au livre de la vente", "On ne peut pas savoir", "Oui, puisque le rasm porte le nom d'une vente", "Non : le rasm est le nom d'un cahier qui mélange des questions de plusieurs chapitres"],
        bonne: 3,
        explication: "Chaque cahier mélange des questions de plusieurs chapitres ; ici, il s'agit d'une question de purification tirée de ce cahier." },
      { q: "Quelle audition al-ʿUtbī place-t-il en premier dans chaque livre ?",
        choix: ["Celle de Saḥnūn", "Celle d'Ibn al-Qāsim", "Celle d'Abū Zayd", "Celle de Zūnān"],
        bonne: 1,
        explication: "Il commence par l'audition d'Ibn al-Qāsim, puis celle d'Ashhab et d'Ibn Nāfiʿ, etc." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "41-42" },
    alertes: [
      "La première liste du passage nomme « Aṣbagh » parmi les auditions, mais l'ordre de classement donne « Muḥammad ibn Aṣbagh » : écart reproduit tel quel. Non bloquant.",
      "Fin du passage : « وَكُنْت أَسْمَعُ مِنْ وَالِدِي قَرِيبًا مِنْهُ » — le locuteur (un des transmetteurs de la chaîne) n'est pas identifiable avec certitude ; « وَأُقَرِّبُ إلَى الْعَزْوِ » est probablement « وَأَقْرَبُ ». La fiche ne s'appuie pas sur ces mots au-delà du sens général. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "int-01-02-syn",
    type: "synthese",
    kitab: "int", bab: "01", fasl: "02",
    titre: "Compléments d'al-Ḥaṭṭāb : autres règles de lecture",
    quiz: [
      { q: "Pourquoi Khalīl donne-t-il un exemple, selon Ibn Ghāzī ?",
        choix: ["Pour allonger le texte", "Par habitude", "Toujours pour une raison précise (nukta)", "Seulement pour la prière"],
        bonne: 2, explication: "Voir la fiche 01." },
      { q: "Mise en situation : « A, B, كَـ C et D », puis une condition. À qui s'applique-t-elle, le plus souvent ?",
        choix: ["À C et D seulement", "À tous", "À A seulement", "À aucun"],
        bonne: 0, explication: "Voir la fiche 02." },
      { q: "Un « وَكَرِهَ » sans sujet mentionné renvoie à…",
        choix: ["al-Ḥaṭṭāb", "Khalīl", "Ibn al-Qāsim", "Mālik"],
        bonne: 3, explication: "Voir la fiche 03." },
      { q: "Chez Khalīl, « مَنْدُوب » désigne…",
        choix: ["L'obligatoire", "Le permis", "Le recommandé simple, en dessous de la sunna", "Toute forme de recommandé, sunna comprise"],
        bonne: 2, explication: "Voir la fiche 04a." },
      { q: "Comment Ibn Rushd appelle-t-il le deuxième rang du recommandé ?",
        choix: ["Sunna", "Raghāʾib", "Nawāfil", "Faḍāʾil"],
        bonne: 1, explication: "Voir la fiche 04b." },
      { q: "« Fard » et « wājib » dans l'école malikite sont…",
        choix: ["Des noms de la sunna", "Sans rapport", "Synonymes (sauf une exception annoncée au pèlerinage)", "De degrés différents"],
        bonne: 2, explication: "Voir la fiche 05b." },
      { q: "Le plus souvent, « الرِّوَايَات » désigne…",
        choix: ["Les avis de Mālik", "Les avis d'Ibn Rushd", "Les hadiths", "Les avis des Égyptiens"],
        bonne: 0, explication: "Voir la fiche 06." },
      { q: "À quel groupe appartient Ibn al-Qāsim selon al-Ḥaṭṭāb ?",
        choix: ["Les Médinois", "Les Égyptiens", "Les Irakiens", "Les Maghrébins"],
        bonne: 1, explication: "Voir la fiche 07b." },
      { q: "Mise en situation : un texte dit « لَا بَأْسَ بِهِ ». Selon Ibn Rushd, l'acte est…",
        choix: ["Permis (mubāḥ)", "Recommandé", "Obligatoire", "Interdit"],
        bonne: 0, explication: "Voir la fiche 09b." },
      { q: "Selon la plupart des juristes, délaisser un acte recommandé est…",
        choix: ["Obligatoire", "Déconseillé (makrūh), à des degrés divers", "Interdit", "Indifférent"],
        bonne: 1, explication: "Voir la fiche 10." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "39-42" },
    alertes: [],
    verification: "verifie"
  }

]);
