import { Bold, Italic, Strikethrough } from "lucide-react";
import { Editor } from "@tiptap/react";
import { Button } from "./ui/button";

type Props = {
  editor: Editor | null;
  content: string;
};

export function Toolbar({ editor, content }: Props) {
  if (!editor) return null;
  return (
    <>
      <div>
        <Button
          className={
            editor.isActive("bold")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-sky-400"
          }
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
        >
          <Bold className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
