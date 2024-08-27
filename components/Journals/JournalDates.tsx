"use client";
import { useState, useEffect } from "react";
import { getJournals } from "@/app/journals/actions";
import { Button } from "../ui/button";
import { monthConverter } from "@/utils/getJournalDates";
import JournalItem from "./JournalItem";

export interface JournalDateItemProps {
  month: string;
  day: string;
  year: string;
}

export function JournalDates({
  getDates,
}: {
  getDates: { day: string; month: string; year: string }[];
}) {
  const [selectedDate, setSelectedDate] = useState<JournalDateItemProps | null>(
    getDates[0] || null
  );
  const [journalItem, setJournalItem] = useState<any>(null);

  useEffect(() => {
    if (getDates.length > 0) {
      const initialDate = getDates[0];
      setSelectedDate(initialDate);
      clientAction(initialDate);
    }
  }, [getDates]);

  const clientAction = async (item: JournalDateItemProps) => {
    setSelectedDate(item);
    const result = await getJournals(item);
    const journalItem = result.data;
    setJournalItem(journalItem);
  };

  console.log(journalItem);

  return (
    <>
      <div className="flex overflow-x-auto scrollbar-hide gap-5">
        {getDates.map((item, index) => (
          <Button
            onClick={() => {
              clientAction(item);
            }}
            className={`flex flex-col h-16 ${
              selectedDate &&
              selectedDate.day === item.day &&
              selectedDate.month === item.month &&
              selectedDate.year === item.year
                ? "bg-blue-500 text-white"
                : "bg-slate-700 dark:bg-white"
            }`}
            key={index}
          >
            <span className="text-xl">{item.day}</span>
            <span>{monthConverter(item.month)}</span>
          </Button>
        ))}
      </div>
      <div>
        {journalItem.map((item: any, index: any) => (
          <JournalItem
            key={index}
            currentMood={item.current_mood}
            insertedAt={item.inserted_at}
            journalText={item.j_text}
          />
        ))}
      </div>
    </>
  );
}
