define(function(require, exports, module) {

var marionette        = require('marionette');
var _                 = require('underscore');
var GlobalView        = require('./views/global-view').GlobalView;

require('jquery/jquery.social');
require('modernizr');

var ApplicationDelegate = marionette.Controller.extend({

    initialize: function(options){
        this.app = options.app;
        this.body = $('body');
        this.html = $('html');
        this.appEl = $('.app');
        $.social();
        var globalView = new GlobalView().render();
    },

});

exports.ApplicationDelegate = ApplicationDelegate;

});
