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

export async function updateTask(taskId: number, updatedContent: string) {
  const supabase = createClient();

  // Get the authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    return {
      error: userError.message,
    };
  }

  if (!user) {
    return {
      error: "User not authenticated",
    };
  }
  const { data: task, error: fetchError } = await supabase
    .from("tasks")
    .select("user_id")
    .eq("t_id", taskId)
    .single();

  if (fetchError || !task) {
    throw new Error("Task not found");
  }

  if (task.user_id !== user.id) {
    throw new Error("You do not have permission to edit this task");
  }

  // Update the task if the user is authorized
  const { data: updatedTasks, error } = await supabase
    .from("tasks")
    .update({ t_task: updatedContent })
    .eq("t_id", taskId)
    .select(); // Ensure we get the updated data

  if (error) {
    throw new Error(error.message);
  }

  // Check if data is not null and return the updated task
  if (updatedTasks && updatedTasks.length > 0) {
    return updatedTasks[0];
  } else {
    throw new Error("Failed to update task or task not found");
  }
}
