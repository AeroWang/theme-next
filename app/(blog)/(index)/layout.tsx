import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section className="mx-auto w-full max-w-3xl px-4 pb-4 pt-4 xl:flex xl:max-w-6xl">
        <section className={'mb-4 w-full xl:mb-0 xl:max-w-screen-md'}>{children}</section>
        <aside className={'h-80 w-full bg-sky-400 xl:ml-6 xl:flex-1'}>aside</aside>
      </section>
    </>
  )
}
