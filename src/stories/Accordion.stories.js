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
VanillaImplementation.decorators = [() => ({
  template: `
    <div>
      <v-alert border="bottom" colored-border type="warning" elevation="2">
        <p>
          The code in this example is not intended for production environments.
          Before using it for any purpose, read this to understand why.
        </p>
        <p>This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.</p>

        <ul>
          <li>
            There may be support gaps in some
            <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#browser_and_AT_support" target="_blank">browser and assistive technology combinations</a>,
            especially for
            <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#mobile_and_touch_support" target="_blank">mobile/touch devices</a>.
            Testing code based on this example with assistive technologies is essential before considering use in production systems.
          </li>
          <li>
            The
            <a href="https://aria-at.w3.org" target="_blank">ARIA and Assistive Technologies Project</a>
            is developing measurements of assistive technology support for APG examples.
          </li>
          <li>
            Robust accessibility can be further optimized by choosing implementation patterns that
            <a href="https://www.w3.org/TR/using-aria/#rule1" target="_blank">maximize use of semantic HTML</a>
            and heeding the warning that
            <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#no_aria_better_bad_aria" target="_blank">No ARIA is better than Bad ARIA</a>.
          </li>
        </ul>
        <p>
          Source:
          <a href="https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html" target="_blank">ARIA Authoring Practices Guide (APG)</a>
        </p>
      </v-alert>
      <story />
    </div>
  `
})];
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
