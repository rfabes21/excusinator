define(function (require, exports, module) {

var marionette = require('marionette');
var MapBehavior = require('global/behaviors/map').MapBehavior;
var behaviors = { MapBehavior: MapBehavior }

function initialize(){
    marionette.Behaviors.behaviorsLookup = behaviorsLookup;
}


function register(key, value){
    behaviors[key] = value;
}


function behaviorsLookup(){
    return behaviors
}


exports.initialize = initialize;
exports.register = register;

});

