# 🧩 Auth-Based Task Dashboard (Frontend + Backend)

A full-stack authentication-based task management dashboard built using **React, Tailwind CSS, Node.js, Express, and MongoDB**.  
Users can register, log in, and manage their personal tasks securely.

🔗 **Quick Navigation**
- [Overview](#-auth-based-task-dashboard-frontend--backend)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Demo Video](#-demo-video)
- [Setup Instructions](#️-setup-instructions)
- [How to Run the Application](#️-how-to-run-the-application)
- [API Testing](#-api-testing-postman)
- [Production Scaling Notes](#-how-would-you-scale-this-for-production)

---

## 📌 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js

### Tooling
- Vite
- Postman
- Git & GitHub

---

## 📂 Project Structure
intern-project/
├── frontend/
│ ├── src/
│ ├── index.html
│ ├── tailwind.config.js
│ └── vite.config.js
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── server.js
│
└── README.md
---

## 🎥 Demo Video

> 📌 **Working demo of the project**

🔗 video link (YouTube):  
**Demo Video:** https://youtu.be/FetAHn9kkWo

<img width="1919" height="820" alt="image" src="https://github.com/user-attachments/assets/8ed424ba-2c81-496e-8dcc-5a17079af792" />

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AniketChoudhari01/frontend-intern-auth-dashboard.git
cd frontend
```
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
#### Create a .env file inside backend/:
```bash
PORT=5000
MONGO_URI=mongodb+srv://taskManagerDB:mongoTaskManager01@cluster0.scgaj3s.mongodb.net/
JWT_SECRET=thisIsSecretKeyForMyProject
```
#### Start backend server:
```bash
npm run dev
```
#### Backend will run at:
```bash
http://localhost:5000
```
### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
#### Frontend will run at:
```bash
http://localhost:5173
```
#### ▶️ How to Run the Application

Start MongoDB (local or Atlas)

Run backend (npm run dev)

Run frontend (npm run dev)

Open browser → http://localhost:5173

#### 🧪 API Testing (Postman)
```bash
http://localhost:5000/api/v1
```

#### Available Endpoints

POST /auth/register

POST /auth/login

GET /tasks

POST /tasks

PUT /tasks/:id

DELETE /tasks/:id

#### Authorization Header:
```bash
Authorization: Bearer <JWT_TOKEN>
```
### 🚀 How Would You Scale This for Production?

Deploy frontend on Vercel / Netlify

Deploy backend on AWS / Render / Railway

Use environment-based config for secrets

Restrict CORS to trusted domains

Add MongoDB indexes for performance

Use Redis for caching

Add rate limiting and request validation

Implement logging and monitoring

Use Docker and CI/CD pipelines
