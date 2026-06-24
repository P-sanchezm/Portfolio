# Project images

Each project has its own folder matching the project `id` in
`src/data/projects.ts`. Add a `cover.png` (shown on the card, ~16:10) and any
gallery screenshots.

```
projects/
  synergy-hub/
    cover.png
    screenshot-1.png
    screenshot-2.png
  icai-rocket-website/
    cover.png
    screenshot-1.png
  cervical-airbag/
    cover.png
  space-launcher/
    cover.png
  carbon-capture/
    cover.png
  line-following-car/
    cover.png
  drone-v1/
    render.png
    electronics.png
```

Missing images fall back to a generated gradient placeholder, so the layout
never breaks before you've added real screenshots. Use compressed PNG/WebP and
keep covers around 1200–1600px wide.
