import { ArrowUp } from "lucide-react";
import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto grid w-full max-w-[92rem] gap-8 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:px-16 xl:px-20">
        <div>
          <a href="#home" className="font-display text-2xl text-text-main">
            Pablo Sánchez
          </a>
          <p className="mt-2 text-sm text-text-muted">Engineering, software & business.</p>
        </div>

        <div className="text-center font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-text-faint">
          <p>{profile.location}</p>
          <p className="mt-1">Designed and vibe coded by Pablo Sanchez</p>
        </div>

        <div className="flex items-start sm:justify-end">
          <a href="#home" className="inline-flex items-center gap-2 text-sm text-accent-gold hover:text-text-main">
            Back to top <ArrowUp className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-glass-border py-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-faint">
        © 2026 Pablo Sánchez · All rights reserved
      </div>
    </footer>
  );
}
