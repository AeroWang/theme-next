import JumpToUrl, { JumpToUrlSkeleton } from '#/app/(linkConfirm)/confirm/JumpToUrl'
import { Suspense } from 'react'

export const metadata = {
  title: '跳转提示'
}

export default function ConfirmLink() {
  // {searchParams?.['target_url']}
  return (
    <div className={'relative -top-28 w-full px-6 md:-top-36 md:max-w-screen-sm'}>
      <div className="logo mb-3 text-xl font-semibold italic">Aero</div>
      <Suspense fallback={<JumpToUrlSkeleton />}>
        <JumpToUrl />
      </Suspense>
    </div>
  )
}
