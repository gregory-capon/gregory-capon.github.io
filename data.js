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
    points: ["Compétition par équipes."], tags: ["Robotique", "Autonomie"], images: [] },

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
  { cat: "lycee", title: "Baccalauréat", org: "", period: "", summary: "", points: [] },
  { cat: "ecole", title: "Diplôme d’ingénieur, Robotique et Instrumentation", org: "Polytech Dijon, Dijon et Le Creusot", period: "2021 – 2026",
    summary: "Cycle ingénieur terminé avec la mention très bien.",
    points: ["Robotique industrielle : programmation de robots FANUC et Stäubli.", "Électronique, instrumentation, bases de ROS2."] },
  { cat: "mobilite", title: "Master 2 Intelligence artificielle (double diplôme)", org: "UTM, Kuala Lumpur, Malaisie", period: "2025 – 2026",
    summary: "Six mois d’études à l’étranger, en anglais.", points: ["Intelligence artificielle et vision par ordinateur.", "TOEIC 900."] }
];

// ---------- DIPLÔMES ET CERTIFICATIONS ----------
const DIPLOMES = [
  { title: "Certification ROS2", org: "The Construct", year: "" },
  { title: "Baccalauréat", org: "", year: "" },
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
