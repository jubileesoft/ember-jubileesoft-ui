import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { uuid } from 'uuidv4';
import { inject as service } from '@ember/service';
import Media from '@jubileesoft/ember-jubileesoft-ui/services/media';

interface OnChangeFunc {
  (newValue: any): void;
}

interface JubileeSelectArgs {
  items: any[];
  selectedItem: any;
  onChange: OnChangeFunc;
}

export default class JubileeSelect extends Component<JubileeSelectArgs> {
  // #region Services

  @service media!: Media;

  // #endregion Services

  // #region Properties

  @tracked
  isDropdownOpen: boolean = false;

  @tracked
  elementId: string = uuid();

  get triggerId(): string {
    return this.elementId + '_trigger';
  }

  get dropdownId(): string {
    return this.elementId + '_dropdown';
  }

  // #endregion Properties

  // #region Actions

  @action
  triggerClicked(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.adjustDropdownPosition();
  }

  @action
  itemClicked(item: any) {
    if (
      typeof this.args.onChange == 'function' &&
      this.args.selectedItem !== item
    ) {
      this.args.onChange(item);
    }

    this.isDropdownOpen = !this.isDropdownOpen;
    this.adjustDropdownWidth();
  }

  // #endregion Actions

  // #region Methods

  @action
  adjustDropdownWidth() {
    if (this.media.isSmall) {
      return;
    }
    const triggerElement = document.getElementById(this.triggerId);
    const dropdownElement = document.getElementById(this.dropdownId);

    if(!triggerElement || !dropdownElement) {
      return;
    }

    dropdownElement.style.minWidth = triggerElement.offsetWidth + 'px';
  }

  adjustDropdownPosition() {
    if (this.media.isSmall) {
      return;
    }
    let index = this.args.items.indexOf(this.args.selectedItem);

    const dropdownElement = document.getElementById(this.dropdownId);

    if(!dropdownElement) {
      return;
    }

    dropdownElement.style.top = '-' + (index * 2.5 + 0.5) + 'rem';
  }

  // #endregion Methods
}
