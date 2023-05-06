//interface

// interface IVehicle{   //obj interface
//     name: string;
//     model: string;
// }
// const vehicle: IVehicle = {
//     name: "Car",
//     model: "200"
// }


// class interface shape
interface IVehicle{
    startEngine(): void;
    stopEngine(): void;
    move(): void;  //move jehut dici tai kew implement korle must oikhane thaka lagbe tobe option use korte pari
    // move?(): void;  //move jehut dici tai kew implement korle must oikhane thaka lagbe tobe option use korte pari
}

class Vehicle implements IVehicle{  

    constructor( 
        public name: string,
        public brand: string,
        public model : number
        ) {
       
    }


    startEngine(): void {
        console.log("I am starting engine ...-");
    }
    stopEngine(): void {
        console.log("i am stopping engine");
    }
    move(): void {
        console.log(" i am testing for purpose");
    }
    test(){
        console.log("I am for testing purpose");
    }
}

const vehicle = new Vehicle("car", "Toyota", 2000)

// absctract class

//abstract use korle class follow korte parbo tobe instance korte parbo nah jemon new diye instance korata

abstract class Vehicle1 {  

    constructor( 
        public name: string,
        public brand: string,
        public model : number
        ) {
       
    }


    abstract startEngine(): void 
    abstract stopEngine(): void  //shape ta bujhte parteci details bujhte parteci nah
    move(): void {   //aita default thakbe jeikhane extends kora hobe ..fole dile o pai na dile o pari
        console.log(" i am testing for purpose");
    }
    test(){
        console.log("I am for testing purpose");
    }
}

class Car1 extends Vehicle1{
    startEngine(): void {
        console.log("i am starting engine");
    }
    stopEngine(): void {
        console.log("I am stopping engine");
    }
    //move use na koreo shundor choltece
}
// const cart2 = new Vehicle1("Bus" , 'fdfd', 200)  //err causers instance create kora possible na abstract use korle