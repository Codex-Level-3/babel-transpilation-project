import { greet, multiply } from "./module1";
import { Person } from "./module2";

greet();
greet("Luffy");
console.log(multiply(5, 3));

const numbers = [3, 6, 9];
console.log(sum(...numbers));

const luffy = new Person("Luffy", 19);
luffy.introduction;
