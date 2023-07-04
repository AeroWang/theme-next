'use client'

import { ThemeProvider } from 'next-themes'

export function ThemesProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
}
