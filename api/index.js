//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { sequelize } = require('./src/db.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {    /* force: true => es para que se este actualizando la tabla cuando este actualizando
 la informacion en js. Puede ser alter:true que es para actualizar solo lo que se modifique de la tabla, este mas usado al crear pagina 
 conn.sync => sincronizar todos los modelos definidos en la base de datos*/
  server.listen(3001, async () => {
    await sequelize.sync();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
