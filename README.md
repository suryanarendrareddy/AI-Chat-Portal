AI-Chat-Portal
🧠 Intelligent Real-Time Chat System powered by OpenAI

Full Stack Development Final Submission

📘 Overview

AI-Chat Portal is a full-stack intelligent chat system that allows users to chat with an AI assistant (LLM) in real-time.
Users can log in securely, interact with AI, and manage all their past conversations — all stored persistently in a PostgreSQL database.

This system supports:

User authentication (JWT)

Real-time AI chat powered by OpenAI GPT

Conversation storage & retrieval

Chat history listing in a sidebar

Token-secured REST API (Django + DRF)

Fully responsive frontend built with React + Tailwind CSS

⚙️ Features
💬 Core Chat

Real-time chat with AI using OpenAI GPT models (gpt-4o-mini)

AI responds contextually to user queries

Persistent chat history for each logged-in user

👤 Authentication

User Registration & Login using JWT

Password Reset (Email via SendGrid)

Secure token-based access to chat endpoints

🧭 Conversation Management

Start and continue conversations seamlessly

View stored chat history in sidebar

Auto-created “Main Chat” for every user

🎨 UI Features

Modern responsive UI built with Tailwind

Dark Mode friendly styling

Typing loader animation for AI responses

Smooth scroll & markdown support for code snippets

🧩 Tech Stack
Backend

Django

Django REST Framework

PostgreSQL

Python 3.12

OpenAI API (GPT-4o-mini)

Frontend

React (Vite)

TypeScript

Tailwind CSS

Axios

React Query

React Markdown + Syntax Highlighter

🗄️ Database Schema
Conversations Table
Field	Type	Description
id	UUID	Primary Key
user	FK	Linked to User
title	String	Conversation Title
started_at	DateTime	Start Time
ended_at	DateTime	End Time
status	String	Active / Ended
Messages Table
Field	Type	Description
id	UUID	Primary Key
conversation	FK	Linked to Conversation
sender	String	"user" or "assistant"
content	Text	Message Text
created_at	DateTime	Timestamp
📂 Project Structure
AI-Chat-Portal/
│
├── backend/
│   ├── api/
│   │   ├── views.py          # ChatAPIView, Auth Views
│   │   ├── urls.py           # All API endpoints
│   │   ├── serializers.py
│   │   ├── models.py
│   │   └── token_views.py
│   ├── manage.py
│   ├── server/
│   │   └── settings.py       # Django + PostgreSQL config
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── HomePage.tsx
│   │   ├── components/
│   │   │   ├── AppSidebar.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── TypingLoader.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── context/
│   │   │   └── AuthContext.tsx
│   │   ├── lib/
│   │   │   └── api.ts        # Axios + API handlers
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.js
│   └── package.json
│
├── .env
├── README.md
└── sample_data/

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/suryanarendrareddy/AI-Chat-Portal.git
cd AI-Chat-Portal

🐍 Backend Setup (Django + PostgreSQL)
1. Create Virtual Environment
cd backend
python -m venv .venv
.venv\Scripts\activate     # For Windows
# or
source .venv/bin/activate  # For Mac/Linux

2. Install Dependencies
pip install -r requirements.txt

3. Configure Environment (.env)
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

4. Run Migrations
python manage.py migrate

5. Run Backend Server
python manage.py runserver


✅ Backend running at http://127.0.0.1:8000/

⚛️ Frontend Setup (React + Vite + Tailwind)
1. Install Node Modules
cd frontend
npm install

2. Run Frontend
npm run dev


✅ Frontend running at http://localhost:5173/

🔐 API Endpoints
Endpoint	Method	Description
/api/auth/register/	POST	Register new user
/api/auth/login/	POST	Get JWT tokens
/api/auth/refresh/	POST	Refresh JWT token
/api/chat/	POST	Send message to AI
/api/chat/<uuid:chat_id>/	GET	Retrieve all chat messages
/api/conversations/	GET/POST	Manage user conversations
🧠 AI Integration

Model: GPT-4o-mini (OpenAI)

Library: openai Python SDK

Features:

Contextual understanding

Markdown code rendering

Assistant persona: “Ergosphere”

📸 UI Preview

Login Page

JWT Authentication

Modern gradient design

Chat Interface

Real-time AI replies

Syntax-highlighted code

Persistent chat sessions

🚀 Future Enhancements

AI conversation summarization

Conversation search (semantic)

Chat export as PDF

Multi-model support (Claude, Gemini, LM Studio)

Dark/Light mode toggle

👤 Author

Muli Surya Narendra Reddy
Full-Stack Developer
📍 Bengaluru, India
📧 LinkedIn / GitHub