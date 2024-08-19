import { AddJournals } from "./AddJournals";

export function JournalsHeader() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-[28px] lg:text-[32px] lg:flex">Journals</h2>
      <div className="flex gap-2 items-center">
        <AddJournals />
      </div>
    </header>
  );
}
