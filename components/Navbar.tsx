"use client";

import { Kanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname == "/login" || pathname == "/signup") {
    return <></>;
  }
  return (
    <>
      <div className="p-5 border-b-[1px]">
        <Link href="/" className="flex justify-start">
          <Kanban size={30} />
          <p className="text-xl">Chronicle</p>
        </Link>
      </div>
    </>
  );
}
