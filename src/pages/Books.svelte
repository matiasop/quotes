<script lang="ts">
  import { Link } from "svelte-navigator";

  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";

  import SearchBar from "../components/SearchBar.svelte";

  import type Metadata from "../types/Metadata";
  import type BookList from "../types/BookList";

  const books: BookList[] = getDataFromJSON<Metadata>(booksMetadata);
  let filteredBooks: BookList[] = [];
</script>

<h1>Books</h1>
<SearchBar allBooks={books} bind:filteredBooks />

{#each filteredBooks as book}
  <div>
    <Link to="/quotes/{book.title}">
      <p>{book.data.book_title} {book.data.author}</p>
      <img src={book.data.thumbnail} alt={book.data.book_title} />
    </Link>
  </div>
{/each}
