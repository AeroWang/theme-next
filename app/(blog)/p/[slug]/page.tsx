import React from 'react'
import '#/assets/style/prism-one-dark.css'

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
//   return {}
// }

const Page = async ({ params, searchParams }: Props) => {
  return <div>文章详情页</div>
}
export default Page
