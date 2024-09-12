"use client";
import { TasksItemProps } from "@/types/types";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Pen, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import {
  deleteTask,
  updateTask,
  toggleTaskCompletion,
} from "@/app/pomodoro/actions"; // Add the new action
import { useState } from "react";
import { Textarea } from "../ui/textarea";

export function TaskItem({ tasks: initialTasks }: TasksItemProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [updatedContent, setUpdatedContent] = useState<string>("");

  if (!tasks || tasks.length === 0) {
    return <p className="p-5 text-center">No tasks available</p>;
  }

  const handleDeleteTask = async (taskId: number) => {
    try {
      setLoading(true);
      await deleteTask(taskId);
      setTasks((prevTasks) =>
        prevTasks ? prevTasks.filter((task) => task.t_id !== taskId) : []
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditTask = (taskId: number) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.t_id === taskId);
    if (taskToEdit) {
      setUpdatedContent(taskToEdit.t_task);
    }
  };

  const handleUpdateTask = async () => {
    if (editingTaskId !== null) {
      try {
        setLoading(true);
        const result = await updateTask(editingTaskId, updatedContent);
        if (result?.error) {
          console.error("Failed to update task:", result.error);
        } else {
          setTasks((prevTasks) =>
            prevTasks
              ? prevTasks.map((task) =>
                  task.t_id === editingTaskId
                    ? { ...task, t_task: updatedContent }
                    : task
                )
              : []
          );
          setEditingTaskId(null);
          setUpdatedContent("");
        }
      } catch (error) {
        console.error("Failed to update task:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleToggleCompletion = async (
    taskId: number,
    isCompleted: boolean
  ) => {
    // Optimistic UI update
    setTasks((prevTasks) =>
      prevTasks
        ? prevTasks.map((task) =>
            task.t_id === taskId
              ? { ...task, is_completed: !isCompleted }
              : task
          )
        : []
    );

    try {
      await toggleTaskCompletion(taskId, !isCompleted); // Sync with server
    } catch (error) {
      console.error("Failed to update task status:", error);
      // Revert the UI if the server call fails
      setTasks((prevTasks) =>
        prevTasks
          ? prevTasks.map((task) =>
              task.t_id === taskId
                ? { ...task, is_completed: isCompleted }
                : task
            )
          : []
      );
    }
  };

  return (
    <>
      <ul className="w-full flex flex-col gap-3 justify-start list-none pt-5 px-0 max-h-[400px] overflow-y-auto scrollbar-hide">
        {tasks.map((task) => (
          <li
            key={task.t_id}
            className={`border flex justify-between px-5 py-3 rounded-md ${
              task.is_completed ? "bg-slate-200 dark:bg-slate-800" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.is_completed}
                onCheckedChange={() =>
                  handleToggleCompletion(task.t_id, task.is_completed)
                }
                className={`checked:bg-lime-500 ${
                  task.is_completed ? "bg-lime-500 checked:bg-lime-500" : ""
                }`}
              />
              <p
                className={`h-[25px] w-[80%] scrollbar-hide overflow-y-auto ${
                  task.is_completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.t_task}
              </p>
            </div>
            <div className="flex gap-3">
              <>
                <Button
                  variant="ghost"
                  className="p-2"
                  onClick={() => handleEditTask(task.t_id)}
                >
                  <Pen size="20" />
                </Button>

                <Dialog
                  open={editingTaskId === task.t_id}
                  onOpenChange={(isOpen) => {
                    if (!isOpen) {
                      setEditingTaskId(null);
                      setUpdatedContent("");
                    }
                  }}
                >
                  <DialogContent className="w-[80%] lg:w-full rounded-md">
                    <DialogHeader>
                      <DialogTitle>Edit Task</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Textarea
                        className="w-full h-[200px] resize-none"
                        value={updatedContent}
                        onChange={(e) => setUpdatedContent(e.target.value)}
                      />
                      <DialogFooter>
                        <Button
                          className="w-full"
                          disabled={loading}
                          onClick={handleUpdateTask}
                        >
                          {loading ? "Updating..." : "Update"}
                        </Button>
                      </DialogFooter>
                    </div>
                  </DialogContent>
                </Dialog>
              </>

              <Dialog>
                <DialogTrigger className="dark:text-white text-slate-900 ">
                  <Trash2 className="cursor-pointer" size="20" />
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
                      className="w-full "
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
    </>
  );
}
