// let course : string = "Next leve development";
// const rollNumber : number = 123;
// const isAdmin: boolean = true; //explicit
// course = 'ddd';
// const names = "Anmaul haque"; //implicit ba interference type orthat ts er intelligency use kore type string default vabe dhore nice
// console.log(course);

// let course: string;
// course = "anam";
let courseCheck = undefined;  //value variable er moddhe na rakhle undefined dekhay and redeclare possible let er moddhe tai let a possible

courseCheck = "dfdfdf";
courseCheck = true;
courseCheck = 3344;

// const courseCheck1 = undefined;

// courseCheck1 = "dfdfdf";
// courseCheck1 = true;
// courseCheck1 = 3344
// v3 ====
// const roll: number[] = [33, 33, 45];
// const names: string[] = ['ana', 'nou'];
// const mixArray = ['a','b', 33, true]; //erai implici cause ts intellegently type bujhte partece

// const users:[number, string] = [64, 'anam'];//tupple
// const users1:[string, boolean] = ['anam', true];//tupple

// v4 =====
// const user : {
//     readonly company: string,
//     name: string,
//     age:number,
//     isMarried: boolean,
//     wife?: string,
// } = {
//     company: "Amar company",
//     name: "aa",
//     age: 33,
//     isMarried: true,
//     // wife: "nourin"
// }
// user.company = "Amar company"

// v5 =====
// function add(num1:number, num2:number):number{
//     return num1 + num2;
// }
// add(3,3)

// const addArrow = (num1: number, num2: number): number => num1 + num2;

// // callback function 
// const arr = [2,4,5];
// const newArray = arr.map((element :number)=> element*element);

// //kono function obj er modddhe use hole take method bole
// const person:{ 
//     name: string,
//     balance : number,
//     addBalance(money: number): void;  //parameter er jonno type abar return value er jonno o type
// } = {
//     name: 'anam',
//     balance : 4,
//     addBalance(money: number){
//         console.log(`My new balance is ${this.balance + money}`);
//     }
// }
// return `My new balance is ${this.balance + money}`

// =====// v6 =====

// function add(num1:number , num2:number = 10):number{
//     return num1 + num2;
// }
// add(3)

// spread operator ======
const myFriend = ["aam", "john", "rob"];
const newFriend = ["ad", "dfdf","phoeba"];
myFriend.push(...newFriend)
console.log("myFriend", myFriend);

// rest parameter =========  
// note: rest element gula niye ekta array kore fele jeikhane spead opposite,, spread element gulo niye alada kore fele
const greetFriends = (
  ...friends: string[]
): void => friends.forEach((friend)=>console.log(`hi ${friend}`))
greetFriends("anam", "dfd", "dfdf", "dfdf", "dfdfrerte34", "fdf")


const myFriend1 = ["aam", "john", "rob"];
const newFriend1 = ["ad", "dfdf","phoeba"];
const [bestFriend,y,z] = myFriend1;
console.log("bestFriend", bestFriend,y,z)

const myBestFriend = {
    fullName : "anmaul haque shanto",
    age: 23,
}
const {fullName: myFullName} = myBestFriend;  //aikhane myFullName hocce name alias tai destructering a explicitly type declare korbo nah, jeita namAlia hoye jabe
console.log("myFullName", myFullName);

// ====== v 7 ======

type CrushType = { // conventionally type declare er somoy 1st letter capital hoy
    name: string,
    age?: number,
    profession: string,
    address: string
}
const crush1: CrushType = {
    name: "adfa",
    age: 33,
    profession: "mern stack developer",
    address : "uganda"
}
const crush2: CrushType = {
    name: "adfa",
    // age: 33,
    profession: "mern stack developer",
    address : "uganda"
}

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;
type CourseNameType = string;
const courseName : CourseNameType = "Next level course"

type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    // operation : (x: number , y: number) => number  //(x, y) => x - y  => (10,20)=> 10 - 20
    operation : OperationType //(x, y) => x - y  => (10,20)=> 10 - 20
) => {
    return operation(number1, number2)
}
calculate( 10,20, (x,y)=> x + y);
calculate( 10,20, (x,y)=> x - y);
calculate( 10,20, (x,y)=> x * y);



// -======= practicing : ============

// const calculating = (a: number, b: number ) => 
// const calculator = {
//     add: function(num1, num2, callback) {
//       const sum = num1 + num2;
//       callback(sum);
//     },
  
//     multiply: function(num1, num2, callback) {
//       const product = num1 * num2;
//       callback(product);
//     }
//   };
  
//   function printResult(result) {
//     console.log("The result is:", result);
//   }
  
//   calculator.add(2, 3, printResult); // Output: The result is: 5
//   calculator.multiply(2, 3, printResult); // Output: The result is: 6
//   In this example, calculator is an object that has two methods: add and multiply. Both methods take two numbers and a callback function as parameters. The methods perform their respective operations and pass the result to the callback function.
  
//   printResult is a callback function that simply logs the result to the console.
  
//   When calculator.add is called with the arguments 2, 3, and printResult, it adds the two numbers and passes the sum (5) to the printResult function. The printResult function then logs "The result is: 5" to the console.
  
//   Similarly, when calculator.multiply is called with the arguments 2, 3, and printResult, it multiplies the two numbers and passes the product (6) to the printResult function. The printResult function then logs "The result is: 6" to the console.
  
  
  const calculator4= {
    add : (a: number, b: number, callback: any) : void => {
        const result = a+b;
        callback(result);
    }
  }
// const add = (a: number, b: number) : void => {
//     const result = a+b;
//     callback(result);
// }
  function printFun (result: number) { 
    console.log("result", result);
  }
  calculator4.add(3,3,printFun)


  const multiplying = (
    a : number,
    b: number,
    mul: (a: number, b: number) => number
  ) => {return mul(a ,b)}
  let result = multiplying(3,3, (x, y)=> x * y)
  console.log("mul result", result);


  const addition = (a: number, b: number, add: (x:number ,y:number)=>number ) => {return add (a, b)}
  const resultAdd = addition(4,4, (d, e)=> d + e)
  console.log("resultAdd", resultAdd);