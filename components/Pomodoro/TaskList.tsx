import { Card, CardContent, CardTitle } from "../ui/card";
import { AddTask } from "./AddTask";
import TaskContent from "./TaskContent";

export function TaskList() {
  return (
    <>
      <Card className="w-[95%] p-5 flex flex-col gap-5 ">
        <CardTitle className="flex gap-2 items-center justify-center text-3xl">
          Tasks
        </CardTitle>
        <CardContent className="p-0">
          <AddTask />
          <TaskContent />
        </CardContent>
      </Card>
    </>
  );
}
