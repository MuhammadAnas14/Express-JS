const express = require('express');
const app = express();
const members= require('./members');


const logger = (req,res,next)=>{
    console.log('hello');
    next();

}

app.use(logger);


app.get('/',(req,res)=>{
    res.send('WELCOME')
})
app.get('/members',(req,res)=>{
    res.json(members);

});


app.listen(5000,()=>{
    console.log('continue')
});



 