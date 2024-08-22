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
