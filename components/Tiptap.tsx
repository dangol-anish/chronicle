"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ content, onChange, pending }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "flex flex-col px-4 py-3 justify-start border",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col border h-[70vh] rounded-md gap-3 p-5  justify-center items-center">
      <Toolbar pending={pending} editor={editor} content={content} />
      <EditorContent
        style={{
          height: "60vh",
          width: "60vw",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
