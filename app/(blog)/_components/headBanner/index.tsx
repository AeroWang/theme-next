import Image from 'next/image'

interface HeaderBannerProps {
  url: string
}

export default function HeaderBanner({ url }: HeaderBannerProps) {
  return (
    <div
      id="head-banner"
      className="relative block h-64 w-full overflow-hidden md:h-[19rem] xl:h-[21rem] 4xl:h-[24rem]">
      <Image src={url} alt={'headBannerImage'} style={{ objectFit: 'cover' }} fill priority quality={75} />
    </div>
  )
}
