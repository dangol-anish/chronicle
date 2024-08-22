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
        className="flex items-center flex-col w-full h-screen"
        onSubmit={async (e) => {
          e.preventDefault();

          await clientAction(content);
        }}
      >
        <h2>Add a new journal</h2>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </>
  );
}
