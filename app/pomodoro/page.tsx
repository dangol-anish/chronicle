import { PomodoroClock } from "@/components/Pomodoro/PomodoroClock";
import { PomodoroHeader } from "@/components/Pomodoro/PomodoroHeader";
import TodoList from "@/components/Pomodoro/TodoList";

export default function PomodoroPage() {
  return (
    <>
      {/* <PomodoroHeader /> */}
      <div className="lg:w-[80%] w-full flex flex-col items-center justify-center gap-5 ">
        <PomodoroClock />
        <TodoList />
      </div>
    </>
  );
}
