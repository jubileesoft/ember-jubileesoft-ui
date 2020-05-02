import Component from '@glimmer/component';
import { action } from '@ember/object';

interface OnClickFunc {
  (event: MouseEvent): void;
}

interface JubileeButtonArgs {
  text: string;
  onClick: OnClickFunc;
  isEnabled?: boolean;
}

export default class JubileeButton extends Component<JubileeButtonArgs> {
  // #region Properties

  get isDisabled() {
    return this.args.isEnabled === false;
  }

  // #endregion Properties

  // #region Methods

  @action
  onButtonClick(event: MouseEvent) {    
    if (this.args.onClick && !this.isDisabled) {
      this.args.onClick(event);
    }
  }

  // #endregion Methods
}
