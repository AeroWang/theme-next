import AImage from '#/app/_components/AImage'

interface HeaderBannerProps {
  url: string
}

export default function HeaderBanner({ url }: HeaderBannerProps) {
  return (
    <AImage
      id="head-banner"
      src={url}
      alt={'headBannerImage'}
      blurParam={'2xl'}
      heightClass="h-72 md:h-[21rem] xl:h-[23rem] 3xl:h-[25rem]"
      blurDataType={'svg'}
      priority
      sizes="100vw"
    />
  )
}
