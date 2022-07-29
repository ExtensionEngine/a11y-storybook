import Vue from 'vue'
import { withThemeProvider, withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

/**
 * Workaround to prevent console errors in case $emit is used to emit events upstream.
 * See: https://github.com/storybookjs/storybook/issues/14933
 */
Vue.prototype.toJSON = () => {};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  badgesConfig: {
    CUSTOMIZABLE: {
      styles: {
        backgroundColor: '#FFF8E1',
        borderColor: '#D50000',
        color: '#BF360C',
      },
    },
    ISSUES: {
      styles: {
        backgroundColor: '#FFEBEE',
        borderColor: '#FFAB00',
        color: '#B71C1C',
      },
    },
    MOBILE: {
      styles: {
        backgroundColor: '#ECEFF1',
        borderColor: '#607D8B',
        color: '#263238',
      },
    },
    STABLE: {
      styles: {
        backgroundColor: '#E8F5E9',
        borderColor: '#00C853',
        color: '#1B5E20',
      },
    },
    W3C: {
      styles: {
        backgroundColor: '#E3F2FD',
        borderColor: '#2962FF',
        color: '#0D47A1',
      },
    },
  },
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
