<script lang="ts">
  import { Link } from "svelte-navigator";

  import quotesComplete from "../data/quotes_complete.json";
  import booksMetadata from "../data/books_metadata.json";
  import getDataFromJSON from "../utils/getDataFromJSON";

  import type Quote from "../types/Quote";
  import type Metadata from "../types/Metadata";
  import type BookList from "../types/BookList";

  export let bookId: string;
  const quotes: Quote[] = quotesComplete[bookId];
  const books: BookList[] = getDataFromJSON<Metadata>(booksMetadata);
  const book: BookList = books.find((b) => b.title === bookId);
</script>

<h1>{book.data.book_title}</h1>
<p>Pages: {book.data.page_count}</p>
<p>Published Date: {book.data.published_date}</p>
<img src={book.data.thumbnail} alt={book.data.book_title} />

{#each quotes as quote, index}
  <div>
    <Link to="/quote/{book.title}/{index}">
      <p>Quote #{index}</p>
      <p>{quote.date} {quote.time}</p>
      <p>{quote.quote}</p>
    </Link>
  </div>
{/each}
