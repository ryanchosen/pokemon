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
})({"OqZs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\u4F60\u770B\uFF0C\u6211\u662F\u8FD9\u6837\u753B\u4E00\u4E2A\u76AE\u5361\u4E18\u7684*/\n.skin * {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n.skin *::before {\n  box-sizing: border-box;\n}\n.skin *::after {\n  box-sizing: border-box;\n}\n@keyframes shakeNose {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.skin {\n  position: relative;\n  background: #ffe600;\n  min-height: 50vh;\n}\n@media screen and (max-width: 400px) {\n  .skin {\n    top: -50px;\n  }\n}\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent transparent;\n  width: 0px;\n  height: 0px;\n  position: relative;\n  top: 145px;\n  left: 50%;\n  z-index: 10;\n  margin-left: -5px; \n}\n.nose:hover{\n    animation: shakeNose 300ms infinite;\n    transform-origin:50% 100%; \n    cursor:pointer;\n}\n.banyuan {\n  background-color: black;\n  position: absolute;\n  width: 20px;\n  height: 6px;\n  transform: translateX(-50%);\n  top: -16px;\n  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;\n}\n.eye {\n  border: 2px solid black;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  background: #2e2e2e;\n  border-radius: 50%; \n}\n.eye.left {\n  transform: translateX(-210%);\n}\n.eye.right {\n  transform: translateX(110%);\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 25px;\n  height: 25px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 8px;\n  top: 4px;\n}\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n.mouth :hover{\n  cursor:pointer\n}\n.mouth .up {\n  position: relative;\n  top: -34px;\n  z-index:2\n}\n.mouth .up .lip.left {\n  border: 5px solid black;\n  border-color: transparent transparent black black;\n  height: 30px;\n  width: 100px;\n  border-radius: 0% 0% 0% 31% / 0% 0% 0% 100%;\n  position: absolute; \n  left: 27%;\n  top: 28px;\n  transform:  translateX(-50%) rotate(-15deg);/* rotate(-15deg)*/\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  content: \"\";\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  right: -6px;\n  bottom: 0;\n  background: #ffe600;\n}\n/* \u89E3\u51B3\u8FB9\u6846\u56DB\u820D\u4E94\u5165\u95EE\u9898\uFF0C\u7528\u4E00\u5757cover */\n.mouth .up .lip.left .cover{\n  width: 95px;\n  height: 5px;\n  background: #ffe600;\n  position: relative;\n  top: -7px;\n  margin-left: 1px;\n}\n.mouth .up .lip.right {\n  border: 5px solid black;\n  border-color: transparent transparent black black;\n  height: 30px;\n  width: 100px;\n  border-radius: 0% 0% 31% 0% / 0% 0% 100% 0%;\n  position: absolute; \n  left: 77%;\n  top: 28px;\n  transform:  translateX(-50%) rotate(15deg);\n  background: #ffe600;\n}\n.mouth .up .lip.right::before {\n  content: \"\";\n  display: block;\n  width: 7px;\n  height: 30px;\n  position: absolute;\n  right: 89px;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .down {\n  width: 64%;\n  height: 191px;\n  position: absolute;\n  top: 1px;\n  border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n  background: #9b010a;\n  border: 4px solid black;\n  overflow: hidden;\n}\n.mouth .down .circle {\n  width: 145px;\n  height: 145px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 50px;\n  border-radius: 50%;\n  background: #ff485f;\n}\n.face.left {\n  width: 100px;\n  height: 100px;\n  border: 3px solid black;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-200%);\n  border-radius: 50%;\n  background: #ff1800;\n  top: 216px;\n}\n.face.right {\n  width: 100px;\n  height: 100px;\n  border: 3px solid black;\n  position: absolute;\n  left: 50%;\n  transform: translateX(100%);\n  border-radius: 50%;\n  background: #ff1800;\n  top: 216px;\n}\n.face.left,.face.right {\n  cursor:pointer\n}\n.face img{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n.face.left img{\n    transform:rotateY(180deg);\n    transform-origin:0 0;\n}\n@media screen and (max-width: 400px) {\n  .face.left {\n    transform: translateX(-185%);\n  }\n  .face.right{\n    transform: translateX(85%);\n  }\n}\n/*\u6700\u540E\u796D\u51FA\u76AE\u5361\u4E18\u7684\u5927\u62DB\uFF0C\u5341\u4E07\u4F0F\u7279*/\n.thunder {\n  display: inline;\n}\n/*\u753B\u5B8C\u5566\uFF0C\u6478\u6478\u5B83\u7684\u9F3B\u5B50\u770B\u5B83\u653E\u7535\u5427~*/";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _string = _interopRequireDefault(require("./string.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*如何保留空格？？？*/
var n = 1;
var substr = "";
substr = _string.default.slice(0, n);
demo.innerHTML = substr;
style.innerHTML = substr; // 定时器函数

var fn = function fn() {
  n === _string.default.length && clearInterval(timer);
  n += 1; // 每次从string中追加一个字符到substr里，如果遇到空格就追加转义字符，如果遇到换行就追加<br>

  if (_string.default.slice(0, n).slice(n - 1, n).charCodeAt() === 32) {
    // 当前指向的string的最后一个字是空格的话 我就给子字符串转移符号
    substr += "&nbsp;";
  } else if (_string.default.slice(0, n).slice(n - 1, n).charCodeAt() === 10) {
    substr += "<br>";
  } else {
    substr += _string.default.slice(0, n).slice(n - 1, n);
  }

  demo.innerHTML = substr;
  style.innerHTML = _string.default.slice(0, n); // style里无所谓，直接扔过去即可

  demo.scrollTop = 9999; // 文本中的空格和转义符号都会被浏览器读到，但是具体如何展示的，这是听浏览器的，
  // 浏览器会把html页面中多个手打的空格都给整理成1个
  // 浏览器读到你这个是innerText字符串时，如果字符串里有tag
  // 不会帮你把tag解析出来，会把多个手打的空格都给整理成1个
  // 但是浏览器会帮你保留innerText字符串中的换行，你有多个换行它就展示多个换行，
  // 浏览器读到你这个是innerHTML字符串时，会帮你把tag解析出来，也会把转义字符正确打印，
  // 有多少个&nbsp;就会生效多少个空格，但依旧会把多个手打的空格都给整理成1个
  // 如果innerHTML中出现一个换行符号，则展示为一个空格，
  // 如果innerHTML中出现多个换行符号，则展示为一个空格
};

var v = 100; // 设置速率

var play = function play() {
  return setInterval(fn, v);
};

var stop = function stop() {
  return clearInterval(id);
};

var id = play(); // 一进页面运行定时器
// 只要代码重复了就丑，‘优化’一下代码，其实就是让他们看着好看些

btnPause.onclick = function () {
  stop();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  v = 100;
  stop();
  id = play();
};

btnNormal.onclick = function () {
  v = 30;
  stop();
  id = play();
};

btnFast.onclick = function () {
  v = 10;
  stop();
  id = play();
};

mouth.onmouseover = function () {
  myAudio.play();
};
},{"./string.js":"OqZs"}]},{},["epB2"], null)
//# sourceMappingURL=main.de4e274d.js.map