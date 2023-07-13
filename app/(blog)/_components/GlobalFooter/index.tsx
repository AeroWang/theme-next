// import { getLinks } from '#/app/_services'
import Link from 'next/link'
import { dayjsPlugin } from '#/app/_lib'
import IconEmail from '#/app/_components/SvgIcons/IconEmail'
import IconGitHub from '#/app/_components/SvgIcons/IconGitHub'
// import upyunLogo from '#/app/_assets/img/upyun.png'

const GlobalFooter = () => {
  return (
    <footer className={'flex min-h-[10rem] w-full items-center bg-gray-1 px-4 py-10 dark:bg-gray-11 md:px-8'}>
      <div className="content relative mx-auto flex w-full max-w-screen-xl flex-col md:flex-row md:items-center">
        <div className="mb-2 flex h-full flex-none flex-col items-center md:mb-0 md:flex-row">
          <div
            className={
              'logo mb-2 flex h-full items-center justify-center text-base font-bold italic text-primary md:mb-0 md:text-xl'
            }>
            Aero
          </div>
          <div className={'official-links flex justify-center space-x-6 md:ml-6'}>
            <Link href={'mailto:su@aerowang.cn'} className="item h-7 w-7">
              <IconEmail className={'h-full w-full'} />
            </Link>
            <Link href={'https://github.com/aerowang'} target={'_blank'} className="item h-7 w-7">
              <IconGitHub className={'h-full w-full'} />
            </Link>
            {/*      <Link
              href={'http://wpa.qq.com/'}
              target={'_blank'}
              className="item h-6 w-6"
            >
              <IconQq className={'h-full w-full'} />
            </Link>*/}
          </div>
        </div>
        <div className="mx-4 flex flex-1 justify-evenly overflow-hidden md:mb-0">
          {/*todo: 其它模块*/}
          {/*<div className={'other-links sr-only md:not-sr-only md:flex-none'}>
            <div className="mb-2">友情链接</div>
            <div className={'flex flex-col'}>
              <Suspense fallback={<OtherLinksSkeleton />}>
                @ts-expect-error Async Server Component
                <OtherLinks />
              </Suspense>
            </div>
          </div>*/}
        </div>
        <div className="site-info flex flex-none flex-col items-center text-sm md:items-end">
          <div className={'upyun-logo flex items-center'}>
            <span>本网站由</span>
            {/*<Link
              href={'https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral'}
              target={'_blank'}
              className={'relative inline-block h-7 w-14'}>
              <Image
                src={upyunLogo}
                alt={'upyunLogo'}
                className={'inline-block h-full w-full object-cover dark:brightness-75'}
                fill
              />
            </Link>*/}
            <span>&nbsp;icon&nbsp;</span>
            <span>提供CDN加速/云存储服务</span>
          </div>
          <div className="copyright leading-6">
            &copy; 2023-{dayjsPlugin().format('YYYY')} Aero.All Rights Reserved.
          </div>
          <a className="icp block leading-6" href={'#'} target={'_blank'}>
            粤ICP备20023XXX号
          </a>
        </div>
      </div>
    </footer>
  )
}
/*const OtherLinks = async () => {
  const linksRes = await getLinks({ sort: 'priority,desc' }, { next: { revalidate: 5 } })
  if (linksRes.status !== 200) return null
  const linksContent = linksRes.data
  return (
    <>
      {linksContent.map((linkItem) => (
        <Link href={linkItem.url} className={'h-4 text-center text-sm'} target="_blank" key={linkItem.id}>
          {linkItem.name}
        </Link>
      ))}
    </>
  )
}
const OtherLinksSkeleton = () => {
  const linksContent = lodash.range(4)
  return (
    <>
      {linksContent.map((linkItem) => (
        <Link href={'/'} target="_blank" key={linkItem}></Link>
      ))}
    </>
  )
}*/
export default GlobalFooter
