import { Kanban } from "lucide-react";

export function SidebarName() {
  return (
    <>
      <div className="flex items-center lg:px-2">
        <Kanban size={35} />
        <p className="text-[32px] hidden lg:flex ">Chronicle</p>
      </div>
    </>
  );
}
