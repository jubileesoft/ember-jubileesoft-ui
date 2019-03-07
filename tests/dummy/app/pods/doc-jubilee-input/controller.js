import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { observer } from '@ember/object';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default Controller.extend({
  // #region Properties

  onChangeEvents: 0,
  isReadonly: false,

  // #endregion Properties


  // #region Hooks

  init() {
    this._super(...arguments);
    this.set('updates', [UPDATE.ONBLUR, UPDATE.ONINPUT]);
    this.set('selectedUpdate', this.updates[0]);

    this.setHbs();
  },

  // #endregion Hooks


  // #region Actions

  actions: {
    onChange(newValue) {
      this.set('location', newValue);
      this.incrementProperty('onChangeEvents');
    },
  },

  // #endregion Actions


  // #region Methods

  settingsChanged: observer(
    'selectedUpdate',
    'isReadonly',
    function () {
      this.setHbs();
    }
  ),

  setHbs() {
    const code = [];

    code.push('<JubileeInput');

    code.push('  @text={{this.location}}');

    code.push('  @onChange={{action (mut this.location)}}');

    if (this.selectedUpdate === UPDATE.ONINPUT) {
      code.push('  @update="' + UPDATE.ONINPUT + '"');
    }

    if (this.isReadonly) {
      code.push('  @isReadonly={{true}}');
    }

    code.push('/>');

    this.set('code', join(code));
  },

  // #endregion Methods
});
