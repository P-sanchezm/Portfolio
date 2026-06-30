import type { Project } from "../types";

/**
 * Project showcase content.
 *
 * - `cover` images live in /public/projects/<id>/cover.png
 * - `documents` (PDFs) live in /public/documents
 * - Replace placeholder links/text with the real ones when ready.
 *
 * `featured: true` projects appear as large cards at the top.
 * Every project also appears in the filterable gallery below.
 */
export const projects: Project[] = [
  {
    id: "synergy-hub",
    title: "Synergy Hub ERM Platform",
    subtitle: "Internal operating system for the ICAI Rocket Team.",
    category: "Web App",
    year: "2025",
    featured: true,
    cover: "/projects/synergy-hub/cover.png",
    logo: "/logos/icai-rocket-team.png",
    description:
      "A centralized ERM platform for documents, internal notes, objectives, finances, sponsors, marketing and team coordination.",
    problem:
      "The team's knowledge, finances and sponsor relationships were scattered across chats, drives and spreadsheets, making coordination slow and fragile as the team grew.",
    solution:
      "Designed and built a single web platform unifying documents, objectives, finance tracking, sponsor management and internal communication into one operating system.",
    role: "Product design, front-end architecture and feature implementation.",
    impact:
      "Gave the team a scalable backbone for operations and a clear single source of truth across departments.",
    learned:
      "How to translate messy organizational needs into structured software, and how to balance feature scope against what a volunteer team can actually maintain.",
    tools: ["React", "TypeScript", "Web App", "UI/UX"],
    tags: ["ERM", "Operations", "Finance", "Sponsors", "Marketing"],
    links: [{ label: "Open app", url: "#", icon: "external" }],
    documents: [],
    media: [
      { type: "image", src: "/projects/synergy-hub/screenshot-1.png", caption: "Operations dashboard" },
      { type: "image", src: "/projects/synergy-hub/screenshot-2.png", caption: "Sponsor & finance tracking" },
    ],
  },
  {
    id: "icai-rocket-website",
    title: "ICAI Rocket Team Website",
    subtitle: "Public website for a university aerospace team.",
    category: "Web / Aerospace",
    year: "2025",
    featured: true,
    cover: "/projects/icai-rocket-website/cover.png",
    logo: "/logos/icai-rocket-team.png",
    description:
      "Designed and developed the public website for the ICAI Rocket Team to communicate projects, achievements, recruitment and sponsorship opportunities.",
    problem:
      "The team needed a professional digital presence to represent its technical ambition and attract students, sponsors and collaborators.",
    solution:
      "Built a modern website with sections for technical projects, team structure, sponsors, recruitment and external communication.",
    role: "Web design, branding and front-end development.",
    impact:
      "Improved the team's visibility and created a scalable communication platform for future growth and sponsorship outreach.",
    learned:
      "How design and clear storytelling change how a technical team is perceived by sponsors and new members.",
    tools: ["Web Design", "Branding", "HTML/CSS"],
    tags: ["Web Design", "Branding", "Aerospace", "Student Team"],
    links: [{ label: "Visit website", url: "#", icon: "external" }],
    documents: [],
    media: [
      { type: "image", src: "/projects/icai-rocket-website/screenshot-1.png", caption: "Landing page" },
    ],
  },
  {
    id: "cervical-airbag",
    title: "Cervical Airbag for Vulnerable Users",
    subtitle: "Biomechanics & sensor-data analysis for cyclist safety.",
    category: "Engineering",
    year: "2025",
    featured: true,
    cover: "/projects/cervical-airbag/cover.png",
    description:
      "Sensor-data processing and crash-test analysis for a cervical airbag prototype designed to reduce whiplash and neck injuries in cyclists and other vulnerable road users.",
    problem:
      "Vulnerable road users suffer severe cervical injuries in collisions, and reliable trigger detection from noisy sensor data is hard.",
    solution:
      "Processed and analyzed crash-test sensor signals to characterize impact events and inform the airbag's deployment logic.",
    role: "Signal processing, data analysis and crash-test interpretation.",
    impact:
      "Produced a clearer understanding of impact signatures to support safer deployment decisions for the prototype.",
    learned:
      "How to work with real, noisy experimental data and turn raw signals into actionable engineering insight.",
    tools: ["Python", "Signal Processing", "Data Analysis"],
    tags: ["Biomechanics", "Crash Testing", "Safety", "Mobility"],
    links: [],
    documents: [
      { title: "Technical report", file: "/documents/cervical-airbag-report.pdf" },
    ],
    media: [],
  },
  {
    id: "space-launcher",
    title: "Space Launcher Service Web",
    subtitle: "Concept web platform for a launch service.",
    category: "Web / Aerospace",
    year: "2024",
    featured: false,
    cover: "/projects/space-launcher/cover.png",
    description:
      "A web platform concept presenting a space launcher service — mission profiles, payload options and customer-facing communication.",
    problem:
      "Launch services need to communicate complex technical offerings to non-expert customers clearly.",
    solution:
      "Designed a clean, technical web experience to present mission types, payloads and the value proposition of the service.",
    role: "Concept, design and front-end build.",
    impact: "A polished proof of concept for communicating an aerospace service offering.",
    tools: ["Web Design", "UI/UX"],
    tags: ["Aerospace", "Web", "Concept"],
    links: [{ label: "View concept", url: "#", icon: "external" }],
    documents: [],
    media: [],
  },
  {
    id: "carbon-capture",
    title: "Carbon Capture Plant",
    subtitle: "Process engineering design study.",
    category: "Engineering",
    year: "2024",
    featured: false,
    cover: "/projects/carbon-capture/cover.png",
    description:
      "Engineering design study for a carbon capture plant, covering the process, key equipment and the techno-economic considerations behind it.",
    problem:
      "Decarbonization needs viable capture processes that are technically sound and economically realistic.",
    solution:
      "Worked through the process design and sizing for a carbon capture plant and evaluated its feasibility.",
    role: "Process design and analysis.",
    impact: "A structured feasibility study connecting process engineering with sustainability goals.",
    tools: ["Process Engineering", "Chemical Engineering", "Analysis"],
    tags: ["Sustainability", "Process Design", "Energy"],
    links: [],
    documents: [
      { title: "Design report", file: "/documents/carbon-capture-report.pdf" },
    ],
    media: [],
  },
  {
    id: "line-following-car",
    title: "Line-Following Car",
    subtitle: "Autonomous control & embedded systems.",
    category: "Robotics",
    year: "2023",
    featured: false,
    cover: "/projects/line-following-car/cover.png",
    description:
      "An autonomous line-following car built from sensors, motors and a microcontroller, with control logic tuned to keep it on track.",
    problem:
      "Keeping a small autonomous vehicle reliably on a line requires good sensing and well-tuned control.",
    solution:
      "Integrated sensors and motor control on a microcontroller and tuned the control loop for stable line following.",
    role: "Electronics, embedded programming and control tuning.",
    impact: "A working autonomous prototype demonstrating closed-loop control fundamentals.",
    tools: ["Embedded", "C/C++", "Control Systems", "Electronics"],
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
    cover: "/projects/drone-v1/cover.png",
    description:
      "A first custom drone build covering the frame, electronics, motor configuration and flight setup.",
    problem:
      "Building a flyable drone from parts means getting frame, power, electronics and tuning to all work together.",
    solution:
      "Designed the frame layout, wired the electronics and configured the motors and flight controller for a first flight.",
    role: "Mechanical assembly, electronics and configuration.",
    impact: "A hands-on platform for learning aerial robotics from the ground up.",
    tools: ["Electronics", "3D Printing", "Flight Control"],
    tags: ["Drones", "Robotics", "Hardware"],
    links: [],
    documents: [],
    media: [
      { type: "image", src: "/projects/drone-v1/render.png", caption: "Frame layout" },
      { type: "image", src: "/projects/drone-v1/electronics.png", caption: "Electronics & motor configuration" },
    ],
  },
];

/** Category filters for the gallery (derived list kept explicit for ordering). */
export const projectCategories: string[] = [
  "All",
  "Web App",
  "Web / Aerospace",
  "Engineering",
  "Robotics",
];
