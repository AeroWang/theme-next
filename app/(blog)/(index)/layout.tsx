import React from 'react'
import HeaderBanner from '#/app/(blog)/_components/headBanner'

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBanner url={'http://static-files-upyun.test.upcdn.net/img/bg4.jpg'} />
    </>
  )
}
