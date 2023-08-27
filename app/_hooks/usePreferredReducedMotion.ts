import { useEffect, useState } from 'react'
import { isBrowser } from '#/app/_utils'

const QUERY_STR = '(prefers-reduced-motion: no-preference)'
const isRenderingOnServer = !isBrowser()
const getInitialState = () => {
  return isRenderingOnServer ? true : !window.matchMedia(QUERY_STR).matches
}
export default function usePreferredReducedMotion() {
  const [preferredReducedMotion, setPreferredReducedMotion] = useState(getInitialState)
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY_STR)
    const listener = (event: MediaQueryListEvent) => {
      setPreferredReducedMotion(!event.matches)
    }
    // 兼容处理
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener)
    } else {
      mediaQueryList.addListener(listener)
    }
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener)
      } else {
        mediaQueryList.removeListener(listener)
      }
    }
  }, [])
  return preferredReducedMotion
}
