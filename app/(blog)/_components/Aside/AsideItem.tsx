import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}
const AsideItem = ({ title, children }: Props) => {
  return (
    <div className={'aside-item'}>
      <h2 title={title} className={'mb-4 cursor-default text-lg font-medium md:text-xl'}>
        {title}
      </h2>
      <>{children}</>
    </div>
  )
}

export default AsideItem
