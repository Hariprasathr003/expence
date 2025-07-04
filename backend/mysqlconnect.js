const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("mysql connect");
});

module.exports = db;
