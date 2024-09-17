import { formatCurrentDay } from "@/utils/dateFormatter";
import { moodConverter } from "@/utils/moodConverter";
import { plainTextConverter } from "@/utils/plainTextConverter";
import { textShortener } from "@/utils/textShortener";

import Link from "next/link";
import { Separator } from "../ui/separator";

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
    <div className="relative flex items-start w-full">
      {/* Journal content */}
      <Link
        href={{
          pathname: `/journals/${journalId}`,
          query: {
            cM: currentMood,
            iA: insertedAt,
            jT: journalText,
          },
        }}
        className="flex-1 flex flex-col "
      >
        <div className="flex items-center w-full gap-12">
          <p className="text-slate-600  text-sm">
            {formatCurrentDay(insertedAt)}
          </p>
          <div className="flex  gap-5 flex-col w-full">
            <div className="flex gap-2 items-center">
              <p>{moodConverter(currentMood)}</p>
              <p className="text-sm text-slate-">
                {currentMood[0].toUpperCase() + currentMood.substring(1)}
              </p>
            </div>

            <div className="break-words overflow-hidden">{shortenedTextLG}</div>
            <Separator />
          </div>
        </div>
      </Link>
    </div>
  );
};

const JournalTimeline = ({
  journalItems,
}: {
  journalItems: JournalItemDataProps[];
}) => {
  return (
    <div className="max-h-screen  px-6 py-8 ">
      {journalItems.map((item) => (
        <JournalItem
          key={item.journalId}
          currentMood={item.currentMood}
          insertedAt={item.insertedAt}
          journalText={item.journalText}
          journalId={item.journalId}
        />
      ))}
    </div>
  );
};

export default JournalItem;
