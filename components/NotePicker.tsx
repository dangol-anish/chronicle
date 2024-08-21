"use client";
import { useState } from "react";
import Tiptap from "./Tiptap";

export function NotePicker() {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  return (
    <>
      <form>
        <h1>Note Picker</h1>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </>
  );
}
