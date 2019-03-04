const express = require('express')
const app = express();

app.use(express.json());

var students = [{ id: 01, name: 'faheem' },
{ id: 02, name: 'ibad' },
{ id: 03, name: 'zain' }];

app.get('/', function (request, response) {
  response.send(students);
});

app.post('/student', function (request, response) {
  const student = {
    id: students.length + 1,
    name:request.body.name

  }
  students.push(student);
  response.send(student);
});

app.put('/student/:id', function (request, response) {
  const student = students.find(s => s.id === parseInt(request.params.id));
  student.name = request.body.name;
  response.send(student);
});

app.delete('/student/:id', function (request, response) {
  const student = students.find(s => s.id === parseInt(request.params.id));
  const index = students.indexOf(student);
  students.splice(index, 1);
  response.send(student);

})

app.listen(5000, function () {
  console.log('the server is running');
});

