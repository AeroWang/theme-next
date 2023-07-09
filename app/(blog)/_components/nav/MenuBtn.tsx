'use client'
import { useState } from 'react'
import styles from './nav.module.css'
import clsx from 'clsx'

export default function MenuBtn({ clickCallback }: { clickCallback: Function }) {
  const [isOpen, toggleState] = useState(false)

  const onClick = () => {
    toggleState(!isOpen)
    clickCallback()
  }
  return (
    <button
      id="header-menu"
      aria-label={!isOpen ? 'open menu' : 'close menu'}
      aria-expanded={isOpen}
      className={clsx(styles['header-menu'])}
      onClick={onClick}>
      <div className={clsx(styles['menu-wrapper'], isOpen ? styles['menu-open'] : '')}>
        <div className="line half start"></div>
        <div className="line"></div>
        <div className="line half end"></div>
      </div>
    </button>
  )
}
