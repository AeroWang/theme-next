'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const JumpToUrl = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const targetUrl = useMemo(() => searchParams?.get('target_url') as string, []) // eslint-disable-line
  return (
    <div className="prompt rounded-md bg-gray-1 px-3 py-4 dark:bg-gray-7 md:px-8 md:py-6">
      <div className={'mb-6 font-medium'}>即将前往下方网址，注意安全上网</div>
      <div
        className={'mb-3 break-all border-b border-gray-5 pb-3 text-zinc-500 dark:border-gray-500 dark:text-zinc-400'}
      >
        {targetUrl}
      </div>
      <div className={'jump flex w-full justify-end'}>
        <div
          className={'cursor-pointer rounded-md bg-primary-red/90 px-2 text-sm leading-8 text-gray-1'}
          onClick={() => router.replace(targetUrl)}
        >
          继续访问
        </div>
      </div>
    </div>
  )
}
export const JumpToUrlSkeleton = () => {
  return (
    <div className="prompt rounded-md bg-gray-1 px-3 py-4 dark:bg-gray-7 md:px-8 md:py-6">
      <div className={'mb-6 font-medium'}>即将前往下方网址，注意安全上网</div>
      <div
        className={
          'mb-3 h-10 break-all border-b border-gray-5 pb-3 text-zinc-500 dark:border-gray-500 dark:text-zinc-400'
        }
      ></div>
      <div className={'jump flex w-full justify-end'}>
        <div className={'cursor-pointer rounded-md bg-primary-red/90 px-2 text-sm leading-8 text-gray-1'}>继续访问</div>
      </div>
    </div>
  )
}
export default JumpToUrl
