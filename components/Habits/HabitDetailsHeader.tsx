"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface HabitDetailsHeaderProps {
  name: string;
  question: string;
  note: string;
  insertedAt: string;
}

export function HabitDetailsHeader({
  name,
  question,
  note,
  insertedAt,
}: HabitDetailsHeaderProps) {
  // states
  const [loading, setLoading] = useState(false);
  // update functionality
  const handleEditAction = () => {};
  const handleDeleteAction = () => {};

  return (
    <>
      <div className=" flex items-center justify-between">
        <p className="text-2xl">{name}</p>
        <div className="flex gap-5">
          <Dialog>
            <DialogTrigger className="dark:text-slate-900 bg-slate-100 px-3 py-2 border rounded-md ">
              Edit
            </DialogTrigger>
            <DialogContent className="w-[80%] lg:w-full rounded-md">
              <DialogHeader>
                <DialogTitle className="text-[20px]">
                  Add a new habit
                </DialogTitle>
                <DialogDescription className="text-stone-900 text-xs dark:text-slate-300">
                  Small habits, big impact.
                </DialogDescription>
              </DialogHeader>
              <form>
                <div className="grid gap-4 py-4 ">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="habitName" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="habitName"
                      name="habitName"
                      placeholder="e.g. Wake up on time"
                      className="col-span-3"
                      value={name}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="habitQuestion" className="text-right">
                      Question
                    </Label>
                    <Input
                      id="habitQuestion"
                      name="habitQuestion"
                      placeholder="e.g. Did you wake on time today?"
                      className="col-span-3"
                      value={question}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Notes</Label>
                    <Input
                      className="col-span-3"
                      id="habitNote"
                      name="habitNote"
                      placeholder="(Optional)"
                      value={note}
                    />
                  </div>
                </div>
              </form>
              <DialogFooter>
                <form>
                  <Button type="submit" variant="default" className="w-full ">
                    {loading ? "Updating..." : "Update"}
                  </Button>
                </form>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="dark:text-slate-900 bg-slate-100 px-3 border rounded-md ">
              Delete
            </DialogTrigger>
            <DialogContent className="w-[80%] lg:w-full rounded-md">
              <p>Are you sure you want to delete this habit?</p>
              <form>
                <Button type="submit" variant="destructive" className="w-full ">
                  {loading ? "Deleting..." : "Delete"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
