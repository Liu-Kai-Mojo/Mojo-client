# Mojo Client — Responsive/Deployment Repair

Implemented:
- Viewport-centered Box Office Mojo logo using fixed `left: 50%` + `translateX(-50%)`.
- Fluid logo sizing with `clamp()`/`min()` and safe viewport width.
- Height/orientation-aware logo placement without coupling to the login card.
- Fixed published login/register asset paths that caused 404/MIME errors.
- Cloudflare `_redirects` and `_headers` are copied into `dist` by the build.
- Client footer navigation now uses inline SVG icons instead of text glyphs.
- Existing client Customer Service page/functionality is preserved.
- Existing background, form, colors, typography, and authentication flow were not intentionally redesigned.

Build command: `npm run build`
Publish directory: `dist`
