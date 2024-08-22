"use client";
import { useRef, useState } from "react";
import Tiptap from "./Tiptap";
import { useToast } from "./ui/use-toast";

export function NotePicker() {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  return (
    <>
      <form>
        <p>Add a new journal</p>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </>
  );
}
