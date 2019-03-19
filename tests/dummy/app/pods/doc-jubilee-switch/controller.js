import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';

export default Controller.extend({
  // #region Hooks
  
  init() {
    this._super(...arguments);

    this.setHbs();
  },
  
  // #endregion Hooks


  // #region Methods
  
  setHbs() {
    const code = [];

    code.push('<JubileeSwitch');
    code.push('  @isChecked={{this.settingIsChecked}}');
    code.push('  @onChange={{action (mut this.settingIsChecked)}}');
    code.push('/>');
    this.set('code', join(code));
  },
  
  // #endregion Methods
});
