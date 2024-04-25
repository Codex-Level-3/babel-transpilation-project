"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.multiply = exports.greet = void 0;
const greet = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Penny";
  console.log("Hello, ".concat(name, "!"));
};
exports.greet = greet;
const multiply = (a, b) => a * b;
exports.multiply = multiply;
let sum = (x, y, z) => x + y + z;
exports.sum = sum;