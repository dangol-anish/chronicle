import { InsightsHabits } from "@/components/Insights/InsightsHabits";
import { InsightsHeader } from "@/components/Insights/InsightsHeader";
import { InsightsJournals } from "@/components/Insights/InsightsJournals";

export default function InsightsPage() {
  return (
    <>
      <div>
        <InsightsHeader />
        <main className="flex flex-col">
          <InsightsHabits />
          <InsightsJournals />
        </main>
      </div>
    </>
  );
}
