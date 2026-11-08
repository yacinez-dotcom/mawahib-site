/* Données — Kitāb al-Ṭahāra, bāb 01 (tah-01) : « بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ » — partie 8 — v3.5
   Source : Mawāhib al-Jalīl, al-Ḥaṭṭāb, éd. Dār al-Fikr, 3e éd., 1412 H / 1992, tome 1 (shamela.ws/book/569).
   Croisement : al-Sharḥ al-kabīr d'al-Dardīr et Ḥāshiyat al-Dasūqī (shamela.ws/book/21604), tome 1.
   Cette partie : tah-01-02-73 à tah-01-02-75 et la synthèse tah-01-02-syn (unité 18, fin du faṣl tah-01-02) — t. 1, p. 130 ;
   puis le faṣl tah-01-03 : tah-01-03-01a à -01h (unité 19) — t. 1, p. 130–140.
   v3.3 : unité 18 (nouvelle partie, décision n° 10 : tah-01-p7.js atteignait ≈ 147 Ko) ;
   audit de fin de faṣl ; synthèse du faṣl tah-01-02.
   v3.4 : unité 19 — début du faṣl tah-01-03 : la masʾala 01 (un seul segment du matn) découpée en huit sous-fiches.
   v3.5 : audit des unités 19–20 (anomalies n° 134 et 135 : alertes de tah-01-03-01h et -01e mises à jour) ; la suite du faṣl est dans tah-01-p9.js.
   Bāb découpé en parties de moins de 200 Ko ;
   historique des versions : tah-01-p1.js (jusqu'à v2.5) puis l'en-tête de chaque partie. */
App.data.ajouterFiches([

  /* ================================================================== */
  /* Unité 18 — tah-01-02-73 à -75 — t. 1, p. 130 (Shamela 569, p. 129) */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 64–65 (Shamela 21604, p. 63–64) */
  /* ================================================================== */

  {
    id: "tah-01-02-73",
    kitab: "tah", bab: "01", fasl: "02", ordre: 73,
    titre: "Permis à la femme : tout ce qu'elle porte",
    titre_ar: "مَا يَجُوزُ لِلْمَرْأَةِ مِنَ المَلْبُوسِ",
    objectif: "Savoir que la femme peut porter de l'or, de l'argent, de l'orné et de la soie, et ce que recouvre « ce qu'elle porte ».",
    matn: "وَجَائِزٌ لِلْمَرْأَةِ الْمَلْبُوسُ مُطْلَقًا",
    regle_pratique: "La femme peut porter tout ce qui est vêtement ou parure — or, argent, objet orné de ces métaux, soie —, et ce qui en tient lieu (boutons, fermoirs, liens de cheveux, literie et coussins) ; mais non les objets dont elle se sert sans les porter, comme le peigne, le pot à khôl ou le miroir.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb, d'après az-Zāhī : ce que les femmes prennent pour leurs cheveux, les boutons de leurs encolures, les fermoirs de leurs vêtements et ce qui tient lieu de vêtement est permis. Al-Ḥaṭṭāb : « pour leurs cheveux » vise apparemment ce dans quoi elles enroulent leurs cheveux, non le peigne, qui ne diffère pas du pot à khôl (مُكْحُلَة, moukhoula), du miroir ou du flacon d'onguent ; al-Burzulī rapporte même d'Ibn ʿAbd as-Salām (shāfiʿite), en l'approuvant, que le peigne réparé d'or ou d'argent est comme le récipient réparé.\n\nCuriosité (غَرِيبَة) : al-Khaṭṭābī rapporte de certains savants que la bague d'argent est déconseillée aux femmes, comme parure d'homme, et que, faute d'or, elles la teignent en jaune avec du safran.\n\nAl-Dardīr : il est permis à la femme de porter, dans tous les cas, l'or, l'argent, ce qui en est orné et la soie (حَرِير, harîr), et ce qui tient lieu de vêtement : boutons, literie et coussins. Al-Dasūqī : de même les fermoirs d'encolure et les liens de cheveux ; mais le mari ne dort pas avec elle sur la literie de soie, selon Ibn Nājī et son maître Ibn ʿArafa — c'est l'avis retenu —, contre Ibn al-ʿArabī et l'auteur d'al-Madkhal, qui le permettaient à sa suite.",
    aqwal: [
      { auteur: "Az-Zāhī (Ibn Shaʿbān)", avis: "Ce que les femmes prennent pour leurs cheveux, leurs boutons et fermoirs, et ce qui tient lieu de vêtement est permis.", statut: "non_precise" },
      { auteur: "Ibn ʿAbd as-Salām (shāfiʿite, rapporté par al-Burzulī)", avis: "Le peigne réparé d'or ou d'argent est comme le récipient réparé.", statut: "non_precise" },
      { auteur: "Certains savants (rapportés par al-Khaṭṭābī)", avis: "La bague d'argent est déconseillée aux femmes, comme parure d'homme.", statut: "qawl" },
      { auteur: "Ibn Nājī et Ibn ʿArafa (rapportés par al-Dasūqī)", avis: "Le mari ne dort pas avec sa femme sur la literie de soie.", statut: "non_precise" },
      { auteur: "Ibn al-ʿArabī ; l'auteur d'al-Madkhal (rapportés par al-Dasūqī)", avis: "Il peut y dormir à sa suite.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَجَازَ لِلْمَرْأَةِ الْمَلْبُوسُ مُطْلَقًا) ذَهَبًا أَوْ فِضَّةً أَوْ مُحَلًّى بِهِمَا أَوْ حَرِيرًا وَمَا يَجْرِي مَجْرَى اللِّبَاسِ … مِنْ زِرٍّ وَفُرُشٍ وَمَسَانِدَ ». Al-Dasūqī : pour le mari sur la literie de soie, l'interdiction est l'avis retenu (« وَهُوَ الْمُعْتَمَدُ »).",
    tarjih_hattab: "« Pour leurs cheveux » ne comprend pas le peigne, qui suit la règle du pot à khôl et du miroir (« لَا الْمِشْطُ فَإِنَّهُ لَا فَرْقَ بَيْنَهُ وَبَيْنَ الْمُكْحُلَةِ وَالْمِرْآةِ وَالْمُدْهُنِ »).",
    tanbihat: [
      "Al-Ḥaṭṭāb qualifie de « curiosité » (« غَرِيبَةٌ ») l'avis rapporté par al-Khaṭṭābī sur la bague d'argent des femmes."
    ],
    divergences: [
      "Concordance — ce qui tient lieu de vêtement. Al-Ḥaṭṭāb (az-Zāhī) : boutons, fermoirs, ce qui sert aux cheveux. Al-Dardīr : « مِنْ زِرٍّ وَفُرُشٍ وَمَسَانِدَ » ; al-Dasūqī : « أَيْ وَقُفْلِ جَيْبٍ وَلَفَائِفِ الشَّعْرِ ».",
      "Concordance — le peigne. Al-Ḥaṭṭāb l'exclut de « ce qu'elle porte ». Al-Dardīr le range parmi ce qui n'est pas permis (« وَمُكْحُلَةٍ وَمُشْطٍ وَمِرْآةٍ », tah-01-02-75).",
      "Complément — la literie de soie et le mari. Al-Dasūqī : « وَلَا يَجُوزُ لِلرَّجُلِ … أَنْ يَنَامَ مَعَهَا عَلَى الْفُرُشِ الْحَرِيرِ خِلَافًا لِابْنِ الْعَرَبِيِّ وَصَاحِبُ الْمَدْخَلِ » ; la moustiquaire de soie, simple écran, n'est pas interdite aux hommes tant qu'ils ne s'y adossent pas."
    ],
    exemple: "Une femme porte un collier d'or, une robe de soie à boutons d'argent et une barrette ornée d'or dans les cheveux : tout cela lui est permis. Son peigne d'argent, en revanche, n'entre pas dans « ce qu'elle porte » (voir tah-01-02-75).",
    erreurs_frequentes: [
      "Croire que tout objet personnel de la femme peut être d'or : seuls ce qu'elle porte et ce qui en tient lieu sont permis.",
      "Croire que le mari peut dormir sur la literie de soie de sa femme : selon l'avis retenu par al-Dasūqī, il ne le peut pas."
    ],
    termes: [
      { ar: "حَرِير", translit: "harîr", def: "Soie." },
      { ar: "مُكْحُلَة", translit: "moukhoula", def: "Pot à khôl." }
    ],
    quiz: [
      { q: "Selon al-Dardīr, que peut porter la femme ?",
        choix: ["Seulement l'argent", "Seulement la soie", "Or, argent, objet orné et soie, et ce qui tient lieu de vêtement", "Rien de précieux"],
        bonne: 2,
        explication: "« ذَهَبًا أَوْ فِضَّةً أَوْ مُحَلًّى بِهِمَا أَوْ حَرِيرًا وَمَا يَجْرِي مَجْرَى اللِّبَاسِ »." },
      { q: "Selon al-Ḥaṭṭāb, le peigne d'or entre-t-il dans « ce qu'elle porte » ?",
        choix: ["Non : il suit la règle du pot à khôl et du miroir", "Oui, il sert aux cheveux", "Oui, s'il est petit", "Oui, en argent seulement"],
        bonne: 0,
        explication: "« لَا الْمِشْطُ فَإِنَّهُ لَا فَرْقَ بَيْنَهُ وَبَيْنَ الْمُكْحُلَةِ وَالْمِرْآةِ وَالْمُدْهُنِ »." },
      { q: "Selon al-Dardīr, la literie et les coussins de soie sont, pour la femme…",
        choix: ["Interdits", "Déconseillés", "Permis seulement la nuit", "Permis : ils tiennent lieu de vêtement"],
        bonne: 3,
        explication: "« وَمَا يَجْرِي مَجْرَى اللِّبَاسِ … مِنْ زِرٍّ وَفُرُشٍ وَمَسَانِدَ »." },
      { q: "Mise en situation : une épouse a des draps de soie. Son mari peut-il y dormir avec elle, selon l'avis retenu par al-Dasūqī ?",
        choix: ["Oui, à sa suite", "Non, c'est l'avis retenu d'Ibn Nājī et d'Ibn ʿArafa", "Oui, s'il est malade", "Oui, s'ils sont mariés depuis longtemps"],
        bonne: 1,
        explication: "« وَلَا يَجُوزُ لِلرَّجُلِ عَلَى مَا قَالَ ابْنُ نَاجِيٍّ وَشَيْخُهُ ابْنُ عَرَفَةَ وَهُوَ الْمُعْتَمَدُ أَنْ يَنَامَ مَعَهَا عَلَى الْفُرُشِ الْحَرِيرِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "130" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 64–65 (Shamela 21604, pages 63–64)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-74",
    kitab: "tah", bab: "01", fasl: "02", ordre: 74,
    titre: "… même une sandale",
    titre_ar: "النَّعْلُ مِنَ الذَّهَبِ لِلْمَرْأَةِ",
    objectif: "Savoir que la femme peut porter une sandale ou un sabot d'or ou d'argent, et connaître l'avis contraire.",
    matn: "وَلَوْ نَعْلًا",
    regle_pratique: "La femme peut porter une sandale (ou un sabot) d'or ou d'argent, ou ornée de ces métaux, car c'est un vêtement, malgré un avis contraire dans l'école.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : de même le sabot (قَبْقَاب, qabqâb) ; par « même » (« وَلَوْ »), Khalīl renvoie à une divergence. Al-Burzulī : Abū Ḥafṣ ibn al-ʿAṭṭār a rapporté des savants de Kairouan une divergence sur le sabot d'argent : relève-t-il du vêtement ou des récipients ? Le plus proche est qu'il est comme la literie ; on rapporte d'al-Māzirī (Sharḥ at-Talqīn) l'interdiction du sabot. Az-Zāhī : prendre une sandale n'a pas la règle du bijou ; mais on a dit que c'en est un. Al-Ḥaṭṭāb : celui des commentateurs qui disait n'avoir trouvé la divergence que chez Abū Ḥafṣ n'avait donc pas vu az-Zāhī.\n\nAl-Dardīr : « même une sandale, et un sabot ». Al-Dasūqī : selon al-Ḥaṭṭāb, « même » écarte l'avis d'interdiction qui existe dans l'école, contre celui qui y voit la levée d'un simple doute, la sandale d'or ou d'argent étant permise par accord.",
    aqwal: [
      { auteur: "Avis rapporté sans attribution (lettre du matn)", avis: "La sandale d'or ou d'argent est permise à la femme.", statut: "non_precise" },
      { auteur: "Savants de Kairouan (rapportés par Abū Ḥafṣ ibn al-ʿAṭṭār)", avis: "Divergence : le sabot d'argent relève-t-il du vêtement ou des récipients ?", statut: "non_precise" },
      { auteur: "Al-Māzirī (Sharḥ at-Talqīn, rapporté par certains)", avis: "Le sabot d'or ou d'argent est interdit.", statut: "qawl" },
      { auteur: "Avis rapporté dans az-Zāhī (« وَقَدْ قِيلَ »)", avis: "La sandale est un bijou.", statut: "qawl" },
      { auteur: "Al-Burzulī", avis: "Le sabot est, au plus proche, comme la literie.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَلَوْ نَعْلًا) وَقَبْقَابًا ». Al-Dasūqī : « لَوْ » écarte l'avis d'interdiction rapporté dans l'école (« فِي ح أَنَّ لَوْ لِرَدِّ الْخِلَافِ الْوَاقِعِ فِي الْمَذْهَبِ الْقَائِلِ بِالْمَنْعِ »).",
    tarjih_hattab: "La divergence est bien attestée : az-Zāhī la mentionne aussi (« فَقَوْلُ بَعْضِ الشَّارِحِينَ أَنَّهُ لَمْ يَقِفْ عَلَيْهِ إلَّا فِي كَلَامِ أَبِي حَفْصٍ … يَقْتَضِي أَنَّهُ لَمْ يَقِفْ عَلَى هَذَا »).",
    tanbihat: [],
    divergences: [
      "Concordance — la portée de « لَوْ ». Al-Ḥaṭṭāb : « وَأَشَارَ بِلَوْ إلَى الْخِلَافِ ». Al-Dasūqī le cite (« فِي ح ») contre ceux qui y voient la levée d'un doute.",
      "Complément — le sabot. Al-Ḥaṭṭāb : « وَكَذَا الْقَبْقَابُ ». Al-Dardīr : « وَقَبْقَابًا »."
    ],
    exemple: "Pour une fête, une mariée porte des sandales brodées de fils d'or. C'est permis : la sandale fait partie de ce qu'elle porte, selon l'avis retenu.",
    erreurs_frequentes: [
      "Croire que la sandale d'or est interdite comme le récipient d'or : selon l'avis retenu, c'est un vêtement, permis à la femme."
    ],
    termes: [
      { ar: "قَبْقَاب", translit: "qabqâb", def: "Sabot, chaussure à semelle de bois." }
    ],
    quiz: [
      { q: "Pourquoi Khalīl dit-il « même une sandale » ?",
        choix: ["Pour l'interdire", "Pour écarter un avis d'interdiction rapporté dans l'école", "Pour la réserver aux hommes", "Sans raison"],
        bonne: 1,
        explication: "« وَأَشَارَ بِلَوْ إلَى الْخِلَافِ » ; al-Dasūqī : « لِرَدِّ الْخِلَافِ الْوَاقِعِ فِي الْمَذْهَبِ الْقَائِلِ بِالْمَنْعِ »." },
      { q: "Selon al-Burzulī, le sabot d'argent est, au plus proche…",
        choix: ["Comme un récipient", "Comme une arme", "Comme la literie", "Comme une bague"],
        bonne: 2,
        explication: "« وَالْأَقْرَبُ أَنَّهُ كَالْفِرَاشِ »." },
      { q: "Mise en situation : une femme hésite à acheter des sabots ornés d'argent. Selon l'avis retenu par al-Dardīr…",
        choix: ["C'est permis", "C'est interdit", "C'est déconseillé", "C'est permis seulement à la maison"],
        bonne: 0,
        explication: "« (وَلَوْ نَعْلًا) وَقَبْقَابًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "130" },
    alertes: [
      "Al-Dasūqī : « وَإِنْ لَبِسَهَا لِلنَّعْلِ مِنْ أَحَدِ النَّقْدَيْنِ جَائِزٌ اتِّفَاقًا » : la phrase rapporte l'avis de ceux qui voient dans « لَوْ » la levée d'un doute (accord sur la permission) ; « وَإِنْ » paraît mis pour وأنّ. Précisé : al-Kharashī (91, p. 100) tient cette lecture (« لِئَلَّا يُتَوَهَّمَ حُرْمَةُ ذَلِكَ وَأَنَّهُ لَيْسَ مِنْ الْمَلْبُوسِ ») ; la fiche suit ce sens. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65 (Shamela 21604, page 64)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-75",
    kitab: "tah", bab: "01", fasl: "02", ordre: 75,
    titre: "… mais pas un lit ou ce qui lui ressemble",
    titre_ar: "مَا لَا يَجُوزُ لِلْمَرْأَةِ : كَالسَّرِيرِ",
    objectif: "Savoir que la femme ne peut pas avoir, en or ou en argent, les objets qu'elle utilise sans les porter (lit, pot à khôl, peigne, miroir), et ce qu'il en est de la décoration des maisons et des mosquées.",
    matn: "لَا كَسَرِيرٍ",
    regle_pratique: "La femme ne peut pas avoir en or ou en argent, ni orné de ces métaux, ce qu'elle utilise sans le porter : lit, pot à khôl, peigne, miroir, couteau, serrure de coffre, chasse-mouches, rideau ; la règle est la même pour les hommes.",
    qualification: {
      hukm: "haram",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb, d'après al-Jawāhir : de même les pots à khôl, les miroirs ornés, les serrures de coffres, les lits (سَرِير, sarîr), les chasse-mouches (مِذَبَّة, midhabba), les rideaux à motifs (مِقْرَمَة, miqrama) et leurs semblables : on ne peut rien en prendre d'or ou d'argent, ni l'en orner, ni pour les hommes ni pour les femmes ; de même ce qu'on met aux murs, aux plafonds et aux boiseries (aṭ-Ṭirāz et d'autres). Az-Zāhī : de même les bouchons de flacons, les boutons et fermoirs des vêtements d'hommes, les tubes pour enfants et adultes, les couvertures d'autres livres que le Coran, et ce qui tient lieu d'amulettes.\n\nFarʿ — al-Burzulī : son maître Ibn ʿArafa permettait de se mettre du khôl avec un bâtonnet (مِرْوَد, mirwad) d'or ou d'argent, y voyant un soin, comme mettre de l'or dans l'eau pour fortifier le cœur ; un médecin lui dit que le meilleur bâtonnet est d'ébène, puis d'or, puis d'argent. Al-ʿĀriḍa (Ibn al-ʿArabī) : le Prophète ﷺ a interdit l'usage de l'or, puis a excepté le besoin par voie de soin (le nez d'or) ; il en découle que, si le médecin dit au malade qu'il lui est utile de cuire sa nourriture dans un récipient d'or, cela lui est permis.\n\nFarʿ — al-Burzulī : la lettre de la riwāya est qu'on déconseille de décorer (تَزْوِيق, tazwîq) les mosquées d'or, car cela distrait le fidèle ; si cela ne le distrait pas, c'est apparemment permis ; il l'a vu à la grande mosquée de Kairouan et à la Zaytūna, où Ibn ʿArafa s'est tu sur une partie placée devant l'imam, sans doute parce que c'était déconseillé.\n\nAl-Dardīr : non le lit, le pot à khôl, le peigne, le miroir et le couteau, d'or ou d'argent ou ornés : ce n'est pas permis. Al-Dasūqī : car tout ce qui est hors de son corps ne peut être pris de l'un des deux métaux ni orné d'eux ; mais elle peut avoir les sangles de lit en soie, attachées à son corps comme la literie, contre al-Kharashī (« خش ») ; décorer d'or et d'argent les murs, les plafonds, les boiseries et les tentures est permis dans les maisons, et déconseillé dans les mosquées si cela distrait le fidèle.",
    aqwal: [
      { auteur: "Al-Jawāhir ; aṭ-Ṭirāz", avis: "Lits, pots à khôl, miroirs, serrures, rideaux, murs et plafonds : rien d'or ou d'argent, ni pour les hommes ni pour les femmes.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa (rapporté par al-Burzulī)", avis: "Le bâtonnet à khôl d'or ou d'argent est permis comme soin.", statut: "non_precise" },
      { auteur: "Ibn al-ʿArabī (al-ʿĀriḍa)", avis: "Cuire la nourriture d'un malade dans un récipient d'or, sur avis médical, est permis.", statut: "non_precise" },
      { auteur: "Lettre de la riwāya (rapportée par al-Burzulī)", avis: "Décorer les mosquées d'or est déconseillé, parce que cela distrait.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (لَا كَسَرِيرٍ) وَمُكْحُلَةٍ وَمُشْطٍ وَمِرْآةٍ وَمُدْيَةٍ مِنْ أَحَدِ النَّقْدَيْنِ أَوْ مُحَلًّى بِهِمَا فَلَا يَجُوزُ ». Al-Dasūqī : « لِأَنَّ كُلَّ مَا كَانَ خَارِجًا عَنْ جَسَدِهَا فَلَا يَجُوزُ اتِّخَاذُهُ مِنْ أَحَدِ النَّقْدَيْنِ وَلَا مِنْ الْمُحَلَّى بِهِ ».",
    tarjih_hattab: null,
    tanbihat: [
      "Az-Zāhī ajoute à la liste les couvertures d'autres livres que le Coran, et ce qui tient lieu d'amulettes."
    ],
    divergences: [
      "Divergence — murs, plafonds et boiseries. Al-Ḥaṭṭāb, d'après aṭ-Ṭirāz et d'autres, les range parmi ce qui ne peut être pris ni orné d'or ou d'argent (« وَكَذَلِكَ مَا يُتَّخَذُ فِي الْجُدْرَانِ وَالسُّقُوفِ وَالْأَخْشَابِ »). Al-Dasūqī : « وَاعْلَمْ أَنَّ تَزْوِيقَ الْحِيطَانِ وَالسَّقْفِ وَالْخَشَبِ وَالسَّاتِرِ بِالذَّهَبِ وَالْفِضَّةِ جَائِزٌ فِي الْبُيُوتِ ».",
      "Concordance — les mosquées. Al-Ḥaṭṭāb (al-Burzulī) : déconseillé si cela distrait le fidèle. Al-Dasūqī : « وَفِي الْمَسَاجِدِ مَكْرُوهٌ إذَا كَانَ بِحَيْثُ يَشْغَلُ الْمُصَلِّي وَإِلَّا فَلَا ».",
      "Complément — les sangles de lit en soie. Al-Dasūqī : permises à la femme, « لِاتِّصَالِ ذَلِكَ بِجَسَدِهَا كَالْفُرُشِ خِلَافًا لِمَا فِي خش مِنْ الْمَنْعِ »."
    ],
    exemple: "Une femme reçoit un miroir à main au cadre d'argent et un pot à khôl en or. Elle ne peut pas les garder pour s'en servir : ce sont des objets qu'elle utilise sans les porter, et ils suivent la règle des récipients. Son collier d'or, lui, est permis.",
    erreurs_frequentes: [
      "Croire que tout ce qui sert à la toilette de la femme peut être d'or : seuls les vêtements et parures portés sont permis, non le miroir, le peigne ou le pot à khôl.",
      "Croire que la règle du lit vise seulement les hommes : elle vaut pour les hommes et pour les femmes."
    ],
    termes: [
      { ar: "سَرِير", translit: "sarîr", def: "Lit (cadre de lit, couche surélevée)." },
      { ar: "مِرْوَد", translit: "mirwad", def: "Bâtonnet pour appliquer le khôl." },
      { ar: "مِذَبَّة", translit: "midhabba", def: "Chasse-mouches." },
      { ar: "مِقْرَمَة", translit: "miqrama", def: "Rideau ou tenture à motifs et dessins." },
      { ar: "تَزْوِيق", translit: "tazwîq", def: "Décoration, enjolivement (des murs, d'une mosquée)." }
    ],
    quiz: [
      { q: "Lequel de ces objets en or est permis à la femme ?",
        choix: ["Un miroir", "Un pot à khôl", "Un peigne", "Un bracelet"],
        bonne: 3,
        explication: "Le bracelet est porté ; al-Dardīr : « (لَا كَسَرِيرٍ) وَمُكْحُلَةٍ وَمُشْطٍ وَمِرْآةٍ … فَلَا يَجُوزُ »." },
      { q: "Selon al-Dasūqī, quel est le critère ?",
        choix: ["Le prix de l'objet", "Ce qui est hors de son corps ne peut être d'or ou d'argent", "La taille de l'objet", "L'usage à la maison ou dehors"],
        bonne: 1,
        explication: "« لِأَنَّ كُلَّ مَا كَانَ خَارِجًا عَنْ جَسَدِهَا فَلَا يَجُوزُ اتِّخَاذُهُ مِنْ أَحَدِ النَّقْدَيْنِ »." },
      { q: "Selon al-Burzulī, décorer une mosquée d'or est…",
        choix: ["Déconseillé si cela distrait le fidèle", "Obligatoire", "Recommandé", "Permis sans réserve"],
        bonne: 0,
        explication: "« يَكْرَهُ تَزْوِيقَ الْمَسَاجِدِ بِالذَّهَبِ؛ لِأَنَّهُ يَشْغَلُ الْمُصَلِّيَ فَإِنْ كَانَتْ حَيْثُ لَا تَشْغَلُهُ فَظَاهِرُهُ أَنَّهَا جَائِزَةٌ »." },
      { q: "Mise en situation : une famille veut dorer à la feuille les moulures du plafond de son salon. Que dit al-Dasūqī ?",
        choix: ["C'est interdit comme pour le lit", "C'est permis seulement à la femme", "C'est permis dans les maisons", "C'est obligatoire"],
        bonne: 2,
        explication: "« وَاعْلَمْ أَنَّ تَزْوِيقَ الْحِيطَانِ وَالسَّقْفِ وَالْخَشَبِ وَالسَّاتِرِ بِالذَّهَبِ وَالْفِضَّةِ جَائِزٌ فِي الْبُيُوتِ » ; al-Ḥaṭṭāb, d'après aṭ-Ṭirāz, le rangeait parmi l'interdit." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "130" },
    alertes: [
      "Fin du faṣl tah-01-02 : le segment suivant (« فَصْلٌ هَلْ إزَالَةُ النَّجَاسَةِ … ») ouvre le faṣl tah-01-03.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65 (Shamela 21604, page 64)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-02-syn",
    type: "synthese",
    kitab: "tah", bab: "01", fasl: "02",
    titre: "Le pur et l'impur",
    quiz: [
      { q: "Le cadavre d'un scorpion ou d'une mouche est-il pur ?",
        choix: ["Il est impur", "Il est impur, sauf s'il est sec", "Il est pur, et il se mange sans abattage", "Il est pur, mais on ne le mange pas sans abattage rituel"],
        bonne: 3, explication: "Voir la fiche 01." },
      { q: "Des poils de porc ont été coupés. Que valent-ils ?",
        choix: ["Ils sont purs", "Ils sont impurs", "Ils sont purs seulement après lavage", "Ils sont purs seulement si l'animal a été égorgé"],
        bonne: 0, explication: "Voir les fiches 06 et 07." },
      { q: "De l'urine de mouton a touché votre vêtement. Que dit le texte ?",
        choix: ["Elle est impure : il faut la laver", "Elle est impure, mais tolérée", "Elle est pure : la laver n'est pas obligatoire, mais c'est recommandé", "Elle est pure, et la laver est déconseillé"],
        bonne: 2, explication: "Voir la fiche 17." },
      { q: "Le corps d'un être humain mort est-il pur ?",
        choix: ["Non, selon l'avis retenu", "Oui, selon l'avis retenu par al-Dardīr", "Non : seul celui des prophètes est pur", "Seulement après le lavage mortuaire"],
        bonne: 1, explication: "Voir la fiche 31." },
      { q: "Mise en situation : du vin oublié dans une jarre est devenu vinaigre. Que vaut ce vinaigre ?",
        choix: ["Il reste impur", "Il est pur seulement après cuisson", "Il est impur, mais utilisable hors de la prière", "Il est pur"],
        bonne: 3, explication: "Voir les fiches 26 et 27." },
      { q: "Que vaut le sang qui coule d'une blessure ?",
        choix: ["Il est impur", "Il est pur", "Il est pur s'il vient d'un animal licite", "Il n'est impur qu'en grande quantité"],
        bonne: 0, explication: "Voir les fiches 22 et 44." },
      { q: "Mise en situation : une souris morte tombe dans du beurre figé et en est retirée aussitôt, sans que l'impureté ait pu s'y répandre. Que faire ?",
        choix: ["Tout jeter", "Tout garder, sans rien retirer", "Jeter la partie atteinte et ce qui l'entoure : le reste est pur", "Le faire fondre pour le purifier"],
        bonne: 2, explication: "Voir les fiches 52 et 53." },
      { q: "Peut-on prier avec un vêtement qu'a porté un non-musulman ?",
        choix: ["Oui, sans le laver", "Non, tant qu'on ne le sait pas pur : on le lave d'abord", "Jamais, même lavé", "Oui, s'il ne touchait pas la peau"],
        bonne: 1, explication: "Voir les fiches 55 et 56." },
      { q: "Qu'est-ce qui est permis à une femme ?",
        choix: ["Boire dans une coupe en argent", "Se servir d'un miroir orné d'or", "Faire ses ablutions avec une aiguière en or", "Porter des bijoux en or et des vêtements de soie"],
        bonne: 3, explication: "Voir les fiches 68, 73 et 75." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "86-130" },
    alertes: [],
    verification: "verifie"
  },

  /* ================================================================== */
  /* Unité 19 — tah-01-03-01a à -01h — t. 1, p. 130–140 (Shamela 569, p. 129–139) */
  /* Un seul segment du matn, huit règles : huit sous-fiches (étape 3). */
  /* Croisement : al-Dardīr / al-Dasūqī, t. 1, p. 65–69 (Shamela 21604, p. 64–68) */
  /* ================================================================== */

  {
    id: "tah-01-03-01a",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Ôter l'impureté pour prier : sunna ou obligation",
    titre_ar: "حُكْمُ إزَالَةِ النَّجَاسَةِ",
    objectif: "Savoir que les deux avis rapportés par Khalīl (sunna, ou obligation si l'on s'en souvient et qu'on le peut) mènent, selon al-Ḥaṭṭāb, à la même pratique.",
    matn: "فَصْلٌ هَلْ إزَالَةُ النَّجَاسَةِ عَنْ ثَوْبِ مُصَلٍّ، وَلَوْ طَرَفَ عِمَامَتِهِ وَبَدَنِهِ وَمَكَانِهِ لَا طَرَفَ حَصِيرِهِ سُنَّةٌ، أَوْ وَاجِبَةٌ إنْ ذَكَرَ وَقَدَرَ وَإِلَّا أَعَادَ الظُّهْرَيْنِ لِلِاصْفِرَارِ خِلَافٌ",
    regle_pratique: "Avant de prier, le croyant ôte toute impureté non tolérée de son vêtement, de son corps et de l'endroit où il prie : qu'on appelle cette purification « sunna » ou « obligation », celui qui prie avec l'impureté en s'en souvenant et en pouvant l'ôter refait sa prière, même après la fin de son temps.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Prière faite avec l'impureté en s'en souvenant et en pouvant l'ôter : à refaire toujours, même après son temps. Par oubli, ignorance de sa présence ou incapacité : à refaire seulement dans le temps (voir 01b et 01h)."
    },
    explication: "Al-Ḥaṭṭāb : après avoir énuméré, dans le faṣl précédent, les choses pures et impures, Khalīl expose ici la règle de l'impureté à ôter (إِزَالَةُ النَّجَاسَةِ, izâlatou n-najâsa), ce qui en est toléré et la manière de l'ôter. « هَلْ » interroge sur celui des deux qualificatifs qui convient, et « خِلَافٌ » répond : la question est disputée. Deux avis mashhūr existent sur le fait d'ôter l'impureté du vêtement, du corps et du lieu du fidèle : 1) c'est une sunna de la prière dans tous les cas, qu'on s'en souvienne ou non, qu'on puisse l'ôter ou non ; 2) c'est obligatoire si l'on s'en souvient et qu'on peut l'ôter — en ayant une eau absolue, un vêtement pur, ou la possibilité de passer à un endroit pur —, et une sunna en cas d'oubli ou d'incapacité. C'est la lecture d'Ibn Marzūq, conforme à Ibn Rushd. Khalīl explique dans at-Tawḍīḥ qu'Ibn Rushd a déclaré mashhūr l'avis de la sunna, et que la voie d'al-Lakhmī donne le second pour mashhūr : d'où le mot « divergence ».\n\nPour al-Ḥaṭṭāb, il ne s'agit que d'une divergence de mots : l'avis retenu dans l'école (« الْمُعْتَمَدَ فِي الْمَذْهَبِ ») est que celui qui prie avec l'impureté exprès, ou par ignorance de la règle, alors qu'il pouvait l'ôter, refait toujours sa prière, et que l'oublieux, celui qui ne la connaissait pas et l'incapable la refont dans le temps — et cela sur les deux avis. Ibn Rushd (rasm « shakk » de l'audition d'Ibn al-Qāsim) : le mashhūr est l'avis d'Ibn al-Qāsim et sa riwāya de Mālik, la sunna ; celui qui prie exprès refait toujours, pour avoir délaissé une sunna. Il rejette la formule « obligatoire si l'on s'en souvient », car celui qui y est contraint s'en souvient et ne refait que dans le temps ; d'autres ont ajouté « et si on le peut ». Dans le livre de la prière, il rapporte l'avis d'Ibn Wahb (obligation : reprise toujours, que l'on sache, ignore ou oublie) et juge la formule « obligatoire avec souvenir et capacité » imprécise (« غَيْرُ مُخَلِّصَةٍ »). Ibn Yūnus et ʿAbd al-Ḥaqq déclarent la sunna correcte ou mashhūr, tout en faisant refaire toujours celui qui a prié exprès ; ʿAbd al-Wahhāb parle d'une obligation « au rang des sunna », comme celui qui omet exprès la basmala sur la bête (on ne la mange pas) ou la sourate dans la prière (il la refait, selon Ibn Ziyād et Saḥnūn). Les règles que Khalīl énonce ensuite (l'impureté qui tombe pendant la prière l'annule) ne se comprennent qu'ainsi.\n\nIbn ʿArafa rapporte quatre voies (طُرُق) : 1) Ibn al-Qaṣṣār, la Risāla et at-Talqīn : obligatoire sans divergence, la divergence sur la reprise venant de celle sur son caractère de condition ; 2) al-Jallāb, ʿAbd al-Wahhāb (commentaire de la Risāla), al-Bayān et al-Ajwiba : sunna sans divergence, la divergence sur la reprise venant de celle sur l'omission volontaire des sunna ; 3) al-Maʿūna : deux riwāyas, obligation et sunna ; 4) al-Lakhmī : trois avis, l'obligation, la sunna, et l'obligation avec souvenir et capacité, qui est le mashhūr. Al-Ḥaṭṭāb objecte qu'Ibn ʿArafa, après Ibn al-Ḥājib, attribue à tort la première voie à la Risāla, qui rapporte deux avis (« وُجُوبَ الْفَرَائِضِ » et « وُجُوبَ السُّنَنِ الْمُؤَكَّدَةِ ») ; Khalīl l'avait déjà relevé. Selon at-Tawḍīḥ, Ibn Rushd rapporte un quatrième avis : la simple recommandation.\n\nAl-Dardīr : sunna — Ibn Rushd l'a déclarée mashhūr dans al-Bayān, et certains rapportent l'accord sur elle — ou obligation « de condition » (« وُجُوبَ شَرْطٍ »). Al-Dasūqī : ʿAbd al-Ḥaqq et Ibn Yūnus l'ont aussi déclarée mashhūr ; selon al-Lakhmī, l'obligation est la doctrine de la Mudawwana ; l'obligation s'entend ici de ce dont dépend la validité de l'acte.",
    aqwal: [
      { auteur: "Ibn al-Qāsim et sa riwāya de Mālik (rapportés par Ibn Rushd)", avis: "Ôter l'impureté du vêtement et du corps est une sunna ; celui qui prie exprès refait toujours, l'oublieux, l'ignorant de l'impureté et le contraint dans le temps.", statut: "mashhur" },
      { auteur: "Al-Lakhmī (et d'autres, selon at-Tawḍīḥ)", avis: "C'est obligatoire si l'on s'en souvient et qu'on le peut ; c'est l'avis mashhūr selon sa voie.", statut: "mashhur" },
      { auteur: "Ibn Wahb (rapporté par Ibn Rushd)", avis: "C'est une obligation : la prière faite avec un vêtement impur se refait toujours, qu'on ait su, ignoré ou oublié.", statut: "qawl" },
      { auteur: "Avis rapporté par Ibn Rushd (selon at-Tawḍīḥ)", avis: "C'est seulement recommandé ; al-Dasūqī le dit isolé.", statut: "shadh" },
      { auteur: "Abū l-Faraj (rapporté par al-Dasūqī)", avis: "C'est obligatoire dans tous les cas, avec ou sans souvenir, avec ou sans capacité, comme chez ash-Shāfiʿī.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr pour la pratique : l'oublieux, l'ignorant de l'impureté et l'incapable refont dans le temps (« (أَعَادَ) نَدْبًا بِنِيَّةِ الْفَرْضِ (الظُّهْرَيْنِ) وَلَوْ عَلَى الْقَوْلِ بِالسُّنِّيَّةِ »), et il rapporte d'al-Ḥaṭṭāb l'accord des deux avis « عَلَى إعَادَةِ الذَّاكِرِ الْقَادِرِ أَبَدًا ». Le choix entre « sunna » et « obligation » reste un khilâf qu'al-Dardīr ne tranche pas (voir divergences).",
    tarjih_hattab: "La divergence de Khalīl n'est qu'une divergence de mots sur l'avis prépondérant : « إنَّمَا هُوَ خِلَافٌ فِي التَّعْبِيرِ عَلَى الْقَوْلِ الرَّاجِحِ فِي حُكْمِ إزَالَةِ النَّجَاسَةِ وَلَا يَنْبَنِي عَلَيْهِ اخْتِلَافٌ فِي الْمَعْنَى ».",
    tanbihat: [
      "Al-Ḥaṭṭāb précise que sa thèse vaut pour l'avis prépondérant : il existe bien un avis selon lequel, sur la sunna, celui qui a prié exprès ne refait pas toujours (al-Maʿūna, al-Bājī, ʿAbd al-Ḥaqq, Ibn Rushd), mais personne ne l'a préféré dans cette question : « لَمْ أَرَ مَنْ ذَكَرَ فِي هَذِهِ الْمَسْأَلَةِ بِخُصُوصِهَا تَرْجِيحَ الْقَوْلِ بِعَدَمِ إعَادَةِ الْعَامِدِ أَبَدًا ».",
      "Il ajoute qu'en chaque question on s'appuie sur les textes qui la traitent, non sur une divergence qu'on y transpose d'ailleurs.",
      "Il dit s'être étendu parce que beaucoup tirent de l'avis de la sunna que celui qui prie exprès ne refait pas toujours : « وَلَيْسَ عِنْدِي بِصَحِيحٍ »."
    ],
    divergences: [
      "Divergence — la nature du khilâf. Al-Ḥaṭṭāb : divergence de mots (« خِلَافٌ فِي التَّعْبِيرِ »). Al-Dardīr le rapporte puis l'écarte : « (خِلَافٌ) لَفْظِيٌّ لِاتِّفَاقِهِمَا عَلَى إعَادَةِ الذَّاكِرِ الْقَادِرِ أَبَدًا وَالْعَاجِزِ وَالنَّاسِي فِي الْوَقْتِ قَالَهُ الْحَطَّابُ وَرُدَّ بِوُجُوبِ الْإِعَادَةِ عَلَى الْوُجُوبِ وَنَدْبِهَا عَلَى السُّنِّيَّةِ » ; il conclut : « فَالْخِلَافُ مَعْنَوِيٌّ ». Al-Dasūqī objecte d'abord à al-Ḥaṭṭāb que Khalīl, par « خِلَافٌ », vise une divergence de tashhīr (« لِأَنَّ اصْطِلَاحَهُ أَنَّهُ يُشِيرُ بِخِلَافٍ إلَى الِاخْتِلَافِ فِي التَّشْهِيرِ لَا لِلِاخْتِلَافِ فِي التَّعْبِيرِ ») et juge plus proche l'avis de « عج » (sigle non défini dans la liste d'al-Dasūqī), qui tient la divergence pour réelle ; puis il rapporte la réponse tirée d'Ibn Rushd (sur la sunna aussi, celui qui prie exprès refait toujours, obligatoirement) : « وَحِينَئِذٍ فَالْخِلَافُ لَفْظِيٌّ كَمَا قَالَ ح » ; son maître al-ʿAdawī conclut : « فَمَنْ قَالَ: إنَّ الْخِلَافَ لَفْظِيٌّ فَقَدْ نَظَرَ لِطَرِيقَةِ ابْنِ رُشْدٍ وَمَنْ قَالَ: إنَّهُ حَقِيقِيٌّ فَقَدْ نَظَرَ لِطَرِيقَةِ الْقُرْطُبِيِّ ».",
      "Point à comparer — le sens d'« obligation ». Al-Dardīr : « (أَوْ وَاجِبَةٌ) وُجُوبَ شَرْطٍ » ; al-Dasūqī : « فَالْمُرَادُ بِالْوُجُوبِ مَا تَتَوَقَّفُ صِحَّةُ الْعِبَادَةِ عَلَيْهِ لَا مَا يُثَابُ عَلَى فِعْلِهِ وَيُعَاقَبُ عَلَى تَرْكِهِ ». Al-Ḥaṭṭāb donne le même double sens du mot « obligatoire » à propos de la prière surérogatoire (voir 01c).",
      "Complément — qui a déclaré la sunna mashhūr. Al-Ḥaṭṭāb : Ibn Rushd, Ibn Yūnus, ʿAbd al-Ḥaqq. Al-Dardīr : « وَشَهَرَهُ فِي الْبَيَانِ مِنْ قَوْلَيْ ابْنِ الْقَاسِمِ عَنْ مَالِكٍ وَحَكَى بَعْضُهُمْ الِاتِّفَاقَ عَلَيْهِ » ; al-Dasūqī ajoute, pour l'obligation : « قَالَ اللَّخْمِيُّ وَهُوَ مَذْهَبُ الْمُدَوَّنَةِ ».",
      "Complément — les autres avis. Al-Ḥaṭṭāb rapporte, d'après at-Tawḍīḥ, un quatrième avis d'Ibn Rushd : la recommandation. Al-Dasūqī : « وَتَرَكَ الْقَوْلَ بِالنَّدْبِ؛ لِأَنَّهُ شَاذٌّ لَا يُلْتَفَتُ إلَيْهِ », et cite l'avis d'Abū l-Faraj, obligation dans tous les cas : « وَهُوَ مِثْلُ مَذْهَبِ الشَّافِعِيِّ ».",
      "Concordance — la condition « s'il s'en souvient et le peut ». Al-Ḥaṭṭāb (d'après Ibn Marzūq) : elle ne porte que sur l'avis de l'obligation. Al-Dasūqī : « قَيْدٌ فِي الْوُجُوبِ فَقَطْ », « كَمَا قَرَّرَ بِهِ ابْنُ مَرْزُوقٍ وَح » ; il écarte la lecture de « عبق » (ʿAbd al-Bāqī az-Zurqānī), à la suite de « عج », qui la rapporte aux deux avis, puis conclut que la différence est de mots."
    ],
    exemple: "Avant le ẓuhr, un homme voit qu'une goutte d'urine a taché son pantalon ; il a de l'eau. Il lave la tache avant de prier. S'il priait ainsi en le sachant, il referait sa prière même après la fin de son temps : c'est la conséquence commune aux deux avis selon al-Ḥaṭṭāb.",
    erreurs_frequentes: [
      "Croire que, puisque Ibn Rushd déclare mashhūr l'avis « sunna », on peut prier exprès avec une impureté sans rien refaire : selon al-Ḥaṭṭāb, celui qui le fait refait toujours sa prière.",
      "Croire que la divergence « sunna / obligation » change la pratique : selon al-Ḥaṭṭāb, les deux avis mènent aux mêmes reprises ; al-Dardīr relève seulement une différence sur le caractère obligatoire ou recommandé de la reprise."
    ],
    termes: [
      { ar: "إِزَالَةُ النَّجَاسَةِ", translit: "izâlatou n-najâsa", def: "Fait d'ôter l'impureté du vêtement, du corps ou du lieu ; on l'appelle aussi purification de la souillure (طَهَارَةُ الخَبَثِ)." },
      { ar: "خِلَافٌ مَعْنَوِيّ", translit: "khilâfoun maʿnawiyy", def: "Divergence de fond : les avis ne mènent pas aux mêmes conséquences ; contraire de la divergence de mots." }
    ],
    quiz: [
      { q: "Quels sont les deux avis que Khalīl rapporte sur le fait d'ôter l'impureté pour prier ?",
        choix: ["Obligatoire ou déconseillé", "Recommandé ou permis", "Sunna, ou obligatoire si l'on s'en souvient et qu'on le peut", "Obligatoire seulement pour la prière du vendredi"],
        bonne: 2,
        explication: "« سُنَّةٌ، أَوْ وَاجِبَةٌ إنْ ذَكَرَ وَقَدَرَ … خِلَافٌ »." },
      { q: "Selon al-Ḥaṭṭāb, cette divergence est…",
        choix: ["Une divergence de mots, sans conséquence pratique différente", "Une divergence profonde sur la validité de la prière", "Une erreur de copie", "Une divergence entre malikites et shafiʿites"],
        bonne: 0,
        explication: "« إنَّمَا هُوَ خِلَافٌ فِي التَّعْبِيرِ »." },
      { q: "Selon Ibn Rushd, quel avis est mashhūr dans l'école ?",
        choix: ["L'obligation absolue (Ibn Wahb)", "La simple recommandation", "L'obligation avec souvenir et capacité", "La sunna : avis d'Ibn al-Qāsim et sa riwāya de Mālik"],
        bonne: 3,
        explication: "« الْمَشْهُورُ فِي الْمَذْهَبِ قَوْلُ ابْنِ الْقَاسِمِ وَرِوَايَتُهُ عَنْ مَالِكٍ أَنَّ رَفْعَ النَّجَاسَاتِ مِنْ الثِّيَابِ وَالْأَبْدَانِ سُنَّةٌ »." },
      { q: "Mise en situation : un ami dit : « Ôter l'impureté n'est qu'une sunna ; si je prie exprès avec une tache d'urine, je n'ai rien à refaire. » Que répond le texte, selon al-Ḥaṭṭāb ?",
        choix: ["Il a raison : c'est une sunna", "Il refait toujours sa prière, même sur l'avis de la sunna, pour l'avoir délaissée exprès", "Il refait seulement s'il est imam", "Il doit seulement demander pardon"],
        bonne: 1,
        explication: "Ibn Rushd : « وَأَمَّا مَنْ صَلَّى عَالِمًا غَيْرَ مُضْطَرٍّ مُتَعَمِّدًا أَوْ جَاهِلًا أَعَادَ أَبَدًا لِتَرْكِهِ السُّنَّةَ عَامِدًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "130-133" },
    alertes: [
      "Champ « hukm » : le matn laisse deux qualifications (sunna / obligation) ; « wajib » est retenu au sens de « وُجُوبَ شَرْطٍ » (al-Dardīr), qui rend l'effet pratique commun aux deux avis selon al-Ḥaṭṭāb. Non bloquant.",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65–69 (Shamela 21604, pages 64–68)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01b",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Qui refait la prière faite avec une impureté",
    titre_ar: "مَنْ صَلَّى بِالنَّجَاسَةِ",
    objectif: "Savoir distinguer celui qui refait toujours (exprès, ou par ignorance de la règle) de celui qui refait seulement dans le temps (oubli, impureté inconnue, incapacité).",
    matn: "إنْ ذَكَرَ وَقَدَرَ وَإِلَّا أَعَادَ",
    regle_pratique: "Celui qui prie avec une impureté non tolérée en le sachant et en pouvant l'ôter — ou en ignorant la règle — refait sa prière même après son temps, et il a péché ; celui qui l'avait oubliée, ne l'avait pas vue ou ne pouvait pas l'ôter la refait seulement dans le temps, et cette reprise est recommandée.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Exprès et capable, ou ignorant de la règle : reprise toujours. Oubli, impureté inconnue, incapacité (pas d'eau, pas d'autre vêtement, pas d'autre endroit) : reprise dans le temps, recommandée."
    },
    explication: "Al-Ḥaṭṭāb : pouvoir ôter l'impureté, c'est avoir une eau absolue pour la laver, un vêtement pur, ou la possibilité de passer de l'endroit impur à un endroit pur. Ibn Rushd précise : celui qui prie avec un vêtement impur par oubli, sans savoir qu'il est impur, ou contraint (il n'en trouve pas d'autre) refait dans le temps ; celui qui prie en le sachant, sans y être contraint, exprès ou par ignorance, refait toujours, « pour avoir délaissé la sunna exprès, en négligeant sa prière, ou par une ignorance qui ne l'excuse pas » (« أَوْ جَاهِلًا وَلَا يُعْذَرُ بِجَهْلِهِ »).\n\nTanbīh — at-Tawḍīḥ, en citant Ibn Rushd, a omis un mot : il fait dire « par oubli ou par ignorance » au lieu de « par ignorance de l'impureté », ce qui laisse croire que celui qui ignore la règle est traité comme l'oublieux ; le Shāriḥ (dans son grand commentaire), al-Bisāṭī et d'autres l'ont suivi ; al-Ḥaṭṭāb a trouvé la même omission dans plusieurs copies d'at-Tawḍīḥ.\n\nAutres avis : al-Barqī rapporte d'Ashhab que celui qui prie exprès avec un vêtement impur ne refait que dans le temps ; c'est la lettre de la Mudawwana pour celui qui a seulement essuyé l'endroit de la ventouse (مَحَاجِم), sans distinguer l'oubli de l'intention ; Abū ʿImrān l'explique par la divergence sur cet essuyage, et Ibn Abī Zayd l'entend de l'oubli.\n\nLe péché : al-Maʿūna et al-Bājī disent que celui qui prie exprès avec l'impureté pèche, même sur l'avis de la sunna ; d'après at-Tawḍīḥ, al-Māzirī rapporte de ʿAbd al-Wahhāb l'accord sur ce point. Al-Bisāṭī : on s'en est étonné, le péché étant propre à l'obligation ; à son avis, il pèche pour avoir contrevenu à la sunna, et, sur l'obligation, pour avoir délaissé l'acte.\n\nAl-Dardīr : « sinon » — s'il a prié par oubli, sans la connaître du tout ou incapable, jusqu'à la fin de sa prière — il la refait, à titre recommandé, avec l'intention de l'obligatoire. Al-Dasūqī : sur l'avis de la sunna, on ne demande pas à l'oublieux ni à l'incapable d'ôter l'impureté, ce qui leur est impossible ; la sunna porte pour eux sur la reprise dans le temps.",
    aqwal: [
      { auteur: "Ibn al-Qāsim (rapporté par Ibn Rushd)", avis: "Exprès ou par ignorance, en pouvant l'ôter : reprise toujours ; oubli, impureté inconnue, contrainte : reprise dans le temps.", statut: "mashhur" },
      { auteur: "Ibn Wahb (rapporté par Ibn Rushd)", avis: "Reprise toujours dans tous les cas, même par oubli.", statut: "qawl" },
      { auteur: "Ashhab (rapporté par al-Barqī)", avis: "Celui qui prie exprès ne refait que dans le temps.", statut: "qawl" },
      { auteur: "ʿAbd al-Wahhāb (al-Maʿūna) ; al-Bājī", avis: "Celui qui prie exprès avec l'impureté a péché, même sur l'avis de la sunna.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَإِلَّا) بِأَنْ صَلَّى نَاسِيًا أَوْ لَمْ يَعْلَمْ بِهَا أَصْلًا أَوْ عَاجِزًا حَتَّى فَرَغَ مِنْ صَلَاتِهِ (أَعَادَ) نَدْبًا » ; la reprise toujours de celui qui s'en souvenait et pouvait l'ôter est rapportée par al-Dardīr d'après al-Ḥaṭṭāb (« إعَادَةِ الذَّاكِرِ الْقَادِرِ أَبَدًا »), et al-Dasūqī la tire du texte d'Ibn Rushd : « فَيُعْلَمُ مِنْ هَذَا أَنَّ الْعَامِدَ الْقَادِرَ يُعِيدُ أَبَدًا وُجُوبًا عَلَى كُلٍّ مِنْ الْقَوْلِ بِالْوُجُوبِ وَالسُّنِّيَّةِ ».",
    tarjih_hattab: "Celui qui ignore la règle n'est pas assimilé à l'oublieux : at-Tawḍīḥ, en citant Ibn Rushd, a omis un mot qui fausse le sens (« وَأُسْقِطَ مِنْهُ لَفْظَةٌ فَسَدَ بِهَا الْمَعْنَى »), le texte d'Ibn Rushd portant « أَوْ جَاهِلًا بِنَجَاسَةٍ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb pense que l'accord sur le péché de celui qui prie exprès explique que personne n'ait préféré l'avis selon lequel il ne refait pas toujours : « وَلَعَلَّ هَذَا هُوَ الْمُوجِبُ لِعَدَمِ تَرْجِيحِ الْقَوْلِ بِعَدَمِ إعَادَةِ الْعَامِدِ أَبَدًا ».",
      "Ibn Rushd juge la formule « obligatoire avec le souvenir » fausse à cause du contraint : il se souvient de l'impureté et ne refait pourtant que dans le temps."
    ],
    divergences: [
      "Point à comparer — la reprise de celui qui priait exprès : obligatoire ou recommandée ? Al-Ḥaṭṭāb (d'après Ibn Rushd) : il refait toujours, sur les deux avis. Al-Dardīr rapporte l'objection : « وَرُدَّ بِوُجُوبِ الْإِعَادَةِ عَلَى الْوُجُوبِ وَنَدْبِهَا عَلَى السُّنِّيَّةِ ». Al-Dasūqī : l'objection est de « عج » (sigle non défini dans la liste d'al-Dasūqī) ; selon Ibn Rushd, la reprise est obligatoire sur les deux avis, et l'avis de « عج » « لَا سَلَفَ لَهُ فِيهِ » ; mais, sur la voie d'al-Qurṭubī, l'avis de la sunna fait refaire dans le temps seulement, même exprès : « عَلَى الْقَوْلِ بِالسُّنِّيَّةِ يُعِيدُ الْمُصَلِّي بِالنَّجَاسَةِ فِي الْوَقْتِ فَقَطْ ».",
      "Concordance — ce qu'est « pouvoir l'ôter ». Al-Ḥaṭṭāb : une eau absolue, un vêtement pur, ou passer à un endroit pur. Al-Dasūqī : « عَلَى الْإِزَالَةِ بِوُجُودِ مُطْلَقٍ يُزِيلُ بِهِ أَوْ ثَوْبٌ أَوْ مَكَانٌ يَنْتَقِلُ إلَيْهِ طَاهِرٌ ».",
      "Complément — l'oublieux et l'incapable. Al-Dasūqī : sur l'avis de la sunna, ce n'est pas l'impureté à ôter qui leur est demandée, mais la reprise : « مَصْرُوفَةٌ لِطَلَبِ الْإِعَادَةِ فِي الْوَقْتِ لَا لِطَلَبِ الْإِزَالَةِ لِعَدَمِ إمْكَانِهَا »."
    ],
    exemple: "Une femme prie le ʿaṣr ; après le salut, elle voit sur sa manche une tache de sang qu'elle n'avait pas remarquée (au-delà de la petite quantité tolérée). Elle refait le ʿaṣr si le soleil n'a pas encore jauni ; ensuite, elle n'a rien à refaire. Si elle avait vu la tache et prié quand même, alors qu'elle pouvait changer de vêtement, elle referait même plus tard.",
    erreurs_frequentes: [
      "Croire que l'ignorance de la règle excuse comme l'oubli : selon Ibn Rushd, cité par al-Ḥaṭṭāb, cette ignorance n'excuse pas ; la reprise se fait toujours.",
      "Croire que celui qui n'avait pas d'autre vêtement doit refaire toujours : il est incapable, et ne refait que dans le temps."
    ],
    termes: [
      { ar: "عَامِد", translit: "ʿâmid", def: "Qui agit exprès, en connaissance de cause." },
      { ar: "عَاجِز", translit: "ʿâjiz", def: "Incapable ; ici, qui ne trouve ni eau pour laver l'impureté, ni vêtement pur, ni endroit pur." },
      { ar: "تَأْثِيم", translit: "ta'thîm", def: "Fait de juger quelqu'un pécheur." }
    ],
    quiz: [
      { q: "Qui refait sa prière même après la fin de son temps ?",
        choix: ["Celui qui avait oublié l'impureté", "Celui qui l'a vue et a prié exprès alors qu'il pouvait l'ôter", "Celui qui n'avait pas d'autre vêtement", "Celui qui ne l'avait pas vue"],
        bonne: 1,
        explication: "Ibn Rushd : « أَعَادَ أَبَدًا لِتَرْكِهِ السُّنَّةَ عَامِدًا »." },
      { q: "Celui qui ignorait que l'impureté empêche la prière est traité comme…",
        choix: ["L'oublieux : reprise dans le temps", "L'incapable", "Celui qui n'a rien à refaire", "Celui qui a prié exprès : son ignorance ne l'excuse pas"],
        bonne: 3,
        explication: "« أَوْ جَاهِلًا وَلَا يُعْذَرُ بِجَهْلِهِ »." },
      { q: "Selon al-Maʿūna et al-Bājī, celui qui prie exprès avec l'impureté, même sur l'avis de la sunna…",
        choix: ["A péché", "N'a pas péché", "A seulement fait une chose déconseillée", "A fait une chose permise"],
        bonne: 0,
        explication: "« صَرَّحَ فِي الْمَعُونَةِ بِأَنَّ الْعَامِدَ آثِمٌ وَإِنْ قُلْنَا إنَّهَا سُنَّةٌ »." },
      { q: "Mise en situation : en voyage, un homme n'a qu'un vêtement taché d'impureté et pas d'eau pour le laver ; il prie avec. Que fait-il s'il trouve de l'eau plus tard ?",
        choix: ["Rien, jamais", "Il refait toujours", "Il refait, à titre recommandé, si le temps de la prière n'est pas sorti", "Il refait seulement s'il est imam"],
        bonne: 2,
        explication: "Il était incapable ; al-Dardīr : « بِأَنْ صَلَّى نَاسِيًا أَوْ لَمْ يَعْلَمْ بِهَا أَصْلًا أَوْ عَاجِزًا حَتَّى فَرَغَ مِنْ صَلَاتِهِ (أَعَادَ) نَدْبًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "130-133" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 68–69 (Shamela 21604, pages 67–68)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01c",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Le vêtement : tout ce que porte celui qui veut prier",
    titre_ar: "عَنْ ثَوْبِ مُصَلٍّ",
    objectif: "Savoir que l'obligation vise tout ce que l'on porte au moment de prier, pour la prière obligatoire comme surérogatoire, et ce qu'il en est hors de la prière.",
    matn: "عَنْ ثَوْبِ مُصَلٍّ",
    regle_pratique: "Celui qui veut prier — prière obligatoire ou surérogatoire — ôte l'impureté de tout ce qu'il porte (vêtement, chaussures, épée, sac…) ; hors de la prière, s'en garder est seulement recommandé, et toucher l'impureté sans nécessité est déconseillé.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Voir 01b. Prière surérogatoire faite exprès avec l'impureté : elle ne se forme pas, et l'on n'a pas à la rattraper (Sanad)."
    },
    explication: "Al-Ḥaṭṭāb : par « vêtement », Khalīl ne vise pas seulement l'habit, mais tout ce que porte le fidèle — chaussures (خُفّ), épée, etc. —, comme l'a dit le qāḍī ʿIyāḍ. « Un fidèle » veut dire celui qui veut prier : éviter l'impureté dans le vêtement, le corps et le lieu n'est obligatoire qu'au moment d'entrer dans la prière ou dans un acte qui exige la pureté. Ibn Marzūq : hors de là, s'en garder est recommandé, et toucher l'impureté sans nécessité est déconseillé ; la Mudawwana déconseille de porter un vêtement impur au moment où l'on transpire. Un autre avis, rapporté par Zarrūq : s'en garder est obligatoire en soi, nul ne pouvant souiller un de ses membres, au point que certains en ont fait un péché véniel. Ibn al-Furāt le donne comme l'opposé du mashhūr : selon le mashhūr, l'enfant, la femme réglée et la personne en janâba n'ont à ôter l'impureté qu'au moment où la prière devient obligatoire ou se fait (pour l'enfant) ou au moment de se purifier (pour les autres) ; selon l'autre avis, c'est une obligation de l'islam sans lien avec la prière, d'après le verset « {وَثِيَابَكَ فَطَهِّرْ} » selon l'une de ses interprétations, avis choisi par Ibn al-ʿArabī. Al-Bisāṭī : il est peu probable que Khalīl veuille cela, la doctrine de l'école étant qu'elle est obligatoire pour la prière.\n\nKhalīl dit « un fidèle », sans article, pour inclure la prière obligatoire et la surérogatoire : nul ne peut prier exprès une prière surérogatoire avec une impureté ; s'il le fait, elle ne se forme pas, et il n'a pas à la rattraper, car aucune prière ne s'était établie à sa charge (Sanad). On ne peut objecter que la prière surérogatoire n'est pas obligatoire : selon ad-Dhakhīra, « obligatoire » a deux sens — ce dont l'abandon est un péché, et ce dont dépend la validité d'un acte d'adoration sans péché à l'omettre — ; c'est le second ici, comme les ablutions pour la prière surérogatoire.\n\nFarʿ — Ibn al-Imām : si l'impureté est en plusieurs endroits et que l'eau ne suffit que pour certains, on doit les laver, car réduire l'impureté est demandé ; mais non une partie d'un même endroit, ce qui l'étendrait. Il le tire de la parole de Mālik sur la nourrice (« وَلْتَدْرَأْ الْبَوْلَ جُهْدَهَا »), et Sanad le dit au chapitre du tayammoum.\n\nAl-Dardīr : « vêtement » veut dire ce qu'il porte (مَحْمُول, mahmoûl), y compris la pierre, l'herbe et la corde qu'il a sur lui ; le « fidèle » comprend l'enfant, son tuteur lui en donnant l'ordre. Al-Dasūqī : pour qui ne veut pas prier mais veut faire le ṭawāf ou toucher le Coran, ôter l'impureté d'un membre des ablutions est obligatoire, pour la validité des ablutions ; hors de ces membres, c'est obligatoire pour le ṭawāf et recommandé pour toucher le Coran ; hors de tout cela, c'est seulement recommandé, se souiller (تَضَمُّخ, tadammoukh) étant déconseillé selon l'avis retenu.",
    aqwal: [
      { auteur: "Mashhūr rapporté par Ibn al-Furāt", avis: "Ôter l'impureté n'est demandé qu'au moment de prier (ou de se purifier).", statut: "mashhur" },
      { auteur: "Ibn Marzūq", avis: "Hors de la prière, s'en garder est recommandé ; toucher l'impureté sans nécessité est déconseillé.", statut: "non_precise" },
      { auteur: "Avis rapporté par Zarrūq et Ibn al-Furāt ; choisi par Ibn al-ʿArabī", avis: "Éviter l'impureté est obligatoire en soi, sans lien avec la prière (« obligation de l'islam »).", statut: "qawl" },
      { auteur: "Sanad", avis: "La prière surérogatoire faite exprès avec une impureté ne se forme pas, et ne se rattrape pas.", statut: "non_precise" },
      { auteur: "Ibn al-Imām (d'après Mālik) ; Sanad", avis: "Si l'eau ne suffit pas pour tous les endroits souillés, on lave ceux qu'on peut.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (عَنْ ثَوْبِ مُصَلٍّ) يَعْنِي مَحْمُولَهُ » ; al-Dasūqī : « أَيْ مُرِيدِ الصَّلَاةِ لَا الْمُصَلِّي بِالْفِعْلِ », et, hors de la prière, du ṭawāf et du toucher du Coran, « فَإِنَّهَا تُنْدَبُ الْإِزَالَةُ فَقَطْ … بِنَاءً عَلَى الْمُعْتَمَدِ », à savoir « مِنْ أَنَّ التَّضَمُّخَ بِالنَّجَاسَةِ مَكْرُوهٌ ».",
    tarjih_hattab: "L'obligation n'existe que pour la prière : « وَكَلَامُ الْمُصَنِّفِ إنَّمَا يَدُلُّ عَلَى أَنَّهُ إنَّمَا يَجِبُ لِأَجْلِ الصَّلَاةِ ».",
    tanbihat: [
      "Ibn Shaʿbān (az-Zāhī) conseille à qui le peut de garder un vêtement pour les toilettes, afin d'écarter le doute ; al-Ḥaṭṭāb : « فِيمَا ذَكَرَهُ مِنْ إعْدَادِ ثَوْبِ الْخَلَاءِ نَظَرٌ ».",
      "Al-Ḥaṭṭāb rapporte que Saʿd ad-Dīn (Sharḥ al-ʿAqāʾid) compte la prière faite sans purification parmi les actes qui font sortir de l'islam."
    ],
    divergences: [
      "Complément — l'enfant. Al-Ḥaṭṭāb (Ibn al-Furāt) : l'enfant n'est tenu d'ôter l'impureté qu'au moment de faire la prière. Al-Dardīr : « وَشَمِلَ الْمُصَلِّي الصَّبِيَّ وَيَتَعَلَّقُ الْخِطَابُ بِوَلِيِّهِ فَيَأْمُرُهُ بِذَلِكَ ». Al-Dasūqī, d'après « بْن » (Muḥammad al-Bunānī) : selon l'avis correct de l'école, c'est l'enfant lui-même qui est visé, mais à titre de recommandation (« بَلْ عَلَى سَبِيلِ النَّدْبِ فَقَطْ »), à moins d'entendre « obligatoire » comme ce dont dépend la validité, « كَمَا فِي ح ».",
      "Complément — hors de la prière. Al-Ḥaṭṭāb (Ibn Marzūq) : recommandé ; toucher l'impureté sans nécessité, déconseillé. Al-Dasūqī détaille le ṭawāf et le toucher du Coran, pour une impureté hors des membres des ablutions : « وَجَبَتْ الْإِزَالَةُ فِي الطَّوَافِ وَنُدِبَتْ فِي مَسِّ الْمُصْحَفِ ».",
      "Concordance — la prière surérogatoire faite exprès avec l'impureté. Al-Ḥaṭṭāb (Sanad) : elle ne se forme pas et ne se rattrape pas. Al-Dasūqī : « وَفِي كَبِيرِ خش إنْ صَلَّى النَّفَلَ بِالنَّجَاسَةِ عَامِدًا لَمْ يَجِبْ قَضَاؤُهُ؛ لِأَنَّهُ لَمْ يَنْعَقِدْ » (« خش » : al-Kharashī).",
      "Concordance — réduire l'impureté. Al-Ḥaṭṭāb (Ibn al-Imām) : « لِأَنَّ تَقْلِيلَ النَّجَاسَةِ مَطْلُوبٌ ». Al-Dasūqī, à propos de l'impureté avalée : « لِأَنَّ تَقْلِيلَ النَّجَاسَةِ وَاجِبٌ »."
    ],
    exemple: "Avant le ṣubḥ, un fidèle remarque une tache d'urine sur la bandoulière du sac qu'il garde à l'épaule pendant la prière. Le sac fait partie de ce qu'il porte : il le pose ou lave la tache avant de prier. Le reste de la journée, quand il ne prie pas, il n'est pas tenu de la laver aussitôt, mais il évite de la toucher sans nécessité.",
    erreurs_frequentes: [
      "Croire que seul l'habit compte : tout ce que l'on porte pendant la prière (chaussures, sac, arme) doit être pur.",
      "Croire qu'une prière surérogatoire peut se faire avec une impureté puisqu'elle n'est pas obligatoire : faite exprès ainsi, elle ne se forme pas."
    ],
    termes: [
      { ar: "مَحْمُول", translit: "mahmoûl", def: "Ce que porte le fidèle : vêtements, chaussures, arme, sac, etc." },
      { ar: "تَضَمُّخ", translit: "tadammoukh", def: "Fait de se souiller, de s'enduire d'impureté ; hors de la prière, c'est déconseillé selon l'avis retenu." }
    ],
    quiz: [
      { q: "Que vise le mot « vêtement » (ثَوْب) dans le texte de Khalīl ?",
        choix: ["Seulement la chemise", "Seulement le turban", "Seulement ce qui touche la peau", "Tout ce que porte le fidèle : vêtements, chaussures, épée…"],
        bonne: 3,
        explication: "« بَلْ الْمُرَادُ كُلُّ مَا هُوَ حَامِلٌ لَهُ مِنْ خُفٍّ وَسَيْفٍ وَغَيْرِ ذَلِكَ »." },
      { q: "Hors de la prière (et d'un acte qui exige la pureté), se garder de l'impureté est, selon Ibn Marzūq…",
        choix: ["Obligatoire", "Recommandé", "Sans aucune importance", "Interdit"],
        bonne: 1,
        explication: "« وَأَمَّا تَجَنُّبُهَا فِي غَيْرِ ذَلِكَ فَمُسْتَحَبٌّ وَيُكْرَهُ مُبَاشَرَةُ النَّجَاسَةِ مِنْ غَيْرِ ضَرُورَةٍ »." },
      { q: "Une prière surérogatoire faite exprès avec une impureté…",
        choix: ["Est valable", "Est valable mais déconseillée", "Ne se forme pas, et l'on n'a pas à la rattraper", "Doit être rattrapée le lendemain"],
        bonne: 2,
        explication: "Sanad : « فَإِنْ فَعَلَ لَمْ يَنْعَقِدْ وَلَا قَضَاءَ عَلَيْهِ »." },
      { q: "Mise en situation : un voyageur a deux taches d'urine, l'une sur la manche, l'autre sur le bas du vêtement, et l'eau ne suffit que pour une. Que fait-il, selon Ibn al-Imām ?",
        choix: ["Il lave l'une des deux taches, car réduire l'impureté est demandé", "Il ne lave rien", "Il lave la moitié de chaque tache", "Il garde l'eau et attend"],
        bonne: 0,
        explication: "« لِأَنَّ تَقْلِيلَ النَّجَاسَةِ مَطْلُوبٌ بِخِلَافِ غَسْلِ بَعْضِ مَا فِي مَحَلٍّ وَاحِدٍ فَإِنَّ غَسْلَهُ يَزِيدُهُ انْتِشَارًا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "134" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65–66 et 68–69 (Shamela 21604, pages 64–65 et 67–68)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01d",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "… même le bout de son turban",
    titre_ar: "وَلَوْ طَرَفَ عِمَامَتِهِ",
    objectif: "Savoir que l'impureté compte même sur le bout du turban (ou du vêtement) qui traîne à terre, et distinguer le bout impur du bout pur posé sur une impureté.",
    matn: "وَلَوْ طَرَفَ عِمَامَتِهِ",
    regle_pratique: "L'impureté doit être ôtée même du bout du turban, du châle ou du vêtement qui traîne à terre pendant la prière, qu'il bouge ou non avec le fidèle ; en revanche, un bout de vêtement pur qui tombe sur une impureté sèche, à côté de l'endroit où l'on prie, ne nuit pas.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Bout impur : la prière est atteinte selon l'avis préféré, car le fidèle porte ce bout ; reprise selon 01b."
    },
    explication: "Al-Ḥaṭṭāb : l'impureté est à ôter du vêtement et de tout ce que porte le fidèle, même si le bout de ce vêtement ou du turban est jeté à terre, car l'usage le compte comme porteur (حَامِل, hâmil) de ce bout, qui se déplace avec lui ; un autre avis dit que cela ne nuit pas, et c'est à cette divergence que renvoie « même » (لَوْ). Le bout visé est celui qui traîne à terre : sinon, la gradation « même » n'aurait pas de sens.\n\nLa lettre de Khalīl étend la divergence au bout qui bouge avec le fidèle comme à celui qui ne bouge pas. Ibn al-Ḥājib laisse entendre que, s'il bouge, il compte par accord (« وَنَجَاسَةُ طَرَفِ الْعِمَامَةِ مُعْتَبَرَةٌ، وَقِيلَ: إنْ تَحَرَّكَتْ بِحَرَكَتِهِ ») ; Ibn ʿĀt le dit expressément (rapporté par Ibn Farḥūn), et Ibn Nājī va dans ce sens. D'après aṭ-Ṭirāz, ʿAbd al-Wahhāb traitait le turban comme la natte, ce qui justifie une divergence générale ; mais la préférence diffère : pour le turban, la nullité, car le fidèle le porte ; pour la natte, la validité (voir 01g).\n\nFarʿ — Ibn ʿArafa, d'après ʿIyāḍ : le bout du vêtement qui tombe sur une impureté sèche, hors de l'endroit du fidèle, ne compte pas. Ibn Nājī : c'est la lettre de la Mudawwana, et ʿIyāḍ ne rapporte pas d'autre avis ; Ibn Bashīr dit de même. Al-Burzulī se rappelle d'al-Ikmāl que les vêtements du fidèle qui touchent l'impureté sans qu'il s'y asseye ne lui nuisent pas, et il en tire qu'on ne peut s'asseoir ou se prosterner sur les vêtements sûrement impurs d'un voisin ; simplement le toucher ne nuit pas ; s'y adosser relève de la règle de la Mudawwana : « لَا يَسْتَنِدُ الْمُصَلِّي لِحَائِضٍ، وَلَا لِجُنُبٍ » — parce que celui qui s'adosse partage l'état de l'autre, ou à cause de ses vêtements impurs —, avec reprise dans le temps si on l'a fait. Ibn Nājī rapporte pourtant que son maître al-Burzulī contredisait ʿIyāḍ et tenait ce cas pour une prière sur une impureté ; certains en ont tiré qu'on refait la prière faite sur un matelas troué au-dessus d'une impureté qu'on ne touche pas, ce qu'Ibn Nājī juge très éloigné.\n\nFarʿ — la tente (خِبَاء, khibâ') dont les bords sont impurs : Ibn ʿArafa disait que si son toit touche le haut de la tête du fidèle, c'est comme le turban ; sinon, c'est comme une maison bâtie, et cela ne nuit pas (rapporté par al-Burzulī).\n\nAl-Dardīr : même si le « vêtement » est le bout du turban jeté à terre, qu'il bouge ou non avec le fidèle. Al-Dasūqī : de même le bout du manteau ; « même » répond à l'avis rapporté par ʿAbd al-Ḥaqq (an-Nukat), lequel vise le bout qui ne bouge pas : s'il bouge, il compte par accord, selon Ibn al-Ḥājib, Ibn Nājī et Ibn ʿĀt, mais al-Ḥaṭṭāb rapporte de ʿAbd al-Wahhāb ce qui étend la divergence.",
    aqwal: [
      { auteur: "Avis retenu par Khalīl ; préféré par al-Ḥaṭṭāb", avis: "L'impureté au bout du turban qui traîne à terre compte : le fidèle le porte.", statut: "rajih" },
      { auteur: "Avis rapporté sans attribution (« وَقِيلَ ») ; ʿAbd al-Ḥaqq (an-Nukat), selon al-Dasūqī", avis: "Cela ne nuit pas.", statut: "qawl" },
      { auteur: "Ibn al-Ḥājib ; Ibn ʿĀt (rapporté par Ibn Farḥūn)", avis: "S'il bouge avec le fidèle, il compte par accord.", statut: "non_precise" },
      { auteur: "ʿIyāḍ (rapporté par Ibn ʿArafa) ; Ibn Bashīr", avis: "Le bout d'un vêtement pur tombé sur une impureté sèche, hors de l'endroit du fidèle, ne compte pas.", statut: "non_precise" },
      { auteur: "Al-Burzulī (rapporté par Ibn Nājī)", avis: "Ce cas est comme celui qui prie sur une impureté.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَلَوْ) كَانَ (طَرَفَ عِمَامَتِهِ) الْمُلْقَى بِالْأَرْضِ تَحَرَّكَ بِحَرَكَتِهِ أَوْ لَا ». Le cas du bout pur tombé sur une impureté sèche n'est pas repris dans les pages croisées : muʿtamad non tranché sur ce point.",
    tarjih_hattab: "Le bout du turban annule, à la différence du bout de la natte : « فَالْأَرْجَحُ فِي الْعِمَامَةِ الْبُطْلَانُ؛ لِأَنَّهُ يُعَدُّ حَامِلًا لَهَا » ; le bout pur tombé sur une impureté sèche ne nuit pas : « وَمَا قَالَهُ عِيَاضٌ وَارْتَضَاهُ ابْنُ نَاجِي هُوَ الظَّاهِرُ ».",
    tanbihat: [
      "L'auteur d'al-Jamʿ rapporte d'ad-Dhakhīra que le bout du turban posé sur une impureté ne nuit pas, le bout impur étant porté, à la différence du bout posé ; al-Ḥaṭṭāb : « وَلَمْ أَرَ فِي الذَّخِيرَةِ مَا ذَكَرَهُ فِيهَا ».",
      "Al-Ḥaṭṭāb ajoute que l'acceptation par Ibn ʿArafa suffit à appuyer l'avis de ʿIyāḍ."
    ],
    divergences: [
      "Concordance — le bout qui bouge ou non. Al-Ḥaṭṭāb : la lettre de Khalīl étend la divergence aux deux cas. Al-Dardīr : « الْمُلْقَى بِالْأَرْضِ تَحَرَّكَ بِحَرَكَتِهِ أَوْ لَا ». Al-Dasūqī : « لَكِنْ نَقَلَ ح عَنْ عَبْدِ الْوَهَّابِ مَا يَقْتَضِي إطْلَاقَ الْخِلَافِ وَهُوَ ظَاهِرُ الْمُصَنِّفِ ».",
      "Complément — l'auteur de l'avis contraire. Al-Ḥaṭṭāb : « وَقِيلَ: لَا يَضُرُّهُ ذَلِكَ », sans nom. Al-Dasūqī : « وَرَدَّ بِلَوْ عَلَى مَا نَقَلَهُ عَبْدُ الْحَقِّ فِي النُّكَتِ » ; il ajoute le manteau : « أَوْ طَرَفُ رِدَائِهِ الْمُلْقَى بِالْأَرْضِ ».",
      "Concordance — la tente. Al-Ḥaṭṭāb (al-Burzulī, d'après Ibn ʿArafa) et al-Dasūqī : si son toit touche la tête du fidèle, « فَإِنَّهُ تَبْطُلُ صَلَاتُهُ؛ لِأَنَّهُ يُعَدُّ حَامِلًا لَهَا عُرْفًا فَهِيَ كَالْعِمَامَةِ لَا كَالْبَيْتِ ».",
      "Complément — deux fidèles tenant chacun un bout d'une corde dont le milieu, à terre, est impur. Al-Dasūqī : « بَطَلَتْ عَلَيْهِمَا عَلَى الظَّاهِرِ », point examiné par « عبق » (ʿAbd al-Bāqī az-Zurqānī). Al-Ḥaṭṭāb n'en parle pas ici."
    ],
    exemple: "Pendant la prière, le pan d'un long châle traîne au sol à côté du fidèle ; il est taché de sang au-delà de la petite quantité tolérée. Selon l'avis préféré par al-Ḥaṭṭāb, il porte ce pan : sa prière est atteinte. Si le pan, propre, retombe sur une crotte sèche à côté de son tapis, cela ne nuit pas.",
    erreurs_frequentes: [
      "Croire que seul ce qui couvre le corps compte : le bout du turban ou du châle qui traîne à terre est porté par le fidèle.",
      "Confondre le bout impur (il nuit) et le bout pur qui tombe sur une impureté sèche hors de l'endroit du fidèle (il ne nuit pas, selon ʿIyāḍ)."
    ],
    termes: [
      { ar: "حَامِل", translit: "hâmil", def: "Qui porte ; le fidèle est réputé porter ce qui tient à lui et se déplace avec lui." },
      { ar: "خِبَاء", translit: "khibâ'", def: "Tente (de poil ou de tissu)." },
      { ar: "اِسْتِنَاد", translit: "istinâd", def: "Fait de s'adosser, de s'appuyer sur quelqu'un ou quelque chose." }
    ],
    quiz: [
      { q: "Le bout du turban qui traîne à terre pendant la prière est impur. Selon l'avis préféré par al-Ḥaṭṭāb…",
        choix: ["La prière est atteinte : le fidèle porte ce bout", "Cela ne nuit jamais", "Cela nuit seulement s'il est mouillé", "Cela nuit seulement dans la prière du vendredi"],
        bonne: 0,
        explication: "« فَالْأَرْجَحُ فِي الْعِمَامَةِ الْبُطْلَانُ؛ لِأَنَّهُ يُعَدُّ حَامِلًا لَهَا »." },
      { q: "Selon al-Dardīr, la règle vaut-elle si ce bout ne bouge pas avec le fidèle ?",
        choix: ["Non, seulement s'il bouge", "Seulement pour un enfant", "Oui, qu'il bouge avec lui ou non", "Seulement si le bout est mouillé"],
        bonne: 2,
        explication: "« الْمُلْقَى بِالْأَرْضِ تَحَرَّكَ بِحَرَكَتِهِ أَوْ لَا »." },
      { q: "Un bout de vêtement pur tombe sur une impureté sèche, à côté de l'endroit où l'on prie. Selon ʿIyāḍ, retenu par al-Ḥaṭṭāb…",
        choix: ["La prière est nulle", "Cela ne compte pas", "Il faut refaire dans le temps", "Il faut laver le vêtement après"],
        bonne: 1,
        explication: "« وَسُقُوطُ طَرَفِ ثَوْبِ الْمُصَلِّي عَلَى جَافِّ نَجَاسَةٍ بِغَيْرِ مَحَلِّهِ لَغْوٌ »." },
      { q: "Mise en situation : en camping, un fidèle prie sous une petite tente dont la toile souillée touche le haut de sa tête. Que dit le texte ?",
        choix: ["Rien : la tente est comme une maison", "C'est seulement déconseillé", "Il doit refaire seulement s'il est debout", "La toile compte comme son turban : il porte cette impureté"],
        bonne: 3,
        explication: "Ibn ʿArafa (rapporté par al-Burzulī) : « إنْ كَانَ سَطْحُ رَأْسِ الْمُصَلِّي يُمَاسُّ الْخِبَاءَ فَهِيَ كَمَسْأَلَةِ الْعِمَامَةِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "134-138" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65–66 (Shamela 21604, pages 64–65)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01e",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Le corps, et l'impureté avalée",
    titre_ar: "وَبَدَنِهِ",
    objectif: "Savoir quelles parties du corps doivent être débarrassées de l'impureté, et que faire si l'on a avalé une chose impure.",
    matn: "وَبَدَنِهِ",
    regle_pratique: "Le fidèle ôte l'impureté de tout son corps visible et de ce qui en a la règle — intérieur de la bouche, du nez et des yeux, conduit de l'oreille autant qu'il peut — ; s'il a avalé une chose impure (du vin, par exemple), il doit la vomir s'il le peut ; s'il le pouvait et ne l'a pas fait, il refait les prières faites tant qu'il pense qu'elle reste dans son ventre ; s'il ne le peut pas, il n'a rien à refaire.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Impureté du corps : voir 01b. Impureté avalée qu'on pouvait vomir : prières refaites toujours, tant qu'on pense qu'elle demeure (al-Dardīr) ; si on ne peut pas la vomir : rien."
    },
    explication: "Al-Ḥaṭṭāb : le corps comprend sans aucun doute sa surface visible et ce qui en a la règle, comme l'intérieur de la bouche et du nez (Sanad, chapitre de l'ordre des ablutions) ; de même l'intérieur des yeux : celui qui s'est mis un khôl de fiel de porc ou d'une autre impureté doit laver l'intérieur de ses yeux ; et si une impureté atteint ses oreilles, il essuie ce qu'il peut de leur conduit (صِمَاخ, simâkh). Celui dont la bouche saigne ne la purifie pas, selon l'avis le plus correct, en crachant sa salive jusqu'à ce que le sang cesse (point traité plus loin) ; at-Tawḍīḥ dit, au chapitre du saignement de nez, que l'intérieur de la bouche a la règle de l'extérieur. Pour la purification du ḥadath, au contraire, l'intérieur de la bouche, du nez, des yeux et des oreilles est « intérieur » : on n'est pas tenu de le laver.\n\nL'intérieur du corps : ce qui naît dans le corps humain n'est jugé impur qu'une fois sorti. La divergence porte sur l'impureté qu'on y a fait entrer, comme le vin ou une chose impure qu'on a bue. At-Tūnisī : ce qui entre dans le corps, pur ou impur, ne compte pas. Al-Lakhmī : l'impureté entrée dans le corps est comme celle du dehors ; il le rapporte de la riwāya de Muḥammad (Ibn al-Mawwāz) : celui qui a bu un peu de vin, sans en être ivre, refait toujours ses prières pendant tout le temps où il pense qu'il reste dans son ventre. Ibn Nājī pensait d'abord que c'était la doctrine de la Mudawwana, puis a jugé que ses termes ne l'indiquent pas. Al-Qarāfī (84e farq) ne retient que ce second avis : il n'y a pas de différence entre l'impureté à la surface du corps et celle de l'intérieur, et la prière en est annulée ; Ibn ash-Shāṭṭ l'a contesté, disant ne l'avoir trouvé chez personne d'autre, sans doute faute d'avoir vu ce qu'al-Lakhmī rapporte d'Ibn al-Mawwāz.\n\nTanbīh — Ibn Nājī : si le buveur s'est repenti et ne peut pas vomir, sa prière est-elle valide, comme celle de l'incontinent, ou y a-t-il divergence, comme pour celui qui s'est endetté pour le mal puis s'est repenti et que l'on discute de faire bénéficier de la zakāt ? Son maître ash-Shabībī tranche pour la validité. Al-Ḥaṭṭāb en déduit qu'il doit se faire vomir (تَقَايُؤ, taqâyou'), et que sa prière faite alors qu'il pouvait vomir n'est pas valide ; aṭ-Ṭirāz indique aussi l'obligation de vomir sur cet avis. Sur l'avis d'at-Tūnisī, la prière est valide s'il préserve son vêtement et sa bouche du vin et des impuretés.\n\nAl-Dardīr : le corps, visible, et ce qui en a la règle (intérieur du nez, de la bouche, de l'oreille et de l'œil), bien qu'ils soient « intérieurs » pour le ḥadath ; celui qui a mangé ou bu une impureté doit la vomir s'il le peut, sinon il refait toujours ; s'il ne peut pas vomir, il n'a rien à faire. Al-Dasūqī : on lave l'intérieur des yeux sauf crainte d'un dommage (on est alors incapable) ; le sang des dents oblige à laver l'intérieur de la bouche ; la salive et les larmes ne suffisent pas, il faut une eau absolue.",
    aqwal: [
      { auteur: "Muḥammad ibn al-Mawwāz (riwāya rapportée par al-Lakhmī)", avis: "L'impureté avalée est comme celle du dehors : la prière se refait toujours tant qu'on la pense dans le ventre. Rājiḥ selon Ibn ʿArafa, mashhūr selon al-Qarāfī (rapportés par al-Dasūqī).", statut: "mashhur" },
      { auteur: "At-Tūnisī", avis: "Ce qui entre dans le corps, pur ou impur, ne compte pas.", statut: "qawl" },
      { auteur: "Al-Qarāfī (84e farq)", avis: "Aucune différence entre l'impureté du dehors et celle du dedans : la prière en est annulée.", statut: "non_precise" },
      { auteur: "Ash-Shabībī (rapporté par Ibn Nājī)", avis: "Celui qui s'est repenti et ne peut pas vomir prie validement, comme l'incontinent.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « وَلَوْ أَكَلَ أَوْ شَرِبَ نَجَسًا وَجَبَ عَلَيْهِ أَنْ يَتَقَايَأَهُ إنْ أَمْكَنَ وَإِلَّا وَجَبَ عَلَيْهِ الْإِعَادَةُ أَبَدًا مُدَّةَ مَا يَرَى بَقَاءَ النَّجَاسَةِ فِي بَطْنِهِ، فَإِنْ لَمْ يُمْكِنْ التَّقَايُؤُ فَلَا شَيْءَ عَلَيْهِ لِعَجْزِهِ عَنْ إزَالَتِهَا » ; al-Dasūqī : c'est la riwāya de Muḥammad ibn al-Mawwāz, « وَكَلَامُ ابْنِ عَرَفَةَ يُفِيدُ أَنَّ الرَّاجِحَ رِوَايَةُ مُحَمَّدٍ وَقَالَ الْقَرَافِيُّ: إنَّهُ الْمَشْهُورُ ».",
    tarjih_hattab: "L'impureté avalée compte comme celle du dehors : « وَالصَّوَابُ مَا قَالَهُ الْقَرَافِيُّ » ; il en tire « أَنَّهُ يَجِبُ عَلَيْهِ أَنْ يَتَقَايَأَ ذَلِكَ وَأَنَّهُ لَوْ صَلَّى بِذَلِكَ مَعَ تَمَكُّنِهِ مِنْ الْقَيْءِ لَمْ تَصِحَّ صَلَاتُهُ ».",
    tanbihat: [
      "Ce qui naît dans le corps n'est jugé impur qu'une fois sorti : « أَمَّا مَا يَتَوَلَّدُ فِي بَاطِنِ الْآدَمِيِّ فَلَا يُحْكَمُ لَهُ بِالنَّجَاسَةِ إلَّا بَعْدَ انْفِصَالِهِ ».",
      "Pour la purification du ḥadath, l'intérieur de la bouche, du nez, des yeux et des oreilles est « intérieur » : on n'est pas tenu de le laver, contrairement à l'impureté.",
      "Sur la question d'Ibn Nājī (repentir sans pouvoir vomir), Ibn Nājī lui-même dit de l'avis d'ash-Shabībī : « وَفِيهِ نَظَرٌ »."
    ],
    divergences: [
      "Concordance — le repentir est sans effet. Al-Ḥaṭṭāb, après la question d'Ibn Nājī : « وَكَذَلِكَ إنْ لَمْ يَتُبْ » (celui qui pouvait vomir : prière non valide, repenti ou non ; voir alertes). Al-Dardīr : « فَإِنْ لَمْ يُمْكِنْ التَّقَايُؤُ فَلَا شَيْءَ عَلَيْهِ » ; al-Dasūqī : « وَأَنَّ صَلَاتَهُ صَحِيحَةٌ سَوَاءٌ تَابَ أَمْ لَا وَهُوَ كَذَلِكَ كَمَا صَرَّحَ بِهِ ح خِلَافًا لِمَا فِي خش » (« خش » : al-Kharashī).",
      "Complément — durée et cas. Al-Dasūqī : la reprise vaut pour toute prière faite « مُدَّةَ مَا يَرَى بَقَاءَ النَّجَاسَةِ » — par certitude, opinion probable ou doute —, tant que la chose garde sa nature impure (le vin tant qu'il reste vin, d'après « طفى », Muṣṭafā ar-Rammāṣī), sans distinguer la manière dont on l'a prise : « وَلَا فَرْقَ فِي هَذَا التَّفْصِيلِ بَيْنَ أَنْ يَكُونَ تَعَاطَى النَّجَاسَةَ عَمْدًا أَوْ سَهْوًا » ; et l'on vomit ce qu'on peut, même une partie.",
      "Concordance — les yeux, la bouche, les oreilles. Al-Ḥaṭṭāb (Sanad) : laver l'intérieur des yeux après un khôl impur, essuyer le conduit des oreilles autant qu'on peut. Al-Dasūqī : « فَمَنْ اكْتَحَلَ بِمَرَارَةِ خِنْزِيرٍ غَسَلَ دَاخِلَ عَيْنَيْهِ إنْ لَمْ يَخْشَ ضَرَرًا بِالْغَسْلِ » ; la salive et les larmes ne suffisent pas : « بَلْ لَا بُدَّ مِنْ الْمُطْلَقِ »."
    ],
    exemple: "Un homme découvre, après le ẓuhr, que la boisson qu'il a bue à midi était du vin ; il n'est pas ivre. S'il peut se faire vomir, il le fait avant l'ʿaṣr ; s'il ne le fait pas alors qu'il le pouvait, il refait les prières faites tant qu'il pense que le vin est encore dans son ventre. S'il ne peut pas vomir, il prie, et n'a rien à refaire.",
    erreurs_frequentes: [
      "Croire que seul l'extérieur du corps compte : l'intérieur de la bouche, du nez et des yeux a ici la règle de l'extérieur.",
      "Croire qu'une impureté avalée ne compte plus : selon la riwāya d'Ibn al-Mawwāz, retenue par al-Dardīr, il faut la vomir si on le peut."
    ],
    termes: [
      { ar: "صِمَاخ", translit: "simâkh", def: "Conduit de l'oreille." },
      { ar: "تَقَايُؤ", translit: "taqâyou'", def: "Fait de se faire vomir." }
    ],
    quiz: [
      { q: "Pour ôter une impureté, l'intérieur de la bouche est…",
        choix: ["Comme l'intérieur du ventre : on n'y touche pas", "Sans importance", "Comme la surface du corps : on le lave", "Lavé seulement pendant les ablutions"],
        bonne: 2,
        explication: "Al-Ḥaṭṭāb : « وَصَرَّحَ فِي التَّوْضِيحِ فِي بَابِ الرُّعَافِ بِأَنَّ دَاخِلَ الْفَمِ لَهُ حُكْمُ الظَّاهِرِ »." },
      { q: "Quelqu'un s'est mis un khôl contenant du fiel de porc. Que doit-il faire, selon Sanad ?",
        choix: ["Rien", "Refaire ses ablutions", "Se raser les sourcils", "Laver l'intérieur de ses yeux"],
        bonne: 3,
        explication: "« فَلَوْ اكْتَحَلَ بِمَرَارَةِ خِنْزِيرٍ، أَوْ غَيْرِهِ مِنْ النَّجَاسَاتِ أَمَرْنَاهُ بِغَسْلِ دَاخِلِ عَيْنَيْهِ »." },
      { q: "Mise en situation : quelqu'un découvre qu'il a bu du vin par méprise, et il peut se faire vomir. Selon al-Dardīr…",
        choix: ["Il doit le vomir", "Il n'a rien à faire", "Il attend le lendemain pour prier", "Il fait seulement le ghousl"],
        bonne: 0,
        explication: "« وَجَبَ عَلَيْهِ أَنْ يَتَقَايَأَهُ إنْ أَمْكَنَ » ; al-Dasūqī : même si on l'a pris par erreur." },
      { q: "S'il ne peut pas vomir l'impureté avalée, selon al-Dardīr…",
        choix: ["Il refait ses prières pendant un mois", "Il n'a rien à faire : il est incapable de l'ôter", "Il ne prie pas tant qu'elle est dans son ventre", "Il doit jeûner"],
        bonne: 1,
        explication: "« فَإِنْ لَمْ يُمْكِنْ التَّقَايُؤُ فَلَا شَيْءَ عَلَيْهِ لِعَجْزِهِ عَنْ إزَالَتِهَا »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "135" },
    alertes: [
      "Précisé (campagne de correction) : « وَكَذَلِكَ إنْ لَمْ يَتُبْ » se rattache à celui qui pouvait vomir et ne l'a pas fait : sa prière n'est pas valide, qu'il se soit repenti ou non. Al-Zurqānī (14297, p. 69) : « فإن لم يتقاياه بطلت صلاته ولو تاب » ; Minaḥ (21614, p. 50) : « فَهُوَ كَمَنْ صَلَّى بِالنَّجَاسَةِ مُتَعَمِّدًا وَلَوْ تَابَ » ; la glose imprimée avec al-Kharashī (91, p. 101) : « فَإِنْ لَمْ يُمْكِنْ صَحَّتْ صَلَاتُهُ وَإِلَّا فَلَا تَابَ أَمْ لَا ». Il n'y a donc pas de contradiction avec al-Dasūqī, qui parle de celui qui ne peut pas vomir (anomalie n° 135).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 66–67 (Shamela 21604, pages 65–66)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01f",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Le lieu : là où se posent les membres",
    titre_ar: "وَمَكَانِهِ",
    objectif: "Savoir quelle partie du lieu de prière doit être pure, et ce qui ne nuit pas autour du fidèle.",
    matn: "وَمَكَانِهِ",
    regle_pratique: "Doit être pur l'endroit que touchent les membres du fidèle : là où il se tient, s'assoit, se prosterne et pose les mains ; une impureté devant lui, à sa droite, à sa gauche, sous sa poitrine ou entre ses genoux pendant la prosternation, sans contact, ne nuit pas à sa prière.",
    qualification: {
      hukm: "wajib",
      nature: "shart",
      effet_si_omis: "Voir 01b."
    },
    explication: "Al-Ḥaṭṭāb : l'impureté est aussi à ôter de l'endroit du fidèle ; ce qui compte, c'est l'endroit où il se tient, se prosterne et s'assoit, et celui de ses paumes, comme l'ont dit plusieurs savants. Al-Jawāhir : tout ce qui touche le corps du fidèle quand il se tient, s'assoit et se prosterne doit être pur ; ad-Dhakhīra ajoute que ce qu'il ne touche pas ne lui nuit pas. Ce qui est devant lui, à sa droite ou à sa gauche ne lui nuit pas : la Mudawwana permet de prier face au mur de latrines (مِرْحَاض, mirhâd) ou à une tombe si l'endroit du fidèle est pur ; Ibn Nājī : même si une impureté paraît sur ce mur. Sanad : si la face du mur est impure, la prière est valide selon la doctrine de l'école ; Ibn Ḥabīb fait refaire celui qui prie exprès face à une impureté devant lui, sauf si elle est très éloignée ou cachée par quelque chose (ce qui ne la cache pas ne compte pas) ; si le mur est pur, la prière est valide sans divergence, mais il est déconseillé de commencer ainsi, comme pour le mur de qibla d'une mosquée : le fidèle ne doit pas faire face à une chose souillée. Dans l'audition de ʿĪsā, il est défendu de prier face au mur des latrines, à un fou, à un enfant, à une femme, à un non-musulman ou à un homme passif ; si on l'a fait, on ne refait pas la prière, ni dans le temps ni après ; Ibn Rushd : la Loi a fixé l'honneur de la qibla, et il est préférable que le fidèle la préserve de tout ce qui est réprouvé.\n\nFarʿ — l'impureté entre les genoux et le visage du fidèle prosterné ne lui nuit pas ; les textes de l'école sont presque explicites. Sanad : s'il la voit entre ses pieds, derrière son talon ou devant ses orteils et s'en écarte, il n'a rien à faire. Ibn Nājī trouve très éloigné l'avis qui fait refaire la prière sur un matelas dont un trou, face à la poitrine, donne sur une impureté qu'on ne touche pas : seul compte ce que l'on touche. Al-Bisāṭī : l'endroit qui fait face à la poitrine et au ventre du prosterné n'a pas à être pur. Al-Madkhal : on pose ses sandales à sa gauche, sauf si quelqu'un y prie ; on les met alors devant soi, entre le menton et les genoux à la prosternation, en évitant de les remuer ; il est recommandé de les mettre dans un chiffon ou un étui.\n\nAl-Dardīr : le lieu est ce que touchent effectivement les membres ; non celui qui prie par gestes (مُومِي, moûmî) au-dessus d'un endroit impur, dont la prière est valide selon l'avis le plus fort ; ni l'impureté sous sa poitrine, entre ses genoux ou ses pieds, à sa droite, à sa gauche, devant ou derrière lui, ou sous sa natte. Al-Dasūqī : le contact compte même à travers ce qui couvre les membres.",
    aqwal: [
      { auteur: "Plusieurs savants ; al-Jawāhir ; ad-Dhakhīra", avis: "Doit être pur ce que touchent les membres en se tenant, en s'asseyant et en se prosternant ; ce qu'ils ne touchent pas ne nuit pas.", statut: "non_precise" },
      { auteur: "La Mudawwana ; Ibn Nājī", avis: "Prier face au mur de latrines ou à une tombe ne nuit pas si l'endroit du fidèle est pur, même si le mur porte une impureté.", statut: "non_precise" },
      { auteur: "Sanad", avis: "Si la face du mur est impure, la prière est valide selon la doctrine de l'école ; si elle est pure, c'est seulement déconseillé au départ.", statut: "non_precise" },
      { auteur: "Ibn Ḥabīb", avis: "Celui qui prie exprès face à une impureté devant lui refait, sauf si elle est très éloignée ou cachée.", statut: "qawl" },
      { auteur: "Audition de ʿĪsā (commentée par Ibn Rushd)", avis: "Il est défendu de prier face aux latrines, à un fou, un enfant, une femme, un non-musulman ; si on l'a fait, on ne refait pas.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (وَ) عَنْ (مَكَانِهِ) وَهُوَ مَا تَمَاسُّهُ أَعْضَاؤُهُ بِالْفِعْلِ » ; « وَلَا إنْ كَانَتْ تَحْتَ صَدْرِهِ أَوْ بَيْنَ رُكْبَتَيْهِ أَوْ قَدَمَيْهِ أَوْ عَنْ يَمِينِهِ أَوْ يَسَارِهِ أَوْ أَمَامَهُ أَوْ خَلْفَهُ ».",
    tarjih_hattab: "La plume de pigeon qui se trouve, dans la Mosquée sacrée, entre les genoux et le visage du fidèle prosterné ne nuit pas : « وَالظَّاهِرُ صِحَّةُ الصَّلَاةِ لَا سِيَّمَا فِي هَذِهِ الْمَسْأَلَةِ لِعُمُومِ الْبَلْوَى بِهَا ».",
    tanbihat: [
      "Al-Ḥaṭṭāb rapporte de son père, d'après certains de ses maîtres, que c'est à la Mosquée sacrée une chose difficile à éviter, donc tolérée ; celui qui prie à même le sol, sans tapis, n'y échappe que rarement.",
      "Celui qui remue pendant la prière les sandales posées devant lui : al-Ḥaṭṭāb renvoie à la suite (voir 01g pour la distinction entre remuer et porter)."
    ],
    divergences: [
      "Complément — celui qui prie par gestes. Al-Dardīr : « لَا الْمُومِي بِمَحَلٍّ بِهِ نَجَاسَةٌ فَصَحِيحَةٌ عَلَى الرَّاجِحِ », car ses membres ne touchent pas cet endroit. Al-Ḥaṭṭāb n'en parle pas dans ce passage.",
      "Concordance — sous la poitrine. Al-Ḥaṭṭāb (al-Bisāṭī) : « وَلَا يُشْتَرَطُ طَهَارَةُ مُحَاذَاةِ صَدْرِهِ وَبَطْنِهِ إنْ سَجَدَ ». Al-Dardīr : « وَلَا إنْ كَانَتْ تَحْتَ صَدْرِهِ أَوْ بَيْنَ رُكْبَتَيْهِ ».",
      "Complément — le contact indirect et les cheveux. Al-Dasūqī : le contact compte même à travers ce qui couvre les membres (« أَيْ وَلَوْ مِنْ فَوْقِ حَائِلٍ عَلَيْهَا ») ; son maître al-ʿAdawī : « الْمَسُّ بِالشَّعَرِ كَالْمَسِّ لِطَرَفِ الثَّوْبِ فَلَا يَضُرُّ مَسُّهُ لِلنَّجَاسَةِ ».",
      "Point à comparer — l'impureté devant le fidèle. Al-Ḥaṭṭāb rapporte l'avis d'Ibn Ḥabīb (reprise de qui prie exprès face à une impureté proche et visible) et celui de Sanad (« فَالْمَذْهَبُ أَنَّ الصَّلَاةَ صَحِيحَةٌ »). Al-Dardīr range ce qui est « أَوْ أَمَامَهُ أَوْ خَلْفَهُ » parmi ce qui ne nuit pas, sans mentionner l'avis d'Ibn Ḥabīb."
    ],
    exemple: "Dans une salle de prière, un fidèle remarque une petite tache d'urine sèche à l'endroit où son front se posera. Il se décale pour que son front et ses mains ne la touchent pas ; qu'elle reste alors sous sa poitrine ou à côté de lui pendant la prosternation ne nuit pas à sa prière.",
    erreurs_frequentes: [
      "Croire que toute la pièce ou tout le tapis doit être pur : seul compte l'endroit que touchent les membres.",
      "Croire qu'une impureté sous la poitrine pendant la prosternation annule la prière : sans contact, elle ne nuit pas."
    ],
    termes: [
      { ar: "مِرْحَاض", translit: "mirhâd", def: "Latrines, lieu d'aisance." },
      { ar: "مُومِي", translit: "moûmî", def: "Celui qui prie par gestes de la tête, sans poser le front au sol (le malade, par exemple)." }
    ],
    quiz: [
      { q: "Quelle partie du lieu doit être pure ?",
        choix: ["Toute la pièce", "L'endroit que touchent les membres : pieds, genoux, mains, front", "Seulement l'endroit du front", "Seulement ce qui est devant le fidèle"],
        bonne: 1,
        explication: "« وَالْمُعْتَبَرُ مِنْ الْمَكَانِ مَحَلُّ قِيَامِهِ وَسُجُودِهِ وَقُعُودِهِ »." },
      { q: "Une impureté se trouve entre les genoux et le visage pendant la prosternation, sans contact. Que dit le texte ?",
        choix: ["Cela ne nuit pas", "La prière est nulle", "Il faut refaire dans le temps", "C'est permis seulement au voyageur"],
        bonne: 0,
        explication: "« لَوْ كَانَتْ النَّجَاسَةُ بَيْنَ رُكْبَتَيْ الْمُصَلِّي وَوَجْهِهِ فِي السُّجُودِ لَمْ يَضُرَّهُ ذَلِكَ »." },
      { q: "Selon la Mudawwana, prier face au mur de latrines, quand l'endroit où l'on prie est pur…",
        choix: ["Annule la prière", "Oblige à refaire dans le temps", "Est interdit", "N'est pas un mal"],
        bonne: 3,
        explication: "« وَمَنْ صَلَّى وَبَيْنَ يَدَيْهِ جِدَارُ مِرْحَاضٍ، أَوْ قَبْرٍ فَلَا بَأْسَ بِهِ إذَا كَانَ مَوْضِعُهُ طَاهِرًا »." },
      { q: "Mise en situation : un malade prie assis, par gestes ; le sol devant lui, vers lequel il incline la tête sans le toucher, est souillé. Selon al-Dardīr…",
        choix: ["Sa prière est nulle", "Il doit refaire toujours", "Sa prière est valide selon l'avis le plus fort", "Il doit prier debout"],
        bonne: 2,
        explication: "« لَا الْمُومِي بِمَحَلٍّ بِهِ نَجَاسَةٌ فَصَحِيحَةٌ عَلَى الرَّاجِحِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "135-137" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 67 (Shamela 21604, page 66)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01g",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "… mais non le bout de sa natte",
    titre_ar: "لَا طَرَفَ حَصِيرِهِ",
    objectif: "Savoir qu'une impureté au bout de la natte ou du tapis, hors de l'endroit que touchent les membres, ne nuit pas, et connaître les cas voisins (dessous du tapis, sandale, corde, barque).",
    matn: "لَا طَرَفَ حَصِيرِهِ",
    regle_pratique: "Une impureté au bout de la natte ou du tapis sur lequel on prie, ou sur sa face de dessous si elle ne traverse pas, ne nuit pas à la prière, même si le tapis bouge avec le fidèle ; mais on ne peut pas étendre un pan de son propre vêtement sur une impureté pour prier dessus.",
    qualification: {
      hukm: "mubah",
      nature: "autre",
      effet_si_omis: null
    },
    explication: "Al-Ḥaṭṭāb : « لَا طَرَفَ حَصِيرِهِ » est coordonné à « le vêtement du fidèle » (al-Bisāṭī : à « le bout de son turban », pour qu'on ne croie pas qu'il partage sa règle). Le sens : il n'est pas obligatoire d'ôter l'impureté du bout de la natte (حَصِير, hasîr) du fidèle ; la natte n'a rien de particulier : tout ce qu'il étend pour prier dessus, avec à son extrémité une impureté qu'il ne touche pas, laisse sa prière valide. La Mudawwana : « وَلَا بَأْسَ بِالصَّلَاةِ عَلَى طَرَفِ حَصِيرٍ بِطَرَفِهِ الْآخَرِ نَجَاسَةٌ ». Ibn Yūnus : même si l'endroit impur bouge, car il n'est tenu qu'à la pureté de sa place ; ʿAbd al-Ḥaqq rapporte que certains maîtres tiennent compte du mouvement, ce qu'il juge incorrect. Ibn Nājī : s'il ne bouge pas, cela ne nuit pas par accord ; s'il bouge, il y a deux avis. Sanad préfère aussi que cela ne nuise pas même s'il bouge, comme le bateau dont une planche porte une impureté et qui bouge avec le fidèle, ou le plancher qui tremble sous lui — ce qu'on ne prend pas en compte, par consensus. La lettre d'Ibn al-Ḥājib met la divergence même quand la natte ne bouge pas : Ibn Nājī le conteste, et Ibn ʿArafa l'avait déjà fait (« لَا أَعْرِفُهُ »).\n\nTanbīh — la plupart des maîtres comprennent ainsi la Mudawwana. Abū Ḥafṣ al-ʿAṭṭār : « l'autre bout » est la face tournée vers le sol, la face tournée vers le fidèle étant pure, comme une impureté sur laquelle on étend un tissu pur ; al-Wānnūghī et al-Mashaddālī l'acceptent. Al-Mashaddālī : de même la peau (« الْهَيْدُورَةُ ») impure sur une seule face, sur laquelle les compagnons d'Abū Maymūna, juriste de Fès, ont divergé. Zarrūq, sur la Risāla (le malade sur une literie impure y étend un tissu pur et épais) : l'impureté sur la face inférieure, si elle ne traverse pas, ne nuit pas, ce qu'on dit même de la sandale dont le dessous est impur, sur laquelle on se tient.\n\nFurūʿ (al-Burzulī) : Ibn Qaddāḥ a dit que celui qui remue sa sandale dans un étui refait ou interrompt sa prière ; al-Burzulī juge cette fatwa excessive. Ibn Nājī : on n'interrompt pas pour avoir remué (celui qui remue ne porte pas), mais on interrompt pour l'avoir soulevée (il la porte). Le plafond percé d'une lucarne au-dessus de latrines, ou la natte trouée au-dessus d'une impureté que les vêtements n'atteignent pas : Ibn ʿArafa valide la prière sous le plafond et fait refaire celle sur la natte, à cause du lien plus étroit ; al-Ghubrīnī valide tout. Sanad : une corde attachée à un cadavre ne nuit pas si son bout est sous les pieds (comme le tapis) ; si elle est nouée à la taille ou tenue à la main, la prière ne suffit pas (c'est aussi l'avis d'ash-Shāfiʿī) ; de même si elle est attachée à une jarre de vin, même pure, la jarre tenant à l'impureté. Attachée à une barque (قَارِب, qârib) contenant une impureté : si le nœud est sur un endroit impur, la prière ne suffit pas ; sur un endroit pur, deux possibilités. Attachée à une bête, même portant une selle impure ou debout sur son urine : rien, car la bête agit et c'est elle qui porte, alors que la barque n'est qu'un instrument.\n\nAl-Dardīr : non le bout de sa natte, même s'il bouge avec lui, c'est-à-dire ce qui dépasse l'endroit que touchent ses membres ; mais ne compte pas comme natte un pan de ce qu'il porte, étendu sur un endroit impur pour s'y prosterner, comme sa manche ou le bout de son manteau : cela ne lui sert à rien.",
    aqwal: [
      { auteur: "La Mudawwana ; Ibn Yūnus ; Sanad", avis: "L'impureté au bout de la natte ne nuit pas, même si cette partie bouge avec le fidèle ; al-Dasūqī : c'est la doctrine de l'école.", statut: "non_precise" },
      { auteur: "Certains maîtres (rapportés par ʿAbd al-Ḥaqq)", avis: "Le mouvement de l'endroit impur avec le fidèle nuit.", statut: "qawl" },
      { auteur: "Lettre d'Ibn al-Ḥājib", avis: "Divergence même si la natte ne bouge pas (contestée par Ibn ʿArafa et Ibn Nājī).", statut: "qawl" },
      { auteur: "Abū Ḥafṣ al-ʿAṭṭār ; Zarrūq", avis: "L'impureté sur la face de dessous, si elle ne traverse pas, ne nuit pas.", statut: "non_precise" },
      { auteur: "Ibn Qaddāḥ (rapporté par al-Burzulī et Ibn Nājī)", avis: "Remuer sa sandale impure dans un étui oblige à interrompre ou refaire.", statut: "qawl" },
      { auteur: "Ibn Nājī", avis: "Remuer la sandale n'est pas la porter ; la soulever, si.", statut: "non_precise" },
      { auteur: "Ibn ʿArafa (rapporté par al-Burzulī)", avis: "Sous un plafond percé au-dessus de latrines, la prière est valide ; sur une natte trouée au-dessus d'une impureté, on refait.", statut: "qawl" },
      { auteur: "Al-Ghubrīnī (rapporté par al-Burzulī)", avis: "La prière est valide dans les deux cas.", statut: "non_precise" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (لَا) عَنْ (طَرَفِ حَصِيرِهِ) وَلَوْ تَحَرَّكَ بِحَرَكَتِهِ » ; al-Dasūqī : « هَذَا هُوَ الْمَذْهَبُ خِلَافًا لِمَنْ قَالَ: إنْ تَحَرَّكَتْ بِحَرَكَتِهِ ضَرَّ وَإِلَّا فَلَا ». Face de dessous : « وَمَا ذَكَرَهُ مِنْ عَدَمِ الضَّرَرِ فِي هَذِهِ هُوَ الْمَشْهُورُ خِلَافًا لِمَنْ قَالَ بِالضَّرَرِ ».",
    tarjih_hattab: "La face de dessous ne nuit pas « إذَا لَمْ تَنْفُذْ النَّجَاسَاتُ إلَى الْوَجْهِ الَّذِي يَلِي الْمُصَلِّي » ; pour la sandale, « وَمَا قَالَهُ ابْنُ نَاجِي … مِنْ الْفَرْقِ بَيْنَ الْمُتَحَرِّكِ وَالْحَامِلِ هُوَ الظَّاهِرُ » ; pour la natte trouée, il suit al-Ghubrīnī : « وَقَدْ تَقَدَّمَ عَنْ ابْنِ نَاجِي مَا يُؤَيِّدُ فَتْوَى الْغُبْرِينِيِّ وَهُوَ الظَّاهِرُ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb lit dans les dernières paroles de Sanad une préférence pour l'invalidité dans le cas de la barque : « وَيَظْهَرُ مِنْ كَلَامِهِ هَذَا الْأَخِيرِ تَرْجِيحُ الْبُطْلَانِ فِي مَسْأَلَةِ الْقَارِبِ ».",
      "Sanad : la jarre de vin, même pure à l'extérieur, tient à l'impureté ; y attacher sa corde revient à la nouer à une corde qui touche l'impureté.",
      "Al-Burzulī : la sandale dont on n'est pas sûr qu'elle soit impure relève des cas où l'état d'origine l'emporte sur le probable, par nécessité ; Ibn Nājī répond que, dans leurs questions, le probable vaut le certain (« وَمَسَائِلُهُمْ تَدُلُّ عَلَى أَنَّ الْغَالِبَ كَالْمُحَقَّقِ »)."
    ],
    divergences: [
      "Concordance — le bout de la natte qui bouge avec le fidèle. Al-Ḥaṭṭāb : Ibn Yūnus et Sanad (« أَنَّهُ لَا يَضُرُّ، وَلَوْ تَحَرَّكَ ») ; Ibn Nājī rapporte deux avis s'il bouge. Al-Dardīr : « وَلَوْ تَحَرَّكَ بِحَرَكَتِهِ » ; al-Dasūqī : « هَذَا هُوَ الْمَذْهَبُ ».",
      "Concordance — la face de dessous. Al-Ḥaṭṭāb (Abū Ḥafṣ al-ʿAṭṭār, Zarrūq) : valide si l'impureté ne traverse pas. Al-Dardīr : « كَمَا لَوْ فَرَشَ حَصِيرًا بِأَسْفَلِهَا نَجَاسَةٌ وَالْوَجْهُ الَّذِي يَضَعُ عَلَيْهِ أَعْضَاءَهُ طَاهِرٌ فَلَا يَضُرُّ » ; al-Dasūqī : c'est le mashhūr.",
      "Complément — un pan de son propre vêtement. Al-Dardīr : « وَلَيْسَ مِنْ الْحَصِيرِ مَا فَرَشَهُ مِنْ مَحْمُولِهِ عَلَى مَكَان نَجِسٍ وَسَجَدَ عَلَيْهِ كَكُمِّهِ » ; al-Dasūqī : celui qui s'enveloppe d'un bout de sa couverture et en étend l'autre sur l'impureté, « فَلَا يَنْفَعُهُ ذَلِكَ وَتَبْطُلُ صَلَاتُهُ ». Al-Ḥaṭṭāb ne traite pas ce cas ici.",
      "Concordance — la corde de la bête et celle de la barque. Al-Ḥaṭṭāb (Sanad) : la bête porte elle-même, la barque n'est qu'un instrument. Al-Dasūqī : pour la bête, « لِأَنَّ الْحَمْلَ يُنْسَبُ لِلدَّابَّةِ فَلَا تَبْطُلُ صَلَاتُهُ » ; pour la corde de la barque nouée à la taille, « فَإِنَّهَا تَبْطُلُ؛ لِأَنَّ الْحَمْلَ يُنْسَبُ إلَيْهِ لِعَدَمِ حَيَاتِهَا » — ce qu'al-Majmūʿ (« المج », de Muḥammad al-Amīr) limite peut-être à la petite barque que le fidèle peut remuer — ; sous les pieds, elle ne nuit pas, comme le bout de la natte."
    ],
    exemple: "Dans une mosquée, un enfant a uriné sur le bord d'un long tapis ; un fidèle prie sur l'autre bout, propre, du même tapis. Sa prière est valide, même si le tapis bouge un peu quand il se prosterne. Mais il ne pourrait pas jeter le pan de son manteau sur une tache d'urine pour prier dessus.",
    erreurs_frequentes: [
      "Croire qu'un tapis taché à une extrémité ne peut plus servir à la prière : seul compte l'endroit que touchent les membres.",
      "Croire qu'on peut couvrir une impureté avec un pan de son propre vêtement : ce pan est porté par le fidèle ; selon al-Dasūqī, la prière est nulle."
    ],
    termes: [
      { ar: "حَصِير", translit: "hasîr", def: "Natte, tapis de prière tressé ; par extension, tout ce qu'on étend pour prier dessus." },
      { ar: "قَارِب", translit: "qârib", def: "Barque." }
    ],
    quiz: [
      { q: "Le bout d'une natte, hors de l'endroit que touchent les membres, est impur. La prière est…",
        choix: ["Nulle", "Valide seulement si la natte ne bouge pas", "À refaire dans le temps", "Valide, même si la natte bouge"],
        bonne: 3,
        explication: "Al-Dardīr : « (لَا) عَنْ (طَرَفِ حَصِيرِهِ) وَلَوْ تَحَرَّكَ بِحَرَكَتِهِ »." },
      { q: "Une impureté se trouve sous un tapis épais, sans traverser jusqu'à la face où l'on prie. Que dit le texte ?",
        choix: ["Il faut changer de tapis", "La prière est nulle", "Cela ne nuit pas", "Cela nuit seulement au malade"],
        bonne: 2,
        explication: "Zarrūq : « أَنَّ النَّجَاسَةَ إذَا كَانَتْ بِمَقْلُوبِ مَحَلِّ الْمُصَلِّي مِنْ حُصْرٍ أَوْ غَيْرِهِ وَلَمْ تَنْفُذْ لَا تَضُرُّ »." },
      { q: "Selon Ibn Nājī, suivi par al-Ḥaṭṭāb, que vaut le fait de remuer pendant la prière sa sandale impure posée dans un étui ?",
        choix: ["Il doit interrompre la prière", "Il ne l'interrompt pas : remuer n'est pas porter", "Il doit refaire toujours", "Il doit la jeter"],
        bonne: 1,
        explication: "« وَالصَّوَابُ عَدَمُ الْقَطْعِ فِيمَنْ حَرَّكَ؛ لِأَنَّ الْمُحَرِّكَ لَيْسَ بِحَامِلٍ »." },
      { q: "Mise en situation : sur une aire de repos, un voyageur prie en tenant la longe de sa bête, qui se tient sur son urine. Que dit le texte ?",
        choix: ["Cela ne nuit pas : c'est la bête qui porte", "La prière est nulle", "Il doit refaire dans le temps", "Il doit lâcher la longe et recommencer"],
        bonne: 0,
        explication: "Sanad : « لِأَنَّ الدَّابَّةَ لَهَا فِعْلٌ فَتُعَدُّ هِيَ الْحَامِلَةُ لِذَلِكَ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "137-138" },
    alertes: [
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 65–68 (Shamela 21604, pages 64–67)."
    ],
    verification: "verifie"
  },

  /* ------------------------------------------------------------------ */
  {
    id: "tah-01-03-01h",
    kitab: "tah", bab: "01", fasl: "03", ordre: 1,
    titre: "Jusqu'à quand refaire : le ẓuhr et le ʿaṣr jusqu'au jaunissement",
    titre_ar: "وَإِلَّا أَعَادَ الظُّهْرَيْنِ لِلِاصْفِرَارِ",
    objectif: "Savoir jusqu'à quel moment refaire chaque prière faite par oubli, ignorance de l'impureté ou incapacité, et les cas où l'on ne refait pas.",
    matn: "وَإِلَّا أَعَادَ الظُّهْرَيْنِ لِلِاصْفِرَارِ",
    regle_pratique: "Celui qui a prié avec une impureté par oubli, sans la connaître ou faute de pouvoir l'ôter refait sa prière — c'est recommandé — tant que dure son temps de reprise : le ẓuhr et le ʿaṣr jusqu'au jaunissement du soleil, le maghrib et le ʿishāʾ jusqu'à l'aube, le ṣubḥ jusqu'au lever du soleil ; une prière rattrapée ou surérogatoire ne se refait pas.",
    qualification: {
      hukm: "mandub",
      nature: "autre",
      effet_si_omis: "Si le temps sort sans qu'il ait refait la prière, il n'a rien à refaire, selon Ibn al-Qāsim (avis mashhūr)."
    },
    explication: "Al-Ḥaṭṭāb : « وَإِلَّا » est une condition négative (« إنْ » suivi de « لَا ») dont le verbe est sous-entendu. Le sens : celui qui a prié avec l'impureté dans son vêtement, son corps ou son lieu en s'en souvenant et en pouvant l'ôter refait toujours ; sinon — s'il ne la connaissait pas du tout, l'avait oubliée ou ne pouvait pas l'ôter —, il refait dans le temps de nécessité (الوَقْتُ الضَّرُورِيّ, al-waqtou d-daroûriyy), qui va pour le ẓuhr et le ʿaṣr jusqu'au jaunissement (اِصْفِرَار, isfirâr). « Les deux ẓuhr » (الظُّهْرَانِ, az-zouhrâni) désignent le ẓuhr et le ʿaṣr, par extension (taghlîb) : les Arabes nomment deux choses d'après la plus légère, la masculine ou la première, comme « les deux lunes » pour le soleil et la lune.\n\nCette limite, que Khalīl donne aussi pour la ʿawra, vient du livre de la purification de la Mudawwana ; c'est le mashhūr. Autres avis : jusqu'au coucher du soleil, rapporté aussi de Mālik ; l'incapable jusqu'au coucher et l'oublieux jusqu'au jaunissement, choisi par Ibn Yūnus, donné par Abū l-Ḥasan pour la doctrine de la Mudawwana et suivi par Ibn Ghāzī. Sur le mashhūr, selon at-Tawḍīḥ, le maghrib se refait toute la nuit. Al-Lakhmī ne fait refaire que dans le temps choisi (الوَقْتُ المُخْتَار, al-waqtou l-moukhtâr) : le ẓuhr jusqu'à quatre rakʿa dans la seconde « qāma », le ʿaṣr jusqu'au jaunissement, le maghrib jusqu'à la disparition du crépuscule, le ʿishāʾ jusqu'au milieu de la nuit ; al-Bājī en déduit pour le maghrib et le ʿishāʾ le tiers ou la moitié de la nuit, et pour le ṣubḥ la clarté de l'aube (إِسْفَار, isfâr) ou le lever du soleil selon qu'on lui reconnaît ou non un temps de nécessité. Le texte de Mālik, rapporté par Ibn al-Qāsim : le ẓuhr et le ʿaṣr jusqu'au jaunissement, le maghrib et le ʿishāʾ jusqu'à l'aube ; pour le ṣubḥ, deux riwāyas, jusqu'à la clarté ou jusqu'au lever du soleil. Ibn Bashīr : le correct est le maghrib et le ʿishāʾ tant que l'aube n'est pas levée, et le ṣubḥ tant que le soleil ne l'est pas.\n\nPourquoi le ẓuhr et le ʿaṣr s'arrêtent-ils au jaunissement, alors que le maghrib et le ʿishāʾ vont jusqu'à l'aube ? Khalīl suit la Mudawwana, alors que l'analogie voudrait le coucher du soleil. Ibn Yūnus : la reprise dans le temps est recommandée et ressemble à la prière surérogatoire, qu'on ne fait pas une fois le soleil jauni mais qu'on peut faire toute la nuit. On lui a objecté que la reprise se fait avec l'intention de l'obligatoire, que la prière surérogatoire est déconseillée dès la prière du ʿaṣr, que le ṣubḥ ne devrait alors pas se refaire après la clarté (seul Ibn al-Karūf l'affirme), et que, pour l'ordre omis entre deux prières, on refait le ẓuhr et le ʿaṣr jusqu'au coucher. Al-Ḥaṭṭāb répond : la répugnance est plus forte après le jaunissement (on y déconseille même la prière funéraire et la prosternation de lecture) ; tout le temps du ṣubḥ a été dit « choisi », avis fort dans l'école ; et l'ordre entre les prières est plus fort que l'impureté à ôter.\n\nTanbīhāt : 1) le vendredi prié avec une impureté : trois avis (an-Nawādir, Ibn ʿArafa) — son temps sort à la fin de la prière (choix de Saḥnūn, d'après une riwāya de Mālik) ; à la fin du temps choisi du ẓuhr (ʿAbd al-Malik) ; il se refait tant que le soleil n'est pas couché (Ibn Ḥabīb). 2) Le temps de la prière rattrapée (فَائِتَة, fâ'ita) sort dès qu'on l'a faite : elle ne se refait pas selon le mashhūr — Yaḥyā ibn ʿUmar : c'est l'avis de Mālik et de tous ses compagnons —, contre Ibn Wahb ; de même la prière surérogatoire, sauf les deux rakʿa du ṭawāf, refaites peu après. 3) La reprise dans le temps est-elle obligatoire ou recommandée ? Il y a divergence ; le plus fort est la recommandation : celui qui l'a laissé passer ne refait pas selon Ibn al-Qāsim (ad-Dhakhīra, al-Jawāhir) ; Muṭarrif et Ibn al-Mājishūn le font refaire toujours ; selon al-Burzulī, l'avis d'Ibn al-Qāsim vaut aussi pour qui a laissé passer le temps exprès. 4) Sur l'avis du coucher du soleil, il faut pouvoir faire toute la prière avant le coucher (voir divergences et alertes).\n\nAl-Dardīr : il refait, à titre recommandé, avec l'intention de l'obligatoire, le ẓuhr et le ʿaṣr — même sur l'avis de la sunna — jusqu'au jaunissement exclu, le ṣubḥ jusqu'au lever du soleil et le maghrib et le ʿishāʾ jusqu'à l'aube, selon la doctrine de la Mudawwana ; celui qui a prié après la sortie du temps puis a su ou a pu ôter l'impureté n'a rien à faire.",
    aqwal: [
      { auteur: "La Mudawwana ; Mālik (riwāya d'Ibn al-Qāsim)", avis: "Le ẓuhr et le ʿaṣr jusqu'au jaunissement ; le maghrib et le ʿishāʾ jusqu'à l'aube.", statut: "mashhur" },
      { auteur: "Avis rapporté sans attribution, rapporté aussi de Mālik", avis: "Le ẓuhr et le ʿaṣr jusqu'au coucher du soleil.", statut: "qawl" },
      { auteur: "Ibn Yūnus (choix) ; Abū l-Ḥasan ; Ibn Ghāzī", avis: "L'incapable jusqu'au coucher, l'oublieux jusqu'au jaunissement.", statut: "qawl" },
      { auteur: "Al-Lakhmī (choix)", avis: "Reprise seulement dans le temps choisi de chaque prière.", statut: "qawl" },
      { auteur: "Ibn Bashīr", avis: "Le maghrib et le ʿishāʾ jusqu'à l'aube, le ṣubḥ jusqu'au lever du soleil ; c'est « le correct ».", statut: "non_precise" },
      { auteur: "Ibn al-Karūf", avis: "Le ṣubḥ ne se refait pas après la clarté de l'aube.", statut: "qawl" },
      { auteur: "Ibn al-Qāsim", avis: "Celui qui a laissé passer le temps sans refaire n'a rien à refaire (mashhūr selon al-Jawāhir).", statut: "mashhur" },
      { auteur: "Muṭarrif et Ibn al-Mājishūn", avis: "Il refait toujours, même après le temps.", statut: "qawl" },
      { auteur: "Ibn Wahb", avis: "La prière rattrapée, faite avec une impureté, se refait.", statut: "qawl" }
    ],
    muatamad: "Confirmé par al-Dardīr : « (أَعَادَ) نَدْبًا بِنِيَّةِ الْفَرْضِ (الظُّهْرَيْنِ) وَلَوْ عَلَى الْقَوْلِ بِالسُّنِّيَّةِ (لِلِاصْفِرَارِ) بِإِخْرَاجِ الْغَايَةِ وَالصُّبْحِ لِلطُّلُوعِ وَالْعِشَاءَيْنِ لِلْفَجْرِ عَلَى مَذْهَبِهَا » ; al-Dasūqī : « لَا يُعِيدُ الْفَائِتَةَ؛ لِأَنَّ وَقْتَهَا يَخْرُجُ بِالْفَرَاغِ مِنْهَا وَكَذَلِكَ لَا يُعِيدُ النَّافِلَةَ إلَّا رَكْعَتَيْ الطَّوَافِ ».",
    tarjih_hattab: "La reprise dans le temps est recommandée : « وَالرَّاجِحُ أَنَّهَا عَلَى وَجْهِ الِاسْتِحْبَابِ » ; le ṣubḥ se refait jusqu'au lever du soleil : « وَتَقَدَّمَ أَنَّ الصَّحِيحَ أَنَّهَا تُعَادُ إلَى طُلُوعِ الشَّمْسِ ».",
    tanbihat: [
      "Al-Ḥaṭṭāb n'a pas trouvé dans la Mudawwana originale, ni dans l'abrégé d'al-Barādhiʿī, la reprise du maghrib toute la nuit qu'Ibn Yūnus lui attribue : « وَلَمْ أَقِفْ عَلَيْهِ فِي الْأُمِّ ».",
      "Il répond lui-même aux objections faites à l'explication d'Ibn Yūnus : « وَيُمْكِنُ أَنْ يُجَابَ عَنْ هَذِهِ الْإِيرَادَاتِ ».",
      "Ibn Rushd (al-Bayān) : l'avis d'Ibn Wahb sur la prière rattrapée suit son principe, pour qui ôter l'impureté est une obligation de la prière, « وَهُوَ خِلَافُ مَذْهَبِ ابْنِ الْقَاسِمِ وَسَائِرِ أَصْحَابِ مَالِكٍ »."
    ],
    divergences: [
      "Divergence — toute la prière ou une rakʿa avant la fin du temps. Al-Ḥaṭṭāb rapporte (« قَالَ ابْنُ بَشِيرٍ فِي سَمَاعِ مُوسَى », repris par Ibn ʿArafa) que, sur l'avis du coucher du soleil, il faut pouvoir faire « الصَّلَاةَ كُلَّهَا قَبْلَ الْغُرُوبِ », et qu'il en va de même par analogie pour le ʿishāʾ et le ṣubḥ. Al-Dasūqī : « فَإِنْ قُلْت هَلْ الْعِبْرَةُ بِإِدْرَاكِ الصَّلَاةِ كُلِّهَا أَوْ رَكْعَةٍ مِنْهَا قُلْت الْمَأْخُوذُ مِنْ كَلَامِ ابْنِ عَرَفَةَ الثَّانِي » (une rakʿa) ; et, quand le temps devient court, « فَإِذَا ضَاقَ الْوَقْتُ اخْتَصَّ بِالْأَخِيرَةِ ».",
      "Point à comparer — le vendredi. Al-Ḥaṭṭāb (an-Nawādir, Ibn ʿArafa) : trois avis sur la fin du temps de reprise. Al-Dasūqī raisonne autrement : le vendredi est comme le ẓuhr et le ʿaṣr ; s'il remplace le ẓuhr, on le refait en vendredi si possible, sinon on discute de le refaire en ẓuhr ; s'il est la prière propre du jour, « وَعَلَى أَنَّهَا فَرْضُ يَوْمِهَا فَلَا تُعَادُ ظُهْرًا قَطْعًا », et la reprise en vendredi est discutée.",
      "Concordance — la reprise recommandée. Al-Ḥaṭṭāb : « وَالرَّاجِحُ أَنَّهَا عَلَى وَجْهِ الِاسْتِحْبَابِ ». Al-Dardīr : « (أَعَادَ) نَدْبًا بِنِيَّةِ الْفَرْضِ ».",
      "Concordance — l'explication d'Ibn Yūnus. Al-Dardīr : « وَفُرِّقَ بِأَنَّ الْإِعَادَةَ كَالتَّنَفُّلِ فَكَمَا لَا يَتَنَفَّلُ فِي الِاصْفِرَارِ لَا يُعَادُ فِيهِ » ; al-Dasūqī reprend l'objection et la réponse donnée par al-Ḥaṭṭāb : « لَا شَكَّ فِي أَنَّ الْكَرَاهَةَ بَعْدَ … الِاصْفِرَارِ أَشَدُّ مِنْهَا قَبْلَهُ ».",
      "Concordance — prière rattrapée et prière surérogatoire. Al-Ḥaṭṭāb : elles ne se refont pas, sauf les deux rakʿa du ṭawāf. Al-Dasūqī : même règle (voir le muʿtamad)."
    ],
    exemple: "Après le maghrib, un fidèle découvre sur son pantalon une tache d'urine qu'il n'avait pas vue, et qu'il portait déjà au ʿaṣr. Le soleil est couché : le temps de reprise du ʿaṣr (jusqu'au jaunissement) est passé, il n'a rien à refaire pour le ʿaṣr. Il change de vêtement et refait le maghrib, puisque l'aube n'est pas levée.",
    erreurs_frequentes: [
      "Croire que la reprise est obligatoire : pour l'oublieux, l'ignorant de l'impureté et l'incapable, elle est recommandée.",
      "Croire que le ʿaṣr se refait jusqu'au coucher du soleil : selon le mashhūr de la Mudawwana, seulement jusqu'au jaunissement.",
      "Refaire une prière rattrapée ou surérogatoire : elles ne se refont pas, sauf les deux rakʿa du ṭawāf."
    ],
    termes: [
      { ar: "الظُّهْرَانِ", translit: "az-zouhrâni", def: "« Les deux ẓuhr » : le ẓuhr et le ʿaṣr, nommés ensemble par extension (taghlîb)." },
      { ar: "اِصْفِرَار", translit: "isfirâr", def: "Jaunissement du soleil, en fin d'après-midi." },
      { ar: "الوَقْتُ الضَّرُورِيّ", translit: "al-waqtou d-daroûriyy", def: "Temps de nécessité : fin du temps d'une prière, réservé à ceux qui ont une excuse." },
      { ar: "الوَقْتُ المُخْتَار", translit: "al-waqtou l-moukhtâr", def: "Temps choisi : temps normal d'une prière." },
      { ar: "إِسْفَار", translit: "isfâr", def: "Clarté de l'aube, quand le jour commence à paraître." },
      { ar: "فَائِتَة", translit: "fâ'ita", def: "Prière manquée, rattrapée après son temps." }
    ],
    quiz: [
      { q: "Jusqu'à quand l'oublieux refait-il le ʿaṣr prié avec une impureté, selon le mashhūr ?",
        choix: ["Jusqu'au jaunissement du soleil", "Jusqu'au coucher du soleil", "Jusqu'au lendemain", "Il ne le refait jamais"],
        bonne: 0,
        explication: "« وَإِلَّا أَعَادَ الظُّهْرَيْنِ لِلِاصْفِرَارِ » ; al-Ḥaṭṭāb : « قَالَهُ فِي كِتَابِ الطَّهَارَةِ مِنْ الْمُدَوَّنَةِ وَهُوَ الْمَشْهُورُ »." },
      { q: "Cette reprise dans le temps est…",
        choix: ["Obligatoire", "Recommandée", "Déconseillée", "Interdite"],
        bonne: 1,
        explication: "« وَالرَّاجِحُ أَنَّهَا عَلَى وَجْهِ الِاسْتِحْبَابِ »." },
      { q: "Une prière rattrapée (faite après son temps) l'a été avec une impureté oubliée. Selon le mashhūr…",
        choix: ["On la refait toujours", "On la refait le lendemain", "On ne la refait pas : son temps est fini une fois faite", "On la refait seulement si c'est le ṣubḥ"],
        bonne: 2,
        explication: "« يَخْرُجُ وَقْتُ الْفَائِتَةِ بِالْفَرَاغِ مِنْهَا فَلَا تُعَادُ عَلَى الْمَشْهُورِ »." },
      { q: "Mise en situation : après le ṣubḥ, un fidèle découvre une impureté oubliée ; il fait déjà clair, mais le soleil n'est pas levé. Que fait-il ?",
        choix: ["Rien : la clarté a mis fin au temps", "Il attend le ẓuhr pour refaire", "Il refait obligatoirement, même après le lever", "Il refait le ṣubḥ avant le lever du soleil"],
        bonne: 3,
        explication: "Al-Dardīr : « وَالصُّبْحِ لِلطُّلُوعِ » ; al-Ḥaṭṭāb : « تُعَادُ إلَى طُلُوعِ الشَّمْسِ »." }
    ],
    ref: { ouvrage: "Mawāhib al-Jalīl", tome: 1, pages: "138-140" },
    alertes: [
      "« قَالَ ابْنُ بَشِيرٍ فِي سَمَاعِ مُوسَى مِنْ كِتَابِ الصَّلَاةِ » : le commentaire des auditions de l'ʿUtbiyya est l'œuvre d'Ibn Rushd (al-Bayān) ; le nom d'Ibn Bashīr est peut-être une faute pour Ibn Rushd. Recherché sans succès dans al-Bayān (21751, p. 200–520) et dans Ibn ʿArafa (16968, p. 1–80 ; la reprise dans le temps y est traitée p. 34 sans cette précision) ; la fiche garde le nom imprimé. Non bloquant (anomalie n° 134, non résolue).",
      "Croisement : al-Sharḥ al-kabīr et Ḥāshiyat al-Dasūqī, t. 1, p. 68–69 (Shamela 21604, pages 67–68)."
    ],
    verification: "verifie"
  }

]);
