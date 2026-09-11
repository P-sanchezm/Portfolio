import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "../../types";
import { animate } from "../../animations/anime";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { Tag } from "../ui/Tag";
import { LogoBadge } from "../ui/LogoBadge";
import { Icon } from "../ui/icons";
import { DocumentButton, LinkButton } from "../ui/DocumentButton";
import { ProjectCover } from "./ProjectCover";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** A labelled block of case-study prose. */
function Block({ label, children }: { label: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <div>
      <h4 className="mb-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-gold">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-text-muted">{children}</p>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const closeRef = useRef(onClose);
  const closingRef = useRef(false);

  const requestClose = () => {
    if (closingRef.current) return;
    if (reduced || !panelRef.current || !overlayRef.current) {
      onClose();
      return;
    }
    closingRef.current = true;
    animate(panelRef.current, {
      opacity: [1, 0],
      translateY: [0, 24],
      scale: [1, 0.985],
      duration: 220,
      ease: "inQuad",
    });
    animate(overlayRef.current, {
      opacity: [1, 0],
      duration: 240,
      ease: "inQuad",
      onComplete: () => onClose(),
    });
  };
  closeRef.current = requestClose;

  useEffect(() => {
    if (!project) return;
    closingRef.current = false;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    // Entrance
    if (!reduced && overlayRef.current && panelRef.current) {
      animate(overlayRef.current, { opacity: [0, 1], duration: 200, ease: "outQuad" });
      animate(panelRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.98, 1],
        duration: 400,
        ease: "outExpo",
      });
    }

    // Focus the close button for keyboard users
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      // Simple focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), video[controls]'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      returnFocusRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  if (!project) return null;

  const externalLinks = (project.links ?? []).filter((l) => l.url !== "#");
  const galleryMedia = (project.media ?? []).filter((item) => item.src !== project.cover);

  return createPortal(
    <div
      ref={overlayRef}
      onClick={requestClose}
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/45 sm:items-center sm:p-6"
      style={reduced ? undefined : { opacity: 0 }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-col overflow-hidden border border-glass-border bg-bg-main sm:max-h-[92vh]"
        style={reduced ? undefined : { opacity: 0 }}
      >
        {/* Sticky close button */}
        <button
          ref={closeBtnRef}
          onClick={requestClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center border border-glass-border bg-bg-main text-text-main transition-colors hover:border-accent-gold hover:text-accent-gold"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Cover */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <ProjectCover src={project.cover} title={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-6">
              {project.logo && (
                <LogoBadge src={project.logo} name={project.title} size={56} />
              )}
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Tag accent>{project.category}</Tag>
                  {project.year && (
                    <span className="font-mono text-xs text-text-muted">
                      {project.year}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight text-text-main sm:text-3xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Body */}
            <div className="flex flex-col gap-8 p-6 sm:p-10">
            {project.subtitle && (
              <p className="font-display text-2xl text-text-main">{project.subtitle}</p>
            )}

            <p className="text-base leading-relaxed text-text-muted">
              {project.description}
            </p>

            <div className="grid gap-x-10 gap-y-8 border-t border-glass-border pt-8 sm:grid-cols-2">
              <Block label="Problem">{project.problem}</Block>
              <Block label="What I built">{project.solution}</Block>
              <Block label="My role">{project.role}</Block>
              <Block label="Impact">{project.impact}</Block>
            </div>

            {project.tools && project.tools.length > 0 && (
              <div>
                <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-gold">
                  Tools used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            )}

            {galleryMedia.length > 0 && (
              <div>
                <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-gold">
                  Gallery
                </h4>
                <ProjectGallery media={galleryMedia} />
              </div>
            )}

            {(externalLinks.length > 0 ||
              (project.documents && project.documents.length > 0)) && (
              <div className="grid gap-3 sm:grid-cols-2">
                {externalLinks.map((link) => (
                  <LinkButton key={link.label} link={link} />
                ))}
                {(project.documents ?? []).map((doc) => (
                  <DocumentButton key={doc.title} doc={doc} />
                ))}
              </div>
            )}

            {/* Tags footer */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 border-t border-glass-border pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs text-text-faint"
                  >
                    <Icon name="sparkles" className="size-3" aria-hidden />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
