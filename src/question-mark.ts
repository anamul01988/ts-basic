const age : number = 20;
if(age >=18){
    console.log(("yes"));
}else{
    console.log("no");
}

const isAdult = age > 222 ? "yes" : "no" ;
console.log(isAdult);

//Nullish Coalesnace operator
//Null and undefined
const isAuthenticated = "";
const userName = isAuthenticated ?? "Gurest";
const userName2 = isAuthenticated ? isAuthenticated : "Guest";
console.log("userName", {userName});
console.log("userName2", {userName2});
// output: 
// userName { userName: '' }
// userName2 { userName2: 'Guest' }

type Manush = {
    name: string;
    age: number;
    address: {
        city : 'No city';
        road : "No road";
        home? :"";
    }
}
const Manush1: Manush={
    name: "manush",
    age: 100,
    address: {
        city: "No city",
        road: "No road"
    }
}
const test =  Manush1?.address?.home
console.log("test", test);
const home = Manush1?.address?.home ?? "no home"; //default 'no home' jehutu null ba undefined nai
console.log({home});