
# Contract Management Platform

A frontend-based **Contract Management Platform** built from scratch to demonstrate product thinking, UI design, state management, and clean code architecture. The project allows users to create reusable contract templates (blueprints), generate contracts, and manage their lifecycle.

---

## Features

### 1. Blueprint Creation

* Create a blueprint as a reusable contract template.
* Configurable field types:
  * Text
  * Date
  * Signature
  * Checkbox
* Basic positioning of fields on a page.
* Stores metadata for each field:
  * Type
  * Label
  * Position
* Data persistence (local or mocked).

### 2. Contract Creation from Blueprint

* Select an existing blueprint.
* Generate a contract that inherits all blueprint fields.
* Fill values for each field.

### 3. Contract Lifecycle

Each contract follows a lifecycle:  
`Created → Approved → Sent → Signed → Locked`

### 4. User Interaction

* Fill and edit contract fields.
* Track contract status and updates.

---

## Tech Stack
 
●  React 
●  TypeScript 
●  Component-based architecture 
●  Proper state management 
●  Clean folder structure 

## Project Structure

```

src/
├── assets/                # Images, icons, fonts
├── components/            # Reusable UI components
│   ├── BlueprintCard.tsx
│   ├── ContractCard.tsx
│   ├── FieldInput.tsx
│   └── StatusFilter.tsx
├── pages/                 # Application pages
│   ├── Blueprints.tsx
│   ├── Contracts.tsx
│   └── ContractDetail.tsx
├── state/                 # Global state management
│   └── store.ts
├── types/                 # TypeScript types
│   └── index.ts
├── utils/                 # Helper functions
│   └── lifecycle.ts
├── App.tsx                # Main app component
├── index.css              # Global CSS
└── main.tsx               # Entry point

````

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ContractManagementPlatform.git
````

2. Navigate to the project directory:

```bash
cd ContractManagementPlatform
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## Goals & Learning Outcomes

* Learn **frontend architecture** from scratch.
* Implement **state management** for dynamic forms.
* Understand **contract lifecycle management** in a web application.
* Practice **clean code practices** and **modular component design**.

---

## Roadmap / Future Enhancements

* Add **backend integration** (Node.js/Express + Database) to store contracts persistently.
* Add **authentication** for multiple users.
* Implement **real-time contract collaboration**.
* Include **export/print contracts** as PDF.

---

## Author

**Dimple Bhangale**
CSE (Cloud Computing) | Backend & Cloud Development
Learning DevOps & Cloud Architecture

```
