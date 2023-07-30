'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemesProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props
  return (
    <ThemeProvider attribute="data-theme" {...rest}>
      {children}
    </ThemeProvider>
  )
}
