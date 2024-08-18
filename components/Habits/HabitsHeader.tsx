import { AddHabits } from "./AddHabits";
import { HabitsDropdown } from "./HabitsDropdown";

export function HabitsHeader() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-[28px] lg:text-[32px] lg:flex">Habits</h2>
      <div className="flex gap-2 items-center">
        <HabitsDropdown />
        <AddHabits />
      </div>
    </header>
  );
}
