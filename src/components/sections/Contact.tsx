import { useState } from "react";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { profile } from "../../data/profile";
import { getCvRequestUrl } from "../../lib/email";
import { useAnimeReveal } from "../../animations/useAnimeReveal";

export function Contact() {
  const ref = useAnimeReveal<HTMLDivElement>({ selector: "[data-reveal]" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const inputClass =
    "w-full border-b border-glass-border bg-transparent px-0 py-3 text-base text-text-main placeholder:text-text-faint focus:border-accent-gold focus:outline-none";

  return (
    <Section id="contact">
      <div ref={ref}>
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Have a useful problem to discuss?"
          description="I am happy to talk about engineering, software, product ideas or the business decisions around them."
        />

        <div className="mt-8 grid gap-8 border-t border-glass-border pt-6 sm:mt-10 sm:gap-10 sm:pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal className="reveal-init">
            <div className="flex min-h-[12rem] items-start border-b border-glass-border pb-4 lg:min-h-[13rem]">
              <p className="max-w-xl font-display text-3xl leading-[1.15] text-text-main sm:text-4xl">
                “The impediment to action advances action. What stands in the way becomes the way.”
                <span className="mt-5 block font-sans text-xs uppercase tracking-[0.12em] text-text-faint">
                  — Marcus Aurelius
                </span>
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={copyEmail}
                className="contact-link flex w-full items-center justify-between border-b border-glass-border py-3 text-left text-sm text-text-muted hover:text-text-main"
              >
                <span className="relative z-10">{copied ? "Email copied" : profile.email}</span>
                <Copy className="relative z-10 size-4" />
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link flex items-center justify-between border-b border-glass-border py-3 text-sm text-text-muted hover:text-text-main"
              >
                <span className="relative z-10">LinkedIn</span>
                <ArrowUpRight className="relative z-10 size-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link flex items-center justify-between border-b border-glass-border py-3 text-sm text-text-muted hover:text-text-main"
              >
                <span className="relative z-10">GitHub</span>
                <ArrowUpRight className="relative z-10 size-4" />
              </a>
            </div>
          </div>

          <form data-reveal onSubmit={handleSubmit} className="reveal-init" aria-label="Contact Pablo">
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="font-mono text-xs uppercase tracking-[0.1em] text-text-faint">
                Your name
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className={inputClass}
                />
              </label>
              <label className="font-mono text-xs uppercase tracking-[0.1em] text-text-faint">
                Your email
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className={inputClass}
                />
              </label>
            </div>
            <label className="mt-6 block font-mono text-xs uppercase tracking-[0.1em] text-text-faint">
              Message
              <textarea
                required
                rows={3}
                placeholder="What would you like to discuss?"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className={`${inputClass} resize-none`}
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 border border-accent-gold bg-accent-gold px-5 py-3 text-sm font-medium text-bg-main transition-colors hover:bg-transparent hover:text-accent-gold"
            >
              Open email draft <ArrowUpRight className="size-4" />
            </button>
            <p className="mt-3 text-xs text-text-faint">Opens your email client. No form data is stored.</p>

            <div className="mt-6 border-t border-glass-border pt-5">
              <a
                href={getCvRequestUrl()}
                className="inline-flex items-center gap-2 border border-accent-gold bg-accent-gold px-5 py-3 text-sm font-medium text-bg-main transition-colors hover:bg-transparent hover:text-accent-gold"
              >
                Request my CV <Mail className="size-4" />
              </a>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
                The CV is intentionally shared by request, so I know who is asking and can reply personally.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
