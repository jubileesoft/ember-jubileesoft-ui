import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default class DocJubileeInputController extends Controller {
  // #region Properties

  @tracked onChangeEvents = 0;
  isReadonly = false;

  /** @type {string[]} */
  @tracked updates = null;

  /** @type {string} */
  @tracked selectedUpdate = null;

  /** @type {string} */
  @tracked code = null;

  /** @type {string} */
  @tracked location = null;

  // #endregion Properties

  // #region Hooks

  constructor() {
    super(...arguments);
    this.updates = [UPDATE.ONBLUR, UPDATE.ONINPUT];
    this.selectedUpdate = this.updates[0];

    this.setHbs();
  }

  // #endregion Hooks

  // #region Actions

  @action
  onChange(newValue) {
    this.location = newValue;
    this.onChangeEvents++;
  }

  /**
   * @param {string} propName
   * @param {object} event
   */
  @action
  validateInputAndSetHbs(propName, event) {
    this.set(propName, event.target.checked);
    this.setHbs();
  }

  @action
  setPropertyAndSetHbs(propName, propValue) {
    this.set(propName, propValue);
    this.setHbs();
  }

  // #endregion Actions

  // #region Methods

  setHbs() {
    const code = [];

    code.push('<JubileeInput');

    code.push('  @text={{this.location}}');

    code.push('  @onChange={{fn (mut this.location)}}');

    if (this.selectedUpdate === UPDATE.ONINPUT) {
      code.push('  @update="' + UPDATE.ONINPUT + '"');
    }

    if (this.isReadonly) {
      code.push('  @isReadonly={{true}}');
    }

    code.push('/>');

    this.code = join(code);
  }

  // #endregion Methods
}
