import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  // #region Properties

  layout,
  hasLabel: computed('label', function () {
    return this.label;
  }),

  // #endregion Properties


  // #region Actions

  actions: {
    onFocusInEvent() {
      if (this.onFocusIn) {
        this.onFocusIn();
      }
    },
    
    onFocusOutEvent() {
      if (this.onFocusOut) {
        this.onFocusOut();
      }
    },
  },

  // #endregion Actions
});
