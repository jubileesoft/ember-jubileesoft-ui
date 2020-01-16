import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class JubileeSwitchComponent extends Component {
  /*
    @isChecked {boolean}
    @isEnabled {boolean}
    @onChange {callback(newValue)}

   */

  get isDisabled() {
    if (typeof this.args.isEnabled === 'boolean') {
      return !this.args.isEnabled;
    }
    return false;
  }

  // #region Actions

  @action
  pressed() {
    if (this.args.onChange) {
      this.args.onChange(!this.args.isChecked);
    }
  }

  // #endregion Actions
}
