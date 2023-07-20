import React from 'react'
import styles from './main.module.css'
import '#/app/assets/style/globals.css'
import { ThemesProvider } from '#/app/_components/Providers/ThemesProvider'

export const metadata = {
  title: {
    default: 'Aero',
    template: '%s - Aero',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh" className={'h-full'}>
      <body className={styles.body}>
        <ThemesProvider>{children}</ThemesProvider>
      </body>
    </html>
  )
}
