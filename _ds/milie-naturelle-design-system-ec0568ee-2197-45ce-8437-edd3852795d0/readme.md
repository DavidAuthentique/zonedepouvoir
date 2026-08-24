# Émilie Naturelle — Design System

> The brand of **Émilie Gendron — certified naturopath & health coach** (Québec,
> Canada). Holistic, plant-led wellness: naturopathy consultations, one-on-one
> coaching, and the online *Programme Cycles*. Warm, feminine, empowering and
> grounded in simplicity. This repository is the single source of truth for
> designing anything in the Émilie Naturelle voice.

---

## Sources

- **Live site:** [emilienaturelle.ca](https://emilienaturelle.ca) (Squarespace).
- **Brand palette:** taken verbatim from the site's Squarespace colour settings
  (screenshot supplied by the client) — see Visual Foundations below.
- **Logos** (`uploads/` → `assets/logo/`): the charcoal serif wordmark
  "Émilie Naturelle." and the "É." monogram favicon.
- **Imagery & copy** in the UI kit are pulled/paraphrased from the live site.

> ⚠️ **Font substitution flagged.** The wordmark's typeface was not supplied.
> Nearest free match — **Cormorant Garamond** (display) + **Jost** (UI/body).
> Send the real fonts and I'll swap them in `tokens/fonts.css`.

---

## Index / manifest

**Root** — `styles.css` (global entry, `@import`s only) · `readme.md` · `SKILL.md`

**`tokens/`** — `colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`

**`components/`** — React primitives → `_ds_bundle.js` (+ `components.css`)
- `core/` — Button, IconButton, Badge, Tag, Avatar, Card, Divider
- `forms/` — Field, Input, Textarea, Select, Checkbox, Switch
- `feedback/` — Alert · `navigation/` — Tabs

**`ui_kits/practice/`** — full recreation of the practitioner site (Accueil,
Consultation, Coaching, booking modal).

**`guidelines/`** — foundation specimen cards (Design System tab).

**`assets/logo/`** — wordmark (light/charcoal), monogram, favicons.

Using a component in card HTML:
```js
const { Button, Card } = window.MilieNaturelleDesignSystem_ec0568;
```

---

## CONTENT FUNDAMENTALS

The voice is **warm, encouraging and unhurried** — a knowledgeable guide who
empowers rather than prescribes. Wellness, not clinical.

- **Language.** French (Québec). Write to the reader in the informal **« tu »**
  ("retrouve ta vitalité", "prends rendez-vous", "ce que tu recevras"). Speak of
  the practice in the first person ("je", "mes piliers", "je t'accompagne").
- **Tone.** Soft, holistic, empowering. Themes of *simplicité*, *pouvoir
  personnel*, *vitalité*, reconnecting with nature and the feminine. Gentle, never
  pushy or hype-driven. Specific over grandiose.
- **Casing.** Sentence case for headlines and body. **Eyebrows, nav and button
  labels UPPERCASE** with wide tracking. French section labels feel like quiet
  overlines ("ACCOMPAGNEMENT", "MES PILIERS", "COMMENTAIRES").
- **Emoji & marks.** The brand **does use light emoji** — checkmarks (✓ ✅ ☑️) for
  inclusion lists, 🌿 for warmth, 🛡️ on the medical disclaimer. Keep them
  functional and sparse; in components prefer the clean check icon, reserve emoji
  for conversational touches (e.g. a confirmation message).
- **Compliance — important.** Émilie is **not a physician**. Copy must never
  diagnose, prescribe or claim to treat illness. Always frame analyses (HTMA,
  etc.) as *educational* and supportive of overall well-being, and keep the
  medical disclaimer present on relevant pages.
- **Examples**
  - Hero: *"Une approche simple, naturelle & puissante."*
  - Roles: *"Naturopathe certifiée · Coach santé"*
  - Section: *"Ce que tu recevras" · "Les fondations de la transformation"*
  - CTA: *"Prends rendez-vous" · "Réserver" · "Accéder au programme"*
  - Quote: *"Il n'y a rien de plus puissant que d'être soi-même — dans son corps, dans son esprit et dans son énergie."*

---

## VISUAL FOUNDATIONS

**Overall feeling.** Fresh, airy and calm. Lots of white/lemon space, soft green
accent panels, and a deep navy that anchors the page and carries the bold moments.

- **Color (verbatim from the brand).**
  - **White** `#FFFFFF` — purest ground.
  - **Pale lemon** `#FCFEE6` — the default warm light; used for soft sections.
  - **Pale green** `#E3F3CD` — soft accent panels (the brand's "green" theme).
  - **Deep navy** `#171D3A` — body text, dark sections, and the **primary**
    button colour.
  Greens deepen into `--sage-500 #7DAD47` for links and the secondary CTA; a
  **citron** scale (`--clay-*`, from the lemon) and a soft **mist** neutral round
  it out. Semantic colours stay muted. Nothing pure-black.
- **Type.** High-contrast serif (**Cormorant Garamond**) for headlines — large,
  tight, often with one *italic* word in green. Geometric sans (**Jost**) for
  body, UI and the wide-tracked uppercase eyebrows. Serif also carries prices and
  pull-quotes.
- **Spacing.** 4px base; sections breathe at `--space-9 (96px)`. Max width ~1320px.
- **Backgrounds.** Alternating bands: white/lemon → pale-green → navy. **No
  gradients, no textures.** The navy band is where the CYCLES programme and big
  quotes live (light text on navy).
- **Imagery.** Warm natural light — Émilie in greenery, botanical and lifestyle
  shots, HTMA/nutrition close-ups. Soft, sunlit, never cold or clinical. Rounded
  with `--radius-xl/lg`.
- **Corner radii.** Restrained — inputs/buttons `--radius-sm (4px)`, cards
  `--radius-lg (10px)`, media/feature bands `--radius-xl (16px)`, pills for chips,
  role tags, avatars and toggles.
- **Cards.** Hairline border on white, or a soft `--shadow-sm` when raised;
  interactive cards lift 2px with `--shadow-md`. Pillars/offers are bordered cards.
- **Shadows.** Soft, navy-tinted, low-elevation (5–10%). Elevation is suggested,
  never heavy.
- **Motion.** Gentle and brief — `--dur-base 240ms` with `--ease-soft`; the
  booking modal eases up with `--ease-out`. Fades and soft slides; **no bounces**,
  no loops. Respect `prefers-reduced-motion`.
- **Hover / press / focus.** Links → deeper green. Primary button → darker navy.
  Secondary → darker green. Outline/ghost → faint lemon fill. Press nudges down
  1px; chips/slots switch to a green-tinted fill + green border. Focus = 3px soft
  green ring.
- **Transparency & blur.** Only the sticky header (lemon + `backdrop-filter:
  blur`) and the booking-modal scrim (navy @ 42%). Otherwise opaque.

---

## ICONOGRAPHY

No icon set was supplied. The system uses **thin line icons in the Lucide style**
(1.5px stroke, round caps/joins, 24×24) — their light, even weight matches the
serif headlines and the calm, airy feel.

- **Substitution flagged:** icons are hand-rolled SVGs to Lucide's proportions
  (check, calendar, star, leaf, moon, shield, heart, Instagram, Facebook, arrow,
  close), kept in `ui_kits/practice/icons.jsx` as `window.ENIcons`. For
  production, install [Lucide](https://lucide.dev) and swap 1:1.
- **Emoji** appear in real brand copy (✓ ✅ 🌿 🛡️) — see Content Fundamentals.
  Use them sparingly and conversationally; prefer the check icon in structured UI.
- **The monogram** ("É.") anchors favicons, avatars and stamps
  (`assets/logo/favicon-mark.png`). The **CYCLES** mark (moon + botanicals) is the
  programme's emblem.

---

## Foundations at a glance

| | Token | Value |
|---|---|---|
| White ground | `--cream-50` | `#FFFFFF` |
| Lemon light | `--cream-100` | `#FCFEE6` |
| Green accent | `--sage-100` | `#E3F3CD` |
| Navy (primary/ink) | `--ink-800` | `#171D3A` |
| Link / 2° CTA | `--sage-500` | `#7DAD47` |
| Display | `--font-display` | Cormorant Garamond |
| Body/UI | `--font-sans` | Jost |
| Base unit | `--space-4` | 16px |
| Card radius | `--radius-lg` | 10px |
