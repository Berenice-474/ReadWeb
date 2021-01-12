const { Sequelize } = require('sequelize'); 

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


  const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/final`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );   


  const db = {}; 


  db.Sequelize = Sequelize; // modulo sequelize
  db.sequelize = sequelize   
  db.user = require('./user.js') (sequelize,Sequelize)
  db.baul = require('./baul.js') (sequelize,Sequelize)  
  db.book = require('./Book.js') (sequelize,Sequelize)  



  module.exports = db;   