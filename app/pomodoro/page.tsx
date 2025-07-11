import { PomodoroClock } from "@/components/Pomodoro/PomodoroClock";
import { TaskList } from "@/components/Pomodoro/TaskList";

export default function PomodoroPage() {
  return (
    <div className=" lg:w-[70%]  w-full flex flex-col items-center justify-start gap-5 h-screen mb-[50px]">
      <PomodoroClock />
      <TaskList />
    </div>
  );
}
