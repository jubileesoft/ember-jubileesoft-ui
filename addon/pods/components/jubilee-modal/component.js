import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  /**
   * maxContent: bool(default true)
   */


  // #region Properties

  layout,
  isMax: computed('maxContent', function () {
    return this.maxContent == undefined || this.maxContent === true;
  }),

  // #endregion


  // #region Actions

  actions: {
    doNothing() {
      // really, do nothing
    },
  },

  // #endregion Actions
});
