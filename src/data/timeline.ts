import type { TimelineEntry } from "../types";

/**
 * Manually-curated timeline entries (education, experience, accreditations).
 *
 * To add an entry, copy one of the objects below and edit the fields.
 * Logos go in /public/logos. If a logo is missing, a monogram badge is
 * generated automatically.
 *
 * LinkedIn-exported entries are merged in separately via
 * src/data/importedTimeline.ts — see tools/import-linkedin.bat.
 */
export const manualTimeline: TimelineEntry[] = [
  {
    id: "smu",
    type: "education",
    organization: "Singapore Management University",
    title: "Final semester abroad — Master's degree",
    location: "Singapore",
    start: "2027",
    end: "2027",
    logo: "/logos/smu.png",
    description:
      "Planned final semester of the master's degree in Singapore, focused on business, innovation and international exposure across Asia.",
    tags: ["Business", "Asia", "Innovation"],
    links: [{ label: "University", url: "https://www.smu.edu.sg", icon: "external" }],
    documents: [],
  },
  {
    id: "boston-university",
    type: "education",
    organization: "Boston University",
    title: "Academic year abroad",
    location: "Boston, USA",
    start: "2024",
    end: "2025",
    logo: "/logos/boston-university.png",
    description:
      "International academic experience focused on engineering design, technology and multidisciplinary collaboration.",
    tags: ["Engineering Design", "International Experience"],
    links: [{ label: "University", url: "https://www.bu.edu", icon: "external" }],
    documents: [],
  },
  {
    id: "icai-rocket-team",
    type: "experience",
    organization: "ICAI Rocket Team",
    title: "Member — Web & Operations",
    location: "Madrid, Spain",
    start: "2023",
    end: "Present",
    logo: "/logos/icai-rocket-team.png",
    description:
      "Built the team's public website and the Synergy Hub internal platform, coordinating communication, sponsors and operations for a university aerospace team.",
    tags: ["Aerospace", "Web", "Operations", "Sponsors"],
    links: [],
    documents: [],
  },
  {
    id: "icai-icade",
    type: "education",
    organization: "Universidad Pontificia Comillas ICAI–ICADE",
    title: "Industrial Engineering + Business Administration",
    location: "Madrid, Spain",
    start: "2021",
    end: "Present",
    logo: "/logos/icai-icade.png",
    description:
      "Dual academic background combining technical engineering with business management, strategy and entrepreneurship.",
    tags: ["Engineering", "Business", "Strategy"],
    links: [{ label: "University", url: "https://www.comillas.edu", icon: "external" }],
    documents: [],
  },
];
