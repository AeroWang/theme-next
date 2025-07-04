import { getPostByMetaName } from '#/app/_services/posts'
import { notFound } from 'next/navigation'
import React from 'react'
import { CustomMDX } from '#/app/_components/MDX'
import '#/app/assets/style/prism-one-dark.css'

type Props = {
  params: Promise<{ slug: string[] }>
}

const Page = async (props: Props) => {
  const params = await props.params;
  const postRes = await getPostByMetaName(params.slug[0])
  if (!postRes?.spec) notFound()
  // 暂时兜底
  if (postRes.spec.slug != params.slug[1]) notFound()

  if (postRes.content?.raw) {
    const formatContent = await CustomMDX(postRes.content.raw!)
    return <>{formatContent}</>
  }
  return <div dangerouslySetInnerHTML={{ __html: postRes.content?.content! }}></div>
}
export default Page
