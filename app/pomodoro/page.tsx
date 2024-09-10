import { PomodoroClock } from "@/components/Pomodoro/PomodoroClock";
import { PomodoroHeader } from "@/components/Pomodoro/PomodoroHeader";
import TodoList from "@/components/Pomodoro/TodoList";

export default function PomodoroPage() {
  return (
    <>
      {/* <PomodoroHeader /> */}
      <div className="flex  flex-col justify-center items-center  overflow-auto lg:h-full lg:flex-row lg:justify-between gap-6 ">
        <PomodoroClock />
        <TodoList />
      </div>
    </>
  );
}
