import Component from '@glimmer/component';
import { action } from '@ember/object';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default class JubileeTextFieldComponent extends Component {
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
  onInput(event) {
    if (this.args.update !== UPDATE.ONINPUT) {
      return;
    }

    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }

  @action
  onBlur(event) {
    if (this.args.update === UPDATE.ONINPUT) {
      return;
    }

    if (event.target.value === this.args.text) {
      return;
    }

    if (!this.args.onChange) {
      return;
    }

    this.args.onChange(event.target.value);
  }

  // #endregion Actions
}
