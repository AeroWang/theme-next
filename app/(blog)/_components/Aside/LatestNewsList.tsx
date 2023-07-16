import React, { Suspense } from 'react'
import { lodash } from '#/app/_lib'
import ContentCard from '#/app/(blog)/_components/Aside/ContentCard'
import { getMoments } from '#/app/_services/moments'

const LatestNewsList = () => {
  return (
    <ContentCard>
      <Suspense fallback={<NewsContentSkeleton />}>
        <List />
      </Suspense>
    </ContentCard>
  )
}

const List = async () => {
  // await addDelay()
  const moments = await getMoments(
    {
      page: 1,
      size: 3,
      // 时间降序
      sortOrder: false,
    },
    { next: { revalidate: 0 } },
  )
  if (!moments || !moments.items.length)
    return (
      <div title={'NotFound'}>
        <NewsContentSkeleton />
      </div>
    )
  return (
    <>
      {moments.items.map((momentItem) => (
        /*<Link
          title={monmentItem.spec?.title}
          key={monmentItem.metadata.name}
          href={`/p/${monmentItem.spec?.slug}`}
          className={'mb-4 block text-sm text-black last:mb-0 hover:text-primary dark:text-white-85 md:text-base'}>
          <article className={'line-clamp-1'}>{monmentItem.spec?.title}</article>
        </Link>*/
        <div key={momentItem.moment.metadata.name}>{momentItem.moment.spec.content.raw}</div>
      ))}
    </>
  )
}

const skeletonNum = lodash.range(4)
const NewsContentSkeleton = () => {
  return (
    <>
      {skeletonNum.map((item) => (
        <p
          key={item}
          style={{ width: `${lodash.random(40, 95)}%` }}
          className={'mb-4 h-4 animate-pulse rounded-md bg-black-15 last:mb-0 dark:bg-gray-9'}></p>
      ))}
    </>
  )
}
export default LatestNewsList
