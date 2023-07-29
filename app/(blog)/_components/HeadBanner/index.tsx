import AImage from '../../../_components/AImage'

interface HeaderBannerProps {
  url: string
}

export default function HeaderBanner({ url }: HeaderBannerProps) {
  return (
    <AImage
      id="head-banner"
      alt={'headBannerImage'}
      blurParam={'2xl'}
      priority
      src={url}
      className={'3xl:h-[28rem] h-72 w-full md:h-[23rem] xl:h-[25rem]'}
    />
  )
}
