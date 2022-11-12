const knex = require('knex')({
  client: "mysql",
  connection: {
    host: "5.181.216.69",
    port: "3306",
    user: "u1104016_decorunic_linktree",
    password: "u1104016_decorunic_linktree",
    database: "sembarang5758"
  }
});

export default knex;