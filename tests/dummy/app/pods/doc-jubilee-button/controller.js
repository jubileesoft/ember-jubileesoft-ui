import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DocJubileeButtonController extends Controller {
  // #region Properties

  @tracked code;
  @tracked isEnabled = true;

  // #endregion Properties

  // #region Constructor

  constructor() {
    super(...arguments);
    this.setHbs();
  }

  // #endregion Constructor

  // #region Actions

  @action
  isEnabledClick(event) {
    this.isEnabled = event.target.checked;
    this.setHbs();
  }

  // #endregion Actions

  // #region Methods

  setHbs() {
    const code = [];

    code.push('<JubileeButton');
    code.push('  @onClick={{this.buttonClicked}}');

    if (!this.isEnabled) {
      code.push(`  @isEnabled={{${this.isEnabled}}}`);
    }

    if (this.isInvert) {
      code.push(`  @invert={{${this.isInvert}}}`);
    }

    code.push('/>');

    this.code = join(code);
  }

  // #endregion Methods
}
