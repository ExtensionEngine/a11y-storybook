import VanillaAccordion from './VanillaAccordion.vue';

export default {
  title: 'Accessible Accordion',
  component: VanillaAccordion,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VanillaAccordion },
  template: '<vanilla-accordion />',
});

export const BaseAccordion = Template.bind({});
BaseAccordion.args = {};
