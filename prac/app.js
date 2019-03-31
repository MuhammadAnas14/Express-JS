const express = require('express');
const path= require('path');
const app = express();

const members=[
  {
    id:1,
    name:'john doe',
    email:'john@gmail.com',
    status:'single'
  },
  {
    id:2,
    name:'smith white',
    email:'smith22@gamil.com',
    status:'married',
  }
];

app.get('/',(req,res)=>{
  res.json(members)
});

app.get('/:id',(req,res)=>{
  const found= members.some(members => members.id === parseInt(req.params.id));

  if(found){
    res.json(members.filter(members => members.id ===parseInt(req.params.id)));
  }
  else{
    res.status(400).json({ msg:'no member found of this id'});
  }
});

app.post('/posting',(req,res)=>{
  const newEntry ={
    id : members.lenght +1,
    name : req.body.name,
    email: req.body.email,
    status: 'jhund'

  }
  if(!newEntry.name || !newEntry.email){
    return res.status(400).json({msg :'enter the email and name of the memnber'})
  }

  members.push(newEntry);
  res.json(members);


});

app.listen(8000,()=>{
  console.log('on scen hai');
});