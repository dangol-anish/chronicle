import InsightsHabits from "@/components/Insights/InsightsHabits";
import { InsightsHeader } from "@/components/Insights/InsightsHeader";
import { InsightsJournals } from "@/components/Insights/InsightsJournals";
import { getHabitsHeatmap } from "./actions";
import { HeatMapValue } from "@uiw/react-heat-map";
import { Separator } from "@/components/ui/separator";

export default async function InsightsPage() {
  const rawData = await getHabitsHeatmap();

  const data: HeatMapValue[] = rawData.map((item) => ({
    date: new Date(item.date).toISOString().split("T")[0],
    count: Number(item.count),
  }));
  return (
    <>
      <div>
        <InsightsHeader />
        <Separator className="my-5" />
        <main className="flex flex-col w-full">
          <InsightsHabits data={data} />
          <InsightsJournals />
        </main>
      </div>
    </>
  );
}
