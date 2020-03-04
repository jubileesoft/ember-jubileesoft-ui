import Component from '@glimmer/component';
import { action } from '@ember/object';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

interface OnChangeFunc {
  (newValue: string): void;
}

interface JubileeTextFieldArgs {
  label?: string;
  label2?: string;
  isReadonly?: boolean;
  update?: string;
  onChange: OnChangeFunc;
  text?: string;
}

export default class JubileeTextField extends Component<JubileeTextFieldArgs> {
  /*
    @label {string}
    @label2 {string}
    @text {string}
    @update {string} - 'on-blur', 'on-input' (default)
    @onChange {callback}
    @isReadonly {boolean}
  */

  // #region Fields

  _oldText = null;

  // #endregion Fields

  // #region Properties

  get hasAnyLabel() {
    return (
      typeof this.args.label !== 'undefined' ||
      typeof this.args.label2 !== 'undefined'
    );
  }

  get computedIsReadonly() {
    return this.args.isReadonly === true;
  }

  // #endregion Properties

  // #region Actions

  @action
  onInput(event: KeyboardEvent) {
    if (this.args.update !== UPDATE.ONINPUT) {
      return;
    }

    if (this.args.onChange) {
      this.args.onChange((event.target as HTMLInputElement).value);
    }
  }

  @action
  onBlur(event: KeyboardEvent) {
    if (this.args.update === UPDATE.ONINPUT) {
      return;
    }

    if ((event.target as HTMLInputElement).value === this.args.text) {
      return;
    }

    if (!this.args.onChange) {
      return;
    }

    this.args.onChange((event.target as HTMLInputElement).value);
  }

  // #endregion Actions
}
