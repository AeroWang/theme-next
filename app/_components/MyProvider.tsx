'use client'

import React, { createContext } from 'react'
import { useScroll } from 'ahooks'

export const ScrollContext = createContext<{ left: number; top: number }>({ left: 0, top: 0 })

export default function MyProvider({ children }: { children: React.ReactNode }) {
  const scroll = useScroll(() => document)
  return <ScrollContext.Provider value={scroll ? scroll : { left: 0, top: 0 }}>{children}</ScrollContext.Provider>
}
