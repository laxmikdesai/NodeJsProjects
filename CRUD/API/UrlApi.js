const fs=require("fs");
const http=require('http');
http.createServer((req,res)=>{
    if(req.url=="/")
    {
         res.end("this is home page");
        fs.writeFileSync("abc.txt","Welcome to abc.txt file")
    }
    else if(req.url=="/abautUs")
    {
        res.end("this is abautus page");
       const x= fs.readFileSync("abc.txt","utf-8");
       console.log(x);
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end("<h1 style='color:red'>404 file not found</h1>");
        fs.unlinkSync("abc.txt");
    }
}).listen(5002);