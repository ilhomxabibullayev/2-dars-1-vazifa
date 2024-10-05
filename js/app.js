// 1

console.log(x); // ReferenceError

// 2

let obj;
console.log(obj.name); // TypeError

// 3

function recurse() {
    recurse();
}
recurse(); //RangeError

// 4

if (true) {
    console.log("Hello"); // SyntaxError

// 5

const x = 10;
x = 20;  // TypeError

// 6

let x = 5;
x(); // TypeError

// 7

let arr = new Array(-1); // RangeError

// 8

let func = => { console.log("Hello"); }; // SyntaxError

// 9

let obj = null;
console.log(Object.keys(obj));  // TypeError

// 10

"use strict";
let eval = 42; // SyntaxError

// 11

let arr;
arr.map(x => x * 2);  // TypeError

// 12

let arr = [];
arr.reduce((acc, val) => acc + val); // TypeError

