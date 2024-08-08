"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { menuList } from "./MenuList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const SidebarMenuItem = ({}) => {
  const pathname = usePathname();
  return (
    <div>
      <Command>
        <CommandList>
          <CommandEmpty>No Items Found</CommandEmpty>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((options: any, optionKey: number) => (
                <Link key={optionKey} href={options.link}>
                  <CommandItem
                    className={`flex gap-2 items-center hover:cursor-pointer text-[16px]  ${
                      pathname === options.link ? "bg-stone-100 rounded-sm" : ""
                    }`}
                    key={optionKey}
                  >
                    <p>{options.icon}</p>
                    <p>{options.text}</p>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          ))}
          <Separator />
        </CommandList>
      </Command>
    </div>
  );
};

export default SidebarMenuItem;
