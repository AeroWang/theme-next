import React from 'react'

type Props = {
  children: React.ReactNode
}
const ContentCard = ({ children }: Props) => {
  return <div className={'rounded-md bg-gray-1 p-3 dark:bg-gray-11'}>{children}</div>
}

export default ContentCard
