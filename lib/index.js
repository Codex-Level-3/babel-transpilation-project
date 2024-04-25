"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
var _module = require("./module1");
var _module2 = require("./module2");
(0, _module.greet)();
(0, _module.greet)("Luffy");
console.log((0, _module.multiply)(5, 3));
const numbers = [3, 6, 9];
console.log(sum(...numbers));
const luffy = new _module2.Person("Luffy", 19);
luffy.introduction;