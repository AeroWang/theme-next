import React from 'react'
import { lodash } from '#/app/_lib'
import TimelineCard from '#/app/(blog)/archives/_components/timelineCard'

export const metadata = {
  title: '归档',
}
const skeletonNum = lodash.range(5)
const Page = async () => {
  // TODO: archives 暂时没有接口地址，暂且搁置
  return (
    <>
      {skeletonNum.map((item) => (
        <TimelineCard key={item} item={item} />
      ))}
    </>
  )
}
export default Page
