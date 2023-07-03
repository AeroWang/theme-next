export const haloFetch = (url: RequestInfo | URL, init?: RequestInit | undefined) => {
  return fetch(`${process.env.HALO_HOST}${url}`, {
    headers: { Authorization: process.env.HALO_AUTHORIZATION },
    ...init
  })
}
