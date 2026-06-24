import { Download } from "lucide-react";
import { Icon } from "./icons";
import type { DocumentRef, LinkRef } from "../../types";

/** A glass card linking to a downloadable document (PDF, report, article). */
export function DocumentButton({ doc }: { doc: DocumentRef }) {
  return (
    <a
      href={doc.file}
      target="_blank"
      rel="noreferrer"
      className="glass-soft group flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:border-accent-green/40 hover:bg-white/[0.07]"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
        <Icon name="fileText" className="size-4" aria-hidden />
      </span>
      <span className="flex-1 text-sm font-medium text-text-main">
        {doc.title}
      </span>
      <Download className="size-4 text-text-muted transition-colors group-hover:text-accent-green" aria-hidden />
    </a>
  );
}

/** A glass card linking out to a URL (live demo, repo, article...). */
export function LinkButton({ link }: { link: LinkRef }) {
  return (
    <a
      href={link.url}
      target={link.url.startsWith("#") ? undefined : "_blank"}
      rel="noreferrer"
      className="glass-soft group flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:border-accent-green/40 hover:bg-white/[0.07]"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-text-main">
        <Icon name={link.icon ?? "external"} className="size-4" aria-hidden />
      </span>
      <span className="flex-1 text-sm font-medium text-text-main">
        {link.label}
      </span>
    </a>
  );
}
