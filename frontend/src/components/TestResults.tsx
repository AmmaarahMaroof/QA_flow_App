import { TestGenerationResponse } from "@/app/UI_models";

interface TestResultsProps {
    results: TestGenerationResponse;
}

export default function TestResults({ results }: TestResultsProps) {
    return (
        <div className="mt-8 w-full max-w-2xl space-y-8">
            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    Manual Test Cases
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.manual_test_cases.map((testCase, index) => (
                        <li key={index}>{testCase}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    BDD Scenarios
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.bdd_scenarios.map((scenario, index) => (
                        <li key={index}>{scenario}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    Edge Cases
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.edge_cases.map((edgeCase, index) => (
                        <li key={index}>{edgeCase}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    Boundary Tests
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.boundary_tests.map((boundaryTest, index) => (
                        <li key={index}>{boundaryTest}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    Test Data Suggestions
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.test_data_suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
                    Smoke Tests
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {results.smoke_tests.map((smokeTest, index) => (
                        <li key={index}>{smokeTest}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}


