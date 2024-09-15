import { createClient } from "@/utils/supabase/server";

export async function getHabitsHeatmap() {
  const supabase = await createClient();
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);

  const { data, error } = await supabase
    .from("habits_log")
    .select("log_date, is_completed")
    .eq("is_completed", true)
    .gte("log_date", startOfYear.toISOString())
    .order("log_date", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  // Creating a map to count completions for each date
  const habitCompletionMap = new Map();

  data.forEach((log) => {
    const date = new Date(log.log_date).toISOString().split("T")[0]; // format correction
    if (habitCompletionMap.has(date)) {
      habitCompletionMap.set(date, habitCompletionMap.get(date) + 1);
    } else {
      habitCompletionMap.set(date, 1);
    }
  });

  // Convert map entries into array of objects with date and count
  return Array.from(habitCompletionMap.entries()).map(([date, count]) => ({
    date,
    count,
  }));
}

export async function getJournalsHeatmap() {
  const supabase = await createClient();
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);

  const { data, error } = await supabase
    .from("journals")
    .select("inserted_at")
    .gte("inserted_at", startOfYear.toISOString())
    .order("inserted_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  const journalCompletionMap = new Map();

  data.forEach((journal) => {
    const date = new Date(journal.inserted_at).toISOString().split("T")[0];
    if (journalCompletionMap.has(date)) {
      journalCompletionMap.set(date, journalCompletionMap.get(date) + 1);
    } else {
      journalCompletionMap.set(date, 1);
    }
  });

  // Convert map entries into an array of objects with date and count
  return Array.from(journalCompletionMap.entries()).map(([date, count]) => ({
    date,
    count,
  }));
}
