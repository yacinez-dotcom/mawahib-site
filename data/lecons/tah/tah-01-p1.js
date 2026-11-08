/* Données — Kitāb al-Ṭahāra, bāb 01 (tah-01) : « بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ » — partie 1 — v2.5
   Source : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1 (shamela.ws/book/569).
   Croisement : al-Sharḥ al-kabīr d'al-Dardīr et Ḥāshiyat al-Dasūqī (shamela.ws/book/21604), tome 1.
   Matn : segments « ص (…) » de Mawāhib, voir docs/sources/tah-01-segments.md.
   Unité 1 : tah-01-01-01a à -01d (un seul segment du matn, quatre règles), -02 à -05 — t. 1, p. 43–53.
   Unité 2 : tah-01-01-06 à -13 — t. 1, p. 53–58.
   Unité 3 : tah-01-01-14 à -19 (17 → 17a, 17b : un seul segment du matn, deux règles) — t. 1, p. 58–66.
   Unité 4 : tah-01-01-20 à -24 — t. 1, p. 66–77.
   Unité 5 : tah-01-01-25 à -30 — t. 1, p. 77–86.
   Unité 6 : tah-01-01-31 à -34 et synthèse tah-01-01-syn (fin du faṣl) — t. 1, p. 86 ; audit de fin de faṣl et corrections appliquées (anomalies n° 44 à 50).
   Unité 7 : faṣl tah-01-02 (« Le pur et l'impur »), tah-01-02-01 à -08 — t. 1, p. 86–90.
   Unité 8 : tah-01-02-09 à -16, et tah-01-02-16b (segment manqué par le squelette) — t. 1, p. 90–94.
   v1.5 : campagne de correction des anomalies (seconds témoins), voir docs/verifications/campagne-corrections.md.
   v1.6 : quiz — position de la bonne réponse redistribuée au hasard (A–D équilibrés) ; questions, choix et explications inchangés.
   v1.7 : unité 6.
   v1.8 : unité 7 (début du faṣl tah-01-02).
   v1.9 : audit des divergences (décision n° 9) — champs « divergences » réécrits : chaque avis rattaché à son savant,
          texte arabe cité tel quel, sigles d'al-Dasūqī développés d'après sa liste ; divergences manquantes ajoutées.
          Voir docs/verifications/audit-divergences.md.
   v2.0 : unité 8.
   v2.1 : audit avancé des anomalies n° 63 à 69 (seconds témoins) — fiches tah-01-02-09, -11 à -15 :
          alertes « Corrigé » / « Précisé » ; tah-01-02-12 : avis anonyme corrigé (« de la bouche ») ;
          tah-01-02-14 : « tarjih_hattab » passé à null (auteur de la phrase non identifié). Voir docs/verifications/audit-63-69.md.
   Unité 9 : tah-01-02-17 à -24 — t. 1, p. 94–97.
   v2.2 : unité 9.
   v2.3 : audit avancé des anomalies n° 74 et 77 à 82 (alertes des fiches 18, 19, 22, 23, 24 ; aucune règle modifiée).
   Unité 10 : tah-01-02-25 à -31 — t. 1, p. 97–100.
   v2.4 : unité 10.
   v2.5 : le bāb est découpé en parties de moins de 200 Ko (limite de lecture du Projet), sans changement de contenu :
     tah-01-p1.js (unités 1–3), tah-01-p2.js (unités 4–6), tah-01-p3.js (unités 7–8), tah-01-p4.js (unités 9–10).
     Les unités suivantes vont dans la dernière partie ; nouvelle partie quand elle dépasserait 200 Ko (docs/contrat.md §5).
   Cette partie : tah-01-01-01a à tah-01-01-19 (unités 1 à 3) — t. 1, p. 43–66. Historique des versions du bāb : ci-dessus. */
App.data.ajouterFiches([

  {
    id: "tah-01-01-01a",
    kitab: "tah", bab: "01", fasl: "01", ordre: 1,
    titre: "Seule l'eau absolue purifie",
    titre_ar: "لَا يُرْفَعُ الحَدَثُ وَحُكْمُ الخَبَثِ إِلَّا بِالمَاءِ المُطْلَقِ",
    objectif: "Savoir avec quelle eau on lève l'état d'impureté rituelle et on purifie ce qui a été souillé.",
    matn: "بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ بِالْمُطْلَقِ وَهُوَ مَا صَدَقَ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ",
    regle_pratique: "Pour les ablutions, le ghousl et le lavage d'une impureté, il faut de l'eau absolue (al-moutlaq), c'est-à-dire ce qu'on appelle simplement « eau » : aucun autre liquide ne convient, même pour une ablution ou un ghousl seulement recommandés.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "La purification faite avec un autre liquide n'est pas valide (« فَلَا يَصِحُّ شَيْءٌ مِنْ ذَلِكَ إلَّا بِالْمَاءِ الْمُطْلَقِ »)."
    },
    explication: "Le bāb s'ouvre sur une phrase de Khalīl construite comme une définition. Al-Ḥaṭṭāb explique qu'elle a valeur de restriction : c'est comme si Khalīl disait « on ne lève le ḥadath et la règle du khabath qu'avec l'eau absolue ».\n\nLe الحَدَث (al-hadath) est l'état d'impureté rituelle qui empêche de prier. Al-Ḥaṭṭāb lui reconnaît quatre sens dans la Loi : ce qui sort du corps, le fait de sortir, une qualité juridique attachée aux membres, et l'interdiction de prier qui en découle. Ici, ce qui est « levé » est cette qualité, ou cette interdiction : les deux vont ensemble.\n\nLe الخَبَث (al-khabath) est l'impureté matérielle (najāsa). Khalīl dit « la règle du khabath » parce que la matière de l'impureté peut disparaître avec autre chose que l'eau. En revanche, sa règle, c'est-à-dire le fait que la chose reste impure et interdite dans la prière et l'alimentation, ne disparaît qu'avec l'eau absolue.\n\nSelon al-Ḥaṭṭāb, l'endroit nettoyé par des pierres (اِسْتِجْمَار, istijmâr), l'épée polie que l'on essuie, ou la chaussure frottée après du crottin restent jugés impurs. L'impureté y est seulement tolérée par nécessité.\n\nAl-Ḥaṭṭāb définit aussi الطَّهَارَة (at-tahâra) : dans la Loi, ce mot désigne soit une qualité juridique qui permet de prier avec une chose, dans un lieu ou pour une personne, soit l'acte de lever le ḥadath et d'ôter l'impureté.",
    aqwal: [
      { auteur: "Khalīl (matn)", avis: "La règle de l'impureté ne se lève qu'avec l'eau absolue.", statut: "mashhur" },
      { auteur: "Al-Ghazālī", avis: "Consensus (ijmāʿ) sur le fait que le ḥadath ne se lève qu'avec l'eau absolue ; al-Ḥaṭṭāb note que ce consensus a été contesté, tout en disant que le point fait l'accord.", statut: "non_precise" },
      { auteur: "Al-Qarāfī", avis: "« Ṭahāra » au sens de qualité juridique est le sens propre ; au sens de « lever le ḥadath, ôter l'impureté », c'est un sens figuré.", statut: "non_precise" }
    ],
    muatamad: "Confirmé pour l'essentiel par al-Dardīr : le ḥadath et la règle de l'impureté ne sont levés ensemble que par l'eau absolue (« الْأَمْرَانِ مَعًا … لَا يَرْفَعُهُمَا إلَّا الْمُطْلَقُ »). Pour l'impureté seule, al-Dardīr admet d'autres moyens (voir les divergences).",
    tarjih_hattab: "Contre al-Qarāfī, al-Ḥaṭṭāb estime que les deux sens de « ṭahāra » sont des sens propres. Il ajoute que, pour définir la purification, il vaut mieux retenir l'acte de lever le ḥadath et d'ôter l'impureté, car c'est cela qui est obligatoire pour le croyant.",
    tanbihat: [
      "Toute purification légale, même non obligatoire (ablutions recommandées, ghousl sunna ou recommandé), exige l'eau absolue. Al-Ḥaṭṭāb cite at-Talqīn : « on ne se purifie ni du ḥadath, ni d'une impureté, ni pour un acte sunna ou de rapprochement, avec un liquide autre que l'eau absolue ».",
      "Le tayammoum ne lève pas le ḥadath selon l'avis mashhūr. C'est une dispense (rukhṣa) qui permet seulement certains actes, quand l'eau manque.",
      "Quand on dit qu'une impureté tolérée est « impure », c'est un emploi figuré, selon al-Dhakhīra cité par al-Ḥaṭṭāb."
    ],
    divergences: [
      "Divergence — ce qui lève la règle de l'impureté. Al-Ḥaṭṭāb : seule l'eau absolue la lève ; c'est « le mashhūr de l'école » (« وَأَمَّا حُكْمُ الْخَبَثِ فَمَا ذَكَرَهُ هُوَ الْمَشْهُورُ فِي الْمَذْهَبِ »). Al-Dardīr : sans eau, elle est aussi levée « par un tannant, pour le kîmoukht seulement » (« وَغَيْرُ الْمَائِيَّةِ بِدَابِغٍ فِي كَيْمَخْتٍ فَقَطْ »), et par le feu, « selon l'avis le plus fort dans les deux cas » (« وَنَارٍ عَلَى الرَّاجِحِ فِيهِمَا »). Al-Dasūqī y ajoute le vin qui se pétrifie ou devient vinaigre (« لِيَدْخُلَ تَحَجُّرُ الْخَمْرِ وَتَخَلُّلُهُ فَإِنَّهُ يُطَهِّرُهُ عَلَى الرَّاجِحِ »).",
      "Divergence — le tayammoum lève-t-il le ḥadath ? Al-Ḥaṭṭāb : non, c'est le mashhūr (« لِأَنَّ الْمَشْهُورَ أَنَّهُ لَا يَرْفَعُ الْحَدَثَ »). Al-Dardīr : oui, de façon limitée, « selon l'avis le plus fort et l'examen rigoureux » (« وَعَلَى التَّحْقِيقِ مِنْ أَنَّ التَّيَمُّمَ يَرْفَعُ الْحَدَثَ رَفْعًا مُقَيَّدًا ») ; l'avis qu'il permet seulement la prière « n'a pas de fondement » (« وَإِنَّمَا يُبِيحُ الصَّلَاةَ لَا وَجْهَ لَهُ »).",
      "Divergence — sens lexical de « ṭahāra ». Al-Ḥaṭṭāb : en langue, la propreté et la netteté à l'égard des souillures ; le mot s'emploie « par figure » pour le fait d'être exempt de défauts (« وَهِيَ بِالْفَتْحِ لُغَةً النَّزَاهَةُ وَالنَّظَافَةُ مِنْ الْأَدْنَاسِ وَالْأَوْسَاخِ.وَتُسْتَعْمَلُ مَجَازًا فِي التَّنْزِيهِ عَنْ الْعُيُوبِ »). Al-Dasūqī : selon l'examen rigoureux, choisi par Ibn Rushd et suivi par ar-Raṣṣāʿ, at-Tatāʾī (sur al-Jallāb), « شب » (ash-Shabrakhītī) et son maître al-ʿAdawī, le mot désigne ce qui est commun aux deux, être exempt de souillures sensibles ou morales, contre ce que dit « ح » (al-Ḥaṭṭāb) (« مَوْضُوعَةٌ لِلْقَدْرِ الْمُشْتَرَكِ وَهُوَ الْخُلُوصُ مِنْ الْأَوْسَاخِ أَعَمُّ مِنْ كَوْنِهَا حِسِّيَّةً أَوْ مَعْنَوِيَّةً خِلَافًا لِمَا قَالَهُ ح مِنْ أَنَّهَا مَوْضُوعَةٌ لِلنَّظَافَةِ مِنْ الْأَوْسَاخِ بِقَيْدِ كَوْنِهَا حِسِّيَّةً »).",
      "Concordance — sens légal de « ṭahāra ». Al-Dasūqī rapporte la position d'al-Ḥaṭṭāb contre al-Qarāfī (voir sa préférence) sans la contester : « وَاسْتَظْهَرَ ح أَنَّ الطَّهَارَةَ حَقِيقَةٌ فِي كُلٍّ مِنْ الْمَعْنَيَيْنِ »."
    ],
    exemple: "Vous n'avez sous la main que de l'eau de rose ou du jus de fruit. Vous ne pouvez pas faire vos ablutions avec, ni laver avec une tache d'urine sur votre vêtement : il faut de l'eau absolue.",
    erreurs_frequentes: [
      "Croire qu'un liquide propre suffit pour les ablutions : il faut de l'eau absolue.",
      "Penser que les ablutions recommandées peuvent se faire avec autre chose que l'eau absolue.",
      "Croire que l'endroit nettoyé avec des pierres est devenu pur : selon al-Ḥaṭṭāb, l'impureté y est seulement tolérée."
    ],
    termes: [
      { ar: "الحَدَث", translit: "al-hadath", def: "État d'impureté rituelle qui empêche de prier, levé par les ablutions ou le ghousl." },
      { ar: "الخَبَث", translit: "al-khabath", def: "Impureté matérielle (najāsa)." },
      { ar: "حُكْمُ الخَبَثِ", translit: "houkmou l-khabath", def: "Règle de l'impureté : le fait qu'une chose souillée reste interdite dans la prière et l'alimentation." },
      { ar: "المَاءُ المُطْلَق", translit: "al-mâ'ou l-moutlaq", def: "Eau absolue : ce qu'on peut appeler simplement « eau », sans qualificatif obligé." },
      { ar: "الطَّهَارَة", translit: "at-tahâra", def: "Purification ; dans la Loi, qualité juridique qui permet de prier, ou acte de lever le ḥadath et d'ôter l'impureté." },
      { ar: "النَّجَاسَة", translit: "an-najâsa", def: "Impureté ; qualité juridique qui interdit de prier avec une chose ou dans un lieu." },
      { ar: "اِسْتِجْمَار", translit: "istijmâr", def: "Se nettoyer après le besoin avec des pierres ou un matériau semblable." },
      { ar: "رُخْصَة", translit: "roukhsa", def: "Dispense accordée par la Loi en raison d'une difficulté." }
    ],
    quiz: [
      { q: "Avec quelle eau lève-t-on le ḥadath ?",
        choix: ["Tout liquide pur", "L'eau absolue (al-muṭlaq)", "L'eau de rose", "Toute eau propre"],
        bonne: 1,
        explication: "Khalīl : « يُرْفَعُ الْحَدَثُ … بِالْمُطْلَقِ » ; al-Ḥaṭṭāb y lit une restriction." },
      { q: "Pourquoi Khalīl dit-il « la règle du khabath » et non « le khabath » ?",
        choix: ["Par erreur", "Parce que le khabath n'existe pas", "Parce que la matière de l'impureté peut disparaître autrement, mais sa règle seulement avec l'eau absolue", "Pour désigner le ḥadath"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « لِأَنَّ عَيْنَ النَّجَاسَةِ تَزُولُ بِغَيْرِ الْمَاءِ وَأَمَّا حُكْمُهَا … فَلَا يَرْتَفِعُ إلَّا بِالْمَاءِ الْمُطْلَقِ »." },
      { q: "Mise en situation : vous voulez faire un ghousl recommandé avant la prière du vendredi, mais vous n'avez que de l'eau parfumée à la rose. Est-ce possible ?",
        choix: ["Non : même une purification recommandée exige l'eau absolue", "Oui, puisque ce ghousl n'est pas obligatoire", "Oui, avec une intention spéciale", "Oui, si l'eau est chaude"],
        bonne: 0,
        explication: "Tanbīh d'al-Ḥaṭṭāb : les ablutions et ghousl recommandés ou sunna exigent aussi l'eau absolue (cité d'at-Talqīn)." },
      { q: "L'endroit nettoyé avec des pierres après le besoin est-il pur selon al-Ḥaṭṭāb ?",
        choix: ["Seulement le vendredi", "Oui, totalement", "Oui, s'il est sec", "Non : il reste jugé impur, mais toléré par nécessité"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : « فَالْمَحِلُّ مَحْكُومٌ لَهُ بِالنَّجَاسَةِ وَإِنَّمَا عُفِيَ عَنْهُ لِلضَّرُورَةِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "43-45" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 33-34 (Shamela 21604, pages 32-33)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-01b",
    kitab: "tah", bab: "01", fasl: "01", ordre: 1,
    titre: "Qu'est-ce que l'eau absolue ?",
    titre_ar: "حَدُّ المَاءِ المُطْلَقِ",
    objectif: "Reconnaître une eau absolue et distinguer les eaux qui n'en sont pas.",
    matn: "بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ بِالْمُطْلَقِ وَهُوَ مَا صَدَقَ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ",
    regle_pratique: "Est une eau absolue tout ce qu'on peut appeler simplement « eau » : eau de pluie, de mer, de source, de puits ou de rosée ; n'en est pas une l'eau qu'on ne peut nommer qu'avec un complément obligé, comme l'eau de rose ou l'eau mêlée qui a changé.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl définit l'eau absolue comme « ce à quoi s'applique le nom d'eau, sans qualificatif » (بِلَا قَيْدٍ). Al-Ḥaṭṭāb précise : c'est l'eau que l'usage permet d'appeler simplement « eau ».\n\nSont exclues les eaux qu'on ne peut nommer qu'avec un complément ou un adjectif : l'eau de rose, l'eau « mêlée » (المَاءُ المُضَاف, al-mâ'ou l-moudâf, changée par un mélange), l'eau impure. Est exclu aussi le mot « eau » employé pour désigner autre chose, comme le sperme dans le hadith « إذَا رَأَتْ الْمَاءَ ».\n\nSont incluses les eaux dont le complément ne fait que préciser l'origine : eau de pluie, eau de rosée, eau de mer, eau de source, eau de puits. L'eau qui a jailli d'entre les doigts du Prophète ﷺ en fait partie ; al-Ḥaṭṭāb la dit la plus noble des eaux.\n\nSont incluses enfin l'eau douce et les eaux déconseillées que Khalīl citera plus loin.\n\nAl-Ḥaṭṭāb signale deux façons de définir l'eau absolue dans l'école. Ibn Shās et Ibn al-Ḥājib la définissent comme l'eau restée dans son état naturel, et rattachent à elle l'eau changée par son lit ou par ce qui la jouxte. ʿAbd al-Wahhāb et Ibn ʿAskar en font un synonyme de l'eau purifiante (الطَّهُور, at-tahoûr), et y incluent ces cas. Khalīl suit cette seconde façon.",
    aqwal: [
      { auteur: "Ibn Shās et Ibn al-Ḥājib", avis: "L'eau absolue est l'eau restée dans son état naturel ; l'eau changée par son lit, par ce qui naît d'elle ou par ce qui la jouxte lui est rattachée.", statut: "non_precise" },
      { auteur: "Le qāḍī ʿAbd al-Wahhāb et Ibn ʿAskar (suivis par Khalīl)", avis: "L'eau absolue est synonyme de l'eau purifiante et inclut ces cas.", statut: "non_precise" },
      { auteur: "Ibn ʿUmar (rapporté)", avis: "Il jugeait déconseillées les ablutions à l'eau de mer ; al-Ḥaṭṭāb précise que le consensus s'est fait contre cet avis.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr et al-Dasūqī : l'eau absolue est ce à quoi s'applique le nom d'eau « sans qualificatif inséparable » (بِلَا قَيْدٍ لَازِمٍ) ; l'eau de rose, l'eau de fleur ou l'eau de pâte en sont exclues, l'eau de mer, de puits, de source et de pluie y sont incluses.",
    tarjih_hattab: null,
    tanbihat: [
      "Eau de mer : aucune divergence sur la possibilité de se purifier avec.",
      "Eau douce : al-Ḥaṭṭāb ne connaît pas de divergence dans l'école. L'interdiction de se nettoyer avec l'eau douce « parce que c'est une nourriture », attribuée à Ibn Ḥabīb par Ibn at-Tīn, n'est pas connue dans l'école ; al-Māzirī la qualifie d'avis isolé (« وَشَذَّ بَعْضُ الْفُقَهَاءِ »). Al-Ḥaṭṭāb la réfute par les versets sur l'eau purifiante descendue du ciel."
    ],
    divergences: [],
    exemple: "En voyage, vous trouvez un puits et une bouteille d'eau de fleur d'oranger. L'eau du puits est une eau absolue et convient aux ablutions ; l'eau de fleur d'oranger, qu'on ne peut nommer qu'avec son complément, ne convient pas.",
    erreurs_frequentes: [
      "Croire que l'eau de mer ne convient pas aux ablutions : il n'y a pas de divergence, elle convient.",
      "Croire qu'un complément comme « de pluie » ou « de puits » fait perdre à l'eau sa qualité d'eau absolue : il ne fait que préciser son origine.",
      "Considérer l'eau de rose comme de l'eau absolue : on ne peut la nommer qu'avec son complément."
    ],
    termes: [
      { ar: "المَاءُ المُضَاف", translit: "al-mâ'ou l-moudâf", def: "Eau « mêlée » : eau changée par un mélange au point de perdre son caractère d'eau absolue." },
      { ar: "الطَّهُور", translit: "at-tahoûr", def: "Eau purifiante : pure et capable de purifier." },
      { ar: "قَيْد", translit: "qayd", def: "Ici : complément ou qualificatif obligé (« de rose »), qui empêche d'appeler l'eau simplement « eau »." }
    ],
    quiz: [
      { q: "Laquelle de ces eaux est une eau absolue ?",
        choix: ["L'eau de rose", "L'eau mêlée qui a changé", "L'eau de mer", "Le jus de fruit"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : l'eau de mer fait partie de l'eau absolue, sans divergence." },
      { q: "Pourquoi l'eau de pluie reste-t-elle une eau absolue malgré le complément « de pluie » ?",
        choix: ["Parce qu'elle vient du ciel", "Parce que le complément ne fait que préciser son origine", "Ce n'est pas une eau absolue", "Parce qu'elle est froide"],
        bonne: 1,
        explication: "Le complément est « explicatif » : on peut aussi l'appeler simplement « eau »." },
      { q: "Mise en situation : vous n'avez que de l'eau de fleur d'oranger et de l'eau de puits. Avec laquelle faites-vous vos ablutions ?",
        choix: ["L'eau de puits", "L'eau de fleur d'oranger", "Les deux mélangées", "Aucune"],
        bonne: 0,
        explication: "L'eau de puits est une eau absolue ; l'eau de fleur d'oranger ne se nomme qu'avec son complément." },
      { q: "Quelle définition de l'eau absolue Khalīl suit-il ?",
        choix: ["Celle d'Ibn ʿUmar", "Celle de ʿAbd al-Wahhāb et Ibn ʿAskar", "Celle d'Ibn Shās et Ibn al-Ḥājib", "Aucune"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : Khalīl suit ʿAbd al-Wahhāb et Ibn ʿAskar, pour qui l'eau absolue est synonyme d'eau purifiante." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "45-46, 50" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 34 (Shamela 21604, page 33)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-01c",
    kitab: "tah", bab: "01", fasl: "01", ordre: 1,
    titre: "L'eau de Zamzam",
    titre_ar: "مَاءُ زَمْزَمَ",
    objectif: "Savoir ce qui est permis, recommandé ou déconseillé avec l'eau de Zamzam.",
    matn: "بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ بِالْمُطْلَقِ وَهُوَ مَا صَدَقَ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ",
    regle_pratique: "L'eau de Zamzam est une eau absolue : on peut faire avec elle ses ablutions et son ghousl quand le corps ne porte pas d'impureté ; selon al-Ḥaṭṭāb, il est déconseillé de s'en servir pour ôter une impureté, mais l'endroit lavé devient pur.",
    qualification: {
      hukm: "makruh",
      nature: "autre",
      effet_si_omis: "Si l'on ôte une impureté avec l'eau de Zamzam, l'endroit est purifié (« فَإِنْ أُزِيلَتْ بِهِ طَهُرَ الْمَحِلُّ »)."
    },
    explication: "L'eau de Zamzam entre dans l'eau de puits, donc dans l'eau absolue.\n\nAblutions et ghousl : al-Ḥaṭṭāb ne connaît aucune divergence sur leur validité, pour qui a les membres purs. Plusieurs auteurs rapportent même d'Ibn Ḥabīb qu'ils sont recommandés. Selon l'abrégé de la Wāḍiḥa par Faḍl ibn Salama, il est recommandé au pèlerin de prendre beaucoup d'eau de Zamzam pendant son séjour à La Mecque, pour la boire, faire ses ablutions et se laver, par recherche de sa bénédiction. Pour le ghousl, al-Ḥaṭṭāb ajoute une condition : ne pas traverser la mosquée en état de janâba, ce qui est interdit chez les malikites.\n\nÔter une impureté : al-Ḥaṭṭāb conclut que c'est déconseillé au départ. Si on le fait, l'endroit est quand même purifié.\n\nLaver un mort : la question dépend de la pureté du mort. Si le mort est pur, avis qu'al-Ḥaṭṭāb dit le plus apparent et juste, on peut le laver avec cette eau ; al-Lakhmī juge même cela préférable, pour sa bénédiction. Si le mort est impur, avis que Khalīl présente plus loin, ce lavage est déconseillé, comme le dit Ibn Bashīr.",
    aqwal: [
      { auteur: "Ibn Ḥabīb (rapporté par plusieurs)", avis: "Les ablutions et le ghousl à l'eau de Zamzam sont recommandés.", statut: "non_precise" },
      { auteur: "Ibn Shaʿbān (az-Zāhī)", avis: "On ne l'utilise pas dans les latrines, on n'y mêle pas d'impureté, on n'ôte pas d'impureté avec et on ne s'en lave pas au bain public ; celui dont les membres sont purs peut faire ses ablutions et son ghousl avec.", statut: "non_precise" },
      { auteur: "Ibn Abī Zayd", avis: "Ce que dit Ibn Shaʿbān de l'eau de Zamzam n'a pas de fondement chez Mālik et ses compagnons (al-Ḥaṭṭāb pense qu'il l'a compris comme une interdiction).", statut: "non_precise" },
      { auteur: "Al-Lakhmī", avis: "Si le mort est pur, le laver à l'eau de Zamzam est même préférable, pour sa bénédiction.", statut: "non_precise" },
      { auteur: "Ibn Bashīr", avis: "Si l'on juge le mort impur, on déconseille de le laver à l'eau de Zamzam.", statut: "non_precise" }
    ],
    muatamad: "non confirmé (le passage correspondant d'al-Dardīr / al-Dasūqī ne traite pas de l'eau de Zamzam)",
    tarjih_hattab: "Al-Ḥaṭṭāb conclut qu'ôter une impureté avec l'eau de Zamzam est déconseillé au départ, l'endroit étant purifié si on le fait. Il comprend la phrase d'Ibn Shaʿbān comme une déconseillance, conforme à l'école ; comprise comme une interdiction, elle contredirait Mālik et ses compagnons.",
    tanbihat: [
      "Al-Ḥaṭṭāb dit s'être étendu sur cette question à cause du désordre des citations : il a voulu dégager ce qui ressort de l'école.",
      "Ibn Farḥūn rapporte une forte déconseillance pour se nettoyer avec cette eau après le besoin ; on rapporte que cela provoque des hémorroïdes.",
      "La vertu de l'eau de Zamzam et le mérite d'en boire seront traités au livre du pèlerinage."
    ],
    divergences: [],
    exemple: "Pendant votre séjour à La Mecque, vous pouvez faire vos ablutions avec l'eau de Zamzam. Si votre vêtement est taché d'urine, lavez-le plutôt avec une autre eau. Si vous l'avez déjà lavé à l'eau de Zamzam, il est pur.",
    erreurs_frequentes: [
      "Croire que les ablutions à l'eau de Zamzam sont interdites : al-Ḥaṭṭāb ne connaît pas de divergence sur leur validité.",
      "Croire qu'une impureté ôtée à l'eau de Zamzam laisse l'endroit impur : l'endroit est purifié, l'acte est seulement déconseillé.",
      "Se servir de l'eau de Zamzam pour se nettoyer après le besoin : c'est fortement déconseillé selon Ibn Farḥūn."
    ],
    termes: [
      { ar: "زَمْزَم", translit: "zamzam", def: "Puits de La Mecque ; son eau est une eau absolue." }
    ],
    quiz: [
      { q: "Peut-on faire ses ablutions avec l'eau de Zamzam ?",
        choix: ["Seulement pour la prière du vendredi", "Non, c'est interdit", "Seulement en voyage", "Oui, si les membres sont purs ; Ibn Ḥabīb les dit même recommandées"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb ne connaît pas de divergence sur leur validité ; plusieurs rapportent d'Ibn Ḥabīb qu'elles sont recommandées." },
      { q: "Qu'en est-il du lavage d'une impureté avec l'eau de Zamzam, selon al-Ḥaṭṭāb ?",
        choix: ["Obligatoire", "Permis sans réserve", "Déconseillé, mais l'endroit devient pur", "Interdit, et l'endroit reste impur"],
        bonne: 2,
        explication: "« فَالظَّاهِرُ أَنَّ ذَلِكَ مَكْرُوهٌ ابْتِدَاءً فَإِنْ أُزِيلَتْ بِهِ طَهُرَ الْمَحِلُّ »." },
      { q: "Mise en situation : vous avez lavé une tache d'impureté avec de l'eau de Zamzam. Votre vêtement est-il pur ?",
        choix: ["Non, il faut le relaver", "Oui, l'endroit est purifié", "Seulement s'il sèche au soleil", "On ne peut pas savoir"],
        bonne: 1,
        explication: "L'acte est déconseillé au départ, mais l'endroit est purifié." },
      { q: "De quoi dépend la question du lavage d'un mort à l'eau de Zamzam ?",
        choix: ["De l'heure du décès", "Du lieu de l'enterrement", "De la question de savoir si le mort est pur ou impur", "De son âge"],
        bonne: 2,
        explication: "Si le mort est pur, c'est permis (al-Lakhmī : préférable) ; s'il est jugé impur, c'est déconseillé (Ibn Bashīr)." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "46-49" },
    alertes: [
      "Le passage d'al-Dardīr / al-Dasūqī lu pour le croisement (t. 1, p. 33-35) ne traite pas de l'eau de Zamzam ; le muʿtamad n'est donc pas confirmé.",
      "Al-Ḥaṭṭāb rapporte aussi l'avis d'al-Muḥibb aṭ-Ṭabarī (interdiction d'ôter une impureté avec cette eau), sans préciser son école ; il n'est pas repris dans la fiche. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-01d",
    kitab: "tah", bab: "01", fasl: "01", ordre: 1,
    titre: "Les puits du pays de Thamūd",
    titre_ar: "آبَارُ ثَمُودَ",
    objectif: "Savoir qu'on n'utilise pas l'eau des puits de Thamūd, et pourquoi.",
    matn: "بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ بِالْمُطْلَقِ وَهُوَ مَا صَدَقَ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ",
    regle_pratique: "On ne fait pas ses ablutions et on ne se sert pas de l'eau des puits du pays de Thamūd, sauf le puits où venait boire la chamelle : ce n'est pas que cette eau soit impure, c'est une eau de la colère divine.",
    qualification: {
      hukm: "haram",
      nature: "autre",
      effet_si_omis: "Non précisé par al-Ḥaṭṭāb. Selon al-Dasūqī, la prière faite après s'être purifié avec cette eau n'est pas valide (avis retenu, voir le muʿtamad)."
    },
    explication: "Al-Ḥaṭṭāb excepte des eaux de puits celles du pays de Thamūd : on ne peut ni faire ses ablutions avec, ni en tirer profit. Il cite al-Qurṭubī dans son commentaire de Muslim, et Ibn Farḥūn qui le tient d'Ibn al-ʿArabī.\n\nLa raison est un hadith rapporté par al-Bukhārī et Muslim : passant par ces lieux, le Prophète ﷺ ordonna à ses compagnons de ne boire qu'au puits où venait la chamelle, de jeter la pâte pétrie avec l'eau des autres puits et de verser cette eau. Dans la version de Muslim, il leur ordonna de donner la pâte aux chameaux.\n\nCette eau est-elle impure ? Al-Qurṭubī tire de l'ordre de la verser qu'elle est impure. Ibn Farḥūn et Zarrūq disent au contraire qu'on ne la juge pas impure : c'est une « eau de colère » dont l'usage est interdit. Al-Ḥaṭṭāb retient ce second avis.",
    aqwal: [
      { auteur: "Al-Qurṭubī (commentaire de Muslim)", avis: "L'ordre de verser l'eau et de jeter la pâte montre que cette eau est jugée impure.", statut: "non_precise" },
      { auteur: "Ibn Farḥūn et Zarrūq", avis: "L'eau n'est pas jugée impure ; son usage est seulement interdit, car c'est une eau de colère.", statut: "non_precise" },
      { auteur: "Ibn al-ʿArabī (Aḥkām al-Qurʾān)", avis: "On ne fait pas le tayammoum avec la terre du pays de Thamūd.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr et al-Dasūqī : l'eau des puits de Thamūd est purifiante, mais il n'est pas permis de se purifier avec, car c'est l'eau d'une terre où le châtiment est descendu. Al-Dasūqī précise que la prière faite avec cette purification n'est pas valide (avis d'ar-Raṣṣāʿ, « sur lequel on s'est appuyé », contre l'auteur désigné par le sigle « عج » (sigle non défini dans la liste d'al-Dasūqī), qui la jugeait valide), qu'on ne s'en sert pas non plus pour cuire ou pétrir, que le puits de la chamelle est excepté, et que le tayammoum sur cette terre est interdit (un autre avis le permet, jugé juste par at-Tatāʾī).",
    tarjih_hattab: "Al-Ḥaṭṭāb retient l'avis d'Ibn Farḥūn et de Zarrūq : l'eau n'est pas impure, seul son usage est interdit. Il observe qu'on ne rapporte pas que le Prophète ﷺ ait ordonné de laver les récipients, les mains ou les vêtements touchés par cette eau.",
    tanbihat: [
      "Zarrūq dit n'avoir pas trouvé dans le hadith l'ordre de faire le tayammoum au lieu d'utiliser cette eau.",
      "Ibn Ḥajar rapporte que le puits de la chamelle était connu par transmission continue (al-Bulqīnī) ; lui-même pense que le Prophète ﷺ le connaissait par révélation.",
      "Des auteurs shāfiʿites cités par al-Ḥaṭṭāb étendent la règle à d'autres eaux « de colère » (pays de Lūṭ, Babylone, puits de Dharwān, puits de Barhūt)."
    ],
    divergences: [
      "Complément (sujet absent de ce passage d'al-Ḥaṭṭāb) — eau des puits de Thamoûd. Al-Dardīr : elle est purifiante, mais il n'est pas permis de s'en purifier, car c'est une eau de châtiment (« وَإِنْ كَانَ التَّطْهِيرُ بِهِ غَيْرَ جَائِزٍ لِكَوْنِهِ مَاءَ عَذَابٍ »). Al-Dasūqī : sur la prière faite après s'en être purifié, deux avis : « عج » (sigle non défini dans la liste d'al-Dasūqī) la juge valide ; ar-Raṣṣāʿ (commentaire des Ḥudūd) la juge non valide, avis sur lequel on s'appuie d'après son maître al-ʿAdawī (« اسْتَظْهَرَ عج الصِّحَّةَ وَفِي الرَّصَّاعِ عَلَى الْحُدُودِ عَدَمُهَا وَاعْتَمَدُوهُ كَمَا ذَكَرَهُ شَيْخُنَا ») ; cette non-validité est « de culte, non due à l'impureté de l'eau » (« وَعَدَمُ الصِّحَّةِ تَعَبُّدِيٌّ لَا لِنَجَاسَةِ الْمَاءِ »). Il étend la règle aux puits des autres terres de châtiment."
    ],
    exemple: "Lors d'un voyage dans la région d'al-Ḥijr, vous trouvez un ancien puits du pays de Thamūd. Vous n'y faites pas vos ablutions et vous n'utilisez pas son eau pour cuisiner. Ce n'est pas que l'eau soit impure : c'est une eau de colère.",
    erreurs_frequentes: [
      "Croire que l'eau de ces puits est impure : selon al-Ḥaṭṭāb et al-Dardīr, elle ne l'est pas, mais son usage est interdit.",
      "Oublier l'exception du puits où venait boire la chamelle."
    ],
    termes: [
      { ar: "آبَارُ ثَمُودَ", translit: "âbârou thamoûd", def: "Puits du pays du peuple de Thamūd (al-Ḥijr), dont l'eau ne doit pas être utilisée, sauf le puits de la chamelle." },
      { ar: "مَاءُ سَخَطٍ", translit: "mâ'ou sakhat", def: "« Eau de colère » : eau d'une terre frappée par le châtiment divin." }
    ],
    quiz: [
      { q: "Peut-on faire ses ablutions avec l'eau des puits de Thamūd ?",
        choix: ["Seulement en cas de besoin de boire", "Non, sauf au puits où venait la chamelle", "Oui", "Oui, si l'eau est claire"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : on ne fait pas ses ablutions avec cette eau et on n'en tire pas profit, sauf au puits de la chamelle." },
      { q: "Pourquoi, selon l'avis retenu par al-Ḥaṭṭāb ?",
        choix: ["Parce que c'est une eau de colère divine", "Parce qu'elle est salée", "Parce qu'elle est trop ancienne", "Parce que l'eau est impure"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb suit Ibn Farḥūn et Zarrūq : l'eau n'est pas impure, c'est une eau de colère." },
      { q: "Mise en situation : quelqu'un a fait ses ablutions avec cette eau, puis a prié. Selon al-Dasūqī, sa prière est-elle valide ?",
        choix: ["Oui, s'il l'ignorait", "Seulement si c'était une prière surérogatoire", "Oui", "Non, selon l'avis retenu"],
        bonne: 3,
        explication: "Al-Dasūqī : l'auteur désigné par « عج » (sigle non défini dans la liste d'al-Dasūqī) la jugeait valide, mais on s'est appuyé sur l'avis d'ar-Raṣṣāʿ, qui la juge non valide." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "49-50" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 34 (Shamela 21604, page 33)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-02",
    kitab: "tah", bab: "01", fasl: "01", ordre: 2,
    titre: "L'eau de rosée recueillie",
    titre_ar: "مَا جُمِعَ مِنَ النَّدَى",
    objectif: "Savoir que l'eau de rosée recueillie est une eau absolue, et quand il faut s'en servir.",
    matn: "وَإِنْ جُمِعَ مِنْ نَدًى",
    regle_pratique: "L'eau de rosée recueillie est une eau absolue : si l'on n'a pas d'autre eau mais qu'on peut réunir assez de rosée pour ses ablutions, on fait ses ablutions avec, et non le tayammoum.",
    qualification: {
      hukm: "wajib",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le mot نَدًى (nadâ) désigne ici l'humidité qui se dépose la nuit sur le sol et sur les feuilles des arbres.\n\nAl-Ḥaṭṭāb explique que Khalīl commence ici une liste de situations qui ne font pas perdre à l'eau sa qualité d'eau absolue. Il les introduit par « وَإِنْ » (« même si ») parce que, pour beaucoup d'entre elles, il est moins évident qu'elles entrent dans la définition, même si elles ont la même règle.\n\nMālik a déclaré, dans al-Majmūʿa, qu'on fait ses ablutions avec la rosée qu'on a réunie, et qu'on ne fait pas le tayammoum si l'on en trouve. Interrogé sur celui qui n'a pas d'eau, il a répondu : il fait le tayammoum, sauf s'il réunit assez de rosée pour ses ablutions.",
    aqwal: [
      { auteur: "Mālik (al-Majmūʿa, rapporté dans an-Nawādir, par Sanad et al-Lakhmī)", avis: "On fait ses ablutions avec la rosée réunie ; on ne fait le tayammoum que si l'on ne peut pas en réunir assez.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'eau réunie de la rosée est une eau absolue, même si on la réunit dans la main de celui qui fait ses ablutions ou son ghousl. L'obligation de l'utiliser plutôt que le tayammoum n'est pas reprise dans ce passage d'al-Dardīr.",
    tarjih_hattab: null,
    tanbihat: [
      "L'expression « eau de rosée » ne contredit pas la définition de l'eau absolue : le complément ne fait que préciser l'origine de l'eau."
    ],
    divergences: [
      "Divergence (entre commentateurs, rapportée par al-Dasūqī) — rosée recueillie sur une surface. Al-Dardīr : le changement de son odeur par cette surface ne nuit pas (« وَاسْتَظْهَرَ أَنَّهُ لَا يَضُرُّ تَغَيُّرُ رِيحِهِ بِمَا جُمِعَ مِنْ فَوْقِهِ »). An-Nafrāwī (commentaire de la Risāla) : cela vaut pour l'odeur seulement ; un changement de couleur ou de goût nuit (« وَالْفَرْقُ خِفَّةُ تَغَيُّرِ الرِّيحِ كَذَا فِي النَّفْرَاوِيِّ عَلَى الرِّسَالَةِ »). « بن » (Muḥammad al-Bunānī) : aucune des qualités ne nuit (« أَنَّهُ لَا خُصُوصِيَّةَ لِتَغَيُّرِ الرِّيحِ بَلْ لَا يَضُرُّ تَغَيُّرُ شَيْءٍ مِنْ أَوْصَافِهِ ») ; son maître al-ʿAdawī a choisi cet avis (« وَاخْتَارَهُ شَيْخُنَا »)."
    ],
    exemple: "En camping, vous n'avez plus d'eau, mais à l'aube vous pouvez recueillir assez de rosée sur une bâche pour vos ablutions. Vous faites vos ablutions avec cette eau, et non le tayammoum.",
    erreurs_frequentes: [
      "Faire le tayammoum alors qu'on peut réunir assez de rosée pour ses ablutions.",
      "Croire que la rosée n'est pas une vraie eau parce qu'on l'appelle « eau de rosée »."
    ],
    termes: [
      { ar: "النَّدَى", translit: "an-nadâ", def: "Rosée : humidité qui se dépose la nuit sur le sol et les feuilles." },
      { ar: "تَيَمُّم", translit: "tayammoum", def: "Ablution sèche, faite avec la terre pure quand l'eau manque ou ne peut être utilisée." }
    ],
    quiz: [
      { q: "L'eau de rosée recueillie est-elle une eau absolue ?",
        choix: ["Oui", "Seulement pour boire", "Seulement si elle est filtrée", "Non"],
        bonne: 0,
        explication: "Khalīl l'inclut dans l'eau absolue (« وَإِنْ جُمِعَ مِنْ نَدًى »)." },
      { q: "Selon Mālik, que fait celui qui n'a pas d'eau mais peut réunir assez de rosée ?",
        choix: ["Il fait le tayammoum", "Il ne prie pas", "Il attend la pluie", "Il fait ses ablutions avec la rosée"],
        bonne: 3,
        explication: "Mālik : il fait le tayammoum « sauf s'il réunit assez de rosée pour ses ablutions »." },
      { q: "Mise en situation : vous ne pouvez réunir qu'un peu de rosée, insuffisante pour vos ablutions. Que dit le texte ?",
        choix: ["Faire les ablutions avec ce peu", "Attendre le lendemain", "Faire le tayammoum", "Ne pas prier"],
        bonne: 2,
        explication: "Mālik : il fait le tayammoum, sauf s'il réunit de quoi faire ses ablutions." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "50-51" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 34 (Shamela 21604, page 33)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-03",
    kitab: "tah", bab: "01", fasl: "01", ordre: 3,
    titre: "La glace, la neige et le sel fondus",
    titre_ar: "مَا ذَابَ بَعْدَ جُمُودِهِ",
    objectif: "Savoir si l'eau provenant de la glace, de la neige ou du sel fondus purifie.",
    matn: "أَوْ ذَابَ بَعْدَ جُمُودِهِ",
    regle_pratique: "L'eau qui était gelée puis a fondu (neige, grêle, glace), d'elle-même ou parce qu'on l'a fait fondre, est une eau absolue ; il en va de même, selon l'avis mashhūr, du sel qui fond, même ailleurs qu'à l'endroit où il s'est formé.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl précise que l'eau absolue reste telle, qu'elle soit liquide à l'origine ou qu'elle ait d'abord gelé puis fondu. Peu importe qu'elle ait fondu d'elle-même ou qu'on l'ait fait fondre (Zarrūq), et qu'il s'agisse de neige ou de grêle, fondue sur place ou ailleurs.\n\nPour l'eau fondue sur place, plusieurs auteurs disent qu'il n'y a pas de divergence. Il en va de même du sel qui fond à l'endroit où il s'est formé.\n\nLe sel qui fond ailleurs fait l'objet de trois avis chez les auteurs tardifs de l'école, rapportés par Ibn Rushd dans al-Muqaddimāt : il reste purifiant ; il prend la règle d'une nourriture ; ou la réponse dépend de la façon dont il s'est solidifié, par fabrication ou non.\n\nAl-Ḥaṭṭāb conclut que les mots de Khalīl visent tous ces cas, sel compris, et que le premier avis est le mashhūr.",
    aqwal: [
      { auteur: "Avis rapporté sans attribution (auteurs tardifs, cités par Ibn Rushd, al-Muqaddimāt)", avis: "Le sel fondu ailleurs garde sa qualité d'eau purifiante ; sa solidification n'y change rien.", statut: "mashhur" },
      { auteur: "Avis rapporté sans attribution (même source)", avis: "Il prend la règle d'une nourriture : on ne se purifie pas avec, et l'eau qu'il change devient « mêlée ».", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (même source)", avis: "Si sa solidification vient d'une fabrication, il a un effet ; sinon, non.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dasūqī : l'eau fondue après avoir gelé est une eau absolue, ce qui « inclut le sel fondu à sa place ou ailleurs, conformément à la conclusion d'al-Ḥaṭṭāb (ح) et d'autres » ; peu importe qu'elle ait fondu d'elle-même ou par le feu ou le soleil.",
    tarjih_hattab: "Al-Ḥaṭṭāb lit les mots de Khalīl comme généraux, sel compris. Il retient le premier avis comme mashhūr, car Khalīl dira plus loin que l'eau changée par le sel reste purifiante selon le mashhūr, et Ibn Rushd met les deux questions sur le même plan. Il cite aussi ash-Shāmil, qui commence par cet avis, et ash-Sharḥ aṣ-ṣaghīr, qui le dit mashhūr.",
    tanbihat: [
      "Farʿ : si l'on trouve, dans de la grêle fondue, une chose pure ou impure venue du sol, la règle est la même que si cette chose était tombée dans l'eau (al-Bisāṭī, approuvé par al-Ḥaṭṭāb)."
    ],
    divergences: [
      "Complément — ce qu'on trouve dans la glace fondue. Al-Dasūqī : « si cela change l'une de ses trois qualités, cela lui ôte son pouvoir purifiant » (« فَإِنْ غَيَّرَ أَحَدَ أَوْصَافِهِ الثَّلَاثَةِ سَلَبَهُ طَهُورِيَّتَهُ ») ; sinon l'eau « reste purifiante » (« فَهُوَ بَاقٍ عَلَى طَهُورِيَّتِهِ »). Al-Ḥaṭṭāb se contente de renvoyer à la règle de l'eau où tombe une chose."
    ],
    exemple: "En montagne, vous faites fondre de la neige dans une casserole pour faire vos ablutions. Cette eau est une eau absolue, même si c'est vous qui l'avez fait fondre.",
    erreurs_frequentes: [
      "Croire que l'eau de neige ou de glace fondue ne convient pas aux ablutions.",
      "Croire que l'eau fondue au feu perd sa qualité : peu importe qu'elle ait fondu d'elle-même ou qu'on l'ait fait fondre."
    ],
    termes: [
      { ar: "الجُمُود", translit: "al-joumoûd", def: "Fait de geler ou de se solidifier ; contraire de « fondre »." },
      { ar: "الثَّلْج", translit: "ath-thalj", def: "Neige." },
      { ar: "البَرَد", translit: "al-barad", def: "Grêle." }
    ],
    quiz: [
      { q: "L'eau de neige fondue est-elle une eau absolue ?",
        choix: ["Oui", "Non", "Seulement si elle a fondu seule", "Seulement en hiver"],
        bonne: 0,
        explication: "Khalīl : « أَوْ ذَابَ بَعْدَ جُمُودِهِ » ; peu importe comment elle a fondu." },
      { q: "Mise en situation : vous faites fondre de la glace sur un réchaud. Pouvez-vous faire vos ablutions avec ?",
        choix: ["Seulement après l'avoir laissée refroidir une nuit", "Non, il faut faire le tayammoum", "Non, car elle a fondu au feu", "Oui, peu importe qu'on l'ait fait fondre"],
        bonne: 3,
        explication: "Zarrūq : qu'elle ait fondu d'elle-même ou qu'on l'ait fait fondre ; al-Dasūqī : par le feu ou le soleil." },
      { q: "Quel est l'avis mashhūr pour le sel qui fond ailleurs qu'à sa place, selon al-Ḥaṭṭāb ?",
        choix: ["Tout dépend de sa fabrication", "Il garde sa qualité d'eau purifiante", "Il est impur", "Il prend la règle d'une nourriture"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb retient le premier des trois avis comme mashhūr ; al-Dasūqī confirme." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "51" },
    alertes: [
      "Matn : l'édition de Mawāhib imprime « أَوَذَابَ » ; corrigé en « أَوْ ذَابَ », lecture confirmée par al-Sharḥ al-kabīr (« أَوْ ذَابَ »). Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 34-35 (Shamela 21604, pages 33-34)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-04",
    kitab: "tah", bab: "01", fasl: "01", ordre: 4,
    titre: "L'eau dont ont bu un animal, une femme réglée ou une personne en janâba",
    titre_ar: "سُؤْرُ البَهِيمَةِ وَالحَائِضِ وَالجُنُبِ",
    objectif: "Savoir si l'on peut se purifier avec l'eau restante après qu'un animal, une femme réglée ou une personne en janâba en a bu.",
    matn: "أَوْ كَانَ سُؤْرَ بَهِيمَةٍ أَوْ حَائِضٍ أَوْ جُنُبٍ",
    regle_pratique: "L'eau dont un animal, une femme réglée ou une personne en état de janâba a bu reste une eau absolue : on peut faire ses ablutions avec ce reste.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le سُؤْر (sou'r) est ce qui reste d'une boisson après qu'un être vivant en a bu.\n\nReste bu par un animal : la Mudawwana permet les ablutions avec ce reste, comme avec toute autre eau. Selon une transmission d'Ibn Wahb, rapportée par al-Lakhmī, une autre eau est préférable, mais il n'y a pas de mal à l'utiliser en cas de besoin. Khalīl suit le sens apparent de la Mudawwana ; selon al-Ḥaṭṭāb, il fait allusion à la transmission d'Ibn Wahb en plaçant ce cas dans sa liste de « même si » (وَإِنْ …).\n\nSi l'animal mange parfois des excréments, Sanad distingue deux cas. Pour l'animal qui le fait de temps en temps, Ibn al-Qāsim dit que la plupart des bêtes le font, et qu'il n'y a pas de mal tant qu'on ne voit pas de souillure à leur bouche au moment où elles boivent. Ce cas entre dans les mots de Khalīl. L'animal qui se nourrit habituellement d'impuretés (الجَلَّالَة, al-jallâla) a une règle propre, la déconseillance, que Khalīl donnera plus loin.\n\nReste bu par une femme réglée (حَائِض, hâ'id) ou une personne en janâba (جُنُب, jounoub) : il n'y a pas de divergence sur sa pureté, s'il n'y a pas d'impureté dans leur bouche. Khalīl le précise pour qu'on ne croie pas le contraire.",
    aqwal: [
      { auteur: "La Mudawwana", avis: "Les ablutions avec le reste bu par les bêtes sont permises ; ce reste vaut toute autre eau.", statut: "non_precise" },
      { auteur: "Mālik, transmission d'Ibn Wahb (rapportée par al-Lakhmī)", avis: "Une autre eau est préférable ; pas de mal à l'utiliser en cas de besoin.", statut: "non_precise" },
      { auteur: "Ibn al-Qāsim", avis: "Le reste d'une bête qui mange parfois des excréments ne pose pas de problème, tant qu'on ne voit pas de souillure à sa bouche quand elle boit.", statut: "rajih" },
      { auteur: "Certains savants (rapporté par Ibn Ḥabīb)", avis: "Ce reste est déconseillé.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le reste bu par une bête est une eau absolue, même si sa chair n'est pas consommée ou si c'est une jallāla ; de même le reste d'une femme réglée ou d'une personne en janâba, même si ce sont des non-musulmans buveurs de vin qui ont bu ensemble.",
    tarjih_hattab: null,
    tanbihat: [
      "L'avis d'Ibn al-Qāsim sur les bêtes qui mangent parfois des excréments a été jugé plus fort par Ibn al-Imām et d'autres (« وَقَدْ رَجَّحَهُ ابْنُ الْإِمَامِ وَغَيْرُهُ »).",
      "Le reste de la jallāla est une eau absolue, mais il a une règle propre (déconseillance), annoncée pour plus loin."
    ],
    divergences: [
      "Divergence — reste d'eau d'une femme réglée ou d'un junub dont la bouche porte une impureté. Al-Ḥaṭṭāb : pas de divergence sur sa pureté « s'il n'y a pas d'impureté dans leur bouche » (« فَلَا خِلَافَ فِي طَهَارَتِهِ إذَا لَمْ يَكُنْ فِي أَفْوَاهِهِمَا نَجَاسَةٌ »). Al-Dardīr : il est purifiant « même s'ils sont deux mécréants buveurs de vin » (« وَلَوْ كَافِرَيْنِ شَارِبَيْ خَمْرٍ »). Al-Dasūqī : même si l'impureté a été vue sur leur bouche au moment de boire, tant que l'eau n'a pas changé ; sinon elle est impure (« وَلَوْ رُئِيَتْ النَّجَاسَةُ عَلَى فَمِهِمَا وَقْتَ الشُّرْبِ حَيْثُ لَمْ يَتَغَيَّرْ الْمَاءُ وَإِلَّا سَلَبَ طَهُورِيَّتَهُ وَكَانَ نَجِسًا »).",
      "Point à comparer — reste de la jallāla. Al-Ḥaṭṭāb : il entre dans l'eau absolue, mais « il a une règle propre, la karāha » (« لَكِنَّهُ لَهُ حُكْمٌ يَخُصُّهُ وَهُوَ الْكَرَاهَةُ »). Al-Dardīr la cite ici parmi les restes purifiants sans évoquer de karāha ; al-Dasūqī la définit seulement (« أَيْ أَوْ كَانَتْ جَلَّالَةً تَأْكُلُ الْجِيَفَ وَالنَّجَاسَاتِ »)."
    ],
    exemple: "Un chat a bu dans le seau d'eau que vous aviez préparé pour vos ablutions. Vous pouvez faire vos ablutions avec ce qui reste, si vous n'avez pas vu de souillure à sa bouche.",
    erreurs_frequentes: [
      "Croire qu'une femme réglée ou une personne en janâba rend l'eau impure en y buvant.",
      "Jeter l'eau dont un animal a bu alors qu'aucune souillure n'est visible."
    ],
    termes: [
      { ar: "سُؤْر", translit: "sou'r", def: "Reste d'une boisson après qu'un être vivant en a bu." },
      { ar: "حَائِض", translit: "hâ'id", def: "Femme en période de règles." },
      { ar: "جُنُب", translit: "jounoub", def: "Personne en état de janâba, qui doit faire le ghousl." },
      { ar: "الجَلَّالَة", translit: "al-jallâla", def: "Animal qui se nourrit habituellement d'impuretés." }
    ],
    quiz: [
      { q: "Peut-on faire ses ablutions avec l'eau dont un animal a bu ?",
        choix: ["Seulement si l'animal est un chameau", "Non, jamais", "Seulement après l'avoir fait bouillir", "Oui, selon la Mudawwana"],
        bonne: 3,
        explication: "La Mudawwana : les ablutions avec le reste des bêtes sont permises ; Khalīl suit ce sens." },
      { q: "Selon la transmission d'Ibn Wahb, que vaut-il mieux faire ?",
        choix: ["La verser", "Utiliser une autre eau, sans mal à utiliser ce reste en cas de besoin", "Ne jamais l'utiliser", "L'utiliser de préférence"],
        bonne: 1,
        explication: "« غَيْرُهُ أَحَبُّ إلَيَّ مِنْهُ وَلَا بَأْسَ بِهِ إنْ اُضْطُرَّ إلَيْهِ »." },
      { q: "Mise en situation : une femme en période de règles a bu dans une carafe. Pouvez-vous faire vos ablutions avec le reste ?",
        choix: ["Seulement après trois jours", "Non", "Seulement si elle a fait le ghousl", "Oui, il n'y a pas de divergence sur sa pureté s'il n'y a pas d'impureté dans sa bouche"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : « فَلَا خِلَافَ فِي طَهَارَتِهِ إذَا لَمْ يَكُنْ فِي أَفْوَاهِهِمَا نَجَاسَةٌ »." },
      { q: "Selon Ibn al-Qāsim, quand le reste d'une bête qui mange parfois des excréments pose-t-il problème ?",
        choix: ["Jamais", "Toujours", "Quand on voit une souillure à sa bouche au moment où elle boit", "La nuit"],
        bonne: 2,
        explication: "« فَلَا بَأْسَ بِهِ مَا لَمْ يُرَ فِي أَفْوَاهِهَا ذَلِكَ عِنْدَ شُرْبِهَا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "51-52" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 34-35 (Shamela 21604, pages 33-34).",
      "La phrase d'al-Ḥaṭṭāb « وَأَشَارَ بِالْمُبَالَغَةِ لِرِوَايَةِ ابْنِ وَهْبٍ » renvoie à la liste introduite par « وَإِنْ » ; la fiche la rend sans plus de précision. Non bloquant."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-05",
    kitab: "tah", bab: "01", fasl: "01", ordre: 5,
    titre: "L'eau restante après la purification d'une femme réglée ou d'une personne en janâba",
    titre_ar: "فَضْلَةُ طَهَارَةِ الحَائِضِ وَالجُنُبِ",
    objectif: "Savoir si l'on peut se purifier avec l'eau qui reste après qu'une femme réglée ou une personne en janâba s'est purifiée.",
    matn: "أَوْ فَضْلَةَ طَهَارَتِهِمَا",
    regle_pratique: "L'eau qui reste après qu'une femme réglée ou une personne en janâba s'est purifiée est pure et purifiante ; de même, l'homme peut se purifier avec le reste de l'eau d'une femme, et inversement.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb explique que l'eau qui reste de la purification d'une femme réglée ou d'une personne en janâba est pure et purifiante, car elle entre dans la définition de l'eau absolue. C'est ce que dit la Mudawwana originale (al-Umm), et plusieurs auteurs de l'école le déclarent.\n\nIbn Rushd rapporte cinq avis sur l'eau qui reste des ablutions d'un homme pour une femme, et inversement : permis ; interdit dans les deux sens ; permis à la femme seulement ; permis seulement s'ils ont commencé ensemble ; permis sauf si l'homme est en janâba et la femme réglée ou en janâba. Le premier est celui de Mālik et de tous ses compagnons, sans divergence entre eux.\n\nUn auteur (« le commentateur », ash-shāriḥ) cite un avis selon lequel on ne se purifie pas avec le reste de l'eau d'une femme réglée. Al-Ḥaṭṭāb dit ne pas l'avoir trouvé dans l'école : c'est un avis d'Aḥmad ibn Ḥanbal, rapporté par aṭ-Ṭirāz, ʿIyāḍ et an-Nawawī, et réfuté par eux.",
    aqwal: [
      { auteur: "Mālik et tous ses compagnons (rapporté par Ibn Rushd)", avis: "L'homme peut faire ses ablutions avec le reste de l'eau d'une femme, et inversement, sans divergence entre eux.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (cité par Ibn Rushd)", avis: "Aucun des deux ne se purifie avec le reste de l'autre.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (cité par Ibn Rushd)", avis: "La femme peut utiliser le reste de l'homme, mais pas l'inverse ; ou : seulement s'ils ont commencé ensemble ; ou : sauf si l'homme est en janâba et la femme réglée ou en janâba.", statut: "non_precise" },
      { auteur: "Aḥmad ibn Ḥanbal (l'un de ses deux avis, rapporté par aṭ-Ṭirāz, ʿIyāḍ et an-Nawawī)", avis: "L'homme ne se purifie pas avec le reste de l'eau d'une femme qui s'en est servie seule.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'eau restante de la purification d'une femme réglée et d'une personne en janâba est une eau absolue, qu'ils se soient purifiés ensemble ou un seul, en puisant dans l'eau ou en y entrant.",
    tarjih_hattab: "Al-Ḥaṭṭāb dit n'avoir pas trouvé dans l'école l'avis qui interdit de se purifier avec le reste de l'eau d'une femme réglée. Il conteste aussi le consensus rapporté par an-Nawawī sur le fait que la femme peut utiliser le reste de l'homme, puisqu'Ibn Rushd rapporte une divergence.",
    tanbihat: [
      "Farʿ : l'homme et la femme peuvent se purifier ensemble au même récipient ; ʿIyāḍ dit qu'il n'y a pas de divergence.",
      "Farʿ (Mudawwana) : il n'y a pas de mal aux éclaboussures du ghousl de la personne en janâba qui retombent dans son récipient, car on ne peut pas s'en garder. Selon ʿIyāḍ, que suit al-Ḥaṭṭāb, cela vaut si le sol est pur ou en pente ; si l'on y urine et que l'eau y stagne, les éclaboussures sont impures. Al-Burzulī voyait la tolérance comme générale.",
      "Farʿ (Ibn Abī Zayd, rapporté par al-Burzulī) : celui qui fait ses ablutions sur un dallage impur et reçoit des éclaboussures lave ce qui l'a atteint si l'impureté est humide, sauf si l'eau a coulé assez longtemps pour qu'on pense qu'elle a disparu."
    ],
    divergences: [],
    exemple: "Votre épouse vient de faire son ghousl après ses règles, et il reste de l'eau dans le récipient. Vous pouvez faire vos ablutions avec cette eau.",
    erreurs_frequentes: [
      "Croire que l'eau restante de la purification d'une femme réglée est impure ou ne purifie pas.",
      "Croire qu'un homme ne peut pas se purifier avec le reste de l'eau d'une femme : c'est permis selon Mālik et tous ses compagnons."
    ],
    termes: [
      { ar: "الطُّهَارَة", translit: "at-touhâra", def: "Avec ḍamma : l'eau qui reste après la purification." },
      { ar: "فَضْلَة", translit: "fadla", def: "Reste, ce qui demeure après usage." }
    ],
    quiz: [
      { q: "L'eau restante après la purification d'une personne en janâba purifie-t-elle ?",
        choix: ["Non", "Seulement pour laver une impureté", "Seulement si on la fait bouillir", "Oui, elle est pure et purifiante"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : elle entre dans la définition de l'eau absolue (al-Umm et plusieurs auteurs)." },
      { q: "Quel est l'avis de Mālik et de tous ses compagnons, selon Ibn Rushd ?",
        choix: ["Chacun peut utiliser le reste de l'autre", "Seulement s'ils commencent ensemble", "Seule la femme peut utiliser le reste de l'homme", "L'homme ne peut pas utiliser le reste de la femme"],
        bonne: 0,
        explication: "Premier des cinq avis : permis dans les deux sens, sans divergence entre eux." },
      { q: "Mise en situation : en faisant votre ghousl, des gouttes rebondissent du sol dans votre récipient. Le sol est propre. Que dit la Mudawwana ?",
        choix: ["Il faut vider le récipient", "Il faut recommencer le ghousl", "Il n'y a pas de mal, on ne peut pas s'en garder", "L'eau est impure"],
        bonne: 2,
        explication: "Mudawwana : « وَلَا بَأْسَ بِمَا انْتَضَحَ مِنْ غُسْلِ الْجُنُبِ فِي إنَائِهِ » ; ʿIyāḍ : si le sol est pur ou en pente." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "52-53" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 35 (Shamela 21604, page 34).",
      "« Le commentateur » (الشَّارِحُ) n'est pas nommé dans le passage ; il est cité par ses commentaires « moyen et grand » (الْوَسَطِ وَالْكَبِيرِ). Non bloquant."
    ],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 2 — tah-01-01-06 à -13 — t. 1, p. 53–58 (Shamela 569, p. 52–57) */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 35–37 (Shamela 21604, p. 34–36) */
  /* ================================================================== */

  {
    id: "tah-01-01-06",
    kitab: "tah", bab: "01", fasl: "01", ordre: 6,
    titre: "Beaucoup d'eau touchée par une impureté qui ne la change pas",
    titre_ar: "المَاءُ الكَثِيرُ يُخَالِطُهُ نَجَسٌ لَمْ يُغَيِّرْهُ",
    objectif: "Savoir si une grande quantité d'eau reste purifiante quand une impureté y tombe sans la changer.",
    matn: "أَوْ كَثِيرًا خُلِطَ بِنَجَسٍ لَمْ يُغَيِّرْهُ",
    regle_pratique: "Une eau abondante dans laquelle tombe une impureté qui ne change ni sa couleur, ni son goût, ni son odeur reste purifiante : on peut faire ses ablutions avec ; à plus forte raison si ce qui s'y mêle est pur.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl dit que l'eau abondante mêlée à une impureté qui ne la change pas garde son pouvoir purifiant. La limite entre peu et beaucoup d'eau sera donnée plus loin, avec la définition du « peu ».\n\nSi tout le monde s'accorde à dire que l'eau est abondante, il n'y a aucune divergence : elle reste purifiante, que ce qui s'y mêle soit impur ou pur (Khalīl dans at-Tawḍīḥ).\n\nSi l'on discute du caractère abondant de l'eau, Ibn ʿArafa rapporte trois façons de transmettre l'école (طُرُق, tourouq) : elle reste purifiante par accord ; elle reste purifiante, la transmission contraire d'Ibn Nāfiʿ étant isolée ; elle est déconseillée.\n\nAl-Ḥaṭṭāb ajoute que, par raisonnement a fortiori, un mélange pur qui ne change pas l'eau n'a aucun effet.",
    aqwal: [
      { auteur: "Ibn ʿArafa, d'après la plupart (première voie)", avis: "L'eau reste purifiante, même mêlée d'impureté, par accord.", statut: "non_precise" },
      { auteur: "Ibn Rushd (deuxième voie, rapportée par Ibn ʿArafa)", avis: "L'eau reste purifiante ; la transmission d'Ibn Nāfiʿ, selon laquelle elle ne l'est plus, est isolée.", statut: "non_precise" },
      { auteur: "Mālik, transmission d'Ibn Nāfiʿ", avis: "L'eau abondante où tombe une impureté n'est plus purifiante.", statut: "shadh" },
      { auteur: "Ibn Zarqūn, et al-Tūnisī par allusion (troisième voie)", avis: "Cette eau est déconseillée.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'eau abondante (plus que le récipient du ghousl) mêlée à une impureté qui ne change aucune de ses qualités reste purifiante ; sinon, elle perd ce pouvoir.",
    tarjih_hattab: "Al-Ḥaṭṭāb estime que les trois voies d'Ibn ʿArafa ne concernent pas l'eau dont tout le monde reconnaît l'abondance. Il ajoute qu'on ne doit pas faire de la transmission d'Ibn Nāfiʿ une rupture de l'accord, puisqu'Ibn Rushd la dit « déviante, hors des principes ».",
    tanbihat: [
      "Ibn Rushd, dans son commentaire du samāʿ de Mūsā : la transmission d'Ibn Nāfiʿ « applique à l'eau abondante la règle de l'impur par la seule présence de l'impureté »."
    ],
    divergences: [
      "Divergence — peu d'eau touchée par une impureté qui ne la change pas. Al-Dardīr : elle reste purifiante « selon l'avis le plus fort » (« وَكَذَا يَسِيرٌ عَلَى الرَّاجِحِ »). Al-Dasūqī : c'est « contre ce que dit Ibn al-Qāsim », suivi par la Risāla : peu d'eau devient impure par un peu d'impureté, même sans changement (« خِلَافًا لِمَا قَالَهُ ابْنُ الْقَاسِمِ مِنْ أَنَّ قَلِيلَ الْمَاءِ يُنَجِّسُهُ قَلِيلُ النَّجَاسَةِ، وَلَوْ لَمْ تُغَيِّرْهُ وَمَشَى عَلَيْهِ فِي الرِّسَالَةِ »). Khalīl traitera ce cas plus loin (fiche 22)."
    ],
    exemple: "Un oiseau laisse tomber une fiente dans un grand bassin ; l'eau ne change ni de couleur, ni de goût, ni d'odeur. Vous pouvez faire vos ablutions avec cette eau.",
    erreurs_frequentes: [
      "Croire qu'une goutte d'impureté rend impure une grande quantité d'eau qu'elle ne change pas.",
      "Oublier que la condition est l'absence de changement de l'une des trois qualités : couleur, goût, odeur."
    ],
    termes: [
      { ar: "المَاءُ الكَثِيرُ", translit: "al-mâ'ou l-kathîr", def: "Eau abondante ; selon al-Dardīr, plus que le récipient du ghousl." },
      { ar: "طُرُق", translit: "tourouq", def: "Façons divergentes de transmettre l'école (voir Module 0)." }
    ],
    quiz: [
      { q: "Une impureté tombe dans beaucoup d'eau sans la changer. L'eau reste-t-elle purifiante ?",
        choix: ["Seulement pour laver le sol", "Non", "Seulement après trois jours", "Oui"],
        bonne: 3,
        explication: "Khalīl : « أَوْ كَثِيرًا خُلِطَ بِنَجَسٍ لَمْ يُغَيِّرْهُ »." },
      { q: "Quel critère décide ici ?",
        choix: ["L'heure de la journée", "Le changement de couleur, de goût ou d'odeur de l'eau", "Le récipient", "La couleur de l'impureté"],
        bonne: 1,
        explication: "Al-Dardīr : si l'impureté change l'une des qualités de l'eau, celle-ci perd son pouvoir purifiant." },
      { q: "Que dit Ibn Rushd de la transmission d'Ibn Nāfiʿ ?",
        choix: ["Elle est déviante, hors des principes", "C'est l'avis de Mālik retenu", "Elle concerne le sel", "C'est l'avis mashhūr"],
        bonne: 0,
        explication: "« هَذِهِ رِوَايَةٌ مَائِلَةٌ خَارِجَةٌ عَنْ الْأُصُولِ »." },
      { q: "Mise en situation : un peu de terre propre tombe dans un grand réservoir sans le changer. L'eau convient-elle aux ablutions ?",
        choix: ["Seulement si on la filtre", "Seulement pour boire", "Oui, a fortiori", "Non"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : si l'impureté qui ne change pas l'eau n'a pas d'effet, un mélange pur n'en a pas a fortiori." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "53" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 35 (Shamela 21604, page 34)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-07",
    kitab: "tah", bab: "01", fasl: "01", ordre: 7,
    titre: "Doute sur ce qui a changé l'eau",
    titre_ar: "الشَّكُّ فِي مُغَيِّرِ المَاءِ",
    objectif: "Savoir quoi faire d'une eau changée dont on ignore la cause.",
    matn: "أَوْ شُكَّ فِي مُغَيِّرِهِ هَلْ يَضُرُّ",
    regle_pratique: "Si une eau a changé et que l'on doute, à parts égales, que la cause lui fasse perdre son pouvoir purifiant, elle reste purifiante, car l'eau est présumée pure ; si une cause nuisible paraît plus probable, on s'en tient à cette probabilité.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Une eau a changé (couleur, goût ou odeur) et l'on ignore si la cause est de celles qui lui font perdre son pouvoir purifiant. Le principe est qu'elle garde ce pouvoir.\n\nLe cas figure dans la Mudawwana. Ibn Yūnus le résume ainsi : Mālik ne voit pas de mal à l'eau d'un puits qui sent mauvais à cause de la vase ou d'autre chose. Ibn al-Qāsim ajoute qu'il en va de même d'un puits ou d'une mare trouvés en plein désert et qui sentent mauvais sans qu'on sache pourquoi.\n\nAṭ-Ṭirāz y voit l'application d'une règle : ce dont la règle est douteuse est ramené à son origine, et l'origine de l'eau est la pureté.\n\nLe mot « doute » (شَكّ, chakk) signifie que les deux possibilités se valent ; la règle vaut a fortiori si la pureté est plus probable. Si l'impureté ou la perte du pouvoir purifiant est plus probable, on s'en tient à elle. Al-Bājī : si l'on ne sait pas d'où vient le changement, on juge selon ce qui est apparent ; si rien n'est apparent, on présume la pureté.",
    aqwal: [
      { auteur: "Mālik (Mudawwana, résumé par Ibn Yūnus)", avis: "Pas de mal à l'eau d'un puits qui sent mauvais à cause de la vase ou d'autre chose.", statut: "non_precise" },
      { auteur: "Ibn al-Qāsim", avis: "De même pour le puits ou la mare du désert qui sentent mauvais sans cause connue, et pour le bassin dont l'odeur change, où boivent les bêtes, tant qu'on n'y voit rien qui explique la corruption de l'eau.", statut: "non_precise" },
      { auteur: "Mālik (rapporté par al-Māzirī)", avis: "Pour les puits proches des latrines en ville qui sentent mauvais : on les laisse deux jours ; si l'eau redevient bonne, bien ; sinon, on n'y fait pas ses ablutions.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr et al-Dasūqī : en cas de doute égal sur ce qui a changé l'eau, elle reste purifiante, car l'eau ne quitte pas son origine tant qu'on n'est pas certain, ou qu'on ne pense pas, que ce qui l'a changée lui nuit ; si l'on pense que la cause est nuisible, on s'en tient à cette opinion.",
    tarjih_hattab: "Pour l'eau abondante (comme le canal d'Alexandrie) changée alors que les latrines s'y déversent, al-Ḥaṭṭāb juge apparent l'avis d'Ibn Rushd : on la présume impure. Al-Bājī comprenait que Mālik s'en abstenait par précaution, sans la juger impure, parce que c'est une grande masse d'eau.",
    tanbihat: [
      "Ibn Rushd distingue le puits de ville, présumé souillé par les canaux des latrines qui passent entre les maisons, et le puits du désert, présumé pur et changé par la stagnation.",
      "Ibn Rushd, sur le canal d'Alexandrie : s'il est su que le changement vient des latrines, l'eau est impure par consensus ; si on ne le sait pas, la précaution est de la présumer impure.",
      "Selon al-Bisāṭī, les fatwas des savants d'Égypte ont divergé sur deux bassins présentant cette situation (Birkat al-Fīl et Birkat an-Nāṣiriyya)."
    ],
    divergences: [
      "Divergence — eau abondante qu'on pense changée par des latrines. Al-Bājī : elle est purifiante, d'après le sens apparent des transmissions ; Ibn Rushd : elle n'est ni purifiante ni pure (al-Dasūqī : « فَهُوَ طَهُورٌ عَلَى مَا قَالَ الْبَاجِيَّ إنَّهُ ظَاهِرُ الرِّوَايَاتِ وَقَالَ ابْنُ رُشْدٍ إنَّهُ مَسْلُوبُ الطَّهُورِيَّةِ وَالظَّاهِرِيَّةِ »). Al-Dasūqī rapporte les deux sans trancher ; al-Ḥaṭṭāb juge apparent l'avis d'Ibn Rushd (voir la préférence d'al-Ḥaṭṭāb).",
      "Complément — al-Dasūqī compte cinq situations (« وَالْحَاصِلُ أَنَّ صُوَرَ الْمَسْأَلَةِ خَمْسٌ ») et ajoute un cas que ce passage d'al-Ḥaṭṭāb ne traite pas : si l'on est sûr que l'eau a changé à cause d'une chose qui s'en sépare, mais qu'on doute que cette chose soit pure ou impure, l'eau est pure mais non purifiante. Sur le reste, il suit al-Ḥaṭṭāb : « pas de différence entre peu et beaucoup d'eau, selon ce qui est juste, comme chez ح » (« وَلَا فَرْقَ بَيْنَ قَلِيلِ الْمَاءِ وَكَثِيرِهِ عَلَى الصَّوَابِ كَمَا فِي ح وَغَيْرِهِ »)."
    ],
    exemple: "En randonnée, vous trouvez une mare isolée dont l'eau sent un peu le renfermé, sans rien de suspect autour. Vous pouvez faire vos ablutions avec : l'eau est présumée pure. Si la même odeur vient d'un puits voisin de latrines, présumez au contraire qu'elle est souillée.",
    erreurs_frequentes: [
      "Rejeter toute eau qui sent un peu : le doute ne fait pas perdre à l'eau son pouvoir purifiant.",
      "Appliquer la présomption de pureté quand une cause d'impureté est probable (latrines proches, sol meuble)."
    ],
    termes: [
      { ar: "شَكّ", translit: "chakk", def: "Doute : les deux possibilités se valent." },
      { ar: "ظَنّ", translit: "zann", def: "Opinion probable : une possibilité l'emporte." },
      { ar: "الحَمْأَة", translit: "al-ham'a", def: "Vase noire et malodorante." }
    ],
    quiz: [
      { q: "Une eau a changé et l'on doute, à parts égales, de la cause. Que retenir ?",
        choix: ["Elle reste purifiante", "Elle est impure", "Elle est déconseillée", "Il faut la faire bouillir"],
        bonne: 0,
        explication: "Le principe est que l'eau garde son pouvoir purifiant (aṭ-Ṭirāz : on ramène au principe)." },
      { q: "Et si une cause nuisible paraît plus probable ?",
        choix: ["On attend la pluie", "On l'ignore", "On s'en tient à cette probabilité", "On tire au sort"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « وَأَمَّا إذَا تَرَجَّحَ جَانِبُ النَّجَاسَةِ … فَيُعْمَلُ عَلَيْهِ »." },
      { q: "Mise en situation : le puits de votre maison, proche des latrines, sent mauvais. Que rapporte al-Māzirī de Mālik ?",
        choix: ["L'utiliser tout de suite", "Le laisser deux jours ; si l'eau redevient bonne, l'utiliser, sinon non", "Le combler", "Y verser du sel"],
        bonne: 1,
        explication: "Mālik, rapporté par al-Māzirī : « تُتْرَكُ الْيَوْمَيْنِ فَإِنْ طَابَتْ وَإِلَّا لَمْ يَتَوَضَّأْ مِنْهَا »." },
      { q: "Pourquoi un puits du désert qui sent mauvais est-il présumé pur, selon Ibn Rushd ?",
        choix: ["Parce qu'on présume qu'il a changé par la stagnation", "Parce que le sable purifie", "Parce qu'il est loin", "Il n'est pas présumé pur"],
        bonne: 0,
        explication: "Ibn Rushd : il est présumé pur et changé par sa stagnation, faute de cause d'impureté connue." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "53-54" },
    alertes: [
      "Corrigé (campagne de correction) : l'édition porte, dans la citation d'al-Bājī sur le canal, « امْتَنَعَ مِنْهُ كَرَاهَةً وَاسْتِظْهَارًا إلَّا لِلْحُكْمِ بِنَجَاسَتِهِ » ; al-Muntaqā lui-même (Shamela 6684, p. 58) a « منع منه كراهية واستظهارا لا الحكم بنجاسته ». Il faut lire « لَا », sens que suit la fiche.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 35 (Shamela 21604, page 34)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-08",
    kitab: "tah", bab: "01", fasl: "01", ordre: 8,
    titre: "Eau changée par ce qui la jouxte, ou par une huile posée à sa surface",
    titre_ar: "التَّغَيُّرُ بِالمُجَاوِرِ وَبِالدُّهْنِ اللَّاصِقِ",
    objectif: "Distinguer le changement dû à une chose voisine de l'eau et celui dû à une chose qui s'y mêle.",
    matn: "أَوْ تَغَيَّرَ بِمُجَاوِرِهِ وَإِنْ بِدُهْنٍ لَاصِقٍ",
    regle_pratique: "Une eau dont l'odeur change à cause d'une chose voisine qui ne la touche pas (charogne au bord, branchage bouchant le récipient) reste purifiante ; pour une huile posée à sa surface sans s'y mêler, Khalīl et al-Ḥaṭṭāb disent qu'elle reste purifiante, mais l'avis retenu pour la pratique (al-Dardīr, al-Dasūqī) est qu'elle perd ce pouvoir.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl distingue deux sortes de choses voisines (مُجَاوِر, moujâwir).\n\nLa chose séparée de l'eau : une charogne ou des excréments au bord de l'eau, dont le vent porte l'odeur. Il n'y a pas de divergence : l'eau reste purifiante. Certains y joignent le cas du récipient bouché avec des branchages qui changent l'odeur de l'eau sans s'y mêler.\n\nLa chose qui touche l'eau sans s'y mêler : Ibn al-Ḥājib donne l'exemple de l'huile, et Khalīl le suit en précisant « qui touche » (لَاصِقٍ), pour l'opposer à ce qui se mêle à l'eau et dont il parlera plus loin.\n\nDans at-Tawḍīḥ, Khalīl rapporte une objection : l'avis connu de l'école est que l'huile fait perdre à l'eau son pouvoir purifiant (Ibn Bashīr). Il répond qu'il s'agit de l'huile qui reste à la surface, comme l'ont indiqué Ibn ʿAṭāʾ Allāh et Ibn Rāshid.",
    aqwal: [
      { auteur: "Ibn al-Ḥājib (suivi par Khalīl ; Ibn ʿAṭāʾ Allāh dans le même sens, d'après Ibn al-ʿArabī)", avis: "L'eau changée par une huile qui ne s'y mêle pas reste purifiante.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa", avis: "Selon le sens apparent des transmissions et des avis, tout changement compte, même sans mélange ; l'eau puisée avec un seau enduit d'huile n'est pas purifiante (rapporté par ʿAbd al-Ḥaqq, d'Ibn ʿAbd ar-Raḥmān, du « Shaykh » et d'al-Qābisī).", statut: "non_precise" },
      { auteur: "Ibn Bashīr", avis: "L'eau changée par le mélange avec des huiles ne purifie pas.", statut: "non_precise" }
    ],
    muatamad: "Divergent d'al-Ḥaṭṭāb. Al-Dardīr qualifie de faible l'avis de Khalīl : « le plus fort est que ce qui touche la surface de l'eau nuit ». Al-Dasūqī : « le muʿtamad est qu'elle nuit », comme le changement de couleur et de goût, selon Ibn ʿArafa (sens apparent des transmissions). Ce qui est voisin sans toucher l'eau ne nuit en rien, quelle que soit la qualité changée ; le mélange nuit dans tous les cas, par accord.",
    tarjih_hattab: "Al-Ḥaṭṭāb juge que l'huile qui touche la surface sans se mêler à l'eau ne nuit pas, comme le dit Khalīl, et voit une allusion à cela chez Ibn Bashīr, qui parle de « mélange ». Il reprend la distinction de l'auteur d'al-Jamʿ : l'huile d'un seau enduit se mêle à toute l'eau, alors que l'huile tombée dans l'eau flotte et laisse intacte l'eau du dessous.",
    tanbihat: [
      "Ibn Farḥūn rapporte d'Ibn Qaddāḥ qu'on retire l'huile de la surface avant d'utiliser l'eau ; cela vaut pour beaucoup d'eau, pas pour une goutte dans le récipient des ablutions.",
      "Selon Ibn al-Imām, que suit al-Ḥaṭṭāb, une chose voisine ne peut pas changer la couleur de l'eau, et probablement pas son goût ; si un tel changement est avéré après un long séjour de l'huile, c'est qu'elle s'est mêlée à l'eau.",
      "Ibn Rāshid comprend l'« huile » d'Ibn al-Ḥājib comme le gras qui remonte des récipients servant aussi à manger, dont l'eau ne se sépare pas ; al-Ḥaṭṭāb : cela dépend de la quantité ; peu de gras sans goût dans l'eau ne nuit pas."
    ],
    divergences: [
      "Divergence — huile qui touche la surface de l'eau. Khalīl (avec le groupe qu'il suit) : elle ne nuit pas ; avis approuvé par al-Ḥaṭṭāb. Ibn ʿArafa : elle nuit ; avis approuvé par Ibn Marzūq, que suit al-Dardīr, pour qui l'avis de Khalīl est faible (al-Dasūqī : « قَدْ ارْتَضَاهُ ح وَمَا قَالَهُ ابْنُ عَرَفَةَ قَدْ ارْتَضَاهُ ابْنُ مَرْزُوقٍ وَشَارِحُنَا قَدْ مَشَى عَلَى طَرِيقَةِ ابْنِ مَرْزُوقٍ حَيْثُ جَعَلَ مَا مَشَى عَلَيْهِ الْمُصَنِّفُ ضَعِيفًا »)."
    ],
    exemple: "Un bidon d'eau reste à côté d'un tas de fumier et en prend l'odeur : cette eau reste purifiante. Si quelques gouttes d'huile flottent à la surface d'un seau, Khalīl et al-Ḥaṭṭāb permettent les ablutions ; l'avis retenu pour la pratique dit au contraire que l'eau ne purifie plus.",
    erreurs_frequentes: [
      "Croire qu'une odeur venue d'une chose voisine fait perdre à l'eau son pouvoir purifiant : il n'y a pas de divergence, elle ne le fait pas.",
      "Ignorer que, pour l'huile posée à la surface, l'avis retenu pour la pratique diffère de celui de Khalīl.",
      "Confondre une chose voisine et une chose qui se mêle à l'eau : le mélange qui change l'eau nuit dans tous les cas."
    ],
    termes: [
      { ar: "مُجَاوِر", translit: "moujâwir", def: "Chose voisine de l'eau, qui ne s'y mêle pas." },
      { ar: "لَاصِق", translit: "lâsiq", def: "Qui touche (ici : la surface de l'eau) sans s'y mêler." },
      { ar: "مُمَازِج", translit: "moumâzij", def: "Qui se mêle intimement à l'eau." },
      { ar: "دُهْن", translit: "douhn", def: "Huile, graisse." }
    ],
    quiz: [
      { q: "L'odeur d'une charogne au bord de l'eau, portée par le vent, change l'eau. Est-elle encore purifiante ?",
        choix: ["Seulement pour laver le sol", "Non", "Oui, sans divergence", "Seulement si l'on est en voyage"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : changement par une chose voisine séparée de l'eau, « وَلَا خِلَافَ فِي هَذَا »." },
      { q: "Pour une huile posée à la surface sans se mêler, quel est l'avis retenu pour la pratique selon al-Dasūqī ?",
        choix: ["Elle ne nuit pas", "Elle nuit : l'eau perd son pouvoir purifiant", "Elle rend l'eau déconseillée seulement", "Elle rend l'eau impure"],
        bonne: 1,
        explication: "Al-Dasūqī : « وَالْمُعْتَمَدُ أَنَّهُ يَضُرُّ » ; al-Dardīr qualifie l'avis de Khalīl de faible." },
      { q: "Pourquoi l'eau puisée avec un seau enduit d'huile est-elle différente, selon l'auteur d'al-Jamʿ ?",
        choix: ["L'huile du seau se mêle à toute l'eau", "L'huile est plus lourde", "Le seau est impur", "Ce n'est pas différent"],
        bonne: 0,
        explication: "L'huile suinte du fond et des côtés du seau et se mêle à chaque partie de l'eau, alors que l'huile tombée dans l'eau flotte." },
      { q: "Mise en situation : une goutte d'huile tombe dans votre récipient d'ablutions. Que dit Ibn Farḥūn de la consigne de retirer l'huile ?",
        choix: ["Il faut jeter l'eau", "Il faut ajouter du sel", "Elle vaut pour beaucoup d'eau ; pour une goutte, il n'est apparemment pas besoin de la retirer", "Elle vaut aussi pour une goutte"],
        bonne: 2,
        explication: "Ibn Farḥūn : « وَأَمَّا الْقَلِيلُ كَنُقْطَةٍ فِي آنِيَةِ الْوُضُوءِ فَالظَّاهِرُ أَنَّهُ لَا يَحْتَاجُ إلَى لَقْطِهِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "54-55" },
    alertes: [
      "Le muʿtamad confirmé par al-Dardīr / al-Dasūqī s'écarte de la règle de Khalīl et d'al-Ḥaṭṭāb : la règle pratique présente les deux. Non bloquant (divergence signalée, non incertitude du texte).",
      "« Le Shaykh » (الشَّيْخ) cité par ʿAbd al-Ḥaqq n'est pas nommé dans le passage. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 35-36 (Shamela 21604, pages 34-35)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-09",
    kitab: "tah", bab: "01", fasl: "01", ordre: 9,
    titre: "L'odeur du goudron de l'outre",
    titre_ar: "رَائِحَةُ قَطِرَانِ الوِعَاءِ",
    objectif: "Savoir si l'eau changée par le goudron du récipient reste purifiante.",
    matn: "أَوْ بِرَائِحَةِ قَطِرَانِ وِعَاءِ مُسَافِرٍ",
    regle_pratique: "Si l'eau prend seulement l'odeur du goudron du récipient (outre de voyageur ou autre), elle reste purifiante ; si le goudron change sa couleur ou son goût, elle perd ce pouvoir.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le قَطِرَان (qatirân) est le goudron, tiré de la sève du genévrier ou du cèdre, dont on enduisait les outres.\n\nSi l'odeur vient seulement de ce qui reste dans le récipient, sans matière de goudron, c'est un changement dû à une chose voisine : il ne nuit pas, sans difficulté.\n\nSi l'odeur vient d'un goudron encore présent dans le récipient, al-Ḥaṭṭāb pense que l'auteur d'aṭ-Ṭirāz le traite comme une chose voisine qui touche l'eau, sans nuisance. Cela s'accorde avec ce que Khalīl dit de l'huile posée à la surface.\n\nL'auteur d'aṭ-Ṭirāz va plus loin : même jeté dans l'eau, le goudron ne nuit pas tant que la couleur de l'eau ne change pas, c'est-à-dire tant qu'il ne s'y mêle pas. Al-Ḥaṭṭāb précise : ou son goût.\n\nLe mot « voyageur » n'est qu'un cas fréquent, car c'est surtout lui qui en a besoin. Les gens du désert sont dans le même cas.",
    aqwal: [
      { auteur: "L'auteur d'aṭ-Ṭirāz", avis: "L'odeur du goudron restée dans le récipient ne nuit pas ; jeté dans l'eau, il ne nuit pas tant que la couleur de l'eau ne change pas ; il le juge plus fort, comme les shāfiʿites. Ibn al-Mājishūn ne voyait pas de mal au changement d'odeur dû même à une impureté.", statut: "non_precise" },
      { auteur: "Un auteur tardif (rapporté par Ibn Rāshid al-Qafṣī dans at-Tawḍīḥ)", avis: "Les ablutions avec l'eau changée par le goudron des outres du pèlerinage sont permises par nécessité.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'odeur du goudron ne nuit pas, que le récipient soit celui d'un voyageur ou non, que le goudron ait disparu en laissant son odeur, ou qu'il soit resté au fond ou sur les parois sans se mêler à l'eau (d'après Sanad) ; le changement de goût ou de couleur nuit. Al-Dasūqī : il nuit même en cas de nécessité, « comme l'a établi ح (al-Ḥaṭṭāb) ».",
    tarjih_hattab: "Conclusion d'al-Ḥaṭṭāb : si seule l'odeur change, c'est un changement par une chose voisine, permis sans condition de nécessité ni de voyage ; si la couleur ou le goût changent, l'eau perd son pouvoir purifiant, en ville comme en voyage, sauf selon l'avis isolé rapporté par Ibn Rāshid, qui ne vaudrait alors qu'en voyage, par nécessité, et faute d'autre eau.",
    tanbihat: [
      "Al-Ḥaṭṭāb relève que Khalīl, dans at-Tawḍīḥ, a omis une partie du texte d'aṭ-Ṭirāz, ce qui donne l'impression qu'il permet les ablutions même quand la couleur ou le goût ont changé."
    ],
    divergences: [
      "Divergence — goudron qui sert à tanner le récipient. Al-Dardīr, d'après Zarrūq : il ne nuit pas, même s'il change toutes les qualités de l'eau (« وَإِلَّا فَلَا يَضُرُّ وَلَوْ تَغَيَّرَ جَمِيعُ الْأَوْصَافِ كَغَيْرِ الْقَطِرَانِ إذَا كَانَ دِبَاغًا كَمَا لِزَرُّوقٍ »). Al-Dasūqī : même si le changement est net, comme chez « عب » (sigle non défini dans sa liste), « شب » (Ibrāhīm ash-Shabrakhītī) et la glose de son maître al-ʿAdawī, contre ce que « ح » (al-Ḥaṭṭāb) jugeait apparent : l'assimiler à la corde du puits, qui ne nuit que si le changement est net (« وَلَوْ كَانَ التَّغَيُّرُ بَيِّنًا كَمَا فِي عب وشب وَحَاشِيَةِ شَيْخِنَا خِلَافًا لِاسْتِظْهَارِ ح أَنَّهُ كَحَبْلِ السَّانِيَةِ »). Le passage correspondant de Mawāhib n'a pas été localisé dans cet audit : l'avis d'al-Ḥaṭṭāb est ici rapporté d'après al-Dasūqī."
    ],
    exemple: "Vous remplissez une vieille gourde enduite de goudron ; l'eau en prend l'odeur, mais garde sa couleur et son goût. Vous pouvez faire vos ablutions avec. Si l'eau devient brunâtre ou a goût de goudron, elle ne convient plus.",
    erreurs_frequentes: [
      "Croire que la règle ne vaut que pour le voyageur : ce n'est qu'un cas fréquent.",
      "Étendre la tolérance au changement de couleur ou de goût : seule l'odeur est tolérée."
    ],
    termes: [
      { ar: "قَطِرَان", translit: "qatirân", def: "Goudron végétal (genévrier, cèdre) dont on enduisait les outres." },
      { ar: "وِعَاء", translit: "wiʿâ'", def: "Récipient, outre." }
    ],
    quiz: [
      { q: "L'eau prend seulement l'odeur du goudron de l'outre. Est-elle purifiante ?",
        choix: ["Seulement si elle est froide", "Oui", "Seulement pour le voyageur", "Non"],
        bonne: 1,
        explication: "Khalīl : « أَوْ بِرَائِحَةِ قَطِرَانِ وِعَاءِ مُسَافِرٍ » ; al-Dardīr : voyageur ou non." },
      { q: "Et si le goudron change le goût de l'eau ?",
        choix: ["Elle devient impure", "Elle est seulement déconseillée", "Elle perd son pouvoir purifiant", "Elle reste purifiante"],
        bonne: 2,
        explication: "Conclusion d'al-Ḥaṭṭāb, confirmée par al-Dardīr : le changement de couleur ou de goût nuit." },
      { q: "Mise en situation : vous habitez en ville et votre jarre est enduite de goudron ; l'eau en a seulement l'odeur. Pouvez-vous faire vos ablutions ?",
        choix: ["Non, la règle est réservée au voyageur", "Oui : le mot « voyageur » n'est qu'un cas fréquent", "Seulement en cas de nécessité", "Seulement le vendredi"],
        bonne: 1,
        explication: "Al-Ḥaṭṭāb : la mention du voyageur « خَرَجَ مَخْرَجَ الْغَالِبِ ». Pour l'odeur seule, pas de condition de nécessité ni de voyage." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "55-56" },
    alertes: [
      "L'auteur d'aṭ-Ṭirāz n'est pas nommé par al-Ḥaṭṭāb ; al-Dardīr attribue la même distinction à « Sanad ». La fiche garde la désignation de chaque texte. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 35-36 (Shamela 21604, pages 34-35)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-10",
    kitab: "tah", bab: "01", fasl: "01", ordre: 10,
    titre: "Eau changée par ce qui naît d'elle (mousse, algues)",
    titre_ar: "التَّغَيُّرُ بِمَا يَتَوَلَّدُ مِنَ المَاءِ",
    objectif: "Savoir si l'eau changée par les mousses, algues ou petits animaux nés d'elle reste purifiante.",
    matn: "أَوْ بِمُتَوَلِّدٍ مِنْهُ",
    regle_pratique: "L'eau changée par ce qui naît d'elle (mousse verte, algues des parois, petits animaux aquatiques) ou par son long séjour reste purifiante, même si sa couleur, son goût ou son odeur changent, car on ne peut pas s'en garder ; mais si l'on fait cuire la mousse dans l'eau, celle-ci perd ce pouvoir.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb donne des exemples de ce qui « naît de l'eau » (مُتَوَلِّد, moutawallid) :\n- le الطُّحْلُب (at-touhloub), la mousse verte qui couvre l'eau ;\n- le khazz, ce qui pousse sur les parois en contact avec l'eau ;\n- le « ḍarīʿ » cité par al-Lakhmī, dont al-Ḥaṭṭāb dit ignorer le sens ;\n- le zughlān, petit animal né dans l'eau selon Zarrūq.\n\nLe changement qu'ils causent ne fait pas perdre à l'eau son pouvoir purifiant, car on ne peut pas s'en garder. C'est l'avis connu de l'école.\n\nIl en va de même de l'eau changée par son long séjour, quelle que soit la qualité changée, ou toutes. Zarrūq cite le jaunissement, l'épaississement et le gras qui se forme d'elle-même à sa surface.",
    aqwal: [
      { auteur: "Avis connu de l'école (« الْمَعْرُوفُ فِي الْمَذْهَبِ »)", avis: "Le changement par ce qui naît de l'eau ne lui fait pas perdre son pouvoir purifiant.", statut: "non_precise" },
      { auteur: "Mālik (al-Majmūʿa, rapporté par l'auteur d'aṭ-Ṭirāz)", avis: "L'eau changée par la mousse est déconseillée si l'on en a une autre.", statut: "non_precise" },
      { auteur: "Ibn Bashīr", avis: "Si l'on jette de la mousse dans une eau qu'elle change, l'eau reste purifiante, car l'eau ne se sépare pas de ce genre de chose.", statut: "mashhur" },
      { auteur: "Aṭ-Ṭurṭūshī (rapporté par Ibn Farḥūn, accepté par Ibn Ghāzī)", avis: "L'eau où l'on a fait cuire de la mousse perd son pouvoir purifiant, car on peut éviter la cuisson.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'eau changée par ce qui naît d'elle (mousse, poisson vivant) reste purifiante, même si l'on retire la mousse puis la rejette dans cette eau ou dans une autre, tant qu'on ne la fait pas cuire dedans ; al-Dasūqī précise que la condition de la cuisson vient d'aṭ-Ṭurṭūshī et lui a été accordée. Le poisson mort, lui, nuit par accord.",
    tarjih_hattab: "Al-Ḥaṭṭāb ne voit pas de contradiction entre aṭ-Ṭurṭūshī et Ibn Bashīr : le changement par la cuisson est plus fort que le simple mélange. Pour le changement dû aux poissons ou à leurs déjections, il juge qu'il ne fait jamais perdre à l'eau son pouvoir purifiant, car ils naissent de l'eau ou en sont inséparables ; al-Bisāṭī distinguait selon le mode de reproduction.",
    tanbihat: [
      "Sur la mousse jetée volontairement dans l'eau, l'auteur d'aṭ-Ṭirāz rapporte deux avis, d'al-Lakhmī et de ʿAbd al-Ḥaqq, sans trancher ; Ibn Bashīr dit mashhūr qu'elle ne nuit pas.",
      "Le cas du poisson mort dans l'eau sera traité plus loin."
    ],
    divergences: [
      "Divergence — déjections de poisson. Al-Ḥaṭṭāb, après al-Bisāṭī qui dit n'avoir trouvé aucun texte : « ce qui est apparent, c'est qu'elles ne lui ôtent pas son pouvoir purifiant » (« وَالظَّاهِرُ أَنَّهُ لَا يَسْلُبُهُ الطَّهُورِيَّةَ »). Al-Dardīr rapporte deux opinions sans les attribuer (« فَيَضُرُّ كَمَا اسْتَظْهَرَهُ بَعْضُهُمْ وَاسْتَظْهَرَ بَعْضُهُمْ عَدَمَ الضَّرَرِ »). Al-Dasūqī : les deux opinions sont de « عج » (sigle non défini dans sa liste), qui a hésité (« أَنَّ عج اضْطَرَبَ فِي التَّغَيُّرِ بِخُرْءِ السَّمَكِ … فَالْقَوْلَانِ لَهُ ») ; certains de ses élèves ont jugé apparent le premier, d'autres le second ; son maître al-ʿAdawī a fini par retenir qu'elles nuisent, revenant sur son choix inverse (« وَاخْتَارَ شَيْخُنَا آخِرًا الْأَوَّلَ وَرَجَعَ عَنْ اخْتِيَارِهِ لِلثَّانِي »)."
    ],
    exemple: "L'eau d'un bassin est devenue verdâtre à cause de la mousse et sent le renfermé. Vous pouvez y faire vos ablutions. En revanche, si vous faites bouillir de l'eau avec cette mousse, l'eau obtenue ne convient plus.",
    erreurs_frequentes: [
      "Rejeter une eau verdie par la mousse : elle reste purifiante.",
      "Assimiler la cuisson au simple contact : l'eau où l'on a cuit la mousse perd son pouvoir purifiant."
    ],
    termes: [
      { ar: "مُتَوَلِّد", translit: "moutawallid", def: "Ce qui naît de l'eau elle-même (mousse, algues, petits animaux aquatiques)." },
      { ar: "الطُّحْلُب", translit: "at-touhloub", def: "Mousse verte qui couvre l'eau stagnante." }
    ],
    quiz: [
      { q: "Une eau a verdi à cause de la mousse. Est-elle purifiante ?",
        choix: ["Seulement si elle est filtrée", "Non", "Seulement pour boire", "Oui"],
        bonne: 3,
        explication: "Khalīl : « أَوْ بِمُتَوَلِّدٍ مِنْهُ » ; on ne peut pas s'en garder." },
      { q: "Et si l'on fait cuire cette mousse dans l'eau ?",
        choix: ["L'eau devient impure", "Rien ne change", "L'eau perd son pouvoir purifiant", "L'eau reste purifiante"],
        bonne: 2,
        explication: "Aṭ-Ṭurṭūshī (accepté par Ibn Ghāzī, et par al-Dasūqī) : la cuisson peut être évitée." },
      { q: "Mise en situation : une eau stockée longtemps a jauni et s'est épaissie, sans rien d'étranger. Peut-on faire ses ablutions avec ?",
        choix: ["Oui : le changement dû au long séjour ne nuit pas", "Non", "Seulement en voyage", "Seulement après l'avoir fait bouillir"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb, avec Zarrūq : le changement dû au long séjour fait partie de ce qui ne nuit pas." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "56" },
    alertes: [
      "Al-Ḥaṭṭāb dit ignorer le sens du mot « الضَّرِيع » cité par al-Lakhmī ; il n'est pas traduit. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 36 (Shamela 21604, page 35)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-11",
    kitab: "tah", bab: "01", fasl: "01", ordre: 11,
    titre: "Eau changée par son lit, ou par son récipient",
    titre_ar: "التَّغَيُّرُ بِالقَرَارِ",
    objectif: "Savoir si l'eau changée par le sol où elle se trouve, ou par le récipient, reste purifiante.",
    matn: "أَوْ بِقَرَارِهِ كَمِلْحٍ",
    regle_pratique: "L'eau changée par le sol où elle repose ou sur lequel elle coule (sel, vase, soufre, terre rouge, fer, cuivre…) reste purifiante ; de même l'eau changée par son récipient (fer, cuivre, terre cuite) ou chauffée au feu.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le قَرَار (qarâr) de l'eau est la terre sur laquelle elle repose ou passe. Le changement qu'il cause ne fait pas perdre à l'eau son pouvoir purifiant. La Risāla le dit aussi : sauf l'eau dont la couleur a changé à cause de la terre où elle se trouve, comme un sol salé ou de la vase.\n\nAl-Ḥaṭṭāb cite de même : le soufre, l'arsenic, l'alun, le cuivre, le fer, la terre rouge, le khôl, le vitriol et la chaux.\n\nAl-Lakhmī ajoute que c'est pareil si l'on a fait un récipient avec ces matières et que l'eau change à son contact. Personne n'a déconseillé les ablutions dans un récipient de fer, où l'eau change vite. Il est établi que le Prophète ﷺ a fait ses ablutions avec un récipient de cuivre jaune, qui change le goût de l'eau, et l'on chauffait l'eau d'Ibn ʿUmar dans un tel récipient.\n\nAṭ-Ṭirāz ajoute : la communauté n'a jamais cessé d'utiliser l'eau chauffée au feu et l'eau des bains, même quand elle prend le goût des marmites.",
    aqwal: [
      { auteur: "Al-Lakhmī", avis: "L'eau changée par un récipient fait de ces matières reste purifiante ; personne n'a déconseillé le récipient de fer.", statut: "non_precise" },
      { auteur: "Ibn ʿUmar (rapporté par al-Jazūlī)", avis: "Il déconseillait les ablutions dans un récipient de cuivre, métal comme l'or et l'argent.", statut: "non_precise" },
      { auteur: "Avis mashhūr (rapporté par al-Jazūlī)", avis: "Le récipient de cuivre est permis, même s'il change l'eau.", statut: "mashhur" }
    ],
    muatamad: "Confirmé par al-Dardīr et al-Dasūqī : l'eau changée par son lit (sel, terre, soufre, terre rouge, alun) reste purifiante ; de même si l'eau est chauffée dans un récipient de terre cuite ou de cuivre et change.",
    tarjih_hattab: "Al-Ḥaṭṭāb corrige une citation d'Ibn Rāshid dans at-Tawḍīḥ. Selon les « Questions » d'Ibn Rushd, le changement net de l'eau ne serait pas toléré ; mais le texte d'Ibn Rushd ne parle pas de « récipient » : il parle d'un godet de bois neuf et d'une corde neuve. L'eau changée dans un récipient de terre cuite reste donc purifiante.",
    tanbihat: [
      "Ibn Hārūn (rapporté par Ibn Farḥūn) rattache à l'eau absolue le puits changé par le bois et les herbes qui en tapissent les parois, et l'eau changée par un seau neuf, sauf si elle reste longtemps dans le seau et change de façon flagrante (d'après les « Questions » d'Ibn Rushd)."
    ],
    divergences: [],
    exemple: "L'eau d'une source traverse un terrain riche en fer et prend une teinte rouille ; ou vous chauffez l'eau des ablutions dans une bouilloire en cuivre qui lui donne un goût métallique. Dans les deux cas, l'eau reste purifiante.",
    erreurs_frequentes: [
      "Rejeter une eau colorée par le sol (rouille, terre rouge, soufre) : elle reste purifiante.",
      "Croire que l'eau chauffée dans un récipient métallique ne convient pas aux ablutions."
    ],
    termes: [
      { ar: "قَرَار", translit: "qarâr", def: "Lit de l'eau : la terre sur laquelle elle repose ou coule." },
      { ar: "سَبْخَة", translit: "sabkha", def: "Terre salée." }
    ],
    quiz: [
      { q: "Une source coule sur un sol salé et l'eau devient salée. Est-elle purifiante ?",
        choix: ["Seulement pour laver le sol", "Non", "Oui", "Seulement si on la dessale"],
        bonne: 2,
        explication: "Khalīl : « أَوْ بِقَرَارِهِ كَمِلْحٍ »." },
      { q: "L'eau prend le goût d'un récipient de cuivre. Que dit l'avis mashhūr rapporté par al-Jazūlī ?",
        choix: ["Elles sont déconseillées", "L'eau est impure", "Elles sont interdites", "Les ablutions sont permises"],
        bonne: 3,
        explication: "Al-Jazūlī : Ibn ʿUmar les déconseillait, « وَالْمَشْهُورُ جَوَازُهُ وَإِنْ كَانَ يُضِيفُ الْمَاءَ »." },
      { q: "Mise en situation : vous chauffez l'eau de votre ghousl dans une marmite qui lui donne un léger goût. Est-ce un problème ?",
        choix: ["Seulement si la marmite est neuve", "Non : la communauté a toujours utilisé l'eau chauffée au feu, même avec le goût des marmites", "Oui, l'eau ne purifie plus", "Seulement en été"],
        bonne: 1,
        explication: "Aṭ-Ṭirāz, cité par al-Ḥaṭṭāb." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "56-57" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 36 (Shamela 21604, page 35)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-12",
    kitab: "tah", bab: "01", fasl: "01", ordre: 12,
    titre: "Terre ou sel jetés dans l'eau",
    titre_ar: "التَّغَيُّرُ بِالمَطْرُوحِ مِنْ تُرَابٍ أَوْ مِلْحٍ",
    objectif: "Savoir si l'eau changée par de la terre ou du sel qu'on y a jetés reste purifiante.",
    matn: "أَوْ بِمَطْرُوحٍ وَلَوْ قَصْدًا مِنْ تُرَابٍ أَوْ مِلْحٍ",
    regle_pratique: "L'eau changée par de la terre, du sel ou une autre matière du sol jetés dedans reste purifiante, même si on les a jetés exprès ; c'est l'avis mashhūr.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le cas visé est celui d'une matière de même nature que le lit de l'eau, comme la terre ou le sel, qu'on jette dans l'eau (مَطْرُوح, matroûh). Le changement qu'elle cause ne fait pas perdre à l'eau son pouvoir purifiant, même si on l'a jetée exprès : c'est l'avis mashhūr.\n\nSelon un autre avis, rapporté par al-Māzirī et d'autres, le jet volontaire fait perdre ce pouvoir, car l'eau peut se passer de cette matière ajoutée.\n\nPar « même exprès », Khalīl indique que la divergence porte sur le jet volontaire. Ce que le vent apporte ne nuit pas, sans divergence (at-Tawḍīḥ).\n\nKhalīl cite la matière la plus proche de l'eau (la terre) et la plus éloignée (le sel). On comprend ainsi que la divergence vaut pour ce qui est entre les deux (soufre, arsenic, terre rouge), et que le mashhūr est partout que l'eau garde son pouvoir purifiant.",
    aqwal: [
      { auteur: "Avis mashhūr", avis: "Ce qui est jeté, même exprès, ne fait pas perdre à l'eau son pouvoir purifiant.", statut: "mashhur" },
      { auteur: "Avis rapporté par al-Māzirī et d'autres (repris par Ibn ʿArafa)", avis: "Le jet volontaire fait perdre ce pouvoir.", statut: "non_precise" },
      { auteur: "Ibn Abī Zayd et Ibn al-Qaṣṣār", avis: "Pour le sel : il ne fait pas perdre ce pouvoir.", statut: "non_precise" },
      { auteur: "Ibn Yūnus", avis: "Pour le sel : il fait perdre ce pouvoir (voir la fiche suivante).", statut: "non_precise" },
      { auteur: "Al-Bājī (attribué par Sanad ; selon le commentateur, simple éventualité)", avis: "Le sel minéral ne nuit pas, le sel fabriqué nuit ; Sanad jugeait préférable l'inverse.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : même jeté exprès, contre al-Māzirī, ce qui vient de la terre (terre, sel minéral ou fabriqué « selon le muʿtamad », terre rouge, soufre, alun, chaux, plâtre) ne nuit pas. Al-Dasūqī : il en va ainsi même si l'on fait cuire le sel dans l'eau, « selon le muʿtamad ».",
    tarjih_hattab: "Pour la terre fabriquée (plâtre, chaux), al-Ḥaṭṭāb retient qu'elle ne nuit pas, comme l'eau qui change dans un récipient de terre cuite ou de métal ; al-Burzulī dit que la teinte jaune donnée par la chaux ne nuit pas. Pour le sel cuit dans l'eau, il penche en revanche pour la règle de l'eau « mêlée », par analogie avec la mousse cuite (aṭ-Ṭurṭūshī).",
    tanbihat: [
      "ʿAbd al-Ḥaqq rapporte qu'un de ses maîtres assimilait le sel cuit dans l'eau à de la nourriture qui y tombe (l'eau devient « mêlée ») ; un autre le contestait.",
      "Khalīl aurait été plus complet en écrivant « مِنْ كَتُرَابٍ » (« comme la terre »), à la manière d'ash-Shāmil."
    ],
    divergences: [
      "Divergence — sel cuit dans l'eau. Al-Ḥaṭṭāb : rapporte d'Ibn ʿAṭāʾ Allāh, d'après ʿAbd al-Ḥaqq, deux réponses de maîtres (comme une nourriture tombée / pas comme une nourriture), puis juge que la conséquence de l'avis d'aṭ-Ṭurṭūshī sur la mousse cuite est le premier, « car le changement par une chose cuite est plus fort » (« الْجَارِي عَلَى مَا تَقَدَّمَ عَنْ الطُّرْطُوشِيِّ فِي الطُّحْلُبِ إذَا طُبِخَ فِي الْمَاءِ هُوَ الْقَوْلُ الْأَوَّلُ لِأَنَّ تَغَيُّرَ الْمَطْبُوخِ أَقْوَى »). Al-Dasūqī : il ne nuit pas, « selon l'avis retenu, contre « المج » (al-Majmūʿ de Muḥammad al-Amīr), qui l'assimile à la mousse cuite » (« وَهُوَ كَذَلِكَ عَلَى الْمُعْتَمَدِ خِلَافًا للمج حَيْثُ أَجْرَاهُ عَلَى الطُّحْلُبِ »)."
    ],
    exemple: "Pour tester l'eau d'un puits, quelqu'un y a jeté une poignée de terre ; l'eau s'est troublée. Elle reste purifiante selon l'avis mashhūr. Il en va de même si une tempête y a soufflé du sable.",
    erreurs_frequentes: [
      "Croire que la terre jetée exprès dans l'eau la rend inutilisable : selon le mashhūr, elle reste purifiante.",
      "Étendre cette règle à la nourriture ou aux produits qui ne viennent pas du sol : ils seront traités plus loin."
    ],
    termes: [
      { ar: "مَطْرُوح", translit: "matroûh", def: "Ce qu'on a jeté dans l'eau." },
      { ar: "قَصْدًا", translit: "qasdan", def: "Exprès, volontairement." }
    ],
    quiz: [
      { q: "On jette exprès de la terre dans l'eau, qui change. Selon le mashhūr, est-elle purifiante ?",
        choix: ["Seulement en voyage", "Non", "Oui", "Seulement si la terre est propre"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « وَلَوْ كَانَ الطَّرْحُ قَصْدًا وَهَذَا هُوَ الْمَشْهُورُ »." },
      { q: "Sur quoi porte la divergence ?",
        choix: ["Sur ce qu'on jette exprès", "Sur l'eau de pluie", "Sur ce que le vent apporte", "Sur le récipient"],
        bonne: 0,
        explication: "Ce que le vent apporte ne nuit pas, sans divergence (at-Tawḍīḥ)." },
      { q: "Pourquoi Khalīl cite-t-il la terre et le sel ?",
        choix: ["Ce sont les seules matières concernées", "Pour désigner la nourriture", "Par hasard", "Ce sont la matière la plus proche et la plus éloignée de l'eau ; ce qui est entre les deux suit la même règle"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : en citant les deux extrêmes, Khalīl couvre ce qui est entre eux (soufre, terre rouge…)." },
      { q: "Mise en situation : vous faites cuire du sel dans de l'eau. Selon le muʿtamad d'al-Dasūqī, cette eau purifie-t-elle encore ?",
        choix: ["Seulement froide", "Non", "Oui", "Seulement pour le ghousl"],
        bonne: 2,
        explication: "Al-Dasūqī : « وَلَوْ طُبِخَ الْمِلْحُ فِي الْمَاءِ وَهُوَ كَذَلِكَ عَلَى الْمُعْتَمَدِ » ; al-Ḥaṭṭāb penchait pour l'avis contraire." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "57-58" },
    alertes: [
      "« Le commentateur » (الشَّارِحُ) cité par al-Ḥaṭṭāb n'est pas nommé dans ce passage. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 36-37 (Shamela 21604, pages 35-36)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-13",
    kitab: "tah", bab: "01", fasl: "01", ordre: 13,
    titre: "Le sel jeté dans l'eau : l'avis d'Ibn Yūnus",
    titre_ar: "الأَرْجَحُ السَّلْبُ بِالمِلْحِ",
    objectif: "Comprendre le « الأَرْجَحُ » de Khalīl sur le sel, et savoir quel avis est retenu pour la pratique.",
    matn: "وَالْأَرْجَحُ السَّلْبُ بِالْمِلْحِ",
    regle_pratique: "Ibn Yūnus juge que le sel jeté dans l'eau lui fait perdre son pouvoir purifiant (Khalīl le signale par « الأَرْجَحُ ») ; mais l'avis mashhūr, retenu pour la pratique par al-Dardīr, est que l'eau changée par le sel reste purifiante.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le mot « الأَرْجَحُ » (al-arjah) renvoie, chez Khalīl, au choix d'Ibn Yūnus parmi des avis déjà transmis (voir le Module 0, fiche int-01-01-03b).\n\nIbn Yūnus, après avoir rapporté la divergence sur le sel, écrit : « le juste est qu'on ne fait pas ses ablutions avec cette eau ». Sa raison : une fois séparé de la terre, le sel devient une nourriture, sur laquelle on ne peut pas faire le tayammoum. La terre, elle, ne change pas de règle, et aucun endroit où se trouve de l'eau n'en est dépourvu.\n\nKhalīl rapporte donc l'avis d'Ibn Yūnus, alors qu'il a donné juste avant l'avis mashhūr (fiche tah-01-01-12) : le sel jeté dans l'eau ne lui fait pas perdre son pouvoir purifiant.",
    aqwal: [
      { auteur: "Ibn Yūnus", avis: "Le sel jeté dans l'eau lui fait perdre son pouvoir purifiant : séparé de la terre, il devient une nourriture.", statut: "qawl" },
      { auteur: "Ibn Abī Zayd et Ibn al-Qaṣṣār (avis mashhūr selon al-Ḥaṭṭāb et Ibn Bashīr)", avis: "Le sel est comme la terre : il ne fait pas perdre à l'eau son pouvoir purifiant.", statut: "mashhur" }
    ],
    muatamad: "Confirmé contre Ibn Yūnus par al-Dardīr : l'avis d'Ibn Yūnus (perte du pouvoir purifiant par le sel jeté exprès) est « faible » (وَهُوَ ضَعِيفٌ) ; le plus fort est que le sel, minéral ou fabriqué, ne fait pas perdre ce pouvoir. Al-Dasūqī : l'avis d'Ibn Abī Zayd « est l'école » (وَهَذَا هُوَ الْمَذْهَبُ).",
    tarjih_hattab: null,
    tanbihat: [
      "Ce passage illustre une règle du Module 0 : « الأَرْجَحُ » signale le choix d'Ibn Yūnus, qui n'est pas forcément l'avis mashhūr."
    ],
    divergences: [
      "Divergence — sel jeté exprès dans l'eau. Al-Ḥaṭṭāb : le mashhūr (il ne nuit pas) est l'avis d'Ibn Abī Zayd et d'Ibn al-Qaṣṣār ; l'avis contraire est celui qu'a choisi Ibn Yūnus (« هُوَ الَّذِي ذَهَبَ إلَيْهِ ابْنُ أَبِي زَيْدٍ وَابْنُ الْقَصَّارِ وَمُقَابِلُهُ هُوَ الَّذِي اخْتَارَهُ ابْنُ يُونُسَ »). Al-Dasūqī : Ibn Abī Zayd (il ne nuit pas, « c'est l'école ») ; al-Qābisī (il est comme une nourriture), choisi par Ibn Yūnus ; al-Bājī (le sel de mine est comme la terre) (« فَقَالَ ابْنُ أَبِي زَيْدٍ لَا يَنْقُلُ حُكْمَ الْمَاءِ كَالتُّرَابِ وَهَذَا هُوَ الْمَذْهَبُ وَقَالَ الْقَابِسِيُّ: إنَّهُ كَالطَّعَامِ فَيَنْقُلُهُ وَاخْتَارَهُ ابْنُ يُونُسَ »). Al-Dardīr juge faible le « plus fort » d'Ibn Yūnus, qui ne vise que le sel jeté exprès (« الْمَطْرُوحِ قَصْدًا خَاصَّةً وَهُوَ ضَعِيفٌ »)."
    ],
    exemple: "Vous lisez dans le Mukhtaṣar « وَالْأَرْجَحُ السَّلْبُ بِالْمِلْحِ ». Ne concluez pas que l'eau salée par du sel ajouté ne purifie pas : c'est le choix d'Ibn Yūnus, et l'avis retenu pour la pratique est qu'elle purifie.",
    erreurs_frequentes: [
      "Prendre « الأَرْجَحُ » pour l'avis mashhūr ou retenu : il signale le choix d'Ibn Yūnus.",
      "Croire que l'eau changée par du sel ajouté ne purifie plus : selon le mashhūr et le muʿtamad, elle purifie."
    ],
    termes: [
      { ar: "سَلْب", translit: "salb", def: "Ici : perte du pouvoir purifiant de l'eau." }
    ],
    quiz: [
      { q: "À qui renvoie « وَالْأَرْجَحُ » dans ce passage ?",
        choix: ["À al-Lakhmī", "À Ibn Rushd", "À Mālik", "À Ibn Yūnus"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : « يَعْنِي أَنَّ ابْنَ يُونُسَ رَجَّحَ الْقَوْلَ بِسَلْبِ طَهُورِيَّةِ الْمَاءِ بِالْمِلْحِ »." },
      { q: "Quelle raison donne Ibn Yūnus ?",
        choix: ["Séparé de la terre, le sel devient une nourriture", "Le sel est cher", "Le sel est impur", "Le sel change la couleur"],
        bonne: 0,
        explication: "« لِأَنَّهُ إذَا فَارَقَ الْأَرْضَ صَارَ طَعَامًا لَا يَجُوزُ التَّيَمُّمُ عَلَيْهِ »." },
      { q: "Mise en situation : vous avez salé de l'eau pour vous gargariser, puis vous voulez faire vos ablutions avec. Quel avis est retenu pour la pratique ?",
        choix: ["L'eau est impure", "Il faut ajouter de l'eau douce", "L'eau ne purifie plus (Ibn Yūnus)", "L'eau purifie encore (mashhūr, confirmé par al-Dardīr)"],
        bonne: 3,
        explication: "Al-Dardīr qualifie l'avis d'Ibn Yūnus de faible ; l'avis mashhūr est retenu." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "57-58" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 37 (Shamela 21604, page 36)."
    ],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 3 — tah-01-01-14 à -19 — t. 1, p. 58–66 (Shamela 569, p. 57–65) */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 37–41 (Shamela 21604, p. 36–40) */
  /* ================================================================== */

  {
    id: "tah-01-01-14",
    kitab: "tah", bab: "01", fasl: "01", ordre: 14,
    titre: "Le sel fabriqué : hésitation des tardifs (taraddoud)",
    titre_ar: "التَّرَدُّدُ فِي المِلْحِ المَصْنُوعِ",
    objectif: "Comprendre l'hésitation que Khalīl rapporte sur le sel fabriqué, et savoir ce que l'on retient en pratique.",
    matn: "وَفِي الِاتِّفَاقِ عَلَى السَّلْبِ بِهِ إنْ صُنِعَ تَرَدُّدٌ",
    regle_pratique: "Selon l'avis retenu par al-Dardīr, l'eau changée par du sel qu'on y jette garde son pouvoir purifiant, que ce sel soit extrait de la terre ou fabriqué ; Khalīl signale seulement que les tardifs ont hésité sur l'existence d'un accord contraire pour le sel fabriqué.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "C'est le premier endroit où Khalīl emploie le mot تَرَدُّد (taraddoud). Al-Ḥaṭṭāb explique qu'il désigne ici l'hésitation des savants tardifs (المُتَأَخِّرُون) dans la manière de rapporter la doctrine des anciens, ce qu'on appelle les « voies » de transmission (طُرُق). Voir le Module 0 (int-01-01-07).\n\nIbn Bashīr, cité par al-Ḥaṭṭāb selon le sens : les tardifs ont divergé sur le sel. Est-il comme la terre, qui ne change pas le statut de l'eau (c'est l'avis mashhūr) ? Est-il comme un aliment, qui le change ? Ou bien le sel extrait de la terre (مَعْدِنِيّ) est-il comme la terre, et le sel fabriqué (مَصْنُوع) comme un aliment ?\n\nCeux qui sont venus après eux ont divergé à leur tour. Ces avis reviennent-ils à un seul avis détaillé (ceux qui disent « comme la terre » viseraient le sel extrait, ceux qui disent « comme un aliment » le sel fabriqué) ? Ou bien sont-ce trois avis distincts ? C'est cette seconde divergence que vise Khalīl.\n\nLe sens du matn est donc : il y a deux voies chez les tardifs. Selon la première, on s'accorde à dire que le sel fabriqué fait perdre à l'eau son pouvoir purifiant. Selon la seconde, il n'y a pas d'accord : la divergence porte aussi sur lui.\n\nAl-Dasūqī précise que les « anciens » sont pris ici au sens relatif : ce sont des tardifs plus anciens que ceux qui hésitent, et non les « anciens » au sens technique de l'école, c'est-à-dire ceux qui vécurent avant Ibn Abī Zayd.",
    aqwal: [
      { auteur: "Les tardifs, d'après Ibn Bashīr (premier avis) ; Ibn Abī Zayd, nommé par al-Dasūqī", avis: "Le sel est comme la terre : il ne change pas le statut de l'eau. Al-Dasūqī : « c'est la doctrine de l'école ».", statut: "mashhur" },
      { auteur: "Les tardifs, d'après Ibn Bashīr (deuxième avis) ; al-Qābisī, nommé par al-Dasūqī, avis choisi par Ibn Yūnus", avis: "Le sel est comme un aliment : il fait perdre à l'eau son pouvoir purifiant.", statut: "non_precise" },
      { auteur: "Les tardifs, d'après Ibn Bashīr (troisième avis) ; al-Bājī, nommé par al-Dasūqī", avis: "Le sel extrait est comme la terre ; le sel fabriqué est comme un aliment.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (première voie, d'après Ibn Bashīr)", avis: "Ces trois avis n'en font qu'un, détaillé : on s'accorde donc à dire que le sel fabriqué fait perdre le pouvoir purifiant.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (seconde voie, d'après Ibn Bashīr)", avis: "Ce sont trois avis distincts : il n'y a pas d'accord sur le sel fabriqué.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : des deux branches de l'hésitation, la plus forte (« الرَّاجِحُ ») est la seconde : il n'y a pas d'accord sur le sel fabriqué, la divergence s'y applique comme au sel extrait ; et, dans cette divergence, l'avis le plus fort est que le sel ne fait pas perdre le pouvoir purifiant, qu'il soit extrait ou fabriqué. Al-Dasūqī : l'avis d'Ibn Abī Zayd, selon lequel le sel ne change pas le statut de l'eau, « est la doctrine de l'école ».",
    tarjih_hattab: null,
    tanbihat: [
      "Objection et réponse d'al-Ḥaṭṭāb : pourquoi Khalīl ne dit-il pas aussi « et accord pour dire que le sel extrait ne nuit pas » ? Parce que le sel extrait est, au mieux, comme la terre, et que la terre elle-même fait l'objet d'une divergence. Un tel accord n'est vrai que chez ceux qui tiennent que la terre ne fait pas perdre le pouvoir purifiant.",
      "La condition « s'il est fabriqué » ne suffit pas à dire qu'on s'accorde sur le sel extrait : elle indique seulement qu'il n'y a pas d'accord pour dire qu'il nuit, ce qui laisse ouvertes deux possibilités (accord pour dire qu'il ne nuit pas, ou divergence)."
    ],
    divergences: [],
    exemple: "Vous jetez dans votre récipient d'ablutions du sel obtenu en chauffant de la terre salée, et le goût de l'eau change. Selon l'avis retenu par al-Dardīr, l'eau garde son pouvoir purifiant : vous pouvez faire vos ablutions avec.",
    erreurs_frequentes: [
      "Croire que Khalīl tranche ici : le taraddoud signale seulement une hésitation entre deux voies de transmission.",
      "Confondre les deux divergences : celle des tardifs sur la nature du sel (trois avis) et celle de leurs successeurs sur la manière de comprendre ces avis. Khalīl vise la seconde.",
      "Penser qu'on s'accorde à dire que le sel extrait ne nuit pas : la terre elle-même fait l'objet d'une divergence."
    ],
    termes: [
      { ar: "تَرَدُّد", translit: "taraddoud", def: "Hésitation. Ici : celle des tardifs dans la manière de rapporter la doctrine des anciens (voir Module 0)." },
      { ar: "طُرُق", translit: "tourouq", def: "Façons divergentes de transmettre l'école (voir Module 0)." },
      { ar: "مَعْدِنِيّ", translit: "maʿdinî", def: "Extrait tel quel de la terre (ici : le sel de mine ou de saline)." },
      { ar: "مَصْنُوع", translit: "masnoûʿ", def: "Fabriqué. Pour le sel, selon al-Dardīr : tiré de terre salée chauffée au feu." }
    ],
    quiz: [
      { q: "Que désigne ici le mot تَرَدُّد ?",
        choix: ["L'hésitation des tardifs dans la manière de rapporter la doctrine des anciens", "Un avis faible", "Une règle propre à une autre école", "Un doute de Khalīl lui-même sur la règle"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : « وَهُوَ لِتَرَدُّدِ الْمُتَأَخِّرِينَ فِي النَّقْلِ عَنْ الْمُتَقَدِّمِينَ »." },
      { q: "Selon Ibn Bashīr, quel avis sur le sel est le mashhūr ?",
        choix: ["Seul le sel fabriqué est comme la terre", "Le sel est comme la terre", "Aucun avis n'est mashhūr", "Le sel est comme un aliment"],
        bonne: 1,
        explication: "« هَلْ الْمِلْحُ كَالتُّرَابِ فَلَا يَنْقُلُ حُكْمَ الْمَاءِ وَهُوَ الْمَشْهُورُ »." },
      { q: "Quelle divergence Khalīl vise-t-il par ce taraddoud ?",
        choix: ["Celle sur l'eau de mer", "Celle des Compagnons", "Celle des tardifs sur la nature du sel", "Celle de leurs successeurs : un seul avis détaillé, ou trois avis distincts ?"],
        bonne: 3,
        explication: "Al-Ḥaṭṭāb : « فَأَشَارَ الْمُصَنِّفُ بِالتَّرَدُّدِ إلَى الِاخْتِلَافِ الثَّانِي »." },
      { q: "Mise en situation : le goût de votre eau change parce que vous y avez jeté du sel fabriqué. Selon l'avis retenu par al-Dardīr, que faire ?",
        choix: ["Il faut la faire bouillir", "Elle reste purifiante : vous pouvez faire vos ablutions avec", "Elle est devenue impure", "Elle ne sert qu'à laver une souillure"],
        bonne: 1,
        explication: "Al-Dardīr : « وَالرَّاجِحُ مِنْ الْخِلَافِ عَدَمُ السَّلْبِ مُطْلَقًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "58" },
    alertes: [
      "Ibn Bashīr est cité par al-Ḥaṭṭāb selon le sens (« انْتَهَى بِالْمَعْنَى »), non mot à mot.",
      "Mawāhib, p. 58 : « لِأَنَّهَا تَدْعُو أَنَّ الْخِلَافَ » ; le sens demande sans doute « تَدَّعِي » (« elle prétend »). Sans effet sur la règle.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 37 (Shamela 21604, page 36)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-15",
    kitab: "tah", bab: "01", fasl: "01", ordre: 15,
    titre: "L'eau changée par ce qui s'en sépare d'ordinaire",
    titre_ar: "المَاءُ المُتَغَيِّرُ بِمَا يُفَارِقُهُ غَالِبًا",
    objectif: "Savoir quand une eau changée perd son pouvoir purifiant, et à quoi elle peut encore servir.",
    matn: "لَا بِمُتَغَيِّرٍ لَوْنًا أَوْ طَعْمًا أَوْ رِيحًا بِمَا يُفَارِقُهُ غَالِبًا مِنْ طَاهِرٍ أَوْ نَجِسٍ كَدُهْنٍ خَالَطَهُ أَوْ بُخَارٍ مُصْطَكَى وَحُكْمُهُ كَمُغَيِّرِهِ",
    regle_pratique: "Une eau dont la couleur, le goût ou l'odeur a changé à cause d'une chose dont elle est d'ordinaire séparée (lait, safran, huile qui s'y mêle, impureté…) ne purifie plus : si cette chose est pure, l'eau reste pure et sert aux usages courants (boire, cuisiner, laver la saleté) ; si elle est impure, l'eau devient impure.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "La purification faite avec cette eau n'est pas valide : elle ne lève ni le ḥadath ni la règle de la souillure (« وَلَا يَرْفَعُ الْحَدَثَ وَلَا حُكْمَ الْخُبْثِ »)."
    },
    explication: "Khalīl oppose cette eau à l'eau absolue : seule l'eau absolue lève le ḥadath et la règle de la souillure ; l'eau changée ne lève ni l'un ni l'autre. Peu importe que le changement touche la couleur, le goût ou l'odeur, et que la chose soit pure ou impure, dès lors que l'eau en est d'ordinaire séparée (غَالِبًا). Al-Dardīr et al-Dasūqī précisent que « d'ordinaire » veut dire « la plupart du temps » : sont exclus ce dont l'eau n'est jamais séparée (son lit) et ce dont elle l'est rarement (le poisson vivant ; le beurre fondu pour les gens du désert, dont les récipients en sont rarement exempts, d'après « ح » (al-Ḥaṭṭāb) citant Ibn Rushd).\n\nKhalīl donne deux exemples. L'huile qui se mêle à l'eau : il n'y a aucune divergence sur le fait que l'eau changée par des huiles mêlées n'est pas purifiante ; c'est le pendant de l'huile qui touche seulement la surface (fiche 08). La vapeur, ou fumée, de mastic (مُصْطَكَى) : al-Māzirī rapporte deux avis des tardifs, selon que cette fumée est considérée comme voisine (elle ne nuit pas) ou comme mêlée (elle nuit). Khalīl, dans at-Tawḍīḥ, la juge mêlée, et Ibn ʿArafa estime juste qu'al-Lakhmī l'ait tranché ainsi.\n\n« Son statut est celui de ce qui l'a changé » : si la chose est pure, l'eau est pure mais ne purifie pas (طَاهِرٌ غَيْرُ مُطَهِّرٍ). On l'utilise pour les usages courants (العَادَات), comme boire, cuisiner, pétrir ou laver un vêtement de sa saleté, mais pas pour les actes d'adoration (العِبَادَات). Si la chose est impure, l'eau est impure : on ne l'utilise ni pour les uns ni pour les autres, mais on peut en arroser les cultures et en abreuver le bétail.\n\nLe mot نَجِس se lit najas (l'impureté elle-même, comme l'urine) ou najis (la chose souillée, مُتَنَجِّس) ; la seconde lecture inclut la première a fortiori.",
    aqwal: [
      { auteur: "Avis des tardifs rapporté par al-Māzirī (premier)", avis: "La fumée de mastic est une chose voisine de l'eau : elle ne lui fait pas perdre son pouvoir purifiant.", statut: "non_precise" },
      { auteur: "Avis des tardifs rapporté par al-Māzirī (second) ; Khalīl (at-Tawḍīḥ) ; al-Lakhmī", avis: "Cette fumée se mêle à l'eau : elle lui fait perdre son pouvoir purifiant. Ibn ʿArafa juge juste qu'al-Lakhmī l'ait tranché ainsi.", statut: "non_precise" },
      { auteur: "Avis connu de l'école (al-Ḥaṭṭāb)", avis: "Tout changement, net ou léger, par une chose séparable fait perdre le pouvoir purifiant.", statut: "non_precise" },
      { auteur: "Rapporté par Ibn Farḥūn et l'auteur d'al-Jamʿ ; al-Ibyānī (dans sa Safīna)", avis: "Un changement léger est pardonné. Ibn Hārūn : cet avis « n'est pas connu dans l'école ».", statut: "non_precise" },
      { auteur: "Ibn Rushd (Nawāzil), à la suite d'al-Lakhmī", avis: "Même si la chose pure ajoutée est en moindre quantité que l'eau, l'eau qu'elle change ne purifie pas : c'est le mashhūr de l'école, connu des paroles de Mālik et de ses compagnons.", statut: "mashhur" },
      { auteur: "Mālik, transmission rapportée par al-Lakhmī", avis: "Si la chose pure est en moindre quantité que l'eau, l'eau reste purifiante ; la délaisser quand on en a une autre n'est qu'une préférence.", statut: "non_precise" },
      { auteur: "Aṣbagh (rapporté dans aṭ-Ṭirāz)", avis: "On ne fait pas ses ablutions avec une eau où l'on a trempé un aliment, ou lavé un vêtement pur, qu'elle ait changé ou non ; celui qui a prié ainsi recommence pour toujours.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa et d'autres", avis: "Le changement d'odeur compte : c'est le mashhūr de l'école.", statut: "mashhur" },
      { auteur: "Ibn al-Mājishūn", avis: "Le changement d'odeur ne compte pas. Ibn Nājī : c'est l'apparence de la Mudawwana et de la Risāla, qui ne mentionnent pas l'odeur.", statut: "non_precise" },
      { auteur: "Saḥnūn, d'après Ibn Rushd (rapporté par Ibn ʿArafa)", avis: "On distingue le changement fort, qui nuit, du changement léger.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : l'eau changée, de façon certaine ou probable, même sans changement net, par une chose dont elle se sépare la plupart du temps, ne lève ni le ḥadath ni la règle de la souillure ; changée par une chose pure, elle sert aux usages courants et non aux actes d'adoration ; changée par une chose impure, elle n'y sert pas. Al-Dasūqī : le changement d'odeur nuit aussi « selon l'avis retenu » ; les avis d'Ibn al-Mājishūn et de Saḥnūn sont tous deux faibles ; et le changement simplement probable nuit, que l'opinion soit forte ou non (« وَلَكِنَّ الْحَقَّ »). L'eau devenue impure peut servir, hors de la mosquée et du corps humain, à arroser les cultures et abreuver le bétail.",
    tarjih_hattab: "Al-Ḥaṭṭāb donne raison à Ibn Hārūn : un changement léger n'est pas pardonné, sauf s'il vient de ce dont l'eau est d'ordinaire inséparable ; l'argument des récipients des Arabes relève de ce cas. Pour une eau changée par une chose dont la pureté est douteuse, il estime qu'elle est pure mais non purifiante, et qu'elle reste purifiante si l'on doute aussi que cette chose fasse perdre le pouvoir purifiant.",
    tanbihat: [
      "Changement léger : al-Ibyānī appuie l'avis qui le pardonne sur les récipients des Arabes, qui laissaient toujours un peu de goût ou d'odeur sans qu'on s'en gêne. Ibn Hārūn y voit le cas de ce dont l'eau est d'ordinaire inséparable. L'auteur d'aṭ-Ṭirāz ne rapporte la distinction entre léger et grossier que des Shafiʿites. Dans la glose d'al-Wānnūghī sur la Taʿlīqa d'Abū ʿImrān, pour un récipient d'où l'on a versé de la graisse ou de l'huile et dont l'eau se couvre d'un léger voile, il est répondu : « le peu ne nuit pas ».",
      "Impureté : pour une eau changée par une impureté, il n'y a aucune différence entre changement léger et grossier, eau peu abondante ou abondante, courante ou stagnante. Al-Nawawī rapporte l'unanimité sur ce point ; al-Ḥaṭṭāb la discute pour l'odeur seule, à cause de l'avis d'Ibn al-Mājishūn. Ibn ʿArafa juge de même « lointaine » l'unanimité rapportée par ʿIyāḍ.",
      "Proportion : peu importe que l'eau soit plus abondante que la chose mêlée, ou l'inverse (avis connu). L'auteur d'aṭ-Ṭirāz juge « corrompu » le raisonnement d'al-Lakhmī : Mālik hésitait seulement parce qu'on ignorait si l'on pouvait s'en préserver ; al-Bājī dit de même. Ibn Rushd rapporte de Mālik : « cela ne me plaît pas qu'on fasse ses ablutions avec, sans que je l'interdise ».",
      "Ce qui compte est le changement, non le simple contact : une peau ou un vêtement tombé dans l'eau et retiré sans la changer ne nuit pas (Mudawwana) ; de même un pain trempé et retiré aussitôt, ou des grains mouillés, tant que l'eau ne change pas (aṭ-Ṭirāz).",
      "Odeur : Ibn al-Imām juge « grave erreur » d'interpréter l'avis d'Ibn al-Mājishūn comme visant le seul changement par voisinage : Abū Zayd rapporte de lui qu'un cadavre tombé dans un puits ne nuit pas, même si l'odeur change, tant que la couleur ou le goût ne changent pas ; al-Lakhmī et al-Māzirī disent que sa divergence porte sur l'odeur venue d'une chose mêlée à l'eau.",
      "Ordre des mélanges (al-Lakhmī) : une impureté tombe sans changer l'eau, puis du lait la change : l'eau est pure, selon l'avis jugé bon dans l'école ; si l'eau était déjà mêlée quand l'impureté tombe, elle est impure, car l'eau mêlée et les autres liquides « ne se défendent pas ». Pour une eau abondante, elle reste pure sans divergence.",
      "Eau de pluie stagnante : Mālik, d'après Ibn Wahb (Mudawwana) : on fait ses ablutions avec, même si l'on craint qu'il y ait du fumier. Ibn Nājī : cela vaut en rase campagne, non dans les rues des villes, où l'impureté domine.",
      "Fumée : le commentateur (« الشَّارِحُ », non nommé dans le passage) étend la divergence à la fumée d'encens (عُود) et d'autres parfums ; al-Bisāṭī la limite au cas où la trace de la fumée apparaît nettement ; Khalīl aurait mieux dit « une vapeur comme celle du mastic »."
    ],
    divergences: [
      "Point à comparer — récipient parfumé à la fumée. Al-Dardīr : si la fumée ne demeure pas, le changement d'odeur ne nuit pas, car c'est un changement par voisinage (« لَا إنْ لَمْ يَبْقَ فَلَا يَضُرُّ تَغَيُّرُ رِيحِهِ لِأَنَّهُ مِنْ بَابِ التَّغَيُّرِ بِالْمُجَاوِرِ »). Al-Bisāṭī (al-Mughnī), cité par al-Ḥaṭṭāb, restreint la perte du pouvoir purifiant au changement net : « si le récipient est parfumé et que sa trace y apparaît nettement, cela ôte » ce pouvoir (« إذَا بُخِّرَ الْإِنَاءُ وَظَهَرَ أَثَرُهُ فِي الْإِنَاءِ ظُهُورًا بَيِّنًا فَإِنَّهُ يَسْلُبُ ») ; al-Ḥaṭṭāb note que les autres parlent sans restriction (« وَظَاهِرُ كَلَامِ غَيْرِهِ الْإِطْلَاقُ »).",
      "Divergence — fumée d'une chose impure. Al-Dardīr : Khalīl la tiendra plus loin pour impure, « contrairement à l'avis le plus fort » (« بِنَاءً عَلَى مَا يَأْتِي لِلْمُصَنِّفِ مِنْ أَنَّ دُخَانَ النَّجِسِ نَجِسٌ لَا عَلَى الرَّاجِحِ ») ; selon cet avis le plus fort, elle est pure, car le feu purifie."
    ],
    exemple: "Une eau où l'on a versé un peu de lait a changé de couleur : vous pouvez la boire ou cuisiner avec, mais pas faire vos ablutions avec. Si c'est de l'urine qui a changé l'eau d'un seau, cette eau est impure : vous ne l'utilisez ni pour boire ni pour vous purifier, mais vous pouvez en arroser un champ.",
    erreurs_frequentes: [
      "Croire qu'un léger changement de goût ou d'odeur ne compte pas : selon l'avis connu, tout changement par une chose séparable fait perdre le pouvoir purifiant.",
      "Croire que l'eau changée par une chose pure devient impure : elle reste pure et sert aux usages courants.",
      "Oublier l'odeur : son changement compte aussi, selon le mashhūr et l'avis retenu.",
      "Penser que le simple contact suffit : seul le changement compte."
    ],
    termes: [
      { ar: "غَالِبًا", translit: "ghâliban", def: "D'ordinaire, la plupart du temps." },
      { ar: "طَاهِرٌ غَيْرُ مُطَهِّرٍ", translit: "tâhiroun ghayrou moutahhirin", def: "Pur mais non purifiant : eau qu'on peut boire et employer aux usages courants, mais qui ne lève ni le ḥadath ni la souillure." },
      { ar: "العَادَات", translit: "al-ʿâdât", def: "Les usages courants : boire, cuisiner, pétrir, laver la saleté." },
      { ar: "العِبَادَات", translit: "al-ʿibâdât", def: "Les actes d'adoration ; ici, les purifications rituelles." },
      { ar: "مُتَنَجِّس", translit: "moutanajjis", def: "Chose pure en soi devenue souillée par une impureté." },
      { ar: "مُصْطَكَى", translit: "moustakâ", def: "Mastic : résine odorante qu'on brûle pour parfumer l'eau ou les récipients." },
      { ar: "بُخَار", translit: "boukhâr", def: "Vapeur ; selon al-Dardīr, ici : la fumée (دُخَان)." }
    ],
    quiz: [
      { q: "L'eau dont la couleur a changé à cause du safran qu'on y a mis peut-elle servir aux ablutions ?",
        choix: ["Non, mais on peut la boire", "Seulement en voyage", "Oui", "Non, car elle est impure"],
        bonne: 0,
        explication: "Al-Ḥaṭṭāb : « فَالْمَاءُ طَاهِرٌ غَيْرُ مُطَهِّرٍ فَيُسْتَعْمَلُ فِي الْعَادَاتِ كَالشُّرْبِ »." },
      { q: "Une eau changée par une impureté peut-elle encore servir à quelque chose ?",
        choix: ["Non, à rien", "Oui, aux ablutions si l'on n'a rien d'autre", "Oui, à cuisiner", "Oui, à arroser les cultures et abreuver le bétail"],
        bonne: 3,
        explication: "« وَيَجُوزُ أَنْ يُسْقَى بِهِ الزَّرْعُ وَأَنْ يُسْقَى لِلْمَاشِيَةِ »." },
      { q: "Le changement de la seule odeur compte-t-il ?",
        choix: ["Non, jamais", "Oui, c'est le mashhūr", "Seulement s'il est très fort", "Seulement pour l'eau de mer"],
        bonne: 1,
        explication: "« مَا ذَكَرَهُ الْمُصَنِّفُ مِنْ اعْتِبَارِ تَغَيُّرِ الرَّائِحَةِ هُوَ الْمَشْهُورُ فِي الْمَذْهَبِ » ; al-Dasūqī : de même « عَلَى الْمُعْتَمَدِ »." },
      { q: "Un pain est trempé dans l'eau puis retiré aussitôt, sans la changer. Que devient-elle ?",
        choix: ["Elle reste purifiante", "Elle devient impure", "Elle devient pure non purifiante", "Elle est déconseillée pour toujours"],
        bonne: 0,
        explication: "Aṭ-Ṭirāz : « وَالْعِلَّةُ تَغَيُّرُ أَحَدِ أَوْصَافِ الْمَاءِ » ; c'est l'avis connu (Aṣbagh est d'un autre avis)." },
      { q: "Mise en situation : vous parfumez un récipient vide à la fumée de mastic ; la fumée se dissipe, puis vous y versez de l'eau qui prend l'odeur du parfum. Selon al-Dardīr ?",
        choix: ["Il faut attendre trois jours", "L'eau reste purifiante : c'est un changement par voisinage", "L'eau devient impure", "L'eau est pure non purifiante"],
        bonne: 1,
        explication: "Al-Dardīr : « لَا إنْ لَمْ يَبْقَ فَلَا يَضُرُّ تَغَيُّرُ رِيحِهِ لِأَنَّهُ مِنْ بَابِ التَّغَيُّرِ بِالْمُجَاوِرِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "58-61" },
    alertes: [
      "Mawāhib, p. 58 : « وَلَا يَرْتَفِعُ شَيْءٌ مِنْ ذَلِكَ إلَّا بِالْمَاءِ الْمُتَغَيِّرِ » ; le sens et la suite (« وَلَا يَرْفَعُ الْحَدَثَ وَلَا حُكْمَ الْخُبْثِ ») imposent de lire « لَا بِالْمَاءِ الْمُتَغَيِّرِ ». Faute probable d'édition ou de saisie.",
      "Mawāhib, p. 59 : la phrase « وَكَالْمَاءِ الْمُتَغَيِّرِ طَاهِرًا أَوْ نَجِسًا وَذَلِكَ كَالدُّهْنِ الَّذِي يُخَالَطُ بِبُخَارِ الْمُصْطَكَى » paraît altérée ; la fiche s'appuie sur la suite du commentaire, claire, pour la vapeur de mastic.",
      "Al-Sharḥ al-kabīr, p. 37 : « تَحْقِيقًا أَوْ ظَنًّا وَلَمْ يَكُنْ بَيِّنًا » ; le contexte (le matn suivant réserve le « changement net » à certains cas, et al-Dasūqī précise que le changement nuit « net ou non ») indique la lecture « وَلَوْ لَمْ يَكُنْ بَيِّنًا » (même s'il n'est pas net).",
      "Sigles d'al-Dasūqī conservés tels qu'imprimés : « ح » (al-Ḥaṭṭāb), « عبق ».",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 37–38 (Shamela 21604, pages 36–37)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-16",
    kitab: "tah", bab: "01", fasl: "01", ordre: 16,
    titre: "Changement net dû à la corde ou au seau du puits",
    titre_ar: "التَّغَيُّرُ البَيِّنُ بِحَبْلِ السَّانِيَةِ",
    objectif: "Savoir quand l'eau d'un puits, changée par la corde ou le récipient qui sert à la puiser, perd son pouvoir purifiant.",
    matn: "وَيَضُرُّ بَيِّنُ تَغَيُّرٍ بِحَبْلِ سَانِيَةٍ",
    regle_pratique: "L'eau changée par la corde, le seau ou le récipient qui servent à la puiser reste purifiante, sauf si le changement est net, c'est-à-dire grossier (par exemple après un long séjour de la corde dans l'eau) ; un récipient fait d'une matière de la terre (fer, cuivre, poterie) ne nuit jamais, même si le changement est net.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Jusqu'ici, Khalīl a posé que tout changement par une chose séparable fait perdre le pouvoir purifiant. Il signale ici une exception : pour la corde de la sâniya (سَانِيَة), seul un changement net (بَيِّن) nuit. Al-Ḥaṭṭāb définit la sâniya comme « la corde sur laquelle on puise » ; al-Dardīr la glose par « سَاقِيَة » (roue à eau).\n\nLa source de Khalīl est une réponse d'Ibn Rushd : l'eau puisée avec un seau neuf ne doit pas être évitée pour la purification, sauf si l'eau reste longtemps dans le seau, ou la corde dans l'eau, au point qu'elle change de façon nette et grossière (فَاحِش).\n\nIbn Ghāzī remarque que la réponse d'Ibn Rushd porte sur toute corde de puisage, et qu'Ibn ʿArafa formule la question de façon générale : la sâniya n'a donc rien de particulier, et Khalīl aurait mieux dit « par sa corde de puisage ».\n\nConclusion d'al-Ḥaṭṭāb : l'eau changée par la corde, le seau ou le récipient de puisage ne perd son pouvoir purifiant que si elle y séjourne longtemps, au point de changer de façon grossière ; et si le récipient est fait d'une matière de la terre, comme le fer, le cuivre ou la poterie, le changement ne nuit pas, même grossier. Al-Dardīr précise : il s'agit de la corde, du seau ou de tout récipient de puisage fait d'une matière qui n'est pas de la terre, comme les feuilles de palmier ou l'alfa.",
    aqwal: [
      { auteur: "Ibn Zarqūn (rapporté par Ibn ʿArafa)", avis: "L'eau changée par sa corde de puisage reste purifiante.", statut: "non_precise" },
      { auteur: "Ibn al-Ḥājj (rapporté par Ibn ʿArafa ; Mawāhib imprime « Ibn al-Ḥājib », voir les alertes)", avis: "Elle ne l'est plus.", statut: "non_precise" },
      { auteur: "Ibn Rushd, fatwa sur la corde et le seau (rapporté par Ibn ʿArafa)", avis: "Elle reste purifiante si le changement n'est pas grossier.", statut: "non_precise" },
      { auteur: "Certains imams de l'école, d'après Ibn Farḥūn", avis: "On distingue : la corde de la sâniya ne nuit pas (avis qu'ils disent juste), car elle plonge tout entière dans l'eau ; la corde du puits nuit, car on peut s'en préserver en attachant au seau un bout de vieille corde.", statut: "non_precise" },
      { auteur: "Avis rapporté sans attribution (fatwa citée par Ibn Farḥūn)", avis: "Les deux cordes sont également interdites.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le changement net par la corde, le seau ou tout récipient de puisage fait d'une matière autre que la terre nuit ; s'il est fait d'une matière de la terre, il ne nuit pas, même net. Al-Dasūqī : le « net » est le changement abondant et grossier, comme dans l'expression d'Ibn Rushd, apprécié selon l'usage (العُرْف) ; un changement léger ne nuit pas ; ni la corde ni la sâniya n'ont de valeur restrictive ; mais l'outil doit être réservé à ce puits : une corde qui sert d'ordinaire à un autre puits nuit, que le changement soit net ou non.",
    tarjih_hattab: "Al-Ḥaṭṭāb rejette la distinction rapportée par Ibn Farḥūn entre corde de sâniya et corde de puits : elle contredit la fatwa d'Ibn Rushd, même si elle s'accorde avec la lettre de Khalīl, et elle impose « gêne et contrainte ». Pour l'outre dont l'eau change à cause de son tannage, il estime qu'il faut distinguer le changement net du reste, comme pour le seau, car les deux relèvent de la nécessité de puiser.",
    tanbihat: [
      "Ibn Farḥūn précise que la distinction vise la sâniya qui tourne avec des godets (قَوَادِيس) ; pour celle que des bêtes font aller et venir, on peut aussi se préserver en attachant une corde au bout de la corde neuve.",
      "Zarrūq rapporte d'Abū l-Ḥasan ash-Shabībī que l'eau de l'outre ou du puits changée par ce qui l'entretient (tannage, tamaris…) est purifiante, une autre eau étant meilleure, et ajoute que la lettre d'Ibn Rushd la dit non purifiante. Al-Ḥaṭṭāb juge cette attribution à Ibn Rushd « étrange », contraire à ce qui suit sur le puits du désert (fiche 17b)."
    ],
    divergences: [
      "Divergence — outil de puisage qui n'est pas réservé au puits. Al-Dasūqī : l'outil qui a changé l'eau doit être réservé à ce puits ; sinon, le changement nuit même s'il n'est pas net, « contre l'apparente généralité de Khalīl » (« لَا بُدَّ أَنْ يَكُونَ مَا يُخْرَجُ بِهِ الْمَاءُ الَّذِي حَصَلَ التَّغَيُّرُ بِسَبَبِهِ مُعَدًّا لِتِلْكَ الْبِئْرِ بِعَيْنِهَا … فَإِنَّهُ يَضُرُّ التَّغَيُّرُ بِهِ سَوَاءٌ كَانَ بَيِّنًا أَمْ لَا خِلَافًا لِظَاهِرِ إطْلَاقِ الْمُصَنِّفِ »). Al-Ḥaṭṭāb ne pose pas cette condition dans ce passage.",
      "Concordance — les trois avis rapportés par Ibn ʿArafa (Ibn Zarqūn : purifiante ; Ibn al-Ḥājj : non purifiante ; Ibn Rushd : distinction entre changement grossier ou non) sont repris par al-Dasūqī d'après « بن » (al-Bunānī) dans les mêmes termes (« قِيلَ: إنَّهُ طَهُورٌ وَهُوَ لِابْنِ زَرْقُونٍ وَقِيلَ لَيْسَ بِطَهُورٍ وَهُوَ لِابْنِ الْحَاجِّ وَالثَّالِثُ لِابْنِ رُشْدٍ التَّفْصِيلُ بَيْنَ التَّغَيُّرِ الْفَاحِشِ وَغَيْرِهِ »)."
    ],
    exemple: "Dans une ferme, l'eau d'un puits prend un léger goût de la corde en fibres de palmier qui sert à puiser : elle reste purifiante. Si la corde a trempé longtemps et que l'eau a pris une couleur et un goût marqués, on ne fait pas ses ablutions avec.",
    erreurs_frequentes: [
      "Étendre cette tolérance à tout changement : elle ne vaut que pour ce qui sert à puiser.",
      "Croire que seule la corde de la sâniya est visée : le seau et tout récipient de puisage le sont aussi.",
      "Penser qu'un seau en fer ou en terre cuite peut faire perdre le pouvoir purifiant : ce qui vient de la terre ne nuit pas, même si le changement est net."
    ],
    termes: [
      { ar: "سَانِيَة", translit: "sâniya", def: "Dispositif pour tirer l'eau d'un puits. Al-Ḥaṭṭāb : « la corde sur laquelle on puise » ; al-Dardīr : « سَاقِيَة » (roue à eau) ; Ibn Farḥūn en distingue deux sortes : celle qui tourne avec des godets et celle que des bêtes font aller et venir." },
      { ar: "بَيِّن", translit: "bayyin", def: "Net, apparent. Pour le changement de l'eau, selon al-Dasūqī : abondant et grossier." },
      { ar: "فَاحِش", translit: "fâhich", def: "Grossier, excessif (se dit d'un changement très marqué)." },
      { ar: "عُرْف", translit: "ʿourf", def: "L'usage reconnu des gens, qui sert à apprécier une notion que le texte ne mesure pas." }
    ],
    quiz: [
      { q: "Quel changement dû à la corde de puisage fait perdre le pouvoir purifiant ?",
        choix: ["Seulement un changement d'odeur", "Le moindre changement", "Aucun changement", "Un changement net et grossier"],
        bonne: 3,
        explication: "Ibn Rushd : « حَتَّى يَتَغَيَّرَ مِنْ ذَلِكَ تَغَيُّرًا بَيِّنًا فَاحِشًا »." },
      { q: "Quelle est la source de cette règle selon al-Ḥaṭṭāb ?",
        choix: ["Un avis d'Ibn al-Mājishūn", "Une réponse d'Ibn Rushd", "La Risāla", "Un hadith"],
        bonne: 1,
        explication: "« وَأَشَارَ الْمُصَنِّفُ بِمَا ذَكَرَهُ إلَى قَوْلِ ابْنِ رُشْدٍ »." },
      { q: "Que dit al-Ḥaṭṭāb de la distinction entre corde de sâniya et corde de puits ?",
        choix: ["Il ne la mentionne pas", "Il l'approuve", "Elle contredit Ibn Rushd et impose une gêne", "C'est le mashhūr"],
        bonne: 2,
        explication: "« وَهَذَا مُخَالِفٌ لِمَا أَفْتَى بِهِ ابْنُ رُشْدٍ … وَفِيهِ تَضْيِيقٌ وَحَرَجٌ »." },
      { q: "Mise en situation : l'eau puisée avec un seau en cuivre a nettement pris le goût du métal. Selon al-Dardīr ?",
        choix: ["Elle n'est plus purifiante", "Elle reste purifiante : le cuivre vient de la terre", "Elle devient impure", "Elle ne sert qu'à laver une souillure"],
        bonne: 1,
        explication: "Al-Dardīr : « فَإِنْ كَانَ مِنْ أَجْزَائِهَا فَلَا يَضُرُّ التَّغَيُّرُ بِهِ وَلَوْ بَيِّنًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "61-62" },
    alertes: [
      "Définition de « سَانِيَة » : al-Ḥaṭṭāb écrit « الْحَبْلُ الَّذِي يُسْتَقَى عَلَيْهِ » (la corde), al-Dardīr « سَاقِيَة », et Ibn Farḥūn parle d'une sâniya « qui tourne avec des godets ». La fiche retient que le mot désigne le dispositif de puisage et sa corde.",
      "Corrigé (campagne de correction) : Mawāhib imprime « وَالثَّانِي لِابْنِ الْحَاجِبِ » dans la citation d'Ibn ʿArafa. Le Mukhtaṣar d'Ibn ʿArafa lui-même (Shamela 16968, p. 10 : « لابن زرقون وابن الحاج »), Ibn Ghāzī (Shifāʾ al-Ghalīl, Shamela 14605, p. 16 : « والثاني لابن الحاج ») et al-Dasūqī (d'après « بن ») portent « ابْنُ الْحَاجِّ ». La fiche suit ces trois témoins.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 38–39 (Shamela 21604, pages 37–38)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-17a",
    kitab: "tah", bab: "01", fasl: "01", ordre: 17,
    titre: "La mare changée par les déjections du bétail",
    titre_ar: "الغَدِيرُ يَتَغَيَّرُ بِرَوْثِ المَاشِيَةِ",
    objectif: "Savoir si l'eau d'une mare changée par les déjections des bêtes qui viennent y boire reste purifiante.",
    matn: "كَغَدِيرٍ بِرَوْثِ مَاشِيَةٍ أَوْ بِئْرٍ بِوَرِقِ شَجَرٍ أَوْ تِبْنٍ وَالْأَظْهَرُ فِي بِئْرِ الْبَادِيَةِ بِهِمَا الْجَوَازُ",
    regle_pratique: "L'eau d'une mare dont la couleur ou le goût a changé à cause du crottin et de l'urine des bêtes qui viennent y boire ne purifie plus, que le changement soit net ou non : on ne fait pas ses ablutions avec.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Selon l'avis connu rapporté par al-Lakhmī : on fait le tayammum si l'on n'a pas d'autre eau ; celui qui a fait ses ablutions avec recommence, même après la fin du temps (« وَإِنْ تَوَضَّأَ بِهِ أَعَادَ وَإِنْ ذَهَبَ الْوَقْتُ »)."
    },
    explication: "Ce segment du matn porte deux règles distinctes : la mare (cette fiche) et le puits (fiche 17b).\n\nLa lettre de Khalīl laisse penser que, comme pour la corde de puisage, seul un changement net nuit ici. Ibn Ghāzī estime que la comparaison porte seulement sur le fait du changement, non sur son caractère net : les sources ne rapportent pas ici de distinction entre net et non net.\n\nPour la mare (غَدِير) où les bêtes urinent et laissent leur crottin jusqu'à en changer la couleur et le goût, al-Lakhmī et d'autres rapportent deux transmissions de Mālik. La première : elle perd son pouvoir purifiant ; al-Lakhmī la dit « connue dans l'école », et Khalīl l'accepte dans at-Tawḍīḥ. La seconde, dans al-Majmūʿa : « cela ne me plaît pas qu'on fasse ses ablutions avec, sans que je l'interdise » ; al-Lakhmī la comprend ainsi : l'eau reste purifiante, et la délaisser est une simple préférence.\n\nL'auteur d'aṭ-Ṭirāz et al-Bājī comprennent autrement l'hésitation de Mālik : il ne savait pas si l'eau pouvait être préservée de ces déjections, c'est-à-dire si elle en est d'ordinaire inséparable.\n\nConclusion d'al-Ḥaṭṭāb : l'avis connu, pour la mare, est la perte du pouvoir purifiant, que le changement soit net ou non.",
    aqwal: [
      { auteur: "Mālik, première transmission (rapportée par al-Lakhmī)", avis: "L'eau perd son pouvoir purifiant : tayammum si l'on n'a rien d'autre ; celui qui a fait ses ablutions avec recommence, même après le temps. Al-Lakhmī la dit « l'avis connu de l'école ».", statut: "non_precise" },
      { auteur: "Mālik, al-Majmūʿa (transmission d'Ibn Ghānim selon Ibn ʿArafa)", avis: "« Cela ne me plaît pas qu'on fasse ses ablutions avec, sans que je l'interdise. »", statut: "non_precise" },
      { auteur: "Al-Lakhmī (lecture de la seconde transmission)", avis: "L'eau reste purifiante ; la prière est valide, et l'on aime qu'elle soit refaite tant que le temps n'est pas sorti ; à défaut d'autre eau, on fait les ablutions avec, puis le tayammum.", statut: "non_precise" },
      { auteur: "L'auteur d'aṭ-Ṭirāz ; al-Bājī (al-Muntaqā)", avis: "Mālik hésitait seulement parce qu'on ignorait si l'eau peut être préservée de ces déjections ; al-Bājī : c'est une chose dont l'eau n'est d'ordinaire pas séparée et dont on ne peut la protéger.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : le changement d'une mare par le crottin et l'urine des bêtes qui viennent y boire nuit, même s'il n'est pas net ; la comparaison de Khalīl porte sur le seul fait du changement. Al-Dasūqī : c'est la transmission connue selon al-Lakhmī ; le « bétail » n'est pas restrictif, les chevaux, mulets et ânes étant pareils.",
    tarjih_hattab: "Al-Ḥaṭṭāb retient que l'avis connu est la perte du pouvoir purifiant, que le changement soit net ou non. Il reproche à Ibn ʿArafa d'avoir résumé al-Lakhmī et Ibn Rushd d'une façon qui laisse croire qu'ils mettaient les deux avis sur le même plan : « vois le défaut du résumé ».",
    tanbihat: [
      "Al-Lakhmī fonde la seconde transmission sur son principe : une eau abondante changée par un peu de chose pure ferait l'objet de deux avis (voir fiche 15). L'auteur d'aṭ-Ṭirāz a rejeté ce fondement.",
      "Ibn ʿArafa résume : Ibn Ghānim a transmis, pour l'eau changée en couleur et en goût par l'urine et le crottin du bétail qui vient y boire : « cela ne me plaît pas » ; al-Bājī explique : parce que les bêtes n'en sont d'ordinaire pas séparées ; al-Lakhmī : parce que c'est une eau abondante changée par un peu de chose pure."
    ],
    divergences: [
      "Divergence de lecture — la seconde transmission de Mālik. Al-Ḥaṭṭāb (d'après Ibn ʿArafa) la cite comme une simple réserve : « cela ne me plaît pas, sans que je l'interdise » (« لَا يُعْجِبُنِي الْوُضُوءُ بِهِ وَلَا أُحَرِّمُهُ »), comprise par al-Lakhmī comme une préférence. Al-Dasūqī : la première transmission (le changement nuit dans tous les cas) est « la connue des deux selon al-Lakhmī » ; « l'autre restreint le dommage au changement net », et certains commentateurs y ont rattaché la lettre de Khalīl (« هُوَ الْمَعْرُوفُ مِنْ الرِّوَايَتَيْنِ عِنْدَ اللَّخْمِيِّ وَالرِّوَايَةُ الْأُخْرَى تَقْيِيدُ الضَّرَرِ بِكَوْنِ التَّغَيُّرِ بَيِّنًا، وَقَدْ حَمَلَ بَعْضُ الشُّرَّاحِ كَلَامَ الْمُصَنِّفِ عَلَيْهَا »). Al-Ḥaṭṭāb ne rapporte pas d'avis distinguant net et non net."
    ],
    exemple: "En randonnée, vous trouvez une mare où boivent des moutons ; l'eau a pris une teinte brune et un goût de crottin. Vous ne faites pas vos ablutions avec ; si vous n'avez pas d'autre eau, vous faites le tayammum.",
    erreurs_frequentes: [
      "Croire, d'après la lettre de Khalīl, que seul un changement net de la mare nuit.",
      "Croire que la réserve de Mālik (« cela ne me plaît pas ») rend l'eau simplement déconseillée : l'avis connu est qu'elle ne purifie plus.",
      "Penser que seuls les moutons et les bovins sont visés : selon al-Dasūqī, chevaux, mulets et ânes sont pareils."
    ],
    termes: [
      { ar: "غَدِير", translit: "ghadîr", def: "Mare : eau que le torrent laisse derrière lui." },
      { ar: "رَوْث", translit: "rawth", def: "Crottin, déjections solides des bêtes." },
      { ar: "مَاشِيَة", translit: "mâchiya", def: "Bétail. Selon al-Dasūqī, le mot n'est pas restrictif ici : chevaux, mulets et ânes sont pareils." }
    ],
    quiz: [
      { q: "Une mare est légèrement changée par le crottin du bétail. Selon l'avis retenu ?",
        choix: ["Elle est obligatoire pour les ablutions", "Elle reste purifiante, car le changement est léger", "Elle devient impure", "Elle ne purifie plus, même si le changement n'est pas net"],
        bonne: 3,
        explication: "Al-Dardīr : « (كَ) تَغَيُّرِ (غَدِيرٍ) وَلَوْ غَيْرَ بَيِّنٍ »." },
      { q: "Qu'a dit Mālik dans al-Majmūʿa ?",
        choix: ["« C'est recommandé »", "« C'est interdit »", "« Cela ne me plaît pas qu'on fasse ses ablutions avec, sans que je l'interdise »", "« C'est impur »"],
        bonne: 2,
        explication: "« مَا يُعْجِبُنِي أَنْ يَتَوَضَّأَ بِهِ مِنْ غَيْرِ أَنْ أُحَرِّمَهُ »." },
      { q: "Comment l'auteur d'aṭ-Ṭirāz explique-t-il l'hésitation de Mālik ?",
        choix: ["Par la saison", "Par la quantité d'eau", "Par la couleur des bêtes", "Par le doute sur la possibilité de préserver l'eau de ces déjections"],
        bonne: 3,
        explication: "« وَإِنَّمَا تَرَدَّدَ فِيهِ مَالِكٌ لِاشْتِبَاهِ أَمْرِهِ هَلْ يُمْكِنُ الِاحْتِرَازُ مِنْهُ أَمْ لَا »." },
      { q: "Mise en situation : vous avez prié après des ablutions faites avec l'eau d'une mare changée par le crottin, et le temps de la prière est passé. Selon l'avis connu rapporté par al-Lakhmī ?",
        choix: ["Rien à refaire", "Vous recommencez, même après le temps", "Vous faites une prosternation de l'oubli", "Vous refaites seulement les ablutions, sans la prière"],
        bonne: 1,
        explication: "Al-Lakhmī : « وَإِنْ تَوَضَّأَ بِهِ أَعَادَ وَإِنْ ذَهَبَ الْوَقْتُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "62" },
    alertes: [
      "Corrigé (campagne de correction) : Mawāhib, p. 62, imprime dans la citation d'Ibn ʿArafa « بِبَوْلِ مَاشِيَةٍ تَرَدُّدٌ وَرَوْثِهَا » ; le Mukhtaṣar d'Ibn ʿArafa (Shamela 16968, p. 11) a « ببول ماشية ترده وروثها ». Il faut lire « تَرِدُهُ » (« qui viennent y boire »).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 39 (Shamela 21604, page 38)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-17b",
    kitab: "tah", bab: "01", fasl: "01", ordre: 17,
    titre: "Le puits changé par des feuilles ou de la paille",
    titre_ar: "البِئْرُ تَتَغَيَّرُ بِوَرَقِ الشَّجَرِ أَوِ التِّبْنِ",
    objectif: "Savoir si l'eau d'un puits changée par les feuilles ou la paille que le vent y apporte reste purifiante.",
    matn: "كَغَدِيرٍ بِرَوْثِ مَاشِيَةٍ أَوْ بِئْرٍ بِوَرِقِ شَجَرٍ أَوْ تِبْنٍ وَالْأَظْهَرُ فِي بِئْرِ الْبَادِيَةِ بِهِمَا الْجَوَازُ",
    regle_pratique: "L'eau d'un puits (ou d'une mare) changée par les feuilles d'arbres ou la paille que le vent y jette reste purifiante quand il est difficile de l'en préserver, comme dans un puits du désert ; mais si l'on peut couvrir le bassin et qu'on ne le fait pas, le changement nuit (al-Dasūqī).",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl cite deux avis. Le premier, placé en tête : le changement du puits par les feuilles ou la paille nuit ; selon la lettre du texte, seulement s'il est net. Le second, qu'il rattache à Ibn Rushd par le mot الأَظْهَر (al-azhar ; voir Module 0) : dans un puits du désert (البَادِيَة), ce changement ne nuit pas, net ou non ; a contrario, il nuirait dans un puits de ville.\n\nIbn Rushd, dans ses Nawāzil, a été interrogé sur les puits du désert qu'on doit cuveler avec du bois faute d'autre matériau, et dont l'eau change de couleur, d'odeur et de goût : il a répondu que les ablutions et le ghousl avec cette eau sont permis. Interrogé de nouveau en 515 sur sa preuve, il a comparé ce changement à celui que causent les choses dont l'eau est inséparable (mousse, vase). Il juge l'avis contraire, sur les feuilles tombées dans les oueds et les mares, « une singularité (شُذُوذ) hors du principe de l'école de Mālik sur les eaux ».\n\nAl-Ḥaṭṭāb relève quatre voies de transmission : (1) al-Bājī et Ibn Rushd, suivis par Khalīl dans at-Tawḍīḥ : deux avis, la perte du pouvoir purifiant (al-Ibyānī) et son maintien (les maîtres irakiens selon al-Bājī ; le choix d'Ibn Rushd) ; (2) al-Lakhmī : deux avis, l'avis connu étant la perte du pouvoir purifiant, l'autre la simple réserve ; (3) l'auteur d'aṭ-Ṭirāz et Ibn ʿArafa : trois avis (les Irakiens, al-Ibyānī, et celui d'as-Sulaymāniyya) ; (4) Ibn Marzūq, d'après Ibn al-ʿArabī : la feuille d'un arbre qui pousse au-dessus de l'eau ne nuit pas, par accord.\n\nLe désert n'est cité que parce que c'est le cas le plus fréquent : ce qui compte est la difficulté de s'en préserver, comme l'indiquent Ibn Rushd, Ibn ʿArafa et d'autres. Az-Zuhrī le confirme : si l'arbre laisse tomber ses feuilles sans cesse, l'eau est rattachée à l'eau absolue ; si elles tombent par moments, elle est rattachée à l'eau mêlée.",
    aqwal: [
      { auteur: "Abū l-ʿAbbās al-Ibyānī", avis: "On ne fait pas ses ablutions avec cette eau. Al-Ḥaṭṭāb : avis « extrêmement singulier », comme l'a dit Ibn Rushd.", statut: "shadh" },
      { auteur: "Les maîtres irakiens (d'après al-Bājī et aṭ-Ṭirāz) ; choix d'Ibn Rushd", avis: "L'eau reste purifiante : elle n'est d'ordinaire pas séparée de ces choses, on ne peut l'en protéger, et il serait pénible de s'en priver.", statut: "non_precise" },
      { auteur: "As-Sulaymāniyya (rapportée par al-Lakhmī)", avis: "Pour un puits où tombent des palmes, des feuilles d'olivier ou de la paille et dont la couleur change : on ne fait pas ses ablutions avec ; celui qui l'a fait et a prié recommence tant que le temps n'est pas sorti.", statut: "non_precise" },
      { auteur: "Mālik, d'après l'auteur d'aṭ-Ṭirāz", avis: "Il jugeait cette eau déconseillée s'il en trouvait une autre.", statut: "non_precise" },
      { auteur: "Ibn al-ʿArabī, d'après Ibn Marzūq (qui le tient de « certains »)", avis: "Les savants s'accordent : les ablutions sont permises avec l'eau changée par les feuilles d'un arbre qui pousse au-dessus.", statut: "non_precise" },
      { auteur: "Az-Zuhrī (Qawāʿid)", avis: "Chute constante des feuilles : l'eau est rattachée à l'eau absolue ; chute intermittente : à l'eau mêlée. Il dit chacun de ces deux avis mashhūr dans son cas.", statut: "mashhur" }
    ],
    muatamad: "Confirmé par al-Dardīr : le choix d'Ibn Rushd parmi les deux avis de Mālik — le maintien du pouvoir purifiant de l'eau de puits changée par les feuilles ou la paille, à cause de la difficulté de s'en préserver — « est l'avis retenu » (« وَهُوَ الْمُعْتَمَدُ ») ; ni le puits ni le désert ne sont restrictifs : les mares sont pareilles, et le critère est la difficulté de s'en préserver et la fréquence des chutes. Al-Dasūqī : Khalīl aurait donc dû s'en tenir à cet avis ou le placer en tête ; en ville, l'eau des bassins d'ablutions qu'on ne peut couvrir ne pâtit pas de ce changement, mais si l'on peut la couvrir et qu'on ne le fait pas, le changement nuit.",
    tarjih_hattab: "Al-Ḥaṭṭāb juge plus fort le maintien du pouvoir purifiant : c'est l'avis des maîtres irakiens, placé en tête par l'auteur d'aṭ-Ṭirāz et Ibn ʿArafa, le seul cité dans adh-Dhakhīra, et le choix d'Ibn Rushd ; Khalīl aurait dû s'en tenir à lui. L'avis que Khalīl a placé en tête est celui d'al-Ibyānī, « extrêmement singulier » ; Khalīl l'a sans doute avancé en s'appuyant sur al-Lakhmī, dont le fondement est faible. La mention du « désert » n'a pas de valeur restrictive. Pour les racines d'un arbre poussant au fond de l'eau, il estime que le changement ne nuit pas, car il est difficile de s'en préserver.",
    tanbihat: [
      "Al-Ḥaṭṭāb n'a trouvé personne qui distingue, pour le puits, le changement net du changement non net ; peut-être Khalīl l'a-t-il trouvé. Al-Lakhmī lui-même ne fait pas cette distinction.",
      "Ibn Ghāzī : la fin de la réponse d'Ibn Rushd montre que sa fatwa ne se limite pas au bois de cuvelage ; Khalīl a donc raison de parler en général des feuilles et de la paille.",
      "Farʿ — racines d'un arbre au fond de l'eau : Yūsuf ibn ʿUmar rapporte, d'après les Nawāzil d'Ibn Rushd, que le changement ne nuit pas ; al-Ḥaṭṭāb ne l'a pas trouvé dans les Nawāzil. Az-Zuhrī : si l'arbre est fruitier, il y a deux avis ; s'il est sec, l'eau est mêlée.",
      "Le commentateur (« الشَّارِحُ », non nommé dans le passage) s'est appuyé sur al-Lakhmī pour dire que l'avis connu est que ce changement nuit ; al-Ḥaṭṭāb pense qu'il voulait dire « c'est pourquoi Khalīl l'a placé en tête »."
    ],
    divergences: [],
    exemple: "Le bassin d'ablutions d'une petite mosquée de campagne, à ciel ouvert sous un grand arbre, prend la couleur des feuilles qui y tombent sans cesse : l'eau reste purifiante. Si le bassin pouvait facilement être couvert et qu'on l'a laissé ouvert, al-Dasūqī dit que le changement nuit.",
    erreurs_frequentes: [
      "Prendre le premier avis cité par Khalīl pour l'avis retenu : c'est celui d'al-Ibyānī, jugé singulier.",
      "Limiter la tolérance aux puits du désert : le critère est la difficulté de se préserver des chutes.",
      "Oublier la réserve d'al-Dasūqī : un bassin qu'on peut couvrir et qu'on laisse ouvert n'en bénéficie pas."
    ],
    termes: [
      { ar: "تِبْن", translit: "tibn", def: "Paille." },
      { ar: "البَادِيَة", translit: "al-bâdiya", def: "Le désert, la campagne des nomades, par opposition à la ville (الحَاضِرَة)." },
      { ar: "الأَظْهَر", translit: "al-azhar", def: "Forme nominale : choix d'Ibn Rushd parmi des avis déjà transmis (voir Module 0)." },
      { ar: "نَوَازِل", translit: "nawâzil", def: "Recueil de fatwas sur des cas réels soumis à un savant (ici, celles d'Ibn Rushd)." },
      { ar: "شُذُوذ", translit: "choudhoûdh", def: "Singularité : avis isolé qui s'écarte des principes de l'école." }
    ],
    quiz: [
      { q: "Quel avis Khalīl place-t-il en tête pour le puits changé par les feuilles ?",
        choix: ["Celui des maîtres irakiens", "Celui d'Ibn al-ʿArabī", "Celui d'al-Ibyānī : le changement nuit", "Celui d'az-Zuhrī"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « فَإِنَّ الْقَوْلَ الَّذِي قَدَّمَهُ هُوَ قَوْلُ الْإِبْيَانِيِّ »." },
      { q: "À qui renvoie le mot « الأَظْهَرُ » dans ce matn ?",
        choix: ["À Ibn Rushd", "À al-Lakhmī", "À Ibn Yūnus", "À Saḥnūn"],
        bonne: 0,
        explication: "Al-Dardīr : « (وَالْأَظْهَرُ) عِنْدَ ابْنِ رُشْدٍ مِنْ قَوْلَيْ مَالِكٍ »." },
      { q: "Selon al-Ḥaṭṭāb, la mention du « désert » est-elle restrictive ?",
        choix: ["Oui : en ville, l'eau ne purifie jamais", "Non : le critère est la difficulté de s'en préserver", "Oui, seulement pour les nomades", "Il ne se prononce pas"],
        bonne: 1,
        explication: "« وَأَنَّ الْمُعْتَبَرَ فِي ذَلِكَ مَا يُعْسَرُ الِاحْتِرَازُ مِنْهُ »." },
      { q: "Comment Ibn Rushd qualifie-t-il l'avis qui interdit l'eau changée par les feuilles tombées dans les oueds ?",
        choix: ["Avis prudent", "Mashhūr", "Singularité hors du principe de l'école de Mālik", "Avis d'Ibn al-Qāsim"],
        bonne: 2,
        explication: "« وَهَذَا مِنْ الشُّذُوذِ الْخَارِجِ عَنْ أَصْلِ مَذْهَبِ مَالِكٍ فِي الْمِيَاهِ »." },
      { q: "Mise en situation : le bassin d'ablutions d'une mosquée de ville pourrait facilement être couvert, mais on le laisse ouvert et des feuilles en changent l'eau. Selon al-Dasūqī ?",
        choix: ["Le changement nuit", "Le changement ne nuit jamais", "L'eau devient recommandée", "L'eau devient impure"],
        bonne: 0,
        explication: "Al-Dasūqī : « وَأَمَّا لَوْ أَمْكَنَ تَغْطِيَتُهُ مِمَّا ذُكِرَ وَلَمْ يُغَطَّ فَإِنَّهُ يَضُرُّ تَغَيُّرُهُ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "62-64" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 39 (Shamela 21604, page 38)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-18",
    kitab: "tah", bab: "01", fasl: "01", ordre: 18,
    titre: "Le mélange de même aspect que l'eau : question ouverte (nazar)",
    titre_ar: "المُخَالِطُ المُوَافِقُ لِأَوْصَافِ المَاءِ",
    objectif: "Savoir traiter une eau mêlée à une chose qui a la même couleur, le même goût et la même odeur qu'elle.",
    matn: "وَفِي جَعْلِ الْمُخَالِطِ الْمُوَافِقِ كَالْمُخَالِفِ نَظَرٌ",
    regle_pratique: "Quand une chose de même couleur, goût et odeur que l'eau s'y mêle sans la changer, Khalīl laisse la question ouverte : si l'on pense qu'elle aurait changé l'eau en ayant ses propres qualités, al-Dardīr juge plus fort que l'eau reste purifiante (sauf si cette chose est majoritaire), mais al-Dasūqī rapporte que son maître al-ʿAdawī penchait pour le contraire ; sinon, l'eau reste purifiante.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Le cas : une chose étrangère, dont l'eau est d'ordinaire séparée, s'y mêle ; mais elle a les mêmes trois qualités que l'eau (couleur, goût, odeur), si bien que l'eau ne change pas. Exemples d'al-Dardīr : l'eau de fleurs dont le parfum s'est éventé, l'urine dont l'odeur a disparu. Faut-il la traiter comme une chose différente de l'eau (مُخَالِف), et dire que l'eau perd son pouvoir purifiant, puisque les qualités présentes sont désormais celles de l'eau et du mélange, ou au moins qu'on en doute ? Ou bien non, puisque l'eau garde les qualités de sa création ? Khalīl répond : « نَظَرٌ » (nazar), question à examiner.\n\nKhalīl dit « traiter comme » (جَعْل) plutôt que « supposer » (تَقْدِير), le mot d'Ibn al-Ḥājib, pour montrer que la question porte sur le principe même de la supposition (la fait-on ou non ?) et non sur sa manière.\n\nDans at-Tawḍīḥ, Khalīl dit qu'il n'y a pas de texte sur cette question ; Ibn ʿAṭāʾ Allāh dit de même n'avoir rien trouvé, et propose : si l'on trouve une autre eau, on n'utilise pas celle-ci ; sinon, on fait les ablutions avec, puis le tayammum. Sanad a hésité pour celui qui complète une eau insuffisante avec de l'eau de zarjoûn (الزَّرْجُون) qui ne la change pas, et penche pour qu'on ne se purifie pas avec. Ibn ʿAbd as-Salām pose au contraire que la règle est de s'en tenir à la persistance des qualités de l'eau, tant qu'on n'est pas certain, ou qu'on ne pense pas, qu'elles ont disparu.\n\nIbn Rāshid range parmi les cas de cette question l'urine dont l'odeur a disparu au point d'être comme de l'eau ; Ibn Farḥūn juge cela problématique.",
    aqwal: [
      { auteur: "Ibn ʿAṭāʾ Allāh", avis: "Si l'on a une autre eau, on n'utilise pas celle-ci ; sinon, ablutions avec elle, puis tayammum.", statut: "non_precise" },
      { auteur: "Sanad", avis: "Celui qui mêle de l'eau de zarjoûn à une eau insuffisante ne se purifie pas avec, car il se purifierait en partie avec autre chose que de l'eau.", statut: "non_precise" },
      { auteur: "Ibn ʿAbd as-Salām", avis: "On s'en tient à la persistance des qualités de l'eau ; on ne suppose pas différentes des qualités semblables, faute de critère fiable, et la Loi indulgente demande d'écarter cela.", statut: "non_precise" },
      { auteur: "Abū ʿAlī Nāṣir ad-Dīn (rapporté par Ibn Farḥūn)", avis: "Si la chose mêlée est impure, l'eau est impure dans tous les cas.", statut: "non_precise" },
      { auteur: "Ibn al-ʿArabī (al-Masālik)", avis: "L'eau purifiante mêlée d'un liquide qui ne diffère ni par la couleur, ni par le goût, ni par l'odeur (sueur, sève) reste apparemment purifiante ; si la chose mêlée est majoritaire, l'eau la suit. Ibn al-Imām juge cet avis « lointain », à cause de sa généralité.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa", avis: "Supposer différent ce qui est semblable « renverse les réalités, comme supposer immobile ce qui bouge ».", statut: "non_precise" }
    ],
    muatamad: "Non tranché. Al-Dardīr : ne pas traiter la chose mêlée comme différente, et laisser l'eau purifiante, est l'avis le plus fort (« وَهُوَ الرَّاجِحُ »), tant que la chose mêlée ne domine pas ; la question ne se pose que si l'on est certain, ou que l'on pense, qu'elle aurait changé l'eau avec ses propres qualités ; en cas de doute, et à plus forte raison si l'on pense qu'elle ne l'aurait pas changée, l'eau est purifiante par accord. Al-Dasūqī corrige : mieux vaut dire « l'avis apparent » (« الظَّاهِرُ »), car il ne s'agit que de possibilités envisagées par Ibn ʿAṭāʾ Allāh, non d'avis à départager ; et il rapporte que son maître al-ʿAdawī, dans sa glose sur « عبق » (ʿAbd al-Bāqī az-Zurqānī), a jugé plus apparente la première branche (traiter la chose comme différente), à la suite de Sanad.",
    tarjih_hattab: "Al-Ḥaṭṭāb juge problématique de laisser la question ouverte quand on pense que la chose aurait changé l'eau, et propose de distinguer. (1) Si l'on doute qu'elle aurait fait perdre le pouvoir purifiant : on peut suivre la prudence d'Ibn ʿAṭāʾ Allāh, ou dire que l'eau est présumée purifiante tant qu'on ne pense pas le contraire, ce qui s'accorde avec l'avis d'Ibn al-Qāsim dans la question suivante. (2) Si l'on pense qu'elle ne l'aurait pas changée (beaucoup d'eau, peu de mélange) : mélange pur, l'eau s'utilise sans aucun doute, même si l'on a une autre eau ; mélange impur, l'eau est purifiante sans réserve si elle dépasse le récipient des ablutions et du ghousl, sinon elle est déconseillée, comme toute eau peu abondante touchée par une impureté qui ne la change pas. (3) Si l'on pense qu'elle l'aurait changée (peu d'eau, beaucoup de mélange) : mélange pur, l'eau est pure non purifiante ; mélange impur, elle est impure.",
    tanbihat: [
      "Khalīl, dans at-Tawḍīḥ, objecte à Ibn ʿAbd as-Salām qu'on peut supposer des qualités moyennes, comme le font les Shafiʿites selon l'avis le plus correct chez eux.",
      "Ibn Rāshid, cité dans at-Tawḍīḥ, relève qu'Ibn al-Ḥājib a repris d'Ibn ʿAṭāʾ Allāh l'avis de la prudence (ne pas utiliser cette eau si l'on en a une autre ; sinon ablutions puis tayammum).",
      "Al-Ḥaṭṭāb voit une allusion à son découpage chez Sanad (eau de zarjoûn), chez Ibn ʿArafa, qui tient compte de la quantité de chose mêlée, et chez Ibn al-Imām."
    ],
    divergences: [
      "Complément — doute sur l'effet de la chose mêlée. Al-Dardīr : si l'on doute qu'elle aurait changé l'eau, et à plus forte raison si l'on pense que non, l'eau est purifiante « par accord » (« فَهُوَ طَهُورٌ اتِّفَاقًا »). Al-Ḥaṭṭāb, pour le doute, propose soit la prudence d'Ibn ʿAṭāʾ Allāh (« إنْ وَجَدَ غَيْرَهُ لَمْ يَسْتَعْمِلْهُ وَإِنْ لَمْ يَجِدْ غَيْرَهُ تَوَضَّأَ وَتَيَمَّمَ »), soit la présomption de pureté.",
      "Divergence — eau de zarjoûn (chose semblable à l'eau par nature). « عبق » (ʿAbd al-Bāqī az-Zurqānī) et d'autres : son mélange ne nuit pas du tout (« فَإِنَّهُ لَا يَضُرُّ خَلْطُهُ جَزْمًا … كَذَا فِي عبق وَغَيْرِهِ »). « بن » (al-Bunānī) : « ح » (al-Ḥaṭṭāb) rapporte de Sanad que l'hésitation s'y applique aussi, et Sanad juge apparent qu'on ne s'en purifie pas, car c'est une eau mêlée (« أَنَّ ح ذَكَرَ عَنْ سَنَدٍ جَرَيَانَ التَّرَدُّدِ فِي الْمُخَالِطِ الْمُوَافِقِ بِالْأَصَالَةِ كَمَاءِ الزَّرْجُونِ قَالَ وَهُوَ الظَّاهِرُ؛ لِأَنَّهُ مَاءٌ مُضَافٌ »).",
      "Divergence — étendue de l'hésitation. « عج » (sigle non défini dans la liste d'al-Dasūqī) la limite à une petite quantité d'eau (la contenance du récipient du ghousl) ; « بن » (al-Bunānī) : elle vaut dans tous les cas (« أَنَّ الْحَقَّ أَنَّ مَحَلَّ التَّرَدُّدِ لَيْسَ مُقَيَّدًا بِالْيَسِيرِ بَلْ هُوَ جَارٍ مُطْلَقًا ») ; son maître al-ʿAdawī, dans sa glose sur « عبق », a approuvé al-Bunānī. Al-Dardīr a suivi « عج », et al-Dasūqī dit qu'il vaut mieux abandonner cette limite (« تَبِعَ فِيهِ عج، وَالْأَوْلَى إسْقَاطُهُ »).",
      "Divergence — quelle branche retenir. Al-Dardīr : ne pas traiter la chose mêlée comme différente, et laisser l'eau purifiante, « est l'avis le plus fort » (« وَعَدَمُ جَعْلِهِ كَالْمُخَالِفِ فَهُوَ بَاقٍ عَلَى طَهُورِيَّتِهِ … وَهُوَ الرَّاجِحُ »), tant que la chose mêlée ne domine pas ; il juge non fondé celui qui le dit sans réserve, comme « عبق » (al-Zurqānī). Al-Dasūqī : al-Dardīr suit en cela Ibn ʿAbd as-Salām ; son maître al-ʿAdawī, dans sa glose sur « عبق », a jugé plus apparente la première branche, à la suite de Sanad (« ثُمَّ إنَّ اخْتِيَارَ الشَّارِحِ لِلشِّقِّ الثَّانِي تَبِعَ فِيهِ ابْنَ عَبْدِ السَّلَامِ وَاسْتَظْهَرَ شَيْخُنَا فِي حَاشِيَتِهِ عَلَى عبق تَبَعًا لِسَنَدٍ الشِّقَّ الْأَوَّلَ ») ; il ajoute qu'il vaut mieux dire « l'avis apparent » que « le plus fort », car il ne s'agit que de possibilités envisagées par Ibn ʿAṭāʾ Allāh. Al-Ḥaṭṭāb, lui, propose un découpage selon la quantité (voir sa préférence)."
    ],
    exemple: "De l'eau de rose éventée, qui n'a plus ni couleur ni odeur, tombe en grande quantité dans un petit récipient d'eau, sans rien y changer. Si l'on pense que, parfumée, elle aurait changé l'eau, la question est ouverte : al-Dardīr penche pour l'eau purifiante, d'autres pour la prudence. Une goutte dans un grand bidon ne pose pas de problème : on pense qu'elle ne l'aurait pas changé.",
    erreurs_frequentes: [
      "Croire qu'une eau qui n'a pas changé ne pose jamais de question : Khalīl signale ici un cas ouvert.",
      "Appliquer l'hésitation à une goutte dans beaucoup d'eau : elle ne vaut que si l'on pense que la chose aurait changé l'eau.",
      "Prendre « نَظَرٌ » pour un avis : c'est l'indication d'une question à examiner."
    ],
    termes: [
      { ar: "نَظَر", translit: "nazar", def: "Chez Khalīl : question à examiner, sur laquelle un savant hésite (ici Ibn ʿAṭāʾ Allāh)." },
      { ar: "المُخَالِطُ المُوَافِقُ", translit: "al-moukhâlitou l-mouwâfiq", def: "Chose mêlée à l'eau qui a la même couleur, le même goût et la même odeur qu'elle." },
      { ar: "مُخَالِف", translit: "moukhâlif", def: "Différent : chose mêlée dont les qualités diffèrent de celles de l'eau." },
      { ar: "الزَّرْجُون", translit: "az-zarjoûn", def: "Selon al-Dasūqī, plante dont le jus pressé ressemble à l'eau en toutes ses qualités." },
      { ar: "تَحَيُّر", translit: "tahayyour", def: "Perplexité. Al-Dasūqī : le taraddoud d'un seul savant a ce sens." }
    ],
    quiz: [
      { q: "Que signifie « نَظَرٌ » dans ce matn ?",
        choix: ["L'avis mashhūr", "Une interdiction", "Une question ouverte, à examiner", "Une recommandation"],
        bonne: 2,
        explication: "Al-Dasūqī : « أَيْ لِابْنِ عَطَاءِ اللَّهِ … الْمُرَادُ بِهِ التَّحَيُّرُ »." },
      { q: "Selon at-Tawḍīḥ, existe-t-il un texte de l'école sur cette question ?",
        choix: ["Non, il n'y a pas de texte", "Oui, dans la Mudawwana", "Oui, chez Ibn Rushd", "Oui, chez Saḥnūn"],
        bonne: 0,
        explication: "« قَالَ فِي التَّوْضِيحِ : وَعَلَى هَذَا لَا نَصَّ فِي الْمَسْأَلَةِ »." },
      { q: "Que propose Ibn ʿAṭāʾ Allāh ?",
        choix: ["Utiliser l'eau sans réserve", "La faire bouillir", "Ne pas l'utiliser si l'on a une autre eau ; sinon ablutions, puis tayammum", "La jeter"],
        bonne: 2,
        explication: "« إنْ وَجَدَ غَيْرَهُ لَمْ يَسْتَعْمِلْهُ وَإِنْ لَمْ يَجِدْ غَيْرَهُ تَوَضَّأَ وَتَيَمَّمَ »." },
      { q: "Mise en situation : une goutte d'eau de fleur éventée tombe dans un grand bidon d'eau. Selon al-Dardīr ?",
        choix: ["L'eau est impure", "L'eau est purifiante par accord, car on ne pense pas qu'elle l'aurait changée", "La question reste ouverte", "L'eau est pure non purifiante"],
        bonne: 1,
        explication: "Al-Dardīr : « وَأَوْلَى لَوْ ظُنَّ عَدَمُ التَّغَيُّرِ فَهُوَ طَهُورٌ اتِّفَاقًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "64-65" },
    alertes: [
      "Confirmé (campagne de correction) : Mawāhib, p. 64, porte « وَجَعَلَ ابْنُ رَاشِدٍ مِنْ صُوَرِ الْمَسْأَلَةِ الْبَوْلَ » ; la même phrase, citée d'après « ح » dans la ḥāshiya imprimée avec le commentaire d'al-Zurqānī (Shamela 14297, p. 26), porte aussi « ابن راشد ». La forme « ابْنُ رُشْدٍ » d'al-Dasūqī est une variante isolée.",
      "Corrigé (campagne de correction) : Mawāhib, p. 64, imprime « قَالَ ابْنُ رَاشِدٍ وَابْنُ عَطَاءٍ اللَّهِ أَخَذَ الْمُصَنِّفُ ». At-Tawḍīḥ, qu'al-Ḥaṭṭāb résume ici (Shamela 14442, p. 8), a « ابن راشد: ومن ابن عطاء الله أخذ المصنف » : Ibn Rāshid dit qu'Ibn al-Ḥājib a pris cet avis d'Ibn ʿAṭāʾ Allāh. At-Tawḍīḥ confirme aussi que « والظاهر أنه لا يتطهر به » est la parole de Sanad, comme le retient la fiche.",
      "Corrigé (campagne de correction) : Mawāhib, p. 65, vocalise « لِغَيْرِ الْمَاءِ » ; la construction « لَوْ … لَـ » impose « لَغَيَّرَ الْمَاءَ ». La même phrase, citée d'après « ح » dans la ḥāshiya imprimée avec al-Zurqānī (Shamela 14297, p. 26), a les mêmes consonnes. Sans effet sur la règle.",
      "Sigles d'al-Dasūqī conservés tels qu'imprimés : « عج », « بن », « عبق », « ح ».",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 39–40 (Shamela 21604, pages 38–39)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-01-19",
    kitab: "tah", bab: "01", fasl: "01", ordre: 19,
    titre: "L'eau passée par la bouche : deux avis",
    titre_ar: "التَّطْهِيرُ بِمَاءٍ جُعِلَ فِي الفَمِ",
    objectif: "Savoir si l'on peut se purifier avec de l'eau qu'on a d'abord prise dans la bouche.",
    matn: "وَفِي التَّطْهِيرِ بِمَاءٍ جُعِلَ فِي الْفَمِ قَوْلَانِ",
    regle_pratique: "On peut se purifier avec de l'eau qu'on a prise un instant dans la bouche, tant qu'elle n'a pas visiblement changé, qu'elle n'y est pas restée longtemps, qu'on ne s'en est pas rincé la bouche et qu'il n'y avait pas d'impureté dans la bouche ; si la salive l'a changée, de façon certaine ou probable, elle ne purifie plus.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Khalīl rapporte deux avis. Le mot بِمَاءٍ se lit « avec de l'eau » (lecture de la plupart des manuscrits) ; le lire « avec ce qui » est possible, mais forcé.\n\nDans at-Tawḍīḥ, Khalīl explique que les deux avis reposent sur une divergence de fait (خِلَافٌ فِي حَالٍ) : l'eau peut-elle échapper à ce qui la mêle dans la bouche ? La permission est transmise par Mūsā ibn Muʿāwiya d'Ibn al-Qāsim ; l'interdiction par Ashhab de Mālik, dans al-ʿUtbiyya. Les deux s'accordent : si le changement est certain, il compte.\n\nAl-Ḥaṭṭāb comprend : si l'on est certain qu'il s'est mêlé assez de salive pour changer l'eau, si c'était autre chose que de la salive ; car la salive ne change l'eau que si elle est très abondante. Ibn al-Imām : si l'eau est restée longtemps dans la bouche, ou qu'on s'en est rincé la bouche (مَضْمَضَة), il n'y a plus de divergence, car la salive domine. D'autres ajoutent qu'il ne doit pas y avoir d'impureté dans la bouche.\n\nAvec ces conditions, l'avis apparent est la permission. Le commentateur (« الشَّارِحُ », non nommé dans le passage) rapporte dans son petit commentaire que Khalīl a dit : « l'apparent est le pouvoir purifiant, car c'est le principe ».",
    aqwal: [
      { auteur: "Ibn al-Qāsim (transmission de Mūsā ibn Muʿāwiya)", avis: "On peut se purifier avec cette eau.", statut: "non_precise" },
      { auteur: "Mālik (transmission d'Ashhab, al-ʿUtbiyya)", avis: "On ne peut pas se purifier avec.", statut: "non_precise" },
      { auteur: "Khalīl, cité par le commentateur dans son petit commentaire", avis: "L'apparent est le pouvoir purifiant, car c'est le principe.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : la divergence est une divergence de fait, donc de mots (« فَالْخِلَافُ لَفْظِيٌّ ») — c'est l'avis retenu (« وَهُوَ الْمُعْتَمَدُ »), car la perte du pouvoir purifiant dépend d'un changement certain ou probable. Si l'eau a changé (mousse, consistance épaissie par la bave), on ne peut pas se purifier avec, catégoriquement ; si l'on pense qu'elle a changé (beaucoup de salive, long séjour, rinçage), de même : c'est le cas visé par Ashhab ; si l'on est certain qu'elle n'a pas changé, ou qu'on en doute, elle ne nuit pas : c'est le cas visé par Ibn al-Qāsim. Al-Dasūqī : cet avis est retenu parce que les savants rigoureux le tiennent, comme « ج » et « طفى » (ar-Rammāṣī) ; la divergence couvre la purification du ḥadath comme de la souillure.",
    tarjih_hattab: "Al-Ḥaṭṭāb juge que, si l'eau n'est pas restée longtemps dans la bouche, qu'on ne s'en est pas rincé la bouche et qu'il n'y a pas d'impureté dans la bouche, l'avis apparent est la permission. Il rejette l'idée d'al-Bisāṭī qui fait de cette divergence une divergence « réelle » : c'est contraire à ce que disent les maîtres.",
    tanbihat: [
      "Ibn al-Imām : selon Ibn al-Ḥājib, la divergence porte sur la purification du ḥadath comme de la souillure ; c'est juste, par exemple pour une partie oubliée lors des ablutions qu'on ne peut atteindre qu'avec la bouche, parce qu'on n'a plus de mains ou qu'elles sont souillées. Si certains maîtres la limitent à la souillure parce que c'est le cas des transmissions, soit ; si c'est parce que l'eau serait mêlée, c'est faux.",
      "Ce sont deux transmissions : celle d'Ashhab de Mālik (fin de son samāʿ) et celle de Mūsā d'Ibn al-Qāsim (dans son samāʿ), toutes deux au livre de la purification ; Khalīl et d'autres les appellent pourtant « deux avis » (قَوْلَانِ). Al-Dasūqī le note aussi d'après « بن » (al-Bunānī).",
      "Différence avec la question précédente (fiche 18) : ici, on doute qu'il se soit mêlé assez de salive pour changer l'eau ; là, la chose mêlée est supposée présente en quantité suffisante. Al-Bisāṭī, qui fait de la divergence une divergence « réelle », en déduit que les deux questions seraient identiques ; al-Ḥaṭṭāb rejette ce point de départ.",
      "Al-Bisāṭī objecte aussi qu'on rapporte un accord : peu d'eau mêlée d'une chose pure qui ne la change pas reste purifiante ; il répond que cela vise une chose dont le changement se voit (lait, miel). Al-Ḥaṭṭāb note que cet accord n'est que l'une des voies de transmission."
    ],
    divergences: [],
    exemple: "Une personne prend de l'eau dans sa bouche et s'en sert aussitôt pour se laver les mains ou les pieds (exemple d'al-Dasūqī). Si l'eau n'a pas changé, sa purification est valide. Si elle l'avait gardée longtemps, au point que l'eau devienne mousseuse ou épaisse, elle ne purifierait pas.",
    erreurs_frequentes: [
      "Croire que l'eau passée par la bouche est toujours impropre : si elle n'a pas changé, l'avis retenu permet de s'en servir.",
      "Oublier les conditions : pas de long séjour, pas de rinçage, pas d'impureté dans la bouche.",
      "Prendre la divergence pour une opposition de principe : selon l'avis retenu, chacun vise un état différent de l'eau."
    ],
    termes: [
      { ar: "رِيق", translit: "rîq", def: "Salive." },
      { ar: "خِلَافٌ فِي حَالٍ", translit: "khilâfoun fî hâl", def: "Divergence de fait : chaque avis vise un état différent de la chose ; si l'un voyait l'état visé par l'autre, il dirait comme lui." },
      { ar: "خِلَافٌ لَفْظِيّ", translit: "khilâfoun lafziyy", def: "Divergence de mots : les avis ne s'opposent pas sur le fond." },
      { ar: "مَضْمَضَة", translit: "madmada", def: "Rinçage de la bouche." }
    ],
    quiz: [
      { q: "D'où vient l'avis de l'interdiction ?",
        choix: ["De Mālik, transmis par Ashhab dans al-ʿUtbiyya", "De Saḥnūn", "D'Ibn al-Qāsim, transmis par Mūsā ibn Muʿāwiya", "D'Ibn Rushd"],
        bonne: 0,
        explication: "« وَالْمَنْعُ رَوَاهُ أَشْهَبُ عَنْ مَالِكٍ فِي الْعُتْبِيَّةِ »." },
      { q: "Selon l'avis retenu par al-Dardīr, quelle est la nature de cette divergence ?",
        choix: ["Une divergence sur le temps de la prière", "Une erreur de copiste", "Une divergence de fait : chacun vise un état différent de l'eau", "Une divergence de principe"],
        bonne: 2,
        explication: "Al-Dardīr : « أَوْ فِي حَالٍ وَهُوَ الْمُعْتَمَدُ … فَالْخِلَافُ لَفْظِيٌّ »." },
      { q: "Dans quel cas n'y a-t-il plus de divergence, selon Ibn al-Imām ?",
        choix: ["Si l'eau est froide", "Si l'on est en voyage", "Si l'on est à jeun", "Si l'eau est restée longtemps dans la bouche, ou si l'on s'en est rincé la bouche"],
        bonne: 3,
        explication: "« لَوْ طَالَ مُكْثُ الْمَاءِ فِي فَمِهِ أَوْ حَصَلَ مِنْهُ مَضْمَضَةٌ لَانْتَفَى الْخِلَافُ »." },
      { q: "Mise en situation : vous prenez une gorgée d'eau et la versez aussitôt sur votre pied pour le laver ; l'eau n'a pas changé et votre bouche est propre. Selon l'avis retenu ?",
        choix: ["Il faut faire le tayammum", "Il faut recommencer avec de l'eau de pluie", "Votre lavage est valide", "Il est nul"],
        bonne: 2,
        explication: "Al-Dardīr : « وَإِنْ لَمْ يَحْصُلْ ظَنٌّ بِأَنْ تُحُقِّقَ عَدَمُ التَّغَيُّرِ أَوْ شُكَّ فَلَا يَضُرُّ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "65-66" },
    alertes: [
      "Mawāhib, p. 66, citation d'al-Bisāṭī : « أَنْ يَطْهُرَ تَغَيُّرُهُ » ; le sens demande « يَظْهَرَ » (que son changement se voie).",
      "Sigles d'al-Dasūqī conservés tels qu'imprimés : « ج », « طفى », « بن ».",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 40–41 (Shamela 21604, pages 39–40)."
    ],
    verification: "verifie"
  }

]);
