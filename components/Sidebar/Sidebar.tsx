import { createClient } from "@/utils/supabase/server";
import { ComboboxDemo } from "./UserContent";

export async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="hidden md:flex flex-col w-[250px] min-w-[250px] border-r min-h-screen h-full ">
        <ComboboxDemo user={user} />
      </div>
    </>
  );
}
