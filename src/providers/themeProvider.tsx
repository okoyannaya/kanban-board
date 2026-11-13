"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableColorScheme={false}
  >
    {children}
  </NextThemesProvider>
);
