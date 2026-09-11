import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { animate, stagger } from "../../animations/anime";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { navLinks, socialLinks } from "../../data/links";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: string;
}

export function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);

    const panel = panelRef.current;
    if (panel && !reduced) {
      const items = panel.querySelectorAll<HTMLElement>("[data-menu-item]");
      animate(panel, { opacity: [0, 1], duration: 180, ease: "outQuad" });
      animate(items, {
        opacity: [0, 1],
        translateY: [12, 0],
        delay: stagger(45),
        duration: 360,
        ease: "outExpo",
      });
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      returnFocusRef.current?.focus();
    };
  }, [open, reduced, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed inset-0 z-50 flex flex-col bg-bg-main lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex h-16 items-center justify-between border-b border-glass-border px-5 sm:px-8">
        <span className="font-display text-xl">Pablo Sánchez</span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close menu"
          className="flex size-10 items-center justify-center border border-glass-border text-text-main"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-6 sm:px-10">
        {navLinks.map((link, index) => {
          const isActive = active === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              data-menu-item
              className="grid grid-cols-[2.5rem_1fr] items-baseline border-b border-glass-border py-4"
            >
              <span className="font-mono text-xs text-accent-gold">0{index + 1}</span>
              <span className={`font-display text-4xl ${isActive ? "text-accent-green" : "text-text-main"}`}>
                {link.label === "Profile" ? "About" : link.label}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-glass-border px-6 py-6 sm:px-10" data-menu-item>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            onClick={onClose}
            className="text-sm text-text-muted hover:text-text-main"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>,
    document.body
  );
}
