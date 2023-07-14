import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { IPostsQuery, IPostVo } from '#/app/_types/halo/post'
import { IList } from '#/app/_types/halo/common'
import queryString from 'query-string'

export function getPosts(queryParams?: IPostsQuery): Promise<IList<IPostVo> | undefined> {
  const query = queryString.stringify(
    {
      page: queryParams?.page ?? 1,
      size: queryParams?.size ?? 10,
      // eg: ['spec.publishTime', 'dsc']
      sort: queryParams?.sort ? `${queryParams.sort.join(',')}` : undefined,
      // 以下两项待定
      fieldSelector: queryParams?.fieldSelector ? `name=(${queryParams.fieldSelector.join(',')})` : undefined,
      labelSelector: queryParams?.labelSelector ? `name=(${queryParams.labelSelector.join(',')})` : undefined,
    },
    { skipNull: true },
  )
  return haloFetch(`${HALO_API_PATH.posts}?${query}`)
}
