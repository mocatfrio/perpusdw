<template>
  <div id="book-table">
    <p v-if="books.length < 1" class="empty-table">
      No Books
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="book.id" v-for="book in books">
          <!-- book's title -->
          <td v-if="editing === book.id">
            <input type="text" v-model="book.title">
          </td>
          <td v-else>
            {{ book.title }}
          </td>
          <!-- book's author -->
          <td v-if="editing === book.id">
            <input type="text" v-model="book.author">
          </td>
          <td v-else>
            {{ book.author }}
          </td>
          <!-- actions -->
          <td v-if="editing === book.id">
            <button @click="editBook(book)">Save</button>
            <button class="muted-button" @click="cancelEdit(book)">Cancel</button>
          </td>
          <td v-else>
            <button @click="activateEditMode(book)">Edit</button>
            <button @click="$emit('delete:book', book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'book-table',
  props: {
    books: Array,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    activateEditMode(book) {
      this.cachedBook = Object.assign({}, book);
      this.editing = book.id;
    },
    cancelEdit(book) {
      Object.assign(book, this.cachedBook);
      this.editing = null;
    },
    editBook(book) {
      if (book.title === '' || book.author === '') return;
      this.$emit('edit:book', book.id, book);
      this.editing = null;
    },
  },
};
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
  input {
    margin: 0;
  }
  .empty-table {
    text-align: center;
  }
</style>
