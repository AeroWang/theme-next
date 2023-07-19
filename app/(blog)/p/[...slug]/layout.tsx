import React from 'react'
import HeaderBanner from '#/app//(blog)/_components/HeadBanner'
import { getPostByMetaName, getPosts } from '#/app/_services/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import style from './article.module.css'
import clsx from 'clsx'

type Props = {
  params: { slug: string[] }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  const postsRes = await getPosts({ size: 9999 })
  if (!postsRes?.items) notFound()
  return postsRes.items.map((post) => ({
    // Halo v2.7.0 接口只能通过 metadata.name 获取文章详情，这里做拼接（同时文章列表出 Link.href 也做拼接）
    slug: [post.metadata.name, post.spec?.slug!],
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postRes = await getPostByMetaName(params.slug[0])
  // if (!postRes?.spec) notFound()
  // 每篇文章 seo 信息，暂定
  return {
    title: postRes?.spec?.title,
    description: postRes?.spec?.excerpt.raw || `${postRes?.spec?.title}` || '',
    authors: [
      { name: 'Aero' },
      { name: 'Aero', url: `/p/${postRes?.metadata?.name || ''}/${postRes?.spec?.slug || ''}` },
    ],
    // category: postRes.spec.categories ?? '', // TODO: 待定
  }
}

export default async function ArticleLayout({ params, children }: Props & { children: React.ReactNode }) {
  // if (params.slug.length < 2) notFound()
  const postRes = await getPostByMetaName(params.slug[0])
  if (!postRes?.spec) notFound()
  if (postRes.spec.slug != params.slug[1]) notFound()

  return (
    <>
      <HeaderBanner url={postRes.spec.cover ? postRes.spec.cover : `${process.env.STATIC_URL}/img/bg4.jpg`} />
      {/*<HeaderBanner url={`${process.env.STATIC_URL}/img/bg4.jpg`} />*/}
      <section className={'w-full bg-gray-1 dark:bg-transparent'}>
        <article
          className={clsx(
            style.content,
            'wysiwyg wysiwyg-sm mx-auto max-w-4xl px-4 py-6 text-black dark:wysiwyg-invert md:wysiwyg-base dark:text-white-85 dark:wysiwyg-img:brightness-75',
          )}>
          {children}
        </article>
        {/*<aside>aside</aside>*/}
      </section>
    </>
  )
}
