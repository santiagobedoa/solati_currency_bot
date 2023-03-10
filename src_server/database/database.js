const mysql = require("mysql2");
import config from "../config";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: "solatiuser",
  password: config.password,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
