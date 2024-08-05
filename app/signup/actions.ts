"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    options: {
      data: {
        user_name: formData.get("username") as string,
      },
    },
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const { error } = await supabase.auth.signUp(data);

    if (error) {
      return {
        error: error.message,
      };
    }
    await supabase.auth.signOut();

    revalidatePath("/", "layout");
    redirect("/login");
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}
