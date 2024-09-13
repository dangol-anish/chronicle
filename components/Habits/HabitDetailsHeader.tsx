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
import { deleteHabit, updateHabit } from "@/app/habits/actions";

interface HabitDetailsHeaderProps {
  habitId: number;
  name: string;
  question: string;
  note: string;
  insertedAt: string;
}

export function HabitDetailsHeader({
  habitId,
  name,
  question,
  note,
  insertedAt,
}: HabitDetailsHeaderProps) {
  // states
  const [loading, setLoading] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedQuestion, setUpdatedQuestion] = useState(question);
  const [updatedNote, setUpdatedNote] = useState(note);
  const [open, setOpen] = useState(false);

  const handleUpdateHabit = async (habitId: number) => {
    const formData = new FormData();
    formData.append("habitName", updatedName);
    formData.append("habitQuestion", updatedQuestion);
    formData.append("habitNote", updatedNote);

    try {
      setLoading(true);
      await updateHabit(formData, habitId);
      setOpen(false);
    } catch (error) {
      console.error("Failed to update habit:", error);
    } finally {
      setLoading(false);
    }
  };

  // update functionality

  // delete functionality
  const handleDeleteHabit = async (habitId: number) => {
    try {
      setLoading(true);
      await deleteHabit(habitId);
    } catch (error) {
      console.error("Failed to delete habits:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-between">
        <p className="text-2xl">{name}</p>
        <div className="flex gap-5">
          <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
            <DialogTrigger className="dark:text-slate-900 bg-slate-100 px-3 py-2 border rounded-md ">
              Edit
            </DialogTrigger>
            <DialogContent className="w-[80%] lg:w-full rounded-md">
              <DialogHeader>
                <DialogTitle className="text-[20px]">Edit habit</DialogTitle>
                <DialogDescription className="text-stone-900 text-xs dark:text-slate-300">
                  Update your habit details below.
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await handleUpdateHabit(habitId); // Call update function
                }}
              >
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
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
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
                      value={updatedQuestion}
                      onChange={(e) => setUpdatedQuestion(e.target.value)}
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
                      value={updatedNote}
                      onChange={(e) => setUpdatedNote(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" variant="default" className="w-full ">
                    {loading ? "Updating..." : "Update"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="dark:text-slate-900 bg-slate-100 px-3 border rounded-md ">
              Delete
            </DialogTrigger>
            <DialogContent className="w-[80%] lg:w-full rounded-md">
              <p>Are you sure you want to delete this habit?</p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await handleDeleteHabit(habitId);
                }}
              >
                <Button
                  type="submit"
                  variant="destructive"
                  disabled={loading}
                  className="w-full "
                >
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
