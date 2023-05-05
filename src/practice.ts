// let anam = undefined;
// anam = "anam"
// console.log(anam);

const arr : [number, string] = [33, "anam"];
const arr1 : [number, boolean] = [33, true];
console.log("arr", arr, arr1);
const details = ["anam", "age", 33];// that's called implicit inference


// const user : {
//     names: string,
//     age: number,
//     nationality: string,
// } = {
//     names : "fadn",
//     age : 33,
//     nationality: "bangladeshi"
// }
type UserType = {

       readonly names: string,
        age?: number,
        nationality: string,
    
}
const user : UserType = {
    names : "fadnd",
    // age : 33,
    nationality: "bangladeshi"
}

function add (num1 : number, num2: number): number{
    return num1+num2;
}
add(3,4)

const add1 = (num1 : number, num2: number): number => num1 + num2;
console.log(add1(3,3));



const person : {
    name: string,
    age: number,
    x : number,
    y: number,
    total(params: number): number,
} = {
    name: "anam",
    age: 33,
    x: 3,
    y: 4,
    total(y : number){
        return this.x + y;
    }
}
console.log("params", person);