import { formatCurrentDay } from "@/utils/dateFormatter";
import { moodConverter } from "@/utils/moodConverter";
import { plainTextConverter } from "@/utils/plainTextConverter";
import { textShortener } from "@/utils/textShortener";
import Link from "next/link";
import React from "react";

export interface JournalItemDataProps {
  currentMood: string;
  insertedAt: string;
  journalText: string;
  journalId: string;
}

const JournalItem = ({
  currentMood,
  insertedAt,
  journalText,
  journalId,
}: JournalItemDataProps) => {
  const plainText = plainTextConverter(journalText);
  const safeText = plainText ?? undefined;
  const shortenedTextSM = textShortener(safeText, 30);
  const shortenedTextLG = textShortener(safeText, 120);

  return (
    <Link
      href={{
        pathname: `/journals/${journalId}`,
        query: {
          cM: currentMood,
          iA: insertedAt,
          jT: safeText,
        },
      }}
      className="md:p-5 flex flex-col md:bg-slate-200 md:dark:text-slate-900 rounded-lg md:w-[30%] md:h-[250px] hover:bg-slate-300 "
    >
      <div className="hidden md:flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <p className="hidden md:flex">{moodConverter(currentMood)}</p>
          <p className="font-bold text-lg hidden md:flex">
            {currentMood[0].toUpperCase() + currentMood.substring(1)}
          </p>
        </div>
        <p className="text-slate-600 md:text-end text-sm">
          {formatCurrentDay(insertedAt)}
        </p>
      </div>
      <div className="hidden md:flex w-full h-full md:py-3 break-words overflow-wrap">
        {shortenedTextLG}
      </div>
      <p className="text-slate-600 md:text-end text-sm md:hidden">
        {formatCurrentDay(insertedAt)}
      </p>
      <div className="flex p-3 border items-center rounded-md md:border-none md:items-center gap-5 bg-slate-200 dark:text-slate-900 md:hidden">
        <p>{moodConverter(currentMood)}</p>
        <div>
          <p className="font-bold text-lg">
            {currentMood[0].toUpperCase() + currentMood.substring(1)}
          </p>
          <p>{shortenedTextSM}</p>
        </div>
      </div>
    </Link>
  );
};

export default JournalItem;
