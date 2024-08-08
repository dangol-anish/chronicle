import { Kanban } from "lucide-react";

export function SidebarName() {
  return (
    <>
      <div className="flex items-center lg:px-2">
        <Kanban size={30} />
        <p className="text-[24px] hidden lg:flex">Chronicle</p>
      </div>
    </>
  );
}
