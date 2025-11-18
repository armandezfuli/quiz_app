# Quiz App

A simple and clean **Quiz Application** built with **React + TypeScript**, featuring multiple-choice questions fetched from a **JSON Server**. Users can take quizzes, view their results, and retry.

---

## 🚀 Tech Stack

This project is built using:

* **React 19**
* **TypeScript**
* **React Router Framework**
* **TailwindCSS**
* **Axios**
* **clsx**
* **JSON Server** (for mock API)

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone <REPO_URL>
cd quiz_app
```

### 2. Install dependencies

```bash
npm install
```

---

## 🗄 Start JSON Server (API)

The quiz data lives inside `db.json`.
Run the server:

```bash
npx json-server --watch db.json --port 4000
```

API Endpoint:

```
http://localhost:4000/questions
```

---

## 🏃 Run Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🏗 Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
app/
 ├── api/           # Axios request handlers
 ├── assets/        # Images and static files
 ├── components/    # Reusable UI components
 ├── hooks/         # Custom React hooks
 ├── routes/        # Application pages/routes
 ├── utils/         # Helper functions
 ├── root.tsx       # App root + layout + error boundary
 ├── routes.ts      # Route definitions
 └── types.ts       # TypeScript types/models
```

---

## 🌐 API Usage

Example Axios request:

```ts
axios.get("http://localhost:4000/questions");
```

---

## ✨ Features

* Fetches questions from JSON Server
* Step-by-step quiz flow
* Multiple-choice question system
* Score calculation
* Clean UI with TailwindCSS
* Routing powered by React Router
* Type-safe components with TypeScript
