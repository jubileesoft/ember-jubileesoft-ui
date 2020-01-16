import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';
import { tracked } from '@glimmer/tracking';

export default class DocJubileeSelectController extends Controller {
  // #region Properties

  @tracked code;
  @tracked items = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  @tracked selectedItem;

  // #endregion Properties

  // #region Hooks

  constructor() {
    super(...arguments);
    this.selectedItem = this.items[2];

    this.setHbs();
  }

  // #endregion Hooks

  // #region Methods

  setHbs() {
    const code = [];

    code.push('<JubileeSelect');
    code.push('  @items={{this.weekdays}}');
    code.push('  @selectedItem={{this.selectedWeekday}}');
    code.push('  @onChange={{fn (mut this.selectedWeekday)}} as |name|');
    code.push('>');
    code.push('  {{name}}');
    code.push('</JubileeSelect>');

    this.code = join(code);
  }

  // #endregion Methods
}
