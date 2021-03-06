const express= require('express');
const router = express.Router();
const members= require('../../membersss');


router.get('/',(req,res)=>{
  res.json(members);

});
router.get('/:id',(req,res)=>{
  // res.json(members.filter(member => member.id === parseInt(req.params.id)));
  const found = members.some(members => members.id === parseInt(req.params.id));

  if(found){
    res.json(members.filter(members => members.id === parseInt(req.params.id)));

  }
  else{
    res.status(400).json({msg: 'memvber mnot fpound'});  }
});

router.post('/', (req, res) => {
  const newMember = {
    id: members.length +1,
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
  // res.redirect('/');
});
//create members
// router.post('/',(req,res)=>{
//   const newMember= {
//     id: members.length +1,
//     name: req.body.name,
//     email: req.body.email,
//     status : 'jhund'
//   }

//   if(!newMember.name || !newMember.email){
//     return res.status(400).json({ msg : 'name aur email enter karo'});

//   }
//   members.push(newMember);
//   res.json(members);

// });


module.exports =router;

