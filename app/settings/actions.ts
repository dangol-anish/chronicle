import { createClient } from "@/utils/supabase/server";

export async function getUserInfo() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const providerCheck = user?.app_metadata?.providers;

  if (providerCheck?.includes("github")) {
    return {
      error:
        "You have logged in using GitHub. Profile details cannot be modified via this method.",
    };
  }

  const { data, error } = await supabase
    .from("auth.users")
    .select("email")
    .eq("id", user?.id);

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
