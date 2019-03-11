var express = require('express');
var app = express()
 
app.get('/',function(request,responce,next){
  responce.send('hello world!!!')
})
app.listen(3000,function(){

})