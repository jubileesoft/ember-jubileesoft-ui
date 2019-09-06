import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default Controller.extend({
  // #region Properties

  onChangeEvents: 0,
  isReadonly: false,

  /** @type {string[]} */
  updates: null,

  /** @type {string} */
  selectedUpdate: null,

  /** @type {string} */
  code: null,

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

    /**
     * @param {string} propName 
     * @param {object} event 
     */
    validateInputAndSetHbs(propName, event) {
      this.set(propName, event.target.checked);
      this.setHbs();
    },

    setPropertyAndSetHbs(propName, propValue) {
      this.set(propName, propValue);
      this.setHbs();
    },
  },

  // #endregion Actions


  // #region Methods

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
