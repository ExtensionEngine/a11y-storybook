<template>
  <div>
    <v-btn @click="$refs.alert.toggle()">Trigger Alert</v-btn>
    <v-alert
      ref="alert"
      v-bind="$props"
      @input="event => $emit('alertInput', event)"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'vanilla-alert',
  props: {
    border: { type: String, default: undefined },
    closeIcon: { type: String, default: '$cancel' },
    closeLabel: { type: String, default: '$vuetify.close' },
    color: { type: String, default: undefined },
    coloredBorder: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    dense: { type: Boolean, default: false },
    dismissible: { type: Boolean, default: true },
    elevation: { type: [Number, String], default: undefined },
    height: { type: [Number, String], default: undefined },
    icon: { type: [Boolean, String], default: undefined },
    maxHeight: { type: [Number, String], default: undefined },
    maxWidth: { type: [Number, String], default: undefined },
    minHeight: { type: [Number, String], default: undefined },
    minWidth: { type: [Number, String], default: undefined },
    mode: { type: String, default: undefined },
    origin: { type: String, default: undefined },
    outlined: { type: Boolean, default: false },
    prominent: { type: Boolean, default: false },
    rounded: { type: [Boolean, String], default: undefined },
    shaped: { type: Boolean, default: false },
    tag: { type: String, default: 'div' },
    text: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    transition: { type: String, default: undefined },
    type: { type: String, default: undefined },
    width: { type: [Number, String], default: undefined },
  },
};
</script>

<style scoped>
button.v-btn:focus:before {
  opacity: 0;
}
</style>
