'use strict';

const mysql = require('mysql');

// local db connection
var db = {
  host: 'localhost',
  user: 'root',
  password: 'kocengliar',
  database: 'db_library'
};

const connection = mysql.createConnection(db);

connection.connect(function(err) {
  if(err) {
    console.log("Error connecting Database instance due to: ", err);
  } else {
    console.log("Database connection established!");
  }
});

module.exports = connection;