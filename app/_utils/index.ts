export const hyphenToCamelCase = (str: string) => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())

import { dayjsPlugin } from '../_lib'

export const dayjsRelativeTime = (time: Date | undefined) => {
  const publishTime = dayjsPlugin(time).format('YYYY-MM-DD')
  const curTime = dayjsPlugin()
  const diffMonth = curTime.diff(publishTime, 'month', true)
  return diffMonth > 2 ? publishTime : dayjsPlugin(time).fromNow()
}

export const addDelay = async (delayTime?: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('success'), delayTime ?? 1000)
  })
}
