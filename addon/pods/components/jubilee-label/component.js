import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  // #region Properties
  
  layout,
  
  tagName: '',

  hasLabel: computed('label', function() {
    return this.label;
  }),

  // #endregion Properties
  
});
