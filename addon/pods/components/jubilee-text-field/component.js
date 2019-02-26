import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal, oneWay } from '@ember/object/computed';

export default Component.extend({
  /*
    @label {string}
    @label2 {string}
    @text {string}
    @update {string} - 'on-blur', 'on-input' (default)
    @onChange {callback}
    @isReadonly {boolean}
  */


  // #region Properties

  layout,

  hasAnyLabel: computed('label', 'label2', function () {
    return this.label || this.label2;
  }),

  computedIsReadonly: equal('isReadonly', true),

  onewayText: oneWay('text'),

  isOnBlur: equal('update', 'on-blur'),

  // #endregion Properties


  // #region Actions

  actions: {
    onBlur(/*event*/) {
      if (!this.isOnBlur) {
        // @update === 'on-input'
        // Changes would have been propagated before. 
        // Nothing to do here.
        return;
      }

      this._triggerOnChange(this.onewayText);
    },

    onInput(/*event*/) {
      if (this.isOnBlur) {
        // Nothing to do here.
        return;
      }

      this._triggerOnChange(this.onewayText);
    },
  },

  // #endregion Actions


  // #region Methods

  _triggerOnChange(newValue) {
    if (this.onewayText == '' && this.text == undefined) {
      return;
    }

    if (this.onewayText === this.text) {
      return;
    }

    if (this.onChange) {
      this.onChange(newValue);
    }
  }

  // #endregion Methods
});
