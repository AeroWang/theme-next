'use client'
import React, { useEffect, useRef, useState } from 'react'
import { random } from '#/app/_utils'
import useRandomInterval from '#/app/_hooks/useRandomInterval'
import { lodash } from '#/app/_lib'
import usePreferredReducedMotion from '#/app/_hooks/usePreferredReducedMotion'
import { useInViewport } from 'ahooks'

type TSparkleConfig = { id?: string; createdAt?: number; size: number; style: React.CSSProperties }

const SingleSparkle = ({ size, style }: TSparkleConfig) => {
  return (
    <div
      style={style}
      className={
        'pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-primary motion-safe:animate-[sparkleGrowAndShrink_600ms_ease-in-out_forwards]'
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        className={'pointer-events-none motion-safe:animate-[sparkleSpin_600ms_ease-in-out_forwards]'}>
        <path
          fill="currentColor"
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"></path>
      </svg>
    </div>
  )
}

type TGenerateSparkleConfig = (preferredReducedMotion?: boolean, randomColorList?: string[]) => Required<TSparkleConfig>
const generateSparkleConfig: TGenerateSparkleConfig = (preferredReducedMotion = false, randomColorList = []) => {
  // const randomColorList = ['#fbbf24', '#4ade80', '#60a5fa', '#8b5cf6', '#f43f5e']
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    size: random(10, 16),
    style: {
      color: randomColorList.length ? randomColorList[random(0, randomColorList.length)] : undefined,
      top: random(-15, 55) + '%',
      left: random(0, 85) + '%',
      zIndex: preferredReducedMotion ? 9 : random(9, 12),
    },
  }
}

const Sparkles = ({ randomColorList, children }: { randomColorList?: string[]; children: React.ReactNode }) => {
  const [sparkles, setSparkles] = useState<Required<TSparkleConfig>[]>([])
  const sparklesRef = useRef(null)
  const [clickedSparkles, setClicked] = useState(false)

  const preferredReducedMotion = usePreferredReducedMotion()
  const [inViewport] = useInViewport(sparklesRef)
  // 保证 prefers-reduced-motion: reduce 时仍然展示，默认初始化 2 ~ 4 个，，但是无动画的，且置于文字下层
  useEffect(() => {
    if (preferredReducedMotion)
      setSparkles(lodash.range(random(2, 4)).map(() => generateSparkleConfig(true, randomColorList)))
  }, [preferredReducedMotion])

  useRandomInterval(
    () => {
      const now = Date.now()
      const sparkle = generateSparkleConfig(false, randomColorList)
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt
        return delta < 700
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    preferredReducedMotion ? null : inViewport ? (clickedSparkles ? null : 300) : null,
    800,
  )

  const onClickSparkles = () => {
    setClicked(!clickedSparkles)
  }
  return (
    <span className={'relative inline-block cursor-pointer'} ref={sparklesRef} onClick={onClickSparkles}>
      {sparkles.map((sparkle) => (
        <SingleSparkle key={sparkle.id} size={sparkle.size} style={sparkle.style} />
      ))}
      {/* TODO: 不应局限于加粗文本 */}
      <span className={'bold relative z-10'}>{children}</span>
    </span>
  )
}
export default Sparkles
