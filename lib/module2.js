"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduction() {
    console.log("Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
  }
}
exports.Person = Person;