import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import { ReactNode } from "react";

type PomodoroLayoutProps = {
  children: ReactNode;
};

const PomodoroLayout = ({ children }: PomodoroLayoutProps) => {
  return (
    <main className="w-full h-screen lg:h-[90%] p-5 lg:py-6 lg:px-8 flex flex-col gap-6">
      {children}
    </main>
  );
};

export default PomodoroLayout;
