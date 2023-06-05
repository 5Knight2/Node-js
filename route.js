const fs=require('fs');
//const { buffer } = require('stream/consumers');

const request_handler=(req,res)=>{
    let address =req.url;
    let methods=req.method;
    let str;
    str=fs.readFileSync('./message.txt');
 
    if(address=='/' ){
       
       if(methods=='POST'){
          const bodydata=[];
          req.on('data',(partofdata)=>{
             bodydata.push(partofdata);
          });
          req.on('end',()=>{
             let finalbody=Buffer.concat(bodydata).toString();
             finalbody=finalbody.split('=')[1];
             fs.writeFileSync('./message.txt',finalbody);
             res.statusCode=302;
            
 
             res.write('<html><body>');
             res.write('<h1>'+'Chat App' +'</h1>')
             res.write(`<h5>${finalbody}</h5>`)
             
             res.write("<form action='/' method='post'><input type='text' name='message' ><button type=submit>Send</button></form>");
             res.write('<body></html>');
             res.end();
          })
       }else{
          
 res.write('<html><body>');
 res.write('<h1>'+'Chat App' +'</h1>')
 res.write('<h5>'+str +'</h5>')
 
 res.write("<form action='/' method='post'><input type='text' name='message' ><button type=submit>Send</button></form>");
 res.write('<body></html>');
 res.end();
       }
 
     }

 }
 const text='hiii'
 module.exports={
    handler: request_handler,
    text: text
}
