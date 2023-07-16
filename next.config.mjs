// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['rehype-preset-minify']
  },
  images: {
    deviceSizes: [400, 768, 1024, 1280, 1560, 1920, 2560],
    // ?
    // imageSizes: [400, 768, 1024, 1280, 1560, 1920, 2560],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static-files-upyun.test.upcdn.net',
      },
    ],
  },
}
export default withPlaiceholder(nextConfig)