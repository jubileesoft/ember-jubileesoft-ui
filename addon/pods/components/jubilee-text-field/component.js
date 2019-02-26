import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  // #region Properties

  layout,

  hasAnyLabel: computed('label', 'label2', function () {
    return this.label || this.label2;
  }),

  computedIsReadonly: equal('isReadonly', true),

  // #endregion Properties


  // #region Actions

  actions: {
    onClick() {
      const input = document.getElementById(this.elementId + '-input');

      if (this.onClickSelect === true) {
        setTimeout(function () { input.select(); }, 0); // IMPORTANT
      }
    },
  },

  // #endregion Actions
});
