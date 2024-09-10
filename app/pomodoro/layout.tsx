import { ReactNode } from "react";

type PomodoroLayoutProps = {
  children: ReactNode;
};

const PomodoroLayout = ({ children }: PomodoroLayoutProps) => {
  return (
    <main className="w-full h-screen p-5 lg:py-6 lg:px-8 flex flex-col justify-center items-center gap-6 overflow-y-auto">
      {children}
    </main>
  );
};

export default PomodoroLayout;
