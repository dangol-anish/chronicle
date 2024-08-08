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
        <DropdownMenuTrigger className="border mx-5 p-3 rounded-md flex items-center justify-between">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{user?.user_metadata.user_name}</p>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
          <DropdownMenuLabel className="font-medium text-xs text-stone-900 flex flex-col gap-1">
            <p>{user?.user_metadata.user_name}</p>
            <p>{user?.email}</p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <Link href="/settings">
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>

          <Link href="/help">
            <DropdownMenuItem>Help</DropdownMenuItem>
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
