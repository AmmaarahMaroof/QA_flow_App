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
    <div>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        rows={8}
        placeholder="As a user, I want to..."
      />
      <button onClick={handleSubmit}>Generate Test Cases</button>
    </div>
  );
  
}