import Component from '@glimmer/component';
import { action } from '@ember/object';

interface JubileeModalArgs {
  maxContent?: boolean;
}

export default class JubileeModal extends Component<JubileeModalArgs> {
  /**
   * maxContent: bool(default true)
   */

  // #region Properties

  get isMax(): boolean {
    return (
      typeof this.args.maxContent === 'undefined' ||
      this.args.maxContent === true
    );
  }

  // #endregion Properties

  // #region Actions

  @action
  doNothing() {
    // really, do nothing
  }

  // #endregion Actions
}
