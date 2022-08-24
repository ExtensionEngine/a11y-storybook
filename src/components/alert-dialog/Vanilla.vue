<template>
  <div>
    <label for="notes">Notes</label>
    <textarea class="notes mb-2" name="notes" id="notes" rows="7">This is an example text box, which unsurprisingly contains text. The user is given the option to save this text - which triggers a basic alert - or to discard the text - which triggers an alert dialog that prompts the user for confirmation.</textarea>
    <div class="visually-hidden" id="notes_save_status" role="alert"></div>
    <v-btn id="notes_save">
      Save
      <svg class="icon spinner" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 32c-4.274 0-8.292-1.664-11.314-4.686s-4.686-7.040-4.686-11.314c0-3.026 0.849-5.973 2.456-8.522 1.563-2.478 3.771-4.48 6.386-5.791l1.344 2.682c-2.126 1.065-3.922 2.693-5.192 4.708-1.305 2.069-1.994 4.462-1.994 6.922 0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-0.69-4.853-1.994-6.922-1.271-2.015-3.066-3.643-5.192-4.708l1.344-2.682c2.615 1.31 4.824 3.313 6.386 5.791 1.607 2.549 2.456 5.495 2.456 8.522 0 4.274-1.664 8.292-4.686 11.314s-7.040 4.686-11.314 4.686z"></path>
      </svg>
      <svg class="icon check" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
      </svg>
    </v-btn>
    <v-btn data-textbox="notes" onclick="openAlertDialog('alert_dialog', this)">Discard</v-btn>
    <div class="dialog-backdrop no-scroll">
      <div id="alert_dialog" role="alertdialog" aria-modal="true" aria-labelledby="dialog_label" aria-describedby="dialog_desc" class="hidden">
        <h2 id="dialog_label" class="dialog_label">Confirmation</h2>
        <div id="dialog_desc" class="dialog_desc">
          <p>Are you sure you want to discard all of your notes?</p>
        </div>
        <div class="dialog_form_actions">
          <v-btn onclick="closeDialog(this)">No</v-btn>
          <v-btn id="notes_confirm" onclick="discardInput(this)">Yes</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeDialog } from './helpers/dialog';
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

export default {
  name: 'vanilla-alert-dialog',
  mounted() {
    initializeDialog();
  }
};
</script>

<style scoped>
@import '../../styles/alertDialog.css';

textarea {
  border: 1px solid gray;
}
</style>
