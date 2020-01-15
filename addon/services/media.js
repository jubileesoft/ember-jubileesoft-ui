import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MediaService extends Service {
  // #region Fields

  _mediaBreakpoint = 940;

  // #endreegion Fields

  // #region Properties

  @tracked isSmall = null;

  get isLarge() {
    if (this.isSmall == null) {
      return null;
    }
    return !this.isSmall;
  }

  // #endregion Properties

  // #region Hooks

  constructor() {
    super(...arguments);
    window.addEventListener('resize', this._onResize);
    this._set();
  }

  // #endreegion Hooks

  // #region Private Methods

  @action
  _onResize() {
    this._set();
  }

  _set() {
    const newIsSmall = window.innerWidth <= this._mediaBreakpoint;

    if (this.isSmall != newIsSmall) {
      this.set('isSmall', newIsSmall);
    }
  }

  // #endreegion Private Methods
}
