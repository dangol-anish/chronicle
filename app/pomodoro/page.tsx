import { PomodoroClock } from "@/components/Pomodoro/PomodoroClock";
import TodoList from "@/components/Pomodoro/TodoList";

export default function PomodoroPage() {
  return (
    <div className=" scrollbar-hide lg:w-[80%] scrollbar-hide w-full flex flex-col items-center justify-start gap-5 h-full">
      <PomodoroClock />
      <TodoList />
    </div>
  );
}
