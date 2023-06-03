const http=require('http');

const server=http.createServer((req,res)=>{
   let address =req.url;
   let str='';
   if(address=='/home')str='Welcome home';
   if(address=='/about')str='Welcome to About Us page'
   if(address=='/node')str='Welcome to my Node Js project';

res.write('<html><body>');

res.write('<h1>'+str +'</h1>')
res.write('<body></html>');


});

server.listen(4000);