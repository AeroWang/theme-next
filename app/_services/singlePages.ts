import {
  ApiContentHaloRunV1alpha1SinglePageApiQuerySinglePagesRequest,
  ListedSinglePageVoList,
  SinglePageVo,
} from '@halo-dev/api-client'
import queryString from 'query-string'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { haloFetch } from '#/app/_services/base'

export function getSinglePages(
  queryParams?: ApiContentHaloRunV1alpha1SinglePageApiQuerySinglePagesRequest,
  init?: RequestInit | undefined,
): Promise<ListedSinglePageVoList> {
  const query = queryString.stringify({
    page: queryParams?.page ?? 1,
    size: queryParams?.size ?? 10,
    // eg: ['publishTime', 'dsc']
    sort: queryParams?.sort ? `${queryParams.sort.join(',')}` : undefined,
    // 以下两项待定
    // eg: labelSelector: ['content.halo.run/visible', true]
    /*fieldSelector: queryParams?.fieldSelector ? `name=(${queryParams.fieldSelector.join('=')})` : undefined,
    labelSelector: queryParams?.labelSelector ? `labelSelector=${queryParams.labelSelector.join('=')}` : undefined,*/
  })
  const reqUrl = HALO_API_PATH.CONTENT.singlePages + '?' + query
  return haloFetch(reqUrl, init)
}

export function getSinglePageByName(name: string, init?: RequestInit | undefined): Promise<SinglePageVo> {
  const reqUrl = HALO_API_PATH.CONTENT.singlePages + '/' + name
  return haloFetch(reqUrl, init)
}
