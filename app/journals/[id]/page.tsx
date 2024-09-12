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
import { deleteJournal } from "../actions";
import { useToast } from "@/components/ui/use-toast";

export default function Page({ params }: { params: { id: number } }) {
  const searchParams = useSearchParams();

  const currentMood = searchParams.get("cM") as string;
  const insertedAt = searchParams.get("iA");
  const journalText = searchParams.get("jT") || "";
  const { toast } = useToast();

  const handleJournalDelete = async (journal_id: number) => {
    const error = await deleteJournal(journal_id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete the journal. Please try again.",
      });
    } else {
      toast({
        title: "Journal Deleted",
        description: "The journal has been successfully deleted.",
      });
    }
  };
  return (
    <>
      <main className="h-[90vh] scrollbar-hide  overflow-y-auto  flex flex-col items-center gap-10">
        <div className=" flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div>{moodConverter(currentMood)}</div>
            <p>{formatDateTime(insertedAt)}</p>
          </div>
          <div className="flex gap-5">
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
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={() => {
                      handleJournalDelete(params.id);
                    }}
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className=" rounded-md h-full scrollb">
          <div
            className="scrollbar-hide px-2"
            dangerouslySetInnerHTML={{ __html: journalText }}
          ></div>
        </div>
      </main>
    </>
  );
}
