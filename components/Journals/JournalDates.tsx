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
  const [journalItem, setJournalItem] = useState<any[]>([]);

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
    const journals = result.data;
    setJournalItem(journals || []);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full lg:gap-20 gap-12 mb-96">
        <div className="flex md:w-[10%] md:flex-col  overflow-x-auto scrollbar-hide gap-5 md:gap-5 md:justify-center">
          {getDates.map((item, index) => (
            <Button
              onClick={() => {
                clientAction(item);
              }}
              className={`flex flex-col h-16 hover:bg-blue-500 ${
                selectedDate &&
                selectedDate.day === item.day &&
                selectedDate.month === item.month &&
                selectedDate.year === item.year
                  ? "bg-blue-500 text-white"
                  : "bg-slate-200 text-slate-950 dark:text-slate-200 border dark:bg-slate-900 "
              }`}
              key={index}
            >
              <span className="text-xl">{item.day}</span>
              <span>{monthConverter(item.month)}</span>
            </Button>
          ))}
        </div>
        <div className="flex md:justify-center md:w-[100%] flex-col md:flex-row gap-5 h-[70vh] overflow-y-auto md:flex-wrap scrollbar-hide">
          {journalItem.length > 0 ? (
            journalItem.map((item: any, index: any) => (
              <JournalItem
                key={index}
                currentMood={item.current_mood}
                insertedAt={item.inserted_at}
                journalText={item.j_text}
                journalId={item.j_id}
              />
            ))
          ) : (
            <p>No journal entries made for this date.</p>
          )}
        </div>
      </div>
    </>
  );
}
