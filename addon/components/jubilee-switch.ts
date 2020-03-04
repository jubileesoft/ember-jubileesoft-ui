import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OnChangeFunc {
  (newValue: boolean): void;
}

interface JubileeSwitchArgs {
  isEnabled: boolean;
  isChecked: boolean;
  onChange: OnChangeFunc;
}

export default class JubileeSwitch extends Component<JubileeSwitchArgs> {
  get isDisabled(): boolean {
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
