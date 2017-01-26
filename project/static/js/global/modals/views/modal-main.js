define(function (require, exports, module) {

var backbone = require('backbone');
var marionette = require('marionette');
var modals = require('built/app/modals');
var ModalContainerView = require('./modal-container').ModalContainerView;

// list of all the modal types
// var YTVideoView = require('./yt-video').YTVideoView;

var classTable = {
    // 'yt-video': {
    //     wantsContainer: false,
    //     view: YTVideoView
    // }
};

var ModalView = marionette.LayoutView.extend({
    template: false,
    events: {
        'click .js-modal-trigger': 'onWantsOpenModal'
    },

    regions: {
        modalRegion: '.js-modal'
    },

    onWantsOpenModal: function(evt){
        var $el = $(evt.target);
        var $up = $el.closest("[data-class]");
        var data = $up.data();
        console.log(data)
        if(!data)return;
        var ViewClass = classTable[data.class];
        if(!ViewClass)return;

        var complete = function(modalView){
            // You are responsible for dismissing the modal.
            modals.dismissModal();
        };

        var model = new backbone.Model(data);

        if (ViewClass.wantsContainer) {
            var container = new ModalContainerView({
                model:model,
                modal: new ViewClass.view({model:model})
            });

            modals.presentModal(container).then(complete);

            return false;
        }

        modals.presentModal(new ViewClass.view({ model: model})).then(complete);

        return false;
    }

});

exports.ModalView = ModalView;

});
