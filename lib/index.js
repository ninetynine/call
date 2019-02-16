"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isCallable = exports.argsToArray = exports.chain = exports.call = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var argsToArray = function argsToArray(args) {
  return !Array.isArray(args) ? [args] : args;
};

exports.argsToArray = argsToArray;

var isCallable = function isCallable(fn) {
  return Array.isArray(fn) || typeof fn === 'function';
};

exports.isCallable = isCallable;

var call = function call(fn, args) {
  if (!isCallable(fn)) {
    return;
  }

  args = argsToArray(args);

  if (Array.isArray(fn)) {
    return fn.map(function (fn) {
      return call(fn, args);
    });
  }

  return fn.apply(void 0, _toConsumableArray(args));
};

exports.call = call;

var chain = function chain(fn, args) {
  var out;

  if (!isCallable(fn)) {
    return out;
  }

  args = argsToArray(args);

  if (Array.isArray(fn)) {
    fn.forEach(function (fn, key) {
      if (key === 0) {
        out = chain(fn, args);
        return;
      }

      out = chain(fn, [out].concat(_toConsumableArray(args)));
    });
    return out;
  }

  return call(fn, args);
};

exports.chain = chain;
var _default = call;
exports.default = _default;