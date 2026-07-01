import type { Profile } from "../types";
import { getEmail } from "../lib/email";
import { assetUrl } from "../lib/assets";

export const profile: Profile = {
  name: "Pablo Sánchez",
  headline:
    "Engineering + Business student building at the intersection of technology, strategy and entrepreneurship.",
  location: "Madrid · Boston · Singapore",
  current:
    "Industrial Engineering & Business Administration student at ICAI–ICADE.",
  bio: "I am an Industrial Engineering and Business Administration student from Spain, currently studying at Universidad Pontificia Comillas ICAI–ICADE. I spent one academic year at Boston University and will complete the final semester of my master's at Singapore Management University. My work usually lives between engineering, business, technology and entrepreneurship: building tools, analyzing systems, designing technical projects, and trying to turn messy ideas into useful products.",

  email: getEmail(),
  linkedin: "https://www.linkedin.com/in/pabsanchezm/",
  github: "https://github.com/P-sanchezm",

  photo: assetUrl("profile/pablo-photo.png"),
  locations: ["Madrid", "Boston", "Singapore"],
  stats: [
    { label: "Disciplines", value: "Engineering + Business" },
    { label: "Projects shipped", value: "7+" },
    { label: "Focus", value: "Aerospace · Tech · Strategy" },
  ],
};
