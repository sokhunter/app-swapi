const mysql = require('mysql');
const config = require('../../config');

// MySQL connection
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
});

// Check connection
connection.connect(error => {
    if (error) {
        throw error;
    }
    console.log('Connection established');
})