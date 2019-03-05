import Component from '@ember/component';
import layout from './template';
import { oneWay } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  // #region Services

  media: service(),

  // #endregion Services


  // #region Properties

  layout,

  onewaySelectedItem: oneWay('selectedItem'),

  isDropdownOpen: false,

  // #endregion Properties


  // #region Fields

  _triggerId: null, // will be set later
  _dropdownId: null,

  // #endregion Fields


  // #region Hooks

  didRender() {
    if (!this._triggerId) {
      this.set('_triggerId', this.elementId + '_trigger');
    }

    if (!this._dropdownId) {
      this.set('_dropdownId', this.elementId + '_dropdown');
    }

    this._adjustDropdownWidth();
  },

  // #endregion Hook


  // #region Actions

  actions: {
    triggerClicked() {
      this.toggleProperty('isDropdownOpen');
      this._adjustDropdownPosition();
    },

    itemClicked(item) {
      if (typeof this.onChange == 'function' && this.selectedItem !== item) {
        this.onChange(item);
      }

      this.toggleProperty('isDropdownOpen');
      this._adjustDropdownWidth();
    },
  },

  // #endregion Actions


  // #region Methods

  _adjustDropdownWidth() {
    if (this.media.isSmall) {
      return;
    }
    const triggerElement = document.getElementById(this._triggerId);
    const dropdownElement = document.getElementById(this._dropdownId);

    dropdownElement.style.minWidth = triggerElement.offsetWidth + 'px';
  },

  _adjustDropdownPosition() {
    if (this.media.isSmall) {
      return;
    }
    let index = this.items.indexOf(this.selectedItem);

    const dropdownElement = document.getElementById(this._dropdownId);

    dropdownElement.style.top = '-' + (index * 2.5 + 0.5) + 'rem';
  },

  // #endregion Methods
});
