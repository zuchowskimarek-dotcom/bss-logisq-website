# Implementation Plan: Version 0.6.0

Based on [Feedback and Changes Suggestions v 0.5.0](./Feedback%20and%20Changes%20Suggestions%20v%200.5.0.md)

---

## User Review Required

> [!IMPORTANT]
> **Scope Decision**: This plan covers messaging, content, and SEO changes. Visual/UI changes (execution flow visuals, solution page photos) are deferred to a later phase.

> [!WARNING]
> **Breaking Change**: Homepage messaging will shift from product-centric to problem-outcome. Review carefully.

---

## Phase 1: Critical Messaging Fixes

### 1.1 Add WES Definition (Technology Page)

**Exact copy to add (EN):**
> "A Warehouse Execution System (WES) coordinates real-time warehouse tasks across systems, people, and automation."

**Exact copy to add (DE):**
> "Ein Warehouse Execution System (WES) koordiniert Lageraufgaben in Echtzeit über Systeme, Menschen und Automatisierung hinweg."

#### Files to modify:
- `src/dictionaries/en.json` — Add `technologyPage.wesDefinition`
- `src/dictionaries/de.json` — Add `technologyPage.wesDefinition`
- `src/app/[locale]/technology/page.tsx` — Display as intro paragraph

---

### 1.2 Broaden Scope Beyond "Fully Automated"

**Find and replace:**
- ❌ "Built for fully automated warehouses"
- ✅ "Designed for manual, automated, and mixed environments"

**German equivalent:**
- ❌ "Entwickelt für vollautomatisierte Lager"
- ✅ "Konzipiert für manuelle, automatisierte und gemischte Umgebungen"

#### Files to search:
- `src/dictionaries/en.json`
- `src/dictionaries/de.json`

---

### 1.3 Add One-Line Anchor on Homepage

**Exact copy (EN):**
> "LogisQ-WES coordinates warehouse execution across people, automation, and systems in real time."

**Exact copy (DE):**
> "LogisQ-WES koordiniert die Lagerausführung über Menschen, Automatisierung und Systeme in Echtzeit."

#### Files to modify:
- `src/dictionaries/en.json` — Add to `hero` section as `anchor` or `tagline`
- `src/dictionaries/de.json` — Add equivalent
- `src/components/home/Hero.tsx` — Display below subline

---

## Phase 2: Homepage Refinement (SELL Layer Purity)

### 2.1 Content Audit

**Keep focus on (SELL layer):**
- Project risk ("Projects fail late, not early")
- Time-to-market
- Execution predictability

**Remove or relocate (EXPLAIN layer content):**
- Product structure details
- Technology terms
- "How it works" explanations

> **Relocation rule:** Move to Technology or Product pages, **never** to Solutions.

#### Review these sections:
- `productStructureLight` — Consider trimming or relocating
- `difference` — Ensure it's problem-focused, not mechanism-focused

---

## Phase 3: Solutions Page Refinement

### 3.1 Rewrite Card Teasers as Outcomes

**Rule to enforce:**
> Capabilities must describe **effects**, never mechanisms.

**Bad examples (avoid):**
- "Workflow execution engine"
- "Integrates with WMS"
- "Supports AGV fleets"

**Good examples (use):**
- "Predictable task sequencing across shifts"
- "Deterministic execution under peak load"
- "Fewer late-stage surprises"

#### Files to modify:
- `src/dictionaries/en.json` — `solutionsHub.sectionA/B/C.cards[].teaser`
- `src/dictionaries/de.json` — equivalent

---

### 3.2 Ensure Each Solution Answers One Unique Question

| Solution | Unique Question |
|----------|-----------------|
| Manual Warehouses | Workforce coordination |
| Automated Warehouses | Execution determinism |
| E-Commerce Fulfillment | Peak handling |
| Distribution Centers | Throughput stability |
| Brownfield | Retrofit without disruption |
| Greenfield | Design-to-execution alignment |

---

## Phase 4: SEO Enhancements

### 4.1 Homepage Keywords

Add to `meta.description` or visible copy:
- `warehouse execution system`
- `warehouse execution software`
- `shorter warehouse project runtimes`
- `WES vs WMS`

### 4.2 Solutions Keywords

| Page | Primary Keyword |
|------|-----------------|
| Solutions Hub | `warehouse execution solutions` |
| Manual | `warehouse execution for manual warehouses` |
| Automated | `automated warehouse execution`, `WES for automated warehouses` |
| E-Commerce | `e-commerce warehouse execution`, `peak load warehouse execution` |
| DC | `distribution center execution system`, `high throughput warehouse execution` |
| Brownfield | `brownfield warehouse modernization software` |

### 4.3 Technology Page Keywords

Add to content or headings:
- `WES architecture`
- `warehouse execution model`
- `event-driven warehouse execution`
- `real-time warehouse orchestration`

### 4.4 Meta Description Formula

For solution detail pages:
> "Warehouse Execution for [warehouse type]: [specific pain point] solved through predictable execution."

---

## Phase 5: Content Governance

### 5.1 Create Content DoD Document

**File:** `docs/CONTENT_DOD.md`

**Rules to enforce:**

1. **Funnel Classification Required**
   - No new page without classification: SELL / EXPLAIN / PROVE

2. **Subject-Verb Discipline**
   - No verbs without explicit subject
   - Correct: "XyronQ-PER executes..."
   - Wrong: "LogisQ optimizes..."

3. **Capabilities = Effects, Not Mechanisms**
   - Bad: "Workflow execution engine"
   - Good: "Predictable task sequencing across shifts"

4. **Visual Captions Required**
   - Every diagram must have a caption stating what it does NOT do
   - Example: "Visualization only — does not make decisions"

5. **No Anthropomorphic Claims**
   - Avoid: "understands", "decides", "learns", "knows"
   - Use: "executes", "enforces", "coordinates", "validates"

6. **Metaphor Pairing**
   - Always pair metaphors with technical names
   - Never use metaphors in headings

7. **"Real-time" Discipline**
   - "Real-time" must always refer to execution coordination, not autonomous decision-making
   - Avoid: "real-time optimization", "real-time learning"
   - Use: "real-time coordination", "real-time execution", "real-time task dispatch"

---

## Phase 6: Deferred Items (Future Phases)

### Visual Enhancements (Not in this release)
- [ ] Add execution flow visual (Inbound → Execute → Ship) on homepage
- [ ] Add contextual photos/schematics per solution page
- [ ] Ensure all diagrams have accessible alt text

### CTA Expansion (Not in this release)
- [ ] Add "Download Overview PDF"
- [ ] Add "Watch 2-min Demo"
- [ ] Add "Newsletter / Stay Updated"

### Audience Segmentation (Not in this release)
- [ ] Add microcopy cues: "For operations teams...", "For automation architects..."

---

## Verification Plan

### Automated
- `npm run lint` — ensure no errors
- `npm run build` — verify clean build

### Manual Verification Checklist
- [ ] WES definition visible on Technology page (EN + DE)
- [ ] "Fully automated" phrasing replaced everywhere
- [ ] Homepage anchor line visible below hero
- [ ] Solutions teasers are outcome-oriented (no "integrates X")
- [ ] Meta descriptions contain target keywords
- [ ] Content DoD document created in `docs/`
- [ ] EN/DE parity verified
