import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
