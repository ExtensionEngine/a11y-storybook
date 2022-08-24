/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

'use strict';

const initializeDialog = function() {
  /* global closeDialog, openDialog */

  var aria = aria || {};

  aria.Utils = aria.Utils || {};

  aria.Utils.disableCtrl = function (ctrl) {
    ctrl.setAttribute('aria-disabled', 'true');
  };

  aria.Utils.enableCtrl = function (ctrl) {
    ctrl.removeAttribute('aria-disabled');
  };

  aria.Utils.setLoading = function (saveBtn, saveStatusView) {
    saveBtn.classList.add('loading');
    this.disableCtrl(saveBtn);

    // use a timeout for the loading message
    // if the saved state happens very quickly,
    // we don't need to explicitly announce the intermediate loading state
    const loadingTimeout = window.setTimeout(() => {
      saveStatusView.textContent = 'Loading';
    }, 200);

    // set timeout for saved state, to mimic loading
    const fakeLoadingTimeout = Math.random() * 2000;
    window.setTimeout(() => {
      saveBtn.classList.remove('loading');
      saveBtn.classList.add('saved');

      window.clearTimeout(loadingTimeout);
      saveStatusView.textContent = 'Saved successfully';
    }, fakeLoadingTimeout);
  };

  aria.Notes = function Notes(
    notesId,
    saveId,
    saveStatusId,
    discardId,
    localStorageKey
  ) {
    this.notesInput = document.getElementById(notesId);
    this.saveBtn = document.getElementById(saveId);
    this.saveStatusView = document.getElementById(saveStatusId);
    this.discardBtn = document.getElementById(discardId);
    this.localStorageKey = localStorageKey || 'alertdialog-notes';
    this.initialized = false;

    Object.defineProperty(this, 'controls', {
      get: function () {
        return document.querySelectorAll(
          '[data-textbox=' + this.notesInput.id + ']'
        );
      },
    });
    Object.defineProperty(this, 'hasContent', {
      get: function () {
        return this.notesInput.value.length > 0;
      },
    });
    Object.defineProperty(this, 'savedValue', {
      get: function () {
        return JSON.parse(localStorage.getItem(this.localStorageKey));
      },
      set: function (val) {
        this.save(val);
      },
    });
    Object.defineProperty(this, 'isCurrent', {
      get: function () {
        return this.notesInput.value === this.savedValue;
      },
    });
    Object.defineProperty(this, 'oninput', {
      get: function () {
        return this.notesInput.oninput;
      },
      set: function (fn) {
        if (typeof fn !== 'function') {
          throw new TypeError('oninput must be a function');
        }
        this.notesInput.addEventListener('input', fn);
      },
    });

    if (this.saveBtn && this.discardBtn) {
      this.init();
    }
  };

  aria.Notes.prototype.save = function (val) {
    const isDisabled = this.saveBtn.getAttribute('aria-disabled') === 'true';
    if (isDisabled) {
      return;
    }
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(val || this.notesInput.value)
    );
    aria.Utils.disableCtrl(this.saveBtn);
    aria.Utils.setLoading(this.saveBtn, this.saveStatusView);
  };

  aria.Notes.prototype.loadSaved = function () {
    if (this.savedValue) {
      this.notesInput.value = this.savedValue;
    }
  };

  aria.Notes.prototype.restoreSaveBtn = function () {
    this.saveBtn.classList.remove('loading');
    this.saveBtn.classList.remove('saved');
    this.saveBtn.removeAttribute('aria-disabled');

    this.saveStatusView.textContent = '';
  };

  aria.Notes.prototype.discard = function () {
    localStorage.clear();
    this.notesInput.value = '';
    this.toggleControls();
    this.restoreSaveBtn();
  };

  aria.Notes.prototype.disableControls = function () {
    this.controls.forEach(aria.Utils.disableCtrl);
  };

  aria.Notes.prototype.enableControls = function () {
    this.controls.forEach(aria.Utils.enableCtrl);
  };

  aria.Notes.prototype.toggleControls = function () {
    if (this.hasContent) {
      this.enableControls();
    } else {
      this.disableControls();
    }
  };

  aria.Notes.prototype.toggleCurrent = function () {
    if (!this.isCurrent) {
      this.notesInput.classList.remove('can-save');
      aria.Utils.enableCtrl(this.saveBtn);
      this.restoreSaveBtn();
    } else {
      this.notesInput.classList.add('can-save');
      aria.Utils.disableCtrl(this.saveBtn);
    }
  };

  aria.Notes.prototype.keydownHandler = function (e) {
    var mod = navigator.userAgent.includes('Mac') ? e.metaKey : e.ctrlKey;
    if ((e.key === 's') & mod) {
      e.preventDefault();
      this.save();
    }
  };

  aria.Notes.prototype.init = function () {
    if (!this.initialized) {
      this.loadSaved();
      this.toggleCurrent();
      this.saveBtn.addEventListener('click', this.save.bind(this, undefined));
      this.discardBtn.addEventListener('click', this.discard.bind(this));
      this.notesInput.addEventListener('input', this.toggleControls.bind(this));
      this.notesInput.addEventListener('input', this.toggleCurrent.bind(this));
      this.notesInput.addEventListener('keydown', this.keydownHandler.bind(this));
      this.initialized = true;
    }
  };

  /** initialization */
  document.addEventListener('DOMContentLoaded', function initAlertDialog() {
    var notes = new aria.Notes(
      'notes',
      'notes_save',
      'notes_save_status',
      'notes_confirm'
    );

    window.discardInput = function (closeBtn) {
      notes.discard.call(notes);
      closeDialog(closeBtn);
    };

    window.openAlertDialog = function (dialogId, triggerBtn, focusFirst) {
      // do not proceed if the trigger button is disabled
      if (triggerBtn.getAttribute('aria-disabled') === 'true') {
        return;
      }

      var target = document.getElementById(
        triggerBtn.getAttribute('data-textbox')
      );
      var dialog = document.getElementById(dialogId);
      var desc = document.getElementById(dialog.getAttribute('aria-describedby'));
      var wordCount = document.getElementById('word_count');
      if (!wordCount) {
        wordCount = document.createElement('p');
        wordCount.id = 'word_count';
        desc.appendChild(wordCount);
      }
      var count = target.value.split(/\s/).length;
      var frag = count > 1 ? 'words' : 'word';
      wordCount.textContent = count + ' ' + frag + ' will be deleted.';
      openDialog(dialogId, target, focusFirst);
    };
  });
  /*
  *   This content is licensed according to the W3C Software License at
  *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
  */

  var aria = aria || {};

  aria.Utils = aria.Utils || {};

  (function () {
    /*
    * When util functions move focus around, set this true so the focus listener
    * can ignore the events.
    */
    aria.Utils.IgnoreUtilFocusChanges = false;

    aria.Utils.dialogOpenClass = 'has-dialog';

    /**
     * @description Set focus on descendant nodes until the first focusable element is
     *       found.
     * @param element
     *          DOM node for which to find the first focusable descendant.
     * @returns {boolean}
     *  true if a focusable element is found and focus is set.
     */
    aria.Utils.focusFirstDescendant = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];
        if (
          aria.Utils.attemptFocus(child) ||
          aria.Utils.focusFirstDescendant(child)
        ) {
          return true;
        }
      }
      return false;
    }; // end focusFirstDescendant

    /**
     * @description Find the last descendant node that is focusable.
     * @param element
     *          DOM node for which to find the last focusable descendant.
     * @returns {boolean}
     *  true if a focusable element is found and focus is set.
     */
    aria.Utils.focusLastDescendant = function (element) {
      for (var i = element.childNodes.length - 1; i >= 0; i--) {
        var child = element.childNodes[i];
        if (
          aria.Utils.attemptFocus(child) ||
          aria.Utils.focusLastDescendant(child)
        ) {
          return true;
        }
      }
      return false;
    }; // end focusLastDescendant

    /**
     * @description Set Attempt to set focus on the current node.
     * @param element
     *          The node to attempt to focus on.
     * @returns {boolean}
     *  true if element is focused.
     */
    aria.Utils.attemptFocus = function (element) {
      if (!aria.Utils.isFocusable(element)) {
        return false;
      }

      aria.Utils.IgnoreUtilFocusChanges = true;
      try {
        element.focus();
      } catch (e) {
        // continue regardless of error
      }
      aria.Utils.IgnoreUtilFocusChanges = false;
      return document.activeElement === element;
    }; // end attemptFocus

    /* Modals can open modals. Keep track of them with this array. */
    aria.OpenDialogList = aria.OpenDialogList || new Array(0);

    /**
     * @returns {object} the last opened dialog (the current dialog)
     */
    aria.getCurrentDialog = function () {
      if (aria.OpenDialogList && aria.OpenDialogList.length) {
        return aria.OpenDialogList[aria.OpenDialogList.length - 1];
      }
    };

    aria.closeCurrentDialog = function () {
      var currentDialog = aria.getCurrentDialog();
      if (currentDialog) {
        currentDialog.close();
        return true;
      }

      return false;
    };

    aria.handleEscape = function (event) {
      var key = event.which || event.keyCode;

      if (key === aria.KeyCode.ESC && aria.closeCurrentDialog()) {
        event.stopPropagation();
      }
    };

    document.addEventListener('keyup', aria.handleEscape);

    /**
     * @class
     * @description Dialog object providing modal focus management.
     *
     * Assumptions: The element serving as the dialog container is present in the
     * DOM and hidden. The dialog container has role='dialog'.
     * @param dialogId
     *          The ID of the element serving as the dialog container.
     * @param focusAfterClosed
     *          Either the DOM node or the ID of the DOM node to focus when the
     *          dialog closes.
     * @param focusFirst
     *          Optional parameter containing either the DOM node or the ID of the
     *          DOM node to focus when the dialog opens. If not specified, the
     *          first focusable element in the dialog will receive focus.
     */
    aria.Dialog = function (dialogId, focusAfterClosed, focusFirst) {
      this.dialogNode = document.getElementById(dialogId);
      if (this.dialogNode === null) {
        throw new Error('No element found with id="' + dialogId + '".');
      }

      var validRoles = ['dialog', 'alertdialog'];
      var isDialog = (this.dialogNode.getAttribute('role') || '')
        .trim()
        .split(/\s+/g)
        .some(function (token) {
          return validRoles.some(function (role) {
            return token === role;
          });
        });
      if (!isDialog) {
        throw new Error(
          'Dialog() requires a DOM element with ARIA role of dialog or alertdialog.'
        );
      }

      // Wrap in an individual backdrop element if one doesn't exist
      // Native <dialog> elements use the ::backdrop pseudo-element, which
      // works similarly.
      var backdropClass = 'dialog-backdrop';
      if (this.dialogNode.parentNode.classList.contains(backdropClass)) {
        this.backdropNode = this.dialogNode.parentNode;
      } else {
        this.backdropNode = document.createElement('div');
        this.backdropNode.className = backdropClass;
        this.dialogNode.parentNode.insertBefore(
          this.backdropNode,
          this.dialogNode
        );
        this.backdropNode.appendChild(this.dialogNode);
      }
      this.backdropNode.classList.add('active');

      // Disable scroll on the body element
      document.body.classList.add(aria.Utils.dialogOpenClass);

      if (typeof focusAfterClosed === 'string') {
        this.focusAfterClosed = document.getElementById(focusAfterClosed);
      } else if (typeof focusAfterClosed === 'object') {
        this.focusAfterClosed = focusAfterClosed;
      } else {
        throw new Error(
          'the focusAfterClosed parameter is required for the aria.Dialog constructor.'
        );
      }

      if (typeof focusFirst === 'string') {
        this.focusFirst = document.getElementById(focusFirst);
      } else if (typeof focusFirst === 'object') {
        this.focusFirst = focusFirst;
      } else {
        this.focusFirst = null;
      }

      // Bracket the dialog node with two invisible, focusable nodes.
      // While this dialog is open, we use these to make sure that focus never
      // leaves the document even if dialogNode is the first or last node.
      var preDiv = document.createElement('div');
      this.preNode = this.dialogNode.parentNode.insertBefore(
        preDiv,
        this.dialogNode
      );
      this.preNode.tabIndex = 0;
      var postDiv = document.createElement('div');
      this.postNode = this.dialogNode.parentNode.insertBefore(
        postDiv,
        this.dialogNode.nextSibling
      );
      this.postNode.tabIndex = 0;

      // If this modal is opening on top of one that is already open,
      // get rid of the document focus listener of the open dialog.
      if (aria.OpenDialogList.length > 0) {
        aria.getCurrentDialog().removeListeners();
      }

      this.addListeners();
      aria.OpenDialogList.push(this);
      this.clearDialog();
      this.dialogNode.className = 'default_dialog'; // make visible

      if (this.focusFirst) {
        this.focusFirst.focus();
      } else {
        aria.Utils.focusFirstDescendant(this.dialogNode);
      }

      this.lastFocus = document.activeElement;
    }; // end Dialog constructor

    aria.Dialog.prototype.clearDialog = function () {
      Array.prototype.map.call(
        this.dialogNode.querySelectorAll('input'),
        function (input) {
          input.value = '';
        }
      );
    };

    /**
     * @description
     *  Hides the current top dialog,
     *  removes listeners of the top dialog,
     *  restore listeners of a parent dialog if one was open under the one that just closed,
     *  and sets focus on the element specified for focusAfterClosed.
     */
    aria.Dialog.prototype.close = function () {
      aria.OpenDialogList.pop();
      this.removeListeners();
      aria.Utils.remove(this.preNode);
      aria.Utils.remove(this.postNode);
      this.dialogNode.className = 'hidden';
      this.backdropNode.classList.remove('active');
      this.focusAfterClosed.focus();

      // If a dialog was open underneath this one, restore its listeners.
      if (aria.OpenDialogList.length > 0) {
        aria.getCurrentDialog().addListeners();
      } else {
        document.body.classList.remove(aria.Utils.dialogOpenClass);
      }
    }; // end close

    /**
     * @description
     *  Hides the current dialog and replaces it with another.
     * @param newDialogId
     *  ID of the dialog that will replace the currently open top dialog.
     * @param newFocusAfterClosed
     *  Optional ID or DOM node specifying where to place focus when the new dialog closes.
     *  If not specified, focus will be placed on the element specified by the dialog being replaced.
     * @param newFocusFirst
     *  Optional ID or DOM node specifying where to place focus in the new dialog when it opens.
     *  If not specified, the first focusable element will receive focus.
     */
    aria.Dialog.prototype.replace = function (
      newDialogId,
      newFocusAfterClosed,
      newFocusFirst
    ) {
      aria.OpenDialogList.pop();
      this.removeListeners();
      aria.Utils.remove(this.preNode);
      aria.Utils.remove(this.postNode);
      this.dialogNode.className = 'hidden';
      this.backdropNode.classList.remove('active');

      var focusAfterClosed = newFocusAfterClosed || this.focusAfterClosed;
      new aria.Dialog(newDialogId, focusAfterClosed, newFocusFirst);
    }; // end replace

    aria.Dialog.prototype.addListeners = function () {
      document.addEventListener('focus', this.trapFocus, true);
    }; // end addListeners

    aria.Dialog.prototype.removeListeners = function () {
      document.removeEventListener('focus', this.trapFocus, true);
    }; // end removeListeners

    aria.Dialog.prototype.trapFocus = function (event) {
      if (aria.Utils.IgnoreUtilFocusChanges) {
        return;
      }
      var currentDialog = aria.getCurrentDialog();
      if (currentDialog.dialogNode.contains(event.target)) {
        currentDialog.lastFocus = event.target;
      } else {
        aria.Utils.focusFirstDescendant(currentDialog.dialogNode);
        if (currentDialog.lastFocus == document.activeElement) {
          aria.Utils.focusLastDescendant(currentDialog.dialogNode);
        }
        currentDialog.lastFocus = document.activeElement;
      }
    }; // end trapFocus

    window.openDialog = function (dialogId, focusAfterClosed, focusFirst) {
      new aria.Dialog(dialogId, focusAfterClosed, focusFirst);
    };

    window.closeDialog = function (closeButton) {
      var topDialog = aria.getCurrentDialog();
      if (topDialog.dialogNode.contains(closeButton)) {
        topDialog.close();
      }
    }; // end closeDialog

    window.replaceDialog = function (
      newDialogId,
      newFocusAfterClosed,
      newFocusFirst
    ) {
      var topDialog = aria.getCurrentDialog();
      if (topDialog.dialogNode.contains(document.activeElement)) {
        topDialog.replace(newDialogId, newFocusAfterClosed, newFocusFirst);
      }
    }; // end replaceDialog
  })();

  /**
   * @namespace aria
   */

  var aria = aria || {};

  /**
   * @description
   *  Key code constants
   */
  aria.KeyCode = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    SHIFT: 16,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
  };

  aria.Utils = aria.Utils || {};

  // Polyfill src https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
  aria.Utils.matches = function (element, selector) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = element.parentNode.querySelectorAll(s);
          var i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {
            // empty
          }
          return i > -1;
        };
    }

    return element.matches(selector);
  };

  aria.Utils.remove = function (item) {
    if (item.remove && typeof item.remove === 'function') {
      return item.remove();
    }
    if (
      item.parentNode &&
      item.parentNode.removeChild &&
      typeof item.parentNode.removeChild === 'function'
    ) {
      return item.parentNode.removeChild(item);
    }
    return false;
  };

  aria.Utils.isFocusable = function (element) {
    if (element.tabIndex < 0) {
      return false;
    }

    if (element.disabled) {
      return false;
    }

    switch (element.nodeName) {
      case 'A':
        return !!element.href && element.rel != 'ignore';
      case 'INPUT':
        return element.type != 'hidden';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  };

  aria.Utils.getAncestorBySelector = function (element, selector) {
    if (!aria.Utils.matches(element, selector + ' ' + element.tagName)) {
      // Element is not inside an element that matches selector
      return null;
    }

    // Move up the DOM tree until a parent matching the selector is found
    var currentNode = element;
    var ancestor = null;
    while (ancestor === null) {
      if (aria.Utils.matches(currentNode.parentNode, selector)) {
        ancestor = currentNode.parentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return ancestor;
  };

  aria.Utils.hasClass = function (element, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
  };

  aria.Utils.addClass = function (element, className) {
    if (!aria.Utils.hasClass(element, className)) {
      element.className += ' ' + className;
    }
  };

  aria.Utils.removeClass = function (element, className) {
    var classRegex = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(classRegex, ' ').trim();
  };

  aria.Utils.bindMethods = function (object /* , ...methodNames */) {
    var methodNames = Array.prototype.slice.call(arguments, 1);
    methodNames.forEach(function (method) {
      object[method] = object[method].bind(object);
    });
  };
};

module.exports = {
  initializeDialog,
}
