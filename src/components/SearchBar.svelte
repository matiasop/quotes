<script lang="ts">
  import type BookList from "../types/BookList";
  export let allBooks: BookList[];
  export let filteredBooks: BookList[];
  let searchTerm: string = "";

  const regularize = (text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  $: filteredBooks = allBooks.filter((book) => {
    const regularizedSearchTerm = regularize(searchTerm);
    return (
      regularize(book.data.book_title).includes(regularizedSearchTerm) ||
      regularize(book.data.author).includes(regularizedSearchTerm)
    );
  });
</script>

<input type="text" placeholder="search" bind:value={searchTerm} />
