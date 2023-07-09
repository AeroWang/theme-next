'use client'

import React, { createContext } from 'react'
import { useScroll, useSize } from 'ahooks'
import { ThemeProvider } from 'next-themes'

export const GlobalScrollContext = createContext<{ left: number; top: number }>({ left: 0, top: 0 })
export const GlobalWidthContext = createContext<{ width: number; height: number }>({ width: 0, height: 0 })

export default function MyProviders({ children }: { children: React.ReactNode }) {
  const bodyScroll = useScroll(() => document)
  const bodySize = useSize(() => document.body)

  return (
    <ThemeProvider attribute="data-theme">
      <GlobalWidthContext.Provider value={bodySize ? bodySize : { width: 0, height: 0 }}>
        <GlobalScrollContext.Provider value={bodyScroll ? bodyScroll : { left: 0, top: 0 }}>
          {children}
        </GlobalScrollContext.Provider>
      </GlobalWidthContext.Provider>
    </ThemeProvider>
  )
}
