import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { animate, stagger } from "../../animations/anime";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { navLinks, socialLinks } from "../../data/links";
import { Icon } from "../ui/icons";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: string;
}

/** Full-screen mobile navigation overlay with an Anime.js slide/fade-in. */
export function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const panel = panelRef.current;
    if (panel && !reduced) {
      const items = panel.querySelectorAll<HTMLElement>("[data-menu-item]");
      animate(panel, { opacity: [0, 1], duration: 240, ease: "outQuad" });
      animate(items, {
        opacity: [0, 1],
        translateY: [18, 0],
        delay: stagger(55),
        duration: 480,
        ease: "outExpo",
      });
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, reduced, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed inset-0 z-50 flex flex-col bg-bg-main/95 backdrop-blur-xl md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between px-5 py-5">
        <span className="font-display text-lg font-bold text-gradient">PS</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="glass-soft flex size-11 items-center justify-center rounded-xl text-text-main"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {navLinks.map((link) => {
          const id = link.href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              data-menu-item
              className={`font-display text-3xl font-semibold transition-colors ${
                isActive ? "text-gradient" : "text-text-main hover:text-accent-green"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <div
        className="flex flex-wrap gap-3 border-t border-glass-border px-6 py-6"
        data-menu-item
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            onClick={onClose}
            className="glass-soft flex items-center gap-2 rounded-full px-4 py-2 text-sm text-text-main"
          >
            {link.icon && <Icon name={link.icon} className="size-4" aria-hidden />}
            {link.label}
          </a>
        ))}
      </div>
    </div>,
    document.body
  );
}
