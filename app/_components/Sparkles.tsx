'use client'
import React, { useEffect, useState } from 'react'
import { random } from '#/app/_utils'
import useRandomInterval from '#/app/_hooks/useRandomInterval'
import { lodash } from '#/app/_lib'
import usePreferredReducedMotion from '#/app/_hooks/usePreferredReducedMotion'

type TSparkleConfig = { id?: string; createdAt?: number; size: number; style: React.CSSProperties }

const SingleSparkle = ({ size, style }: TSparkleConfig) => {
  return (
    <div
      style={style}
      className={
        'pointer-events-none absolute text-primary motion-safe:animate-[sparkleGrowAndShrink_700ms_ease-in-out_forwards]'
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        className={'pointer-events-none motion-safe:animate-[sparkleSpin_700ms_ease-in-out_forwards]'}>
        <path
          fill="currentColor"
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"></path>
      </svg>
    </div>
  )
}

const generateSparkleConfig = (preferredReducedMotion = false): Required<TSparkleConfig> => {
  // TODO: 颜色在自定义颜色列表中随机 ?
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    size: random(15, 24),
    style: {
      top: random(-25, 55) + '%',
      left: random(-15, 85) + '%',
      zIndex: preferredReducedMotion ? 9 : random(9, 13),
    },
  }
}

const Sparkles = ({ children }: { children: React.ReactNode }) => {
  const [sparkles, setSparkles] = useState<Required<TSparkleConfig>[]>([])

  const preferredReducedMotion = usePreferredReducedMotion()
  // 保证 prefers-reduced-motion: reduce 时仍然展示，默认初始化 3 个，，但是无动画的
  useEffect(() => {
    if (preferredReducedMotion) setSparkles(lodash.range(3).map(() => generateSparkleConfig(true)))
  }, [preferredReducedMotion])

  // TODO: 仅当元素出现在可视区域时再开始动画
  useRandomInterval(
    () => {
      const now = Date.now()
      const sparkle = generateSparkleConfig()
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt
        return delta < 1000
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    preferredReducedMotion ? null : 300,
    preferredReducedMotion ? null : 700,
  )
  return (
    <span className={'relative inline-block'}>
      {sparkles.map((sparkle) => (
        <SingleSparkle key={sparkle.id} size={sparkle.size} style={sparkle.style} />
      ))}
      {/* TODO: 不应局限于加粗文本 */}
      <span className={'bold relative z-10'}>{children}</span>
    </span>
  )
}
export default Sparkles
