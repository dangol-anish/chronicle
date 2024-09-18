import Logo from "../../public/chronicles-light.svg";
import Image from "next/image";

export function SidebarName() {
  return (
    <>
      <div className="flex items-center lg:px-2">
        <Image
          src={Logo}
          alt="logo"
          className="dark:invert"
          width={25}
          height={25}
        />
        <p className="text-[32px] hidden lg:flex ">Chronicle</p>
      </div>
    </>
  );
}
