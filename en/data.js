// English content. Only file to edit for the English site.
const T = { view: "View project", back: "Back to experience", images: "Images", pts: "Highlights", none: "Project not found.", dir: "projects", home: "../", proj: "../../../" };

const EXP_CATS = { pro: "Professional", acad: "Academic", perso: "Personal" };

const EXPERIENCES = [
  { id: "ngx-group", cat: "pro", title: "AI Engineer Intern", org: "NGX Group, Mérignac, France", period: "03/2026 – 08/2026",
    summary: "Anomaly detection with computer vision on fencing installations, replacing an unreliable existing solution.",
    tags: ["Python", "Deep learning", "Detection", "Segmentation", "TensorRT", "PyTorch", "Docker", "OpenCV", "Blender"],
    cover: "assets/img/ngx - 2.png",
    sections: [
      { title: "Context",
        text: ["Took over an existing anomaly-detection project on fencing installations. Its results were considered insufficient: the YOLO model in use produced a high rate of false positives."] },
      { title: "Approach",
        points: ["Defined new quantified objectives.",
          "Wrote a state of the art.",
          "Studied, set up and tuned the hyperparameters of several detection models (YOLO-NAS, YOLOX, YOLOv7, YOLOv9) and segmentation models (DeepLabv3, U-Net, U-Net++, SAM3).",
          "Built the dataset: augmentation and labelling.",
          "End-to-end Python development: data processing, training, evaluation."] },
      { title: "Solution",
        text: ["A two-stage pipeline: detection, then segmentation."],
        images: [["assets/img/ngx - 1.png", "Two-stage pipeline", "Stage 1: detection. Stage 2: segmentation."]] },
      { title: "Results",
        metrics: [["< 1 %", "false positives"], ["< 1 %", "false negatives"],
          ["~200 ms", "inference time", "versus ~70 ms for the initial YOLO: a deliberate trade-off for reliability, still compatible with real-time use"]],
        images: [["assets/img/ngx - 2.png", "Final detection", ""]] }
    ] },
  { id: "wasoria", cat: "pro", title: "AI Engineer Intern", org: "Wasoria, Le Creusot, France", period: "06/2025 – 08/2025",
    summary: "Led an AI-based detection project.", description: [],
    points: ["Python development of the solution.", "Dataset creation and data augmentation.", "Hyperparameter tuning and model optimisation."],
    tags: ["Python", "Deep learning", "Hyperparameters"], images: [] },
  { id: "adprod", cat: "pro", title: "Engineering Intern", org: "ADProd, Annecy, France", period: "04/2025 – 05/2025",
    summary: "Design of conversational robots.", description: [],
    points: ["Python development and performance optimisation.", "Electronic circuit design.", "Oral presentations of the work."],
    tags: ["Python", "Electronics"], images: [] },
  { cat: "pro", title: "Logistics Employee (fixed-term)", org: "Leclerc, Colmar, France", period: "06/2024 – 07/2024", summary: "Summer job.", tags: [] },
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "1/10-scale autonomous vehicle", period: "",
    summary: "Design of a fully autonomous vehicle: 2nd place out of 10 teams.", description: [],
    points: ["Team competition."], tags: ["Robotics", "Autonomy"], images: [] },
  { id: "olympiades-fanuc", cat: "perso", title: "FANUC Olympiads (Master’s level)", org: "Industrial robotics competition", period: "",
    summary: "Competition organised by FANUC: qualified for the final rounds.", description: [],
    points: ["Industrial robot programming."], tags: ["Robotics", "FANUC"], images: [] }
];

const FORM_CATS = { lycee: "High school", ecole: "Engineering school", mobilite: "Study abroad" };

const FORMATIONS = [
  { cat: "lycee", title: "Baccalauréat (French high school diploma)", org: "", period: "", summary: "", points: [] },
  { cat: "ecole", title: "Engineering degree, Robotics and Instrumentation", org: "Polytech Dijon, Dijon and Le Creusot, France", period: "2021 – 2026",
    summary: "Engineering cycle completed with honours (mention très bien).",
    points: ["Industrial robotics: programming of FANUC and Stäubli robots.", "Electronics, instrumentation, ROS2 fundamentals."] },
  { cat: "mobilite", title: "Master 2 Artificial Intelligence (double degree)", org: "UTM, Kuala Lumpur, Malaysia", period: "2025 – 2026",
    summary: "Six months of studies abroad, taught in English.", points: ["Artificial intelligence and computer vision.", "TOEIC 900."] }
];

const DIPLOMES = [
  { title: "ROS2 Certification", org: "The Construct", year: "" },
  { title: "Baccalauréat (French high school diploma)", org: "", year: "" },
  { title: "Master 2 Artificial Intelligence", org: "UTM, Kuala Lumpur", year: "2026" },
  { title: "Engineering degree, Robotics and Instrumentation (with honours)", org: "Polytech Dijon", year: "2026" }
];

const SKILLS = [
  ["Programming", "Python (used in production during 3 internships), C, C++, Git, Linux and Windows"],
  ["AI and vision", "Computer vision, deep learning, data labelling and augmentation, model optimisation, TensorFlow, TensorRT, OpenCV"],
  ["Robotics", "FANUC and Stäubli industrial robots, ROS2 fundamentals, basic electronics"],
  ["Languages", "French (native), English (TOEIC 900)"]
];
