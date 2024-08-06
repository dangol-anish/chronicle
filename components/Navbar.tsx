"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname == "/login" || pathname == "/signup") {
    return <></>;
  }
  return <div>Actual content</div>;
}
