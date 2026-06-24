# LinkedIn import folder

Put your **manually exported** LinkedIn CSV files in this folder, then run the
importer to generate timeline entries automatically.

> ⚠️ This project never logs into or scrapes LinkedIn. Automated scraping of
> LinkedIn is against their User Agreement. This flow only reads the official
> data export that LinkedIn gives **you**.

## How to export your data from LinkedIn

1. Go to **Settings & Privacy → Data privacy → Get a copy of your data**.
2. Choose the data you want (Positions, Education, Certifications, Honors,
   Skills) or "the works".
3. Request the archive, wait for the email, and download the `.zip`.
4. Extract it and copy the CSV files into **this folder**:
   `public/imports/linkedin/`

Recognized (all optional — missing ones are skipped):

- `Positions.csv` → Experience
- `Education.csv` → Education
- `Certifications.csv` → Accreditations
- `Honors.csv` → Accreditations
- `Skills.csv` → (reserved for tag enrichment)

## Run the importer

From the project root, any of these work:

```bash
npm run import:linkedin
```

or double-click **`tools/import-linkedin.bat`** (Windows),
or run **`tools/import-linkedin.ps1`** in PowerShell.

This regenerates `src/data/importedTimeline.ts`, which is merged with your
manual entries from `src/data/timeline.ts` automatically.

## After importing

- Imported entries use `/logos/placeholder-logo.png`. Replace the `logo` paths
  with real logos in `src/data/importedTimeline.ts` if you want (note: the file
  is overwritten on the next import).
- Anything you want to keep permanently, copy into `src/data/timeline.ts`.

> The CSV files you drop here are personal data — they are git-ignored by
> default so you don't accidentally commit them.
