import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

const UPDATE = {
  ONBLUR: 'on-blur',
  ONINPUT: 'on-input'
};

export default Component.extend({
  /*
    @text {string}
    @placeholder {string}
    @update {'on-blur', 'on-input'} - default is 'on-blur'
    @onChange {callback(newValue)}
    @isReadonly {boolean}
  */

  // #region Services
  
  media: service(),
  
  // #endregion Services


  // #region Properties

  layout,   

  computedPlaceholder: computed('placeholder', function () {
    if (this.placeholder == undefined) {
      return null;
    }
    return this.placeholder;
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
