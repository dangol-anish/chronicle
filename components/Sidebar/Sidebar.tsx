import { createClient } from "@/utils/supabase/server";

export async function Sidebar() {
  return (
    <>
      <div className="hidden md:flex flex-col w-[250px] min-w-[250px] border-r min-h-screen h-full "></div>
    </>
  );
}
