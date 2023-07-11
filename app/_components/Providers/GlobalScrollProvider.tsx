'use client'

import React, { createContext } from 'react'
import { useScroll } from 'ahooks'

export const GlobalScrollContext = createContext<{ left: number; top: number }>({ left: 0, top: 0 })

export default function GlobalScrollProvider({ children }: { children: React.ReactNode }) {
  const bodyScroll = useScroll(() => document)

  return (
    <GlobalScrollContext.Provider value={bodyScroll ? bodyScroll : { left: 0, top: 0 }}>
      {children}
    </GlobalScrollContext.Provider>
  )
}
