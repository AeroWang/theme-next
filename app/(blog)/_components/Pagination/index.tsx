'use client'
import React from 'react'
import RCPagination from 'rc-pagination'
import './pagination.css'
import { useRouter } from 'next/navigation'
import { IPostVo } from '#/app/_types/halo/post'
import { IList } from '#/app/_types/halo/common'
import Link from 'next/link'
import IconLeft from '#/app/_components/SvgIcons/IconLeft'
import IconRight from '#/app/_components/SvgIcons/IconRight'

type Props = Omit<IList<IPostVo>, 'items'>

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
      return <IconLeft className={'cursor-not-allowed'} />
    case 'next':
      if (paginationInfo.hasNext)
        return (
          <Link href={`/page/${current}`} onClick={(event) => event.preventDefault()}>
            <IconRight />
          </Link>
        )
      return <IconRight className={'cursor-not-allowed'} />
  }
  return element
}

const Pagination = (paginationInfo: Props) => {
  const { page, total, hasNext, hasPrevious, first, last, totalPages } = paginationInfo
  const router = useRouter()
  const onChange = (toPageNum: number) => {
    router.push(`/page/${toPageNum}`)
  }

  return (
    <RCPagination
      prefixCls={'aero-pagination'}
      onChange={onChange}
      current={page}
      total={total}
      hideOnSinglePage
      itemRender={(current, type, element) => itemRender(current, type, element, paginationInfo)}
    />
  )
}
export { Pagination }
