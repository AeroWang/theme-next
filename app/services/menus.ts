import { haloFetch } from '#/app/services/base'
import { HALO_API_PATH } from '#/app/dicts/haloApiPath'
import { MenuRes } from '#/app/types/data'

// import querystring from 'querystring'

export async function getMenu(): Promise<MenuRes | undefined> {
  const res = await haloFetch(HALO_API_PATH.menuByPrimary)
  if (!res.ok) return undefined
  return res.json()
}

export async function getMenuByName(name?: string): Promise<MenuRes | undefined> {
  const queryName = name ? name : 'primary'
  const res = await haloFetch(`${HALO_API_PATH.menuByName}/${queryName}`)
  if (!res.ok) return undefined
  return res.json()
}
