from fastapi import FastAPI

app = FastAPI(title="QA Flow API")

@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
    