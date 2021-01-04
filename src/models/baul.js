const { DataTypes} = require('sequelize');




module.exports = (sequelize, Sequelize) => {
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
  },
  libros: {
    type: DataTypes.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('libros'));
    },
    set: function(val) {
      return this.setDataValue('libros', JSON.stringify(val))
    }
  }

})

/*  Baul.sync({force:true}
  ).then(() =>  {
  console.log('tabla Baul creada');
  return true
})  */  


return Baul;
}

