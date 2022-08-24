import AlertDialogDocumentation from '../docs/AlertDialogDocumentation.mdx';
import { BADGES } from '../../.storybook/constants';
import VanillaAlertDialog from '../components/alert-dialog/Vanilla.vue';
import { VanillaAlertDialogTemplate } from './templates/AlertDialog.js';

export default {
  title: 'W3C WAI APG/Components/Alert and Message Dialogs',
  parameters: {
    docs: {
      page: AlertDialogDocumentation,
    },
  },
};

const VanillaTemplate = () => ({
  components: { VanillaAlertDialog },
  template: VanillaAlertDialogTemplate,
});
export const VanillaImplementation = VanillaTemplate.bind({});
VanillaImplementation.parameters = {
  badges: [BADGES.W3C],
};
VanillaImplementation.play = () => {
  const notestTextarea = document.querySelector('textarea#notes');
  notestTextarea.focus();
};
