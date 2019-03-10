var express = require('express')
 
var app = express();

app.use(express.static('pblic'));

app.listen(process.env.PORT || 8080, () => {console.log('all is good')});
