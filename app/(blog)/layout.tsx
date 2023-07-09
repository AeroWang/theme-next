import '#/app/globals.css'
import GlobalNav from '#/app/(blog)/_components/nav'
import MyProviders from '#/app/_components/MyProviders'

export const metadata = {
  title: {
    default: 'Aero',
    template: '%s - Aero',
  },
  description: 'Next.js blog',
  generator: 'Next.js',
  applicationName: 'Next.js blog',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Aero' }, { name: 'Aero', url: 'https://github.com/aerowang' }],
  creator: 'AeroWang',
  publisher: 'Aero',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    // maximumScale: 1
    // userScalable: false
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh">
      <body className="h-[2000px] bg-gray-3 transition-colors duration-100 ease-linear dark:bg-gray-13">
        <MyProviders>
          <>
            <GlobalNav />
            {/*<main className={'pt-13 flex w-full flex-1 flex-col pb-20 md:pt-0'}>{children}</main>*/}
            <main className={'flex w-full flex-1 flex-col pb-20 pt-13 md:pt-14'}>{children}</main>
            {/*<GlobalFooter />*/}
          </>
        </MyProviders>
      </body>
    </html>
  )
}
