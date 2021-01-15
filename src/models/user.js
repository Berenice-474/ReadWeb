require('dotenv').config();
const { DataTypes } = require('sequelize');

module.exports = (sequelize,Sequelize) => {
const User = sequelize.define('user', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
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

//reiciniar mi tabla
 
/*  User.sync({force:true}
  ).then(() =>  {
console.log('tabla de usuarios creada por favor');
return true
})    */

return User ; 

}