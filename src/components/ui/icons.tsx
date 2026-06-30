import {
  Rocket,
  Briefcase,
  Wrench,
  Globe,
  Shield,
  Lightbulb,
  Activity,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  Layers,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconName } from "../../types";

/** Maps the string keys used in data files to Lucide icon components. */
const registry: Record<IconName, ComponentType<LucideProps>> = {
  rocket: Rocket,
  briefcase: Briefcase,
  wrench: Wrench,
  globe: Globe,
  shield: Shield,
  lightbulb: Lightbulb,
  activity: Activity,
  mapPin: MapPin,
  external: ExternalLink,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
  fileText: FileText,
  layers: Layers,
  sparkles: Sparkles,
};

interface IconProps extends LucideProps {
  name: IconName;
}

/** Renders a Lucide icon by its registry key. Falls back to Sparkles. */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp {...props} />;
}
