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

/***/ 614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/rs_school_js.svg";

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
/******/ 			18: 0
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
;// CONCATENATED MODULE: ./results.html
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
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(114), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(614), __webpack_require__.b);
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
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <title>Results</title> <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"96x96\" href=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"> <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"> <meta name=\"msapplication-TileColor\" content=\"#ffffff\"> <meta name=\"msapplication-TileImage\" content=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"> <meta name=\"theme-color\" content=\"#ffffff\"> </head> <body> <header class=\"header\"> <div class=\"container\"> <div class=\"header__wrapper\"> <h1 class=\"header__logo\">Songs<span>Bird</span></h1> <div class=\"header__row\"> <a href=\"gamePage.html\" class=\"header__button\">⇦ На главную</a> <a href=\"gallery.html\" class=\"header__button\">Галлерея ⇨</a> </div> </div> </div> </header> <article class=\"results\"> <div class=\"container\"> <div class=\"results__window\"> <ul class=\"results__list\"> <li class=\"results__item\">Результатов пока что нету</li> </ul> </div> </div> </article> <footer class=\"footer\"> <div class=\"container\"> <div class=\"footer__row\"> <a class=\"footer__github\" href=\"https://github.com/EugeneBurkovskiy\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"GitHub\"></a> <span class=\"footer__year\">2022</span> <a href=\"https://rs.school/\" class=\"footer__img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"RS School\"> </a> </div> </div> </footer> </body> </html>";
// Exports
/* harmony default export */ const results = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./modules/changeLang/changeLang.js
var dataTranslate = {
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
    navBtns[0].innerHTML = dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
    gameInfo.innerHTML = dataTranslate[language].rules;
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
    navBtns[0].innerHTML = dataTranslate[language].mainPageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
    gameLogo.innerHTML = dataTranslate[language].gameLogoText;
    gameModeRow.forEach(function (item, i) {
      item.innerHTML = "".concat(dataTranslate[language].gameModeArr[i]);
    });
    gameLvl.innerHTML = dataTranslate[language].lvlName;
    gameScore.innerHTML = dataTranslate[language].scoreName;
    nextBtn.innerHTML = dataTranslate[language].nextBtn;
    aboutShield.innerHTML = dataTranslate[language].shieldText;
    popupScore.innerHTML = dataTranslate[language].scoreText;
    popupBtns[0].innerHTML = dataTranslate[language].playAgainBtn;
    popupBtns[1].innerHTML = dataTranslate[language].resultPageBtn;
  }
  function changeGalleryPageLang() {
    var navBtns = document.querySelectorAll('.header__button'),
      gameModeRow = document.querySelectorAll('.gallery__button');
    navBtns[0].textContent = dataTranslate[language].gamePageBtn;
    navBtns[1].textContent = dataTranslate[language].mainPageBtn;
    gameModeRow.forEach(function (item, i) {
      item.textContent = "".concat(dataTranslate[language].gameModeArr[i]);
    });
  }
  function changeResultPageLang() {
    var navBtns = document.querySelectorAll('.header__button');
    navBtns[0].innerHTML = dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
  }
}
/* harmony default export */ const changeLang_changeLang = (changeLang);

;// CONCATENATED MODULE: ./results.js




window.addEventListener('DOMContentLoaded', function () {
  changeLang_changeLang();
  var list = document.querySelector('.results__list'),
    resultsArr = JSON.parse(localStorage.getItem('result'));
  list.innerHTML = '';
  resultsArr.forEach(function (item, i) {
    var scoreName = dataTranslate[dataTranslate.lang].scoreName.toLowerCase().replace(/:/, '');
    list.innerHTML += "<li class=\"results__item\">".concat(i + 1, ". ").concat(item.score, " ").concat(scoreName, "</li>");
  });
});
})();

/******/ })()
;