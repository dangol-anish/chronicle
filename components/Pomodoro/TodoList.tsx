"use client";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Pencil, Trash2 } from "lucide-react";

import { textShortener } from "@/utils/textShortener";
import { Checkbox } from "../ui/checkbox";

import { AddTask } from "./AddTask";

export default function TodoList() {
  return (
    <>
      <Card className="w-[95%] h-[400px] p-3 flex flex-col gap-5  ">
        <CardTitle className="flex gap-2 items-center justify-center text-3xl">
          Tasks
        </CardTitle>
        <CardContent className="h-[500px] lg:h-[90%] overflow-y-auto scrollbar-hide flex flex-col gap-5">
          <AddTask />

          <div className="flex flex-col gap-5">
            <div className="border px-4 py-2 rounded-md text-md flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Checkbox />
                <div>
                  <p className="md:hidden">
                    {textShortener(
                      "HelloHelloHelloHelloHelloHelloHelloHello",
                      15
                    )}
                  </p>
                  <p className="hidden md:block ">
                    {textShortener(
                      "HelloHelloHelloHelloHelloHelloHellooHelloHelloHelloHelloHellooHelloHelloHelloHelloHello",
                      45
                    )}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="p-[10px]" variant="ghost">
                  <Pencil size={20} />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="p-[10px]" variant="ghost">
                      {" "}
                      <Trash2 />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <p>Are you sure you want to delete this task?</p>
                    <Button variant="destructive">Delete</Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
