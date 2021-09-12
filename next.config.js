const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPlugins = require('next-compose-plugins')

const withVideos = require('next-videos')

module.exports = withPlugins([withBundleAnalyzer, withVideos], {
  /* オプション設定 */
  images: {
    domains: ['images.ctfassets.net'],
  },
})
