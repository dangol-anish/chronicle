import { redirect } from "next/navigation";
import { signOut } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";

export default async function HabitPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <Button>Hello</Button>
      <form action={signOut}>
        <button>Logout</button>
      </form>
    </>
  );
}
