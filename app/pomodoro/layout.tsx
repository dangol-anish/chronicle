import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import { ReactNode } from "react";

type PomodoroLayoutProps = {
  children: ReactNode;
};

const PomodoroLayout = ({ children }: PomodoroLayoutProps) => {
  return (
    <main className=" lg:h-screen lg:overflow-hidden p-5 lg:py-6 lg:px-8 flex flex-col gap-6  overflow-y-auto lg:overflow-y-hidden">
      {children}
    </main>
  );
};

export default PomodoroLayout;
