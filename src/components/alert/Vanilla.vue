<template>
  <div class="alert-story">
    <button type="button" id="alert-trigger" @click="addAlert">Trigger Alert</button>
    <div id="example" role="alert"></div>
  </div>
</template>

<script>
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
const alertHTML = '<p>Hello</p>';

export default {
  name: 'vanilla-alert',
  methods: {
    addAlert() {
      const example = document.getElementById('example');
      example.innerHTML = alertHTML;
    }
  },
};
</script>

<style scoped>
@import '../../styles/alert.css';
</style>
