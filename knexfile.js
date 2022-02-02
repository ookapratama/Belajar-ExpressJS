const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "belajar_express",
    },
  },
  migrations: {
    directory: path.join(__dirname, "database/migration"),
  },
};
