import { ReactNode } from "react";

type PomodoroLayoutProps = {
  children: ReactNode;
};

const PomodoroLayout = ({ children }: PomodoroLayoutProps) => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center p-5 lg:py-6 lg:px-8">
      <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-center gap-6">
        {children}
      </div>
    </main>
  );
};

export default PomodoroLayout;
