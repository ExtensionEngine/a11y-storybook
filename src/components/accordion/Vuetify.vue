<template>
  <div>
    <h1 class="mb-3 teal--text">Vuetify 2 Accordion</h1>
    <h2 class="mb-2 teal--text">Example</h2>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>
          <h3>Item</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <p class="mt-5">
      Source:
      <a href="https://vuetifyjs.com/en/components/expansion-panels/" target="_blank">Vuetify Expansion panels</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'vuetify-accordion'
};
</script>
