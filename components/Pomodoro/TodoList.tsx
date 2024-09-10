import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BadgePlus, Pencil, Trash2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { textShortener } from "@/utils/textShortener";

export default function TodoList() {
  return (
    <>
      <Card className="lg:w-[49%] w-[95%] h-[500px] lg:h-full flex flex-col lg:gap-8 p-5 mb-5 lg:mb-0 gap-5">
        <CardTitle className="flex gap-2 items-center justify-center text-3xl">
          Tasks
        </CardTitle>
        <CardContent className="h-[500px] lg:h-[90%] overflow-y-auto scrollbar-hide flex flex-col gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full flex gap-2 text-xl" variant="default">
                <BadgePlus />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new task to do</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-5">
                  <Textarea
                    className="w-full h-[200px] resize-none"
                    placeholder="e.g. Brush my teeth"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="flex flex-col gap-5">
            <div className="border px-4 py-2 rounded-md text-md flex justify-between items-center">
              <p className="md:hidden">
                {textShortener("HelloHelloHelloHelloHelloHelloHelloHello", 15)}
              </p>
              <p className="hidden md:block lg:hidden">
                {textShortener("HelloHelloHelloHelloHelloHelloHello", 50)}
              </p>
              <p className="hidden lg:block">
                {textShortener(
                  "HelloHelloHelloHelloHelloHelloHelloHellHelloHelloHelloHellolloHelloHelloHelloHellolloHelloHelloHelloHellolloHelloHelloHelloHellolloHelloHelloHelloHellolloHelloHelloHelloHellolloHelloHelloHelloHello",
                  60
                )}
              </p>
              <div className="flex gap-2">
                <Button className="p-[10px]" variant="ghost">
                  <Pencil size={20} />
                </Button>
                <Button className="p-[10px]" variant="ghost">
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
