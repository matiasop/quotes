<script lang="ts">
  export let allBooks;
  export let filteredBooks;
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
      regularize(book.title).includes(regularizedSearchTerm) ||
      regularize(book.author).includes(regularizedSearchTerm)
    );
  });
</script>

<input type="text" placeholder="search" bind:value={searchTerm} />
