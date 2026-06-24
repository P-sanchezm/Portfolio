/**
 * Pure helpers that turn a parsed LinkedIn CSV row into a portfolio
 * TimelineEntry. Kept side-effect free so they are easy to reason about.
 */
import { PLACEHOLDER_LOGO } from "./linkedin-field-mapping.js";

/** URL/id-safe slug. */
export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip combining diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/** Trim a value, returning a fallback when empty/undefined. */
export function clean(value, fallback = "") {
  if (value === undefined || value === null) return fallback;
  const trimmed = String(value).trim();
  return trimmed || fallback;
}

/** Returns the first non-empty value among the candidate keys. */
export function firstExisting(row, keys = [], fallback = "") {
  for (const key of keys) {
    const v = clean(row[key]);
    if (v) return v;
  }
  return fallback;
}

/** Extracts a 4-digit year if present, otherwise returns the cleaned input. */
export function yearOf(dateStr) {
  const v = clean(dateStr);
  const m = v.match(/\d{4}/);
  return m ? m[0] : v;
}

/** Builds an array of tags from configured tag fields (comma/`·` separated). */
function extractTags(row, tagFields = []) {
  const tags = [];
  for (const field of tagFields) {
    const raw = clean(row[field]);
    if (!raw) continue;
    raw
      .split(/[,;·|]/)
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => {
        if (!tags.includes(t)) tags.push(t);
      });
  }
  return tags.slice(0, 6);
}

/** Converts one CSV row into a TimelineEntry-shaped object. */
export function toEntry(row, config) {
  const organization = firstExisting(row, config.organization, "Unknown");
  const fallbackTitle =
    config.type === "accreditation" ? "Accreditation" : organization;
  const title = firstExisting(row, config.title, fallbackTitle);

  const start = yearOf(firstExisting(row, config.start));
  const end = yearOf(firstExisting(row, config.end));
  const location = firstExisting(row, config.location);
  const description = firstExisting(row, config.description);
  const tags = extractTags(row, config.tagFields);

  const links = [];
  if (config.url) {
    const url = firstExisting(row, config.url);
    if (url) links.push({ label: "View credential", url, icon: "external" });
  }

  const id =
    slugify([organization, title, start].filter(Boolean).join("-")) ||
    slugify(title) ||
    `entry-${slugify(config.type)}`;

  return {
    id,
    type: config.type,
    organization,
    title,
    logo: PLACEHOLDER_LOGO,
    location: location || undefined,
    start: start || "",
    end: end || undefined,
    description: description || undefined,
    tags,
    links,
    documents: [],
  };
}

/** Removes duplicate entries by id (first occurrence wins). */
export function dedupe(entries) {
  const seen = new Set();
  const out = [];
  for (const entry of entries) {
    if (seen.has(entry.id)) continue;
    seen.add(entry.id);
    out.push(entry);
  }
  return out;
}
