"use client";

import { useState } from "react";
import StoryInput from "@/components/StoryInput";
import { TestGenerationResponse } from "./UI_models";
import TestResults from "@/components/TestResults";

export default function Home() {
  const [result, setResult] = useState<TestGenerationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleStorySubmit = async (story: string) => {
    setIsLoading(true);
    setResult(null);
    const response = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ story }),
    });
    const data = await response.json();
    setResult(data);
    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">QA Flow</h1>

      {!result && !isLoading && (
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Welcome to QA Flow
        </p>
      )}

      <StoryInput onSubmit={handleStorySubmit} />

      {isLoading && <p className="mt-4 text-gray-500">Generating tests...</p>}

      {result && <TestResults results={result} />}
    </main>
  );
}