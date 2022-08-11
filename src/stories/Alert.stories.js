import AlertDocumentation from '../docs/AlertDocumentation.mdx';
import { action } from '@storybook/addon-actions';
import { BADGES } from '../../.storybook/constants';
import VanillaAlert from '../components/alert/Vanilla.vue';
import { VanillaAlertTemplate, Vuetify2AlertTemplate } from './templates/Alert.js';
import VuetifyAlert from '../components/alert/Vuetify.vue';

export default {
  title: 'W3C WAI APG/Components/Alert',
  parameters: {
    docs: {
      page: AlertDocumentation,
    },
  },
};

const VanillaTemplate = () => ({
  components: { VanillaAlert },
  template: VanillaAlertTemplate,
});
export const VanillaImplementation = VanillaTemplate.bind({});
VanillaImplementation.parameters = {
  badges: [BADGES.W3C],
};
VanillaImplementation.play = () => {
  const alertTrigger = document.querySelector('button#alert-trigger');
  alertTrigger.focus();
};

const VuetifyTemplate = (_, { argTypes }) => ({
  components: { VuetifyAlert },
  methods: {
    onAlertInput: action('Vuetify > Alert > input'),
  },
  props: Object.keys(argTypes),
  template: Vuetify2AlertTemplate,
});
export const Vuetify2Implementation = VuetifyTemplate.bind({});
Vuetify2Implementation.args = {
  border: undefined,
  closeIcon: '$cancel',
  closeLabel: '$vuetify.close',
  color: '',
  coloredBorder: false,
  dark: false,
  dense: false,
  dismissible: false,
  elevation: undefined,
  height: undefined,
  icon: '',
  maxHeight: undefined,
  maxWidth: undefined,
  minHeight: undefined,
  minWidth: undefined,
  mode: undefined,
  origin: undefined,
  outlined: false,
  prominent: false,
  rounded: undefined,
  shaped: false,
  tag: 'div',
  text: false,
  tile: false,
  transition: undefined,
  type: undefined,
  width: undefined,
};
Vuetify2Implementation.argTypes = {
  /* Controls */
  border: {
    control: 'select',
    description: 'Puts a border on the alert.',
    options: [undefined, 'top', 'right', 'bottom', 'left'],
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  closeIcon: {
    description: 'Change the default icon used for dismissible alerts.',
    name: 'close-icon',
    table: {
      defaultValue: { summary: '$cancel' },
    }
  },
  closeLabel: {
    description: 'Text used for aria-label on dismissible alerts. Can also be customizing globally in Internationalization.',
    name: 'close-label',
    table: {
      defaultValue: { summary: 'Close' },
    }
  },
  color: {
    control: 'text',
    description: 'Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  coloredBorder: {
    description: 'Applies the defined color to the alert’s border.',
    name: 'colored-border',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  dark: {
    description: 'Applies the dark theme variant to the component.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  dense: {
    description: 'Decreases component’s height.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  dismissible: {
    description: 'Adds a close icon that can hide the alert.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  elevation: {
    control: { type: 'number', min: 0, max: 24 },
    description: 'Designates an elevation applied to the component between 0 and 24.',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  height: {
    control: 'number',
    description: 'Sets the height for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  icon: {
    control: 'text',
    description: 'Designates a specific icon.',
    table: {
      defaultValue: { summary: 'undefined' },
    },
  },
  maxHeight: {
    control: 'number',
    description: 'Sets the maximum height for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    },
  },
  maxWidth: {
    control: 'number',
    description: 'Sets the maximum width for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    },
  },
  minHeight: {
    control: 'number',
    description: 'Sets the minimum height for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  minWidth: {
    control: 'number',
    description: 'Sets the minimum width for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  mode: {
    control: 'select',
    description: 'Sets the transition mode (does not apply to transition-group).',
    options: [undefined, 'in-out', 'out-in', 'default'],
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  origin: {
    control: 'text',
    description: 'Sets the transition mode (does not apply to transition-group).',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  outlined: {
    description: 'Makes the background transparent and applies a thin border.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  prominent: {
    description: 'Displays a larger vertically centered icon to draw more attention.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  rounded: {
    control: 'select',
    description: 'Designates the border-radius applied to the component.',
    options: [undefined, 0, 'sm', null, 'lg', 'xl', 'pill', 'circle'],
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  shaped: {
    description: 'Applies a large border radius on the top left and bottom right of the card.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  tag: {
    description: 'Specify a custom tag used on the root element.',
    table: {
      defaultValue: { summary: 'div' },
    }
  },
  text: {
    description: 'Applies the defined color to text and a low opacity background of the same.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  tile: {
    description: 'Removes the component’s border-radius.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  transition: {
    control: 'select',
    description: 'Sets the component transition.',
    options: [
      undefined,
      'fab-transition',
      'fade-transition',
      'expand-transition',
      'scale-transition',
      'scroll-x-transition',
      'scroll-x-reverse-transition',
      'scroll-y-transition',
      'scroll-y-reverse-transition',
      'slide-x-transition',
      'slide-x-reverse-transition',
      'slide-y-transition',
      'slide-y-reverse-transition',
    ],
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  type: {
    control: 'select',
    description: 'Uses the contextual color and has a pre-defined icon.',
    options: [undefined, 'success', 'info', 'warning', 'error'],
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
  width: {
    control: 'number',
    description: 'Sets the width for the component.',
    table: {
      defaultValue: { summary: 'undefined' },
    }
  },
};
Vuetify2Implementation.parameters = {
  badges: [BADGES.STABLE, BADGES.MOBILE, BADGES.CUSTOMIZABLE],
};
Vuetify2Implementation.play = () => {
  const alertTrigger = document.querySelector('button.v-btn');
  alertTrigger.focus();
};
