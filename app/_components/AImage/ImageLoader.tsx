'use client'

import Image from 'next/image'
import { AImageProps } from '#/app/_components/AImage/index'

interface LoaderParams {
  src: string
  width: number
  quality?: number
}

interface ImageLoaderProps {
  url: string
  alt: string
  priority?: boolean
  quality?: number
  blurDataType?: AImageProps['blurDataType']
  base64?: string
}

export default function ImageLoader({ url, alt, quality, base64, blurDataType, priority = false }: ImageLoaderProps) {
  // 目前仅对 upyun 做路径处理
  const loader = ({ src, width, quality = 75 }: LoaderParams) => {
    // TODO: 参数待细分
    return `${src}!/fw/${width}/quality/${quality}`
  }
  // TODO: 又拍云图片加载失败时 fallbackImageLoader
  const onError = (e: unknown) => {
    console.log(e)
  }
  return (
    <>
      {blurDataType == 'base64' ? (
        <Image
          loader={loader}
          src={url}
          alt={alt}
          quality={quality}
          priority={priority}
          onError={onError}
          blurDataURL={base64}
          placeholder="blur"
          fill
          className={'object-cover'}
        />
      ) : (
        <Image
          loader={loader}
          src={url}
          alt={alt}
          quality={quality}
          priority={priority}
          onError={onError}
          fill
          className={'object-cover'}
        />
      )}
    </>
  )
}
