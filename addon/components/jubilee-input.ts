import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Media from '@jubileesoft/ember-jubileesoft-ui/services/media';
import { THEME } from '@jubileesoft/ember-jubileesoft-ui/constants';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

interface OnChangeFunc {
  (newValue: string): void;
}

interface JubileeInputArgs {
  isReadonly: boolean;
  update: string;
  text: string;
  placeholder?: string;
  onChange: OnChangeFunc;
  theme?: string;
}

export default class JubileeInput extends Component<JubileeInputArgs> {
  // #region Services

  @service media!: Media;

  // #endregion Services

  // #region Properties

  get theme(): string {
    return this.args.theme === THEME.DARK ? THEME.DARK : THEME.LIGHt;
  }

  get isLightTheme(): boolean {
    return this.theme === THEME.LIGHt;
  }

  get computedIsReadonly(): boolean {
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
