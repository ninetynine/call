"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var call = function call(fn, args) {
  if (Array.isArray(fn)) {
    fn.forEach(function (fn) {
      return call(fn, args);
    });
    return;
  }

  if (typeof fn !== 'function') {
    return;
  }

  if (Array.isArray(args)) {
    fn.apply(void 0, _toConsumableArray(args));
    return;
  }

  fn(args);
};

module.exports = call;