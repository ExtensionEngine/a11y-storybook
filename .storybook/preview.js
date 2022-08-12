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
      tooltip: {
        title: 'Customizable component',
        desc: 'This is a component with an API that allows you to customize its appearance.',
      }
    },
    ISSUES: {
      styles: {
        backgroundColor: '#FFEBEE',
        borderColor: '#FFAB00',
        color: '#B71C1C',
      },
      tooltip: {
        title: 'Open a11y issues',
        desc: 'This example has some unresolved a11y issues. See the specification on canvas.',
      }
    },
    MOBILE: {
      styles: {
        backgroundColor: '#ECEFF1',
        borderColor: '#607D8B',
        color: '#263238',
      },
      tooltip: {
        title: 'Mobile friendly',
        desc: 'This example is responsive and accessible to mobile devices.',
      }
    },
    STABLE: {
      styles: {
        backgroundColor: '#E8F5E9',
        borderColor: '#00C853',
        color: '#1B5E20',
      },
      tooltip: {
        title: 'Stable for production use',
        desc: 'This example is stable enough to be used in a production environment.',
      }
    },
    W3C: {
      styles: {
        backgroundColor: '#E3F2FD',
        borderColor: '#2962FF',
        color: '#0D47A1',
      },
      tooltip: {
        title: 'W3C Guidelines',
        desc: 'The code in this example is not intended for production environments.',
        links: [
          { title: 'Read more', href: 'https://www.w3.org/WAI/', target: 'blank' },
        ]
      }
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
