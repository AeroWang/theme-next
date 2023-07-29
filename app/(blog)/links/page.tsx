import React from 'react'
import { getLinkByGroupName, getLinkGroups } from '#/app/_services/links'
import { LinkGroup } from '#/app/_types/halo/links'
import Link from 'next/link'
import AImage from '../../_components/AImage'

export const metadata = {
  title: '友链',
}

const LinkTeam = async ({ teamItem }: { teamItem: LinkGroup }) => {
  const links = await getLinkByGroupName({ groupName: teamItem.metadata.name })
  if (!links?.items.length) return <div>no links</div>
  return (
    <section className={'links-group mb-4'}>
      <h3 className={'mb-4 text-xl font-medium'}>{teamItem.spec?.displayName}</h3>
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'}>
        {links.items.map((link) => (
          <Link
            key={link.metadata.name}
            href={link.spec.url}
            target="_blank"
            className={
              'box-border flex items-center rounded-md bg-gray-1 px-4 py-2 transition-shadow hover:shadow-gray-5 dark:bg-gray-11 dark:hover:shadow-gray-10 md:hover:shadow-2xl'
            }>
            <AImage
              src={link.spec.logo}
              alt={'avatar'}
              className={'h-9 w-9 rounded-full sm:h-14 sm:w-14'}
              blurDataType={'base64'}
              blurParam={'sm'}
            />
            <div className={'relative ml-5 flex h-full flex-1 flex-col justify-evenly'}>
              <div className={'name text-sm font-semibold md:text-base'}>{link.spec.displayName}</div>
              <div className={'desc line-clamp-1 text-xs text-gray-7 md:text-sm'}>{link.spec.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

const Page = async () => {
  const linkGroups = await getLinkGroups()
  if (!linkGroups?.items.length) return <div>no links</div>
  return (
    <>
      {linkGroups.items.map((team) => (
        <LinkTeam key={team.metadata.name} teamItem={team} />
      ))}
    </>
  )
}
export default Page
