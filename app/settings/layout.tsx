import React from "react";
import { SettingsHeader } from "../../components/Settings/SettingsHeader";

const MyComponent = ({ children }) => {
  return (
    <main className="w-full p-5 lg:py-6 lg:px-8 flex flex-col gap-5">
      <SettingsHeader />
      {children}
    </main>
  );
};

export default MyComponent;
