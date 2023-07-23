import React from 'react'
import { getSinglePageByName, getSinglePages } from '#/app/_services/singlePages'
import { notFound } from 'next/navigation'
import { CustomMDX } from '#/app/_components/MDX'

export const metadata = {
  title: '关于',
}

const Page = async () => {
  const singlePages = await getSinglePages()
  const aboutPageSimpleInfo = singlePages.items.find((page) => page.spec?.slug === 'about')
  if (!aboutPageSimpleInfo) notFound()
  const aboutPageDetail = await getSinglePageByName(aboutPageSimpleInfo.metadata.name)
  if (aboutPageDetail.content?.raw) {
    return await CustomMDX(aboutPageDetail.content.raw!)
  }
  return <div dangerouslySetInnerHTML={{ __html: aboutPageDetail.content?.content! }}></div>
}
export default Page
