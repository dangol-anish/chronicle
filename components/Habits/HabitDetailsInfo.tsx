interface HabitDetailsInfoProps {
  question: string;
  note: string;
}
export function HabitDetailsInfo({ question, note }: HabitDetailsInfoProps) {
  return (
    <>
      <div className="py-5 flex flex-col">
        <div className="py-3">
          <p className="text-sm text-slate-700 dark:text-slate-200">Question</p>
          <p>{question}</p>
        </div>

        <div className="py-3">
          <p className="text-sm text-slate-700 dark:text-slate-200">Note</p>
          <p>{note}</p>
        </div>
      </div>
    </>
  );
}
