function add(a:number,b:number):number;
function add(a:number,b:string):string;
function add(a:string,b:string):string;

function add(a:any,b:any):any{
    if(typeof a === "number" && typeof b === "number"){
        return console.log(a+b)
    }
    else if(typeof a === "number" && typeof b === "string"){
        return console.log(a+b)
    }
    else if(typeof a === "string" && typeof b === "string"){
        return console.log(`${a} and ${b}`)
    }
    else{
        console.log("wrong");
    }
}

add(2,3)
add(20 , "JAV HD")
add("JAV","HD")
// add("jav",20) //Error