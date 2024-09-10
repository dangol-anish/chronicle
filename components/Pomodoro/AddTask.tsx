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

import { BadgePlus } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "../ui/use-toast";

import { Textarea } from "../ui/textarea";
import { addTasks } from "@/app/pomodoro/actions";

export function AddTask() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

  async function clientAction(formData: FormData) {
    setPending(true);
    const result = await addTasks(formData);
    setPending(false);
    if (result?.error) {
      toast({
        variant: "destructive",
        description: result.error,
      });
      return;
    }
    formRef.current?.reset();
    window.location.reload();
    await wait();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger className="">
        <Button className="w-full flex gap-2 text-xl" variant="default">
          <BadgePlus />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] lg:w-full rounded-md">
        <DialogHeader>
          <DialogTitle>Add a new task to do</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await clientAction(formData);
            }}
            className="flex flex-col gap-4"
            ref={formRef}
          >
            <Textarea
              className="w-full h-[200px] resize-none"
              placeholder="e.g. Brush my teeth"
              name="task"
            />
            <DialogFooter>
              <Button className="w-full" disabled={pending} type="submit">
                {pending ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
