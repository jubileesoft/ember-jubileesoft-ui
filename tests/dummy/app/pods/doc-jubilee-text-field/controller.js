import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default class DocJubileeTextFieldController extends Controller {
  // #region Properties

  label = 'Company';
  label2 = '(max 30 characters)';
  @tracked code = null;
  @tracked showLabel = true;
  @tracked showLabel2 = true;
  @tracked isReadonly = false;
  @tracked onChangeEvents = 0;
  @tracked text = 'Fanatasy Ltd.';

  updates = [UPDATE.ONBLUR, UPDATE.ONINPUT];
  @tracked selectedUpdate;

  // #endregion Properties

  // #region Hooks

  constructor() {
    super(...arguments);

    this.selectedUpdate = this.updates[0];

    this.setHbs();
  }

  // #endregion Hooks

  // #region Actions

  @action
  onChange(newValue) {
    this.text = newValue;
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

    code.push('<JubileeTextField');

    if (this.showLabel) {
      code.push('  @label="' + this.label + '"');
    }

    if (this.showLabel2) {
      code.push('  @label2="' + this.label2 + '"');
    }

    code.push('  @text={{this.name}}');

    code.push('  @onChange={{fn (mut this.name)}}');

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
