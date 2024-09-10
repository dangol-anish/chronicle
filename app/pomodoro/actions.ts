"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTasks(formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const data = {
    t_task: formData.get("task") as string,
  };

  const { error } = await supabase.from("tasks").insert({
    user_id: user?.id,
    t_task: data.t_task,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/habits", "layout");
  redirect("/habits");
}
