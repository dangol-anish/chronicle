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
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuLabel className="font-medium text-xs text-stone-500">
            <p>{user?.user_metadata.user_name}</p>
            <p>{user?.email}</p>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <form action={signOut}>
              <Button className="bg-white text-slate-950 p-0 hover:bg-white flex gap-2 items-center">
                <LogOut size={20} />
                Logout
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className=" px-4 outline-slate-400 text-sm py-2 flex justify-between items-center"></div>
    </>
  );
};

export default UserItem;
