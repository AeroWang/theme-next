'use client'
import { random } from '#/app/_utils'
import { useCallback, useEffect, useRef } from 'react'

/**
 * 类似 setInterval ，但是发生的更自然
 *
 * callback 函数具有某种效果，会在提供的最小及最大值（数字类型）之间随机地递归调用自己
 */
export default function useRandomInterval(
  callback: () => void,
  minDelay: number | null | undefined,
  maxDelay: number | null | undefined,
) {
  const timeoutId = useRef<number | null>(null)
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => {
      if (typeof timeoutId.current === 'number') return window.clearTimeout(timeoutId.current)
    }
  }, [minDelay, maxDelay])
  return useCallback(function () {
    if (typeof timeoutId.current === 'number') return window.clearTimeout(timeoutId.current)
  }, [])
}
