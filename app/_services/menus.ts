import { haloFetch } from '#/app/_services/base'
import { HALO_API_PATH } from '#/app/_dicts/haloApiPath'
import { MenuRes } from '#/app/_types/data'

// import querystring from 'querystring'

export async function getMenu(): Promise<MenuRes | undefined> {
  const res = await haloFetch(HALO_API_PATH.menuByPrimary)
  if (!res.ok) return undefined
  return res.json()
}

export async function getMenuByName(name?: string): Promise<MenuRes | undefined> {
  const queryName = name ? name : 'primary'
  const res = await haloFetch(`${HALO_API_PATH.menuByName}/${queryName}`, {
    next: {
      revalidate: 60,
    },
  })
  if (!res.ok) return undefined
  return res.json()
}
