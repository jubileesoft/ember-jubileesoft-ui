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

  hasLabel2: computed('label2', function() {
    return this.label2;
  }),

  hasAnyLabel: computed('label', 'label2', function() {
    return this.label || this.label2;
  }),

  

  // #endregion Properties
  
});
