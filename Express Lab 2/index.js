const express= require('express');
const app = express();

app.use(express.json());
const student=[
  {id:01,name:'faheem'},
  {id:02,name:'fahemmem'},
  {id:03,name:'anas'}
]

app.get('/',function(request,response){
  response.send(student);

})
app.get('/student/:id',function(request,response){
  const std= student.find(s => s.id === parseInt(request.params.id))
  if (!std){
    response.status(404).send('your id is invalid')
  }
  response.send(std.name)

})

app.post('/students',function(request,response){
  const students ={
    id:student.length+ 1,
    name:request.body.name

  }
  student.push(students);
  response.send(students);
})

app.listen(4000,function(){
  console.log('the server is running')
});