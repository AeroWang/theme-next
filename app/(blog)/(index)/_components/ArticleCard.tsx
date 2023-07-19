import type { ListedPostVo } from '@halo-dev/api-client'
import Link from 'next/link'
import AImage from '#/app/_components/AImage'
import IconTimeCircle from '#/app/_components/SvgIcons/IconTimeCircle'
import { dayjsPlugin } from '#/app/_lib'
import { dayjsRelativeTime } from '#/app/_utils'
import IconHeart from '#/app/_components/SvgIcons/IconHeart'
import IconEye from '#/app/_components/SvgIcons/IconEye'

type Props = {
  article: ListedPostVo
}
const ArticleCard = ({ article }: Props) => {
  return (
    <article className={'mb-4 overflow-hidden rounded-md'}>
      <Link
        href={`/p/${article.metadata.name}!${article.spec?.slug}`}
        className={'h-full w-full overflow-hidden sm:flex'}>
        {article.spec?.cover ? (
          <AImage
            src={article.spec.cover}
            alt={`coverImage`}
            heightClass={'h-40 sm:h-48'}
            widthClass={'w-full sm:w-[30rem]'}
          />
        ) : null}
        <div className={'content-info group flex w-full flex-col justify-between bg-gray-1 p-4 dark:bg-gray-11'}>
          <h1 className={'mb-3.5 line-clamp-1 text-lg font-semibold md:text-xl md:group-hover:text-primary'}>
            {article.spec?.title}
          </h1>
          <div className={'mb-3.5 line-clamp-2'}>
            {article.spec?.excerpt.raw ? article.spec?.excerpt.raw : '暂无文章摘要'}
          </div>
          <div className={'other-info flex justify-between'}>
            <div className={'left-info flex h-full items-center space-x-1'}>
              <IconTimeCircle className={'icon'} />
              <time
                dateTime={dayjsPlugin(article.spec?.publishTime).format()}
                title={dayjsPlugin(article.spec?.publishTime).format()}
                className={'publish-date h-full'}>
                {dayjsRelativeTime(article.spec?.publishTime)}
              </time>
            </div>
            <div className={'right-info flex h-full space-x-2'}>
              <div className={'upvote flex h-full items-center'}>
                <IconHeart className={'icon h-full'} />
                <span className={'ml-1'}>{article.stats?.upvote}</span>
              </div>
              <div className={'visit flex h-full items-center'}>
                <IconEye className={'icon h-full'} />
                <span className={'ml-1'}>{article.stats?.visit}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
export default ArticleCard
