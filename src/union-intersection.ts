// ===== video 8 ======
type NoobDeveloper = {
    name: string;
    
}
type JuniorDeveloper = NoobDeveloper & {
    // name : string;
    expertise : string;
    experience : number;
};

enum Level {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior'
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number;
    level: Level;
}
const newDeveloper : NoobDeveloper | JuniorDeveloper = {
    name: "anam",
    expertise: "javascript",
    experience: 1,
}
const developer : NextLevelDeveloper = {
    name: "next bhai",
    expertise: "Typescript",
    experience: 3,
    leadershipExperience : 1,
    level: Level.junior
}


const check = (id: number | string)=>{
   console.log("your id is", id);
}

check("33")



// practicing : =======
const checked = ( value: string | null) => {
    if(value === null){
        console.log("fucked");
    }else{
        console.log("found");
    }
}
checked("d")

type Nourin ={
    nationality: string;
    age: string;
    name: string;
}
type Anam = {
    name : string;
    age: number;
    degree: string;
    passion?: string;
    like : string;
}
const married : Nourin | Anam = {
    name: "anamul",
    age: 22,
    nationality: "bang",
    degree: "bsc",
    passion: "cricket",
    like : "dfd"
}
console.log("married", married);