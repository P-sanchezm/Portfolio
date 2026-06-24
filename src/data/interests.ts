import type { AboutPillar, InterestGroup } from "../types";

/** The three "who I am" pillars shown in the About section. */
export const aboutPillars: AboutPillar[] = [
  {
    icon: "wrench",
    title: "Engineering mindset",
    description:
      "I break systems down, analyze how they behave, and design technical solutions — from sensor data to physical prototypes.",
  },
  {
    icon: "briefcase",
    title: "Business strategy",
    description:
      "A dual background in management and strategy lets me connect technical work to value, markets and real decisions.",
  },
  {
    icon: "rocket",
    title: "Builder mentality",
    description:
      "I like turning messy ideas into useful products — shipping websites, platforms and prototypes that people actually use.",
  },
];

/** Interests rendered as a bento grid. `size` controls the grid span. */
export const interests: InterestGroup[] = [
  {
    id: "strategic-systems",
    title: "Strategic Systems",
    icon: "shield",
    description: "How power, security and technology shape the world.",
    items: ["Defence", "Geopolitics", "Global security"],
    size: "lg",
    accent: "blue",
  },
  {
    id: "building-things",
    title: "Building Things",
    icon: "wrench",
    description: "Designing and automating things that work.",
    items: ["Engineering", "Product design", "Automation"],
    size: "md",
    accent: "green",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    icon: "lightbulb",
    description: "Turning ideas into ventures.",
    items: ["Business creation", "Startups", "Strategy"],
    size: "md",
    accent: "gold",
  },
  {
    id: "human-perspective",
    title: "Human Perspective",
    icon: "globe",
    description: "Seeing the world through people and places.",
    items: ["Culture", "Travel", "Languages"],
    size: "sm",
    accent: "teal",
  },
  {
    id: "performance",
    title: "Performance",
    icon: "activity",
    description: "Staying sharp on and off the field.",
    items: ["Sports", "Skiing", "Sailing", "Padel", "Running"],
    size: "lg",
    accent: "green",
  },
];
