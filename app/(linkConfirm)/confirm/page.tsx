import React from 'react'
import JumpToUrl from '#/app/(linkConfirm)/confirm/JumpToUrl'

export const metadata = {
  title: '跳转提示',
}

export default function ConfirmLink() {
  // {searchParams?.['target_url']}
  return (
    <div className={'relative -top-28 w-full px-6 md:-top-36 md:max-w-screen-sm'}>
      <div className="logo mb-3 text-xl font-semibold italic">Aero</div>
      <div className="prompt rounded-md bg-gray-1 px-3 py-4 dark:bg-gray-11 md:px-8 md:py-6">
        <div className={'mb-6 font-medium'}>即将前往下方网址，注意安全上网</div>
        <div className={'mb-3 break-all border-b border-gray-5 pb-3 text-gray-9 dark:border-gray-500 dark:text-gray-6'}>
          <JumpToUrl />
        </div>
        <div className={'jump flex w-full justify-end'}>
          <div className={'cursor-pointer rounded-md bg-red-500 px-2 text-sm leading-8 text-white-85'}>
            <JumpToUrl>继续访问</JumpToUrl>
          </div>
        </div>
      </div>
    </div>
  )
}
