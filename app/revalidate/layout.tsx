import React from 'react'

export const metadata = {
  title: {
    default: 'revalidate',
    template: '%s - Aero',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh" className={'h-full'}>
      <body>{children}</body>
    </html>
  )
}
