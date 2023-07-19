import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className={
        'flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md bg-gray-1 px-3 dark:bg-gray-11'
      }>
      <h2 className={'text-xl font-semibold'}>Not Found</h2>
      <p>好像不对，该链接下没有内容哦</p>
      <p>再检查一下链接吧！</p>
      <p>
        要不然点击{' '}
        <Link href="/" className={'text-primary'}>
          前往首页
        </Link>{' '}
        看看吧
      </p>
    </div>
  )
}
