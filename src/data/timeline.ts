import type { TimelineEntry } from "../types";
import { assetUrl } from "../lib/assets";

export const timeline: TimelineEntry[] = [
  {
    id: "smu",
    type: "education",
    organization: "Singapore Management University",
    title: "Final semester abroad — Master's degree",
    location: "Singapore",
    start: "2027",
    end: "2027",
    logo: assetUrl("logos/smu.png"),
    description:
      "Next: the planned final semester of my master's degree in Singapore, focused on business, innovation and a new perspective on Asia.",
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
    logo: assetUrl("logos/boston-university.png"),
    description:
      "A full academic year abroad, including a collaborative engineering-design course where my team built and tested an autonomous line-following car.",
    tags: ["Engineering Design", "International Experience"],
    links: [{ label: "University", url: "https://www.bu.edu", icon: "external" }],
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
    logo: assetUrl("logos/icai-icade.png"),
    description:
      "A dual degree combining industrial engineering with business administration, strategy and entrepreneurship.",
    tags: ["Engineering", "Business", "Strategy"],
    links: [{ label: "University", url: "https://www.comillas.edu", icon: "external" }],
    documents: [],
  },
];
