"use client";

import { GlobalStyles } from "./styles/global-styles";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
