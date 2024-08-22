"use client";
import { useRef, useState } from "react";
import Tiptap from "./Tiptap";
import { useToast } from "./ui/use-toast";
import { addJournal } from "@/app/journals/actions";

export function NotePicker() {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  async function clientAction(content: any) {
    const result = await addJournal(content);
  }

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await clientAction(content);
        }}
      >
        <p>Add a new journal</p>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </>
  );
}
