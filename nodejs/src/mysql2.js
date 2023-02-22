// get the client
const mysql = require("mysql2/promise");

async function test() {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mm001030",
    database: "companydb",
  });
  const [results] = await connection.query("SELECT * FROM `company`");
  console.log(results);
}

test();
