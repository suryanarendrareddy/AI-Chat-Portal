# **AI-Chat-Portal**

Intelligent Conversation System with LLM-Powered Analysis
Full Stack development Assignment - Final Submission

## Overview

AI-Chat Portal is a full-stack web application that allows users to chat with an LLM in real time, store conversations, generate summaries, perform symantic search, and ask intelligent questions about past conversations.

This Project includes:

- Real-Time chat with AI
- Conversation Storage
- AI-generated summaries
- Semantic search using embeddings
- Querying past conversations
- Full REST API (Django REST framework)
- React + Tailwind responsive UI

## Features

Core Features

- Real - Time Chat with LLM (OpenAI / Claude / Gemini / LM Studio)
- Conversation Management
  - Start Conversation
  - Continue chat
  - End Conversation
  - Auto generate summary
- Intelligent conversation analysis
  - Topic Extraction
  - Key decisions
  - sentiment analysis
- Semantic Search
  - Find conversations by meaning
- AI Query System
  - " What did I talk about last week? "
  - " Show my travel planning conversations ? "
- Conversation Insights
  - Summary
  - Topics
  - Action Items

## Tech Stack

Backend

- Django
- Django REST Framework
- PostgreSQL
- Python
- OpenAI/Claude/Gemini OR LM Studio

Frontend

- React
- Tailwind CSS
- Axios

## Database Schema

Conversations Table

| Field      | Type     | Description          |
| ---------- | -------- | -------------------- |
| id         | UUID     | Primary key          |
| title      | String   | Conversation title   |
| started_at | DateTime | Start time           |
| ended_at   | DateTime | End time             |
| status     | String   | active/ended         |
| summary    | Text     | AI generated summary |

Messages Table

| Field           | Type     | Description               |
| --------------- | -------- | ------------------------- |
| id              | UUID     | Primary key               |
| conversation_id | FK       | Reference to conversation |
| sender          | user/ai  | Who sent the message      |
| content         | Text     | Message text              |
| timestamp       | DateTime | When message was sent     |

## Project Structure

```bash
AI-Chat-Portal/
│
├── backend/
│   ├── ai/
│   │   ├── embeddings.py
│   │   ├── summarizer.py
│   │   └── llm_client.py
│   ├── api/
│   ├── models/
│   ├── serializers/
│   ├── views/
│   ├── urls.py
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   ├── package.json
│   └── tailwind.config.js
│
├── README.md
└── sample_data/
    ├── conversations.json
    └── insights.json
```

## Setup Instructions

1. Clone Repository

- git clone <https://github.com/suryanarendrareddy/AI-Chat-Portal.git>
- cd AI-Chat-Portal

## Backend Setup (Django + PostgreSQL)

### **1. Create Virtual Environment**

```bash
cd backend
python -m venv env
source env/bin/activate   # For Linux/Mac
env\Scripts\activate      # For Windows
```

### **2. Install Dependencies**

```bash
pip install -r requirements.txt
```

### **3. Configure PostgreSQL**

Update **settings.py**:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'chatdb',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### **4. Run Migrations**

```bash
python manage.py migrate
```

### **5. Run Backend Server**

```bash
python manage.py runserver
```

## Frontend Setup (React + Tailwind)

### **1. Install Node Modules**

```bash
cd frontend
npm install
```

### **2.Run Frontend**

```sql
npm run dev
```

## API Documentation (OpenAPI / Swagger)

Once the backend is running:

### Swagger UI

```
http://localhost:8000/api/docs/
```

---

## API Endpoints

### **GET Endpoints**

```http
GET /api/conversations/           # List all conversations
GET /api/conversations/<id>/      # Full message history
```

### **POST Endpoints**

```http
POST /api/conversations/start/    # Start new chat
POST /api/conversations/send/     # Send message
POST /api/conversations/end/      # End conversation & generate summary
POST /api/conversations/query/    # Ask AI about past chats
```







## 👤 Author

**Muli Surya Narendra Reddy**
Full-Stack Developer
