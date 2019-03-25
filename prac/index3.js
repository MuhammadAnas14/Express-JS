const express = require('express');
const app = express();
const members= require('./members');
// const moment= require('moment')
const logger = require('./middleware/logger')

// const logger = (req,res,next)=>{
//     console.log(
//       `${req.protocol}://${req.get('host')}${
//         req.originalUrl
//       }: ${moment().format()}`
//     );
//     next()
// };
app.use(logger);


app.get('/',(req,res)=>{
    res.send('WELCOME')
})
app.get('/members',(req,res)=>{
    res.json(members);

});


app.listen(8000,()=>{
    console.log('continue')
});



 