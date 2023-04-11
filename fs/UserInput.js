const fs=require("fs");
const input=process.argv;

console.log(input);
if(input[2]=="add")
{
    console.log(Number(input[3]+input[4]));    
}
else if(input[2]=="table")
{
    let i;
    for(i=1;i<=10;i++)
    {
        console.log(input[6]*i);
    }
}
else{
    console.log("Invalid input");
}