import { useState } from "react";
import { clsx } from "clsx";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";
import { projects, projectCategories } from "../../data/projects";
import type { Project } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

// Featured projects first, then the rest — preserving their order in the data
// file (Array.prototype.sort is stable).
const orderedProjects = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

/** Keyed by category so the reveal animation replays when the filter changes. */
function ProjectGrid({
  items,
  onOpen,
}: {
  items: Project[];
  onOpen: (p: Project) => void;
}) {
  const ref = useStaggeredCards<HTMLDivElement>(80);
  return (
    <div ref={ref} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.length === 0 ? (
        <p className="text-text-muted">No projects in this category yet.</p>
      ) : (
        items.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={onOpen}
            variant={p.featured ? "featured" : "compact"}
          />
        ))
      )}
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [category, setCategory] = useState("All");

  const items =
    category === "All"
      ? orderedProjects
      : orderedProjects.filter((p) => p.category === category);

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        eyebrow="Projects"
        title="Things I've built, tested, broken and improved."
        description="A mix of aerospace, web platforms, engineering and robotics. Click any project for the full case study."
      />

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              category === cat
                ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
                : "border-glass-border text-text-muted hover:text-text-main"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProjectGrid key={category} items={items} onOpen={setSelected} />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
