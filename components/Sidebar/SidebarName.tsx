import { Kanban } from "lucide-react";

export function SidebarName() {
  return (
    <>
      <div className="flex px-7 items-center py-3 gap-1">
        <Kanban size={30} />
        <p className="text-[24px]">Chronicle</p>
      </div>
    </>
  );
}