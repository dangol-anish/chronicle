import { createClient } from "@/utils/supabase/server";

export async function getHabitsHeatmap() {
  const supabase = await createClient();
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);

  // Get the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  // Fetch habit IDs for the current user
  const { data: habits, error: habitError } = await supabase
    .from("habits")
    .select("h_id")
    .eq("user_id", user.id);

  if (habitError) {
    throw new Error(habitError.message);
  }

  if (!habits || habits.length === 0) {
    return [];
  }

  // Extract the habit IDs into an array
  const habitIds = habits.map((habit) => habit.h_id);

  // Fetch habit logs for the user starting from the beginning of the year
  const { data: logs, error: logError } = await supabase
    .from("habits_log")
    .select("log_date, is_completed")
    .in("h_id", habitIds)
    .eq("is_completed", true)
    .gte("log_date", startOfYear.toISOString())
    .order("log_date", { ascending: true });

  if (logError) {
    throw new Error(logError.message);
  }

  // Create a map to count completions for each date
  const habitCompletionMap = new Map();

  logs.forEach((log) => {
    const date = new Date(log.log_date).toISOString().split("T")[0]; // format correction
    if (habitCompletionMap.has(date)) {
      habitCompletionMap.set(date, habitCompletionMap.get(date) + 1);
    } else {
      habitCompletionMap.set(date, 1);
    }
  });

  // Convert map entries into an array of objects with date and count
  return Array.from(habitCompletionMap.entries()).map(([date, count]) => ({
    date,
    count,
  }));
}

export async function getJournalsHeatmap() {
  const supabase = await createClient();
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);

  // Get the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  // Fetch journal entries for the current user starting from the beginning of the year
  const { data: journals, error: journalError } = await supabase
    .from("journals")
    .select("inserted_at")
    .eq("user_id", user.id)
    .gte("inserted_at", startOfYear.toISOString())
    .order("inserted_at", { ascending: true });

  if (journalError) {
    throw new Error(journalError.message);
  }

  // Create a map to count journal entries for each date
  const journalCompletionMap = new Map();

  journals.forEach((journal) => {
    const date = new Date(journal.inserted_at).toISOString().split("T")[0]; // format correction
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
