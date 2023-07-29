import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'
import ImageUpyun from './ImageUpyun'

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()))

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 6 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

type Props = {
  // 图片存储地址，不携带任何查询参数
  src: string
  // 至少需要设着宽高样式
  className: string
  alt?: string
  id?: string
  // 生成的图片模糊类型，默认：'css'
  blurDataType?: 'css' | 'svg' | 'base64'
  // 优先级， true 为优先加载
  priority?: boolean
  // 图片质量，默认 75
  quality?: number
  // 图片资源是否开启本机中转，默认 false
  transfer?: boolean
  /**
   * blurData 缩略图来源宽度约定参数；
   *
   * 此处为约定又拍云（https://console.upyun.com/services/static-files-upyun/thumbFile/create/）
   * - sm: w - 375px
   * - md: w - 768px
   * - lg: w - 1024px
   * - 2xl: w - 1560px
   * - 3xl: w - 1920px
   *
   * 默认 'md'
   */
  blurParam?: 'sm' | 'md' | 'lg' | '2xl' | '3xl'
}

export default async function AImage({
  src,
  id,
  className,
  priority,
  quality = 75,
  transfer = false,
  blurParam = 'md',
  alt = 'image',
  blurDataType = 'css',
}: Props) {
  let plaiceholderImgSrc = transfer ? src : `${src}!${blurParam}`
  const remoteImgInfo = await fetch(`${src}!/info`).then((res) => res.json())
  const { svg, css, base64, img } = await getImage(plaiceholderImgSrc)
  return (
    <div id={id} className={clsx('relative block overflow-hidden', className)}>
      {blurDataType === 'css' ? (
        <div className={'absolute inset-0 z-[1] h-full w-full scale-150 transform blur-md filter'} style={css} />
      ) : null}
      {blurDataType === 'svg'
        ? React.createElement(
            svg[0],
            {
              ...svg[1],
              style: {
                ...svg[1].style,
                transform: ['scale(1.5)', svg[1].style.transform].join(' '),
                filter: 'blur(12px)',
              },
              className: 'z-[1]',
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
      {blurDataType === 'base64' ? (
        !transfer ? (
          <ImageUpyun
            src={src}
            width={remoteImgInfo.width}
            height={remoteImgInfo.height}
            alt={alt}
            quality={quality}
            priority={priority}
            placeholder={'blur'}
            blurDataURL={base64}
            className={'relative z-[2] h-full w-full object-cover dark:brightness-90'}
          />
        ) : (
          <Image
            {...img}
            alt={alt}
            blurDataURL={base64}
            placeholder="blur"
            priority={priority}
            className={'relative z-[2] h-full w-full object-cover dark:brightness-90'}
          />
        )
      ) : !transfer ? (
        <ImageUpyun
          src={src}
          width={remoteImgInfo.width}
          height={remoteImgInfo.height}
          alt={alt}
          quality={quality}
          priority={priority}
          className={'relative z-[2] h-full w-full object-cover dark:brightness-90'}
        />
      ) : (
        <Image
          {...img}
          priority={priority}
          alt={alt}
          className={'relative z-[2] h-full w-full object-cover dark:brightness-90'}
        />
      )}
    </div>
  )
}
