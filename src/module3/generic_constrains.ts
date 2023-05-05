type MendatoryType = {name: string; age: number; salary: number};
interface MendatoryInterface {name: string; age: number; salary: number};
// const addMeInMyCrushMind1 = <T extends MendatoryInterface>(param: T) => {
const addMeInMyCrushMind1 = <T extends MendatoryType>(param: T) => {
    const crush = "Nourin";
    const newData = {...param, crush}  //spread hocce compile time a add hoy..jehetu ts compile hower age kaj kore tai param pacce nah result5. dile
    return newData ;
}
type MyinfoType = { //aigula must kore dite extends use korbo
    name: string,
    age: number;
    salary : number;
    other1 : boolean;
    other2: null;
}
const myInfo1 : MyinfoType= {
    name: "persian",
    age: 100, //age remove korle error dibe orthat force kortece dewar jonno cause upore exteds kora ace age
    salary: 1000,
    other1: false,
    other2: null
}
// const result6 = addMeInMyCrushMind1({altu : "fdfdf"}) //jekono kicu niye nicce jeita problem
const result6 = addMeInMyCrushMind1<MyinfoType>(myInfo1)
result6.name;//<T> use na korle myInfo k pabe nah
result6.crush; 
result6.other1;