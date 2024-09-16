import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

export default function AccountSettings() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center mb-5">
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
            <Button>Upload new picture</Button>
            <Button variant="outline">Delete</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5 mt-3">
          <p className="text-xl font-bold">User Info</p>
          <div className="flex flex-col gap-2">
            {" "}
            <Label className="text-gray-300">Username</Label>
            <Input className="w-[30%]" placeholder="example" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 mb-5 mt-3">
          <p className="text-xl font-bold">Contact Email</p>

          <div className="flex flex-col gap-2">
            <Label className="text-gray-300">Email</Label>
            <Input className="w-[30%]" placeholder="example@gmail.com" />
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
}
