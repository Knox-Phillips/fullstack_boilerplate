# Full Stack Boilerplate - Project Interview Prep

This is a full-stack web application boilerplate built for rapid development and demonstration during a technical interview. It supports basic CRUD functionality (Create, Read, Update, Delete) for managing a list of items.

## ⚙️ Tech Stack

- **Frontend:** React (with Vite) + Tailwind CSS
- **Backend:** Node.js + Express + Knex.js
- **Database:** PostgreSQL

## ✅ Features

- Add, update, and delete items
- API integration between frontend and backend
- Form handling with error states
- Clean UI with Tailwind CSS
- Environment variables for API URL management

## 🧪 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/project-root.git
cd project-root
```
### 2. Setup backend
``` bash
cd server
npm install
npx knex migrate:latest
npm run dev
```
### 3. Setup frontend
``` bash
cd client
npm install
npm run dev
```
## Environment Variables

### Frontend .env
``` bash
VITE_API_URL=http://localhost:3000
```

### Backend .env
``` bash
PORT=3000
DATABASE_URL=your_postgres_connection_string
```
