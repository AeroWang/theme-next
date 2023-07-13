'use server'
import 'server-only'
import { getPlaiceholder } from 'plaiceholder'

export const getImageBlur = async (src: string) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()))

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 6 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}
