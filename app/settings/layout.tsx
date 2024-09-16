import { ReactNode } from "react";

type SettingsLayoutProps = {
  children: ReactNode;
};

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <main className="w-full p-5 lg:py-6 lg:px-8 flex flex-col gap-6">
      {children}
    </main>
  );
};

export default SettingsLayout;
