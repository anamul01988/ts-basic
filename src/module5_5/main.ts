// // import {add as add2,susbstract} from "./module" //as ta aikhane alias
// import * as Module from "./module" //as ta aikhane alias
// import average, {add as addTwo, multiply} from "./module";
// const result = Module.add(3,3);  //wild card import
// const result1 = Module.susbstract(3,3);
// const res = average(3,3);
// console.log("result", result, result1);
// import {add as add2,susbstract} from "./module" //as ta aikhane alias
//========  most common way =========

// import add from "./utils/add";
// import average from "./utils/average";
// import susbstract from "./utils/substract";

import methods from './utils/index';  // most optimize way redefined methodolozy

const result = methods.addTwo(3,3);  //wild card import
const result1 = methods.substract(3,3);
const res = methods.average(3,3);
console.log("result", result, result1);


//normal export , default export, redefined methodolozy