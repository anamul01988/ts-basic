// inheritence => baba theke chele te jabe
// common kaj gula k class er moddhe rekhe inherit kore kaj kora jay
class Parent {  //common gula k tule nilam 
    name: string;
    age: number;
    address : string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number):string{
        return `This ${this.name} will sleep for ${hours}`
    }
}

class Student extends Parent {
    //shob property parent theke ashtece
    constructor(name: string, age: number, address: string){
        super(name, age, address)
        
    }
}
const student1 = new Student('Mr.x', 15, 'Bangladesh')
// class Student {
//     name: string;
//     age: number;
//     address : string;
    
//     constructor(name: string, age: number, address: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     makeSleep(hours: number):string{
//         return `This ${this.name} will sleep for ${hours}`
//     }
// }





// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string;  //diff

//     constructor(name: string, age: number, address: string, designation: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation
        
//     }
//     makeSleep(hours: number):string{
//         return `This ${this.name} will sleep for ${hours}`
//     }
//     takeClasses(noOfClass: number): string{  //diff
//         return `This ${this.name} will take ${noOfClass} classes`
//     }
// }

class Teacher extends Parent {
  
    designation: string;  //diff

    constructor(name: string, age: number, address: string, designation: string){
       super(name, age, address)
        this.designation = designation
        
    }
   //makeSleep auto ashce
    takeClasses(noOfClass: number): string{  //diff
        return `This ${this.name} will take ${noOfClass} classes`
    }
}

const teacher1 = new Teacher("Anam", 33, "dfdf", "teacher")