import { profile } from "./profile";
import type { LinkRef } from "../types";

/** Primary social / contact links used by the navbar, contact section and footer. */
export const socialLinks: LinkRef[] = [
  { label: "LinkedIn", url: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", url: profile.github, icon: "github" },
  { label: "Email", url: `mailto:${profile.email}`, icon: "mail" },
  { label: "Download CV", url: profile.cv, icon: "download" },
];

/** Navbar section anchors (in scroll order). */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
