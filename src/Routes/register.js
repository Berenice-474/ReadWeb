
const express = require('express');
/* const router = express.Router(); */
const {Router} = require('express');
const router = new Router();
const models = require('../models');
const bcrypt = require("bcrypt");


router.get('/', (req,res) => {
    /* res.send('chao') */
    res.send('alo'); 
})



router.post('/', async (req,res,next) => {

    console.log('hola')
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(password, 10)
    
    
    console.log(req.body)
    

    models.user.findOne({ where : {        
        email : email
    }}).then((user) => {
        if(!user){
            
            console.log('acaaa')
            user.create({
                username: username,
                password: hashedPassword,
                email:email
            }).then(user => {
                Baul.create({
                    idUser : user.idUser,
                    status: 'CREADO'
                })
            })
        } else {
            res.status(404).send({
                result : 'El usuario ya existe!'
            })
        }
    }).then(() => {
        console.log('acaaaa')
        res.send('Usuario Registrado')
    }).catch(err => console.log(err))
    
})

module.exports = router;