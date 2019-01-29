import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';

export default Component.extend({
  // #region Properties

  layout,
  localClassNames: 'root',
  computedSize: computed('size', function () {
    if (this.size) {
      return this.size;
    }

    return 'lg';
  }),

  // #endregion Properties
});
