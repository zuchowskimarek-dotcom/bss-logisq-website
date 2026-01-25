# Implementation Plan v0.8.0

**Goal:** Achieve visual and narrative coherence across all pages.

---

## Background

Feedback from v0.7.0 identified that while the site is strong at the conceptual level, it lacks consistency at the experiential level. The diagnosis:

> "Four different storytelling grammars on one site."

This plan implements the **Page Archetype & Narrative System Spec** to resolve this.

---

## Scope

### In Scope
- Hero section alignment across all pages
- Visual intensity normalization (especially Digital Twin)
- Headline/voice consistency per archetype

### Out of Scope
- New features
- Content rewrites (only structural refactoring)
- Mobile-specific changes

---

## Phase 1: Hero Alignment

Refit all hero sections to the **Unified Hero Template**:

| Page | Current Hero Type | Target Hero Type |
|------|-------------------|------------------|
| Solutions | Manifesto (abstract) | SELL archetype |
| Technology | Definition box | PROVE archetype |
| Digital Twin | Product marketing | PROVE archetype (scaled down) |
| Modular WES | Definition box | EXPLAIN archetype |
| Company | Corporate | SELL + soft transition |

### Implementation Steps
1. Create reusable `PageHero` component with unified structure
2. Migrate each page to use `PageHero`
3. Verify visual consistency across pages

---

## Phase 2: Visual Intensity Adjustment

### Digital Twin Page
- **Problem:** Visual dominance contradicts narrative discipline
- **Solution:** Scale down hero visual to match Technology page intensity
- **Specific changes:**
  - Reduce image prominence
  - Align section spacing with Technology

### Company Page
- **Problem:** Feels like a different design universe
- **Solution:** Add soft transition framing
- **Specific changes:**
  - Add bridge sentence at hero level
  - Align visual grammar with rest of site

---

## Phase 3: Voice Consistency

Review and adjust:
- [ ] All H1 headlines for archetype-appropriate register
- [ ] All clarifiers for length (max 20 words)
- [ ] Headline tone consistency (no register drift)

---

## Verification

### Automated
- `npm run lint` passes
- `npm run build` completes without errors

### Manual
- Navigate through all pages — should feel like one coherent product
- Hero structure recognizable across pages
- No "context switch" feeling between pages

---

## Reference Documents

- [PAGE_ARCHETYPE_SPEC.md](./PAGE_ARCHETYPE_SPEC.md) — Design system rules
- [CONTENT_DOD.md](./CONTENT_DOD.md) — Content governance
- [What not to touch.md](./What%20not%20to%20touch.md) — Protected elements

---

## Release

After implementation:
1. Update `package.json` version to `0.8.0`
2. Verify build
3. Tag and push `v0.8.0`

---

**Status:** Ready for implementation upon approval
