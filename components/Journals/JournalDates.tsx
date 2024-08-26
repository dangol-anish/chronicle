"use client";
import { Button } from "../ui/button";

export function JournalDates({
  getDates,
}: {
  getDates: { day: string; month: string }[];
}) {
  const getJournalData = (item: any) => {
    console.log(item);
  };

  return (
    <>
      <div className="flex overflow-x-auto scrollbar-hide gap-5">
        {getDates.map((item, index) => (
          <Button
            onClick={() => {
              getJournalData(item);
            }}
            className="flex flex-col h-16 bg-slate-700 dark:bg-white"
            key={index}
          >
            <span className="text-xl">{item.day}</span>
            <span>{item.month}</span>
          </Button>
        ))}
      </div>
    </>
  );
}
