import TimeDotSvg from '#/app/(blog)/archives/_components/OctionSvg'

type Props = {
  item: number
}
const TimelineCard = ({ item }: Props) => {
  return (
    <div className={'relative flex bg-orange-200 md:py-5'}>
      <div className={'relative'}>
        <div className={'sticky top-16 pl-12'}>
          <TimeDotSvg className={'absolute left-0'} />
          <h3 className={'text-lg font-bold md:text-2xl'}>{item}</h3>
        </div>
      </div>
      <div className={'h-96'}>content-title</div>
    </div>
  )
}
export default TimelineCard
