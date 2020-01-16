import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';

export default class DocJubileeSwitchController extends Controller {
  // #region Properties

  @tracked code;

  // #endregion Properties

  // #region Hooks

  constructor() {
    super(...arguments);

    this.setHbs();
  }

  // #endregion Hooks

  // #region Methods

  setHbs() {
    const code = [];

    code.push('<JubileeSwitch');
    code.push('  @isChecked={{this.settingIsChecked}}');
    code.push('  @onChange={{fn (mut this.settingIsChecked)}}');
    code.push('/>');
    this.code = join(code);
  }

  // #endregion Methods
}
