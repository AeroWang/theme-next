import React from 'react'
import { getPosts } from '#/app/_services/posts'
import { notFound } from 'next/navigation'

export default async function Page() {
  const posts = await getPosts({ sort: ['spec.publishTime', 'desc'] })
  if (!posts) {
    notFound()
  }
  return (
    <>
      <h2 className={'mb-4 text-xl font-bold'}>测试获取文章列表数据</h2>
      <h3 className={'text mb-4 font-bold'}>测试接口来自 halo v2.x</h3>
      {posts.items.map((articleItem) => (
        <article key={articleItem.metadata.name}>{articleItem.spec?.title}</article>
      ))}
    </>
  )
}
