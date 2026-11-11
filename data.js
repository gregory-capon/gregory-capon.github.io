// Seul fichier à modifier pour changer le contenu du site.

// ---------- TEXTES DE L’INTERFACE ----------
const T = { view: "Voir le projet", back: "Retour aux expériences", images: "Images", pts: "Réalisations", none: "Projet introuvable.", dir: "projects", home: "", proj: "../../" };

// ---------- CONTACT ----------
// linkedin : colle l’adresse de ton profil (le logo n’apparaît que lorsqu’elle est renseignée). cv : chemin du PDF.
const CONTACT = { email: "capongregory68@gmail.com", linkedin: "https://www.linkedin.com/in/grégory-capon-254853222/", cv: "assets/cv/CV-Gregory_Capon-FR.pdf" };

// ---------- EXPÉRIENCES (projets) ----------
// id     : nom du dossier de la page du projet (projects/<id>/). Sans id : simple carte, sans page.
// cover  : IMAGE DE LA CARTE sur l’accueil. C’est ici que tu choisis l’image de chaque projet (chemin dans assets/img/). Sans cover : pas d’image.
// links  : boutons de liens sous le résumé, [["Texte", "https://..."]].
// sections : blocs affichés dans l’ordre. Une section peut avoir :
//   title, h: 3 (sous-titre), callout: true (encart), text: ["paragraphe", ...],
//   points: ["texte", ["texte avec sous-points", ["sous-point", ...]]], facts: [["Libellé", "Valeur"]],
//   columns: [{ title, points }, ...] (deux encadrés côte à côte), links: [["Texte", "https://..."]], imagesFirst: true (images avant le reste),
//   dans un texte, `code` s’affiche en police de code,
//   metrics: [["valeur", "libellé", "note optionnelle"]],
//   images: [["chemin", "Légende", "Explication optionnelle", largeur en % (ex. 50), "center"]],  (largeur et "center" optionnels),
//   center: true au niveau du projet : centre toutes ses images ; cards: true : faits en cartes ; side: true : points à gauche, image à droite,
//   videos: [["assets/video/demo.mp4" ou lien YouTube / Google Drive, "Légende", "", largeur en % (ex. 55)]]
const EXP_CATS = { pro: "Professionnel", acad: "Académique", perso: "Personnel" };

const EXPERIENCES = [

  // NGX
  { id: "ngx-group", cat: "pro", title: "NGX Robotics - Stage ingénieur IA", org: "NGX Group, Mérignac", period: "03/2026 – 08/2026",
    summary: "Détection d’anomalies par vision par ordinateur sur des installations de clôture, en remplacement d’une solution existante peu fiable.",
    tags: ["Python", "Deep learning", "Détection", "Segmentation", "TensorRT", "PyTorch", "Docker", "OpenCV", "Blender", "CUDA"],
    cover: "assets/img/ngx - 2.png",
    sections: [
      { title: "Contexte",
        text: ["Reprise d’un projet existant de détection d’anomalies sur des installations de clôture. Ses résultats étaient jugés insuffisants : le modèle YOLO utilisé générait un taux élevé de faux positifs."] },
      { title: "Démarche",
        points: ["Définition de nouveaux objectifs chiffrés.",
          "Rédaction d’un état de l’art.",
          "Étude, prise en main et ajustement des hyperparamètres de plusieurs modèles de détection (YOLO-NAS, YOLOX, YOLOv7, YOLOv9) et de segmentation (DeepLabv3, U-Net, U-Net++, SAM3).",
          "Construction de la base de données : augmentation et labellisation.",
          "Développement Python de bout en bout : traitement des données, entraînement, évaluation."] },
      { title: "Solution",
        text: ["Une pipeline en deux parties : détection, puis segmentation."],
        images: [["assets/img/ngx - 1.png", "Pipeline en deux parties", "Partie 1 : détection. Partie 2 : segmentation."]] },
      { title: "Résultats",
        metrics: [["< 1 %", "faux positifs"], ["< 1 %", "faux négatifs"],
          ["~200 ms", "temps d’inférence", "contre ~70 ms pour le YOLO initial : un compromis assumé pour la fiabilité, compatible avec un usage temps réel"]],
        images: [["assets/img/ngx - 2.png", "Détection finale", "", 60, "center"]] },
      { title: "Tâches annexes",
        points: ["Contrôle qualité : vérifier la conformité des pièces des robots.",
          ["Alignement d’images RGB et thermiques :",
            ["Recherche des paramètres intrinsèques des deux caméras.",
             "Correction de la distorsion des images (undistort).",
             "Mise au même recouvrement de pixels des deux images.",
             "Carte d’énergie pour trouver les contours.",
             "Recherche du meilleur appariement, puis superposition des images."]]] }
    ] },

  // WASORIA
  {
    id: "wasoria",
    cat: "pro",
    title: "Wasoria - Stage ingénieur IA",
    org: "Wasoria, Le Creusot",
    period: "06/2025 – 08/2025",
    summary: "Développement d'une solution de vision par ordinateur pour détecter, suivre et comptabiliser des sacs en mouvement sur un flux vidéo industriel.",
    tags: ["Python", "YOLOv5", "Deep learning", "Computer Vision", "ByteTrack", "OpenCV", "XAnyLabeling"],
    cover: "assets/img/wasoria-bags.png",

    sections: [
      {
        title: "Contexte et objectif",
        text: [
          "Un client de Wasoria souhaitait exploiter un flux vidéo pour établir des statistiques sur la provenance de sacs poubelles. La couleur des sacs constituait notamment un indicateur permettant de différencier leur origine.",
          "L'objectif était de développer une solution capable de détecter les sacs dans un flux vidéo, de les suivre au cours de leur déplacement et de les comptabiliser sans doublons."
        ]
      },

      {
        title: "Développement de la solution",
        text: [
          "Le développement a été réalisé en Python, en s'appuyant sur YOLOv5 (Ultralytics) pour la détection des sacs. Ce modèle a été retenu pour son compromis entre performances, légèreté et facilité de déploiement.",
          "Une étude préalable de l'architecture YOLO a permis de comprendre le fonctionnement du modèle et d'identifier les paramètres à ajuster pour répondre aux contraintes du projet."
        ],
        points: [
          "Constitution et labellisation d'une base de données d'images avec XAnyLabeling.",
          "Augmentation des données pour améliorer la robustesse du modèle.",
          "Entraînement du modèle et ajustement des hyperparamètres.",
          "Évaluation des performances sur différents flux vidéo."
        ]
      },
      {
        title: "Détection et suivi des objets",
        text: [
          "La détection seule ne permet pas de comptabiliser correctement les sacs : un même objet apparaît sur plusieurs images successives et pourrait donc être compté plusieurs fois.",
          "Pour résoudre ce problème, une étape de tracking a été ajoutée à la pipeline de détection. La solution retenue est ByteTrack, un algorithme de suivi multi-objets développé par ByteDance et intégré à l'écosystème Ultralytics.",
          "Chaque sac détecté est associé à une identité persistante au fil des images. Cela permet de reconstruire sa trajectoire et de le comptabiliser comme un seul objet malgré ses multiples apparitions dans le flux vidéo."
        ],
        facts: [
          ["Détection", "YOLOv5 : localisation des sacs dans chaque image."],
          ["Tracking", "ByteTrack : association des détections entre les images."],
          ["Identification", "Attribution et maintien d'un identifiant pour chaque objet suivi."],
          ["Exploitation", "Comptabilisation des sacs et analyse de leur répartition."]
        ],
        images: [
          ["assets/img/wasoria-4.png", "Suivi des trajectoires entre les images du flux vidéo", "Visualisation du tracking des objets détectés.", 75, "center"]
        ]
      },

      {
        title: "Difficultés techniques",
        text: [
          "La principale difficulté résidait dans la continuité du tracking. Pour conserver l'identité d'un sac, celui-ci doit être correctement détecté sur suffisamment d'images successives."
        ],
        points: [
          ["Flux vidéo dense", [
            "Présence simultanée de nombreux sacs.",
            "Objets susceptibles de se masquer temporairement les uns les autres.",
            "Risque de confusion entre plusieurs détections proches."
          ]],
          ["Qualité variable des images", [
            "Présence de poussière et de perturbations visuelles.",
            "Occlusions provoquées par les sacs passant devant d'autres objets.",
            "Difficulté à maintenir une détection stable dans toutes les conditions."
          ]],
          ["Optimisation du tracking", [
            "Recherche d'un compromis entre la qualité de détection et la continuité des trajectoires.",
            "Limitation des pertes d'identité et des erreurs de comptabilisation."
          ]]
        ],
        images: [
          ["assets/img/wasoria-2.png", "Exemple de flux dense", "Nombreux objets présents simultanément dans la scène.", 65, "center"],
          ["assets/img/wasoria-3.png", "Exemple de flux perturbé", "Conditions visuelles difficiles pour la détection.", 65, "center"]
        ]
      },

      {
        title: "Résultats et bilan",
        text: [
          "Développement d'une pipeline complète de détection et de suivi d'objets, depuis la préparation des données jusqu'à l'exploitation des trajectoires.",
          "Ce projet m'a permis de travailler sur les différentes étapes d'un développement IA appliqué à un environnement industriel : constitution d'une base de données, entraînement, optimisation, évaluation et intégration d'un algorithme de tracking."
        ],
        callout: true,
        points: [
          "Développement Python de bout en bout.",
          "Prise en main approfondie de YOLOv5 et de ses paramètres.",
          "Intégration de ByteTrack pour le suivi multi-objets.",
          "Expérimentation et validation de la solution sur le terrain."
        ],
        text: [
          "Les données et les images complémentaires du projet étant confidentielles, seules certaines illustrations peuvent être présentées."
        ],
        videos: [["https://drive.google.com/file/d/1FKbIuLhU5n6IKQ6zMl-_JZSo0dL-jkPU/view", "", "", 55]],
      }
    ]
  },

  // AD PROD
  { id: "adprod", cat: "pro", title: "ADProd - Stage ingénieur : conception d’un robot conversationnel", org: "ADProd, Annecy", period: "04/2025 – 05/2025",
    summary: "Robot conversationnel embarqué avec une architecture logicielle multimodale.",
    tags: ["Python", "Électronique", "Protocoles de communication", "Fusion360", "Temps réel", "OpenCV"],
    cover: "assets/img/adprod-cover.png",
    sections: [
      { title: "Objectif",
        text: ["Concevoir et déployer un robot expressif capable d’interagir naturellement avec un public, de gérer des commandes vocales, de suivre la présence humaine et d’adapter ses réponses et ses comportements en conditions réelles d’usage."] },
      { title: "Architecture du code", imagesFirst: true, cards: true,
        text: ["L’orchestration est assurée par `main.py`, qui lance les threads audio, vision, moteurs, OLED et régulation de seuil. Les modules partagent l’état via `robot_state` et des timers comportementaux."],
        images: [["assets/img/adprod-1.png"]],
        facts: [["Pipeline audio et IA", "`audio_utils.py` capture la voix (PyAudio) et la transcrit (Vosk, Google), passe les commandes à `voice_command.py`, puis route les requêtes vers `AI_utils.py` (GPT, Mistral ou modèle local)."],
          ["Pipeline vision et moteurs", "`video_utils.py` détecte le visage et les yeux (dlib) et alimente les coordonnées oculaires ; `motor_controller.py` pilote les servos via PCA9685 pour les expressions et les mouvements."],
          ["Synthèse et expressivité", "La réponse de l’IA est vocalisée via Edge TTS et synchronisée avec des animations faciales (clignements, sourcils, orientation de la tête) pendant la lecture audio."],
          ["Robustesse runtime", "`pca_bus.py` intègre des mécanismes de retry et de réinitialisation I2C pour limiter l’impact des défauts transitoires sur les commandes moteur."]] },
      { title: "Technologies utilisées", callout: true,
        facts: [["Langages", "Python (principal), JSON, G-code (impression 3D)"],
          ["IA", "OpenAI API, Vosk, Mistral API, sentence-transformers"],
          ["Audio", "PyAudio, Google SpeechRecognition, Edge TTS"],
          ["Vision", "OpenCV, dlib"],
          ["Matériel", "Raspberry Pi 5, PCA9685, servos MG90S/MG995, OLED 128×64, LED RGB, caméra USB"],
          ["Modélisation 3D", "Fusion 360"],
          ["Outils", "PyCharm, Geany, Cura, ROS 2"]] },
      { title: "Simulation et démonstration logicielle",
        // Pour afficher la vidéo : retire les // et remplace le lien (YouTube, Google Drive ou assets/video/demo.mp4).
        // videos: [["https://www.youtube.com/watch?v=XXXXXXXXXXX", "Démonstration du robot"]],
        text: ["La vidéo montre la boucle complète : interaction vocale, génération de la réponse, synthèse audio et animation faciale couplée.",
          "Elle illustre aussi la robustesse de l’orchestration multi-threads sur une plateforme embarquée."],
        videos: [["https://drive.google.com/file/d/1avCImfKNrHvJmWiO7U7BOAXzFCTHnZ2X/view?usp=sharing"]] },
      { title: "Conception mécanique", side: true,
        text: ["La modélisation 3D a été réalisée principalement avec Fusion 360. Chaque pièce a été pensée pour être facilement imprimable en 3D et assemblable sans outil spécifique. Les tolérances ont été ajustées manuellement selon les comportements observés après impression.",
          "Le robot est composé de plusieurs modules distincts :"],
        points: ["Un socle intégrant le circuit électronique et l’alimentation (batterie ou secteur), qui permet de passer rapidement de l’une à l’autre.",
          "Une colonne creuse qui guide les câbles et supporte la tête tout en limitant la torsion mécanique.",
          "Une rotule renforcée qui permet la rotation de la tête. Cette pièce a fait l’objet de plusieurs itérations pour améliorer sa solidité, notamment par l’ajout d’une vis de renfort.",
          "Une tête creuse, conçue pour accueillir la caméra, les LEDs, les servomoteurs et les supports d’yeux mobiles."],
        images: [["assets/img/adprod-2.png"]] },
      { title: "Conception électronique",
        text: ["Le circuit intègre une logique d’alimentation hybride (batterie 3S et secteur), une recharge via BMS, une adaptation de tension et une distribution de puissance vers le Raspberry Pi, le contrôleur PCA9685 et les périphériques."],
        images: [["assets/img/adprod-3.png"]] },
      { title: "Comportement autonome et supervision",
        facts: [["Gestion de présence", "passage en veille après une absence prolongée, relance proactive si une présence est détectée sans interaction."],
          ["Commandes vocales", "mot-clé d’activation, changement de personnalité et de voix, lancement de démonstrations."],
          ["Mode IA hybride", "bascule GPT, Mistral ou local selon le contexte et la disponibilité du réseau."],
          ["Régulation audio", "recalcul périodique du seuil de bruit ambiant (`seuil_regulator.py`)."]] },
      { title: "Métriques clés",
        metrics: [["5", "threads principaux", "lancés depuis main.py : audio, vision, moteurs, OLED, régulation de seuil"],
          ["3", "modes IA", "GPT, Mistral et repli sémantique local"],
          ["11", "DoF", "famille MG90S/MG995, pilotés via PCA9685"],
          ["2", "modes d’alimentation", "batterie ou secteur"]] },
      { title: "Limites actuelles et niveau de validation",
        columns: [
          { title: "Validé",
            points: ["Boucle d’interaction vocale (STT, IA, TTS).", "Expressivité des servos (yeux, sourcils, tête).", "Suivi du visage et des yeux, logique de présence.", "Routage IA entre GPT, Mistral et local."] },
          { title: "En cours d’amélioration",
            points: ["Robustesse runtime sur la longue durée.", "Fiabilité hardware en intégration complète.", "Robustesse au bruit en environnement non contrôlé."] }] },
      { title: "Contributions",
        points: ["Conception de l’architecture logicielle multi-threads et de l’orchestration runtime autour de `main.py`.",
          "Implémentation et intégration du pipeline audio complet (capture, STT, commandes vocales, TTS, lecture synchronisée).",
          "Intégration vision et moteurs pour le suivi regard-présence et l’animation expressive en situation réelle.",
          "Conception électronique d’une alimentation hybride (batterie ou secteur) avec BMS et conversion de tension."] }
    ] },

  // LECLERC
  // { cat: "pro", title: "Employé logistique (CDD)", org: "Leclerc, Colmar", period: "06/2024 – 07/2024", summary: "Emploi d’été.", tags: [] },

  // AWAKE CHALLENGE
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "Véhicule autonome à l’échelle 1/10", period: "2025",
    summary: "Voiture autonome à l’échelle 1/10 pour l’Awake Challenge 2025, compétition nationale de robotique. Navigation par carte de profondeur, ultrasons de proximité et comptage de tours par détection d’une bande de couleur. Notre groupe a terminé 2e du classement.",
    center: true,
    cover: "assets/img/awake-challenge-cover.png",
    tags: ["Robotique", "Autonomie", "Fusion360", "Python", "OpenCV"],
    sections: [
      { title: "Objectif",
        text: ["Enchaîner des tours de piste de façon autonome en restant centré grâce à la vision de profondeur, éviter les obstacles rapprochés que la caméra peut mal voir, et s’arrêter proprement après un nombre de passages détectés sur la ligne de course. L’architecture sépare la décision (Raspberry Pi 5, Python) de l’exécution temps réel (Arduino Uno, PWM servo et moteurs)."] },
      { title: "Technologies et outils", callout: true,
        facts: [["Langages", "Python 3, C++ (Arduino)"],
          ["Vision", "pyrealsense2, OpenCV (HSV, masques, contours)"],
          ["Calcul", "NumPy (cartes de profondeur, agrégations par zone)"],
          ["Communication", "pyserial, port USB série 9600 bauds"],
          ["Calculateurs", "Raspberry Pi 5, Arduino Uno"],
          ["Capteurs", "Intel RealSense RGB-D, 2× HC-SR04"],
          ["Actionneurs", "2× moteurs DC avec ponts, 1× servomoteur de direction"],
          ["CAO", "Conception mécanique 1/10, profilés aluminium 15×15 mm"]] },
      { title: "Choix techniques", callout: true,
        points: ["Raspberry Pi + Arduino : le Pi absorbe le coût logiciel de la vision 3D et du suivi de parcours, tandis que l’Arduino assure un PWM stable et la lecture des ultrasons avec une latence maîtrisée.",
          "Step-up 24 V : les moteurs du châssis sont alimentés sous une tension supérieure à celle de la LiPo 3S, d’où l’élévation de tension avant les drivers.",
          "Step-down 5 V / 5,1 V : des rails distincts pour le servo et pour le Pi limitent les chutes de tension et le bruit sur la logique.",
          "RealSense : accès direct à la profondeur alignée sur la couleur, pour la même ROI que le comptage de tours par couleur.",
          "Ultrasons en secours : la correction court-circuite temporairement la décision de la caméra lorsqu’un obstacle est détecté très près d’un côté."] },
      { title: "Conception mécanique" },
      { h: 3, title: "Propulsion et châssis",
        text: ["Le véhicule est en propulsion arrière avec deux roues motrices indépendantes, chacune entraînée par un moteur dédié. La transmission passe par un train d’engrenages coniques pour transférer le couple jusqu’aux essieux arrière. Le châssis repose sur des profilés aluminium 15×15 mm, un compromis entre masse et rigidité."],
        images: [["assets/img/awake-1.png", "Propulsion et châssis"]] },
      { h: 3, title: "Fixation des roues arrière",
        text: ["Les roues arrière sont montées sur des paliers fixés au châssis. Un axe métallique traverse chaque palier et porte la roue ainsi que la transmission par engrenage, vissé sur l’axe."],
        images: [["assets/img/awake-2.png", "Fixation des roues arrière"]] },
      { h: 3, title: "Direction et gabarit",
        text: ["Une garde au sol d’environ 10 mm et des pneus polyvalents permettent de rouler sur des revêtements lisses ou texturés. La plage de vitesse visée va d’environ 5 à 20 km/h selon la consigne moteur. La direction utilise un servomoteur à couple élevé relié au moyeu de la roue avant gauche par une tige filetée et une biellette, pour un réglage simple et une maintenance rapide."],
        images: [["assets/img/awake-3.png", "Direction"]] },
      { title: "Conception électronique",
        text: ["L’alimentation principale est une batterie LiPo 3S 5200 mAh (tension nominale 11,1 V, plage utile typique d’environ 11 à 12,5 V). Deux cartes dialoguent par USB : un Raspberry Pi 5 pour la perception et la navigation, et une Arduino Uno pour l’acquisition des ultrasons et la commande des actionneurs.",
          "Les moteurs requièrent une tension plus élevée que la batterie (schéma 24 V côté boost), d’où un convertisseur step-up. Deux step-down fournissent le 5 V pour le servo et le 5,1 V pour le Pi. La caméra RGB-D est branchée sur le Raspberry Pi, et les deux HC-SR04 sur l’Arduino."],
        images: [["assets/img/awake-4.png", "Schéma électronique"]] },
      { title: "Navigation autonome",
        text: ["La navigation combine la profondeur (décision principale) et les ultrasons (sécurité de proximité). Le programme Python acquiert la carte de profondeur, extrait une ROI dans la partie basse de l’image, puis la divise en trois bandes (gauche, centre, droite). Pour chaque bande, il retient la distance minimale sur les pixels valides. Si le centre est suffisamment libre, la voiture vise tout droit ; sinon elle choisit le côté le plus dégagé, et si tout est bloqué elle privilégie la zone dont l’obstacle est le plus lointain. Les consignes de braquage envoyées à l’Arduino sont 60°, 97° et 130° selon la décision. Si un ultrason mesure un obstacle sous le seuil de 0,1 m, la commande correspondante (tourner à droite ou à gauche) remplace temporairement la sortie de la caméra.",
          "Le comptage de tours utilise l’image couleur : détection HSV d’une bande au sol, machine à états avec temporisations pour éviter les doubles comptages, arrêt des moteurs après cinq tours validés et envoi de STOP à l’Arduino."],
        images: [["assets/img/decision-awake-3.png", "Décision de direction"]] },
      { title: "Contributions",
        points: ["Participation à la conception mécanique complète (choix du matériel, respect des budgets, propulsion, direction, intégration des capteurs), dans le cadre du groupe.",
          "Intégration logicielle Python : RealSense, logique de zones et filtrage des ultrasons.",
          "Réalisation des livrables."] }
    ] },

  // OLYMPIADES FANUC
  { id: "olympiades-fanuc", cat: "perso", title: "Olympiades FANUC (Bac+5)", org: "Concours de robotique industrielle", period: "",
    summary: "Concours de robotique industrielle organisé par FANUC. Notre groupe s’est qualifié pour les phases finales.",
    tags: ["Robotique", "FANUC", "Roboguide", "Fusion360"],
    cover: "assets/img/olympiades-fanuc-cover.png",
    sections: [
      { title: "Le concours", text: ["Les olympiades se déroulent en deux parties : un avant-projet de plusieurs mois, puis une phase finale de deux jours."] },
      { h: 3, title: "Avant-projet",
        text: ["Les équipes répondent à un cahier des charges par une solution originale, efficace et efficiente, qui respecte les normes de sécurité et limite les coûts. Pour nous : intégrer des robots FANUC et développer des préhenseurs afin d’atteindre une cadence cible sur une ligne d’embouteillage, avec palettisation des caisses de bouteilles en fin de ligne."],
        points: ["Gestion du budget.", "Choix du matériel adapté aux contraintes du site.", "Développement de préhenseurs.", "Rédaction d’un compte rendu détaillé et d’une vidéo de présentation de la solution."],
        videos: [["https://drive.google.com/file/d/1vR5DZSj3LirDlXHa6Pm9j8c4B4j5VRJY/view?usp=drive_link", "Vidéo de présentation de la solution", "", 55]] },
      { h: 3, title: "Phase finale",
        text: ["Plusieurs épreuves sur deux jours, à partir d’un cahier des charges découvert au fil des épreuves. Sont évalués le respect des consignes de sécurité (mise en sécurité de la cellule robotisée, arrêt d’urgence lors des interventions dans la cellule), la communication dans le groupe et surtout la rapidité d’exécution : installer le matériel, programmer le robot et répondre à la demande."],
        points: ["Programmation de robots industriels.", "Prise en main plus poussée de Roboguide."] }
    ] },

  
  // SYSTEME DE TRI
  { id: "systeme-supervision-industrielle", cat: "perso", title: "Système de tri automatisé et supervision industrielle", org: "", period: "",
    summary: "Conception d'un système automatisé de tri de pièces piloté par Raspberry Pi. Identification des objets par vision par ordinateur et commande du processus depuis une interface web.",
    tags: ["Python", "Flask", "OpenCV", "Raspberry Pi", "Vision par ordinateur", "Automatisation", "Électronique"],
    cover: "assets/img/systeme-supervision-industrielle-cover.png",

    sections: [
      { title: "Contexte et objectif",
        text: ["Ce projet consiste à concevoir un système automatisé capable de trier des pièces selon différents critères visuels, notamment leur couleur ou leur forme.",
          "Le système repose sur un Raspberry Pi qui centralise le traitement des informations issues d'une caméra et des capteurs, puis pilote les différentes étapes du tri.",
          "L'objectif est de proposer une solution complète associant perception, traitement de l'information, commande des actionneurs et supervision."] },
      { title: "Architecture du système",
        text: ["L'architecture s'articule autour de trois fonctions principales : l'acquisition des données, le traitement par vision par ordinateur et la commande du système de tri.",
          "Le Raspberry Pi assure le traitement logiciel et la coordination des différents éléments du dispositif."],
        facts: [["Acquisition", "Caméra et capteurs pour récupérer les informations nécessaires à l'identification et au fonctionnement du système."],
          ["Traitement", "Python et OpenCV pour analyser les images et identifier les caractéristiques des pièces."],
          ["Commande", "Pilotage du mécanisme de tri en fonction des résultats de l'analyse."],
          ["Supervision", "Interface web développée avec Flask pour configurer et contrôler le fonctionnement du système."]],
        images: [["assets/img/systeme-supervision-industrielle-cover.png", "Vue d'ensemble du système", "", 75, "center"]]
      },
      { title: "Vision par ordinateur et identification",
        text: ["La caméra fournit les images nécessaires à l'identification des pièces. Le traitement est réalisé en Python avec OpenCV afin d'extraire les caractéristiques visuelles permettant de différencier les objets.",
          "Deux critères de tri sont proposés : la couleur et la forme. Le choix du mode de fonctionnement est effectué par l'utilisateur depuis l'interface de supervision."],
        points: ["Acquisition et traitement des images.",
          "Extraction des caractéristiques visuelles des pièces.",
          "Identification des objets selon le critère sélectionné.",
          "Transmission des informations nécessaires à la commande du tri."]
      },
      { title: "Interface de supervision",
        text: ["Une interface web développée avec Flask permet à l'utilisateur d'interagir avec le système sans avoir à intervenir directement sur le programme exécuté par le Raspberry Pi.",
          "L'utilisateur peut sélectionner le mode de tri souhaité et superviser le fonctionnement du dispositif."],
        points: ["Développement d'une interface web avec Flask.",
          "Sélection du critère de tri : couleur ou forme.",
          "Communication entre l'interface utilisateur et le programme de commande.",
          "Centralisation des interactions avec le système."]
      },
      { title: "Démonstration",
        text: ["La vidéo présente le fonctionnement du prototype et illustre l'intégration entre la vision par ordinateur, le traitement embarqué et la supervision web."],
        videos: [["https://drive.google.com/file/d/1mV2nnrxMpAuMydM35jiG_ANqXyOdb4yT/view?usp=drive_link", "Démonstration du système de tri", "center", 65]]
      },
      { title: "Compétences mobilisées",
        callout: true,
        points: ["Développement Python sur une plateforme embarquée Raspberry Pi.",
          "Traitement d'images et vision par ordinateur avec OpenCV.",
          "Développement d'une interface web avec Flask.",
          "Intégration de composants électroniques et de capteurs.",
          "Communication entre les différentes briques logicielles et matérielles d'un système automatisé."]
      }
    ]
  },

];

// ---------- FORMATION ----------
const FORM_CATS = { ecole: "École d’ingénieur", mobilite: "Mobilité à l’étranger", lycee: "Lycée" };

const FORMATIONS = [
  { cat: "lycee", title: "Baccalauréat", org: "", period: "2021", summary: "", points: ["Spécialités : mathématiques, physique-chimie, biologie."] },
  { cat: "ecole", title: "Diplôme d’ingénieur, Robotique et Instrumentation", org: "Polytech Dijon, Dijon et Le Creusot", period: "2021 – 2026",
    summary: "Cycle ingénieur terminé avec la mention très bien.",
    points: ["Robotique industrielle : programmation de robots FANUC et Stäubli.",
      "Électronique, instrumentation, bases de ROS2, Python, bases de C++.",
      "Vision par ordinateur (en environnement industriel et SFM)."] },
  { cat: "mobilite", title: "Master 2 Intelligence artificielle (double diplôme)", org: "UTM, Kuala Lumpur, Malaisie", period: "2025 – 2026",
    summary: "Six mois d’études à l’étranger, en anglais.", points: ["Intelligence artificielle et vision par ordinateur."] }
];

// ---------- DIPLÔMES ET CERTIFICATIONS ----------
const DIPLOMES = [
  { title: "Master 2 Intelligence artificielle", org: "UTM, Kuala Lumpur", year: "2026" },
  { title: "Diplôme d’ingénieur, Robotique et Instrumentation, mention très bien", org: "Polytech Dijon", year: "2026" },
  { title: "Permis B", org: "", year: ""}, 
  { title: "TOEIC (compréhension écrite et orale)", org: "Score", year: "900" }, 
  { title: "Certification ROS2", org: "The Construct", year: "2025" },
  // { title: "TOEIC, compréhension orale et écrite", org: "Score : 900", year: "2025" },
  { title: "Baccalauréat", org: "", year: "2021" },
];

// ---------- COMPÉTENCES ----------
const SKILLS = [
  ["Programmation", "Python (utilisé en production sur 3 stages), C, C++, Git, Linux et Windows"],
  ["IA et vision", "Computer vision, deep learning, labellisation et augmentation de données, optimisation de modèles, TensorFlow, TensorRT, OpenCV"],
  ["Robotique", "Robots industriels FANUC et Stäubli, notions de ROS2, électronique de base"],
  ["Langues", "Français (langue maternelle), anglais (professionnel)"]
];
