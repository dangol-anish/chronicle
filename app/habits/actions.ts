"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addHabits(formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const data = {
    habitName: formData.get("habitName") as string,
    habitQuestion: formData.get("habitQuestion") as string,
    habitNote: formData.get("habitNote") as string,
  };

  const { error } = await supabase.from("habits").insert({
    user_id: user?.id,
    h_name: data.habitName,
    h_question: data.habitQuestion,
    h_note: data.habitNote,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/habits", "layout");
  redirect("/habits");
}

export async function getHabits() {
  const supabase = await createClient();

  const { data: habitsWithLogs, error } = await supabase
    .from("habits")
    .select(
      `
      h_id, 
      h_name, 
      h_question, 
      h_note, 
      inserted_at, 
      habits_log (
        log_id, 
        log_date, 
        log_time, 
        is_completed, 
        inserted_at
      )
    `
    )
    .order("inserted_at", { ascending: false });

  if (error) {
    return {
      error: error.message,
    };
  }

  return habitsWithLogs;
}

export async function updateHabitLog(formData: FormData) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  // Get the log_id and is_completed status from formData
  const log_id = formData.get("log_id");
  const is_completed = formData.get("is_completed") === "true";

  if (!log_id) {
    throw new Error("Log ID is required");
  }

  const { error } = await supabase
    .from("habits_log")
    .update({ is_completed })
    .eq("log_id", log_id);

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/todos");
}

export async function getHabitDetails(habit_id: number) {
  const supabase = await createClient();

  const { data: habitsWithLogs, error } = await supabase
    .from("habits")
    .select(
      `
      h_name, 
      h_question, 
      h_note, 
      inserted_at, 
      habits_log (
        log_id, 
        log_date, 
        log_time, 
        is_completed, 
        inserted_at
      )
    `
    )
    .order("inserted_at", { ascending: false })
    .eq("h_id", habit_id);

  if (error) {
    return {
      error: error.message,
    };
  }

  return habitsWithLogs;
}

export async function deleteHabit(habit_id: number) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  const { error } = await supabase.from("habits").delete().match({
    user_id: user.id,
    h_id: habit_id,
  });

  if (error) {
    return {
      error: error.message,
    };
  }
  revalidatePath("/habits");
  redirect("/habits");
}

export async function updateHabit(formData: FormData, habitId: number) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  // Extract updated values from the formData
  const habitName = formData.get("habitName") as string;
  const habitQuestion = formData.get("habitQuestion") as string;
  const habitNote = formData.get("habitNote") as string;

  // Update the habit in the database
  const { error } = await supabase
    .from("habits")
    .update({
      h_name: habitName,
      h_question: habitQuestion,
      h_note: habitNote,
    })
    .eq("h_id", habitId)
    .eq("user_id", user.id); // Ensure only the logged-in user can update their habit

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/habits");
}
