"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signOut() {
  const supabase = createClient();

  try {
    await supabase.auth.signOut();
    redirect("/login");
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    redirect(`/login`);
  }
}
