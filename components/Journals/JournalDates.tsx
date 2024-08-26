"use client";
import { getJournals } from "@/app/journals/actions";
import { Button } from "../ui/button";
import { monthConverter } from "@/utils/getJournalDates";

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
  const clientAction = async (item: JournalDateItemProps) => {
    const result = await getJournals(item);
  };

  return (
    <>
      <div className="flex overflow-x-auto scrollbar-hide gap-5">
        {getDates.map((item, index) => (
          <Button
            onClick={() => {
              clientAction(item);
            }}
            className="flex flex-col h-16 bg-slate-700 dark:bg-white"
            key={index}
          >
            <span className="text-xl">{item.day}</span>
            <span>{monthConverter(item.month)}</span>
          </Button>
        ))}
      </div>
    </>
  );
}
