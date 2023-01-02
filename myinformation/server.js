const express=require('express');
var app=express();

app.get("/",(req,resp)=>{
   // res.sendFile(path.join(__dirname, '../public', 'index1.html'));
 resp.sendFile('public/index.html',{root:__dirname});
})
app.listen(5000);
console.log("server listning at 5000");