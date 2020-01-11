/* eslint-disable import/no-unresolved */
<template>
  <div id="book" class="small-container">
    <h1>Books</h1>
    <book-form @add:book="addBook"/>
    <book-table
      :books="books"
      @delete:book="deleteBook"
      @edit:book="editBook"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BookTable from '@/components/BookTable.vue';
import BookForm from '@/components/BookForm.vue';

export default {
  name: 'book',
  components: {
    BookTable,
    BookForm,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Richard Hendricks',
          author: 'richard@piedpiper.com',
        },
        {
          id: 2,
          title: 'Bertram Gilfoyle',
          author: 'gilfoyle@piedpiper.com',
        },
        {
          id: 3,
          title: 'Dinesh Chugtai',
          author: 'dinesh@piedpiper.com',
        },
      ],
    };
  },
  methods: {
    addBook(book) {
      const lastId = this.books.length > 0 ? this.books[this.books.length - 1].id : 0;
      const id = lastId + 1;
      const newBook = { ...book, id };

      this.books = [...this.books, newBook];
    },
    deleteBook(id) {
      this.books = this.books.filter(book => book.id !== id);
    },
    editBook(id, updatedBook) {
      this.books = this.books.map(book => (book.id === id ? updatedBook : book));
    },
  },
};
</script>

<style>
#book {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
