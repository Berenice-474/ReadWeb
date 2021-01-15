const express = require('express');
const {Router} = require('express');
const { model } = require('../Config/database');
const router = new Router();
const models = require('../models');
const user = require('../models/user');
const baul = require('../models/baul');
const book = require('../models/Book');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const accessTokenSecret = 'youraccesstokensecret';  

// get user list
router.get('/', async (req,res) => {
  let users = [];
 await models.user.findAll({})
                    .then((resp) => {
                      {users = resp}                      
                      res.status(200).send({users})
                    })
                    .catch((err) => {
                      console.log(err)
                    })                   

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
const verifyToken = (req, res, next) => {
  
  const token = req.headers['auth-token'];
  if (!token) {
      return res.status(401).send({ auth: false, message: 'El token no se encuentra.' });
      } else {   
      jwt.verify(token, accessTokenSecret, (err, decoded) => {
      if (err) {
      return res.status(401).send({ auth: false, message: 'Falla en la autenticación del token.' });
      } else {
      req.idUser = decoded.payload.id;
      next();
      }
    });
  }
};

//////////LOGOUT
router.post('/logout', (req, res)=> {
    console.log(req.body)
    if(!req.body){
    res.status(401).json({
    message: 'El usuario no se encuentra loggeado'
    }) 
    } else {
    res.send(req.body)
  }
}) 
/////////BAUL
 router.post('/baul',  verifyToken, (req, res) => {      
      const id = req.idUser      
            if(!req.idUser ){
      return res.status(403).send({ auth: false, message: 'No se encuentra el usuario' });
      } else {
      models.book.findOne({ where : {
        idBook : req.body.id,
        idUser : id
      }}). then((book) => {
        if(!book) {
          models.book.create({
            idBook : req.body.id,
            idUser : id,
            title : req.body.title,
            image: req.body.image,
            autor: req.body.autor,
            published: req.body.published             
          }) .then((book)=>{ res.status(200).send({message: 'Libro agregado correctamente'})})
              .catch((err)=> {             
              res.status(500).send({message: 'Ha ocurrido algun error'})})  
          }else {
          res.status(404).send({message: 'El libro ya ha sido agregado al baul'})
          }})}}) 
///////////////////
 
//////Mostrar libros
router.get('/books',  verifyToken ,(req,res) => {         
    models.book.findAll({ where : {
    idUser : req.idUser}})
   .then(userBook => {     
     console.log('userbook',userBook)
    if(!userBook){      
    res.status(404).send({message: 'No se ha encontrado nada'})
    } else {
    res.json(userBook);
    }})
    })
/////////

router.get('/match', verifyToken, async (req, res) => {

  console.log('entroamatch')
  try {
    const allBooks = await models.book.findAll({
      where: {
        idUser: req.idUser,
      },
    });
    console.log('allBooks', allBooks)
    const allMatches = await models.book.findAll({
      where: {
        idBook: {[Op.in] : allBooks.map(book => book.idBook)} ,
        idUser: {[Op.not]: req.idUser },
      },
    });
    console.log('allMatches', allMatches)
    const matchesCounter = allMatches.map(match => match.idUser).reduce((counter, match) => {
      if (!counter[match]) {
        counter[match] = 1;
      } else {
        counter[match] += 1;
      }
      return counter;
    }, {});
   /*  console.log('matchesCounter', matchesCounter) */
      const orderedUsers = Object.keys(matchesCounter).sort((u1, u2) => {
      if (matchesCounter[u1] > matchesCounter[u2]) {
        return -1;
      }
      return 1;
    });
    /* console.log('orderedUsers', orderedUsers) */
      const results = orderedUsers.map(user => ({
      user: [user],
      count: matchesCounter[user],
    }));
    console.log('result', results)
    res.status(200).send(results);
  } catch (err) {
    console.log('errordelcatch', err)
    res.status(500).send({ message: "No pudimos encontrarte match :( Reintenta más tarde!" });
  }
});




module.exports = router;