import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  /*
    @isChecked {boolean}
    @onChange {callback(newValue)}
   */

  // #region Properties

  layout,

  localClassNames: 'root',

  // #endregion Properties


  // #region Hooks

  didReceiveAttr() {
    if (this.isChecked === this._isChecked) {
      return;
    }

    this.set('_isChecked', this.isChecked);
    this.set('onewayIsChecked', this.isChecked);
  },

  // #endregion Hooks


  // #region Actions

  actions: {
    pressed() {
      this.toggleProperty('onewayIsChecked');

      if (this.onChange) {
        this.onChange(this.onewayIsChecked);
      }
    },
  },

  // #endregion Actions
});
