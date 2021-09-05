(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* The font file in this archive was created by Andrew Tyler www.AndrewTyler.net and font@andrewtyler.net\nLicense: http://creativecommons.org/licenses/by-sa/3.0/us/\n\nUse at 12 or 24 px size with anti-alising off for best results.\n\nCreative Commons BY-SA license.\n\nNot affiliated or endorsed by Mojang in anyway.  */\n@font-face {\n  font-family: \"minecraftia\";\n  src: url('Minecraftia.ttf');\n}\n* {\n  font-family: \"minecraftia\", monospace;\n  font-size: 1em;\n}\nbutton:not(.enchant_remove) {\n  width: auto;\n  padding: 0.5em;\n  border-style: solid;\n  border-width: 3px;\n  border-color: black;\n  box-shadow: -3px -3px rgba(0, 0, 0, 0.4) inset, 3px 3px rgba(255, 255, 255, 0.4) inset;\n  background-color: gray;\n  background-image: url('buttonTexture.png');\n  color: white;\n  text-shadow: 3px 3px #1e1e1e;\n}\nbutton.enchant_remove {\n  background: none;\n  border: none;\n  color: red;\n  font-size: 1.5em;\n}\nbutton.big {\n  font-size: 1.5em;\n}\nbody {\n  background-color: darkgray;\n}\ninput[type=checkbox] {\n  width: 1.5em;\n  height: 1.5em;\n  margin-right: 0.5em;\n}\nlabel {\n  width: auto;\n  color: lightgray;\n}\ninput[type=number] {\n  margin-left: 10px;\n  width: 3em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.big-text {\n  font-size: 1.1em;\n}\ntextarea {\n  width: 100%;\n  min-height: 100px;\n  resize: none;\n}\nselect {\n  -o-appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  padding: 0.2em;\n  /* text-align: center; */\n  width: 100%;\n  font-size: 100%;\n}\noption {\n  width: 100%;\n  font-size: 100%;\n}\ninput.enchant_name {\n  width: 65%;\n}\ninput.enchant_lv {\n  text-align: center;\n  width: 10%;\n}\nselect.enchant_remove {\n  width: 10%;\n}\n.center {\n  text-align: center;\n  /* margin: auto; */\n}\n.section {\n  display: block;\n  width: auto;\n  padding: 10px;\n  color: white;\n}\n.section.bgcolor {\n  background-color: #505050;\n}\n.container {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: center;\n  /* align-items: center; */\n  /* justify-content: center; */\n  width: auto;\n}\n.flex {\n  display: flex;\n}\n#total_cost {\n  color: greenyellow;\n  font-size: 2em;\n}\n#result_tool {\n  color: yellow;\n  font-size: 1.3em;\n}\n/* Mobile */\n@media only screen and (max-width: 768px) {\n  .container {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .section.no-padding {\n    padding: 0px;\n  }\n\n  .plus-sign {\n    margin: auto;\n    text-align: center;\n    justify-content: center;\n    width: auto;\n    font-size: 2em;\n    color: white;\n    padding: 0px;\n    margin: 0px;\n  }\n\n  label {\n    font-size: 60%;\n  }\n\n  input[type=number] {\n    margin-left: 10px;\n    padding-left: 0.1em;\n    padding-right: 0.1em;\n    padding-top: 0.1em;\n    padding-bottom: 0.1em;\n  }\n}\n/* Desktop */\n@media only screen and (min-width: 768px) {\n  body {\n    display: flex;\n  }\n\n  .nav-main {\n    width: 70%;\n  }\n\n  .nav-side {\n    width: 30%;\n  }\n\n  .flex-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .section {\n    display: block;\n    margin: 10px;\n    width: auto;\n  }\n\n  .section.full-width {\n    width: 30%;\n  }\n\n  button:hover:not(.enchant_remove) {\n    background-image: url('buttonHover.png');\n  }\n\n  .plus-sign {\n    display: inline-flex;\n    align-items: center;\n    width: 5%;\n    font-size: 2em;\n    color: white;\n  }\n\n  .big-text {\n    font-size: 1.25em;\n  }\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AACA;;;;;;;kDAAA;AASA;EACI,0BAAA;EACA,2BAAA;AAAJ;AAGA;EACI,qCAAA;EACA,cAAA;AADJ;AAIA;EACI,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,sFAAA;EAEA,sBAAA;EACA,0CAAA;EACA,YAAA;EACA,4BAAA;AAFJ;AAKA;EACI,gBAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;AAFJ;AAKA;EACI,gBAAA;AAFJ;AAKA;EACI,0BAAA;AAFJ;AAKA;EACI,YAAA;EACA,aAAA;EACA,mBAAA;AAFJ;AAKA;EACI,WAAA;EACA,gBAAA;AAFJ;AAKA;EACI,iBAAA;EACA,UAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;EACA,qBAAA;AAFJ;AAKA;EACI,WAAA;AAFJ;AAKA;EACI,YAAA;AAFJ;AAKA;EACI,gBAAA;AAFJ;AAIA;EACI,WAAA;EACA,iBAAA;EACA,YAAA;AADJ;AAIA;EACI,mBAAA;EAEA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,wBAAA;EACA,WAAA;EACA,eAAA;AADJ;AAIA;EACI,WAAA;EACA,eAAA;AADJ;AAIA;EACI,UAAA;AADJ;AAIA;EACI,kBAAA;EACA,UAAA;AADJ;AAIA;EACI,UAAA;AADJ;AAIA;EACI,kBAAA;EACA,kBAAA;AADJ;AAIA;EACI,cAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;AADJ;AAIA;EACI,yBAAA;AADJ;AAIA;EACI,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,6BAAA;EACA,WAAA;AADJ;AAIA;EACI,aAAA;AADJ;AAIA;EACI,kBAAA;EACA,cAAA;AADJ;AAGA;EACI,aAAA;EACA,gBAAA;AAAJ;AAGA,WAAA;AACA;EACI;IACI,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;EAAN;;EAGE;IACI,YAAA;EAAN;;EAGE;IACI,YAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,cAAA;IACA,YAAA;IACA,YAAA;IACA,WAAA;EAAN;;EAGE;IACI,cAAA;EAAN;;EAGE;IACI,iBAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,qBAAA;EAAN;AACF;AAGA,YAAA;AACA;EACI;IACI,aAAA;EADN;;EAGE;IACI,UAAA;EAAN;;EAGE;IACI,UAAA;EAAN;;EAGE;IACI,aAAA;IACA,eAAA;EAAN;;EAGE;IACI,cAAA;IACA,YAAA;IACA,WAAA;EAAN;;EAGE;IACI,UAAA;EAAN;;EAGE;IACI,wCAAA;EAAN;;EAGE;IACI,oBAAA;IACA,mBAAA;IAEA,SAAA;IACA,cAAA;IACA,YAAA;EADN;;EAIE;IACI,iBAAA;EADN;AACF","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n/* The font file in this archive was created by Andrew Tyler www.AndrewTyler.net and font@andrewtyler.net\nLicense: http://creativecommons.org/licenses/by-sa/3.0/us/\n\nUse at 12 or 24 px size with anti-alising off for best results.\n\nCreative Commons BY-SA license.\n\nNot affiliated or endorsed by Mojang in anyway.  */\n\n@font-face {\n    font-family: 'minecraftia';\n    src: url('assets/font/Minecraftia.ttf');\n}\n\n* {\n    font-family: 'minecraftia', monospace;\n    font-size: 1em;\n}\n\nbutton:not(.enchant_remove) {\n    width: auto;\n    padding: 0.5em;\n    border-style: solid;\n    border-width: 3px;\n    border-color: black;\n    box-shadow: -3px -3px rgba(0, 0, 0, 0.4) inset,\n        3px 3px rgba(255, 255, 255, 0.4) inset;\n    background-color: gray;\n    background-image: url('assets/res/buttonTexture.png');\n    color: white;\n    text-shadow: 3px 3px rgb(30, 30, 30);\n}\n\nbutton.enchant_remove {\n    background: none;\n    border: none;\n    color: red;\n    font-size: 1.5em;\n}\n\nbutton.big {\n    font-size: 1.5em;\n}\n\nbody {\n    background-color: darkgray;\n}\n\ninput[type='checkbox'] {\n    width: 1.5em;\n    height: 1.5em;\n    margin-right: 0.5em;\n}\n\nlabel {\n    width: auto;\n    color: lightgray;\n}\n\ninput[type='number'] {\n    margin-left: 10px;\n    width: 3em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    padding-top: 0.2em;\n    padding-bottom: 0.2em;\n}\n\n.left {\n    float: left;\n}\n\n.right {\n    float: right;\n}\n\n.big-text {\n    font-size: 1.1em;\n}\ntextarea {\n    width: 100%;\n    min-height: 100px;\n    resize: none;\n}\n\nselect {\n    -o-appearance: none;\n    -ms-appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: 0.2em;\n    /* text-align: center; */\n    width: 100%;\n    font-size: 100%;\n}\n\noption {\n    width: 100%;\n    font-size: 100%;\n}\n\ninput.enchant_name {\n    width: 65%;\n}\n\ninput.enchant_lv {\n    text-align: center;\n    width: 10%;\n}\n\nselect.enchant_remove {\n    width: 10%;\n}\n\n.center {\n    text-align: center;\n    /* margin: auto; */\n}\n\n.section {\n    display: block;\n    width: auto;\n    padding: 10px;\n    color: white;\n}\n\n.section.bgcolor {\n    background-color: rgb(80, 80, 80);\n}\n\n.container {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    margin-left: 10px;\n    margin-right: 10px;\n    text-align: center;\n    /* align-items: center; */\n    /* justify-content: center; */\n    width: auto;\n}\n\n.flex {\n    display: flex;\n}\n\n#total_cost {\n    color: greenyellow;\n    font-size: 2em;\n}\n#result_tool {\n    color: yellow;\n    font-size: 1.3em;\n}\n\n/* Mobile */\n@media only screen and (max-width: 768px) {\n    .container {\n        margin-top: 0px;\n        margin-bottom: 0px;\n        margin-left: 1px;\n        margin-right: 1px;\n    }\n\n    .section.no-padding {\n        padding: 0px;\n    }\n\n    .plus-sign {\n        margin: auto;\n        text-align: center;\n        justify-content: center;\n        width: auto;\n        font-size: 2em;\n        color: white;\n        padding: 0px;\n        margin: 0px;\n    }\n\n    label {\n        font-size: 60%;\n    }\n\n    input[type='number'] {\n        margin-left: 10px;\n        padding-left: 0.1em;\n        padding-right: 0.1em;\n        padding-top: 0.1em;\n        padding-bottom: 0.1em;\n    }\n}\n\n/* Desktop */\n@media only screen and (min-width: 768px) {\n    body {\n        display: flex;\n    }\n    .nav-main {\n        width: 70%;\n    }\n\n    .nav-side {\n        width: 30%;\n    }\n\n    .flex-wrapper {\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .section {\n        display: block;\n        margin: 10px;\n        width: auto;\n    }\n\n    .section.full-width {\n        width: 30%;\n    }\n\n    button:hover:not(.enchant_remove) {\n        background-image: url('assets/res/buttonHover.png');\n    }\n\n    .plus-sign {\n        display: inline-flex;\n        align-items: center;\n\n        width: 5%;\n        font-size: 2em;\n        color: white;\n    }\n\n    .big-text {\n        font-size: 1.25em;\n    }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\minecraftanvil\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map