import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { clsx } from "clsx";
import { animate } from "../../animations/anime";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { navLinks, socialLinks } from "../../data/links";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { ScrollProgress } from "../ui/ScrollProgress";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const cvLink = socialLinks.find((l) => l.label === "Download CV");
  const linkedinLink = socialLinks.find((l) => l.label === "LinkedIn");

  // Entrance animation
  useEffect(() => {
    if (reduced || !navRef.current) return;
    animate(navRef.current, {
      opacity: [0, 1],
      translateY: [-22, 0],
      duration: 700,
      ease: "outExpo",
      delay: 150,
    });
  }, [reduced]);

  // Background opacity on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy for the active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-40 flex flex-col items-center px-4 pt-4 sm:pt-5"
        style={reduced ? undefined : { opacity: 0 }}
      >
        <nav
          className={clsx(
            "flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled
              ? "glass shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold"
            aria-label="Home"
          >
            <span className="flex size-9 items-center justify-center rounded-xl border border-glass-border bg-white/5 text-gradient">
              PS
            </span>
            <span className="hidden text-text-main sm:inline">
              {profile.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent-green"
                        : "text-text-muted hover:text-text-main"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-accent-green/15 ring-1 ring-accent-green/40 shadow-[0_0_18px_var(--green-glow)]" />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {linkedinLink && (
              <Button
                href={linkedinLink.url}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="sm"
                icon="linkedin"
                className="hidden sm:inline-flex"
              >
                LinkedIn
              </Button>
            )}
            {cvLink && (
              <Button
                href={cvLink.url}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                size="sm"
                icon="download"
                className="hidden sm:inline-flex"
              >
                CV
              </Button>
            )}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="glass-soft flex size-10 items-center justify-center rounded-xl text-text-main lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>

        <ScrollProgress />
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        active={active}
      />
    </>
  );
}
