import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DocJubileeButtonController extends Controller {
  // #region Properties

  @tracked code;
  @tracked isInvert = true;

  // #endregion Properties

  // #region Constructor

  constructor() {
    super(...arguments);
    this.setHbs();
  }

  // #endregion Constructor

  // #region Actions

  @action
  isInvertChange(event) {
    this.isInvert = event.target.checked;
    this.setHbs();
  }

  // #endregion Actions

  // #region Methods

  setHbs() {
    const code = [];

    code.push('<JubileeButton');
    code.push('  {{on "click" this.buttonPressed}}');

    if (this.isInvert) {
      code.push(`  @invert={{${this.isInvert}}}`);
    }

    code.push('/>');

    this.code = join(code);
  }

  // #endregion Methods
}
