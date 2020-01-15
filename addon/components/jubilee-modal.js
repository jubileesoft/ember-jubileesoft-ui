import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class JubileeModalComponent extends Component {
  /**
   * maxContent: bool(default true)
   */

  // #region Properties

  get isMax() {
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
