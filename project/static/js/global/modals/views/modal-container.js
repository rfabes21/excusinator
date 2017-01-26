define(function (require, exports, module) {

var marionette = require('marionette');
var template = require('hbs!../templates/modal-container');
var modals = require('built/app/modals');
var keys = require('built/app/keys');

var ModalContainerView = marionette.LayoutView.extend({
    template : template,
    events:{
        'click .close': 'wantsClose',
        'click @ui.modalContainer': 'onClickModalContainer'
    },
    ui: {
        modalContainer: '.modal-container'
    },
    regions: {
        modalRegion: '.modal-inner-container'
    },

    initialize: function(options){
        this.modal = options.modal;
        keys.registerInResponderChain(this);
    },

    onRender: function(){
        this.modalRegion.show(this.modal);
    },

    wantsClose: function(){
        modals.dismissModal();
    },

    onClickModalContainer: function(e) {
        var target = $(e.target);

        if (target.hasClass('modal-container')) {
            this.wantsClose();
        }
    },

    keyDown: function(e){
        // escape key
        if(e.keyCode == 27){
            this.wantsClose();
        }
    },

});

exports.ModalContainerView = ModalContainerView;

});
