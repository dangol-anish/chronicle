import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import HabitsList from "@/components/Habits/HabitsList";

export default async function HabitsPage() {
  return (
    <>
      <HabitsHeader />
      <HabitsList />
    </>
  );
}
