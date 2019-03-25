const express = require('express');
const app = express();
const members= require('../../members');
const path= require('path');

app.use('/members',require('./routes/api/members'));

app.listen(3000,()=>{
  console.log('on scen hai');
});
