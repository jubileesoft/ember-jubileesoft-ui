import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';

export default Component.extend({
  // #region Services

  powerCalendar: service(),
  media: service(),

  // #endregion Services


  // #region Properties

  layout,

  internalSelectionChanged: observer('internalSelection', function () {
    if (!this.media.isSmall) {      
      this.onOk();
    }
  }),

  // #endregion Properties


  // #region Hooks

  didReceiveAttrs() {
    if (this.locale !== this._locale) {
      this.powerCalendar.set('locale', this.locale);

      this.set('_locale', this.locale);
    }

    if (this.selected !== this._selected) {
      this.set('_selected', this.selected);

      this.set('internalSelection', this.selected);
    }
  },

  // #endregion Hooks


  // #region Actions

  actions: {
    onAbort() {
      this.set('isCalendarOpen', false);

      this.set('internalSelection', this._selected);
    },
  },

  // #endregion Action


  // #region Methods

  onOk() {
    this.set('isCalendarOpen', false);

    this.set('_selected', this.internalSelection);

    if (this.onSelect) {
      this.onSelect(this.internalSelection);
    }
  },

  // #endregion Method
});
