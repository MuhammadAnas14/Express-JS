const express = require('express');
const app = express();
const members= require('./members');
const path= require('path');

app.use('/member',require('./routes/api/member'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3000,()=>{
  console.log('on scen hai');
});
