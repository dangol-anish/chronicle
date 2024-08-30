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

export default function Page() {
  const searchParams = useSearchParams();
  const currentMood = searchParams.get("cM");
  const insertedAt = searchParams.get("iA");
  const journalText = searchParams.get("jT") || "";

  console.log({
    currentMood,
    insertedAt,
    journalText,
  });
  return (
    <>
      <main className="max-w-screen h-full overflow-x-auto">
        <div className="flex justify-between">
          <p>{formatDateTime(insertedAt)}</p>
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
        <div className="overflow-x-auto">
          <div className="max-w-[500px] mx-auto">
            <div dangerouslySetInnerHTML={{ __html: journalText }} />
          </div>
        </div>
      </main>
    </>
  );
}
