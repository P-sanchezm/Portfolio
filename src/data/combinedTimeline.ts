import { manualTimeline } from "./timeline";
import { importedTimeline } from "./importedTimeline";
import type { TimelineEntry } from "../types";

/**
 * The full timeline shown on the site: manual entries first, then any
 * entries imported from a LinkedIn data export. Duplicate ids from the
 * import are dropped in favour of the manual version.
 */
const seen = new Set(manualTimeline.map((e) => e.id));

export const timeline: TimelineEntry[] = [
  ...manualTimeline,
  ...importedTimeline.filter((e) => !seen.has(e.id)),
];
