// const knex = require('knex')({
//   client: process.env.DB_CLIENT,
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
//   }
// });

// export default knex;

const knex = require('knex')({
  client: "mysql",
  connection: {
    host: "5.181.216.69",
    port: "3306",
    user: "u1104016_decorunic_linktree",
    password: "sembarang5758",
    database: "u1104016_decorunic_linktree"
  }
});

export default knex;