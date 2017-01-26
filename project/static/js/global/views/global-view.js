define(function (require, exports, module) {

var marionette = require('marionette');
var _ = require('underscore');
var $ = require('jquery');

require('global/scripts');

var GlobalView = marionette.ItemView.extend({

    el: '.js-app',

    template: false,

    ui: {
    },

    events: {
    },

    initialize: function() {

    },

    onRender: function() {

    },



});

exports.GlobalView = GlobalView;

});
