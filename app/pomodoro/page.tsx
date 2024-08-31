import { PomodoroClock } from "@/components/Pomodoro/PomodoroClock";
import { PomodoroHeader } from "@/components/Pomodoro/PomodoroHeader";

export default function PomodoroPage() {
  return (
    <>
      <PomodoroHeader />
      <PomodoroClock />
    </>
  );
}
