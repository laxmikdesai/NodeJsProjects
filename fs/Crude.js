const fs=require("fs");
//fs.mkdirSync("demo");
//fs.writeFileSync("abc1.txt","hello....");file created in fs folder
//fs.writeFileSync("demo/abc1.txt","welcome to demo folder");file created in demo folder
//fs.appendFileSync("demo/abc1.txt","Thank you");withaut delete priviouse data it insert new data
const x=fs.readFileSync("demo/abc1.txt","utf-8");
console.log(x);