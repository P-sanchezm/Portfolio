import { profile } from "./profile";
import type { LinkRef } from "../types";
import { getCvRequestUrl } from "../lib/email";

/** Primary social / contact links used by the navbar, contact section and footer. */
export const socialLinks: LinkRef[] = [
  { label: "LinkedIn", url: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", url: profile.github, icon: "github" },
  { label: "Email", url: `mailto:${profile.email}`, icon: "mail" },
  { label: "Request CV", url: getCvRequestUrl(), icon: "mail" },
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
