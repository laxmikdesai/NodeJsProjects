const http=require("http");
var d=`<table border="1px"><thead><tr><td>name</td><td>Email</td></tr>
<td>laxmi</td>
<td>laxmi@gmail.com</td></table>`;
http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-type':'text/html'});
// res.write("<input type='text'>");
res.write(d);
res.end();
}).listen(5601);