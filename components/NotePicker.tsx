"use client";
import { useState } from "react";
import Tiptap from "./Tiptap";
import { useToast } from "./ui/use-toast";
import { addJournal } from "@/app/journals/actions";
import { CurrentMood } from "./Journals/CurrentMood";

export function NotePicker() {
  const [content, setContent] = useState<string>("");
  const [currentMood, setCurrentMood] = useState("neutral");
  const [pending, setPending] = useState(false);
  const { toast } = useToast();
  const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  async function clientAction(content: string, currentMood: string) {
    setPending(true);

    if (!content) {
      toast({
        variant: "destructive",
        description: "Content cannot be empty",
      });
      setPending(false);
      return;
    }

    const result = await addJournal({ content, currentMood });

    console.log(result);
    setPending(false);

    if (result?.error) {
      toast({
        variant: "destructive",
        description: result.error,
      });
      return;
    }

    await wait();
  }
  return (
    <form
      className="flex items-center flex-col w-full gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        await clientAction(content, currentMood);
      }}
    >
      <h2>What have you been up to?</h2>
      <CurrentMood currentMood={currentMood} setCurrentMood={setCurrentMood} />
      <Tiptap
        pending={pending}
        content={content}
        onChange={handleContentChange}
      />
    </form>
  );
}
