'use client'
import React from 'react'
import RCPagination from 'rc-pagination'
import './pagination.css'
import { useRouter } from 'next/navigation'
import type { ListedPostVoList } from '@halo-dev/api-client'
import Link from 'next/link'
import IconLeft from '#/app/_components/SvgIcons/IconLeft'
import IconRight from '#/app/_components/SvgIcons/IconRight'
import JumpNextSvg from './JumpNextSvg'
import JumpPrevSvg from './JumpPrevSvg'

type Props = Omit<ListedPostVoList, 'items'>

type TItemRender = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
  element: React.ReactNode,
  paginationInfo: Props,
) => React.ReactNode

const itemRender: TItemRender = (current, type, element, paginationInfo) => {
  switch (type) {
    case 'page':
      return <Link href={`/page/${current}`}>{current}</Link>
    case 'prev':
      if (paginationInfo.hasPrevious)
        return (
          <Link href={`/page/${current}`} onClick={(event) => event.preventDefault()}>
            <IconLeft />
          </Link>
        )
      return <IconLeft />
    case 'next':
      if (paginationInfo.hasNext)
        return (
          <Link href={`/page/${current}`} onClick={(event) => event.preventDefault()}>
            <IconRight />
          </Link>
        )
      return <IconRight />
    case 'jump-prev':
      return (
        <>
          <span role={'img'} aria-label="double-left" className={'icon'}>
            <JumpPrevSvg />
          </span>
          <span className="aero-pagination-item-ellipsis">•••</span>
        </>
      )
    case 'jump-next':
      return (
        <>
          <span role={'img'} aria-label="double-right" className={'icon'}>
            <JumpNextSvg />
          </span>
          <span className="aero-pagination-item-ellipsis">•••</span>
        </>
      )
  }
}

const Pagination = (paginationInfo: Props) => {
  const { page, total, hasNext, size, hasPrevious, first, last, totalPages } = paginationInfo
  const router = useRouter()
  const onChange = (toPageNum: number) => {
    router.push(`/page/${toPageNum}`)
  }

  return (
    <RCPagination
      prefixCls={'aero-pagination'}
      onChange={onChange}
      pageSize={size}
      current={page}
      total={total}
      hideOnSinglePage
      itemRender={(current, type, element) => itemRender(current, type, element, paginationInfo)}
    />
  )
}
export { Pagination }
