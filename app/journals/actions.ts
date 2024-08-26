"use server";

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

export async function getJournals() {
  const supabase = await createClient();
}
