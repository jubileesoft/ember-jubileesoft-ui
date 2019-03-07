import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

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


  // #endregion Properties


  // #region Hooks
  
  didReceiveAttrs() {
    if(this._oldText ===this.text) {
      return;
    }

    this.set('_oldText', this.text);
    this.set('onewayText', this.text);
  },
  
  // #endregion Hooks


  // #region Actions

  actions: {
    onInput(/*event*/) {
      if(this.update !== UPDATE.ONINPUT){
        return;
      }

      if(this.onChange) {
        this.onChange(this.onewayText);
      }
    },

    onBlur(/*event*/) {
      if(this.update === UPDATE.ONINPUT) {
        return;
      }

      if(this.onewayText === this.text) {
        return;
      }

      if(!this.onChange) {
        return;
      }

      this.onChange(this.onewayText);
    },
  },

  // #endregion Actions
});
