from fastapi import APIRouter

from app.models import StoryRequest, TestGenerationResponse

router = APIRouter()

@router.post("/generate", response_model=TestGenerationResponse)
def generate_story(request: StoryRequest) -> TestGenerationResponse:
    # Placeholder for story generation logic
    generate = f"Generated story based on input: {request.story}"
    return TestGenerationResponse(
        manual_test_cases=[f"Fake manual test case for: {request.story[:30]}..."],
        bdd_scenarios=["Given a user, When they do X, Then Y happens"],
        edge_cases=["Fake edge case"],
        boundary_tests=["Fake boundary test"],
        test_data_suggestions=["Fake test data suggestion"],
        smoke_tests=["Fake smoke test"],
    )