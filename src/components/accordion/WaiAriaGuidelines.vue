<template>
  <div>
    <h2 class="mb-2 teal--text">WAI-ARIA guidelines</h2>
    <v-simple-table class="mb-5">
      <thead>
        <tr>
          <th class="text-left">Role</th>
          <th class="text-left">Attribute</th>
          <th class="text-left">Element</th>
          <th class="text-left">Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guideline in waiAriaGuidelines" :key="guideline.key">
          <td class="font-weight-bold">{{ guideline.role }}</td>
          <td class="font-weight-bold">{{ guideline.attribute }}</td>
          <td class="font-weight-bold">{{ guideline.element }}</td>
          <td>
            <span v-if="typeof(guideline.usage) === 'string'">{{ guideline.usage }}</span>
            <ul v-else>
              <li v-for="(use, index) in guideline.usage" :key="`${guideline.key}-${index}`">
                {{ use }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
const WAI_ARIA_GUIDELINES = [
  {
    attribute: '',
    element: 'h3',
    role: '',
    usage: [
      'Element that serves as an accordion header.',
      'Each accordion header element contains a button that controls the visibility of its content panel.',
      'The example uses heading level 3 so it fits correctly within the outline of the page; the example is contained in a section titled with a level 2 heading.'
    ],
  }, {
    attribute: 'aria-expanded="true"',
    element: 'button',
    role: '',
    usage: 'Set to true when the Accordion panel is expanded, otherwise set to false.',
  }, {
    attribute: 'aria-controls="ID"',
    element: 'button',
    role: '',
    usage: 'Points to the ID of the panel which the header controls.',
  }, {
    attribute: '',
    element: 'div',
    role: 'region',
    usage: 'Creates a landmark region that contains the currently expanded accordion panel.',
  }, {
    attribute: 'aria-labelledby="IDREF"',
    element: 'div',
    role: '',
    usage: [
      'Defines the accessible name for the region element.',
      'References the accordion header button that expands and collapses the region.',
      'region elements are required to have an accessible name to be identified as a landmark.',
    ]
  },
];

export default {
  computed: {
    waiAriaGuidelines: () => WAI_ARIA_GUIDELINES,
  },
};
</script>
