from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import generate

app = FastAPI(title="QA Flow API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate.router)

@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
    