import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { dayjsPlugin } from '../_lib'

export const hyphenToCamelCase = (str: string) => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())

export const dayjsRelativeTime = (time: string | number | Date | Dayjs | undefined) => {
  const isUTC = dayjs.utc(time).isUTC()
  const publishTime = isUTC
    ? dayjsPlugin(time).utc().local().format('YYYY-MM-DD')
    : dayjsPlugin(time).format('YYYY-MM-DD')
  const curTime = dayjsPlugin()
  const diffMonth = curTime.diff(publishTime, 'month', true)
  return diffMonth > 2 ? publishTime : dayjsPlugin(time).fromNow()
}

export const addDelay = async (delayTime?: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('success'), delayTime ?? 1000)
  })
}
