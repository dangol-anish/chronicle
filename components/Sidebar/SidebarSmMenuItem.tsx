"use client";
import Link from "next/link";
import { menuList } from "./MenuList";
import { usePathname } from "next/navigation";

export function SidebarSmMenuItem() {
  const pathname = usePathname();

  const isActive = (link: string) =>
    pathname === link || pathname.startsWith(link);
  return (
    <div className="flex gap-3">
      {menuList
        .filter((menu) => menu.group === "General") // Filter for the "General" group
        .map((menu) =>
          menu.items.map((options: any, optionKey: number) => (
            <Link
              className={`flex items-center hover:cursor-pointer p-2 ${
                isActive(options.link)
                  ? "bg-stone-100 dark:bg-slate-700 rounded-sm"
                  : ""
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
