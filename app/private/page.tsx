import { redirect } from "next/navigation";
import { signOut } from "./actions";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <form action={signOut}>
        <button>Logout</button>
      </form>
    </>
  );
}
