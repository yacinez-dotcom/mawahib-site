/* Données — Plan du cours — v1.20 — squelette kitāb → bāb → faṣl → masʾala.
   Extrait du texte lu (étape 2), jamais écrit de mémoire ; enrichi au fil des unités, jamais réécrit de zéro.
   v1.1 : Module 0 (kitāb « int »), segments du matn de l'introduction de Khalīl lus dans Mawāhib al-Jalīl,
          tome 1, p. 33–36 (unité 1).
   v1.2 : segments suivants du même faṣl, t. 1, p. 36–39 (unité 2) : int-01-01-04a à -08.
   v1.3 : faṣl int-01-02, le « تَكْمِيلٌ » d'al-Ḥaṭṭāb (t. 1, p. 39–42), ajout du commentateur sans matn de Khalīl.
          Découpé d'après les règles qu'il énonce ; unité 3 : -01 à -06 (p. 39–40). La suite (p. 40–42) viendra avec l'unité 4.
   v1.4 : fin du faṣl int-01-02 (unité 4, p. 40–42) : -07a à -11.
   v1.5 : SQUELETTE du Kitāb al-Ṭahāra (tah), t. 1, p. 43–377 (Shamela 569, pages 42–376).
          Un seul bāb dans le matn (« بَابٌ يُرْفَعُ الْحَدَثُ … »), découpé en 11 sections : l'ouverture du bāb
          (sans titre de faṣl) puis les 10 « فَصْلٌ » du matn et des titres de l'édition. Masʾala = un segment
          « ص (…) » de Mawāhib (428 segments). titre_ar = début du segment tel qu'imprimé (6 mots au plus).
          Liste complète des segments et empreintes : docs/sources/tah-01-segments.md.
   v1.6 : tah-01-01-01 découpée en quatre sous-fiches (01a à 01d), un seul segment du matn portant quatre règles.
   v1.7 : tah-01-01-17 découpée en deux sous-fiches (17a mare, 17b puits) ; titre de 16 précisé (corde ou seau de puisage).
   v1.8 : campagne de correction — titre arabe de tah-01-05-01 corrigé (« وَمُنِعَ » au lieu de « وَمِنْهُ »), d'après le Mukhtaṣar seul
          et Shifāʾ al-Ghalīl (voir docs/sources/tah-01-segments.md).
   v1.9 : tah-01-02-16b ajouté (segment « وَلَبَنُ غَيْرِهِ تَابِعٌ », p. 94, manqué par l'extraction du squelette : anomalie n° 62) ;
          titres arabes alignés sur le matn corrigé : tah-01-01-31 (« وَجْهَهَا », n° 44), tah-01-02-04 (« وَمَا ذُكِّيَ », n° 51).
   Format :
   {
     kutub: [
       { id: "tah", titre: "…", titre_ar: "…", abwab: [
         { id: "tah-01", titre: "…", titre_ar: "…", fusul: [
           { id: "tah-01-01", titre: "…", titre_ar: "…", masail: [
             { id: "tah-01-01-01", titre: "…", titre_ar: "…" }
           ] }
         ] }
       ] }
     ]
   }
   v1.10 : titre arabe de tah-01-02-28 aligné sur le matn corrigé (« وَالنَّجَسُ », anomalie n° 88).
   v1.11 : titre arabe de tah-01-02-33 aligné sur le matn corrigé (« وَقَصَبَةِ رِيشٍ », génitif, anomalie n° 91).
   v1.12 : tah-01-02-40 — lecture « الْكَيْمَخْتِ » (fatḥa sur le kāf, d'après al-Dardīr, Minaḥ et al-Kharashī ; anomalie n° 101) et titre « kaymakht ».
   v1.13 : tah-01-02-48 — matn lu à l'annexion (« وَرَمَادِ نَجِسٍ », d'après al-Dardīr et al-Dasūqī ; anomalie n° 107) ;
          tah-01-02-51 découpé en deux sous-fiches (51a, 51b), étape 3.
   v1.14 : tah-01-02-52 — matn sans « طَالَ » et « فَبِحَسَبِهِ » (Mukhtaṣar seul, Minaḥ, al-Dardīr ; anomalie n° 116) ;
          tah-01-02-53 découpé en quatre sous-fiches (53a à 53d) et tah-01-02-54 en trois (54a à 54c), étape 3.
   v1.15 : tah-01-02-59 — « غَيْرِ عَالِمٍ » (savant), non « عَالَمٍ » (Minaḥ, al-Kharashī, al-Dardīr ; anomalie n° 124).
   v1.16 : tah-01-02-60 — « وَحَرُمَ » (Minaḥ, al-Kharashī, al-Dardīr ; anomalie n° 129).
   v1.17 : tah-01-03-01 découpé en huit sous-fiches (01a à 01h), un seul segment du matn portant huit règles (étape 3, unité 19).
   v1.18 : titres arabes alignés sur les matn corrigés : tah-01-03-19 « لَا إنْ غَلَبَتْ » (Mukhtaṣar seul, al-Dardīr ; anomalie n° 148) ;
          tah-01-03-30 complété jusqu'à « بِخِلَافِ ثَوْبَيْهِ فَيَتَحَرَّى » (duel : Mukhtaṣar seul, al-Dardīr, Ibn Ghāzī ; anomalie n° 162).
   v1.19 : titres français de tah-01-03-39 (« Aspersion sans intention ») et -41 (« Doute sur les deux : rien à faire »), alignés sur les fiches (unité 26).
   v1.20 : tah-01-03-43 découpé en trois sous-fiches (43a à 43c), un seul segment du matn portant plusieurs règles (étape 3, unité 27). */
App.data.definirPlan({
  kutub: [
    {
      id: "int",
      titre: "Module 0 — La langue du Mukhtaṣar",
      titre_ar: "اِصْطِلَاحَاتُ المُخْتَصَرِ",
      abwab: [
        {
          id: "int-01",
          titre: "L'introduction de Khalīl",
          titre_ar: "شَرْحُ خُطْبَةِ المُخْتَصَرِ",
          fusul: [
            {
              id: "int-01-01",
              titre: "Les termes techniques annoncés par Khalīl",
              titre_ar: "مُصْطَلَحَاتُ المُصَنِّفِ",
              masail: [
                { id: "int-01-01-01", titre: "« Fîhâ » : la Mudawwana", titre_ar: "فِيهَا" },
                { id: "int-01-01-02", titre: "« Ta'wîlân » : lectures de la Mudawwana", titre_ar: "التَّأْوِيلُ" },
                { id: "int-01-01-03a", titre: "« Ikhtiyâr » : al-Lakhmī", titre_ar: "الِاخْتِيَارُ" },
                { id: "int-01-01-03b", titre: "« Tarjîh » : Ibn Yūnus", titre_ar: "التَّرْجِيحُ" },
                { id: "int-01-01-03c", titre: "« Zouhoûr » : Ibn Rushd", titre_ar: "الظُّهُورُ" },
                { id: "int-01-01-03d", titre: "« Qawl » : al-Māzirī", titre_ar: "القَوْلُ" },
                { id: "int-01-01-04a", titre: "« Khilâf » : plusieurs avis mashhūr", titre_ar: "خِلَافٌ" },
                { id: "int-01-01-04b", titre: "« Qawlâni » : aucun avis jugé plus fort", titre_ar: "قَوْلَانِ أَوْ أَقْوَالٌ" },
                { id: "int-01-01-05", titre: "Les sens implicites : seule la condition", titre_ar: "مَفْهُومُ الشَّرْطِ" },
                { id: "int-01-01-06", titre: "« Souhhiha », « oustouhsina » : un savant non nommé", titre_ar: "صُحِّحَ أَوْ اُسْتُحْسِنَ" },
                { id: "int-01-01-07", titre: "« Taraddoud » : l'hésitation des tardifs", titre_ar: "التَّرَدُّدُ" },
                { id: "int-01-01-08", titre: "« Wa law » : un avis contraire dans l'école", titre_ar: "لَوْ" }
              ]
            },
            {
              id: "int-01-02",
              titre: "Compléments d'al-Ḥaṭṭāb : autres règles de lecture",
              titre_ar: "تَكْمِيلٌ فِي بَيَانِ أُمُورٍ يُحْتَاجُ إِلَيْهَا",
              masail: [
                { id: "int-01-02-01", titre: "Les exemples et les cas regroupés", titre_ar: "التَّمْثِيلُ وَالنَّظَائِرُ" },
                { id: "int-01-02-02", titre: "« Wa » ou « ka » devant une précision", titre_ar: "الوَاوُ وَكَافُ التَّشْبِيهِ" },
                { id: "int-01-02-03", titre: "Un verbe sans sujet renvoie à Mālik", titre_ar: "الفِعْلُ بِلَا فَاعِلٍ مَذْكُورٍ" },
                { id: "int-01-02-04a", titre: "« Nadb » : en dessous de la sunna", titre_ar: "النَّدْبُ" },
                { id: "int-01-02-04b", titre: "Les trois rangs du recommandé", titre_ar: "مَرَاتِبُ المَنْدُوبِ" },
                { id: "int-01-02-05a", titre: "« Jawâz » : le permis", titre_ar: "الجَوَازُ" },
                { id: "int-01-02-05b", titre: "« Fard » et « wâjib »", titre_ar: "الفَرْضُ وَالوَاجِبُ" },
                { id: "int-01-02-06", titre: "« Riwâyât », « aqwâl », « ittifâq », « ijmâʿ »", titre_ar: "الرِّوَايَاتُ وَالأَقْوَالُ" },
                { id: "int-01-02-07a", titre: "« Les sept juristes »", titre_ar: "الفُقَهَاءُ السَّبْعَةُ" },
                { id: "int-01-02-07b", titre: "Médinois, Égyptiens, Irakiens, Maghrébins", titre_ar: "المَدَنِيُّونَ وَالمِصْرِيُّونَ" },
                { id: "int-01-02-08a", titre: "« Al-joumhoûr » et trois mises en garde", titre_ar: "الجُمْهُورُ" },
                { id: "int-01-02-08b", titre: "Les notes d'élèves (« taqâyîd »)", titre_ar: "التَّقَايِيدُ" },
                { id: "int-01-02-09a", titre: "« Yanbaghî » : il convient", titre_ar: "يَنْبَغِي" },
                { id: "int-01-02-09b", titre: "« Lâ ba'sa » : il n'y a pas de mal", titre_ar: "لَا بَأْسَ" },
                { id: "int-01-02-10", titre: "« Makroûh » ou « khilâf al-awlâ »", titre_ar: "المَكْرُوهُ وَخِلَافُ الأَوْلَى" },
                { id: "int-01-02-11", titre: "« Samâʿ » et « rasm » (al-ʿUtbiyya)", titre_ar: "السَّمَاعُ وَالرَّسْمُ" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "tah",
      titre: "Le livre de la purification",
      titre_ar: "كِتَابُ الطَّهَارَةِ",
      abwab: [
        {
          id: "tah-01",
          titre: "Ce qui lève le hadath et la règle de la souillure",
          titre_ar: "بَابٌ يُرْفَعُ الحَدَثُ وَحُكْمُ الخَبَثِ",
          fusul: [
            /* tah-01-01 — t. 1, p. 43–86 (Shamela 569, pages 42–85) — 34 segments du matn */
            {
              id: "tah-01-01",
              titre: "L'eau qui purifie (ouverture du bāb)",
              titre_ar: "يُرْفَعُ الحَدَثُ وَحُكْمُ الخَبَثِ بِالمُطْلَقِ",
              masail: [
                { id: "tah-01-01-01a", titre: "Seule l'eau absolue purifie", titre_ar: "بَابٌ يُرْفَعُ الْحَدَثُ وَحُكْمُ الْخَبَثِ بِالْمُطْلَقِ …" }, /* p. 43 — un seul segment, quatre sous-fiches (étape 3) */
                { id: "tah-01-01-01b", titre: "Qu'est-ce que l'eau absolue ?", titre_ar: "حَدُّ المَاءِ المُطْلَقِ" }, /* p. 45 */
                { id: "tah-01-01-01c", titre: "L'eau de Zamzam", titre_ar: "مَاءُ زَمْزَمَ" }, /* p. 46 */
                { id: "tah-01-01-01d", titre: "Les puits du pays de Thamūd", titre_ar: "آبَارُ ثَمُودَ" }, /* p. 49 */
                { id: "tah-01-01-02", titre: "Eau recueillie de la rosée", titre_ar: "وَإِنْ جُمِعَ مِنْ نَدًى" }, /* p. 50 */
                { id: "tah-01-01-03", titre: "Eau fondue après avoir gelé", titre_ar: "أَوَذَابَ بَعْدَ جُمُودِهِ" }, /* p. 51 */
                { id: "tah-01-01-04", titre: "Reste bu par un animal, une femme réglée ou une personne en janâba", titre_ar: "أَوْ كَانَ سُؤْرَ بَهِيمَةٍ أَوْ حَائِضٍ …" }, /* p. 51 */
                { id: "tah-01-01-05", titre: "Reste de l'eau de leur purification", titre_ar: "أَوْ فَضْلَةَ طَهَارَتِهِمَا" }, /* p. 52 */
                { id: "tah-01-01-06", titre: "Eau abondante mêlée d'une impureté qui ne l'a pas changée", titre_ar: "أَوْ كَثِيرًا خُلِطَ بِنَجَسٍ لَمْ يُغَيِّرْهُ" }, /* p. 53 */
                { id: "tah-01-01-07", titre: "Doute : ce qui a changé l'eau lui nuit-il ?", titre_ar: "أَوْ شُكَّ فِي مُغَيِّرِهِ هَلْ يَضُرُّ" }, /* p. 53 */
                { id: "tah-01-01-08", titre: "Eau changée par ce qui la jouxte, même une graisse collée", titre_ar: "أَوْ تَغَيَّرَ بِمُجَاوِرِهِ وَإِنْ بِدُهْنٍ لَاصِقٍ" }, /* p. 54 */
                { id: "tah-01-01-09", titre: "Odeur du goudron de l'outre du voyageur", titre_ar: "أَوْ بِرَائِحَةِ قَطِرَانِ وِعَاءِ مُسَافِرٍ" }, /* p. 55 */
                { id: "tah-01-01-10", titre: "Eau changée par ce qui naît d'elle", titre_ar: "أَوْ بِمُتَوَلِّدٍ مِنْهُ" }, /* p. 56 */
                { id: "tah-01-01-11", titre: "Eau changée par son lit, comme le sel", titre_ar: "أَوْ بِقَرَارِهِ كَمِلْحٍ" }, /* p. 56 */
                { id: "tah-01-01-12", titre: "Eau changée par ce qu'on y jette (terre, sel)", titre_ar: "أَوْ بِمَطْرُوحٍ وَلَوْ قَصْدًا مِنْ تُرَابٍ …" }, /* p. 57 */
                { id: "tah-01-01-13", titre: "Le sel : l'avis le plus fort", titre_ar: "وَالْأَرْجَحُ السَّلْبُ بِالْمِلْحِ" }, /* p. 58 */
                { id: "tah-01-01-14", titre: "Sel fabriqué : hésitation (taraddoud)", titre_ar: "وَفِي الِاتِّفَاقِ عَلَى السَّلْبِ بِهِ إنْ …" }, /* p. 58 */
                { id: "tah-01-01-15", titre: "Eau changée par ce qui s'en sépare d'ordinaire", titre_ar: "لَا بِمُتَغَيِّرٍ لَوْنًا أَوْ طَعْمًا أَوْ …" }, /* p. 58 */
                { id: "tah-01-01-16", titre: "Changement net dû à la corde ou au seau du puits", titre_ar: "وَيَضُرُّ بَيِّنُ تَغَيُّرٍ بِحَبْلِ سَانِيَةٍ" }, /* p. 61 */
                { id: "tah-01-01-17a", titre: "La mare changée par les déjections du bétail", titre_ar: "الغَدِيرُ يَتَغَيَّرُ بِرَوْثِ المَاشِيَةِ" }, /* p. 62 — un seul segment, deux sous-fiches (étape 3) */
                { id: "tah-01-01-17b", titre: "Le puits changé par des feuilles ou de la paille", titre_ar: "البِئْرُ تَتَغَيَّرُ بِوَرَقِ الشَّجَرِ أَوِ التِّبْنِ" }, /* p. 62 */
                { id: "tah-01-01-18", titre: "Mélange de même aspect que l'eau : question ouverte", titre_ar: "وَفِي جَعْلِ الْمُخَالِطِ الْمُوَافِقِ كَالْمُخَالِفِ نَظَرٌ" }, /* p. 64 */
                { id: "tah-01-01-19", titre: "Eau passée par la bouche : deux avis", titre_ar: "وَفِي التَّطْهِيرِ بِمَاءٍ جُعِلَ فِي الْفَمِ …" }, /* p. 65 */
                { id: "tah-01-01-20", titre: "Eau déjà utilisée pour lever le hadath", titre_ar: "وَكُرِهَ مَاءٌ مُسْتَعْمَلٌ فِي حَدَثٍ" }, /* p. 66 */
                { id: "tah-01-01-21", titre: "Eau déjà utilisée pour autre chose : hésitation", titre_ar: "وَفِي غَيْرِهِ تَرَدُّدٌ" }, /* p. 69 */
                { id: "tah-01-01-22", titre: "Peu d'eau touchée par une impureté sans changement", titre_ar: "وَيَسِيرٌ كَآنِيَةِ وُضُوءٍ وَغُسْلٍ بِنَجَسٍ لَمْ …" }, /* p. 70 */
                { id: "tah-01-01-23", titre: "Eau où un chien a lapé", titre_ar: "أَوْ وَلَغَ فِيهِ كَلْبٌ" }, /* p. 74 */
                { id: "tah-01-01-24", titre: "Eau stagnante où l'on se lave", titre_ar: "وَرَاكِدٌ يُغْتَسَلُ فِيهِ" }, /* p. 74 */
                { id: "tah-01-01-25", titre: "Reste du buveur de vin et de qui ne se garde pas de l'impur", titre_ar: "وَسُؤْرُ شَارِبِ خَمْرٍ وَمَا أَدْخَلَ يَدَهُ …" }, /* p. 77 */
                { id: "tah-01-01-26", titre: "Exceptions : précaution difficile, ou nourriture", titre_ar: "لَا إنْ عَسُرَ الِاحْتِرَازُ مِنْهُ أَوْ …" }, /* p. 77 */
                { id: "tah-01-01-27", titre: "Eau chauffée au soleil", titre_ar: "كَمُشَمَّسٍ" }, /* p. 78 */
                { id: "tah-01-01-28", titre: "Impureté vue sur sa bouche au moment d'utiliser l'eau", titre_ar: "وَإِنْ رُئِيَتْ عَلَى فِيهِ وَقْتَ اسْتِعْمَالِهِ …" }, /* p. 82 */
                { id: "tah-01-01-29", titre: "Animal terrestre à sang mort dans une eau stagnante", titre_ar: "وَإِذَا مَاتَ بَرِّيٌّ ذُو نَفْسٍ سَائِلَةٍ …" }, /* p. 82 */
                { id: "tah-01-01-30", titre: "Changement dû à l'impureté qui disparaît sans ajout d'eau", titre_ar: "وَإِنْ زَالَ تَغَيُّرُ النَّجِسِ لَا بِكَثْرَةِ …" }, /* p. 84 */
                { id: "tah-01-01-31", titre: "Information donnée par une seule personne, avec sa raison", titre_ar: "وَقُبِلَ خَبَرُ الْوَاحِدِ إنْ بَيَّنَ وَجْهَهَا" }, /* p. 86 ; Mawāhib imprime « وَجْهًا », corrigé (v1.9) */
                { id: "tah-01-01-32", titre: "… ou s'ils sont de la même école", titre_ar: "أَوْ اتَّفَقَا مَذْهَبًا" }, /* p. 86 */
                { id: "tah-01-01-33", titre: "Sinon : il est jugé préférable de délaisser l'eau", titre_ar: "وَإِلَّا فَقَالَ يُسْتَحْسَنُ تَرْكُهُ" }, /* p. 86 */
                { id: "tah-01-01-34", titre: "L'eau versée sur l'impureté, ou l'inverse", titre_ar: "وَوُرُودُ الْمَاءِ عَلَى النَّجَاسَةِ كَعَكْسِهِ" } /* p. 86 */
              ]
            },
            /* tah-01-02 — t. 1, p. 86–130 (Shamela 569, pages 85–129) — 76 segments du matn (75 au squelette + 16b) */
            {
              id: "tah-01-02",
              titre: "Le pur et l'impur",
              titre_ar: "الطَّاهِرُ وَالنَّجِسُ",
              masail: [
                { id: "tah-01-02-01", titre: "Le pur : cadavre de l'animal sans sang", titre_ar: "فَصْلٌ الطَّاهِرُ مَيِّتُ مَا لَا دَمَ …" }, /* p. 86 */
                { id: "tah-01-02-02", titre: "L'animal marin", titre_ar: "وَالْبَحْرِيِّ" }, /* p. 88 */
                { id: "tah-01-02-03", titre: "… même s'il vit longtemps sur terre", titre_ar: "وَلَوْ طَالَتْ حَيَاتُهُ بِبَرٍّ" }, /* p. 88 */
                { id: "tah-01-02-04", titre: "L'animal égorgé rituellement", titre_ar: "وَمَا ذُكِّيَ" }, /* p. 88 ; Mawāhib imprime « ذَكَّى », corrigé (v1.9) */
                { id: "tah-01-02-05", titre: "Ses parties, sauf s'il est interdit à la consommation", titre_ar: "وَجُزْؤُهُ إلَّا مُحَرَّمَ الْأَكْلِ" }, /* p. 88 */
                { id: "tah-01-02-06", titre: "Laine, poils, duvet et crins, même du porc", titre_ar: "وَصُوفٌ وَوَبَرٌ وَزَغَبُ رِيشٍ وَشَعْرٌ وَلَوْ …" }, /* p. 89 */
                { id: "tah-01-02-07", titre: "… s'ils sont tondus", titre_ar: "إنْ جُزَّتْ" }, /* p. 89 */
                { id: "tah-01-02-08", titre: "Les choses inertes", titre_ar: "وَالْجَمَادُ وَهُوَ جِسْمٌ غَيْرُ حَيٍّ وَمُنْفَصِلٍ …" }, /* p. 89 */
                { id: "tah-01-02-09", titre: "… sauf ce qui enivre", titre_ar: "إلَّا الْمُسْكِرَ" }, /* p. 90 */
                { id: "tah-01-02-10", titre: "L'être vivant", titre_ar: "وَالْحَيُّ" }, /* p. 91 */
                { id: "tah-01-02-11", titre: "Ses larmes et sa sueur", titre_ar: "وَدَمْعُهُ وَعَرَقُهُ" }, /* p. 91 */
                { id: "tah-01-02-12", titre: "Sa salive, son mucus et ses œufs", titre_ar: "وَلُعَابُهُ وَمُخَاطُهُ وَبَيْضُهُ" }, /* p. 91 */
                { id: "tah-01-02-13", titre: "… même s'il a mangé de l'impur", titre_ar: "وَلَوْ أَكَلَ نَجِسًا" }, /* p. 92 */
                { id: "tah-01-02-14", titre: "… sauf l'œuf gâté", titre_ar: "إلَّا الْمِذْرَ" }, /* p. 93 */
                { id: "tah-01-02-15", titre: "Ce qui sort après la mort", titre_ar: "وَالْخَارِجُ بَعْدَ الْمَوْتِ" }, /* p. 93 */
                { id: "tah-01-02-16", titre: "Le lait humain, sauf celui d'un mort", titre_ar: "وَلَبَنُ آدَمِيٍّ إلَّا الْمَيِّتِ" }, /* p. 93 */
                { id: "tah-01-02-16b", titre: "Le lait des autres animaux suit leur chair", titre_ar: "وَلَبَنُ غَيْرِهِ تَابِعٌ" }, /* p. 94 — segment manqué par le squelette (v1.9) */
                { id: "tah-01-02-17", titre: "Urine et excréments de l'animal licite", titre_ar: "وَبَوْلٌ وَعَذِرَةٌ مِنْ مُبَاحٍ" }, /* p. 94 */
                { id: "tah-01-02-18", titre: "… sauf s'il se nourrit d'impur", titre_ar: "إلَّا الْمُتَغَذِّي بِنَجَسٍ" }, /* p. 94 */
                { id: "tah-01-02-19", titre: "La vomissure, sauf celle qui a changé", titre_ar: "وَقَيْءٌ إلَّا الْمُتَغَيِّرُ عَنْ الطَّعَامِ" }, /* p. 94 */
                { id: "tah-01-02-20", titre: "Bile jaune et phlegme", titre_ar: "وَصَفْرَاءُ وَبَلْغَمٌ" }, /* p. 95 */
                { id: "tah-01-02-21", titre: "Le fiel de l'animal licite", titre_ar: "وَمَرَارَةُ مُبَاحٍ" }, /* p. 95 */
                { id: "tah-01-02-22", titre: "Le sang non répandu", titre_ar: "وَدَمٌ لَمْ يُسْفَحْ" }, /* p. 96 */
                { id: "tah-01-02-23", titre: "Le musc", titre_ar: "وَمِسْكٌ" }, /* p. 96 */
                { id: "tah-01-02-24", titre: "Sa poche (fa'ra)", titre_ar: "وَفَأْرَتُهُ" }, /* p. 97 */
                { id: "tah-01-02-25", titre: "Culture arrosée d'une impureté", titre_ar: "وَزَرْعٌ بِنَجَسٍ" }, /* p. 97 */
                { id: "tah-01-02-26", titre: "Le vin pétrifié", titre_ar: "وَخَمْرٌ تَحَجَّرَ" }, /* p. 97 */
                { id: "tah-01-02-27", titre: "… ou devenu vinaigre", titre_ar: "أَوْ خُلِّلَ" }, /* p. 97 */
                { id: "tah-01-02-28", titre: "L'impur : ce qui a été excepté", titre_ar: "وَالنَّجَسُ مَا اسْتَثْنَى" }, /* p. 98 */
                { id: "tah-01-02-29", titre: "Cadavre des autres animaux", titre_ar: "وَمَيِّتُ غَيْرِ مَا ذَكَرَ" }, /* p. 98 */
                { id: "tah-01-02-30", titre: "… même un pou", titre_ar: "وَلَوْ قَمْلَةً" }, /* p. 98 */
                { id: "tah-01-02-31", titre: "Le cadavre humain : l'avis le plus apparent", titre_ar: "وَآدَمِيًّا وَالْأَظْهَرُ طَهَارَتُهُ" }, /* p. 99 */
                { id: "tah-01-02-32", titre: "Ce qu'on détache d'un vivant ou d'un mort (corne, os, ivoire, ongle…)", titre_ar: "وَمَا أُبِينَ مِنْ حَيٍّ أَوْ مَيِّتٍ …" }, /* p. 100 */
                { id: "tah-01-02-33", titre: "Le tuyau de plume", titre_ar: "وَقَصَبَةِ رِيشٍ" }, /* p. 100 */
                { id: "tah-01-02-34", titre: "La peau, même tannée", titre_ar: "وَجِلْدٍ وَلَوْ دُبِغَ" }, /* p. 101 */
                { id: "tah-01-02-35", titre: "Tolérance accordée pour la peau tannée", titre_ar: "وَرُخِّصَ فِيهِ مُطْلَقًا" }, /* p. 101 */
                { id: "tah-01-02-36", titre: "… sauf celle du porc", titre_ar: "إلَّا مِنْ خِنْزِيرٍ" }, /* p. 101 */
                { id: "tah-01-02-37", titre: "… après tannage", titre_ar: "بَعْدَ دَبْغِهِ" }, /* p. 101 */
                { id: "tah-01-02-38", titre: "… pour les choses sèches et l'eau", titre_ar: "فِي يَابِسٍ وَمَاءٍ" }, /* p. 101 */
                { id: "tah-01-02-39", titre: "L'ivoire : déconseillé selon la Mudawwana", titre_ar: "وَفِيهَا كَرَاهَةُ الْعَاجِ" }, /* p. 102 */
                { id: "tah-01-02-40", titre: "Abstention sur le kaymakht", titre_ar: "وَالتَّوَقُّفُ فِي الْكَيْمَخْتِ" }, /* p. 103 */
                { id: "tah-01-02-41", titre: "Sperme, madhy et wadî", titre_ar: "وَمَنِيٍّ وَمَذْيٍ وَوَدْيٍ" }, /* p. 104 */
                { id: "tah-01-02-42", titre: "Pus et sanie", titre_ar: "وَقَيْحٍ وَصَدِيدٍ" }, /* p. 104 */
                { id: "tah-01-02-43", titre: "Humidité du sexe", titre_ar: "وَرُطُوبَةِ فَرْجٍ" }, /* p. 105 */
                { id: "tah-01-02-44", titre: "Le sang répandu", titre_ar: "وَدَمٍ مَسْفُوحٍ" }, /* p. 106 */
                { id: "tah-01-02-45", titre: "… même de poisson", titre_ar: "وَلَوْ مِنْ سَمَكٍ" }, /* p. 106 */
                { id: "tah-01-02-46", titre: "… ou de mouche", titre_ar: "وَذُبَابٍ" }, /* p. 106 */
                { id: "tah-01-02-47", titre: "La bile noire", titre_ar: "وَسَوْدَاءَ" }, /* p. 106 */
                { id: "tah-01-02-48", titre: "Cendre et fumée d'une impureté", titre_ar: "وَرَمَادِ نَجِسٍ وَدُخَانِهِ" }, /* p. 106 */
                { id: "tah-01-02-49", titre: "Urine et excréments humains", titre_ar: "وَبَوْلٍ وَعَذِرَةٍ مِنْ آدَمِيٍّ" }, /* p. 108 */
                { id: "tah-01-02-50", titre: "… et de l'animal interdit ou déconseillé", titre_ar: "وَمُحَرَّمٍ وَمَكْرُوهٍ" }, /* p. 108 */
                { id: "tah-01-02-51a", titre: "Nourriture liquide abondante touchée par peu d'impureté", titre_ar: "وَيَنْجُسُ كَثِيرُ طَعَامٍ مَائِعٍ بِنَجَسٍ قَلَّ" }, /* p. 108 — un seul segment, deux sous-fiches (étape 3, v1.13) */
                { id: "tah-01-02-51b", titre: "La souris dans l'huile ou le beurre", titre_ar: "الفَأْرَةُ تَقَعُ فِي الزَّيْتِ وَالسَّمْنِ" }, /* p. 110 */
                { id: "tah-01-02-52", titre: "Nourriture solide : selon la diffusion", titre_ar: "كَجَامِدٍ إنْ أَمْكَنَ السَّرَيَانُ وَإِلَّا فَبِحَسَبِهِ" }, /* p. 112 */
                { id: "tah-01-02-53a", titre: "L'huile et les liquides souillés ne se purifient pas", titre_ar: "وَلَا يَطْهُرُ زَيْتٌ خُولِطَ وَلَحْمٌ طُبِخَ …" }, /* p. 113 — un seul segment, quatre sous-fiches (étape 3, v1.14) */
                { id: "tah-01-02-53b", titre: "La viande cuite avec une impureté", titre_ar: "وَلَحْمٌ طُبِخَ" }, /* p. 114 */
                { id: "tah-01-02-53c", titre: "Olives salées et œufs bouillis avec une impureté", titre_ar: "وَزَيْتُونٌ مُلِّحَ وَبَيْضٌ صُلِقَ بِنَجَسٍ" }, /* p. 114 */
                { id: "tah-01-02-53d", titre: "La poterie imprégnée d'une impureté pénétrante", titre_ar: "وَفَخَّارٌ بِغَوَّاصٍ" }, /* p. 115 */
                { id: "tah-01-02-54a", titre: "Se servir d'une chose souillée", titre_ar: "وَيُنْتَفَعُ بِمُتَنَجِّسٍ لَا نَجَسٍ فِي غَيْرِ مَسْجِدٍ وَآدَمِيٍّ" }, /* p. 117 — un seul segment, trois sous-fiches (étape 3, v1.14) */
                { id: "tah-01-02-54b", titre: "On ne se sert pas d'une chose impure en soi", titre_ar: "لَا نَجَسٍ" }, /* p. 119 */
                { id: "tah-01-02-54c", titre: "Se soigner avec une impureté", titre_ar: "التَّدَاوِي بِالنَّجَسِ" }, /* p. 119 */
                { id: "tah-01-02-55", titre: "Prier avec le vêtement d'un non-musulman", titre_ar: "وَلَا يُصَلَّى بِلِبَاسِ كَافِرٍ" }, /* p. 121 */
                { id: "tah-01-02-56", titre: "… à la différence de ce qu'il a tissé", titre_ar: "بِخِلَافِ نَسْجِهِ" }, /* p. 121 */
                { id: "tah-01-02-57", titre: "Vêtement où dort une autre personne qui prie", titre_ar: "وَلَا بِمَا يَنَامُ فِيهِ مُصَلٍّ آخَرُ" }, /* p. 122 */
                { id: "tah-01-02-58", titre: "Vêtements de qui ne prie pas, sauf pour la tête", titre_ar: "وَلَا بِثِيَابِ غَيْرِ مُصَلٍّ إلَّا لِرَأْسِهِ" }, /* p. 122 */
                { id: "tah-01-02-59", titre: "Vêtement porté contre le sexe par un non-savant", titre_ar: "وَلَا بِمُحَاذِي فَرْجِ غَيْرِ عَالِمٍ" }, /* p. 123 */
                { id: "tah-01-02-60", titre: "Interdit à l'homme : objet orné, même ceinture ou arme", titre_ar: "وَحَرُمَ اسْتِعْمَالُ ذَكَرٍ مُحَلًّى وَلَوْ مِنْطَقَةً …" }, /* p. 124 */
                { id: "tah-01-02-61", titre: "… sauf le Coran", titre_ar: "إلَّا الْمُصْحَفَ" }, /* p. 125 */
                { id: "tah-01-02-62", titre: "… l'épée", titre_ar: "وَالسَّيْفَ" }, /* p. 126 */
                { id: "tah-01-02-63", titre: "… le nez", titre_ar: "وَالْأَنْفَ" }, /* p. 126 */
                { id: "tah-01-02-64", titre: "… l'attache d'une dent", titre_ar: "وَرَبْطَ سِنٍّ" }, /* p. 126 */
                { id: "tah-01-02-65", titre: "… dans tous les cas", titre_ar: "مُطْلَقًا" }, /* p. 126 */
                { id: "tah-01-02-66", titre: "… la bague en argent", titre_ar: "وَخَاتَمَ الْفِضَّةِ" }, /* p. 126 */
                { id: "tah-01-02-67", titre: "Pas ce qui contient de l'or, même peu", titre_ar: "لَا مَا بَعْضُهُ ذَهَبٌ وَلَوْ قَلَّ" }, /* p. 128 */
                { id: "tah-01-02-68", titre: "Récipient d'or ou d'argent", titre_ar: "وَإِنَاءِ نَقْدٍ" }, /* p. 128 */
                { id: "tah-01-02-69", titre: "Le posséder, même pour une femme", titre_ar: "وَاقْتِنَاؤُهُ، وَإِنْ لِامْرَأَةٍ" }, /* p. 128 */
                { id: "tah-01-02-70", titre: "Récipient recouvert ou plaqué", titre_ar: "وَفِي الْمُغَشَّى وَالْمُمَوَّهِ" }, /* p. 128 */
                { id: "tah-01-02-71", titre: "Récipient renforcé ou muni d'un anneau", titre_ar: "وَالْمُضَبَّبِ وَذِي الْحَلْقَةِ" }, /* p. 129 */
                { id: "tah-01-02-72", titre: "Récipient de pierre précieuse : deux avis", titre_ar: "وَإِنَاءِ الْجَوْهَرِ قَوْلَانِ" }, /* p. 129 */
                { id: "tah-01-02-73", titre: "Permis à la femme : ce qu'elle porte", titre_ar: "وَجَائِزٌ لِلْمَرْأَةِ الْمَلْبُوسُ مُطْلَقًا" }, /* p. 130 */
                { id: "tah-01-02-74", titre: "… même une sandale", titre_ar: "وَلَوْ نَعْلًا" }, /* p. 130 */
                { id: "tah-01-02-75", titre: "… mais pas un lit ou semblable", titre_ar: "لَا كَسَرِيرٍ" } /* p. 130 */
              ]
            },
            /* tah-01-03 — t. 1, p. 130–179 (Shamela 569, pages 129–178) — 50 segments du matn */
            {
              id: "tah-01-03",
              titre: "Ôter l'impureté",
              titre_ar: "فِي بَيَانِ حُكْمِ النَّجَاسَةِ",
              masail: [
                { id: "tah-01-03-01a", titre: "Ôter l'impureté pour prier : sunna ou obligation (khilâf)", titre_ar: "فَصْلٌ هَلْ إزَالَةُ النَّجَاسَةِ عَنْ ثَوْبِ …" }, /* p. 130 — un seul segment, huit sous-fiches (étape 3, v1.17) */
                { id: "tah-01-03-01b", titre: "Qui refait la prière faite avec une impureté", titre_ar: "إنْ ذَكَرَ وَقَدَرَ وَإِلَّا أَعَادَ" }, /* p. 130 */
                { id: "tah-01-03-01c", titre: "Le vêtement : tout ce que porte le fidèle", titre_ar: "عَنْ ثَوْبِ مُصَلٍّ" }, /* p. 134 */
                { id: "tah-01-03-01d", titre: "… même le bout de son turban", titre_ar: "وَلَوْ طَرَفَ عِمَامَتِهِ" }, /* p. 134 */
                { id: "tah-01-03-01e", titre: "Le corps, et l'impureté avalée", titre_ar: "وَبَدَنِهِ" }, /* p. 135 */
                { id: "tah-01-03-01f", titre: "Le lieu : là où se posent les membres", titre_ar: "وَمَكَانِهِ" }, /* p. 135 */
                { id: "tah-01-03-01g", titre: "… mais non le bout de sa natte", titre_ar: "لَا طَرَفَ حَصِيرِهِ" }, /* p. 137 */
                { id: "tah-01-03-01h", titre: "Jusqu'à quand refaire la prière", titre_ar: "وَإِلَّا أَعَادَ الظُّهْرَيْنِ لِلِاصْفِرَارِ" }, /* p. 138 */
                { id: "tah-01-03-02", titre: "Impureté qui tombe pendant la prière", titre_ar: "وَسُقُوطُهَا فِي صَلَاةٍ مُبْطِلٌ" }, /* p. 140 */
                { id: "tah-01-03-03", titre: "… ou dont on se souvient pendant la prière", titre_ar: "كَذِكْرِهَا فِيهَا" }, /* p. 140 */
                { id: "tah-01-03-04", titre: "… pas avant la prière", titre_ar: "لَا قَبْلَهَا" }, /* p. 141 */
                { id: "tah-01-03-05", titre: "… ou sous une sandale qu'on retire", titre_ar: "أَوْ كَانَتْ أَسْفَلَ نَعْلٍ فَخَلَعَهَا" }, /* p. 141 */
                { id: "tah-01-03-06", titre: "Tolérance pour ce qui est difficile à éviter", titre_ar: "وَعُفِيَ عَمَّا يَعْسُرُ" }, /* p. 142 */
                { id: "tah-01-03-07", titre: "Le hadath chronique", titre_ar: "كَحَدَثٍ مُسْتَنْكِحٍ" }, /* p. 142 */
                { id: "tah-01-03-08", titre: "Humidité d'hémorroïdes", titre_ar: "وَبَلَلُ بَاسُورٍ" }, /* p. 143 */
                { id: "tah-01-03-09", titre: "… sur la main si on les remet souvent, ou le vêtement", titre_ar: "فِي يَدٍ إنْ كَثُرَ الرَّدُّ، أَوْ …" }, /* p. 144 */
                { id: "tah-01-03-10", titre: "Vêtement de la nourrice qui fait des efforts", titre_ar: "وَثَوْبُ مُرْضِعَةٍ تَجْتَهِدُ" }, /* p. 144 */
                { id: "tah-01-03-11", titre: "Recommandé : un vêtement réservé à la prière", titre_ar: "وَنُدِبَ لَهَا ثَوْبٌ لِلصَّلَاةِ" }, /* p. 145 */
                { id: "tah-01-03-12", titre: "Moins d'un dirham de sang", titre_ar: "وَدُونَ دِرْهَمٍ مِنْ دَمٍ مُطْلَقًا" }, /* p. 146 */
                { id: "tah-01-03-13", titre: "Pus et sanie", titre_ar: "وَقَيْحٍ وَصَدِيدٍ" }, /* p. 147 */
                { id: "tah-01-03-14", titre: "Urine de cheval pour le combattant en terre ennemie", titre_ar: "وَبَوْلُ فَرَسٍ لِغَازٍ بِأَرْضِ حَرْبٍ" }, /* p. 149 */
                { id: "tah-01-03-15", titre: "Trace de mouche venue d'excréments", titre_ar: "وَأَثَرُ ذُبَابٍ مِنْ عَذِرَةٍ" }, /* p. 150 */
                { id: "tah-01-03-16", titre: "Endroit de ventouse essuyé", titre_ar: "وَمَوْضِعُ حِجَامَةٍ مُسِحَ" }, /* p. 150 */
                { id: "tah-01-03-17", titre: "Sinon : refaire dans le temps (interprété par l'oubli)", titre_ar: "وَإِلَّا أَعَادَ فِي الْوَقْتِ وَأُوِّلَ بِالنِّسْيَانِ" }, /* p. 150 */
                { id: "tah-01-03-18", titre: "Boue de pluie, même mêlée d'excréments", titre_ar: "وَكَطِينِ مَطَرٍ، وَإِنْ اخْتَلَطَتْ الْعَذِرَةُ بِالْمُصِيبِ" }, /* p. 150 */
                { id: "tah-01-03-19", titre: "… sauf s'ils dominent", titre_ar: "لَا إنْ غَلَبَتْ" }, /* p. 150 */
                { id: "tah-01-03-20", titre: "Pan de robe allongé d'une femme pour se couvrir", titre_ar: "وَذَيْلُ امْرَأَةٍ مُطَالٍ لِلسَّتْرِ" }, /* p. 152 */
                { id: "tah-01-03-21", titre: "Pied mouillé passant sur une impureté sèche", titre_ar: "وَرِجْلٌ بُلَّتْ يَمُرَّانِ بِنَجَسٍ يَبَسٍ يَطْهُرَانِ …" }, /* p. 153 */
                { id: "tah-01-03-22", titre: "Chaussure et sandale : crottin et urine des bêtes, frottés", titre_ar: "وَخُفٌّ وَنَعْلٌ مِنْ رَوْثِ دَوَابَّ وَبَوْلِهَا …" }, /* p. 153 */
                { id: "tah-01-03-23", titre: "Celui qui fait le mash sans eau : retirer et faire le tayammoum", titre_ar: "فَيَخْلَعُهُ الْمَاسِحُ لَا مَاءَ مَعَهُ وَيَتَيَمَّمُ" }, /* p. 154 */
                { id: "tah-01-03-24", titre: "Pied du pauvre assimilé (choix) ; autres : deux avis", titre_ar: "وَاخْتَارَ إلْحَاقَ رِجْلِ الْفَقِيرِ، وَفِي غَيْرِهِ …" }, /* p. 155 */
                { id: "tah-01-03-25", titre: "Ce qui tombe sur un passant ; croire le musulman", titre_ar: "وَوَاقِعٌ عَلَى مَارٍّ، وَإِنْ سَأَلَ صَدَّقَ …" }, /* p. 155 */
                { id: "tah-01-03-26", titre: "Épée polie et sang licite", titre_ar: "وَكَسَيْفٍ صَقِيلٍ لِإِفْسَادِهِ مِنْ دَمٍ مُبَاحٍ" }, /* p. 156 */
                { id: "tah-01-03-27", titre: "Trace de furoncle non percé", titre_ar: "وَأَثَرُ دُمَّلٍ لَمْ يُنْكَأْ" }, /* p. 156 */
                { id: "tah-01-03-28", titre: "Recommandé si excessif (sang de puces), hors prière", titre_ar: "وَنُدِبَ إنْ تَفَاحَشَ كَدَمِ بَرَاغِيثَ إلَّا …" }, /* p. 158 */
                { id: "tah-01-03-29", titre: "Purifier l'endroit souillé en le lavant, sans intention", titre_ar: "وَيَطْهُرُ مَحَلُّ النَّجَسِ بِلَا نِيَّةٍ بِغَسْلِهِ" }, /* p. 158 */
                { id: "tah-01-03-30", titre: "Endroit connu ; sinon tout l'endroit douteux", titre_ar: "إنْ عَرَفَ وَإِلَّا فَبِجَمِيعِ الْمَشْكُوكِ فِيهِ كَكُمَّيْهِ بِخِلَافِ ثَوْبَيْهِ فَيَتَحَرَّى" }, /* p. 160 */
                { id: "tah-01-03-31", titre: "Avec une eau purifiante qui se sépare de même", titre_ar: "بِطَهُورٍ مُنْفَصِلٍ كَذَلِكَ" }, /* p. 162 */
                { id: "tah-01-03-32", titre: "Pas d'obligation d'essorer", titre_ar: "وَلَا يَلْزَمُ عَصْرُهُ" }, /* p. 163 */
                { id: "tah-01-03-33", titre: "Disparition du goût ; couleur et odeur tenaces", titre_ar: "مَعَ زَوَالِ طَعْمِهِ لَا لَوْنٍ وَرِيحٍ …" }, /* p. 163 */
                { id: "tah-01-03-34", titre: "Eau de lavage changée : impure", titre_ar: "وَالْغُسَالَةُ الْمُتَغَيِّرَةُ نَجِسَةٌ" }, /* p. 164 */
                { id: "tah-01-03-35", titre: "Impureté ôtée sans eau absolue : ce qui touche l'endroit", titre_ar: "وَلَوْ زَالَ عَيْنُ النَّجَاسَةِ بِغَيْرِ الْمَاءِ …" }, /* p. 165 */
                { id: "tah-01-03-36", titre: "Doute sur l'atteinte du vêtement : aspersion (nadh)", titre_ar: "وَإِنْ شَكَّ فِي إصَابَتِهَا الثَّوْبَ وَجَبَ …" }, /* p. 165 */
                { id: "tah-01-03-37", titre: "Aspersion omise : refaire la prière, comme le lavage", titre_ar: "وَإِنْ تَرَكَ أَعَادَ الصَّلَاةَ كَالْغَسْلِ" }, /* p. 166 */
                { id: "tah-01-03-38", titre: "Définition : asperger à la main", titre_ar: "وَهُوَ رَشٌّ بِالْيَدِ" }, /* p. 167 */
                { id: "tah-01-03-39", titre: "Aspersion sans intention", titre_ar: "بِلَا نِيَّةٍ" }, /* p. 167 */
                { id: "tah-01-03-40", titre: "Pas en cas de doute sur l'impureté de ce qui a touché", titre_ar: "لَا إنْ شَكَّ فِي نَجَاسَةِ الْمُصِيبِ" }, /* p. 168 */
                { id: "tah-01-03-41", titre: "Doute sur les deux : rien à faire", titre_ar: "أَوْ فِيهِمَا" }, /* p. 168 */
                { id: "tah-01-03-42", titre: "Le corps : comme le vêtement, ou lavage obligatoire (khilâf)", titre_ar: "وَهَلْ الْجَسَدُ كَالثَّوْبِ أَوْ يَجِبُ غَسْلُهُ …" }, /* p. 168 */
                { id: "tah-01-03-43a", titre: "Eau purifiante confondue avec une eau impure : les cas", titre_ar: "وَإِنْ اشْتَبَهَ طَهُورٌ بِمُتَنَجِّسٍ، أَوْ نَجِسٍ …" }, /* p. 170 — un seul segment, trois sous-fiches (étape 3, v1.20) */
                { id: "tah-01-03-43b", titre: "Autant de prières que d'eaux impures, plus une : les cinq avis", titre_ar: "صَلَّى بِعَدَدِ النَّجِسِ وَزِيَادَةِ إنَاءٍ" }, /* p. 170 */
                { id: "tah-01-03-43c", titre: "Récipients confondus : cas particuliers", titre_ar: "وَإِنْ اشْتَبَهَ طَهُورٌ … — تَنْبِيهَاتٌ" }, /* p. 172 */
                { id: "tah-01-03-44", titre: "Laver sept fois le récipient d'eau (recommandé)", titre_ar: "وَنُدِبَ غَسْلُ إنَاءِ مَاءٍ وَيُرَاقُ لَا …" }, /* p. 174 */
                { id: "tah-01-03-45", titre: "… par pur culte (taʿabbudan)", titre_ar: "تَعَبُّدًا" }, /* p. 177 */
                { id: "tah-01-03-46", titre: "… pour le lapement d'un chien uniquement", titre_ar: "بِوُلُوغِ كَلْبٍ مُطْلَقًا لَا غَيْرِهِ" }, /* p. 177 */
                { id: "tah-01-03-47", titre: "… au moment de vouloir l'utiliser", titre_ar: "عِنْدَ قَصْدِ الِاسْتِعْمَالِ" }, /* p. 178 */
                { id: "tah-01-03-48", titre: "… sans intention", titre_ar: "بِلَا نِيَّةٍ" }, /* p. 178 */
                { id: "tah-01-03-49", titre: "Pas de terre", titre_ar: "وَلَا تَتْرِيبَ" }, /* p. 179 */
                { id: "tah-01-03-50", titre: "Pas de répétition pour plusieurs chiens", titre_ar: "وَلَا يَتَعَدَّدُ بِوُلُوغِ كَلْبٍ أَوْ كِلَابٍ" } /* p. 179 */
              ]
            },
            /* tah-01-04 — t. 1, p. 179–266 (Shamela 569, pages 178–265) — 56 segments du matn */
            {
              id: "tah-01-04",
              titre: "Les ablutions : piliers, sunna, convenances",
              titre_ar: "فَرَائِضُ الوُضُوءِ وَسُنَنُهُ وَفَضَائِلُهُ",
              masail: [
                { id: "tah-01-04-01", titre: "Piliers des ablutions : laver le visage (limites)", titre_ar: "فَصْلٌ: فَرَائِضُ الْوُضُوءِ غَسْلُ مَا بَيْنَ …" }, /* p. 179 */
                { id: "tah-01-04-02", titre: "Laver la cloison du nez, les rides du front, les lèvres", titre_ar: "فَيَغْسِلُ الْوَتَرَةَ وَأَسَارِيرَ جَبْهَتِهِ وَظَاهِرَ شَفَتَيْهِ" }, /* p. 188 */
                { id: "tah-01-04-03", titre: "Faire pénétrer l'eau dans les poils qui laissent voir la peau", titre_ar: "بِتَخْلِيلِ شَعْرٍ تَظْهَرُ الْبَشَرَةُ تَحْتَهُ" }, /* p. 188 */
                { id: "tah-01-04-04", titre: "Pas la plaie guérie ni le creux de naissance", titre_ar: "لَا جُرْحًا بَرَأَ أَوْ خُلِقَ غَائِرًا" }, /* p. 190 */
                { id: "tah-01-04-05", titre: "Les mains avec les coudes", titre_ar: "وَيَدَيْهِ بِمِرْفَقَيْهِ" }, /* p. 191 */
                { id: "tah-01-04-06", titre: "Le reste de l'avant-bras en cas d'amputation", titre_ar: "وَبَقِيَّةُ مِعْصَمٍ إنْ قُطِعَ" }, /* p. 191 */
                { id: "tah-01-04-07", titre: "Comme la main rattachée à l'épaule", titre_ar: "كَكَفٍّ بِمَنْكِبٍ" }, /* p. 193 */
                { id: "tah-01-04-08", titre: "Passer l'eau entre les doigts", titre_ar: "بِتَخْلِيلِ أَصَابِعِهِ" }, /* p. 194 */
                { id: "tah-01-04-09", titre: "Pas besoin de tourner la bague", titre_ar: "لَا إجَالَةِ خَاتَمِهِ" }, /* p. 196 */
                { id: "tah-01-04-10", titre: "… et le cas d'une autre bague", titre_ar: "وَنَقْصِ غَيْرِهِ" }, /* p. 197 */
                { id: "tah-01-04-11", titre: "Essuyer ce qui est sur le crâne", titre_ar: "وَمَسْحُ مَا عَلَى الْجُمْجُمَةِ" }, /* p. 202 */
                { id: "tah-01-04-12", titre: "Jusqu'aux tempes, avec les cheveux qui pendent", titre_ar: "بِعَظْمِ صُدْغَيْهِ مَعَ الْمُسْتَرْخِي" }, /* p. 204 */
                { id: "tah-01-04-13", titre: "Ni l'homme ni la femme ne défont leurs tresses", titre_ar: "وَلَا يَنْقُضُ ضَفْرَهُ رَجُلٌ وَلَا امْرَأَةٌ" }, /* p. 205 */
                { id: "tah-01-04-14", titre: "Glisser les mains dessous au retour", titre_ar: "وَيُدْخِلَانِ يَدَيْهِمَا تَحْتَهُ فِي رَدِّ الْمَسْحِ" }, /* p. 210 */
                { id: "tah-01-04-15", titre: "Laver la tête suffit", titre_ar: "وَغَسْلُهُ مُجْزِئٌ" }, /* p. 211 */
                { id: "tah-01-04-16", titre: "Laver les pieds avec les chevilles", titre_ar: "وَغَسْلُ رِجْلَيْهِ بِكَعْبَيْهِ النَّاتِئَيْنِ بِمِفْصَلَيْ السَّاقَيْنِ" }, /* p. 211 */
                { id: "tah-01-04-17", titre: "Recommandé : passer l'eau entre les orteils", titre_ar: "وَنُدِبَ تَخْلِيلُ أَصَابِعِهِمَا" }, /* p. 213 */
                { id: "tah-01-04-18", titre: "Ongles coupés, tête rasée : pas à refaire", titre_ar: "وَلَا يُعِيدُ مَنْ قَلَمَ ظُفْرَهُ أَوْ …" }, /* p. 214 */
                { id: "tah-01-04-19", titre: "La barbe rasée : deux avis", titre_ar: "وَفِي لِحْيَتِهِ قَوْلَانِ" }, /* p. 216 */
                { id: "tah-01-04-20", titre: "Le frottement (dalk)", titre_ar: "وَالدَّلْكُ" }, /* p. 218 */
                { id: "tah-01-04-21", titre: "La continuité (mouwâlât) : obligatoire ? (khilâf)", titre_ar: "وَهَلْ الْمُوَالَاةُ وَاجِبَةٌ إنْ ذَكَرَ وَقَدَرَ …" }, /* p. 223 */
                { id: "tah-01-04-22", titre: "L'intention : lever le hadath, le fard, ou l'autorisation", titre_ar: "وَنِيَّةُ رَفْعِ الْحَدَثِ عِنْدَ وَجْهِهِ أَوْ …" }, /* p. 230 */
                { id: "tah-01-04-23", titre: "… même avec l'intention de se rafraîchir", titre_ar: "وَإِنْ مَعَ تَبَرُّدٍ" }, /* p. 235 */
                { id: "tah-01-04-24", titre: "Exclure une partie de ce qu'on veut s'autoriser", titre_ar: "أَوْ أَخْرَجَ بَعْضَ الْمُسْتَبَاحِ" }, /* p. 236 */
                { id: "tah-01-04-25", titre: "Oublier un hadath, sans l'exclure", titre_ar: "أَوْ نَسِيَ حَدَثًا لَا أَخْرَجَهُ" }, /* p. 236 */
                { id: "tah-01-04-26", titre: "Intention de purification en général", titre_ar: "أَوْ نَوَى مُطْلَقَ الطَّهَارَةِ" }, /* p. 236 */
                { id: "tah-01-04-27", titre: "Intention de s'autoriser ce pour quoi elle est recommandée", titre_ar: "أَوْ اسْتِبَاحَةَ مَا نُدِبَتْ لَهُ" }, /* p. 237 */
                { id: "tah-01-04-28", titre: "« Si j'ai perdu mes ablutions, alors c'est pour cela »", titre_ar: "أَوْ قَالَ إنْ كُنْتُ أَحْدَثْتُ فَلَهُ" }, /* p. 237 */
                { id: "tah-01-04-29", titre: "Renouvellement, puis hadath découvert", titre_ar: "أَوْ جَدَّدَ فَتَبَيَّنَ حَدَثَهُ" }, /* p. 239 */
                { id: "tah-01-04-30", titre: "Partie oubliée lavée avec l'intention de surplus", titre_ar: "أَوْ تَرَكَ لُمْعَةً فَانْغَسَلَتْ بِنِيَّةِ الْفَضْلِ" }, /* p. 239 */
                { id: "tah-01-04-31", titre: "Intention répartie sur les membres", titre_ar: "أَوْ فَرَّقَ النِّيَّةَ عَلَى الْأَعْضَاءِ" }, /* p. 239 */
                { id: "tah-01-04-32", titre: "Intention perdue de vue ensuite, ou rejetée", titre_ar: "وَعُزُوبُهَا بَعْدَهُ وَرَفْضُهَا مُغْتَفَرٌ" }, /* p. 239 */
                { id: "tah-01-04-33", titre: "Intention un peu avant : khilâf", titre_ar: "وَفِي تَقَدُّمِهَا بِيَسِيرٍ خِلَافٌ" }, /* p. 242 */
                { id: "tah-01-04-34", titre: "Sunna : laver les mains d'abord, trois fois", titre_ar: "وَسُنَنُهُ غَسْلُ يَدَيْهِ أَوَّلًا ثَلَاثًا تَعَبُّدًا …" }, /* p. 242 */
                { id: "tah-01-04-35", titre: "Rinçage de la bouche et aspiration de l'eau", titre_ar: "وَمَضْمَضَةٌ وَاسْتِنْشَاقٌ" }, /* p. 245 */
                { id: "tah-01-04-36", titre: "Insister quand on ne jeûne pas", titre_ar: "وَبَالَغَ مُفْطِرٌ" }, /* p. 246 */
                { id: "tah-01-04-37", titre: "Six poignées, ou une seule", titre_ar: "وَفِعْلُهُمَا بِسِتٍّ أَفْضَلُ وَجَازَا أَوْ أَحَدُهُمَا …" }, /* p. 246 */
                { id: "tah-01-04-38", titre: "Rejeter l'eau du nez", titre_ar: "وَاسْتِنْثَارٌ" }, /* p. 247 */
                { id: "tah-01-04-39", titre: "Essuyer les deux faces de chaque oreille", titre_ar: "وَمَسْحُ وَجْهَيْ كُلِّ أُذُنٍ" }, /* p. 248 */
                { id: "tah-01-04-40", titre: "Reprendre de l'eau pour les oreilles", titre_ar: "وَتَجْدِيدُ مَائِهِمَا" }, /* p. 248 */
                { id: "tah-01-04-41", titre: "Revenir en essuyant la tête", titre_ar: "وَرَدُّ مَسْحِ رَأْسِهِ" }, /* p. 249 */
                { id: "tah-01-04-42", titre: "L'ordre des piliers", titre_ar: "وَتَرْتِيبُ فَرَائِضِهِ" }, /* p. 249 */
                { id: "tah-01-04-43", titre: "Membre fait hors ordre : seul ou avec la suite", titre_ar: "فَيُعَادُ الْمُنَكَّسُ وَحْدَهُ إنْ بَعُدَ بِجَفَافٍ …" }, /* p. 250 */
                { id: "tah-01-04-44", titre: "Pilier ou sunna omis : que faire", titre_ar: "وَمَنْ تَرَكَ فَرْضًا أَتَى بِهِ وَبِالصَّلَاةِ …" }, /* p. 252 */
                { id: "tah-01-04-45", titre: "Convenances : un lieu pur", titre_ar: "وَفَضَائِلُهُ مَوْضِعٌ طَاهِرٌ" }, /* p. 255 */
                { id: "tah-01-04-46", titre: "Peu d'eau, sans limite", titre_ar: "وَقِلَّةُ مَاءٍ بِلَا حَدٍّ كَالْغُسْلِ" }, /* p. 256 */
                { id: "tah-01-04-47", titre: "Commencer par la droite ; récipient ouvert", titre_ar: "وَتَيَمُّنُ أَعْضَاءٍ وَإِنَاءٍ إنْ فُتِحَ" }, /* p. 258 */
                { id: "tah-01-04-48", titre: "Commencer par l'avant de la tête", titre_ar: "وَبَدَأَ بِمُقَدَّمِ رَأْسِهِ" }, /* p. 259 */
                { id: "tah-01-04-49", titre: "Deuxième et troisième lavage", titre_ar: "وَشَفْعُ غَسْلِهِ وَتَثْلِيثُهُ" }, /* p. 259 */
                { id: "tah-01-04-50", titre: "Les pieds aussi ? La quatrième fois déconseillée ou interdite ? (khilâf)", titre_ar: "وَهَلْ الرِّجْلَانِ كَذَلِكَ أَوْ الْمَطْلُوبُ الْإِنْقَاءُ؟ …" }, /* p. 261 */
                { id: "tah-01-04-51", titre: "Ordre des sunna, entre elles ou avec les piliers", titre_ar: "وَتَرْتِيبُ سُنَنِهِ أَوْ مَعَ فَرَائِضِهِ" }, /* p. 263 */
                { id: "tah-01-04-52", titre: "Le siwâk, même au doigt", titre_ar: "وَسِوَاكٌ وَإِنْ بِأُصْبُعٍ" }, /* p. 263 */
                { id: "tah-01-04-53", titre: "La basmala", titre_ar: "وَتَسْمِيَةٌ" }, /* p. 266 */
                { id: "tah-01-04-54", titre: "Entrer et sortir (maison, mosquée)", titre_ar: "وَدُخُولٌ وَضِدُّهُ لِمَنْزِلٍ وَمَسْجِدٍ" }, /* p. 266 */
                { id: "tah-01-04-55", titre: "S'habiller", titre_ar: "وَلُبْسٌ" }, /* p. 266 */
                { id: "tah-01-04-56", titre: "Doute sur une troisième fois : deux avis", titre_ar: "وَإِنْ شَكَّ فِي ثَالِثَةٍ فَفِي كَرَاهَتِهَا …" } /* p. 266 */
              ]
            },
            /* tah-01-05 — t. 1, p. 267–289 (Shamela 569, pages 266–288) — 37 segments du matn */
            {
              id: "tah-01-05",
              titre: "Les convenances des besoins naturels",
              titre_ar: "آدَابُ قَضَاءِ الحَاجَةِ",
              masail: [
                { id: "tah-01-05-01", titre: "Recommandé : s'asseoir ; cas du sol meuble impur", titre_ar: "نُدِبَ لِقَاضِي الْحَاجَةِ جُلُوسٌ وَمُنِعَ بِرَخْوٍ …" }, /* p. 267 ; Mawāhib imprime « وَمِنْهُ », corrigé (v1.8) */
                { id: "tah-01-05-02", titre: "S'appuyer sur le pied gauche, se nettoyer de la main gauche", titre_ar: "وَاعْتِمَادٌ عَلَى رِجْلٍ وَاسْتِنْجَاءٌ بِيَدٍ يُسْرَيَيْنِ" }, /* p. 269 */
                { id: "tah-01-05-03", titre: "Mouiller la main avant, la laver après", titre_ar: "وَبَلُّهَا قَبْلَ لُقِيِّ الْأَذَى وَغَسْلُهَا بِكَتُرَابٍ …" }, /* p. 269 */
                { id: "tah-01-05-04", titre: "Se couvrir jusqu'à l'endroit", titre_ar: "وَسَتْرٌ إلَى مَحِلِّهِ" }, /* p. 269 */
                { id: "tah-01-05-05", titre: "Préparer de quoi se nettoyer", titre_ar: "وَإِعْدَادُ مُزِيلِهِ" }, /* p. 269 */
                { id: "tah-01-05-06", titre: "Un nombre impair", titre_ar: "وَوِتْرُهُ" }, /* p. 270 */
                { id: "tah-01-05-07", titre: "Commencer par l'avant", titre_ar: "وَتَقْدِيمُ قُبُلِهِ" }, /* p. 270 */
                { id: "tah-01-05-08", titre: "Écarter les cuisses", titre_ar: "وَتَفْرِيجُ فَخِذَيْهِ" }, /* p. 270 */
                { id: "tah-01-05-09", titre: "Se détendre", titre_ar: "وَاسْتِرْخَاؤُهُ" }, /* p. 270 */
                { id: "tah-01-05-10", titre: "Se couvrir la tête", titre_ar: "وَتَغْطِيَةُ رَأْسِهِ" }, /* p. 270 */
                { id: "tah-01-05-11", titre: "Ne pas se retourner", titre_ar: "وَعَدَمُ الْتِفَاتِهِ" }, /* p. 270 */
                { id: "tah-01-05-12", titre: "Invocation avant et après", titre_ar: "وَذِكْرُ وِرْدٍ بَعْدَهُ وَقَبْلَهُ" }, /* p. 270 */
                { id: "tah-01-05-13", titre: "Invocation oubliée à l'entrée", titre_ar: "فَإِنْ فَاتَ فَفِيهِ إنْ لَمْ يَعُدْ" }, /* p. 271 */
                { id: "tah-01-05-14", titre: "Silence, sauf nécessité", titre_ar: "وَسُكُوتٌ إلَّا لِمُهِمٍّ" }, /* p. 275 */
                { id: "tah-01-05-15", titre: "En plein air : se cacher et s'éloigner", titre_ar: "وَبِالْفَضَاءِ تَسَتُّرٌ وَبُعْدٌ" }, /* p. 275 */
                { id: "tah-01-05-16", titre: "Éviter les trous", titre_ar: "وَاتِّقَاءُ جُحْرٍ" }, /* p. 275 */
                { id: "tah-01-05-17", titre: "… le vent", titre_ar: "وَرِيحٌ" }, /* p. 276 */
                { id: "tah-01-05-18", titre: "… les points d'eau", titre_ar: "وَمَوْرِدٌ" }, /* p. 276 */
                { id: "tah-01-05-19", titre: "… le chemin", titre_ar: "وَطَرِيقٌ" }, /* p. 276 */
                { id: "tah-01-05-20", titre: "… l'ombre", titre_ar: "وَظِلٌّ" }, /* p. 277 */
                { id: "tah-01-05-21", titre: "… le sol dur", titre_ar: "وَصُلْبٌ" }, /* p. 277 */
                { id: "tah-01-05-22", titre: "Dans les latrines : écarter le nom de Dieu", titre_ar: "وَبِكَنِيفٍ نَحَّى ذِكْرَ اللَّهِ" }, /* p. 277 */
                { id: "tah-01-05-23", titre: "Pied gauche en entrant, pied droit en sortant", titre_ar: "وَيُقَدِّمُ يُسْرَاهُ دُخُولًا وَيُمْنَاهُ خُرُوجًا" }, /* p. 278 */
                { id: "tah-01-05-24", titre: "À la maison : rapport et miction face à la qibla ou dos à elle", titre_ar: "وَجَازَ بِمَنْزِلٍ وَطْءٌ وَبَوْلٌ مُسْتَقْبِلَ الْقِبْلَةِ …" }, /* p. 279 */
                { id: "tah-01-05-25", titre: "… pas en plein air", titre_ar: "لَا فِي الْفَضَاءِ" }, /* p. 281 */
                { id: "tah-01-05-26", titre: "Avec un écran : deux avis", titre_ar: "وَبِسَتْرٍ قَوْلَانِ تَحْتَمِلُهُمَا" }, /* p. 281 */
                { id: "tah-01-05-27", titre: "Le soleil et la lune", titre_ar: "لَا الْقَمَرَيْنِ" }, /* p. 281 */
                { id: "tah-01-05-28", titre: "Jérusalem (Bayt al-Maqdis)", titre_ar: "وَبَيْتُ الْمَقْدِسِ" }, /* p. 281 */
                { id: "tah-01-05-29", titre: "Obligatoire : l'istibrâ' en vidant les deux voies", titre_ar: "وَوَجَبَ اسْتِبْرَاءٌ بِاسْتِفْرَاغِ أَخْبَثَيْهِ" }, /* p. 281 */
                { id: "tah-01-05-30", titre: "Presser et tirer doucement le membre", titre_ar: "مَعَ سَلْتِ ذَكَرٍ وَنَتْرٍ خَفَا" }, /* p. 282 */
                { id: "tah-01-05-31", titre: "Recommandé : pierre et eau, puis eau", titre_ar: "وَنُدِبَ جَمْعُ مَاءٍ وَحَجَرٍ ثُمَّ مَاءٍ" }, /* p. 283 */
                { id: "tah-01-05-32", titre: "L'eau obligatoire : sperme, règles, lochies", titre_ar: "وَتَعَيَّنَ فِي مَنِيٍّ وَحَيْضٍ وَنِفَاسٍ" }, /* p. 284 */
                { id: "tah-01-05-33", titre: "… urine de la femme", titre_ar: "وَبَوْلِ امْرَأَةٍ" }, /* p. 284 */
                { id: "tah-01-05-34", titre: "Madhy : laver tout le membre ; intention et prière (deux avis)", titre_ar: "وَمَذْيٌ بِغَسْلِ ذَكَرِهِ كُلِّهِ فَفِي النِّيَّةِ …" }, /* p. 285 */
                { id: "tah-01-05-35", titre: "Pas d'istinjâ' pour un vent", titre_ar: "وَلَا يَسْتَنْجِي مِنْ رِيحٍ" }, /* p. 286 */
                { id: "tah-01-05-36", titre: "Ce qu'on peut utiliser pour s'essuyer, et ce qu'on ne peut pas", titre_ar: "وَجَازَ بِيَابِسٍ طَاهِرٍ مُنَقٍّ غَيْرِ مُؤْذٍ …" }, /* p. 286 */
                { id: "tah-01-05-37", titre: "S'il nettoie : cela suffit, même moins de trois", titre_ar: "فَإِنْ أَنْقَتْ أَجْزَأَتْ كَالْيَدِ دُونَ الثَّلَاثِ" } /* p. 289 */
              ]
            },
            /* tah-01-06 — t. 1, p. 290–304 (Shamela 569, pages 289–303) — 22 segments du matn */
            {
              id: "tah-01-06",
              titre: "Ce qui annule les ablutions",
              titre_ar: "نَوَاقِضُ الوُضُوءِ",
              masail: [
                { id: "tah-01-06-01", titre: "Annulation par le hadath : ce qui sort normalement", titre_ar: "فَصْلٌ نَقْضُ الْوُضُوءِ بِحَدَثٍ وَهُوَ الْخَارِجُ …" }, /* p. 290 */
                { id: "tah-01-06-02", titre: "Pas les calculs ni les vers", titre_ar: "لَا حَصًى وَدُودٌ وَلَوْ بِبِلَّةٍ" }, /* p. 291 */
                { id: "tah-01-06-03", titre: "Incontinence (salas) selon sa fréquence", titre_ar: "وَبِسَلَسٍ فَارَقَ أَكْثَرَ كَسَلَسِ مَذْيٍ قَدَرَ …" }, /* p. 291 */
                { id: "tah-01-06-04", titre: "Fréquence : au temps de prière ou en général (taraddoud)", titre_ar: "وَفِي اعْتِبَارِ الْمُلَازَمَةِ فِي وَقْتِ الصَّلَاةِ …" }, /* p. 292 */
                { id: "tah-01-06-05", titre: "Par les deux voies, ou une ouverture sous l'estomac", titre_ar: "مِنْ مَخْرَجَيْهِ أَوْ ثُقْبَةٍ تَحْتَ الْمَعِدَةِ …" }, /* p. 293 */
                { id: "tah-01-06-06", titre: "Par sa cause : perte de raison, sommeil profond", titre_ar: "وَبِسَبَبِهِ وَهُوَ زَوَالُ عَقْلٍ وَإِنْ بِنَوْمٍ …" }, /* p. 294 */
                { id: "tah-01-06-07", titre: "Toucher avec un plaisir habituel", titre_ar: "وَلَمْسٌ يَلْتَذُّ صَاحِبُهُ بِهِ عَادَةً" }, /* p. 296 */
                { id: "tah-01-06-08", titre: "… même un ongle ou un cheveu", titre_ar: "وَلَوْ كَظُفُرٍ أَوْ شَعْرٍ" }, /* p. 297 */
                { id: "tah-01-06-09", titre: "… ou à travers un écran", titre_ar: "أَوْ حَائِلٍ وَأُوِّلَ بِالْخَفِيفِ وَبِالْإِطْلَاقِ" }, /* p. 297 */
                { id: "tah-01-06-10", titre: "Comme l'érection", titre_ar: "كَإِنْعَاظٍ" }, /* p. 298 */
                { id: "tah-01-06-11", titre: "Plaisir avec une proche interdite (al-asahh)", titre_ar: "وَلَذَّةٍ بِمَحْرَمٍ عَلَى الْأَصَحِّ" }, /* p. 298 */
                { id: "tah-01-06-12", titre: "Toucher son membre", titre_ar: "وَمُطْلَقُ مَسِّ ذَكَرِهِ الْمُتَّصِلِ وَلَوْ خُنْثَى …" }, /* p. 299 */
                { id: "tah-01-06-13", titre: "Par l'apostasie", titre_ar: "وَبِرِدَّةٍ" }, /* p. 300 */
                { id: "tah-01-06-14", titre: "Doute sur un hadath après une pureté certaine", titre_ar: "وَبِشَكٍّ فِي حَدَثٍ بَعْدَ طُهْرٍ عُلِمَ" }, /* p. 300 */
                { id: "tah-01-06-15", titre: "… sauf le douteur obsessionnel", titre_ar: "إلَّا الْمُسْتَنْكِحُ" }, /* p. 301 */
                { id: "tah-01-06-16", titre: "Ce qui n'annule pas (anus, vomissure, chameau, rire…)", titre_ar: "لَا بِمَسِّ دُبُرٍ أَوْ أُنْثَيَيْنِ أَوْ …" }, /* p. 301 */
                { id: "tah-01-06-17", titre: "Recommandé : se rincer la bouche après viande et lait", titre_ar: "وَنُدِبَ غَسْلُ فَمٍ مِنْ لَحْمٍ وَلَبَنٍ" }, /* p. 302 */
                { id: "tah-01-06-18", titre: "Renouveler les ablutions si on a prié avec", titre_ar: "وَتَجْدِيدُ وُضُوءٍ إنْ صَلَّى بِهِ" }, /* p. 302 */
                { id: "tah-01-06-19", titre: "Doute dans la prière, puis pureté avérée", titre_ar: "وَلَوْ شَكَّ فِي صَلَاتِهِ ثُمَّ بَانَ …" }, /* p. 303 */
                { id: "tah-01-06-20", titre: "Toucher le Coran, même avec un bâton", titre_ar: "وَمَسُّ مُصْحَفٍ وَإِنْ بِقَضِيبٍ" }, /* p. 303 */
                { id: "tah-01-06-21", titre: "Le livre de tafsîr", titre_ar: "وَتَفْسِيرٍ" }, /* p. 304 */
                { id: "tah-01-06-22", titre: "Partie du Coran pour l'élève, même pubère", titre_ar: "وَجُزْءٍ لِمُتَعَلِّمٍ وَإِنْ بَلَغَ" } /* p. 304 */
              ]
            },
            /* tah-01-07 — t. 1, p. 305–318 (Shamela 569, pages 304–317) — 34 segments du matn */
            {
              id: "tah-01-07",
              titre: "Le ghousl (purification majeure)",
              titre_ar: "الطَّهَارَةُ الكُبْرَى وَهِيَ الغُسْلُ",
              masail: [
                { id: "tah-01-07-01", titre: "Ghousl obligatoire pour le sperme", titre_ar: "فَصْلٌ يَجِبُ غُسْلُ ظَاهِرِ الْجَسَدِ بِمَنِيٍّ" }, /* p. 305 */
                { id: "tah-01-07-02", titre: "… même pendant le sommeil", titre_ar: "وَإِنْ بِنَوْمٍ" }, /* p. 305 */
                { id: "tah-01-07-03", titre: "… ou après la fin du plaisir, sans rapport", titre_ar: "أَوْ بَعْدَ ذَهَابِ لَذَّةٍ بِلَا جِمَاعٍ …" }, /* p. 306 */
                { id: "tah-01-07-04", titre: "Pas sans plaisir, ou avec un plaisir inhabituel", titre_ar: "لَا بِلَا لَذَّةٍ أَوْ غَيْرِ مُعْتَادَةٍ" }, /* p. 307 */
                { id: "tah-01-07-05", titre: "Pas de reprise de la prière", titre_ar: "وَلَا يُعِيدُ الصَّلَاةَ" }, /* p. 307 */
                { id: "tah-01-07-06", titre: "Disparition du gland d'un pubère", titre_ar: "وَمَغِيبِ حَشَفَةِ بَالِغٍ" }, /* p. 307 */
                { id: "tah-01-07-07", titre: "… dans un sexe", titre_ar: "فِي فَرْجِهِ" }, /* p. 308 */
                { id: "tah-01-07-08", titre: "… même d'un animal ou d'un mort", titre_ar: "وَإِنْ مِنْ بَهِيمَةٍ وَمَيِّتٍ" }, /* p. 309 */
                { id: "tah-01-07-09", titre: "Recommandé pour l'adolescent, comme la fillette", titre_ar: "وَنُدِبَ لِمُرَاهِقٍ كَصَغِيرَةٍ وَطِئَهَا بَالِغٌ" }, /* p. 309 */
                { id: "tah-01-07-10", titre: "Cas jugé bon (istihsân)", titre_ar: "وَاسْتُحْسِنَ وَبِغَيْرِهِ" }, /* p. 309 */
                { id: "tah-01-07-11", titre: "Pas pour l'istihâda ; recommandé à son arrêt", titre_ar: "لَا بِاسْتِحَاضَةٍ وَنُدِبَ لِانْقِطَاعِهِ" }, /* p. 310 */
                { id: "tah-01-07-12", titre: "Ghousl du non-musulman après la shahâda", titre_ar: "وَيَجِبُ غُسْلُ كَافِرٍ بَعْدَ الشَّهَادَةِ بِمَا …" }, /* p. 311 */
                { id: "tah-01-07-13", titre: "Pas pour l'islam lui-même", titre_ar: "لَا الْإِسْلَامُ إلَّا لِعَجْزٍ" }, /* p. 312 */
                { id: "tah-01-07-14", titre: "Doute : madhy ou sperme ?", titre_ar: "وَإِنْ شَكَّ أَمَذْيٌ أَمْ مَنِيٌّ اغْتَسَلَ …" }, /* p. 312 */
                { id: "tah-01-07-15", titre: "Obligatoire : l'intention", titre_ar: "وَوَاجِبُهُ نِيَّةٌ" }, /* p. 312 */
                { id: "tah-01-07-16", titre: "La continuité", titre_ar: "وَمُوَالَاةٌ كَالْوُضُوءِ" }, /* p. 312 */
                { id: "tah-01-07-17", titre: "Faire pénétrer l'eau dans les cheveux", titre_ar: "وَتَخْلِيلُ شَعْرٍ" }, /* p. 312 */
                { id: "tah-01-07-18", titre: "Le frottement", titre_ar: "وَدَلْكٌ" }, /* p. 313 */
                { id: "tah-01-07-19", titre: "… ou s'en faire aider", titre_ar: "أَوْ اسْتِنَابَةٌ" }, /* p. 313 */
                { id: "tah-01-07-20", titre: "Impossible : l'obligation tombe", titre_ar: "وَإِنْ تَعَذَّرَ سَقَطَ" }, /* p. 313 */
                { id: "tah-01-07-21", titre: "Sunna : laver les mains d'abord, et le conduit des oreilles", titre_ar: "وَسُنَنُهُ غَسْلُ يَدَيْهِ أَوَّلًا وَصِمَاخُ أُذُنَيْهِ" }, /* p. 313 */
                { id: "tah-01-07-22", titre: "Rinçage de la bouche et aspiration de l'eau", titre_ar: "وَمَضْمَضَةٌ وَاسْتِنْشَاقٌ" }, /* p. 313 */
                { id: "tah-01-07-23", titre: "Recommandé : commencer par ôter la souillure", titre_ar: "وَنُدِبَ بَدْءٌ بِإِزَالَةِ الْأَذَى" }, /* p. 314 */
                { id: "tah-01-07-24", titre: "Puis les membres des ablutions, une fois", titre_ar: "ثُمَّ بِأَعْضَاءِ وُضُوئِهِ كَامِلَةً مَرَّةً" }, /* p. 314 */
                { id: "tah-01-07-25", titre: "Le haut et la droite d'abord", titre_ar: "وَأَعْلَاهُ وَمَيَامِنُهُ" }, /* p. 315 */
                { id: "tah-01-07-26", titre: "Trois fois la tête", titre_ar: "وَتَثْلِيثُ رَأْسِهِ" }, /* p. 315 */
                { id: "tah-01-07-27", titre: "Peu d'eau, sans limite", titre_ar: "وَقِلَّةُ الْمَاءِ بِلَا حَدٍّ" }, /* p. 316 */
                { id: "tah-01-07-28", titre: "Ses ablutions avant de dormir", titre_ar: "وَوُضُوءُهُ لِنَوْمٍ" }, /* p. 316 */
                { id: "tah-01-07-29", titre: "Pas de tayammoum", titre_ar: "لَا تَيَمُّمٌ" }, /* p. 316 */
                { id: "tah-01-07-30", titre: "Annulées seulement par un rapport", titre_ar: "وَلَمْ يَبْطُلْ إلَّا بِجِمَاعٍ" }, /* p. 316 */
                { id: "tah-01-07-31", titre: "Ce qu'interdit la janâba", titre_ar: "وَتَمْنَعُ الْجَنَابَةُ مَوَانِعَ الْأَصْغَرِ وَالْقِرَاءَةَ إلَّا …" }, /* p. 317 */
                { id: "tah-01-07-32", titre: "Entrer à la mosquée", titre_ar: "وَدُخُولُ مَسْجِدٍ" }, /* p. 317 */
                { id: "tah-01-07-33", titre: "Les signes du sperme", titre_ar: "وَلِلْمَنِيِّ تَدَفُّقٌ وَرَائِحَةُ طَلْعٍ أَوْ عَجِينٍ" }, /* p. 317 */
                { id: "tah-01-07-34", titre: "Le ghousl dispense de laver les membres des ablutions", titre_ar: "وَغَسْلُ الْوُضُوءِ عَنْ غُسْلِ مَحِلِّهِ" } /* p. 318 */
              ]
            },
            /* tah-01-08 — t. 1, p. 318–325 (Shamela 569, pages 317–324) — 27 segments du matn */
            {
              id: "tah-01-08",
              titre: "Le mash sur les khouff",
              titre_ar: "المَسْحُ عَلَى الخُفَّيْنِ",
              masail: [
                { id: "tah-01-08-01", titre: "Dispense : homme et femme", titre_ar: "فَصْلُ رُخِّصَ لِرَجُلٍ وَامْرَأَةٍ" }, /* p. 318 */
                { id: "tah-01-08-02", titre: "… même en istihâda", titre_ar: "وَإِنْ مُسْتَحَاضَةً" }, /* p. 318 */
                { id: "tah-01-08-03", titre: "Chaussettes de cuir", titre_ar: "مَسْحُ جَوْرَبٍ جِلْدٍ ظَاهِرِهِ وَبَاطِنِهِ" }, /* p. 318 */
                { id: "tah-01-08-04", titre: "Le khouff, même sur un autre khouff", titre_ar: "وَخُفٍّ وَلَوْ عَلَى خُفٍّ" }, /* p. 318 */
                { id: "tah-01-08-05", titre: "… sauf l'éperon", titre_ar: "إلَّا الْمِهْمَازُ" }, /* p. 319 */
                { id: "tah-01-08-06", titre: "Pur", titre_ar: "طَاهِرٍ" }, /* p. 320 */
                { id: "tah-01-08-07", titre: "Couvrant la partie obligatoire", titre_ar: "وَسَتَرَ مَحَلَّ الْفَرْضِ" }, /* p. 320 */
                { id: "tah-01-08-08", titre: "Mis en état de pureté par l'eau", titre_ar: "بِطَهَارَةِ مَاءٍ" }, /* p. 320 */
                { id: "tah-01-08-09", titre: "Sans désobéissance (port ou voyage)", titre_ar: "وَعِصْيَانٍ بِلُبْسِهِ، أَوْ سَفَرِهِ" }, /* p. 320 */
                { id: "tah-01-08-10", titre: "Pas s'il couvre moins, même collé", titre_ar: "لَا أَقَلَّ إنْ الْتَصَقَ" }, /* p. 320 */
                { id: "tah-01-08-11", titre: "… ou mis, puis purification complétée", titre_ar: "أَوْ لَبِسَهُمَا ثُمَّ كَمَّلَ" }, /* p. 321 */
                { id: "tah-01-08-12", titre: "… jusqu'à retirer ce qui fut mis avant", titre_ar: "حَتَّى يَخْلَعَ الْمَلْبُوسَ قَبْلَ الْكَمَالِ" }, /* p. 321 */
                { id: "tah-01-08-13", titre: "Pas pour le seul mash, ni pour dormir", titre_ar: "وَلَا لَابِسٍ لِمُجَرَّدِ الْمَسْحِ أَوْ لِيَنَامَ …" }, /* p. 321 */
                { id: "tah-01-08-14", titre: "Le laver : déconseillé", titre_ar: "وَكُرِهَ غَسْلُهُ" }, /* p. 322 */
                { id: "tah-01-08-15", titre: "Suivre ses plis", titre_ar: "وَتَتَبَّعَ غُضُونَهُ" }, /* p. 322 */
                { id: "tah-01-08-16", titre: "Annulé par un ghousl obligatoire", titre_ar: "وَبَطَلَ بِغُسْلٍ وَجَبَ" }, /* p. 322 */
                { id: "tah-01-08-17", titre: "… par une grande déchirure", titre_ar: "وَبِخَرْقِهِ كَثِيرًا" }, /* p. 322 */
                { id: "tah-01-08-18", titre: "… en retirant la plus grande partie du pied", titre_ar: "وَبِنَزْعِ أَكْثَرِ رِجْلٍ لِسَاقِ خُفٍّ" }, /* p. 323 */
                { id: "tah-01-08-19", titre: "Pas le talon", titre_ar: "لَا الْعَقِبِ" }, /* p. 323 */
                { id: "tah-01-08-20", titre: "… ou l'un des deux", titre_ar: "أَوْ أَحَدِهِمَا" }, /* p. 323 */
                { id: "tah-01-08-21", titre: "Comme pour la continuité", titre_ar: "كَالْمُوَالَاةِ" }, /* p. 323 */
                { id: "tah-01-08-22", titre: "Un pied retiré, l'autre coincé, temps court : plusieurs avis", titre_ar: "وَإِنْ نَزَعَ رِجْلًا وَعَسُرَتْ الْأُخْرَى وَضَاقَ …" }, /* p. 324 */
                { id: "tah-01-08-23", titre: "Recommandé : le retirer chaque vendredi", titre_ar: "وَنُدِبَ نَزْعُهُ كُلَّ جُمُعَةٍ" }, /* p. 324 */
                { id: "tah-01-08-24", titre: "Manière : main droite sur le bout des orteils", titre_ar: "وَوَضَعَ يُمْنَاهُ عَلَى طَرَفِ أَصَابِعِهِ وَيُسْرَاهُ …" }, /* p. 324 */
                { id: "tah-01-08-25", titre: "La main gauche : de même ou dessus ? (ta'wîlân)", titre_ar: "وَهَلْ الْيُسْرَى كَذَلِكَ أَوْ الْيُسْرَى فَوْقَهَا؟ …" }, /* p. 324 */
                { id: "tah-01-08-26", titre: "Essuyer le dessus et le dessous", titre_ar: "وَمَسَحَ أَعْلَاهُ وَأَسْفَلَهُ" }, /* p. 324 */
                { id: "tah-01-08-27", titre: "Pas le dessous : refaire dans le temps", titre_ar: "لَا أَسْفَلَهُ فَفِي الْوَقْتِ" } /* p. 325 */
              ]
            },
            /* tah-01-09 — t. 1, p. 325–360 (Shamela 569, pages 324–359) — 53 segments du matn */
            {
              id: "tah-01-09",
              titre: "Le tayammoum",
              titre_ar: "التَّيَمُّمُ",
              masail: [
                { id: "tah-01-09-01", titre: "Le tayammoum : qui le fait", titre_ar: "فَصْلٌ يَتَيَمَّمُ" }, /* p. 325 */
                { id: "tah-01-09-02", titre: "Le malade", titre_ar: "ذُو مَرَضٍ" }, /* p. 326 */
                { id: "tah-01-09-03", titre: "Le voyageur (voyage licite)", titre_ar: "وَسَفَرٍ أُبِيحَ" }, /* p. 326 */
                { id: "tah-01-09-04", titre: "Pour l'obligatoire et le surérogatoire", titre_ar: "لِفَرْضٍ وَنَفْلٍ" }, /* p. 328 */
                { id: "tah-01-09-05", titre: "Résident en bonne santé : prière funéraire", titre_ar: "وَحَاضِرٍ صَحَّ لِجِنَازَةٍ إنْ تَعَيَّنَتْ" }, /* p. 328 */
                { id: "tah-01-09-06", titre: "… et prière obligatoire", titre_ar: "وَفَرْضٍ" }, /* p. 329 */
                { id: "tah-01-09-07", titre: "… sauf le vendredi", titre_ar: "غَيْرِ جُمُعَةٍ" }, /* p. 329 */
                { id: "tah-01-09-08", titre: "… sans reprise", titre_ar: "وَلَا يُعِيدُ" }, /* p. 329 */
                { id: "tah-01-09-09", titre: "Pas pour une sunna", titre_ar: "لَا سُنَّةٍ" }, /* p. 329 */
                { id: "tah-01-09-10", titre: "Absence d'eau suffisante", titre_ar: "إنْ عَدِمُوا مَاءً كَافِيًا" }, /* p. 331 */
                { id: "tah-01-09-11", titre: "Crainte de maladie, d'aggravation ou de retard de guérison", titre_ar: "أَوْ خَافُوا بِاسْتِعْمَالِهِ مَرَضًا، أَوْ زِيَادَتَهُ …" }, /* p. 333 */
                { id: "tah-01-09-12", titre: "Soif d'un être protégé", titre_ar: "أَوْ عَطَشَ مُحْتَرَمٍ مَعَهُ" }, /* p. 334 */
                { id: "tah-01-09-13", titre: "Perte de biens en cherchant l'eau", titre_ar: "أَوْ بِطَلَبِهِ تَلَفَ مَالٍ" }, /* p. 335 */
                { id: "tah-01-09-14", titre: "Sortie du temps", titre_ar: "أَوْ خُرُوجَ وَقْتٍ" }, /* p. 336 */
                { id: "tah-01-09-15", titre: "Absence d'aide ou d'instrument", titre_ar: "كَعَدَمِ مُنَاوِلٍ أَوْ آلَةٍ" }, /* p. 337 */
                { id: "tah-01-09-16", titre: "Crainte de manquer la prière : khilâf", titre_ar: "وَهَلْ إنْ خَافَ فَوَاتَهُ بِاسْتِعْمَالِهِ؟ خِلَافٌ" }, /* p. 337 */
                { id: "tah-01-09-17", titre: "Permis avec un tayammoum : funérailles, sunna, Coran, tawâf…", titre_ar: "وَجَازَ جِنَازَةٌ وَسُنَّةٌ وَمَسُّ مُصْحَفٍ وَقِرَاءَةٌ …" }, /* p. 338 */
                { id: "tah-01-09-18", titre: "… même volontairement ; la seconde est nulle", titre_ar: "وَلَوْ قَصْدًا وَبَطَلَ الثَّانِي" }, /* p. 342 */
                { id: "tah-01-09-19", titre: "Pas avec un tayammoum fait pour un acte recommandé", titre_ar: "لَا بِتَيَمُّمٍ لِمُسْتَحَبٍّ" }, /* p. 342 */
                { id: "tah-01-09-20", titre: "Continuité obligatoire", titre_ar: "وَلَزِمَ مُوَالَاتُهُ" }, /* p. 342 */
                { id: "tah-01-09-21", titre: "Accepter un don d'eau", titre_ar: "وَقَبُولُ هِبَةِ مَاءٍ" }, /* p. 343 */
                { id: "tah-01-09-22", titre: "… ou un prêt", titre_ar: "أَوْ قَرْضِهِ" }, /* p. 343 */
                { id: "tah-01-09-23", titre: "Chercher l'eau pour chaque prière", titre_ar: "وَطَلَبَهُ لِكُلِّ صَلَاةٍ، وَلَوْ تَوَهُّمَهُ لَا …" }, /* p. 343 */
                { id: "tah-01-09-24", titre: "Intention : s'autoriser la prière ; intention de la janâba", titre_ar: "وَنِيَّةُ اسْتِبَاحَةِ الصَّلَاةِ وَنِيَّةُ أَكْبَرَ إنْ …" }, /* p. 345 */
                { id: "tah-01-09-25", titre: "Il ne lève pas le hadath", titre_ar: "وَلَا يَرْفَعُ الْحَدَثَ" }, /* p. 348 */
                { id: "tah-01-09-26", titre: "Couvrir le visage et les mains jusqu'aux poignets", titre_ar: "وَتَعْمِيمُ وَجْهِهِ وَكَفَّيْهِ لِكُوعَيْهِ" }, /* p. 348 */
                { id: "tah-01-09-27", titre: "Retirer sa bague", titre_ar: "وَنَزَعَ خَاتَمَهُ" }, /* p. 349 */
                { id: "tah-01-09-28", titre: "Sol pur, la terre de préférence", titre_ar: "وَصَعِيدٌ طَهُرَ كَتُرَابٍ وَهُوَ الْأَفْضَلُ، وَلَوْ …" }, /* p. 350 */
                { id: "tah-01-09-29", titre: "La neige", titre_ar: "وَثَلْجٍ" }, /* p. 351 */
                { id: "tah-01-09-30", titre: "La boue", titre_ar: "وَخَضْخَاضٍ" }, /* p. 352 */
                { id: "tah-01-09-31", titre: "Mudawwana : sécher les mains (deux lectures)", titre_ar: "وَفِيهَا جَفَّفَ يَدَيْهِ رُوِيَ بِجِيمٍ وَخَاءٍ" }, /* p. 352 */
                { id: "tah-01-09-32", titre: "Le plâtre non cuit", titre_ar: "وَجِصٍّ لَمْ يُطْبَخْ" }, /* p. 352 */
                { id: "tah-01-09-33", titre: "Le minéral (sauf or, argent et pierres précieuses)", titre_ar: "وَبِمَعْدِنٍ غَيْرِ نَقْدٍ وَجَوْهَرٍ" }, /* p. 352 */
                { id: "tah-01-09-34", titre: "Matière transportée (alun, sel)", titre_ar: "وَمَنْقُولٌ كَشَبٍّ وَمِلْحٍ" }, /* p. 353 */
                { id: "tah-01-09-35", titre: "Malade : mur de briques crues ou pierre", titre_ar: "وَلِمَرِيضٍ حَائِطُ لَبِنٍ، أَوْ حَجَرٌ" }, /* p. 354 */
                { id: "tah-01-09-36", titre: "Pas la natte ni le bois", titre_ar: "لَا بِحَصِيرٍ وَخَشَبٍ" }, /* p. 354 */
                { id: "tah-01-09-37", titre: "Le faire dans le temps", titre_ar: "وَفَعَلَهُ فِي الْوَقْتِ" }, /* p. 355 */
                { id: "tah-01-09-38", titre: "Qui désespère de l'eau : début du temps choisi", titre_ar: "فَالْآيِسُ أَوَّلُ الْمُخْتَارِ" }, /* p. 355 */
                { id: "tah-01-09-39", titre: "Qui hésite : le milieu", titre_ar: "وَالْمُتَرَدِّدُ فِي لُحُوقِهِ، أَوْ وُجُودِهِ وَسَطَهُ" }, /* p. 355 */
                { id: "tah-01-09-40", titre: "Qui espère : la fin", titre_ar: "وَالرَّاجِي آخِرَهُ" }, /* p. 356 */
                { id: "tah-01-09-41", titre: "Mudawwana : retarder le maghrib jusqu'au crépuscule", titre_ar: "وَفِيهَا تَأْخِيرُ الْمَغْرِبِ لِلشَّفَقِ" }, /* p. 356 */
                { id: "tah-01-09-42", titre: "Sunna : ordre, jusqu'aux coudes, seconde frappe", titre_ar: "وَسُنَّ تَرْتِيبُهُ وَإِلَى الْمِرْفَقَيْنِ وَتَجْدِيدُ ضَرْبَةٍ …" }, /* p. 356 */
                { id: "tah-01-09-43", titre: "Recommandé : la basmala", titre_ar: "وَنُدِبَ تَسْمِيَةٌ" }, /* p. 356 */
                { id: "tah-01-09-44", titre: "Ce qui l'annule ; eau trouvée avant la prière", titre_ar: "وَبَطَلَ بِمُبْطِلِ الْوُضُوءِ وَبِوُجُودِ الْمَاءِ قَبْلَ …" }, /* p. 356 */
                { id: "tah-01-09-45", titre: "Le négligent refait dans le temps", titre_ar: "وَيُعِيدُ الْمُقَصِّرُ فِي الْوَقْتِ" }, /* p. 357 */
                { id: "tah-01-09-46", titre: "Prière valide même sans reprise", titre_ar: "وَصَحَّتْ إنْ لَمْ يُعِدْ" }, /* p. 358 */
                { id: "tah-01-09-47", titre: "Comme qui trouve l'eau près de lui", titre_ar: "كَوَاجِدٍ بِقُرْبِهِ" }, /* p. 358 */
                { id: "tah-01-09-48", titre: "… ou dans ses bagages", titre_ar: "أَوْ رَحْلِهِ" }, /* p. 358 */
                { id: "tah-01-09-49", titre: "Qui hésitait à atteindre l'eau", titre_ar: "وَمُتَرَدِّدٍ فِي لُحُوقِهِ" }, /* p. 358 */
                { id: "tah-01-09-50", titre: "Oubli rappelé après la prière", titre_ar: "وَنَاسٍ ذَكَرَ بَعْدَهَا" }, /* p. 358 */
                { id: "tah-01-09-51", titre: "Sans eau : baiser et rapport interdits, sauf longue durée", titre_ar: "وَمُنِعَ مَعَ عَدَمِ مَاءٍ تَقْبِيلُ مُتَوَضِّئٍ …" }, /* p. 359 */
                { id: "tah-01-09-52", titre: "Le mort qui a de l'eau passe avant le junub", titre_ar: "وَقُدِّمَ ذُو مَاءٍ مَاتَ وَمَعَهُ جُنُبٌ" }, /* p. 359 */
                { id: "tah-01-09-53", titre: "Sans eau ni sol : la prière et son rattrapage tombent", titre_ar: "وَتَسْقُطُ صَلَاةٌ وَقَضَاؤُهَا بِعَدَمِ مَاءِ وَصَعِيدٍ" } /* p. 360 */
              ]
            },
            /* tah-01-10 — t. 1, p. 361–364 (Shamela 569, pages 360–363) — 10 segments du matn */
            {
              id: "tah-01-10",
              titre: "Le mash sur l'attelle (jabîra)",
              titre_ar: "مَسْحُ الجَبِيرَةِ",
              masail: [
                { id: "tah-01-10-01", titre: "Plaie qu'on craint de laver : essuyer l'attelle (jabîra)", titre_ar: "فَصْلُ إنْ خِيفَ غَسْلُ جُرْحٍ كَالتَّيَمُّمِ …" }, /* p. 361 */
                { id: "tah-01-10-02", titre: "Puis le bandage", titre_ar: "ثُمَّ عِصَابَتَهُ" }, /* p. 362 */
                { id: "tah-01-10-03", titre: "Comme pour une saignée", titre_ar: "كَفَصْدٍ" }, /* p. 362 */
                { id: "tah-01-10-04", titre: "… même pour le ghousl", titre_ar: "وَإِنْ بِغُسْلٍ" }, /* p. 362 */
                { id: "tah-01-10-05", titre: "… si la plus grande partie du corps est saine", titre_ar: "إنْ صَحَّ جُلُّ جَسَدِهِ" }, /* p. 362 */
                { id: "tah-01-10-06", titre: "S'il lave : cela suffit", titre_ar: "وَإِنْ غَسَلَ أَجْزَأَهُ" }, /* p. 362 */
                { id: "tah-01-10-07", titre: "Impossible d'essuyer, sur les membres du tayammoum", titre_ar: "وَإِنْ تَعَذَّرَ مَسُّهَا وَهِيَ بِأَعْضَاءِ تَيَمُّمِهِ …" }, /* p. 363 */
                { id: "tah-01-10-08", titre: "Sinon : troisième et quatrième avis", titre_ar: "وَإِلَّا فَثَالِثُهَا يَتَيَمَّمُ إنْ كَثُرَ وَرَابِعُهَا …" }, /* p. 363 */
                { id: "tah-01-10-09", titre: "Attelle retirée ou tombée, même en prière", titre_ar: "وَإِنْ نَزَعَهَا لِدَوَاءٍ، أَوْ سَقَطَتْ وَإِنْ …" }, /* p. 363 */
                { id: "tah-01-10-10", titre: "Guérison : laver ; essuyer la tête", titre_ar: "وَإِنْ صَحَّ غَسَلَ وَمَسَحَ مُتَوَضِّئٌ رَأْسَهُ" } /* p. 364 */
              ]
            },
            /* tah-01-11 — t. 1, p. 364–376 (Shamela 569, pages 363–375) — 30 segments du matn */
            {
              id: "tah-01-11",
              titre: "Les règles et les lochies",
              titre_ar: "الحَيْضُ وَالنِّفَاسُ",
              masail: [
                { id: "tah-01-11-01", titre: "Définition des règles (hayd)", titre_ar: "فَصْلٌ الْحَيْضُ دَمٌ كَصُفْرَةٍ أَوْ كُدْرَةٍ" }, /* p. 364 */
                { id: "tah-01-11-02", titre: "Sang sorti de lui-même", titre_ar: "خَرَجَ بِنَفْسِهِ" }, /* p. 365 */
                { id: "tah-01-11-03", titre: "Du sexe d'une femme en âge de concevoir", titre_ar: "مِنْ قُبُلِ مَنْ تَحْمِلُ عَادَةً" }, /* p. 367 */
                { id: "tah-01-11-04", titre: "… même d'un seul jet", titre_ar: "وَإِنْ دَفْعَةً" }, /* p. 367 */
                { id: "tah-01-11-05", titre: "Durée maximale : la débutante", titre_ar: "وَأَكْثَرُهُ لِمُبْتَدِئَةٍ نِصْفُ شَهْرٍ" }, /* p. 367 */
                { id: "tah-01-11-06", titre: "La femme habituée : trois jours de plus", titre_ar: "وَلِمُعْتَادَةٍ ثَلَاثَةٌ اسْتِظْهَارًا عَلَى أَكْثَرِ عَادَتِهَا" }, /* p. 368 */
                { id: "tah-01-11-07", titre: "Puis elle est pure", titre_ar: "ثُمَّ هِيَ طَاهِرٌ" }, /* p. 368 */
                { id: "tah-01-11-08", titre: "La femme enceinte après trois mois", titre_ar: "وَلِحَامِلٍ بَعْدَ ثَلَاثَةِ أَشْهُرٍ النِّصْفُ وَنَحْوُهُ" }, /* p. 369 */
                { id: "tah-01-11-09", titre: "Six mois ou plus", titre_ar: "وَفِي سِتَّةٍ فَأَكْثَرَ عِشْرُونَ يَوْمًا وَنَحْوُهَا" }, /* p. 369 */
                { id: "tah-01-11-10", titre: "Sang intermittent : additionner les jours de sang", titre_ar: "وَإِنْ تَقَطَّعَ طُهْرٌ لَفَّقَتْ أَيَّامَ الدَّمِ …" }, /* p. 369 */
                { id: "tah-01-11-11", titre: "Sang distinct après une pureté", titre_ar: "وَالْمُمَيَّزُ بَعْدَ طُهْرٍ ثُمَّ حَيْضٍ" }, /* p. 370 */
                { id: "tah-01-11-12", titre: "Pas de jours en plus (al-asahh)", titre_ar: "وَلَا تَسْتَظْهِرُ عَلَى الْأَصَحِّ" }, /* p. 370 */
                { id: "tah-01-11-13", titre: "Signes de pureté : sécheresse ou qassa", titre_ar: "وَالطُّهْرُ بِجُفُوفٍ، أَوْ قَصَّةٍ" }, /* p. 370 */
                { id: "tah-01-11-14", titre: "La qassa, plus probante pour l'habituée", titre_ar: "وَهِيَ أَبْلَغُ لِمُعْتَادَتِهَا" }, /* p. 371 */
                { id: "tah-01-11-15", titre: "La débutante : hésitation", titre_ar: "وَفِي الْمُبْتَدِئَةِ تَرَدُّدٌ" }, /* p. 371 */
                { id: "tah-01-11-16", titre: "Vérifier sa pureté : au coucher et à l'aube", titre_ar: "وَلَيْسَ عَلَيْهَا نَظَرُ طُهْرِهَا قَبْلَ الْفَجْرِ …" }, /* p. 372 */
                { id: "tah-01-11-17", titre: "Début de la ʿidda", titre_ar: "وَبَدْءِ عِدَّةٍ" }, /* p. 373 */
                { id: "tah-01-11-18", titre: "Rapport dans le sexe", titre_ar: "وَوَطْءِ فَرْجٍ" }, /* p. 373 */
                { id: "tah-01-11-19", titre: "… ou sous le pagne", titre_ar: "أَوْ تَحْتَ إزَارٍ" }, /* p. 373 */
                { id: "tah-01-11-20", titre: "… même après la pureté et le tayammoum", titre_ar: "وَلَوْ بَعْدَ نَقَاءٍ وَتَيَمُّمٍ" }, /* p. 374 */
                { id: "tah-01-11-21", titre: "Lever son hadath, même la janâba", titre_ar: "وَرَفْعِ حَدَثِهَا، وَلَوْ جَنَابَةً" }, /* p. 374 */
                { id: "tah-01-11-22", titre: "Entrer à la mosquée", titre_ar: "وَدُخُولِ مَسْجِدٍ" }, /* p. 374 */
                { id: "tah-01-11-23", titre: "Ni iʿtikâf ni tawâf", titre_ar: "فَلَا تَعْتَكِفُ، وَلَا تَطُوفُ" }, /* p. 374 */
                { id: "tah-01-11-24", titre: "Toucher le Coran", titre_ar: "وَمَسُّ مُصْحَفٍ" }, /* p. 374 */
                { id: "tah-01-11-25", titre: "Pas la lecture", titre_ar: "لَا قِرَاءَةٍ" }, /* p. 375 */
                { id: "tah-01-11-26", titre: "Les lochies (nifâs)", titre_ar: "وَالنِّفَاسُ دَمٌ خَرَجَ لِلْوِلَادَةِ" }, /* p. 375 */
                { id: "tah-01-11-27", titre: "… même entre des jumeaux", titre_ar: "وَلَوْ بَيْنَ تَوْأَمَيْنِ" }, /* p. 375 */
                { id: "tah-01-11-28", titre: "Durée maximale ; pas de minimum", titre_ar: "وَأَكْثَرُهُ سِتُّونَ يَوْمًا، وَلَا حَدَّ لِأَقَلِّهِ" }, /* p. 376 */
                { id: "tah-01-11-29", titre: "Interdits comme pour les règles", titre_ar: "وَمَنْعُهُ كَالْحَيْضِ" }, /* p. 376 */
                { id: "tah-01-11-30", titre: "Liquide précédant l'accouchement (hâdî)", titre_ar: "وَوَجَبَ وُضُوءٌ بِهَادٍ وَالْأَظْهَرُ نَفْيُهُ" } /* p. 376 */
              ]
            }
          ]
        }
      ]
    }
  ]
});
