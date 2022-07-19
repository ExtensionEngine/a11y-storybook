<template>
  <v-expansion-panels class="mb-3">
    <v-expansion-panel class="amber lighten-4 brown--text text--darken-4">
      <v-expansion-panel-header v-ripple>
        <v-icon left class="flex-grow-0">mdi-alert-circle</v-icon>
        <strong>Disclaimer</strong>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pa-2">
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

          <p>
            Source:
            <a href="https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html" target="_blank">ARIA Authoring Practices Guide (APG)</a>
          </p>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'warning-disclaimer',
};
</script>
