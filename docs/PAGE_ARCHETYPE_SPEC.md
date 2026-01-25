# Page Archetype & Narrative System Spec

**Version:** 0.8.0-draft  
**Status:** Pending Approval  
**Purpose:** Define visual and narrative coherence rules for all BSS LogisQ website pages.

---

## 1. Page Archetypes

Every page belongs to exactly **one archetype**. No exceptions.

| Archetype | Purpose | Visual Intensity | Voice Register |
|-----------|---------|------------------|----------------|
| **SELL** | Problem → Outcome | High emotion, low density | Declarative, outcome-focused |
| **EXPLAIN** | Definition → How | Medium density, structured | Didactic, clear |
| **PROVE** | Evidence → Details | High density, minimal decoration | Technical, precise |

### Page Assignment

| Page | Archetype | Rationale |
|------|-----------|-----------|
| Homepage | SELL | Entry point, emotional hook |
| Solutions Hub | SELL | Problem-solution framing |
| Solution Details (`/solutions/[slug]`) | EXPLAIN | "How does this apply to me?" |
| Modular WES | EXPLAIN | "What is a WES and how is LogisQ structured?" |
| Technology | PROVE | Technical evidence layer |
| Digital Twin | PROVE | Technical evidence, design-time focus |
| Fleet Management | PROVE | Technical evidence, integration focus |
| Company | SELL + CORPORATE | Trust-building, JV narrative |

---

## 2. Unified Hero Template

**Every page uses the same hero structure.** No custom inventions.

```
┌─────────────────────────────────────────────────────┐
│  [1] Category Label (small, muted, optional)        │
│                                                     │
│  [2] H1 Headline (6-10 words, single line)          │
│                                                     │
│  [3] Clarifier (1 sentence, 20 words max)           │
│                                                     │
│  [4] Optional Anchor (ONE of the following):        │
│      • Definition box                               │
│      • Supporting visual                            │
│      • Badge/qualifier                              │
│      • Nothing                                      │
└─────────────────────────────────────────────────────┘
```

### Rules

1. **Category labels** are optional but consistent when used (e.g., "Technology", "Solutions")
2. **H1** must be a single, scannable sentence — never a paragraph
3. **Clarifier** explains the H1, does not repeat it
4. **Optional anchor** — pick ONE or NONE. Never combine.

---

## 3. Visual Intensity Scale

Each archetype has a **visual budget**. Do not exceed.

| Archetype | Hero Visual | Section Imagery | Diagrams | Animations |
|-----------|-------------|-----------------|----------|------------|
| **SELL** | Allowed (emotional) | Minimal | None | Subtle allowed |
| **EXPLAIN** | Allowed (illustrative) | Moderate | Allowed | Minimal |
| **PROVE** | Minimal | Dense | Required | None |

### Special Rule: Digital Twin

The Digital Twin page is **PROVE** archetype. Its visual intensity must match Technology, not exceed it.

**Current state:** Product-marketing visual dominance  
**Target state:** Same visual volume as Technology page

---

## 4. Narrative Voice Guide

### The LogisQ Sentence

A "LogisQ sentence" follows these principles:

| Principle | Example |
|-----------|---------|
| **Subject-first** | "PER executes..." not "The system executes..." |
| **Effect over mechanism** | "Predictable task sequencing" not "Workflow execution engine" |
| **No anthropomorphism** | "evaluates" not "decides", "follows" not "learns" |
| **Concrete over abstract** | "Orders flow seamlessly" not "Integration is seamless" |

### Voice by Archetype

| Archetype | Tone | Abstraction Level | Sentence Length |
|-----------|------|-------------------|-----------------|
| **SELL** | Confident, outcome-focused | Low (concrete) | Short (8-15 words) |
| **EXPLAIN** | Helpful, structured | Medium | Medium (12-20 words) |
| **PROVE** | Precise, technical | High | Variable (can be longer) |

---

## 5. Headline Semantics

Headlines must stay within their archetype's register. Do not mix.

### SELL Headlines (Outcome-focused)
- ✅ "Warehouse Execution for Shorter Project Runtimes"
- ✅ "Stable operations, no late surprises"
- ❌ "How the Modular Architecture Enables Scalability" (too EXPLAIN)

### EXPLAIN Headlines (Structure-focused)
- ✅ "What LogisQ-WES Does in Daily Operation"
- ✅ "How Processes Flow from Planning to Execution"
- ❌ "A Strategic Joint Venture" (too CORPORATE)

### PROVE Headlines (Evidence-focused)
- ✅ "System Boundaries and Responsibilities"
- ✅ "Event-Driven, Responsibility-Aware Integration"
- ❌ "The Power of Real-Time Visibility" (too SELL)

---

## 6. Company Page: Special Treatment

The Company page is **SELL + CORPORATE** hybrid. It needs:

1. **Soft transition** — introduce with a bridge sentence that signals context shift
2. **Maintain visual grammar** — use the same hero template
3. **Trust-building** — institutional tone is allowed, but not investor-deck style

---

## 7. Implementation Checklist

### Phase 1: Hero Alignment
- [ ] Refit Solutions hero to unified template
- [ ] Refit Technology hero to unified template
- [ ] Refit Digital Twin hero (scale down visuals)
- [ ] Refit Company hero (add soft transition)
- [ ] Refit Modular WES hero

### Phase 2: Visual Intensity Adjustment
- [ ] Digital Twin: reduce visual dominance to match Technology
- [ ] Company: align visual grammar with rest of site

### Phase 3: Voice Consistency
- [ ] Review all H1s for archetype-appropriate register
- [ ] Review all clarifiers for length (max 20 words)

---

## 8. Success Criteria

After implementation, a user should:

1. **Not notice transitions** — pages feel like one coherent product
2. **Recognize the hero pattern** — same structure, different content
3. **Trust the visual cues** — PROVE pages look technical, SELL pages feel confident

---

**End of Spec**
