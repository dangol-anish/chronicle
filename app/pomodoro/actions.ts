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

  revalidatePath("/pomodoro", "layout");
  redirect("/pomodoro");
}

export async function getTasks() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("tasks")
    .select("t_id, t_task, is_completed, inserted_at")
    .eq("user_id", user?.id)
    .order("inserted_at", { ascending: false });

  if (error) {
    return {
      error: error.message,
    };
  }

  return data;
}

export async function deleteTask(taskId: number) {
  const supabase = createClient();

  // Get the authenticated user
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return {
      error: error.message,
    };
  }

  if (!user) {
    return {
      error: "User not authenticated",
    };
  }

  // Delete the task
  const { error: deleteError } = await supabase
    .from("tasks")
    .delete()
    .eq("t_id", taskId)
    .eq("user_id", user.id);

  if (deleteError) {
    return {
      error: deleteError.message,
    };
  }

  return {
    message: "Task deleted successfully",
  };
}
