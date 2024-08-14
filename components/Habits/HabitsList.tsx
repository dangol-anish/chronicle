import { getHabits } from "@/app/habits/actions";
import { HabitsItem } from "./HabitsItem";

export default async function HabitsList() {
  const habits = await getHabits();

  return (
    <>
      <HabitsItem habits={habits} />
    </>
  );
}
