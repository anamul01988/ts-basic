const makePromise=(): Promise<string>=>{//string type promise return kortece explicitly bole dilam
   return new Promise<string>((resoleve, reject)=>{
        const data : string = 'data is fetched';
        if(data){
            resoleve(data);
        }else{
            reject("failed to fethced data")
        }
    })
}
const makePromiseBoolean=(): Promise<boolean>=>{//string type promise return kortece explicitly bole dilam
   return new Promise<boolean>((resoleve, reject)=>{
        const data : boolean = true;
        if(data){
            resoleve(data);
        }else{
            reject("failed to fethced data")
        }
    })
}


type DataTypeObjet = {
    data: string
}
const makePromiseObject=(): Promise<DataTypeObjet>=>{//string type promise return kortece explicitly bole dilam
   return new Promise<DataTypeObjet>((resoleve, reject)=>{
        const data : DataTypeObjet = {data: "ddd"};
        if(data){
            resoleve(data);
        }else{
            reject("failed to fethced object")
        }
    })
}
// const 
// const getPromiseResult = async(): Promise<void> =>{
const getPromiseResult = async(): Promise<string> =>{
   const data = await makePromise()
   console.log(data);//return na korle void use korte pari
   return data;
}
const getPromiseBoolean = async(): Promise<boolean> =>{
   const data = await makePromiseBoolean()
   console.log(data);//return na korle void use korte pari
   return data;
}
const getPromiseObject = async(): Promise<object> =>{
   const data = await makePromiseObject()
   console.log(data);//return na korle void use korte pari
   return data;
}

//Promise<string> Promise<boolean> Promise<number> Promise<object>


interface ITodo {
    userId: number;
    id: number;
   title: string;
   completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}
const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodo()
getTodoData()