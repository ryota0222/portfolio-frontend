const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
})
