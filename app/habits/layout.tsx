import { ReactNode } from "react";

type HabitLayoutProps = {
  children: ReactNode;
};

const HabitLayout = ({ children }: HabitLayoutProps) => {
  return (
    <main className="w-full p-5 lg:py-6 lg:px-8 flex flex-col gap-5">
      {children}
    </main>
  );
};

export default HabitLayout;
