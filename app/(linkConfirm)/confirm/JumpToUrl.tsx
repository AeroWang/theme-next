'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {
  children?: React.ReactNode
}
const JumpToUrl = ({ children }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const targetUrl = searchParams?.get('target_url')

  return (
    <>
      {children ? (
        <div onClick={() => router.replace(typeof targetUrl === 'string' ? targetUrl : '/')}>{children}</div>
      ) : (
        targetUrl
      )}
    </>
  )
}

export default JumpToUrl
