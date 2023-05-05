const rollNumbersArr: number[] = [33,33,4];  //op1
const rollNumbersArr1: Array<number> = [33,33,4]; //op2

const rolStringArr: string[] = ["dd", "dg", "xd"];  //op1
const rolStringArr1: Array<string> = ["dd", "dg", "xd"]; //op2

const rollBooleanArr: boolean[] = [true, false];  //op1
const rollBooleanArr1: Array<boolean> = [true, false]; //op2


const userNameAndId : Array<{name: string; id: number}> = [
    {
    name: "mr",
    id: 3,
   },
    {
    name: "ms",
    id: 3,
   },
]


//array er jonoo barbar code likhte na caile generic use kora jay

type GeenricArrray<T>  = Array<T>;  //T parameter,, mostly developer use this

const rollNumbersGeneArr: GeenricArrray<number>= [33,33,4];
const rollStringGeneArr: GeenricArrray<string>= ["anam","dfdf", "dfdg"];
const rollBooleanGeneArr: GeenricArrray<boolean>= [true, false, true];

const userNameAndIdGeneric : GeenricArrray<{name: string; id: number}> = [  //op1
    {
    name: "mr",
    id: 3,
   },
    {
    name: "ms",
    id: 3,
   },
]

type NameRollType = {name: string; id: number}
const userNameAndIdGeneric1 : GeenricArrray<NameRollType> = [  //op2
    {
    name: "mr",
    id: 3,
   },
    {
    name: "ms",
    id: 3,
   },
]



//tuple ,,, couple hishebe thakbe

type GenericTuple<X,Y> = [X,Y];
const relation: GenericTuple<string, string> = ["dfd","dg"]

const relationWithSalary: GenericTuple<object, string>=[  //object best practice na
    {
    name: "anma",
    salary: 233433
},
"anmaul haque"
]
const relationWithSalary1: GenericTuple<{name: string; salary: number}, string>=[ //best practice
    {
    name: "anma",
    salary: 233433,
},
"anmaul haque"
]



type RelationWithSalary2 = {name: string; salary: number}
const relationWithSalary2: GenericTuple<RelationWithSalary2, string>=[ //best practice
    {
    name: "anma",
    salary: 233433,
},
"anmaul haque"
]