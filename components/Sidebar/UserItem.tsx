import { createClient } from "@/utils/supabase/server";
import { EllipsisVertical, LogOut } from "lucide-react";
import { NextPage } from "next";
import { signOut } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Props {}

const UserItem: NextPage<Props> = async ({}) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="lg:border lg:p-3 rounded-md flex items-center justify-between ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="hidden lg:flex ">{user?.user_metadata.user_name}</p>
          <EllipsisVertical className="hidden lg:flex" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <p className="px-2 text-lg font-bold ">My Account</p>
          <DropdownMenuLabel className="font-medium text-xs text-stone-900 flex flex-col gap-1">
            <p className="dark:text-white">{user?.user_metadata.user_name}</p>
            <p className="dark:text-white">{user?.email}</p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <Link href="/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>

          <DropdownMenuItem>
            <form className="w-full" action={signOut}>
              <button className="w-full flex justify-start items-center cursor-default">
                Logout
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserItem;
