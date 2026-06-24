import { useState } from "react";
import { Section } from "../layout/Section";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { Icon } from "../ui/icons";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/links";
import { useAnimeReveal } from "../../animations/useAnimeReveal";

export function Contact() {
  const ref = useAnimeReveal<HTMLDivElement>({ selector: "[data-reveal]" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "someone"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-main placeholder:text-text-faint focus:border-accent-green/50 focus:outline-none";

  return (
    <Section id="contact">
      <div ref={ref}>
        <GlassCard data-reveal className="reveal-init overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: CTA */}
            <div>
              <span className="mb-4 flex items-center gap-3 text-sm">
                <span className="font-mono text-accent-green">05</span>
                <span className="h-px w-8 bg-gradient-to-r from-accent-green/60 to-transparent" />
                <span className="uppercase tracking-[0.2em] text-text-muted">
                  Contact
                </span>
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Interested in projects, internships or{" "}
                <span className="text-gradient">ambitious ideas?</span>
              </h2>
              <p className="mt-4 max-w-md text-text-muted">
                I'm always happy to talk about engineering, business, building
                things, or anything in between. Let's connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.url}
                    target={
                      link.url.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel="noreferrer"
                    variant={link.label === "LinkedIn" ? "primary" : "ghost"}
                    size="sm"
                    icon={link.icon}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  aria-label="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Your message"
                aria-label="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass + " resize-none"}
              />
              <Button type="submit" variant="primary" iconRight="mail">
                Send message
              </Button>
              <p className="flex items-center gap-1.5 text-xs text-text-faint">
                <Icon name="mail" className="size-3.5" />
                Opens your email client — no data is stored.
              </p>
            </form>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
