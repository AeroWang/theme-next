'use client'
import React, { AnchorHTMLAttributes, useEffect, useState } from 'react'
import { urlParse } from '#/app/_lib'
import Link from 'next/link'

type Props = {
  props: AnchorHTMLAttributes<HTMLElement>
}
const CustomLink = ({ props }: Props) => {
  const [final, setFinal] = useState({
    href: '',
    blank: false,
    notHttp: false,
  })
  useEffect(() => {
    const parseUrl = urlParse(props.href!)
    const hostName = parseUrl.hostname
    console.log(hostName)
    if (parseUrl.slashes && !hostName.includes('localhost') && !hostName.includes('aerowang.cn')) {
      setFinal({
        href: `${window.location.origin}/confirm?target_url=${parseUrl.href}`.replace('#', '%23'),
        blank: true,
        notHttp: false,
      })
    } else if (parseUrl.protocol !== 'https' && parseUrl.protocol !== 'http') {
      setFinal({
        href: props.href!,
        blank: false,
        notHttp: true,
      })
    } else {
      setFinal({
        href: props.href!,
        blank: false,
        notHttp: false,
      })
    }
  }, [props.href])
  const clickUrl = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (!final.notHttp && final.blank) {
      event.preventDefault()
      // window.open(final.href, '_blank')
    }
  }
  return (
    <Link {...props} href={props.href!} onClick={clickUrl}>
      {props.children}
    </Link>
  )
}
export default CustomLink
