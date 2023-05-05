// a type is dependent on another type

type a1 = string;
type a3 = a1 extends string ? string : null; //jodi a1 string hoy tahole a2 o string hobe otherwise null
type a4 = number

type a2 = a1 extends string ? string : null

//nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never; //a1 extends null ? null : never ==> aitar mane holo a1 jodi null hoy tahole a1 er type null jeno hoy otherwise never


// ==check korbe ei sheikh type a wife1 ace kina ? true : false
type Sheikh = {
    wife1: string;
    wife2: string;
}
type CheckProperty<T> = T extends {wife1:string} ? true : false;
type CheckWife1 = CheckProperty<Sheikh>