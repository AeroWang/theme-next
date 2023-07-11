'use client'

import React, { createContext } from 'react'
import { useSize } from 'ahooks'

export const GlobalWidthContext = createContext<{ width: number; height: number }>({ width: 0, height: 0 })

export default function GlobalSizeProvider({ children }: { children: React.ReactNode }) {
  const bodySize = useSize(() => document.body)

  return (
    <GlobalWidthContext.Provider value={bodySize ? bodySize : { width: 0, height: 0 }}>
      {children}
    </GlobalWidthContext.Provider>
  )
}
