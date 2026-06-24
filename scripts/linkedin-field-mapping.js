/**
 * Column mappings for the official "Get a copy of your data" LinkedIn export.
 *
 * LinkedIn occasionally renames columns, so each field lists several
 * candidate header names — the importer uses the first one that exists.
 *
 * Each config maps one exported CSV to a portfolio timeline `type`.
 */
export const FILE_CONFIGS = [
  {
    file: "Education.csv",
    type: "education",
    organization: ["School Name", "School"],
    title: ["Degree Name", "Degree", "Field Of Study", "Notes"],
    start: ["Start Date", "Started On"],
    end: ["End Date", "Finished On"],
    location: [],
    description: ["Notes", "Activities"],
    tagFields: ["Field Of Study", "Activities"],
  },
  {
    file: "Positions.csv",
    type: "experience",
    organization: ["Company Name", "Company"],
    title: ["Title", "Position"],
    start: ["Started On", "Start Date"],
    end: ["Finished On", "End Date"],
    location: ["Location"],
    description: ["Description"],
    tagFields: [],
  },
  {
    file: "Certifications.csv",
    type: "accreditation",
    organization: ["Authority", "Issuer", "Company Name"],
    title: ["Name", "Title"],
    start: ["Started On", "Start Date"],
    end: ["Finished On", "End Date"],
    location: [],
    description: [],
    tagFields: [],
    url: ["Url", "URL"],
  },
  {
    file: "Honors.csv",
    type: "accreditation",
    organization: ["Issuer", "Authority"],
    title: ["Title", "Name"],
    start: ["Issued On", "Date", "Started On"],
    end: [],
    location: [],
    description: ["Description"],
    tagFields: [],
  },
];

/** Optional file used to enrich tags (not turned into timeline entries). */
export const SKILLS_FILE = "Skills.csv";
export const SKILL_KEYS = ["Name", "Skill"];

/** Logo used for every imported entry (replace manually if you like). */
export const PLACEHOLDER_LOGO = "/logos/placeholder-logo.svg";
