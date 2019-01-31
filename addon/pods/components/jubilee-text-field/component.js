import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  // #region Properties

  layout,

  hasAnyLabel: computed('label', 'label2', function () {
    return this.label || this.label2;
  }),

  computedIsReadonly: computed('isReadonly', function () {
    if (this.isReadonly == undefined) {
      return false;
    }

    if (this.isReadonly === true) {
      return true;
    }

    return false;
  }),

  // #endregion Properties


  // #region Actions

  actions: {
    onClick() {
      const input = document.getElementById(this.elementId + '-input');

      if (this.onClickSelect === true) {
        setTimeout(function () { input.select(); }, 0); // IMPORTANT
      }

    },


    onFocusInEvent() {
      const input = document.getElementById(this.elementId + '-input');
         
      if (this.onFocusIn) {
        this.onFocusIn(input);
      }
    },

    onFocusOutEvent() {
      const input = document.getElementById(this.elementId + '-input');

      if (this.onFocusOut) {
        this.onFocusOut(input);
      }
    },
  },

  // #endregion Actions
});
