import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";

export function AddHabits() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="border py-2 px-4 rounded-md hover:bg-stone-100 font-medium">
          <Plus className="md:hidden" /> <p className="hidden md:flex">Add</p>
        </DialogTrigger>
        <DialogContent className="w-[80%] lg:w-full rounded-md">
          <DialogHeader>
            <DialogTitle className="text-[20px]">Add a new habit</DialogTitle>
            <DialogDescription className="text-stone-900 text-xs">
              Small habits, big impact.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="e.g. Wake up on time"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="question" className="text-right">
                Question
              </Label>
              <Input
                id="question"
                placeholder="e.g. Did you wake on time today?"
                className="col-span-3"
              />

              <Label className="text-right">Notes</Label>
              <Input className="col-span-3" placeholder="(Optional)" />
            </div>
          </div>
          <DialogFooter>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
