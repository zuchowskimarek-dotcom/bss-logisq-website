# Content Definition of Done (DoD)

This document defines the quality and consistency standards for all website content. Every new page or content update must satisfy these rules before merge.

---

## 1. Funnel Classification Required

Every page must have a classification:

| Layer | Purpose | Examples |
|-------|---------|----------|
| **SELL** | Problem → Outcome. Why should I care? | Homepage, Solutions Hub |
| **EXPLAIN** | How it works. What does it do? | Solution Detail Pages |
| **PROVE** | Technical evidence. How is it built? | Technology Page, Product Subpages |

> **Rule:** No new page without explicit funnel classification.

---

## 2. Subject-Verb Discipline

Every action verb must have an explicit subject. Never attribute actions to "LogisQ" as a whole.

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| "LogisQ optimizes..." | "XyronQ-PER executes..." |
| "The system decides..." | "PER evaluates and sequences..." |
| "LogisQ learns..." | *(Not allowed — no learning claims)* |

---

## 3. Capabilities = Effects, Not Mechanisms

Describe what the user gets, not how the system works internally.

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| "Workflow execution engine" | "Predictable task sequencing across shifts" |
| "Integrates with WMS" | "Orders flow seamlessly from planning to execution" |
| "Supports AGV fleets" | "Mobile robots move within a single execution flow" |

---

## 4. Visual Captions Required

Every diagram must have a caption stating what it does **NOT** do.

**Examples:**
- "Visualization only — does not make decisions"
- "Reference architecture — actual deployment may vary"
- "Conceptual flow — not a runtime sequence"

---

## 5. No Anthropomorphic Claims

Never imply the system has human-like cognition.

| ❌ Avoid | ✅ Use Instead |
|----------|---------------|
| "understands" | "evaluates" |
| "decides" | "executes" |
| "learns" | "follows defined rules" |
| "knows" | "references" |
| "thinks" | *(Never use)* |

---

## 6. Metaphor Pairing

When using metaphors, always pair them with technical names.

| ❌ Wrong | ✅ Correct |
|----------|-----------|
| "The Brain coordinates..." | "XyronQ-PER (the execution core) coordinates..." |
| "The Orchestrator manages..." | "PER (Process-Executive-Runtime) manages..." |

> **Rule:** Never use metaphors in headings.

---

## 7. "Real-time" Discipline

"Real-time" must always refer to **execution coordination**, not autonomous decision-making.

| ❌ Avoid | ✅ Use |
|----------|-------|
| "real-time optimization" | "real-time coordination" |
| "real-time learning" | "real-time execution" |
| "real-time AI decisions" | "real-time task dispatch" |

---

## Checklist Before Merge

- [ ] Page has explicit funnel classification (SELL / EXPLAIN / PROVE)
- [ ] All verbs have explicit subjects (module names, not "LogisQ")
- [ ] Capabilities describe effects, not mechanisms
- [ ] All diagrams have negative captions
- [ ] No anthropomorphic language
- [ ] Metaphors are paired with technical names
- [ ] "Real-time" refers only to execution coordination
- [ ] EN/DE parity verified
