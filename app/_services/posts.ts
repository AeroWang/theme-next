import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import queryString from 'query-string'
import type { ApiContentHaloRunV1alpha1PostApiQueryPostsRequest, ListedPostVoList, PostVo } from '@halo-dev/api-client'

export function getPosts(
  queryParams?: ApiContentHaloRunV1alpha1PostApiQueryPostsRequest,
  init?: RequestInit | undefined,
): Promise<ListedPostVoList | undefined> {
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
  return haloFetch(`${HALO_API_PATH.posts}?${query}`, init)
}

export function getPostByMetaName(metaName: string, init?: RequestInit | undefined): Promise<PostVo | undefined> {
  return haloFetch(`${HALO_API_PATH.posts}/${metaName}`, init)
}
