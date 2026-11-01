// Seul fichier à modifier pour changer le contenu du site.

// ---------- TEXTES DE L’INTERFACE ----------
const T = { view: "Voir le projet", back: "Retour aux expériences", images: "Images", pts: "Réalisations", none: "Projet introuvable.", dir: "projects", home: "", proj: "../../" };

// ---------- EXPÉRIENCES (projets) ----------
// id : nom du dossier de la page du projet (projets/<id>/). Sans id, pas de page (simple carte).
// images : liste de ["chemin", "légende"] affichées sur la page du projet ; cover : image de la carte (optionnel).
const EXP_CATS = { pro: "Professionnel", acad: "Académique", perso: "Personnel" };

const EXPERIENCES = [
  { id: "ngx-group", cat: "pro", title: "Stage ingénieur IA", org: "NGX Group, Mérignac", period: "03/2026 – 08/2026",
    summary: "Détection d’anomalies par vision par ordinateur sur des installations de clôture, en remplacement d’une solution peu fiable.",
    description: [],
    points: ["Reprise d’un projet existant aux résultats insuffisants (modèle YOLO avec beaucoup de faux positifs).",
      "Définition de nouveaux objectifs chiffrés"
      "Rédaction d'un état de l'art.",
      "Étude et évaluation d’approches alternatives de détection et de segmentation.",
      "Construction de la base de données : augmentation et labellisation.",
      "Etude, prise en main et ajustement des hyperparamètres de différents modèles de détection (YOLO-NAS, YOLOX, YOLOv7, YOLOv9) et de segmentation (DeepLabv3, Unet, Unet++, SAM3).,
      "Inférence d’environ 200 ms, un compromis assumé pour gagner en fiabilité tout en restant compatible avec le temps réel.",
      "Développement Python de bout en bout : traitement des données, entraînement, évaluation."],
      "Résultats : ",
        "Une pipeline en deux parties (voir image X.X)," ,
        "faux positifs : moins d'1%, ",
        "faux négatifs : moins d'1%,  " ,
        "temps d' : ~200 ms, ",
  
    tags: ["Python", "Deep learning", "Détection", "Segmentation", 'TensorRT", "Pytorch", "Docker", "OpenCV", "Blender"],
    // J'aimerais avoir autre choses que réalisations, comme résultats par exemple ou autres catégories que tu juges utiles 
    // cover: "assets/img/ngx-1.jpg",
    cover: "assets/img/ngx - 1.png",
    cover: "assets/img/ngx - 2.png",
    // images: [["assets/img/ngx-1.jpg", "Exemple de détection"], ["assets/img/ngx-2.jpg", "Base de données"]],
    images: [["assets/img/ngx - 1.png", "Pipeline en 2 parties"], ["assets/img/ngx - 2.png", "Détection finale"]]
    // J'iamerais pouvoir ajouter une éventuelle explication 
    // Par exemple je veux commenter l'image 1 en disant : "partie 1 ; détection, partie 2, segmentation"

    images: [] },
  { id: "wasoria", cat: "pro", title: "Stage ingénieur IA", org: "Wasoria, Le Creusot", period: "06/2025 – 08/2025",
    summary: "Conduite d’un projet de détection basé sur l’IA.", description: [],
    points: ["Développement Python de la solution.", "Constitution de la base de données et augmentation de données.", "Ajustement des hyperparamètres et optimisation du modèle."],
    tags: ["Python", "Deep learning", "Hyperparamètres"], images: [] },
  { id: "adprod", cat: "pro", title: "Stage ingénieur", org: "ADProd, Annecy", period: "04/2025 – 05/2025",
    summary: "Conception de robots conversationnels.", description: [],
    points: ["Développement Python et optimisation des performances.", "Conception de circuits électroniques.", "Présentations orales des travaux."],
    tags: ["Python", "Électronique"], images: [] },
  { cat: "pro", title: "Employé logistique (CDD)", org: "Leclerc, Colmar", period: "06/2024 – 07/2024", summary: "Emploi d’été.", tags: [] },
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "Véhicule autonome à l’échelle 1/10", period: "",
    summary: "Conception d’un véhicule entièrement autonome : 2e place sur 10 équipes.", description: [],
    points: ["Compétition par équipes."], tags: ["Robotique", "Autonomie"], images: [] },
  { id: "olympiades-fanuc", cat: "perso", title: "Olympiades FANUC (Bac+5)", org: "Concours de robotique industrielle", period: "",
    summary: "Concours organisé par FANUC : qualifié pour les phases finales.", description: [],
    points: ["Programmation de robots industriels."], tags: ["Robotique", "FANUC"], images: [] }
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
