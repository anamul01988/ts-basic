// Arrow function

// const createArray = <T>(param: T) =>{  //implicitly return kortece string array
//     return [param]
// }
// const resultFunc = createArray("bangladesh")
const createArray = (param: string):string[] =>{  //explicitly string array return kortece
    return [param]
}
const resultFunc = createArray("bangladesh")

const createArray1 = <T>(param: T):T[] =>{  //explicitly string array return kortece
    return [param]
}
const resultFunc1 = createArray1<string>("bangladesh")
const resultFunc2 = createArray1<boolean>(true)
const resultFunc3 = createArray1<object>({name: "anma", age: 23});  //not good practice
const resultFunc4 = createArray1<{name: string, age: number}>({name: "anma", age: 23});  // good practice

type NameAge = {name: string;  age: number};
const resultFunc5 = createArray1<NameAge>({name: "anma", age: 23});  // good practice

//tuple with generic arrow function =======
const createTuple = <T, X>(param1: T, param2: X):[T,X] =>{  
    return [param1, param2]
}
const resultTuple = createTuple<boolean, number>(true,33);  // tuple

const createTuppleArr = <X, Y>(param1: X, param2: Y): [X,Y] =>{
    return [param1, param2];
}
const toppleTest = createTuppleArr<boolean, Array<string>>(false, ["usa"])

const toppleTest1 = createTuppleArr<NameAge, Array<string>>({name: "anamul", age: 33}, ["usa"])
const toppleTest2 = createTuppleArr<NameAge, boolean>({name: "anamul", age: 33}, true)

//tuple with generic normal  function =======
function createTuppleNormalArr<X,Y>(param1: X, param2: Y):[X,Y]{
    return [param1, param2]
}
const normalFunc = createTuppleNormalArr<string, number>("anam", 33)

//tuple with generic arrow function for Spread operator =======

//spread operator ======  generic er anohter behaviour
// const crush = "Nourin";
// const myInfo = {
//     name: "persian",
//     age: 100,
//     slary: 1000
// }
// const newData = {...myInfo, crush}

const addMeInMyCrushMind = <T>(param: T) => {
    const crush = "Nourin";
    const newData = {...param, crush}  //spread hocce compile time a add hoy..jehetu ts compile hower age kaj kore tai param pacce nah result5. dile
    return newData ;
}
const myInfo = {
    name: "persian",
    age: 100,
    slary: 1000
}
const result5 = addMeInMyCrushMind(myInfo)
result5.name;//<T> use na korle myInfo k pabe nah
result5.crush; 