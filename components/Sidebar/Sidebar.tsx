import { createClient } from "@/utils/supabase/server";

export async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="hidden p-5 md:flex flex-col w-[250px] min-w-[250px] border-r min-h-screen h-full"></div>
    </>
  );
}
