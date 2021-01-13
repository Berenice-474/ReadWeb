const express = require('express');
const {Router} = require('express');
const { model } = require('../Config/database');
const router = new Router();
const models = require('../models');
const app = require('../index.js');
const user = require('../models/user');
const baul = require('../models/baul');
const book = require('../models/Book');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const accessTokenSecret = 'youraccesstokensecret';  

// get user list
router.get('/', async (req,res) => {
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
//////////////////////REGISTER
router.post('/', async (req,res) =>  {  
  const {username,password,email} = req.body;  
  const hashedPassword = await bcrypt.hash(password, 10)

 await models.user.create({
  username: username,
  password: hashedPassword,
  email: email,  
  level : 'User'})
 .catch((err) => {
   console.log(err)
 })
   res.json(user); 
});
 
///////////LOGIN
router.post('/login', (req,res)=>{
const {username, password} = req.body;
const User = models.user.findOne({ where : {
  username: username,
}}).then((User) => {    
if(User === null) {
    res.status(400).json({
    message: 'Algo salió mal',
    user : User 
  }) 
} else {
  if(!bcrypt.compareSync(password, User.password)) {
    res.status(400).json({
    message: 'La contraseña es incorrecta' 
  })
  }  
  const payload =({ id: User.idUser})  
  const accessToken = jwt.sign({ payload,
                                 username : User.username,
                                 level: User.level,
                                 expiresIn : '1d'}, 
                                 accessTokenSecret);
  res.status(200).header("auth-token", accessToken).send({"token": accessToken})   
}
})
});


/////////AUTENTICACIÓN
function verifyToken(req, res, next) {
    var token  = req.headers['auth-token'];    
    if (!token)
    return res.status(403).send({ auth: false, message: 'El token no se encuentra.' });    
    jwt.verify(token, accessTokenSecret, function(err, decoded) {   
    if (err)
    return res.status(500).send({ auth: false, message: 'Falla en la autenticación del token.' });     
    req.idUser = decoded.payload.id;    
    next();    
  });
}

//////////LOGOUT

router.post('/logout', (req, res)=> {
    console.log(req.body)
    if(!req.body){
    res.status(404).json({
    message: 'El usuario no se encuentra loggeado'
    }) 
    } else {
    res.send(req.body)
  }
})
  


/////////BAUL
router.post('/baul',  verifyToken, (req, res) => {      
      const id = req.idUser      
      console.log(req.body)
      if(!req.idUser ){
      return res.status(403).send({ auth: false, message: 'No se encuentra el usuario' });
      } else {
      models.book.findOne({ where : {
        idBook : req.body.id
      }}). then((book) => {
        if(!book) {
          models.book.create({
            idBook : req.body.id,
            idUser : id,
            title : req.body.titulo,
            image: req.body.image,
            autor: req.body.autor,
            published: req.body.published             
          }) .then(()=>{ res.status(200)})
             .catch((err)=> {res.status(404)}) 
        } else {
          res.status(404).send({message: 'El libro ya ha sido agregado al baul'})
        }
        })
        }
})


//////Mostrar libros
router.get('/books', verifyToken , (req,res) => {         
    models.book.findAll({ where : {
    idUser : req.idUser}})
   .then(userBook => {     
     console.log(userBook)
    if(!userBook){      
    res.status(404).send({message: 'No se encontrado nada'})
    } else {
    res.json(userBook);
    }})
    })


module.exports = router;