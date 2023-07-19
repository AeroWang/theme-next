'use client'
import Link from 'next/link'
import type { MenuItemVo } from '@halo-dev/api-client'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useRef } from 'react'
import clsx from 'clsx'

export default function NavLink({ item }: { item: MenuItemVo }) {
  const segments = useSelectedLayoutSegments()
  const finalSegment = useRef('')

  if (segments.length > 0) {
    if (segments[0] === '(index)') {
      finalSegment.current = '/'
    } else finalSegment.current = '/' + segments[0]
  }
  return (
    <Link
      className="flex h-full items-center py-1 first:pt-3 last:pb-3 md:mx-3 md:inline-flex md:py-0 md:first:py-0 md:first:pl-0 md:last:py-0 md:last:pr-0"
      href={item.spec?.href || item.status?.href || '/'}
      target={item.spec?.target}>
      <span className={clsx(finalSegment.current === item.spec?.href ? 'text-primary' : '')}>
        {item.spec?.displayName || item.status?.displayName}
      </span>
      {/* ? 预留 */}
      {/*<div className="icon md:hidden"></div>*/}
    </Link>
  )
}
