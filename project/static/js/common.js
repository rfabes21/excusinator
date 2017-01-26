require.config({
  baseUrl: 'static/js',

  paths : {
    'marionette': 'vendor/backbone/marionette',
    'ScrollMagic': 'vendor/jquery/jquery.scrollmagic'

  },

   packages: [
        'app/behaviors',

        {
            location: 'vendor/built',
            name: 'built'
        },

        {
            location: 'vendor/jquery',
            name: 'jquery',
            main:'jquery'
        },

        {
            location: 'vendor/backbone',
            name: 'backbone',
            main:'backbone'
        },

        {
            location: 'vendor/require/hbs',
            name: 'hbs',
            main:'hbs'
        },

        {
            location: 'vendor/modernizr',
            name: 'modernizr',
            main:'modernizr'
        },

        {
            location: 'vendor/moment',
            name: 'moment',
            main:'moment'
        },

    ],

    map: {
        '*': {
            'underscore': 'vendor/underscore/lodash',
            'handlebars': 'hbs/handlebars',
        }
    },


  hbs: {
        templateExtension : 'html',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : true,
        helperDirectory: 'shared/hbs'
  },

  shim : {

    'backbone': {
        'deps': ['jquery', 'underscore'],
        'exports': 'Backbone'
    },

    'backbone/stickit' : {
      'deps' : ['backbone'],
      'exports' : 'Stickit'
    },

    'jquery/mockjax': {
        'deps': ['jquery'],
        'exports': 'jquery'
    },

    'jquery/jquery.social': {
        'deps': ['jquery']
    },

    'vendor/skel/skel.min' : {
      'deps' : ['jquery'],
    },

    'youtube' : {exports: 'YT'},
  },

  // introduced in requirejs 2.1.11, helps Backbone along.
  // http://jrburke.com/2014/02/16/requirejs-2.1.11-released/
  wrapShim: true,

});
