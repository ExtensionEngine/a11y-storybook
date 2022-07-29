module.exports = {
  addons: [
    '@geometricpanda/storybook-addon-badges',
    '@socheatsok78/storybook-addon-vuetify',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  framework: '@storybook/vue',
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
}
