<template>
  <div id="book-form">
    <form @submit.prevent="handleSubmit">
      <!-- book's title -->
      <label>Book's Title</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidTitle }"
        v-model="book.title"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <!-- book's author -->
      <label>Book's Author</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidAuthor }"
        v-model="book.author"
        @focus="clearStatus"
      >
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
        </p>
      <p v-if="success" class="success-message">
        ✅ New book successfully added!
      </p>
      <button>Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'book-form',
  data() {
    return {
      // status
      error: false,
      submitting: false,
      success: false,
      book: {
        title: '',
        author: '',
      },
    };
  },
  // run automatically
  computed: {
    invalidTitle() {
      return this.book.title === '';
    },
    invalidAuthor() {
      return this.book.author === '';
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;
      if (this.invalidTitle || this.invalidAuthor) {
        this.error = true;
        return;
      }
      this.$emit('add:book', this.book);
      this.$refs.first.focus();
      this.book = {
        title: '',
        author: '',
      };
      this.success = true;
      this.error = false;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
  [class*="-message"] {
    font-weight: 500;
  }
  .error-message {
    color: #d33c40;
  }
  .success-message {
    color: #32a95d;
  }
</style>
