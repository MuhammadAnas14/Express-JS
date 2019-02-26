const express = require("express");

const app = express();

app.get('/',(req,res) => {
res.send('hello')
});
// app.post()
// app.put()
 
app.listen(5050,() => {console.log('prt 3000'); 
});

app.get('/student',(req,res) => {
  var arrstd=['faheem','anas','ali',]
  res.send(arrstd)
})

app.get('/student/:index',(req,res) => {
  var arrstd=['faheem','anas','ali',]
  res.send(arrstd[req.params.index])
})//paramiter

app.get('/student/:?name=fahemm',(req,res) => {
  var arrstd=['faheem','anas','ali',]
  res.send(arrstd[req.params.index])
})