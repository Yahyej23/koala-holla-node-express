// Import the required module
const { Pool } = require("pg");

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: "your_username", // Replace 'your_username' with your PostgreSQL username
  host: "localhost", // Replace 'localhost' with your PostgreSQL host
  database: "your_database", // Replace 'your_database' with your PostgreSQL database name
  password: "your_password", // Replace 'your_password' with your PostgreSQL password
  port: 5432, // Replace 5432 with your PostgreSQL port (default is 5432)
});

// Export the pool instance to be used in other files
module.exports = pool;
