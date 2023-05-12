//pick type

interface Person{
    name: string;
    email: string;
    contactNo: string;
}

// type  ContactNo = Pick<Person, "email">  //person er email type ta niye nilam
type  Contact = Pick<Person,"contactNo"| "email">  //person er email  ar contact no type ta niye nilam


//omit => pick er opposite, kono ekta property ommit korte caile

type Name = Omit<Person, "email">;  //email cara baki gula chole ashlo
type Name1 = Omit<Person, "email" | "contactNo">;  //email cara baki gula chole ashlo

//partial and required

//to make all the properties be optional type
type Optional = Partial<Person> //sob gulo type k option with undefined kore dice

type requiredProps = Required<Person>;  //sop property k require kore dewa holo 

const person14: Readonly <Person> = {  //Readonly
    name: "Persian",
    email: "abs@gmail.com",
    contactNo: "3335"
}

person14.name = 'Forhan';

// type myObj = {
//     a: string,
//     b: string,
//     c: string
// }
//using index signature   
// type myObj = {
// //    [key: string]: string;
// //    [key: 'a'| 'b' | 'c']: string;  //error cause not possible to generik type or literal type
// }


// solution is record type 

//Record ja kina utility
// type myObj = Record<string, string>  //<key, return >
type myObj = Record<'a'| 'b' | 'c' |'d' , string>  //<key, return >

const obj: myObj = {
    a: "1",
    b: '2',
    c: '3',
    d: '4'
}

// note : airokon onek utility type ace ja kaj k onk easy kore dey so follow docs