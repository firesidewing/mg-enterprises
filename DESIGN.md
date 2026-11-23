---
name: "MG Enterprises"
description: "Limestone & Brass Advisory — warm architectural limestone, midnight-navy structural ink, and satin brushed brass for Canadian enterprise mobility lifecycle solutions."
colors:
  navy: "#0B1D35"
  navy-surface: "#132A4A"
  navy-elevated: "#1B385F"
  brass: "#B9862D"
  brass-deep: "#785212"
  brass-light: "#DFB768"
  brass-pale: "#F1D79B"
  stone: "#F0EDE6"
  stone-subtle: "#EAE6DD"
  stone-well: "#E4DFD4"
  stone-deep: "#D6D0C2"
  alabaster: "#F7F5F0"
  ink-muted: "#465362"
  ink-on-dark: "#F4F1EA"
  muted-on-dark: "#B6C3D4"
typography:
  display:
    fontFamily: "\"Bricolage Grotesque Variable\", \"Bricolage Grotesque\", system-ui, sans-serif"
    fontSize: "3.875rem"
    fontWeight: 600
    lineHeight: 1.01
    letterSpacing: "-0.03em"
  metric:
    fontFamily: "\"Bricolage Grotesque Variable\", \"Bricolage Grotesque\", system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontFeature: "\"tnum\""
  headline:
    fontFamily: "\"Bricolage Grotesque Variable\", \"Bricolage Grotesque\", system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "\"Bricolage Grotesque Variable\", \"Bricolage Grotesque\", system-ui, sans-serif"
    fontSize: "1.4375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "\"Hanken Grotesk Variable\", \"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "\"Hanken Grotesk Variable\", \"Hanken Grotesk\", system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  meter: "2px"
  control: "3px"
  field: "4px"
  panel: "6px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "80px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.stone}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.navy-surface}"
    textColor: "{colors.stone}"
  button-on-dark:
    backgroundColor: "{colors.brass-light}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-on-dark-hover:
    backgroundColor: "{colors.brass-pale}"
    textColor: "{colors.navy}"
  button-secondary:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.alabaster}"
    textColor: "{colors.navy}"
  pill-selector:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  pill-selector-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.stone}"
  panel-stone:
    backgroundColor: "{colors.stone-well}"
    textColor: "{colors.navy}"
    rounded: "{rounded.panel}"
    padding: "28px"
  panel-navy:
    backgroundColor: "{colors.navy-surface}"
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.panel}"
    padding: "28px"
  input-field:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.navy}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  input-field-focus:
    backgroundColor: "{colors.alabaster}"
    textColor: "{colors.navy}"
  nav-header:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.navy}"
    height: "80px"
---

# Design System: MG Enterprises

## Overview

**Creative North Star: "Limestone & Brass Advisory"**

MG Enterprises speaks in the material language of an architectural ledger rather than a disposable IT broker template. Warm honed limestone surfaces carry deep midnight-navy ink and full-bleed dark horizons, accented sparingly with satin brushed brass drawn directly from the binding interlocking MG monogram. Every interactive figure—recovery estimates, effective upgrade outlays, and contract terms—anchors the visual hierarchy in crisp tabular numerals without ornamental chrome.

Spatial separation relies on calibrated tonal stepping and quiet internal hairlines rather than heavy four-sided card borders, drop shadows, or busy spreadsheet grids. The interlocking diagonal join of the MG monogram recurs at two disciplined scales: crisp inline 55° brass slash dividers in lead statements and low-opacity parallel-line architectural watermarks recessed into the corners of major bands.

This system explicitly rejects sterile blue-white split-hero templates, rounded pill buttons, gimmicky badge stamps, and marketing eyebrow kickers above section headlines. It honors full WCAG AA contrast across light and dark grounds and respects reduced-motion preferences across all animated counters and SVG transitions.

**Key Characteristics:**
- Honed warm limestone canvas (`#F0EDE6`) stepping through matte stone wells (`#EAE6DD`, `#E4DFD4`) against deep midnight-navy anchor bands (`#0B1D35`).
- Dual-temperature brushed brass accents (`#785212` for accessible text on light, `#B9862D` for rules and fills, `#DFB768` / `#F1D79B` on dark navy).
- Expressive geometric display type (`Bricolage Grotesque`) paired with disciplined grotesque body copy (`Hanken Grotesk`) and tabular financial figures.
- Borderless flat-by-default surfaces partitioned by tonal contrast and quiet `1px` internal hairlines, with milled corners never exceeding `6px`.
- Echoed 55° MG monogram slash geometry in inline hairline dividers and recessed corner watermarks.

## Colors

A warm mineral neutral foundation anchored by authoritative midnight navy and punctuated by calibrated, contrast-tuned metallic brass.

### Primary
- **Midnight Navy** (`#0B1D35`): Primary structural ink on all limestone grounds, primary button fill, active toggle fill, browser selection ground, and full-bleed dark anchor bands (Spectralink continuity horizon, lifecycle curve section, partner wedge, footer).
- **Deep Slate Navy** (`#132A4A`): Primary hover fill on navy actions and elevated dark-surface container well (lifecycle curve canvas, stage readout panel, dark-band sub-cards).
- **Elevated Navy** (`#1B385F`): Hover state for interactive dark-surface cards and dark tab controls.

### Secondary
- **Brushed Brass** (`#B9862D`): Structural accent for `1.5px` text underlines, `2px` active navigation bars, capital-offset progress fills, inline slash divider gradients, text caret, and light-ground active assessment CTA.
- **Burnished Brass Deep** (`#785212`): High-contrast accessible brass for text on limestone grounds (currency codes, offset percentages, negative buyback ledger amounts, step indices, required asterisks, light-surface focus rings).
- **Satin Brass Light** (`#DFB768`): High-contrast primary accent on midnight-navy surfaces (on-dark primary buttons, active year tabs, curve stroke and active nodes, dark-band headings/checkmarks, dark-surface focus rings, slider thumb bezel).
- **Pale Brass Highlight** (`#F1D79B`): Hover fill for satin brass buttons and hover text for brass links on midnight-navy surfaces.

### Neutral
- **Honed Limestone** (`#F0EDE6`): Base document canvas, sticky header background (`95%` opacity), nested control panels inside matte wells, light-surface button text on navy, and standard form input fill.
- **Subtle Limestone** (`#EAE6DD`): Alternating full-width section band ground used to separate adjacent light-mode sections without divider bars.
- **Matte Stone Well** (`#E4DFD4`): Primary container ground for interactive consoles (buyback calculator, assessment intake form, partner offset modeler, featured buyback panel, closing CTA container) and scrollbar track.
- **Carved Stone Divider** (`#D6D0C2`): Quiet `1px` internal horizontal/vertical ledger dividers, scrolled header bottom border (`80%` opacity), and progress bar empty track.
- **Warm Alabaster** (`#F7F5F0`): Hover surface for light secondary buttons/pills and active focus fill for borderless limestone form inputs.
- **Slate Steel Muted** (`#465362`): Secondary body copy, operational uppercase labels, helper captions, inactive navigation links, and placeholder text on light limestone surfaces.
- **Warm Chalk Ink** (`#F4F1EA`): Primary headline, wordmark, and high-emphasis body copy on midnight-navy surfaces.
- **Cool Slate On-Dark** (`#B6C3D4`): Secondary paragraphs, footer links, disclaimers, and inactive axis labels on midnight-navy surfaces.

### Named Rules
**The Two-Temperature Brass Rule.** On light limestone surfaces, interactive text, labels, and negative-offset figures use Burnished Brass Deep (`#785212`) for WCAG AA contrast, reserving Brushed Brass (`#B9862D`) for hairlines, underlines, and fills; on midnight-navy surfaces, switch strictly to Satin Brass Light (`#DFB768`) and Pale Brass (`#F1D79B`).

**The Tonal Well Rule.** Light containers step through warm mineral lightness (`#F0EDE6` → `#EAE6DD` → `#E4DFD4`, lifting to `#F7F5F0` only on hover or input focus) rather than placing pure white cards on cool gray backgrounds.

**The Anchor Band Rule.** Deep Midnight Navy (`#0B1D35`) appears exclusively as primary ink, solid controls, or full-bleed architectural anchor bands—never as translucent blue gradients or mid-tone corporate washes.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback: Bricolage Grotesque, system-ui, sans-serif)
**Body Font:** Hanken Grotesk Variable (fallback: Hanken Grotesk, system-ui, sans-serif)

**Character:** `Bricolage Grotesque` brings subtle architectural tension and carved authority to headlines and monumental dollar figures, while `Hanken Grotesk` keeps long-form advisory copy, operational labels, and multi-column ledgers calm, compact, and unhurried.

### Hierarchy
- **Display** (`600` weight, `38px` mobile → `54px` sm → `62px` xl / `3.875rem`, `1.01` line-height, `-0.03em` tracking, `text-wrap: balance`): Hero `<h1>` statements across landing and interior pages (`50px–56px` on secondary pages).
- **Monumental Metric** (`700` weight, `50px` mobile → `62px` sm → `72px` xl / `4.5rem`, `0.9` line-height, `-0.035em` tracking, `tabular-nums`): Primary buyback recovery dollar readout and `36px` (`2.25rem`) effective-cost / retention percentage anchors.
- **Headline** (`600` weight, `30px` mobile → `36px–44px` desktop / `2.5rem` base, `1.08` line-height, `-0.025em` tracking, `text-wrap: balance`): Section `<h2>` titles across light and dark bands.
- **Title** (`600` weight, `20px–28px` / `1.4375rem` base, `1.2` line-height, `-0.02em` tracking): Solution cards, ledger item headings, form panels, and stage readout titles.
- **Body** (`400–500` weight, `15px–17.5px` / `1rem` base, `1.6` line-height, `56ch–62ch` max measure): Advisory prose, bulleted capabilities, and disclaimer copy (`12px–13px` muted for illustrative notes).
- **Label** (`600` weight, `12px–13px` / `0.75rem`, `1.3` line-height, `0.06em–0.08em` tracking, uppercase): Strictly functional operational legends, calculator metric captions, step numerals (`0.12em`), and dark footer column headings (`14px`).

### Named Rules
**The Tabular Anchor Rule.** Every dollar amount, percentage, unit count, step number, and contract term applies `font-variant-numeric: tabular-nums` so animated counter transitions and stacked financial ledgers remain horizontally locked.

**The No-Kicker Rule.** Page and section headings open directly in `Bricolage Grotesque` without decorative eyebrow kickers above them; tracked uppercase labels are reserved exclusively for form legends, data readout captions, and footer directory headings.

## Layout

Pages sit inside a centered `1320px` architectural frame (`px-4` to `px-6` on mobile, expanding to `px-12` / `48px` at `1024px+`) built on a 12-column responsive grid (`gap-8` to `gap-12`). Compositions favor deliberate asymmetry over symmetrical card grids: `6/6` opening hero-and-console pairing, `4/8` editorial ledgers and continuity horizons, `7/5` interactive curve and assessment splits, and `5/7` OEM/industry pairings.

Vertical pacing alternates full-bleed material bands (`py-20` / `80px` mobile to `py-24`–`py-28` / `96px–112px` desktop) while the opening hero stays tightened (`pt-4 pb-6` to `pt-5 pb-8`) beneath the sticky `80px` header so the headline, live recovery console, and dark Spectralink continuity horizon land together in the first desktop viewport. Horizontal overflow is clipped globally (`overflow-x: clip`) and prose measures cap at `56ch–62ch`.

Responsive breakpoints follow `640px` (`sm` — two-column controls and inline CTAs), `768px` (`md` — multi-column process grids and footer meta row), `1024px` (`lg` — full 12-column asymmetric grids, desktop nav bar, `48px` page gutters), and `1280px` (`xl` — monumental display and metric sizing).

### Named Rules
**The Alternating Ground Rule.** Full-width bands alternate across calibrated material grounds (`stone` → `navy` → `stone` → `stone-subtle` → `navy`) so vertical pacing reads through surface shifts rather than full-bleed horizontal rules.

## Elevation & Depth

This system is flat by default and communicates depth through calibrated tonal layering rather than drop shadows. Cards, interactive consoles, and dark-band panels rest flush against their parent ground with zero outer shadows and zero four-sided borders. Shadows are withheld strictly for two physical-state exceptions: grounding the sticky header once scrolled and giving tactile lift to the circular range slider dial.

### Shadow Vocabulary
- **Scrolled Header Ambient Veil** (`box-shadow: 0 6px 24px rgba(11, 29, 53, 0.06)`): Engaged dynamically only when `window.scrollY > 12`, paired with an `80%` `#D6D0C2` bottom hairline to separate the sticky limestone header from scrolling content.
- **Brass Slider Thumb Rest** (`box-shadow: 0 3px 10px rgba(11, 29, 53, 0.24)`): Applied exclusively to the circular brushed-brass range dial thumb so it reads as a tactile control above its matte track.

### Named Rules
**The Borderless Tonal Step Rule.** Surfaces carry no outer strokes and no resting shadows; hierarchy comes from nested tonal steps (`#F0EDE6` ↔ `#E4DFD4` on light; `#0B1D35` ↔ `#132A4A` on dark) with `1px` internal hairlines (`#D6D0C2` on light, `10%–12%` white on dark) reserved strictly for ledger row divisions.

## Shapes

Form language is milled, orthogonal, and restrained, using a tight four-step corner ladder plus full rounding strictly for circular/track browser controls:
- **Micro Bars & Inline Tags (`2px`):** Capital-offset meter track, keyboard `:focus-visible` outlines, and inline status flags.
- **Interactive Controls (`3px`):** All primary/secondary buttons, selector pills, tab buttons, OEM chips, and compact inline numeric inputs.
- **Form Fields & Nested Sub-Wells (`4px`):** Text inputs, selects, textareas, radio choice cards, nested calculator sub-panels, Spectralink horizon cards, and numbered refresh steps.
- **Architectural Containers (`6px`):** Primary consoles, solution cards, business-case ledgers, dark feature blocks, and intake forms.
- **Tactile Tracks & Handles (`999px` / `50%`):** Range slider track (`6px` tall), circular slider thumb (`22px` diameter with `3px` `#DFB768` bezel), and custom scrollbar thumb.

The signature recurring motif is the **55° MG Monogram Slash**, derived from the diagonal join in the interlocking MG brand mark. It appears inline as `.mg-slash-divider` (`1.5px × 1.05em`, `#DFB768`→`#B9862D` vertical gradient, rotated `32deg`) separating short positioning phrases, and at architectural scale as low-opacity (`4.5%–9%`) parallel-line SVG watermarks recessed into dark and light band corners.

### Named Rules
**The Crisp Corner Rule.** Buttons and interactive chips never exceed `3px` radius and containers never exceed `6px`; pill-shaped CTAs (`999px`) are prohibited outside slider and scrollbar geometry.

## Components

Every component is tactile, borderless, and direct—built to respond immediately with clean tonal shifts rather than bouncy motion. All interactive elements share a `2px` `:focus-visible` outline with `3px` offset (`#785212` on light surfaces, `#DFB768` on `.dark-surface` bands) and respect `prefers-reduced-motion: reduce` by collapsing transitions and animations to `0.01ms`.

### Buttons
- **Shape:** Crisp milled corners (`3px` radius).
- **Primary (Light Ground):** Solid Midnight Navy (`#0B1D35`) fill with Honed Limestone (`#F0EDE6`) `14.5px–15.5px` semibold text, `14px 24px` standard padding (`10px 20px` compact header CTA), inline `16px` right-arrow SVG, transitioning smoothly (`150ms`) to Deep Slate Navy (`#132A4A`) on hover.
- **Primary (Dark Ground):** Satin Brass Light (`#DFB768`) fill with Midnight Navy (`#0B1D35`) semibold text, `12px 20px` to `14px 24px` padding, hovering to Pale Brass (`#F1D79B`).
- **Secondary (Light Ground):** Honed Limestone (`#F0EDE6`) fill inside matte wells with Midnight Navy (`#0B1D35`) text, lifting to Warm Alabaster (`#F7F5F0`) on hover.
- **Inline Text Action:** Semibold Midnight Navy (`#0B1D35`) text with a `1.5px` Brushed Brass (`#B9862D`) underline (`4px` offset), shifting to Burnished Brass Deep (`#785212`) on hover (on dark bands: Warm Chalk Ink underlined in `#DFB768`, hovering to `#DFB768`).

### Selector Pills & Chips
- **Style:** Borderless `3px`-radius tiles in `12.5px–13.5px` semibold sans (`tabular-nums` for age/year buttons); OEM tags use `15.5px` `Bricolage Grotesque` on Honed Limestone (`#F0EDE6`).
- **State:** On light surfaces, unselected pills sit on `#F0EDE6` (or `#E4DFD4` inside nested stone wells) with `#F7F5F0` hover and invert to `#0B1D35` fill / `#F0EDE6` text when active (`aria-pressed="true"`). On dark surfaces (lifecycle year tabs), unselected tabs sit on `#0B1D35` with `#B6C3D4` text, hover to `#1B385F`, and activate to `#DFB768` fill / `#0B1D35` text.

### Cards & Containers
- **Corner Style:** `6px` radius for primary panels; `4px` radius for nested sub-wells and dark continuity horizon cards.
- **Background:** Matte Stone Well (`#E4DFD4`) on limestone grounds, Honed Limestone (`#F0EDE6`) on subtle limestone grounds (`#EAE6DD`), and Deep Slate Navy (`#132A4A`) inside Midnight Navy bands (`#0B1D35`).
- **Shadow Strategy:** Zero resting shadow; rely on tonal stepping per The Borderless Tonal Step Rule.
- **Border:** Zero outer border; internal list/ledger rows use `1px` `#D6D0C2` (light) or `rgba(255, 255, 255, 0.10–0.12)` (dark).
- **Internal Padding:** `20px–24px` compact, `28px–40px` full containers (`p-5` to `p-10`).

### Inputs & Controls
- **Style:** Borderless `4px`-radius fields (`3px` for compact numeric boxes) filled with Honed Limestone (`#F0EDE6`) inside `#E4DFD4` forms, `12px 14px` padding, `15px` Midnight Navy text, `#465362` placeholders, `#B9862D` caret.
- **Focus:** Background lifts subtly to Warm Alabaster (`#F7F5F0`) paired with the global `2px` `#785212` `:focus-visible` ring.
- **Radio Choice Cards:** Borderless `4px` limestone tiles that invert completely to Midnight Navy (`#0B1D35`) with limestone text via `:has(:checked)`.
- **Bespoke Brass Slider:** `6px`-high pill track (`#CFC8B9`) with a `22px` circular `#0B1D35` thumb framed by a `3px` `#DFB768` bezel and soft shadow (`0 3px 10px rgba(11, 29, 53, 0.24)`), scaling `1.1×` over `180ms` `cubic-bezier(0.16, 1, 0.3, 1)` on hover.
- **Error / Disabled:** Validation alerts use a high-contrast dark crimson banner (`4px` radius, white `14px` text, `role="alert"`); disabled submit buttons drop to `60%` opacity.

### Navigation
- **Header:** Sticky `80px` (`h-20`) Honed Limestone bar (`95%` opacity) holding the horizontal MG monogram lockup (binding monogram asset + vertical brass gradient hairline + tracked `Bricolage Grotesque` `ENTERPRISES` wordmark), four `15px` medium links (`#465362`, hovering to `#0B1D35`), active link in semibold navy with a `2px` `#B9862D` bottom rule, and a solid navy `Request Assessment` CTA (`bg-brass text-navy` when active on `/assessment`). Scroll past `12px` engages the subtle bottom hairline and `0 6px 24px rgba(11, 29, 53, 0.06)` veil. Below `1024px`, links collapse into a `40×40px` `#E4DFD4` toggle button revealing a full-width limestone drawer.
- **Footer:** Full-bleed Midnight Navy (`#0B1D35`) architectural footer etched with a `6%` opacity 55° brass watermark, dark-theme horizontal lockup, three uppercase `#DFB768` directory columns, and a bottom compliance row partitioned by a `1px` `white/10` hairline.

### Signature Components
- **Capital Recovery Console:** Borderless `#E4DFD4` panel (`6px` radius) leading with a monumental `50px–72px` animated `tabular-nums` CAD recovery figure (`280ms` cubic ease-out counter), paired with an aligned effective-cost readout, a live `8px`-tall `2px`-radius two-tone capital-offset bar (`#B9862D` recovered vs. `#0B1D35` net outlay), family/age pill grids, synced brass quantity slider, optional multi-fleet docket, and direct query-parameter handoff to the Assessment form.
- **5-Year Residual Value & Spectralink Bridge Timeline:** Full-bleed Midnight Navy band pairing an interactive SVG curve inside `#132A4A` (satin brass `#DFB768` `3px` curve stroke, brass gradient area fill, shaded Years 3–5 bridge window, dashed vertical guide and active node halo transitioning over `340ms` `--ease-architectural` `cubic-bezier(0.16, 1, 0.3, 1)`) with a synchronized stage readout panel and 5-column keyboard-accessible year tabs.

## Do's and Don'ts

### Do:
- **Do** use Burnished Brass Deep (`#785212`) for brass-colored text, currency codes, and focus rings on light limestone surfaces, and switch to Satin Brass Light (`#DFB768`) on midnight-navy bands.
- **Do** separate containers and bands using calibrated tonal steps (`#F0EDE6` → `#EAE6DD` → `#E4DFD4`, `#0B1D35` → `#132A4A`) and `1px` internal hairlines instead of four-sided box borders.
- **Do** apply `tabular-nums` to every financial estimate, offset percentage, quantity input, step index, and contract duration.
- **Do** preserve the binding MG monogram assets (`mg-monogram-light.png` on limestone, `mg-monogram-dark.png` on midnight navy) and echo the 55° join solely through `.mg-slash-divider` and low-opacity (`4.5%–9%`) corner watermarks.
- **Do** keep button and control corners crisp (`3px` radius) and major container corners milled (`6px` radius).
- **Do** respect `prefers-reduced-motion: reduce` on all animated counters, SVG curve guides, and hover transitions.

### Don't:
- **Don't** place pure white (`#FFFFFF`) cards or heavy outer borders on limestone grounds, or add resting drop shadows to cards and panels.
- **Don't** add decorative uppercase eyebrow kickers above page or section headings; lead sections directly with `Bricolage Grotesque`.
- **Don't** use pill-shaped (`999px`) buttons, bright SaaS blue washes, translucent glassmorphism, or decorative gradients across backgrounds.
- **Don't** place Brushed Brass (`#B9862D`) or Satin Brass Light (`#DFB768`) body text directly on light limestone (`#F0EDE6` / `#E4DFD4`), where contrast falls below WCAG AA.
- **Don't** stack two identical limestone tones directly inside each other without a tonal step (`stone-well` on `stone`, or `stone` on `stone-subtle` / `stone-well`).
