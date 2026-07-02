import os

from dotenv import load_dotenv
from google import genai

from app.models import TestGenerationResponse
from app.prompts import TEST_GENERATION_SYSTEM_PROMPT, build_user_prompt

load_dotenv()

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])


def generate_tests_from_story(story: str) -> TestGenerationResponse:
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=build_user_prompt(story),
        config={
            "system_instruction": TEST_GENERATION_SYSTEM_PROMPT,
            "response_mime_type": "application/json",
            "response_schema": TestGenerationResponse,
        },
    )
    return TestGenerationResponse.model_validate_json(response.text)