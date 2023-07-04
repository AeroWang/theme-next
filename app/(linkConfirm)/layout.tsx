import React from 'react'
import styles from './main.module.css'
import '#/app/globals.css'

export const metadata = {
  title: {
    default: 'Aero',
    template: '%s - Aero'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={'h-full'}>
      <body className={styles.body}>{children}</body>
    </html>
  )
}
