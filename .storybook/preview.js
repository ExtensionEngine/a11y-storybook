import Vue from 'vue'
import { withThemeProvider, withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

/**
 * Workaround to prevent console errors in case $emit is used to emit events upstream.
 * See: https://github.com/storybookjs/storybook/issues/14933
 */
Vue.prototype.toJSON = () => {};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

export const decorators = [
  withThemeProvider,
  withVuetify,
]
