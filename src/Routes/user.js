const express = require('express');
/* const router = express.Router(); */
const {Router} = require('express');
const { model } = require('../Config/database');
const router = new Router();
const models = require('../models');
const app = require('../index.js');
const user = require('../models/user');
const baul = require('../models/baul');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authenticate } = require('passport');
const bodyParser = require('body-parser');

//probando el modelo


// get user list
router.get('/', async (req,res) => {
  /* res.send('alo') */
  let users = [];
 await models.user.findAll({})
                    .then((resp) => {
                      {users = resp}
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                    res.json(users) 

})

router.get('/add', (req,res) =>  {
  
  const data = {
    username : 'flavia',
    password : '0445',
    email: 'flaviamongelos@gmail.com',
    level: 'User'
  }

  let {username,password,email} = data;  

models.user.create({
  username: username,
  password: password,
  email: email
})

.then( resp  => res.redirect('/'))
.catch(err => console.log(err))

});
 

//////////////////////REGISTER
router.post('/', async (req,res) =>  {

  
  const {username,password,email} = req.body;  
  const hashedPassword = await bcrypt.hash(password, 10)

 let users = [];


 await models.user.create({
  username: username,
  password: hashedPassword,
  email: email,
  level : 'User'})
 .then((resp) =>  {
   users = resp
   models.baul.create({
     idUser : users.idUser,
     status : 'CREADA'
   })
 })
 
 .catch((err) => {
   console.log(err)
 })
 res.json(user);


console.log('hola', req.body)
  

 
});
 
///////////LOGIN

router.post('/login', (req,res)=>{

const accessTokenSecret = 'youraccesstokensecret';  

const {username, password} = req.body;

const User = models.user.findOne({ where : {

  username: username,

}}).then((User) => {

 console.log('esteporfa', User); 

if(User === null) {
    res.status(400).json({
    message: 'Algo salió mal',
    user : User 
  }) 
} else {
  if(!bcrypt.compareSync(password, User.password)) {
    console.log('no coincide')
    res.status(400).json({
    message: 'La contraseña es incorrecta' 
  })
  }
  const payload =({ id: User.idUser})
  console.log(payload)
  const accessToken = jwt.sign({ payload, username : User.username, level: User.level}, accessTokenSecret);
 /*   res.json({
    message: 'Autenticación Correcta',
    accessToken 
  }) */
 
  res.status(200).header("auth-token", accessToken).send({"token": accessToken}) 
  console.log('logueado?', accessToken)
}

})


});


/////////AUTENTICACIÓN


const authenticateJWT = (req,res,next) => {

const authHeader =  req.headers.authorization; 
console.log('autheader??' , authHeader)
console.log('hola')
if(authHeader) {

  console.log('hola2')
  const token = authHeader.split(' ')[1];

  jwt.verify(token, accessTokenSecret, (err, User) => {
    console.log('hola1')
    if(err) {
      return res.sendStatus(403);
    }

    req.user = User;
    next();
  }) ;
} else {
  /* res.sendStatus(401) */
  res.redirect('/')
}

}



router.post('/auth', (req,res) =>{
  const authHeader = req.headers.authorization;
})

/////////BAUL

router.post('/baul', (req, res) => {

/* const level = req.user ; */
console.log(req.body)
const {titulo,image,autor,published} = req.body;




})


module.exports = router;