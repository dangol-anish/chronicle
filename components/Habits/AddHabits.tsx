"use client";
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

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "../ui/use-toast";
import { addHabits } from "@/app/habits/actions";

interface FormContentProps {
  pending: boolean;
}

function FormContent({ pending }: FormContentProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-[20px]">Add a new habit</DialogTitle>
        <DialogDescription className="text-stone-900 text-xs">
          Small habits, big impact.
        </DialogDescription>
      </DialogHeader>
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
          />
        </div>
      </div>
      <DialogFooter>
        <Button disabled={pending} type="submit">
          {pending ? "Saving..." : "Save"}
        </Button>
      </DialogFooter>
    </>
  );
}

export function AddHabits() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

  async function clientAction(formData: FormData) {
    setPending(true);
    const result = await addHabits(formData);
    setPending(false);
    if (result?.error) {
      toast({
        variant: "destructive",
        description: result.error,
      });
      return;
    }
    window.location.reload();
    formRef.current?.reset();
    await wait();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger className="border py-2 px-4 rounded-md hover:bg-stone-100 font-medium hover:text-slate-900">
        <Plus className="md:hidden" /> <p className="hidden md:flex ">Add</p>
      </DialogTrigger>
      <DialogContent className="w-[80%] lg:w-full rounded-md">
        <form
          ref={formRef}
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await clientAction(formData);
          }}
        >
          <FormContent pending={pending} />
        </form>
      </DialogContent>
    </Dialog>
  );
}
