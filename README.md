# QAFlow
AI-powered assistant for Manual Testers and Automation Engineers that reduces the amount of test documentation they have to write.

## What it does

QAFlow takes a Jira User Story and generates:

- Manual Test Cases
- BDD Scenarios
- Edge Cases
- Boundary Tests
- Test Data Suggestions

The goal is to save QA engineers time on repetitive documentation work while keeping a human in the loop to review and refine the output.

## Status

🚧 MVP in active development. Version 1 scope is intentionally minimal — see [Roadmap](#roadmap) below.

## Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS

**Backend**
- FastAPI (Python)
- OpenAI API (initial AI provider)

## Project Structure

```
qaflow/
├── backend/     # FastAPI service — API, business logic, AI prompt handling
│   ├── app/
│   │   ├── main.py
│   │   └── ...
│   └── requirements.txt
└── frontend/    # Next.js app — UI
    └── src/
        └── app/
```

The frontend and backend are two independent services that communicate over HTTP. The frontend has no knowledge of the AI provider or prompt logic — it only calls the backend's API.

## Getting Started

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Runs on `http://127.0.0.1:8000`. Interactive API docs available at `/docs`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:3000`.

## Roadmap

**V1 (current)**
- [x] Backend + frontend project skeleton
- [ ] Paste a Jira User Story
- [ ] Generate Manual Test Cases, BDD Scenarios, Edge Cases, Boundary Tests, and Test Data Suggestions via OpenAI

**Future (not yet started)**
- [ ] Jira Defect Generation
- [ ] Test Report Generation
- [ ] End of Test Reports
- [ ] Jira Integration
- [ ] Authentication
- [ ] Payments

## Development Principles

- Clean architecture, SOLID principles where appropriate
- Keep the MVP small — no databases, auth, or deployment until they're actually needed
- Prompts kept separate from business logic
- Simple over clever