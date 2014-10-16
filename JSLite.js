(function(window, undefined) {
	"use strict";
	var ess,emptyArray = [],slice = emptyArray.slice,
		WCJ = (function(){
		var WCJ = function( selector ) {
		    return new WCJ.fn.init(selector);
		};
		WCJ.fn = WCJ.prototype = {
			init:function( selector ){
				var dom = (function(){
			        var found;
			        return (document && /^#([\w-]+)$/.test(selector))?
			        ((found = document.getElementById(RegExp.$1)) ? [found] : emptyArray ):
				    slice.call(
					    /^\.([\w-]+)$/.test(selector) ? document.getElementsByClassName(RegExp.$1) :
					    /^[\w-]+$/.test(selector) ? document.getElementsByTagName(selector) :
					    document.querySelectorAll(selector)
				    );
				})();
				dom = dom || emptyArray;
				dom.__proto__ = WCJ.fn.init.prototype;
				dom.selector = selector || '';
				return dom;
			}
		}
		WCJ.fn.init.prototype = WCJ.fn;
        WCJ.extend = WCJ.fn.extend = function () {
            var options, name, src, copy,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
            //处理深拷贝的情况
            if (typeof (target) === "boolean") { 
                deep = target;
                target = arguments[1] || {};
                i = 2;
            }
            //处理时，目标是一个字符串或（深拷贝可能的情况下）的东西
            if (typeof (target) !== "object" && !WCJ.isFunction(target)) {
                target = {};
            }
            //扩展WCJ的本身，如果只有一个参数传递
            if (length === i) {
                target = this;
                --i;
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        };
		return WCJ;
	})();

	WCJ.extend()

	WCJ.fn.extend()

	window.WCJ = window.$$ = WCJ;
})(window);