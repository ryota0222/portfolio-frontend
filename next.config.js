const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
})

module.exports = withBundleAnalyzer({})
