class BankAccount{
   public id: number;
   public name: string;
//    private _balance: number;  //by convention private use korle _ use korbo
   protected _balance: number;  //by convention private use korle _ use korbo
    
    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(){
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount: number){
        this._balance = this._balance + amount;
    }
}


class StudentAccount extends BankAccount{
    test(){
        this._balance //ok for protected but not visible for private
    }
}


const myAccount = new BankAccount(33, "dfad", 20)
// myAccount.balance = 0  // 0 hoye gelo jeita prb tai private use korbo class a
console.log(myAccount);