import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { ILinkItem, ILinkQueryParams, LinkGroup } from '#/app/_types/halo/links'
import { IList } from '#/app/_types/halo/common'
import queryString from 'query-string'

export function getLinkGroups(): Promise<IList<LinkGroup> | undefined> {
  return haloFetch(HALO_API_PATH.linkGroups)
}

export function getLinkByGroupName(
  queryParams: ILinkQueryParams & { groupName: string },
): Promise<IList<ILinkItem> | undefined> {
  const query = queryString.stringify(
    {
      page: 0,
      size: 0,
      sort: queryParams?.sort ? `${queryParams.sort.join(',')}` : 'priority,asc',
      groupName: queryParams.groupName,
    },
    { skipNull: true },
  )
  return haloFetch(`${HALO_API_PATH.links}?${query}`)
}
