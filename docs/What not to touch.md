# BSS LogisQ Website  
## Standing “DO NOT TOUCH” Checklist  

**Applies from Version 0.6.0 onward**  
**Status:** Binding  
**Audience:** All implementors, editors, agencies

---

## 1. Core Claim — ABSOLUTELY FIXED

❌ **DO NOT change, rephrase, soften, or “improve” the central claim:**

> **Warehouse Execution for Shorter Project Runtimes**

### Forbidden variants (examples):
- Faster warehouse automation  
- Optimized warehouse execution  
- Next-generation warehouse management  
- AI-driven warehouse execution  
- Digital Twin powered execution  

This claim is **frozen**.  
Any change requires explicit product-owner approval.

---

## 2. Funnel Integrity — NEVER MIX LAYERS

Every page **must belong to exactly one layer**:

- **SELL** → Homepage  
- **EXPLAIN** → Solutions, Modular WES, Concept pages  
- **PROVE** → Technology pages  

❌ **DO NOT**:
- explain architecture on SELL pages  
- explain internals on EXPLAIN pages  
- add marketing language to PROVE pages  

If a sentence answers **“how it works internally”**, it does **not** belong on:
- Homepage  
- Solutions pages  

---

## 3. Product vs. Actor Rule (AX-07 HARD RULE)

❌ **DO NOT write sentences where “LogisQ-WES” is an actor.**

### Forbidden:
- LogisQ-WES decides…  
- LogisQ-WES optimizes…  
- LogisQ-WES executes tasks…  
- LogisQ-WES controls the warehouse…  

### Allowed:
- The WMS defines…  
- PER executes…  
- MFC translates…  
- The system consists of modules that…  

**Product = composition, not an agent.**

---

## 4. Digital Twin — STRICTLY LIMITED

Digital Twin is:

✔ Design-time only  
✔ Optional  
✔ Supportive  

❌ **DO NOT**:
- place Digital Twin in homepage hero sections  
- link Digital Twin causally to shorter runtimes  
- imply runtime influence  

Mandatory framing (if mentioned):

> *Design-time transparency — does not affect execution semantics.*

---

## 5. Solutions Pages — WHAT THEY MUST NEVER CONTAIN

On `/solutions` and `/solutions/[slug]` pages:

❌ **DO NOT include**:
- PER, MFC, ArconQ internals  
- Architecture diagrams  
- Workflow engines  
- Execution internals  
- Technology stack explanations  
- Digital Twin as a primary value  

Solutions answer:

> “Is this relevant for my warehouse?”

They do **not** explain:

> “How the system is built.”

---

## 6. Capabilities Language — EFFECTS ONLY

### HARD RULE:
Capabilities must describe **effects**, never **mechanisms**.

❌ Forbidden:
- Workflow execution engine  
- Process orchestration layer  
- Integrates with WMS / PLC  
- Supports AGVs via XYZ  

✔ Allowed:
- Predictable task sequencing  
- Stable execution under peak load  
- Clear priority handling  
- No late-stage surprises  

---

## 7. “Real-Time” — CONTROLLED TERM

“Real-time” may only describe:

✔ execution coordination  
✔ task sequencing  
✔ event-driven reaction  

❌ **DO NOT** pair “real-time” with:
- optimization  
- learning  
- decision-making  
- intelligence  

Bad:
> Real-time optimization of warehouse processes  

Good:
> Real-time coordination of warehouse execution tasks  

---

## 8. Metaphors — VERY LIMITED USE

Metaphors are allowed **only if paired with technical terms**.

❌ **DO NOT**:
- use metaphors in headings  
- let metaphors stand alone  

✔ Allowed:
> PER (Process Execution Runtime), acting as the execution orchestrator  

❌ Forbidden:
> The brain decides what happens next  

---

## 9. Visuals & Diagrams — NEGATIVE CAPTION REQUIRED

Every diagram **must include** a caption stating what it does **NOT** do.

Mandatory pattern:

> *Visualization only — does not make decisions or control execution.*

❌ **DO NOT** show:
- decision trees  
- conditional logic  
- algorithmic flow  

on SELL or SOLUTIONS pages.

---

## 10. Homepage — NON-NEGOTIABLE RULES

On the homepage:

❌ **DO NOT**:
- explain product structure  
- list modules  
- show architecture  
- explain workflows  

Homepage must remain:
- problem-focused  
- outcome-oriented  
- non-technical  

---

## 11. SEO — WHAT MUST NOT HAPPEN

❌ **DO NOT**:
- keyword-stuff “WES” everywhere  
- mix software terms into Solution H1/H2  
- reuse the same primary keyword across multiple solution pages  

Each page = **one primary intent**.

---

## 12. Language Hygiene — BANNED WORDS LIST

Avoid unless explicitly approved:

- intelligent  
- smart  
- autonomous  
- learns  
- decides  
- optimizes  
- understands  

Preferred alternatives:
- executes  
- enforces  
- coordinates  
- validates  
- follows  
- applies  

---

## 13. Change Control Rule

If a change:
- affects the homepage hero  
- affects the core claim  
- introduces a new “capability”  
- adds a new Solution category  

➡ **STOP**  
➡ **Request review**

No “small copy tweak” exception.

---

## Final Gate Question (MANDATORY)

Before committing any change, ask:

> **Could this sentence cause a reader to believe the system decides or optimizes something by itself?**

If the answer is **yes or maybe** → **DO NOT MERGE**.

---

**End of document**
