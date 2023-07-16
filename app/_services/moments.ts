import { IList } from '#/app/_types/halo/common'
import queryString from 'query-string'
import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { IMoments, IMomentsQuery } from '#/app/_types/halo/moments'

export function getMoments(
  queryParams?: IMomentsQuery,
  init?: RequestInit | undefined,
): Promise<IList<IMoments> | undefined> {
  const query = queryString.stringify(
    {
      page: queryParams?.page ?? 1,
      size: queryParams?.size ?? 10,
      // 其它查询选项待确定
      ...queryParams,
    },
    { skipNull: true },
  )
  return haloFetch(`${HALO_API_PATH.moments}?${query}`, init)
}
