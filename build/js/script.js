// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fecM4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
var _eventName = require("@//conf/eventName");
var _eventNameDefault = parcelHelpers.interopDefault(_eventName);
var _accordion = require("@//module/accordion");
var _accordionDefault = parcelHelpers.interopDefault(_accordion);
var _carousel = require("@//module/carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _imgAnimation = require("@//module/imgAnimation");
var _imgAnimationDefault = parcelHelpers.interopDefault(_imgAnimation);
var _menu = require("@//module/menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _modal = require("@//module/modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _top = require("@//pages/top");
var _topDefault = parcelHelpers.interopDefault(_top);
var _base = require("@//utils/Base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _class = require("@//utils/class");
var _scroll = require("@//utils/scroll");
class AppClass {
    _top;
    _a;
    _header;
    constructor(){
        // class変数
        this._top = (0, _baseDefault.default)._d.getElementById("data-top");
        this._a = (0, _baseDefault.default)._d.getElementsByTagName("a");
        this._header = (0, _baseDefault.default)._d.getElementById("data-header");
        this.init();
    }
    init = ()=>{
        // 以下共通で追加するEVENT
        if (this._top) new (0, _topDefault.default)();
        new (0, _imgAnimationDefault.default)();
        new (0, _menuDefault.default)();
        new (0, _modalDefault.default)();
        new (0, _accordionDefault.default)();
        new (0, _carouselDefault.default)();
        this.addEvent();
    };
    addEvent = ()=>{
        // 以下共通で追加するEVENT
        Array.prototype.forEach.call(this._a, (el)=>{
            const target = el.getAttribute("href");
            if (target?.match(/^#/)) el.addEventListener((0, _eventNameDefault.default).CLICK, (0, _scroll.SmoothScroll));
        });
    };
    removeEvent = ()=>{
        // 以下共通で削除するEVENT
        Array.prototype.forEach.call(this._a, (el)=>{
            const target = el.getAttribute("href");
            if (target?.match(/^#/)) el.removeEventListener((0, _eventNameDefault.default).CLICK, (0, _scroll.SmoothScroll));
        });
    };
    showModal = ()=>{
        const modal = (0, _baseDefault.default)._d.getElementById("js-modal");
        (0, _class.AddClass)(modal, "is-open");
        (0, _animejsDefault.default)({
            targets: modal,
            opacity: 1,
            duration: 500,
            easing: "easeOutQuad",
            complete: ()=>{
                (0, _class.AddClass)(modal, "is-anim");
                modal.addEventListener((0, _eventNameDefault.default).CLICK, this.hideModal);
                const modalClose = (0, _baseDefault.default)._d.getElementById("js-modal-close");
                modalClose.addEventListener((0, _eventNameDefault.default).CLICK, this.hideModal);
            }
        });
    };
    hideModal = (e)=>{
        const $target = e.target;
        if ($target.id.toLowerCase() !== "js-modal" && $target.id.toLowerCase() !== "js-modalclose") // 処理
        return;
        const modal = (0, _baseDefault.default)._d.getElementById("js-modal");
        (0, _animejsDefault.default)({
            targets: modal,
            opacity: 0,
            duration: 200,
            easing: "easeInQuad",
            complete: ()=>{
                (0, _class.RemoveClass)(modal, "is-anim");
                (0, _class.RemoveClass)(modal, "is-open");
                modal.removeEventListener((0, _eventNameDefault.default).CLICK, this.hideModal);
                const modalClose = (0, _baseDefault.default)._d.getElementById("js-modal-close");
                modalClose.removeEventListener((0, _eventNameDefault.default).CLICK, this.hideModal);
            }
        });
    };
}
window.onload = ()=>{
    new AppClass();
};

},{"animejs":"D1BAX","@//conf/eventName":"cQUXU","@//module/accordion":"cHJYv","@//module/carousel":"9gboG","@//module/imgAnimation":"glUyQ","@//module/menu":"1DywM","@//module/modal":"3f6ST","@//pages/top":"h7NJi","@//utils/Base":"ij9EP","@//utils/class":"9jRLP","@//utils/scroll":"b1AKD","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"D1BAX":[function(require,module,exports) {
/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ // Defaults
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
};
var validTransforms = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d"
];
// Caching
var cache = {
    CSS: {},
    springs: {}
};
// Utils
function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
    return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
    return func.apply(null, args);
}
var is = {
    arr: function(a) {
        return Array.isArray(a);
    },
    obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), "Object");
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty("totalLength");
    },
    svg: function(a) {
        return a instanceof SVGElement;
    },
    inp: function(a) {
        return a instanceof HTMLInputElement;
    },
    dom: function(a) {
        return a.nodeType || is.svg(a);
    },
    str: function(a) {
        return typeof a === "string";
    },
    fnc: function(a) {
        return typeof a === "function";
    },
    und: function(a) {
        return typeof a === "undefined";
    },
    nil: function(a) {
        return is.und(a) || a === null;
    },
    hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function(a) {
        return /^rgb/.test(a);
    },
    hsl: function(a) {
        return /^hsl/.test(a);
    },
    col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p) {
        return parseFloat(p);
    }) : [];
}
// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t) {
        var progress = duration ? duration * t / 1000 : t;
        if (zeta < 1) progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
        else progress = (a + b * progress) * Math.exp(-progress * w0);
        if (t === 0 || t === 1) return t;
        return 1 - progress;
    }
    function getDuration() {
        var cached = cache.springs[string];
        if (cached) return cached;
        var frame = 1 / 6;
        var elapsed = 0;
        var rest = 0;
        while(true){
            elapsed += frame;
            if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
            } else rest = 0;
        }
        var duration = elapsed * frame * 1000;
        cache.springs[string] = duration;
        return duration;
    }
    return duration ? solver : getDuration;
}
// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
function steps(steps) {
    if (steps === void 0) steps = 10;
    return function(t) {
        return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
}
// BezierEasing https://github.com/gre/bezier-easing
var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
        return 3.0 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > 0.0000001 && ++i < 10);
        return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for(var i = 0; i < 4; ++i){
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
    function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 0.001) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0.0) return guessForT;
            else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return function(x) {
            if (mX1 === mY1 && mX2 === mY2) return x;
            if (x === 0 || x === 1) return x;
            return calcBezier(getTForX(x), mY1, mY2);
        };
    }
    return bezier;
}();
var penner = function() {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
        linear: function() {
            return function(t) {
                return t;
            };
        }
    };
    var functionEasings = {
        Sine: function() {
            return function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },
        Expo: function() {
            return function(t) {
                return t ? Math.pow(2, 10 * t - 10) : 0;
            };
        },
        Circ: function() {
            return function(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },
        Back: function() {
            return function(t) {
                return t * t * (3 * t - 2);
            };
        },
        Bounce: function() {
            return function(t) {
                var pow2, b = 4;
                while(t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
            };
        },
        Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = .5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function(t) {
                return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
        }
    };
    var baseEasings = [
        "Quad",
        "Cubic",
        "Quart",
        "Quint"
    ];
    baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
            return function(t) {
                return Math.pow(t, i + 2);
            };
        };
    });
    Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases["easeInOut" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases["easeOutIn" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split("(")[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case "spring":
            return spring(easing, duration);
        case "cubicBezier":
            return applyArguments(bezier, args);
        case "steps":
            return applyArguments(steps, args);
        default:
            return applyArguments(ease, args);
    }
}
// Strings
function selectString(str) {
    try {
        var nodes = document.querySelectorAll(str);
        return nodes;
    } catch (e) {
        return;
    }
}
// Arrays
function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for(var i = 0; i < len; i++)if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) result.push(val);
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}
function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [
        o
    ];
}
function arrayContains(arr, val) {
    return arr.some(function(a) {
        return a === val;
    });
}
// Objects
function cloneObject(o) {
    var clone = {};
    for(var p in o)clone[p] = o[p];
    return clone;
}
function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o1)o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
}
function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o2)o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
}
// Colors
function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var r, g, b;
    if (s == 0) r = g = b = l;
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
}
// Units
function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[1];
}
function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") return "px";
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) return "deg";
}
// Values
function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
    return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([
        unit,
        "deg",
        "rad",
        "turn"
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return "attribute";
    if (is.dom(el) && arrayContains(validTransforms, prop)) return "transform";
    if (is.dom(el) && prop !== "transform" && getCSSValue(el, prop)) return "css";
    if (el[prop] != null) return "object";
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case "transform":
            return getTransformValue(target, propName, animatable, unit);
        case "css":
            return getCSSValue(target, propName, unit);
        case "attribute":
            return getAttribute(target, propName);
        default:
            return target[propName] || 0;
    }
}
function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ""));
    switch(operator[0][0]){
        case "+":
            return x + y + u;
        case "-":
            return x - y + u;
        case "*":
            return x * y + u;
    }
}
function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    if (/\s/g.test(val)) return val;
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) return unitLess + unit;
    return unitLess;
}
// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, "x1"),
        y: getAttribute(el, "y1")
    }, {
        x: getAttribute(el, "x2"),
        y: getAttribute(el, "y2")
    });
}
function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for(var i = 0; i < points.numberOfItems; i++){
        var currentPos = points.getItem(i);
        if (i > 0) totalLength += getDistance(previousPos, currentPos);
        previousPos = currentPos;
    }
    return totalLength;
}
function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
// Path animation
function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()){
        case "circle":
            return getCircleLength(el);
        case "rect":
            return getRectLength(el);
        case "line":
            return getLineLength(el);
        case "polyline":
            return getPolylineLength(el);
        case "polygon":
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
}
// Motion path
function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while(is.svg(parentEl)){
        if (!is.svg(parentEl.parentNode)) break;
        parentEl = parentEl.parentNode;
    }
    return parentEl;
}
function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [
        0,
        0,
        width,
        height
    ]);
    return {
        el: parentSvgEl,
        viewBox: viewBox,
        x: viewBox[0] / 1,
        y: viewBox[1] / 1,
        w: width,
        h: height,
        vW: viewBox[2],
        vH: viewBox[3]
    };
}
function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
        return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
        };
    };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
        if (offset === void 0) offset = 0;
        var l = progress + offset >= 1 ? progress + offset : 0;
        return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch(path.property){
        case "x":
            return (p.x - svg.x) * scaleX;
        case "y":
            return (p.y - svg.y) * scaleY;
        case "angle":
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
        original: value,
        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [
            0
        ],
        strings: is.str(val) || unit ? value.split(rgx) : []
    };
}
// Animatables
function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}
function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t, i) {
        return {
            target: t,
            id: i,
            total: parsed.length,
            transforms: {
                list: getElementTransforms(t)
            }
        };
    });
}
// Properties
function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) settings.duration = spring(settings.easing);
    if (is.arr(prop)) {
        var l = prop.length;
        var isFromTo = l === 2 && !is.obj(prop[0]);
        if (!isFromTo) // Duration divided by the number of tweens
        {
            if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
        } else // Transform [from, to] values shorthand to a valid tween value
        prop = {
            value: prop
        };
    }
    var propArray = is.arr(prop) ? prop : [
        prop
    ];
    return propArray.map(function(v, i) {
        var obj = is.obj(v) && !is.pth(v) ? v : {
            value: v
        };
        // Default delay value should only be applied to the first tween
        if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
        // Default endDelay value should only be applied to the last tween
        if (is.und(obj.endDelay)) obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
        return obj;
    }).map(function(k) {
        return mergeObjects(k, settings);
    });
}
function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
        return Object.keys(key);
    })), function(p) {
        return is.key(p);
    }).reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    var properties = {};
    var loop = function(i) {
        var propName = propertyNames[i];
        properties[propName] = keyframes.map(function(key) {
            var newKey = {};
            for(var p in key){
                if (is.key(p)) {
                    if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
            }
            return newKey;
        });
    };
    for(var i = 0; i < propertyNames.length; i++)loop(i);
    return properties;
}
function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) params = mergeObjects(flattenKeyframes(keyframes), params);
    for(var p in params)if (is.key(p)) properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
    });
    return properties;
}
// Tweens
function normalizeTweenValues(tween, animatable) {
    var t = {};
    for(var p in tween){
        var value = getFunctionValue(tween[p], animatable);
        if (is.arr(value)) {
            value = value.map(function(v) {
                return getFunctionValue(v, animatable);
            });
            if (value.length === 1) value = value[0];
        }
        t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
}
function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t) {
        var tween = normalizeTweenValues(t, animatable);
        var tweenValue = tween.value;
        var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
        var toUnit = getUnit(to);
        var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
        var previousValue = previousTween ? previousTween.to.original : originalValue;
        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
        var fromUnit = getUnit(from) || getUnit(originalValue);
        var unit = toUnit || fromUnit;
        if (is.und(to)) to = previousValue;
        tween.from = decomposeValue(from, unit);
        tween.to = decomposeValue(getRelativeValue(to, from), unit);
        tween.start = previousTween ? previousTween.end : 0;
        tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
        tween.easing = parseEasings(tween.easing, tween.duration);
        tween.isPath = is.pth(tweenValue);
        tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
        tween.isColor = is.col(tween.from.original);
        if (tween.isColor) tween.round = 1;
        previousTween = tween;
        return tween;
    });
}
// Tween progress
var setProgressValue = {
    css: function(t, p, v) {
        return t.style[p] = v;
    },
    attribute: function(t, p, v) {
        return t.setAttribute(p, v);
    },
    object: function(t, p, v) {
        return t[p] = v;
    },
    transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
            var str = "";
            transforms.list.forEach(function(value, prop) {
                str += prop + "(" + value + ") ";
            });
            t.style.transform = str;
        }
    }
};
// Set Value helper
function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
        for(var property in properties){
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
        }
    });
}
// Animations
function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
        var tweens = normalizeTweens(prop, animatable);
        var lastTween = tweens[tweens.length - 1];
        return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
        };
    }
}
function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
        return properties.map(function(prop) {
            return createAnimation(animatable, prop);
        });
    })), function(a) {
        return !is.und(a);
    });
}
// Create Instance
function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
        return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
}
var instanceID = 0;
function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
        id: id,
        children: [],
        animatables: animatables,
        animations: animations,
        duration: timings.duration,
        delay: timings.delay,
        endDelay: timings.endDelay
    });
}
// Core
var activeInstances = [];
var engine = function() {
    var raf;
    function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) raf = requestAnimationFrame(step);
    }
    function step(t) {
        // memo on algorithm issue:
        // dangerous iteration over mutable `activeInstances`
        // (that collection may be updated from within callbacks of `tick`-ed animation instances)
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while(i < activeInstancesLength){
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
            } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
            }
        }
        raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }
    function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) return;
        if (isDocumentHidden()) // suspend ticks
        raf = cancelAnimationFrame(raf);
        else {
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(function(instance) {
                return instance._onDocumentVisibility();
            });
            engine();
        }
    }
    if (typeof document !== "undefined") document.addEventListener("visibilitychange", handleVisibilityChange);
    return play;
}();
function isDocumentHidden() {
    return !!document && document.hidden;
}
// Public Instance
function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance) {
        var promise = window.Promise && new Promise(function(_resolve) {
            return resolve = _resolve;
        });
        instance.finished = promise;
        return promise;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
        var direction = instance.direction;
        if (direction !== "alternate") instance.direction = direction !== "normal" ? "normal" : "reverse";
        instance.reversed = !instance.reversed;
        children.forEach(function(child) {
            return child.reversed = instance.reversed;
        });
    }
    function adjustTime(time) {
        return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
        startTime = 0;
        lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
        if (child) child.seek(time - child.timelineOffset);
    }
    function syncInstanceChildren(time) {
        if (!instance.reversePlayback) for(var i = 0; i < childrenLength; i++)seekChild(time, children[i]);
        else for(var i$1 = childrenLength; i$1--;)seekChild(time, children[i$1]);
    }
    function setAnimationsProgress(insTime) {
        var i = 0;
        var animations = instance.animations;
        var animationsLength = animations.length;
        while(i < animationsLength){
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) tween = filterArray(tweens, function(t) {
                return insTime < t.end;
            })[0] || tween;
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = void 0;
            for(var n = 0; n < toNumbersLength; n++){
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath) value = fromNumber + eased * (toNumber - fromNumber);
                else value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                if (round) {
                    if (!(tween.isColor && n > 2)) value = Math.round(value * round) / round;
                }
                numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) progress = numbers[0];
            else {
                progress = strings[0];
                for(var s = 0; s < stringsLength; s++){
                    var a = strings[s];
                    var b = strings[s + 1];
                    var n$1 = numbers[s];
                    if (!isNaN(n$1)) {
                        if (!b) progress += n$1 + " ";
                        else progress += n$1 + b;
                    }
                }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
        }
    }
    function setCallback(cb) {
        if (instance[cb] && !instance.passThrough) instance[cb](instance);
    }
    function countIteration() {
        if (instance.remaining && instance.remaining !== true) instance.remaining--;
    }
    function setInstanceProgress(engineTime) {
        var insDuration = instance.duration;
        var insDelay = instance.delay;
        var insEndDelay = insDuration - instance.endDelay;
        var insTime = adjustTime(engineTime);
        instance.progress = minMax(insTime / insDuration * 100, 0, 100);
        instance.reversePlayback = insTime < instance.currentTime;
        if (children) syncInstanceChildren(insTime);
        if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback("begin");
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback("loopBegin");
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback("changeBegin");
            }
            setCallback("change");
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback("changeComplete");
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback("update");
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback("loopComplete");
                    setCallback("complete");
                    if (!instance.passThrough && "Promise" in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback("loopComplete");
                instance.loopBegan = false;
                if (instance.direction === "alternate") toggleInstanceDirection();
            }
        }
    }
    instance.reset = function() {
        var direction = instance.direction;
        instance.passThrough = false;
        instance.currentTime = 0;
        instance.progress = 0;
        instance.paused = true;
        instance.began = false;
        instance.loopBegan = false;
        instance.changeBegan = false;
        instance.completed = false;
        instance.changeCompleted = false;
        instance.reversePlayback = false;
        instance.reversed = direction === "reverse";
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) instance.remaining++;
        setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;
    // Set Value helper
    instance.set = function(targets, properties) {
        setTargetsValue(targets, properties);
        return instance;
    };
    instance.tick = function(t) {
        now = t;
        if (!startTime) startTime = now;
        setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
        setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
        instance.paused = true;
        resetTime();
    };
    instance.play = function() {
        if (!instance.paused) return;
        if (instance.completed) instance.reset();
        instance.paused = false;
        activeInstances.push(instance);
        resetTime();
        engine();
    };
    instance.reverse = function() {
        toggleInstanceDirection();
        instance.completed = instance.reversed ? false : true;
        resetTime();
    };
    instance.restart = function() {
        instance.reset();
        instance.play();
    };
    instance.remove = function(targets) {
        var targetsArray = parseTargets(targets);
        removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) instance.play();
    return instance;
}
// Remove targets from animation
function removeTargetsFromAnimations(targetsArray, animations) {
    for(var a = animations.length; a--;)if (arrayContains(targetsArray, animations[a].animatable.target)) animations.splice(a, 1);
}
function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for(var c = children.length; c--;){
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
        if (!childAnimations.length && !child.children.length) children.splice(c, 1);
    }
    if (!animations.length && !children.length) instance.pause();
}
function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for(var i = activeInstances.length; i--;){
        var instance = activeInstances[i];
        removeTargetsFromInstance(targetsArray, instance);
    }
}
// Stagger helpers
function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i, t) {
        if (fromFirst) fromIndex = 0;
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(var index = 0; index < t; index++){
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                    var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    var toX = index % grid[0];
                    var toY = Math.floor(index / grid[0]);
                    var distanceX = fromX - toX;
                    var distanceY = fromY - toY;
                    var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === "x") value = -distanceX;
                    if (axis === "y") value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === "reverse") values = values.map(function(val) {
                return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
            });
        }
        var spacing = isRange ? (val2 - val1) / maxValue : val1;
        return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
}
// Timeline
function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
        var tlIndex = activeInstances.indexOf(tl);
        var children = tl.children;
        if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
        function passThrough(ins) {
            ins.passThrough = true;
        }
        for(var i = 0; i < children.length; i++)passThrough(children[i]);
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
        passThrough(tl);
        tl.seek(insParams.timelineOffset);
        var ins = anime(insParams);
        passThrough(ins);
        children.push(ins);
        var timings = getInstanceTimings(children, params);
        tl.delay = timings.delay;
        tl.endDelay = timings.endDelay;
        tl.duration = timings.duration;
        tl.seek(0);
        tl.reset();
        if (tl.autoplay) tl.play();
        return tl;
    };
    return tl;
}
anime.version = "3.2.1";
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = anime;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"k8mcy":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cQUXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventName {
    static LOAD = "load";
    static CLICK = "click";
    static RESIZE = "resize";
    static MOUSE_MOVE = "mousemove";
    static DOM_MOUSE_SCROLL = "DOMMouseScroll";
    static ON_MOUSE_WHEEL = "onmousewheel";
    static SCROLL = "scroll";
    static TOUCH_START = "touchstart";
    static TOUCH_MOVE = "touchmove";
    static TOUCH_END = "touchend";
    static ORIENTATION_CHANGE = "orientationchange";
}
exports.default = EventName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"cHJYv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Accordion {
    constructor(){
        this.init();
    }
    init = ()=>{
        document.querySelectorAll(".js-accordionTrigger").forEach((accordionTrigger)=>{
            accordionTrigger.addEventListener("click", this.toggleAccordion);
        });
    };
    toggleAccordion = (event)=>{
        const accordionTrigger = event.currentTarget;
        const accordionContents = accordionTrigger.nextElementSibling;
        accordionTrigger.classList.toggle("is-active");
        accordionContents.classList.toggle("is-show");
    };
}
exports.default = Accordion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9gboG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
class Carousel {
    constructor(){
        this.init();
    }
    init = ()=>{
        document.querySelectorAll(".c-swiper").forEach((swiperElement, index)=>{
            const swiperIndex = index + 1;
            // サムネイル
            const sliderThumbnail = new (0, _swiperDefault.default)(`.js-swiper-thumbnail-${swiperIndex}`, {
                slidesPerView: 5,
                freeMode: true,
                watchSlidesProgress: true,
                spaceBetween: 10,
                modules: [
                    (0, _swiper.FreeMode)
                ]
            });
            // スライダー
            const slider = new (0, _swiperDefault.default)(`.js-swiper-main-${swiperIndex}`, {
                slidesPerView: 1,
                navigation: {
                    nextEl: `.swiper-button-next-${swiperIndex}`,
                    prevEl: `.swiper-button-prev-${swiperIndex}`
                },
                thumbs: {
                    swiper: sliderThumbnail
                },
                modules: [
                    (0, _swiper.Navigation),
                    (0, _swiper.Thumbs)
                ]
            });
        });
    };
}
exports.default = Carousel;

},{"swiper":"3FiM0","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"3FiM0":[function(require,module,exports) {
/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "Virtual", ()=>(0, _virtualJsDefault.default));
parcelHelpers.export(exports, "Keyboard", ()=>(0, _keyboardJsDefault.default));
parcelHelpers.export(exports, "Mousewheel", ()=>(0, _mousewheelJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "Pagination", ()=>(0, _paginationJsDefault.default));
parcelHelpers.export(exports, "Scrollbar", ()=>(0, _scrollbarJsDefault.default));
parcelHelpers.export(exports, "Parallax", ()=>(0, _parallaxJsDefault.default));
parcelHelpers.export(exports, "Zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "Lazy", ()=>(0, _lazyJsDefault.default));
parcelHelpers.export(exports, "Controller", ()=>(0, _controllerJsDefault.default));
parcelHelpers.export(exports, "A11y", ()=>(0, _a11YJsDefault.default));
parcelHelpers.export(exports, "History", ()=>(0, _historyJsDefault.default));
parcelHelpers.export(exports, "HashNavigation", ()=>(0, _hashNavigationJsDefault.default));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _autoplayJsDefault.default));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _thumbsJsDefault.default));
parcelHelpers.export(exports, "FreeMode", ()=>(0, _freeModeJsDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridJsDefault.default));
parcelHelpers.export(exports, "Manipulation", ()=>(0, _manipulationJsDefault.default));
parcelHelpers.export(exports, "EffectFade", ()=>(0, _effectFadeJsDefault.default));
parcelHelpers.export(exports, "EffectCube", ()=>(0, _effectCubeJsDefault.default));
parcelHelpers.export(exports, "EffectFlip", ()=>(0, _effectFlipJsDefault.default));
parcelHelpers.export(exports, "EffectCoverflow", ()=>(0, _effectCoverflowJsDefault.default));
parcelHelpers.export(exports, "EffectCreative", ()=>(0, _effectCreativeJsDefault.default));
parcelHelpers.export(exports, "EffectCards", ()=>(0, _effectCardsJsDefault.default));
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _lazyJs = require("./modules/lazy/lazy.js");
var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"dlBAY","./modules/virtual/virtual.js":"16ihV","./modules/keyboard/keyboard.js":"6ObmY","./modules/mousewheel/mousewheel.js":"2px9B","./modules/navigation/navigation.js":"3uSAG","./modules/pagination/pagination.js":"bmLKR","./modules/scrollbar/scrollbar.js":"f3u0k","./modules/parallax/parallax.js":"8flGO","./modules/zoom/zoom.js":"ej9dp","./modules/lazy/lazy.js":"7MZvU","./modules/controller/controller.js":"7yZSz","./modules/a11y/a11y.js":"2pnSf","./modules/history/history.js":"1c4Mj","./modules/hash-navigation/hash-navigation.js":"iKPqy","./modules/autoplay/autoplay.js":"4tkXQ","./modules/thumbs/thumbs.js":"awNZk","./modules/free-mode/free-mode.js":"kWrLv","./modules/grid/grid.js":"7daw0","./modules/manipulation/manipulation.js":"2qaKC","./modules/effect-fade/effect-fade.js":"bKlsD","./modules/effect-cube/effect-cube.js":"2QTXO","./modules/effect-flip/effect-flip.js":"ahuCI","./modules/effect-coverflow/effect-coverflow.js":"aa1wj","./modules/effect-creative/effect-creative.js":"fss01","./modules/effect-cards/effect-cards.js":"glKpV","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"dlBAY":[function(require,module,exports) {
/* eslint no-param-reassign: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./images/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./check-overflow/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
const prototypes = {
    eventsEmitter: (0, _eventsEmitterJsDefault.default),
    update: (0, _indexJsDefault.default),
    translate: (0, _indexJsDefault1.default),
    transition: (0, _indexJsDefault2.default),
    slide: (0, _indexJsDefault3.default),
    loop: (0, _indexJsDefault4.default),
    grabCursor: (0, _indexJsDefault5.default),
    events: (0, _indexJsDefault6.default),
    breakpoints: (0, _indexJsDefault7.default),
    checkOverflow: (0, _indexJsDefault10.default),
    classes: (0, _indexJsDefault8.default),
    images: (0, _indexJsDefault9.default)
};
const extendedDefaults = {};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsJs.extend)({}, params);
        if (el && !params.el) params.el = el;
        if (params.el && (0, _domJsDefault.default)(params.el).length > 1) {
            const swipers = [];
            (0, _domJsDefault.default)(params.el).each((containerEl)=>{
                const newParams = (0, _utilsJs.extend)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            }); // eslint-disable-next-line no-constructor-return
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = (0, _getSupportJs.getSupport)();
        swiper.device = (0, _getDeviceJs.getDevice)({
            userAgent: params.userAgent
        });
        swiper.browser = (0, _getBrowserJs.getBrowser)();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: (0, _moduleExtendParamsJsDefault.default)(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = (0, _utilsJs.extend)({}, (0, _defaultsJsDefault.default), allModulesParams); // Extend defaults with passed params
        swiper.params = (0, _utilsJs.extend)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsJs.extend)({}, swiper.params);
        swiper.passedParams = (0, _utilsJs.extend)({}, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = (0, _domJsDefault.default); // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: (0, _domJsDefault.default)(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel"
                ];
                const desktop = [
                    "pointerdown",
                    "pointermove",
                    "pointerup"
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: (0, _utilsJs.now)(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper"); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
            swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "rtl";
        } else {
            swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "ltr";
        }
        swiper.update();
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = (0, _domJsDefault.default)(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = (0, _domJsDefault.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options);
                return res;
            }
            if (!$el.children) return (0, _domJsDefault.default)($el).children(getWrapperSelector());
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = (0, _ssrWindow.getDocument)();
            const wrapper = document.createElement("div");
            $wrapperEl = (0, _domJsDefault.default)(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
            wrongRTL: $wrapperEl.css("display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit"); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params, $el, $wrapperEl, slides } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy"); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr("style");
            $wrapperEl.removeAttr("style");
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
        swiper.emit("destroy"); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            (0, _utilsJs.deleteProps)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsJs.extend)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return 0, _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    (0, _resizeJsDefault.default),
    (0, _observerJsDefault.default)
]);
exports.default = Swiper;

},{"ssr-window":"aOFDe","../shared/dom.js":"fopOr","../shared/utils.js":"eb5jw","../shared/get-support.js":"cWrJC","../shared/get-device.js":"5wKYQ","../shared/get-browser.js":"42snB","./modules/resize/resize.js":"7AT2m","./modules/observer/observer.js":"7ZZdq","./events-emitter.js":"5jI8j","./update/index.js":"fq9bE","./translate/index.js":"b0hZI","./transition/index.js":"2GDTw","./slide/index.js":"eYJWp","./loop/index.js":"fvn2x","./grab-cursor/index.js":"djKAb","./events/index.js":"8gFE5","./breakpoints/index.js":"9wfDO","./classes/index.js":"fhMJQ","./images/index.js":"ikJj7","./check-overflow/index.js":"aMA6f","./defaults.js":"4ojES","./moduleExtendParams.js":"mc36c","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"aOFDe":[function(require,module,exports) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getDocument", ()=>getDocument);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow);
function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fopOr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
const Methods = {
    addClass: (0, _dom7.addClass),
    removeClass: (0, _dom7.removeClass),
    hasClass: (0, _dom7.hasClass),
    toggleClass: (0, _dom7.toggleClass),
    attr: (0, _dom7.attr),
    removeAttr: (0, _dom7.removeAttr),
    transform: (0, _dom7.transform),
    transition: (0, _dom7.transition),
    on: (0, _dom7.on),
    off: (0, _dom7.off),
    trigger: (0, _dom7.trigger),
    transitionEnd: (0, _dom7.transitionEnd),
    outerWidth: (0, _dom7.outerWidth),
    outerHeight: (0, _dom7.outerHeight),
    styles: (0, _dom7.styles),
    offset: (0, _dom7.offset),
    css: (0, _dom7.css),
    each: (0, _dom7.each),
    html: (0, _dom7.html),
    text: (0, _dom7.text),
    is: (0, _dom7.is),
    index: (0, _dom7.index),
    eq: (0, _dom7.eq),
    append: (0, _dom7.append),
    prepend: (0, _dom7.prepend),
    next: (0, _dom7.next),
    nextAll: (0, _dom7.nextAll),
    prev: (0, _dom7.prev),
    prevAll: (0, _dom7.prevAll),
    parent: (0, _dom7.parent),
    parents: (0, _dom7.parents),
    closest: (0, _dom7.closest),
    find: (0, _dom7.find),
    children: (0, _dom7.children),
    filter: (0, _dom7.filter),
    remove: (0, _dom7.remove)
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty((0, _dom7.$).fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = (0, _dom7.$);

},{"dom7":"ebjFJ","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ebjFJ":[function(require,module,exports) {
/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addClass", ()=>addClass);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd);
parcelHelpers.export(exports, "append", ()=>append);
parcelHelpers.export(exports, "appendTo", ()=>appendTo);
parcelHelpers.export(exports, "attr", ()=>attr);
parcelHelpers.export(exports, "blur", ()=>blur);
parcelHelpers.export(exports, "change", ()=>change);
parcelHelpers.export(exports, "children", ()=>children);
parcelHelpers.export(exports, "click", ()=>click);
parcelHelpers.export(exports, "closest", ()=>closest);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "dataset", ()=>dataset);
parcelHelpers.export(exports, "detach", ()=>detach);
parcelHelpers.export(exports, "each", ()=>each);
parcelHelpers.export(exports, "empty", ()=>empty);
parcelHelpers.export(exports, "eq", ()=>eq);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "find", ()=>find);
parcelHelpers.export(exports, "focus", ()=>focus);
parcelHelpers.export(exports, "focusin", ()=>focusin);
parcelHelpers.export(exports, "focusout", ()=>focusout);
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
parcelHelpers.export(exports, "height", ()=>height);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "index", ()=>index);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "keydown", ()=>keydown);
parcelHelpers.export(exports, "keypress", ()=>keypress);
parcelHelpers.export(exports, "keyup", ()=>keyup);
parcelHelpers.export(exports, "mousedown", ()=>mousedown);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave);
parcelHelpers.export(exports, "mousemove", ()=>mousemove);
parcelHelpers.export(exports, "mouseout", ()=>mouseout);
parcelHelpers.export(exports, "mouseover", ()=>mouseover);
parcelHelpers.export(exports, "mouseup", ()=>mouseup);
parcelHelpers.export(exports, "next", ()=>next);
parcelHelpers.export(exports, "nextAll", ()=>nextAll);
parcelHelpers.export(exports, "off", ()=>off);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "once", ()=>once);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth);
parcelHelpers.export(exports, "parent", ()=>parent);
parcelHelpers.export(exports, "parents", ()=>parents);
parcelHelpers.export(exports, "prepend", ()=>prepend);
parcelHelpers.export(exports, "prependTo", ()=>prependTo);
parcelHelpers.export(exports, "prev", ()=>prev);
parcelHelpers.export(exports, "prevAll", ()=>prevAll);
parcelHelpers.export(exports, "prop", ()=>prop);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr);
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
parcelHelpers.export(exports, "removeData", ()=>removeData);
parcelHelpers.export(exports, "resize", ()=>resize);
parcelHelpers.export(exports, "scroll", ()=>scroll);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop);
parcelHelpers.export(exports, "show", ()=>show);
parcelHelpers.export(exports, "siblings", ()=>siblings);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "styles", ()=>styles);
parcelHelpers.export(exports, "submit", ()=>submit);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass);
parcelHelpers.export(exports, "touchend", ()=>touchend);
parcelHelpers.export(exports, "touchmove", ()=>touchmove);
parcelHelpers.export(exports, "touchstart", ()=>touchstart);
parcelHelpers.export(exports, "transform", ()=>transform);
parcelHelpers.export(exports, "transition", ()=>transition);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd);
parcelHelpers.export(exports, "transitionStart", ()=>transitionStart);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "val", ()=>val);
parcelHelpers.export(exports, "value", ()=>value);
parcelHelpers.export(exports, "width", ()=>width);
var _ssrWindow = require("ssr-window");
/* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
        get () {
            return proto;
        },
        set (value) {
            proto.__proto__ = value;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        if (typeof items === "number") super(items);
        else {
            super(...items || []);
            makeReactive(this);
        }
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase());
}
// eslint-disable-next-line
function qsa(selector, context) {
    if (typeof selector !== "string") return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === "string") {
        const html = selector.trim();
        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
            let toCreate = "div";
            if (html.indexOf("<li") === 0) toCreate = "ul";
            if (html.indexOf("<tr") === 0) toCreate = "tbody";
            if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
            if (html.indexOf("<tbody") === 0) toCreate = "table";
            if (html.indexOf("<option") === 0) toCreate = "select";
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
// eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)).length > 0;
    }).length > 0;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
    return this;
}
function prop(props, value) {
    if (arguments.length === 1 && typeof props === "string") {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value) {
    let el;
    if (typeof value === "undefined") {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
    }
    return this;
}
function removeData(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset = {}; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)dataset[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const attr = el.attributes[i];
        if (attr.name.indexOf("data-") >= 0) dataset[toCamelCase(attr.name.split("data-")[1])] = attr.value;
    }
    for(const key in dataset){
        if (dataset[key] === "false") dataset[key] = false;
        else if (dataset[key] === "true") dataset[key] = true;
        else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
    }
    return dataset;
}
function val(value) {
    if (typeof value === "undefined") {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === "select") {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === "select") for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
        else el.value = value;
    }
    return this;
}
function value(value) {
    return this.val(value);
}
function transform(transform) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform;
    return this;
}
function transition(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(" ");
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(" ");
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
    const window = (0, _ssrWindow.getWindow)();
    const events = args[0].split(" ");
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0);
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionStart(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("transitionstart", fireCallBack);
    }
    if (callback) dom.on("transitionstart", fireCallBack);
    return this;
}
function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("transitionend", fireCallBack);
    }
    if (callback) dom.on("transitionend", fireCallBack);
    return this;
}
function animationEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("animationend", fireCallBack);
    }
    if (callback) dom.on("animationend", fireCallBack);
    return this;
}
function width() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css("width"));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css("height"));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = (0, _ssrWindow.getWindow)();
        const document = (0, _ssrWindow.getDocument)();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    return null;
}
function hide() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = "none";
    return this;
}
function show() {
    const window = (0, _ssrWindow.getWindow)();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === "none") el.style.display = "";
        if (window.getComputedStyle(el, null).getPropertyValue("display") === "none") // Still not visible
        el.style.display = "block";
    }
    return this;
}
function styles() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
}
function css(props, value) {
    const window = (0, _ssrWindow.getWindow)();
    let i;
    if (arguments.length === 1) {
        if (typeof props === "string") {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === "string") {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index)=>{
        callback.apply(el, [
            el,
            index
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html) {
    if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html;
    return this;
}
function text(text) {
    if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text;
    return this;
}
function is(selector) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === "undefined") return false;
    if (typeof selector === "string") {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index) {
    if (typeof index === "undefined") return this;
    const length = this.length;
    if (index > length - 1) return $([]);
    if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index]
    ]);
}
function append(...els) {
    let newChild;
    const document = (0, _ssrWindow.getDocument)();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === "string") {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent) {
    $(parent).append(this);
    return this;
}
function prepend(newChild) {
    const document = (0, _ssrWindow.getDocument)();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === "string") {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent) {
    $(parent).prepend(this);
    return this;
}
function insertBefore(selector) {
    const before = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    const after = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else parents.push(this[i].parentNode);
    }
    return $(parents);
}
function parents(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent = this[i].parentNode; // eslint-disable-line
        while(parent){
            if (selector) {
                if ($(parent).is(selector)) parents.push(parent);
            } else parents.push(parent);
            parent = parent.parentNode;
        }
    }
    return $(parents);
}
function closest(selector) {
    let closest = this; // eslint-disable-line
    if (typeof selector === "undefined") return $([]);
    if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
    return closest;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
    }
    return $(children);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = "";
        }
    }
    return this;
}
// eslint-disable-next-line
function scrollTo(...args) {
    const window = (0, _ssrWindow.getWindow)();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === "function") {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === "undefined") easing = "swing";
    return this.each(function animate() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let scrollTop; // eslint-disable-line
        let scrollLeft; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === "undefined") easing = "swing";
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === "linear" ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop;
            if (animateLeft) el.scrollLeft = scrollLeft;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === "function") [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === "undefined") {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === "function") [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === "undefined") {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function animate(initialProps, initialParams) {
    const window = (0, _ssrWindow.getWindow)();
    const els = this;
    const a = {
        props: Object.assign({}, initialProps),
        params: Object.assign({
            duration: 300,
            easing: "swing" // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === "swing") return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === "function") return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, index)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                elements[index] = {
                    container: el
                };
                Object.keys(props).forEach((prop)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(",", ".");
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, "");
                    finalValue = parseFloat(props[prop]);
                    finalFullValue = props[prop] + unit;
                    elements[index][prop] = {
                        initialFullValue,
                        initialValue,
                        unit,
                        finalValue,
                        finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach((prop)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue, finalValue, unit } = el[prop];
                        el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[prop].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === "stop") animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const noTrigger = "resize scroll".split(" ");
function shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === "undefined") {
            for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const click = shortcut("click");
const blur = shortcut("blur");
const focus = shortcut("focus");
const focusin = shortcut("focusin");
const focusout = shortcut("focusout");
const keyup = shortcut("keyup");
const keydown = shortcut("keydown");
const keypress = shortcut("keypress");
const submit = shortcut("submit");
const change = shortcut("change");
const mousedown = shortcut("mousedown");
const mousemove = shortcut("mousemove");
const mouseup = shortcut("mouseup");
const mouseenter = shortcut("mouseenter");
const mouseleave = shortcut("mouseleave");
const mouseout = shortcut("mouseout");
const mouseover = shortcut("mouseover");
const touchstart = shortcut("touchstart");
const touchend = shortcut("touchend");
const touchmove = shortcut("touchmove");
const resize = shortcut("resize");
const scroll = shortcut("scroll");
exports.default = $;

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"eb5jw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {}
        try {
            delete object[key];
        } catch (e) {}
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindow.getWindow)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = "x") {
    const window1 = (0, _ssrWindow.getWindow)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper, targetPosition, side }) {
    const window1 = (0, _ssrWindow.getWindow)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"cWrJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    return {
        smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
        touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({}, "passive", {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("testPassiveListener", null, opts);
            } catch (e) {}
            return supportsPassive;
        }(),
        gestures: function checkGestures() {
            return "ongesturestart" in window;
        }()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"5wKYQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice({ userAgent } = {}) {
    const support = (0, _getSupportJs.getSupport)();
    const window = (0, _ssrWindow.getWindow)();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel"; // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"aOFDe","./get-support.js":"cWrJC","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"42snB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = (0, _ssrWindow.getWindow)();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7AT2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Resize);
var _ssrWindow = require("ssr-window");
function Resize({ swiper, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach(({ contentBoxSize, contentRect, target })=>{
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", orientationChangeHandler);
    });
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7ZZdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Observer);
var _ssrWindow = require("ssr-window");
function Observer({ swiper, extendParams, on, emit }) {
    const observers = [];
    const window = (0, _ssrWindow.getWindow)();
    const attach = (target, options = {})=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"5jI8j":[function(require,module,exports) {
/* eslint-disable no-underscore-dangle */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fq9bE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: (0, _updateSizeJsDefault.default),
    updateSlides: (0, _updateSlidesJsDefault.default),
    updateAutoHeight: (0, _updateAutoHeightJsDefault.default),
    updateSlidesOffset: (0, _updateSlidesOffsetJsDefault.default),
    updateSlidesProgress: (0, _updateSlidesProgressJsDefault.default),
    updateProgress: (0, _updateProgressJsDefault.default),
    updateSlidesClasses: (0, _updateSlidesClassesJsDefault.default),
    updateActiveIndex: (0, _updateActiveIndexJsDefault.default),
    updateClickedSlide: (0, _updateClickedSlideJsDefault.default)
};

},{"./updateSize.js":"kE28f","./updateSlides.js":"eUFQL","./updateAutoHeight.js":"22hB5","./updateSlidesOffset.js":"l16Z8","./updateSlidesProgress.js":"7jmdx","./updateProgress.js":"jLERr","./updateSlidesClasses.js":"1NVwj","./updateActiveIndex.js":"6byfZ","./updateClickedSlide.js":"cBWUr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"kE28f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSize);
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"eUFQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlides);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    });
    else slides.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css("display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = "none";
            if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
    }
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"22hB5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateAutoHeight);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index)[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || (0, _domJsDefault.default)([])).each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
}

},{"../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"l16Z8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesOffset);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7jmdx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesProgress);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = (0, _domJsDefault.default)(swiper.visibleSlides);
}

},{"../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"jLERr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateProgress);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"1NVwj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesClasses);
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"6byfZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateActiveIndex);
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === "undefined") {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"cBWUr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = (0, _domJsDefault.default)(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt((0, _domJsDefault.default)(slide).attr("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}

},{"../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"b0hZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: (0, _getTranslateJsDefault.default),
    setTranslate: (0, _setTranslateJsDefault.default),
    minTranslate: (0, _minTranslateJsDefault.default),
    maxTranslate: (0, _maxTranslateJsDefault.default),
    translateTo: (0, _translateToJsDefault.default)
};

},{"./getTranslate.js":"4sx7g","./setTranslate.js":"2bdQf","./minTranslate.js":"e3cTB","./maxTranslate.js":"GdrWA","./translateTo.js":"fEam1","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"4sx7g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getSwiperTranslate);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsJs.getTranslate)($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2bdQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTranslate);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit("setTranslate", swiper.translate, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"e3cTB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>minTranslate);
function minTranslate() {
    return -this.snapGrid[0];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"GdrWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>maxTranslate);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fEam1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>translateTo);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2GDTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: (0, _setTransitionJsDefault.default),
    transitionStart: (0, _transitionStartJsDefault.default),
    transitionEnd: (0, _transitionEndJsDefault.default)
};

},{"./setTransition.js":"jebMl","./transitionStart.js":"jq89X","./transitionEnd.js":"dEHbP","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"jebMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTransition);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit("setTransition", duration, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"jq89X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionStart);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}

},{"./transitionEmit.js":"3fHYi","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"3fHYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEmit);
function transitionEmit({ swiper, runCallbacks, direction, step }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"dEHbP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEnd);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}

},{"./transitionEmit.js":"3fHYi","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"eYJWp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: (0, _slideToJsDefault.default),
    slideToLoop: (0, _slideToLoopJsDefault.default),
    slideNext: (0, _slideNextJsDefault.default),
    slidePrev: (0, _slidePrevJsDefault.default),
    slideReset: (0, _slideResetJsDefault.default),
    slideToClosest: (0, _slideToClosestJsDefault.default),
    slideToClickedSlide: (0, _slideToClickedSlideJsDefault.default)
};

},{"./slideTo.js":"9PRTp","./slideToLoop.js":"7NLtI","./slideNext.js":"17OMS","./slidePrev.js":"kVaaH","./slideReset.js":"7omT7","./slideToClosest.js":"jNG3K","./slideToClickedSlide.js":"9v8l6","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9PRTp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideTo);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === "string") {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex]; // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
     // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset"; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7NLtI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToLoop);
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    if (typeof index === "string") {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"17OMS":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideNext);
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating, enabled, params } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"kVaaH":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slidePrev);
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7omT7":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideReset);
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"jNG3K":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClosest);
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9v8l6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt((0, _domJsDefault.default)(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                (0, _utilsJs.nextTick)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            (0, _utilsJs.nextTick)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}

},{"../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fvn2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: (0, _loopCreateJsDefault.default),
    loopFix: (0, _loopFixJsDefault.default),
    loopDestroy: (0, _loopDestroyJsDefault.default)
};

},{"./loopCreate.js":"4QKrk","./loopFix.js":"9YZeW","./loopDestroy.js":"27bDH","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"4QKrk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopCreate);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loopCreate() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, $wrapperEl } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? (0, _domJsDefault.default)($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = (0, _domJsDefault.default)(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = (0, _domJsDefault.default)(el);
        slide.attr("data-swiper-slide-index", index);
    });
    for(let i = 0; i < swiper.loopedSlides; i += 1){
        const index = i - Math.floor(i / slides.length) * slides.length;
        appendSlides.push(slides.eq(index)[0]);
        prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
    }
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append((0, _domJsDefault.default)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i = prependSlides.length - 1; i >= 0; i -= 1)$selector.prepend((0, _domJsDefault.default)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9YZeW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopFix);
function loopFix() {
    const swiper = this;
    swiper.emit("beforeLoopFix");
    const { activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"27bDH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopDestroy);
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl, params, slides } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr("data-swiper-slide-index");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"djKAb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: (0, _setGrabCursorJsDefault.default),
    unsetGrabCursor: (0, _unsetGrabCursorJsDefault.default)
};

},{"./setGrabCursor.js":"fOlyT","./unsetGrabCursor.js":"e9sQe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fOlyT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setGrabCursor);
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"e9sQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>unsetGrabCursor);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8gFE5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method)=>{
    const document = (0, _ssrWindow.getDocument)();
    const { params, touchEvents, el, wrapperEl, device, support } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", (0, _onResizeJsDefault.default), true);
    else swiper[swiperMethod]("observerUpdate", (0, _onResizeJsDefault.default), true);
};
function attachEvents() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, support } = swiper;
    swiper.onTouchStart = (0, _onTouchStartJsDefault.default).bind(swiper);
    swiper.onTouchMove = (0, _onTouchMoveJsDefault.default).bind(swiper);
    swiper.onTouchEnd = (0, _onTouchEndJsDefault.default).bind(swiper);
    if (params.cssMode) swiper.onScroll = (0, _onScrollJsDefault.default).bind(swiper);
    swiper.onClick = (0, _onClickJsDefault.default).bind(swiper);
    if (support.touch && !dummyEventAttached) {
        document.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"aOFDe","./onTouchStart.js":"9kME5","./onTouchMove.js":"hrghn","./onTouchEnd.js":"ia7SR","./onResize.js":"5Ybmg","./onClick.js":"ieZ2r","./onScroll.js":"a7WNm","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9kME5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchStart);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindow.getDocument)() || el === (0, _ssrWindow.getWindow)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    const data = swiper.touchEventsData;
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = (0, _domJsDefault.default)(e.target);
    if (params.touchEventsTarget === "wrapper") {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) return;
    if (!data.isTouchEvent && "button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ""; // eslint-disable-next-line
    const eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = (0, _domJsDefault.default)(eventPath[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsJs.now)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== "touchstart") {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) {
            preventDefault = false;
            if ($targetEl[0].nodeName === "SELECT") data.isTouched = false;
        }
        if (document.activeElement && (0, _domJsDefault.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit("touchStart", e);
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"hrghn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchMove);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = (0, _ssrWindow.getDocument)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    if (data.isTouchEvent && e.type !== "touchmove") return;
    const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!(0, _domJsDefault.default)(e.target).is(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsJs.now)();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && (0, _domJsDefault.default)(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ia7SR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchEnd);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = (0, _utilsJs.now)();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsJs.now)();
    (0, _utilsJs.nextTick)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"5Ybmg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onResize);
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ieZ2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onClick);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"a7WNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onScroll);
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9wfDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: (0, _setBreakpointJsDefault.default),
    getBreakpoint: (0, _getBreakpointJsDefault.default)
};

},{"./setBreakpoint.js":"hearO","./getBreakpoint.js":"fKsgk","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"hearO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setBreakpoint);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } // Toggle navigation, pagination, scrollbar
    [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((prop)=>{
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsJs.extend)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit("breakpoint", breakpointParams);
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fKsgk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBreakpoint);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base = "window", containerEl) {
    if (!breakpoints || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window = (0, _ssrWindow.getWindow)();
    const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === "window") {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fhMJQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: (0, _addClassesJsDefault.default),
    removeClasses: (0, _removeClassesJsDefault.default)
};

},{"./addClasses.js":"lYfPo","./removeClasses.js":"8x1zo","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"lYfPo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addClasses);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, $el, device, support } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "pointer-events": !support.touch
        },
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        },
        {
            "watch-progress": params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(" "));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8x1zo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeClasses);
function removeClasses() {
    const swiper = this;
    const { $el, classNames } = swiper;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ikJj7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImageJs = require("./loadImage.js");
var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
var _preloadImagesJs = require("./preloadImages.js");
var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
exports.default = {
    loadImage: (0, _loadImageJsDefault.default),
    preloadImages: (0, _preloadImagesJsDefault.default)
};

},{"./loadImage.js":"g6xzX","./preloadImages.js":"aAAjT","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"g6xzX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loadImage);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = (0, _ssrWindow.getWindow)();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = (0, _domJsDefault.default)(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"aAAjT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>preloadImages);
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
        if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit("imagesReady");
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"aMA6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"4ojES":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: true,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"mc36c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>moduleExtendParams);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if ([
            "navigation",
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsJs.extend)(allModulesParams, obj);
    };
}

},{"../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"16ihV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Virtual({ swiper, extendParams, on, emit }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? (0, _domJsDefault.default)(params.renderSlide.call(swiper, slide, index)) : (0, _domJsDefault.default)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr("data-swiper-slide-index")) $slideEl.attr("data-swiper-slide-index", index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
        const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = "right";
        else offsetProp = swiper.isHorizontal() ? "left" : "top";
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
            emit("virtualUpdate");
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            emit("virtualUpdate");
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit("virtualUpdate");
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i = 0; i < slides.length; i += 1)if (i >= from && i <= to) {
            if (typeof previousTo === "undefined" || force) appendIndexes.push(i);
            else {
                if (i > previousTo) appendIndexes.push(i);
                if (i < previousFrom) prependIndexes.push(i);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
                if (cachedElIndex) $cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on("beforeInit", ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on("init update resize", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}

},{"../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"6ObmY":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Keyboard({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit("keyPress", kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).on("keydown", handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).off("keydown", handle);
        swiper.keyboard.enabled = false;
    }
    on("init", ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2px9B":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Mousewheel({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, _utilsJs.now)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ("detail" in e) sY = e.detail;
        if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
        if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
        if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ("deltaY" in e) pY = e.deltaY;
        if ("deltaX" in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, _utilsJs.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, _utilsJs.now)() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit("scroll", newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit("scroll", newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, _utilsJs.nextTick)(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, _utilsJs.nextTick)(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit("scroll", e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        target[method]("mouseenter", handleMouseEnter);
        target[method]("mouseleave", handleMouseLeave);
        target[method]("wheel", handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener("wheel", handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events("on");
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events("off");
        swiper.mousewheel.enabled = false;
        return true;
    }
    on("init", ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"3uSAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Navigation({ swiper, extendParams, on, emit }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = (0, _domJsDefault.default)(el);
            if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
            if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit("navigationPrev");
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit("navigationNext");
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off("click", onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off("click", onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on("init", ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on("toEdge fromEdge lock unlock", ()=>{
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    });
    on("click", (_s, e)=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !(0, _domJsDefault.default)(targetEl).is($prevEl) && !(0, _domJsDefault.default)(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit("navigationShow");
            else emit("navigationHide");
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
        init();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}

},{"../../shared/create-element-if-not-defined.js":"fbk01","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fbk01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createElementIfNotDefined);
var _ssrWindow = require("ssr-window");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = (0, _ssrWindow.getDocument)();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement("div");
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"bmLKR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Pagination({ swiper, extendParams, on, emit }) {
    const pfx = "swiper-pagination";
    extendParams({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
        } else if (typeof swiper.snapIndex !== "undefined") current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main"
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`).join(" "));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = (0, _domJsDefault.default)(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                    if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, "prev");
                            setSideBullets($lastDisplayedBullet, "next");
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, "prev");
                        setSideBullets($lastDisplayedBullet, "next");
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? "right" : "left";
                bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
            }
        }
        if (params.type === "fraction") {
            $el.find((0, _classesToSelectorJsDefault.default)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find((0, _classesToSelectorJsDefault.default)(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === "progressbar") {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
            else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === "horizontal") scaleX = scale;
            else scaleY = scale;
            $el.find((0, _classesToSelectorJsDefault.default)(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === "custom" && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit("paginationRender", $el[0]);
        } else emit("paginationUpdate", $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = "";
        if (params.type === "bullets") {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find((0, _classesToSelectorJsDefault.default)(params.bulletClass));
        }
        if (params.type === "fraction") {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === "progressbar") {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== "custom") emit("paginationRender", swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: "swiper-pagination"
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if ((0, _domJsDefault.default)(el).parents(".swiper")[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === "bullets" && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === "progressbar" && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = (0, _domJsDefault.default)(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass));
    }
    on("init", ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on("activeIndexChange", ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === "undefined") update();
    });
    on("snapIndexChange", ()=>{
        if (!swiper.params.loop) update();
    });
    on("slidesLengthChange", ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on("snapGridLengthChange", ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        const { $el } = swiper.pagination;
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
    });
    on("lock unlock", ()=>{
        update();
    });
    on("click", (_s, e)=>{
        const targetEl = e.target;
        const { $el } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !(0, _domJsDefault.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit("paginationShow");
            else emit("paginationHide");
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
    });
}

},{"../../shared/dom.js":"fopOr","../../shared/classes-to-selector.js":"fr2xF","../../shared/create-element-if-not-defined.js":"fbk01","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fr2xF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>classesToSelector);
function classesToSelector(classes = "") {
    return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1") // eslint-disable-line
    .replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"f3u0k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar, rtlTranslate: rtl, progress } = swiper;
        const { $dragEl, $el } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar } = swiper;
        const { $dragEl, $el } = scrollbar;
        $dragEl[0].style.width = "";
        $dragEl[0].style.height = "";
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = "none";
        else $el[0].style.display = "";
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
        return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { $el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css("opacity", 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css("scroll-snap-type", "none");
        emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css("scroll-snap-type", "");
            $wrapperEl.transition("");
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, _utilsJs.nextTick)(()=>{
                $el.css("opacity", 0);
                $el.transition(400);
            }, 1000);
        }
        emit("scrollbarDragEnd", e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support } = swiper;
        const $el = scrollbar.$el;
        if (!$el) return;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("on");
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("off");
    }
    function init() {
        const { scrollbar, $el: $swiperEl } = swiper;
        swiper.params.scrollbar = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = (0, _domJsDefault.default)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const $el = swiper.scrollbar.$el;
        if ($el) $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        disableDraggable();
    }
    on("init", ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on("update resize observerUpdate lock unlock", ()=>{
        updateSize();
    });
    on("setTranslate", ()=>{
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        setTransition(duration);
    });
    on("enable disable", ()=>{
        const { $el } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    });
    on("destroy", ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","../../shared/create-element-if-not-defined.js":"fbk01","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8flGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Parallax({ swiper, extendParams, on }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl } = swiper;
        const $el = (0, _domJsDefault.default)(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr("data-swiper-parallax") || "0";
        let x = $el.attr("data-swiper-parallax-x");
        let y = $el.attr("data-swiper-parallax-y");
        const scale = $el.attr("data-swiper-parallax-scale");
        const opacity = $el.attr("data-swiper-parallax-opacity");
        if (x || y) {
            x = x || "0";
            y = y || "0";
        } else if (swiper.isHorizontal()) {
            x = p;
            y = "0";
        } else {
            y = p;
            x = "0";
        }
        if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== "undefined" && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === "undefined" || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el, slides, progress, snapGrid } = swiper;
        $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            (0, _domJsDefault.default)(slideEl).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { $el } = swiper;
        $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((parallaxEl)=>{
            const $parallaxEl = (0, _domJsDefault.default)(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on("beforeInit", ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTransition", (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}

},{"../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ej9dp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Zoom({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit("zoomChange", value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === "gesturechange") onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "x") || 0;
            image.startY = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "y") || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform("translate3d(0,0,0)");
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.touchAction = "none";
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === "undefined" && e) {
            touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "";
            swiper.wrapperEl.style.touchAction = "";
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === "touchstart" && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]("gesturestart", slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]("gesturechange", slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]("gestureend", slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures("on");
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures("off");
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === "touchstart") {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === "touchstart") {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on("init", ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on("destroy", ()=>{
        disable();
    });
    on("touchStart", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on("touchEnd", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on("doubleTap", (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on("transitionEnd", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on("slideChange", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7MZvU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Lazy);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Lazy({ swiper, extendParams, on, emit }) {
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
        }
    });
    swiper.lazy = {};
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate = true) {
        const params = swiper.params.lazy;
        if (typeof index === "undefined") return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = (0, _domJsDefault.default)(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr("data-background");
            const src = $imageEl.attr("data-src");
            const srcset = $imageEl.attr("data-srcset");
            const sizes = $imageEl.attr("data-sizes");
            const $pictureEl = $imageEl.parent("picture");
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === "undefined" || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css("background-image", `url("${background}")`);
                    $imageEl.removeAttr("data-background");
                } else {
                    if (srcset) {
                        $imageEl.attr("srcset", srcset);
                        $imageEl.removeAttr("data-srcset");
                    }
                    if (sizes) {
                        $imageEl.attr("sizes", sizes);
                        $imageEl.removeAttr("data-sizes");
                    }
                    if ($pictureEl.length) $pictureEl.children("source").each((sourceEl)=>{
                        const $source = (0, _domJsDefault.default)(sourceEl);
                        if ($source.attr("data-srcset")) {
                            $source.attr("srcset", $source.attr("data-srcset"));
                            $source.removeAttr("data-srcset");
                        }
                    });
                    if (src) {
                        $imageEl.attr("src", src);
                        $imageEl.removeAttr("data-src");
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === "auto") slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index");
            return (0, _domJsDefault.default)(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index") : (0, _domJsDefault.default)(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = Math.ceil(slidesPerView);
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + spv; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i = minIndex; i < activeIndex; i += 1)if (slideExist(i)) loadInSlide(i);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? (0, _domJsDefault.default)(swiper.params.lazy.scrollingElement) : (0, _domJsDefault.default)(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === "touchstart" && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
        }
    }
    on("beforeInit", ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on("init", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("scroll", ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("transitionStart", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on("transitionEnd", ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("slideChange", ()=>{
        const { lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    on("destroy", ()=>{
        if (!swiper.$el) return;
        swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
    });
    Object.assign(swiper.lazy, {
        load,
        loadInSlide
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7yZSz":[function(require,module,exports) {
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsJs = require("../../shared/utils.js");
function Controller({ swiper, extendParams, on }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: "slide" // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === "slide") {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === "container") {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, _utilsJs.nextTick)(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === "slide") c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on("beforeInit", ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on("update", ()=>{
        removeSpline();
    });
    on("resize", ()=>{
        removeSpline();
    });
    on("observerUpdate", ()=>{
        removeSpline();
    });
    on("setTranslate", (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on("setTransition", (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2pnSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function A11y({ swiper, extendParams, on }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html("");
        notification.html(message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr("tabIndex", "0");
    }
    function makeElNotFocusable($el) {
        $el.attr("tabIndex", "-1");
    }
    function addElRole($el, role) {
        $el.attr("role", role);
    }
    function addElRoleDescription($el, description) {
        $el.attr("aria-roledescription", description);
    }
    function addElControls($el, controls) {
        $el.attr("aria-controls", controls);
    }
    function addElLabel($el, label) {
        $el.attr("aria-label", label);
    }
    function addElId($el, id) {
        $el.attr("id", id);
    }
    function addElLive($el, live) {
        $el.attr("aria-live", live);
    }
    function disableEl($el) {
        $el.attr("aria-disabled", true);
    }
    function enableEl($el) {
        $el.attr("aria-disabled", false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = (0, _domJsDefault.default)(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = (0, _domJsDefault.default)(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, "button");
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr("aria-current", "true");
            else $bulletEl.removeAttr("aria-current");
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== "BUTTON") {
            addElRole($el, "button");
            $el.on("keydown", onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    const handlePointerDown = ()=>{
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) swiper.a11y.clicked = false;
            });
        });
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
        else swiper.el.scrollTop = 0;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription((0, _domJsDefault.default)(swiper.slides), params.itemRoleDescriptionMessage);
        if (params.slideRole) addElRole((0, _domJsDefault.default)(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
        if (params.slideLabelMessage) swiper.slides.each((slideEl, index)=>{
            const $slideEl = (0, _domJsDefault.default)(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = params.id || $wrapperEl.attr("id") || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        initSlides(); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.on("focus", handleFocus, true);
        swiper.$el.on("pointerdown", handlePointerDown, true);
        swiper.$el.on("pointerup", handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off("keydown", onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off("keydown", onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.off("focus", handleFocus, true);
        swiper.$el.off("pointerdown", handlePointerDown, true);
        swiper.$el.off("pointerup", handlePointerUp, true);
    }
    on("beforeInit", ()=>{
        liveRegion = (0, _domJsDefault.default)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on("afterInit", ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on("paginationUpdate", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on("destroy", ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}

},{"../../shared/classes-to-selector.js":"fr2xF","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"1c4Mj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindow = require("ssr-window");
function History({ swiper, extendParams, on }) {
    extendParams({
        history: {
            enabled: false,
            root: "",
            replaceState: false,
            key: "slides",
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, _ssrWindow.getWindow)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split("/").filter((part)=>part !== "");
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr("data-history"));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr("data-history"));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history.replaceState) window.removeEventListener("popstate", setHistoryPopState);
    };
    on("init", ()=>{
        if (swiper.params.history.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}

},{"ssr-window":"aOFDe","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"iKPqy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function HashNavigation({ swiper, extendParams, emit, on }) {
    let initialized = false;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit("hashChange");
        const newHash = document.location.hash.replace("#", "");
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr("data-hash");
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === "undefined") return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || "");
            emit("hashSet");
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr("data-hash") || slide.attr("data-history");
            document.location.hash = hash || "";
            emit("hashSet");
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace("#", "");
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr("data-hash") || slide.attr("data-history");
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).on("hashchange", onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).off("hashchange", onHashChange);
    };
    on("init", ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHash();
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}

},{"ssr-window":"aOFDe","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"4tkXQ":[function(require,module,exports) {
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Autoplay({ swiper, extendParams, on, emit }) {
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        if (!swiper.size) {
            swiper.autoplay.running = false;
            swiper.autoplay.paused = false;
            return;
        }
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = (0, _utilsJs.nextTick)(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit("autoplay");
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit("autoplay");
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit("autoplay");
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit("autoplay");
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== "undefined") return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit("autoplayStart");
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === "undefined") return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit("autoplayStop");
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = (0, _ssrWindow.getDocument)();
        if (document.visibilityState === "hidden" && swiper.autoplay.running) pause();
        if (document.visibilityState === "visible" && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else {
            emit("autoplayPause");
            pause();
        }
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        emit("autoplayResume");
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on("mouseenter", onMouseEnter);
            swiper.$el.on("mouseleave", onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off("mouseenter", onMouseEnter);
        swiper.$el.off("mouseleave", onMouseLeave);
    }
    on("init", ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = (0, _ssrWindow.getDocument)();
            document.addEventListener("visibilitychange", onVisibilityChange);
            attachMouseEvents();
        }
    });
    on("beforeTransitionStart", (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on("sliderFirstMove", ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on("touchEnd", ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on("destroy", ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = (0, _ssrWindow.getDocument)();
        document.removeEventListener("visibilitychange", onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
    });
}

},{"ssr-window":"aOFDe","../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"awNZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _utilsJs = require("../../shared/utils.js");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Thumb({ swiper, extendParams, on }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && (0, _domJsDefault.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, _domJsDefault.default)(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
            else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if ((0, _utilsJs.isObject)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on("tap", onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === "undefined") newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === "undefined") newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
            }
            if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on("beforeInit", ()=>{
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on("slideChange update resize observerUpdate", ()=>{
        update();
    });
    on("setTransition", (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}

},{"../../shared/utils.js":"eb5jw","../../shared/dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"kWrLv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsJs = require("../../shared/utils.js");
function freeMode({ swiper, extendParams, emit, once }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        const { touchEventsData: data, touches } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? "startX" : "startY"],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
            time: (0, _utilsJs.now)()
        });
    }
    function onTouchEnd({ currentPos }) {
        const { params, $wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper; // Time diff
        const touchEndTime = (0, _utilsJs.now)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, _utilsJs.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once("transitionEnd", ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit("momentumBounce");
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit("_freeModeNoMomentumRelease");
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}

},{"../../shared/utils.js":"eb5jw","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7daw0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid({ swiper, extendParams }) {
    extendParams({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView } = swiper.params;
        const { rows, fill } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup, spaceBetween } = swiper.params;
        const { rows, fill } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === "row" && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                "-webkit-order": newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === "column") {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel("margin-top"), row !== 0 ? spaceBetween && `${spaceBetween}px` : "");
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween, centeredSlides, roundLengths } = swiper.params;
        const { rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel("width")]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2qaKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation({ swiper }) {
    Object.assign(swiper, {
        appendSlide: (0, _appendSlideJsDefault.default).bind(swiper),
        prependSlide: (0, _prependSlideJsDefault.default).bind(swiper),
        addSlide: (0, _addSlideJsDefault.default).bind(swiper),
        removeSlide: (0, _removeSlideJsDefault.default).bind(swiper),
        removeAllSlides: (0, _removeAllSlidesJsDefault.default).bind(swiper)
    });
}

},{"./methods/appendSlide.js":"c05zM","./methods/prependSlide.js":"a6giO","./methods/addSlide.js":"8yLNe","./methods/removeSlide.js":"bmYCm","./methods/removeAllSlides.js":"iXghn","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"c05zM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>appendSlide);
function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl, params } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"a6giO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>prependSlide);
function prependSlide(slides) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8yLNe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addSlide);
function addSlide(index, slides) {
    const swiper = this;
    const { $wrapperEl, params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)$wrapperEl.append(slidesBuffer[i]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"bmYCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeSlide);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"iXghn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeAllSlides);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"bKlsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFade({ swiper, extendParams, on }) {
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "fade",
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/effect-init.js":"3bnW9","../../shared/effect-target.js":"kW1DM","../../shared/effect-virtual-transition-end.js":"lBhvb","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"3bnW9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectInit);
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams } = params;
    on("beforeInit", ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on("transitionEnd", ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows
            swiper.slides.each((slideEl)=>{
                const $slideEl = swiper.$(slideEl);
                $slideEl.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
            }); // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"kW1DM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectTarget);
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
    });
    return $slideEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"lBhvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectVirtualTransitionEnd);
function effectVirtualTransitionEnd({ swiper, duration, transformEl, allSlides }) {
    const { slides, activeIndex, $wrapperEl } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                "webkitTransitionEnd",
                "transitionend"
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"2QTXO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
function EffectCube({ swiper, extendParams, on }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = ($slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if (shadowBefore.length === 0) {
            shadowBefore = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
            $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
            shadowAfter = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
            $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.each((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows((0, _domJsDefault.default)(slideEl), progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) createSlideShadows($slideEl, progress, isHorizontal);
        }
        $wrapperEl.css({
            "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
            "transform-origin": `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
        $wrapperEl[0].style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { $el, slides } = swiper;
        slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find(".swiper-cube-shadow").transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: "cube",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}

},{"../../shared/dom.js":"fopOr","../../shared/effect-init.js":"3bnW9","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ahuCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFlip({ swiper, extendParams, on }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const createSlideShadows = ($slideEl, progress, params)=>{
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
        if (shadowBefore.length === 0) shadowBefore = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "left" : "top");
        if (shadowAfter.length === 0) shadowAfter = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "right" : "bottom");
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.each((slideEl)=>{
            const $slideEl = (0, _domJsDefault.default)(slideEl);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows($slideEl, progress, params);
        });
    };
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows($slideEl, progress, params);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "flip",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/dom.js":"fopOr","../../shared/create-shadow.js":"8hGOZ","../../shared/effect-init.js":"3bnW9","../../shared/effect-target.js":"kW1DM","../../shared/effect-virtual-transition-end.js":"lBhvb","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8hGOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createShadow);
var _domJs = require("./dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}

},{"./dom.js":"fopOr","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"aa1wj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
function EffectCoverflow({ swiper, extendParams, on }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "left" : "top");
                if ($shadowAfterEl.length === 0) $shadowAfterEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "right" : "bottom");
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: "coverflow",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}

},{"../../shared/create-shadow.js":"8hGOZ","../../shared/effect-init.js":"3bnW9","../../shared/effect-target.js":"kW1DM","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"fss01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCreative({ swiper, extendParams, on }) {
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === "string") return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides, $wrapperEl, slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(", ");
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children(".swiper-slide-shadow");
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css("transform-origin", data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "creative",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"8hGOZ","../../shared/effect-init.js":"3bnW9","../../shared/effect-target.js":"kW1DM","../../shared/effect-virtual-transition-end.js":"lBhvb","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"glKpV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCards({ swiper, extendParams, on }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides, activeIndex } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find(".swiper-slide-shadow");
                if ($shadowEl.length === 0) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "cards",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"8hGOZ","../../shared/effect-init.js":"3bnW9","../../shared/effect-target.js":"kW1DM","../../shared/effect-virtual-transition-end.js":"lBhvb","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"glUyQ":[function(require,module,exports) {
// ImgAnimation.ts
// 画像が画面内に入ったときに画像表示のアニメーションを発火させる
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ImgAnimation {
    constructor(){
        this.observeImages();
    }
    observeImages = ()=>{
        const images = document.querySelectorAll(".c-image__wrap");
        if ("IntersectionObserver" in window) {
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries, observer)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        // 要素が画面内に入ったとき
                        entry.target.classList.add("is-image-view");
                        observer.unobserve(entry.target); // 一度クラスを追加したら監視を解除
                    }
                });
            }, observerOptions);
            images.forEach((image)=>{
                observer.observe(image);
            });
        } else // Intersection Observer APIがサポートされていない場合のフォールバック処理
        images.forEach((image)=>{
            image.classList.add("is-image-view"); // サポートされていない場合、クラスを即時追加
        });
    };
}
exports.default = ImgAnimation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"1DywM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _className = require("@//conf/className");
var _classNameDefault = parcelHelpers.interopDefault(_className);
var _eventName = require("@//conf/eventName");
var _eventNameDefault = parcelHelpers.interopDefault(_eventName);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
class Menu {
    _header;
    _menuBtn;
    _bodyEle;
    _scrollThreshold;
    _isSpDevice;
    constructor(){
        this._header = (0, _baseDefault.default)._d.getElementById("js-header");
        this._menuBtn = (0, _baseDefault.default)._d.getElementById("js-menu");
        this._bodyEle = document.body;
        this._isSpDevice = window.innerWidth <= 800;
        this._scrollThreshold = this._isSpDevice ? 300 : 120;
        this.init();
    }
    init = ()=>{
        // メニューボタンのクリックイベントを追加
        if (this._menuBtn) this._menuBtn.addEventListener((0, _eventNameDefault.default).CLICK, this.toggleMenu);
        // スクロール時のヘッダーの背景色設定を監視
        (0, _baseDefault.default)._w.addEventListener("scroll", this.changeHeaderBackground);
        this.changeHeaderBackground();
    };
    toggleMenu = ()=>{
        // メニューのトグル処理
        if (this._header) {
            this._header.classList.toggle((0, _classNameDefault.default).OPEN);
            this._bodyEle.style.overflow = this._header.classList.contains((0, _classNameDefault.default).OPEN) ? "hidden" : "scroll";
        }
    };
    changeHeaderBackground = ()=>{
        // スクロール位置に応じてヘッダーの透過設定を更新
        const scrollY = window.scrollY || window.pageYOffset;
        if (this._header) this._header.classList.toggle("is-scrolled", scrollY >= this._scrollThreshold);
    };
}
exports.default = Menu;

},{"@//conf/className":"8NA6w","@//conf/eventName":"cQUXU","@//utils/base":"eQFM3","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"8NA6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ClassName {
    static OPEN = "is-open";
    static VISIBLE = "is-visible";
}
exports.default = ClassName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"eQFM3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _class = require("@//utils/class");
var _string = require("@//utils/string");
class Base {
    static speed = 500;
    static _w = window;
    static _d = document;
    static _b = document.getElementsByTagName("body")[0];
    static rclass = /[\t\r\n\f]/g;
    static ua = navigator.userAgent.toLowerCase();
    static checkIOS = 9;
    static checkANDROID = 5;
    static checkMS = 11;
    static callApi(method, url, data, callback) {
        const req = new XMLHttpRequest();
        req.open(method, url, true);
        req.onreadystatechange = ()=>{
            if (req.readyState === 4 && req.status === 200) {
                if (req.response) {
                    const jsonObj = req.response;
                    callback("success", jsonObj);
                } else callback("error");
            }
        };
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        req.responseType = "json";
        req.send((0, _string.Serialize)(data));
    }
    // public static sampleEvent(): void {
    //   const sampleCallback = (status: string, res) => {
    //     alert(res.status);
    //   };
    //   this.callApi("GET", "url", null, sampleCallback);
    // }
    static verCheck() {
        // iOSのバージョン判断
        function ios_ver() {
            if (Base.ua.indexOf("iphone") > 0) {
                Base.ua.match(/iphone os (\w+) {1,3}/g);
                const ver = RegExp.$1.split(/_/);
                ver.splice(1, 0, ".");
                ver.push("0");
                return parseFloat(ver.join(""));
            }
        }
        // Androidのバージョン判断
        function and_ver() {
            if (Base.ua.indexOf("android") > 0) return parseFloat(Base.ua.slice(Base.ua.indexOf("android") + 8));
        }
        Number(ios_ver()) < this.checkIOS || (Number(and_ver()), this.checkANDROID);
        function is_ms() {
            // IEの判定
            const isIE = Base.ua.indexOf("msie") >= 0 || Base.ua.indexOf("trident") >= 0;
            // IEのバージョンを取得
            if (isIE) {
                // 正規表現によりUA文字列を配列に分割
                const arr = /(msie|rv:?)\s?([\d.]+)/.exec(Base.ua);
                return arr ? arr[2] : "";
            } else {
                if (Base.ua.indexOf("edge") !== -1) {
                    /* Edge. */ Base.ua.match(/edge\/([0-9.]+)/g);
                    const ver = RegExp.$1.split(/\//);
                    // return 'edge';
                    return parseFloat(ver.join(""));
                } else return false;
            }
        }
        if (is_ms()) {
            console.log("MS");
            (0, _class.AddClass)(this._b, "is-ms");
        }
        is_ms();
        is_ms(), this.checkMS;
    }
}
exports.default = Base;

},{"@//utils/class":"9jRLP","@//utils/string":"eNMxx","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"9jRLP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddClass", ()=>AddClass);
parcelHelpers.export(exports, "RemoveClass", ()=>RemoveClass);
parcelHelpers.export(exports, "HasClass", ()=>HasClass);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
const AddClass = (tgt, name)=>{
    if (!tgt) return false;
    const src = " " + tgt.className.replace((0, _baseDefault.default).rclass, " ") + " ";
    if (src.indexOf(" " + name + " ") >= 0) return false;
    tgt.className += " " + name;
    return true;
};
const RemoveClass = (tgt, name)=>{
    if (!tgt) return false;
    const src = " " + tgt.className.replace((0, _baseDefault.default).rclass, " ") + " ";
    const dst = src.replace(" " + name + " ", " ");
    tgt.className = dst.replace(/^\s+/, "").replace(/\s+$/, "");
    return src !== dst;
};
const HasClass = (tgt, name)=>{
    if (!tgt) return false;
    const className = " " + name + " ";
    if ((" " + tgt.className + " ").replace((0, _baseDefault.default).rclass, " ").indexOf(className) >= 0) return true;
    return false;
};

},{"@//utils/base":"eQFM3","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"eNMxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EscapeHTML", ()=>EscapeHTML);
parcelHelpers.export(exports, "Serialize", ()=>Serialize);
parcelHelpers.export(exports, "GetUrlVars", ()=>GetUrlVars);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
const EscapeHTML = (str)=>{
    let result = "";
    result = str.replace("&", "&amp;");
    result = str.replace("'", "&#x27;");
    result = str.replace("`", "&#x60;");
    result = str.replace('"', "&quot;");
    result = str.replace("<", "&lt;");
    result = str.replace(">", "&gt;");
    result = str.replace(/\n/, "<br>");
    return result;
};
const Serialize = (data)=>{
    let key;
    let value;
    let type;
    let i;
    let max;
    const encode = window.encodeURIComponent;
    let query = "?";
    for (key of Object.keys(data)){
        value = data[key];
        type = typeof value === "object" && value instanceof Array ? "array" : typeof value;
        switch(type){
            case "undefined":
                // キーのみ
                query += key;
                break;
            case "array":
                // 配列
                for(i = 0, max = value.length; i < max; i++){
                    query += key + "[]";
                    query += "=";
                    query += encode(value[i]);
                    query += "&";
                }
                query = query.substr(0, query.length - 1);
                break;
            case "object":
                // ハッシュ
                for (i of Object.keys(value)){
                    query += key + "[" + i + "]";
                    query += "=";
                    query += encode(value[i]);
                    query += "&";
                }
                query = query.substr(0, query.length - 1);
                break;
            default:
                query += key;
                query += "=";
                query += encode(value);
                break;
        }
        query += "&";
    }
    query = query.substr(0, query.length - 1);
    return query;
};
const GetUrlVars = ()=>{
    const vars = {};
    const url = (0, _baseDefault.default)._w.location.search;
    // ?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    const hash = url.slice(1).split("&");
    const max = hash.length;
    for(let i = 0; i < max; i++){
        const array = hash[i].split("="); // keyと値に分割。
        // vars.push(array[0]);    // 末尾にクエリ文字列のkeyを挿入。
        if (array[0] !== "") vars[array[0]] = array[1]; // keyに、値を代入。
    }
    return vars;
};

},{"@//utils/base":"eQFM3","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"3f6ST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
class Modal {
    _modal;
    _modalBtn;
    _modalBg;
    constructor(){
        // class変数
        this._modal = (0, _baseDefault.default)._d.getElementById("modal");
        this._modalBtn = (0, _baseDefault.default)._d.querySelectorAll(".button");
        this._modalBg = (0, _baseDefault.default)._d.querySelector(".modal_bg");
        this.init();
    }
    init = ()=>{
        // console.log(this._modal);
        // ボタンがクリックされた時
        this._modalBtn?.forEach((element)=>{
            // const test : string = string(element.className);
            element.addEventListener("click", this.modalOpen);
        });
        // 背景がクリックされた時
        this._modalBg?.addEventListener("click", this.modalClose);
    };
    modalOpen = (event)=>{
        const modalId = event.target.getAttribute("data-id");
        if (!(modalId === undefined || modalId === null)) switch(modalId){
            case "1":
                this._modal?.classList.add("-error");
                this._modal?.classList.add("is-show");
                break;
            case "2":
                this._modal?.classList.add("-check");
                this._modal?.classList.add("is-show");
                break;
            default:
                console.log("\u30E2\u30FC\u30C0\u30EB\u304C\u3042\u308A\u307E\u305B\u3093");
                break;
        }
    };
    modalClose = ()=>{
        this._modal?.classList.remove("is-show");
        this._modal?.removeAttribute("class");
        this._modal?.classList.add("modal");
    };
}
exports.default = Modal;

},{"@//utils/base":"eQFM3","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"h7NJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsApiLoader = require("@googlemaps/js-api-loader");
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _eventName = require("@//conf/EventName");
var _eventNameDefault = parcelHelpers.interopDefault(_eventName);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _class = require("@//utils/class");
class Top {
    _a;
    _top;
    _slider;
    _swiper;
    _map;
    constructor(){
        // class変数
        this._a = (0, _baseDefault.default)._d.getElementsByTagName("a");
        this._top = (0, _baseDefault.default)._d.getElementById("data-top");
        this._slider = (0, _baseDefault.default)._d.getElementById("data-slider");
        this._map = (0, _baseDefault.default)._d.getElementById("data-map");
        this.init();
    }
    init = ()=>{
        // 以下共通で追加するEVENT
        this._swiper = new (0, _swiperDefault.default)(this._slider, {
            spaceBetween: 30,
            effect: "fade",
            loop: true,
            autoplay: 8000,
            speed: 800
        });
        (0, _baseDefault.default)._w.addEventListener((0, _eventNameDefault.default).RESIZE, this.checkRatio);
        this.checkRatio();
        this.initMap();
    };
    initMap = ()=>{
        const options = {
            apiKey: "AIzaSyCR7AqDICRDHottldSGX-4_QIVMZqbuSV0&sensor=false",
            version: "weekly"
        };
        const loader = new (0, _jsApiLoader.Loader)(options);
        loader.load().then(()=>{
            const mapOptions = {
                center: {
                    lat: 35.878272,
                    lng: 138.297147
                },
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true
            };
            const gmap = new google.maps.Map(this._map, mapOptions);
            const myLatLng = new google.maps.LatLng(35.887452, 138.282106);
            new google.maps.Marker({
                position: myLatLng,
                map: gmap
            });
        }).catch(()=>{
        // do something
        });
    };
    checkRatio = ()=>{
        const ww = (0, _baseDefault.default)._w.innerWidth;
        const wh = (0, _baseDefault.default)._w.innerHeight;
        const image = this._slider ? this._slider.querySelector(".swiper-slide img") : null;
        const iw = image ? image.clientWidth : 0;
        const ih = image ? image.clientHeight : 0;
        if (ww / wh > iw / ih) {
            (0, _class.AddClass)(this._top, "is-beside");
            (0, _class.RemoveClass)(this._top, "is-vertical");
        } else {
            (0, _class.RemoveClass)(this._top, "is-beside");
            (0, _class.AddClass)(this._top, "is-vertical");
        }
    };
}
exports.default = Top;

},{"@googlemaps/js-api-loader":"7pvxL","swiper":"3FiM0","@//conf/EventName":"juVhD","@//utils/base":"eQFM3","@//utils/class":"9jRLP","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"7pvxL":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_ID", ()=>DEFAULT_ID);
parcelHelpers.export(exports, "Loader", ()=>Loader);
parcelHelpers.export(exports, "LoaderStatus", ()=>LoaderStatus);
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
typeof SuppressedError === "function" && SuppressedError;
function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
// do not edit .js files directly - edit src/index.jst
var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
var isEqual = /*@__PURE__*/ getDefaultExportFromCjs(fastDeepEqual);
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */ var LoaderStatus;
(function(LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */ class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */ constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }){
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!isEqual(this.options, Loader.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy
        };
    }
    get status() {
        if (this.errors.length) return LoaderStatus.FAILURE;
        if (this.done) return LoaderStatus.SUCCESS;
        if (this.loading) return LoaderStatus.LOADING;
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */ createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback&loading=async`;
        if (this.apiKey) url += `&key=${this.apiKey}`;
        if (this.channel) url += `&channel=${this.channel}`;
        if (this.client) url += `&client=${this.client}`;
        if (this.libraries.length > 0) url += `&libraries=${this.libraries.join(",")}`;
        if (this.language) url += `&language=${this.language}`;
        if (this.region) url += `&region=${this.region}`;
        if (this.version) url += `&v=${this.version}`;
        if (this.mapIds) url += `&map_ids=${this.mapIds.join(",")}`;
        if (this.authReferrerPolicy) url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) script.remove();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */ load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */ loadPromise() {
        return new Promise((resolve, reject)=>{
            this.loadCallback((err)=>{
                if (!err) resolve(window.google);
                else reject(err.error);
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */ loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */ setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy
        };
        // keep the URL minimal:
        Object.keys(params).forEach(// eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key)=>!params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
        // which also sets the base url, the id, and the nonce
        /* eslint-disable */ ((g)=>{
            // @ts-ignore
            let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
            // @ts-ignore
            b = b[c] || (b[c] = {});
            // @ts-ignore
            const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = ()=>// @ts-ignore
                h || (h = new Promise((f, n)=>__awaiter(this, void 0, void 0, function*() {
                        var _a;
                        yield a = m.createElement("script");
                        a.id = this.id;
                        e.set("libraries", [
                            ...r
                        ] + "");
                        // @ts-ignore
                        for(k in g)e.set(k.replace(/[A-Z]/g, (t)=>"_" + t[0].toLowerCase()), g[k]);
                        e.set("callback", c + ".maps." + q);
                        a.src = this.url + `?` + e;
                        d[q] = f;
                        a.onerror = ()=>h = n(Error(p + " could not load."));
                        // @ts-ignore
                        a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                        m.head.append(a);
                    })));
            // @ts-ignore
            d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n)=>r.add(f) && u().then(()=>d[l](f, ...n));
        })(params);
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library)=>this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) libraryPromises.push(this.importLibrary("core"));
        Promise.all(libraryPromises).then(()=>this.callback(), (error)=>{
            const event = new ErrorEvent("error", {
                error
            }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */ reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) this.reset();
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(()=>{
                this.deleteScript();
                this.setScript();
            }, delay);
        } else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb)=>{
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.loading) // do nothing but wait
        return;
        if (this.done) this.callback();
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            this.loading = true;
            this.setScript();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"juVhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventName {
    static LOAD = "load";
    static CLICK = "click";
    static RESIZE = "resize";
    static MOUSE_MOVE = "mousemove";
    static DOM_MOUSE_SCROLL = "DOMMouseScroll";
    static ON_MOUSE_WHEEL = "onmousewheel";
    static SCROLL = "scroll";
    static TOUCH_START = "touchstart";
    static TOUCH_MOVE = "touchmove";
    static TOUCH_END = "touchend";
    static ORIENTATION_CHANGE = "orientationchange";
}
exports.default = EventName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"ij9EP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _class = require("@//utils/class");
var _string = require("@//utils/string");
class Base {
    static speed = 500;
    static _w = window;
    static _d = document;
    static _b = document.getElementsByTagName("body")[0];
    static rclass = /[\t\r\n\f]/g;
    static ua = navigator.userAgent.toLowerCase();
    static checkIOS = 9;
    static checkANDROID = 5;
    static checkMS = 11;
    static callApi(method, url, data, callback) {
        const req = new XMLHttpRequest();
        req.open(method, url, true);
        req.onreadystatechange = ()=>{
            if (req.readyState === 4 && req.status === 200) {
                if (req.response) {
                    const jsonObj = req.response;
                    callback("success", jsonObj);
                } else callback("error");
            }
        };
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        req.responseType = "json";
        req.send((0, _string.Serialize)(data));
    }
    // public static sampleEvent(): void {
    //   const sampleCallback = (status: string, res) => {
    //     alert(res.status);
    //   };
    //   this.callApi("GET", "url", null, sampleCallback);
    // }
    static verCheck() {
        // iOSのバージョン判断
        function ios_ver() {
            if (Base.ua.indexOf("iphone") > 0) {
                Base.ua.match(/iphone os (\w+) {1,3}/g);
                const ver = RegExp.$1.split(/_/);
                ver.splice(1, 0, ".");
                ver.push("0");
                return parseFloat(ver.join(""));
            }
        }
        // Androidのバージョン判断
        function and_ver() {
            if (Base.ua.indexOf("android") > 0) return parseFloat(Base.ua.slice(Base.ua.indexOf("android") + 8));
        }
        Number(ios_ver()) < this.checkIOS || (Number(and_ver()), this.checkANDROID);
        function is_ms() {
            // IEの判定
            const isIE = Base.ua.indexOf("msie") >= 0 || Base.ua.indexOf("trident") >= 0;
            // IEのバージョンを取得
            if (isIE) {
                // 正規表現によりUA文字列を配列に分割
                const arr = /(msie|rv:?)\s?([\d.]+)/.exec(Base.ua);
                return arr ? arr[2] : "";
            } else {
                if (Base.ua.indexOf("edge") !== -1) {
                    /* Edge. */ Base.ua.match(/edge\/([0-9.]+)/g);
                    const ver = RegExp.$1.split(/\//);
                    // return 'edge';
                    return parseFloat(ver.join(""));
                } else return false;
            }
        }
        if (is_ms()) {
            console.log("MS");
            (0, _class.AddClass)(this._b, "is-ms");
        }
        is_ms();
        is_ms(), this.checkMS;
    }
}
exports.default = Base;

},{"@//utils/class":"9jRLP","@//utils/string":"eNMxx","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}],"b1AKD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SmoothScroll", ()=>SmoothScroll);
parcelHelpers.export(exports, "ScrollWindow", ()=>ScrollWindow);
var _base = require("@//utils/base");
var _baseDefault = parcelHelpers.interopDefault(_base);
const SmoothScroll = (e)=>{
    const target = e.target;
    const href = target.getAttribute("href");
    ScrollWindow(href, {
        duration: (0, _baseDefault.default).speed * 2
    });
    e.preventDefault();
};
const ScrollWindow = (target, options)=>{
    const start = (0, _baseDefault.default)._w.pageYOffset;
    const opt = {
        duration: options.duration || 500,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || easeInOutQuad
    };
    const distance = typeof target === "string" ? target === "#" ? start * -1 : opt.offset + Number((0, _baseDefault.default)._d.querySelector(target)?.getBoundingClientRect().top) : target;
    const duration = typeof opt.duration === "function" ? opt.duration(distance) : opt.duration;
    let timeStart;
    let timeElapsed;
    requestAnimationFrame((time)=>{
        timeStart = time;
        loop(time);
    });
    function loop(time) {
        timeElapsed = time - timeStart;
        (0, _baseDefault.default)._w.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));
        if (timeElapsed < duration) requestAnimationFrame(loop);
        else end();
    }
    function end() {
        (0, _baseDefault.default)._w.scrollTo(0, start + distance);
        if (typeof opt.callback === "function") opt.callback();
    }
    // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
};

},{"@//utils/base":"eQFM3","@parcel/transformer-js/src/esmodule-helpers.js":"k8mcy"}]},["fecM4"], "fecM4", "parcelRequire05f8")

//# sourceMappingURL=script.js.map
