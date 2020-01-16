import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class VHeaderComponent extends Component {
  // #region Services

  @service router;

  // #endregion Services

  // #region Actions

  @action
  menuOnClick() {
    this.router.transitionTo('menu');
  }

  @action
  goHome() {
    this.router.transitionTo('index');
  }

  // #endregion Actions
}
