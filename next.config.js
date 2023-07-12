/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static-files-upyun.test.upcdn.net',
      },
    ],
    loader: 'custom',
    loaderFile: './app/_utils/imageLoader.js',
  },
}

module.exports = nextConfig
