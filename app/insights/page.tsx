import InsightsHabits from "@/components/Insights/InsightsHabits";
import { InsightsHeader } from "@/components/Insights/InsightsHeader";

import { getHabitsHeatmap, getJournalsHeatmap } from "./actions";
import { HeatMapValue } from "@uiw/react-heat-map";
import { Separator } from "@/components/ui/separator";
import InsightsJournal from "@/components/Insights/InsightsJournals";

export default async function InsightsPage() {
  const rawDataHabits = await getHabitsHeatmap();
  const rawDataJournals = await getJournalsHeatmap();

  const dataHabits: HeatMapValue[] = rawDataHabits.map((item) => ({
    date: new Date(item.date).toISOString().split("T")[0],
    count: Number(item.count),
  }));

  const dataJournals: HeatMapValue[] = rawDataJournals.map((item) => ({
    date: new Date(item.date).toISOString().split("T")[0],
    count: Number(item.count),
  }));

  return (
    <>
      <div className="h-screen flex flex-col ">
        <InsightsHeader />
        <Separator className="my-5" />
        <main className="flex flex-col w-full overflow-y-auto gap-10 pb-[100px] scrollbar-hide">
          <InsightsHabits dataHabits={dataHabits} />
          <InsightsJournal dataJournal={dataJournals} />
        </main>
      </div>
    </>
  );
}
