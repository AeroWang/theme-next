import React from 'react'
import { getPosts } from '#/app/_services/posts'
import { notFound } from 'next/navigation'
import ArticleCard from '#/app/(blog)/(index)/_components/ArticleCard'
import { lodash } from '#/app/_lib'
import { Pagination } from '#/app/(blog)/_components/Pagination'

export default async function Page() {
  const posts = await getPosts({ sort: ['spec.publishTime', 'asc'] })
  if (!posts || !posts.items.length) notFound()
  const paginationData = lodash.omit(posts, 'items')
  return (
    <>
      {posts.items.map((articleItem) => (
        <ArticleCard key={articleItem.metadata.name} article={articleItem} />
      ))}
      <Pagination {...paginationData} />
    </>
  )
}
