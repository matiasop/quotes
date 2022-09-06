<script lang="ts">
  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";

  import SearchBar from "../components/SearchBar.svelte";

  import type Quote from "../types/Quote";
  import type Metadata from "../types/Metadata";

  const quotes: Quote[] = getDataFromJSON<Quote>(quotesComplete);
  const books: Metadata[] = getDataFromJSON<Metadata>(booksMetadata);
  let filteredBooks: Metadata[] = [];
  $: console.log(filteredBooks);
</script>

<h1>Books</h1>
<SearchBar allBooks={books} bind:filteredBooks />

{#each filteredBooks as book}
  <div>
    <p>{book.book_title} {book.author}</p>
    <img src={book.thumbnail} alt={book.book_title} />
  </div>
{/each}
