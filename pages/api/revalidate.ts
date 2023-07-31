import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.HALO_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    console.log(`[Next.js] Revalidating ${req.query.path}`)
    await res.revalidate(<string>req.query.path || '/')
    console.log('Revalidating success', `${req.query.path || '/'}`)
    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ message: err, text: 'Error revalidating' })
  }
}
/**
 * example:
 * http://localhost:3000 -> host
 * 验证首页 http://localhost:3000/api/revalidate?secret=revalidate_token&path=/
 * 验证关于页 http://localhost:3000/api/revalidate?secret=revalidate_token&path=/about
 */
