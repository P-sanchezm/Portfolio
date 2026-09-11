import type { Project } from "../types";
import { assetUrl } from "../lib/assets";

export const projects: Project[] = [
  {
    id: "synergy-hub",
    title: "Synergy Hub ERM Platform",
    subtitle: "Internal operating system for the ICAI Rocket Team.",
    category: "Web App",
    year: "2025",
    featured: true,
    cover: assetUrl("projects/synergy-hub/cover.png"),
    logo: assetUrl("logos/icai-rocket-team.png"),
    description:
      "The ICAI Rocket Team was managing objectives, sponsor contacts, budgets and documents across chats, Drive folders and spreadsheets. I designed and built Synergy Hub to bring those workflows into one application.",
    summary: "A shared workspace for objectives, sponsors, budgets and team documents.",
    problem:
      "As the team grew, every department developed its own documents, workflows and communication channels. Information was difficult to find and managers had no shared view of current work.",
    solution:
      "A web platform for documentation, internal notes, objectives and milestones, financial tracking, sponsor relationships, organisation charts and marketing activity.",
    role: "Product structure, interface design, front-end architecture and feature implementation.",
    impact:
      "The platform gives departments one shared place to organise their work and gives team leaders a clearer overview of progress.",
    learned:
      "The difficult part was not adding features; it was deciding what a volunteer team could realistically keep updated and maintain.",
    tools: ["React", "TypeScript", "Web App", "UI/UX"],
    tags: ["ERM", "Operations", "Finance", "Sponsors", "Marketing"],
    links: [],
    documents: [],
    media: [
      {
        type: "image",
        src: assetUrl("projects/synergy-hub/screenshot-1.png"),
        caption: "Strategy and digital presence dashboard",
      },
    ],
  },
  {
    id: "icai-rocket-website",
    title: "ICAI Rocket Team Website",
    subtitle: "Public website for a university aerospace team.",
    category: "Web / Aerospace",
    year: "2025",
    featured: true,
    cover: assetUrl("projects/icai-rocket-website/cover.png"),
    logo: assetUrl("logos/icai-rocket-team.png"),
    description:
      "I designed and developed the ICAI Rocket Team's public website to explain its projects, departments, recruitment and sponsorship opportunities to students and industry partners.",
    summary: "A public site explaining the team's projects, departments, recruitment and sponsorship.",
    problem:
      "The team needed one public home that could represent its technical work clearly without assuming that every visitor already understood rocketry.",
    solution:
      "A bilingual, interactive website covering technical projects, team structure, sponsors, recruitment and contact information.",
    role: "Web design, branding and front-end development.",
    impact:
      "It became the team's main public point of contact for prospective members, sponsors and external collaborators.",
    learned:
      "How design and clear storytelling change how a technical team is perceived by sponsors and new members.",
    tools: ["Web Design", "Branding", "HTML/CSS"],
    tags: ["Web Design", "Branding", "Aerospace", "Student Team"],
    links: [],
    documents: [],
    media: [
      {
        type: "image",
        src: assetUrl("projects/icai-rocket-website/screenshot-1.png"),
        caption: "ICAI Rocket Team projects page",
      },
    ],
  },
  {
    id: "cervical-airbag",
    title: "Cervical Airbag for Vulnerable Users",
    subtitle: "Biomechanics & sensor-data analysis for cyclist safety.",
    category: "Engineering",
    year: "2025",
    featured: true,
    cover: assetUrl("projects/cervical-airbag/cover.png"),
    description:
      "At MOBIOS, the crash-testing and biomechanics laboratory at Comillas ICAI, I analysed high-frequency crash-test data for EVIX's helmet-integrated cervical airbag prototype.",
    summary: "Python-based crash-test signal analysis for EVIX's helmet-integrated cervical airbag.",
    problem:
      "The prototype must recognise a crash and deploy around a cyclist's neck in milliseconds. Comparing tests is difficult when sensor signals are noisy, misaligned or contain anomalies.",
    solution:
      "I wrote Python scripts for CFC filtering, cross-correlation based time alignment, anomaly detection and optional signal repair, then visualised results across test conditions.",
    role: "Signal processing and crash-test analysis using Python, NumPy, SciPy, Matplotlib and Excel for manual verification.",
    impact:
      "The work supported my engineering final project and was presented at the IRCOBI 2025 biomechanics conference.",
    learned:
      "Real experimental signals rarely arrive ready for analysis. Cleaning, aligning and checking them manually was as important as the final plots.",
    tools: ["Python", "NumPy", "SciPy", "Matplotlib", "Signal Processing"],
    tags: ["Biomechanics", "Crash Testing", "Safety", "Mobility"],
    links: [],
    documents: [
      {
        title: "Technical report",
        file: assetUrl("documents/cervical-airbag-report.pdf"),
      },
    ],
    media: [
      {
        type: "image",
        src: assetUrl("projects/cervical-airbag/test-1.png"),
        caption: "Cervical airbag simulation",
      },
    ],
  },
  {
    id: "space-launcher",
    title: "Space Launcher Service Web",
    subtitle: "Concept web platform for a launch service.",
    category: "Web / Aerospace",
    year: "2024",
    featured: false,
    cover: assetUrl("projects/space-launcher/cover.png"),
    description:
      "This began as a small exercise to learn HTML, CSS and JavaScript with support from AI tools. I used a fictional launch-service comparison site as the subject and kept expanding it as my web skills improved.",
    summary: "A launch-service comparison site built while learning HTML, CSS and JavaScript with AI support.",
    problem:
      "I wanted a project concrete enough to practise layout, responsive styling and browser interactions rather than learning each technique in isolation.",
    solution:
      "A work-in-progress site where users can compare launch options, read about mission profiles and explore the idea of reserving future launches.",
    role: "Concept, design and front-end build.",
    impact: "It became my first substantial web project and the starting point for the more complete sites and applications that followed.",
    learned: "There is still a lot to learn. Keeping that visible makes this project useful as a record of progression rather than pretending it was a finished business.",
    tools: ["Web Design", "UI/UX"],
    tags: ["Aerospace", "Web", "Concept"],
    links: [],
    documents: [],
    media: [
      {
        type: "image",
        src: assetUrl("projects/space-launcher/shot-1.png"),
        caption: "Launch-service search interface",
      },
    ],
  },
  {
    id: "carbon-capture",
    title: "Carbon Capture Plant",
    subtitle: "Process engineering design study.",
    category: "Engineering",
    year: "2024",
    featured: false,
    cover: assetUrl("projects/carbon-capture/cover.png"),
    description:
      "For a Repsol university clean-energy competition, my team proposed a carbon-capture plant near Barajas, Madrid, with routes for using captured carbon in jet fuel, concrete and plastics.",
    summary: "A carbon-capture plant proposal linking process design with jet fuel, concrete and plastics.",
    problem:
      "The competition asked Spanish university teams to propose practical responses to decarbonisation across industry, mobility, cities, circular economy and the energy transition.",
    solution:
      "We developed the plant concept, selected its location and studied how the process and its by-products could connect to nearby demand.",
    role: "Process design and analysis.",
    impact: "The final report connected process engineering, location strategy and potential markets for captured-carbon products.",
    tools: ["Process Engineering", "Chemical Engineering", "Analysis"],
    tags: ["Sustainability", "Process Design", "Energy"],
    links: [],
    documents: [
      {
        title: "Design report",
        file: assetUrl("documents/carbon-capture-report.pdf"),
      },
    ],
    media: [],
  },
  {
    id: "line-following-car",
    title: "Line-Following Car",
    subtitle: "Autonomous control & embedded systems.",
    category: "Robotics",
    year: "2025",
    featured: false,
    cover: assetUrl("projects/line-following-car/cover.png"),
    description:
      "In a Boston University engineering-design course, my team built an autonomous car that could carry 250 g, follow a line and stop 10 cm before an obstacle.",
    summary: "An autonomous car that carried 250 g, followed a line and stopped before obstacles.",
    problem:
      "The car had to combine reliable line detection, obstacle avoidance and a useful payload in a small, easily assembled chassis.",
    solution:
      "We designed the chassis and mounts in Onshape, printed them in PLA, and used an Arduino with infrared and ultrasonic sensors to control the motors. LEDs and a speaker communicated the vehicle's state.",
    role: "Collaborative CAD, prototyping, electronics, Arduino programming and testing.",
    impact: "We demonstrated the working prototype in a formal presentation to faculty and classmates.",
    learned: "Building the whole system exposed the trade-offs between sensor placement, weight distribution, accessibility and reliable control.",
    tools: ["Onshape", "Arduino", "3D Printing", "Control Systems", "Electronics"],
    tags: ["Robotics", "Automation", "Control"],
    links: [],
    documents: [],
    media: [],
  },
  {
    id: "drone-v1",
    title: "Drone V1",
    subtitle: "First custom drone build.",
    category: "Robotics",
    year: "2023",
    featured: false,
    cover: assetUrl("projects/drone-v1/cover.png"),
    description:
      "A self-directed first drone build for learning basic electronics, motor control and packaging, designed around a parts budget of less than $30.",
    summary: "A first custom drone build exploring electronics, lift and 3D-printed packaging under $30.",
    problem:
      "The aim was to see how far I could get without previous drone-building experience while keeping cost, component weight and available space under tight control.",
    solution:
      "I designed and 3D-printed the main structure, sourced the electronics and modelled the expected weight and lift before assembly.",
    role: "Mechanical assembly, electronics and configuration.",
    impact: "A hands-on platform for learning aerial robotics from the ground up.",
    learned: "The first calculations suggested roughly 150 g of theoretical lift and around 60 g of payload at hover. A future V2 concept explores tilting rotors, with the expected weight penalty made explicit.",
    tools: ["Electronics", "3D Printing", "Flight Control"],
    tags: ["Drones", "Robotics", "Hardware"],
    links: [],
    documents: [],
    media: [],
  },
];

export const projectCategories: string[] = [
  "All",
  "Web App",
  "Web / Aerospace",
  "Engineering",
  "Robotics",
];
