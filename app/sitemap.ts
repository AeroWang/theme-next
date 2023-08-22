import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: dynamic generate
  // NOTE: 演示版不做实际有效 sitemap.xml
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
    },
  ]
}
