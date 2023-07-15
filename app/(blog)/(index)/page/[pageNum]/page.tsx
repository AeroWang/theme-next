import React from 'react'
import { getPosts } from '#/app/_services/posts'
import { notFound } from 'next/navigation'
import { lodash } from '#/app/_lib'
import ArticleCard from '#/app/(blog)/(index)/_components/ArticleCard'
import { Pagination } from '#/app/(blog)/_components/Pagination'

type Props = {
  params: { pageNum: number }
}

export async function generateStaticParams() {
  const postsRes = await getPosts({ page: 1, sort: ['spec.publishTime', 'desc'] })
  if (!postsRes) notFound()
  if (!postsRes.items.length) notFound()
  const pageNumArr = lodash.range(1, postsRes.totalPages + 1)
  return pageNumArr.map((num) => ({
    pageNum: String(num),
  }))
}

export default async function Page({ params }: Props) {
  const posts = await getPosts({ page: params.pageNum, sort: ['spec.publishTime', 'desc'] })
  if (!posts) {
    notFound()
  }
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
