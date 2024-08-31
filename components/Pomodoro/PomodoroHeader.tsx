import { Button } from "../ui/button";
import Link from "next/link";

export function PomodoroHeader() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-[28px] lg:text-[32px] lg:flex">Pomodoro</h2>
    </header>
  );
}
