import { getHabits } from "@/app/habits/actions";
import { HabitsItem } from "./HabitsItem";
import { Habit } from "@/types/types";
import { useOptimistic } from "react";

export type Action = "update";

export default async function HabitsList() {
  const habits = await getHabits();

  return (
    <>
      <HabitsItem habits={habits} />
    </>
  );
}
