"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addJournal(content: any) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
}
