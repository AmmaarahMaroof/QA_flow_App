"use client";

import StoryInput from "@/components/StoryInput";

export default function Home() {
  const handleStorySubmit = (story: string) => {
    console.log("Submitted story:", story);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">QAFlow</h1>
      <StoryInput onSubmit={handleStorySubmit} />
    </main>
  );
}