import AccordionDocumentation from '../docs/AccordionDocumentation.mdx';
import { action } from '@storybook/addon-actions'
import VanillaAccordion from '../components/accordion/Vanilla.vue';
import { VanillaAccordionTemplate, Vuetify2AccordionTemplate } from './templates/Accordion.js';
import VuetifyAccordion from '../components/accordion/Vuetify.vue';

export default {
  title: 'W3C WAI APG/Components/Accordion',
  parameters: {
    docs: {
      page: AccordionDocumentation,
    },
  },
};

const VanillaTemplate = () => ({
  components: { VanillaAccordion },
  template: VanillaAccordionTemplate,
});
export const VanillaImplementation = VanillaTemplate.bind({});
VanillaImplementation.play = () => {
  const firstAccordionHeader = document.querySelector('button.accordion-trigger');
  firstAccordionHeader.focus();
};

const VuetifyTemplate = (_, { argTypes }) => ({
  components: { VuetifyAccordion },
  methods: {
    onPanelChange: action('Vuetify > Expansion Panel > change'),
    onPanelClick: action('Vuetify > Expansion Panel > click'),
    onPanelHeaderClick: action('Vuetify > Expansion Panel Header > click'),
  },
  props: Object.keys(argTypes),
  template: Vuetify2AccordionTemplate,
});
export const Vuetify2Implementation = VuetifyTemplate.bind({});
Vuetify2Implementation.args = {
  accordion: false,
  activeClass: 'v-item--active',
  dark: false,
  disabled: false,
  flat: false,
  focusable: false,
  hover: false,
  inset: false,
  mandatory: false,
  max: undefined,
  multiple: false,
  popout: false,
  readonly: false,
  tag: 'div',
  tile: false,
  value: [],
};
Vuetify2Implementation.argTypes = {
  /* Controls */
  accordion: {
    description: 'Removes the margin around open panels.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  activeClass: {
    description: 'The `active-class` applied to children when they are activated.',
    name:'active-class',
    table: {
      defaultValue: { summary: 'v-item--active' },
    }
  },
  dark: {
    description: 'Applies the dark theme variant to the component.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  disabled: {
    description: 'Disables the entire expansion-panel.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  flat: {
    description: 'Removes the expansion-panel’s elevation and borders.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  focusable: {
    description: 'Makes the expansion-panel headers focusable.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  hover: {
    description: 'Applies a background-color shift on hover to expansion panel headers.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  inset: {
    description: 'Makes the expansion-panel open with a inset style.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  mandatory: {
    description: 'Forces a value to always be selected (if available).',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  max: {
    description: 'Sets a maximum number of selections that can be made.',
    table: {
      defaultValue: { summary: 'undefined' },
    },
  },
  multiple: {
    description: 'Allow multiple selections. The `value` prop must be an `array`.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  popout: {
    description: 'Makes the expansion-panel open with an popout style.',
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  readonly: {
    description: "Makes the entire expansion-panel read only.",
    table: {
      defaultValue: { summary: 'false' },
    }
  },
  tag: {
    description: 'Specify a custom tag used on the root element.',
    table: {
      defaultValue: { summary: 'div' }
    }
  },
  tile: {
    description: 'Removes the border-radius.',
    table: {
      defaultValue: { summary: 'false' }
    }
  },
  value: {
    description: 'Controls the opened/closed state of content in the expansion-panel. Corresponds to a zero-based index of the currently opened content. If the `multiple` prop is used then it is an array of numbers where each entry corresponds to the index of the opened content. The index order is not relevant.',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
};
Vuetify2Implementation.play = () => {
  const firstAccordionHeader = document.querySelector('button.v-expansion-panel-header');
  firstAccordionHeader.focus();
};
