import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import { ProjectCover } from "./ProjectCover";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  return (
    <article data-card className="reveal-init border-b border-glass-border lg:h-64">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open case study: ${project.title}`}
        className="group grid h-full w-full grid-cols-[3.5rem_1fr] text-left sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1.05fr_0.72fr_1.35fr]"
      >
        <span className="border-r border-glass-border px-2 py-6 font-display text-4xl text-accent-gold sm:px-4 sm:text-5xl lg:py-8">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex min-h-0 flex-col justify-between overflow-hidden px-4 py-6 sm:px-6 lg:border-r lg:border-glass-border lg:py-8">
          <span>
            <span className="flex items-start justify-between gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-green">
                {project.category}
              </span>
              <ArrowUpRight className="size-10 shrink-0 text-text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-gold" />
            </span>
            <span className="mt-4 block font-display text-2xl font-medium leading-tight text-text-main sm:text-3xl">
              {project.title}
            </span>
            <span className="mt-3 block max-w-xl text-xs leading-[1.45] text-text-muted sm:text-sm">
              {project.summary ?? project.description}
            </span>
          </span>

          <span className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
            {(project.tools ?? []).slice(0, 3).map((tool) => (
              <span key={tool} className="font-mono text-[0.6rem] uppercase tracking-[0.06em] text-text-faint">
                {tool}
              </span>
            ))}
          </span>
        </span>

        <span className="hidden flex-col justify-between border-r border-glass-border p-6 lg:flex lg:py-8">
          <span className="font-mono text-xs text-text-faint">{project.year}</span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-accent-gold">
            Open case study ↗
          </span>
        </span>

        <span className="col-span-2 min-h-52 overflow-hidden border-t border-glass-border sm:min-h-64 lg:col-span-1 lg:min-h-0 lg:border-t-0">
          <ProjectCover
            src={project.cover}
            title={project.title}
            className="h-full min-h-52 transition duration-500 group-hover:scale-[1.02] group-hover:contrast-[1.03] sm:min-h-64 lg:min-h-0"
          />
        </span>
      </button>
    </article>
  );
}
