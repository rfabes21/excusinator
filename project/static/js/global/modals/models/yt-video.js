define(function( require, exports, module ){

var backbone = require('backbone');
var YTVideo = backbone.Model.extend({
    defaults:{
        ytid: 'BfqS_WBwwD0',
        width: "100%",
        height: "900px",
        style: {
            autohide: 1,
            autoplay: 0,
            iv_load_policy: 3,
            color: "black",
            controls: 1,
            enablejsapi: 1,
            hd: 1,
            wmode: "transparent",
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            theme: "dark",
            cc_lang_pref:  'en',
            cc_load_policy: 0
        },
        autoplay: false
    }
});

exports.YTVideo = YTVideo;

});
