<script lang="ts">
  import type Metadata from "../types/Metadata";
  export let allBooks: Metadata[];
  export let filteredBooks: Metadata[];
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
      regularize(book.book_title).includes(regularizedSearchTerm) ||
      regularize(book.author).includes(regularizedSearchTerm)
    );
  });
</script>

<input type="text" placeholder="search" bind:value={searchTerm} />
