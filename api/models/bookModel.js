'use strict';

const sql = require('./db.js');

//book object constructor 
var Book = function(book) {
  this.isbn = book.isbn;
  this.title = book.title;
  this.publisher = book.publisher;
  this.cover = null;
  this.is_active = true;
  this.created_at = new Date();
};

Book.getAllBooks = function(result) {
  sql.query("SELECT * FROM `book`", function(err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("books: ", res);
      result(null, res);
    }
  });
};

Book.createBook = function(newBook, result) {
  sql.query("INSERT INTO `book` SET ?", newBook, function(err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Book.getBookById = function(bookId, result) {
  sql.query("SELECT * FROM `book` WHERE `id_book` = ? ", bookId, function(err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Book.updateBookById = function(bookId, book, result) {
  sql.query("UPDATE `book` SET ? WHERE `id_book` = ? ", [book, bookId], function(err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Book.removeBookById = function(bookId, result) {
  sql.query("DELETE FROM `book` WHERE `id_book` = ? ", bookId, function(err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Book;