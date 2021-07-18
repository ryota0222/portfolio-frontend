const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/components/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-notes',
    '@storybook/addon-storyshots',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    'storybook-addon-pseudo-states',
    'storybook-dark-mode',
    'storybook-addon-performance/register',
    '@storybook/addon-controls',
    'storybook-addon-designs',
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src/'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
