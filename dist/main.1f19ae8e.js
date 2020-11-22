// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\u4F60\u770B\uFF0C\u6211\u662F\u8FD9\u6837\u753B\u4E00\u4E2A\u76AE\u5361\u4E18\u7684*/\n.skin * {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n.skin *::before {\n  box-sizing: border-box;\n}\n.skin *::after {\n  box-sizing: border-box;\n}\n@keyframes shakeNose {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.skin {\n  position: relative;\n  background: #ffe600;\n  min-height: 50vh;\n}\n@media screen and (max-width: 400px) {\n  .skin {\n    top: -50px;\n  }\n}\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent transparent;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  top: 145px;\n  left: 50%;\n  z-index: 10;\n  margin-left: -5px; \n}\n.nose:hover{\n    animation: shakeNose 300ms infinite;\n    transform-origin:50% 100%; \n    cursor:pointer;\n}\n.banyuan {\n  background-color: black;\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  transform: translateX(-50%);\n  top: -16px;\n  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;\n}\n.eye {\n  border: 2px solid black;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  background: #2e2e2e;\n  border-radius: 50%; \n}\n.eye.left {\n  transform: translateX(-210%);\n}\n.eye.right {\n  transform: translateX(110%);\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 25px;\n  height: 25px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 8px;\n  top: 4px;\n}\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _string = _interopRequireDefault(require("./string.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*如何保留空格？？？*/
var audioPlayer = {
  n: 1,
  substr: "",
  v: 100,
  id: undefined,
  init: function init() {
    audioPlayer.substr = _string.default.slice(0, audioPlayer.n);
    demo.innerHTML = audioPlayer.substr;
    style.innerHTML = audioPlayer.substr;
    audioPlayer.play(); // 一进页面运行定时器

    audioPlayer.bindEvents();
  },
  bindEvents: function bindEvents() {
    btnPause.onclick = audioPlayer.stop;

    btnPlay.onclick = function () {
      console.log(audioPlayer.id);

      if (!audioPlayer.id) {
        audioPlayer.play();
      }
    };

    btnSlow.onclick = audioPlayer.slow;
    btnNormal.onclick = audioPlayer.normal;
    btnFast.onclick = audioPlayer.fast;
  },
  fn: function fn() {
    /*111111 面向对象的函数写法有三种注意哈 普通函数两种 箭头函数一种*/
    console.log(audioPlayer.n, _string.default.length);

    if (audioPlayer.n === _string.default.length) {
      clearInterval(audioPlayer.id);
      return;
    }

    audioPlayer.n < _string.default.length && (audioPlayer.n = audioPlayer.n + 1); // 每次从string中追加一个字符到substr里，如果遇到空格就追加转义字符，如果遇到换行就追加<br>

    if (_string.default.slice(0, audioPlayer.n).slice(audioPlayer.n - 1, audioPlayer.n).charCodeAt() === 32) {
      // 当前指向的string的最后一个字是空格的话 我就给子字符串转移符号
      audioPlayer.substr += "&nbsp;";
    } else if (_string.default.slice(0, audioPlayer.n).slice(audioPlayer.n - 1, audioPlayer.n).charCodeAt() === 10) {
      audioPlayer.substr += "<br>";
    } else {
      audioPlayer.substr += _string.default.slice(0, audioPlayer.n).slice(audioPlayer.n - 1, audioPlayer.n);
    }

    demo.innerHTML = audioPlayer.substr;
    style.innerHTML = _string.default.slice(0, audioPlayer.n); // style里无所谓，直接扔过去即可

    demo.scrollTop = 9999; // 文本中的空格和转义符号都会被浏览器读到，但是具体如何展示的，这是听浏览器的，
    // 浏览器会把html页面中多个手打的空格都给整理成1个
    // 浏览器读到你这个是innerText字符串时，如果字符串里有tag
    // 不会帮你把tag解析出来，会把多个手打的空格都给整理成1个
    // 但是浏览器会帮你保留innerText字符串中的换行，你有多个换行它就展示多个换行，
    // 浏览器读到你这个是innerHTML字符串时，会帮你把tag解析出来，也会把转义字符正确打印，
    // 有多少个&nbsp;就会生效多少个空格，但依旧会把多个手打的空格都给整理成1个
    // 如果innerHTML中出现一个换行符号，则展示为一个空格，
    // 如果innerHTML中出现多个换行符号，则展示为一个空格
  },
  play: function play() {
    return audioPlayer.id = setInterval(audioPlayer.fn, audioPlayer.v);
  },
  stop: function stop() {
    clearInterval(audioPlayer.id); // 仅仅是把定时器的功能停止了，但不会将id置空

    audioPlayer.id = null; // 将id置空是为了布尔判断
  },
  slow: function slow() {
    audioPlayer.v = 100;
    audioPlayer.stop();
    audioPlayer.play();
  },
  normal: function normal() {
    audioPlayer.v = 30;
    audioPlayer.stop();
    audioPlayer.play();
  },
  fast: function fast() {
    audioPlayer.v = 10;
    audioPlayer.stop();
    audioPlayer.play();
  }
};
audioPlayer.init();

mouth.onmouseover = function () {
  myAudio.play();
};
},{"./string.js":"string.js"}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58067" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map