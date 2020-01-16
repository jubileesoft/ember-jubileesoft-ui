import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { uuid } from 'uuidv4';
import { inject as service } from '@ember/service';

export default class JubileeSelectComponent extends Component {
  // #region Services

  @service media;

  // #endregion Services

  // #region Properties

  @tracked
  isDropdownOpen = false;

  @tracked
  elementId = uuid();

  get triggerId() {
    return this.elementId + '_trigger';
  }

  get dropdownId() {
    return this.elementId + '_dropdown';
  }

  // #endregion Properties

  // #region Actions

  @action
  triggerClicked() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.adjustDropdownPosition();
  }

  @action
  itemClicked(item) {
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

    dropdownElement.style.minWidth = triggerElement.offsetWidth + 'px';
  }

  adjustDropdownPosition() {
    if (this.media.isSmall) {
      return;
    }
    let index = this.args.items.indexOf(this.args.selectedItem);

    const dropdownElement = document.getElementById(this.dropdownId);

    dropdownElement.style.top = '-' + (index * 2.5 + 0.5) + 'rem';
  }

  // #endregion Methods
}
