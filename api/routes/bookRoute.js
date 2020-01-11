'use strict';

module.exports = function(app) {
  // define controllers
  const bookController = require("../controllers/bookController");

  // API
  app.route("/books")
    .get(bookController.listAllBooks)
    .post(bookController.createNewBook);
  app.route("/books/:bookId")
    .get(bookController.readBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook);
}