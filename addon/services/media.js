import Service from '@ember/service';
import { observer, computed } from '@ember/object';

export default Service.extend({
  // #region Fields

  _mediaBreakpoint: 940,

  // #endreegion Fields


  // #region Properties

  isSmall: null,

  isLarge: computed('isSmall', function () {
    if (this.isSmall == null) {
      return null;
    }
    return !this.isSmall;
  }),

  // #endregion Properties


  // #region Hooks

  init() {
    this._super(...arguments);
    window.addEventListener('resize', this._onResize.bind(this));
    this._set();
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('resize', this._onResize.bind(this));
  },

  // #endreegion Hooks


  // #region Private Methods

  _onResize() {
    this._set();
  },

  _set() {
    const newIsSmall = window.innerWidth <= this._mediaBreakpoint;

    if (this.isSmall != newIsSmall) {
      this.set('isSmall', newIsSmall);
    }
  },

  _isSmallChanged: observer('isSmall', function () {
    if (this.isSmall) {
      console.log('small');
    } else {
      console.log('large');
    }
  }),

  // #endreegion Private Methods
});
