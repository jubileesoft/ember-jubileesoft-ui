import Controller from '@ember/controller';
import { join } from 'dummy/utils/common';

export default Controller.extend({
  // #region Hooks
  
  init() {
    this._super(...arguments);
    this.set('items', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    this.set('selectedItem', this.items[2]);

    this.setHbs();
  },
  
  // #endregion Hooks


  // #region Methods
  
  setHbs() {
    const code = [];

    code.push('<JubileeSelect');
    code.push('  @items={{this.weekdays}}');
    code.push('  @selectedItem={{this.selectedWeekday}}');
    code.push('  @onChange={{action (mut this.selectedWeekday)}}');
    code.push('as |name|');
    code.push('>');
    code.push('  {{name}}');
    code.push('</JubileeSelect>');

    this.set('code', join(code));
  },
  
  // #endregion Methods
});
