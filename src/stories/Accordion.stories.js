import AboutAccordion from '../components/accordion/About.vue';
import VanillaAccordion from '../components/accordion/Vanilla.vue';
import VuetifyAccordion from '../components/accordion/Vuetify.vue';

export default {
  title: 'Accessible Accordion',
  argTypes: {},
};

const AboutTemplate = () => ({
  components: { AboutAccordion },
  template: '<about-accordion/>',
});

export const About = AboutTemplate.bind({});

const VanillaTemplate = () => ({
  components: { VanillaAccordion },
  template: '<vanilla-accordion/>',
});

export const VanillaImplementation = VanillaTemplate.bind({});

const VuetifyTemplate = () => ({
  components: { VuetifyAccordion },
  template: '<vuetify-accordion/>',
});
export const Vuetify2Implementation = VuetifyTemplate.bind({});
