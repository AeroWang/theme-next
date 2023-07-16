import React from 'react'
import HeaderBanner from '../_components/HeadBanner'
import AsideItem from '#/app/(blog)/_components/Aside/AsideItem'
import LatestPostList from '#/app/(blog)/_components/Aside/LatestPostList'
import LatestNewsList from '#/app/(blog)/_components/Aside/LatestNewsList'

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section className="mx-auto w-full max-w-3xl px-4 pb-4 pt-4 xl:flex xl:max-w-6xl">
        <section className={'mb-4 w-full xl:mb-0 xl:max-w-screen-md'}>{children}</section>
        <aside className={'w-full space-y-4 xl:ml-6 xl:flex-1'}>
          <AsideItem title={'热门文章'}>
            <LatestPostList />
          </AsideItem>
          <AsideItem title={'最新动态'}>
            <LatestNewsList />
          </AsideItem>
        </aside>
      </section>
    </>
  )
}
