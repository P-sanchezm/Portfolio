import {
  Rocket,
  Cpu,
  Briefcase,
  Wrench,
  Globe,
  Shield,
  Lightbulb,
  Activity,
  GraduationCap,
  Award,
  Building2,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
  Play,
  Code2,
  Layers,
  Gauge,
  Compass,
  Users,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconName } from "../../types";

/** Maps the string keys used in data files to Lucide icon components. */
const registry: Record<IconName, ComponentType<LucideProps>> = {
  rocket: Rocket,
  cpu: Cpu,
  briefcase: Briefcase,
  wrench: Wrench,
  globe: Globe,
  shield: Shield,
  lightbulb: Lightbulb,
  activity: Activity,
  graduation: GraduationCap,
  award: Award,
  building: Building2,
  mapPin: MapPin,
  external: ExternalLink,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
  fileText: FileText,
  play: Play,
  code: Code2,
  layers: Layers,
  gauge: Gauge,
  compass: Compass,
  users: Users,
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
