import { createClient } from "@/utils/supabase/server";
import SidebarMenuItem from "./SidebarMenuItem";
import UserItem from "./UserItem";
import { SidebarName } from "./SidebarName";

export async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="hidden lg:flex flex-col w-[250px] min-w-[250px] border-r min-h-screen justify-between py-6">
        <div className="flex flex-col gap-5">
          <SidebarName />
          <SidebarMenuItem />
        </div>
        <div className="h-full flex flex-col justify-between ">
          <UserItem />
        </div>
      </div>
    </>
  );
}
