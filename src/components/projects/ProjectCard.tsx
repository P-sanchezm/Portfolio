import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { clsx } from "clsx";
import type { Project } from "../../types";
import { GlassCard } from "../ui/GlassCard";
import { LogoBadge } from "../ui/LogoBadge";
import { Tag } from "../ui/Tag";
import { Icon } from "../ui/icons";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { ProjectCover } from "./ProjectCover";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  variant?: "featured" | "compact";
}

export function ProjectCard({
  project,
  onOpen,
  variant = "compact",
}: ProjectCardProps) {
  const featured = variant === "featured";
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const tiltRef = useRef({ px: 0, py: 0 });
  const reduced = useReducedMotion();

  // Subtle 3D tilt toward the cursor (featured cards only). The rect is cached
  // on enter and the transform is written inside a single rAF per frame, so the
  // mousemove handler never forces a synchronous layout (getBoundingClientRect)
  // and never writes more than once per frame — no layout thrash on hover.
  const handleEnter = () => {
    if (!featured || reduced) return;
    rectRef.current = cardRef.current?.getBoundingClientRect() ?? null;
  };
  const handleMove = (e: React.MouseEvent) => {
    if (!featured || reduced) return;
    const r = rectRef.current;
    if (!r) return;
    tiltRef.current = {
      px: (e.clientX - r.left) / r.width - 0.5,
      py: (e.clientY - r.top) / r.height - 0.5,
    };
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = cardRef.current;
      if (!el) return;
      const { px, py } = tiltRef.current;
      el.style.transform = `perspective(900px) rotateX(${py * -4}deg) rotateY(${px * 5}deg) translateY(-6px)`;
    });
  };
  const handleLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const el = cardRef.current;
    if (el) el.style.transform = "";
  };

  const open = () => onOpen(project);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  const primaryLink = project.links?.[0];

  return (
    <GlassCard
      ref={cardRef}
      interactive
      data-card
      role="button"
      tabIndex={0}
      aria-label={`Open case study: ${project.title}`}
      onClick={open}
      onKeyDown={onKey}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx(
        "reveal-init group flex cursor-pointer flex-col overflow-hidden",
        featured && "sm:min-h-full"
      )}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectCover
          src={project.cover}
          title={project.title}
          className="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main/85 via-bg-main/10 to-transparent" />

        {project.logo && (
          <div className="absolute left-4 top-4">
            <LogoBadge src={project.logo} name={project.title} size={44} />
          </div>
        )}

        <div className="absolute right-4 top-4 flex items-center gap-2">
          <Tag accent>{project.category}</Tag>
        </div>

        {project.featured && (
          <span className="absolute bottom-3 left-4 inline-flex items-center gap-1 rounded-full bg-accent-gold/15 px-2.5 py-1 text-[0.7rem] font-medium text-accent-gold backdrop-blur">
            <Star className="size-3 fill-current" />
            Featured
          </span>
        )}

        {project.year && (
          <span className="absolute bottom-3 right-4 font-mono text-xs text-text-muted">
            {project.year}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={clsx(
              "font-display font-semibold leading-tight text-text-main",
              featured ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            {project.title}
          </h3>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
        </div>

        <p
          className={clsx(
            "text-sm leading-relaxed text-text-muted",
            featured ? "line-clamp-3" : "line-clamp-2"
          )}
        >
          {featured ? project.description : project.subtitle ?? project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {(project.tags ?? []).slice(0, featured ? 5 : 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1">
          <span className="text-sm font-medium text-accent-green">
            Case study
          </span>
          {primaryLink && primaryLink.url !== "#" && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-main"
            >
              <Icon name={primaryLink.icon ?? "external"} className="size-4" />
              {primaryLink.label}
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
