
// The only file you need to edit to update the website content.

// ---------- INTERFACE TEXTS ----------
const T = { view: "View project", back: "Back to experience", images: "Images", pts: "Key achievements", none: "Project not found.", dir: "projects", home: "", proj: "../../" };

// ---------- CONTACT ----------
// linkedin: paste your profile URL (the logo only appears when a URL is provided). cv: PDF file path.
const CONTACT = { email: "capongregory68@gmail.com", linkedin: "https://www.linkedin.com/in/grégory-capon-254853222/", cv: "../assets/cv/CV-Gregory_Capon-EN.pdf" };

// ---------- EXPERIENCE (PROJECTS) ----------
// id       : project page folder name (projects/<id>/). Without an id: displays a card only, with no dedicated page.
// cover    : PROJECT CARD IMAGE on the homepage. Set the image path in assets/img/. Without a cover: no image.
// links    : links displayed below the summary, [["Label", "https://..."]].
// sections : content blocks displayed in order. A section can include:
//   title, h: 3 (subheading), callout: true (highlighted box), text: ["paragraph", ...],
//   points: ["text", ["text with sub-points", ["sub-point", ...]]], facts: [["Label", "Value"]],
//   columns: [{ title, points }, ...] (two side-by-side boxes), links: [["Label", "https://..."]], imagesFirst: true (images displayed first),
//   within text, `code` is displayed in monospace,
//   metrics: [["value", "label", "optional note"]],
//   images: [["path", "Caption", "Optional description", width in % (e.g. 50), "center"]], (width and "center" are optional),
//   center: true at project level: centers all its images; cards: true: displays facts as cards; side: true: points on the left, image on the right,
//   videos: [["assets/video/demo.mp4" or YouTube / Google Drive URL, "Caption", "", width in % (e.g. 55)]]
const EXP_CATS = { pro: "Professional", acad: "Academic", perso: "Personal" };

const EXPERIENCES = [

  // NGX
  { id: "ngx-group", cat: "pro", title: "NGX Robotics – AI Engineering Internship", org: "NGX Group, Mérignac", period: "03/2026 – 08/2026",
    summary: "Computer vision-based anomaly detection for perimeter fencing systems, replacing an existing unreliable solution.",
    tags: ["Python", "Deep Learning", "Object Detection", "Segmentation", "TensorRT", "PyTorch", "Docker", "OpenCV", "Blender", "CUDA"],
    cover: "assets/img/ngx - 2.png",
    sections: [
      { title: "Background",
        text: ["Took over an existing project focused on detecting anomalies in perimeter fencing systems. The existing solution was not performing well enough: the YOLO model generated a high number of false positives."] },
      { title: "Approach",
        points: ["Defined new quantitative performance targets.",
          "Conducted a review of existing research and state-of-the-art methods.",
          "Evaluated and fine-tuned several object detection models (YOLO-NAS, YOLOX, YOLOv7, YOLOv9) and segmentation models (DeepLabv3, U-Net, U-Net++, SAM3).",
          "Built the dataset through data augmentation and annotation.",
          "Developed the complete Python workflow, from data processing to model training and evaluation."] },
      { title: "Solution",
        text: ["A two-stage pipeline combining object detection and segmentation."],
        images: [["assets/img/ngx - 1.png", "Two-stage pipeline", "Stage 1: object detection. Stage 2: segmentation."]] },
      { title: "Results",
        metrics: [["< 1 %", "false positives"], ["< 1 %", "false negatives"],
          ["~200 ms", "inference time", "Compared with ~70 ms for the initial YOLO model: a deliberate trade-off in favour of reliability, while remaining suitable for real-time use."]],
        images: [["assets/img/ngx - 2.png", "Final detection results", "", 60, "center"]] },
      { title: "Additional tasks",
        points: ["Quality control: verifying the conformity of robot components.",
          ["RGB and thermal image alignment:",
            ["Identified the intrinsic parameters of both cameras.",
             "Corrected image distortion (undistortion).",
             "Aligned the pixel coverage of both images.",
             "Generated an energy map to identify contours.",
             "Found the best image correspondence and overlaid both images."]]] }
    ] },

  // WASORIA
  {
    id: "wasoria",
    cat: "pro",
    title: "Wasoria – AI Engineering Internship",
    org: "Wasoria, Le Creusot",
    period: "06/2025 – 08/2025",
    summary: "Developed a computer vision solution to detect, track and count moving bags in an industrial video stream.",
    tags: ["Python", "YOLOv5", "Deep Learning", "Computer Vision", "ByteTrack", "OpenCV", "XAnyLabeling"],
    cover: "assets/img/wasoria-bags.png",

    sections: [
      {
        title: "Background and objectives",
        text: [
          "A Wasoria client wanted to analyse a video stream to generate statistics on the origin of waste bags. Bag colour was one of the indicators used to distinguish their origin.",
          "The objective was to develop a solution capable of detecting bags in a video stream, tracking them as they moved and counting them without duplicates."
        ]
      },

      {
        title: "Solution development",
        text: [
          "The solution was developed in Python, using YOLOv5 (Ultralytics) for bag detection. This model was selected for its balance between performance, lightweight architecture and ease of deployment.",
          "A preliminary study of the YOLO architecture helped me understand how the model works and identify the parameters that needed to be adjusted to meet the project's requirements."
        ],
        points: [
          "Created and annotated an image dataset using XAnyLabeling.",
          "Applied data augmentation to improve model robustness.",
          "Trained the model and fine-tuned its hyperparameters.",
          "Evaluated performance on different video streams."
        ]
      },
      {
        title: "Object detection and tracking",
        text: [
          "Detection alone is not sufficient to count bags accurately: the same object appears in several consecutive frames and could therefore be counted multiple times.",
          "To address this issue, an object tracking stage was added to the detection pipeline. The selected solution was ByteTrack, a multi-object tracking algorithm developed by ByteDance and integrated into the Ultralytics ecosystem.",
          "Each detected bag is assigned a persistent identity across successive frames. This makes it possible to reconstruct its trajectory and count it as a single object, despite its repeated appearances in the video stream."
        ],
        facts: [
          ["Detection", "YOLOv5: locates bags in each frame."],
          ["Tracking", "ByteTrack: associates detections across consecutive frames."],
          ["Identification", "Assigns and maintains a unique ID for each tracked object."],
          ["Data analysis", "Counts bags and analyses their distribution."]
        ],
        images: [
          ["assets/img/wasoria-4.png", "Object trajectories across video frames", "Visualisation of the tracking process applied to detected objects.", 75, "center"]
        ]
      },

      {
        title: "Technical challenges",
        text: [
          "The main challenge was maintaining tracking continuity. To preserve a bag's identity, it must be correctly detected across a sufficient number of consecutive frames."
        ],
        points: [
          ["High-density video streams", [
            "Large numbers of bags present simultaneously.",
            "Objects temporarily occluding one another.",
            "Risk of confusion between nearby detections."
          ]],
          ["Variable image quality", [
            "Dust and visual disturbances.",
            "Occlusions caused by bags passing in front of other objects.",
            "Difficulty maintaining stable detection under all conditions."
          ]],
          ["Tracking optimisation", [
            "Finding the right balance between detection accuracy and trajectory continuity.",
            "Reducing identity switches and counting errors."
          ]]
        ],
        images: [
          ["assets/img/wasoria-2.png", "Example of a high-density video stream", "Large numbers of objects present simultaneously in the scene.", 65, "center"],
          ["assets/img/wasoria-3.png", "Example of a visually degraded stream", "Challenging visual conditions for object detection.", 65, "center"]
        ]
      },

      {
        title: "Demonstration",
        callout: true,
        videos: [["https://drive.google.com/file/d/1FKbIuLhU5n6IKQ6zMl-_JZSo0dL-jkPU/view", "", "", 55]],
        text: ["Due to project confidentiality, only selected illustrations can be shared. Additional data and images cannot be disclosed."]
      }
    ]
  },

  // AD PROD
  { id: "adprod", cat: "pro", title: "ADProd – Engineering Internship: Conversational Robot Design", org: "ADProd, Annecy", period: "04/2025 – 05/2025",
    summary: "Designed an embedded conversational robot built around a multimodal software architecture.",
    tags: ["Python", "Electronics", "Communication Protocols", "Fusion 360", "Real-Time Systems", "OpenCV"],
    cover: "assets/img/adprod-cover.png",
    sections: [
      { title: "Objective",
        text: ["Designed and deployed an expressive robot capable of interacting naturally with people, processing voice commands, detecting human presence and adapting its responses and behaviour in real-world conditions."] },
      { title: "Software architecture", imagesFirst: true, cards: true,
        text: ["The system is orchestrated by `main.py`, which launches the audio, vision, motor, OLED and threshold-regulation threads. Modules share their state through `robot_state` and behavioural timers."],
        images: [["assets/img/adprod-1.png"]],
        facts: [["Audio and AI pipeline", "`audio_utils.py` captures voice input (PyAudio) and converts it to text (Vosk, Google). Commands are passed to `voice_command.py`, which routes requests to `AI_utils.py` (GPT, Mistral or a local model)."],
          ["Vision and motor pipeline", "`video_utils.py` detects faces and eyes (dlib) and provides eye coordinates; `motor_controller.py` controls servos through the PCA9685 for facial expressions and movement."],
          ["Speech synthesis and expressiveness", "AI responses are converted to speech using Edge TTS and synchronised with facial animations (blinking, eyebrow movements and head orientation) during audio playback."],
          ["Runtime robustness", "`pca_bus.py` implements retry and I2C reset mechanisms to reduce the impact of transient faults on motor commands."]] },
      { title: "Technologies", callout: true,
        facts: [["Programming languages", "Python (primary), JSON, G-code (3D printing)"],
          ["AI", "OpenAI API, Vosk, Mistral API, sentence-transformers"],
          ["Audio", "PyAudio, Google SpeechRecognition, Edge TTS"],
          ["Computer vision", "OpenCV, dlib"],
          ["Hardware", "Raspberry Pi 5, PCA9685, MG90S/MG995 servos, 128×64 OLED, RGB LED, USB camera"],
          ["3D modelling", "Fusion 360"],
          ["Tools", "PyCharm, Geany, Cura, ROS 2"]] },
      { title: "Simulation and software demonstration",
        // To display a video: remove the // and replace the link (YouTube, Google Drive or assets/video/demo.mp4).
        // videos: [["https://www.youtube.com/watch?v=XXXXXXXXXXX", "Robot demonstration"]],
        text: ["The video demonstrates the complete interaction loop: voice input, response generation, speech synthesis and synchronised facial animation.",
          "It also illustrates the robustness of the multi-threaded orchestration running on an embedded platform."],
        videos: [["https://drive.google.com/file/d/1avCImfKNrHvJmWiO7U7BOAXzFCTHnZ2X/view?usp=sharing"]] },
      { title: "Mechanical design", side: true,
        text: ["The 3D models were primarily designed using Fusion 360. Each component was designed for easy 3D printing and assembly without specialised tools. Tolerances were manually adjusted based on observations made after printing.",
          "The robot consists of several distinct modules:"],
        points: ["A base housing the electronic circuitry and power supply (battery or mains), allowing quick switching between the two.",
          "A hollow column that routes cables and supports the head while limiting mechanical torsion.",
          "A reinforced ball joint allowing head rotation. This component went through several iterations to improve its strength, including the addition of a reinforcing screw.",
          "A hollow head designed to accommodate the camera, LEDs, servomotors and movable eye supports."],
        images: [["assets/img/adprod-2.png"]] },
      { title: "Electronic design",
        text: ["The electronic system features a hybrid power supply (3S battery and mains), BMS-based charging, voltage conversion and power distribution to the Raspberry Pi, PCA9685 controller and peripherals."],
        images: [["assets/img/adprod-3.png"]] },
      { title: "Autonomous behaviour and system control",
        facts: [["Presence detection", "Enters standby mode after an extended period of absence and proactively resumes activity when someone is detected without interaction."],
          ["Voice commands", "Wake word, personality and voice switching, and demonstration launch commands."],
          ["Hybrid AI mode", "Switches between GPT, Mistral and a local model depending on the context and network availability."],
          ["Audio regulation", "Periodically recalculates the ambient noise threshold (`seuil_regulator.py`)."]] },
      { title: "Key metrics",
        metrics: [["5", "main threads", "Launched from main.py: audio, vision, motors, OLED and threshold regulation"],
          ["3", "AI modes", "GPT, Mistral and local semantic fallback"],
          ["11", "DoF", "MG90S/MG995 servo family, controlled via PCA9685"],
          ["2", "power supply modes", "Battery or mains"]] },
      { title: "Current limitations and validation status",
        columns: [
          { title: "Validated",
            points: ["Voice interaction loop (STT, AI, TTS).", "Servo-driven expressiveness (eyes, eyebrows, head).", "Face and eye tracking, presence detection logic.", "AI routing between GPT, Mistral and the local model."] },
          { title: "Under improvement",
            points: ["Long-term runtime robustness.", "Hardware reliability in full-system integration.", "Noise resilience in uncontrolled environments."] }] },
      { title: "My contributions",
        points: ["Designed the multi-threaded software architecture and runtime orchestration around `main.py`.",
          "Implemented and integrated the complete audio pipeline (capture, STT, voice commands, TTS and synchronised playback).",
          "Integrated vision and motor control for gaze and presence tracking, as well as expressive behaviour in real-world conditions.",
          "Designed the hybrid electronic power supply (battery or mains), including BMS and voltage conversion."] }
    ] },

  // LECLERC
  // { cat: "pro", title: "Logistics Assistant (Fixed-Term Contract)", org: "Leclerc, Colmar", period: "06/2024 – 07/2024", summary: "Summer job.", tags: [] },

  // AWAKE CHALLENGE
  { id: "awake-challenge", cat: "perso", title: "Awake Challenge", org: "1:10 Scale Autonomous Vehicle", period: "2025",
    summary: "Developed a 1:10 scale autonomous car for the 2025 Awake Challenge, a national robotics competition. Navigation relied on depth mapping, short-range ultrasonic sensors and lap counting through colour-band detection. Our team finished 2nd overall.",
    center: true,
    cover: "assets/img/awake-challenge-cover.png",
    tags: ["Robotics", "Autonomous Systems", "Fusion 360", "Python", "OpenCV"],
    sections: [
      { title: "Objective",
        text: ["Complete multiple laps autonomously while staying centred on the track using depth perception, avoiding nearby obstacles that may be difficult for the camera to detect, and stopping correctly after a predefined number of detected laps. The architecture separates decision-making (Raspberry Pi 5, Python) from real-time execution (Arduino Uno, servo and motor PWM control)."] },
      { title: "Technologies and tools", callout: true,
        facts: [["Programming languages", "Python 3, C++ (Arduino)"],
          ["Computer vision", "pyrealsense2, OpenCV (HSV, masks, contours)"],
          ["Data processing", "NumPy (depth maps, region-based aggregation)"],
          ["Communication", "pyserial, 9600-baud serial USB connection"],
          ["Computing platforms", "Raspberry Pi 5, Arduino Uno"],
          ["Sensors", "Intel RealSense RGB-D, 2× HC-SR04"],
          ["Actuators", "2× DC motors with motor drivers, 1× steering servo"],
          ["CAD", "1:10 scale mechanical design, 15×15 mm aluminium profiles"]] },
      { title: "Technical design choices", callout: true,
        points: ["Raspberry Pi + Arduino: the Pi handles the computational load of 3D vision and path tracking, while the Arduino ensures stable PWM control and low-latency ultrasonic sensor readings.",
          "24 V step-up converter: the chassis motors require a higher voltage than the 3S LiPo battery can provide, so the voltage is boosted before reaching the motor drivers.",
          "5 V / 5.1 V step-down converters: separate power rails for the servo and Raspberry Pi help limit voltage drops and electrical noise on the logic supply.",
          "RealSense: direct access to depth data aligned with the colour image, allowing the same ROI to be used for colour-based lap counting.",
          "Ultrasonic fallback: when an obstacle is detected very close to one side, the ultrasonic correction temporarily overrides the camera-based steering decision."] },
      { title: "Mechanical design" },
      { h: 3, title: "Drivetrain and chassis",
        text: ["The vehicle uses rear-wheel drive with two independently driven wheels, each powered by its own motor. Power is transmitted through a bevel gear system to the rear axles. The chassis is built from 15×15 mm aluminium profiles, offering a balance between weight and rigidity."],
        images: [["assets/img/awake-1.png", "Drivetrain and chassis"]] },
      { h: 3, title: "Rear wheel mounting",
        text: ["The rear wheels are mounted on bearings fixed to the chassis. A metal shaft runs through each bearing and supports both the wheel and the gear transmission, which is secured to the shaft."],
        images: [["assets/img/awake-2.png", "Rear wheel mounting"]] },
      { h: 3, title: "Steering and dimensions",
        text: ["A ground clearance of approximately 10 mm and versatile tyres allow the vehicle to operate on both smooth and textured surfaces. The target speed range is approximately 5 to 20 km/h, depending on the motor command. Steering is controlled by a high-torque servo connected to the left front wheel hub through a threaded rod and linkage, allowing straightforward adjustment and maintenance."],
        images: [["assets/img/awake-3.png", "Steering system"]] },
      { title: "Electronic design",
        text: ["The main power source is a 3S 5200 mAh LiPo battery (11.1 V nominal voltage, with a typical operating range of approximately 11 to 12.5 V). Two boards communicate via USB: a Raspberry Pi 5 handles perception and navigation, while an Arduino Uno manages ultrasonic sensor acquisition and actuator control.",
          "The motors require a higher voltage than the battery provides (24 V on the boost converter side), hence the use of a step-up converter. Two step-down converters provide 5 V for the servo and 5.1 V for the Raspberry Pi. The RGB-D camera is connected to the Raspberry Pi, while both HC-SR04 sensors are connected to the Arduino."],
        images: [["assets/img/awake-4.png", "Electronic schematic"]] },
      { title: "Autonomous navigation",
        text: ["Navigation combines depth perception (primary decision-making input) with ultrasonic sensors (short-range obstacle detection). The Python program acquires the depth map, extracts an ROI from the lower part of the image and divides it into three regions (left, centre and right). For each region, it calculates the minimum distance among valid pixels. If the centre is sufficiently clear, the vehicle drives straight ahead. Otherwise, it selects the clearest side; if all regions are blocked, it favours the one with the most distant obstacle. The steering commands sent to the Arduino are 60°, 97° and 130°, depending on the decision. If an ultrasonic sensor detects an obstacle closer than 0.1 m, the corresponding steering command (left or right) temporarily overrides the camera output.",
          "Lap counting relies on the colour image: HSV-based detection of a track marking, combined with a state machine and timing delays to prevent duplicate counts. The motors stop after five validated laps, and a STOP command is sent to the Arduino."],
        images: [["assets/img/decision-awake-3.png", "Steering decision process"]] },
      { title: "My contributions",
        points: ["Contributed to the overall mechanical design as part of the team, including hardware selection, budget management, drivetrain, steering and sensor integration.",
          "Integrated the Python software components: RealSense, region-based navigation logic and ultrasonic filtering.",
          "Produced the project deliverables."] }
    ] },

  // FANUC OLYMPICS
  { id: "olympiades-fanuc", cat: "perso", title: "FANUC Robotics Olympics (Master's Level)", org: "Industrial Robotics Competition", period: "",
    summary: "Industrial robotics competition organised by FANUC. Our team qualified for the final rounds.",
    tags: ["Robotics", "FANUC", "ROBOGUIDE", "Fusion 360"],
    cover: "assets/img/olympiades-fanuc-cover.png",
    sections: [
      { title: "The competition", text: ["The competition is divided into two stages: a preliminary project lasting several months, followed by a two-day final."] },
      { h: 3, title: "Preliminary project",
        text: ["Teams must respond to a technical specification with an original, efficient and cost-effective solution that complies with safety standards. Our challenge was to integrate FANUC robots and develop grippers to meet a target production rate on a bottling line, including palletising bottle crates at the end of the line."],
        points: ["Budget management.", "Selection of equipment suited to the site's constraints.", "Gripper design and development.", "Preparation of a detailed technical report and a video presenting the proposed solution."],
        videos: [["https://drive.google.com/file/d/1vR5DZSj3LirDlXHa6Pm9j8c4B4j5VRJY/view?usp=drive_link", "Solution presentation video", "", 55]] },
      { h: 3, title: "Final round",
        text: ["Several challenges spread over two days, with the technical specifications progressively revealed throughout the competition. Teams were assessed on compliance with safety requirements (securing the robotic cell and using emergency stops when entering the cell), teamwork and, above all, execution speed: setting up the equipment, programming the robot and meeting the requirements."],
        points: ["Industrial robot programming.", "Advanced hands-on experience with ROBOGUIDE."] }
    ] },

  // AUTOMATED SORTING SYSTEM
  { id: "systeme-supervision-industrielle", cat: "perso", title: "Automated Sorting System and Industrial Supervision", org: "", period: "",
    summary: "Designed an automated part-sorting system controlled by a Raspberry Pi. Objects are identified through computer vision, while the process is controlled via a web-based interface.",
    tags: ["Python", "Flask", "OpenCV", "Raspberry Pi", "Computer Vision", "Automation", "Electronics"],
    cover: "assets/img/tri-cover.png",

    sections: [
      { title: "Background and objectives",
        text: ["This project involved designing an automated system capable of sorting parts according to different visual criteria, particularly colour and shape.",
          "The system is built around a Raspberry Pi, which centralises the processing of information from a camera and sensors before controlling the different stages of the sorting process.",
          "The objective was to develop an integrated solution combining perception, data processing, actuator control and system supervision."] },
      { title: "System architecture",
        text: ["The architecture is based on three main functions: data acquisition, computer vision processing and control of the sorting system.",
          "The Raspberry Pi handles software processing and coordinates the different components of the system."],
        facts: [["Data acquisition", "Camera and sensors collect the information required for object identification and system operation."],
          ["Processing", "Python and OpenCV analyse images and identify the visual characteristics of each part."],
          ["Control", "The sorting mechanism is actuated according to the image analysis results."],
          ["Supervision", "A Flask-based web interface allows users to configure and monitor the system."]],
        images: [["assets/img/systeme-supervision-industrielle-cover.png", "System overview", "", 75, "center"]]
      },
      { title: "Computer vision and object identification",
        text: ["The camera provides the images required to identify the parts. Image processing is performed in Python using OpenCV to extract the visual features that distinguish one object from another.",
          "Two sorting criteria are available: colour and shape. Users can select the desired operating mode through the supervision interface."],
        points: ["Image acquisition and processing.",
          "Extraction of the parts' visual features.",
          "Object identification based on the selected criterion.",
          "Transmission of the relevant information to the sorting control system."]
      },
      { title: "Supervision interface",
        text: ["A web interface developed with Flask allows users to interact with the system without directly modifying the program running on the Raspberry Pi.",
          "Users can select the desired sorting mode and monitor the system's operation."],
        points: ["Development of a Flask-based web interface.",
          "Selection of the sorting criterion: colour or shape.",
          "Communication between the user interface and the control program.",
          "Centralised interaction with the system."]
      },
      { title: "Demonstration",
        text: ["The video demonstrates the prototype in operation and illustrates the integration of computer vision, embedded processing and web-based supervision."],
        videos: [
          ["https://drive.google.com/file/d/1mV2nnrxMpAuMydM35jiG_ANqXyOdb4yT/view?usp=drive_link", "Automated sorting system demonstration", "", 65]
        ]
      },
      { title: "Skills and technologies applied",
        callout: true,
        points: ["Python development on an embedded Raspberry Pi platform.",
          "Image processing and computer vision using OpenCV.",
          "Web interface development with Flask.",
          "Integration of electronic components and sensors.",
          "Communication between the software and hardware components of an automated system."]
      }
    ]
  },

];

// ---------- EDUCATION ----------
const FORM_CATS = { ecole: "Engineering School", mobilite: "International Study", lycee: "High School" };

const FORMATIONS = [
  { cat: "lycee", title: "French Baccalauréat", org: "", period: "2021", summary: "", points: ["Specialisations: Mathematics, Physics and Chemistry, Biology."] },
  { cat: "ecole", title: "Engineering Degree in Robotics and Instrumentation", org: "Polytech Dijon, Dijon and Le Creusot, France", period: "2021 – 2026",
    summary: "Completed the engineering programme with highest honours.",
    points: ["Industrial robotics: programming FANUC and Stäubli robots.",
      "Electronics, instrumentation, introductory ROS 2, Python and C++.",
      "Computer vision (industrial environments and Structure from Motion)."] },
  { cat: "mobilite", title: "Master's Degree in Artificial Intelligence (Double Degree)", org: "UTM, Kuala Lumpur, Malaysia", period: "2025 – 2026",
    summary: "Six months of study abroad in an English-speaking academic environment.", points: ["Artificial intelligence and computer vision."] }
];

// ---------- DEGREES AND CERTIFICATIONS ----------
const DIPLOMES = [
  { title: "Master's Degree in Artificial Intelligence", org: "UTM, Kuala Lumpur", year: "2026" },
  { title: "Engineering Degree in Robotics and Instrumentation, with highest honours", org: "Polytech Dijon", year: "2026" },
  { title: "Category B Driving Licence", org: "", year: ""},
  { title: "TOEIC (Listening and Reading)", org: "Score", year: "900" },
  { title: "ROS 2 Certification", org: "The Construct", year: "2025" },
  // { title: "TOEIC (Listening and Reading)", org: "Score: 900", year: "2025" },
  { title: "French Baccalauréat", org: "", year: "2021" },
];

// ---------- SKILLS ----------
const SKILLS = [
  ["Programming", "Python (used in production across 3 internships), C, C++, Git, Linux and Windows"],
  ["AI and Computer Vision", "Computer vision, deep learning, data annotation and augmentation, model optimisation, TensorFlow, TensorRT, OpenCV"],
  ["Robotics", "FANUC and Stäubli industrial robots, basic ROS 2 knowledge, electronics fundamentals"],
  ["Languages", "French (native), English (professional working proficiency)"]
];
