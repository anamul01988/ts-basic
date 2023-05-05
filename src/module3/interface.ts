//interface k exted kora jay common gula nite 
//type alis a union and intersaction use hoy

//primitive type er khetre must type alias use hobe,, interface sudhu object er jonno use hoy jeita frame build kore dey
type User = {
    name: string;
    age: number;
};
type extendedUser = User & {
    // name: string;
    // age: number;
    role: string;

}
interface IUser{
    name: string;
    age: number;
}

const userWithTypeAlias: User = {
    name: "anam",
    age: 220,
}
const userWithInterface: IUser = {
    name: "anam",
    age: 220,
}

userWithInterface.age;

interface IExtendedUser extends IUser{
    // name: string;
    // age: number;
    role: string;
}

const userCheckInterface : IExtendedUser = {
    name: "fdfd",
    age: 33,
    role: "uknown"
}

//  ======  ===== === function er khetre o interface use kora jay tobe type Alias tai beshi readable tai type alis use korbo
type addNumbersType = (num1 : number, num2: number) => number;
const addNumbers : addNumbersType = (num1, num2) => num1 + num2;

interface IAddNumbers {
    (num1: number, num2: number): number;
}
const addNumbersInterface : IAddNumbers = (num1, num2) => num1 + num2;

// ==================
type rollNumbersType = number[]
// const rollNumbers : number[] = [1,2,3,4];
const rollNumbers : rollNumbersType = [1,2,3,4];

interface IRollNumbersType{
    [index:number]: number; //index take type ar jei value hold hobe tar type tai 2 ta
}
const rollNumbersInterface : IRollNumbersType = [1,2,3,4]; //index hold kore type tai interface er moddhe index dhore type declare korbo
const rollNumbersInterface1 : IRollNumbersType = [1,"3",3,4]; //wronk cause string dici
