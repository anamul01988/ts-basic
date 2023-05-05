//keyof er maddhome ager typeAlis ba interface theke propery niye aisha use korte pari

type PersonType = {
    name: string;
    age: number;
    address: string;
}

type NewType = 'name' | 'age' | 'address';  //manually korci

type newTypeUsingKeyOf = keyof PersonType;
const a: NewType = 'address';
const b: newTypeUsingKeyOf= 'name';



function getProperty<X,Y extends keyof X>(obj: X, key: Y){
   obj[key]
}
const property = getProperty({name:"anam", age: 100}, "age")

// const e = {
//     name:"dfd",
//     age: : 400
// }
// ({name:"mr-x", age: 100}, 'name') //100

// ###### condition er upor base ekta type er upor arekta type dependent korte pari jemon: 
type e = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;



                            //   'wife1' extends 'wife1' | 'wife2'  =? wife1 jehetu ace tai true return korbe
 type CheckPropertyMulti<T,K> = K extends keyof Sheikh ? true : false;
type CheckWife2 = CheckPropertyMulti<Sheikh, "wife1">; //true
type CheckWife3 = CheckPropertyMulti<Sheikh, "wife2">; //true
type CheckWife4 = CheckPropertyMulti<Sheikh, "girlfriend">; //false



//==== new 1
type Bandhubi = "Monika" | "Rachel" | "dfd"  //cut off korar way ==> never korar fole | "Rachel" remove hoye jabe
// type RemoveBandhubi<T,K> = T extends 'Rachel' ? never : T  //op1
type RemoveBandhubi<T,K> = T extends K ? never : T //op2 dynamically
// type CurrentBandhubi = RemoveBandhubi<Bandhubi>
type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Monika'>