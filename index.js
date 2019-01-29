'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (type/*, config*/) {
    if (type === 'head') {
      /*
        This makes sure that the relevant Google fonts of this addon 
        are loaded into the main app (head section).
      */ 
      return '<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" type="text/css" media="all">'
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
          'colors': {
            /*
              PRIMARY
            */
            'primary': config.primary || '#f06292',
            'onPrimary': config.onPrimary || '#ffffff',
            
            'primaryLight': config.primaryLight || '#ff94c2',
            'primaryDark': config.primaryDark || '#ba2d65',
            
            /*
              SECONDARY
            */

            'secondary': config.secondary || '#a9f263',
            'onSecondary': config.onSecondary || '#000000',

            'secondaryLight': config.secondaryLight || '#ddff95',
            'secondaryDark': config.secondaryDark || '#76bf30',
            
            /*
              DESK
            */
            'desk': config.desk || '#f5f7f7',
            
            /*
              SURFACE
            */
            'surface': config.surface || '#ffffff',
            'onSurface': config.onSurface || '#696d6e',
            'onSurfaceDark': config.onSurfaceDark || '#3e3f42',
          }
        }
      },
    });

    this._super.included.apply(this, arguments);
  }

};
