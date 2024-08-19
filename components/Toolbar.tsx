import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { type Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
  content: string;
};

export function Toolbar({ editor, content }: Props) {
  if (!editor) return null;

  return (
    <div className="px-4 py-4 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-gray-700"></div>
  );
}
