const mysql = require('mysql');

// Create a connection to your MySQL database (replace with your own database configuration)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'your_db_name',
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Execute your SQL queries here
const sqlQuery = 'SELECT * FROM user';
connection.query(sqlQuery, (err, results) => {
    if (err) {
        console.error('Error executing SQL query:', err);
        return;
    }
    console.log('Query Results:', results);
});

// Close the database connection when done
connection.end((err) => {
    if (err) {
        console.error('Error closing the database connection:', err);
        return;
    }
    console.log('Database connection closed');
});
