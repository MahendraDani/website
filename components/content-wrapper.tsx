import { ReactNode } from "react";

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-4 sm:p-2 sm:w-[40rem]">{children}</div>;
};
