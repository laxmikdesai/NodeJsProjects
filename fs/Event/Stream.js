const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
const rstrem=fs.createReadStream("abc1.txt");
rstrem.on("data",(s)=>{
res.write(s);
res.end();
});
rstrem.on("end",()=>{
    res.end();
})
rstrem.on("error",(err)=>{
    console.log(err)
})
});
server.listen(5000);