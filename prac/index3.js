const express = require('express');
const app = express();

const members =[
    {
        id:1,
        name:'john doe',
        email:'john@gmail.com',
        status:'single'
    }
];

app.get('/',(req,res)=>{
    res.send('WELCOME')
})
app.get('/members',(req,res)=>{
    res.json(members);

});

app.listen(5000,()=>{
    console.log('continue')
});



 