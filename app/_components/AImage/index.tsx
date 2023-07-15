import { getImageBlur } from './imageBlur'
import ImageLoader from './ImageLoader'
import React from 'react'
import clsx from 'clsx'

export interface AImageProps {
  src: string
  alt: string
  sizes?: string
  // 生成的图片模糊类型，默认：'css'
  blurDataType?: 'css' | 'svg' | 'base64'
  // 优先级
  priority?: boolean
  id?: string
  widthClass?: string
  heightClass?: string
  // 除宽高之外的其它类名
  className?: string
  /*
  blurData 缩略图来源宽度约定参数；
  此处为又拍云（https://console.upyun.com/services/static-files-upyun/thumbFile/create/）
    - sm: w - 375px
    - md: w - 768px
    - lg: w - 1024px
    - 2xl: w - 1560px
    - 3xl: w - 1920px

    默认 'md'
  */
  blurParam?: 'sm' | 'md' | 'lg' | '2xl' | '3xl'
  // 图片质量，默认 75
  quality?: number
}

export default async function AImage({
  src,
  alt,
  sizes,
  id,
  widthClass,
  heightClass,
  className,
  quality,
  blurParam = 'md',
  priority = false,
  blurDataType = 'css',
}: AImageProps) {
  const { svg, css, base64, img } = await getImageBlur(`${src}!${blurParam}`)
  return (
    <div
      id={id}
      className={clsx(
        'relative block overflow-hidden dark:brightness-90',
        widthClass ? widthClass : 'w-full',
        heightClass ? heightClass : 'h-full',
        className,
      )}>
      {blurDataType === 'svg'
        ? React.createElement(
            svg[0],
            {
              ...svg[1],
              style: {
                ...svg[1].style,
                transform: ['scale(1.5)', svg[1].style.transform].join(' '),
                filter: 'blur(16px)',
              },
              className: '-z-[1]',
            },
            svg[2].map((child) => {
              const transformChild1 = { ...child[1] }
              // @ts-ignore
              if (transformChild1['fill-opacity'] !== undefined) {
                // @ts-ignore
                delete transformChild1['fill-opacity']
                // @ts-ignore
                transformChild1['fillOpacity'] = child[1]['fill-opacity']
              }
              return React.createElement(child[0], {
                key: [child[1].x, child[1].y].join(','),
                ...transformChild1,
              })
            }),
          )
        : null}
      {blurDataType === 'css' ? (
        <div
          className={clsx(
            'absolute',
            'inset-0',
            'w-full',
            'h-full',
            'transform',
            'scale-150',
            'filter',
            'blur-lg',
            '-z-[1]',
          )}
          style={css}
        />
      ) : null}
      <ImageLoader
        url={src}
        alt={alt}
        quality={quality}
        priority={priority}
        blurDataType={blurDataType}
        base64={base64}
        sizes={sizes || '100vw'}
      />
    </div>
  )
}
