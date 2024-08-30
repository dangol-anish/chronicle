"use client";

import { formatDateTime } from "@/utils/dateFormatter";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { moodConverter } from "@/utils/moodConverter";

export default function Page() {
  const searchParams = useSearchParams();
  const currentMood = searchParams.get("cM") as string;
  const insertedAt = searchParams.get("iA");
  const journalText = searchParams.get("jT") || "";

  console.log({
    currentMood,
    insertedAt,
    journalText,
  });
  return (
    <>
      <main className="h-[90vh] w-full overflow-x-auto flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <p>{formatDateTime(insertedAt)}</p>

          <div className="flex items-center">{moodConverter(currentMood)}</div>
          <div className="flex gap-5">
            <Button>Edit</Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">Delete</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete Journal</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this journal?
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button type="submit">Delete</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="border p-5 rounded-md h-full w-full overflow-x-hidden">
          <div dangerouslySetInnerHTML={{ __html: journalText }}></div>
        </div>
      </main>
    </>
  );
}
