from pydantic import BaseModel

class StoryRequest(BaseModel):
    story: str

class TestGenerationResponse(BaseModel):
    manual_test_cases: list[str]
    bdd_scenarios: list[str]
    edge_cases: list[str]
    boundary_tests: list[str]
    test_data_suggestions: list[str]
    smoke_tests: list[str]
    