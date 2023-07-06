'use client'

import { useContext } from 'react'
import { ScrollContext } from '#/app/_components/MyProvider'

export default function NavContainer({ children }: { children: React.ReactNode }) {
  const { left, top: scrollTop } = useContext(ScrollContext)
  return (
    <header className="fixed left-0 top-0 z-50 h-13 w-full bg-gray-1 dark:bg-gray-11 dark:text-white-85 md:h-14">
      {children}
    </header>
  )
}
