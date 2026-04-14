// Citation mapping: each key identifies a reference.
// Each array contains exact text substrings from the report.
// When any substring is found and clicked, that reference will be highlighted.
//
// Example:
//   "argyle-2023": ["Argyle et al (2023)", "Argyle and colleagues (2023)"],
//
const citationMap = {
  // Abraham, L., Arnal, C., & Marie, A. (2025). Prompt selection matters: enhancing text annot
  "abraham-2025": [],

  // Acemoglu, D. (2024). The simple macroeconomics of AI. Massachusetts Institute of Technolog
  "acemoglu-2024": ["Acemoglu (2024)"],

  // Adhikari, D. M., Hartland, A., Weber, I., & Cannanure, V. K. (2025, July). Exploring LLMs
  "adhikari-2025": ["Adhikari et al. (2025)"],

  // Alansari, A., & Luqman, H. (2025). Large language models hallucination: A comprehensive su
  "alansari-2025": ["Alansari 2025"],

  // Allamong, M. B., Jeong, J., & Kellstedt, P. M. (2025). Spelling correction with large lang
  "allamong-2025": ["Allamong and colleagues (2025)"],

  // Amaya, A., Biemer, P. P., & Kinyon, D. (2020). Total error in a big data world: Adapting t
  "amaya-2020": [],

  // Angelopoulos, A. N., Bates, S., Fannjiang, C., Jordan, M. I., & Zrnic, T. (2023). Predicti
  "angelopoulos-2023": ["(Angelopoulos et al., 2023)"],

  // Anthis, J. R., Liu, R., Richardson, S. M., Kozlowski, A. C., Koch, B., Brynjolfsson, E., E
  "anthis-2025": ["Anthis et al. 2025"],

  // Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023).
  "argyle-2023": ["Argyle et al (2023)", "Argyle and colleagues (2023)"],

  // Argyle, L. P., Busby, E. C., Gubler, J. R., Hepner, B., Lyman, A., & Wingate, D. (2025). A
  "argyle-2025": ["(Argyle et al. 2025)"],

  // Barari, S., Angbazo, J., Wang, N., Christian, L. M., Dean, E., Slowinski, Z., & Sepulvado,
  "barari-2025": ["Barari et al. (2025)", "(Barari et al., 2025)"],

  // Barends, A. J., & de Vries, R. E. (2025). Developing and improving personality inventories
  "barends-2025": ["Vries (2024)"],

  // Barrie, C., Palmer, A., & Spirling, A. (2024). Replication for language models: problems,
  "barrie-2024": ["(Barrie et al, 2024)", "(Barrie et al 2024)"],

  // Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2024). Generative
  "bastani-2024": ["(Bastani et al., 2024)"],

  // Bean, A. M., Kearns, R. O., Romanou, A., Hafner, F. S., Mayne, H., Batzner, J., ... & Mahd
  "bean-2025": ["Bean et al 2025"],

  // Behrend, T. S., & Landers, R. N. (2025). Participant Interactions with Artificial Intellig
  "behrend-2025": ["Behrend and Landers (2025)", "Landers (2025)"],

  // Beltoft, S. L., Schneider-Kamp, P., & Askegaard, S. T. (2025). Interview Bot: Can Agentic
  "beltoft-2025": ["Beltoft, Schneider‑Kamp, and Askegaard (2025)"],

  // Bender, E. M., et al. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be
  "bender-2021": [],

  // Bick, A., Blandin, A., & Deming, D. J. (2024, October 20). The rapid adoption of generativ
  "bick-2024": ["Bick et al. (2024)", "(Bick et al., 2024)"],

  // Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024). Synthetic Repla
  "bisbee-2024": ["Bisbee and colleagues (2023)"],

  // Booth, R. (2025, August 27). Teen killed himself after "months of encouragement from ChatG
  "booth-2025": ["(Booth, 2025)"],

  // Briggs, J., & Kodnani, D. (2023, April 5). Generative AI could raise global GDP by 7%. Gol
  "briggs-2023": [],

  // Broska, D., Howes, M., & van Loon, A. (2025). The Mixed Subjects Design: Treating Large La
  "broska-2025": ["Broska et al 2025"],

  // Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., ... & Amodei, D.
  "brown-2020": ["(Brown et al 2020)"],

  // Bryda, G., & Sadowski, D. (2024). From words to themes: AI‑powered qualitative data coding
  "bryda-2024": ["(Bryda et al., 2025)"],

  // Brynjolfsson, E., Li, D., & Raymond, L. (2025). Generative AI at work. The Quarterly Journ
  "brynjolfsson-2025": ["Brynjolfsson et al. (2025)"],

  // Buskirk, T. D., Eck, A., & Timbrook, J. (2025b). The Task Is to Improve the Ask: An Experi
  "buskirk-2025b": [
    "Buskirk, Eck, and Timbrook (2025b)",
    "Buskirk et al. (2025b)",
  ],

  // Buskirk, T. D., Eck, A., Timbrook, J., & Tatum, H. (2025c). Is Your Chatbot Smarter Than a
  "buskirk-2025c": [
    "Buskirk, Eck, Timbrook, and Tatum (2025c)",
    "Buskirk et al. (2025c)",
  ],

  // Buskirk, T. D., Keusch, F., von der Heyde, L., & Eck, A. (2025a). More Parameters Than Pop
  "buskirk-2025a": [
    "Buskirk et al. (2025a)",
    "(Buskirk et al. 2025a)",
    "(Buskirk et al., 2025a)",
  ],

  // Buskirk, T. D., Lerner, J., & Benson, A. (2025d). What Happens When We Prompt the Model, N
  "buskirk-2025d": ["Buskirk and colleagues (2025d)"],

  // Butler, J., Vorvoreanu, M., Janßen, R., Sellen, A., Immorlica, N., Hecht, B., & Teevan, J.
  "butler-2024": ["Butler et al., 2024"],

  // Calvino, F., Reijerink, J., & Samek, L. (2025). The effects of generative AI on productivi
  "calvino-2025": ["(Calvino et al., 2025)"],

  // Capraro, V., Lentsch, A., Acemoglu, D., Akgun, S., Akhmedova, A., Bilancini, E., ... & Via
  "capraro-2024": ["Capraro et al. (2024)", "(Capraro et al., 2024)"],

  // Chakravorti, T., Wang, X., Venkit, P. N., Koneru, S., Munger, K., & Rajtmajer, S. (2025).
  "chakravorti-2025": [],

  // Challapally, A., Pease, C., Raskar, R., & Chari, P. (2025). The GenAI divide: State of AI
  "challapally-2025": ["(Challapally et al., 2025)"],

  // Chatterji, A., Cunningham, T., Deming, D. J., Hitzig, Z., Ong, C., Shan, C. Y., & Wadman,
  "chatterji-2025": ["Chatterji et al. (2025)"],

  // Chen, Y., Chen, D., Chikodikar, S. M., Yin, C. H., & Vinayak, R. K. (2026). Is Conformal F
  "chen-2026": ["Chen et. al. 2026"],

  // Chui, M., Hazan, E., Roberts, R., Singla, A., Smaje, K., Sukharevsky, A., Yee, L., & Zemme
  "chui-2023": [],

  // Conrad, F. G., & Schober, M. F. (2000). Clarifying question meaning in a household telepho
  "conrad-2000": ["Conrad & Schober 2000"],

  // Côté, P.-O., Nikanjam, A., Ahmed, N., Humeniuk, D., & Khomh, F. (2024). Data cleaning and
  "côté-2024": ["(Côté et al., 2024)"],

  // Cottier, B., Snodin, B., Owen, D., & Adamczewski, T. (2025, March 12). LLM inference price
  "cottier-2025": ["(Cottier et al., 2025)"],

  // Crawford, K. (2021). The atlas of AI: Power, politics, and the planetary costs of artifici
  "crawford-2021": ["Crawford, 2021"],

  // Cuevas, A., Scurrell, J. V., Brown, E. M., Entenmann, J., & Daepp, M. I. (2025). Collectin
  "cuevas-2025": ["Cuevas et al. (2025)"],

  // Dass, R. K., Petersen, N., Omori, M., Lave, T. R., & Visser, U. (2023). Detecting racial i
  "dass-2023": ["Dass et al., 2023"],

  // DeVerna, M. R., Yan, H. Y., Yang, K.-C., & Menczer, F. (2024). Fact‑checking information f
  "de-2024": ["Deverna et al., 2024)"],

  // Doshi, A. R., & Hauser, O. P. (2024). Generative AI enhances individual creativity but red
  "doshi-2024": ["(Doshi & Hauser, 2024)"],

  // Eftekhari, H. (2024). Transcribing in the digital age: Qualitative research practice utili
  "eftekhari-2024": ["Eftekhari, 2024", "(Eftekhari, 2024)"],

  // Ehrett, C., Hegde, S., Andre, K., Liu, D., & Wilson, T. (2024). Leveraging Open-Source Lar
  "ehrett-2024": ["Ehrett and colleagues (2024)"],

  // Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2023). GPTs are GPTs: An early look at
  "eloundou-2023": ["Eloundou et al. (2023)"],

  // Federal Trade Commission. (2022). Combatting online harms through innovation. https://www.
  "federal-2022": ["Federal Trade Commission, 2022"],

  // Gilardi, F., Alizadeh, M., & Kubli, M. (2023). ChatGPT outperforms crowd workers for text-
  "gilardi-2023": ["Gilardi et al. (2023)", "(Gilardi et al., 2023)"],

  // Gray, M. L., & Suri, S. (2019). Ghost work: How to stop Silicon Valley from building a new
  "gray-2019": ["(Gray & Suri, 2019)", "Gray & Suri, 2019"],

  // Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., & Tourangeau, R
  "groves-2009": ["Groves et al 2009"],

  // Gu, J., Jiang, X., Shi, Z., Tan, H., Zhai, X., Xu, C., ... & Guo, J. (2024). A survey on L
  "gu-2024": ["Gu et al 2024"],

  // Guerreiro, N. M., Voita, E., & Martins, A. F. (2023, May). Looking for a needle in a hayst
  "guerreiro-2023": ["Guerreiro et al 2023"],

  // Gweon, H., & Schonlau, M. (2024). Automated classification for open‑ended questions with B
  "gweon-2024": ["(Gweon & Schonlau 2024)"],

  // Hakim, J. B., Painter, J. L., Ramcharran, D., Kara, V., Powell, G., Sobczak, P., ... & Bea
  "hakim-2025": ["Hakim et al 2025"],

  // Hanna, M. G., Pantanowitz, L., Jackson, B., Palmer, O., Visweswaran, S., Pantanowitz, J.,
  "hanna-2025": ["(Hanna et al., 2025)"],

  // Hao, K. (2025). Empire of AI: Dreams and nightmares in Sam Altman's OpenAI. Penguin Group.
  "hao-2025": ["Hao, 2025"],

  // Hartung, T., & Kleinstreuer, N. (2025). Challenges and opportunities for validation of AI‑
  "hartung-2025": ["(Hartung & Kleinstreuer, 2025)"],

  // Hastie, T., Tibshirani, R., & Friedman, J. (2009). The Elements of Statistical Learning. S
  "hastie-2009": ["Hastie et al 2009"],

  // He, Z., Liang, T., Jiao, W., Zhang, Z., Yang, Y., Wang, R., Tu, Z., Shi, S., & Wang, X. (2
  "he-2024": ["He et al 2024"],

  // Henshall, W. (2024, June 3). The billion-dollar price tag of building AI. TIME. https://ti
  "henshall-2024": ["(Henshall, 2024)"],

  // Hernandez, I., & Nie, W. (2023). The AI-IP: Minimizing the guesswork of personality scale
  "hernandez-2023-a": ["Hernandez and Nie (2023)"],

  // Hernandez, I., & Nie, W. (2023). The AI‑IP: Minimizing the guesswork of personality scale
  "hernandez-2023-b": [],

  // Hoffmann, M., Boysel, S., Nagle, F., Peng, S., & Xu, K. (2024). Generative AI and distribu
  "hoffmann-2024": ["Hoffmann et al., 2024"],

  // Hullman, J., Broska, D., Sun, H., & Shaw, A. (2025). This human study did not involve huma
  "hullman-2025": ["(Hullman et al 2025)"],

  // Humlum, A., & Vestergaard, E. (2024). The unequal adoption of ChatGPT exacerbates existing
  "humlum-2024": ["(Humlum & Vestergaard, 2024)"],

  // Ilyas, I. F., & Rekatsinas, T. (2022). Machine learning and data cleaning: Which serves th
  "ilyas-2022": ["(Ilyas & Rekatsinas 2022)"],

  // Kennedy, C., Mercer, A., Keeter, S., Hatley, N., McGeeney, K., & Gimenez, A. (2016). Evalu
  "kennedy-2016": ["Kennedy et al., 2016"],

  // Kim, J. H., Kim, J., Park, J., Kim, C., Jhang, J., & King, B. (2025). When ChatGPT gives i
  "kim-2025": ["Kim et al., 2025"],

  // Kokotajlo, D., Alexander, S., Larsen, T., Lifland, E., & Dean, R. (2025). AI 2027. AI Futu
  "kokotajlo-2025": ["(Kokotajlo et al., 2025)"],

  // Korinek, A., & Suh, D. (2024). Scenarios for the Transition to AGI (No. w32255). National
  "korinek-2024": ["(Korinek and Suh, 2024)"],

  // Krsteski, S., Russo, G., Chang, S., West, R., & Gligorić, K. (2025). Valid survey simulati
  "krsteski-2025": ["Krsteski et al 2025"],

  // Kshetri, N. (2024). Linguistic challenges in generative artificial intelligence. Journal o
  "kshetri-2024": ["(Kshetri, 2024)"],

  // Kuha, J., Butt, S., Katsikatsou, M., & Skinner, C. J. (2018). The effect of probing "don't
  "kuha-2018": ["Kuha et al 2018"],

  // Kumar, H., Rothschild, D. M., Goldstein, D. G., & Hofman, J. M. (2023). Math education wit
  "kumar-2023": ["(Kumar et al., 2023)"],

  // Kuo, S.-M., Tai, S.-K., Lin, H.-Y., & Chen, R.-C. (2025). Automated clinical trial data an
  "kuo-2025": ["(Kuo et al., 2025)"],

  // Kwet, M. (2019). Digital colonialism: US empire and the new imperialism in the Global Sout
  "kwet-2019": ["(Kwet, 2019)"],

  // Laurito, W., Davis, B., Grietzer, P., Gavenčiak, T., Böhm, A., & Kulveit, J. (2025). AI–AI
  "laurito-2025": ["(Laurito et al 2025)"],

  // Lee, S., Tian, J., & Morales, S. (2025). Evaluation of AI-Assisted Survey Questionnaire Tr
  "lee-2025": ["Lee and colleagues (2025)"],

  // Lyman, A., et al. (2025). Balancing large language model alignment and algorithmic fidelit
  "lyman-2025": ["(Lyman et al 2025)"],

  // Magesh, V., Surani, F., Dahl, M., Suzgun, M., Manning, C. D., & Ho, D. E. (2024). Hallucin
  "magesh-2024": ["(Magesh et al., 2024)"],

  // Marguerit, D. (2025). Augmenting or automating labor? The effect of AI development on new
  "marguerit-2025": ["(Marguerit 2025)"],

  // Mellon, J., Bailey, J., Scott, R., Breckwoldt, J., Miori, M., & Schmedeman, P. (2024). Do
  "mellon-2024": ["Mellon and colleagues (2024)", "Mellon et al., 2024"],

  // Metheney, E. A., & Yehle, L. (2024). Exploring the Potential Role of Generative AI in the
  "metheney-2024": ["Metheney and Yehle (2024)", "Yehle (2024)"],

  // Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., ... & Gebru
  "mitchell-2019": [],

  // Mojadeddi, Z. M., & Rosenberg, J. (2024). Automated transcription of interviews in qualita
  "mojadeddi-2024": ["Mojadeddi & Rosenberg, 2024"],

  // Moon, S., Abdulhai, M., Kang, M., Suh, J., Soedarmadji, W., Behar, E. K., & Chan, D. M. (2
  "moon-2024": ["Moon and colleagues (2024)"],

  // Naidu, G., Zuva, T., & Sibanda, E. M. (2023). A review of evaluation metrics in machine le
  "naidu-2023": ["Naidu et al 2023"],

  // National Commission for the Protection of Human Subjects of Biomedical and Behavioral Rese
  "national-1979": ["Belmont Report (1979)"],

  // Naveed, H., Khan, A. U., Qiu, S., Saqib, M., Anwar, S., Usman, M., ... & Mian, A. (2025).
  "naveed-2025": ["Naveed et al. (2024)"],

  // Niederhoffer, K., Kellerman, G. R., Lee, A., Liebscher, A., Rapuano, K., & Hancock, J. T.
  "niederhoffer-2025": ["(Niederhoffer et al., 2025)"],

  // Norori, N., Hu, Q., Aellen, F. M., Faraci, F. D., & Tzovara, A. (2021). Addressing bias in
  "norori-2021": ["(Norori et al., 2021)"],

  // Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias i
  "obermeyer-2019": ["Obermeyer et al., 2019"],

  // Oladokun, B., Emmanuel, V., Osagie, O. Q., & Alabi, A. (2025). ChatGPT and library users:
  "oladokun-2025": ["Oladokun et al, 2025"],

  // Padgett, Z., et al. (2024). Evaluating the Quality of Questionnaires Created with SurveyMo
  "padgett-2024": ["Padgett and colleagues (2024)"],

  // Palmer, A., Smith, N. A., & Spirling, A. (2024). Using proprietary language models in acad
  "palmer-2024": [],

  // Park, J. S., Zou, C. Q., Shaw, A., Hill, B. M., Cai, C., Morris, M. R., Willer, R., Liang,
  "park-2024": ["Park and colleagues (2024)"],

  // Pew Research Center (2025). How People Around the World View AI. Link
  "pew-2025": ["(Pew, 2025)"],

  // Rabanser, S., Kapoor, S., Kirgis, P., Liu, K., Utpala, S., & Narayanan, A. (2026). Towards
  "rabanser-2026": [],

  // Rao, A., Keller, D., Kalra, N., Steed, R., Kwegyir-Aggrey, K., Klyman, K., Staheli, D., &
  "rao-2026": ["(Rao et al., 2026)"],

  // Rogers, R., & Zhang, X. (2024). The Russia–Ukraine War in Chinese Social Media: LLM Analys
  "rogers-2024": ["Rogers and Zhang (2024)"],

  // Rothschild, D. M. (2025). The Economics of Transformative AI. University of Chicago Press.
  "rothschild-2025": ["(Rothschild, 2025)"],

  // Rothschild, D. M., Brand, J., Schroeder, H., & Wang, J. (2024). Opportunities and risks of
  "rothschild-2024": ["Rothschild et al (2024)"],

  // Rothschild, D. M., Buskirk, T. D., Eckman, S., Hillygus, D. S., Kreuter, F., & Lazer, D. (
  "rothschild-2025a": ["Rothschild et al., 2025a"],

  // Rothschild, D. M., Mobius, M., Hofman, J. M., Dillon, E. W., Goldstein, D. G., Immorlica,
  "rothschild-2025b": ["Rothschild et al., 2025b"],

  // Rytting, C. M., Sorensen, T., Argyle, L., Busby, E., Fulda, N., Gubler, J., & Wingate, D.
  "rytting-2023": ["(Rytting et al., 2023)"],

  // Sakai, Y., Kamigaito, H., & Watanabe, T. (2026). HalluCitation matters: Revealing the impa
  "sakai-2026": ["Sakai et al, 2026"],

  // Salganik, M. J. (2019). Bit by bit: Social research in the digital age. Princeton Universi
  "salganik-2019": ["Salganik (2019)", "(Salganik, 2019)"],

  // Santurkar, S., Durmus, E., Ladhak, F., Lee, C., Liang, P., & Hashimoto, T. (2023, July). W
  "santurkar-2023": ["Santurkar et al., 2023"],

  // Sclar, M., Choi, Y., Tsvetkov, Y., & Suhr, A. (2024). Quantifying language models' sensiti
  "sclar-2024": ["Sclar et al, 2024"],

  // Secretary's Advisory Committee on Human Research Protections (2022). IRB Considerations on
  "secretary-2022": [
    "Secretary’s Advisory Committee on Human Research Protections, 2022",
  ],

  // Shedlock, A. (2025). Smarter Surveys, Faster: How AI is Transforming Survey Design. Greenb
  "shedlock-2025": ["Shedlock (2025)"],

  // Shi, F., Chen, X., Misra, K., Scales, N., Dohan, D., Chi, E. H., Schärli, N., & Zhou, D. (
  "shi-2023": ["Shi et al. 2023", "Shi et al., 2023"],

  // Simchon, A., Edwards, M., & Lewandowsky, S. (2024). The persuasive effects of political mi
  "simchon-2024": ["(Simchon et al., 2024)"],

  // Sivaprasad, S., Kaushik, P., Abdelnabi, S., & Fritz, M. (2025, July). A theory of response
  "sivaprasad-2025": ["(Sivaprasad et al 2023)"],

  // Soliman, H., & Gurevych, I. (2025). A survey on advances in retrieval‑augmented generation
  "soliman-2025": ["(Soliman & Gurevych, 2025)"],

  // Spitale, G., Biller-Andorno, N., & Germani, F. (2023). AI model GPT-3 (dis) informs us bet
  "spitale-2023": ["(Spitale et al., 2023)"],

  // Statistics Canada. (2017). Statistics Canada's quality assurance framework (3rd ed.). Otta
  "statistics-2017": ["Statistics Canada 2017"],

  // Suh, A., Hurley, I., Smith, N., & Siu, H. C. (2025). Fewer than 1% of explainable AI paper
  "suh-2025": [],

  // Sun, Y., Sheng, D., Zhou, Z., & Wu, Y. (2024). AI hallucination: towards a comprehensive c
  "sun-2024": ["Sun et al, 2024"],

  // Sweeney, L. (2002). k-anonymity: A model for protecting privacy. International Journal of
  "sweeney-2002": ["Sweeney, 2002"],

  // Tabassi, E., & NIST. (2023, January 26). Artificial Intelligence Risk Management Framework
  "tabassi-2023": ["Tabassi & NIST 2023"],

  // Tacheva, J., & Ramasubramanian, S. (2023). AI Empire: Unraveling the interlocking systems
  "tacheva-2023": ["Tacheva & Ramasubramanian, 2023"],

  // Tewari, T., & Hosein, P. (2024). Automating the Conducting of Surveys Using Large Language
  "tewari-2024": ["Tweari and Hosein (2024)"],

  // Tirumala, S., Jain, N., Leybzon, D. D., & Buskirk, T. D. (2025). Mic Drop or Data Flop? Ev
  "tirumala-2025": ["Tirumala and colleagues (2025)"],

  // Tomlinson, K., Jaffe, S., Wang, W., Counts, S., & Suri, S. (2025). Working with AI: Measur
  "tomlinson-2025": ["(Tomlinson et al. 2025)"],

  // Tonneau, M., Seghal, N. K., Malhotra, N., Orozco-Olvera, V., Boudet, A. M. M., Subramanian
  "tonneau-2026": ["Tonneau et al., 2026"],

  // Vishwakarma, H., Lin, H., & Vinayak, R. K. (2024, April). Taming False Positives in Out-of
  "vishwakarma-2024": ["(Vishwakarma et al., 2024)"],

  // Vishwakarma, H., Lin, H., Sala, F., & Vinayak, R. K. (2023). Promises and pitfalls of thre
  "vishwakarma-2023": ["(Vishwakarma et al., 2023)"],

  // Wagner, C., Strohmaier, M., Olteanu, A., Kıcıman, E., Contractor, N., & Eliassi-Rad, T. (2
  "wagner-2021": [],

  // von der Heyde, L., Haensch, A. C., & Wenz, A. (2025a). Vox populi, vox ai?
  "vonderheyde-2025a": ["von der Heyde and colleagues (2025a)"],

  // von der Heyde, L., Haensch, A. C., Weiß, B., & Daikeler, J. (2025b). AIn't Nothing But a Survey?
  "vonderheyde-2025b": [
    "von der Heyde and colleagues (2025b)",
    "von der Heyde et al., 2025",
    "von der Heyde, 2025",
  ],

  // Wan, A., Klyman, K., Kapoor, S., Maslej, N., Longpre, S., Xiong, B., Liang, P., & Bommasan
  "wan-2025": [],

  // Wang, W., Rothschild, D., Goel, S., & Gelman, A. (2015). Forecasting elections with non-re
  "wang-2015": ["(Wang et al, 2015)", "Wang and colleagues (2025)"],

  // Washington Post Editorial Board. (2025). AI is reshaping jobs — but here's what companies
  "washington-2025": ["Washington Post 2025"],

  // Weeber, F., Neplenbroek, V., Batzner, J., & Padó, S. (2026). One Persona, Many Cues, Diffe
  "weeber-2026": ["Weeber et al., 2026"],

  // Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E. H., Le, Q. V.,
  "wei-2022": ["(Wei et al 2022)"],

  // West, B. T., Conrad, F. G., Kreuter, F., & Mittereder, F. (2018). Can conversational inter
  "west-2018": ["West et al 2016"],

  // Wiegand, T. L. T., Jung, L. B., Gudera, J. A., Schuhmacher, L. S., Moehrle, P., Rischewski
  "wiegand-2025": ["Wiegand et al, 2025"],

  // Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., Appleton, G., Axton, M., Baak, A., ..
  "wilkinson-2016": [],

  // Wuttke, A., Aßenmacher, M., Klamm, C., Lang, M., & Kreuter, F. (2025, May). AI conversatio
  "wuttke-2025": ["Wuttke et al. (2024)"],

  // Xu, W., Mao, Y., Zhang, X., Zhang, C., Dong, X., & Gao, Y. (2025). DAgent: A relational da
  "xu-2025": ["(Xu et al., 2025)"],

  // Yun, H. S., Arjmand, M., Sherlock, P., Paasche-Orlow, M. K., Griffith, J. W., & Bickmore,
  "yun-2023": ["(Yun et al. 2024)", "Yun and colleagues (2024)"],

  // Zaretsky, J., Kim, J. M., Baskharoun, S., Zhao, Y., Austrian, J., Aphinyanaphongs, Y., ...
  "zaretsky-2024": ["Zaretsky et al, 2024"],

  // Zavolokina, L., et al. (2024). Think fast, think slow, think critical: designing an automa
  "zavolokina-2024": ["(Zavolokina et al., 2024)"],

  // Zheng, L., Chiang, W. L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., ... & Stoica, I. (202
  "zheng-2023": ["Zheng et al 2023"],

  // Zhou, E., & Lee, D. (2024). Generative artificial intelligence, human creativity, and art.
  "zhou-2024": ["(Zhou & Lee, 2024)"],

  // Zou, A., Wang, Z., Carlini, N., Nasr, M., Kolter, J. Z., & Fredrikson, M. (2023). Universa
  "zou-2023": [],
};
export default citationMap;
