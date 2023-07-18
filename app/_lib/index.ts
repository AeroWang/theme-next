import _ from 'lodash-es'
import dayjsPlugin from 'dayjs'
import 'dayjs/locale/zh-cn'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'
import urlParse from 'url-parse'

dayjsPlugin.extend(utc)
dayjsPlugin.extend(relativeTime)
dayjsPlugin.locale('zh-cn')

export { _ as lodash, dayjsPlugin, urlParse }
