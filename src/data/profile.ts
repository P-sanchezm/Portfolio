import type { Profile } from "../types";
import { getEmail } from "../lib/email";
import { assetUrl } from "../lib/assets";

export const profile: Profile = {
  name: "Pablo Sánchez",
  headline:
    "Engineering, software & business.",
  location: "Madrid · Boston · Singapore",
  current:
    "Industrial Engineering & Business Administration student at ICAI–ICADE.",
  bio: "Most of my projects begin with something that does not quite work: information spread across spreadsheets, a noisy sensor trace, or a prototype that needs another iteration. I enjoy getting close enough to the technical detail to build the thing, then stepping back to decide whether it is useful and how to explain it. I study Industrial Engineering and Business Administration at ICAI–ICADE, spent the 2024–25 academic year at Boston University, and plan to complete the final semester of my master's at Singapore Management University in 2027.",

  email: getEmail(),
  linkedin: "https://www.linkedin.com/in/pabsanchezm/",
  github: "https://github.com/P-sanchezm",

  photo: assetUrl("profile/pablo-photo.png"),
  locations: ["Madrid", "Boston", "Singapore"],
  stats: [
    { label: "Disciplines", value: "Engineering + Business" },
    { label: "Selected projects", value: "7" },
    { label: "Next chapter", value: "Singapore 2027" },
  ],
};
