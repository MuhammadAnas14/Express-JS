const express = require("express");

const app = express();

app.get('/',function(req,res){
  res.send('hello world!!!!');
});

app.get('/student',function(req,res){
  res.send('on student page');
});


app.listen(5050,function(){
  console.log('server on 5050');
});
