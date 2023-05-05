//generic type and interface used and we can use as much as possible
// default type declare kora o dekhlam
//generic interface er moddhe multiple generic type use kora dekhlam

interface RelationWithSalaryInterface  {
    name: string;
    salary: number
}
const relationWithSalary3: GenericTuple<RelationWithSalaryInterface, string>=[ 
    {
    name: "anma",
    salary: 233433,
},
"anmaul haque"
]


// ===
interface CrushInterface<T, U = null>{
    name: string;
    husband: T;
    wife?: U;
}
const crushIn:  CrushInterface<boolean, string> = {name: "anam", husband: true, wife: "Nourin"} ;
const crushIn1:  CrushInterface<string> = {name: "anam", husband: "Anamul"} ;
const crushIn2:  CrushInterface<object> = {name: "anam", husband: {names: "test0", age: 33}} ; //not best practice
const crushIn3:  CrushInterface<{names:string, age:number}> = {name: "anam", husband: {names: "test0", age: 33}} ; // best practice
const crushIn5: CrushInterface<object, object> = { //not best practice cause object
    name:"dfdf",
    husband: {
        name:"dfdf",
        age: 333
    },
    wife:{
        naem: "dfdf",
        age: 40
    }
}
const crushIn6: CrushInterface<{name: string, age: number}, {name: string, age: number}> = { // best practice cause without object
    name:"dfdf",
    husband: {
        name:"dfdf",
        age: 333
    },
    wife:{
        name: "dfdf",
        age: 40
    }
}

interface PersonInterface{
    name: string, age: number
}
const crushIn7: CrushInterface<PersonInterface, PersonInterface> = { // best practice cause without object & Interface 
    name:"dfdf",
    husband: {
        name:"dfdf",
        age: 333
    },
    wife:{
        name: "dfdf",
        age: 40
    }
}


interface HusbandInterface {
    names:string, age:number
}
const crushIn4:  CrushInterface<HusbandInterface> = {name: "anam", husband: {names: "test0", age: 33}} ; // best practice with interface frame