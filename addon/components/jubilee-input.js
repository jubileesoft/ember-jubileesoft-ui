import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default class JubileeInputComponent extends Component {
  /*
    @text {string}
    @placeholder {string}
    @update {'on-blur', 'on-input'} - default is 'on-blur'
    @onChange {callback(newValue)}
    @isReadonly {boolean}
  */

  // #region Services

  @service media;

  // #endregion Services

  // #region Properties

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
