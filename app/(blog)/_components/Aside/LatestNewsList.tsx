import React, { Suspense } from 'react'
import { lodash } from '#/app/_lib'
import ContentCard from '#/app/(blog)/_components/Aside/ContentCard'
import { getMoments } from '#/app/_services/moments'
import { dayjsRelativeTime } from '#/app/_utils'
import { CustomSimpleMDX } from '#/app/_components/MDX'

const LatestNewsList = () => {
  return (
    <>
      <Suspense fallback={<NewsContentSkeleton />}>
        <List />
      </Suspense>
    </>
  )
}

const List = async () => {
  // await addDelay(2000)
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
        <ContentCard key={momentItem.moment.metadata.name} className={'mb-4 last:mb-0'}>
          <div className={'head mb-3 flex items-center'}>
            <div className="avatar mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-4 text-xl font-bold text-black dark:bg-gray-9 dark:text-white-85">
              A
            </div>
            <div className={'flex flex-col justify-between'}>
              <div className={'text-base font-semibold italic'}>
                {momentItem.owner.name === 'su' || momentItem.owner.name === 'admin' ? 'Aero' : momentItem.owner.name}
              </div>
              <div className={'text-xs text-gray-7'}>{dayjsRelativeTime(momentItem.moment.spec.releaseTime)}</div>
            </div>
          </div>
          <div className={'wysiwyg wysiwyg-sm md:wysiwyg-base dark:wysiwyg-img:brightness-75'}>
            {momentItem.moment.spec.content.raw ? (
              <CustomSimpleMDX source={momentItem.moment.spec.content.raw} />
            ) : (
              momentItem.moment.spec.content.html
            )}
            {/*{momentItem.moment.spec.content.html}*/}
          </div>
        </ContentCard>
      ))}
    </>
  )
}

const skeletonNum = lodash.range(5)
const NewsContentSkeleton = () => {
  return (
    <ContentCard>
      {skeletonNum.map((item) => (
        <p
          key={item}
          style={{ width: `${lodash.random(40, 95)}%` }}
          className={'mb-4 h-4 animate-pulse rounded-md bg-black-15 last:mb-0 dark:bg-gray-9'}></p>
      ))}
    </ContentCard>
  )
}
export default LatestNewsList
