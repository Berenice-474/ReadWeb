  require('dotenv').config();
 const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
 const { DataTypes } = require('sequelize');


const { Sequelize } = require('sequelize');
 

// conecto con mi base de datos 
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/final`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

 
/* const models = {
  User: require('../models/user'),
  Baul: require('../models/baul'),
}; */


/* Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
}); 
 */


//////////// MODELOS
 const User = sequelize.define('user', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
      level: {
      type: DataTypes.ENUM,
      values: ['Guest', 'User', 'Admin'],
      defaultValue: 'User'
    }
})



const Baul = sequelize.define('baul', {
  idBaul: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  idUser: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,      
    defaultValue: 'CREADA'
  }
}) 


////////////////////// VERIFICO CREACIÓN DE TABLAS Y REINICIO MI  DB
//{force:true}

 /*  User.sync({force:true}
    ).then(() =>  {
  console.log('tabla de usuarios creada por favor');
  return true
}) 
 

 
 Baul.sync({force:true}
  ).then(() =>  {
  console.log('tabla Baul creada');
  return true
})  
   */

 User.belongsTo(Baul, 
  { through: "User_Baul" }
 )




 /// VERIFICO BASE DE DATOS 
 try {  
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


 






module.exports = sequelize;  