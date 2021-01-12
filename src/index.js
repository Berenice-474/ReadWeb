const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs= require('express-handlebars');
const cors = require('cors');
 const passport = require('passport');  
 const user = require('./models/user');
 const bcrypt = require('bcrypt');
 const LocalStrategy = require('passport-local').Strategy
 const models = require('./models');
 const jwt = require('jsonwebtoken');



require('./Config/database.js');


//middlewares
app.use(morgan('dev')) // me permite ver por consola las peticiones -combined para ver mas detallado
app.use(express.json()); //permite recibir y entende formatos JSON
app.use(express.urlencoded({extended : false})) // para entender datos desde inputs de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



 // settings
app.set('port', process.env.PORT || 3000); //en caso de que nos den algún puerto 


///Routes

app.use('/user', require('./Routes/user'))
app.use('/register' , require('./Routes/register'))



// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port  ${app.get('port')}`)
})



  //Database

  const db = require('./Config/database.js')

  /// test DB -----> aca puedo verificar si mi base de datos esta conectada 

/* 
   db.authenticate()
    .then(() => console.log('Database conected...'))
    .catch(err => console.log('Error' + err)) */
   

  