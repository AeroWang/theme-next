'use client'

// 又拍云 ImageLoader
export default function upyunImageLoader({ src, width, quality }) {
  return `${src}!/fw/${width}/quality/${quality || 75}`
}
