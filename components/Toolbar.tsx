"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
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
  Heading1,
  Heading3,
} from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  editor: Editor | null;
  content: string;
  pending: boolean;
};

const Toolbar = ({ editor, content, pending }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("bold")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Bold className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("italic")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Italic className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("underline")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Underline className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("strike")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Strikethrough className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("heading", { level: 1 })
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Heading1 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("heading", { level: 2 })
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Heading2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("heading", { level: 3 })
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Heading3 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("bulletList")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <List className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.isActive("orderedList")
                ? "bg-slate-900 text-white dark:text-slate-900 dark:bg-white"
                : "text-slate-900 bg-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <ListOrdered className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.can().undo() &&
              "bg-slate-600 text-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Undo className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={`border px-2 py-1 sm:px-3 sm:py-2 rounded-md 
            ${
              editor.can().redo() &&
              "bg-slate-600 text-white dark:bg-slate-900 dark:text-white"
            }`}
        >
          <Redo className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      {pending ? (
        <Button disabled={pending} type="submit" className="w-full sm:w-auto">
          Adding...
        </Button>
      ) : (
        <Button type="submit" className="w-full sm:w-auto">
          Add
        </Button>
      )}
    </div>
  );
};

export default Toolbar;
