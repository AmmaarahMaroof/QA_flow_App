from fastapi import APIRouter

from app.models import StoryRequest, TestGenerationResponse
from app.ai_service import generate_tests_from_story

router = APIRouter()

@router.post("/generate", response_model=TestGenerationResponse)
def generate_story(request: StoryRequest) -> TestGenerationResponse:
    return generate_tests_from_story(request.story)