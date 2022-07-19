<template>
  <div>
    <h2 class="mb-2 teal--text">Keyboard Support</h2>
    <v-simple-table class="mb-5">
      <thead>
        <tr>
          <th class="text-left">Key</th>
          <th class="text-left">Required</th>
          <th class="text-left">Function</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guideline in keyboardSupportGuidelines" :key="guideline.key">
          <td class="font-italic">{{ guideline.key }}</td>
          <td :class="[guideline.required ? 'red--text' : 'blue-grey--text text--darken-2']">{{ guideline.required ? 'Yes' : 'No' }}</td>
          <td>
            <span v-if="typeof(guideline.function) === 'string'">{{ guideline.function }}</span>
            <ul v-else>
              <li v-for="(entry, index) in guideline.function" :key="`${guideline.key}-${index}`">
                {{ entry }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
const KEYBOARD_SUPPORT_GUIDELINES = [
  {
    key: 'Enter',
    required: true,
    function: 'When focus is on the accordion header of a collapsed section, expands the section.',
  }, {
    key: 'Space',
    required: true,
    function: 'When focus is on the accordion header of a collapsed section, expands the section.',
  }, {
    key: 'Tab',
    required: true,
    function: [
      'Moves focus to the next focusable element.',
      'All focusable elements in the accordion are included in the page Tab sequence.',
    ],
  }, {
    key: 'Shift + Tab',
    required: true,
    function: [
      'Moves focus to the previous focusable element.',
      'All focusable elements in the accordion are included in the page Tab sequence.',
    ],
  }, {
    key: 'Down Arrow',
    required: false,
    function: [
      'If focus is on an accordion header, moves focus to the next accordion header.',
      'If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.',
    ],
  }, {
    key: 'Up Arrow',
    required: false,
    function: [
      'If focus is on an accordion header, moves focus to the previous accordion header.',
      'If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.',
    ],
  }, {
    key: 'Home',
    required: false,
    function: 'When focus is on an accordion header, moves focus to the first accordion header.',
  }, {
    key: 'End',
    required: false,
    function: 'When focus is on an accordion header, moves focus to the last accordion header.',
  }
];

export default {
  computed: {
    keyboardSupportGuidelines: () => KEYBOARD_SUPPORT_GUIDELINES,
  },
};
</script>
