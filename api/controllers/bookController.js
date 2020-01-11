'use strict';

var Book = require('../models/bookModel.js');

exports.createNewBook = function(req, res) {
  var newBook = new Book(req.body);
  // null validation
  if(!newBook.title || !newBook.isbn || !newBook.publisher) {
    res.status(400).send({
      error: true,
      message: 'Fill data!'
    });
  } else {
    Book.createBook(newBook, function(err, book) {
      if(err)
        res.send(err);
      res.json(book);
    });
  }
};

exports.listAllBooks = function(req, res) {
  Book.getAllBooks(function(err, books) {
    console.log('controller');
    if(err) {
      res.send(err);
    } else {
      console.log('res', books);
      res.json(books);
    }
  });
};

exports.readBook = function(req, res) {
  Book.getBookById(req.params.bookId, function(err, book) {
    if(err) {
      res.send(err);
    } else {
      res.json(book);
    }
  });
};

exports.updateBook = function(req, res) {
  Book.updateBookById(req.params.bookId, new Book(req.body), function(err, book) {
    if(err) {
      res.send(err);
    } else {
      res.json(book);
    }
  });
};

exports.deleteBook = function(req, res) {
  Book.removeBookById(req.params.bookId, function(err, book) {
    if(err) {
      res.send(err);
    } else {
      res.json({
        message: 'Task succesfully deleted!'
      });
    }
  });
};
