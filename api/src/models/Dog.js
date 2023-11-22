const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,  //algoritmo que ayuda a generar a UUID
      allowNull: false,
    },
    imagen: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    años: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {timestamps: false}, // para que en la tabla no me arroje la columna de createdAT y updatedAT
  //{freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo temperaments,
  // si lo ponemos despues de crear la tabla y sale con la s, entonces me creará otra tabla.
  );
};

