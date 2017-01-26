
define(function(require, exports, module){

var $ = require('jquery');
var marionette = require('marionette');
var global = require('global/main');
var app = new marionette.Application();

app.addInitializer(global.main);

$(function(){
    app.start();
});

});

