from fastapi import APIRouter

from app.models import StoryRequest, TestGenerationRequest

router = APIRouter()

@router.post("/generate/story", response_model=TestGenerationRequest)
def generate_story(request: StoryRequest) -> TestGenerationRequest:
    # Placeholder for story generation logic
    generated_story = f"Generated story based on input: {request.story}"
    return TestGenerationRequest(
        manual_test_cases=[f"Fake manual test case for: {request.story[:30]}..."],
        bdd_scenarios=["Given a user, When they do X, Then Y happens"],
        edge_cases=["Fake edge case"],
        boundary_tests=["Fake boundary test"],
        test_data_suggestions=["Fake test data suggestion"],
        smoke_tests=["Fake smoke test"],
    )