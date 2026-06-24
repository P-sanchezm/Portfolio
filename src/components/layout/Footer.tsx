import { socialLinks } from "../../data/links";
import { profile } from "../../data/profile";
import { Icon } from "../ui/icons";

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <a
            href="#home"
            className="font-display text-lg font-bold text-gradient"
          >
            Pablo Sánchez
          </a>
          <p className="mt-2 max-w-md text-sm text-text-muted">
            Designed and coded by Pablo Sánchez. Built with React, Vite,
            Tailwind CSS and Anime.js.
          </p>
          <p className="mt-1 text-sm text-text-faint">{profile.location}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={link.label}
              className="glass-soft flex size-11 items-center justify-center rounded-xl text-text-muted transition-colors hover:text-accent-green"
            >
              {link.icon && <Icon name={link.icon} className="size-5" aria-hidden />}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-glass-border/60 py-4 text-center text-xs text-text-faint">
        © {"2026"} Pablo Sánchez · All rights reserved.
      </div>
    </footer>
  );
}
