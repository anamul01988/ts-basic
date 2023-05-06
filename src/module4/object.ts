// class er moddhe function k bole method
// arrow function a this keyword use kora jay nah
//by default public thake class, object
//type declaration, and assign in constructor repeated na korar jonno parameter propterties use korte hoy => public

class Animal {
   public name: string; //by default public thake tai dewa lage nah
   public species: string;
   public sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); //Gernamn shephard says Ghew Ghew
    }
}

const dog = new Animal('German Shepard', "dog", "Ghew Ghew");
const cat = new Animal('Persian', "Cat", "Mew Mew");
dog.makeSound();
cat.makeSound();

// using public parameter properties remove type decleration and assignation

class Animal1 {
    constructor(public name: string, public species: string,  public sound: string){  //public kore dile ar declare kora lage nah upoe
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); 
    }
}

const dog1 = new Animal1('German Shepard', "dog", "Ghew Ghew");
const cat1 = new Animal1('Persian', "Cat", "Mew Mew");
dog1.makeSound();
cat1.makeSound();