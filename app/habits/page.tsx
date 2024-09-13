import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import HabitsList from "@/components/Habits/HabitsList";

export default async function HabitsPage() {
  return (
    <>
      <div>
        <HabitsHeader />
        <HabitsList />
      </div>
    </>
  );
}
