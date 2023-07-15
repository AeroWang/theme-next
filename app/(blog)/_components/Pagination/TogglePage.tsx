'use client'
import clsx from 'clsx'
import { useRouter, useSelectedLayoutSegments } from 'next/navigation'

const TogglePage = ({ previous }: { previous: boolean }) => {
  const router = useRouter()

  const segments = useSelectedLayoutSegments()
  console.log(segments)

  const goToPage = () => {
    if (previous) {
      router.push('/')
    } else router.push('/')
  }
  return (
    <div
      className={clsx(
        'next flex h-8 w-8 items-center justify-center rounded-full bg-gray-1 text-xl dark:bg-gray-9',
        previous ? 'mr-3 md:mr-4' : ''
      )}
      onClick={goToPage}
    >
      {previous ? '<' : '>'}
    </div>
  )
}
export default TogglePage
