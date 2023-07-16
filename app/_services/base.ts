export const haloFetch = async (url: RequestInfo | URL, init?: RequestInit | undefined) => {
  const res = await fetch(`${process.env.HALO_HOST}${url}`, {
    headers: { Authorization: process.env.HALO_AUTHORIZATION }, // 待定，可能需要，先加上
    ...init,
  })
  console.log(res.url)
  if (!res.ok) return undefined
  return res.json()
}
