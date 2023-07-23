import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg3.jpg`} />
      <section className={'mx-auto w-full max-w-3xl px-4 pb-4 pt-4 xl:max-w-6xl'}>{children}</section>
    </>
  )
}
