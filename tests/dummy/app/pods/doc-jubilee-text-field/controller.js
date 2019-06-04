import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default Controller.extend({
  // #region Properties

  label: 'Company',
  label2: '(max 30 characters)',
  code: null,
  showLabel: true,
  showLabel2: true,
  isReadonly: false,
  onChangeEvents: 0,
  text: 'Fanatasy Ltd.',

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
      this.set('text', newValue);
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

    code.push('<JubileeTextField');

    if (this.showLabel) {
      code.push('  @label="' + this.label + '"');
    }

    if (this.showLabel2) {
      code.push('  @label2="' + this.label2 + '"');
    }

    code.push('  @text={{this.name}}');

    code.push('  @onChange={{action (mut this.name)}}');

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
