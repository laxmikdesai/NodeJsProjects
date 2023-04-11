const http=require("http");
const fs=require("fs");
const server=http.createServer();
server.on("request",(req,res)=>{
const rstream=fs.createReadStream("abc1.txt");
// rstream.on("data",(s)=>{
// res.write(s);
// res.end();
// });
// rstream.on("end",()=>{
    
//     res.end();
//     });
//     rstream.on("error",(err)=>{
//         console.log(err);
       
//         });
        
rstream.pipe(res);    
}).listen(5003);
