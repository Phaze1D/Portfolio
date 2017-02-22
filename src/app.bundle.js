/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "src/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toggleDials = function toggleDials(event) {
  var dialer = document.getElementById('share-dialer');
  if (dialer.classList.contains('show')) {
    dialer.classList.remove('show');
    dialer.classList.add('hide');
  } else {
    dialer.classList.add('show');
    dialer.classList.remove('hide');
  }
};

var initDialer = function initDialer() {
  var dButton = document.getElementById('share-dialer-button');
  dButton.addEventListener('click', toggleDials);
};

exports.initDialer = initDialer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toggleDrawer = function toggleDrawer(event) {
  var drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
};

var initDrawer = function initDrawer() {
  var burgers = document.getElementsByClassName('burger');

  for (var i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener('click', toggleDrawer);
  }

  if (window.outerWidth > 970) {
    document.getElementById('drawer').classList.add('open');
  }
};

exports.initDrawer = initDrawer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rippleAnimation = function rippleAnimation(color, event) {
	var posX = event.currentTarget.offsetTop;
	var posY = event.currentTarget.offsetLeft;
	var buttonWidth = event.currentTarget.clientWidth;
	var buttonHeight = event.currentTarget.clientHeight;

	var child = event.currentTarget.getElementsByClassName('ripple')[0];
	if (child) event.currentTarget.removeChild(child);

	var span = document.createElement("span");
	span.className = "ripple";
	event.currentTarget.prepend(span);

	if (buttonWidth >= buttonHeight) {
		buttonHeight = buttonWidth;
	} else {
		buttonWidth = buttonHeight;
	}

	var x = event.offsetX - buttonWidth / 2;
	var y = event.offsetY - buttonHeight / 2;

	span.style.width = buttonWidth + "px";
	span.style.height = buttonHeight + "px";
	span.style.top = y + "px";
	span.style.left = x + "px";
	span.style.backgroundColor = color;
	span.className = "ripple rippleEffect";
};

var rippleWrapper = function rippleWrapper() {
	var wrapper = document.createElement("div");
	wrapper.className = "ripple-wrapper";
	return wrapper;
};

var initRipple = function initRipple() {
	var rippleParents = document.getElementsByClassName('has-ripple');

	for (var i = 0; i < rippleParents.length; i++) {
		var color = rippleParents[i].getAttribute('data-ripple-color');
		rippleParents[i].prepend(rippleWrapper());
		rippleParents[i].addEventListener('click', rippleAnimation.bind(undefined, color));
	}
};

exports.initRipple = initRipple;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); }\n\nbody {\n  background-image: url(" + __webpack_require__(6) + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  min-height: 100vh;\n  margin: 0;\n  color: white;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 16px; }\n\nheader {\n  display: flex;\n  align-items: center;\n  text-align: right;\n  border-bottom: 1px solid white;\n  padding: 0 16px 0; }\n\nh1, h2, h3, h4, h5 {\n  font-weight: 500; }\n\nfooter {\n  border-top: 1px solid white; }\n\naside {\n  min-height: 100%;\n  width: 256px; }\n\nmain {\n  display: flex;\n  min-height: calc(100vh - 92px); }\n\nbutton {\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  user-select: none; }\n\nsection {\n  padding: 0 16px; }\n\na {\n  text-decoration: none; }\n\n.flex-grid {\n  display: flex;\n  flex-wrap: wrap; }\n\n.content {\n  flex-grow: 1; }\n\n.overlay {\n  background-color: rgba(0, 0, 0, 0.65);\n  width: 100%;\n  min-height: 100%;\n  padding-bottom: 80px; }\n\n.date {\n  font-family: 'Roboto', sans-serif; }\n\n.menu {\n  margin: 0;\n  list-style: none;\n  padding: 0; }\n\n.menu-item {\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  padding: 16px 10px 16px 16px;\n  cursor: pointer; }\n  .menu-item i {\n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n    font-size: 22px;\n    width: 24px;\n    height: 24px; }\n  .menu-item:hover {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .menu-item.sub {\n    padding: 10px 10px 10px 32px; }\n\n.has-ripple {\n  position: relative;\n  perspective: 1px;\n  overflow: hidden; }\n\n.ripple {\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  transform: scale(0);\n  position: absolute;\n  opacity: 1;\n  pointer-events: none;\n  overflow: hidden; }\n\n.ripple-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n\n.rippleEffect {\n  animation: rippleDrop .5s linear; }\n\n@keyframes rippleDrop {\n  100% {\n    transform: scale(2);\n    opacity: 0; } }\n\n.fab {\n  height: 100%;\n  width: 100%;\n  border-radius: 50px;\n  background-color: white;\n  box-shadow: 0px 0px 5px 1px black; }\n  .fab i {\n    font-size: 22px;\n    color: #2979FF; }\n\n.fab-dialer {\n  position: fixed;\n  height: 58px;\n  width: 58px;\n  right: 34px;\n  bottom: 34px;\n  transition: all .25s linear; }\n\n.fab-dial {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: calc(50% - 20px);\n  border-radius: 50px;\n  background-color: white;\n  box-shadow: 0px 0px 5px 1px black;\n  transform: scale(0);\n  transition: transform 0.14286s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  .fab-dial i {\n    vertical-align: middle;\n    font-size: 20px; }\n  .fab-dial img {\n    width: 24px;\n    height: 24px; }\n  .fab-dial[data-dial=\"1\"] {\n    top: -48px; }\n  .fab-dial[data-dial=\"2\"] {\n    top: -96px; }\n  .fab-dial[data-dial=\"3\"] {\n    top: -144px; }\n\n.fa-linkedin-square {\n  color: #007bb6; }\n\n.show .fab-dial {\n  transform: scale(1); }\n  .show .fab-dial[data-dial=\"1\"] {\n    transition-delay: -127ms; }\n  .show .fab-dial[data-dial=\"2\"] {\n    transition-delay: -62ms; }\n  .show .fab-dial[data-dial=\"3\"] {\n    transition-delay: 3ms; }\n\n.hide .fab-dial {\n  transform: scale(0); }\n  .hide .fab-dial[data-dial=\"1\"] {\n    transition-delay: 130ms; }\n  .hide .fab-dial[data-dial=\"2\"] {\n    transition-delay: 65ms; }\n  .hide .fab-dial[data-dial=\"3\"] {\n    transition-delay: 0ms; }\n\n@media (max-width: 750px) {\n  .fab-dialer {\n    height: 56px;\n    width: 56px;\n    right: 24px;\n    bottom: 24px; }\n  .fab-dial {\n    width: 34px;\n    height: 34px;\n    left: calc(50% - 17px); } }\n\n@media (max-width: 580px) {\n  .fab-dialer {\n    right: 14px;\n    bottom: 14px; } }\n\n.card {\n  background-color: rgba(0, 0, 0, 0.5);\n  max-width: 400px;\n  border: 1px solid white;\n  border-radius: 3px;\n  overflow: hidden; }\n  .card .bottom {\n    padding: 0 16px 0; }\n  .card img {\n    max-width: 100%; }\n  .card p {\n    text-align: justify; }\n  .card h3 {\n    font-size: 24px;\n    margin: 15px 0 0; }\n  .card h5 {\n    margin: 2px 0 16px;\n    font-size: 12px;\n    color: #bdbdbd; }\n\n.tags {\n  list-style: none;\n  padding: 0 16px;\n  margin: 16px 0 16px; }\n  .tags li {\n    font-size: 13px;\n    font-weight: 500;\n    display: inline-block;\n    background-color: #ff6d00;\n    padding: 5px 8px;\n    margin: 5px;\n    border-radius: 2px; }\n\n@media screen and (orientation: landscape) and (max-width: 970px) {\n  .card {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 600px;\n    background-color: rgba(0, 0, 0, 0.7); }\n    .card .bottom {\n      width: 70%;\n      flex-shrink: 0;\n      order: 0; }\n    .card p {\n      max-width: 100%;\n      overflow: hidden;\n      position: relative;\n      font-size: 16px;\n      line-height: 18px;\n      max-height: 90px;\n      text-align: justify;\n      margin-right: -1em;\n      padding-right: 1em; }\n      .card p:before {\n        content: '...';\n        position: absolute;\n        font-size: 1.3em;\n        right: 5px;\n        bottom: 2px; }\n      .card p:after {\n        content: '';\n        position: absolute;\n        right: 0;\n        width: 1em;\n        height: 1em;\n        margin-top: 0.2em;\n        background: black; }\n    .card picture {\n      padding: 16px 16px 16px 0;\n      order: 1;\n      max-width: 30%; }\n    .card .tags {\n      text-align: right;\n      flex-grow: 1;\n      order: 2;\n      margin: 0 0 16px; } }\n\n.burger {\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: white;\n  border-radius: 50px;\n  width: 56px;\n  height: 56px;\n  outline: none; }\n  .burger i {\n    vertical-align: middle; }\n\n#drawer {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-left: -256px;\n  max-height: 100vh; }\n  #drawer.open {\n    margin-left: 0; }\n  #drawer .burger {\n    display: none; }\n\n#titles {\n  padding: 10px 0;\n  flex-grow: 1; }\n  #titles h1 {\n    margin: 5px; }\n  #titles h4 {\n    margin: 5px; }\n\n@media (max-width: 970px) {\n  #drawer {\n    position: fixed;\n    left: 0;\n    top: 0;\n    margin: 0;\n    z-index: 100;\n    transform: translate(-100%, 0);\n    background-color: rgba(0, 0, 0, 0.95);\n    box-shadow: 0px 0px 5px 1px black; }\n    #drawer.open {\n      transform: translate(0, 0); }\n    #drawer .burger {\n      display: block; } }\n\n@media (max-width: 580px) {\n  #titles h1 {\n    font-size: 22px; }\n  #titles h4 {\n    font-size: 14px; } }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/beauty.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drawer = __webpack_require__(1);

var _ripple = __webpack_require__(2);

var _dialer = __webpack_require__(0);

__webpack_require__(3);

document.addEventListener("DOMContentLoaded", function (event) {
    (0, _drawer.initDrawer)();
    (0, _ripple.initRipple)();
    (0, _dialer.initDialer)();
});

/***/ })
/******/ ]);