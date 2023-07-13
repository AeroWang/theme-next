import React from 'react'
import HeaderBanner from '#/app/(blog)/_components/headBanner'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg3.jpg`} />
      <section>
        <section>{children}</section>
        {/*<aside>aside</aside>*/}
      </section>
    </>
  )
}
