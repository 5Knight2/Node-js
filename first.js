const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('PT')
});

server.listen(4000);