"use client";
import { TasksItemProps } from "@/types/types";
import { Select } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Pen, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { deleteTask } from "@/app/pomodoro/actions";
import { useState } from "react";

export function TaskItem({ tasks: initialTasks }: TasksItemProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);

  if (!tasks || tasks.length === 0) {
    return <p className="p-5 text-center">No tasks available</p>;
  }

  const handleDeleteTask = async (taskId: number) => {
    try {
      setLoading(true);
      await deleteTask(taskId);
      // Remove the deleted task from the list
      setTasks((prevTasks) =>
        prevTasks ? prevTasks.filter((task) => task.t_id !== taskId) : []
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ul className="w-full flex flex-col gap-3 justify-start list-none pt-5 px-0 max-h-[400px] overflow-y-auto scrollbar-hide">
      {tasks.map((task) => (
        <li
          key={task.t_id}
          className="border flex justify-between px-5 py-3 rounded-md"
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
            <Button variant="ghost" className="p-2">
              <Pen size="20" />
            </Button>

            <Dialog>
              <DialogTrigger className="dark:text-white text-slate-900">
                <Trash2 size="20" />
              </DialogTrigger>
              <DialogContent className="w-[80%] lg:w-full rounded-md">
                <p>Are you sure you want to delete this task?</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await handleDeleteTask(task.t_id);
                  }}
                >
                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </li>
      ))}
    </ul>
  );
}
