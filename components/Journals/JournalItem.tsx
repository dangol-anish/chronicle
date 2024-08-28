import { formatCurrentDay } from "@/utils/dateFormatter";
import { moodConverter } from "@/utils/moodConverter";
import { plainTextConverter } from "@/utils/plainTextConverter";
import { textShortener } from "@/utils/textShortener";
import React from "react";

export interface JournalItemDataProps {
  currentMood: string;
  insertedAt: string;
  journalText: string;
}

const JournalItem = ({
  currentMood,
  insertedAt,
  journalText,
}: JournalItemDataProps) => {
  const plainText = plainTextConverter(journalText);
  const safeText = plainText ?? undefined;
  const shortenedText = textShortener(safeText, 10);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-slate-600 dark:text-white text-sm">
        {formatCurrentDay(insertedAt)}
      </p>
      <div className="flex border rounded-md p-3 bg-slate-200 dark:text-slate-900 items-center gap-5">
        <p>{moodConverter(currentMood)}</p>
        <div>
          <p className="font-bold text-lg">
            {currentMood[0].toUpperCase() + currentMood.substring(1)}
          </p>
          <p>{shortenedText}</p>
        </div>
      </div>
    </div>
  );
};
export default JournalItem;
