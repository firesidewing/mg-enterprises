# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (multi-page static/hybrid marketing site) hosted on Vercel, with interactive client-side islands for the rough-estimate fleet buyback calculator and assessment request intake. Project root: `/home/josh/mg-enterprises`.

## Users

Two primary B2B audiences in Canada:

1. **End-user enterprise organizations** — IT directors, mobility fleet managers, procurement leads, and operations leadership in Healthcare, Manufacturing, Warehousing & Logistics, Retail, and Enterprise IT who manage aging enterprise mobile communications fleets (iOS, Android, Spectralink, Cisco, Avaya, Nortel, Ascom, Mitel, NEC, Zebra, Apple) and face high capital replacement costs or expiring manufacturer support.
2. **Channel partners** — Resellers and systems integrators selling replacement enterprise wireless/mobility hardware (especially Spectralink) who want to unlock residual fleet value early in the sales cycle to overcome customer budget resistance and differentiate beyond hardware pricing.

## Product Purpose

MG Enterprises is a Canadian enterprise mobility lifecycle solutions company. The marketing website exists to position MG Enterprises around three commercial outcomes — **Recover value**, **Reduce costs**, and **Modernize affordably** — and convert enterprise buyers and channel partners into Equipment Recovery Assessment and maintenance contract inquiries.

Success looks like:
- Visitors immediately understand that retired and aging communications hardware still holds recoverable capital.
- Prospects use the interactive rough-estimate buyback calculator (device count, make/model, age/ownership duration) to see an illustrative recovery range and transition straight into requesting a formal Equipment Recovery Assessment.
- Spectralink customers and resellers clearly understand the customized 3-, 6-, and 12-month extended warranty and maintenance contract options as well as how early buyback offsets upgrade budgets.

## Positioning

**"Your technology still has value. We help you unlock it. Recover capital. Extend equipment life. Modernize on your terms."**

Rather than positioning as a generic repair shop, e-waste recycler, or hardware reseller, MG Enterprises operates as a Canadian technology lifecycle and capital-recovery partner — turning a hardware expense conversation into a financial and operational funding strategy for IT, procurement, and channel sales teams.

## Operating Context

- Enterprise IT and procurement teams evaluating multi-hundred or multi-thousand handset fleet refreshes (e.g., $200,000 Spectralink upgrades) where capital recovery (~12.5% illustrative offset) lowers the effective upgrade cost.
- Healthcare, warehouse, manufacturing, and retail facilities keeping mission-critical wireless handsets operational through short-term (3-, 6-, and 12-month) extended warranty and maintenance agreements while planning phased modernization.
- Channel partners introducing buyback assessments early in new-hardware proposals rather than after replacement purchases close.
- Behind-the-scenes fulfillment brokerage with K&M Communication Services — kept private; public positioning is strictly **MG Enterprises**.

## Capabilities and Constraints

- **Site structure (confirmed):** Multi-page Astro site:
  - Home (`/`) — brand positioning, commercial outcomes, prominent buyback spotlight + rough estimate calculator entry, solutions overview, supported manufacturers, industries served, illustrative Spectralink upgrade offset case, and channel partner callout.
  - Buyback & Calculator (`/buyback`) — Enterprise Device Buyback details, interactive rough-estimate buyback calculator (quantity, make/model covering iOS, Android, Spectralink, Cisco, Zebra, Ascom, Mitel, Avaya, NEC, Nortel, plus device age/duration owned -> rough estimate range clearly marked illustrative), bulk fleet retirement, and responsible recovery.
  - Maintenance & Spectralink Contracts (`/maintenance`) — Equipment Maintenance & Lifecycle Extension, highlighting customized 3-, 6-, and 12-month extended warranty and maintenance agreements for Spectralink phones, legacy repair/refurbishment, spare sourcing, advanced replacement, EOL support, and Technology Refresh & Transition programs.
  - Channel Partners (`/partners`) — dedicated value proposition for resellers and systems integrators ("Don't just sell the replacement. Help customers recover value from what they're replacing"), early-cycle buyback integration, and Spectralink upgrade funding case.
  - Equipment Recovery Assessment (`/assessment`) — interactive assessment & inquiry intake form (pre-fillable from calculator estimates), structured cleanly for email/Resend or Formspree backend wiring on Vercel.
- **Compliance / disclaimer constraint:** All buyback calculator outputs, financial examples ($200,000 new investment / $25,000 illustrative buyback / $175,000 effective upgrade cost — 12.5% illustrative capital recovery), maintenance services, support commitments, and recycling arrangements must be clearly labeled as illustrative / rough estimates subject to model eligibility, device condition, market demand, and program terms.
- **Partner confidentiality constraint:** Do NOT publicly name K&M Communication Services on the website; position purely as MG Enterprises.
- **Undecided / pending facts:** Final production email endpoint (Resend/Formspree API key), finalized office phone/street address, and client-supplied device photography (coming next from client).

## Brand Commitments

- **Company name:** MG Enterprises
- **Existing visual assets (binding brand marks):**
  - Dark-ground logo: `src/assets/brand/mg-logo-dark.png` (copied from `1.png`) — deep midnight navy ground, interlocking geometric "MG" monogram in deep navy steel-blue and brushed metallic gold, thin horizontal gold rule, wide-tracked silver "ENTERPRISES" wordmark.
  - Light-ground logo: `src/assets/brand/mg-logo-light.png` (copied from `3.png`) — pure white ground, deep navy "M" and brushed metallic gold slash/"G", thin gold rule, medium-gray "ENTERPRISES" wordmark.
- **Voice:** Commercially sharp, Canadian B2B executive clarity — financial and operational authority without hype, gimmicks, or generic SaaS buzzwords.

## Evidence on Hand

- Confirmed client positioning copy, service descriptions, supported manufacturer list (Spectralink, Cisco, Avaya, Nortel, Ascom, Mitel, NEC, Zebra, Apple), target verticals (Healthcare, Manufacturing, Warehousing & Logistics, Retail, Enterprise IT, Systems Integrators), and illustrative Spectralink upgrade offset example ($200,000 / $25,000 / $175,000).
- Confirmed brand logos (`src/assets/brand/mg-logo-dark.png` and `src/assets/brand/mg-logo-light.png`).
- **Absences that must NOT be fabricated:** Real customer logos, client testimonials, case study client names, ISO/R2 certification claims not verified by client, guaranteed buyback pricing, or real phone/address details (use clean clearly marked placeholders for contact coordinates where needed and label illustrative figures explicitly). Device photos from the client are pending.

## Product Principles

1. **Lead with financial recovery, not e-waste.** Frame retired enterprise fleets as an underutilized capital asset that directly offsets modernization budgets.
2. **Make the rough estimate tangible in seconds.** Let IT and procurement visitors test fleet count, make/model, and age interactively without gating behind a sales call, while staying transparent that figures are rough illustrative ranges.
3. **Elevate Spectralink flexibility as a signature wedge.** Highlight customized 3-, 6-, and 12-month extended warranty and maintenance agreements alongside early-cycle buyback assessments for Spectralink upgrades.
4. **Serve direct enterprise buyers and channel partners with equal clarity.** Give IT/procurement leads and resellers/systems integrators distinct, unmistakable paths without splitting the brand identity.
5. **Zero fabricated proof.** Present real service scope, honest illustrative business-case math, and clear eligibility language—never invented testimonials, fake client rosters, or unverified certifications.

## Accessibility & Inclusion

Semantic HTML, keyboard-accessible navigation and interactive buyback calculator/forms, clear WCAG AA contrast across dark and light surfaces, visible focus states, tabular numerals for financial figures, and `prefers-reduced-motion` support.
