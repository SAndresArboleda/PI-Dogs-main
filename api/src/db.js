require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const dogModel = require('./models/Dog')                  //se trae el modelo
const temperamentModel = require('./models/Temperament')  //se trae el modelo


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {    // dogs es el nombre de la base de datos creada en shell
  logging: false, // esto es para que no me este imprimiendo en consola lo que esta ocurriendo en mi base de datos
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

sequelize.authenticate()
.then(() => { console.log('Conexión exitosa 👌');})
.catch((error) => { console.error('🤯 Error al conectar: ', error);});


dogModel(sequelize)               //crea las tablas creadas utilizando los modelos dog
temperamentModel(sequelize)       //crea las tablas creadas utilizando los modelos temperament

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { dog, temperament } = sequelize.models;  //vuelvo a traer los modelos. //Este dog y temperament es el del modelo que esta entre comillas


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
dog.belongsToMany(temperament, {through:"dogtemperament", timestamps: false})  //genero la relacion de los modelos. dogtemperament es una tabla intermediaria aparece en shell
temperament.belongsToMany(dog, {through:"dogtemperament", timestamps: false})  //genero la relacion de los modelos. dogtemperament es una tabla intermediaria aparece en shell


module.exports = {      //vuelvo a exportar los modelos
  ...sequelize.models,  //exporta los modelos dog, temperament y todos los modelos que se creen. O se pueden exportar individual
  sequelize,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
 
};
