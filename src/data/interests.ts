import type { AboutPillar, InterestGroup } from "../types";

/** The three "who I am" pillars shown in the About section. */
export const aboutPillars: AboutPillar[] = [
  {
    icon: "compass",
    title: "Strategy",
    description:
      "I like stepping back from the immediate problem to understand the context, the trade-offs and where an idea can create lasting value.",
  },
  {
    icon: "wrench",
    title: "Engineering",
    description:
      "I like understanding how systems behave, whether I am working with sensor data, electronics, software or a physical prototype.",
  },
  {
    icon: "rocket",
    title: "Entrepreneurship",
    description:
      "I enjoy turning early ideas into useful products, testing assumptions and finding a practical path from prototype to real-world impact.",
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
