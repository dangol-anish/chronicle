import { HabitsHeader } from "@/components/Habits/HabitsHeader";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => {
  return (
    <main className="w-full p-5 lg:py-6 lg:px-8">
      <HabitsHeader />

      {children}
    </main>
  );
};

export default MyComponent;
