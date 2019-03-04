const express = require('express');
const app= express();

const mongoose =require('mongoose');

app.use(express.json());


mongoose.connect('mongodb://localhost/LocalDB')
.then(console.log('mongoose ios working'))
.catch(err =>{console.log('err')});

require('./models/students');
const student= mongoose.model('students');

app.post('/student',function(request,response){
  const newStudent={
    id: request.body.id,
    name :request.body.name
  }
  new student(newStudent)
  .save()
  .then(s=>{
    response.send('student is add')
  })
  .catch(err => {console.log('err')})
})

app.get('/',function(request,response){
  student.find({})
  .then(s=>{
    response.send(s);
  })
  .catch(()=>{console.log(err)});
})

app.listen(8000,function(){
  console.log('server is running')
});


