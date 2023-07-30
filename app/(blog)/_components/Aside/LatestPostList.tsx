import React, { Suspense } from 'react'
import ContentCard from '#/app/(blog)/_components/Aside/ContentCard'
import { lodash } from '#/app/_lib'
import { getPosts } from '#/app/_services/posts'
import Link from 'next/link'

const LatestPostList = () => {
  return (
    <ContentCard>
      <Suspense fallback={<ListSkeleton />}>
        <List />
      </Suspense>
    </ContentCard>
  )
}

const List = async () => {
  // await addDelay()
  const posts = await getPosts({ page: 1, size: 6, sort: ['spec.publishTime', 'desc'] })
  if (!posts || !posts.items.length)
    return (
      <div title={'NotFound'}>
        <ListSkeleton />
      </div>
    )
  return (
    <>
      {posts.items.map((articleItem) => (
        <Link
          title={articleItem.spec?.title}
          key={articleItem.metadata.name}
          href={`/p/${articleItem.metadata.name}/${articleItem.spec?.slug}`}
          className={'mb-4 block text-sm text-black last:mb-0 hover:!text-primary dark:text-white-85 md:text-base'}>
          <article className={'line-clamp-1'}>{articleItem.spec?.title}</article>
        </Link>
      ))}
    </>
  )
}

const skeletonNum = lodash.range(6)
const ListSkeleton = () => {
  return (
    <>
      {skeletonNum.map((item) => (
        <div
          key={item}
          style={{ width: `${lodash.random(30, 95)}%` }}
          className={'mb-4 h-5 animate-pulse rounded-md bg-black-15 last:mb-0 dark:bg-gray-9'}></div>
      ))}
    </>
  )
}

export default LatestPostList
