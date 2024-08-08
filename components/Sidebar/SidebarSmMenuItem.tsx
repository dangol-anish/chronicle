"use client";
import Link from "next/link";
import { menuList } from "./MenuList";
import { usePathname } from "next/navigation";

export function SidebarSmMenuItem() {
  const pathname = usePathname();
  return (
    <div className="flex gap-3">
      {menuList
        .filter((menu) => menu.group === "General") // Filter for the "General" group
        .map((menu) =>
          menu.items.map((options: any, optionKey: number) => (
            <Link
              className={`flex items-center hover:cursor-pointer p-2 ${
                pathname === options.link ? "bg-stone-100 rounded-sm" : ""
              }`}
              key={optionKey}
              href={options.link}
            >
              {options.icon}
            </Link>
          ))
        )}
    </div>
  );
}
