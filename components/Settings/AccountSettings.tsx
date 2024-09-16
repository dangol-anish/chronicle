"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { signOut } from "@/app/auth/actions";
import DeleteAccount from "./DeleteAccount";
import { useState } from "react";

export default function AccountSettings() {
  const [userInfo, setUserInfo] = useState({
    userName: null,
    userEmail: null,
    currentUserPassword: null,
    newUserPassword: null,
  });
  return (
    <>
      <div className="flex flex-col px-2 scrollbar-hide">
        {/* <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-5">
            <Avatar className="md:h-20 md:w-20 w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p>Profile Picture</p>
              <p>PNG, JPEG under 5MB</p>
            </div>
          </div>

          <div className="flex gap-5">
            <UploadThing />
            <Button variant="outline">Delete</Button>
          </div>
        </div> */}
        <div className="flex flex-col gap-2 mb-5 mt-3">
          <p className="text-xl font-bold">User Info</p>
          <div className="flex flex-col gap-2">
            {" "}
            <Label className="text-gray-300">Username</Label>
            <Input className="lg:w-[500px]" placeholder="JaneDoe" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 mb-5 mt-3">
          <p className="text-xl font-bold">Contact Email</p>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-300">Email</Label>
            <Input className="lg:w-[500px]" placeholder="example@gmail.com" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 mb-5 mt-3 w-full">
          <p className="text-xl font-bold">Password</p>
          <div className="flex gap-10 ">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Current Password</Label>
              <Input className="lg:w-[500px]" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">New Password</Label>
              <Input className="lg:w-[500px]" type="password" />
            </div>
          </div>
        </div>

        <Button className="my-5 lg:w-60 w-full">Save Changes</Button>
        <Separator />
        <div className="flex flex-col gap-2 mb-10 mt-3 w-full ">
          <p className="text-xl font-bold">Account security</p>
          <div className="flex justify-between">
            <div className="flex gap-5">
              <DeleteAccount />
              <form className="" action={signOut}>
                <Button
                  type="submit"
                  className="w-full flex justify-start items-center cursor-default"
                >
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
