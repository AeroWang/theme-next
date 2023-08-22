import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: dynamic generate
  return [
    {
      url: 'https://next.aerowang.cn',
      lastModified: new Date(),
    },
    {
      url: 'https://next.aerowang.cn/about',
      lastModified: new Date(),
    },
    {
      url: 'https://next.aerowang.cn/links',
      lastModified: new Date(),
    },
    {
      url: 'https://next.aerowang.cn/journals',
      lastModified: new Date(),
    },
  ]
}
