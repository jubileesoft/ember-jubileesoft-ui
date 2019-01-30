import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { observer } from '@ember/object';

export default Controller.extend({
  // #region Properties

  label: 'Company',
  code: null,
  showLabel: true,
  isReadonly: false,

  // #endregion Properties


  // #region Hooks

  init() {
    this._super(...arguments);

    this.setHbs();
  },

  // #endregion Hooks


  // #region Methods

  settingsChanged: observer('showLabel', 'isReadonly', function() {
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

    if(this.isReadonly) {
      code[3] = '  @isReadonly={{true}}';
    } else {
      code[3] = undefined;
    }

    code[99] = '/>';



    this.set('code', join(code));
  },

  // #endregion Methods
});
