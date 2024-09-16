import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AccountSettings() {
  return (
    <>
      <div className="flex justify-between items-center">
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
    </>
  );
}
