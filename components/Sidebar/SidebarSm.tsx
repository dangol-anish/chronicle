import { SidebarName } from "./SidebarName";

export function SidebarSm() {
  return (
    <>
      <div className="h-[50px]  lg:hidden">
        <div className="">
          <SidebarName />
        </div>
        <div></div>
      </div>
    </>
  );
}
