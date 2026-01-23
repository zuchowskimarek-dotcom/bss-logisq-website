# Implementation Plan: Website Content Upgrade (Refined)

## Goal

Implement a **layered content funnel** that converts interest into trust by **progressively increasing technical depth**, while remaining:

* **SEO-effective** (business-first language at entry)
* **Architecturally correct** (no responsibility leakage, AX-07 compliant)
* **Credible for technical decision makers**

The website must **sell first**, **explain second**, and **prove last** — without mixing layers.

---

## Core Principle: Funnel, Not Duality

We explicitly abandon the “Marketing vs. Tech” split.

Instead, content follows a **three-layer funnel**, each with strict scope and language rules:

### 1. SELL — Value Layer (Why care?)

**Audience:** Executives, planners, buyers
**Language:** Business outcomes
**No technical authority statements allowed**

### 2. EXPLAIN — Concept Layer (How is it different?)

**Audience:** Solution architects, senior operations
**Language:** System concepts, product structure
**No execution internals**

### 3. PROVE — Architecture Layer (Why it works safely?)

**Audience:** IT, automation, enterprise architects
**Language:** Precise, technical, explicit responsibility mapping

---

## Global Content Rules (Binding)

1. **LogisQ-WES is a product, never a functional actor** (AX-07)
2. Words like *decides, executes, owns, authorizes* appear **only** in the Technology layer
3. No simulation = execution claims
4. Responsibility is always **module-based**, never product-based
5. If a statement could violate AX-02 / AX-04 when interpreted literally → rewrite
6. **Metaphorical labels** (e.g. "Brain", "Orchestrator") are explanatory only and must not imply autonomous decision-making. No metaphors in the Technology layer that imply agency.

---

## Proposed Changes by Layer

---

## 1. Homepage (SELL Layer)

**Location:** `src/app/[locale]/page.tsx`
**Purpose:** Hook attention and qualify interest

### Objectives

* Communicate **speed, modularity, investment safety**
* Create curiosity — not explanation
* Route visitors deeper into Concept or Technology

### Refinements

*   **Key Message:** "Warehouse Execution for Shorter Project Runtimes" (Direct Category + Benefit)
*   **Subline:** "Through end-to-end design instead of reinterpretation"
*   **Digital Twin:** Repositioned as design-time accelerator (not primary cause)
*   Add explicit navigation entry: **Technology**

### Explicit Non-Goals

* No WMS / PER / MFC explanations
* No architecture diagrams
* No responsibility claims

---

## 2. Modular WES Page (EXPLAIN Layer)

**Location:** `src/app/[locale]/solutions/modular-wes/page.tsx`
**Purpose:** Bridge sales promise and technical reality

### Objectives

* Explain **what LogisQ-WES is** (product level)
* Clarify **how it differs** from classic WMS / WCS
* Establish conceptual trust without technical overload

### Content Scope

#### Required

* Clear comparison: **WMS vs WES vs WCS**
* Definition:

  > *LogisQ-WES is an intralogistics software product composed of specialized modules (WMS, PER, MFC, **SquadronQ**) connected via the **CommunicationHub**.*
* Why modular:

  * **CommunicationHub as the central "Backbone"** (Decoupling)
  * Independent upgrades
  * Brownfield / greenfield compatibility

#### Allowed

* High-level mention of execution runtime (“Execution Runtime”, no internals)
* SquadronQ as slightly autonomous but integrated module
* Conceptual responsibility split (ERP → WMS → Execution), **without verbs**

### Forbidden

* Workflow mechanics
* Manifests
* ProcessScope
* Security enforcement logic

---

## 3. Technology Page (PROVE Layer)

**Location:** `src/app/[locale]/technology/page.tsx`
**Purpose:** Demonstrate architectural correctness and operational safety

### Target Audience

Technical decision makers who ask:

> “Why will this system not fail in real operation?”

### Recommended Structure

1. **System Boundary & Responsibility**

   * What each module does
   * What it explicitly does NOT do

2. **Execution Model**

   * Workflow-first execution
   * Deterministic, observable, replayable

3. **Safety & Control**

   * ProcessScope
   * Intent-based authorization
   * Enforcement over trust

4. **Architecture Stack**

   *   **WMS (The Brain)**
   *   **PER (The Orchestrator)** - *The Engine*
   *   **MFC (The Transporter)** - *Topic: Material Flow*
   *   **CommunicationHub (The Gateway)** - *Topic: Connectivity*
   *   **SquadronQ (The Navigator)** - *Topic: Fleet Management*
   *   **ArconQ (The Backbone)** - *Topic: Infrastructure*

5. **Integration & APIs**

   * Event-driven architecture
   * Example flow: PLC → CLY → PER → MFC
   * Emphasis on data ownership, not protocols

### Proof Points

* Named technologies (ArconQ, Elsa, etc.)
* Diagrams over prose
* Precise language

---

## 4. Integration & Use Cases (Cross-Cutting, Anchored in Technology)

### Objective

Explain **how the system integrates**, not how many adapters it has.

### Focus

* Event ownership
* Decision boundaries
* Execution handoff

### Avoid

* Protocol catalogs
* Marketing-style “plug & play” claims

---

## Verification & Review Checklist

### Mandatory Checks

1. **AX-07 Compliance**

   * No “WES decides / executes / owns” anywhere

2. **Semantic Authority Check**

   * Can a reader misunderstand *who decides*?
     → If yes, rewrite.

3. **Layer Integrity**

   * No technical proof in Sell
   * No internals in Explain
   * No marketing fluff in Prove

4. **Visual Integrity**

   * Diagrams readable on desktop & mobile
   * No overloaded graphics

5. **SEO Alignment**

   * Business-first keywords at entry
   * Technical depth discoverable, not forced

## Terminology Decisions

| **Term** | **Current** | **Proposed Alternative** | **Rationale** |
| :--- | :--- | :--- | :--- |
| **PER** | "The Engine" | **The Orchestrator** | Shifts focus from raw power to intelligent coordination. |
| **CommunicationHub** | "The Nervous System" | **The Gateway** | Universal Gateway to Outer World. |
| **MFC** | "The Muscles" | **The Transporter** | Topic: Material Flow / MFC |
| **SquadronQ** | "Fleet" | **The Navigator** | Topic: Fleet Management / SquadronQ |

---

# Release 0.3.0: Feedback Implementation (Version 0.2.0)

## Goal
Implement comprehensive feedback to refine Homepage and Technology page. Core objectives:
- Shift from "Digital Twin" to **"End-to-End Design / No Reinterpretation"**
- Clarify operational reality of the system
- Apply **verbatim microcopy** from feedback document
- Implement **Project Playbooks** (Visual Carousel) and expanded CTAs
- Fully define **Technology Page** content tables (avoiding summary lists)

---

## User Review Required

> [!IMPORTANT]
> - **Terminology:** Strict adherence to "Warehouse Execution for Shorter Project Runtimes"
> - **Digital Twin:** Demoted to "Design-Time / Optional" role
> - **Microcopy:** Exact text from feedback document (no paraphrasing)

---

## Part 1: Homepage Overhaul

### Files to Modify
- `src/dictionaries/en.json` — English content
- `src/dictionaries/de.json` — German content
- `src/app/[locale]/page.tsx` — Homepage component structure

### Section 1: Hero
**Purpose:** Identity + Outcome

| Key | EN | DE |
|:---|:---|:---|
| Headline | Warehouse Execution for Shorter Project Runtimes | Warehouse Execution für kürzere Projektlaufzeiten |
| Subline | Through end-to-end design instead of reinterpretation between planning and operation. | Durch durchgängiges Design statt Neuinterpretation zwischen Planung und Betrieb. |
| CTA Primary | How It Works | So funktioniert es |
| CTA Secondary | Talk to Sales | Kontakt aufnehmen |

**Rules:** No Digital Twin. No module explanations. No "system decides" language.

---

### Section 2: The Problem
**Purpose:** Create resonance before selling features

| Key | EN | DE |
|:---|:---|:---|
| Headline | Why warehouse projects slip late — not early | Warum Warehouse-Projekte spät scheitern — nicht früh |
| Bullet 1 | Decisions made during planning are reinterpreted during implementation | Entscheidungen aus der Planung werden in der Umsetzung neu interpretiert |
| Bullet 2 | Commissioning turns into a discovery phase instead of a validation step | Die Inbetriebnahme wird zur Entdeckungsphase statt zur Validierung |
| Bullet 3 | Go-live dates move, even though "everything was already defined" | Go-Live-Termine verschieben sich, obwohl „alles definiert war" |
| Bridge | Most delays are not caused by missing features, but by late reinterpretation of already-made decisions. | Die meisten Verzögerungen entstehen nicht durch fehlende Funktionen, sondern durch späte Neuinterpretation bereits getroffener Entscheidungen. |

**Rules:** No competitors named. No solutions yet.

---

### Section 3: The Difference
**Purpose:** Introduce "durchgängiges Design" as differentiator

| Key | EN | DE |
|:---|:---|:---|
| Headline | Designed to run as planned | Für die Ausführung gedacht |
| Point 1 | Decisions are defined once and remain consistent across the project | Entscheidungen werden einmal festgelegt und bleiben projektweit konsistent |
| Point 2 | Planning, execution, and operation follow the same semantic model | Planung, Umsetzung und Betrieb folgen demselben Bedeutungsmodell |
| Point 3 | No hidden behavior emerges during commissioning | Es entsteht kein verborgenes Verhalten während der Inbetriebnahme |
| Support | Execution is not improvised at the end — it is structurally prepared from the beginning. | Ausführung wird nicht am Projektende improvisiert — sie wird von Anfang an strukturell vorbereitet. |

**Rules:** Still no internals. Still no Digital Twin.

---

### Section 4: Operational Anchor
**Purpose:** Answer "What does this thing do day to day?"

| Key | EN | DE |
|:---|:---|:---|
| Headline | What LogisQ-WES does in daily operation | Was LogisQ-WES im täglichen Betrieb leistet |
| Intro | LogisQ-WES orchestrates warehouse execution by coordinating priorities, resources, and real-time task flow across manual and automated operations. | LogisQ-WES orchestriert die Warehouse-Ausführung, indem Prioritäten, Ressourcen und Aufgabenflüsse in Echtzeit über manuelle und automatisierte Prozesse hinweg koordiniert werden. |
| Block 1 Title | Task Sequencing & Priorities | Aufgabenreihenfolge & Prioritäten |
| Block 1 Desc | Controls the order and timing of warehouse tasks based on defined rules and current conditions. | Steuert Reihenfolge und Timing von Aufgaben auf Basis definierter Regeln und aktueller Zustände. |
| Block 2 Title | Resource Coordination | Ressourcenkoordination |
| Block 2 Desc | Aligns people, automation, and fleets within a single execution flow. | Führt Menschen, Automatisierung und Fahrzeugflotten in einem konsistenten Ausführungsfluss zusammen. |
| Block 3 Title | Execution Control | Ausführungskontrolle |
| Block 3 Desc | Connects warehouse management decisions with shop-floor execution without semantic breaks. | Verbindet Warehouse-Entscheidungen mit der physischen Ausführung — ohne semantische Brüche. |

**Rules:** Plain language. No workflow engines. No "AI" or "optimization".

---

### Section 4b: Project Playbooks (Visual Flow)
**Purpose:** Visual proof of "What it does"

| Type | Content |
|:---|:---|
| Format | Carousel or Interactive Graphic |
| Slides | 1. **Inbound**, 2. **Replenishment**, 3. **Picking** |
| Narrative | Brief explanation of how LogisQ handles priority + execution sequencing in each step. |

---

### Section 5: Product Structure (Light)
**Purpose:** Give confidence without diving into architecture

| Key | EN Headline | DE Headline |
|:---|:---|:---|
| Section | One product. Clear responsibilities. | Ein Produkt. Klare Verantwortlichkeiten. |

| Module | EN Description | DE Description |
|:---|:---|:---|
| WMS | Defines business decisions, priorities, and warehouse logic. | Definiert fachliche Entscheidungen, Prioritäten und Lagerlogik. |
| PER | Executes defined processes in a controlled and observable way. | Führt definierte Prozesse kontrolliert und nachvollziehbar aus. |
| MFC | Translates execution requests into physical movements. | Übersetzt Ausführungsanforderungen in physische Bewegungen. |
| Communication Hub | Connects external systems and equipment without embedding logic. | Bindet externe Systeme und Anlagen an, ohne Logik zu vermischen. |
| Fleet Management | Coordinates mobile robots and vehicles within the execution flow. | Koordiniert mobile Fahrzeuge innerhalb des Ausführungsflusses. |

**Rules:** Product ≠ actor. No verbs like "decides" or "owns" unless module-qualified.

---

### Section 6: Benefits (Reordered)
**Purpose:** Translate principle → business outcomes

| Order | Benefit | EN Description | DE Description |
|:---|:---|:---|:---|
| 1 | Shorter Project Runtimes | Projects go live faster because execution behavior is defined early and does not change late. | Schnellerer Go-Live, weil das Ausführungsverhalten früh festgelegt und später nicht mehr verändert wird. |
| 2 | Risk-Free Modernization | Upgrade or extend existing warehouses without rewriting execution logic. | Erweiterung oder Modernisierung bestehender Lager ohne Neuentwicklung der Ausführungslogik. |
| 3 | Operational Clarity | Clear visibility into priorities, execution state, and dependencies during operation. | Transparenz über Prioritäten, Ausführungsstatus und Abhängigkeiten im laufenden Betrieb. |
| 4 | Investment Protection | System structure remains stable while individual modules evolve. | Stabile Systemstruktur bei gleichzeitiger Weiterentwicklung einzelner Module. |
| 5 | True Modularity | Modules can be replaced or extended without breaking execution consistency. | Austausch oder Erweiterung von Modulen ohne Bruch in der Ausführung. |

**Rules:** Digital Twin NOT named here. Each benefit tied implicitly to "no reinterpretation".

---

### Section 7: Digital Twin (Repositioned)
**Purpose:** Reintroduce correctly as optional design-time tool

| Key | EN | DE |
|:---|:---|:---|
| Headline | Design-time transparency (optional) | Transparenz in der Planungsphase (optional) |
| Para 1 | Digital Twin technology supports understanding, alignment, and validation during design and planning. | Digital-Twin-Technologie unterstützt Verständnis, Abstimmung und Validierung in der Planung. |
| Para 2 | It improves communication and confidence — without replacing execution logic. | Sie verbessert Kommunikation und Sicherheit — ersetzt jedoch keine Ausführungslogik. |

---

### Section 8: Trust & Next Steps
**Purpose:** Let different audiences self-select

| Key | EN | DE |
|:---|:---|:---|
| Headline | Go deeper — or start a conversation | Jetzt tiefer einsteigen oder direkt sprechen |
| CTA 1 | Explore the Technology | Technologie entdecken |
| CTA 2 | See Typical Use Cases | Typische Anwendungsfälle ansehen |
| CTA 3 | Talk to Sales | Kontakt aufnehmen |

---

## Part 2: Technology Page Refinement

### Files to Modify
- `src/dictionaries/en.json` — `technologyPage` object
- `src/dictionaries/de.json` — `technologyPage` object
- `src/app/[locale]/technology/page.tsx` — Component structure (if needed)

### Section Breakdown

### Section 1: Intro
| Key | EN | DE |
|:---|:---|:---|
| Headline | Why LogisQ-WES works reliably in real warehouses | Warum LogisQ-WES im realen Lagerbetrieb zuverlässig funktioniert |
| Body | LogisQ-WES is designed to execute warehouse processes **as defined**, not as reinterpreted later.<br><br>Its architecture removes semantic gaps between planning, execution, and operation. | LogisQ-WES ist darauf ausgelegt, Warehouse-Prozesse **so auszuführen, wie sie definiert wurden** —<br><br>nicht so, wie sie später neu interpretiert werden.<br><br>Die Architektur vermeidet semantische Brüche zwischen Planung, Ausführung und Betrieb. |

### Section 2: System Boundaries
| Key | EN | DE |
|:---|:---|:---|
| Headline | Clear responsibilities instead of blurred control | Klare Zuständigkeiten statt vermischter Kontrolle |
| Intro | LogisQ-WES is a product composed of specialized modules. Each module has a **strict, non-overlapping responsibility**. | LogisQ-WES ist ein Produkt aus spezialisierten Modulen. Jedes Modul hat eine **klar abgegrenzte Verantwortung**. |
| **WMS** | Defines business decisions, priorities, and warehouse logic | Definiert fachliche Entscheidungen, Prioritäten und Lagerlogik |
| **PER** | Executes defined processes in a controlled and observable way | Führt definierte Prozesse kontrolliert und nachvollziehbar aus |
| **MFC** | Translates execution requests into physical movements | Übersetzt Ausführungsanforderungen in physische Bewegungen |
| **Hub** | Connects external systems and equipment without embedding logic | Übernimmt technische Integration und Nachrichtenverarbeitung |
| **Fleet** | Coordinates mobile vehicles within execution boundaries | Koordiniert mobile Fahrzeuge innerhalb klarer Ausführungsgrenzen |

### Section 3: Execution Model
| Key | EN | DE |
|:---|:---|:---|
| Headline | Workflow-first, deterministic execution | Workflow-basiert und deterministisch |
| Intro | Execution in LogisQ-WES follows a **workflow-first model**: | Die Ausführung in LogisQ-WES folgt einem **Workflow-basierten Modell**: |
| P1 | Processes are defined explicitly | Prozesse werden explizit definiert |
| P2 | Execution follows these definitions exactly | Die Ausführung folgt diesen Definitionen exakt |
| P3 | Runtime behavior is deterministic and traceable | Das Laufzeitverhalten ist deterministisch und nachvollziehbar |

### Section 4: Safety & Control
| Key | EN | DE |
|:---|:---|:---|
| Headline | Enforcement over trust | Durchsetzung statt Vertrauen |
| Intro | Execution is governed by explicit authorization and scope rules: | Die Ausführung ist durch explizite Regeln abgesichert: |
| P1 | Every execution runs within a defined **ProcessScope** | Jede Ausführung erfolgt innerhalb eines definierten **ProcessScope** |
| P2 | Only authorized actions are allowed to execute | Nur autorisierte Aktionen dürfen ausgeführt werden |
| P3 | Out-of-scope execution attempts are rejected | Ausführungen außerhalb des Gültigkeitsbereichs werden verhindert |

### Section 5: Architecture Stack
| Key | EN | DE |
|:---|:---|:---|
| Headline | A platform designed for controlled execution | Eine Plattform für kontrollierte Ausführung |
| Intro | LogisQ-WES runs on the **ArconQ Platform**, providing: | LogisQ-WES läuft auf der **ArconQ-Plattform** und nutzt: |
| List | Service orchestration, Event-driven communication, Observability, Controlled deployment | Service-Orchestrierung, Ereignisbasierte Kommunikation, Nachvollziehbarkeit, Kontrollierte Deployments |
| Bridge | On top of ArconQ, domain-specific modules implement warehouse execution. | Darauf aufbauend setzen WMS, PER und MFC die Warehouse-Ausführung um. |

### Section 6: Integration & APIs
| Key | EN | DE |
|:---|:---|:---|
| Headline | Event-driven, responsibility-aware integration | Ereignisbasiert und zuständigkeitsklar |
| Intro | LogisQ-WES integrates via events and messages, not tight coupling. | LogisQ-WES integriert Systeme über Ereignisse und Nachrichten — nicht über enge Kopplung. |
| Steps | PLC emits event → Hub normalizes → PER evaluates → MFC executes | PLC sendet Ereignis → Hub normalisiert → PER bewertet → MFC setzt um |
| Bridge | Data ownership and decision authority remain explicit at every step. | Datenhoheit und Entscheidungsbefugnis bleiben jederzeit klar definiert. |

### Section 7: Digital Twin (Tech Page)
| Key | EN | DE |
|:---|:---|:---|
| Headline | Design-time transparency, not runtime control | Transparenz in der Planung — nicht in der Laufzeitsteuerung |
| Intro | Digital Twin capabilities support design validation and alignment. | Digital-Twin-Funktionen unterstützen Verständnis und Validierung in der Planung. |
| Bridge | They do **not** replace execution logic at runtime. | Sie ersetzen jedoch keine Ausführungslogik im Betrieb. |

### Section 8: Final Note
| Key | EN | DE |
|:---|:---|:---|
| Text | LogisQ-WES does not optimize execution by guessing.<br>It executes what was defined — consistently, transparently, and safely. | LogisQ-WES optimiert Ausführung nicht durch Annahmen.<br>Es führt aus, was definiert wurde — konsistent, transparent und sicher. |

---

## Part 3: Diagram Captions

### Diagrams to Create/Update

| # | Diagram Type | EN Caption | DE Caption |
|:---|:---|:---|:---|
| 1 | Overall System Architecture | LogisQ-WES is composed of specialized modules with clearly separated responsibilities. | LogisQ-WES besteht aus spezialisierten Modulen mit klar getrennten Verantwortlichkeiten. |
| 2 | Responsibility & Boundary | Each module operates strictly within its defined scope. No component assumes responsibilities outside its mandate. | Jedes Modul arbeitet strikt innerhalb seines definierten Zuständigkeitsbereichs. |
| 3 | Execution Flow (WMS→PER→MFC) | Decisions defined in WMS are executed by PER and translated into physical actions by MFC. | Im WMS definierte Entscheidungen werden durch PER ausgeführt und durch MFC in physische Aktionen übersetzt. |
| 4 | Event-Driven Integration | External systems communicate through events. The Communication Hub normalizes messages without embedding domain logic. | Externe Systeme kommunizieren über Ereignisse. Der Communication Hub normalisiert Nachrichten, ohne fachliche Logik zu enthalten. |
| 5 | ProcessScope & Safety | All execution is constrained by explicit scope and authorization rules. Out-of-scope actions are prevented by design. | Jede Ausführung ist durch explizite Gültigkeits- und Autorisierungsregeln begrenzt. |
| 6 | Platform Stack (ArconQ) | The ArconQ platform provides orchestration, observability, and controlled deployment. | Die ArconQ-Plattform stellt Orchestrierung, Nachvollziehbarkeit und kontrollierte Deployments bereit. |
| 7 | End-to-End Consistency | The same semantic model is applied from planning to execution, eliminating late-phase reinterpretation. | Dasselbe Bedeutungsmodell wird von der Planung bis zur Ausführung verwendet. |

---

## Verification Plan

### Pre-Implementation Checks
- [ ] Confirm current `en.json` and `de.json` structure can accommodate new sections
- [ ] Identify if `page.tsx` needs new components for Problem/Difference/Anchor sections

### Post-Implementation Checks
- [ ] **Visual Walkthrough:** Check all 8 homepage sections in EN (localhost:3001/en)
- [ ] **Visual Walkthrough:** Check all 8 homepage sections in DE (localhost:3001/de)
- [ ] **Content Audit:** Line-by-line comparison of every headline/subline against this document
- [ ] **Layer Check:** Confirm Digital Twin is NOT in primary benefits block
- [ ] **Technology Page:** Verify all 7 sections present with correct copy
- [ ] **AX-07 Compliance:** Grep for "WES decides", "WES executes", "WES owns" — must return zero results
