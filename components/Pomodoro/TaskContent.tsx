import { getTasks } from "@/app/pomodoro/actions";
import { TaskItem } from "./TaskItem";
import { Task } from "@/types/types";

export default async function TaskContent() {
  const tasksData = await getTasks();

  if ("error" in tasksData) {
    return <div>Error loading habits: {tasksData.error}</div>;
  }

  return (
    <>
      <TaskItem tasks={tasksData as Task[]} />
    </>
  );
}
