// task1 : 
const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true,  , "2023"];

// task 2: 
// option 1 ====      
type TypeArr = number[]
const arrTest1:TypeArr= [1, 2, 3, 4, 5];
const arrTest2:TypeArr = [2, 4, 6, 8];

const testArr2 = (param1: TypeArr, param2: TypeArr)=>{
    const newArr:number[] = [];
    for(var j=0; j< param1.length; j++){
        for(var i = 0; i < param2.length ; i++){
            if(param1[j] === param2[i] )[
                newArr.push(param1[j])
            ]
        }
    }
    console.log("newArr", newArr);
    return newArr;

}
const numResult : number[] = testArr2(arrTest1, arrTest2)
console.log(" for first one",numResult );



//option 2

const matchResult:number[] = [];
    const result1 = arrTest1.forEach((item: number, i)=>  { //forEach doesn't reutrn 
     
          arrTest2.forEach((tem) => {
            if(tem === item){
                matchResult.push(item);
              }
        
          })
            //  console.log("result for Second one", matchResult);
        return matchResult
        // console.log("result for Second one", matchResult);
    
    
    })

   console.log(" for second", matchResult);



//    task 3 =========

interface Product<T> {
    id: number;
    name: string;
    price: number;
    category: string;
}

const genericArray : Product< { id: number, name: string, price: number, category: string}> = {id: 33, name: "anam", price: 34, category: "dfdf"};

const generFunc:<T>(param: <T>) => <T>[]


