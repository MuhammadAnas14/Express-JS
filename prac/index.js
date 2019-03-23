const express = require('express');
const path = require('path');
const app= express();

app.get('/',(req,res) => {
  res.send('<h1>HELLO WORLD!!</H1>')
});

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public','index.html'))
});

app.listen(3000,()=>{
  console.log('server is running');
});


