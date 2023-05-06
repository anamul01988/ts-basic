// restricted jaygay badha pawa mane type guard
//keyof guard => jeita runtime a kaj kore

//example of keyof guard
type Alpahaneumeric = string | number;

function add(param1: Alpahaneumeric, param2: Alpahaneumeric): Alpahaneumeric{
    if(typeof param1 == 'number' && typeof param2 =='number'){ //condition tai keyof guard
       return param1 + param2
    }else{
        return param1.toString() + param2.toString()
    }
}

add('1','2')
add(1,2)


//  in guard example : 
type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string,
    role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType){
   if('role' in user){
    return  ` I am an admin and my role is ${user.role}`
   }else{
      return ` I am a normal user`
   }
}

const normalUser1 : NormalUserType={name:"mr. Anam"}
const adminlUser1 : AdminUserType={name:"mr. Anam", role:"admin"}

console.log(getUser(normalUser1));
console.log(getUser(adminlUser1));


//instance of guard

class AnimalGuard{
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name,
        this.species = species
    }
    makeSound(){
        console.log("i am making sound");
    }
}

class Dog extends AnimalGuard{
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark(){
        console.log("i am Barking");
    }
 
}
class Cat extends AnimalGuard{
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw(){
        console.log("i am Barking");
    }
}


function isDog(animal: AnimalGuard):animal is Dog{  //type er maddhome kicu check korte hole aivabe korte hobe
    return animal instanceof Dog
}
function isCat(animal: AnimalGuard):animal is Cat{  //type er maddhome kicu check korte hole aivabe korte hobe
    return animal instanceof Cat
}



// function getAnimal(animal: AnimalGuard){  //op1 
//     if(animal instanceof Dog){  //type k guard kore property object gulo k use korte parteci 
//         animal.makeBark() //makeBark object Dog class a ace tai aikhane ashce jeitace instaceof guard kore
//     }else if(animal instanceof Cat){
//        animal.makeMeaw();
//     }else{
//         animal.makeSound()
//     }
// }
function getAnimal(animal: AnimalGuard){  //best practice //op2
    if(isDog(animal)){  
        animal.makeBark() 
    }else if(isCat(animal)){
       animal.makeMeaw();
    }else{
        animal.makeSound()
    }
}
const animal1 = new Dog("German", 'dog')
const animal2 = new Cat('persian', 'cat')