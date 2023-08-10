// import { DB_DEV } from "../../config/enviroment.js"

// const { DB_DEV } = require("../../config/enviroment.js")


export default {
  "development": {
    "username": "postgres",
    "password": "admin",
    "database": "portfolio",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

// export default () => {
//   console.log(DB_DEV);
//   if (DB_DEV) {
//     return {
//       "username": "postgres",
//       "password": "admin",
//       "database": "portfolio",
//       "host": "127.0.0.1",
//       "dialect": "postgres"
//     }
//   } else {
//     return {
//       "username": "fl0user",
//       "password": "2MDXaC5pNFrK",
//       "database": "portfolio",
//       "host": "5432",
//       "dialect": "postgres"
//     }  
//   }
  
// }
