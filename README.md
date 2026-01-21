# Contract Management Platform

A frontend-based **Contract Management Platform** built with **React**, **TypeScript**, and **Vite**.  
This project allows users to create **Blueprints** (contract templates) and generate contracts from them. It demonstrates **component-based architecture**, **state management**, and **clean UI design**.

---

## 🚀 Features

- **Blueprint Creation**
  - Create reusable contract templates with configurable fields
  - Supported field types: Text, Date, Signature, Checkbox
  - Field metadata stored: type, label, position

- **Contract Creation from Blueprint**
  - Generate contracts from existing blueprints
  - Fill in values for all fields

- **Contract Lifecycle**
  - Contracts follow a lifecycle:
    ```
    Created → Approved → Sent → Signed → Locked
    ```

- **Frontend Only**
  - Fully implemented using React + TypeScript
  - Local state used for storing blueprints and contracts (mocked persistence)

---

## 🗂 Folder Structure
src/
├─ components/ # Reusable UI components
├─ pages/ 
├─ types/ 
├─ state/ 
├─ utils/ 
├─ App.tsx 
└─ main.tsx 

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript  
- **Bundler:** Vite  
- **Styling:** CSS (or SCSS if implemented)  
- **Version Control:** Git & GitHub  

---

## 💻 Getting Started

### Prerequisites

- Node.js v18+  
- npm v8+  

---

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dimpalb09/contract-management-platform.git
cd contract-management-platform
npm install
npm run dev
```
📁 Available Scripts

npm run dev → Start the dev server

npm run build → Build the project for production

npm run preview → Preview the production build

📌 Next Steps / Improvements

Add persistent storage (e.g., localStorage or backend API)

Add authentication for users and admins

Implement drag-and-drop field positioning for blueprints

Add UI for managing contract lifecycle (Approve, Send, Sign, Lock)



