'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function(type /*, config*/) {
    if (type === 'head') {
      /*
        This makes sure that the relevant Google fonts of this addon 
        are loaded into the main app (head section).
      */

      return '<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" type="text/css" media="all">';
    }
  },

  included(app) {
    if (app.options.emberJubileesoftUi == undefined) {
      app.options.emberJubileesoftUi = {};
    }

    let config = app.options.emberJubileesoftUi;

    this.options = Object.assign({}, this.options, {
      cssModules: {
        virtualModules: {
          // https://material.io/tools/color/#!/?view.left=1&view.right=1&primary.color=F06292&primary.text.color=ffffff&secondary.color=A9F263
          colors: {
            primary: config.primary || '#f06292',

            accent: config.accent || '#797979',
            textOnAccent: config.textOnAccent || '#ffffff',
            accentLight: config.accentLight || '#d7d7d7',
            accentDark: config.accentDark || '#5c5c5c',

            textOnLight: config.textOnLight || '#202020',
            textOnDark: config.textOnDark || '#ffffff',
            backgroundOnLight: config.backgroundOnLight || '#fafafa',
            backgroundOnDark: config.backgroundOnDark || '#2c2c2c'
          }
        }
      }
    });

    this._super.included.apply(this, arguments);
  }
};
