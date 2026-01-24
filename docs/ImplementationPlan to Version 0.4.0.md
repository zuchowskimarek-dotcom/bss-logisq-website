# Implementation Plan - Release 0.4.0 (Refining the Argument)

This phase addresses the user's critique regarding the generic nature of the "Benefits" section and the risk of the "Project Playbooks" visuals becoming too detailed or too generic.

## Goal Description
1.  **Sharpen Benefits:** Tie "Investment Protection" and "Modularity" explicitly to the core value proposition of "Stable Execution Semantics" and "No Reinterpretation".
2.  **Visualize Playbooks:** Replace text placeholders with flow diagrams that illustrate *sequencing* (what happens next) without exposing *internal logic* (why it happens).

## User Review Required
> [!IMPORTANT]
> **Playbook Visual Strategy (Flow, not Logic):**
> *   **Constraint:** No decision diamonds or "Check" steps that imply evaluation.
> *   **Litmus Test:** If a viewer asks "Where is the decision made?" and points to the diagram, the diagram is wrong.

## Proposed Changes

### 1. Content: Sharpening "Benefits"
We will rewrite the copy in `en.json` (and `de.json`) for the bottom benefits.

#### [MODIFY] [en.json](file:///src/dictionaries/en.json)
*   **Investment Protection:** "Automation hardware outlasts software cycles because execution semantics remain stable."
*   **True Modularity:** "New technologies integrate without side effects because changes do not leak into execution behavior."

### 2. Design: Project Playbooks Visuals
We will implement 3 specific SVG/Mermaid-style diagrams for the tabs.

#### [MODIFY] [ProjectPlaybooks.tsx](file:///src/components/home/ProjectPlaybooks.tsx)
We will create a `PlaybookDiagram` component that renders a distinct flow for each tab:
*   **Inbound:** `Dock Arrival` -> `Scan` -> `Profile Assignment` -> `Putaway Generation`.
*   **Replenishment:** `Low Stock Event` -> `Task Prioritization` -> `Retrieval` -> `Restock`.
*   **Picking:** `Order Received` -> `Wave Grouping` -> `Pick Task` -> `Consolidation`.

**Visual Style:**
*   Horizontal flow.
*   Simple nodes connected by arrows.
*   **Context:** A subtle baseline or caption labeled "Execution Runtime" (PER) to imply the "rail" these processes run on.

## Verification Plan
1.  **Copy Review:** Verify "Investment Protection" and "Modularity" sections in English and German.
2.  **Visual Check:** Ensure Playbook diagrams look like "Timelines/Sequences".
3.  **Semantic Test:** Verify there are *no* nodes labeled "Check", "Decide", or "Evaluate". All nodes should describe *actions* or *assignments*.
