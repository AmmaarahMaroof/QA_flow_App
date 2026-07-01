from fastapi import FastAPI

from app.routers import generate

app = FastAPI(title="QA Flow API")

app.include_router(generate.router)

@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
    