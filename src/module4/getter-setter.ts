class BankAccount1{
    public id: number;
    public name: string;
    private _balance: number;  //by convention private use korle _ use korbo
    // protected _balance: number;  //by convention private use korle _ use korbo
     
     constructor(id: number, name: string, balance: number){
         this.id = id;
         this.name = name;
         this._balance = balance;
     } 

     getTestBalance(): number{
         return this._balance;
     }
     get Test(): number{
        return this.getTestBalance();
     }
     //getter //getter boshanor first keyword get then name dewa lagbe
     get balance(): number{  
        return this._balance;  //private jehetu tai encaptula kora already
     }

     //setter
     set deposit(amount: number){
        this._balance = this.balance + amount;
     }


     getBalance():number{
       return this._balance
     }
     addDeposit(amount: number){
         this._balance = this._balance + amount;
     }
 }
 
 
 class StudentAccount1 extends BankAccount1{
     test(){
        this.Test  //getter Test er maddhome private thaka balance ta k pacci getTestBalance function er moddhe jeit encaptualtion
     }
 }
 
 
 const myAccount1 = new BankAccount1(33, "dfad", 30)
 // myAccount.balance = 0  // 0 hoye gelo jeita prb tai private use korbo class a
 console.log(myAccount1.getBalance());  
 console.log(myAccount1.balance);   //getter function call na kore private value dekhte pelam

 myAccount1.deposit = 30;
 console.log(myAccount1.balance);  //setter function a sum hoye 60 dekhabe result