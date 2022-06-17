const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')

const withVideos = require('next-videos')

module.exports = withPlugins([withBundleAnalyzer, withVideos], {
  /* オプション設定 */
  images: {
    domains: [
      'images.ctfassets.net',
      'cdn.buymeacoffee.com',
      'ryota-portfolio.vercel.app',
      'portfolio-frontend-7a0k38iau-ryota.vercel.app',
    ],
  },
  experimental: { esmExternals: true },
})
