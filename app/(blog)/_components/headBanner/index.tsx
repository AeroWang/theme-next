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
      heightClass={'h-64 md:h-[19rem] xl:h-[21rem] 4xl:h-[24rem]'}
      blurDataType={'svg'}
      priority
    />
  )
}
