//beshi je bujhe se assertion// suryly type ta bujhte parle assertion ta use hoy jemon result number tai as number ba string use hoy
let emni : any;
emni = "Next level web developement";
(emni as string).length;  //option 1
<string>emni.length;  //option 2 -> tobe use kora ucit na cause ttsx a kaj korbe nah

function kgToGram(param: string | number): string |number | undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000;
        return `the converted result is : ${value} gram`
    }
    if(typeof param === 'number'){
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number; //amar upor belive kore number type value return korbe that means ts amake beshi blve kore assertion er khetre
const resultToBeString = kgToGram("1000") as string;
const resultToBeString1 = <string>kgToGram("1000"); //alternative of above line
console.log("object",resultToBeNumber);

type CustomErrorType = {
    message: string
}
try{

}catch(err){
    console.log((err as CustomErrorType).message);//must bracket er moddhe lagbe , ts use na korle err.message likhlei hoto
}