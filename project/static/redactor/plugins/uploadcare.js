/*
 * Uploadcare Redactor plugin (1.0.1)
 */

if (!RedactorPlugins) var RedactorPlugins = {};

(function($) {
    RedactorPlugins.uploadcare = function() {
        var $opts;
        return {
            init: function() {
                $opts = this.opts.uploadcare;
                // defaults
                if (!$opts.crop) {
                    $opts.crop = '';
                }
                if (!$opts.version) {
                    $opts.version = '2.1.0';
                }

                if (typeof uploadcare === 'undefined') {
                    var widget_url = 'https://ucarecdn.com/widget/' + $opts.version + '/uploadcare/uploadcare.min.js';
                    $.getScript(widget_url);
                }

                $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css') );

                // using mezzanine with a widget you can't inject init options
                // i have requested the feature here:
                // https://github.com/stephenmcd/mezzanine/issues/1277
                // for now we kill the upload buttons for primrose specifically
                $('.re-image').hide();
                $('.re-file').hide();



                var button = this.button.add('uploadcare', 'Image');
                this.button.addCallback(button, this.uploadcare.show);

                // make your added button as Font Awesome's icon
                this.button.setAwesome('uploadcare', 'fa-picture-o');
            },

            show: function() {
                var dialog = uploadcare.openDialog({}, $opts);
                dialog.done(this.uploadcare.done)
            },

            done: function(data) {
                var $this = this;
                var files = $opts.multiple ? data.files() : [data];
                $.when.apply(null, files).done(function() {
                    $.each(arguments, function() {
                        var imageUrl = this.cdnUrl;
                        if (this.isImage && !this.cdnUrlModifiers) {
                            imageUrl += '-/preview/';
                        }
                        if (this.isImage) {
                            $this.insert.html('<img src="' + imageUrl + '" alt="' + this.name + '" />', false);
                        } else {
                            $this.insert.html('<a href="' + this.cdnUrl + '">' + info.name + '"</a>', false);
                        }
                    });
                });
            },
        };
    };
})(jQuery);