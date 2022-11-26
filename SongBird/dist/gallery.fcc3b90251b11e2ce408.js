/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/android-icon-192x192.png";

/***/ }),

/***/ 407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-114x114.png";

/***/ }),

/***/ 926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-120x120.png";

/***/ }),

/***/ 637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-144x144.png";

/***/ }),

/***/ 864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-152x152.png";

/***/ }),

/***/ 866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-180x180.png";

/***/ }),

/***/ 91:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-57x57.png";

/***/ }),

/***/ 793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-60x60.png";

/***/ }),

/***/ 310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-72x72.png";

/***/ }),

/***/ 183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/apple-icon-76x76.png";

/***/ }),

/***/ 606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-16x16.png";

/***/ }),

/***/ 844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-32x32.png";

/***/ }),

/***/ 357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/favicon-96x96.png";

/***/ }),

/***/ 264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/manifest.json";

/***/ }),

/***/ 235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/ms-icon-144x144.png";

/***/ }),

/***/ 114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/iconmonstr-github-1.svg";

/***/ }),

/***/ 389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/mute.svg";

/***/ }),

/***/ 781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/pause.svg";

/***/ }),

/***/ 614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/rs_school_js.svg";

/***/ }),

/***/ 19:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/start.svg";

/***/ }),

/***/ 109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/volume.svg";

/***/ }),

/***/ 771:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/incognito.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			121: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ../node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(370);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./gallery.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(91), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(793), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(310), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(183), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(407), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(926), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(637), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(864), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(866), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(981), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(844), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(357), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(606), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(264), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(235), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(771), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(19), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(781), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(109), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(389), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(114), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(614), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = getUrl_default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = getUrl_default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = getUrl_default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = getUrl_default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = getUrl_default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = getUrl_default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = getUrl_default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = getUrl_default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = getUrl_default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = getUrl_default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = getUrl_default()(___HTML_LOADER_IMPORT_21___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Gallery</title> <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"> <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"> <meta name=\"msapplication-TileColor\" content=\"#ffffff\"> <meta name=\"msapplication-TileImage\" content=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"> <meta name=\"theme-color\" content=\"#ffffff\"> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__wrapper\"> <h1 class=\"header__logo\">Songs<span>Bird</span></h1> <div class=\"header__row\"> <a href=\"gamePage.html\" class=\"header__button\">⇦ Почати гру</a> <a href=\"index.html\" class=\"header__button\">На главную ⇨</a> </div> </div> </div> </header> <article class=\"gallery\"> <div class=\"container\"> <ul class=\"gallery__mode\"> <li class=\"gallery__button button\" value=\"1\">Розминка</li> <li class=\"gallery__button button\" value=\"2\">Гороб'їні</li> <li class=\"gallery__button button\" value=\"3\">Лісові птахи</li> <li class=\"gallery__button button\" value=\"4\">Співучі птахи</li> <li class=\"gallery__button button\" value=\"5\">Хижі птахи</li> <li class=\"gallery__button button\" value=\"6\">Морські птахи</li> </ul> <ul class=\"gallery__row\"> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> <li class=\"gallery__item\"> <div class=\"gallery__about-img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"incognito\"></div> <div class=\"gallery__about-info\"> <div class=\"gallery__about-name\">???</div> <hr class=\"gallery__about-divider\"> <div class=\"gallery__about-subname\">???</div> <hr class=\"gallery__about-divider\"> </div> <div class=\"player gallery__player\" id=\"answer-player\"> <audio class=\"gallery__question-audio\" id=\"answer-audio\" src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"></audio> <input class=\"player__duration\" id=\"answer-player-duration\" type=\"range\" min=\"0\" max=\"100\" value=\"0\"> <div class=\"player__time\"> <span class=\"player__time-current\" id=\"answer-time-current\">00:00</span> <span class=\"player__time-total\" id=\"answer-time-total\">00:00</span> </div> <div class=\"player__start\" id=\"answer-player-start\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"start\"> </div> <div class=\"player__pause\" id=\"answer-player-pause\"><img class=\"player__controls-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"pause\"> </div> <img class=\"player__volume-true\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"volume\"> <img class=\"player__volume-false\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"mute\"> <input class=\"player__volume\" id=\"answer-player-volume\" type=\"range\" min=\"0\" max=\"100\" value=\"50\"> </div> <div class=\"gallery__about-descr\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem laborum ex vero neque officiis veniam voluptate tempore omnis? Nisi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eius repudiandae obcaecati excepturi hic qui sapiente deleniti non deserunt error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, mollitia? </div> </li> </ul> </div> </article> <footer class=\"footer\"> <div class=\"container\"> <div class=\"footer__row\"> <a class=\"footer__github\" href=\"https://github.com/EugeneBurkovskiy\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"GitHub\"></a> <span class=\"footer__year\">2022</span> <a href=\"https://rs.school/\" class=\"footer__img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"RS School\"> </a> </div> </div> </footer> </body> </html>";
// Exports
/* harmony default export */ const gallery = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./modules/data/birds.js
var birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: "\u0412\u043E\u0440\u043E\u043D - \u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u043F\u0442\u0430\u0445. \u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0442\u0456\u043B\u0430 \u0434\u043E\u0441\u044F\u0433\u0430\u0454 70 \u0441\u0430\u043D\u0442\u0438\u043C\u0435\u0442\u0440\u0456\u0432, \u0440\u043E\u0437\u043C\u0430\u0445 \u043A\u0440\u0438\u043B \u2013 \u0434\u043E \u043F\u0456\u0432\u0442\u043E\u0440\u0430 \u043C\u0435\u0442\u0440\u0430. \u0412\u043E\u0440\u043E\u043D\u0438 \u043D\u0430\u0441\u0435\u043B\u044F\u044E\u0442\u044C \u043E\u043A\u043E\u043B\u0438\u0446\u0456 \u0422\u0430\u0443\u0435\u0440\u0430. \u0412 \u0410\u043D\u0433\u043B\u0456\u0457 \u0456\u0441\u043D\u0443\u0454 \u043F\u043E\u0432\u0456\u0440'\u044F, \u0449\u043E \u0432 \u0434\u0435\u043D\u044C, \u043A\u043E\u043B\u0438 \u0447\u043E\u0440\u043D\u0456 \u0432\u043E\u0440\u043E\u043D\u0438 \u0432\u0456\u0434\u043B\u0435\u0442\u044F\u0442\u044C \u0432\u0456\u0434 \u0422\u0430\u0443\u0435\u0440\u0430, \u043C\u043E\u043D\u0430\u0440\u0445\u0456\u044F \u0432\u043F\u0430\u0434\u0435.",
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавель',
  species: 'Grus grus',
  description: 'Звуки, що видаються журавлем, схожі на дзвінке "кур-ли - кур-ли". Журавлі найчастіше співають дуетом – один птах починає заспівати зі складу «кур», а другий підхоплює «ли». Якщо птах співає один, він видає лише звук «кур».',
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ластівка',
  species: 'Delichon urbicum',
  description: 'Для ластівок характерно тихе щебетання. Пісні ластівок не змовкають протягом усього літа. Дослідники розрізняють у птахів до 6 звуків, що щебечуть: «віт», «ві-віт», «чівіт», «чиривіт» і т.п. Ластівки люблять співати дуетом.',
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – непримітний птах, відомий завдяки своєму голосу. Пісня козодоя звучить як монотонна трель схожа на торохтіння мотоцикла. Таке деренчання чутно від заходу сонця до світанку, його тональність, частота і гучність змінюються.',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Зозуля',
  species: 'Cuculus canorus',
  description: 'Зозулю назвали так через особливості її пісень. Дзвінке «ку-ку» не сплутати ні з яким іншим птахом. Зозулі не будують гнізда, їхнє потомство вирощують інші види пернатих, яким зозулі підкидають свої яйця.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синиця',
  species: 'Parus major',
  description: 'У щебетанні синиць розрізняють понад 40 різних звукових поєднань. Співають вони практично цілий рік, трохи затихаючи лише взимку. Синиці справжні санітари лісу. Одна пара синиць у період гніздування оберігає від шкідників десятки дерев.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Горобець',
  species: 'Passer domesticus',
  description: 'Горобці є найвідомішими і впізнаваними пернатими. Їх легко впізнати по строкатому оперенню і задерикуватому цвіріньканню. Горобці відносяться до синатропного вигляду - вони селяться поблизу людського житла.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грак',
  species: 'Corvus frugilegus',
  description: 'Граки дуже розумні та кмітливі птахи. За допомогою дзьоба вони створюють і використовують найпростіші знаряддя. У граків розвинений рефлекс звуки трактора. Почувши «тарахтіння», вони летять на звук – трактор оре землю, отже, тут багато корму.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: "\u0421\u043B\u043E\u0432\u043E \xAB\u0433\u0430\u043B\u043A\u0430\xBB \u043F\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0456\u0437 \u0441\u0442\u0430\u0440\u043E\u0441\u043B\u043E\u0432'\u044F\u043D\u0441\u044C\u043A\u043E\u0457 \u043C\u043E\u0432\u0438 \u0442\u0430 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A \xAB\u0447\u043E\u0440\u043D\u0430\xBB. \u0426\u0438\u043C \u0441\u043B\u043E\u0432\u043E\u043C \u0447\u0430\u0441\u0442\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u044E\u0442\u044C \u0432\u043E\u0440\u043E\u043D\u0456\u0432 \u0447\u0438 \u0456\u043D\u0448\u0438\u0445 \u0447\u043E\u0440\u043D\u0438\u0445 \u043F\u0442\u0430\u0445\u0456\u0432. \u041B\u0430\u0442\u0438\u043D\u0441\u044C\u043A\u0443 \u043D\u0430\u0437\u0432\u0443 \u0433\u0430\u043B\u043A\u0438 monedula \u043F\u043E\u0432'\u044F\u0437\u0443\u044E\u0442\u044C \u0437\u0456 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u043C\u043E\u043D\u0435\u0442\u0430 \u0437\u0430 \u043B\u044E\u0431\u043E\u0432 \u043F\u0442\u0430\u0445\u0430 \u0434\u043E \u0431\u043B\u0438\u0441\u043A\u0443\u0447\u0438\u0445 \u0456 \u044F\u0441\u043A\u0440\u0430\u0432\u0438\u0445 \u0440\u0435\u0447\u0435\u0439.",
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Співучий дрізд',
  species: 'Turdus philomelos',
  description: "\u0414\u0440\u0456\u0437\u0434 \u2014 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0439 \u0441\u043F\u0456\u0432\u0430\u043A \u0456\u0437 \u0437\u0430\u0433\u043E\u043D\u0443 \u0433\u043E\u0440\u043E\u0431'\u0457\u043D\u0438\u0445. \u041F\u0456\u0441\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0437 \u0433\u0430\u0440\u043D\u0438\u0445 \u0437\u0432\u0443\u0447\u043D\u0438\u0445 \u0441\u0432\u0438\u0441\u0442\u0456\u0432 \u0442\u0430 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0442\u0440\u0435\u043B\u0456\u0432. \u041D\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0435 \u0457\u0457 \u043C\u043E\u0436\u043D\u0430 \u043F\u043E\u0447\u0443\u0442\u0438 \u0432 \u0440\u0430\u043D\u043A\u043E\u0432\u0438\u0439 \u0442\u0430 \u0432\u0435\u0447\u0456\u0440\u043D\u0456\u0439 \u0447\u0430\u0441. \u0421\u043F\u0456\u0432\u0430\u044E\u0442\u044C \u0434\u0440\u043E\u0437\u0434\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0443\u0441\u044C\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443 \u0433\u043D\u0456\u0437\u0434\u0443\u0432\u0430\u043D\u043D\u044F.",
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока дуже працьовитий птах. Вона будує до восьми гнізд, а потім вибирає з них найкраще. Вхід у гніздо сорок завжди звернений на південь, щоб у житло було тепліше. Сороки є єдиними птахами, які впізнають себе у дзеркалі.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Коли сойка хвилюється, чубчик на її голові скуштує. Птах намагається створити жахливе видовище. Сойки вміють імітувати голоси інших птахів, тварин та звуки, які створює людина. На зиму вони роблять великі запаси жолудів та горіхів.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: "\u0423 \u0434\u0438\u043A\u0456\u0439 \u043F\u0440\u0438\u0440\u043E\u0434\u0456 \u043D\u0430\u043B\u0456\u0447\u0443\u0454\u0442\u044C\u0441\u044F 450 \u0432\u0438\u0434\u0456\u0432 \u0437\u044F\u0431\u043B\u0438\u043A\u0456\u0432. \u0412\u0437\u0438\u043C\u043A\u0443 \u0437\u044F\u0431\u043B\u0438\u043A\u0438 \u0432\u0435\u0434\u0443\u0442\u044C \u0437\u0433\u0440\u0430\u0439\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0436\u0438\u0442\u0442\u044F. \u0406\u043D\u043E\u0434\u0456 \u0443 \u0457\u0445\u043D\u0456\u0445 \u0441\u0456\u043C'\u044F\u0445 \u043C\u043E\u0436\u043D\u0430 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0433\u043E\u0440\u043E\u0431\u0446\u0456\u0432. \u0421\u043F\u0456\u0432\u0430\u044E\u0442\u044C \u0437\u044F\u0431\u043B\u0438\u043A\u0438 \u043D\u0430\u0432\u0435\u0441\u043D\u0456, \u0437 \u043D\u0430\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0448\u043B\u044E\u0431\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443. \u0407\u0445 \u0441\u043F\u0456\u0432 \u2013 \u0446\u0435 \u0437\u0430\u043B\u0438\u0432\u043D\u0456 \u0431\u0430\u0433\u0430\u0442\u043E\u0445\u0432\u0438\u043B\u0438\u043D\u043D\u0456 \u0440\u0443\u043B\u0430\u0434\u0438.",
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клест',
  species: 'Loxia curvirostra',
  description: 'Клестів називають «різдвяними» птахами. У природних умовах вони дають потомство взимку – у січні. Ці птахи утеплюють свої гнізда мохом та шерстю тварин, тому пташенятам не холодно. У пошуках шишок клісти можуть відлітати за 3500 км. від гнізда.',
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлиця',
  species: 'Streptopelia turtur',
  description: 'Горлиця мешкає у змішаних та широколистяних лісах, а також у міських парках та селищах. Птахи часто вибирають місця життя поряд із людиною і легко звикають до людей. Завдяки мелодійному приємному співу горлиць часто розводять у домашніх умовах.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – помітний і галасливий птах, часто живе поруч із людиною. З середини січня до кінця червня можна почути «барабанний дріб» дятлів – трель від вібрації гілок під швидкими ударами дзьоба птаха. У хорошу погоду дріб чути у радіусі 1,5 км.',
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоди вважають за краще жити на відкритих ландшафтах з окремими деревами або гаями. Найбільш зручними для птиці є лісостеп та савана. Удод може вибирати місця проживання поруч із людиною: пасовища, виноградники, фруктові сади.',
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можна побачити практично у кожному куточку планети. Вони живуть як у лісових зонах, і на відкритих місцевостях. Живуть стрижі великими зграями. Великі колонії цих птахів можна побачити у містах чи прибережних скелях.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жайворонок',
  species: 'Alauda arvensis',
  description: 'Жайворонки - перелітні птахи. З початку вересня вони відлітають на південь. Повертаються вони на початку березня, незалежно від того, зійшов сніг чи ні. Після прильоту жайворонків визначали настання весни і пору, коли час орати землю.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: "\u0421\u043E\u043B\u043E\u0432'\u0457 \u0441\u043F\u0456\u0432\u0430\u044E\u0442\u044C \u0437 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0442\u0440\u0430\u0432\u043D\u044F \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u043B\u0456\u0442\u0430. \u041A\u043E\u0436\u043D\u0430 \u043F\u0456\u0441\u043D\u044F \u0441\u043E\u043B\u043E\u0432\u0435\u0439\u043A\u0430 \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 12 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432, \u0449\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u044E\u0442\u044C\u0441\u044F, \u044F\u043A\u0456 \u0449\u0435 \u043D\u0430\u0437\u0438\u0432\u0430\u044E\u0442\u044C \u043A\u043E\u043B\u0456\u043D\u0430\u043C\u0438. \u041E\u043A\u0440\u0456\u043C \u0432\u043B\u0430\u0441\u043D\u0438\u0445 \u0442\u0440\u0435\u043B\u0456\u0432, \u0441\u043E\u043B\u043E\u0432'\u0457 \u043B\u0435\u0433\u043A\u043E \u0456 \u0434\u043E\u0431\u0440\u0435 \u043F\u0435\u0440\u0435\u0439\u043C\u0430\u044E\u0442\u044C \u0441\u043F\u0456\u0432\u0438 \u0456\u043D\u0448\u0438\u0445 \u043F\u0442\u0430\u0445\u0456\u0432.",
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Шпак',
  species: 'Sturnus vulgaris',
  description: 'Шпаки - перелітні птахи. Синхронний переліт великих зграй шпаків називається мурмурацією. Це гарне явище, що зачаровує, - безліч птахів ніби танцюють у повітрі, утворюючи хитромудрі фігури, які зменшуються і збільшуються в небі.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Іволга',
  species: 'Oriolus oriolus',
  description: 'Мелодічність голосу іволги порівнюють із звучанням флейти. Людині складно розглянути іволгу, оскільки вона мешкає високо на деревах. Іволга не тільки дуже гарний, але й корисний птах. Вона знищує отруйних гусениць, яких не поїдають інші птахи.',
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Сопілка',
  species: 'Bombycilla garrulus',
  description: 'У сопілці дуже чіпкі кігтики, що допомагає птаху утримуватися на гілках і скльовувати ягоди, які найважче дістати. У період догляду самець пропонує самці ягоду або інше частування. Якщо самка його приймає, птахи створюють пару.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щегли співають красиво та мелодійно. І в природі, і в неволі вони щебечуть майже цілий рік. У співі щегла розрізняють понад 20 переливчастих трелів. Щегли звикають до людей і навіть можуть повернутися до господаря після того, як їх випустили на волю',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орел',
  species: 'Aquila nipalensis',
  description: 'У давнину орел був символом сонця. Орли часто ширяють над землею, при цьому швидкість їх переміщення може досягати 240 км/год. Ілюзія повільного руху відбувається через висоту польоту – понад 700 метрів',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуни – великі хижаки, заввишки вони досягають близько півметра, а вага дорослих особин сягає 1 кг. Крила вузькі та довгі, їх розмах становить 1,5 м. Коршуни часто гніздяться великими зграями і навіть утворюють великі колонії.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: "\u041B\u0443\u043D\u044C \u2013 \u0446\u0435 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u0441\u043E\u043A\u0456\u043B. \u0425\u0430\u0440\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0434\u0435\u0431\u0456\u043B\u044C\u0448\u043E\u0433\u043E \u043C\u0438\u0448\u043E\u043F\u043E\u0434\u0456\u0431\u043D\u0438\u043C\u0438 \u0433\u0440\u0438\u0437\u0443\u043D\u0430\u043C\u0438, \u043E\u0441\u043D\u043E\u0432\u0430 \u0439\u043E\u0433\u043E \u0440\u0430\u0446\u0456\u043E\u043D\u0443 \u2013 \u043F\u043E\u043B\u0456\u0432\u043A\u0438, \u0445\u043E\u043C'\u044F\u043A\u0438, \u043C\u0438\u0448\u0456. \u041E\u043F\u0435\u0440\u0435\u043D\u043D\u044F \u043B\u0443\u043D\u044F \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043F\u043E\u043F\u0435\u043B\u044F\u0441\u0442\u043E-\u0441\u0456\u0440\u0438\u043C. \u0417 \u0442\u0430\u043A\u0438\u043C \u043F\u0442\u0430\u0445\u043E\u043C \u043F\u043E\u0432'\u044F\u0437\u0430\u043D\u0435 \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \xAB\u0441\u0438\u0432\u0438\u0439, \u044F\u043A \u043B\u0443\u043D\u044C\xBB.",
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокіл',
  species: 'Falco peregrinus',
  description: 'Латинська назва сокола Falco походить від слова серп через серповидну форму крил. Довгі та широкі крила дозволяють соколу високо підніматися у небо та вільно парити. Швидкість польоту сокола сягає 280-320 кілометрів на годину.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Яструб',
  species: 'Accipiter gentilis',
  description: "\u0414\u043B\u044F \u0432\u0441\u0456\u0445 \u044F\u0441\u0442\u0440\u0443\u0431\u0456\u0432 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0456 \u0448\u0438\u0440\u043E\u043A\u0456 \u0442\u0430 \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u043A\u0440\u0438\u043B\u0430. \u0429\u0435 \u043E\u0434\u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u0442\u043D\u0430 \u043E\u0437\u043D\u0430\u043A\u0430 \u2013 \u0431\u0456\u043B\u0456 \xAB\u0431\u0440\u043E\u0432\u0438\xBB \u043D\u0430\u0434 \u043E\u0447\u0438\u043C\u0430. \u0421\u043B\u043E\u0432'\u044F\u043D\u0441\u044C\u043A\u0456 \u0434\u0440\u0443\u0436\u0438\u043D\u043D\u0438\u043A\u0438 \u0440\u043E\u0437\u043C\u0456\u0449\u0443\u0432\u0430\u043B\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u044F\u0441\u0442\u0440\u0443\u0431\u0430 \u043D\u0430 \u0441\u0432\u043E\u0457\u0445 \u043F\u0440\u0430\u043F\u043E\u0440\u0430\u0445, \u044F\u043A \u0441\u0438\u043C\u0432\u043E\u043B \u0432\u0456\u0434\u0432\u0430\u0433\u0438, \u043C\u043E\u0433\u0443\u0442\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0431\u0435\u0437\u0436\u0430\u043B\u0456\u0441\u043D\u043E\u0441\u0442\u0456 \u0434\u043E \u0432\u043E\u0440\u043E\u0433\u0456\u0432.",
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Пугач',
  species: 'Bubo bubo',
  description: 'Політ пугача безшумний, зір дуже гострий. Ці особливості роблять птаха неперевершеним нічним мисливцем. У пугача немає природних ворогів, жоден звір не полює на дорослих птахів. А ось на пташенят нападають лисиці та вовки.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - найбільший літаючий птах у світі. Розмах крил сягає три з половиною, вага – десять кілограмів. Більшість життя альбатроси проводять у повітрі, покриваючи над океанськими просторами величезні відстані',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особливістю голубоногої олуші є не лише насичений яскраво-синій колір лапок, але ще й той факт, що вони дуже теплі. У той час як інші види птахів гріють кладки своїм тілом, блакитнога олуша робить це за допомогою лапок',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревісник',
  species: 'Puffinus griseus',
  description: "\u0420\u043E\u0437\u043C\u0456\u0440\u0438 \u0431\u0443\u0440\u0435\u0432\u0456\u0441\u043D\u0438\u043A\u043E\u0432\u0438\u0445 \u0440\u0456\u0437\u043D\u0456. \u041D\u0430\u0439\u043C\u0435\u043D\u0448\u0456 \u0437 \u043D\u0438\u0445 \u0443 \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0434\u043E 25 \u0441\u043C, \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0456 - \u0434\u043E 1 \u043C, \u043F\u0440\u0438 \u0440\u043E\u0437\u043C\u0430\u0445\u0443 \u043A\u0440\u0438\u043B \u0431\u043B\u0438\u0437\u044C\u043A\u043E 2 \u043C. \u0406\u0441\u043D\u0443\u0454 \u043F\u043E\u0432\u0456\u0440'\u044F, \u0449\u043E \u043F\u043E\u044F\u0432\u0430 \u0431\u0443\u0440\u0435\u0432\u0456\u0441\u043D\u0438\u043A\u0430 \u0432 \u043F\u043E\u0432\u0456\u0442\u0440\u0456 \u0432\u0456\u0449\u0443\u0454 \u0431\u0443\u0440\u044E, \u043F\u0440\u043E \u0449\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u0441\u0430\u043C\u0430 \u043D\u0430\u0437\u0432\u0430 \u043F\u0442\u0430\u0445\u0430.",
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пелікан',
  species: 'Pelecanus',
  description: 'Пелікани - жителі морів та річок. Ходять вони незграбно, але добре літають та плавають. Харчуються здебільшого рибою, влаштовують колективні полювання — вишикувавшись півколом ляскають по воді крилами і дзьобами і витісняють налякану рибу на мілководді.',
  image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пінгвін',
  species: 'Aptenodytes forsteri',
  description: 'Самець імператорського пінгвіна досягає зросту 130 см, його маса може наближатися до 50 кг. З усіх сучасних пінгвінів цей вид найбільший. Харчування пінгвіна складається з риби, кальмарів та криля. Полюють птахи в океані великими групами.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: "\u0427\u0430\u0439\u043A\u0438 \u043D\u0430\u0441\u0435\u043B\u044F\u044E\u0442\u044C \u0431\u0435\u0440\u0435\u0433\u0438 \u043C\u043E\u0440\u0456\u0432, \u043E\u0437\u0435\u0440, \u0440\u0456\u0447\u043E\u043A, \u0432\u043E\u0434\u043E\u0439\u043C\u0438\u0449, \u0431\u043E\u043B\u0456\u0442, \u0447\u0430\u0441\u0442\u043E \u0433\u043D\u0456\u0437\u0434\u044F\u0442\u044C\u0441\u044F \u043D\u0430 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445. \u0417 \u043A\u0456\u043D\u0446\u044F \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0456\u0442\u0442\u044F \u0447\u0430\u0439\u043A\u0438 \u0441\u0442\u0430\u043B\u0438 \u0437'\u044F\u0432\u043B\u044F\u0442\u0438\u0441\u044F \u0443 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u043C\u0456\u0441\u0442\u0430\u0445, \u0434\u0435 \u0432\u043B\u0430\u0448\u0442\u043E\u0432\u0443\u044E\u0442\u044C \u0433\u043D\u0456\u0437\u0434\u0430 \u043D\u0430 \u0434\u0430\u0445\u0430\u0445 \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C. \u0423\u0441\u0456 \u0447\u0430\u0439\u043A\u0438 \u0432\u0435\u0434\u0443\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0436\u0438\u0442\u0442\u044F.",
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const birds = (birdsData);
;// CONCATENATED MODULE: ./modules/data/birds-en.js
var birdsDataEn = [[{
  id: 1,
  name: 'Raven',
  species: 'Corvus corax',
  description: 'Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.',
  image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Shadoof',
  species: 'Grus grus',
  description: 'The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».',
  image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Swallow',
  species: 'Delichon urbicum',
  description: 'Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.',
  image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Nightjar',
  species: 'Caprimulgus europaeus',
  description: 'Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.',
  image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Cuckoo',
  species: 'Cuculus canorus',
  description: 'The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.',
  image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Tit',
  species: 'Parus major',
  description: 'More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.',
  image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Sparrow',
  species: 'Passer domesticus',
  description: 'Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.',
  image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Rook',
  species: 'Corvus frugilegus',
  description: 'Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.',
  image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Jackdaw',
  species: 'Coloeus monedula',
  description: 'The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird\'s love for shiny and bright things.',
  image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Songthrush',
  species: 'Turdus philomelos',
  description: 'Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.',
  image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Magpie',
  species: 'Pica pica',
  description: 'Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.',
  image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Jay',
  species: 'Garrulus glandarius',
  description: 'When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.',
  image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Finch',
  species: 'Fringilla coelebs',
  description: 'There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.',
  image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Crossbill',
  species: 'Loxia curvirostra',
  description: 'Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.',
  image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Turtledove',
  species: 'Streptopelia turtur',
  description: 'Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.',
  image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Woodpecker',
  species: 'Dendrocopos major',
  description: 'The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird\'s beak. In good weather, the shot can be heard within a radius of 1.5 km.',
  image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Hoopoe',
  species: 'Upupa epops',
  description: 'Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.',
  image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Swift',
  species: 'Apus apus',
  description: 'Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
  image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Lark',
  species: 'Alauda arvensis',
  description: 'Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.',
  image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Nightingale',
  species: 'Luscinia luscinia',
  description: 'Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
  image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Starling',
  species: 'Sturnus vulgaris',
  description: 'Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.',
  image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Oriole',
  species: 'Oriolus oriolus',
  description: 'The melody of the oriole\'s voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.',
  image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Waxwing',
  species: 'Bombycilla garrulus',
  description: 'The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.',
  image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Goldfinch',
  species: 'Carduelis carduelis',
  description: 'Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.',
  image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Eagle',
  species: 'Aquila nipalensis',
  description: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters',
  image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Kite',
  species: 'Milvus migrans',
  description: 'Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.',
  image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Harrier',
  species: 'Circus cyaneus',
  description: 'Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.',
  image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Falcon',
  species: 'Falco peregrinus',
  description: 'The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.',
  image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Hawk',
  species: 'Accipiter gentilis',
  description: 'All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.',
  image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Eagle owl',
  species: 'Bubo bubo',
  description: 'The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.',
  image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Albatross',
  species: 'Diomedea exulans',
  description: 'Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Gannet',
  species: 'Sula nebouxii',
  description: 'A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Petrel',
  species: 'Puffinus griseus',
  description: 'The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Pelican',
  species: 'Pelecanus',
  description: 'Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.',
  image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Penguin',
  species: 'Aptenodytes forsteri',
  description: 'The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin\'s diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Seagull',
  species: 'Larus argentatus',
  description: 'Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const birds_en = (birdsDataEn);
;// CONCATENATED MODULE: ./modules/changeLang/changeLang.js
var changeLang_dataTranslate = {
  lang: JSON.parse(localStorage.getItem('lang')),
  ua: {
    gamePageBtn: 'Почати гру',
    mainPageBtn: 'На головну',
    galleryPageBtn: 'Галерея',
    gameModeArr: ['Розминка', "Гороб'їні", 'Лісові птахи', 'Співучі птахи', 'Хижі птахи', 'Морські птахи'],
    lvlName: 'Рівень:',
    scoreName: 'Очки:',
    nextBtn: 'Далі',
    finishBtn: 'Кінець',
    playAgainBtn: 'Ще раз',
    resultPageBtn: 'Статистика',
    shieldText: 'Послухайте аудіо та оберіть пташку',
    scoreText: 'Ваш результат:',
    gameLogoText: 'Режим гри',
    winText: 'Ви набрали максимальну кількість балів!',
    rules: "\n    <p>\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0433\u0440\u0438:</p>\n    <p>\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0433\u0440\u0438 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0443 \u0432\u0456\u0434\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u0456 \u043F\u0442\u0430\u0445\u0456\u0432 \u0437\u0430 \u0457\u0445 \u0441\u043F\u0456\u0432\u043E\u043C. \u041A\u043E\u0436\u0435\u043D \u043D\u043E\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043D\u044C \u0434\u0430\u0454 \u0433\u0440\u0430\u0432\u0446\u0435\u0432\u0456 5 \u0431\u0430\u043B\u0456\u0432.</p>\n    <p>\u0417\u0430 \u043A\u043E\u0436\u043D\u0443 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u0437\u0430\u0431\u0438\u0440\u0430\u0454\u0442\u044C\u0441\u044F 1 \u0431\u0430\u043B.</p>\n    <p>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0431\u0430\u043B\u0456\u0432 \u2013 30</p>\n    "
  },
  en: {
    gamePageBtn: 'Start game',
    mainPageBtn: 'Main page',
    galleryPageBtn: 'Gallery',
    gameModeArr: ['Warm-up', 'Passerines', 'Forest birds', 'Song birds', 'Predator birds', 'Sea birds'],
    lvlName: 'Level:',
    scoreName: 'Score:',
    nextBtn: 'Next',
    finishBtn: 'Finish',
    playAgainBtn: 'Again',
    resultPageBtn: 'Statistic',
    shieldText: 'Listen to the audio and choose a bird',
    scoreText: 'Your result:',
    gameLogoText: 'Game mode',
    winText: 'You have scored the maximum number of points!',
    rules: "\n    <p>Game rules:</p>\n    <p>The task of the game is to guess the birds by their singing. Each new level gives the player 5 points.</p>\n    <p>For each wrong answer, 1 point is subtracted.</p>\n    <p>Maximum points - 30</p>\n    "
  }
};
function changeLang() {
  var changeBtn = document.querySelectorAll('.header__changelang-button');
  changeBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      changeBtn.forEach(function (item) {
        item.style.cssText = '';
      });
      item.style.cssText = 'background-color: #165c52';
      localStorage.setItem('lang', JSON.stringify(item.textContent));
    });
  });
  var language = JSON.parse(localStorage.getItem('lang'));
  if (language) {
    changeBtn.forEach(function (item) {
      if (item.textContent === language) {
        item.click();
      }
    });
  } else {
    changeBtn[0].click();
  }
  changeBtn.forEach(function (item, i) {
    item.addEventListener('click', function () {
      checkLang();
    });
  });
  var filename = window.location.href.split('/');
  checkLang();
  function checkLang() {
    language = JSON.parse(localStorage.getItem('lang'));
    switch (filename[filename.length - 1]) {
      case 'index.html':
        changeStartPageLang();
        break;
      case 'gamePage.html':
        changeGamePageLang();
        break;
      case 'gallery.html':
        changeGalleryPageLang();
        break;
      case 'results.html':
        changeResultPageLang();
        break;
    }
  }
  function changeStartPageLang() {
    var navBtns = document.querySelectorAll('.header__button'),
      gameInfo = document.querySelector('.rules__window-text');
    navBtns[0].innerHTML = changeLang_dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = changeLang_dataTranslate[language].galleryPageBtn;
    gameInfo.innerHTML = changeLang_dataTranslate[language].rules;
  }
  function changeGamePageLang() {
    var navBtns = document.querySelectorAll('.header__button'),
      gameLogo = document.querySelector('.game__logo'),
      gameModeRow = document.querySelectorAll('.game__button'),
      gameLvl = document.querySelector('.game__status-lvl'),
      gameScore = document.querySelector('.game__status-score'),
      nextBtn = document.querySelector('.game__next>a'),
      aboutShield = document.querySelector('.game__about-block'),
      popupScore = document.querySelector('.result-popup__score'),
      popupBtns = document.querySelectorAll('.result-popup__button');
    navBtns[0].innerHTML = changeLang_dataTranslate[language].mainPageBtn;
    navBtns[1].innerHTML = changeLang_dataTranslate[language].galleryPageBtn;
    gameLogo.innerHTML = changeLang_dataTranslate[language].gameLogoText;
    gameModeRow.forEach(function (item, i) {
      item.innerHTML = "".concat(changeLang_dataTranslate[language].gameModeArr[i]);
    });
    gameLvl.innerHTML = changeLang_dataTranslate[language].lvlName;
    gameScore.innerHTML = changeLang_dataTranslate[language].scoreName;
    nextBtn.innerHTML = changeLang_dataTranslate[language].nextBtn;
    aboutShield.innerHTML = changeLang_dataTranslate[language].shieldText;
    popupScore.innerHTML = changeLang_dataTranslate[language].scoreText;
    popupBtns[0].innerHTML = changeLang_dataTranslate[language].playAgainBtn;
    popupBtns[1].innerHTML = changeLang_dataTranslate[language].resultPageBtn;
  }
  function changeGalleryPageLang() {
    var navBtns = document.querySelectorAll('.header__button'),
      gameModeRow = document.querySelectorAll('.gallery__button');
    navBtns[0].textContent = changeLang_dataTranslate[language].gamePageBtn;
    navBtns[1].textContent = changeLang_dataTranslate[language].mainPageBtn;
    gameModeRow.forEach(function (item, i) {
      item.textContent = "".concat(changeLang_dataTranslate[language].gameModeArr[i]);
    });
  }
  function changeResultPageLang() {
    var navBtns = document.querySelectorAll('.header__button');
    navBtns[0].innerHTML = changeLang_dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = changeLang_dataTranslate[language].galleryPageBtn;
  }
}
/* harmony default export */ const changeLang_changeLang = (changeLang);

;// CONCATENATED MODULE: ./modules/generateGame.js




var gameOptions = {
  'score': 5,
  'level': 1,
  'gameMode': 1,
  'dataArr': [],
  'secretBird': {},
  'answerStatus': false,
  'birdsData': changeLang_dataTranslate.lang === 'en' ? birds_en : birds
};
function generateGame() {
  var answerBlock = document.querySelector('.game__answer'),
    qustionAudio = document.querySelector('.game__question-audio'),
    aboutBlock = document.querySelector('.game__about-block'),
    nextButton = document.querySelector('.game__next>a'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    lvlNumber = document.querySelector('.game__status-lvl'),
    gameScore = document.querySelector('.game__status-score');
  questionImg.src = 'assets/img/incognito.png';
  questionName.textContent = '***';
  lvlNumber.textContent = "".concat(dataTranslate[dataTranslate.lang].lvlName, " ").concat(gameOptions.level);
  gameScore.textContent = "".concat(dataTranslate[dataTranslate.lang].scoreName, " ").concat(gameOptions.score - 5);
  aboutBlock.style.top = '0';
  if (gameOptions.dataArr.length === 1) {
    nextButton.textContent = "".concat(dataTranslate[dataTranslate.lang].finishBtn);
  }
  nextButton.style.cssText = '';
  answerBlock.innerHTML = '';
  gameOptions.birdsData[gameOptions.gameMode - 1].forEach(function (item) {
    var answerBtn = document.createElement('li');
    answerBtn.classList.add('game__answer-item');
    answerBtn.innerHTML = "".concat(item.name);
    answerBlock.append(answerBtn);
  });
  gameOptions.secretBird = gameOptions.dataArr.splice(Math.floor(Math.random() * gameOptions.dataArr.length), 1)[0];
  qustionAudio.src = gameOptions.secretBird.audio;
  customAudio('#question-audio', '#question-player-start', '#question-player-pause', '#question-player-volume', '#question-player-duration', '#question-time-current', '#question-time-total', '#question-volume-true', '#question-volume-false');
}
/* harmony default export */ const modules_generateGame = ((/* unused pure expression or super */ null && (generateGame)));

;// CONCATENATED MODULE: ./modules/audio.js
function audio_customAudio(audioSelector, startSelector, pauseSelector, volumeSelector, progressSelector, currentTime, totalTime, volumeTrue, volumeFalse) {
  var audio = document.querySelector(audioSelector),
    startBtn = document.querySelector(startSelector),
    pauseBtn = document.querySelector(pauseSelector),
    volumeBar = document.querySelector(volumeSelector),
    progressBar = document.querySelector(progressSelector),
    currentTimeText = document.querySelector(currentTime),
    totalTimeText = document.querySelector(totalTime),
    audioIconTrue = document.querySelector(volumeTrue),
    audioIconFalse = document.querySelector(volumeFalse);
  audio.addEventListener('loadedmetadata', function () {
    timeConverter(audio.duration, totalTimeText);
    progressBar.value = 0;
  });
  pauseBtn.style.display = 'none';
  startBtn.style.display = 'block';
  audio.ontimeupdate = progress;
  startBtn.addEventListener('click', function () {
    audio.play();
    pauseBtn.style.display = 'block';
    startBtn.style.display = 'none';
  });
  pauseBtn.addEventListener('click', function () {
    audio.pause();
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
  });
  volumeBar.addEventListener('input', function () {
    var volumeStatus = volumeBar.value;
    audio.volume = volumeStatus / volumeBar.max;
    if (volumeBar.value < 1) {
      audioIconTrue.style.display = 'none';
      audioIconFalse.style.display = 'block';
    } else {
      audioIconFalse.style.display = 'none';
      audioIconTrue.style.display = 'block';
    }
  });
  audioIconTrue.addEventListener('click', function () {
    audioIconTrue.style.display = 'none';
    audioIconFalse.style.display = 'block';
    audio.volume = 0;
    volumeBar.value = 0;
  });
  audioIconFalse.addEventListener('click', function () {
    audioIconFalse.style.display = 'none';
    audioIconTrue.style.display = 'block';
    audio.volume = 1;
    volumeBar.value = 100;
  });
  progressBar.addEventListener('input', function () {
    audio.currentTime = progressBar.value * audio.duration / progressBar.max;
  });
  function progress() {
    progressBar.value = progressBar.max * audio.currentTime / audio.duration;
    timeConverter(audio.currentTime, currentTimeText);
    if (audio.currentTime === audio.duration) {
      pauseBtn.style.display = 'none';
      startBtn.style.display = 'block';
    }
  }
  function timeConverter(time, cell) {
    cell.textContent = '';
    var seconds = Math.floor(time % 60),
      minutes = Math.floor(time / 60 % 60);
    var timeArr = [minutes, seconds];
    timeArr = timeArr.map(function (item) {
      if (item < 10) {
        item = '0' + item;
      } else if (item === 0) {
        item = '00';
      }
      return item;
    });
    cell.textContent = timeArr[0] + ':' + timeArr[1];
  }
}
/* harmony default export */ const audio = (audio_customAudio);
;// CONCATENATED MODULE: ./gallery.js





window.addEventListener('DOMContentLoaded', function () {
  changeLang_changeLang();
  var mode = document.querySelector('.gallery__mode'),
    btns = document.querySelectorAll('.gallery__button'),
    galleryRow = document.querySelector('.gallery__row');
  mode.addEventListener('click', function (e) {
    if (e.target && e.target.value) {
      btns.forEach(function (btn) {
        btn.style.cssText = "";
        btn.style.pointerEvents = '';
      });
      galleryRow.innerHTML = '';
      gameOptions.birdsData[e.target.value - 1].forEach(function (item, i) {
        var galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');
        galleryItem.innerHTML = "\n\n          <div class=\"gallery__about-img\"><img src=".concat(item.image, " alt=\"incognito\"></div>\n          <div class=\"gallery__about-info\">\n            <div class=\"gallery__about-name\">").concat(item.name, "</div>\n            <hr class=\"gallery__about-divider\">\n            <div class=\"gallery__about-subname\">").concat(item.species, "</div>\n            <hr class=\"gallery__about-divider\">\n          </div>\n          <div class=\"player gallery__player\" id=\"answer-player-").concat(i, "\">\n            <audio class=\"gallery__question-audio\" id=\"answer-audio-").concat(i, "\"\n              src=").concat(item.audio, "></audio>\n            <input class=\"player__duration\" id=\"answer-player-duration-").concat(i, "\" type=\"range\" min=0 max=100 value=\"0\">\n            <div class=\"player__time\">\n              <span class=\"player__time-current\" id=\"answer-time-current-").concat(i, "\">00:00</span>\n              <span class=\"player__time-total\" id=\"answer-time-total-").concat(i, "\">00:00</span>\n            </div>\n            <div class=\"player__start\" id=\"answer-player-start-").concat(i, "\"><img class=\"player__controls-img\"\n                src=\"assets/img/start.svg\" alt=\"start\">\n            </div>\n            <div class=\"player__pause\" id=\"answer-player-pause-").concat(i, "\"><img class=\"player__controls-img\"\n                src=\"assets/img/pause.svg\" alt=\"pause\">\n            </div>\n            <img class=\"player__volume-true\" id=\"answer-volume-true-").concat(i, "\" src=\"assets/img/volume.svg\" alt=\"volume\">\n            <img class=\"player__volume-false\" id=\"answer-volume-false-").concat(i, "\" src=\"assets/img/mute.svg\" alt=\"mute\">\n            <input class=\"player__volume\" id=\"answer-player-volume-").concat(i, "\" type=\"range\" min=0 max=100 value=\"50\">\n          </div>\n\n          <div class=\"gallery__about-descr\">").concat(item.description, "</div>\n\n        ");
        galleryRow.append(galleryItem);
        audio('#answer-audio-' + i, '#answer-player-start-' + i, '#answer-player-pause-' + i, '#answer-player-volume-' + i, '#answer-player-duration-' + i, '#answer-time-current-' + i, '#answer-time-total-' + i, '#answer-volume-true-' + i, '#answer-volume-false-' + i);
      });
      e.target.style.cssText = "border: 3px solid white; background-color: #165c52";
      e.target.style.pointerEvents = 'none';
    }
  });
  btns[0].click();
});
})();

/******/ })()
;