'use client'

import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import styles from '#/app/(blog)/_components/GlobalNav/nav.module.css'
import nav from '#/app/(blog)/_components/GlobalNav/index'
import ThemeSwitch from '#/app/_components/ThemeSwitch'
import IconSearch from '#/app/_components/SvgIcons/IconSearch'
import { GlobalWidthContext } from '#/app/_components/Providers/GlobalSizeProvider'
import { useSelectedLayoutSegments } from 'next/navigation'
import { GlobalScrollContext } from '#/app/_components/Providers/GlobalScrollProvider'

export default function NavContainer({ children }: { children: React.ReactNode }) {
  const { top: globalScrollTop } = useContext(GlobalScrollContext)
  const { width: globalWidth } = useContext(GlobalWidthContext)
  const segments = useSelectedLayoutSegments()
  const [isOpen, toggleState] = useState(false)
  const [interruptScrollTop, setInterruptScrollTop] = useState(globalScrollTop)

  const navRef = useRef<HTMLDivElement>(null)
  const clientHeight = useRef(0)

  useEffect(() => {
    clientHeight.current = window.innerHeight || document.documentElement.clientHeight
  }, [])

  const [bannerBoxHeight, setBannerHeight] = useState(0)
  useEffect(() => {
    const height = document.getElementById('head-banner')?.offsetHeight
    if (height) setBannerHeight(height)
  }, [segments])

  const menuClick = useCallback(() => {
    if (globalWidth >= 768) return
    toggleState(!isOpen)
    if (navRef.current) {
      if (navRef.current.style.maxHeight) {
        navRef.current.style.maxHeight = ''
      } else {
        if (navRef.current.scrollHeight >= Math.round(clientHeight.current / 2)) {
          navRef.current.style.maxHeight = Math.round(clientHeight.current / 2) + 'px'
        } else navRef.current.style.maxHeight = navRef.current.scrollHeight + 'px'
      }
    }
  }, [globalWidth, isOpen])

  const touchMove = useCallback((event: TouchEvent) => {
    event.preventDefault()
  }, [])
  useEffect(() => {
    // 为元素添加事件监听 https://segmentfault.com/a/1190000015462518
    document.getElementById('mobile-mask')?.addEventListener('touchmove', touchMove, {
      passive: false,
    })
  }, [touchMove])
  useEffect(() => {
    if (globalWidth <= 768 && navRef.current) {
      if (navRef.current.scrollHeight >= Math.round(clientHeight.current / 2)) {
        document.getElementById('navigation')?.removeEventListener('touchmove', touchMove)
      } else {
        document.getElementById('navigation')?.addEventListener('touchmove', touchMove, {
          passive: false,
        })
      }
    }
  }, [globalWidth, isOpen, touchMove])

  // @ts-ignore
  const mobileNavLinkClick = (event) => {
    if (globalWidth >= 768) return
    let aLink = event.target.closest('a')
    if (!aLink) return
    menuClick()
  }

  useEffect(() => {
    if (globalWidth <= 768) {
      setInterruptScrollTop(-1000)
    } else setInterruptScrollTop(globalScrollTop)
  }, [globalScrollTop, globalWidth])

  return (
    <>
      <header
        className={clsx(
          'fixed left-0 top-0 z-50 h-13 w-full select-none bg-gray-1 text-black transition-bg-color duration-100 dark:bg-gray-12 dark:text-white-85 md:h-14 md:bg-transparent md:text-white md:backdrop-blur-md dark:md:bg-transparent',
          interruptScrollTop > bannerBoxHeight - 53
            ? '!bg-white/60 dark:!bg-black-65 md:!text-black md:dark:!text-white-85'
            : '',
          globalScrollTop > bannerBoxHeight - 53 ? 'shadow-md dark:shadow-white-6' : '',
        )}>
        <div className="relative flex h-full justify-between px-3 xl:mx-auto xl:max-w-screen-2xl">
          <div className="left h-full md:flex">
            <Link className="logo mr-5 flex h-full w-16 items-center text-xl font-bold italic text-primary" href="/">
              Aero
            </Link>
            <nav
              id="navigation"
              ref={navRef}
              className={clsx(
                'absolute left-0 z-50 max-h-0 w-full overflow-hidden overscroll-y-none bg-gray-1 px-3 pl-8 transition-max-height duration-200 dark:bg-gray-12 md:static md:max-h-none md:!bg-transparent',
              )}
              onClick={mobileNavLinkClick}>
              {children}
            </nav>
          </div>
          <div className="right flex h-full items-center justify-center">
            <div className="search mr-1 flex h-10 w-8 items-center justify-center">
              <IconSearch className={'relative top-0.5 h-6 w-6 cursor-pointer'} />
            </div>
            <ThemeSwitch />
            <button
              id="header-menu"
              aria-label={!isOpen ? 'open menu' : 'close menu'}
              aria-expanded={isOpen}
              className={clsx(styles['header-menu'], isOpen ? 'active' : '')}
              onClick={menuClick}>
              <div className="bars bg-black before:bg-black after:bg-black dark:bg-white-85 dark:before:bg-white-85  dark:after:bg-white-85"></div>
            </button>
          </div>
        </div>
      </header>
      <div
        id="mobile-mask"
        className={clsx(
          'fixed inset-0 z-40 h-screen w-screen bg-black-25 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        onClick={menuClick}></div>
    </>
  )
}
