import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg3.jpg`} />
      <section className={'mx-auto w-full px-4 py-5 md:max-w-4xl md:py-10'}>{children}</section>
    </>
  )
}
