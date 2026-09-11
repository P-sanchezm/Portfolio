import { useState } from "react";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

const orderedProjects = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useStaggeredCards<HTMLDivElement>(55);

  return (
    <Section id="projects">
      <SectionHeader
        index="01"
        eyebrow="Selected work"
        title="Built to answer a real question."
        description="Seven projects across software, data analysis, process engineering and physical prototypes. Open one to see the context, my contribution and the outcome."
      />

      <div ref={ref} className="mt-10 border-t border-glass-border">
        {orderedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={setSelected}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
