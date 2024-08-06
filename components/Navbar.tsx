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
      <nav className="px-10 py-4 border-b-[1px] flex items-center justify-between">
        <div className="flex gap-10 items-center justify-center">
          <Link href="/" className="flex justify-start">
            <Kanban size={30} />
            <p className="text-xl font-bold">Chronicle</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
