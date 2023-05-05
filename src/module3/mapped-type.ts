// ekta jinish theke arekta jinish a produce kore
const arrayOfNumber = [1,2,3]   //convert into ['1','2','3']

const arrayOfStrings = arrayOfNumber.map((number)=>number.toString());
console.log(arrayOfStrings);


type AreaNumber = {
    height: number;
    width: number;
};

type AreaString = {
    height: string;
    width: string;
}
const rectangleArea: AreaNumber ={
    height: 10,
    width: 12,
}
rectangleArea.width = 10; //width value change korte parlam

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}
const rectangleArea1: AreaReadOnly ={
    height: 10,
    width: 12,
}
rectangleArea1.width = 10; //=>error // readonly dewate change korte parbo nah

// ==
type Volume = {
    height: number;
    width: number;
    depth: number;
}
type Area = {
    [key in keyof Volume]: boolean;  //area er sob property type change korte parteci boolean diye aitai mapped
}
type Area1 = {
    [key in keyof Volume]: Volume[key];  //Volume['height'] => number tai mapperd er fole Area er sob property number type hobe

}
type Area2<T> = {
    readonly [key in keyof T]: T[key]; 

}
const mappedAreaType : Area2<{height: number, width: string}>={height: 10, width: '10'}

type A = AreaNumber['height' ]//look up types]
type B = keyof AreaNumber; //'width' | 'height'
// const obj = {
//     name: 'persian'
// }

// obj['name'] //persian

