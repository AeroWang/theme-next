import React from 'react'
import HeaderBanner from '../_components/HeadBanner'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section>
        <article>{children}</article>
        {/*<aside>aside</aside>*/}
      </section>
    </>
  )
}
