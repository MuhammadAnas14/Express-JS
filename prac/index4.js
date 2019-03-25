const express = require('express');
const app = express();
const members= require('./members');





app.get('/',(req,res)=>{
  res.send('WELCOME')
})
app.get('/members',(req,res)=>{
  res.json(members);

});

app.get('/members/:id',(req,res)=>{
  // res.json(members.filter(member => member.id === parseInt(req.params.id)));
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));

  }
  else{
    res.status(400).json({msg: 'memvber mnot fpound'});  }
})

app.listen(8000,()=>{
  console.log('continue')
});
