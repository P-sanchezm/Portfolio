import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { clsx } from "clsx";
import { profile } from "../../data/profile";
import { navLinks, socialLinks } from "../../data/links";
import { animate } from "../../animations/anime";
import { useReducedMotion } from "../../animations/useReducedMotion";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "../ui/ScrollProgress";

const visibleLinks = navLinks.filter((link) => link.href !== "#home" && link.href !== "#contact");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const cvRequestLink = socialLinks.find((link) => link.label === "Request CV");
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (reduced || !navRef.current) return;
    animate(navRef.current, {
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 500,
      ease: "outQuad",
    });
  }, [reduced]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={clsx(
          "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200",
          scrolled
            ? "border-glass-border bg-bg-main/95"
            : "border-transparent bg-bg-main/80"
        )}
        style={reduced ? undefined : { opacity: 0 }}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[92rem] items-center justify-between px-5 sm:px-10 lg:px-16 xl:px-20">
          <a href="#home" className="font-display text-xl font-medium text-text-main" aria-label="Home">
            {profile.name}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {visibleLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "border-b py-1 text-sm transition-colors",
                      isActive
                        ? "border-accent-gold text-text-main"
                        : "border-transparent text-text-muted hover:text-text-main"
                    )}
                  >
                    {link.label === "Profile" ? "About" : link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            {cvRequestLink && (
              <a
                href={cvRequestLink.url}
                className="hidden text-sm font-medium text-accent-gold transition-colors hover:text-text-main sm:block"
              >
                Request CV
              </a>
            )}
            <a
              href="#contact"
              className="hidden text-sm text-text-muted transition-colors hover:text-text-main sm:block"
            >
              Contact
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex size-10 items-center justify-center border border-glass-border text-text-main lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-10 lg:px-16 xl:px-20">
          <ScrollProgress />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} active={active} />
    </>
  );
}
