"use client";
import { useState } from "react";
import Tiptap from "./Tiptap";
import { useToast } from "./ui/use-toast";
import { addJournal } from "@/app/journals/actions";
import { CurrentMood } from "./Journals/CurrentMood";

export function NotePicker() {
  const [content, setContent] = useState<string>("");
  const [currentMood, setCurrentMood] = useState("meh");

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  async function clientAction(content: string, currentMood: string) {
    try {
      await addJournal({ content, currentMood });
      // Display success toast or other UI feedback
    } catch (error) {
      console.error("Failed to add journal:", error);
      // Display error toast or other UI feedback
    }
  }

  return (
    <form
      className="flex items-center flex-col w-full h-screen gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        await clientAction(content, currentMood);
      }}
    >
      <h2>What have you been up to?</h2>
      <CurrentMood currentMood={currentMood} setCurrentMood={setCurrentMood} />
      <Tiptap content={content} onChange={handleContentChange} />
    </form>
  );
}
