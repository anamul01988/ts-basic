class Counter {
     counter: number;
    constructor(counter: number){
        this.counter = counter;
    }
    increment(): number{
        return this.counter = this.counter + 1
    }
    decrement(): number {
      return(this.counter = this.counter -1)
    }
}
const instance1 = new Counter(0)
const instance2 = new Counter(1)
console.log(instance1.increment());
console.log(instance2.increment());


class Counter1 {
    static counter: number = 0;
    // constructor(counter: number){
    //     this.counter = counter;
    // }
   static increment(): number{
        return Counter1.counter = Counter1.counter + 1
    }
   static decrement(): number {
      return(Counter1.counter = Counter1.counter -1)
    }
}
// const instance4 = new Counter1() //0 => 1 =>aita te age theke value ace tai ar value dewa lagbe nah
// const instance5 = new Counter1() //1=> 2
// console.log(instance4.increment());  //nan ashbe cause alada alada instance er jonno memory alada hoye value different hocce
// console.log(instance5.increment());  //static dewate ar instance diye error ashbe
console.log(Counter1.increment());  //0 => 1  //class k static baniye oi class diye increment korlam jeita valid
console.log(Counter1.increment());  //1 => 2