import { formatCurrentDay } from "@/utils/dateFormatter";
import { moodConverter } from "@/utils/moodConverter";
import { plainTextConverter } from "@/utils/plainTextConverter";
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
  return (
    <div className="flex flex-col gap-1">
      <p className="text-slate-600 text-sm">{formatCurrentDay(insertedAt)}</p>
      <div className="flex border rounded-md p-3 bg-slate-200">
        <p>{moodConverter(currentMood)}</p>
        <div>
          <p>{currentMood[0].toUpperCase() + currentMood.substring(1)}</p>
          <p>{plainTextConverter(journalText)}</p>
        </div>
      </div>
    </div>
  );
};

export default JournalItem;
