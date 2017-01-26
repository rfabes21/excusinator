define(function(require, exports, module) {


var $ = require("jquery");
var _ = require("underscore");
var marionette = require("marionette");
var vent = require("built/app/vent").vent;
var enquire = require("enquire");

var eventHandler = new marionette.Object();
var keys = {};

var Breakpoints = marionette.Object.extend({

    keys: null,

    initialize: function(){
        this.keys = {};
    },

    register: function (min, max, options){

        options || (options = {});


        if(_.isUndefined(max)){
            max = null;
        }
        else if(_.isObject(max)){
            options = max;
            max = null;
        }

        var mediaQuery = this.buildMediaQuery(min, max);

        var label = options.label || mediaQuery;
        this.keys[label] = mediaQuery;

        // we are intentionally omitting setup/deferSetup here.
        // marionette offers us strong patterns for dealing
        // with setup.

        var params = {
            match: this.match.bind(this, label),
            unmatch: this.unmatch.bind(this, label),
        };

        enquire.register(mediaQuery, params);
    },

    getCurrentLabel: function(){
        var keys = this.keys;

        for (var each in keys) {
            if(matchMedia(keys[each]).matches){
                return each;
            }
        }
    },

    buildMediaQuery: function (min, max){
        var mediaQuery = ["screen"];

        if(min !== undefined && min !== null){
            var q = "(min-width: " + getEmForValue(min) + ")";
            mediaQuery.push(q)
        }

        if(max !== undefined && max !== null){
            var q = "(max-width: " + getEmForValue(max) + ")";
            mediaQuery.push(q)
        }

        return mediaQuery.join(" and ");
    },

    match: function(label){
        var key = ["enter", label];
        this.trigger(key.join(":"));
    },

    unmatch: function(label){
        var key = ["leave", label];
        this.trigger(key.join(":"));
    },

    on: function(name, callback, context){
        marionette.Object.prototype.on.apply(this, [name, callback, context]);

        var parts = name.split(":");
        var mediaQuery = this.keys[parts[1]];
        var enquireMediaQuery = enquire.queries[mediaQuery];

        if(enquireMediaQuery !== undefined){
            enquireMediaQuery.assess();
        }
    }
});



function getRootFontSizePx(){
    // var root = $('html');
    // var value = getComputedStyle(root[0]).fontSize;
    // return parseInt(value, 10);
    return 16;
}

function getRemForPx(value){
    var rootSize = getRootFontSizePx();

    return getEmForPx(value, rootSize);
}

function getEmForPx(value, parentSize){
    if(parentSize === undefined){
        throw new Error("getEmForPx: parsentSize must be specified");
    }

    return parseInt(value, 10) / parseInt(parentSize, 10);
}

function getEmForValue(value){

    var u = unit(value);
    var result = null;

    if(u == "px"){
        result = getRemForPx(value) + "em";
    } else if(u == "em"){
        result = parseFloat(value, 10) + "em";
    } else if(u == "%"){
        // noop
    } else if(u == "pt"){
        // noop
    }

    // see : https://github.com/at-import/breakpoint/blob/master/stylesheets/breakpoint/_helpers.scss#L24-L43
    // base-conversion
    if(result === null)
        throw new Error("We don't currently handle '"+ u + "'");

    return result;
}

function unit(value){
    var result = "px";

    if(_.isString(value)){
        var parsed = parseFloat(value, 10);
        var parsedString = "" + parsed;
        var unit = value.substr(parsedString.length);

        if(unit == "")
            unit = "px";

        result = unit;
    }

    return result;
}

exports.getRootFontSizePx = getRootFontSizePx;
exports.getRemForPx = getRemForPx;
exports.getEmForPx = getEmForPx;
exports.getEmForValue = getEmForValue;
exports.unit = unit;
exports.Breakpoints = Breakpoints;
exports.breakpoints = new Breakpoints();
});
