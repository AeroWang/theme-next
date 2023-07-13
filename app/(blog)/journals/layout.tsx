import React from 'react'
import HeaderBanner from '#/app/(blog)/_components/headBanner'

export default function JournalsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section>
        <section>{children}</section>
        {/*<aside>aside</aside>*/}
      </section>
    </>
  )
}
