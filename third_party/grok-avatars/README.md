# Grok Bot avatars

Extracted locally from `/Applications/Grok Bot.app/Contents/Resources/app.asar`.
`extraction.json` records the installed version and original module hashes.
These materials originate from Grok Bot; the repository's Apache-2.0 license
does not grant a license to this third-party material.

`engine.mjs` bundles the original geometry, SVG renderer and animation controller
from `index.eager-common-DbK3Oi_r.js`. Its exports have readable adapter names;
the rendering and animation algorithms are unchanged. Unused top-level
initializers were marked pure and unrelated standalone expressions were omitted
so the bundle excludes React, locale payloads and application services. The import helper was
bundled with esbuild, and unrelated unused exports were removed. The original
application was not modified.

`engine.d.mts` describes the subset used by the React adapter.
`src/components/GrokAvatar.tsx` connects it to the app's shared visibility-aware
animation clock, reduced motion, gaze, colors and action cues.

The 26 selectable ids use a `grok-` prefix to preserve existing avatars. Both
profile editors and onboarding offer the Grok collection as the standard catalog,
and the shared bot-body schema accepts its ids for profile persistence.
Retired legacy ids remain accepted for backups and stored profiles; the avatar
renderer resolves them to equivalent Grok shapes without rewriting saved data.
New bots and profile reset use `grok-blob`. Explicit Grok bodies keep their appearance
when automatic Halloween costumes are enabled.

Static exports live in `public/grok-avatars`: `svg/<color>/<shape>.svg` and
`png/<color>/<shape>.png` contain all 26 forms in the original 11 colors;
`icons/` contains the 104 unmodified menu-bar PNGs. The React renderer uses
the bot's existing identity color and face-color preference.

## Validation

- 72 focused tests passed across rendering, animation lifecycle, reduced motion,
  profile selection, shared schemas and profile parsing.
- TypeScript checks passed for both the client and server; Vite production build passed.
- The bundled renderer matched the original installed module byte-for-byte in
  generated SVG for all 1,378 shape/state combinations checked.
- All 26 ids were saved and read back through the real profile endpoint of a
  disposable `control-omb launch` fixture; the final choice was present in
  its on-disk `bots.json`. The fixture was stopped afterward.
