const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
   },
   {timestamps: false}, // para que en la tabla no me arroje la columna de createdAT y updatedAT
   {freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo temperaments
   );
}
