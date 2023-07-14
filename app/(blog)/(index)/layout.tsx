import React from 'react'
import HeaderBanner from '#/app/(blog)/_components/headBanner'

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section>
        <section className={'mx-auto mt-4 block max-w-3xl'}>{children}</section>
        {/*<aside>aside</aside>*/}
      </section>
    </>
  )
}
