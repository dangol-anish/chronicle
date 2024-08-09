import { AddHabits } from "./AddHabits";

export function HabitsHeader() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-[28px] lg:text-[32px] lg:flex">Habits</h2>
      <AddHabits />
    </header>
  );
}
