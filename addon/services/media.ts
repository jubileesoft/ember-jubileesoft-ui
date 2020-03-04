import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Media extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here

  // #region Fields

  _mediaBreakpoint: number = 940;

  // #endreegion Fields

  // #region Properties

  @tracked isSmall: boolean | null = null;

  get isLarge(): boolean | null {
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

  // #endregion Hooks

  // #region Private Methods

  @action
  _onResize() {
    this._set();
  }

  _set() {
    const newIsSmall = window.innerWidth <= this._mediaBreakpoint;

    if (this.isSmall != newIsSmall) {
      this.isSmall = newIsSmall;
    }
  }

  // #endregion Private Methods
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    media: Media;
  }
}
