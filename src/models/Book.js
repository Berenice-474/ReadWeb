const {DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
        idUser: {
            type: DataTypes.INTEGER,
            /* unique: true, */
            allowNull: false
          },
        idBook:  {
            type: DataTypes.STRING,
            /* unique: true, */
            allowNull: false
        },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image : {
        type: DataTypes.STRING,
        allownull: false
      },
      
      published: {
        type: DataTypes.STRING,
        allowNull: false
      }

    })

 /*     Book.sync({force:true}
  ).then(() =>  {
  console.log('tabla Book creada');
  return true
})     */
    
 
return Book; 
}