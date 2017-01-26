/**
 * General Helpers
 * @module built.core.utils.helpers
 */
define(function(require, exports, module){

// Imports

var _ = require('underscore');
var getElement = require('built/ui/helpers/dom').getElement;


function _MSIEVersion()
// http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx#DetectFtr
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
    var rv = -1; // Return value assumes failure.

    var ua = navigator.userAgent;

    // IE 11: Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko
    // IE 10: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)
    // IE 9:  Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
    // IE 8:  Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)
    var re11 = new RegExp('rv: ?([0-9]{1,}[\.0-9]{0,})');
    var re  = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');

    if (re11.exec(ua) !== null)
        rv = parseFloat( RegExp.$1 );
    else if (re.exec(ua) !== null)
        rv = parseFloat( RegExp.$1 );

  return rv;
}

// Helper functions
/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function registerElement(value, required){
    var idKey = 'auf-id';

    required = _.isUndefined(required) ? true : required;
    if(required && !value) throw 'No input element provided.';

    var $el = getElement(value);

    _.each($el, function(each){
        $target = $(each);

        if(!$target.data(idKey)){
            $target.data(idKey, _.uniqueId());
        }
    });

    return $el;
}

/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function getElementId($el){
    var idKey = 'auf-id';
    return $el.data(idKey);
}

/**
 * compose a function from one module to another and maintain original module scope.
 * @param  {object} intoScope the scope you wish to compose the method into
 * @param  {object} fromScope the scope you wish to retrieve the method from
 * @param  {string} func      the function name, as a string
 * @return {undefined}
 *
 * @example
 * compose(this, fooModule, 'fooModuleMethod');
 */
/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function compose (intoScope, fromScope, func) {
    intoScope[func] = _.bind(fromScope[func], fromScope);
}

/**
 * Identical to compose, but takes list of n-function names.
 * @param  {object} intoScope the scope you wish to compose the method into
 * @param  {object} fromScope the scope you wish to retrieve the method from
 * @return {undefined}
 *
 * @example
 * composeAll(
 *     this,
 *     fooModule,
 *     'fooModuleMethod1',
 *     'fooModuleMethod2',
 *     'fooModuleMethod3'
 * );
 */
/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function composeAll(intoScope, fromScope) {
    var args;

    function iterator(func, i, funcs) {
        compose(intoScope, fromScope, func);
    }

    funcs = Array.prototype.slice.call(arguments, 2);

    _.each(funcs, iterator);
}

/**
 * normalizes an integer against a min and max
 * @param  {int} value the value you wish to normalize
 * @param  {int} min   the value's min limit
 * @param  {int} max   the value's max limit
 * @return {int}       normalized integer
 */
/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function normalizeInt(value, min, max) {
    // Ternary is faster than Math.min|max
    value = value > max ? max : value;
    value = value < min ? min : value;

    return value;
}

/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function sortArrayAscending(a, b) {
    // see: http://bit.ly/1c0cPTU
    return a - b;
}

/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function mixins(Source, Destination){
    names = Array.prototype.slice.call(arguments, 2);
    _.each(names, function(name){
        Destination.prototype[name] = function(){
            return Source.prototype[name].apply(this, arguments);
        };
    });
}

// Taken directly from Marionette.
// For slicing `arguments` in functions
var protoSlice = Array.prototype.slice;
/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function slice(args) {
  return protoSlice.call(args);
}

/**
 * #TODO add description
 *
 * @function
 * @memberOf built.core.utils.helpers
 * @return {$element}       jquery element
 *
 */
function throwError(message, name) {
  var error = new Error(message);
  error.name = name || 'Error';
  throw error;
}

function isMobile(){
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

// Exports

exports.compose                    = compose;
exports.composeAll                 = composeAll;
exports.normalizeInt               = normalizeInt;
exports.sortArrayAscending         = sortArrayAscending;
exports.sortArrayAscending         = sortArrayAscending;
exports.registerElement            = registerElement;
exports.getElementId               = getElementId;
exports.mixins                     = mixins;
exports.MSIEVersion                = _MSIEVersion();
exports.isMSIE                     = exports.MSIEVersion > -1 ? true : false;
exports.slice                      = slice;
exports.throwError                 = throwError;
exports.isMobile                   = isMobile;

});
