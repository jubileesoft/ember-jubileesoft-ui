import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Media from '../services/media';

interface OnSelectFunc {
  (internalSelecion: Date | null): void;
}

interface JubileeDateArgs {
  locale: string;
  selected: any;
  onSelect: OnSelectFunc;
}

export default class JubileeDateComponent extends Component<JubileeDateArgs> {
  // #region Services

  @service powerCalendar: any;
  @service media!: Media;

  // #endregion Services

  // #region Properties

  @tracked internalSelection: Date | null = null;
  @tracked isCalendarOpen: boolean = false;

  private _selected: Date | null = null;

  // #endregion Properties

  // #region Hooks

  @action
  didInsert() {
    this.powerCalendar.set('locale', this.args.locale);
  }

  @action
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
  powerCalendarOnSelect(value: Date) {
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
