// 'use strict';

// import { readdirSync } from 'fs';
// import { basename as _basename, join } from 'path';
// import Sequelize, { DataTypes } from 'sequelize';
// import { env as _env } from 'process';
// import { DB_DEV, DB_HOST, ENVIROMENT } from '../../config/enviroment';
// const basename = _basename(__filename);
// const env = _env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize
// if (ENVIROMENT == "desarrollo") {
//   sequelize = new Sequelize(DB_DEV)
// }else{
//   sequelize = new Sequelize(DB_HOST, {
//     //dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         // rejectUnauthorized: false, // Ajusta esto según tus requisitos de seguridad
//       },
//     },
//   });
// }



// readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(join(__dirname, file))(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
import Sequelize from "sequelize";
import { DB_DEV, ENVIROMENT } from "../../config/enviroment";

let sequelize;

if (ENVIROMENT == "desarrollo") {
   sequelize = new Sequelize(DB_DEV);
}
else{
  sequelize = new Sequelize(DB_HOST, {
        //dialect: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
            // rejectUnauthorized: false, // Ajusta esto según tus requisitos de seguridad
          },
        },
      });
}

export default sequelize