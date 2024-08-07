import { createClient } from "@/utils/supabase/server";
import { Kanban, Library, Link } from "lucide-react";
import SidebarMenuItem from "./SidebarMenuItem";
import UserItem from "./UserItem";

export async function Sidebar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="hidden md:flex flex-col w-[250px] min-w-[250px] border-r min-h-screen">
        <div className="px-6 flex items-center justify-between">
          <div className="flex gap-1 py-4 items-center  justify-center">
            <Kanban size={25} />
            <p className="text-[20px]">Chronicle</p>
          </div>
        </div>
        <div className="h-full flex flex-grow px-4">
          <SidebarMenuItem />
        </div>
        <div>
          <UserItem />
        </div>
      </div>
    </>
  );
}
