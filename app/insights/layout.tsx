import { ReactNode } from "react";

type InsightLayoutProps = {
  children: ReactNode;
};

const InsightLayout = ({ children }: InsightLayoutProps) => {
  return <main className="w-full p-5  flex flex-col gap-6">{children}</main>;
};

export default InsightLayout;
