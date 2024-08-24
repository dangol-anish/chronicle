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

  // // Example of inserting the journal data into the database
  // const { error } = await supabase
  //   .from("journals")
  //   .insert([{ user_id: user.id, content, current_mood: currentMood }]);

  // if (error) {
  //   console.error("Failed to add journal:", error);
  //   throw new Error("Failed to add journal");
  // }

  // // Revalidate path or redirect after successful insertion
  // revalidatePath("/journals");
}
