import { HabitDetailsHeader } from "@/components/Habits/HabitDetailsHeader";
import { getHabitDetails } from "../actions";
import { HabitDetailsChart } from "@/components/Habits/HabitDetailsChart";
import { HabitDetailsInfo } from "@/components/Habits/HabitDetailsInfo";
import { Separator } from "@/components/ui/separator";

export default async function Page({ params }: { params: { id: number } }) {
  const habitDetails = await getHabitDetails(params.id);

  if (!Array.isArray(habitDetails)) {
    return <div>Error loading habit details: {habitDetails.error}</div>;
  }

  if (habitDetails.length === 0) {
    return <div>No habit details found.</div>;
  }

  const habit = habitDetails[0];

  return (
    <>
      <div className="flex flex-col h-[100vh] overflow-y-auto scrollbar-hide pb-[100px] lg:pb-[50px]">
        <HabitDetailsHeader
          habitId={params.id}
          name={habit.h_name}
          question={habit.h_question}
          note={habit.h_note}
          insertedAt={habit.inserted_at}
        />
        <HabitDetailsInfo question={habit.h_question} note={habit.h_note} />
        <Separator className="my-5" />
        <HabitDetailsChart logs={habit.habits_log} />
      </div>
    </>
  );
}
