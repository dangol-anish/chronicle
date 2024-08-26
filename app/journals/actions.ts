"use server";

import { JournalDateItemProps } from "@/components/Journals/JournalDates";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface JournalData {
  content: string;
  currentMood: string;
}

export async function addJournal({ content, currentMood }: JournalData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("Content: " + content + " CurrentMood: " + currentMood);

  // Example of inserting the journal data into the database
  const { error } = await supabase.from("journals").insert([
    {
      user_id: user?.id,
      current_mood: currentMood,
      j_text: content,
    },
  ]);

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/journals", "layout");
  redirect("/journals");
}

export async function getJournals(item: JournalDateItemProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const formattedDate = `${item.year}-${item.month.padStart(
    2,
    "0"
  )}-${item.day.padStart(2, "0")}`;

  const startOfDay = `${formattedDate} 00:00:00`;
  const endOfDay = `${formattedDate} 23:59:59`;

  const { data, error } = await supabase
    .from("journals")
    .select("current_mood, inserted_at, j_text")
    .eq("user_id", user?.id)
    .gte("inserted_at", startOfDay)
    .lt("inserted_at", endOfDay);

  if (error) {
    return {
      error: error.message,
    };
  } else {
    return {
      data,
    };
  }
}
