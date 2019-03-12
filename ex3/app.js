var express = require('express');
var  app = express();

app.get('/', function(request,response){
  response.send('you send get ')
});

app.post('/',function(request,response){
  response.send('you send post ')
});

app.put('/',function(request,response){
  response.send('you send a put ')
});

app.delete('/',function(request,response){
  response.send('you send a delete')
});

app.listen(8080,function(){
  console.log('server is running')
});
