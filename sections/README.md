# Wix HTML Section Workflow

This repository is configured so GitHub becomes the main source for reusable Wix HTML sections.

## Workflow

1. Create or edit section HTML files inside:

sections/

Examples:
- sections/hero.html
- sections/testimonials.html
- sections/footer.html

2. Run:

npm run build:wix

3. The build script generates:
- dist/wix-sections.md
- dist/wix-sections-manifest.json

4. Paste the generated HTML blocks into Wix Embed HTML elements.

## Purpose

This setup keeps your reusable HTML sections organized in GitHub while making them easy to deploy into Wix.

Recommended structure:
- GitHub = master copy
- Claude = content/design generation
- Codex = maintenance and automation
- Wix = publishing layer

## Future Upgrades

Possible future additions:
- GitHub Actions auto-build
- Zapier notifications when sections change
- Wix API sync if supported
- Automated pull request workflow
- Visual change previews

## Verified customer phone — October 6, 2026

Baxstar Fishing: **218-325-6857** (`tel:+12183256857`). Brady confirmed the 701 number is retired. The owner-controlled boat page at https://boat.baxstarfishing.com/ and the Site / HTML Domain Authority both confirm the Fishing number.

Baxstar Outdoors/pontoon rentals intentionally retain **218-325-9846**. Do not replace that separate line with the Fishing number.

`sections/12-seasonal-cta.html` is the canonical seasonal CTA. The root `12-seasonal-cta.html` is retained as a compatibility copy; keep it byte-identical when this section changes. Other root HTML files have not yet been migrated into the bundle. Run `npm run build:wix` for the paste-ready CTA; a GitHub commit alone does not publish Wix embeds.
