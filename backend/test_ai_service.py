from app.ai_service import generate_tests_from_story

story = "As a user, I want to reset my password via email so that I can regain access to my account if I forget it."

result = generate_tests_from_story(story)
print(result.model_dump_json(indent=2))