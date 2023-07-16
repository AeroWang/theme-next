import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: React.ReactNode
}
const ContentCard = ({ className, children }: Props) => {
  return <div className={clsx('rounded-md bg-gray-1 p-3 dark:bg-gray-11', className)}>{children}</div>
}

export default ContentCard
