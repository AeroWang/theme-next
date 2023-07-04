'use client'

export default function NavContainer({ children }: { children: React.ReactNode }) {
  return (
    <header className="fixed left-0 top-0 z-50 h-13 w-full bg-gray-100 dark:bg-slate-900 dark:text-white">
      {children}
    </header>
  )
}
