import { useEffect, useRef } from 'react'

export default function useSupported(callback: () => unknown) {
  const isSupported = useRef(false)
  useEffect(() => {
    isSupported.current = Boolean(callback())
  }, [callback])
  return isSupported
}
