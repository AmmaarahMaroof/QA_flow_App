import { useState } from "react";
import StoryInput from "@/components/StoryInput";



export interface TestGenerationResponse {
    manual_test_cases: string[];
    bdd_scenarios: string[];
    edge_cases: string[];
    boundary_tests: string[];
    test_data_suggestions: string[];
    smoke_tests: string[];
}