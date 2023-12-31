import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function JournalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section className={'mx-auto max-w-4xl px-4 py-10'}>{children}</section>
    </>
  )
}
