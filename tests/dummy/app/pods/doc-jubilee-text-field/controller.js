import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { observer } from '@ember/object';

export default Controller.extend({
  // #region Properties

  label: 'Company',
  label2: '(max 30 characters)',
  code: null,
  showLabel: true,
  showLabel2: false,
  isOnClickSelect: false,
  isReadonly: false,

  // #endregion Properties


  // #region Hooks

  init() {
    this._super(...arguments);

    this.setHbs();
  },

  // #endregion Hooks


  // #region Methods

  settingsChanged: observer('showLabel',
    'showLabel2',
    'isReadonly',
    'isOnClickSelect', function() {
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

    if (this.showLabel2) {
      code[2] = '  @label2="' + this.label2 + '"';
    } else {
      code[2] = undefined;
    }

    code[4] = '  @text={{this.name}}';

    if(this.isOnClickSelect) {
      code[5] = '  onClickSelect={{true}}';
    } else {
      code[5] = undefined;
    }

    if(this.isReadonly) {
      code[6] = '  @isReadonly={{true}}';
    } else {
      code[6] = undefined;
    }

    code[99] = '/>';



    this.set('code', join(code));
  },

  // #endregion Methods
});
