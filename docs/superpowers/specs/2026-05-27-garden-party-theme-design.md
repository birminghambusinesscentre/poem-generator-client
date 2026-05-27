# Birmingham Garden Party Theme — Design

## Goal

Add a new selectable poem-generator theme inspired by the garden/courtyard party reference image (white peaked tent with bunting, brick building, lush garden, lounge chairs on the lawn). Follow the same authoring pattern as the existing `doors-open-bell` theme: AI-generated background and decoration PNGs, a custom poem-text background color, and (if needed) a small CSS class for text readability against a bright background.

## Theme entry

| Field | Value |
|---|---|
| `id` | `birmingham-garden-party` |
| `name` | `Birmingham Garden Party` |
| `imagePath` | `/background_images/garden_party_bg.png` |
| `textColor` | `text-white garden-party-outline` |
| `imageDecoration1` | `/decorations/garden_party_emblem.png` (top wreath/badge) |
| `imageDecorationsOnTop.center` | `/decorations/garden_party_tent.png` (white tent + bunting) |
| `imageDecorationsOnTop.left` | `/decorations/garden_party_flowers.png` (floral bouquet) |
| `imageDecorationsOnTop.right` | `/decorations/garden_party_lounge.png` (wooden lounge chair) |
| `leftLeft` | `/decorations/garden_party_bunting.png` (pennant string) |
| `rightRight` | `/decorations/garden_party_vines.png` (hanging vines) |

## Poem prompt direction

Generic garden party — NO mention of Birmingham Business Centre, no venue name. Warm summer-evening vibe, themes of community, sunlit gardens, bunting and tents, laughter on the lawn, golden hour, blooming flowers, friends gathering. The prompt should instruct that even if the photo doesn't show the party directly, the poem should interpret it through the lens of a warm outdoor garden celebration.

## Color palette

- Poem text background: `rgba(34, 70, 42, 0.88)` (deep garden green)
- Border: `3px solid #E8D8A8` (warm cream)
- Shadow: `0 0 0 2px rgba(34,70,42,0.88), 0 12px 30px rgba(34,70,42,0.35)`

## Text-outline CSS class

New `.garden-party-outline` rule in `styles/globals.css`, mirroring `.doors-open-outline`: dark green-brown text shadow so white headings stay readable against the bright outdoor background. Same drop-shadow filter on `#bir_logo`.

## AI image generation plan (Korpi AI)

All decoration images: transparent PNG, square aspect, soft painterly illustration style consistent with existing decorations.

1. `garden_party_bg.png` — landscape background, soft painterly garden-party scene with golden-hour light, white tent + bunting in distance, blurred enough that foreground figures remain readable
2. `garden_party_tent.png` — white peaked tent with multicolor bunting flags, transparent
3. `garden_party_flowers.png` — bouquet/cluster of summer garden flowers, transparent
4. `garden_party_lounge.png` — wooden lounge chair with cushion (or picnic spread), transparent
5. `garden_party_bunting.png` — vertical string of pennant/triangular bunting flags, transparent
6. `garden_party_vines.png` — trailing garden vines with small blooms, transparent
7. `garden_party_emblem.png` — decorative "Garden Party" wreath/badge top decoration, transparent

## Files touched

- `config/themes.ts` — append new theme entry
- `styles/globals.css` — add `.garden-party-outline` rule
- `public/background_images/garden_party_bg.png` — new
- `public/decorations/garden_party_*.png` — 6 new files

No changes to `app/page.tsx` are required: the existing rendering already handles `imageDecoration1`, `imageDecorationsOnTop.{center,left,right}`, `leftLeft`, `rightRight`, and `textColor` for any theme. The Doors-Open-specific `id === "doors-open-bell"` branch in `page.tsx` (center-decoration sizing) does not need to fire for this theme — the default 160×152 sizing is fine.
