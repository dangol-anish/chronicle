import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import { ReactNode } from "react";

type JournalLayoutProps = {
  children: ReactNode;
};

const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <main className="w-full p-5 lg:py-6 lg:px-8 flex flex-col gap-5">
      {children}
    </main>
  );
};

export default JournalLayout;
