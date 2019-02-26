var express = require('express');
var app = express();
var path =require('path');

app.set('views',path.resolve(__dirname, 'views'));

app.set('view engine','ejs');

app.get('/', function(request,response ){
  response.render('index',{
    massage: 'hey everyone! this is my webpage'
  });
});

app.listen(8080, () => {
  console.log('server is started on port 8080');
})
