function createDate(timeStamps:number):Date;
function createDate(m:number,d:number,y:number):Date;

function createDate(timeStampsm:number,d?:number,y?:number):Date
{
   if(d != undefined && y!=undefined){
    return new Date(timeStampsm,d,y)
   }
   else{
    return new Date(timeStampsm)
   }
}
console.log(createDate(10,25,2023));
console.log(createDate(1698192000000))