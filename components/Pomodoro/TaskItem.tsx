import { TasksItemProps } from "@/types/types";
import { Select } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Pen, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

export function TaskItem({ tasks }: TasksItemProps) {
  if (!tasks || tasks.length === 0) {
    return <p className="p-5 text-center">No tasks available</p>;
  }

  return (
    <ul className="w-full flex flex-col gap-3 justify-start  list-none pt-5 px-0 max-h-[400px] overflow-y-auto scrollbar-hide">
      {tasks.map((task) => (
        <li
          key={task.t_id}
          className="border flex  justify-between px-5 py-3 rounded-md"
        >
          <div className="flex items-center gap-3">
            <Checkbox
              className={`checked:bg-lime-500 ${
                task.is_completed ? "bg-lime-500 checked:bg-lime-500" : ""
              }`}
            />
            <p className="h-[25px] w-[80%] scrollbar-hide overflow-y-auto">
              {task.t_task}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="p-2 ">
              <Pen size="20" />
            </Button>

            <Dialog>
              <DialogTrigger className="dark:text-white text-slate-900">
                <Trash2 size="20" />
              </DialogTrigger>
              <DialogContent className="w-[80%] lg:w-full rounded-md">
                <p>Are you sure you want to delete this task?</p>
                <Button variant="destructive">Delete</Button>
              </DialogContent>
            </Dialog>
          </div>
        </li>
      ))}
    </ul>
  );
}
