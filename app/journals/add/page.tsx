"use client";
import Tiptap from "@/components/Tiptap";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AddJournal() {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  return (
    <>
      <Link className="flex items-center" href="/journals">
        <ChevronLeft />
        <header>Go Back</header>
      </Link>

      <main>
        <form action="">
          <div>This the form</div>
          <Tiptap
            content={content}
            onChange={(newContent: string) => handleContentChange(newContent)}
          />
        </form>
      </main>
    </>
  );
}
