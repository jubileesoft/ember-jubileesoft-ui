import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('doc-jubilee-text-field');
  this.route('doc-jubilee-select');
  this.route('doc-jubilee-input');
  this.route('doc-jubilee-switch');
  this.route('doc-jubilee-date');
  this.route('doc-jubilee-button');
});

export default Router;
