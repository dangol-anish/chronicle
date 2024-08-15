import SidebarMenuItem from "./SidebarMenuItem";
import { SidebarName } from "./SidebarName";
import { SidebarSmMenuItem } from "./SidebarSmMenuItem";
import UserItem from "./UserItem";

export function SidebarSm() {
  return (
    <>
      <div className="h-[50px] lg:hidden border border-x-0 border-t-0 border-b-1  flex items-center justify-between px-4">
        <SidebarName />
        <SidebarSmMenuItem />
        <UserItem />
      </div>
    </>
  );
}
