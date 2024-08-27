import { getHabits } from "@/app/habits/actions";
import { HabitsItem } from "./HabitsItem";
import { Habit } from "@/types/types";

export default async function HabitsList() {
  const habitsData = await getHabits();

  if ("error" in habitsData) {
    return <div>Error loading habits: {habitsData.error}</div>;
  }

  return (
    <>
      <HabitsItem habits={habitsData as Habit[]} />
    </>
  );
}
