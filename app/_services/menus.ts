import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import queryString from 'query-string'
import type { MenuVo } from '@halo-dev/api-client'

export function getMenu(): Promise<MenuVo | undefined> {
  return haloFetch(HALO_API_PATH.menuByPrimary)
}

export function getMenuByName(name?: string): Promise<MenuVo | undefined> {
  const queryName = name ? name : 'primary'
  return haloFetch(`${HALO_API_PATH.menuByName}/${queryName}`)
}

export function getMenuItems(names: string[]) {
  const query = {
    page: 0,
    size: 0,
    fieldSelector: `name=(${names.join(',')})`,
  }
  return haloFetch(`/api/v1alpha1/menuitems?${queryString.stringify(query)}`)
}
