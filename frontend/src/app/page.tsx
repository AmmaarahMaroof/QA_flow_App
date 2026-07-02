"use client";

import { useState } from "react";
import StoryInput from "@/components/StoryInput";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
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
    setResult(JSON.stringify(data, null, 2));
    setIsLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">QAFlow</h1>
      <StoryInput onSubmit={handleStorySubmit} />
      {isLoading && <p className="mt-4 text-gray-500">Generating tests...</p>}
      {result && (
        <pre className="mt-8 max-w-2xl whitespace-pre-wrap text-sm bg-gray-100 p-4 rounded-md">
          {result}
        </pre>
      )}
    </main>
  );
}