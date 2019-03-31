const express = require('express');
const path= require('path');
const app = express();

const members=[
  {
    id: 1,
    name: "john doe",
    email: "john@gmail.com",
    status: "single"
  },
  {
    id: 2,
    name: "smith white",
    email: "smith22@gamil.com",
    status: "married",
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
    id : members.length +1,
    name: "anas",
    email: "fggfgg@gmail.com",
    status: 'jhund'

  }
  if(!newEntry.name || !newEntry.email){
    return res.status(400).json({msg :'enter the email and name of the memnber'})
  }

  members.push(newEntry);
  res.json(members);


});

app.put('/:id',(req, res)=>{
  const found= members.some(members => members.id === parseInt(req.params.id));
  if (found){
    members.forEach(members =>{
      if (members.id === parseInt(req.params.id)){
        members.name = req.body.name;
        members.email = req.body.email ;

        res.json({msg: 'Member Updated', members});

      }
    });

  }else{
    res.status(400).json({msg: 'no member with this id of ${req.params.id}'})
  }

});

app.delete('/:id',(req, res)=>{
  const found= members.find(members => members.id === parseInt(req.params.id));

  if(found){
    // res.send(members.filter(members => members.id ===parseInt(req.params.id)))
    const index = members.indexOf(found);
    members.splice(index,1);
    res.send(members);
  }

  else{
    res.status(404).json({msg:"no member with that id"})
  }
});




app.listen(8080,()=>{
  console.log('on scen hai');
});

