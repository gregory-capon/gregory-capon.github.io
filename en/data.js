// English content. Same structure as ../data.js: see the comments there for every available field.

// ---------- INTERFACE TEXT ----------
const T = { view: "View project", back: "Back to experience", images: "Images", pts: "Highlights", none: "Project not found.", dir: "projects", home: "../", proj: "../../../" };

// ---------- CONTACT ----------
// linkedin : colle l’adresse de ton profil (le logo n’apparaît que lorsqu’elle est renseignée). cv : chemin du PDF.
const CONTACT = { email: "capongregory68@gmail.com", linkedin: "https://www.linkedin.com/in/TON-IDENTIFIANT", cv: "assets/cv/CV-Gregory_Capon-EN.pdf" };

// ---------- EXPERIENCE ----------
const EXP_CATS = { pro: "Professional", acad: "Academic", perso: "Personal" };

const EXPERIENCES = [

  // NGX
  { id: "ngx-group", cat: "pro", title: "NGX Robotics - AI Engineer Internship", org: "NGX Group, Mérignac, France", period: "03/2026 – 08/2026",
    summary: "Anomaly detection with computer vision on fencing installations, replacing an unreliable existing solution.",
    tags: ["Python", "Deep learning", "Detection", "Segmentation", "TensorRT", "PyTorch", "Docker", "OpenCV", "Blender", "CUDA"],
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
        images: [["assets/img/ngx - 2.png", "Final detection", "", 60, "center"]] },
      { title: "Side tasks",
        points: ["Quality control: checking the conformity of robot parts.",
          ["Alignment of RGB and thermal images:",
            ["Finding the intrinsic parameters of both cameras.",
             "Undistorting the images.",
             "Bringing both images to the same pixel coverage.",
             "Energy map to find the contours.",
             "Searching for the best match, then overlaying the images."]]] }
    ] },

  // WASORIA
  { id: "wasoria", cat: "pro", title: "Wasoria - AI Engineer Internship", org: "Wasoria, Le Creusot, France", period: "06/2025 – 08/2025",
    summary: "Led an AI-based detection project.",
    tags: ["Python", "Deep learning", "Hyperparameters", "RFID"],
    cover: "assets/img/wasoria-bags.png",
    sections: [
      { title: "Missions",
        points: ["Python development of the solution.",
          "Dataset creation and data augmentation.",
          "Hyperparameter tuning and model optimisation.",
          "Ran field operations and experiments from start to finish.",
          "Developed an interface to sort the company’s sensitive files."] }
    ] },

  // AD PROD
  { id: "adprod", cat: "pro", title: "ADProd - Engineering internship: design of a conversational robot", org: "ADProd, Annecy, France", period: "04/2025 – 05/2025",
    summary: "Embedded conversational robot with a multimodal software architecture.",
    tags: ["Python", "Electronics", "Communication protocols", "Fusion360", "Real time", "OpenCV"],
    cover: "assets/img/adprod-cover.png",
    sections: [
      { title: "Goal",
        text: ["Design and deploy an expressive robot able to interact naturally with an audience, handle voice commands, track human presence and adapt its answers and behaviour in real conditions of use."] },
      { title: "Code architecture", imagesFirst: true, cards: true,
        text: ["Orchestration is handled by `main.py`, which starts the audio, vision, motor, OLED and threshold-regulation threads. Modules share state through `robot_state` and behavioural timers."],
        images: [["assets/img/adprod-1.png"]],
        facts: [["Audio and AI pipeline", "`audio_utils.py` captures the voice (PyAudio) and transcribes it (Vosk, Google), passes commands to `voice_command.py`, then routes requests to `AI_utils.py` (GPT, Mistral or local model)."],
          ["Vision and motor pipeline", "`video_utils.py` detects the face and eyes (dlib) and feeds the eye coordinates; `motor_controller.py` drives the servos through the PCA9685 for expressions and movements."],
          ["Speech and expressiveness", "The AI’s answer is voiced with Edge TTS and synchronised with facial animations (blinking, eyebrows, head orientation) during audio playback."],
          ["Runtime robustness", "`pca_bus.py` includes I2C retry and re-initialisation mechanisms to limit the impact of transient faults on motor commands."]] },
      { title: "Technologies used", callout: true,
        facts: [["Languages", "Python (main), JSON, G-code (3D printing)"],
          ["AI", "OpenAI API, Vosk, Mistral API, sentence-transformers"],
          ["Audio", "PyAudio, Google SpeechRecognition, Edge TTS"],
          ["Vision", "OpenCV, dlib"],
          ["Hardware", "Raspberry Pi 5, PCA9685, MG90S/MG995 servos, 128×64 OLED, RGB LED, USB camera"],
          ["3D modelling", "Fusion 360"],
          ["Tools", "PyCharm, Geany, Cura, ROS 2"]] },
      { title: "Software simulation and demonstration",
        text: ["The video shows the complete loop: voice interaction, answer generation, speech synthesis and coupled facial animation.",
          "It also illustrates the robustness of the multi-threaded orchestration on an embedded platform."],
        videos: [["https://drive.google.com/file/d/1avCImfKNrHvJmWiO7U7BOAXzFCTHnZ2X/view?usp=sharing"]] },
      { title: "Mechanical design", side: true,
        text: ["The 3D modelling was done mainly with Fusion 360. Each part was designed to be easy to 3D-print and to assemble without special tools. Tolerances were adjusted by hand according to what was observed after printing.",
          "The robot is made of several distinct modules:"],
        points: ["A base housing the electronic circuit and the power supply (battery or mains), allowing a quick switch between the two.",
          "A hollow column that guides the cables and supports the head while limiting mechanical torsion.",
          "A reinforced ball joint that allows the head to rotate. This part went through several iterations to improve its strength, notably by adding a reinforcement screw.",
          "A hollow head, designed to hold the camera, the LEDs, the servomotors and the mobile eye supports."],
        images: [["assets/img/adprod-2.png"]] },
      { title: "Electronic design",
        text: ["The circuit includes hybrid power logic (3S battery and mains), BMS charging, voltage adaptation and power distribution to the Raspberry Pi, the PCA9685 controller and the peripherals."],
        images: [["assets/img/adprod-3.png"]] },
      { title: "Autonomous behaviour and supervision",
        facts: [["Presence management", "goes to sleep after a prolonged absence, proactively restarts if a presence is detected without interaction."],
          ["Voice commands", "wake word, change of personality and voice, launching of demonstrations."],
          ["Hybrid AI mode", "switches between GPT, Mistral or local depending on context and network availability."],
          ["Audio regulation", "periodic recalculation of the ambient noise threshold (`seuil_regulator.py`)."]] },
      { title: "Key figures",
        metrics: [["5", "main threads", "started from main.py: audio, vision, motors, OLED, threshold regulation"],
          ["3", "AI modes", "GPT, Mistral and local semantic fallback"],
          ["11", "DoF", "MG90S/MG995 family, driven through the PCA9685"],
          ["2", "power modes", "battery or mains"]] },
      { title: "Current limits and validation level",
        columns: [
          { title: "Validated",
            points: ["Voice interaction loop (STT, AI, TTS).", "Servo expressiveness (eyes, eyebrows, head).", "Face and eye tracking, presence logic.", "AI routing between GPT, Mistral and local."] },
          { title: "Being improved",
            points: ["Long-term runtime robustness.", "Hardware reliability in full integration.", "Robustness to noise in uncontrolled environments."] }] },
      { title: "Contributions",
        points: ["Design of the multi-threaded software architecture and of the runtime orchestration around `main.py`.",
          "Implementation and integration of the complete audio pipeline (capture, STT, voice commands, TTS, synchronised playback).",
          "Vision and motor integration for gaze-presence tracking and expressive animation in real situations.",
          "Electronic design of a hybrid power supply (battery or mains) with BMS and voltage conversion."] }
    ] },

  // AWAKE CHALLENGE
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "1/10-scale autonomous vehicle", period: "2025",
    summary: "1/10-scale autonomous car for the Awake Challenge 2025, a national robotics competition. Navigation from a depth map, proximity ultrasonic sensors and lap counting by detecting a colour strip. Our group finished 2nd in the ranking.",
    center: true,
    cover: "assets/img/awake-challenge-cover.png",
    tags: ["Robotics", "Autonomy", "Fusion360", "Python", "OpenCV"],
    sections: [
      { title: "Goal",
        text: ["Chain laps of the track autonomously while staying centred thanks to depth vision, avoid close obstacles that the camera may see poorly, and stop cleanly after a given number of detected crossings of the finish line. The architecture separates decision-making (Raspberry Pi 5, Python) from real-time execution (Arduino Uno, servo and motor PWM)."] },
      { title: "Technologies and tools", callout: true,
        facts: [["Languages", "Python 3, C++ (Arduino)"],
          ["Vision", "pyrealsense2, OpenCV (HSV, masks, contours)"],
          ["Computing", "NumPy (depth maps, per-zone aggregation)"],
          ["Communication", "pyserial, USB serial port at 9600 baud"],
          ["Computers", "Raspberry Pi 5, Arduino Uno"],
          ["Sensors", "Intel RealSense RGB-D, 2× HC-SR04"],
          ["Actuators", "2× DC motors with drivers, 1× steering servomotor"],
          ["CAD", "1/10-scale mechanical design, 15×15 mm aluminium profiles"]] },
      { title: "Technical choices", callout: true,
        points: ["Raspberry Pi + Arduino: the Pi absorbs the software cost of 3D vision and track following, while the Arduino provides stable PWM and ultrasonic reading with controlled latency.",
          "24 V step-up: the chassis motors run at a higher voltage than the 3S LiPo, hence the voltage boost before the drivers.",
          "5 V / 5.1 V step-down: separate rails for the servo and the Pi limit voltage drops and noise on the logic.",
          "RealSense: direct access to depth aligned with colour, for the same ROI as the colour-based lap counting.",
          "Ultrasonic fallback: the correction temporarily overrides the camera’s decision when an obstacle is detected very close on one side."] },
      { title: "Mechanical design" },
      { h: 3, title: "Propulsion and chassis",
        text: ["The vehicle is rear-wheel drive with two independent drive wheels, each driven by its own motor. The transmission uses a bevel gear train to carry torque to the rear axles. The chassis is built from 15×15 mm aluminium profiles, a compromise between weight and stiffness."],
        images: [["assets/img/awake-1.png", "Propulsion and chassis"]] },
      { h: 3, title: "Rear wheel mounting",
        text: ["The rear wheels are mounted on bearings fixed to the chassis. A metal shaft passes through each bearing and carries the wheel and the gear transmission, screwed onto the shaft."],
        images: [["assets/img/awake-2.png", "Rear wheel mounting"]] },
      { h: 3, title: "Steering and dimensions",
        text: ["A ground clearance of about 10 mm and all-round tyres allow driving on smooth or textured surfaces. The target speed range is about 5 to 20 km/h depending on the motor setpoint. Steering uses a high-torque servomotor connected to the front-left wheel hub by a threaded rod and a tie rod, for simple adjustment and quick maintenance."],
        images: [["assets/img/awake-3.png", "Steering"]] },
      { title: "Electronic design",
        text: ["The main power source is a 3S 5200 mAh LiPo battery (nominal voltage 11.1 V, typical useful range of about 11 to 12.5 V). Two boards communicate over USB: a Raspberry Pi 5 for perception and navigation, and an Arduino Uno for reading the ultrasonic sensors and commanding the actuators.",
          "The motors need a higher voltage than the battery provides (24 V boost design), hence a step-up converter. Two step-down converters supply 5 V for the servo and 5.1 V for the Pi. The RGB-D camera is plugged into the Raspberry Pi, and the two HC-SR04 sensors into the Arduino."],
        images: [["assets/img/awake-4.png", "Electronic schematic"]] },
      { title: "Autonomous navigation",
        text: ["Navigation combines depth (main decision) and ultrasonic sensors (proximity safety). The Python program acquires the depth map, extracts an ROI in the lower part of the image, then splits it into three bands (left, centre, right). For each band, it keeps the minimum distance over the valid pixels. If the centre is free enough, the car drives straight; otherwise it picks the clearest side, and if everything is blocked it favours the zone with the farthest obstacle. The steering setpoints sent to the Arduino are 60°, 97° and 130° depending on the decision. If an ultrasonic sensor measures an obstacle below the 0.1 m threshold, the matching command (turn right or left) temporarily replaces the camera output.",
          "Lap counting uses the colour image: HSV detection of a strip on the ground, a state machine with timeouts to avoid double counting, motors stopped after five validated laps and a STOP sent to the Arduino."],
        images: [["assets/img/decision-awake-3.png", "Steering decision"]] },
      { title: "Contributions",
        points: ["Took part in the complete mechanical design (choice of components, budget compliance, propulsion, steering, sensor integration), as part of the group.",
          "Python software integration: RealSense, zone logic and ultrasonic filtering.",
          "Production of the deliverables."] }
    ] },

  // OLYMPIADES FANUC
  { id: "olympiades-fanuc", cat: "perso", title: "FANUC Olympiads (Master’s level)", org: "Industrial robotics competition", period: "",
    summary: "Industrial robotics competition organised by FANUC. Our group qualified for the final rounds.",
    tags: ["Robotics", "FANUC", "Roboguide", "Fusion360"],
    cover: "assets/img/olympiades-fanuc-cover.png",
    sections: [
      { title: "The competition", text: ["The Olympiads take place in two parts: a pre-project lasting several months, then a two-day final round."] },
      { h: 3, title: "Pre-project",
        text: ["Teams answer a specification with an original, effective and efficient solution that complies with safety standards and limits costs. For us: integrating FANUC robots and developing grippers to reach a target throughput on a bottling line, with palletising of the bottle crates at the end of the line."],
        points: ["Budget management.", "Choice of equipment suited to the site’s constraints.", "Gripper development.", "Writing a detailed report and a video presenting the solution."],
        videos: [["https://drive.google.com/file/d/1vR5DZSj3LirDlXHa6Pm9j8c4B4j5VRJY/view?usp=drive_link", "Video presenting the solution", "", 55]] },
      { h: 3, title: "Final round",
        text: ["Several tests over two days, based on a specification discovered as the tests go on. What is assessed is compliance with safety instructions (securing the robotic cell, emergency stop when working inside the cell), communication within the group and above all execution speed: installing the equipment, programming the robot and meeting the request."],
        points: ["Industrial robot programming.", "More advanced use of Roboguide."] }
    ] }
];

// ---------- EDUCATION ----------
const FORM_CATS = { ecole: "Engineering school", mobilite: "Study abroad", lycee: "High school" };

const FORMATIONS = [
  { cat: "lycee", title: "Baccalauréat (French high school diploma)", org: "", period: "2021", summary: "", points: ["Specialisations: mathematics, physics-chemistry, biology."] },
  { cat: "ecole", title: "Engineering degree, Robotics and Instrumentation", org: "Polytech Dijon, Dijon and Le Creusot, France", period: "2021 – 2026",
    summary: "Engineering cycle completed with honours (mention très bien).",
    points: ["Industrial robotics: programming of FANUC and Stäubli robots.",
      "Electronics, instrumentation, ROS2 fundamentals, Python, C++ basics.",
      "Computer vision (in industrial environments and SFM)."] },
  { cat: "mobilite", title: "Master 2 Artificial Intelligence (double degree)", org: "UTM, Kuala Lumpur, Malaysia", period: "2025 – 2026",
    summary: "Six months of studies abroad, taught in English.", points: ["Artificial intelligence and computer vision."] }
];

// ---------- DEGREES AND CERTIFICATIONS ----------
const DIPLOMES = [
  { title: "Master 2 Artificial Intelligence", org: "UTM, Kuala Lumpur", year: "2026" },
  { title: "Engineering degree, Robotics and Instrumentation, with honours", org: "Polytech Dijon", year: "2026" },
  { title: "Diving license", org: "", year: "" },
  { title: "TOEIC (oral and writting comprehension)", org: "Score", year: "900" }, 
  { title: "ROS2 Certification", org: "The Construct", year: "2025" },
  // { title: "TOEIC, listening and reading comprehension", org: "Score: 900", year: "2025" },
  { title: "Baccalauréat (French high school diploma)", org: "", year: "2021" },
];

// ---------- SKILLS ----------
const SKILLS = [
  ["Programming", "Python (used in production during 3 internships), C, C++, Git, Linux and Windows"],
  ["AI and vision", "Computer vision, deep learning, data labelling and augmentation, model optimisation, TensorFlow, TensorRT, OpenCV"],
  ["Robotics", "FANUC and Stäubli industrial robots, ROS2 fundamentals, basic electronics"],
  ["Languages", "French (native), English (professional)"]
];
