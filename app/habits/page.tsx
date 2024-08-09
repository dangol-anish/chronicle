import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import { createClient } from "@/utils/supabase/server";

export default async function HabitsPage() {
  return (
    <>
      <main className="w-full p-5 lg:py-6 lg:px-8">
        <HabitsHeader />
      </main>
    </>
  );
}
