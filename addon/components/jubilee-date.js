import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JubileeDateComponent extends Component {
  // #region Services

  @service powerCalendar;
  @service media;

  // #endregion Services

  // #region Properties

  @tracked internalSelection;
  @tracked isCalendarOpen;

  // #endregion Properties

  // #region Hooks
  didUpdateLocale() {
    this.powerCalendar.set('locale', this.args.locale);
  }

  didUpdateSelected() {
    this.internalSelection = this.args.selected;
  }

  // #endregion Hooks

  // #region Actions

  @action
  onAbort() {
    this.isCalendarOpen = false;

    this.internalSelection = this._selected;
  }

  @action
  powerCalendarOnSelect(value) {
    this.internalSelection = value;
    if (!this.media.isSmall) {
      this.onOk();
    }
  }

  @action
  jubileeInputOnClick() {
    this.isCalendarOpen = true;

    if (this.media.isSmall && typeof this.internalSelection === 'undefined') {
      this.internalSelection = new Date();
    }
  }

  // #endregion Action

  // #region Methods

  onOk() {
    this.isCalendarOpen = false;

    this._selected = this.internalSelection;

    if (this.args.onSelect) {
      this.args.onSelect(this.internalSelection);
    }
  }

  // #endregion Method
}
