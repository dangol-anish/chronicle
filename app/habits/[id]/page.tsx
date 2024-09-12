import { HabitDetailsHeader } from "@/components/Habits/HabitDetailsHeader";
import { getHabitDetails } from "../actions";
import { HabitDetailsChart } from "@/components/Habits/HabitDetailsChart";

export default async function Page({ params }: { params: { id: number } }) {
  const habitDetails = await getHabitDetails(params.id);

  return (
    <>
      <div className="flex flex-col h-screen">
        <HabitDetailsHeader />
        <HabitDetailsChart />
      </div>
    </>
  );
}
