import React from 'react'
import HeaderBanner from '../_components/HeadBanner'
import { getSinglePageByName, getSinglePages } from '#/app/_services/singlePages'
import clsx from 'clsx'
import style from '#/app/(blog)/p/[...slug]/article.module.css'

export default async function AboutLayout({ children }: { children: React.ReactNode }) {
  const singlePages = await getSinglePages()
  const aboutPageSimpleInfo = singlePages.items.find((page) => page.spec?.slug === 'about')
  if (!aboutPageSimpleInfo) return <NotFoundAbout />
  const aboutPageDetail = await getSinglePageByName(aboutPageSimpleInfo.metadata.name)
  return (
    <>
      <HeaderBanner url={aboutPageDetail.spec?.cover || `${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section className={'w-full bg-gray-1 dark:bg-transparent'}>
        <article
          className={clsx(
            style.content,
            'wysiwyg wysiwyg-sm mx-auto max-w-4xl px-4 py-6 text-black dark:wysiwyg-invert md:wysiwyg-base dark:text-white-85 dark:wysiwyg-img:brightness-75 xl:wysiwyg-code:text-base',
          )}>
          {children}
        </article>
      </section>
      <section className={'mx-auto py-10 text-black dark:text-white-85'}>底部这里还没想好写什么👀 !!!</section>
    </>
  )
}

const NotFoundAbout = () => {
  return (
    <>
      <HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />
      <section className={'w-full bg-gray-1 dark:bg-transparent'}>
        <article
          className={clsx(
            style.content,
            'wysiwyg wysiwyg-sm mx-auto max-w-4xl px-4 py-6 text-black dark:wysiwyg-invert md:wysiwyg-base dark:text-white-85 dark:wysiwyg-img:brightness-75 xl:wysiwyg-code:text-base',
          )}>
          暂未编写关于内容
        </article>
      </section>
      <section className={'mx-auto py-10 text-black dark:text-white-85'}>底部这里还没想好写什么👀 !!!</section>
    </>
  )
}
