import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { MenuRes } from '#/app/_types/halo/menu'
import queryString from 'query-string'

export function getMenu(): Promise<MenuRes | undefined> {
  return haloFetch(HALO_API_PATH.menuByPrimary)
}

export function getMenuByName(name?: string): Promise<MenuRes | undefined> {
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
