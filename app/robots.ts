import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // NOTE: 演示版阻止抓取
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      /*      {
        userAgent: '*',
        allow: '/',
        disallow: '/confirm/',
      },*/
    ],
    // sitemap: `https://next.aerowang.cn/sitemap.xml`,
  }
}
