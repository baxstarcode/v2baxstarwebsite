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
