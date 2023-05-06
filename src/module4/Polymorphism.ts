class Person {
    takeNap(){
        console.log("I am sleeping 8 hurs per day");
    }
}

class Student1 extends Person{
    takeNap(): void{  //take Name Person a ekrokom rup abair aikhane arekrokom rup dekhace jaite console a dekhte pacci
        console.log(`I am sleeping 10 hours per day`);
    }
}
class Developer extends Person{
    takeNap(): void{
        console.log(`I am sleeping 5 hours per day`);
    }
}

function getNap(param: Person){
    param.takeNap()
}

const person1 = new Person()
const person2 = new Student1()
const person3 = new Developer()

getNap(person1)
getNap(person2)
getNap(person3)

class Shape{
    getArea(): number{
        return 0;
    }
}
// == area => pi *r*r
class Circle extends Shape{
    radius: number;
   constructor(radius: number){
    super() //parent class a constructor nai tai super a kicu lagbe nah
    this.radius = radius;
   }
   getArea(): number{
    return Math.PI * this.radius * this.radius;
   }
}

class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number{
        return this.width * this.height;
       }
}


function getAreaOfShape(param: Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 10))


// NoteA: different different class er same property and object ace but return kortece difference value ba rup aitai polymorphism