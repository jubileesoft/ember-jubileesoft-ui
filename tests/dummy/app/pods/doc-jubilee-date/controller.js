import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DocJubileeDateControler extends Controller {
  // #region Properties

  @tracked code;
  locales = ['de', 'en-us', 'en-gb'];
  @tracked selectedLocale = this.locales[0];

  // #endregion Properties

  // #region Constructor

  constructor() {
    super(...arguments);
    this.setHbs();
  }

  // #endregion Constructor

  // #region Actions & Methods

  @action
  onChangeSelectedLocale(newValue) {
    this.selectedLocale = newValue;
    this.setHbs();
  }

  setHbs() {
    const code = [];

    code.push('<JubileeDate');
    code.push(`  @locale="${this.selectedLocale}"`);
    code.push('  @selected={{this.selectedDate}}');
    code.push('  @onSelect={{fn (mut this.selectedDate)}}');
    code.push('/>');

    this.code = join(code);
  }

  // #endregion Methods
}
