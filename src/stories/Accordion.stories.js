import AccordionDocumentation from '../docs/AccordionDocumentation.mdx';
import VanillaAccordion from '../components/accordion/Vanilla.vue';
import VuetifyAccordion from '../components/accordion/Vuetify.vue';

export default {
  title: 'W3C WAI APG/Components/Accordion',
  argTypes: {},
  parameters: {
    docs: {
      page: AccordionDocumentation,
    },
  },
};

const VanillaTemplate = () => ({
  components: { VanillaAccordion },
  template: '<vanilla-accordion/>',
});

export const VanillaImplementation = VanillaTemplate.bind({});
VanillaImplementation.play = async () => {
  const firstAccordionHeader = document.querySelector('button.accordion-trigger');
  firstAccordionHeader.focus();
};

const VuetifyTemplate = () => ({
  components: { VuetifyAccordion },
  template: '<vuetify-accordion/>',
});
export const Vuetify2Implementation = VuetifyTemplate.bind({});
Vuetify2Implementation.play = async () => {
  const firstAccordionHeader = document.querySelector('button.v-expansion-panel-header');
  firstAccordionHeader.focus();
};
