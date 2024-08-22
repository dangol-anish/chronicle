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
        <>Add a new journal</>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </>
  );
}
