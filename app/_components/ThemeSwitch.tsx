'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import IconMoon from '#/app/_components/SvgIcons/IconMoon'
import IconSun from '#/app/_components/SvgIcons/IconSun'
import clsx from 'clsx'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else setTheme('light')
  }
  return (
    <div className={clsx('relative h-10 w-10 cursor-pointer')} onClick={toggleTheme}>
      <IconSun
        className={clsx(
          'absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200',
          resolvedTheme === 'light' ? 'visible rotate-45 opacity-100' : 'invisible rotate-0 opacity-0',
        )}
      />
      <IconMoon
        className={clsx(
          'absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200',
          resolvedTheme === 'dark' ? 'visible rotate-0 opacity-100' : 'invisible -rotate-45 opacity-0',
        )}
      />
    </div>
  )
}
