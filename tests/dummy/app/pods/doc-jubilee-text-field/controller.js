import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { observer } from '@ember/object';

export default Controller.extend({
  // #region Properties

  label: 'Company',
  code: null,
  showLabel: true,

  // #endregion Properties


  // #region Hooks

  init() {
    this._super(...arguments);

    this.setHbs();
  },

  // #endregion Hooks


  // #region Methods

  showLabelChanged: observer('showLabel', function() {
    this.setHbs();
  }),

  setHbs() {
    const code = [];

    code[0] = '<JubileeTextField';

    if (this.showLabel) {
      code[1] = '  @label="' + this.label + '"';
    } else {
      code[1] = undefined;
    }

    code[2] = '  @text={{this.name}}';

    code[99] = '/>';



    this.set('code', join(code));
  },

  // #endregion Methods
});
