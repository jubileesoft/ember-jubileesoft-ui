import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  // #region Properties

  layout,

  isInverseComputed: computed('invert', function () {
    return this.invert === true;
  }),

  // #endregion Properties

});