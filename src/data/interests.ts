import type { AboutPillar, InterestGroup } from "../types";

/** The three "who I am" pillars shown in the About section. */
export const aboutPillars: AboutPillar[] = [
  {
    icon: "wrench",
    title: "Engineering",
    description:
      "I like understanding how systems behave, whether I am working with sensor data, electronics, software or a physical prototype.",
  },
  {
    icon: "briefcase",
    title: "Business",
    description:
      "My business studies help me ask what a technical idea is for, who it helps and whether it can work beyond the prototype.",
  },
  {
    icon: "rocket",
    title: "Software",
    description:
      "I use software to organise teams, analyse experiments and turn early ideas into tools that other people can actually try.",
  },
];

/** Interests rendered as a bento grid. `size` controls the grid span. */
export const interests: InterestGroup[] = [
  {
    id: "strategic-systems",
    title: "Defence & geopolitics",
    icon: "shield",
    description: "How nations, security and technology shape one another.",
    items: ["Defence", "Geopolitics", "Global security"],
    size: "lg",
    accent: "blue",
  },
  {
    id: "building-things",
    title: "Engineering & automation",
    icon: "wrench",
    description: "Designing, testing and automating useful systems.",
    items: ["Engineering", "Product design", "Automation"],
    size: "md",
    accent: "green",
  },
  {
    id: "entrepreneurship",
    title: "Starting companies",
    icon: "lightbulb",
    description: "Finding where an idea, a market and a practical solution meet.",
    items: ["Business creation", "Startups", "Strategy"],
    size: "md",
    accent: "gold",
  },
  {
    id: "human-perspective",
    title: "Travel & languages",
    icon: "globe",
    description: "Learning how people live, work and think in different places.",
    items: ["Culture", "Travel", "Languages"],
    size: "sm",
    accent: "teal",
  },
  {
    id: "performance",
    title: "Outside work",
    icon: "activity",
    description: "The activities that get me away from a screen.",
    items: ["Skiing", "Sailing", "Padel", "Tennis", "Running"],
    size: "md",
    accent: "green",
  },
];
