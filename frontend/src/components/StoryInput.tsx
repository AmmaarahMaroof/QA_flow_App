"use client";

import { useState } from "react";

interface StoryInputProps {
  onSubmit: (story: string) => void;
}

export default function StoryInput({ onSubmit }: StoryInputProps) {
  const [story, setStory] = useState("");

  const handleSubmit = () => {
    if (story.trim().length === 0) return;
    onSubmit(story);
  };

  return (
    <div className="w-full max-w-2xl">
      <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2 underline underline-offset-2">
        Paste your User Story Below:
        
      </label>
      <textarea
        id="story"
        value={story}
        onChange={(e) => setStory(e.target.value)}
        rows={8}
        className="w-full rounded-md border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="As a user, I want to..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Generate Test Cases
      </button>
    </div>
  );

}