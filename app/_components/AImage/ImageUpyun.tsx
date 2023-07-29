'use client'
import Image from 'next/image'

type LoaderParams = {
  src: string
  width: number
  quality?: number
  watermark?: boolean
}

const imageLoader = ({ src, width, quality = 75 }: LoaderParams) => {
  // Upyun 对图片进行处理的链接形式 https://help.upyun.com/knowledge-base/image/#e58a9fe883bd
  return `${src}!/quality/${quality}/fw/${width}`
}

type Props = {
  src: string
  width: number
  height: number
  alt?: string
  id?: string
  priority?: boolean
  quality?: number
  className?: string
  blurDataURL?: string
  placeholder?: 'blur'
}

// 针对图片存储在又拍云中时的图片优化组件，URL 协议须为 https
export default function ImageUpyun({
  src,
  width,
  height,
  blurDataURL,
  placeholder,
  quality,
  id,
  priority,
  className,
  alt = 'image',
}: Props) {
  return (
    <Image
      id={id}
      loader={imageLoader}
      src={src}
      alt={alt}
      quality={quality}
      width={width}
      height={height}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={className}
    />
  )
}
