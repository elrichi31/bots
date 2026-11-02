# Grok Bot conversation styling

The reference is the installed Grok Bot renderer's code, extracted from
`/Applications/Grok Bot.app/Contents/Resources/app.asar` on 2026-11-02.
The comparison uses `dist/renderer/assets/index-Dh7EWA8t.css`,
`index.eager-app-D1juOWZp.js` and `index.eager-common-DbK3Oi_r.js`.

## Design direction

A quiet conversation pane, compact typography, softly rounded message surfaces
and a restrained composer, with navigation and context kept at the edges.
The workspace hierarchy is navigation → conversation → composer → optional
context panel. Existing model selectors, tools, approvals, attachments, calls,
queues, search and group routing retain their current components and handlers.

Motion is limited to short row hover tints, composer focus and multiline radius
changes; the existing reduced-motion preference disables these transitions.

## Measured reference values

| Reference symbol | Value | Integration |
| --- | --- | --- |
| `--conversation-text-font-size` | 14px | Shared bubble text in Simple and Advanced modes |
| `--conversation-line-height` | 22px | Message text and desktop composer |
| `--sand-transcript-prose-block-padding` | 7px | Plain message bubbles |
| `--sand-transcript-prose-bubble-radius` | 18px | Shared message shape |
| `--conversation-bubble-max-width` | 640px | Default message cap |
| `--conversation-opposed-inset` | Responsive, 0–20% | Opposite-edge breathing room with a 32px minimum |
| `titleIslandHeight` | 40px | Conversation identity control |
| `--sand-agent-item-radius` | 12px | Expanded sidebar rows |
| Sidebar `expandedWidth` | 280px | Existing Simple sidebar default |
| Info pane default width | 320px | Existing details pane |
| Sand Dark `pane` primitive | `#161616` | Midnight conversation pane |
| Sand Light `pane` primitive | `#ffffff` | Daylight conversation pane |

The default reading column is adapted to 864px. Saved Wide/Full chat widths,
sidebar resizing, other skins, code/table overflow, RTL text, compact phone
composition and touch input remain independently configurable. Touch editors
retain their existing 16px input size.

These are style adaptations onto the fork's own components. No Grok account,
transcript synchronization or remote API was introduced.

## Verification

149 focused regression tests passed across chat rendering and actions,
conversation segmentation, tools, shared chats, composer modes, navigation
and the details panel. The skin contrast checker reports no new regressions
against its existing baselines. Validation is performed at code and DOM level.
