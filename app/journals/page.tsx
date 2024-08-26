import { JournalList } from "@/components/Journals/JournalList";
import { JournalsHeader } from "@/components/Journals/JournalsHeader";

export default async function JournalsPage() {
  return (
    <>
      <JournalsHeader />
      <JournalList />
    </>
  );
}
