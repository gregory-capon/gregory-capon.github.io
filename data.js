// Seul fichier à modifier pour changer le contenu du site.

// ---------- TEXTES DE L’INTERFACE ----------
const T = { view: "Voir le projet", back: "Retour aux expériences", images: "Images", pts: "Réalisations", none: "Projet introuvable.", dir: "projects", home: "", proj: "../../" };

// ---------- EXPÉRIENCES (projets) ----------
// id : nom du dossier de la page du projet (projects/<id>/). Sans id, pas de page (simple carte).
// images : liste de ["chemin", "légende"] affichées sur la page du projet ; cover : image de la carte (optionnel).
const EXP_CATS = { pro: "Professionnel", acad: "Académique", perso: "Personnel" };

const EXPERIENCES = [

  // NGX
  { id: "ngx-group", cat: "pro", title: "Stage ingénieur IA", org: "NGX Group, Mérignac", period: "03/2026 – 08/2026",
    summary: "Détection d’anomalies par vision par ordinateur sur des installations de clôture, en remplacement d’une solution existante peu fiable.",
    tags: ["Python", "Deep learning", "Détection", "Segmentation", "TensorRT", "PyTorch", "Docker", "OpenCV", "Blender"],
    cover: "assets/img/ngx - 2.png",
    // Sections libres, affichées dans l’ordre. Chaque section peut avoir : title, text (paragraphes), points (liste),
    // metrics ([valeur, libellé, note optionnelle]) et images ([chemin, légende, explication optionnelle]).
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
        images: [["assets/img/ngx - 2.png", "Détection finale", ""]] }, 
      { title: "Tâches annexes",
        points: [["Contrôle qualité (contrôler la bonne conformité des pièces des robots)"], 
                 ["Aligner des images RGB avec des images thermiques (sous points : trouver les paramètres intrinsèques des deux caméras, undistort les images, faire en sorte que les images aient le même recouvrement de pixel, map d'énergie pour trouver les contours, toruver le meilleur match, superposer les images."]],
    ] },

  // WASORIA
  { id: "wasoria", cat: "pro", title: "Stage ingénieur IA", org: "Wasoria, Le Creusot", period: "06/2025 – 08/2025",
    summary: "Conduite d’un projet de détection basé sur l’IA.", description: [],
    points: [["Développement Python de la solution."], 
             ["Constitution de la base de données et augmentation de données."],
             ["Ajustement des hyperparamètres et optimisation du modèle."],
             ["Conduite d'opérations/d'expériences sur le terrain de A à Z."],
             ["Développement d'une interface pour trier les fichiers sensibles de l'entreprise"]],
    tags: ["Python", "Deep learning", "Hyperparamètres", "RFID"], images: [] },

  // AD Prod
  { id: "adprod", cat: "pro", title: "Stage ingénieur", org: "ADProd, Annecy", period: "04/2025 – 05/2025",
    summary: "Conception de robots conversationnels.", description: [],
    points: ["Développement Python et optimisation des performances.", "Conception de circuits électroniques.", "Présentations orales des travaux."],
    tags: ["Python", "Électronique"], images: [] },
  // Drive Leclerc
  { cat: "pro", title: "Employé logistique (CDD)", org: "Leclerc, Colmar", period: "06/2024 – 07/2024", summary: "Emploi d’été.", tags: [] },

  // Perso

  // AWAKE-CHALLENGE
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "Véhicule autonome à l’échelle 1/10", period: "",
    summary: "Projet de voiture autonome à l’échelle 1/10 pour l’Awake Challenge 2025, compétition nationale de robotique. Le véhicule enjambe une piste intérieure avec navigation par carte de profondeur (Intel RealSense), deux ultrasons latéraux pour des corrections de proximité et comptage de tours par détection de bande couleur. Le groupe a terminé 2e du classement.",
    description: ["Enchaîner tours de piste de façon autonome en restant centré grâce à la vision de profondeur, éviter les obstacles rapprochés que la caméra peut mal voir, et arrêter proprement après un nombre de passages détectés sur la ligne de course. L’architecture sépare la décision (Raspberry Pi 5, Python) et l’exécution temps réel (Arduino Uno, PWM servo et moteurs)."],
    points: ["Compétition par équipes."], 

   // Un encart
    Technologies et outils utilisés : Langages : Python 3, C++ (Arduino)
Vision : pyrealsense2, OpenCV (HSV, masques, contours)
Calcul : NumPy (cartes de profondeur, agrégations par zone)
Communication : pyserial, port USB série 9600 bauds
Calculateurs : Raspberry Pi 5, Arduino Uno
Capteurs : Intel RealSense RGB-D, 2× HC-SR04
Actionneurs : 2× moteurs DC avec ponts, 1× servomoteur de direction
CAO : conception mécanique 1/10, profilés aluminium 15×15 mm
// Autre encart
Choix techniques et solutions retenues
Raspberry Pi + Arduino : le Pi absorbe le coût logiciel de la vision 3D et du suivi de parcours tandis que l’Arduino assure PWM stable et lecture ultrasons avec latence maîtrisée.
Step-up 24 V : les moteurs du châssis sont alimentés sous une tension supérieure à la LiPo 3S, d’où l’élévation de tension côté alimentation avant les drivers.
Step-down 5 V / 5,1 V : rails distincts pour le servo et pour le Pi afin de limiter les chutes de tension et le bruit sur la logique.
RealSense : accès direct à la profondeur alignée sur la couleur pour la même ROI que le comptage de tours couleur.
Ultrasons en secours : correction qui court-circuite temporairement la décision caméra lorsqu’un obstacle est détecté très près sur un côté.
    tags: ["Robotique", "Autonomie", "Fusion360", "Python", "OpenCV"], 
    images: [] },

  // une autre encart encore : 
  Conception mécanique
Propulsion et châssis
Le véhicule est en propulsion arrière avec deux roues motrices indépendantes, chacune entraînée par un moteur dédié. La transmission passe par un train d’engrenages coniques pour transférer le couple jusqu’aux essieux arrière. Le châssis repose sur des profilés aluminium 15×15 mm pour un compromis masse et rigidité.
images: ["propulsion-et-chassis.jpg"] 
Fixation des roues arrière
Les roues arrière sont montées sur des paliers fixés au châssis. Un axe métallique traverse chaque palier et porte la roue ainsi que la transmission par engrenage vissé sur l’axe.
  images: ["fixation-roues.jpg"],
Direction et gabarit
Une garde au sol d’environ 10 mm et des pneus polyvalents permettent de rouler sur revêtements lisses ou texturés. La plage de vitesse visée est d’environ 5 à 20 km/h selon la consigne moteur. La direction utilise un servomoteur à couple élevé relié au moyeu de la roue avant gauche par une tige filetée et une biellette, pour un réglage simple et une maintenance rapide.
images: ["direction.jpg"],
Conception électronique
L’alimentation principale est une batterie LiPo 3S 5200 mAh (tension nominale 11,1 V, plage utile typique environ 11 à 12,5 V). Deux cartes principales dialoguent par USB : un Raspberry Pi 5 pour la perception et la navigation, une Arduino Uno pour l’acquisition ultrasons et la commande des actionneurs. Les moteurs requièrent une tension élevée (schéma 24 V côté boost) par rapport à la batterie, d’où un convertisseur step-up. Deux step-down fournissent typiquement le 5 V pour le servo et le 5,1 V pour le Pi. La caméra RGB-D est branchée sur le Raspberry Pi. Les deux HC-SR04 sont câblés sur l’Arduino.
images: ["electronique.jpg"],
Navigation autonome
La navigation combine profondeur (décision principale) et ultrasons (sécurité de proximité). Le programme Python acquiert la carte de profondeur, extrait une ROI dans la partie basse de l’image puis la divise en trois bandes (gauche, centre, droite). Pour chaque bande on prend la distance minimale sur les pixels valides si le centre est suffisamment libre, la voiture vise tout droit sinon on choisit le côté le plus dégagé, et si tout est bloqué on privilégie la zone avec l’obstacle le plus lointain. Les consignes de braquage envoyées à l’Arduino sont 60°, 97° et 130° selon la décision. Si un ultrason mesure un obstacle sous le seuil de 0,1 m dans le code, la commande correspondante (tourner à droite ou à gauche) remplace temporairement la sortie caméra.

Le comptage de tours utilise l’image couleur : détection HSV d’une bande au sol, machine à états avec temporisations pour éviter les doubles comptages, arrêt des moteurs après cinq tours validés et envoi de STOP à l’Arduino.
images: ["décision-direction.jpg"]
Contributions
Participation à la conception mécanique complète (choix du matériel, respect des budgets, propulsion, direction, intégration capteurs) dans le cadre du groupe.
Intégration logicielle Python RealSense, logique de zones et filtrage ultrasons.
Réalisation des livrables.

  
  // OLYMPIADES
  { id: "olympiades-fanuc", cat: "perso", title: "Olympiades FANUC (Bac+5)", org: "Concours de robotique industrielle", period: "",
    summary: "Concours de robotique industrielle organisé par FANUC. Le groupe s'est qualifié pour les phases finales.", 
    description: ["Les olympiades se déroulent en 2 parties : - La première partie se déroule en plusieurs mois, les équipes doivent répondre à un cahier des charges avec une solution orginale et surtout efficace et efficiente en respectant les normes de sécurité et en limitant les coûts, pour nous, le cahier des charges était d'intégrer des robots FANUC et de développer des préhenseurs pour atteindre une cadence cible sur une ligne d'embouteillage avec palettisation des caisses de bouteilles à la fin. - La deuxième partie est la phase finale, plusieurs épreuves se déroulent sur 2 jours. Le but est de répondre à un cahier des charges qu'on découvre au fur et à mesure des épreuves. Les qualités évaluées pendaznt la phase finale est le respect des consignes de sécurités (mise en sécurité de la cellule robotisée, ARU quand on travail dans la cellule...), la communication dans le groupe, et surtout la rapidité d'exécution pour installer du matériel, programmer le robot et répondre à la solution."],
    points: [["Avant-porjet :"],
            ["- Gestion de budget"],
            ["- Choix de matériel adapté aux contraintes du site"],
            ["- Développement de préhenseurs"],
            ["- Rédaction d'un compte-rendu détaillé et d'une vidée de présentation de la solution"],],
    images: [],
    // Lien vers la vidéo de présentation : (à insérer subtilement) https://drive.google.com/file/d/1vR5DZSj3LirDlXHa6Pm9j8c4B4j5VRJY/view?usp=drive_link
   
    points: ["Phase finale :"],
            ["- Programmation de robots industriels."],
            ["- Prise en main plus poussée de Roboguide"]
    tags: ["Robotique", "FANUC", "Roboguide", "Fusion360"], 
    images: [] }
];

// ---------- FORMATION ----------
const FORM_CATS = { lycee: "Lycée", ecole: "École d’ingénieur", mobilite: "Mobilité à l’étranger" };

const FORMATIONS = [
  { cat: "lycee", title: "Baccalauréat", org: "", period: "", summary: "", points: ["spécialités : mahtématiques, Physique-Chimie, Biologie"] },
  { cat: "ecole", title: "Diplôme d’ingénieur, Robotique et Instrumentation", org: "Polytech Dijon, Dijon et Le Creusot", period: "2021 – 2026",
    summary: "Cycle ingénieur terminé avec la mention très bien.",
    points: ["Robotique industrielle : programmation de robots FANUC et Stäubli.",
             "Électronique, instrumentation, bases de ROS2, python, bases de C++.",
             "Vision par ordinateur (en environnement industriel et SFM)"] },
  { cat: "mobilite", title: "Master 2 Intelligence artificielle (double diplôme)", org: "UTM, Kuala Lumpur, Malaisie", period: "2025 – 2026",
    summary: "Six mois d’études à l’étranger, en anglais.", points: ["Intelligence artificielle et vision par ordinateur."] }
];

// ---------- DIPLÔMES ET CERTIFICATIONS ----------
const DIPLOMES = [
  { title: "Certification ROS2", org: "The Construct", year: "2025" },
  { title: "TOEIC oral and writting comprehension", year: "2025"
  { title: "Baccalauréat", org: "", year: "2021" },
  { title: "Master 2 Intelligence artificielle", org: "UTM, Kuala Lumpur", year: "2026" },
  { title: "Diplôme d’ingénieur, Robotique et Instrumentation, mention très bien", org: "Polytech Dijon", year: "2026" }
];

// ---------- COMPÉTENCES ----------
const SKILLS = [
  ["Programmation", "Python (utilisé en production sur 3 stages), C, C++, Git, Linux et Windows"],
  ["IA et vision", "Computer vision, deep learning, labellisation et augmentation de données, optimisation de modèles, TensorFlow, TensorRT, OpenCV"],
  ["Robotique", "Robots industriels FANUC et Stäubli, notions de ROS2, électronique de base"],
  ["Langues", "Français (langue maternelle), anglais (TOEIC 900)"]
];
