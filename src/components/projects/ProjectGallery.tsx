import { useState } from "react";
import { clsx } from "clsx";
import type { MediaItem } from "../../types";

interface ProjectGalleryProps {
  media: MediaItem[];
}

/** Responsive image/video grid used inside the project modal. */
export function ProjectGallery({ media }: ProjectGalleryProps) {
  if (!media.length) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {media.map((item, i) => (
        <GalleryItem key={`${item.src}-${i}`} item={item} />
      ))}
    </div>
  );
}

function GalleryItem({ item }: { item: MediaItem }) {
  const [errored, setErrored] = useState(false);

  return (
    <figure className="glass-soft overflow-hidden rounded-2xl">
      <div className="aspect-[16/10] overflow-hidden bg-bg-secondary">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : errored ? (
          <div
            className={clsx(
              "bg-grid flex h-full w-full items-center justify-center",
              "bg-gradient-to-br from-bg-tertiary to-bg-main"
            )}
          >
            <span className="px-4 text-center text-xs text-text-faint">
              {item.caption ?? "Image coming soon"}
            </span>
          </div>
        ) : (
          <img
            src={item.src}
            alt={item.caption ?? ""}
            loading="lazy"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {item.caption && (
        <figcaption className="px-4 py-3 text-sm text-text-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
