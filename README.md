# 🧠 **AI-Chat-Portal**

### Intelligent Real-Time Chat System powered by OpenAI  
**Full Stack Development Final Submission**

---

## 📘 Overview

**AI-Chat Portal** is a full-stack intelligent chat system that allows users to chat with an AI assistant (LLM) in real-time.  
Users can securely log in, interact with AI, and manage their chat history — stored persistently in a PostgreSQL database.

This system supports:

- 🔐 User authentication (JWT)
- 🤖 Real-time AI chat powered by OpenAI GPT
- 💾 Conversation storage & retrieval
- 🧭 Chat history listing in sidebar
- ⚙️ Token-secured REST API (Django + DRF)
- 🎨 Fully responsive frontend built with React + Tailwind CSS

---

## ⚙️ Features

### 💬 Core Chat
- Real-time chat with AI using **OpenAI GPT-4o-mini**
- Contextual AI responses
- Persistent chat history per user

### 👤 Authentication
- JWT-based Login & Registration  
- Password Reset via **SendGrid**
- Secure API access per user session

### 🧭 Conversation Management
- Start and continue conversations seamlessly  
- View stored chat history in sidebar  
- Auto-created “Main Chat” for every user  

### 🎨 UI Features
- Modern, responsive Tailwind design  
- Dark mode–friendly layout  
- Typing loader animation for AI replies  
- Markdown and syntax highlighting support  

---

## 🧩 Tech Stack

### **Backend**
- Django  
- Django REST Framework  
- PostgreSQL  
- Python 3.12  
- OpenAI API (GPT-4o-mini)

### **Frontend**
- React (Vite)  
- TypeScript  
- Tailwind CSS  
- Axios  
- React Query  
- React Markdown + Syntax Highlighter  

---

## 🗄️ Database Schema

### **Conversations Table**
| Field      | Type     | Description        |
| ---------- | -------- | ------------------ |
| id         | UUID     | Primary Key        |
| user       | FK       | Linked to User     |
| title      | String   | Conversation Title |
| started_at | DateTime | Start Time         |
| ended_at   | DateTime | End Time           |
| status     | String   | Active / Ended     |

### **Messages Table**
| Field        | Type     | Description            |
| ------------ | -------- | ---------------------- |
| id           | UUID     | Primary Key            |
| conversation | FK       | Linked to Conversation |
| sender       | String   | "user" or "assistant"  |
| content      | Text     | Message Text           |
| created_at   | DateTime | Timestamp              |

---

## 📂 Project Structure

AI-Chat-Portal/
│
├── backend/
│ ├── api/
│ │ ├── views.py # ChatAPIView, Auth Views
│ │ ├── urls.py # API Endpoints
│ │ ├── serializers.py
│ │ ├── models.py
│ │ └── token_views.py
│ ├── manage.py
│ ├── server/
│ │ └── settings.py # Django + PostgreSQL Config
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ └── HomePage.tsx
│ │ ├── components/
│ │ │ ├── AppSidebar.tsx
│ │ │ ├── Login.tsx
│ │ │ ├── Register.tsx
│ │ │ ├── TypingLoader.tsx
│ │ │ └── MainLayout.tsx
│ │ ├── context/
│ │ │ └── AuthContext.tsx
│ │ ├── lib/
│ │ │ └── api.ts
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── tailwind.config.js
│ └── package.json
│
├── .env
├── README.md
└── sample_data/


---

##  Setup Instructions

### 🪄 1️⃣ Clone Repository
```bash
git clone https://github.com/suryanarendrareddy/AI-Chat-Portal.git
cd AI-Chat-Portal

🐍 Backend Setup (Django + PostgreSQL)
1️⃣ Create Virtual Environment
cd backend
python -m venv .venv
.venv\Scripts\activate     # For Windows
# or
source .venv/bin/activate  # For Mac/Linux

2️⃣ Install Dependencies
pip install -r requirements.txt

3️⃣ Configure Environment Variables (.env)
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

OPENAI_API_KEY=sk-xxxxx
DATABASE_URL=postgres://postgres:yourpassword@localhost:5432/ai_chat_db

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=apikey
EMAIL_HOST_PASSWORD=SG.xxxxx
DEFAULT_FROM_EMAIL=AI Chat Portal <no-reply@aichatportal.com>

4️⃣ Run Migrations
python manage.py migrate

5️⃣ Start the Backend Server
python manage.py runserver


✅ Backend running at → http://127.0.0.1:8000/

⚛️ Frontend Setup (React + Vite + Tailwind)
1️⃣ Install Node Modules
cd frontend
npm install

2️⃣ Run the Frontend
npm run dev


✅ Frontend running at → http://localhost:5173/

🔐 API Endpoints
Endpoint	Method	Description
/api/auth/register/	POST	Register new user
/api/auth/login/	POST	Obtain JWT tokens
/api/auth/refresh/	POST	Refresh JWT token
/api/chat/	POST	Send message to AI
/api/chat/<uuid:chat_id>/	GET	Retrieve chat messages
/api/conversations/	GET/POST	Manage user conversations
🧠 AI Integration

Model: GPT-4o-mini (OpenAI)
Library: openai Python SDK

Features:

Contextual understanding

Markdown + code rendering

Assistant persona: Ergosphere

📸 UI Preview
🔐 Login Page

JWT Authentication

Clean gradient UI

💬 Chat Interface

Real-time AI replies

Syntax-highlighted Markdown

Persistent session storage

🚀 Future Enhancements

🧠 AI-generated conversation summaries

🔍 Semantic conversation search

📄 Export chats as PDF

🤖 Multi-model support (Claude, Gemini, LM Studio)

🌗 Light/Dark mode toggle

👤 Author

Muli Surya Narendra Reddy
Full Stack Developer
📍 Bengaluru, India
🔗 GitHub Profile