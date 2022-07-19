<template>
  <div>
    <h1 class="mb-3 teal--text">Accordion (Sections With Show/Hide Functionality)</h1>
    <h2 class="mb-2 teal--text">About this pattern</h2>
    <div class="mb-5">
      <p>
        An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.
        The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.
      </p>
      <p>Terms for understanding accordions include:</p>
      <dl class="mb-2">
        <dt class="font-weight-bold">Accordion Header:</dt>
        <dd class="ml-8 mb-1">
          Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.
        </dd>
        <dt class="font-weight-bold">Accordion Panel:</dt>
        <dd class="ml-8 mb-1">
          Section of content associated with an accordion header.
          In some accordions, there are additional elements that are always visible adjacent to the accordion header.
          For instance, a menubutton may accompany each accordion header to provide access to actions that apply to that section.
          And, in some cases, a snippet of the hidden content may also be visually persistent.
        </dd>
      </dl>
    </div>
    <keyboard-support/>
    <wai-aria-guidelines/>
  </div>
</template>

<script>
import KeyboardSupport from './KeyboardSupport.vue';
import WaiAriaGuidelines from './WaiAriaGuidelines.vue';

export default {
  name: 'about-accordion',
  components: {
    KeyboardSupport,
    WaiAriaGuidelines,
  },
};
</script>
