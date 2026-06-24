/**
 * Shared content types for the portfolio.
 * Everything the site renders is described here so the data files
 * in src/data stay strongly typed and easy to edit.
 */

/** A named link, e.g. "Live demo" -> https://... */
export interface LinkRef {
  label: string;
  url: string;
  /** Optional icon key from the icon registry (see components/ui/icons.ts). */
  icon?: IconName;
}

/** A downloadable document (PDF, report, article...). */
export interface DocumentRef {
  title: string;
  /** Path under /public, e.g. "/documents/report.pdf". */
  file: string;
}

/** An image or video shown in a project gallery. */
export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

export type TimelineType = "education" | "experience" | "accreditation";

export interface TimelineEntry {
  id: string;
  type: TimelineType;
  organization: string;
  title: string;
  /** Path to a logo under /public/logos. Falls back to a monogram if missing. */
  logo?: string;
  location?: string;
  start: string;
  end?: string;
  description?: string;
  tags?: string[];
  links?: LinkRef[];
  documents?: DocumentRef[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  year?: string;
  featured?: boolean;
  /** Cover image under /public/projects/<id>/cover.png */
  cover?: string;
  logo?: string;
  description: string;
  problem?: string;
  solution?: string;
  role?: string;
  impact?: string;
  learned?: string;
  tools?: string[];
  tags?: string[];
  links?: LinkRef[];
  documents?: DocumentRef[];
  media?: MediaItem[];
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  current: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  /** Path to the profile photo under /public/profile. */
  photo: string;
  /** Short location chips shown on the hero card. */
  locations: string[];
  /** Small headline stats shown on the hero card. */
  stats: { label: string; value: string }[];
}

export interface InterestGroup {
  id: string;
  title: string;
  icon: IconName;
  description?: string;
  items: string[];
  /** Bento sizing hint. */
  size?: "lg" | "md" | "sm";
  /** Accent color key used for the glow. */
  accent?: "green" | "blue" | "gold" | "teal";
}

export interface AboutPillar {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Keys accepted by the icon registry. Keep this in sync with
 * components/ui/icons.ts. Using a string union keeps data files
 * type-safe without importing icon components into data.
 */
export type IconName =
  | "rocket"
  | "cpu"
  | "briefcase"
  | "wrench"
  | "globe"
  | "shield"
  | "lightbulb"
  | "activity"
  | "graduation"
  | "award"
  | "building"
  | "mapPin"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "download"
  | "fileText"
  | "play"
  | "code"
  | "layers"
  | "gauge"
  | "compass"
  | "users"
  | "sparkles";
