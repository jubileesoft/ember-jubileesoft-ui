import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';

export default Component.extend({
  // #region Services
  
  router: service(),
  
  // #endregion Services


  // #region Properties

  layout,  
  localClassNames: 'root',

  // #endregion Properties


  // #region Actions
  
  actions: {
    menuOnClick() {
      this.router.transitionTo('menu');
    },
  },
  
  // #endregion Actions
});
