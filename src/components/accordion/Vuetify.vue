<template>
  <v-expansion-panels v-bind="$props">
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
</template>

<script>
export default {
  name: 'vuetify-accordion',
  props: {
    accordion: { type: Boolean, default: false },
    activeClass: { type: String, default: 'v-item--active' },
    dark: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    focusable: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    inset: { type: Boolean, default: false },
    mandatory: { type: Boolean, default: false },
    max: { type: [Number, String], default: undefined },
    multiple: { type: Boolean, default: false },
    popout: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    tag: { type: String, default: 'div' },
    tile: { type: Boolean, default: false },
    value: { type: [Array, Number], default: undefined },
  },
};
</script>
