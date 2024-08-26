import { getJournalDates } from "@/utils/getJournalDates";
import { JournalDates } from "./JournalDates";

export function JournalList() {
  const getDates = getJournalDates();

  return (
    <>
      <JournalDates getDates={getDates} />
    </>
  );
}
