const mysql = require('mysql');

// Function to create a new MySQL connection
function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatbot'
  });
}

// Function to execute a query against the MySQL database
async function executeQuery(query, params) {
  let connection = createConnection();

  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        connection.end(); 
        return reject(err); 
      }

      // Execute the query
      connection.query(query, params, (err, results) => {
        connection.end(); 

        if (err) {
          return reject(err); 
        }

        resolve(results); 
      });
    });
  });
}


module.exports = {
  executeQuery,
};
